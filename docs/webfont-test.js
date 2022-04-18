PB100={};var m;
ua = [];
ua.conpare = function(Z, q) {
  var B = 0, x, I, qa = (Z + "").split("."), V = (q + "").split("."), La = qa.length;
  for (x = V.length; "0" === qa[La - 1];) {
    --La;
  }
  for (; "0" === V[x - 1];) {
    --x;
  }
  for (I = La < x ? La : x; B < I; ++B) {
    var Xa = qa[B] - 0, n = V[B] - 0;
    if (Xa !== n) {
      return Xa > n ? 1 : -1;
    }
  }
  return La > x ? 1 : La === x ? 0 : -1;
};
(function(Z, q, B, x, I, qa, V, La) {
  function Xa(J, na, L) {
    L = qa(J.split(na)[1]);
    return 0 <= L ? L : 0;
  }
  function n(J, na) {
    return 0 <= J.indexOf(na);
  }
  function Ya(J) {
    return n(J, "Linux armv") || n(J, "Linux aarch") || n(J, "Linux i686") || n(J, "Linux x86_64");
  }
  function Q(J, na) {
    for (var L in na) {
      if (L === J) {
        return !0;
      }
    }
  }
  function h(J, na) {
    var L = "", Ga = -1, eb;
    if (J = J.split(na)[1]) {
      for (; eb = J.charCodeAt(++Ga);) {
        if (48 <= eb && 57 >= eb || 46 === eb) {
          L += J.charAt(Ga);
        } else {
          break;
        }
      }
      for (Ga = L.length; Ga;) {
        if (46 === L.charCodeAt(--Ga)) {
          L = L.substr(0, Ga);
        } else {
          break;
        }
      }
    }
    return L;
  }
  function va(J) {
    for (var na = arguments, L = 1, Ga = na[0], eb; L < na.length; ++L) {
      0 > Ha(Ga, eb = na[L]) && (Ga = eb);
    }
    return Ga;
  }
  function Fb(J) {
    return J === J + "" ? J : J === J - 0 ? "" + J : J.min && J.max ? J.min + "~" + J.max : J.min ? J.min + "~" : "~" + J.max;
  }
  var Ha = Z.conpare, e = x.userAgent, da = x.appVersion, nb = qa(da) || 0, R = x.platform, v = B.documentElement, Za = v && v.style, Ia = B.documentMode, U = I.width;
  I = I.height;
  var ja = q.HTMLAudioElement, zb = q.performance, sb = q.Int8Array, Ja = q.ontouchstart !== La, $a = h(da, "Version/") || h(e, "Version/"), Gb = q.operamini, ya = !Gb && q.opera, Tb = ya && (ya.version && "function" === typeof ya.version ? ya.version() : va(h(e, "Opera "), $a, nb)), Hb = q.opr, tb = !ya && (B.all || Ia);
  Ia = tb && (Ia ? Ia : q.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  v = !tb && v.msContentZoomFactor;
  var fb = !v && (q.chrome || q.chromium), jb = !tb && function() {
    for (var J in Za) {
      if (0 === J.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Ab = n(e, "UCWEB"), Ib = Ab && h(e, " U2/"), ub = Ab && h(e, "; wds "), Ta = h(e.split("_").join("."), "; iPh OS "), ra = h(e, "; Adr "), ab = n(da, "YJApp-ANDROID"), Ca = n(R, "Android") || jb && n(da, "Android") || ab;
  ra = h(R, "Android ") || h(da, "Android ") || h(e, "Android ") || ra;
  var Pa = n(R, "Linux"), Bb = "MacIntel" === R && x.standalone !== La, Cb = jb && h(e, "Goanna/"), Ma = !Cb && jb && (h(e, "rv:") || h(e.substr(e.indexOf(") Gecko/") - 11), "; ")), ha = h(e, "Firefox/"), X = h(e, "Opera/"), Db = q.FNRBrowser, Qa = Xa(e, "AppleWebKit/"), gb = h(e, "Chrome/"), Ob = h(da, "Iron/"), Jb = h(e, "OPR/"), Pb = h(da, "KHTML/"), Qb = h(e.toLowerCase(), "iris");
  h(e, "FxiOS/");
  h(e, "CriOS/");
  h(e, "EdgiOS/");
  var Rb = h(e, "Silk/"), bb = Xa(e, "SamsungBrowser/"), Kb = !bb && function() {
    for (var J = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    na, L = J.length; na = J[--L];) {
      if (n(e, na)) {
        return 2 > qa($a) ? $a : 0.9;
      }
    }
    J = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (L = J.length; na = J[--L];) {
      if (n(e, na)) {
        return $a;
      }
    }
  }(), Ra = fb && 534.3 >= Qa, kb = Ya(R), Ua = kb && !n(e, R) && Ya(e);
  Ja = Ja && (Qa || jb) && Ua || !ra && ab;
  ab = !!q.ReactNativeWebView;
  kb = kb && function() {
    for (var J in q) {
      if (0 === J.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ea = (Ua = q.puffinDevice) && Ua.clientInfo;
  ea = (Ua = ea && "iOS" === ea.os && ea.osVersion) && ea.model;
  var lb = !Ia && B.registerElement, ob = !Ia && B.execCommand, vb = q.webkitCancelAnimationFrame, Sb = Pa && lb && "11.0.696.34" === gb, Da = q._firefoxTV_playbackStateObserverJava, Lb = Xa(e, "diordnA ");
  if ("Nitro" === R) {
    var z = 1;
  } else if ("Nintendo DSi" === R) {
    z = 2;
    var w = X;
  } else if ("New Nintendo 3DS" === R || n(e, "iPhone OS 6_0") && 320 === U && 240 === I) {
    z = 4, w = h(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    z = 3, w = h(e, "Version/"), Qa = 535;
  } else if ("Nintendo Swicth" === R) {
    z = 7, w = h(da, "NintendoBrowser/");
  } else if (q.wiiu) {
    z = 6;
    w = h(da, "NintendoBrowser/");
    var W = 15, aa = h(da, "AppleWebKit/") || (vb ? 536 : 534);
    w || (w = vb ? 4 : 2, n(da, "Macintosh;") || n(da, "Windows NT") && n(da, "Touch"));
  } else if (ya && ya.wiiremote) {
    z = 5, w = h(e, "Wii; U; ; ");
  } else if (X = h(e, "PlayStation Vita ")) {
    z = 10, w = X;
  } else if (X = h(e, "(PlayStation Portable); ")) {
    z = 8;
    w = X;
    var hb = 3.3;
  } else if (X = h(e, "PLAYSTATION 3; ") || h(e, "PLAYSTATION 3 ")) {
    z = 11, w = X, 0 > Ha("4.10", X) && (W = 26, aa = X);
  } else if (n(e, "Xbox One")) {
    z = 15, w = 1;
  } else if (n(e, "Xbox")) {
    z = 14, w = 1;
  } else if (2 === nb && n(e, "Sony/COM2/")) {
    z = 17;
    w = 2;
    hb = 3.4;
    var cb = !0;
  } else if (0 === R.indexOf("iP") || Ta || Ua || Bb) {
    if (Ua) {
      switch(w = Ua, ea.substr(0, 4)) {
        case "iPho":
          var Ea = 0;
          h(ea, Ea);
          var ka = !0;
          break;
        case "iPad":
          Ea = 1;
          h(ea, Ea);
          var wa = !0;
          break;
        case "iPod":
          Ea = 2;
          h(ea, Ea);
          var pb = !0;
      }
    } else {
      Ta ? w = Ta : (w = h(da.split("_").join("."), "OS "), Q("isSecureContext", q), Q("enableWebGL", q), Q("sameOrigin", q));
      if (!w || Db) {
        w = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : q.SharedWorker ? zb && zb.now ? 8.0 : 8.4 : ob ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : sb ? 4.3 : ja ? 4.1 : 3.2;
      }
      var za = U === 1.5 * I || 1.5 * U === I;
      0 === R.indexOf("iPhone") ? (Ea = 0, ka = !0) : 0 === R.indexOf("iPad") || Bb ? (Ea = 1, wa = !0) : 0 === R.indexOf("iPod") && (Ea = 2, pb = !0);
    }
    W = !Ua && (x.standalone || (wa || 12 > w) && Q("webkitFullscreenEnabled", B) || 11 <= w && 13 > w && x.mediaDevices) ? 16 : 17;
    z = 24;
    aa = w;
  } else if (n(e, "Kobo")) {
    z = 18, W = 21, aa = 2.2, Ca = !0;
  } else if (n(e, "EBRD")) {
    z = 19, W = 21, aa = 2.2;
  } else if (X = h(e, "CrOS x86_64 ") || h(e, "CrOS aarch64 ") || h(e, "CrOS i686 ") || h(e, "CrOS armv7l ")) {
    z = 28, w = X;
  } else if (q.onmoztimechange !== La) {
    z = 29, w = 18.1 > Ma ? "1.0.1" : 19 > Ma ? 1.1 : 27 > Ma ? 1.2 : 29 > Ma ? 1.3 : 31 > Ma ? 1.4 : 33 > Ma ? 2.0 : 35 > Ma ? 2.1 : 38 > Ma ? 2.2 : 45 > Ma ? 2.5 : 2.6, n(e, "Mobile") ? ka = !0 : n(e, "Tablet") ? wa = !0 : n(e, "TV");
  } else if (q.palmGetResource) {
    z = 30, w = h(e, "webOS/") || h(e, "WEBOS") || h(e, "hpwOS/"), n(e, "webOS.TV") || n(e, "/SmartTV") || (ka = !0);
  } else if (X = h(e, "Tizen ")) {
    z = 31, w = X, W = 24, aa = bb, ka = !0;
  } else if (X = h(e, "Windows Phone ") || h(da, "Windows Phone OS ") || ub) {
    z = 23, w = X, ka = !0;
  } else if (v && "ARM" === R) {
    z = 23, w = 10, ka = !0;
  } else if (tb && n(da, "ZuneWP")) {
    z = 23, w = 11 === Ia ? 8.1 : 10 === Ia ? 8 : 9 === Ia ? 7.5 : 7 === Ia ? 7 : "?", ka = !0;
  } else if (n(e, "FOMA;")) {
    z = 16, ka = !0;
  } else if (n(e, "SoftBank;")) {
    z = 16, ka = !0;
  } else if (n(e, "KFMUWI")) {
    var Aa = !0;
    w = 6.3;
    var ma = wa = !0;
  } else if (n(e, "KFKAWI")) {
    Aa = !0, w = 6, ma = wa = !0;
  } else if (n(e, "KFSUWI") || n(e, "KFAUWI") || n(e, "KFDOWI")) {
    Aa = !0, w = 5, ma = wa = !0;
  } else if (n(e, "KFGIWI")) {
    Aa = !0, w = 5, ma = wa = !0;
  } else if (n(e, "KFARWI") || n(e, "KFSAWA") || n(e, "KFSAWI")) {
    Aa = !0, w = 5 <= qa(ra) ? 5 : 4, ma = wa = !0;
  } else if (n(e, "KFSOWI") || n(e, "KFTHWA") || n(e, "KFTHWI") || n(e, "KFAPWA") || n(e, "KFAPWI")) {
    Aa = !0, w = 3, ma = wa = !0;
  } else if (n(e, "KFOT") || n(e, "KFTT") || n(e, "KFJWA") || n(e, "KFJWI")) {
    Aa = !0, w = 2, ma = wa = !0;
  } else if (n(e, "Kindle Fire")) {
    Aa = !0, w = 1, ma = wa = !0;
  } else if (X = h(e, "Kindle/")) {
    z = 20, w = X, W = 21, aa = 2.2;
  } else if (Da) {
    Aa = !0, w = ra || Lb, ma = !0;
  } else if (n(e, "AmazonWebAppPlatform") || n(e, "; AFT")) {
    Aa = !0, w = ra, ma = !0;
  } else if (n(e, "MeeGo")) {
    z = 32;
  } else if (n(e, "Maemo")) {
    z = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || Qb) {
    z = 22, cb = !0;
  } else if ("WinCE" === R) {
    z = 21, cb = !0;
  } else if (0 === R.indexOf("Win")) {
    z = "Win16" === R ? 35 : "Win32" === R ? 36 : "Win64" === R ? 37 : 0, w = h(e, "Windows NT ") || h(e, "Windows ");
  } else if (0 === R.indexOf("Mac")) {
    z = "Mac68K" === R ? 39 : "MacPowerPC" === R || "MacPPC" === R ? 38 : "MacIntel" === R ? 40 : 0;
    if (X = h(e.split("_").join("."), "Mac OS X ")) {
      w = X;
    }
    var Mb = !0;
  } else if (n(e, "BlackBerry") || n(e, "BB10")) {
    z = 34, w = $a, ka = !0;
  } else if (n(e, "SunOS") || n(e, "Sun Solaris")) {
    z = 42;
  } else if (n(e, "FreeBSD")) {
    z = 43;
  } else if (n(e, "OpenBSD")) {
    z = 44;
  } else if (n(e, "NetBSD")) {
    z = 45;
  } else if (Ca && jb) {
    n(e, "Android 4.4;") ? za = {min:2.3} : 4 <= qa(ra) ? za = ra : za = {min:2.2}, w = za;
  } else if (Ca && ya) {
    ra ? za = ra : za = {min:1.6}, w = za, n(e, "Tablet") ? wa = !0 : ka = !0;
  } else if (ra) {
    w = ra, Ca = !0;
  } else if (Pa && Ja || ab || kb) {
    var ib = !0;
    bb ? za = {min:4.4} : fb && !Ra || Hb || Jb ? za = {min:4} : (za = ra = Za.touchAction !== La ? {min:5} : lb ? 4.4 : sb ? x.connection ? q.searchBoxJavaBridge_ || fb ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Qa ? 3 : 533 <= Qa ? ja ? 2.3 : 2.2 : 530 <= Qa ? 2.0 : 1.5, Kb && (W = 24, aa = Kb));
    w = za;
    Ca = !0;
  } else {
    Sb ? (w = {min:5}, ib = Ca = !0) : Pa && (n(e, "Ubuntu") ? z = 46 : (X = h(e, "Mint/")) ? (z = 47, w = X) : (X = h(e, "Fedora/")) ? (z = 48, w = X) : z = n(e, "Gentoo") ? 49 : 50);
  }
  Aa || Ca && ib && Rb ? z = 27 : Ca && (z = z || 26);
  W || (ma = ma || Ca, ya ? (W = ma || cb || ka || wa ? 9 : 8, aa = Tb) : tb ? (za = Xa(da, "Trident/") + 4, W = cb || ka || wa || pb ? 3 : Mb && 5 <= Ia ? 7 : 2, aa = Ia) : v ? (W = 23 === z ? 6 : 5, aa = h(da, "Edge/")) : Cb ? (W = 13, aa = Cb) : jb ? (W = ma ? 12 : 11, aa = Ma || ha) : bb ? (W = 24, aa = bb) : (X = hb || h(e, "NetFront/")) ? (W = 18, aa = X) : (X = h(e, "iCab")) ? (W = 19, aa = X) : (X = va(h(e, "Opera Mini/"), h(e, "Opera Mobi/")) || Gb && $a) ? (W = 10, aa = X, z || (n(e, "iPhone") ? 
  Ea = 0 : n(e, "iPad") ? Ea = 1 : n(e, "iPod") && (Ea = 2), Ea && (z = 24))) : Ab ? (W = 25, aa = Ib) : Pb ? (W = 14, aa = nb) : Ca && Ra ? (W = 21, aa = ra) : fb || Hb || Jb ? (W = ma ? 22 : 20, aa = gb || Ob) : Ca && lb ? (W = 23, aa = 5 > qa(ra) ? ra : gb) : Ca && ($a || ib) ? (W = 21, aa = ra) : gb ? (W = ma ? 22 : 20, aa = gb) : Qa && (W = 15, aa = Qa));
  z && (Z[2] = z, w && (Z[3] = Fb(w)));
  W && (Z[0] = W, aa && (Z[1] = Fb(aa)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Eb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var Z = this[this.length - 1];
  --this.length;
  return Z;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Z = arguments, q = 0, B = Z.length, x = this.length; q < B; ++q) {
    this[x + q] = Z[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Z = this[0], q = 1, B = this.length; q < B; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return Z;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Z = arguments, q = Z.length, B = this.length += q - 1, x = B; x >= q; --x) {
    this[x] = this[x - q];
  }
  for (x = 0; x < q; ++x) {
    this[x] = Z[x];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(Z, q) {
  var B = arguments, x = B.length - 2 - q, I = this.slice(Z, Z + q), qa;
  if (0 < x) {
    var V = this.length - 1;
    for (qa = Z + q; V >= qa; --V) {
      this[V + x] = this[V];
    }
  } else if (0 > x) {
    V = Z + q;
    for (qa = this.length; V < qa; ++V) {
      this[V + x] = this[V];
    }
    this.length += x;
  }
  V = 2;
  for (qa = B.length; V < qa; ++V) {
    this[V - 2 + Z] = B[V];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Z, q) {
  var B = this.length >>> 0;
  if (0 === B) {
    return -1;
  }
  if (q) {
    var x = q || 0;
    x = -Infinity === x ? 0 : (0 > x ? -x : x) | 0;
    if (B <= x) {
      return -1;
    }
  }
  for (x = 0 <= x ? x : 0 < B + x ? B + x : 0; x < B; ++x) {
    if (this[x] === Z) {
      return x;
    }
  }
  return -1;
});
(function(Z, q, B, x, I, qa, V, La, Xa, n, Ya, Q) {
  function h(k) {
    if (q[0] === k) {
      return R === R + "" ? V(R) : R;
    }
  }
  function va(k) {
    var E = q[3];
    if (q[2] === k) {
      return E === E + "" ? V(E) : E;
    }
  }
  function Fb(k, E, S) {
    k + "" === k && ("a" === k.charAt(2) && (S = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > U ? 117 : 9 > v || 9 > U || Za ? 1 : 132 : parseInt(k, 16));
    S && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (E || 2));
  }
  var Ha = I.body, e = Ha.style, da, nb, R = q[1], v = h(2) || h(3), Za = h(7), Ia = h(5) || h(6), U = h(8) || h(9), ja = h(11) || h(12), zb = ja && 0 <= q.conpare(R, "1.9.1"), sb = h(13), Ja = h(15), $a = h(16) || h(17), Gb = h(10) || h(25), ya = h(20) || h(22), Tb = ya || h(23) || h(21) || h(24), Hb = ya && V(qa.userAgent.split("Edg/")[1]), tb = V(qa.appVersion.split("Trident/")[1]) + 4, fb = va(35) || va(36) || va(37), jb = !v && !Za && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  Ab = (Za ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > U ? "opr70" : 8 > U ? "opr72" : 9.5 > U ? "opr" + (U | 0) : ja && !zb ? 1.3 <= ja ? "gck190" : 1 <= ja ? "gck121" : "gck097" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var Ib, ub, Ta, ra = e.transform !== Q ? "transform" : e["-o-transform"] !== Q ? "-o-transform" : e["-ms-transform"] !== Q ? "-ms-transform" : e.MozTransform !== Q ? "-moz-transform" : e["-webkit-transform"] !== Q ? "-webkit-transform" : "", ab = [], Ca = [], Pa = [], Bb, Cb, Ma, ha, X, Db, Qa = [], gb = [], Ob, Jb, Pb, Qb;
  (function() {
    function k() {
      for (var c, d = 0, l = new Ya() - 0; d < F.length;) {
        l < F[0].t ? ++d : (c = F.splice(d, 1)[0], c.f(c.p));
      }
      b = F.length ? Xa(k, M) : 0;
    }
    function E() {
      for (var c, d = 0; d < Y.length; ++d) {
        c = Y[d], c.f();
      }
    }
    function S() {
      C && (C = clearInterval(C));
    }
    function la() {
      b && (b = n(b));
    }
    m = function(c) {
      Qa.push(c);
    };
    Eb = function(c) {
      gb.push(c);
    };
    Db = function(c) {
      Y.length || (C = setInterval(E, ia));
      Y.push({f:c, B:++G});
      return G;
    };
    Ob = function() {
      C && (S(), C = setInterval(E, ia));
    };
    Jb = S;
    var Y = [], ia = 500, G = 0, C;
    if (5 > v || Za) {
      B._wdb_onlooptimer = E, E = "_wdb_onlooptimer()";
    }
    ha = function(c, d, l) {
      F.length || (b = Xa(k, M));
      F.push({f:c, p:d, B:++a, t:new Ya() - 0 + (M < l ? l : M)});
      return a;
    };
    X = function(c) {
      for (var d = F.length, l; l = F[--d];) {
        if (l.B === c) {
          F.splice(d, 1);
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      b && (la(), b = Xa(k, M));
    };
    Qb = la;
    var F = [], M = 16, a = 0, b;
    if (5 > v || Za) {
      B._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var Rb, bb, Kb, Ra, kb, Ua, ea, lb, ob, vb, Sb, Da, Lb, z, w, W, aa, hb, cb, Ea, ka, wa;
  (function() {
    function k(a, b, c) {
      var d = ["<", a], l = 1, p, r;
      if (b) {
        for (p in b) {
          var H = b[p];
          if (null != H && "" !== H) {
            if ("style" === p) {
              d[++l] = ' style="';
              for (r in H) {
                for (var oa = ++l, T, ba = [], ca = r.split(""), N = ca.length; N;) {
                  T = ca[--N], "A" <= T && "Z" >= T && (T = "-" + T.toLowerCase()), ba[N] = T;
                }
                d[oa] = ba.join("") + ":" + H[r] + ";";
              }
              d[++l] = '"';
            } else {
              "className" === p && (p = "class"), d[++l] = " " + p + '="' + H + '"';
            }
          }
        }
      }
      d[++l] = ">";
      null != c && (C && "font" !== a ? d[++l] = "<FONT>" + c + "</FONT>" : d[++l] = c);
      d[++l] = "</" + a + ">";
      return d.join("");
    }
    function E(a) {
      a = "*" === a && 6 > v ? "*" !== a ? I.all.tags(a.toUpperCase()) : I.all : I.getElementsByTagName(a);
      var b = [], c = 0, d;
      for (d = a.length; c < d; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function S(a) {
      return C ? a.parentElement : a.parentNode;
    }
    function la(a, b, c, d, l, p) {
      if (C) {
        var r = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var H = kb(2 > a ? Ra(b) : b);
        H = 2 > a ? H.indexOf(b) + a : H.length;
        b.insertAdjacentHTML(r, k(c, d, l));
        b = kb(b)[H];
        null != l && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (F) {
        b = I.createElement(k(c, d));
      } else {
        b = p ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
        if (d) {
          for (r in d) {
            if ((c = d[r]) || 0 === c) {
              switch(r) {
                case "class":
                case "className":
                  aa(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (H in c) {
                    a[H] = c[H];
                  }
                  break;
                default:
                  w(b, r, c);
              }
            }
          }
        }
        M || null != l && Y(b, l);
      }
      return b;
    }
    function Y(a, b) {
      if (C) {
        return la(2, a, "font", Q, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function ia(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function G(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var C = 5 > v;
    da = E("html")[0];
    nb = E("head")[0];
    Rb = function(a) {
      return B[a] || I[a] || I.getElementById(a);
    };
    bb = E;
    Kb = function(a) {
      var b = [], c = 0, d, l = -1;
      if (9 > v || !I.getElementsByClassName) {
        var p = 6 > v ? I.all : I.getElementsByTagName("*");
      } else {
        var r = !0;
        p = I.getElementsByClassName(a);
      }
      for (d = p.length; c < d; ++c) {
        var H = p[c];
        if (r || (C || 1 === H.nodeType) && G(H, a)) {
          b[++l] = H;
        }
      }
      return b;
    };
    Ra = S;
    kb = function(a) {
      a = C ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Ua = function(a) {
      var b = !(7.03 < U && 7.2 > U) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], d = a.length, l = -1, p; d;) {
        if (p = a[--d], b || 1 === p.nodeType) {
          C && "FONT" === p.tagName || (c[++l] = p);
        }
      }
      return c;
    };
    ea = function(a, b, c, d, l) {
      b = la(2, a, b, c, d, l);
      C || (a.appendChild(b), M && null != d && Y(b, d));
      return b;
    };
    lb = function(a, b, c, d, l) {
      b = la(0, a, b, c, d, l);
      C || (S(a).insertBefore(b, a), M && null != d && Y(b, d));
      return b;
    };
    ob = function(a, b, c, d, l) {
      b = la(1, a, b, c, d, l);
      var p;
      C || ((p = a.nextSibling) ? Ra(p).insertBefore(b, p) : Ra(a).appendChild(b), M && null != d && Y(b, d));
      return b;
    };
    vb = Y;
    Sb = function(a, b) {
      if (C) {
        return la(0, a, "font", Q, b);
      }
      var c = I.createTextNode("" + b);
      Ra(a).insertBefore(c, a);
      return c;
    };
    Da = function(a) {
      Ra(a) ? C ? a.outerHTML = "" : Ra(a).removeChild(a) : m("[DOM] p_DOM_remove(), No parentNode!");
    };
    var F = 9 > v, M = F;
    Lb = function(a) {
      return a.tagName.toUpperCase();
    };
    z = function(a, b) {
      return a.getAttribute(b) || "";
    };
    w = function(a, b, c) {
      a.setAttribute(b, c);
    };
    W = function(a, b) {
      a.removeAttribute(b);
    };
    aa = ia;
    hb = G;
    cb = function(a, b) {
      var c;
      if (!G(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        ia(a, c + b);
      }
    };
    Ea = function(a, b) {
      if (G(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        ia(a, c.join(" "));
      }
    };
    ka = function(a, b, c) {
      a.style[b] = c;
    };
    wa = function(a, b) {
      var c = -1, d, l;
      if (5.5 > v) {
        if (b) {
          for (d = b.split(";"); l = d[++c];) {
            var p = l.split(":");
            a.style[p[0]] = l.substr(p[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > U || 1 > ja ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var pb, za, Aa, ma, Mb, ib, J, na, L, Ga;
  (function() {
    function k() {
      return ca ? u ? 2 : N ? 3 : 1 : 0;
    }
    function E(g) {
      za(B, "load", E);
      E = Q;
      la(ab, g, !0);
      ab = Q;
    }
    function S(g, f) {
      ib(function() {
        var y = M(g);
        f(y);
        y.addListener(f);
        return !0;
      });
    }
    function la(g, f, y) {
      for (var t = 0; t < g.length; ++t) {
        !0 === g[t](f) && (g.splice(t, 1), --t);
      }
      y && (g.length = 0);
    }
    function Y(g, f, y) {
      c && !b.length && ha(ia);
      b.push(g, f, y);
    }
    function ia() {
      var g = b, f;
      for (b = []; f = g.shift();) {
        la(f, g.shift(), g.shift());
      }
    }
    function G(g) {
      var f = g || event;
      g = d[f.type];
      var y = -1, t, D;
      v ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : p && (f.A = f.stopPropagation, f.stopPropagation = function() {
        D = !0;
      });
      for (; t = g[++y];) {
        t.l === this ? (this.g = t.j, this.g(f), this.g = x, this.g = Q) : 7.2 > U && this === I && t.l === B && (B.g = t.j, B.g(f), delete B.g);
      }
      if (v) {
        return f.preventDefault = f.stopPropagation = Q, f.returnValue;
      }
      p && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (H = !0), D && !H && f.A(), f.A = f.stopPropagation = Q);
    }
    function C() {
      var g = 9 === a.offsetWidth;
      na !== g && (Y(Ca, na = g), m("p_cssAvailability:" + na));
    }
    function F(g) {
      ab || la(O, g);
    }
    var M = B.matchMedia, a, b = [], c;
    ab.push(function() {
      S = Q;
      a = ea(Ha, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Aa(function() {
        c = !0;
        b.length && ha(ia);
      });
    });
    pb = function(g, f, y, t) {
      if (r) {
        g.addEventListener(f, y, t ? jb ? t : t.capture : !1);
      } else {
        var D = {l:g, j:y};
        t = d[f];
        var K = "on" + f, pa, Ka;
        if (t) {
          for (pa = t.length; Ka = t[--pa];) {
            if (Ka.l === g && Ka.j === y) {
              return;
            }
          }
          d[f].push(D);
        } else {
          d[f] = t = [D], l || (f = g[K], "function" === typeof f && f !== G && t.unshift({l:g, j:f}));
        }
        l ? g.attachEvent(K, G) : g[K] = G;
      }
    };
    za = function(g, f, y, t) {
      if (r) {
        g.removeEventListener(f, y, t ? jb ? t : t.capture : !1);
      } else {
        t = d[f];
        f = "on" + f;
        var D, K, pa;
        if (t) {
          for (D = t.length; K = t[--D];) {
            K.l === g && (K.j === y ? t.splice(D, 1) : pa = !0);
          }
          pa || (l ? g.detachEvent(f, G) : (g[f] = x, g[f] = null));
        }
      }
    };
    var d = {}, l = !1, p = 525.13 > Ja, r = !p && !Za && B.addEventListener, H;
    p && da.addEventListener("click", function(g) {
      if (H) {
        return H = !1, g.preventDefault(), !1;
      }
    });
    Aa = function(g) {
      ab ? ab.push(g) : alert("Load event has already been dispatched!");
    };
    ma = function(g) {
      oa && oa.push(g);
    };
    var oa = [];
    if (419.3 >= Ja) {
      var T = function() {
        if (T) {
          var g = I.readyState;
          "loaded" === g || "complete" === g ? (T = Q, E()) : ha(T);
        }
      };
      ha(T);
    } else {
      pb(B, "load", E);
    }
    v || 1.8 > ja ? pb(B, "unload", function(g) {
      la(oa, g, !0);
    }) : oa = Q;
    ib = function(g) {
      Ca.push(g);
    };
    Aa(function() {
      C();
      Db(C);
    });
    J = function(g) {
      Pa && Pa.push(g);
    };
    var ba = 60 > ja || sb, ca, N, u;
    if (89 <= ja || 89 <= ya || fb && 79 <= Hb || M && (M("(forced-colors:none)").matches || M("(forced-colors:active)").matches)) {
      Ga = !0, S("(forced-colors:active)", function(g) {
        ca = g.matches;
        L = k();
        Y(Pa, L);
        m("(forced-colors:active):" + L);
      });
    } else if (10 <= v || Ia || fb && Hb) {
      Ga = !0, S("(-ms-high-contrast:black-on-white)", function(g) {
        ca = N = g.matches;
        L !== k() && (L = k(), Y(Pa, L), m("(-ms-high-contrast:black-on-white):" + L));
      }), S("(-ms-high-contrast:white-on-black)", function(g) {
        ca = u = g.matches;
        L !== k() && (L = k(), Y(Pa, L), m("(-ms-high-contrast:white-on-black):" + L));
      }), S("(-ms-high-contrast:active)", function(g) {
        ca = g.matches;
        L !== k() && (L = k(), Y(Pa, L), m("(-ms-high-contrast:active):" + L));
      });
    } else if (fb && (v || ja && 0 <= q.conpare(R, "1.8.1") || sb)) {
      var A = function() {
        function g(t, D) {
          if (D && "transparent" === t) {
            return 382.5;
          }
          if ("#" === t.charAt(0)) {
            return parseInt("0x" + t.substr(1, 2), 16) + parseInt("0x" + t.substr(3, 2), 16) + parseInt("0x" + t.substr(5, 2), 16);
          }
          var K = t.split("(")[1].split(",");
          return V(K[0]) + V(K[1]) + V(K[2]);
        }
        var f = I.defaultView;
        var y = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        f && (ca = "#123456" !== f && "rgb(18,52,86)" !== f, N = g(f) < g(y, !0), u = g(f) > g(y, !0), L !== k() && (L = k(), m("(forced-colors-fallback):" + L), Y(Pa, L, ba)));
      };
      ib(function(g) {
        if (g) {
          return ka(a, "color", "#123456"), ka(a, "backgroundColor", "#123456"), ba ? (A(), Pa = Q) : Db(A), A = Q, !0;
        }
      });
    } else {
      Pa = k = Q;
    }
    Mb = function(g) {
      O.push(g);
    };
    var O = [], Ba = 0, Fa = 1 > ja || 1.2 <= ja && 1.8 > ja || 7.2 >= U;
    Fa ? Db(function() {
      var g = B.scrollY || Ha.scrollTop;
      Ba !== g && (Ba = g, F());
    }) : pb(B, "scroll", F);
    ma(function() {
      Fa || za(B, "scroll", F);
    });
  })();
  var eb = 9 > v || 525 <= Ja && 530 > Ja || 2 > ya, Ub = 0, Vb, Wb, Xb, bc;
  (function() {
    function k(a) {
      for (var b = Y.length, c; b;) {
        if (c = Y[--b], c.F === a) {
          return c;
        }
      }
    }
    function E() {
      var a = I.styleSheets, b = [], c = 0, d = -1, l;
      if (a) {
        for (l = a.length; c < l; ++c) {
          if (2 > ya || fb && 526 > Ja) {
            var p = la(a[c]);
            p.parentNode && (b[c] = p);
          } else {
            b[c] = la(a[c]);
          }
        }
      } else {
        for (a = bb("*"), l = a.length; c < l; ++c) {
          p = a[c];
          var r = Lb(p);
          if ("STYLE" === r || "LINK" === r && "text/css" === z(p, "type")) {
            b[++d] = p;
          }
        }
      }
      return b;
    }
    function S(a) {
      return a.styleSheet || a.sheet;
    }
    function la(a) {
      return a.owningElement || a.ownerNode;
    }
    Vb = function(a, b) {
      var c = E(), d = c.length;
      d = 0 <= b && b < d ? b : d;
      var l = c[d - 1];
      c = c[d];
      if (C || F) {
        var p = c ? lb(c, "style") : l ? ob(l, "style") : ea(nb, "style");
        F && vb(p, "");
        var r = S(p);
        a && w(p, "media", a);
      } else if (ia || G) {
        r = {D:a, C:d, G:!0};
      }
      if (r) {
        return Y.push({F:r, h:p, m:[]}), r;
      }
    };
    Wb = function(a) {
      a = k(a);
      var b = a.m, c = b.length, d;
      for (a.h && Da(a.h); d = b[--c];) {
        d.i && Da(d.i);
      }
      Y.splice(Y.indexOf(a), 1);
    };
    Xb = function(a, b, c, d) {
      var l = k(a), p = l.h;
      l = l.m;
      var r = "@import" === b, H = "@page" === b, oa = "@font-face" === b, T = l.length, ba = "", ca;
      if (a.imports) {
        var N = a.imports.length;
      } else {
        for (N = 0; N < T && "@import" === l[N].u; ++N) {
        }
      }
      if (r) {
        d = 0 <= d && d < N ? d : N;
        var u = b + ' "' + c + '"';
      } else {
        d = N <= d && d < T ? d : T;
        for (u in c) {
          ba += ";" + u + ":" + c[u];
        }
        ba = ba.substr(1);
        u = b + "{" + ba + "}";
        6 <= v && oa && (d = T);
      }
      T = {u:b, v:c, o:d, s:d};
      if (9 > v) {
        N = a.rules;
        var A = N.length;
        if (oa) {
          b = I.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + u + "</style>", b = b.lastChild, (ca = p.nextSibling) ? Ra(p).insertBefore(b, ca) : Ra(p).appendChild(b), T.i = b;
        } else {
          r ? a.addImport(c, d) : 5.5 <= v && H || a.addRule(b, ba, d);
          T.s = d + (N.length - A - 1);
          if (0 === N.length - A) {
            return m("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + u), -1;
          }
          m("[CSSOM] rules.length \u306e\u5897\u5206" + (N.length - A));
        }
      } else if (C || F) {
        (fb && Ja || 28 > ya) && r ? T.i = ob(p, "link", {href:c, rel:"stylesheet", type:"text/css"}) : eb && oa ? (b = T.i = ob(p, "style", {type:"text/css", media:a.media}), b.innerText = u) : a.insertRule(u, d);
      }
      l.splice(d, 0, T);
      if (ia || G) {
        p = k(a);
        ca = p.m;
        b = p.h;
        c = a.C;
        r = E();
        a = r[c - 1];
        c = r[c];
        r = [];
        oa = H = -1;
        ba = "style";
        T = {type:"text/css", media:p.D};
        for (var O; N = ca[++H];) {
          if (u = N.u, N = N.v, "@import" === u) {
            r[++oa] = u + ' "' + N + '"';
          } else {
            r[++oa] = u + "{";
            u = "";
            for (O in N) {
              u += ";" + O + ":" + N[O];
            }
            r[++oa] = u.substr(1) + "}";
          }
        }
        r = r.join("");
        ia && (r = "data:text/css;charset=utf-8;base64," + M(r), T.rel = "stylesheet", T.href = r, ba = "link", r = Q);
        b ? (p.h = ob(b, ba, T, r), Da(b)) : (b = c ? lb(c, ba, T, r) : a ? ob(a, ba, T, r) : ea(nb, ba, T, r), p.h = b);
      }
      O = d;
      a = l.length;
      for (p = O; p < a; ++p) {
        ca = l[p], ca.i || (b = ca.s - ca.o, ca.o = O, ca.s = O + b, O += 1 + b);
      }
      return d;
    };
    bc = function(a, b, c) {
      b = k(a).m[b];
      var d;
      if (b) {
        if ("@import" === b.u) {
          var l = b.v;
        } else if (C || F) {
          m("[CSSOM] CSSOM_getRawValueOfRule : " + d + " " + (9 > v ? a.rules : a.cssRules).length + " " + b.o);
          if (a = d = (9 > v ? a.rules : a.cssRules)[b.o]) {
            d = d.style;
            a = [];
            c = c.split("");
            l = 0;
            b = c.length;
            for (var p, r = !1; l < b; ++l) {
              p = c[l], "-" === p ? r = !0 : r ? (a[l] = p.toUpperCase(), r = !1) : a[l] = p;
            }
            a = d[a.join("")];
          }
          l = a;
        } else {
          l = b.v[c];
        }
      }
      return l;
    };
    var Y = [], ia = 1 > ja || 8 <= U && 9 > U, G = 7.2 <= U && 8 > U, C = !!v || !ia && !G && function() {
      var a = ea(da, "style"), b = !!S(a);
      b && (m("[CSSOM] CSSStyleSheet @insertRule : " + !!S(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!S(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!S(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!S(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === S(a).cssText)));
      Da(a);
      return b;
    }();
    m("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + C);
    var F = !C && Ja && !ia && !G && function() {
      var a = ea(da, "style"), b;
      vb(a, "");
      if (b = !!S(a)) {
        m("[CSSOM] CSSStyleSheet @insertRule : " + !!S(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!S(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!S(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!S(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === S(a).cssText));
      }
      Da(a);
      return b;
    }();
    C || m("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + F);
    Ub = ia || G ? 1 : C || F ? 2 : 0;
    m("[CSSOM] p_CSSOM_canuse : " + Ub);
    var M;
    (function(a) {
      function b(d) {
        for (var l = c, p = "", r = 0, H; H = d.length;) {
          4 > H && (r = [0, 2, 1, 0][H]), H = d.charCodeAt(0) << 16 | (1 < H ? d.charCodeAt(1) : 0) << 8 | (2 < H ? d.charCodeAt(2) : 0), p += [l[H >>> 18], l[H >>> 12 & 63], 2 <= r ? "=" : l[H >>> 6 & 63], 1 <= r ? "=" : l[H & 63]].join(""), d = d.substr(3);
        }
        return p;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      M = b;
    })(this);
  })();
  (function() {
    function k() {
      if (525 > Ja || ja && !zb || 2.2 > h(21) || h(25) || 10 > h(3) || va(32) || va(30) || va(1) || va(2) || va(3)) {
        return !1;
      }
      if (eb) {
        return !0;
      }
      if (2 === Ub) {
        var G = Vb();
        var C = Xb(G, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var F = G.cssText || G.cssRules && G.cssRules[C] && G.cssRules[C].cssText || "";
        var M = F.match("src") && F.match("@font-face");
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + F);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > v ? G.rules : G.cssRules).length);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + bc(G, C, "src"));
        Wb(G);
      }
      k = Q;
      return ia = !!M;
    }
    Ca.splice(0, 0, function() {
      if (na) {
        Ta = 8 <= v || Ia || 9.5 <= U || zb || sb || 522 <= Ja || 3 <= $a || Gb || Tb ? 3 : 7.2 <= U ? 2 : 6 <= U || ja ? 1 : 0;
        if (!Ta && !v && !Za) {
          var G = ea(Ha, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ta = 6 <= G.offsetWidth ? 2 : 0;
          Da(G);
        }
        m("p_cssGeneratedContentGrade:" + Ta);
        return !0;
      }
    });
    Bb = function(G) {
      function C(a) {
        M = X(M);
        E = a;
        F.onload = F.onerror = x;
        ha(G, a);
      }
      if (E !== Q) {
        m("[dataUriTest] already done : " + E), ha(G, E);
      } else if (8 > v) {
        m("[dataUriTest] trident < 8 : false"), ha(G, !1);
      } else {
        m("[dataUriTest] start!");
        var F = new Image(), M = ha(function() {
          M && C(!1);
        });
        F.onerror = function() {
          m("[dataUriTest] no DATA URI!");
          C(!1);
        };
        F.onload = function() {
          m("[dataUriTest] DATA URI:" + (1 === F.width * F.height));
          C(1 === F.width * F.height);
        };
        F.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var E;
    9 > v && Aa(function() {
      var G = ea(Ha, "div");
      wa(G, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ib = 1 < G.offsetHeight;
      wa(G, "");
      Da(G);
    });
    Cb = function(G, C) {
      function F() {
        if (a || !b || M.complete) {
          m("[imageTest] timer -> img.complete. img.width=" + M.width);
          var c = !!M.width;
          ub = ub || c;
          ha(G, c);
          M.onerror = M.onload = x;
          M = G = Q;
        } else {
          --b, ha(F);
        }
      }
      var M = new Image(), a, b = 99;
      m("[imageTest] start.");
      M.onerror = function() {
        m("[imageTest] error!");
        a = !0;
      };
      M.onload = function() {
        m("[imageTest] onload.");
        a = !0;
      };
      M.src = C;
      ha(F);
    };
    var S = 9 > v || 2 > ya || 12 > U, la = "bad_" + (new Ya() - 0) + "_", Y = ["sans-serif", "serif"], ia;
    Ma = function(G, C, F, M, a, b, c) {
      function d(f) {
        G(f);
        g && !f && Wb(g);
        G = A = O = Ba = g = Q;
      }
      function l() {
        var f = '1.6em "' + C + '"';
        m("[webFontTest] testByNativeFontLoaderAPI start.");
        I.fonts.load(f).then(function(y) {
          m("[webFontTest] fonts.check() : " + I.fonts.check(f, "i") + ", fonts.length : " + y.length);
          H(C) ? ha(d, Fa) : (m("[webFontTest] mesureWebFont() : false"), r(!0));
        }, function(y) {
          m("[webFontTest] fonts.load() rejected! " + y);
          Bb(oa);
        });
      }
      function p(f) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (N = new Ya() - 0, !1) : f < new Ya() - N;
      }
      function r(f) {
        f && (m("[webFontTest] testWebFont start."), N = new Ya() - 0);
        H(C) ? (m("[webFontTest] testWebFont mesurement success : " + Fa), d(Fa)) : p(ca) ? (m("[webFontTest] testWebFont timeout!"), u ? d(0) : S ? ha(d, 0) : Bb(oa)) : ha(r);
      }
      function H(f) {
        var y = 0, t = -1, D = 0;
        if (!Ba) {
          var K = -1;
          var pa;
          A = ea(Ha, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Ba = {}; pa = Y[++K];) {
            ka(A, "fontFamily", pa), Ba[pa] = A.offsetWidth;
          }
        }
        for (5 > v ? A || (A = ea(Ha, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Ha.appendChild(A); K = Y[++t];) {
          if (ka(A, "fontFamily", '"' + f + '",' + K), A.offsetWidth !== Ba[K]) {
            y = 1;
            break;
          }
        }
        !v && y && a && (A.innerHTML = a, f = A.offsetWidth, A.innerHTML = b, D = f === A.offsetWidth ? 1 : 0, A.innerHTML = "mmmmmmmmmmlli");
        Da(A);
        5 > v && (A = Q);
        return Fa = y + D;
      }
      function oa(f) {
        m("[webFontTest] onTestDataURIComplete : " + f);
        (u = f) ? T(!0) : d(0);
      }
      function T(f) {
        var y;
        f && (N = new Ya() - 0);
        for (y in F) {
          H(y) ? (m("[webFontTest] success! " + y), O = ea(Ha, "div", {"aria-hidden":"true", className:M, id:M}), g = Vb(), Xb(g, "@import", F[y]), ha(ba, !0)) : p(100) ? (m("[webFontTest] timeout! " + y), delete F[y], ha(T, !0)) : ha(T);
          return;
        }
        d(0);
      }
      function ba(f) {
        f && (m("[webFontTest] testImportedCssReady start!"), C = C.replace(la, ""), m("[webFontTest] targetWebFontName : " + C), N = new Ya() - 0);
        1 < O.offsetWidth ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Da(O), ca = 100, ha(r, !0)) : p(ca) ? 528 > Ja ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Da(O), ca = 100, ha(r, !0)) : (m("[webFontTest] testImportedCssReady timeout!"), Da(O), d(0)) : ha(ba);
      }
      var ca = c || 5000, N, u, A, O, Ba, Fa, g;
      k || ia ? ia || k() ? (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !I.fonts || 603 > Ja ? (m("[webFontTest] No native font loader."), r(!0)) : (m("[webFontTest] Use Native font loader."), l())) : (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), ha(d, 0)) : (m("[webFontTest] webFontTest_maybeCanUseWebFont : false"), ha(d, 0));
    };
  })();
  var Na = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Na(960), ")", "(", Na(234), Na(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Na(9824), "\u2190", Na(9829), Na(9830), Na(9827), Na(956), "\u03a9", "\u2193", "\u2192", "%", Na(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Na(9619)], cc = (9 === v || ja && 0 <= q.conpare(R, "1.8.1") || sb) && !Ga, qb = [], rb, Va, Nb = 7.2 > U ? function() {
    rb = !rb;
    for (var k = -1, E; E = qb[++k];) {
      -1 !== E.className.indexOf("pbAlp") ? ka(E, "display", rb ? "" : "none") : (cb(E, rb ? "pbChrCS" : "pbChr00"), Ea(E, rb ? "pbChr00" : "pbChrCS"));
    }
  } : cc ? function() {
    rb = !rb;
    for (var k = -1, E; E = qb[++k];) {
      ka(E, "opacity", rb ? 1 : 0);
    }
  } : Q;
  var Yb = Z.startBlinkingIfCursor = function(k) {
    Nb ? hb(k, "pbChrCS") && (Va || !U && !L || (Va = setInterval(Nb, 400)), -1 === qb.indexOf(k) && qb.push(k)) : qb = Q;
  };
  Z.stopBlinkingIfCursor = function(k) {
    Nb && (k = qb.indexOf(k), 0 <= k && (qb.splice(k, 1), !qb.length && Va && (clearInterval(Va), Va = 0)));
  };
  cc && J(function(k) {
    k ? Va || (Va = setInterval(Nb, 400)) : Va && (clearInterval(Va), Va = 0);
  });
  Nb && ma(function() {
    Va && clearInterval(Va);
  });
  Ga || J(function(k) {
    k ? (w(da, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (ra || 9 === v || 5.5 <= v && 9 > v && Ib) && cb(da, "jsCanRotate")) : (W(da, "forced-colors"), Ea(da, "jsCanRotate"));
  });
  (function() {
    function k(u) {
      H = u;
      m("[pbList] WebFont test result : " + !!u);
      u ? Y() : ub ? la(!0) : ub !== Q ? Y() : (m("[pbList] Need imageTest " + oa), Cb(la, oa));
      m("window.offscreenBuffering = " + B.offscreenBuffering);
    }
    function E() {
      E = Q;
      Ma(k, "PB-100", {"PB-100_canTTF":Wa + "pbFont/ttf.css", "PB-100_canWOFF":Wa + "pbFont/woff.css", "PB-100_canEOT":Wa + "pbFont/eot.css", "PB-100_canSVG":Wa + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function S(u) {
      this.focus();
      u.preventDefault();
      u.stopPropagation();
    }
    function la(u) {
      u ? (m("[pbList] Fallback start!"), cb(Ha, "pbList-noWebFont")) : m("[pbList] image disabled!");
      Y();
    }
    function Y() {
      for (k = Ma = Q; r.length;) {
        ia(r.shift(), r.shift());
      }
      m("[pbList] complete.");
    }
    function ia(u, A) {
      function O(t) {
        t = kb(t);
        for (var D = -1, K; K = t[++D];) {
          switch(K.nodeType) {
            case 1:
              O(K);
              break;
            case 3:
              K.data && Fa(K.data) && g.push(K);
          }
        }
      }
      function Ba(t) {
        var D = t.children, K = 0, pa = D.length;
        if (pa) {
          for (; K < pa; ++K) {
            Ba(D[K]);
          }
        } else {
          (D = t.innerText) && Fa(D) && g.push(t);
        }
      }
      function Fa(t) {
        return t.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var g = [], f;
      if (k) {
        -1 === r.indexOf(u) && (r.push(u, A), T && E && E());
      } else {
        var y = r.indexOf(u);
        0 <= y && r.splice(y, 2);
        for (5 > v ? Ba(u) : O(u); f = g.shift();) {
          y = 5 > v ? f.innerText : f.data, 2 !== H && (y = y.split(b).join(M)), A ? 5 > v ? f.innerText = y : f.data = y : G(y.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(F).split("&amp;").join("&"), f);
        }
      }
    }
    function G(u, A) {
      function O(sa, ta) {
        for (var xb = ""; ta;) {
          ta & 1 && (xb += sa), ta >>= 1, sa += sa;
        }
        return xb;
      }
      function Ba(sa, ta, xb) {
        for (var Zb, ec = -1, $b, ac; Zb = ta[++ec];) {
          for (; 0 <= ($b = sa.indexOf(Zb));) {
            ac = Zb.length, sa = sa.substr(0, $b) + O(xb, ac) + sa.substr($b + ac);
          }
        }
        return sa;
      }
      function Fa(sa) {
        var ta = V(sa), xb = "" + ta;
        return 0 < ta && ta === ta | 0 && (ta = sa.indexOf(xb) + xb.length, ta <= sa.length) ? ta : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), f = 5 > v || 1 === A.nodeType, y = [], t = "", D, K = -1, pa, Ka, db;
      if (f) {
        if (ca) {
          var xa = A.style.visibility;
          ka(A, "visibility", "hidden");
        }
        A.innerHTML = "";
      }
      if (N) {
        var Oa = A;
        A = I.createDocumentFragment();
      }
      if (function(sa) {
        var ta = sa.indexOf("P");
        if (-1 === ta) {
          return !1;
        }
        ta = V(sa.charAt(ta + 1));
        return 0 <= ta && 9 >= ta;
      }(u)) {
        t = O("+", u.length);
      } else {
        0 <= (D = Fa(u)) && (t = O("|", D), K = D, --K);
        for (; D = u.charAt(++K);) {
          D === F || pa ? (t += "~", D === F && (pa = !pa)) : t += D;
        }
        t = Ba(t, p, "^");
        t = Ba(t, d, "{");
        t = Ba(t, l, "}");
      }
      K = 0;
      for (pa = u.length; K < pa; ++K) {
        D = u.charAt(K);
        var P = D === c;
        var Sa = " " === D;
        D = P ? " " : D;
        var fa = t.charAt(K);
        var mb = (Ka = yb) && P;
        var yb = "|" === fa;
        fa = g["+|~{}^".indexOf(fa) + 1];
        "\n" !== D ? (H || !ub ? (2 === H && u.substr(K, 2) === b && (D = b, ++K), fa = Sa && "str" === fa ? "pbList-strsp" : P ? "" : !Sa && fa ? "pbList-" + fa : "") : (P = wb.indexOf(D), P = -1 === P ? "" : wb.indexOf(D).toString(16).toUpperCase(), P = (P = 1 === P.length ? "0" + P : P) ? "pbChr" + P : "", fa = Sa && "str" === fa ? "pbList-strsp" : Sa || !P ? "" : fa ? (P ? P + " " : "") + "pbList-" + fa : P), P = Q, mb ? (D = 6 <= v && 8 > v ? " " : c, fa = "") : yb && (1.9 > ja || 9.5 > U) ? 
        (yb && !Ka && (db = 4 - (V(u.substr(K)) + "").length), 7.5 > U ? P = ba ? "position:relative;top:-4px;left:" + 12 * db + "px" : {position:"relative", top:"-4px", left:12 * db + "px"} : 1.3 <= ja ? (P = ba ? "position:absolute;left:" + 12 * db + "px" : {position:"absolute", left:12 * db + "px"}, ++db) : P = ba ? "position:relative;left:" + 12 * db + "px" : {position:"relative", left:12 * db + "px"}) : Sa && 7.5 > U && (fa = "pbList-strsp"), ba ? y.push("<font" + (fa ? ' class="' + fa + '"' : 
        "") + (P ? ' style="' + P + '"' : "") + ">" + D + "</font>") : f || N ? ea(A, "font", {"class":fa, style:P}, D) : lb(A, "font", {"class":fa, style:P}, D)) : (Ka = yb = !1, ba ? y.push(D) : f || N ? vb(A, D) : Sb(A, D));
      }
      if (f) {
        ba ? A.innerHTML = y.join("") : N && Oa.appendChild(A), ca && ka(A, "visibility", xa);
      } else {
        if (ba) {
          g = I.createElement("font");
          for (g.innerHTML = y.join(""); y = g.firstChild;) {
            A.parentNode.insertBefore(y, A);
          }
          Da(A);
        } else {
          N ? Oa.parentNode.replaceChild(A, Oa) : Da(A);
        }
      }
    }
    ib(function(u) {
      if (u) {
        u = Kb("pbChrCS");
        for (var A = 0, O = u.length; A < O; ++A) {
          Yb(u[A]);
        }
        return !0;
      }
    });
    var C = [];
    ib(function(u) {
      function A(xa) {
        var Oa = z(xa, "pbTip"), P = Oa.charAt(0), Sa = "_" === P;
        Oa = Sa ? Oa.charAt(2) : P;
        P = Sa ? "Btm" : "";
        var fa = z(xa, "title");
        Fa || (W(xa, "pbTip"), W(xa, "title"), cb(xa, "pbTipPos" + Oa.toUpperCase()), ea(xa, "div", {className:"pbTip" + P, style:{width:fa.length + Ba + "em"}}, fa));
        ea(xa, "div", {className:"pbTail" + P});
        g && Sa && (xa.focus(), xa.blur());
      }
      function O(xa) {
        if (2 > Ta) {
          var Oa = z(xa, "pbGhst"), P = xa.className, Sa = P.split("pbCsr")[1] || "", fa = P.split("pbAlp")[1] || "";
          if ("CS" === Oa) {
            var mb = "_";
          } else {
            mb = Oa, 3 === mb.length && (mb = mb.substr(0, 2)), mb = wb[parseInt(mb, 16)] || "~";
          }
          var yb;
          Sa = Sa.split(" ")[0];
          fa = V(fa.split(" ")[0]);
          var sa = 10 - fa;
          fa && 7.2 > U && (P = P.split("pbChr")[1], P = P.split(" ")[0], ka(xa, "backgroundPosition", Fb(P, 2, K) + "px " + -24 * (10 - fa) + "px"));
          Oa && (7.2 > U && (yb = {backgroundPosition:Fb(Oa, 2, K) + "px " + -24 * (10 - sa) + "px"}), W(xa, "pbGhst"), y = lb(xa, "b", {className:"pbChr" + Oa + " pbAlp" + sa + " pbCsr" + Sa, style:yb}, mb), Yb(y));
          Yb(xa);
        }
      }
      if (u) {
        var Ba = 6 > v ? 2 : 0;
        u = bb("SAMP");
        var Fa = 8 === v, g = 5 <= v && 6 > v, f, y, t, D;
        Ib && cb(Ha, "pbLCD-AX");
        if (u.length) {
          for (t = -1; f = u[++t];) {
            if (hb(Ra(f), "pbLCD")) {
              var K = hb(f, "PB-120") || hb(f, "FX-795P");
              var pa = Ua(f);
              for (f = pa.length; f;) {
                var Ka = pa[--f];
                switch(Lb(Ka)) {
                  case "A":
                    (2 > Ta || Fa) && A(Ka);
                    if (2 > Ta) {
                      var db = Ua(Ka);
                      for (D = db.length; D;) {
                        !Fa && O(db[--D]);
                      }
                    }
                    Gb ? w(Ka, "href", "javascript:void(0)") : (pb(Ka, "click", S), C.push(Ka));
                    break;
                  case "B":
                    2 > Ta && O(Ka);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ma(function() {
      for (var u; u = C.shift();) {
        za(u, "click", S);
      }
    });
    6 === v && (new La("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var F = wb[7], M = wb[30], a = wb[113], b = Na(8337) + Na(8331), c = Na(160);
    Na(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), p = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + M + wb[31]).split(""), r = [], H, oa, T;
    ib(function(u) {
      if (u) {
        oa = 1 > Wa + ja ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        u = bb("*");
        for (var A = -1, O; O = u[++A];) {
          hb(O, "pbList") ? ia(O) : hb(O, "pbFont") && ia(O, !0);
        }
        r.length && (m("[pbList] " + r.length / 2 + " elements found. WebFont test start."), E());
        return !0;
      }
    });
    ja && q.conpare(R, "0.9.6");
    var ba = !1, ca = 8 > U, N = !ba && !ca && !(6 > v) && I.createDocumentFragment && !!Ha.replaceChild;
    Z.prettify = ia;
  })();
  var dc = I.scripts || bb("script");
  var Wa = dc[dc.length - 1].src.split("/");
  --Wa.length;
  (Wa = Wa.join("/")) && (Wa += "/");
  m("[p_assetUrl] " + Wa);
  Aa(function() {
    var k;
    (k = Rb("logger")) || alert("#logger not found!");
    k ? (m = function(E) {
      ea(k, "P", Q, E);
    }, Eb = function(E) {
      ea(k, "P", {style:{color:"red"}}, E);
    }, B.onerror = function(E, S, la) {
      Eb(E + ", " + S + ", " + la);
      return !0;
    }) : B.console ? (m = console.log, Eb = console.error) : U ? (m = x, Eb = opera.postError) : m = Eb = x;
    for (; Qa.length;) {
      m(Qa.shift());
    }
    for (; gb.length;) {
      m(gb.shift());
    }
    Qa = gb = Q;
  });
  6.1 > $a && Mb(Ob);
  ma(Jb);
  6.1 > $a && Mb(Pb);
  ma(Qb);
  10 > v && (11 !== tb || 5 !== v) || (9 > U || 1 > ja || !Za && !B.addEventListener ? I.write('<link href="' + Wa + Ab + '" rel="stylesheet"' + (8 > U ? "" : ' media="screen,handheld,projection,print"') + ">") : Aa(function() {
    ea(nb, "link", {href:Wa + "" + Ab, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

