PB100={};var l;
ua = [];
ua.conpare = function(ca, q) {
  var B = 0, x, I, qa = (ca + "").split("."), V = (q + "").split("."), La = qa.length;
  for (x = V.length; "0" === qa[La - 1];) {
    --La;
  }
  for (; "0" === V[x - 1];) {
    --x;
  }
  for (I = La < x ? La : x; B < I; ++B) {
    var Wa = qa[B] - 0, m = V[B] - 0;
    if (Wa !== m) {
      return Wa > m ? 1 : -1;
    }
  }
  return La > x ? 1 : La === x ? 0 : -1;
};
(function(ca, q, B, x, I, qa, V, La) {
  function Wa(J, na, L) {
    L = qa(J.split(na)[1]);
    return 0 <= L ? L : 0;
  }
  function m(J, na) {
    return 0 <= J.indexOf(na);
  }
  function Xa(J) {
    return m(J, "Linux armv") || m(J, "Linux aarch") || m(J, "Linux i686") || m(J, "Linux x86_64");
  }
  function Q(J, na) {
    for (var L in na) {
      if (L === J) {
        return !0;
      }
    }
  }
  function h(J, na) {
    var L = "", Ga = -1, db;
    if (J = J.split(na)[1]) {
      for (; db = J.charCodeAt(++Ga);) {
        if (48 <= db && 57 >= db || 46 === db) {
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
    for (var na = arguments, L = 1, Ga = na[0], db; L < na.length; ++L) {
      0 > Ha(Ga, db = na[L]) && (Ga = db);
    }
    return Ga;
  }
  function Eb(J) {
    return J === J + "" ? J : J === J - 0 ? "" + J : J.min && J.max ? J.min + "~" + J.max : J.min ? J.min + "~" : "~" + J.max;
  }
  var Ha = ca.conpare, e = x.userAgent, da = x.appVersion, nb = qa(da) || 0, R = x.platform, v = B.documentElement, Ya = v && v.style, Ia = B.documentMode, U = I.width;
  I = I.height;
  var ja = q.HTMLAudioElement, yb = q.performance, rb = q.Int8Array, Ja = q.ontouchstart !== La, Za = h(da, "Version/") || h(e, "Version/"), Fb = q.operamini, ya = !Fb && q.opera, Tb = ya && (ya.version && "function" === typeof ya.version ? ya.version() : va(h(e, "Opera "), Za, nb)), Gb = q.opr, sb = !ya && (B.all || Ia);
  Ia = sb && (Ia ? Ia : q.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  v = !sb && v.msContentZoomFactor;
  var eb = !v && (q.chrome || q.chromium), ib = !sb && function() {
    for (var J in Ya) {
      if (0 === J.indexOf("Moz")) {
        return !0;
      }
    }
  }(), zb = m(e, "UCWEB"), Hb = zb && h(e, " U2/"), tb = zb && h(e, "; wds "), Ta = h(e.split("_").join("."), "; iPh OS "), ra = h(e, "; Adr "), $a = m(da, "YJApp-ANDROID"), Ca = m(R, "Android") || ib && m(da, "Android") || $a;
  ra = h(R, "Android ") || h(da, "Android ") || h(e, "Android ") || ra;
  var Pa = m(R, "Linux"), Ab = "MacIntel" === R && x.standalone !== La, Bb = ib && h(e, "Goanna/"), Ma = !Bb && ib && (h(e, "rv:") || h(e.substr(e.indexOf(") Gecko/") - 11), "; ")), ha = h(e, "Firefox/"), X = h(e, "Opera/"), Cb = q.FNRBrowser, Qa = Wa(e, "AppleWebKit/"), fb = h(e, "Chrome/"), Nb = h(da, "Iron/"), Ib = h(e, "OPR/"), Ob = h(da, "KHTML/"), Pb = h(e.toLowerCase(), "iris");
  h(e, "FxiOS/");
  h(e, "CriOS/");
  h(e, "EdgiOS/");
  var Qb = h(e, "Silk/"), ab = Wa(e, "SamsungBrowser/"), Jb = !ab && function() {
    for (var J = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    na, L = J.length; na = J[--L];) {
      if (m(e, na)) {
        return 2 > qa(Za) ? Za : 0.9;
      }
    }
    J = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (L = J.length; na = J[--L];) {
      if (m(e, na)) {
        return Za;
      }
    }
  }(), Ra = eb && 534.3 >= Qa, jb = Xa(R), Ua = jb && !m(e, R) && Xa(e);
  Ja = Ja && (Qa || ib) && Ua || !ra && $a;
  $a = !!q.ReactNativeWebView;
  jb = jb && function() {
    for (var J in q) {
      if (0 === J.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ea = (Ua = q.puffinDevice) && Ua.clientInfo;
  ea = (Ua = ea && "iOS" === ea.os && ea.osVersion) && ea.model;
  var kb = !Ia && B.registerElement, ob = !Ia && B.execCommand, ub = q.webkitCancelAnimationFrame, Rb = Pa && kb && "11.0.696.34" === fb, Da = q._firefoxTV_playbackStateObserverJava, Kb = Wa(e, "diordnA ");
  if ("Nitro" === R) {
    var z = 1;
  } else if ("Nintendo DSi" === R) {
    z = 2;
    var w = X;
  } else if ("New Nintendo 3DS" === R || m(e, "iPhone OS 6_0") && 320 === U && 240 === I) {
    z = 4, w = h(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    z = 3, w = h(e, "Version/"), Qa = 535;
  } else if ("Nintendo Swicth" === R) {
    z = 7, w = h(da, "NintendoBrowser/");
  } else if (q.wiiu) {
    z = 6;
    w = h(da, "NintendoBrowser/");
    var W = 15, Z = h(da, "AppleWebKit/") || (ub ? 536 : 534);
    w || (w = ub ? 4 : 2, m(da, "Macintosh;") || m(da, "Windows NT") && m(da, "Touch"));
  } else if (ya && ya.wiiremote) {
    z = 5, w = h(e, "Wii; U; ; ");
  } else if (X = h(e, "PlayStation Vita ")) {
    z = 10, w = X;
  } else if (X = h(e, "(PlayStation Portable); ")) {
    z = 8;
    w = X;
    var gb = 3.3;
  } else if (X = h(e, "PLAYSTATION 3; ") || h(e, "PLAYSTATION 3 ")) {
    z = 11, w = X, 0 > Ha("4.10", X) && (W = 26, Z = X);
  } else if (m(e, "Xbox One")) {
    z = 15, w = 1;
  } else if (m(e, "Xbox")) {
    z = 14, w = 1;
  } else if (2 === nb && m(e, "Sony/COM2/")) {
    z = 17;
    w = 2;
    gb = 3.4;
    var bb = !0;
  } else if (0 === R.indexOf("iP") || Ta || Ua || Ab) {
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
      if (!w || Cb) {
        w = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : q.SharedWorker ? yb && yb.now ? 8.0 : 8.4 : ob ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : rb ? 4.3 : ja ? 4.1 : 3.2;
      }
      var za = U === 1.5 * I || 1.5 * U === I;
      0 === R.indexOf("iPhone") ? (Ea = 0, ka = !0) : 0 === R.indexOf("iPad") || Ab ? (Ea = 1, wa = !0) : 0 === R.indexOf("iPod") && (Ea = 2, pb = !0);
    }
    W = !Ua && (x.standalone || (wa || 12 > w) && Q("webkitFullscreenEnabled", B) || 11 <= w && 13 > w && x.mediaDevices) ? 16 : 17;
    z = 24;
    Z = w;
  } else if (m(e, "Kobo")) {
    z = 18, W = 21, Z = 2.2, Ca = !0;
  } else if (m(e, "EBRD")) {
    z = 19, W = 21, Z = 2.2;
  } else if (X = h(e, "CrOS x86_64 ") || h(e, "CrOS aarch64 ") || h(e, "CrOS i686 ") || h(e, "CrOS armv7l ")) {
    z = 28, w = X;
  } else if (q.onmoztimechange !== La) {
    z = 29, w = 18.1 > Ma ? "1.0.1" : 19 > Ma ? 1.1 : 27 > Ma ? 1.2 : 29 > Ma ? 1.3 : 31 > Ma ? 1.4 : 33 > Ma ? 2.0 : 35 > Ma ? 2.1 : 38 > Ma ? 2.2 : 45 > Ma ? 2.5 : 2.6, m(e, "Mobile") ? ka = !0 : m(e, "Tablet") ? wa = !0 : m(e, "TV");
  } else if (q.palmGetResource) {
    z = 30, w = h(e, "webOS/") || h(e, "WEBOS") || h(e, "hpwOS/"), m(e, "webOS.TV") || m(e, "/SmartTV") || (ka = !0);
  } else if (X = h(e, "Tizen ")) {
    z = 31, w = X, W = 24, Z = ab, ka = !0;
  } else if (X = h(e, "Windows Phone ") || h(da, "Windows Phone OS ") || tb) {
    z = 23, w = X, ka = !0;
  } else if (v && "ARM" === R) {
    z = 23, w = 10, ka = !0;
  } else if (sb && m(da, "ZuneWP")) {
    z = 23, w = 11 === Ia ? 8.1 : 10 === Ia ? 8 : 9 === Ia ? 7.5 : 7 === Ia ? 7 : "?", ka = !0;
  } else if (m(e, "FOMA;")) {
    z = 16, ka = !0;
  } else if (m(e, "SoftBank;")) {
    z = 16, ka = !0;
  } else if (m(e, "KFMUWI")) {
    var Aa = !0;
    w = 6.3;
    var ma = wa = !0;
  } else if (m(e, "KFKAWI")) {
    Aa = !0, w = 6, ma = wa = !0;
  } else if (m(e, "KFSUWI") || m(e, "KFAUWI") || m(e, "KFDOWI")) {
    Aa = !0, w = 5, ma = wa = !0;
  } else if (m(e, "KFGIWI")) {
    Aa = !0, w = 5, ma = wa = !0;
  } else if (m(e, "KFARWI") || m(e, "KFSAWA") || m(e, "KFSAWI")) {
    Aa = !0, w = 5 <= qa(ra) ? 5 : 4, ma = wa = !0;
  } else if (m(e, "KFSOWI") || m(e, "KFTHWA") || m(e, "KFTHWI") || m(e, "KFAPWA") || m(e, "KFAPWI")) {
    Aa = !0, w = 3, ma = wa = !0;
  } else if (m(e, "KFOT") || m(e, "KFTT") || m(e, "KFJWA") || m(e, "KFJWI")) {
    Aa = !0, w = 2, ma = wa = !0;
  } else if (m(e, "Kindle Fire")) {
    Aa = !0, w = 1, ma = wa = !0;
  } else if (X = h(e, "Kindle/")) {
    z = 20, w = X, W = 21, Z = 2.2;
  } else if (Da) {
    Aa = !0, w = ra || Kb, ma = !0;
  } else if (m(e, "AmazonWebAppPlatform") || m(e, "; AFT")) {
    Aa = !0, w = ra, ma = !0;
  } else if (m(e, "MeeGo")) {
    z = 32;
  } else if (m(e, "Maemo")) {
    z = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || Pb) {
    z = 22, bb = !0;
  } else if ("WinCE" === R) {
    z = 21, bb = !0;
  } else if (0 === R.indexOf("Win")) {
    z = "Win16" === R ? 35 : "Win32" === R ? 36 : "Win64" === R ? 37 : 0, w = h(e, "Windows NT ") || h(e, "Windows ");
  } else if (0 === R.indexOf("Mac")) {
    z = "Mac68K" === R ? 39 : "MacPowerPC" === R || "MacPPC" === R ? 38 : "MacIntel" === R ? 40 : 0;
    if (X = h(e.split("_").join("."), "Mac OS X ")) {
      w = X;
    }
    var Lb = !0;
  } else if (m(e, "BlackBerry") || m(e, "BB10")) {
    z = 34, w = Za, ka = !0;
  } else if (m(e, "SunOS") || m(e, "Sun Solaris")) {
    z = 42;
  } else if (m(e, "FreeBSD")) {
    z = 43;
  } else if (m(e, "OpenBSD")) {
    z = 44;
  } else if (m(e, "NetBSD")) {
    z = 45;
  } else if (Ca && ib) {
    m(e, "Android 4.4;") ? za = {min:2.3} : 4 <= qa(ra) ? za = ra : za = {min:2.2}, w = za;
  } else if (Ca && ya) {
    ra ? za = ra : za = {min:1.6}, w = za, m(e, "Tablet") ? wa = !0 : ka = !0;
  } else if (ra) {
    w = ra, Ca = !0;
  } else if (Pa && Ja || $a || jb) {
    var hb = !0;
    ab ? za = {min:4.4} : eb && !Ra || Gb || Ib ? za = {min:4} : (za = ra = Ya.touchAction !== La ? {min:5} : kb ? 4.4 : rb ? x.connection ? q.searchBoxJavaBridge_ || eb ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Qa ? 3 : 533 <= Qa ? ja ? 2.3 : 2.2 : 530 <= Qa ? 2.0 : 1.5, Jb && (W = 24, Z = Jb));
    w = za;
    Ca = !0;
  } else {
    Rb ? (w = {min:5}, hb = Ca = !0) : Pa && (m(e, "Ubuntu") ? z = 46 : (X = h(e, "Mint/")) ? (z = 47, w = X) : (X = h(e, "Fedora/")) ? (z = 48, w = X) : z = m(e, "Gentoo") ? 49 : 50);
  }
  Aa || Ca && hb && Qb ? z = 27 : Ca && (z = z || 26);
  W || (ma = ma || Ca, ya ? (W = ma || bb || ka || wa ? 9 : 8, Z = Tb) : sb ? (za = Wa(da, "Trident/") + 4, W = bb || ka || wa || pb ? 3 : Lb && 5 <= Ia ? 7 : 2, Z = Ia) : v ? (W = 23 === z ? 6 : 5, Z = h(da, "Edge/")) : Bb ? (W = 13, Z = Bb) : ib ? (W = ma ? 12 : 11, Z = Ma || ha) : ab ? (W = 24, Z = ab) : (X = gb || h(e, "NetFront/")) ? (W = 18, Z = X) : (X = h(e, "iCab")) ? (W = 19, Z = X) : (X = va(h(e, "Opera Mini/"), h(e, "Opera Mobi/")) || Fb && Za) ? (W = 10, Z = X, z || (m(e, "iPhone") ? 
  Ea = 0 : m(e, "iPad") ? Ea = 1 : m(e, "iPod") && (Ea = 2), Ea && (z = 24))) : zb ? (W = 25, Z = Hb) : Ob ? (W = 14, Z = nb) : Ca && Ra ? (W = 21, Z = ra) : eb || Gb || Ib ? (W = ma ? 22 : 20, Z = fb || Nb) : Ca && kb ? (W = 23, Z = 5 > qa(ra) ? ra : fb) : Ca && (Za || hb) ? (W = 21, Z = ra) : fb ? (W = ma ? 22 : 20, Z = fb) : Qa && (W = 15, Z = Qa));
  z && (ca[2] = z, w && (ca[3] = Eb(w)));
  W && (ca[0] = W, Z && (ca[1] = Eb(Z)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Db;
Array.prototype.pop || (Array.prototype.pop = function() {
  var ca = this[this.length - 1];
  --this.length;
  return ca;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ca = arguments, q = 0, B = ca.length, x = this.length; q < B; ++q) {
    this[x + q] = ca[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ca = this[0], q = 1, B = this.length; q < B; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return ca;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ca = arguments, q = ca.length, B = this.length += q - 1, x = B; x >= q; --x) {
    this[x] = this[x - q];
  }
  for (x = 0; x < q; ++x) {
    this[x] = ca[x];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(ca, q) {
  var B = arguments, x = B.length - 2 - q, I = this.slice(ca, ca + q), qa;
  if (0 < x) {
    var V = this.length - 1;
    for (qa = ca + q; V >= qa; --V) {
      this[V + x] = this[V];
    }
  } else if (0 > x) {
    V = ca + q;
    for (qa = this.length; V < qa; ++V) {
      this[V + x] = this[V];
    }
    this.length += x;
  }
  V = 2;
  for (qa = B.length; V < qa; ++V) {
    this[V - 2 + ca] = B[V];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ca, q) {
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
    if (this[x] === ca) {
      return x;
    }
  }
  return -1;
});
(function(ca, q, B, x, I, qa, V, La, Wa, m, Xa, Q) {
  function h(p) {
    if (q[0] === p) {
      return R === R + "" ? V(R) : R;
    }
  }
  function va(p) {
    var E = q[3];
    if (q[2] === p) {
      return E === E + "" ? V(E) : E;
    }
  }
  function Eb(p, E, S) {
    p + "" === p && ("a" === p.charAt(2) && (S = !0, p = p.substr(0, 2)), p = "CS" === p ? 7.2 > U ? 117 : 9 > v || 9 > U || Ya ? 1 : 132 : parseInt(p, 16));
    S && (50 === p && (p = 128), 102 < p && 108 > p && (p += 24));
    return (p - 1) * -(6 * (E || 2));
  }
  var Ha = I.body, e = Ha.style, da, nb, R = q[1], v = h(2) || h(3), Ya = h(7), Ia = h(5) || h(6), U = h(8) || h(9), ja = h(11) || h(12), yb = ja && 0 <= q.conpare(R, "1.9.1"), rb = h(13), Ja = h(15), Za = h(16) || h(17), Fb = h(10) || h(25), ya = h(20) || h(22), Tb = ya || h(23) || h(21) || h(24), Gb = ya && V(qa.userAgent.split("Edg/")[1]), sb = V(qa.appVersion.split("Trident/")[1]) + 4, eb = va(35) || va(36) || va(37), ib = !v && !Ya && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  zb = (Ya ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > U ? "opr70" : 8 > U ? "opr72" : 9.5 > U ? "opr" + (U | 0) : ja && !yb ? 1.3 <= ja ? "gck190" : 1 <= ja ? "gck121" : "gck097" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var Hb, tb, Ta, ra = e.transform !== Q ? "transform" : e["-o-transform"] !== Q ? "-o-transform" : e["-ms-transform"] !== Q ? "-ms-transform" : e.MozTransform !== Q ? "-moz-transform" : e["-webkit-transform"] !== Q ? "-webkit-transform" : "", $a = [], Ca = [], Pa = [], Ab, Bb, Ma, ha, X, Cb, Qa = [], fb = [], Nb, Ib, Ob, Pb;
  (function() {
    function p() {
      for (var c, d = 0, k = new Xa() - 0; d < F.length;) {
        k < F[0].t ? ++d : (c = F.splice(d, 1)[0], c.f(c.p));
      }
      b = F.length ? Wa(p, M) : 0;
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
      b && (b = m(b));
    }
    l = function(c) {
      Qa.push(c);
    };
    Db = function(c) {
      fb.push(c);
    };
    Cb = function(c) {
      Y.length || (C = setInterval(E, ia));
      Y.push({f:c, B:++G});
      return G;
    };
    Nb = function() {
      C && (S(), C = setInterval(E, ia));
    };
    Ib = S;
    var Y = [], ia = 500, G = 0, C;
    if (5 > v || Ya) {
      B._wdb_onlooptimer = E, E = "_wdb_onlooptimer()";
    }
    ha = function(c, d, k) {
      F.length || (b = Wa(p, M));
      F.push({f:c, p:d, B:++a, t:new Xa() - 0 + (M < k ? k : M)});
      return a;
    };
    X = function(c) {
      for (var d = F.length, k; k = F[--d];) {
        if (k.B === c) {
          F.splice(d, 1);
          break;
        }
      }
      return 0;
    };
    Ob = function() {
      b && (la(), b = Wa(p, M));
    };
    Pb = la;
    var F = [], M = 16, a = 0, b;
    if (5 > v || Ya) {
      B._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var Qb, ab, Jb, Ra, jb, Ua, ea, kb, ob, ub, Rb, Da, Kb, z, w, W, Z, gb, bb, Ea, ka, wa;
  (function() {
    function p(a, b, c) {
      var d = ["<", a], k = 1, n, r;
      if (b) {
        for (n in b) {
          var H = b[n];
          if (null != H && "" !== H) {
            if ("style" === n) {
              d[++k] = ' style="';
              for (r in H) {
                for (var oa = ++k, T, aa = [], ba = r.split(""), N = ba.length; N;) {
                  T = ba[--N], "A" <= T && "Z" >= T && (T = "-" + T.toLowerCase()), aa[N] = T;
                }
                d[oa] = aa.join("") + ":" + H[r] + ";";
              }
              d[++k] = '"';
            } else {
              "className" === n && (n = "class"), d[++k] = " " + n + '="' + H + '"';
            }
          }
        }
      }
      d[++k] = ">";
      null != c && (C && "font" !== a ? d[++k] = "<FONT>" + c + "</FONT>" : d[++k] = c);
      d[++k] = "</" + a + ">";
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
    function la(a, b, c, d, k, n) {
      if (C) {
        var r = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var H = jb(2 > a ? Ra(b) : b);
        H = 2 > a ? H.indexOf(b) + a : H.length;
        b.insertAdjacentHTML(r, p(c, d, k));
        b = jb(b)[H];
        null != k && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (F) {
        b = I.createElement(p(c, d));
      } else {
        b = n ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
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
        M || null != k && Y(b, k);
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
    Qb = function(a) {
      return B[a] || I[a] || I.getElementById(a);
    };
    ab = E;
    Jb = function(a) {
      var b = [], c = 0, d, k = -1;
      if (9 > v || !I.getElementsByClassName) {
        var n = 6 > v ? I.all : I.getElementsByTagName("*");
      } else {
        var r = !0;
        n = I.getElementsByClassName(a);
      }
      for (d = n.length; c < d; ++c) {
        var H = n[c];
        if (r || (C || 1 === H.nodeType) && G(H, a)) {
          b[++k] = H;
        }
      }
      return b;
    };
    Ra = S;
    jb = function(a) {
      a = C ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Ua = function(a) {
      var b = !(7.03 < U && 7.2 > U) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], d = a.length, k = -1, n; d;) {
        if (n = a[--d], b || 1 === n.nodeType) {
          C && "FONT" === n.tagName || (c[++k] = n);
        }
      }
      return c;
    };
    ea = function(a, b, c, d, k) {
      b = la(2, a, b, c, d, k);
      C || (a.appendChild(b), M && null != d && Y(b, d));
      return b;
    };
    kb = function(a, b, c, d, k) {
      b = la(0, a, b, c, d, k);
      C || (S(a).insertBefore(b, a), M && null != d && Y(b, d));
      return b;
    };
    ob = function(a, b, c, d, k) {
      b = la(1, a, b, c, d, k);
      var n;
      C || ((n = a.nextSibling) ? Ra(n).insertBefore(b, n) : Ra(a).appendChild(b), M && null != d && Y(b, d));
      return b;
    };
    ub = Y;
    Rb = function(a, b) {
      if (C) {
        return la(0, a, "font", Q, b);
      }
      var c = I.createTextNode("" + b);
      Ra(a).insertBefore(c, a);
      return c;
    };
    Da = function(a) {
      Ra(a) ? C ? a.outerHTML = "" : Ra(a).removeChild(a) : l("[DOM] p_DOM_remove(), No parentNode!");
    };
    var F = 9 > v, M = F;
    Kb = function(a) {
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
    Z = ia;
    gb = G;
    bb = function(a, b) {
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
      var c = -1, d, k;
      if (5.5 > v) {
        if (b) {
          for (d = b.split(";"); k = d[++c];) {
            var n = k.split(":");
            a.style[n[0]] = k.substr(n[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > U || 1 > ja ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var pb, za, Aa, ma, Lb, hb, J, na, L, Ga;
  (function() {
    function p() {
      return ba ? u ? 2 : N ? 3 : 1 : 0;
    }
    function E(g) {
      za(B, "load", E);
      E = Q;
      la($a, g, !0);
      $a = Q;
    }
    function S(g, f) {
      hb(function() {
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
      }) : n && (f.A = f.stopPropagation, f.stopPropagation = function() {
        D = !0;
      });
      for (; t = g[++y];) {
        t.l === this ? (this.g = t.j, this.g(f), this.g = x, this.g = Q) : 7.2 > U && this === I && t.l === B && (B.g = t.j, B.g(f), delete B.g);
      }
      if (v) {
        return f.preventDefault = f.stopPropagation = Q, f.returnValue;
      }
      n && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (H = !0), D && !H && f.A(), f.A = f.stopPropagation = Q);
    }
    function C() {
      var g = 9 === a.offsetWidth;
      na !== g && (Y(Ca, na = g), l("p_cssAvailability:" + na));
    }
    function F(g) {
      $a || la(O, g);
    }
    var M = B.matchMedia, a, b = [], c;
    $a.push(function() {
      S = Q;
      a = ea(Ha, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Aa(function() {
        c = !0;
        b.length && ha(ia);
      });
    });
    pb = function(g, f, y, t) {
      if (r) {
        g.addEventListener(f, y, t ? ib ? t : t.capture : !1);
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
          d[f] = t = [D], k || (f = g[K], "function" === typeof f && f !== G && t.unshift({l:g, j:f}));
        }
        k ? g.attachEvent(K, G) : g[K] = G;
      }
    };
    za = function(g, f, y, t) {
      if (r) {
        g.removeEventListener(f, y, t ? ib ? t : t.capture : !1);
      } else {
        t = d[f];
        f = "on" + f;
        var D, K, pa;
        if (t) {
          for (D = t.length; K = t[--D];) {
            K.l === g && (K.j === y ? t.splice(D, 1) : pa = !0);
          }
          pa || (k ? g.detachEvent(f, G) : (g[f] = x, g[f] = null));
        }
      }
    };
    var d = {}, k = !1, n = 525.13 > Ja, r = !n && !Ya && B.addEventListener, H;
    n && da.addEventListener("click", function(g) {
      if (H) {
        return H = !1, g.preventDefault(), !1;
      }
    });
    Aa = function(g) {
      $a ? $a.push(g) : alert("Load event has already been dispatched!");
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
    hb = function(g) {
      Ca.push(g);
    };
    Aa(function() {
      C();
      Cb(C);
    });
    J = function(g) {
      Pa && Pa.push(g);
    };
    var aa = 60 > ja || rb, ba, N, u;
    if (89 <= ja || 89 <= ya || eb && 79 <= Gb || M && (M("(forced-colors:none)").matches || M("(forced-colors:active)").matches)) {
      Ga = !0, S("(forced-colors:active)", function(g) {
        ba = g.matches;
        L = p();
        Y(Pa, L);
        l("(forced-colors:active):" + L);
      });
    } else if (10 <= v || Ia || eb && Gb) {
      Ga = !0, S("(-ms-high-contrast:black-on-white)", function(g) {
        ba = N = g.matches;
        L !== p() && (L = p(), Y(Pa, L), l("(-ms-high-contrast:black-on-white):" + L));
      }), S("(-ms-high-contrast:white-on-black)", function(g) {
        ba = u = g.matches;
        L !== p() && (L = p(), Y(Pa, L), l("(-ms-high-contrast:white-on-black):" + L));
      }), S("(-ms-high-contrast:active)", function(g) {
        ba = g.matches;
        L !== p() && (L = p(), Y(Pa, L), l("(-ms-high-contrast:active):" + L));
      });
    } else if (eb && (v || ja && 0 <= q.conpare(R, "1.8.1") || rb)) {
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
        f && (ba = "#123456" !== f && "rgb(18,52,86)" !== f, N = g(f) < g(y, !0), u = g(f) > g(y, !0), L !== p() && (L = p(), l("(forced-colors-fallback):" + L), Y(Pa, L, aa)));
      };
      hb(function(g) {
        if (g) {
          return ka(a, "color", "#123456"), ka(a, "backgroundColor", "#123456"), aa ? (A(), Pa = Q) : Cb(A), A = Q, !0;
        }
      });
    } else {
      Pa = p = Q;
    }
    Lb = function(g) {
      O.push(g);
    };
    var O = [], Ba = 0, Fa = 1 > ja || 1.2 <= ja && 1.8 > ja || 7.2 >= U;
    Fa ? Cb(function() {
      var g = B.scrollY || Ha.scrollTop;
      Ba !== g && (Ba = g, F());
    }) : pb(B, "scroll", F);
    ma(function() {
      Fa || za(B, "scroll", F);
    });
  })();
  var db = 9 > v || 525 <= Ja && 530 > Ja || 2 > ya, Ub = 0, Vb, Wb, Xb, bc;
  (function() {
    function p(a) {
      for (var b = Y.length, c; b;) {
        if (c = Y[--b], c.F === a) {
          return c;
        }
      }
    }
    function E() {
      var a = I.styleSheets, b = [], c = 0, d = -1, k;
      if (a) {
        for (k = a.length; c < k; ++c) {
          if (2 > ya || eb && 526 > Ja) {
            var n = la(a[c]);
            n.parentNode && (b[c] = n);
          } else {
            b[c] = la(a[c]);
          }
        }
      } else {
        for (a = ab("*"), k = a.length; c < k; ++c) {
          n = a[c];
          var r = Kb(n);
          if ("STYLE" === r || "LINK" === r && "text/css" === z(n, "type")) {
            b[++d] = n;
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
      var k = c[d - 1];
      c = c[d];
      if (C || F) {
        var n = c ? kb(c, "style") : k ? ob(k, "style") : ea(nb, "style");
        F && ub(n, "");
        var r = S(n);
        a && w(n, "media", a);
      } else if (ia || G) {
        r = {D:a, C:d, G:!0};
      }
      if (r) {
        return Y.push({F:r, h:n, m:[]}), r;
      }
    };
    Wb = function(a) {
      a = p(a);
      var b = a.m, c = b.length, d;
      for (a.h && Da(a.h); d = b[--c];) {
        d.i && Da(d.i);
      }
      Y.splice(Y.indexOf(a), 1);
    };
    Xb = function(a, b, c, d) {
      var k = p(a), n = k.h;
      k = k.m;
      var r = "@import" === b, H = "@page" === b, oa = "@font-face" === b, T = k.length, aa = "", ba;
      if (a.imports) {
        var N = a.imports.length;
      } else {
        for (N = 0; N < T && "@import" === k[N].u; ++N) {
        }
      }
      if (r) {
        d = 0 <= d && d < N ? d : N;
        var u = b + ' "' + c + '"';
      } else {
        d = N <= d && d < T ? d : T;
        for (u in c) {
          aa += ";" + u + ":" + c[u];
        }
        aa = aa.substr(1);
        u = b + "{" + aa + "}";
        6 <= v && oa && (d = T);
      }
      T = {u:b, v:c, o:d, s:d};
      if (9 > v) {
        N = a.rules;
        var A = N.length;
        if (oa) {
          b = I.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + u + "</style>", b = b.lastChild, (ba = n.nextSibling) ? Ra(n).insertBefore(b, ba) : Ra(n).appendChild(b), T.i = b;
        } else {
          r ? a.addImport(c, d) : 5.5 <= v && H || a.addRule(b, aa, d);
          T.s = d + (N.length - A - 1);
          if (0 === N.length - A) {
            return l("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + u), -1;
          }
          l("[CSSOM] rules.length \u306e\u5897\u5206" + (N.length - A));
        }
      } else if (C || F) {
        (eb && Ja || 28 > ya) && r ? T.i = ob(n, "link", {href:c, rel:"stylesheet", type:"text/css"}) : db && oa ? (b = T.i = ob(n, "style", {type:"text/css", media:a.media}), b.innerText = u) : a.insertRule(u, d);
      }
      k.splice(d, 0, T);
      if (ia || G) {
        n = p(a);
        ba = n.m;
        b = n.h;
        c = a.C;
        r = E();
        a = r[c - 1];
        c = r[c];
        r = [];
        oa = H = -1;
        aa = "style";
        T = {type:"text/css", media:n.D};
        for (var O; N = ba[++H];) {
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
        ia && (r = "data:text/css;charset=utf-8;base64," + M(r), T.rel = "stylesheet", T.href = r, aa = "link", r = Q);
        b ? (n.h = ob(b, aa, T, r), Da(b)) : (b = c ? kb(c, aa, T, r) : a ? ob(a, aa, T, r) : ea(nb, aa, T, r), n.h = b);
      }
      O = d;
      a = k.length;
      for (n = O; n < a; ++n) {
        ba = k[n], ba.i || (b = ba.s - ba.o, ba.o = O, ba.s = O + b, O += 1 + b);
      }
      return d;
    };
    bc = function(a, b, c) {
      b = p(a).m[b];
      var d;
      if (b) {
        if ("@import" === b.u) {
          var k = b.v;
        } else if (C || F) {
          l("[CSSOM] CSSOM_getRawValueOfRule : " + d + " " + (9 > v ? a.rules : a.cssRules).length + " " + b.o);
          if (a = d = (9 > v ? a.rules : a.cssRules)[b.o]) {
            d = d.style;
            a = [];
            c = c.split("");
            k = 0;
            b = c.length;
            for (var n, r = !1; k < b; ++k) {
              n = c[k], "-" === n ? r = !0 : r ? (a[k] = n.toUpperCase(), r = !1) : a[k] = n;
            }
            a = d[a.join("")];
          }
          k = a;
        } else {
          k = b.v[c];
        }
      }
      return k;
    };
    var Y = [], ia = 1 > ja || 8 <= U && 9 > U, G = 7.2 <= U && 8 > U, C = !!v || !ia && !G && function() {
      var a = ea(da, "style"), b = !!S(a);
      b && (l("[CSSOM] CSSStyleSheet @insertRule : " + !!S(a).insertRule), l("[CSSOM] CSSStyleSheet @addRule : " + !!S(a).addRule), l("[CSSOM] CSSStyleSheet @cssRules : " + !!S(a).cssRules), l("[CSSOM] CSSStyleSheet @rules : " + !!S(a).rules), l("[CSSOM] CSSStyleSheet @cssText : " + ("" === S(a).cssText)));
      Da(a);
      return b;
    }();
    l("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + C);
    var F = !C && Ja && !ia && !G && function() {
      var a = ea(da, "style"), b;
      ub(a, "");
      if (b = !!S(a)) {
        l("[CSSOM] CSSStyleSheet @insertRule : " + !!S(a).insertRule), l("[CSSOM] CSSStyleSheet @addRule : " + !!S(a).addRule), l("[CSSOM] CSSStyleSheet @cssRules : " + !!S(a).cssRules), l("[CSSOM] CSSStyleSheet @rules : " + !!S(a).rules), l("[CSSOM] CSSStyleSheet @cssText : " + ("" === S(a).cssText));
      }
      Da(a);
      return b;
    }();
    C || l("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + F);
    Ub = ia || G ? 1 : C || F ? 2 : 0;
    l("[CSSOM] p_CSSOM_canuse : " + Ub);
    var M;
    (function(a) {
      function b(d) {
        for (var k = c, n = "", r = 0, H; H = d.length;) {
          4 > H && (r = [0, 2, 1, 0][H]), H = d.charCodeAt(0) << 16 | (1 < H ? d.charCodeAt(1) : 0) << 8 | (2 < H ? d.charCodeAt(2) : 0), n += [k[H >>> 18], k[H >>> 12 & 63], 2 <= r ? "=" : k[H >>> 6 & 63], 1 <= r ? "=" : k[H & 63]].join(""), d = d.substr(3);
        }
        return n;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      M = b;
    })(this);
  })();
  (function() {
    function p() {
      if (525 > Ja || ja && !yb || 2.2 > h(21) || h(25) || 10 > h(3) || va(32) || va(30) || va(1) || va(2) || va(3)) {
        return !1;
      }
      if (db) {
        return !0;
      }
      if (2 === Ub) {
        var G = Vb();
        var C = Xb(G, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var F = G.cssText || G.cssRules && G.cssRules[C] && G.cssRules[C].cssText || "";
        var M = F.match("src") && F.match("@font-face");
        l("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + F);
        l("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > v ? G.rules : G.cssRules).length);
        l("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + bc(G, C, "src"));
        Wb(G);
      }
      p = Q;
      return ia = !!M;
    }
    Ca.splice(0, 0, function() {
      if (na) {
        Ta = 8 <= v || Ia || 9.5 <= U || yb || rb || 522 <= Ja || 3 <= Za || Fb || Tb ? 3 : 7.2 <= U ? 2 : 6 <= U || ja ? 1 : 0;
        if (!Ta && !v && !Ya) {
          var G = ea(Ha, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ta = 6 <= G.offsetWidth ? 2 : 0;
          Da(G);
        }
        l("p_cssGeneratedContentGrade:" + Ta);
        return !0;
      }
    });
    Ab = function(G) {
      function C(a) {
        M = X(M);
        E = a;
        F.onload = F.onerror = x;
        ha(G, a);
      }
      if (E !== Q) {
        l("[dataUriTest] already done : " + E), ha(G, E);
      } else if (8 > v) {
        l("[dataUriTest] trident < 8 : false"), ha(G, !1);
      } else {
        l("[dataUriTest] start!");
        var F = new Image(), M = ha(function() {
          M && C(!1);
        });
        F.onerror = function() {
          l("[dataUriTest] no DATA URI!");
          C(!1);
        };
        F.onload = function() {
          l("[dataUriTest] DATA URI:" + (1 === F.width * F.height));
          C(1 === F.width * F.height);
        };
        F.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var E;
    9 > v && Aa(function() {
      var G = ea(Ha, "div");
      wa(G, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Hb = 1 < G.offsetHeight;
      wa(G, "");
      Da(G);
    });
    Bb = function(G, C) {
      function F() {
        if (a || !b || M.complete) {
          l("[imageTest] timer -> img.complete. img.width=" + M.width);
          var c = !!M.width;
          tb = tb || c;
          ha(G, c);
          M.onerror = M.onload = x;
          M = G = Q;
        } else {
          --b, ha(F);
        }
      }
      var M = new Image(), a, b = 99;
      l("[imageTest] start.");
      M.onerror = function() {
        l("[imageTest] error!");
        a = !0;
      };
      M.onload = function() {
        l("[imageTest] onload.");
        a = !0;
      };
      M.src = C;
      ha(F);
    };
    var S = 9 > v || 2 > ya || 12 > U, la = "bad_" + (new Xa() - 0) + "_", Y = ["sans-serif", "serif"], ia;
    Ma = function(G, C, F, M, a, b, c) {
      function d(f) {
        G(f);
        g && !f && Wb(g);
        G = A = O = Ba = g = Q;
      }
      function k() {
        var f = '1.6em "' + C + '"';
        l("[webFontTest] testByNativeFontLoaderAPI start.");
        I.fonts.load(f).then(function(y) {
          l("[webFontTest] fonts.check() : " + I.fonts.check(f, "i") + ", fonts.length : " + y.length);
          H(C) ? ha(d, Fa) : (l("[webFontTest] mesureWebFont() : false"), r(!0));
        }, function(y) {
          l("[webFontTest] fonts.load() rejected! " + y);
          Ab(oa);
        });
      }
      function n(f) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (N = new Xa() - 0, !1) : f < new Xa() - N;
      }
      function r(f) {
        f && (l("[webFontTest] testWebFont start."), N = new Xa() - 0);
        H(C) ? (l("[webFontTest] testWebFont mesurement success : " + Fa), d(Fa)) : n(ba) ? (l("[webFontTest] testWebFont timeout!"), u ? d(0) : S ? ha(d, 0) : Ab(oa)) : ha(r);
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
        l("[webFontTest] onTestDataURIComplete : " + f);
        (u = f) ? T(!0) : d(0);
      }
      function T(f) {
        var y;
        f && (N = new Xa() - 0);
        for (y in F) {
          H(y) ? (l("[webFontTest] success! " + y), O = ea(Ha, "div", {"aria-hidden":"true", className:M, id:M}), g = Vb(), Xb(g, "@import", F[y]), ha(aa, !0)) : n(100) ? (l("[webFontTest] timeout! " + y), delete F[y], ha(T, !0)) : ha(T);
          return;
        }
        d(0);
      }
      function aa(f) {
        f && (l("[webFontTest] testImportedCssReady start!"), C = C.replace(la, ""), l("[webFontTest] targetWebFontName : " + C), N = new Xa() - 0);
        1 < O.offsetWidth ? (l("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Da(O), ba = 100, ha(r, !0)) : n(ba) ? 528 > Ja ? (l("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Da(O), ba = 100, ha(r, !0)) : (l("[webFontTest] testImportedCssReady timeout!"), Da(O), d(0)) : ha(aa);
      }
      var ba = c || 5000, N, u, A, O, Ba, Fa, g;
      p || ia ? ia || p() ? (l("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !I.fonts || 603 > Ja ? (l("[webFontTest] No native font loader."), r(!0)) : (l("[webFontTest] Use Native font loader."), k())) : (l("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), ha(d, 0)) : (l("[webFontTest] webFontTest_maybeCanUseWebFont : false"), ha(d, 0));
    };
  })();
  var Na = String.fromCharCode, vb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Na(960), ")", "(", Na(234), Na(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Na(9824), "\u2190", Na(9829), Na(9830), Na(9827), Na(956), "\u03a9", "\u2193", "\u2192", "%", Na(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Na(9619)], cc = (9 === v || ja && 0 <= q.conpare(R, "1.8.1") || rb) && !Ga, Mb = [], qb, lb, Sb = 7.2 > U ? function() {
    qb = !qb;
    for (var p = -1, E; E = Mb[++p];) {
      -1 !== E.className.indexOf("pbAlp") ? ka(E, "display", qb ? "" : "none") : (bb(E, qb ? "pbChrCS" : "pbChr00"), Ea(E, qb ? "pbChr00" : "pbChrCS"));
    }
  } : cc ? function() {
    qb = !qb;
    for (var p = -1, E; E = Mb[++p];) {
      ka(E, "opacity", qb ? 1 : 0);
    }
  } : Q;
  var Yb = function(p) {
    Sb ? gb(p, "pbChrCS") && (lb || !U && !L || (lb = setInterval(Sb, 400)), -1 === Mb.indexOf(p) && Mb.push(p)) : Mb = Q;
  };
  cc && J(function(p) {
    p ? lb || (lb = setInterval(Sb, 400)) : lb && (clearInterval(lb), lb = 0);
  });
  Sb && ma(function() {
    lb && clearInterval(lb);
  });
  Ga || J(function(p) {
    p ? (w(da, "forced-colors", 2 === p ? "lod" : 3 === p ? "dol" : "active"), (ra || 9 === v || 5.5 <= v && 9 > v && Hb) && bb(da, "jsCanRotate")) : (W(da, "forced-colors"), Ea(da, "jsCanRotate"));
  });
  (function() {
    function p(u) {
      H = u;
      l("[pbList] WebFont test result : " + !!u);
      u ? Y() : tb ? la(!0) : tb !== Q ? Y() : (l("[pbList] Need imageTest " + oa), Bb(la, oa));
      l("window.offscreenBuffering = " + B.offscreenBuffering);
    }
    function E() {
      E = Q;
      Ma(p, "PB-100", {"PB-100_canTTF":Va + "pbFont/ttf.css", "PB-100_canWOFF":Va + "pbFont/woff.css", "PB-100_canEOT":Va + "pbFont/eot.css", "PB-100_canSVG":Va + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function S(u) {
      this.focus();
      u.preventDefault();
      u.stopPropagation();
    }
    function la(u) {
      u ? (l("[pbList] Fallback start!"), bb(Ha, "pbList-noWebFont")) : l("[pbList] image disabled!");
      Y();
    }
    function Y() {
      for (p = Ma = Q; r.length;) {
        ia(r.shift(), r.shift());
      }
      l("[pbList] complete.");
    }
    function ia(u, A) {
      function O(t) {
        t = jb(t);
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
      if (p) {
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
        for (var wb = ""; ta;) {
          ta & 1 && (wb += sa), ta >>= 1, sa += sa;
        }
        return wb;
      }
      function Ba(sa, ta, wb) {
        for (var Zb, ec = -1, $b, ac; Zb = ta[++ec];) {
          for (; 0 <= ($b = sa.indexOf(Zb));) {
            ac = Zb.length, sa = sa.substr(0, $b) + O(wb, ac) + sa.substr($b + ac);
          }
        }
        return sa;
      }
      function Fa(sa) {
        var ta = V(sa), wb = "" + ta;
        return 0 < ta && ta === ta | 0 && (ta = sa.indexOf(wb) + wb.length, ta <= sa.length) ? ta : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), f = 5 > v || 1 === A.nodeType, y = [], t = "", D, K = -1, pa, Ka, cb;
      if (f) {
        if (ba) {
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
        t = Ba(t, n, "^");
        t = Ba(t, d, "{");
        t = Ba(t, k, "}");
      }
      K = 0;
      for (pa = u.length; K < pa; ++K) {
        D = u.charAt(K);
        var P = D === c;
        var Sa = " " === D;
        D = P ? " " : D;
        var fa = t.charAt(K);
        var mb = (Ka = xb) && P;
        var xb = "|" === fa;
        fa = g["+|~{}^".indexOf(fa) + 1];
        "\n" !== D ? (H || !tb ? (2 === H && u.substr(K, 2) === b && (D = b, ++K), fa = Sa && "str" === fa ? "pbList-strsp" : P ? "" : !Sa && fa ? "pbList-" + fa : "") : (P = vb.indexOf(D), P = -1 === P ? "" : vb.indexOf(D).toString(16).toUpperCase(), P = (P = 1 === P.length ? "0" + P : P) ? "pbChr" + P : "", fa = Sa && "str" === fa ? "pbList-strsp" : Sa || !P ? "" : fa ? (P ? P + " " : "") + "pbList-" + fa : P), P = Q, mb ? (D = 6 <= v && 8 > v ? " " : c, fa = "") : xb && (1.9 > ja || 9.5 > U) ? 
        (xb && !Ka && (cb = 4 - (V(u.substr(K)) + "").length), 7.5 > U ? P = aa ? "position:relative;top:-4px;left:" + 12 * cb + "px" : {position:"relative", top:"-4px", left:12 * cb + "px"} : 1.3 <= ja ? (P = aa ? "position:absolute;left:" + 12 * cb + "px" : {position:"absolute", left:12 * cb + "px"}, ++cb) : P = aa ? "position:relative;left:" + 12 * cb + "px" : {position:"relative", left:12 * cb + "px"}) : Sa && 7.5 > U && (fa = "pbList-strsp"), aa ? y.push("<font" + (fa ? ' class="' + fa + '"' : 
        "") + (P ? ' style="' + P + '"' : "") + ">" + D + "</font>") : f || N ? ea(A, "font", {"class":fa, style:P}, D) : kb(A, "font", {"class":fa, style:P}, D)) : (Ka = xb = !1, aa ? y.push(D) : f || N ? ub(A, D) : Rb(A, D));
      }
      if (f) {
        aa ? A.innerHTML = y.join("") : N && Oa.appendChild(A), ba && ka(A, "visibility", xa);
      } else {
        if (aa) {
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
    hb(function(u) {
      if (u) {
        u = Jb("pbChrCS");
        for (var A = 0, O = u.length; A < O; ++A) {
          Yb(u[A]);
        }
        return !0;
      }
    });
    var C = [];
    hb(function(u) {
      function A(xa) {
        var Oa = z(xa, "pbTip"), P = Oa.charAt(0), Sa = "_" === P;
        Oa = Sa ? Oa.charAt(2) : P;
        P = Sa ? "Btm" : "";
        var fa = z(xa, "title");
        Fa || (W(xa, "pbTip"), W(xa, "title"), bb(xa, "pbTipPos" + Oa.toUpperCase()), ea(xa, "div", {className:"pbTip" + P, style:{width:fa.length + Ba + "em"}}, fa));
        ea(xa, "div", {className:"pbTail" + P});
        g && Sa && (xa.focus(), xa.blur());
      }
      function O(xa) {
        if (2 > Ta) {
          var Oa = z(xa, "pbGhst"), P = xa.className, Sa = P.split("pbCsr")[1] || "", fa = P.split("pbAlp")[1] || "";
          if ("CS" === Oa) {
            var mb = "_";
          } else {
            mb = Oa, 3 === mb.length && (mb = mb.substr(0, 2)), mb = vb[parseInt(mb, 16)] || "~";
          }
          var xb;
          Sa = Sa.split(" ")[0];
          fa = V(fa.split(" ")[0]);
          var sa = 10 - fa;
          fa && 7.2 > U && (P = P.split("pbChr")[1], P = P.split(" ")[0], ka(xa, "backgroundPosition", Eb(P, 2, K) + "px " + -24 * (10 - fa) + "px"));
          Oa && (7.2 > U && (xb = {backgroundPosition:Eb(Oa, 2, K) + "px " + -24 * (10 - sa) + "px"}), W(xa, "pbGhst"), y = kb(xa, "b", {className:"pbChr" + Oa + " pbAlp" + sa + " pbCsr" + Sa, style:xb}, mb), Yb(y));
          Yb(xa);
        }
      }
      if (u) {
        var Ba = 6 > v ? 2 : 0;
        u = ab("SAMP");
        var Fa = 8 === v, g = 5 <= v && 6 > v, f, y, t, D;
        Hb && bb(Ha, "pbLCD-AX");
        if (u.length) {
          for (t = -1; f = u[++t];) {
            if (gb(Ra(f), "pbLCD")) {
              var K = gb(f, "PB-120") || gb(f, "FX-795P");
              var pa = Ua(f);
              for (f = pa.length; f;) {
                var Ka = pa[--f];
                switch(Kb(Ka)) {
                  case "A":
                    (2 > Ta || Fa) && A(Ka);
                    if (2 > Ta) {
                      var cb = Ua(Ka);
                      for (D = cb.length; D;) {
                        !Fa && O(cb[--D]);
                      }
                    }
                    Fb ? w(Ka, "href", "javascript:void(0)") : (pb(Ka, "click", S), C.push(Ka));
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
    var F = vb[7], M = vb[30], a = vb[113], b = Na(8337) + Na(8331), c = Na(160);
    Na(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), k = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), n = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + M + vb[31]).split(""), r = [], H, oa, T;
    hb(function(u) {
      if (u) {
        oa = 1 > Va + ja ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        u = ab("*");
        for (var A = -1, O; O = u[++A];) {
          gb(O, "pbList") ? ia(O) : gb(O, "pbFont") && ia(O, !0);
        }
        r.length && (l("[pbList] " + r.length / 2 + " elements found. WebFont test start."), E());
        return !0;
      }
    });
    ja && q.conpare(R, "0.9.6");
    var aa = !1, ba = 8 > U, N = !aa && !ba && !(6 > v) && I.createDocumentFragment && !!Ha.replaceChild;
    ca.prettify = ia;
  })();
  var dc = I.scripts || ab("script");
  var Va = dc[dc.length - 1].src.split("/");
  --Va.length;
  (Va = Va.join("/")) && (Va += "/");
  l("[p_assetUrl] " + Va);
  Aa(function() {
    var p;
    (p = Qb("logger")) || alert("#logger not found!");
    p ? (l = function(E) {
      ea(p, "P", Q, E);
    }, Db = function(E) {
      ea(p, "P", {style:{color:"red"}}, E);
    }, B.onerror = function(E, S, la) {
      Db(E + ", " + S + ", " + la);
      return !0;
    }) : B.console ? (l = console.log, Db = console.error) : U ? (l = x, Db = opera.postError) : l = Db = x;
    for (; Qa.length;) {
      l(Qa.shift());
    }
    for (; fb.length;) {
      l(fb.shift());
    }
    Qa = fb = Q;
  });
  6.1 > Za && Lb(Nb);
  ma(Ib);
  6.1 > Za && Lb(Ob);
  ma(Pb);
  10 > v && (11 !== sb || 5 !== v) || (9 > U || 1 > ja || !Ya && !B.addEventListener ? I.write('<link href="' + Va + zb + '" rel="stylesheet"' + (8 > U ? "" : ' media="screen,handheld,projection,print"') + ">") : Aa(function() {
    ea(nb, "link", {href:Va + "" + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

