PB100={};var m;
ua = [];
ua.conpare = function(Y, q) {
  var D = 0, x, I, ta = (Y + "").split("."), T = (q + "").split("."), Ma = ta.length;
  for (x = T.length; "0" === ta[Ma - 1];) {
    --Ma;
  }
  for (; "0" === T[x - 1];) {
    --x;
  }
  for (I = Ma < x ? Ma : x; D < I; ++D) {
    var Xa = ta[D] - 0, n = T[D] - 0;
    if (Xa !== n) {
      return Xa > n ? 1 : -1;
    }
  }
  return Ma > x ? 1 : Ma === x ? 0 : -1;
};
(function(Y, q, D, x, I, ta, T, Ma) {
  function Xa(J, qa, L) {
    L = ta(J.split(qa)[1]);
    return 0 <= L ? L : 0;
  }
  function n(J, qa) {
    return 0 <= J.indexOf(qa);
  }
  function Ya(J) {
    return n(J, "Linux armv") || n(J, "Linux aarch") || n(J, "Linux i686") || n(J, "Linux x86_64");
  }
  function P(J, qa) {
    for (var L in qa) {
      if (L === J) {
        return !0;
      }
    }
  }
  function h(J, qa) {
    var L = "", Ga = -1, eb;
    if (J = J.split(qa)[1]) {
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
  function wa(J) {
    for (var qa = arguments, L = 1, Ga = qa[0], eb; L < qa.length; ++L) {
      0 > Ha(Ga, eb = qa[L]) && (Ga = eb);
    }
    return Ga;
  }
  function Fb(J) {
    return J === J + "" ? J : J === J - 0 ? "" + J : J.min && J.max ? J.min + "~" + J.max : J.min ? J.min + "~" : "~" + J.max;
  }
  var Ha = Y.conpare, e = x.userAgent, ca = x.appVersion, nb = ta(ca) || 0, Q = x.platform, v = D.documentElement, Za = v && v.style, Ia = D.documentMode, U = I.width;
  I = I.height;
  var ha = q.HTMLAudioElement, xb = q.performance, sb = q.Int8Array, Ja = q.ontouchstart !== Ma, $a = h(ca, "Version/") || h(e, "Version/"), Gb = q.operamini, ya = !Gb && q.opera, Ub = ya && (ya.version && "function" === typeof ya.version ? ya.version() : wa(h(e, "Opera "), $a, nb)), Hb = q.opr, tb = !ya && (D.all || Ia);
  Ia = tb && (Ia ? Ia : q.XMLHttpRequest ? D.getElementsByTagName ? 7 : 4 : D.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  v = !tb && v.msContentZoomFactor;
  var fb = !v && (q.chrome || q.chromium), kb = !tb && function() {
    for (var J in Za) {
      if (0 === J.indexOf("Moz")) {
        return !0;
      }
    }
  }(), yb = n(e, "UCWEB"), Ib = yb && h(e, " U2/"), ub = yb && h(e, "; wds "), lb = h(e.split("_").join("."), "; iPh OS "), va = h(e, "; Adr "), ab = n(ca, "YJApp-ANDROID"), Da = n(Q, "Android") || kb && n(ca, "Android") || ab;
  va = h(Q, "Android ") || h(ca, "Android ") || h(e, "Android ") || va;
  var Qa = n(Q, "Linux"), zb = "MacIntel" === Q && x.standalone !== Ma, Ab = kb && h(e, "Goanna/"), Na = !Ab && kb && (h(e, "rv:") || h(e.substr(e.indexOf(") Gecko/") - 11), "; ")), ia = h(e, "Firefox/"), W = h(e, "Opera/"), Bb = q.FNRBrowser, Ra = Xa(e, "AppleWebKit/"), gb = h(e, "Chrome/"), Ob = h(ca, "Iron/"), Jb = h(e, "OPR/"), Pb = h(ca, "KHTML/"), Qb = h(e.toLowerCase(), "iris");
  h(e, "FxiOS/");
  h(e, "CriOS/");
  h(e, "EdgiOS/");
  var Rb = h(e, "Silk/"), bb = Xa(e, "SamsungBrowser/"), Kb = !bb && function() {
    for (var J = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    qa, L = J.length; qa = J[--L];) {
      if (n(e, qa)) {
        return 2 > ta($a) ? $a : 0.9;
      }
    }
    J = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (L = J.length; qa = J[--L];) {
      if (n(e, qa)) {
        return $a;
      }
    }
  }(), Sa = fb && 534.3 >= Ra, mb = Ya(Q), Ua = mb && !n(e, Q) && Ya(e);
  Ja = Ja && (Ra || kb) && Ua || !va && ab;
  ab = !!q.ReactNativeWebView;
  mb = mb && function() {
    for (var J in q) {
      if (0 === J.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var da = (Ua = q.puffinDevice) && Ua.clientInfo;
  da = (Ua = da && "iOS" === da.os && da.osVersion) && da.model;
  var hb = !Ia && D.registerElement, ob = !Ia && D.execCommand, vb = q.webkitCancelAnimationFrame, Sb = Qa && hb && "11.0.696.34" === gb, Ea = q._firefoxTV_playbackStateObserverJava, Lb = Xa(e, "diordnA ");
  if ("Nitro" === Q) {
    var z = 1;
  } else if ("Nintendo DSi" === Q) {
    z = 2;
    var w = W;
  } else if ("New Nintendo 3DS" === Q || n(e, "iPhone OS 6_0") && 320 === U && 240 === I) {
    z = 4, w = h(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === Q) {
    z = 3, w = h(e, "Version/"), Ra = 535;
  } else if ("Nintendo Swicth" === Q) {
    z = 7, w = h(ca, "NintendoBrowser/");
  } else if (q.wiiu) {
    z = 6;
    w = h(ca, "NintendoBrowser/");
    var V = 15, Z = h(ca, "AppleWebKit/") || (vb ? 536 : 534);
    w || (w = vb ? 4 : 2, n(ca, "Macintosh;") || n(ca, "Windows NT") && n(ca, "Touch"));
  } else if (ya && ya.wiiremote) {
    z = 5, w = h(e, "Wii; U; ; ");
  } else if (W = h(e, "PlayStation Vita ")) {
    z = 10, w = W;
  } else if (W = h(e, "(PlayStation Portable); ")) {
    z = 8;
    w = W;
    var ib = 3.3;
  } else if (W = h(e, "PLAYSTATION 3; ") || h(e, "PLAYSTATION 3 ")) {
    z = 11, w = W, 0 > Ha("4.10", W) && (V = 26, Z = W);
  } else if (n(e, "Xbox One")) {
    z = 15, w = 1;
  } else if (n(e, "Xbox")) {
    z = 14, w = 1;
  } else if (2 === nb && n(e, "Sony/COM2/")) {
    z = 17;
    w = 2;
    ib = 3.4;
    var cb = !0;
  } else if (0 === Q.indexOf("iP") || lb || Ua || zb) {
    if (Ua) {
      switch(w = Ua, da.substr(0, 4)) {
        case "iPho":
          var Fa = 0;
          h(da, Fa);
          var ka = !0;
          break;
        case "iPad":
          Fa = 1;
          h(da, Fa);
          var xa = !0;
          break;
        case "iPod":
          Fa = 2;
          h(da, Fa);
          var pb = !0;
      }
    } else {
      lb ? w = lb : (w = h(ca.split("_").join("."), "OS "), P("isSecureContext", q), P("enableWebGL", q), P("sameOrigin", q));
      if (!w || Bb) {
        w = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : T.isNaN ? 9.2 : q.SharedWorker ? xb && xb.now ? 8.0 : 8.4 : ob ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : sb ? 4.3 : ha ? 4.1 : 3.2;
      }
      var za = U === 1.5 * I || 1.5 * U === I;
      0 === Q.indexOf("iPhone") ? (Fa = 0, ka = !0) : 0 === Q.indexOf("iPad") || zb ? (Fa = 1, xa = !0) : 0 === Q.indexOf("iPod") && (Fa = 2, pb = !0);
    }
    V = !Ua && (x.standalone || (xa || 12 > w) && P("webkitFullscreenEnabled", D) || 11 <= w && 13 > w && x.mediaDevices) ? 16 : 17;
    z = 24;
    Z = w;
  } else if (n(e, "Kobo")) {
    z = 18, V = 21, Z = 2.2, Da = !0;
  } else if (n(e, "EBRD")) {
    z = 19, V = 21, Z = 2.2;
  } else if (W = h(e, "CrOS x86_64 ") || h(e, "CrOS aarch64 ") || h(e, "CrOS i686 ") || h(e, "CrOS armv7l ")) {
    z = 28, w = W;
  } else if (q.onmoztimechange !== Ma) {
    z = 29, w = 18.1 > Na ? "1.0.1" : 19 > Na ? 1.1 : 27 > Na ? 1.2 : 29 > Na ? 1.3 : 31 > Na ? 1.4 : 33 > Na ? 2.0 : 35 > Na ? 2.1 : 38 > Na ? 2.2 : 45 > Na ? 2.5 : 2.6, n(e, "Mobile") ? ka = !0 : n(e, "Tablet") ? xa = !0 : n(e, "TV");
  } else if (q.palmGetResource) {
    z = 30, w = h(e, "webOS/") || h(e, "WEBOS") || h(e, "hpwOS/"), n(e, "webOS.TV") || n(e, "/SmartTV") || (ka = !0);
  } else if (W = h(e, "Tizen ")) {
    z = 31, w = W, V = 24, Z = bb, ka = !0;
  } else if (W = h(e, "Windows Phone ") || h(ca, "Windows Phone OS ") || ub) {
    z = 23, w = W, ka = !0;
  } else if (v && "ARM" === Q) {
    z = 23, w = 10, ka = !0;
  } else if (tb && n(ca, "ZuneWP")) {
    z = 23, w = 11 === Ia ? 8.1 : 10 === Ia ? 8 : 9 === Ia ? 7.5 : 7 === Ia ? 7 : "?", ka = !0;
  } else if (n(e, "FOMA;")) {
    z = 16, ka = !0;
  } else if (n(e, "SoftBank;")) {
    z = 16, ka = !0;
  } else if (n(e, "KFMUWI")) {
    var Aa = !0;
    w = 6.3;
    var pa = xa = !0;
  } else if (n(e, "KFKAWI")) {
    Aa = !0, w = 6, pa = xa = !0;
  } else if (n(e, "KFSUWI") || n(e, "KFAUWI") || n(e, "KFDOWI")) {
    Aa = !0, w = 5, pa = xa = !0;
  } else if (n(e, "KFGIWI")) {
    Aa = !0, w = 5, pa = xa = !0;
  } else if (n(e, "KFARWI") || n(e, "KFSAWA") || n(e, "KFSAWI")) {
    Aa = !0, w = 5 <= ta(va) ? 5 : 4, pa = xa = !0;
  } else if (n(e, "KFSOWI") || n(e, "KFTHWA") || n(e, "KFTHWI") || n(e, "KFAPWA") || n(e, "KFAPWI")) {
    Aa = !0, w = 3, pa = xa = !0;
  } else if (n(e, "KFOT") || n(e, "KFTT") || n(e, "KFJWA") || n(e, "KFJWI")) {
    Aa = !0, w = 2, pa = xa = !0;
  } else if (n(e, "Kindle Fire")) {
    Aa = !0, w = 1, pa = xa = !0;
  } else if (W = h(e, "Kindle/")) {
    z = 20, w = W, V = 21, Z = 2.2;
  } else if (Ea) {
    Aa = !0, w = va || Lb, pa = !0;
  } else if (n(e, "AmazonWebAppPlatform") || n(e, "; AFT")) {
    Aa = !0, w = va, pa = !0;
  } else if (n(e, "MeeGo")) {
    z = 32;
  } else if (n(e, "Maemo")) {
    z = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || Qb) {
    z = 22, cb = !0;
  } else if ("WinCE" === Q) {
    z = 21, cb = !0;
  } else if (0 === Q.indexOf("Win")) {
    z = "Win16" === Q ? 35 : "Win32" === Q ? 36 : "Win64" === Q ? 37 : 0, w = h(e, "Windows NT ") || h(e, "Windows ");
  } else if (0 === Q.indexOf("Mac")) {
    z = "Mac68K" === Q ? 39 : "MacPowerPC" === Q || "MacPPC" === Q ? 38 : "MacIntel" === Q ? 40 : 0;
    if (W = h(e.split("_").join("."), "Mac OS X ")) {
      w = W;
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
  } else if (Da && kb) {
    n(e, "Android 4.4;") ? za = {min:2.3} : 4 <= ta(va) ? za = va : za = {min:2.2}, w = za;
  } else if (Da && ya) {
    va ? za = va : za = {min:1.6}, w = za, n(e, "Tablet") ? xa = !0 : ka = !0;
  } else if (va) {
    w = va, Da = !0;
  } else if (Qa && Ja || ab || mb) {
    var jb = !0;
    bb ? za = {min:4.4} : fb && !Sa || Hb || Jb ? za = {min:4} : (za = va = Za.touchAction !== Ma ? {min:5} : hb ? 4.4 : sb ? x.connection ? q.searchBoxJavaBridge_ || fb ? T.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ra ? 3 : 533 <= Ra ? ha ? 2.3 : 2.2 : 530 <= Ra ? 2.0 : 1.5, Kb && (V = 24, Z = Kb));
    w = za;
    Da = !0;
  } else {
    Sb ? (w = {min:5}, jb = Da = !0) : Qa && (n(e, "Ubuntu") ? z = 46 : (W = h(e, "Mint/")) ? (z = 47, w = W) : (W = h(e, "Fedora/")) ? (z = 48, w = W) : z = n(e, "Gentoo") ? 49 : 50);
  }
  Aa || Da && jb && Rb ? z = 27 : Da && (z = z || 26);
  V || (pa = pa || Da, ya ? (V = pa || cb || ka || xa ? 9 : 8, Z = Ub) : tb ? (za = Xa(ca, "Trident/") + 4, V = cb || ka || xa || pb ? 3 : Mb && 5 <= Ia ? 7 : 2, Z = Ia) : v ? (V = 23 === z ? 6 : 5, Z = h(ca, "Edge/")) : Ab ? (V = 13, Z = Ab) : kb ? (V = pa ? 12 : 11, Z = Na || ia) : bb ? (V = 24, Z = bb) : (W = ib || h(e, "NetFront/")) ? (V = 18, Z = W) : (W = h(e, "iCab")) ? (V = 19, Z = W) : (W = wa(h(e, "Opera Mini/"), h(e, "Opera Mobi/")) || Gb && $a) ? (V = 10, Z = W, z || (n(e, "iPhone") ? 
  Fa = 0 : n(e, "iPad") ? Fa = 1 : n(e, "iPod") && (Fa = 2), Fa && (z = 24))) : yb ? (V = 25, Z = Ib) : Pb ? (V = 14, Z = nb) : Da && Sa ? (V = 21, Z = va) : fb || Hb || Jb ? (V = pa ? 22 : 20, Z = gb || Ob) : Da && hb ? (V = 23, Z = 5 > ta(va) ? va : gb) : Da && ($a || jb) ? (V = 21, Z = va) : gb ? (V = pa ? 22 : 20, Z = gb) : Ra && (V = 15, Z = Ra));
  z && (Y[2] = z, w && (Y[3] = Fb(w)));
  V && (Y[0] = V, Z && (Y[1] = Fb(Z)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Cb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var Y = this[this.length - 1];
  --this.length;
  return Y;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Y = arguments, q = 0, D = Y.length, x = this.length; q < D; ++q) {
    this[x + q] = Y[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Y = this[0], q = 1, D = this.length; q < D; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return Y;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Y = arguments, q = Y.length, D = this.length += q - 1, x = D; x >= q; --x) {
    this[x] = this[x - q];
  }
  for (x = 0; x < q; ++x) {
    this[x] = Y[x];
  }
  return D;
});
Array.prototype.splice || (Array.prototype.splice = function(Y, q) {
  var D = arguments, x = D.length - 2 - q, I = this.slice(Y, Y + q), ta;
  if (0 < x) {
    var T = this.length - 1;
    for (ta = Y + q; T >= ta; --T) {
      this[T + x] = this[T];
    }
  } else if (0 > x) {
    T = Y + q;
    for (ta = this.length; T < ta; ++T) {
      this[T + x] = this[T];
    }
    this.length += x;
  }
  T = 2;
  for (ta = D.length; T < ta; ++T) {
    this[T - 2 + Y] = D[T];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Y, q) {
  var D = this.length >>> 0;
  if (0 === D) {
    return -1;
  }
  if (q) {
    var x = q || 0;
    x = -Infinity === x ? 0 : (0 > x ? -x : x) | 0;
    if (D <= x) {
      return -1;
    }
  }
  for (x = 0 <= x ? x : 0 < D + x ? D + x : 0; x < D; ++x) {
    if (this[x] === Y) {
      return x;
    }
  }
  return -1;
});
(function(Y, q, D, x, I, ta, T, Ma, Xa, n, Ya, P) {
  function h(k) {
    if (q[0] === k) {
      return Q === Q + "" ? T(Q) : Q;
    }
  }
  function wa(k) {
    var E = q[3];
    if (q[2] === k) {
      return E === E + "" ? T(E) : E;
    }
  }
  function Fb(k, E, R) {
    k + "" === k && ("a" === k.charAt(2) && (R = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > U ? 117 : 9 > v || 9 > U || Za ? 1 : 132 : parseInt(k, 16));
    R && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (E || 2));
  }
  var Ha = I.body, e = Ha.style, ca, nb, Q = q[1], v = h(2) || h(3), Za = h(7), Ia = h(5) || h(6), U = h(8) || h(9), ha = h(11) || h(12), xb = ha && 0 <= q.conpare(Q, "1.9.1"), sb = h(13), Ja = h(15), $a = h(16) || h(17), Gb = h(10) || h(25), ya = h(20) || h(22), Ub = ya || h(23) || h(21) || h(24), Hb = ya && T(ta.userAgent.split("Edg/")[1]), tb = T(ta.appVersion.split("Trident/")[1]) + 4, fb = wa(35) || wa(36) || wa(37), kb = !v && !Za && (new Ma('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  yb = (Za ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > U ? "opr70" : 8 > U ? "opr72" : 9.5 > U ? "opr" + (U | 0) : ha && !xb ? 1.3 <= ha ? "gck190" : 1 <= ha ? "gck121" : "gck097" : "modern") + ".css";
  wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9) || wa(10);
  var Ib, ub, lb, va = e.transform !== P ? "transform" : e["-o-transform"] !== P ? "-o-transform" : e["-ms-transform"] !== P ? "-ms-transform" : e.MozTransform !== P ? "-moz-transform" : e["-webkit-transform"] !== P ? "-webkit-transform" : "", ab = [], Da = [], Qa = [], zb, Ab, Na, ia, W, Bb, Ra = [], gb = [], Ob, Jb, Pb, Qb;
  (function() {
    function k() {
      for (var c, d = 0, l = new Ya() - 0; d < F.length;) {
        l < F[0].t ? ++d : (c = F.splice(d, 1)[0], c.f(c.p));
      }
      b = F.length ? Xa(k, M) : 0;
    }
    function E() {
      for (var c, d = 0; d < X.length; ++d) {
        c = X[d], c.f();
      }
    }
    function R() {
      C && (C = clearInterval(C));
    }
    function la() {
      b && (b = n(b));
    }
    m = function(c) {
      Ra.push(c);
    };
    Cb = function(c) {
      gb.push(c);
    };
    Bb = function(c) {
      X.length || (C = setInterval(E, ja));
      X.push({f:c, B:++G});
      return G;
    };
    Ob = function() {
      C && (R(), C = setInterval(E, ja));
    };
    Jb = R;
    var X = [], ja = 500, G = 0, C;
    if (5 > v || Za) {
      D._wdb_onlooptimer = E, E = "_wdb_onlooptimer()";
    }
    ia = function(c, d, l) {
      F.length || (b = Xa(k, M));
      F.push({f:c, p:d, B:++a, t:new Ya() - 0 + (M < l ? l : M)});
      return a;
    };
    W = function(c) {
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
      D._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var Rb, bb, Kb, Sa, mb, Ua, da, hb, ob, vb, Sb, Ea, Lb, z, w, V, Z, ib, cb, Fa, ka, xa;
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
                for (var ra = ++l, S, aa = [], ba = r.split(""), N = ba.length; N;) {
                  S = ba[--N], "A" <= S && "Z" >= S && (S = "-" + S.toLowerCase()), aa[N] = S;
                }
                d[ra] = aa.join("") + ":" + H[r] + ";";
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
    function R(a) {
      return C ? a.parentElement : a.parentNode;
    }
    function la(a, b, c, d, l, p) {
      if (C) {
        var r = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var H = mb(2 > a ? Sa(b) : b);
        H = 2 > a ? H.indexOf(b) + a : H.length;
        b.insertAdjacentHTML(r, k(c, d, l));
        b = mb(b)[H];
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
                  Z(b, c);
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
        M || null != l && X(b, l);
      }
      return b;
    }
    function X(a, b) {
      if (C) {
        return la(2, a, "font", P, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function ja(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function G(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var C = 5 > v;
    ca = E("html")[0];
    nb = E("head")[0];
    Rb = function(a) {
      return D[a] || I[a] || I.getElementById(a);
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
    Sa = R;
    mb = function(a) {
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
    da = function(a, b, c, d, l) {
      b = la(2, a, b, c, d, l);
      C || (a.appendChild(b), M && null != d && X(b, d));
      return b;
    };
    hb = function(a, b, c, d, l) {
      b = la(0, a, b, c, d, l);
      C || (R(a).insertBefore(b, a), M && null != d && X(b, d));
      return b;
    };
    ob = function(a, b, c, d, l) {
      b = la(1, a, b, c, d, l);
      var p;
      C || ((p = a.nextSibling) ? Sa(p).insertBefore(b, p) : Sa(a).appendChild(b), M && null != d && X(b, d));
      return b;
    };
    vb = X;
    Sb = function(a, b) {
      if (C) {
        return la(0, a, "font", P, b);
      }
      var c = I.createTextNode("" + b);
      Sa(a).insertBefore(c, a);
      return c;
    };
    Ea = function(a) {
      Sa(a) ? C ? a.outerHTML = "" : Sa(a).removeChild(a) : m("[DOM] p_DOM_remove(), No parentNode!");
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
    V = function(a, b) {
      a.removeAttribute(b);
    };
    Z = ja;
    ib = G;
    cb = function(a, b) {
      var c;
      if (!G(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        ja(a, c + b);
      }
    };
    Fa = function(a, b) {
      if (G(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        ja(a, c.join(" "));
      }
    };
    ka = function(a, b, c) {
      a.style[b] = c;
    };
    xa = function(a, b) {
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
        9 > U || 1 > ha ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var pb, za, Aa, pa, Mb, jb, J, qa, L, Ga;
  (function() {
    function k() {
      return ba ? u ? 2 : N ? 3 : 1 : 0;
    }
    function E(g) {
      za(D, "load", E);
      E = P;
      la(ab, g, !0);
      ab = P;
    }
    function R(g, f) {
      jb(function() {
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
    function X(g, f, y) {
      c && !b.length && ia(ja);
      b.push(g, f, y);
    }
    function ja() {
      var g = b, f;
      for (b = []; f = g.shift();) {
        la(f, g.shift(), g.shift());
      }
    }
    function G(g) {
      var f = g || event;
      g = d[f.type];
      var y = -1, t, B;
      v ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : p && (f.A = f.stopPropagation, f.stopPropagation = function() {
        B = !0;
      });
      for (; t = g[++y];) {
        t.l === this ? (this.g = t.j, this.g(f), this.g = x, this.g = P) : 7.2 > U && this === I && t.l === D && (D.g = t.j, D.g(f), delete D.g);
      }
      if (v) {
        return f.preventDefault = f.stopPropagation = P, f.returnValue;
      }
      p && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (H = !0), B && !H && f.A(), f.A = f.stopPropagation = P);
    }
    function C() {
      var g = 9 === a.offsetWidth;
      qa !== g && (X(Da, qa = g), m("p_cssAvailability:" + qa));
    }
    function F(g) {
      ab || la(O, g);
    }
    var M = D.matchMedia, a, b = [], c;
    ab.push(function() {
      R = P;
      a = da(Ha, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Aa(function() {
        c = !0;
        b.length && ia(ja);
      });
    });
    pb = function(g, f, y, t) {
      if (r) {
        g.addEventListener(f, y, t ? kb ? t : t.capture : !1);
      } else {
        var B = {l:g, j:y};
        t = d[f];
        var K = "on" + f, sa, db;
        if (t) {
          for (sa = t.length; db = t[--sa];) {
            if (db.l === g && db.j === y) {
              return;
            }
          }
          d[f].push(B);
        } else {
          d[f] = t = [B], l || (f = g[K], "function" === typeof f && f !== G && t.unshift({l:g, j:f}));
        }
        l ? g.attachEvent(K, G) : g[K] = G;
      }
    };
    za = function(g, f, y, t) {
      if (r) {
        g.removeEventListener(f, y, t ? kb ? t : t.capture : !1);
      } else {
        t = d[f];
        f = "on" + f;
        var B, K, sa;
        if (t) {
          for (B = t.length; K = t[--B];) {
            K.l === g && (K.j === y ? t.splice(B, 1) : sa = !0);
          }
          sa || (l ? g.detachEvent(f, G) : (g[f] = x, g[f] = null));
        }
      }
    };
    var d = {}, l = !1, p = 525.13 > Ja, r = !p && !Za && D.addEventListener, H;
    p && ca.addEventListener("click", function(g) {
      if (H) {
        return H = !1, g.preventDefault(), !1;
      }
    });
    Aa = function(g) {
      ab ? ab.push(g) : alert("Load event has already been dispatched!");
    };
    pa = function(g) {
      ra && ra.push(g);
    };
    var ra = [];
    if (419.3 >= Ja) {
      var S = function() {
        if (S) {
          var g = I.readyState;
          "loaded" === g || "complete" === g ? (S = P, E()) : ia(S);
        }
      };
      ia(S);
    } else {
      pb(D, "load", E);
    }
    v || 1.8 > ha ? pb(D, "unload", function(g) {
      la(ra, g, !0);
    }) : ra = P;
    jb = function(g) {
      Da.push(g);
    };
    Aa(function() {
      C();
      Bb(C);
    });
    J = function(g) {
      Qa && Qa.push(g);
    };
    var aa = 60 > ha || sb, ba, N, u;
    if (89 <= ha || 89 <= ya || fb && 79 <= Hb || M && (M("(forced-colors:none)").matches || M("(forced-colors:active)").matches)) {
      Ga = !0, R("(forced-colors:active)", function(g) {
        ba = g.matches;
        L = k();
        X(Qa, L);
        m("(forced-colors:active):" + L);
      });
    } else if (10 <= v || Ia || fb && Hb) {
      Ga = !0, R("(-ms-high-contrast:black-on-white)", function(g) {
        ba = N = g.matches;
        L !== k() && (L = k(), X(Qa, L), m("(-ms-high-contrast:black-on-white):" + L));
      }), R("(-ms-high-contrast:white-on-black)", function(g) {
        ba = u = g.matches;
        L !== k() && (L = k(), X(Qa, L), m("(-ms-high-contrast:white-on-black):" + L));
      }), R("(-ms-high-contrast:active)", function(g) {
        ba = g.matches;
        L !== k() && (L = k(), X(Qa, L), m("(-ms-high-contrast:active):" + L));
      });
    } else if (fb && (v || ha && 0 <= q.conpare(Q, "1.8.1") || sb)) {
      var A = function() {
        function g(t, B) {
          if (B && "transparent" === t) {
            return 382.5;
          }
          if ("#" === t.charAt(0)) {
            return parseInt("0x" + t.substr(1, 2), 16) + parseInt("0x" + t.substr(3, 2), 16) + parseInt("0x" + t.substr(5, 2), 16);
          }
          var K = t.split("(")[1].split(",");
          return T(K[0]) + T(K[1]) + T(K[2]);
        }
        var f = I.defaultView;
        var y = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        f && (ba = "#123456" !== f && "rgb(18,52,86)" !== f, N = g(f) < g(y, !0), u = g(f) > g(y, !0), L !== k() && (L = k(), m("(forced-colors-fallback):" + L), X(Qa, L, aa)));
      };
      jb(function(g) {
        if (g) {
          return ka(a, "color", "#123456"), ka(a, "backgroundColor", "#123456"), aa ? (A(), Qa = P) : Bb(A), A = P, !0;
        }
      });
    } else {
      Qa = k = P;
    }
    Mb = function(g) {
      O.push(g);
    };
    var O = [], Ba = 0, Ka = 1 > ha || 1.2 <= ha && 1.8 > ha || 7.2 >= U;
    Ka ? Bb(function() {
      var g = D.scrollY || Ha.scrollTop;
      Ba !== g && (Ba = g, F());
    }) : pb(D, "scroll", F);
    pa(function() {
      Ka || za(D, "scroll", F);
    });
  })();
  var eb = 9 > v || 525 <= Ja && 530 > Ja || 2 > ya, Vb = 0, Wb, Xb, Yb, bc;
  (function() {
    function k(a) {
      for (var b = X.length, c; b;) {
        if (c = X[--b], c.F === a) {
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
    function R(a) {
      return a.styleSheet || a.sheet;
    }
    function la(a) {
      return a.owningElement || a.ownerNode;
    }
    Wb = function(a, b) {
      var c = E(), d = c.length;
      d = 0 <= b && b < d ? b : d;
      var l = c[d - 1];
      c = c[d];
      if (C || F) {
        var p = c ? hb(c, "style") : l ? ob(l, "style") : da(nb, "style");
        F && vb(p, "");
        var r = R(p);
        a && w(p, "media", a);
      } else if (ja || G) {
        r = {D:a, C:d, G:!0};
      }
      if (r) {
        return X.push({F:r, h:p, m:[]}), r;
      }
    };
    Xb = function(a) {
      a = k(a);
      var b = a.m, c = b.length, d;
      for (a.h && Ea(a.h); d = b[--c];) {
        d.i && Ea(d.i);
      }
      X.splice(X.indexOf(a), 1);
    };
    Yb = function(a, b, c, d) {
      var l = k(a), p = l.h;
      l = l.m;
      var r = "@import" === b, H = "@page" === b, ra = "@font-face" === b, S = l.length, aa = "", ba;
      if (a.imports) {
        var N = a.imports.length;
      } else {
        for (N = 0; N < S && "@import" === l[N].u; ++N) {
        }
      }
      if (r) {
        d = 0 <= d && d < N ? d : N;
        var u = b + ' "' + c + '"';
      } else {
        d = N <= d && d < S ? d : S;
        for (u in c) {
          aa += ";" + u + ":" + c[u];
        }
        aa = aa.substr(1);
        u = b + "{" + aa + "}";
        6 <= v && ra && (d = S);
      }
      S = {u:b, v:c, o:d, s:d};
      if (9 > v) {
        N = a.rules;
        var A = N.length;
        if (ra) {
          b = I.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + u + "</style>", b = b.lastChild, (ba = p.nextSibling) ? Sa(p).insertBefore(b, ba) : Sa(p).appendChild(b), S.i = b;
        } else {
          r ? a.addImport(c, d) : 5.5 <= v && H || a.addRule(b, aa, d);
          S.s = d + (N.length - A - 1);
          if (0 === N.length - A) {
            return m("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + u), -1;
          }
          m("[CSSOM] rules.length \u306e\u5897\u5206" + (N.length - A));
        }
      } else if (C || F) {
        (fb && Ja || 28 > ya) && r ? S.i = ob(p, "link", {href:c, rel:"stylesheet", type:"text/css"}) : eb && ra ? (b = S.i = ob(p, "style", {type:"text/css", media:a.media}), b.innerText = u) : a.insertRule(u, d);
      }
      l.splice(d, 0, S);
      if (ja || G) {
        p = k(a);
        ba = p.m;
        b = p.h;
        c = a.C;
        r = E();
        a = r[c - 1];
        c = r[c];
        r = [];
        ra = H = -1;
        aa = "style";
        S = {type:"text/css", media:p.D};
        for (var O; N = ba[++H];) {
          if (u = N.u, N = N.v, "@import" === u) {
            r[++ra] = u + ' "' + N + '"';
          } else {
            r[++ra] = u + "{";
            u = "";
            for (O in N) {
              u += ";" + O + ":" + N[O];
            }
            r[++ra] = u.substr(1) + "}";
          }
        }
        r = r.join("");
        ja && (r = "data:text/css;charset=utf-8;base64," + M(r), S.rel = "stylesheet", S.href = r, aa = "link", r = P);
        b ? (p.h = ob(b, aa, S, r), Ea(b)) : (b = c ? hb(c, aa, S, r) : a ? ob(a, aa, S, r) : da(nb, aa, S, r), p.h = b);
      }
      O = d;
      a = l.length;
      for (p = O; p < a; ++p) {
        ba = l[p], ba.i || (b = ba.s - ba.o, ba.o = O, ba.s = O + b, O += 1 + b);
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
    var X = [], ja = 1 > ha || 8 <= U && 9 > U, G = 7.2 <= U && 8 > U, C = !!v || !ja && !G && function() {
      var a = da(ca, "style"), b = !!R(a);
      b && (m("[CSSOM] CSSStyleSheet @insertRule : " + !!R(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!R(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!R(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!R(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === R(a).cssText)));
      Ea(a);
      return b;
    }();
    m("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + C);
    var F = !C && Ja && !ja && !G && function() {
      var a = da(ca, "style"), b;
      vb(a, "");
      if (b = !!R(a)) {
        m("[CSSOM] CSSStyleSheet @insertRule : " + !!R(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!R(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!R(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!R(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === R(a).cssText));
      }
      Ea(a);
      return b;
    }();
    C || m("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + F);
    Vb = ja || G ? 1 : C || F ? 2 : 0;
    m("[CSSOM] p_CSSOM_canuse : " + Vb);
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
      if (525 > Ja || ha && !xb || 2.2 > h(21) || h(25) || 10 > h(3) || wa(32) || wa(30) || wa(1) || wa(2) || wa(3)) {
        return !1;
      }
      if (eb) {
        return !0;
      }
      if (2 === Vb) {
        var G = Wb();
        var C = Yb(G, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var F = G.cssText || G.cssRules && G.cssRules[C] && G.cssRules[C].cssText || "";
        var M = F.match("src") && F.match("@font-face");
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + F);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > v ? G.rules : G.cssRules).length);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + bc(G, C, "src"));
        Xb(G);
      }
      k = P;
      return ja = !!M;
    }
    Da.splice(0, 0, function() {
      if (qa) {
        lb = 8 <= v || Ia || 9.5 <= U || xb || sb || 522 <= Ja || 3 <= $a || Gb || Ub ? 3 : 7.2 <= U ? 2 : 6 <= U || ha ? 1 : 0;
        if (!lb && !v && !Za) {
          var G = da(Ha, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          lb = 6 <= G.offsetWidth ? 2 : 0;
          Ea(G);
        }
        m("p_cssGeneratedContentGrade:" + lb);
        return !0;
      }
    });
    zb = function(G) {
      function C(a) {
        M = W(M);
        E = a;
        F.onload = F.onerror = x;
        ia(G, a);
      }
      if (E !== P) {
        m("[dataUriTest] already done : " + E), ia(G, E);
      } else if (8 > v) {
        m("[dataUriTest] trident < 8 : false"), ia(G, !1);
      } else {
        m("[dataUriTest] start!");
        var F = new Image(), M = ia(function() {
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
      var G = da(Ha, "div");
      xa(G, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ib = 1 < G.offsetHeight;
      xa(G, "");
      Ea(G);
    });
    Ab = function(G, C) {
      function F() {
        if (a || !b || M.complete) {
          m("[imageTest] timer -> img.complete. img.width=" + M.width);
          var c = !!M.width;
          ub = ub || c;
          ia(G, c);
          M.onerror = M.onload = x;
          M = G = P;
        } else {
          --b, ia(F);
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
      ia(F);
    };
    var R = 9 > v || 2 > ya || 12 > U, la = "bad_" + (new Ya() - 0) + "_", X = ["sans-serif", "serif"], ja;
    Na = function(G, C, F, M, a, b, c) {
      function d(f) {
        G(f);
        g && !f && Xb(g);
        G = A = O = Ba = g = P;
      }
      function l() {
        var f = '1.6em "' + C + '"';
        m("[webFontTest] testByNativeFontLoaderAPI start.");
        I.fonts.load(f).then(function(y) {
          m("[webFontTest] fonts.check() : " + I.fonts.check(f, "i") + ", fonts.length : " + y.length);
          H(C) ? ia(d, Ka) : (m("[webFontTest] mesureWebFont() : false"), r(!0));
        }, function(y) {
          m("[webFontTest] fonts.load() rejected! " + y);
          zb(ra);
        });
      }
      function p(f) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (N = new Ya() - 0, !1) : f < new Ya() - N;
      }
      function r(f) {
        f && (m("[webFontTest] testWebFont start."), N = new Ya() - 0);
        H(C) ? (m("[webFontTest] testWebFont mesurement success : " + Ka), d(Ka)) : p(ba) ? (m("[webFontTest] testWebFont timeout!"), u ? d(0) : R ? ia(d, 0) : zb(ra)) : ia(r);
      }
      function H(f) {
        var y = 0, t = -1, B = 0;
        if (!Ba) {
          var K = -1;
          var sa;
          A = da(Ha, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Ba = {}; sa = X[++K];) {
            ka(A, "fontFamily", sa), Ba[sa] = A.offsetWidth;
          }
        }
        for (5 > v ? A || (A = da(Ha, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Ha.appendChild(A); K = X[++t];) {
          if (ka(A, "fontFamily", '"' + f + '",' + K), A.offsetWidth !== Ba[K]) {
            y = 1;
            break;
          }
        }
        !v && y && a && (A.innerHTML = a, f = A.offsetWidth, A.innerHTML = b, B = f === A.offsetWidth ? 1 : 0, A.innerHTML = "mmmmmmmmmmlli");
        Ea(A);
        5 > v && (A = P);
        return Ka = y + B;
      }
      function ra(f) {
        m("[webFontTest] onTestDataURIComplete : " + f);
        (u = f) ? S(!0) : d(0);
      }
      function S(f) {
        var y;
        f && (N = new Ya() - 0);
        for (y in F) {
          H(y) ? (m("[webFontTest] success! " + y), O = da(Ha, "div", {"aria-hidden":"true", className:M, id:M}), g = Wb(), Yb(g, "@import", F[y]), ia(aa, !0)) : p(100) ? (m("[webFontTest] timeout! " + y), delete F[y], ia(S, !0)) : ia(S);
          return;
        }
        d(0);
      }
      function aa(f) {
        f && (m("[webFontTest] testImportedCssReady start!"), C = C.replace(la, ""), m("[webFontTest] targetWebFontName : " + C), N = new Ya() - 0);
        1 < O.offsetWidth ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Ea(O), ba = 100, ia(r, !0)) : p(ba) ? 528 > Ja ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Ea(O), ba = 100, ia(r, !0)) : (m("[webFontTest] testImportedCssReady timeout!"), Ea(O), d(0)) : ia(aa);
      }
      var ba = c || 5000, N, u, A, O, Ba, Ka, g;
      C = la + C;
      m("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      k || ja ? ja || k() ? (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !I.fonts || 603 > Ja ? (m("[webFontTest] No native font loader."), r(!0)) : (m("[webFontTest] Use Native font loader."), l())) : (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), ia(d, 0)) : (m("[webFontTest] webFontTest_maybeCanUseWebFont : false"), ia(d, 0));
    };
  })();
  var Oa = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Oa(960), ")", "(", Oa(234), Oa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Oa(9824), "\u2190", Oa(9829), Oa(9830), Oa(9827), Oa(956), "\u03a9", "\u2193", "\u2192", "%", Oa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Oa(9619)], cc = (9 === v || ha && 0 <= q.conpare(Q, "1.8.1") || sb) && !Ga, qb = [], rb, Va, Nb = 7.2 > U ? function() {
    rb = !rb;
    for (var k = -1, E; E = qb[++k];) {
      -1 !== E.className.indexOf("pbAlp") ? ka(E, "display", rb ? "" : "none") : (cb(E, rb ? "pbChrCS" : "pbChr00"), Fa(E, rb ? "pbChr00" : "pbChrCS"));
    }
  } : cc ? function() {
    rb = !rb;
    for (var k = -1, E; E = qb[++k];) {
      ka(E, "opacity", rb ? 1 : 0);
    }
  } : P;
  var Zb = Y.startBlinkingIfCursor = function(k) {
    Nb ? ib(k, "pbChrCS") && (Va || !U && !L || (Va = setInterval(Nb, 400)), -1 === qb.indexOf(k) && qb.push(k)) : qb = P;
  };
  Y.stopBlinkingIfCursor = function(k) {
    Nb && (k = qb.indexOf(k), 0 <= k && (qb.splice(k, 1), !qb.length && Va && (clearInterval(Va), Va = 0)));
  };
  cc && J(function(k) {
    k ? Va || (Va = setInterval(Nb, 400)) : Va && (clearInterval(Va), Va = 0);
  });
  Nb && pa(function() {
    Va && clearInterval(Va);
  });
  Ga || J(function(k) {
    k ? (w(ca, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (va || 9 === v || 5.5 <= v && 9 > v && Ib) && cb(ca, "jsCanRotate")) : (V(ca, "forced-colors"), Fa(ca, "jsCanRotate"));
  });
  (function() {
    function k(u) {
      H = u;
      m("[pbList] WebFont test result : " + !!u);
      u ? X() : ub ? la(!0) : ub !== P ? X() : (m("[pbList] Need imageTest " + ra), Ab(la, ra));
      m("window.offscreenBuffering = " + D.offscreenBuffering);
    }
    function E() {
      E = P;
      Na(k, "PB-100", {"PB-100_canTTF":Wa + "pbFont/ttf.css", "PB-100_canWOFF":Wa + "pbFont/woff.css", "PB-100_canEOT":Wa + "pbFont/eot.css", "PB-100_canSVG":Wa + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function R(u) {
      this.focus();
      u.preventDefault();
      u.stopPropagation();
    }
    function la(u) {
      u ? (m("[pbList] Fallback start!"), cb(Ha, "pbList-noWebFont")) : m("[pbList] image disabled!");
      X();
    }
    function X() {
      for (k = Na = P; r.length;) {
        ja(r.shift(), r.shift());
      }
      m("[pbList] complete.");
    }
    function ja(u, A) {
      function O(t) {
        t = mb(t);
        for (var B = -1, K; K = t[++B];) {
          switch(K.nodeType) {
            case 1:
              O(K);
              break;
            case 3:
              K.data && Ka(K.data) && g.push(K);
          }
        }
      }
      function Ba(t) {
        var B = t.children, K = 0, sa = B.length;
        if (sa) {
          for (; K < sa; ++K) {
            Ba(B[K]);
          }
        } else {
          (B = t.innerText) && Ka(B) && g.push(t);
        }
      }
      function Ka(t) {
        return t.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var g = [], f;
      if (k) {
        -1 === r.indexOf(u) && (r.push(u, A), S && E && E());
      } else {
        var y = r.indexOf(u);
        0 <= y && r.splice(y, 2);
        for (5 > v ? Ba(u) : O(u); f = g.shift();) {
          y = 5 > v ? f.innerText : f.data, 2 !== H && (y = y.split(b).join(M)), A ? 5 > v ? f.innerText = y : f.data = y : G(y.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(F).split("&amp;").join("&"), f);
        }
      }
    }
    function G(u, A) {
      function O(oa, ea) {
        for (var La = ""; ea;) {
          ea & 1 && (La += oa), ea >>= 1, oa += oa;
        }
        return La;
      }
      function Ba(oa, ea, La) {
        for (var Db, ec = -1, $b, ac; Db = ea[++ec];) {
          for (; 0 <= ($b = oa.indexOf(Db));) {
            ac = Db.length, oa = oa.substr(0, $b) + O(La, ac) + oa.substr($b + ac);
          }
        }
        return oa;
      }
      function Ka(oa) {
        var ea = T(oa), La = "" + ea;
        return 0 < ea && ea === ea | 0 && (ea = oa.indexOf(La) + La.length, ea <= oa.length) ? ea : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), f = 5 > v || 1 === A.nodeType, y = [], t = "", B, K = -1, sa, db, Ca;
      if (f) {
        if (ba) {
          var Tb = A.style.visibility;
          ka(A, "visibility", "hidden");
        }
        A.innerHTML = "";
      }
      if (N) {
        var Eb = A;
        A = I.createDocumentFragment();
      }
      if (function(oa) {
        var ea = oa.indexOf("P");
        if (-1 === ea) {
          return !1;
        }
        ea = T(oa.charAt(ea + 1));
        return 0 <= ea && 9 >= ea;
      }(u)) {
        t = O("+", u.length);
      } else {
        0 <= (B = Ka(u)) && (t = O("|", B), K = B, --K);
        for (; B = u.charAt(++K);) {
          B === F || sa ? (t += "~", B === F && (sa = !sa)) : t += B;
        }
        t = Ba(t, p, "^");
        t = Ba(t, d, "{");
        t = Ba(t, l, "}");
      }
      K = 0;
      for (sa = u.length; K < sa; ++K) {
        B = u.charAt(K);
        var fa = B === c;
        var ma = " " === B;
        B = fa ? " " : B;
        var na = t.charAt(K);
        var Ta = (db = Pa) && fa;
        var Pa = "|" === na;
        na = g["+|~{}^".indexOf(na) + 1];
        "\n" !== B ? (H || !ub ? (2 === H && u.substr(K, 2) === b && (B = b, ++K), na = ma && "str" === na ? "pbList-strsp" : fa ? "" : !ma && na ? "pbList-" + na : "") : (fa = wb.indexOf(B), fa = -1 === fa ? "" : wb.indexOf(B).toString(16).toUpperCase(), fa = (fa = 1 === fa.length ? "0" + fa : fa) ? "pbChr" + fa : "", na = ma && "str" === na ? "pbList-strsp" : ma || !fa ? "" : na ? (fa ? fa + " " : "") + "pbList-" + na : fa), fa = P, Ta ? (B = 6 <= v && 8 > v ? " " : c, na = "") : Pa && (1.9 > ha || 
        9.5 > U) ? (Pa && !db && (Ca = 4 - (T(u.substr(K)) + "").length), 7.5 > U ? fa = aa ? "position:relative;top:-4px;left:" + 12 * Ca + "px" : {position:"relative", top:"-4px", left:12 * Ca + "px"} : 1.3 <= ha ? (fa = aa ? "position:absolute;left:" + 12 * Ca + "px" : {position:"absolute", left:12 * Ca + "px"}, ++Ca) : fa = aa ? "position:relative;left:" + 12 * Ca + "px" : {position:"relative", left:12 * Ca + "px"}) : ma && 7.5 > U && (na = "pbList-strsp"), aa ? y.push("<font" + (na ? ' class="' + 
        na + '"' : "") + (fa ? ' style="' + fa + '"' : "") + ">" + B + "</font>") : f || N ? da(A, "font", {"class":na, style:fa}, B) : hb(A, "font", {"class":na, style:fa}, B)) : (db = Pa = !1, aa ? y.push(B) : f || N ? vb(A, B) : Sb(A, B));
      }
      if (f) {
        aa ? A.innerHTML = y.join("") : N && Eb.appendChild(A), ba && ka(A, "visibility", Tb);
      } else {
        if (aa) {
          g = I.createElement("font");
          for (g.innerHTML = y.join(""); y = g.firstChild;) {
            A.parentNode.insertBefore(y, A);
          }
          Ea(A);
        } else {
          N ? Eb.parentNode.replaceChild(A, Eb) : Ea(A);
        }
      }
    }
    jb(function(u) {
      if (u) {
        u = Kb("pbChrCS");
        for (var A = 0, O = u.length; A < O; ++A) {
          Zb(u[A]);
        }
        return !0;
      }
    });
    var C = [];
    jb(function(u) {
      function A(ma) {
        var na = z(ma, "pbTip"), Ta = na.charAt(0), Pa = "_" === Ta;
        na = Pa ? na.charAt(2) : Ta;
        Ta = Pa ? "Btm" : "";
        var oa = z(ma, "title");
        f || (V(ma, "pbTip"), V(ma, "title"), cb(ma, "pbTipPos" + na.toUpperCase()), da(ma, "div", {className:"pbTip" + Ta, style:{width:oa.length + Ba + "em"}}, oa));
        da(ma, "div", {className:"pbTail" + Ta});
        y && Pa && (ma.focus(), ma.blur());
      }
      function O(ma, na) {
        var Ta = z(ma, "pbGhst"), Pa = ma.className, oa = Pa.split("pbCsr")[1] || "", ea = Pa.split("pbAlp")[1] || "";
        if ("CS" === Ta) {
          var La = "_";
        } else {
          La = Ta, 3 === La.length && (La = La.substr(0, 2)), La = wb[parseInt(La, 16)] || "~";
        }
        var Db;
        oa = oa.split(" ")[0];
        if (ea = T(ea.split(" ")[0])) {
          Ka && (Pa = Pa.split("pbChr")[1].split(" ")[0], ka(ma, "backgroundPosition", Fb(Pa, 2, Tb) + "px " + -24 * (10 - ea) + "px")), !na && g && hb(ma, "a").appendChild(ma);
        }
        Ta && (ea = 10 - ea, Ka && (Db = {backgroundPosition:Fb(Ta, 2, Tb) + "px " + -24 * (10 - ea) + "px"}), V(ma, "pbGhst"), K = hb(ma, "b", {className:"pbChr" + Ta + " pbCsr" + oa + " pbAlp" + ea, style:Db}, La), Zb(K));
        Zb(ma);
      }
      if (u) {
        var Ba = 6 > v ? 2 : 0, Ka = 7.2 > U, g = 1.1 === ha;
        u = bb("SAMP");
        var f = 8 === v, y = 5 <= v && 6 > v, t = lb, B, K, sa, db, Ca;
        Ib && cb(Ha, "pbLCD-AX");
        if (u.length) {
          for (sa = -1; B = u[++sa];) {
            if (ib(Sa(B), "pbLCD")) {
              var Tb = ib(B, "PB-120") || ib(B, "FX-795P");
              var Eb = Ua(B);
              for (B = Eb.length; Ca = Eb[--B];) {
                switch(Lb(Ca)) {
                  case "A":
                    (2 > t || f) && A(Ca);
                    if (2 > t) {
                      var fa = Ua(Ca);
                      for (db = fa.length; db;) {
                        O(fa[--db], !0);
                      }
                    }
                    Gb ? w(Ca, "href", "javascript:void(0)") : (pb(Ca, "click", R), C.push(Ca));
                    break;
                  case "B":
                    2 > t && O(Ca, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    pa(function() {
      for (var u; u = C.shift();) {
        za(u, "click", R);
      }
    });
    6 === v && (new Ma("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var F = wb[7], M = wb[30], a = wb[113], b = Oa(8337) + Oa(8331), c = Oa(160);
    Oa(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), p = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + M + wb[31]).split(""), r = [], H, ra, S;
    jb(function(u) {
      if (u) {
        ra = 1 > Wa + ha ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        u = bb("*");
        for (var A = -1, O; O = u[++A];) {
          ib(O, "pbList") ? ja(O) : ib(O, "pbFont") && ja(O, !0);
        }
        r.length && (m("[pbList] " + r.length / 2 + " elements found. WebFont test start."), E());
        return !0;
      }
    });
    ha && q.conpare(Q, "0.9.6");
    var aa = !1, ba = 8 > U, N = !aa && !ba && !(6 > v) && I.createDocumentFragment && !!Ha.replaceChild;
    Y.prettify = ja;
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
      da(k, "P", P, E);
    }, Cb = function(E) {
      da(k, "P", {style:{color:"red"}}, E);
    }, D.onerror = function(E, R, la) {
      Cb(E + ", " + R + ", " + la);
      return !0;
    }) : D.console ? (m = console.log, Cb = console.error) : U ? (m = x, Cb = opera.postError) : m = Cb = x;
    for (; Ra.length;) {
      m(Ra.shift());
    }
    for (; gb.length;) {
      m(gb.shift());
    }
    Ra = gb = P;
  });
  6.1 > $a && Mb(Ob);
  pa(Jb);
  6.1 > $a && Mb(Pb);
  pa(Qb);
  10 > v && (11 !== tb || 5 !== v) || (9 > U || 1 > ha || !Za && !D.addEventListener ? I.write('<link href="' + Wa + yb + '" rel="stylesheet"' + (8 > U ? "" : ' media="screen,handheld,projection,print"') + ">") : Aa(function() {
    da(nb, "link", {href:Wa + "" + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

