PB100={};ua = [];
ua.conpare = function(Z, q) {
  var A = 0, w, F, la = (Z + "").split("."), R = (q + "").split("."), La = la.length;
  for (w = R.length; "0" === la[La - 1];) {
    --La;
  }
  for (; "0" === R[w - 1];) {
    --w;
  }
  for (F = La < w ? La : w; A < F; ++A) {
    var Va = la[A] - 0, m = R[A] - 0;
    if (Va !== m) {
      return Va > m ? 1 : -1;
    }
  }
  return La > w ? 1 : La === w ? 0 : -1;
};
(function(Z, q, A, w, F, la, R, La) {
  function Va(B, ma, ia) {
    ia = la(B.split(ma)[1]);
    return 0 <= ia ? ia : 0;
  }
  function m(B, ma) {
    return 0 <= B.indexOf(ma);
  }
  function db(B) {
    return m(B, "Linux armv") || m(B, "Linux aarch") || m(B, "Linux i686") || m(B, "Linux x86_64");
  }
  function O(B, ma) {
    for (var ia in ma) {
      if (ia === B) {
        return !0;
      }
    }
  }
  function h(B, ma) {
    var ia = "", Ma = -1, Wa;
    if (B = B.split(ma)[1]) {
      for (; Wa = B.charCodeAt(++Ma);) {
        if (48 <= Wa && 57 >= Wa || 46 === Wa) {
          ia += B.charAt(Ma);
        } else {
          break;
        }
      }
      for (Ma = ia.length; Ma;) {
        if (46 === ia.charCodeAt(--Ma)) {
          ia = ia.substr(0, Ma);
        } else {
          break;
        }
      }
    }
    return ia;
  }
  function sa(B) {
    for (var ma = arguments, ia = 1, Ma = ma[0], Wa; ia < ma.length; ++ia) {
      0 > Fa(Ma, Wa = ma[ia]) && (Ma = Wa);
    }
    return Ma;
  }
  function Ib(B) {
    return B === B + "" ? B : B === B - 0 ? "" + B : B.min && B.max ? B.min + "~" + B.max : B.min ? B.min + "~" : "~" + B.max;
  }
  var Fa = Z.conpare, d = w.userAgent, ba = w.appVersion, lb = la(ba) || 0, P = w.platform, v = A.documentElement, Xa = v && v.style, Ga = A.documentMode, S = F.width;
  F = F.height;
  var ha = q.HTMLAudioElement, Ab = q.performance, qb = q.Int8Array, Ha = q.ontouchstart !== La, Ya = h(ba, "Version/") || h(d, "Version/"), Jb = q.operamini, ya = !Jb && q.opera, Rb = ya && (ya.version && "function" === typeof ya.version ? ya.version() : sa(h(d, "Opera "), Ya, lb)), Kb = q.opr, rb = !ya && (A.all || Ga);
  Ga = rb && (Ga ? Ga : q.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  v = !rb && v.msContentZoomFactor;
  var eb = !v && (q.chrome || q.chromium), ib = !rb && function() {
    for (var B in Xa) {
      if (0 === B.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Bb = m(d, "UCWEB"), Lb = Bb && h(d, " U2/"), sb = Bb && h(d, "; wds "), Za = h(d.split("_").join("."), "; iPh OS "), na = h(d, "; Adr "), fb = m(ba, "YJApp-ANDROID"), Ca = m(P, "Android") || ib && m(ba, "Android") || fb;
  na = h(P, "Android ") || h(ba, "Android ") || h(d, "Android ") || na;
  var Ra = m(P, "Linux"), Cb = "MacIntel" === P && w.standalone !== La, Db = ib && h(d, "Goanna/"), Na = !Db && ib && (h(d, "rv:") || h(d.substr(d.indexOf(") Gecko/") - 11), "; ")), ea = h(d, "Firefox/"), T = h(d, "Opera/"), Eb = q.FNRBrowser, $a = Va(d, "AppleWebKit/"), mb = h(d, "Chrome/"), Pb = h(ba, "Iron/"), Mb = h(d, "OPR/"), tb = h(ba, "KHTML/"), Qb = h(d.toLowerCase(), "iris");
  h(d, "FxiOS/");
  h(d, "CriOS/");
  h(d, "EdgiOS/");
  var ab = h(d, "Silk/"), gb = Va(d, "SamsungBrowser/"), Fb = !gb && function() {
    for (var B = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ma, ia = B.length; ma = B[--ia];) {
      if (m(d, ma)) {
        return 2 > la(Ya) ? Ya : 0.9;
      }
    }
    B = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ia = B.length; ma = B[--ia];) {
      if (m(d, ma)) {
        return Ya;
      }
    }
  }(), ta = eb && 534.3 >= $a, hb = db(P), Ia = hb && !m(d, P) && db(d);
  Ha = Ha && ($a || ib) && Ia || !na && fb;
  fb = !!q.ReactNativeWebView;
  hb = hb && function() {
    for (var B in q) {
      if (0 === B.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Oa = (Ia = q.puffinDevice) && Ia.clientInfo;
  Oa = (Ia = Oa && "iOS" === Oa.os && Oa.osVersion) && Oa.model;
  var Gb = !Ga && A.registerElement, Da = !Ga && A.execCommand, Hb = q.webkitCancelAnimationFrame, ub = Ra && Gb && "11.0.696.34" === mb, vb = q._firefoxTV_playbackStateObserverJava, wb = Va(d, "diordnA ");
  if ("Nitro" === P) {
    var x = 1;
  } else if ("Nintendo DSi" === P) {
    x = 2;
    var u = T;
  } else if ("New Nintendo 3DS" === P || m(d, "iPhone OS 6_0") && 320 === S && 240 === F) {
    x = 4, u = h(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === P) {
    x = 3, u = h(d, "Version/"), $a = 535;
  } else if ("Nintendo Swicth" === P) {
    x = 7, u = h(ba, "NintendoBrowser/");
  } else if (q.wiiu) {
    x = 6;
    u = h(ba, "NintendoBrowser/");
    var Q = 15, X = h(ba, "AppleWebKit/") || (Hb ? 536 : 534);
    u || (u = Hb ? 4 : 2, m(ba, "Macintosh;") || m(ba, "Windows NT") && m(ba, "Touch"));
  } else if (ya && ya.wiiremote) {
    x = 5, u = h(d, "Wii; U; ; ");
  } else if (T = h(d, "PlayStation Vita ")) {
    x = 10, u = T;
  } else if (T = h(d, "(PlayStation Portable); ")) {
    x = 8;
    u = T;
    var Sa = 3.3;
  } else if (T = h(d, "PLAYSTATION 3; ") || h(d, "PLAYSTATION 3 ")) {
    x = 11, u = T, 0 > Fa("4.10", T) && (Q = 26, X = T);
  } else if (m(d, "Xbox One")) {
    x = 15, u = 1;
  } else if (m(d, "Xbox")) {
    x = 14, u = 1;
  } else if (2 === lb && m(d, "Sony/COM2/")) {
    x = 17;
    u = 2;
    Sa = 3.4;
    var nb = !0;
  } else if (0 === P.indexOf("iP") || Za || Ia || Cb) {
    if (Ia) {
      switch(u = Ia, Oa.substr(0, 4)) {
        case "iPho":
          var va = 0;
          h(Oa, va);
          var wa = !0;
          break;
        case "iPad":
          va = 1;
          h(Oa, va);
          var ka = !0;
          break;
        case "iPod":
          va = 2;
          h(Oa, va);
          var jb = !0;
      }
    } else {
      Za ? u = Za : (u = h(ba.split("_").join("."), "OS "), O("isSecureContext", q), O("enableWebGL", q), O("sameOrigin", q));
      if (!u || Eb) {
        u = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : R.isNaN ? 9.2 : q.SharedWorker ? Ab && Ab.now ? 8.0 : 8.4 : Da ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : qb ? 4.3 : ha ? 4.1 : 3.2;
      }
      var Ea = S === 1.5 * F || 1.5 * S === F;
      0 === P.indexOf("iPhone") ? (va = 0, wa = !0) : 0 === P.indexOf("iPad") || Cb ? (va = 1, ka = !0) : 0 === P.indexOf("iPod") && (va = 2, jb = !0);
    }
    Q = !Ia && (w.standalone || (ka || 12 > u) && O("webkitFullscreenEnabled", A) || 11 <= u && 13 > u && w.mediaDevices) ? 16 : 17;
    x = 24;
    X = u;
  } else if (m(d, "Kobo")) {
    x = 18, Q = 21, X = 2.2, Ca = !0;
  } else if (m(d, "EBRD")) {
    x = 19, Q = 21, X = 2.2;
  } else if (T = h(d, "CrOS x86_64 ") || h(d, "CrOS aarch64 ") || h(d, "CrOS i686 ") || h(d, "CrOS armv7l ")) {
    x = 28, u = T;
  } else if (q.onmoztimechange !== La) {
    x = 29, u = 18.1 > Na ? "1.0.1" : 19 > Na ? 1.1 : 27 > Na ? 1.2 : 29 > Na ? 1.3 : 31 > Na ? 1.4 : 33 > Na ? 2.0 : 35 > Na ? 2.1 : 38 > Na ? 2.2 : 45 > Na ? 2.5 : 2.6, m(d, "Mobile") ? wa = !0 : m(d, "Tablet") ? ka = !0 : m(d, "TV");
  } else if (q.palmGetResource) {
    x = 30, u = h(d, "webOS/") || h(d, "WEBOS") || h(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (wa = !0);
  } else if (T = h(d, "Tizen ")) {
    x = 31, u = T, Q = 24, X = gb, wa = !0;
  } else if (T = h(d, "Windows Phone ") || h(ba, "Windows Phone OS ") || sb) {
    x = 23, u = T, wa = !0;
  } else if (v && "ARM" === P) {
    x = 23, u = 10, wa = !0;
  } else if (rb && m(ba, "ZuneWP")) {
    x = 23, u = 11 === Ga ? 8.1 : 10 === Ga ? 8 : 9 === Ga ? 7.5 : 7 === Ga ? 7 : "?", wa = !0;
  } else if (m(d, "FOMA;")) {
    x = 16, wa = !0;
  } else if (m(d, "SoftBank;")) {
    x = 16, wa = !0;
  } else if (m(d, "KFMUWI")) {
    var za = !0;
    u = 6.3;
    var oa = ka = !0;
  } else if (m(d, "KFKAWI")) {
    za = !0, u = 6, oa = ka = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    za = !0, u = 5, oa = ka = !0;
  } else if (m(d, "KFGIWI")) {
    za = !0, u = 5, oa = ka = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    za = !0, u = 5 <= la(na) ? 5 : 4, oa = ka = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    za = !0, u = 3, oa = ka = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    za = !0, u = 2, oa = ka = !0;
  } else if (m(d, "Kindle Fire")) {
    za = !0, u = 1, oa = ka = !0;
  } else if (T = h(d, "Kindle/")) {
    x = 20, u = T, Q = 21, X = 2.2;
  } else if (vb) {
    za = !0, u = na || wb, oa = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    za = !0, u = na, oa = !0;
  } else if (m(d, "MeeGo")) {
    x = 32;
  } else if (m(d, "Maemo")) {
    x = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Qb) {
    x = 22, nb = !0;
  } else if ("WinCE" === P) {
    x = 21, nb = !0;
  } else if (0 === P.indexOf("Win")) {
    x = "Win16" === P ? 35 : "Win32" === P ? 36 : "Win64" === P ? 37 : 0, u = h(d, "Windows NT ") || h(d, "Windows ");
  } else if (0 === P.indexOf("Mac")) {
    x = "Mac68K" === P ? 39 : "MacPowerPC" === P || "MacPPC" === P ? 38 : "MacIntel" === P ? 40 : 0;
    if (T = h(d.split("_").join("."), "Mac OS X ")) {
      u = T;
    }
    var Nb = !0;
  } else if (m(d, "BlackBerry") || m(d, "BB10")) {
    x = 34, u = Ya, wa = !0;
  } else if (m(d, "SunOS") || m(d, "Sun Solaris")) {
    x = 42;
  } else if (m(d, "FreeBSD")) {
    x = 43;
  } else if (m(d, "OpenBSD")) {
    x = 44;
  } else if (m(d, "NetBSD")) {
    x = 45;
  } else if (Ca && ib) {
    m(d, "Android 4.4;") ? Ea = {min:2.3} : 4 <= la(na) ? Ea = na : Ea = {min:2.2}, u = Ea;
  } else if (Ca && ya) {
    na ? Ea = na : Ea = {min:1.6}, u = Ea, m(d, "Tablet") ? ka = !0 : wa = !0;
  } else if (na) {
    u = na, Ca = !0;
  } else if (Ra && Ha || fb || hb) {
    var pa = !0;
    gb ? Ea = {min:4.4} : eb && !ta || Kb || Mb ? Ea = {min:4} : (Ea = na = Xa.touchAction !== La ? {min:5} : Gb ? 4.4 : qb ? w.connection ? q.searchBoxJavaBridge_ || eb ? R.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= $a ? 3 : 533 <= $a ? ha ? 2.3 : 2.2 : 530 <= $a ? 2.0 : 1.5, Fb && (Q = 24, X = Fb));
    u = Ea;
    Ca = !0;
  } else {
    ub ? (u = {min:5}, pa = Ca = !0) : Ra && (m(d, "Ubuntu") ? x = 46 : (T = h(d, "Mint/")) ? (x = 47, u = T) : (T = h(d, "Fedora/")) ? (x = 48, u = T) : x = m(d, "Gentoo") ? 49 : 50);
  }
  za || Ca && pa && ab ? x = 27 : Ca && (x = x || 26);
  Q || (oa = oa || Ca, ya ? (Q = oa || nb || wa || ka ? 9 : 8, X = Rb) : rb ? (Ea = Va(ba, "Trident/") + 4, Q = nb || wa || ka || jb ? 3 : Nb && 5 <= Ga ? 7 : 2, X = Ga) : v ? (Q = 23 === x ? 6 : 5, X = h(ba, "Edge/")) : Db ? (Q = 13, X = Db) : ib ? (Q = oa ? 12 : 11, X = Na || ea) : gb ? (Q = 24, X = gb) : (T = Sa || h(d, "NetFront/")) ? (Q = 18, X = T) : (T = h(d, "iCab")) ? (Q = 19, X = T) : (T = sa(h(d, "Opera Mini/"), h(d, "Opera Mobi/")) || Jb && Ya) ? (Q = 10, X = T, x || (m(d, "iPhone") ? 
  va = 0 : m(d, "iPad") ? va = 1 : m(d, "iPod") && (va = 2), va && (x = 24))) : Bb ? (Q = 25, X = Lb) : tb ? (Q = 14, X = lb) : Ca && ta ? (Q = 21, X = na) : eb || Kb || Mb ? (Q = oa ? 22 : 20, X = mb || Pb) : Ca && Gb ? (Q = 23, X = 5 > la(na) ? na : mb) : Ca && (Ya || pa) ? (Q = 21, X = na) : mb ? (Q = oa ? 22 : 20, X = mb) : $a && (Q = 15, X = $a));
  x && (Z[2] = x, u && (Z[3] = Ib(u)));
  Q && (Z[0] = Q, X && (Z[1] = Ib(X)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var Z = this[this.length - 1];
  --this.length;
  return Z;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Z = arguments, q = 0, A = Z.length, w = this.length; q < A; ++q) {
    this[w + q] = Z[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Z = this[0], q = 1, A = this.length; q < A; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return Z;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Z = arguments, q = Z.length, A = this.length += q - 1, w = A; w >= q; --w) {
    this[w] = this[w - q];
  }
  for (w = 0; w < q; ++w) {
    this[w] = Z[w];
  }
  return A;
});
Array.prototype.splice || (Array.prototype.splice = function(Z, q) {
  var A = arguments, w = A.length - 2 - q, F = this.slice(Z, Z + q), la;
  if (0 < w) {
    var R = this.length - 1;
    for (la = Z + q; R >= la; --R) {
      this[R + w] = this[R];
    }
  } else if (0 > w) {
    R = Z + q;
    for (la = this.length; R < la; ++R) {
      this[R + w] = this[R];
    }
    this.length += w;
  }
  R = 2;
  for (la = A.length; R < la; ++R) {
    this[R - 2 + Z] = A[R];
  }
  return F;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Z, q) {
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
    if (this[w] === Z) {
      return w;
    }
  }
  return -1;
});
(function(Z, q, A, w, F, la, R, La, Va, m, db, O) {
  function h(p) {
    if (q[0] === p) {
      return P === P + "" ? R(P) : P;
    }
  }
  function sa(p) {
    var H = q[3];
    if (q[2] === p) {
      return H === H + "" ? R(H) : H;
    }
  }
  function Ib(p, H, ja) {
    p + "" === p && ("a" === p.charAt(2) && (ja = !0, p = p.substr(0, 2)), p = "CS" === p ? 7.2 > S ? 117 : 9 > v || 9 > S || Xa ? 1 : 132 : parseInt(p, 16));
    ja && (50 === p && (p = 128), 102 < p && 108 > p && (p += 24));
    return (p - 1) * -(6 * (H || 2));
  }
  var Fa = F.body, d = Fa.style, ba, lb, P = q[1], v = h(2) || h(3), Xa = h(7), Ga = h(5) || h(6), S = h(8) || h(9), ha = h(11) || h(12), Ab = ha && 0 <= q.conpare(P, "1.9.1"), qb = h(13), Ha = h(15), Ya = h(16) || h(17), Jb = h(10) || h(25), ya = h(20) || h(22), Rb = ya || h(23) || h(21) || h(24), Kb = ya && R(la.userAgent.split("Edg/")[1]), rb = R(la.appVersion.split("Trident/")[1]) + 4, eb = sa(35) || sa(36) || sa(37), ib = !v && !Xa && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  Bb = (Xa ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > S ? "opr70" : 8 > S ? "opr72" : 9.5 > S ? "opr" + (S | 0) : ha && !Ab ? 1.3 <= ha ? "gck190" : 1 <= ha ? "gck121" : "gck097" : "modern") + ".css";
  sa(1) || sa(2) || sa(3) || sa(4) || sa(8) || sa(9) || sa(10);
  var Lb, sb, Za, na = d.transform !== O ? "transform" : d["-o-transform"] !== O ? "-o-transform" : d["-ms-transform"] !== O ? "-ms-transform" : d.MozTransform !== O ? "-moz-transform" : d["-webkit-transform"] !== O ? "-webkit-transform" : "", fb = [], Ca = [], Ra = [], Cb, Db, Na, ea, T, Eb, $a, mb, Pb, Mb;
  (function() {
    function p() {
      for (var c, g = 0, l = new db() - 0; g < J.length;) {
        l < J[0].t ? ++g : (c = J.splice(g, 1)[0], c.f(c.p));
      }
      b = J.length ? Va(p, k) : 0;
    }
    function H() {
      for (var c, g = 0; g < U.length; ++g) {
        c = U[g], c.f();
      }
    }
    function ja() {
      C && (C = clearInterval(C));
    }
    function fa() {
      b && (b = m(b));
    }
    Eb = function(c) {
      U.length || (C = setInterval(H, D));
      U.push({f:c, v:++N});
      return N;
    };
    $a = function() {
      C && (ja(), C = setInterval(H, D));
    };
    mb = ja;
    var U = [], D = 500, N = 0, C;
    if (5 > v || Xa) {
      A._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    ea = function(c, g, l) {
      J.length || (b = Va(p, k));
      J.push({f:c, p:g, v:++a, t:new db() - 0 + (k < l ? l : k)});
      return a;
    };
    T = function(c) {
      for (var g = J.length, l; l = J[--g];) {
        if (l.v === c) {
          J.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      b && (fa(), b = Va(p, k));
    };
    Mb = fa;
    var J = [], k = 16, a = 0, b;
    if (5 > v || Xa) {
      A._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var tb, Qb, ab, gb, Fb, ta, hb, Ia, Oa, Gb, Da, Hb, ub, vb, wb, x, u, Q, X, Sa, nb;
  (function() {
    function p(a, b, c) {
      var g = ["<", a], l = 1, n, G;
      if (b) {
        for (n in b) {
          var K = b[n];
          if (null != K && "" !== K) {
            if ("style" === n) {
              g[++l] = ' style="';
              for (G in K) {
                for (var V = ++l, aa, Y = [], L = G.split(""), W = L.length; W;) {
                  aa = L[--W], "A" <= aa && "Z" >= aa && (aa = "-" + aa.toLowerCase()), Y[W] = aa;
                }
                g[V] = Y.join("") + ":" + K[G] + ";";
              }
              g[++l] = '"';
            } else {
              "className" === n && (n = "class"), g[++l] = " " + n + '="' + K + '"';
            }
          }
        }
      }
      g[++l] = ">";
      null != c && (C && "font" !== a ? g[++l] = "<FONT>" + c + "</FONT>" : g[++l] = c);
      g[++l] = "</" + a + ">";
      return g.join("");
    }
    function H(a) {
      a = "*" === a && 6 > v ? "*" !== a ? F.all.tags(a.toUpperCase()) : F.all : F.getElementsByTagName(a);
      var b = [], c = 0, g;
      for (g = a.length; c < g; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function ja(a) {
      return C ? a.parentElement : a.parentNode;
    }
    function fa(a, b, c, g, l, n) {
      if (C) {
        var G = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = gb(2 > a ? ab(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(G, p(c, g, l));
        b = gb(b)[K];
        null != l && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (J) {
        b = F.createElement(p(c, g));
      } else {
        b = n ? F.createElementNS("http://www.w3.org/2000/svg", c) : F.createElement(c);
        if (g) {
          for (G in g) {
            if ((c = g[G]) || 0 === c) {
              switch(G) {
                case "class":
                case "className":
                  x(b, c);
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
        k || null != l && U(b, l);
      }
      return b;
    }
    function U(a, b) {
      if (C) {
        return fa(2, a, "font", O, b);
      }
      var c = F.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function D(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function N(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var C = 5 > v;
    ba = H("html")[0];
    lb = H("head")[0];
    tb = H;
    Qb = function(a) {
      var b = [], c = 0, g, l = -1;
      if (9 > v || !F.getElementsByClassName) {
        var n = 6 > v ? F.all : F.getElementsByTagName("*");
      } else {
        var G = !0;
        n = F.getElementsByClassName(a);
      }
      for (g = n.length; c < g; ++c) {
        var K = n[c];
        if (G || (C || 1 === K.nodeType) && N(K, a)) {
          b[++l] = K;
        }
      }
      return b;
    };
    ab = ja;
    gb = function(a) {
      a = C ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Fb = function(a) {
      var b = !(7.03 < S && 7.2 > S) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], g = a.length, l = -1, n; g;) {
        if (n = a[--g], b || 1 === n.nodeType) {
          C && "FONT" === n.tagName || (c[++l] = n);
        }
      }
      return c;
    };
    ta = function(a, b, c, g, l) {
      b = fa(2, a, b, c, g, l);
      C || (a.appendChild(b), k && null != g && U(b, g));
      return b;
    };
    hb = function(a, b, c, g, l) {
      b = fa(0, a, b, c, g, l);
      C || (ja(a).insertBefore(b, a), k && null != g && U(b, g));
      return b;
    };
    Ia = function(a, b, c, g, l) {
      b = fa(1, a, b, c, g, l);
      var n;
      C || ((n = a.nextSibling) ? ab(n).insertBefore(b, n) : ab(a).appendChild(b), k && null != g && U(b, g));
      return b;
    };
    Oa = U;
    Gb = function(a, b) {
      if (C) {
        return fa(0, a, "font", O, b);
      }
      var c = F.createTextNode("" + b);
      ab(a).insertBefore(c, a);
      return c;
    };
    Da = function(a) {
      C ? a.outerHTML = "" : ab(a).removeChild(a);
    };
    var J = 9 > v, k = J;
    Hb = function(a) {
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
    x = D;
    u = N;
    Q = function(a, b) {
      var c;
      if (!N(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        D(a, c + b);
      }
    };
    X = function(a, b) {
      if (N(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        D(a, c.join(" "));
      }
    };
    Sa = function(a, b, c) {
      a.style[b] = c;
    };
    nb = function(a, b) {
      var c = -1, g, l;
      if (5.5 > v) {
        if (b) {
          for (g = b.split(";"); l = g[++c];) {
            var n = l.split(":");
            a.style[n[0]] = l.substr(n[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > S || 1 > ha ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var va, wa, ka, jb, Ea, za, oa, Nb, pa, B;
  (function() {
    function p() {
      return L ? t ? 2 : W ? 3 : 1 : 0;
    }
    function H(e) {
      wa(A, "load", H);
      H = O;
      fa(fb, e, !0);
      ka = fb = O;
    }
    function ja(e, f) {
      za(function() {
        var E = k(e);
        f(E);
        E.addListener(f);
        return !0;
      });
    }
    function fa(e, f, E) {
      for (var r = 0; r < e.length; ++r) {
        !0 === e[r](f) && (e.splice(r, 1), --r);
      }
      E && (e.length = 0);
    }
    function U(e, f, E) {
      c && !b.length && ea(D);
      b.push(e, f, E);
    }
    function D() {
      var e = b, f;
      for (b = []; f = e.shift();) {
        fa(f, e.shift(), e.shift());
      }
    }
    function N(e) {
      var f = e || event;
      e = g[f.type];
      var E = -1, r, y;
      v ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : n && (f.u = f.stopPropagation, f.stopPropagation = function() {
        y = !0;
      });
      for (; r = e[++E];) {
        r.l === this ? (this.g = r.j, this.g(f), this.g = w, this.g = O) : 7.2 > S && this === F && r.l === A && (A.g = r.j, A.g(f), delete A.g);
      }
      if (v) {
        return f.preventDefault = f.stopPropagation = O, f.returnValue;
      }
      n && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (K = !0), y && !K && f.u(), f.u = f.stopPropagation = O);
    }
    function C() {
      var e = 9 === a.offsetWidth;
      Nb !== e && U(Ca, Nb = e);
    }
    function J(e) {
      fb || fa(ca, e);
    }
    var k = A.matchMedia, a, b = [], c;
    fb.push(function() {
      ja = O;
      a = ta(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ka(function() {
        c = !0;
        b.length && ea(D);
      });
    });
    va = function(e, f, E, r) {
      if (G) {
        e.addEventListener(f, E, r ? ib ? r : r.capture : !1);
      } else {
        var y = {l:e, j:E};
        r = g[f];
        var I = "on" + f, Aa, Ja;
        if (r) {
          for (Aa = r.length; Ja = r[--Aa];) {
            if (Ja.l === e && Ja.j === E) {
              return;
            }
          }
          g[f].push(y);
        } else {
          g[f] = r = [y], l || (f = e[I], "function" === typeof f && f !== N && r.unshift({l:e, j:f}));
        }
        l ? e.attachEvent(I, N) : e[I] = N;
      }
    };
    wa = function(e, f, E, r) {
      if (G) {
        e.removeEventListener(f, E, r ? ib ? r : r.capture : !1);
      } else {
        r = g[f];
        f = "on" + f;
        var y, I, Aa;
        if (r) {
          for (y = r.length; I = r[--y];) {
            I.l === e && (I.j === E ? r.splice(y, 1) : Aa = !0);
          }
          Aa || (l ? e.detachEvent(f, N) : (e[f] = w, e[f] = null));
        }
      }
    };
    var g = {}, l = !1, n = 525.13 > Ha, G = !n && !Xa && A.addEventListener, K;
    n && ba.addEventListener("click", function(e) {
      if (K) {
        return K = !1, e.preventDefault(), !1;
      }
    });
    ka = function(e) {
      fb.push(e);
    };
    jb = function(e) {
      V && V.push(e);
    };
    var V = [];
    if (419.3 >= Ha) {
      var aa = function() {
        if (aa) {
          var e = F.readyState;
          "loaded" === e || "complete" === e ? (aa = O, H()) : ea(aa);
        }
      };
      ea(aa);
    } else {
      va(A, "load", H);
    }
    v || 1.8 > ha ? va(A, "unload", function(e) {
      fa(V, e, !0);
    }) : V = O;
    za = function(e) {
      Ca.push(e);
    };
    ka(function() {
      C();
      Eb(C);
    });
    oa = function(e) {
      Ra && Ra.push(e);
    };
    var Y = 60 > ha || qb, L, W, t;
    if (89 <= ha || 89 <= ya || eb && 79 <= Kb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      B = !0, ja("(forced-colors:active)", function(e) {
        L = e.matches;
        pa = p();
        U(Ra, pa);
      });
    } else if (10 <= v || Ga || eb && Kb) {
      B = !0, ja("(-ms-high-contrast:black-on-white)", function(e) {
        L = W = e.matches;
        pa !== p() && (pa = p(), U(Ra, pa));
      }), ja("(-ms-high-contrast:white-on-black)", function(e) {
        L = t = e.matches;
        pa !== p() && (pa = p(), U(Ra, pa));
      }), ja("(-ms-high-contrast:active)", function(e) {
        L = e.matches;
        pa !== p() && (pa = p(), U(Ra, pa));
      });
    } else if (eb && (v || ha && 0 <= q.conpare(P, "1.8.1") || qb)) {
      var z = function() {
        function e(r, y) {
          if (y && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var I = r.split("(")[1].split(",");
          return R(I[0]) + R(I[1]) + R(I[2]);
        }
        var f = F.defaultView;
        var E = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (E && E.color || "").split(" ").join("");
        E = (E && E.backgroundColor || "").split(" ").join("");
        f && (L = "#123456" !== f && "rgb(18,52,86)" !== f, W = e(f) < e(E, !0), t = e(f) > e(E, !0), pa !== p() && (pa = p(), U(Ra, pa, Y)));
      };
      za(function(e) {
        if (e) {
          return Sa(a, "color", "#123456"), Sa(a, "backgroundColor", "#123456"), Y ? (z(), Ra = O) : Eb(z), z = O, !0;
        }
      });
    } else {
      Ra = p = O;
    }
    Ea = function(e) {
      ca.push(e);
    };
    var ca = [], Ka = 0, Ba = 1 > ha || 1.2 <= ha && 1.8 > ha || 7.2 >= S;
    Ba ? Eb(function() {
      var e = A.scrollY || Fa.scrollTop;
      Ka !== e && (Ka = e, J());
    }) : va(A, "scroll", J);
    jb(function() {
      Ba || wa(A, "scroll", J);
    });
  })();
  var ma = 9 > v || 525 <= Ha && 530 > Ha || 2 > ya, ia = 0, Ma, Wa, Sb;
  (function() {
    function p(k) {
      for (var a = fa.length, b; a;) {
        if (b = fa[--a], b.D === k) {
          return b;
        }
      }
    }
    function H() {
      var k = F.styleSheets, a = [], b = 0, c = -1, g;
      if (k) {
        for (g = k.length; b < g; ++b) {
          if (2 > ya || eb && 526 > Ha) {
            var l = ja(k[b]);
            l.parentNode && (a[b] = l);
          } else {
            a[b] = ja(k[b]);
          }
        }
      } else {
        for (k = tb("*"), g = k.length; b < g; ++b) {
          l = k[b];
          var n = Hb(l);
          if ("STYLE" === n || "LINK" === n && "text/css" === ub(l, "type")) {
            a[++c] = l;
          }
        }
      }
      return a;
    }
    function ja(k) {
      return k.owningElement || k.ownerNode;
    }
    Ma = function(k, a) {
      var b = H(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var g = b[c - 1];
      b = b[c];
      if (N || C) {
        var l = b ? hb(b, "style") : g ? Ia(g, "style") : ta(lb, "style");
        C && Oa(l, "");
        var n = l.styleSheet || l.sheet;
        k && vb(l, "media", k);
      } else if (U || D) {
        n = {C:k, B:c, G:!0};
      }
      if (n) {
        return fa.push({D:n, h:l, m:[]}), n;
      }
    };
    Wa = function(k) {
      k = p(k);
      var a = k.m, b = a.length, c;
      for (k.h && Da(k.h); c = a[--b];) {
        c.i && Da(c.i);
      }
      fa.splice(fa.indexOf(k), 1);
    };
    Sb = function(k, a, b, c) {
      var g = p(k), l = g.h;
      g = g.m;
      var n = "@import" === a, G = "@page" === a, K = "@font-face" === a, V = g.length, aa = "", Y;
      if (k.imports) {
        var L = k.imports.length;
      } else {
        for (L = 0; L < V && "@import" === g[L].A; ++L) {
        }
      }
      if (n) {
        c = 0 <= c && c < L ? c : L;
        var W = a + ' "' + b + '"';
      } else {
        c = L <= c && c < V ? c : V;
        for (W in b) {
          aa += ";" + W + ":" + b[W];
        }
        aa = aa.substr(1);
        W = a + "{" + aa + "}";
        6 <= v && K && (c = V);
      }
      V = {A:a, F:b, s:c, o:c};
      if (9 > v) {
        L = k.rules;
        var t = L.length;
        if (K) {
          a = F.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + W + "</style>", a = a.lastChild, (Y = l.nextSibling) ? ab(l).insertBefore(a, Y) : ab(l).appendChild(a), V.i = a;
        } else {
          if (n ? k.addImport(b, c) : 5.5 <= v && G || k.addRule(a, aa, c), V.o = c + (L.length - t - 1), 0 === L.length - t) {
            return -1;
          }
        }
      } else if (N || C) {
        (eb && Ha || 28 > ya) && n ? V.i = Ia(l, "link", {href:b, rel:"stylesheet", type:"text/css"}) : ma && K ? (a = V.i = Ia(l, "style", {type:"text/css", media:k.media}), a.innerText = W) : k.insertRule(W, c);
      }
      g.splice(c, 0, V);
      if (U || D) {
        l = p(k);
        Y = l.m;
        a = l.h;
        b = k.B;
        n = H();
        k = n[b - 1];
        b = n[b];
        n = [];
        K = G = -1;
        aa = "style";
        V = {type:"text/css", media:l.C};
        for (var z; L = Y[++G];) {
          if (W = L.A, L = L.F, "@import" === W) {
            n[++K] = W + ' "' + L + '"';
          } else {
            n[++K] = W + "{";
            W = "";
            for (z in L) {
              W += ";" + z + ":" + L[z];
            }
            n[++K] = W.substr(1) + "}";
          }
        }
        n = n.join("");
        U && (n = "data:text/css;charset=utf-8;base64," + J(n), V.rel = "stylesheet", V.href = n, aa = "link", n = O);
        a ? (l.h = Ia(a, aa, V, n), Da(a)) : (a = b ? hb(b, aa, V, n) : k ? Ia(k, aa, V, n) : ta(lb, aa, V, n), l.h = a);
      }
      z = c;
      k = g.length;
      for (l = z; l < k; ++l) {
        Y = g[l], Y.i || (a = Y.o - Y.s, Y.s = z, Y.o = z + a, z += 1 + a);
      }
      return c;
    };
    var fa = [], U = 1 > ha || 8 <= S && 9 > S, D = 7.2 <= S && 8 > S, N = !!v || !U && !D && function() {
      var k = ta(ba, "style"), a = !(!k.styleSheet && !k.sheet);
      Da(k);
      return a;
    }(), C = !N && Ha && !U && !D && function() {
      var k = ta(ba, "style");
      Oa(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      Da(k);
      return a;
    }();
    ia = U || D ? 1 : N || C ? 2 : 0;
    var J;
    (function(k) {
      function a(c) {
        for (var g = b, l = "", n = 0, G; G = c.length;) {
          4 > G && (n = [0, 2, 1, 0][G]), G = c.charCodeAt(0) << 16 | (1 < G ? c.charCodeAt(1) : 0) << 8 | (2 < G ? c.charCodeAt(2) : 0), l += [g[G >>> 18], g[G >>> 12 & 63], 2 <= n ? "=" : g[G >>> 6 & 63], 1 <= n ? "=" : g[G & 63]].join(""), c = c.substr(3);
        }
        return l;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      k.btoa && (a = k.btoa);
      J = a;
    })(this);
  })();
  (function() {
    function p() {
      if (525 > Ha || ha && !Ab || 2.2 > h(21) || h(25) || 10 > h(3) || sa(32) || sa(30) || sa(1) || sa(2) || sa(3)) {
        return !1;
      }
      if (ma) {
        return !0;
      }
      if (2 === ia) {
        var D = Ma();
        var N = Sb(D, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        N = D.cssText || D.cssRules && D.cssRules[N] && D.cssRules[N].cssText || "";
        N = N.match("src") && N.match("@font-face");
        Wa(D);
      }
      p = O;
      return U = !!N;
    }
    Ca.splice(0, 0, function() {
      if (Nb) {
        Za = 8 <= v || Ga || 9.5 <= S || Ab || qb || 522 <= Ha || 3 <= Ya || Jb || Rb ? 3 : 7.2 <= S ? 2 : 6 <= S || ha ? 1 : 0;
        if (!Za && !v && !Xa) {
          var D = ta(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Za = 6 <= D.offsetWidth ? 2 : 0;
          Da(D);
        }
        return !0;
      }
    });
    Cb = function(D) {
      function N(k) {
        J = T(J);
        H = k;
        C.onload = C.onerror = w;
        ea(D, k);
      }
      if (H !== O) {
        ea(D, H);
      } else if (8 > v) {
        ea(D, !1);
      } else {
        var C = new Image(), J = ea(function() {
          J && N(!1);
        });
        C.onerror = function() {
          N(!1);
        };
        C.onload = function() {
          N(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var H;
    9 > v && ka(function() {
      var D = ta(Fa, "div");
      nb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lb = 1 < D.offsetHeight;
      nb(D, "");
      Da(D);
    });
    Db = function(D, N) {
      function C() {
        if (k || !a || J.complete) {
          var b = !!J.width;
          sb = sb || b;
          ea(D, b);
          J.onerror = J.onload = w;
          J = D = O;
        } else {
          --a, ea(C);
        }
      }
      var J = new Image(), k, a = 99;
      J.onerror = function() {
        k = !0;
      };
      J.onload = function() {
        k = !0;
      };
      J.src = N;
      ea(C);
    };
    var ja = 9 > v || 2 > ya || 12 > S, fa = ["sans-serif", "serif"], U;
    Na = function(D, N, C, J, k, a, b) {
      function c(e) {
        D(e);
        Ba && !e && Wa(Ba);
        D = t = z = ca = Ba = O;
      }
      function g() {
        F.fonts.load('1.6em "' + N + '"').then(function() {
          G(N) ? ea(c, Ka) : n(!0);
        }, function() {
          Cb(K);
        });
      }
      function l(e) {
        return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (L = new db() - 0, !1) : e < new db() - L;
      }
      function n(e) {
        e && (L = new db() - 0);
        G(N) ? c(Ka) : l(Y) ? W ? c(0) : ja ? ea(c, 0) : Cb(K) : ea(n);
      }
      function G(e) {
        var f = 0, E = -1, r = 0;
        if (!ca) {
          var y = -1;
          var I;
          t = ta(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (ca = {}; I = fa[++y];) {
            Sa(t, "fontFamily", I), ca[I] = t.offsetWidth;
          }
        }
        for (5 > v ? t || (t = ta(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Fa.appendChild(t); y = fa[++E];) {
          if (Sa(t, "fontFamily", '"' + e + '",' + y), t.offsetWidth !== ca[y]) {
            f = 1;
            break;
          }
        }
        !v && f && k && (t.innerHTML = k, e = t.offsetWidth, t.innerHTML = a, r = e === t.offsetWidth ? 1 : 0, t.innerHTML = "mmmmmmmmmmlli");
        Da(t);
        5 > v && (t = O);
        return Ka = f + r;
      }
      function K(e) {
        (W = e) ? V(!0) : c(0);
      }
      function V(e) {
        var f;
        e && (L = new db() - 0);
        for (f in C) {
          G(f) ? (z = ta(Fa, "div", {"aria-hidden":"true", className:J, id:J}), Ba = Ma(), Sb(Ba, "@import", C[f]), ea(aa, !0)) : l(100) ? (delete C[f], ea(V, !0)) : ea(V);
          return;
        }
        c(0);
      }
      function aa(e) {
        e && (L = new db() - 0);
        1 < z.offsetWidth ? (Da(z), Y = 100, ea(n, !0)) : l(Y) ? 528 > Ha ? (Da(z), Y = 100, ea(n, !0)) : (Da(z), c(0)) : ea(aa);
      }
      var Y = b || 5000, L, W, t, z, ca, Ka, Ba;
      p || U ? U || p() ? !F.fonts || 603 > Ha ? n(!0) : g() : ea(c, 0) : ea(c, 0);
    };
  })();
  var Pa = String.fromCharCode, xb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Pa(960), ")", "(", Pa(234), Pa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Pa(9824), "\u2190", Pa(9829), Pa(9830), Pa(9827), Pa(956), "\u03a9", "\u2193", "\u2192", "%", Pa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Pa(9619)], Xb = (9 === v || ha && 0 <= q.conpare(P, "1.8.1") || qb) && !B, ob = [], pb, Ua, Ob = 7.2 > S ? function() {
    pb = !pb;
    for (var p = -1, H; H = ob[++p];) {
      -1 !== H.className.indexOf("pbAlp") ? Sa(H, "display", pb ? "" : "none") : (Q(H, pb ? "pbChrCS" : "pbChr00"), X(H, pb ? "pbChr00" : "pbChrCS"));
    }
  } : Xb ? function() {
    pb = !pb;
    for (var p = -1, H; H = ob[++p];) {
      Sa(H, "opacity", pb ? 1 : 0);
    }
  } : O;
  var Tb = Z.startBlinkingIfCursor = function(p) {
    Ob ? u(p, "pbChrCS") && (Ua || !S && !pa || (Ua = setInterval(Ob, 400)), -1 === ob.indexOf(p) && ob.push(p)) : ob = O;
  };
  Z.stopBlinkingIfCursor = function(p) {
    Ob && (p = ob.indexOf(p), 0 <= p && (ob.splice(p, 1), !ob.length && Ua && (clearInterval(Ua), Ua = 0)));
  };
  Xb && oa(function(p) {
    p ? Ua || (Ua = setInterval(Ob, 400)) : Ua && (clearInterval(Ua), Ua = 0);
  });
  Ob && jb(function() {
    Ua && clearInterval(Ua);
  });
  B || oa(function(p) {
    p ? (vb(ba, "forced-colors", 2 === p ? "lod" : 3 === p ? "dol" : "active"), (na || 9 === v || 5.5 <= v && 9 > v && Lb) && Q(ba, "jsCanRotate")) : (wb(ba, "forced-colors"), X(ba, "jsCanRotate"));
  });
  (function() {
    function p(t) {
      (K = t) ? U() : sb ? fa(!0) : sb !== O ? U() : Db(fa, V);
    }
    function H() {
      H = O;
      Na(p, "PB-100", {"PB-100_canTTF":bb + "pbFont/ttf.css", "PB-100_canWOFF":bb + "pbFont/woff.css", "PB-100_canEOT":bb + "pbFont/eot.css", "PB-100_canSVG":bb + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function ja(t) {
      this.focus();
      t.preventDefault();
      t.stopPropagation();
    }
    function fa(t) {
      t && Q(Fa, "pbList-noWebFont");
      U();
    }
    function U() {
      for (p = Na = O; G.length;) {
        D(G.shift(), G.shift());
      }
    }
    function D(t, z) {
      function ca(r) {
        r = gb(r);
        for (var y = -1, I; I = r[++y];) {
          switch(I.nodeType) {
            case 1:
              ca(I);
              break;
            case 3:
              I.data && Ba(I.data) && e.push(I);
          }
        }
      }
      function Ka(r) {
        var y = r.children, I = 0, Aa = y.length;
        if (Aa) {
          for (; I < Aa; ++I) {
            Ka(y[I]);
          }
        } else {
          (y = r.innerText) && Ba(y) && e.push(r);
        }
      }
      function Ba(r) {
        return r.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var e = [], f;
      if (p) {
        -1 === G.indexOf(t) && (G.push(t, z), aa && H && H());
      } else {
        var E = G.indexOf(t);
        0 <= E && G.splice(E, 2);
        for (5 > v ? Ka(t) : ca(t); f = e.shift();) {
          E = 5 > v ? f.innerText : f.data, 2 !== K && (E = E.split(b).join(k)), z ? 5 > v ? f.innerText = E : f.data = E : N(E.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(J).split("&amp;").join("&"), f);
        }
      }
    }
    function N(t, z) {
      function ca(qa, ra) {
        for (var yb = ""; ra;) {
          ra & 1 && (yb += qa), ra >>= 1, qa += qa;
        }
        return yb;
      }
      function Ka(qa, ra, yb) {
        for (var Ub, Zb = -1, Vb, Wb; Ub = ra[++Zb];) {
          for (; 0 <= (Vb = qa.indexOf(Ub));) {
            Wb = Ub.length, qa = qa.substr(0, Vb) + ca(yb, Wb) + qa.substr(Vb + Wb);
          }
        }
        return qa;
      }
      function Ba(qa) {
        var ra = R(qa), yb = "" + ra;
        return 0 < ra && ra === ra | 0 && (ra = qa.indexOf(yb) + yb.length, ra <= qa.length) ? ra : 0;
      }
      var e = " area line str cmd fnc syb".split(" "), f = 5 > v || 1 === z.nodeType, E = [], r = "", y, I = -1, Aa, Ja, cb;
      if (f) {
        if (L) {
          var xa = z.style.visibility;
          Sa(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (W) {
        var Qa = z;
        z = F.createDocumentFragment();
      }
      if (function(qa) {
        var ra = qa.indexOf("P");
        if (-1 === ra) {
          return !1;
        }
        ra = R(qa.charAt(ra + 1));
        return 0 <= ra && 9 >= ra;
      }(t)) {
        r = ca("+", t.length);
      } else {
        0 <= (y = Ba(t)) && (r = ca("|", y), I = y, --I);
        for (; y = t.charAt(++I);) {
          y === J || Aa ? (r += "~", y === J && (Aa = !Aa)) : r += y;
        }
        r = Ka(r, n, "^");
        r = Ka(r, g, "{");
        r = Ka(r, l, "}");
      }
      I = 0;
      for (Aa = t.length; I < Aa; ++I) {
        y = t.charAt(I);
        var M = y === c;
        var Ta = " " === y;
        y = M ? " " : y;
        var da = r.charAt(I);
        var kb = (Ja = zb) && M;
        var zb = "|" === da;
        da = e["+|~{}^".indexOf(da) + 1];
        "\n" !== y ? (K || !sb ? (2 === K && t.substr(I, 2) === b && (y = b, ++I), da = Ta && "str" === da ? "pbList-strsp" : M ? "" : !Ta && da ? "pbList-" + da : "") : (M = xb.indexOf(y), M = -1 === M ? "" : xb.indexOf(y).toString(16).toUpperCase(), M = (M = 1 === M.length ? "0" + M : M) ? "pbChr" + M : "", da = Ta && "str" === da ? "pbList-strsp" : Ta || !M ? "" : da ? (M ? M + " " : "") + "pbList-" + da : M), M = O, kb ? (y = 6 <= v && 8 > v ? " " : c, da = "") : zb && (1.9 > ha || 9.5 > S) ? 
        (zb && !Ja && (cb = 4 - (R(t.substr(I)) + "").length), 7.5 > S ? M = Y ? "position:relative;top:-4px;left:" + 12 * cb + "px" : {position:"relative", top:"-4px", left:12 * cb + "px"} : 1.3 <= ha ? (M = Y ? "position:absolute;left:" + 12 * cb + "px" : {position:"absolute", left:12 * cb + "px"}, ++cb) : M = Y ? "position:relative;left:" + 12 * cb + "px" : {position:"relative", left:12 * cb + "px"}) : Ta && 7.5 > S && (da = "pbList-strsp"), Y ? E.push("<font" + (da ? ' class="' + da + '"' : "") + 
        (M ? ' style="' + M + '"' : "") + ">" + y + "</font>") : f || W ? ta(z, "font", {"class":da, style:M}, y) : hb(z, "font", {"class":da, style:M}, y)) : (Ja = zb = !1, Y ? E.push(y) : f || W ? Oa(z, y) : Gb(z, y));
      }
      if (f) {
        Y ? z.innerHTML = E.join("") : W && Qa.appendChild(z), L && Sa(z, "visibility", xa);
      } else {
        if (Y) {
          e = F.createElement("font");
          for (e.innerHTML = E.join(""); E = e.firstChild;) {
            z.parentNode.insertBefore(E, z);
          }
          Da(z);
        } else {
          W ? Qa.parentNode.replaceChild(z, Qa) : Da(z);
        }
      }
    }
    za(function(t) {
      if (t) {
        t = Qb("pbChrCS");
        for (var z = 0, ca = t.length; z < ca; ++z) {
          Tb(t[z]);
        }
        return !0;
      }
    });
    var C = [];
    za(function(t) {
      function z(xa) {
        var Qa = ub(xa, "pbTip"), M = Qa.charAt(0), Ta = "_" === M;
        Qa = Ta ? Qa.charAt(2) : M;
        M = Ta ? "Btm" : "";
        var da = ub(xa, "title");
        Ba || (wb(xa, "pbTip"), wb(xa, "title"), Q(xa, "pbTipPos" + Qa.toUpperCase()), ta(xa, "div", {className:"pbTip" + M, style:{width:da.length + Ka + "em"}}, da));
        ta(xa, "div", {className:"pbTail" + M});
        e && Ta && (xa.focus(), xa.blur());
      }
      function ca(xa) {
        if (2 > Za) {
          var Qa = ub(xa, "pbGhst"), M = xa.className, Ta = M.split("pbCsr")[1] || "", da = M.split("pbAlp")[1] || "";
          if ("CS" === Qa) {
            var kb = "_";
          } else {
            kb = Qa, 3 === kb.length && (kb = kb.substr(0, 2)), kb = xb[parseInt(kb, 16)] || "~";
          }
          var zb;
          Ta = Ta.split(" ")[0];
          da = R(da.split(" ")[0]);
          var qa = 10 - da;
          da && 7.2 > S && (M = M.split("pbChr")[1], M = M.split(" ")[0], Sa(xa, "backgroundPosition", Ib(M, 2, I) + "px " + -24 * (10 - da) + "px"));
          Qa && (7.2 > S && (zb = {backgroundPosition:Ib(Qa, 2, I) + "px " + -24 * (10 - qa) + "px"}), wb(xa, "pbGhst"), E = hb(xa, "b", {className:"pbChr" + Qa + " pbAlp" + qa + " pbCsr" + Ta, style:zb}, kb), Tb(E));
          Tb(xa);
        }
      }
      if (t) {
        var Ka = 6 > v ? 2 : 0;
        t = tb("SAMP");
        var Ba = 8 === v, e = 5 <= v && 6 > v, f, E, r, y;
        Lb && Q(Fa, "pbLCD-AX");
        if (t.length) {
          for (r = -1; f = t[++r];) {
            if (u(ab(f), "pbLCD")) {
              var I = u(f, "PB-120") || u(f, "FX-795P");
              var Aa = Fb(f);
              for (f = Aa.length; f;) {
                var Ja = Aa[--f];
                switch(Hb(Ja)) {
                  case "A":
                    (2 > Za || Ba) && z(Ja);
                    if (2 > Za) {
                      var cb = Fb(Ja);
                      for (y = cb.length; y;) {
                        !Ba && ca(cb[--y]);
                      }
                    }
                    Jb ? vb(Ja, "href", "javascript:void(0)") : (va(Ja, "click", ja), C.push(Ja));
                    break;
                  case "B":
                    2 > Za && ca(Ja);
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
        wa(t, "click", ja);
      }
    });
    6 === v && (new La("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var J = xb[7], k = xb[30], a = xb[113], b = Pa(8337) + Pa(8331), c = Pa(160);
    Pa(8194);
    var g = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), n = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + xb[31]).split(""), G = [], K, V, aa;
    za(function(t) {
      if (t) {
        V = 1 > bb + ha ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        t = tb("*");
        for (var z = -1, ca; ca = t[++z];) {
          u(ca, "pbList") ? D(ca) : u(ca, "pbFont") && D(ca, !0);
        }
        G.length && H();
        return !0;
      }
    });
    ha && q.conpare(P, "0.9.6");
    var Y = !1, L = 8 > S, W = !Y && !L && !(6 > v) && F.createDocumentFragment && !!Fa.replaceChild;
    Z.prettify = D;
  })();
  var Yb = F.scripts || tb("script");
  var bb = Yb[Yb.length - 1].src.split("/");
  --bb.length;
  (bb = bb.join("/")) && (bb += "/");
  6.1 > Ya && Ea($a);
  jb(mb);
  6.1 > Ya && Ea(Pb);
  jb(Mb);
  10 > v && (11 !== rb || 5 !== v) || (9 > S || 1 > ha || !Xa && !A.addEventListener ? F.write('<link href="' + bb + Bb + '" rel="stylesheet"' + (8 > S ? "" : ' media="screen,handheld,projection,print"') + ">") : ka(function() {
    ta(lb, "link", {href:bb + "" + Bb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

