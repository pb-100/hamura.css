PB100={};var m;
ua = [];
ua.conpare = function(ca, r) {
  var C = 0, x, I, qa = (ca + "").split("."), V = (r + "").split("."), La = qa.length;
  for (x = V.length; "0" === qa[La - 1];) {
    --La;
  }
  for (; "0" === V[x - 1];) {
    --x;
  }
  for (I = La < x ? La : x; C < I; ++C) {
    var Wa = qa[C] - 0, n = V[C] - 0;
    if (Wa !== n) {
      return Wa > n ? 1 : -1;
    }
  }
  return La > x ? 1 : La === x ? 0 : -1;
};
(function(ca, r, C, x, I, qa, V, La) {
  function Wa(J, oa, L) {
    L = qa(J.split(oa)[1]);
    return 0 <= L ? L : 0;
  }
  function n(J, oa) {
    return 0 <= J.indexOf(oa);
  }
  function Xa(J) {
    return n(J, "Linux armv") || n(J, "Linux aarch") || n(J, "Linux i686") || n(J, "Linux x86_64");
  }
  function Q(J, oa) {
    for (var L in oa) {
      if (L === J) {
        return !0;
      }
    }
  }
  function h(J, oa) {
    var L = "", Ha = -1, db;
    if (J = J.split(oa)[1]) {
      for (; db = J.charCodeAt(++Ha);) {
        if (48 <= db && 57 >= db || 46 === db) {
          L += J.charAt(Ha);
        } else {
          break;
        }
      }
      for (Ha = L.length; Ha;) {
        if (46 === L.charCodeAt(--Ha)) {
          L = L.substr(0, Ha);
        } else {
          break;
        }
      }
    }
    return L;
  }
  function wa(J) {
    for (var oa = arguments, L = 1, Ha = oa[0], db; L < oa.length; ++L) {
      0 > ra(Ha, db = oa[L]) && (Ha = db);
    }
    return Ha;
  }
  function Fb(J) {
    return J === J + "" ? J : J === J - 0 ? "" + J : J.min && J.max ? J.min + "~" + J.max : J.min ? J.min + "~" : "~" + J.max;
  }
  var ra = ca.conpare, e = x.userAgent, ja = x.appVersion, nb = qa(ja) || 0, R = x.platform, t = C.documentElement, Ya = t && t.style, Ia = C.documentMode, U = I.width;
  I = I.height;
  var ka = r.HTMLAudioElement, yb = r.performance, rb = r.Int8Array, Ja = r.ontouchstart !== La, Za = h(ja, "Version/") || h(e, "Version/"), Gb = r.operamini, za = !Gb && r.opera, Wb = za && (za.version && "function" === typeof za.version ? za.version() : wa(h(e, "Opera "), Za, nb)), Hb = r.opr, sb = !za && (C.all || Ia);
  Ia = sb && (Ia ? Ia : r.XMLHttpRequest ? C.getElementsByTagName ? 7 : 4 : C.compatMode ? 6 : (0).toFixed ? 5.5 : r.attachEvent ? 5 : 4);
  t = !sb && t.msContentZoomFactor;
  var eb = !t && (r.chrome || r.chromium), ib = !sb && function() {
    for (var J in Ya) {
      if (0 === J.indexOf("Moz")) {
        return !0;
      }
    }
  }(), zb = n(e, "UCWEB"), Ib = zb && h(e, " U2/"), tb = zb && h(e, "; wds "), Pa = h(e.split("_").join("."), "; iPh OS "), sa = h(e, "; Adr "), $a = n(ja, "YJApp-ANDROID"), Da = n(R, "Android") || ib && n(ja, "Android") || $a;
  sa = h(R, "Android ") || h(ja, "Android ") || h(e, "Android ") || sa;
  var Qa = n(R, "Linux"), Ab = "MacIntel" === R && x.standalone !== La, Bb = ib && h(e, "Goanna/"), Ma = !Bb && ib && (h(e, "rv:") || h(e.substr(e.indexOf(") Gecko/") - 11), "; ")), fa = h(e, "Firefox/"), X = h(e, "Opera/"), Cb = r.FNRBrowser, Ra = Wa(e, "AppleWebKit/"), fb = h(e, "Chrome/"), Qb = h(ja, "Iron/"), Jb = h(e, "OPR/"), Rb = h(ja, "KHTML/"), Sb = h(e.toLowerCase(), "iris");
  h(e, "FxiOS/");
  h(e, "CriOS/");
  h(e, "EdgiOS/");
  var Tb = h(e, "Silk/"), ab = Wa(e, "SamsungBrowser/"), Kb = !ab && function() {
    for (var J = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    oa, L = J.length; oa = J[--L];) {
      if (n(e, oa)) {
        return 2 > qa(Za) ? Za : 0.9;
      }
    }
    J = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (L = J.length; oa = J[--L];) {
      if (n(e, oa)) {
        return Za;
      }
    }
  }(), Sa = eb && 534.3 >= Ra, jb = Xa(R), Ua = jb && !n(e, R) && Xa(e);
  Ja = Ja && (Ra || ib) && Ua || !sa && $a;
  $a = !!r.ReactNativeWebView;
  jb = jb && function() {
    for (var J in r) {
      if (0 === J.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var da = (Ua = r.puffinDevice) && Ua.clientInfo;
  da = (Ua = da && "iOS" === da.os && da.osVersion) && da.model;
  var kb = !Ia && C.registerElement, ob = !Ia && C.execCommand, ub = r.webkitCancelAnimationFrame, Ub = Qa && kb && "11.0.696.34" === fb, Ea = r._firefoxTV_playbackStateObserverJava, Lb = Wa(e, "diordnA ");
  if ("Nitro" === R) {
    var z = 1;
  } else if ("Nintendo DSi" === R) {
    z = 2;
    var w = X;
  } else if ("New Nintendo 3DS" === R || n(e, "iPhone OS 6_0") && 320 === U && 240 === I) {
    z = 4, w = h(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    z = 3, w = h(e, "Version/"), Ra = 535;
  } else if ("Nintendo Swicth" === R) {
    z = 7, w = h(ja, "NintendoBrowser/");
  } else if (r.wiiu) {
    z = 6;
    w = h(ja, "NintendoBrowser/");
    var W = 15, Z = h(ja, "AppleWebKit/") || (ub ? 536 : 534);
    w || (w = ub ? 4 : 2, n(ja, "Macintosh;") || n(ja, "Windows NT") && n(ja, "Touch"));
  } else if (za && za.wiiremote) {
    z = 5, w = h(e, "Wii; U; ; ");
  } else if (X = h(e, "PlayStation Vita ")) {
    z = 10, w = X;
  } else if (X = h(e, "(PlayStation Portable); ")) {
    z = 8;
    w = X;
    var gb = 3.3;
  } else if (X = h(e, "PLAYSTATION 3; ") || h(e, "PLAYSTATION 3 ")) {
    z = 11, w = X, 0 > ra("4.10", X) && (W = 26, Z = X);
  } else if (n(e, "Xbox One")) {
    z = 15, w = 1;
  } else if (n(e, "Xbox")) {
    z = 14, w = 1;
  } else if (2 === nb && n(e, "Sony/COM2/")) {
    z = 17;
    w = 2;
    gb = 3.4;
    var bb = !0;
  } else if (0 === R.indexOf("iP") || Pa || Ua || Ab) {
    if (Ua) {
      switch(w = Ua, da.substr(0, 4)) {
        case "iPho":
          var Fa = 0;
          h(da, Fa);
          var ia = !0;
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
      Pa ? w = Pa : (w = h(ja.split("_").join("."), "OS "), Q("isSecureContext", r), Q("enableWebGL", r), Q("sameOrigin", r));
      if (!w || Cb) {
        w = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : r.SharedWorker ? yb && yb.now ? 8.0 : 8.4 : ob ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : rb ? 4.3 : ka ? 4.1 : 3.2;
      }
      var Aa = U === 1.5 * I || 1.5 * U === I;
      0 === R.indexOf("iPhone") ? (Fa = 0, ia = !0) : 0 === R.indexOf("iPad") || Ab ? (Fa = 1, xa = !0) : 0 === R.indexOf("iPod") && (Fa = 2, pb = !0);
    }
    W = !Ua && (x.standalone || (xa || 12 > w) && Q("webkitFullscreenEnabled", C) || 11 <= w && 13 > w && x.mediaDevices) ? 16 : 17;
    z = 24;
    Z = w;
  } else if (n(e, "Kobo")) {
    z = 18, W = 21, Z = 2.2, Da = !0;
  } else if (n(e, "EBRD")) {
    z = 19, W = 21, Z = 2.2;
  } else if (X = h(e, "CrOS x86_64 ") || h(e, "CrOS aarch64 ") || h(e, "CrOS i686 ") || h(e, "CrOS armv7l ")) {
    z = 28, w = X;
  } else if (r.onmoztimechange !== La) {
    z = 29, w = 18.1 > Ma ? "1.0.1" : 19 > Ma ? 1.1 : 27 > Ma ? 1.2 : 29 > Ma ? 1.3 : 31 > Ma ? 1.4 : 33 > Ma ? 2.0 : 35 > Ma ? 2.1 : 38 > Ma ? 2.2 : 45 > Ma ? 2.5 : 2.6, n(e, "Mobile") ? ia = !0 : n(e, "Tablet") ? xa = !0 : n(e, "TV");
  } else if (r.palmGetResource) {
    z = 30, w = h(e, "webOS/") || h(e, "WEBOS") || h(e, "hpwOS/"), n(e, "webOS.TV") || n(e, "/SmartTV") || (ia = !0);
  } else if (X = h(e, "Tizen ")) {
    z = 31, w = X, W = 24, Z = ab, ia = !0;
  } else if (X = h(e, "Windows Phone ") || h(ja, "Windows Phone OS ") || tb) {
    z = 23, w = X, ia = !0;
  } else if (t && "ARM" === R) {
    z = 23, w = 10, ia = !0;
  } else if (sb && n(ja, "ZuneWP")) {
    z = 23, w = 11 === Ia ? 8.1 : 10 === Ia ? 8 : 9 === Ia ? 7.5 : 7 === Ia ? 7 : "?", ia = !0;
  } else if (n(e, "FOMA;")) {
    z = 16, ia = !0;
  } else if (n(e, "SoftBank;")) {
    z = 16, ia = !0;
  } else if (n(e, "KFMUWI")) {
    var Ba = !0;
    w = 6.3;
    var na = xa = !0;
  } else if (n(e, "KFKAWI")) {
    Ba = !0, w = 6, na = xa = !0;
  } else if (n(e, "KFSUWI") || n(e, "KFAUWI") || n(e, "KFDOWI")) {
    Ba = !0, w = 5, na = xa = !0;
  } else if (n(e, "KFGIWI")) {
    Ba = !0, w = 5, na = xa = !0;
  } else if (n(e, "KFARWI") || n(e, "KFSAWA") || n(e, "KFSAWI")) {
    Ba = !0, w = 5 <= qa(sa) ? 5 : 4, na = xa = !0;
  } else if (n(e, "KFSOWI") || n(e, "KFTHWA") || n(e, "KFTHWI") || n(e, "KFAPWA") || n(e, "KFAPWI")) {
    Ba = !0, w = 3, na = xa = !0;
  } else if (n(e, "KFOT") || n(e, "KFTT") || n(e, "KFJWA") || n(e, "KFJWI")) {
    Ba = !0, w = 2, na = xa = !0;
  } else if (n(e, "Kindle Fire")) {
    Ba = !0, w = 1, na = xa = !0;
  } else if (X = h(e, "Kindle/")) {
    z = 20, w = X, W = 21, Z = 2.2;
  } else if (Ea) {
    Ba = !0, w = sa || Lb, na = !0;
  } else if (n(e, "AmazonWebAppPlatform") || n(e, "; AFT")) {
    Ba = !0, w = sa, na = !0;
  } else if (n(e, "MeeGo")) {
    z = 32;
  } else if (n(e, "Maemo")) {
    z = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || Sb) {
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
    var Mb = !0;
  } else if (n(e, "BlackBerry") || n(e, "BB10")) {
    z = 34, w = Za, ia = !0;
  } else if (n(e, "SunOS") || n(e, "Sun Solaris")) {
    z = 42;
  } else if (n(e, "FreeBSD")) {
    z = 43;
  } else if (n(e, "OpenBSD")) {
    z = 44;
  } else if (n(e, "NetBSD")) {
    z = 45;
  } else if (Da && ib) {
    n(e, "Android 4.4;") ? Aa = {min:2.3} : 4 <= qa(sa) ? Aa = sa : Aa = {min:2.2}, w = Aa;
  } else if (Da && za) {
    sa ? Aa = sa : Aa = {min:1.6}, w = Aa, n(e, "Tablet") ? xa = !0 : ia = !0;
  } else if (sa) {
    w = sa, Da = !0;
  } else if (Qa && Ja || $a || jb) {
    var hb = !0;
    ab ? Aa = {min:4.4} : eb && !Sa || Hb || Jb ? Aa = {min:4} : (Aa = sa = Ya.touchAction !== La ? {min:5} : kb ? 4.4 : rb ? x.connection ? r.searchBoxJavaBridge_ || eb ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ra ? 3 : 533 <= Ra ? ka ? 2.3 : 2.2 : 530 <= Ra ? 2.0 : 1.5, Kb && (W = 24, Z = Kb));
    w = Aa;
    Da = !0;
  } else {
    Ub ? (w = {min:5}, hb = Da = !0) : Qa && (n(e, "Ubuntu") ? z = 46 : (X = h(e, "Mint/")) ? (z = 47, w = X) : (X = h(e, "Fedora/")) ? (z = 48, w = X) : z = n(e, "Gentoo") ? 49 : 50);
  }
  Ba || Da && hb && Tb ? z = 27 : Da && (z = z || 26);
  W || (na = na || Da, za ? (W = na || bb || ia || xa ? 9 : 8, Z = Wb) : sb ? (Aa = Wa(ja, "Trident/") + 4, W = bb || ia || xa || pb ? 3 : Mb && 5 <= Ia ? 7 : 2, Z = Ia) : t ? (W = 23 === z ? 6 : 5, Z = h(ja, "Edge/")) : Bb ? (W = 13, Z = Bb) : ib ? (W = na ? 12 : 11, Z = Ma || fa) : ab ? (W = 24, Z = ab) : (X = gb || h(e, "NetFront/")) ? (W = 18, Z = X) : (X = h(e, "iCab")) ? (W = 19, Z = X) : (X = wa(h(e, "Opera Mini/"), h(e, "Opera Mobi/")) || Gb && Za) ? (W = 10, Z = X, z || (n(e, "iPhone") ? 
  Fa = 0 : n(e, "iPad") ? Fa = 1 : n(e, "iPod") && (Fa = 2), Fa && (z = 24))) : zb ? (W = 25, Z = Ib) : Rb ? (W = 14, Z = nb) : Da && Sa ? (W = 21, Z = sa) : eb || Hb || Jb ? (W = na ? 22 : 20, Z = fb || Qb) : Da && kb ? (W = 23, Z = 5 > qa(sa) ? sa : fb) : Da && (Za || hb) ? (W = 21, Z = sa) : fb ? (W = na ? 22 : 20, Z = fb) : Ra && (W = 15, Z = Ra));
  z && (ca[2] = z, w && (ca[3] = Fb(w)));
  W && (ca[0] = W, Z && (ca[1] = Fb(Z)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Db;
Array.prototype.pop || (Array.prototype.pop = function() {
  var ca = this[this.length - 1];
  --this.length;
  return ca;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ca = arguments, r = 0, C = ca.length, x = this.length; r < C; ++r) {
    this[x + r] = ca[r];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ca = this[0], r = 1, C = this.length; r < C; ++r) {
    this[r - 1] = this[r];
  }
  --this.length;
  return ca;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ca = arguments, r = ca.length, C = this.length += r - 1, x = C; x >= r; --x) {
    this[x] = this[x - r];
  }
  for (x = 0; x < r; ++x) {
    this[x] = ca[x];
  }
  return C;
});
Array.prototype.splice || (Array.prototype.splice = function(ca, r) {
  var C = arguments, x = C.length - 2 - r, I = this.slice(ca, ca + r), qa;
  if (0 < x) {
    var V = this.length - 1;
    for (qa = ca + r; V >= qa; --V) {
      this[V + x] = this[V];
    }
  } else if (0 > x) {
    V = ca + r;
    for (qa = this.length; V < qa; ++V) {
      this[V + x] = this[V];
    }
    this.length += x;
  }
  V = 2;
  for (qa = C.length; V < qa; ++V) {
    this[V - 2 + ca] = C[V];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ca, r) {
  var C = this.length >>> 0;
  if (0 === C) {
    return -1;
  }
  if (r) {
    var x = r || 0;
    x = -Infinity === x ? 0 : (0 > x ? -x : x) | 0;
    if (C <= x) {
      return -1;
    }
  }
  for (x = 0 <= x ? x : 0 < C + x ? C + x : 0; x < C; ++x) {
    if (this[x] === ca) {
      return x;
    }
  }
  return -1;
});
(function(ca, r, C, x, I, qa, V, La, Wa, n, Xa, Q) {
  function h(q) {
    if (r[0] === q) {
      return R === R + "" ? V(R) : R;
    }
  }
  function wa(q) {
    var E = r[3];
    if (r[2] === q) {
      return E === E + "" ? V(E) : E;
    }
  }
  function Fb(q, E, S) {
    q + "" === q && ("a" === q.charAt(2) && (S = !0, q = q.substr(0, 2)), q = "CS" === q ? 7.2 > U ? 117 : 9 > t || 9 > U || Ya ? 1 : 132 : parseInt(q, 16));
    S && (50 === q && (q = 128), 102 < q && 108 > q && (q += 24));
    return (q - 1) * -(6 * (E || 2));
  }
  var ra = I.body, e = ra.style, ja, nb, R = r[1], t = h(2) || h(3), Ya = h(7), Ia = h(5) || h(6), U = h(8) || h(9), ka = h(11) || h(12), yb = ka && 0 <= r.conpare(R, "1.9.1"), rb = h(13), Ja = h(15), Za = h(16) || h(17), Gb = h(10) || h(25), za = h(20) || h(22), Wb = za || h(23) || h(21) || h(24), Hb = za && V(qa.userAgent.split("Edg/")[1]), sb = V(qa.appVersion.split("Trident/")[1]) + 4, eb = wa(35) || wa(36) || wa(37), ib = !t && !Ya && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  zb = (Ya ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > U ? "opr70" : 8 > U ? "opr72" : 9.5 > U ? "opr" + (U | 0) : ka && !yb ? 1.3 <= ka ? "gck190" : 1 <= ka ? "gck121" : "gck097" : "modern") + ".css";
  wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9) || wa(10);
  var Ib, tb, Pa, sa = e.transform !== Q ? "transform" : e["-o-transform"] !== Q ? "-o-transform" : e["-ms-transform"] !== Q ? "-ms-transform" : e.MozTransform !== Q ? "-moz-transform" : e["-webkit-transform"] !== Q ? "-webkit-transform" : "", $a = [], Da = [], Qa = [], Ab, Bb, Ma, fa, X, Cb, Ra = [], fb = [], Qb, Jb, Rb, Sb;
  (function() {
    function q() {
      for (var c, d = 0, l = new Xa() - 0; d < F.length;) {
        l < F[0].t ? ++d : (c = F.splice(d, 1)[0], c.f(c.p));
      }
      b = F.length ? Wa(q, M) : 0;
    }
    function E() {
      for (var c, d = 0; d < Y.length; ++d) {
        c = Y[d], c.f();
      }
    }
    function S() {
      B && (B = clearInterval(B));
    }
    function la() {
      b && (b = n(b));
    }
    m = function(c) {
      Ra.push(c);
    };
    Db = function(c) {
      fb.push(c);
    };
    Cb = function(c) {
      Y.length || (B = setInterval(E, ha));
      Y.push({f:c, B:++G});
      return G;
    };
    Qb = function() {
      B && (S(), B = setInterval(E, ha));
    };
    Jb = S;
    var Y = [], ha = 500, G = 0, B;
    if (5 > t || Ya) {
      C._wdb_onlooptimer = E, E = "_wdb_onlooptimer()";
    }
    fa = function(c, d, l) {
      F.length || (b = Wa(q, M));
      F.push({f:c, p:d, B:++a, t:new Xa() - 0 + (M < l ? l : M)});
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
    Rb = function() {
      b && (la(), b = Wa(q, M));
    };
    Sb = la;
    var F = [], M = 16, a = 0, b;
    if (5 > t || Ya) {
      C._wdb_ontimer = q, q = "_wdb_ontimer()";
    }
  })();
  var Tb, ab, Kb, Sa, jb, Ua, da, kb, ob, ub, Ub, Ea, Lb, z, w, W, Z, gb, bb, Fa, ia, xa;
  (function() {
    function q(a, b, c) {
      var d = ["<", a], l = 1, p, u;
      if (b) {
        for (p in b) {
          var H = b[p];
          if (null != H && "" !== H) {
            if ("style" === p) {
              d[++l] = ' style="';
              for (u in H) {
                for (var ma = ++l, T, aa = [], ba = u.split(""), N = ba.length; N;) {
                  T = ba[--N], "A" <= T && "Z" >= T && (T = "-" + T.toLowerCase()), aa[N] = T;
                }
                d[ma] = aa.join("") + ":" + H[u] + ";";
              }
              d[++l] = '"';
            } else {
              "className" === p && (p = "class"), d[++l] = " " + p + '="' + H + '"';
            }
          }
        }
      }
      d[++l] = ">";
      null != c && (B && "font" !== a ? d[++l] = "<FONT>" + c + "</FONT>" : d[++l] = c);
      d[++l] = "</" + a + ">";
      return d.join("");
    }
    function E(a) {
      a = "*" === a && 6 > t ? "*" !== a ? I.all.tags(a.toUpperCase()) : I.all : I.getElementsByTagName(a);
      var b = [], c = 0, d;
      for (d = a.length; c < d; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function S(a) {
      return B ? a.parentElement : a.parentNode;
    }
    function la(a, b, c, d, l, p) {
      if (B) {
        var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var H = jb(2 > a ? Sa(b) : b);
        H = 2 > a ? H.indexOf(b) + a : H.length;
        b.insertAdjacentHTML(u, q(c, d, l));
        return jb(b)[H];
      }
      b = F ? I.createElement(q(c, d)) : p ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
      if (d && !F) {
        for (u in d) {
          if ((c = d[u]) || 0 === c) {
            switch(u) {
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
                w(b, u, c);
            }
          }
        }
      }
      M || null != l && Y(b, l);
      return b;
    }
    function Y(a, b) {
      if (B) {
        return la(2, a, "font", Q, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function ha(a, b) {
      9 > t ? a.className = b : a.setAttribute("class", b);
    }
    function G(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var B = 5 > t;
    ja = E("html")[0];
    nb = E("head")[0];
    Tb = function(a) {
      return C[a] || I[a] || I.getElementById(a);
    };
    ab = E;
    Kb = function(a) {
      var b = [], c = 0, d, l = -1;
      if (9 > t || !I.getElementsByClassName) {
        var p = 6 > t ? I.all : I.getElementsByTagName("*");
      } else {
        var u = !0;
        p = I.getElementsByClassName(a);
      }
      for (d = p.length; c < d; ++c) {
        var H = p[c];
        if (u || (B || 1 === H.nodeType) && G(H, a)) {
          b[++l] = H;
        }
      }
      return b;
    };
    Sa = S;
    jb = function(a) {
      a = B ? a.children : a.childNodes;
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
          B && "FONT" === p.tagName || (c[++l] = p);
        }
      }
      return c;
    };
    da = function(a, b, c, d, l) {
      b = la(2, a, b, c, d, l);
      B || (a.appendChild(b), M && null != d && Y(b, d));
      return b;
    };
    kb = function(a, b, c, d, l) {
      b = la(0, a, b, c, d, l);
      B || (S(a).insertBefore(b, a), M && null != d && Y(b, d));
      return b;
    };
    ob = function(a, b, c, d, l) {
      b = la(1, a, b, c, d, l);
      var p;
      B || ((p = a.nextSibling) ? Sa(p).insertBefore(b, p) : Sa(a).appendChild(b), M && null != d && Y(b, d));
      return b;
    };
    ub = Y;
    Ub = function(a, b) {
      if (B) {
        return la(0, a, "font", Q, b);
      }
      var c = I.createTextNode("" + b);
      Sa(a).insertBefore(c, a);
      return c;
    };
    Ea = function(a) {
      Sa(a) ? B ? a.outerHTML = "" : Sa(a).removeChild(a) : m("[DOM] p_DOM_remove(), No parentNode!");
    };
    var F = 9 > t, M = 9 > t;
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
    Z = ha;
    gb = G;
    bb = function(a, b) {
      var c;
      if (!G(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        ha(a, c + b);
      }
    };
    Fa = function(a, b) {
      if (G(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        ha(a, c.join(" "));
      }
    };
    ia = function(a, b, c) {
      a.style[b] = c;
    };
    xa = function(a, b) {
      var c = -1, d, l;
      if (5.5 > t) {
        if (b) {
          for (d = b.split(";"); l = d[++c];) {
            var p = l.split(":");
            a.style[p[0]] = l.substr(p[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > U || 1 > ka ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var pb, Aa, Ba, na, Mb, hb, J, oa, L, Ha;
  (function() {
    function q() {
      return ba ? k ? 2 : N ? 3 : 1 : 0;
    }
    function E(g) {
      Aa(C, "load", E);
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
      for (var v = 0; v < g.length; ++v) {
        !0 === g[v](f) && (g.splice(v, 1), --v);
      }
      y && (g.length = 0);
    }
    function Y(g, f, y) {
      c && !b.length && fa(ha);
      b.push(g, f, y);
    }
    function ha() {
      var g = b, f;
      for (b = []; f = g.shift();) {
        la(f, g.shift(), g.shift());
      }
    }
    function G(g) {
      var f = g || event;
      g = d[f.type];
      var y = -1, v, D;
      t ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : p && (f.A = f.stopPropagation, f.stopPropagation = function() {
        D = !0;
      });
      for (; v = g[++y];) {
        v.l === this ? (this.g = v.j, this.g(f), this.g = x, this.g = Q) : 7.2 > U && this === I && v.l === C && (C.g = v.j, C.g(f), delete C.g);
      }
      if (t) {
        return f.preventDefault = f.stopPropagation = Q, f.returnValue;
      }
      p && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (H = !0), D && !H && f.A(), f.A = f.stopPropagation = Q);
    }
    function B() {
      var g = 9 === a.offsetWidth;
      oa !== g && (Y(Da, oa = g), m("p_cssAvailability:" + oa));
    }
    function F(g) {
      $a || la(O, g);
    }
    var M = C.matchMedia, a, b = [], c;
    $a.push(function() {
      S = Q;
      a = da(ra, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ba(function() {
        c = !0;
        b.length && fa(ha);
      });
    });
    pb = function(g, f, y, v) {
      if (u) {
        g.addEventListener(f, y, v ? ib ? v : v.capture : !1);
      } else {
        var D = {l:g, j:y};
        v = d[f];
        var K = "on" + f, pa, Ka;
        if (v) {
          for (pa = v.length; Ka = v[--pa];) {
            if (Ka.l === g && Ka.j === y) {
              return;
            }
          }
          d[f].push(D);
        } else {
          d[f] = v = [D], l || (f = g[K], "function" === typeof f && f !== G && v.unshift({l:g, j:f}));
        }
        l ? g.attachEvent(K, G) : g[K] = G;
      }
    };
    Aa = function(g, f, y, v) {
      if (u) {
        g.removeEventListener(f, y, v ? ib ? v : v.capture : !1);
      } else {
        v = d[f];
        f = "on" + f;
        var D, K, pa;
        if (v) {
          for (D = v.length; K = v[--D];) {
            K.l === g && (K.j === y ? v.splice(D, 1) : pa = !0);
          }
          pa || (l ? g.detachEvent(f, G) : (g[f] = x, g[f] = null));
        }
      }
    };
    var d = {}, l = !1, p = 525.13 > Ja, u = !p && !Ya && C.addEventListener, H;
    p && ja.addEventListener("click", function(g) {
      if (H) {
        return H = !1, g.preventDefault(), !1;
      }
    });
    Ba = function(g) {
      $a ? $a.push(g) : alert("Load event has already been dispatched!");
    };
    na = function(g) {
      ma && ma.push(g);
    };
    var ma = [];
    if (419.3 >= Ja) {
      var T = function() {
        if (T) {
          var g = I.readyState;
          "loaded" === g || "complete" === g ? (T = Q, E()) : fa(T);
        }
      };
      fa(T);
    } else {
      pb(C, "load", E);
    }
    t || 1.8 > ka ? pb(C, "unload", function(g) {
      la(ma, g, !0);
    }) : ma = Q;
    hb = function(g) {
      Da.push(g);
    };
    Ba(function() {
      B();
      Cb(B);
    });
    J = function(g) {
      Qa && Qa.push(g);
    };
    var aa = 60 > ka || rb, ba, N, k;
    if (89 <= ka || 89 <= za || eb && 79 <= Hb || M && (M("(forced-colors:none)").matches || M("(forced-colors:active)").matches)) {
      Ha = !0, S("(forced-colors:active)", function(g) {
        ba = g.matches;
        L = q();
        Y(Qa, L);
        m("(forced-colors:active):" + L);
      });
    } else if (10 <= t || Ia || eb && Hb) {
      Ha = !0, S("(-ms-high-contrast:black-on-white)", function(g) {
        ba = N = g.matches;
        L !== q() && (L = q(), Y(Qa, L), m("(-ms-high-contrast:black-on-white):" + L));
      }), S("(-ms-high-contrast:white-on-black)", function(g) {
        ba = k = g.matches;
        L !== q() && (L = q(), Y(Qa, L), m("(-ms-high-contrast:white-on-black):" + L));
      }), S("(-ms-high-contrast:active)", function(g) {
        ba = g.matches;
        L !== q() && (L = q(), Y(Qa, L), m("(-ms-high-contrast:active):" + L));
      });
    } else if (eb && (t || ka && 0 <= r.conpare(R, "1.8.1") || rb)) {
      var A = function() {
        function g(v, D) {
          if (D && "transparent" === v) {
            return 382.5;
          }
          if ("#" === v.charAt(0)) {
            return parseInt("0x" + v.substr(1, 2), 16) + parseInt("0x" + v.substr(3, 2), 16) + parseInt("0x" + v.substr(5, 2), 16);
          }
          var K = v.split("(")[1].split(",");
          return V(K[0]) + V(K[1]) + V(K[2]);
        }
        var f = I.defaultView;
        var y = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (y && y.color || "").split(" ").join("");
        y = (y && y.backgroundColor || "").split(" ").join("");
        f && (ba = "#123456" !== f && "rgb(18,52,86)" !== f, N = g(f) < g(y, !0), k = g(f) > g(y, !0), L !== q() && (L = q(), m("(forced-colors-fallback):" + L), Y(Qa, L, aa)));
      };
      hb(function(g) {
        if (g) {
          return ia(a, "color", "#123456"), ia(a, "backgroundColor", "#123456"), aa ? (A(), Qa = Q) : Cb(A), A = Q, !0;
        }
      });
    } else {
      Qa = q = Q;
    }
    Mb = function(g) {
      O.push(g);
    };
    var O = [], Ca = 0, Ga = 1 > ka || 1.2 <= ka && 1.8 > ka || 7.2 >= U;
    Ga ? Cb(function() {
      var g = C.scrollY || ra.scrollTop;
      Ca !== g && (Ca = g, F());
    }) : pb(C, "scroll", F);
    na(function() {
      Ga || Aa(C, "scroll", F);
    });
  })();
  var db = 9 > t || 525 <= Ja && 530 > Ja || 2 > za, Eb = 0, Nb, Xb, Ob, Yb;
  (function() {
    function q(a) {
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
          if (2 > za || eb && 526 > Ja) {
            var p = la(a[c]);
            p.parentNode && (b[c] = p);
          } else {
            b[c] = la(a[c]);
          }
        }
      } else {
        for (a = ab("*"), l = a.length; c < l; ++c) {
          p = a[c];
          var u = Lb(p);
          if ("STYLE" === u || "LINK" === u && "text/css" === z(p, "type")) {
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
    Nb = function(a, b) {
      var c = E(), d = c.length;
      d = 0 <= b && b < d ? b : d;
      var l = c[d - 1];
      c = c[d];
      if (B || F) {
        var p = c ? kb(c, "style") : l ? ob(l, "style") : da(nb, "style");
        F && ub(p, "");
        var u = S(p);
        a && w(p, "media", a);
      } else if (ha || G) {
        u = {D:a, C:d, G:!0};
      }
      if (u) {
        return Y.push({F:u, h:p, m:[]}), u;
      }
    };
    Xb = function(a) {
      a = q(a);
      var b = a.m, c = b.length, d;
      for (a.h && Ea(a.h); d = b[--c];) {
        d.i && Ea(d.i);
      }
      Y.splice(Y.indexOf(a), 1);
    };
    Ob = function(a, b, c, d) {
      var l = q(a), p = l.h;
      l = l.m;
      var u = "@import" === b, H = "@page" === b, ma = "@font-face" === b, T = l.length, aa = "", ba;
      if (a.imports) {
        var N = a.imports.length;
      } else {
        for (N = 0; N < T && "@import" === l[N].u; ++N) {
        }
      }
      if (u) {
        d = 0 <= d && d < N ? d : N;
        var k = b + ' "' + c + '"';
      } else {
        d = N <= d && d < T ? d : T;
        for (k in c) {
          aa += ";" + k + ":" + c[k];
        }
        aa = aa.substr(1);
        k = b + "{" + aa + "}";
        6 <= t && ma && (d = T);
      }
      T = {u:b, v:c, o:d, s:d};
      if (9 > t) {
        N = a.rules;
        var A = N.length;
        if (ma) {
          b = I.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + k + "</style>", b = b.lastChild, (ba = p.nextSibling) ? Sa(p).insertBefore(b, ba) : Sa(p).appendChild(b), T.i = b;
        } else {
          u ? a.addImport(c, d) : 5.5 <= t && H || a.addRule(b, aa, d);
          T.s = d + (N.length - A - 1);
          if (0 === N.length - A) {
            return m("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + k), -1;
          }
          m("[CSSOM] rules.length \u306e\u5897\u5206" + (N.length - A));
        }
      } else if (B || F) {
        (eb && Ja || 28 > za) && u ? T.i = ob(p, "link", {href:c, rel:"stylesheet", type:"text/css"}) : db && ma ? (b = T.i = ob(p, "style", {type:"text/css", media:a.media}), b.innerText = k) : a.insertRule(k, d);
      }
      l.splice(d, 0, T);
      if (ha || G) {
        p = q(a);
        ba = p.m;
        b = p.h;
        c = a.C;
        u = E();
        a = u[c - 1];
        c = u[c];
        u = [];
        ma = H = -1;
        aa = "style";
        T = {type:"text/css", media:p.D};
        for (var O; N = ba[++H];) {
          if (k = N.u, N = N.v, "@import" === k) {
            u[++ma] = k + ' "' + N + '"';
          } else {
            u[++ma] = k + "{";
            k = "";
            for (O in N) {
              k += ";" + O + ":" + N[O];
            }
            u[++ma] = k.substr(1) + "}";
          }
        }
        u = u.join("");
        ha && (u = "data:text/css;charset=utf-8;base64," + M(u), T.rel = "stylesheet", T.href = u, aa = "link", u = Q);
        b ? (p.h = ob(b, aa, T, u), Ea(b)) : (b = c ? kb(c, aa, T, u) : a ? ob(a, aa, T, u) : da(nb, aa, T, u), p.h = b);
      }
      O = d;
      a = l.length;
      for (p = O; p < a; ++p) {
        ba = l[p], ba.i || (b = ba.s - ba.o, ba.o = O, ba.s = O + b, O += 1 + b);
      }
      return d;
    };
    Yb = function(a, b, c) {
      b = q(a).m[b];
      var d;
      if (b) {
        if ("@import" === b.u) {
          var l = b.v;
        } else if (B || F) {
          m("[CSSOM] CSSOM_getRawValueOfRule : " + d + " " + (9 > t ? a.rules : a.cssRules).length + " " + b.o);
          if (a = d = (9 > t ? a.rules : a.cssRules)[b.o]) {
            d = d.style;
            a = [];
            c = c.split("");
            l = 0;
            b = c.length;
            for (var p, u = !1; l < b; ++l) {
              p = c[l], "-" === p ? u = !0 : u ? (a[l] = p.toUpperCase(), u = !1) : a[l] = p;
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
    var Y = [], ha = 1 > ka || 8 <= U && 9 > U, G = 7.2 <= U && 8 > U, B = !!t || !ha && !G && function() {
      var a = da(ja, "style"), b = !!S(a);
      b && (m("[CSSOM] CSSStyleSheet @insertRule : " + !!S(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!S(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!S(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!S(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === S(a).cssText)));
      Ea(a);
      return b;
    }();
    m("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + B);
    var F = !B && Ja && !ha && !G && function() {
      var a = da(ja, "style"), b;
      ub(a, "");
      if (b = !!S(a)) {
        m("[CSSOM] CSSStyleSheet @insertRule : " + !!S(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!S(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!S(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!S(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === S(a).cssText));
      }
      Ea(a);
      return b;
    }();
    B || m("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + F);
    Eb = ha || G ? 1 : B || F ? 2 : 0;
    m("[CSSOM] p_CSSOM_canuse : " + Eb);
    var M;
    (function(a) {
      function b(d) {
        for (var l = c, p = "", u = 0, H; H = d.length;) {
          4 > H && (u = [0, 2, 1, 0][H]), H = d.charCodeAt(0) << 16 | (1 < H ? d.charCodeAt(1) : 0) << 8 | (2 < H ? d.charCodeAt(2) : 0), p += [l[H >>> 18], l[H >>> 12 & 63], 2 <= u ? "=" : l[H >>> 6 & 63], 1 <= u ? "=" : l[H & 63]].join(""), d = d.substr(3);
        }
        return p;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      M = b;
    })(this);
  })();
  (function() {
    function q() {
      if (525 > Ja || ka && !yb || 2.2 > h(21) || h(25) || 10 > h(3) || wa(32) || wa(30) || wa(1) || wa(2) || wa(3)) {
        return !1;
      }
      if (db) {
        return !0;
      }
      if (2 === Eb) {
        var G = Nb();
        var B = Ob(G, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var F = G.cssText || G.cssRules && G.cssRules[B] && G.cssRules[B].cssText || "";
        var M = F.match("src") && F.match("@font-face");
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + F);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > t ? G.rules : G.cssRules).length);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + Yb(G, B, "src"));
        Xb(G);
      }
      q = Q;
      return ha = !!M;
    }
    Da.splice(0, 0, function() {
      if (oa) {
        Pa = 8 <= t || Ia || 9.5 <= U || yb || rb || 522 <= Ja || 3 <= Za || Gb || Wb ? 3 : 7.2 <= U ? 2 : 6 <= U || ka ? 1 : 0;
        if (!Pa && !t && !Ya) {
          var G = da(ra, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Pa = 6 <= G.offsetWidth ? 2 : 0;
          Ea(G);
        }
        m("p_cssGeneratedContentGrade:" + Pa);
        return !0;
      }
    });
    Ab = function(G) {
      function B(a) {
        M = X(M);
        E = a;
        F.onload = F.onerror = x;
        fa(G, a);
      }
      if (E !== Q) {
        m("[dataUriTest] already done : " + E), fa(G, E);
      } else if (8 > t) {
        m("[dataUriTest] trident < 8 : false"), fa(G, !1);
      } else {
        m("[dataUriTest] start!");
        var F = new Image(), M = fa(function() {
          M && B(!1);
        });
        F.onerror = function() {
          m("[dataUriTest] no DATA URI!");
          B(!1);
        };
        F.onload = function() {
          m("[dataUriTest] DATA URI:" + (1 === F.width * F.height));
          B(1 === F.width * F.height);
        };
        F.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var E;
    9 > t && Ba(function() {
      var G = da(ra, "div");
      xa(G, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ib = 1 < G.offsetHeight;
      xa(G, "");
      Ea(G);
    });
    Bb = function(G, B) {
      function F() {
        if (a || !b || M.complete) {
          m("[imageTest] timer -> img.complete. img.width=" + M.width);
          var c = !!M.width;
          tb = tb || c;
          fa(G, c);
          M.onerror = M.onload = x;
          M = G = Q;
        } else {
          --b, fa(F);
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
      M.src = B;
      fa(F);
    };
    var S = 9 > t || 2 > za || 12 > U, la = "bad_" + (new Xa() - 0) + "_", Y = ["sans-serif", "serif"], ha;
    Ma = function(G, B, F, M, a, b, c) {
      function d(f) {
        G(f);
        g && !f && Xb(g);
        G = A = O = Ca = g = Q;
      }
      function l() {
        var f = '1.6em "' + B + '"';
        m("[webFontTest] testByNativeFontLoaderAPI start.");
        I.fonts.load(f).then(function(y) {
          m("[webFontTest] fonts.check() : " + I.fonts.check(f, "i") + ", fonts.length : " + y.length);
          H(B) ? fa(d, Ga) : (m("[webFontTest] mesureWebFont() : false"), u(!0));
        }, function(y) {
          m("[webFontTest] fonts.load() rejected! " + y);
          Ab(ma);
        });
      }
      function p(f) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (N = new Xa() - 0, !1) : f < new Xa() - N;
      }
      function u(f) {
        f && (m("[webFontTest] testWebFont start."), N = new Xa() - 0);
        H(B) ? (m("[webFontTest] testWebFont mesurement success : " + Ga), d(Ga)) : p(ba) ? (m("[webFontTest] testWebFont timeout!"), k ? d(0) : S ? fa(d, 0) : Ab(ma)) : fa(u);
      }
      function H(f) {
        var y = 0, v = -1, D = 0;
        if (!Ca) {
          var K = -1;
          var pa;
          A = da(ra, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Ca = {}; pa = Y[++K];) {
            ia(A, "fontFamily", pa), Ca[pa] = A.offsetWidth;
          }
        }
        for (5 > t ? A || (A = da(ra, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : ra.appendChild(A); K = Y[++v];) {
          if (ia(A, "fontFamily", '"' + f + '",' + K), A.offsetWidth !== Ca[K]) {
            y = 1;
            break;
          }
        }
        !t && y && a && (A.innerHTML = a, f = A.offsetWidth, A.innerHTML = b, D = f === A.offsetWidth ? 1 : 0, A.innerHTML = "mmmmmmmmmmlli");
        Ea(A);
        5 > t && (A = Q);
        return Ga = y + D;
      }
      function ma(f) {
        m("[webFontTest] onTestDataURIComplete : " + f);
        (k = f) ? T(!0) : d(0);
      }
      function T(f) {
        var y;
        f && (N = new Xa() - 0);
        for (y in F) {
          H(y) ? (m("[webFontTest] success! " + y), O = da(ra, "div", {"aria-hidden":"true", className:M, id:M}), g = Nb(), Ob(g, "@import", F[y]), fa(aa, !0)) : p(100) ? (m("[webFontTest] timeout! " + y), delete F[y], fa(T, !0)) : fa(T);
          return;
        }
        d(0);
      }
      function aa(f) {
        f && (m("[webFontTest] testImportedCssReady start!"), B = B.replace(la, ""), m("[webFontTest] targetWebFontName : " + B), N = new Xa() - 0);
        1 < O.offsetWidth ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Ea(O), ba = 100, fa(u, !0)) : p(ba) ? 528 > Ja ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + O.offsetWidth), Ea(O), ba = 100, fa(u, !0)) : (m("[webFontTest] testImportedCssReady timeout!"), Ea(O), d(0)) : fa(aa);
      }
      var ba = c || 5000, N, k, A, O, Ca, Ga, g;
      q || ha ? ha || q() ? (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !I.fonts || 603 > Ja ? (m("[webFontTest] No native font loader."), u(!0)) : (m("[webFontTest] Use Native font loader."), l())) : (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), fa(d, 0)) : (m("[webFontTest] webFontTest_maybeCanUseWebFont : false"), fa(d, 0));
    };
  })();
  var Na = String.fromCharCode, vb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Na(960), ")", "(", Na(234), Na(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Na(9824), "\u2190", Na(9829), Na(9830), Na(9827), Na(956), "\u03a9", "\u2193", "\u2192", "%", Na(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Na(9619)], cc = (9 === t || ka && 0 <= r.conpare(R, "1.8.1") || rb) && !Ha, Pb = [], qb, lb, Vb = 7.2 > U ? function() {
    qb = !qb;
    for (var q = -1, E; E = Pb[++q];) {
      -1 !== E.className.indexOf("pbAlp") ? ia(E, "display", qb ? "" : "none") : (bb(E, qb ? "pbChrCS" : "pbChr00"), Fa(E, qb ? "pbChr00" : "pbChrCS"));
    }
  } : cc ? function() {
    qb = !qb;
    for (var q = -1, E; E = Pb[++q];) {
      ia(E, "opacity", qb ? 1 : 0);
    }
  } : Q;
  var Zb = function(q) {
    Vb ? gb(q, "pbChrCS") && (lb || !U && !L || (lb = setInterval(Vb, 400)), -1 === Pb.indexOf(q) && Pb.push(q)) : Pb = Q;
  };
  cc && J(function(q) {
    q ? lb || (lb = setInterval(Vb, 400)) : lb && (clearInterval(lb), lb = 0);
  });
  Vb && na(function() {
    lb && clearInterval(lb);
  });
  Ha || J(function(q) {
    q ? (w(ra, "forced-colors", 2 === q ? "lod" : 3 === q ? "dol" : "active"), (sa || 9 === t || 5.5 <= t && 9 > t && Ib) && bb(ra, "jsCanRotate")) : (W(ra, "forced-colors"), Fa(ra, "jsCanRotate"));
  });
  (function() {
    function q(k) {
      H = k;
      m("[pbList] WebFont test result : " + !!k);
      k ? Y() : tb ? la(!0) : tb !== Q ? Y() : (m("[pbList] Need imageTest " + ma), Bb(la, ma));
    }
    function E() {
      E = Q;
      Ma(q, "PB-100", {"PB-100_canTTF":Va + "pbFont/ttf.css", "PB-100_canWOFF":Va + "pbFont/woff.css", "PB-100_canEOT":Va + "pbFont/eot.css", "PB-100_canSVG":Va + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function S(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function la(k) {
      k ? (m("[pbList] Fallback start!"), bb(ra, "pbList-noWebFont"), Eb && (2 <= Pa ? (Ob(k = Nb(), ".pbList font:after", {content:"url(" + ma + ")"}), 2 === Eb && m("[pbList] " + (9 > t ? k.rules : k.cssRules).length + ", " + (9 > t ? k.cssText : k.cssRules[0] && k.cssRules[0].cssText))) : (Ob(k = Nb(), ".pbList font", {"background-image":"url(" + ma + ")"}), 2 === Eb && m("[pbList] " + (9 > t ? k.rules : k.cssRules).length + ", " + Yb(k, 0, "background-image") + " " + (9 > t ? k.cssText : k.cssRules[0] && 
      k.cssRules[0].cssText))))) : m("[pbList] image disabled!");
      Y();
    }
    function Y() {
      for (q = Ma = Q; u.length;) {
        ha(u.shift(), u.shift());
      }
      m("[pbList] complete.");
    }
    function ha(k, A) {
      function O(v) {
        v = jb(v);
        for (var D = -1, K; K = v[++D];) {
          switch(K.nodeType) {
            case 1:
              O(K);
              break;
            case 3:
              K.data && Ga(K.data) && g.push(K);
          }
        }
      }
      function Ca(v) {
        var D = v.children, K = 0, pa = D.length;
        if (pa) {
          for (; K < pa; ++K) {
            Ca(D[K]);
          }
        } else {
          (D = v.innerText) && Ga(D) && g.push(v);
        }
      }
      function Ga(v) {
        return v.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var g = [], f;
      if (q) {
        -1 === u.indexOf(k) && (u.push(k, A), T && E && E());
      } else {
        var y = u.indexOf(k);
        0 <= y && u.splice(y, 2);
        for (5 > t ? Ca(k) : O(k); f = g.shift();) {
          y = 5 > t ? f.innerText : f.data, 2 !== H && (y = y.split(b).join(M)), A ? 5 > t ? f.innerText = y : f.data = y : G(y.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(F).split("&amp;").join("&"), f);
        }
      }
    }
    function G(k, A) {
      function O(ta, va) {
        for (var wb = ""; va;) {
          va & 1 && (wb += ta), va >>= 1, ta += ta;
        }
        return wb;
      }
      function Ca(ta, va, wb) {
        for (var $b, ec = -1, ac, bc; $b = va[++ec];) {
          for (; 0 <= (ac = ta.indexOf($b));) {
            bc = $b.length, ta = ta.substr(0, ac) + O(wb, bc) + ta.substr(ac + bc);
          }
        }
        return ta;
      }
      function Ga(ta) {
        var va = V(ta), wb = "" + va;
        return 0 < va && va === va | 0 && (va = ta.indexOf(wb) + wb.length, va <= ta.length) ? va : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), f = 5 > t || 1 === A.nodeType, y = [], v = "", D, K = -1, pa, Ka, cb;
      if (f) {
        if (ba) {
          var ya = A.style.visibility;
          ia(A, "visibility", "hidden");
        }
        A.innerHTML = "";
      }
      if (N) {
        var Oa = A;
        A = I.createDocumentFragment();
      }
      if (function(ta) {
        var va = ta.indexOf("P");
        if (-1 === va) {
          return !1;
        }
        va = V(ta.charAt(va + 1));
        return 0 <= va && 9 >= va;
      }(k)) {
        v = O("+", k.length);
      } else {
        0 <= (D = Ga(k)) && (v = O("|", D), K = D, --K);
        for (; D = k.charAt(++K);) {
          D === F || pa ? (v += "~", D === F && (pa = !pa)) : v += D;
        }
        v = Ca(v, p, "^");
        v = Ca(v, d, "{");
        v = Ca(v, l, "}");
      }
      K = 0;
      for (pa = k.length; K < pa; ++K) {
        D = k.charAt(K);
        var P = D === c;
        var Ta = " " === D;
        D = P ? " " : D;
        var ea = v.charAt(K);
        var mb = (Ka = xb) && P;
        var xb = "|" === ea;
        ea = g["+|~{}^".indexOf(ea) + 1];
        "\n" !== D ? (H || !tb ? (2 === H && k.substr(K, 2) === b && (D = b, ++K), ea = Ta && "str" === ea ? "pbList-strsp" : P ? "" : !Ta && ea ? "pbList-" + ea : "") : (P = vb.indexOf(D), P = -1 === P ? "" : vb.indexOf(D).toString(16).toUpperCase(), P = (P = 1 === P.length ? "0" + P : P) ? "pbChr" + P : "", ea = Ta && "str" === ea ? "pbList-strsp" : Ta || !P ? "" : ea ? (P ? P + " " : "") + "pbList-" + ea : P), P = Q, mb ? (D = 6 <= t && 8 > t ? " " : c, ea = "") : xb && (1.9 > ka || 9.5 > U) ? 
        (xb && !Ka && (cb = 4 - (V(k.substr(K)) + "").length), 7.5 > U ? P = aa ? "position:relative;top:-4px;left:" + 12 * cb + "px" : {position:"relative", top:"-4px", left:12 * cb + "px"} : 1.3 <= ka ? (P = aa ? "position:absolute;left:" + 12 * cb + "px" : {position:"absolute", left:12 * cb + "px"}, ++cb) : P = aa ? "position:relative;left:" + 12 * cb + "px" : {position:"relative", left:12 * cb + "px"}) : Ta && 7.5 > U && (ea = "pbList-strsp"), aa ? y.push("<font" + (ea ? ' class="' + ea + '"' : 
        "") + (P ? ' style="' + P + '"' : "") + ">" + D + "</font>") : f || N ? da(A, "font", {"class":ea, style:P}, D) : kb(A, "font", {"class":ea, style:P}, D)) : (Ka = xb = !1, aa ? y.push(D) : f || N ? ub(A, D) : Ub(A, D));
      }
      if (f) {
        aa ? A.innerHTML = y.join("") : N && Oa.appendChild(A), ba && ia(A, "visibility", ya);
      } else {
        if (aa) {
          g = I.createElement("font");
          for (g.innerHTML = y.join(""); y = g.firstChild;) {
            A.parentNode.insertBefore(y, A);
          }
          Ea(A);
        } else {
          N ? Oa.parentNode.replaceChild(A, Oa) : Ea(A);
        }
      }
    }
    hb(function(k) {
      if (k) {
        k = Kb("pbChrCS");
        for (var A = 0, O = k.length; A < O; ++A) {
          Zb(k[A]);
        }
        return !0;
      }
    });
    var B = [];
    hb(function(k) {
      function A(ya) {
        var Oa = z(ya, "pbTip"), P = Oa.charAt(0), Ta = "_" === P;
        Oa = Ta ? Oa.charAt(2) : P;
        P = Ta ? "Btm" : "";
        var ea = z(ya, "title");
        Ga || (W(ya, "pbTip"), W(ya, "title"), bb(ya, "pbTipPos" + Oa.toUpperCase()), da(ya, "div", {className:"pbTip" + P, style:{width:ea.length + Ca + "em"}}, ea));
        da(ya, "div", {className:"pbTail" + P});
        g && Ta && (ya.focus(), ya.blur());
      }
      function O(ya) {
        if (2 > Pa) {
          var Oa = z(ya, "pbGhst"), P = ya.className, Ta = P.split("pbCsr")[1] || "", ea = P.split("pbAlp")[1] || "";
          if ("CS" === Oa) {
            var mb = "_";
          } else {
            mb = Oa, 3 === mb.length && (mb = mb.substr(0, 2)), mb = vb[parseInt(mb, 16)] || "~";
          }
          var xb;
          Ta = Ta.split(" ")[0];
          ea = V(ea.split(" ")[0]);
          var ta = 10 - ea;
          ea && 7.2 > U && (P = P.split("pbChr")[1], P = P.split(" ")[0], ia(ya, "backgroundPosition", Fb(P, 2, K) + "px " + -24 * (10 - ea) + "px"));
          Oa && (7.2 > U && (xb = {backgroundPosition:Fb(Oa, 2, K) + "px " + -24 * (10 - ta) + "px"}), W(ya, "pbGhst"), y = kb(ya, "b", {className:"pbChr" + Oa + " pbAlp" + ta + " pbCsr" + Ta, style:xb}, mb), Zb(y));
          Zb(ya);
        }
      }
      if (k) {
        var Ca = 6 > t ? 2 : 0;
        k = ab("SAMP");
        var Ga = 8 === t, g = 5 <= t && 6 > t, f, y, v, D;
        Ib && bb(ra, "pbLCD-AX");
        if (k.length) {
          for (v = -1; f = k[++v];) {
            if (gb(Sa(f), "pbLCD")) {
              var K = gb(f, "PB-120") || gb(f, "FX-795P");
              var pa = Ua(f);
              for (f = pa.length; f;) {
                var Ka = pa[--f];
                switch(Lb(Ka)) {
                  case "A":
                    (2 > Pa || Ga) && A(Ka);
                    if (2 > Pa) {
                      var cb = Ua(Ka);
                      for (D = cb.length; D;) {
                        !Ga && O(cb[--D]);
                      }
                    }
                    Gb ? w(Ka, "href", "javascript:void(0)") : (pb(Ka, "click", S), B.push(Ka));
                    break;
                  case "B":
                    2 > Pa && O(Ka);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    na(function() {
      for (var k; k = B.shift();) {
        Aa(k, "click", S);
      }
    });
    6 === t && (new La("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var F = vb[7], M = vb[30], a = vb[113], b = Na(8337) + Na(8331), c = Na(160);
    Na(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), p = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + M + vb[31]).split(""), u = [], H, ma, T;
    hb(function(k) {
      if (k) {
        ma = Va + "pbFont/x3mask.png";
        k = ab("*");
        for (var A = -1, O; O = k[++A];) {
          gb(O, "pbList") ? ha(O) : gb(O, "pbFont") && ha(O, !0);
        }
        u.length && (m("[pbList] " + u.length / 2 + " elements found. WebFont test start."), E());
        return !0;
      }
    });
    ka && r.conpare(R, "0.9.6");
    var aa = !1, ba = 8 > U, N = !aa && !ba && !(6 > t) && I.createDocumentFragment && !!ra.replaceChild;
    ca.prettify = ha;
  })();
  var dc = I.scripts || ab("script");
  var Va = dc[dc.length - 1].src.split("/");
  --Va.length;
  (Va = Va.join("/")) && (Va += "/");
  m("[p_assetUrl] " + Va);
  Ba(function() {
    var q;
    (q = Tb("logger")) || alert("#logger not found!");
    q ? (m = function(E) {
      da(q, "P", Q, E);
    }, Db = function(E) {
      da(q, "P", {style:{color:"red"}}, E);
    }, C.onerror = function(E, S, la) {
      Db(E + ", " + S + ", " + la);
      return !0;
    }) : C.console ? (m = console.log, Db = console.error) : U ? (m = x, Db = opera.postError) : m = Db = x;
    for (; Ra.length;) {
      m(Ra.shift());
    }
    for (; fb.length;) {
      m(fb.shift());
    }
    Ra = fb = Q;
  });
  6.1 > Za && Mb(Qb);
  na(Jb);
  6.1 > Za && Mb(Rb);
  na(Sb);
  10 > t && (11 !== sb || 5 !== t) || (9 > U || 1 > ka || !Ya && !C.addEventListener ? I.write('<link href="' + Va + zb + '" rel="stylesheet"' + (8 > U ? "" : ' media="screen,handheld,projection,print"') + ">") : Ba(function() {
    da(nb, "link", {href:Va + "" + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

