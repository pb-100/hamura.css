PB100={};var m;
ua = [];
ua.conpare = function(ea, q) {
  var B = 0, w, I, va = (ea + "").split("."), V = (q + "").split("."), Na = va.length;
  for (w = V.length; "0" === va[Na - 1];) {
    --Na;
  }
  for (; "0" === V[w - 1];) {
    --w;
  }
  for (I = Na < w ? Na : w; B < I; ++B) {
    var ab = va[B] - 0, n = V[B] - 0;
    if (ab !== n) {
      return ab > n ? 1 : -1;
    }
  }
  return Na > w ? 1 : Na === w ? 0 : -1;
};
(function(ea, q, B, w, I, va, V, Na) {
  function ab(E, wa, ma) {
    ma = va(E.split(wa)[1]);
    return 0 <= ma ? ma : 0;
  }
  function n(E, wa) {
    return 0 <= E.indexOf(wa);
  }
  function bb(E) {
    return n(E, "Linux armv") || n(E, "Linux aarch") || n(E, "Linux i686") || n(E, "Linux x86_64");
  }
  function N(E, wa) {
    for (var ma in wa) {
      if (ma === E) {
        return !0;
      }
    }
  }
  function g(E, wa) {
    var ma = "", Z = -1, Va;
    if (E = E.split(wa)[1]) {
      for (; Va = E.charCodeAt(++Z);) {
        if (48 <= Va && 57 >= Va || 46 === Va) {
          ma += E.charAt(Z);
        } else {
          break;
        }
      }
      for (Z = ma.length; Z;) {
        if (46 === ma.charCodeAt(--Z)) {
          ma = ma.substr(0, Z);
        } else {
          break;
        }
      }
    }
    return ma;
  }
  function Aa(E) {
    for (var wa = arguments, ma = 1, Z = wa[0], Va; ma < wa.length; ++ma) {
      0 > Fa(Z, Va = wa[ma]) && (Z = Va);
    }
    return Z;
  }
  function Gb(E) {
    return E === E + "" ? E : E === E - 0 ? "" + E : E.min && E.max ? E.min + "~" + E.max : E.min ? E.min + "~" : "~" + E.max;
  }
  var Fa = ea.conpare, d = w.userAgent, fa = w.appVersion, ib = va(fa) || 0, Q = w.platform, u = B.documentElement, Wa = u && u.style, Ga = B.documentMode, W = I.width;
  I = I.height;
  var da = q.HTMLAudioElement, pb = q.performance, qb = q.Int8Array, Ha = q.ontouchstart !== Na, cb = g(fa, "Version/") || g(d, "Version/"), Hb = q.operamini, Ca = !Hb && q.opera, Vb = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : Aa(g(d, "Opera "), cb, ib)), Ib = q.opr, rb = !Ca && (B.all || Ga);
  Ga = rb && (Ga ? Ga : q.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  u = !rb && u.msContentZoomFactor;
  var db = !u && (q.chrome || q.chromium), fb = !rb && function() {
    for (var E in Wa) {
      if (0 === E.indexOf("Moz")) {
        return !0;
      }
    }
  }(), yb = n(d, "UCWEB"), Jb = yb && g(d, " U2/"), sb = yb && g(d, "; wds "), gb = g(d.split("_").join("."), "; iPh OS "), ia = g(d, "; Adr "), zb = n(fa, "YJApp-ANDROID"), ya = n(Q, "Android") || fb && n(fa, "Android") || zb;
  ia = g(Q, "Android ") || g(fa, "Android ") || g(d, "Android ") || ia;
  var tb = n(Q, "Linux"), Xa = "MacIntel" === Q && w.standalone !== Na, ub = fb && g(d, "Goanna/"), Qa = !ub && fb && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Kb = g(d, "Firefox/"), z = g(d, "Opera/"), Pb = q.FNRBrowser, Ra = ab(d, "AppleWebKit/"), eb = g(d, "Chrome/"), Ab = g(fa, "Iron/"), Lb = g(d, "OPR/"), Qb = g(fa, "KHTML/"), Rb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var Sb = g(d, "Silk/"), jb = ab(d, "SamsungBrowser/"), kb = !jb && function() {
    for (var E = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    wa, ma = E.length; wa = E[--ma];) {
      if (n(d, wa)) {
        return 2 > va(cb) ? cb : 0.9;
      }
    }
    E = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ma = E.length; wa = E[--ma];) {
      if (n(d, wa)) {
        return cb;
      }
    }
  }(), Mb = db && 534.3 >= Ra, Ia = bb(Q), Sa = Ia && !n(d, Q) && bb(d);
  Ha = Ha && (Ra || fb) && Sa || !ia && zb;
  zb = !!q.ReactNativeWebView;
  Ia = Ia && function() {
    for (var E in q) {
      if (0 === E.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ta = (Sa = q.puffinDevice) && Sa.clientInfo;
  Ta = (Sa = Ta && "iOS" === Ta.os && Ta.osVersion) && Ta.model;
  var qa = !Ga && B.registerElement, lb = !Ga && B.execCommand, hb = q.webkitCancelAnimationFrame, Bb = tb && qa && "11.0.696.34" === eb, Tb = q._firefoxTV_playbackStateObserverJava, Ea = ab(d, "diordnA ");
  if ("Nitro" === Q) {
    var A = 1;
  } else if ("Nintendo DSi" === Q) {
    A = 2;
    var v = z;
  } else if ("New Nintendo 3DS" === Q || n(d, "iPhone OS 6_0") && 320 === W && 240 === I) {
    A = 4, v = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === Q) {
    A = 3, v = g(d, "Version/"), Ra = 535;
  } else if ("Nintendo Swicth" === Q) {
    A = 7, v = g(fa, "NintendoBrowser/");
  } else if (q.wiiu) {
    A = 6;
    v = g(fa, "NintendoBrowser/");
    var X = 15, Y = g(fa, "AppleWebKit/") || (hb ? 536 : 534);
    v || (v = hb ? 4 : 2, n(fa, "Macintosh;") || n(fa, "Windows NT") && n(fa, "Touch"));
  } else if (Ca && Ca.wiiremote) {
    A = 5, v = g(d, "Wii; U; ; ");
  } else if (z = g(d, "PlayStation Vita ")) {
    A = 10, v = z;
  } else if (z = g(d, "(PlayStation Portable); ")) {
    A = 8;
    v = z;
    var Nb = 3.3;
  } else if (z = g(d, "PLAYSTATION 3; ") || g(d, "PLAYSTATION 3 ")) {
    A = 11, v = z, 0 > Fa("4.10", z) && (X = 26, Y = z);
  } else if (n(d, "Xbox One")) {
    A = 15, v = 1;
  } else if (n(d, "Xbox")) {
    A = 14, v = 1;
  } else if (2 === ib && n(d, "Sony/COM2/")) {
    A = 17;
    v = 2;
    Nb = 3.4;
    var Ya = !0;
  } else if (0 === Q.indexOf("iP") || gb || Sa || Xa) {
    if (Sa) {
      switch(v = Sa, Ta.substr(0, 4)) {
        case "iPho":
          var za = 0;
          g(Ta, za);
          var Da = !0;
          break;
        case "iPad":
          za = 1;
          g(Ta, za);
          var na = !0;
          break;
        case "iPod":
          za = 2;
          g(Ta, za);
          var Cb = !0;
      }
    } else {
      gb ? v = gb : (v = g(fa.split("_").join("."), "OS "), N("isSecureContext", q), N("enableWebGL", q), N("sameOrigin", q));
      if (!v || Pb) {
        v = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : q.SharedWorker ? pb && pb.now ? 8.0 : 8.4 : lb ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : qb ? 4.3 : da ? 4.1 : 3.2;
      }
      var Ba = W === 1.5 * I || 1.5 * W === I;
      0 === Q.indexOf("iPhone") ? (za = 0, Da = !0) : 0 === Q.indexOf("iPad") || Xa ? (za = 1, na = !0) : 0 === Q.indexOf("iPod") && (za = 2, Cb = !0);
    }
    X = !Sa && (w.standalone || (na || 12 > v) && N("webkitFullscreenEnabled", B) || 11 <= v && 13 > v && w.mediaDevices) ? 16 : 17;
    A = 24;
    Y = v;
  } else if (n(d, "Kobo")) {
    A = 18, X = 21, Y = 2.2, ya = !0;
  } else if (n(d, "EBRD")) {
    A = 19, X = 21, Y = 2.2;
  } else if (z = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    A = 28, v = z;
  } else if (q.onmoztimechange !== Na) {
    A = 29, v = 18.1 > Qa ? "1.0.1" : 19 > Qa ? 1.1 : 27 > Qa ? 1.2 : 29 > Qa ? 1.3 : 31 > Qa ? 1.4 : 33 > Qa ? 2.0 : 35 > Qa ? 2.1 : 38 > Qa ? 2.2 : 45 > Qa ? 2.5 : 2.6, n(d, "Mobile") ? Da = !0 : n(d, "Tablet") ? na = !0 : n(d, "TV");
  } else if (q.palmGetResource) {
    A = 30, v = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), n(d, "webOS.TV") || n(d, "/SmartTV") || (Da = !0);
  } else if (z = g(d, "Tizen ")) {
    A = 31, v = z, X = 24, Y = jb, Da = !0;
  } else if (z = g(d, "Windows Phone ") || g(fa, "Windows Phone OS ") || sb) {
    A = 23, v = z, Da = !0;
  } else if (u && "ARM" === Q) {
    A = 23, v = 10, Da = !0;
  } else if (rb && n(fa, "ZuneWP")) {
    A = 23, v = 11 === Ga ? 8.1 : 10 === Ga ? 8 : 9 === Ga ? 7.5 : 7 === Ga ? 7 : "?", Da = !0;
  } else if (n(d, "FOMA;")) {
    A = 16, Da = !0;
  } else if (n(d, "SoftBank;")) {
    A = 16, Da = !0;
  } else if (n(d, "KFMUWI")) {
    var Ja = !0;
    v = 6.3;
    var sa = na = !0;
  } else if (n(d, "KFKAWI")) {
    Ja = !0, v = 6, sa = na = !0;
  } else if (n(d, "KFSUWI") || n(d, "KFAUWI") || n(d, "KFDOWI")) {
    Ja = !0, v = 5, sa = na = !0;
  } else if (n(d, "KFGIWI")) {
    Ja = !0, v = 5, sa = na = !0;
  } else if (n(d, "KFARWI") || n(d, "KFSAWA") || n(d, "KFSAWI")) {
    Ja = !0, v = 5 <= va(ia) ? 5 : 4, sa = na = !0;
  } else if (n(d, "KFSOWI") || n(d, "KFTHWA") || n(d, "KFTHWI") || n(d, "KFAPWA") || n(d, "KFAPWI")) {
    Ja = !0, v = 3, sa = na = !0;
  } else if (n(d, "KFOT") || n(d, "KFTT") || n(d, "KFJWA") || n(d, "KFJWI")) {
    Ja = !0, v = 2, sa = na = !0;
  } else if (n(d, "Kindle Fire")) {
    Ja = !0, v = 1, sa = na = !0;
  } else if (z = g(d, "Kindle/")) {
    A = 20, v = z, X = 21, Y = 2.2;
  } else if (Tb) {
    Ja = !0, v = ia || Ea, sa = !0;
  } else if (n(d, "AmazonWebAppPlatform") || n(d, "; AFT")) {
    Ja = !0, v = ia, sa = !0;
  } else if (n(d, "MeeGo")) {
    A = 32;
  } else if (n(d, "Maemo")) {
    A = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Rb) {
    A = 22, Ya = !0;
  } else if ("WinCE" === Q) {
    A = 21, Ya = !0;
  } else if (0 === Q.indexOf("Win")) {
    A = "Win16" === Q ? 35 : "Win32" === Q ? 36 : "Win64" === Q ? 37 : 0, v = g(d, "Windows NT ") || g(d, "Windows ");
  } else if (0 === Q.indexOf("Mac")) {
    A = "Mac68K" === Q ? 39 : "MacPowerPC" === Q || "MacPPC" === Q ? 38 : "MacIntel" === Q ? 40 : 0;
    if (z = g(d.split("_").join("."), "Mac OS X ")) {
      v = z;
    }
    var mb = !0;
  } else if (n(d, "BlackBerry") || n(d, "BB10")) {
    A = 34, v = cb, Da = !0;
  } else if (n(d, "SunOS") || n(d, "Sun Solaris")) {
    A = 42;
  } else if (n(d, "FreeBSD")) {
    A = 43;
  } else if (n(d, "OpenBSD")) {
    A = 44;
  } else if (n(d, "NetBSD")) {
    A = 45;
  } else if (ya && fb) {
    n(d, "Android 4.4;") ? Ba = {min:2.3} : 4 <= va(ia) ? Ba = ia : Ba = {min:2.2}, v = Ba;
  } else if (ya && Ca) {
    ia ? Ba = ia : Ba = {min:1.6}, v = Ba, n(d, "Tablet") ? na = !0 : Da = !0;
  } else if (ia) {
    v = ia, ya = !0;
  } else if (tb && Ha || zb || Ia) {
    var vb = !0;
    jb ? Ba = {min:4.4} : db && !Mb || Ib || Lb ? Ba = {min:4} : (Ba = ia = Wa.touchAction !== Na ? {min:5} : qa ? 4.4 : qb ? w.connection ? q.searchBoxJavaBridge_ || db ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ra ? 3 : 533 <= Ra ? da ? 2.3 : 2.2 : 530 <= Ra ? 2.0 : 1.5, kb && (X = 24, Y = kb));
    v = Ba;
    ya = !0;
  } else {
    Bb ? (v = {min:5}, vb = ya = !0) : tb && (n(d, "Ubuntu") ? A = 46 : (z = g(d, "Mint/")) ? (A = 47, v = z) : (z = g(d, "Fedora/")) ? (A = 48, v = z) : A = n(d, "Gentoo") ? 49 : 50);
  }
  Ja || ya && vb && Sb ? A = 27 : ya && (A = A || 26);
  X || (sa = sa || ya, Ca ? (X = sa || Ya || Da || na ? 9 : 8, Y = Vb) : rb ? (Ba = ab(fa, "Trident/") + 4, X = Ya || Da || na || Cb ? 3 : mb && 5 <= Ga ? 7 : 2, Y = Ga) : u ? (X = 23 === A ? 6 : 5, Y = g(fa, "Edge/")) : ub ? (X = 13, Y = ub) : fb ? (X = sa ? 12 : 11, Y = Qa || Kb) : jb ? (X = 24, Y = jb) : (z = Nb || g(d, "NetFront/")) ? (X = 18, Y = z) : (z = g(d, "iCab")) ? (X = 19, Y = z) : (z = Aa(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Hb && cb) ? (X = 10, Y = z, A || (n(d, "iPhone") ? 
  za = 0 : n(d, "iPad") ? za = 1 : n(d, "iPod") && (za = 2), za && (A = 24))) : yb ? (X = 25, Y = Jb) : Qb ? (X = 14, Y = ib) : ya && Mb ? (X = 21, Y = ia) : db || Ib || Lb ? (X = sa ? 22 : 20, Y = eb || Ab) : ya && qa ? (X = 23, Y = 5 > va(ia) ? ia : eb) : ya && (cb || vb) ? (X = 21, Y = ia) : eb ? (X = sa ? 22 : 20, Y = eb) : Ra && (X = 15, Y = Ra));
  A && (ea[2] = A, v && (ea[3] = Gb(v)));
  X && (ea[0] = X, Y && (ea[1] = Gb(Y)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Db;
Array.prototype.pop || (Array.prototype.pop = function() {
  var ea = this[this.length - 1];
  --this.length;
  return ea;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ea = arguments, q = 0, B = ea.length, w = this.length; q < B; ++q) {
    this[w + q] = ea[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ea = this[0], q = 1, B = this.length; q < B; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return ea;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ea = arguments, q = ea.length, B = this.length += q - 1, w = B; w >= q; --w) {
    this[w] = this[w - q];
  }
  for (w = 0; w < q; ++w) {
    this[w] = ea[w];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(ea, q) {
  var B = arguments, w = B.length - 2 - q, I = this.slice(ea, ea + q), va;
  if (0 < w) {
    var V = this.length - 1;
    for (va = ea + q; V >= va; --V) {
      this[V + w] = this[V];
    }
  } else if (0 > w) {
    V = ea + q;
    for (va = this.length; V < va; ++V) {
      this[V + w] = this[V];
    }
    this.length += w;
  }
  V = 2;
  for (va = B.length; V < va; ++V) {
    this[V - 2 + ea] = B[V];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ea, q) {
  var B = this.length >>> 0;
  if (0 === B) {
    return -1;
  }
  if (q) {
    var w = q || 0;
    w = -Infinity === w ? 0 : (0 > w ? -w : w) | 0;
    if (B <= w) {
      return -1;
    }
  }
  for (w = 0 <= w ? w : 0 < B + w ? B + w : 0; w < B; ++w) {
    if (this[w] === ea) {
      return w;
    }
  }
  return -1;
});
(function(ea, q, B, w, I, va, V, Na, ab, n, bb, N) {
  function g(k) {
    if (q[0] === k) {
      return Q === Q + "" ? V(Q) : Q;
    }
  }
  function Aa(k) {
    var J = q[3];
    if (q[2] === k) {
      return J === J + "" ? V(J) : J;
    }
  }
  function Gb(k, J, P) {
    k + "" === k && ("a" === k.charAt(2) && (P = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > W ? 117 : 0.9 > da || 9 > u || 9 > W || Wa ? 1 : 132 : parseInt(k, 16));
    P && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (J || 2));
  }
  var Fa = I.body, d = Fa.style, fa, ib, Q = q[1], u = g(2) || g(3), Wa = g(7), Ga = g(5) || g(6), W = g(8) || g(9), da = g(11) || g(12), pb = da && 0 <= q.conpare(Q, "1.9.1"), qb = g(13), Ha = g(15), cb = g(16) || g(17), Hb = g(10) || g(25), Ca = g(20) || g(22), Vb = Ca || g(23) || g(21) || g(24), Ib = Ca && V(va.userAgent.split("Edg/")[1]), rb = V(va.appVersion.split("Trident/")[1]) + 4, db = Aa(35) || Aa(36) || Aa(37), fb = !u && !Wa && (new Na('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  yb = (Wa ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > W ? "opr70" : 8 > W ? "opr72" : 9.5 > W ? "opr" + (W | 0) : da && !pb ? 1.4 <= da ? "gck19" : 1.3 <= da ? "gck13" : 1 <= da ? "gck12" : 0.9 <= da ? "gck09" : 0.8 <= da ? "gck08" : "gck07" : "modern") + ".css";
  Aa(1) || Aa(2) || Aa(3) || Aa(4) || Aa(8) || Aa(9) || Aa(10);
  var Jb, sb, gb, ia, zb = d.transform !== N ? "transform" : d["-o-transform"] !== N ? "-o-transform" : d["-ms-transform"] !== N ? "-ms-transform" : d.MozTransform !== N ? "-moz-transform" : d["-webkit-transform"] !== N ? "-webkit-transform" : "", ya = [], tb = [], Xa = [], ub, Qa, Kb, z, Pb, Ra, eb = [], Ab = [], Lb, Qb, Rb, Sb;
  (function() {
    function k() {
      for (var c, e = 0, h = new bb() - 0; e < H.length;) {
        h < H[0].t ? ++e : (c = H.splice(e, 1)[0], c.f(c.p));
      }
      b = H.length ? ab(k, aa) : 0;
    }
    function J() {
      for (var c, e = 0; e < ba.length; ++e) {
        c = ba[e], c.f();
      }
    }
    function P() {
      y && (y = clearInterval(y));
    }
    function oa() {
      b && (b = n(b));
    }
    m = function(c) {
      eb.push(c);
    };
    Db = function(c) {
      Ab.push(c);
    };
    Ra = function(c) {
      ba.length || (y = setInterval(J, D));
      ba.push({f:c, B:++O});
      return O;
    };
    Lb = function() {
      y && (P(), y = setInterval(J, D));
    };
    Qb = P;
    var ba = [], D = 500, O = 0, y;
    if (5 > u || Wa) {
      B._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    z = function(c, e, h) {
      H.length || (b = ab(k, aa));
      H.push({f:c, p:e, B:++a, t:new bb() - 0 + (aa < h ? h : aa)});
      return a;
    };
    Pb = function(c) {
      for (var e = H.length, h; h = H[--e];) {
        if (h.B === c) {
          H.splice(e, 1);
          break;
        }
      }
      return 0;
    };
    Rb = function() {
      b && (oa(), b = ab(k, aa));
    };
    Sb = oa;
    var H = [], aa = 16, a = 0, b;
    if (5 > u || Wa) {
      B._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var jb, kb, Mb, Ia, Sa, Ta, qa, lb, hb, Bb, Tb, Ea, A, v, X, Y, Nb, Ya, za, Da, na, Cb;
  (function() {
    function k(a, b, c) {
      var e = ["<", a], h = 1, l, r;
      if (b) {
        for (l in b) {
          var F = b[l];
          if (null != F && "" !== F) {
            if ("style" === l) {
              e[++h] = ' style="';
              for (r in F) {
                for (var ta = ++h, S, pa = [], T = r.split(""), U = T.length; U;) {
                  S = T[--U], "A" <= S && "Z" >= S && (S = "-" + S.toLowerCase()), pa[U] = S;
                }
                e[ta] = pa.join("") + ":" + F[r] + ";";
              }
              e[++h] = '"';
            } else {
              "className" === l && (l = "class"), e[++h] = " " + l + '="' + F + '"';
            }
          }
        }
      }
      e[++h] = ">";
      null != c && (y && "font" !== a ? e[++h] = "<FONT>" + c + "</FONT>" : e[++h] = c);
      e[++h] = "</" + a + ">";
      return e.join("");
    }
    function J(a) {
      a = "*" === a && 6 > u ? "*" !== a ? I.all.tags(a.toUpperCase()) : I.all : I.getElementsByTagName(a);
      var b = [], c = 0, e;
      for (e = a.length; c < e; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function P(a) {
      return y ? a.parentElement : a.parentNode;
    }
    function oa(a, b, c, e, h, l) {
      if (y) {
        var r = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var F = Sa(2 > a ? Ia(b) : b);
        F = 2 > a ? F.indexOf(b) + a : F.length;
        b.insertAdjacentHTML(r, k(c, e, h));
        b = Sa(b)[F];
        null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (H) {
        b = I.createElement(k(c, e));
      } else {
        b = l ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
        if (e) {
          for (r in e) {
            if ((c = e[r]) || 0 === c) {
              switch(r) {
                case "class":
                case "className":
                  Nb(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (F in c) {
                    a[F] = c[F];
                  }
                  break;
                default:
                  X(b, r, c);
              }
            }
          }
        }
        aa || null != h && ba(b, h);
      }
      return b;
    }
    function ba(a, b) {
      if (y) {
        return oa(2, a, "font", N, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function D(a, b) {
      9 > u ? a.className = b : a.setAttribute("class", b);
    }
    function O(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var y = 5 > u;
    fa = J("html")[0];
    ib = J("head")[0];
    jb = function(a) {
      return B[a] || I[a] || I.getElementById(a);
    };
    kb = J;
    Mb = function(a) {
      var b = [], c = 0, e, h = -1;
      if (9 > u || !I.getElementsByClassName) {
        var l = 6 > u ? I.all : I.getElementsByTagName("*");
      } else {
        var r = !0;
        l = I.getElementsByClassName(a);
      }
      for (e = l.length; c < e; ++c) {
        var F = l[c];
        if (r || (y || 1 === F.nodeType) && O(F, a)) {
          b[++h] = F;
        }
      }
      return b;
    };
    Ia = P;
    Sa = function(a) {
      a = y ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Ta = function(a) {
      var b = !(7.03 < W && 7.2 > W) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, l; e;) {
        if (l = a[--e], b || 1 === l.nodeType) {
          y && "FONT" === l.tagName || (c[++h] = l);
        }
      }
      return c;
    };
    qa = function(a, b, c, e, h) {
      b = oa(2, a, b, c, e, h);
      y || (a.appendChild(b), aa && null != e && ba(b, e));
      return b;
    };
    lb = function(a, b, c, e, h) {
      b = oa(0, a, b, c, e, h);
      y || (P(a).insertBefore(b, a), aa && null != e && ba(b, e));
      return b;
    };
    hb = function(a, b, c, e, h) {
      b = oa(1, a, b, c, e, h);
      var l;
      y || ((l = a.nextSibling) ? Ia(l).insertBefore(b, l) : Ia(a).appendChild(b), aa && null != e && ba(b, e));
      return b;
    };
    Bb = ba;
    Tb = function(a, b) {
      if (y) {
        return oa(0, a, "font", N, b);
      }
      var c = I.createTextNode("" + b);
      Ia(a).insertBefore(c, a);
      return c;
    };
    Ea = function(a) {
      Ia(a) ? y ? a.outerHTML = "" : Ia(a).removeChild(a) : m("[DOM] p_DOM_remove(), No parentNode!");
    };
    var H = 9 > u, aa = H;
    A = function(a) {
      return a.tagName.toUpperCase();
    };
    v = function(a, b) {
      return a.getAttribute(b) || "";
    };
    X = function(a, b, c) {
      a.setAttribute(b, c);
    };
    Y = function(a, b) {
      a.removeAttribute(b);
    };
    Nb = D;
    Ya = O;
    za = function(a, b) {
      var c;
      if (!O(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        D(a, c + b);
      }
    };
    Da = function(a, b) {
      if (O(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        D(a, c.join(" "));
      }
    };
    na = function(a, b, c) {
      a.style[b] = c;
    };
    Cb = function(a, b) {
      var c = -1, e, h;
      if (5.5 > u) {
        if (b) {
          for (e = b.split(";"); h = e[++c];) {
            var l = h.split(":");
            a.style[l[0]] = h.substr(l[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > W || 1 > da ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var Ba, Ja, sa, mb, vb, E, wa, ma, Z, Va;
  (function() {
    function k() {
      return T ? K ? 2 : U ? 3 : 1 : 0;
    }
    function J(f) {
      Ja(B, "load", J);
      J = N;
      oa(ya, f, !0);
      ya = N;
    }
    function P(f, p) {
      E(function() {
        var M = aa(f);
        p(M);
        M.addListener(p);
        return !0;
      });
    }
    function oa(f, p, M) {
      for (var t = 0; t < f.length; ++t) {
        !0 === f[t](p) && (f.splice(t, 1), --t);
      }
      M && (f.length = 0);
    }
    function ba(f, p, M) {
      c && !b.length && z(D);
      b.push(f, p, M);
    }
    function D() {
      var f = b, p;
      for (b = []; p = f.shift();) {
        oa(p, f.shift(), f.shift());
      }
    }
    function O(f) {
      var p = f || event;
      f = e[p.type];
      var M = -1, t, L;
      u ? (p.preventDefault = function() {
        p.returnValue = !1;
      }, p.stopPropagation = function() {
        p.cancelBubble = !0;
      }) : l && (p.A = p.stopPropagation, p.stopPropagation = function() {
        L = !0;
      });
      for (; t = f[++M];) {
        t.l === this ? (this.g = t.j, this.g(p), this.g = w, this.g = N) : 7.2 > W && this === I && t.l === B && (B.g = t.j, B.g(p), delete B.g);
      }
      if (u) {
        return p.preventDefault = p.stopPropagation = N, p.returnValue;
      }
      l && (p.defaultPrevented && "click" === p.type && "A" === p.target.tagName && (F = !0), L && !F && p.A(), p.A = p.stopPropagation = N);
    }
    function y() {
      var f = 9 === a.offsetWidth;
      ma !== f && (ba(tb, ma = f), m("p_cssAvailability:" + ma));
    }
    function H(f) {
      ya || oa(G, f);
    }
    var aa = B.matchMedia, a, b = [], c;
    ya.push(function() {
      P = N;
      a = qa(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      sa(function() {
        c = !0;
        b.length && z(D);
      });
    });
    Ba = function(f, p, M, t) {
      if (r) {
        f.addEventListener(p, M, t ? fb ? t : t.capture : !1);
      } else {
        var L = {l:f, j:M};
        t = e[p];
        var C = "on" + p, ca, Ka;
        if (t) {
          for (ca = t.length; Ka = t[--ca];) {
            if (Ka.l === f && Ka.j === M) {
              return;
            }
          }
          e[p].push(L);
        } else {
          e[p] = t = [L], h || (p = f[C], "function" === typeof p && p !== O && t.unshift({l:f, j:p}));
        }
        h ? f.attachEvent(C, O) : f[C] = O;
      }
    };
    Ja = function(f, p, M, t) {
      if (r) {
        f.removeEventListener(p, M, t ? fb ? t : t.capture : !1);
      } else {
        t = e[p];
        p = "on" + p;
        var L, C, ca;
        if (t) {
          for (L = t.length; C = t[--L];) {
            C.l === f && (C.j === M ? t.splice(L, 1) : ca = !0);
          }
          ca || (h ? f.detachEvent(p, O) : (f[p] = w, f[p] = null));
        }
      }
    };
    var e = {}, h = !1, l = 525.13 > Ha, r = !l && !Wa && B.addEventListener, F;
    l && fa.addEventListener("click", function(f) {
      if (F) {
        return F = !1, f.preventDefault(), !1;
      }
    });
    sa = function(f) {
      ya ? ya.push(f) : alert("Load event has already been dispatched!");
    };
    mb = function(f) {
      ta && ta.push(f);
    };
    var ta = [];
    if (419.3 >= Ha) {
      var S = function() {
        if (S) {
          var f = I.readyState;
          "loaded" === f || "complete" === f ? (S = N, J()) : z(S);
        }
      };
      z(S);
    } else {
      Ba(B, "load", J);
    }
    u || 0.9 <= da && 1.8 > da ? Ba(B, "unload", function(f) {
      oa(ta, f, !0);
    }) : ta = N;
    E = function(f) {
      tb.push(f);
    };
    sa(function() {
      y();
      Ra(y);
    });
    wa = function(f) {
      Xa && Xa.push(f);
    };
    var pa = 60 > da || qb, T, U, K;
    if (89 <= da || 89 <= Ca || db && 79 <= Ib || aa && (aa("(forced-colors:none)").matches || aa("(forced-colors:active)").matches)) {
      Va = !0, P("(forced-colors:active)", function(f) {
        T = f.matches;
        Z = k();
        ba(Xa, Z);
        m("(forced-colors:active):" + Z);
      });
    } else if (10 <= u || Ga || db && Ib) {
      Va = !0, P("(-ms-high-contrast:black-on-white)", function(f) {
        T = U = f.matches;
        Z !== k() && (Z = k(), ba(Xa, Z), m("(-ms-high-contrast:black-on-white):" + Z));
      }), P("(-ms-high-contrast:white-on-black)", function(f) {
        T = K = f.matches;
        Z !== k() && (Z = k(), ba(Xa, Z), m("(-ms-high-contrast:white-on-black):" + Z));
      }), P("(-ms-high-contrast:active)", function(f) {
        T = f.matches;
        Z !== k() && (Z = k(), ba(Xa, Z), m("(-ms-high-contrast:active):" + Z));
      });
    } else if (db && (u || da && 0 <= q.conpare(Q, "1.8.1") || qb)) {
      var x = function() {
        function f(t, L) {
          if (L && "transparent" === t) {
            return 382.5;
          }
          if ("#" === t.charAt(0)) {
            return parseInt("0x" + t.substr(1, 2), 16) + parseInt("0x" + t.substr(3, 2), 16) + parseInt("0x" + t.substr(5, 2), 16);
          }
          var C = t.split("(")[1].split(",");
          return V(C[0]) + V(C[1]) + V(C[2]);
        }
        var p = I.defaultView;
        var M = p ? p.getComputedStyle(a, null) : a.currentStyle;
        p = (M && M.color || "").split(" ").join("");
        M = (M && M.backgroundColor || "").split(" ").join("");
        p && (T = "#123456" !== p && "rgb(18,52,86)" !== p, U = f(p) < f(M, !0), K = f(p) > f(M, !0), Z !== k() && (Z = k(), m("(forced-colors-fallback):" + Z), ba(Xa, Z, pa)));
      };
      E(function(f) {
        if (f) {
          return na(a, "color", "#123456"), na(a, "backgroundColor", "#123456"), pa ? (x(), Xa = N) : Ra(x), x = N, !0;
        }
      });
    } else {
      Xa = k = N;
    }
    vb = function(f) {
      G.push(f);
    };
    var G = [], ja = 0, R = 1 > da || 1.2 <= da && 1.8 > da || 7.2 >= W;
    R ? Ra(function() {
      var f = B.scrollY || Fa.scrollTop;
      ja !== f && (ja = f, H());
    }) : Ba(B, "scroll", H);
    mb(function() {
      R || Ja(B, "scroll", H);
    });
  })();
  var cc = 9 > u || 525 <= Ha && 530 > Ha || 2 > Ca, Wb = 0, Xb, Yb, Zb, dc;
  (function() {
    function k(a) {
      for (var b = ba.length, c; b;) {
        if (c = ba[--b], c.F === a) {
          return c;
        }
      }
    }
    function J() {
      var a = I.styleSheets, b = [], c = 0, e = -1, h;
      if (a) {
        for (h = a.length; c < h; ++c) {
          if (2 > Ca || db && 526 > Ha) {
            var l = oa(a[c]);
            l.parentNode && (b[c] = l);
          } else {
            b[c] = oa(a[c]);
          }
        }
      } else {
        for (a = kb("*"), h = a.length; c < h; ++c) {
          l = a[c];
          var r = A(l);
          if ("STYLE" === r || "LINK" === r && "text/css" === v(l, "type")) {
            b[++e] = l;
          }
        }
      }
      return b;
    }
    function P(a) {
      return a.styleSheet || a.sheet;
    }
    function oa(a) {
      return a.owningElement || a.ownerNode;
    }
    Xb = function(a, b) {
      var c = J(), e = c.length;
      e = 0 <= b && b < e ? b : e;
      var h = c[e - 1];
      c = c[e];
      if (y || H) {
        var l = c ? lb(c, "style") : h ? hb(h, "style") : qa(ib, "style");
        H && Bb(l, "");
        var r = P(l);
        a && X(l, "media", a);
      } else if (D || O) {
        r = {D:a, C:e, G:!0};
      }
      if (r) {
        return ba.push({F:r, h:l, m:[]}), r;
      }
    };
    Yb = function(a) {
      a = k(a);
      var b = a.m, c = b.length, e;
      for (a.h && Ea(a.h); e = b[--c];) {
        e.i && Ea(e.i);
      }
      ba.splice(ba.indexOf(a), 1);
    };
    Zb = function(a, b, c, e) {
      var h = k(a), l = h.h;
      h = h.m;
      var r = "@import" === b, F = "@page" === b, ta = "@font-face" === b, S = h.length, pa = "", T;
      if (a.imports) {
        var U = a.imports.length;
      } else {
        for (U = 0; U < S && "@import" === h[U].u; ++U) {
        }
      }
      if (r) {
        e = 0 <= e && e < U ? e : U;
        var K = b + ' "' + c + '"';
      } else {
        e = U <= e && e < S ? e : S;
        for (K in c) {
          pa += ";" + K + ":" + c[K];
        }
        pa = pa.substr(1);
        K = b + "{" + pa + "}";
        6 <= u && ta && (e = S);
      }
      S = {u:b, v:c, o:e, s:e};
      if (9 > u) {
        U = a.rules;
        var x = U.length;
        if (ta) {
          b = I.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + K + "</style>", b = b.lastChild, (T = l.nextSibling) ? Ia(l).insertBefore(b, T) : Ia(l).appendChild(b), S.i = b;
        } else {
          r ? a.addImport(c, e) : 5.5 <= u && F || a.addRule(b, pa, e);
          S.s = e + (U.length - x - 1);
          if (0 === U.length - x) {
            return m("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + K), -1;
          }
          m("[CSSOM] rules.length \u306e\u5897\u5206" + (U.length - x));
        }
      } else if (y || H) {
        (db && Ha || 28 > Ca) && r ? S.i = hb(l, "link", {href:c, rel:"stylesheet", type:"text/css"}) : cc && ta ? (b = S.i = hb(l, "style", {type:"text/css", media:a.media}), b.innerText = K) : a.insertRule(K, e);
      }
      h.splice(e, 0, S);
      if (D || O) {
        l = k(a);
        T = l.m;
        b = l.h;
        c = a.C;
        r = J();
        a = r[c - 1];
        c = r[c];
        r = [];
        ta = F = -1;
        pa = "style";
        S = {type:"text/css", media:l.D};
        for (var G; U = T[++F];) {
          if (K = U.u, U = U.v, "@import" === K) {
            r[++ta] = K + ' "' + U + '"';
          } else {
            r[++ta] = K + "{";
            K = "";
            for (G in U) {
              K += ";" + G + ":" + U[G];
            }
            r[++ta] = K.substr(1) + "}";
          }
        }
        r = r.join("");
        D && (r = "data:text/css;charset=utf-8;base64," + aa(r), S.rel = "stylesheet", S.href = r, pa = "link", r = N);
        b ? (l.h = hb(b, pa, S, r), Ea(b)) : (b = c ? lb(c, pa, S, r) : a ? hb(a, pa, S, r) : qa(ib, pa, S, r), l.h = b);
      }
      G = e;
      a = h.length;
      for (l = G; l < a; ++l) {
        T = h[l], T.i || (b = T.s - T.o, T.o = G, T.s = G + b, G += 1 + b);
      }
      return e;
    };
    dc = function(a, b, c) {
      b = k(a).m[b];
      var e;
      if (b) {
        if ("@import" === b.u) {
          var h = b.v;
        } else if (y || H) {
          m("[CSSOM] CSSOM_getRawValueOfRule : " + e + " " + (9 > u ? a.rules : a.cssRules).length + " " + b.o);
          if (a = e = (9 > u ? a.rules : a.cssRules)[b.o]) {
            e = e.style;
            a = [];
            c = c.split("");
            h = 0;
            b = c.length;
            for (var l, r = !1; h < b; ++h) {
              l = c[h], "-" === l ? r = !0 : r ? (a[h] = l.toUpperCase(), r = !1) : a[h] = l;
            }
            a = e[a.join("")];
          }
          h = a;
        } else {
          h = b.v[c];
        }
      }
      return h;
    };
    var ba = [], D = 1 > da || 8 <= W && 9 > W, O = 7.2 <= W && 8 > W, y = !!u || !D && !O && function() {
      var a = qa(fa, "style"), b = !!P(a);
      b && (m("[CSSOM] CSSStyleSheet @insertRule : " + !!P(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!P(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!P(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!P(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === P(a).cssText)));
      Ea(a);
      return b;
    }();
    m("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + y);
    var H = !y && Ha && !D && !O && function() {
      var a = qa(fa, "style"), b;
      Bb(a, "");
      if (b = !!P(a)) {
        m("[CSSOM] CSSStyleSheet @insertRule : " + !!P(a).insertRule), m("[CSSOM] CSSStyleSheet @addRule : " + !!P(a).addRule), m("[CSSOM] CSSStyleSheet @cssRules : " + !!P(a).cssRules), m("[CSSOM] CSSStyleSheet @rules : " + !!P(a).rules), m("[CSSOM] CSSStyleSheet @cssText : " + ("" === P(a).cssText));
      }
      Ea(a);
      return b;
    }();
    y || m("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + H);
    Wb = D || O ? 1 : y || H ? 2 : 0;
    m("[CSSOM] p_CSSOM_canuse : " + Wb);
    var aa;
    (function(a) {
      function b(e) {
        for (var h = c, l = "", r = 0, F; F = e.length;) {
          4 > F && (r = [0, 2, 1, 0][F]), F = e.charCodeAt(0) << 16 | (1 < F ? e.charCodeAt(1) : 0) << 8 | (2 < F ? e.charCodeAt(2) : 0), l += [h[F >>> 18], h[F >>> 12 & 63], 2 <= r ? "=" : h[F >>> 6 & 63], 1 <= r ? "=" : h[F & 63]].join(""), e = e.substr(3);
        }
        return l;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      aa = b;
    })(this);
  })();
  (function() {
    function k() {
      if (525 > Ha || da && !pb || 2.2 > g(21) || g(25) || 10 > g(3) || Aa(32) || Aa(30) || Aa(1) || Aa(2) || Aa(3)) {
        return !1;
      }
      if (cc) {
        return !0;
      }
      if (2 === Wb) {
        var D = Xb();
        var O = Zb(D, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var y = D.cssText || D.cssRules && D.cssRules[O] && D.cssRules[O].cssText || "";
        var H = y.match("src") && y.match("@font-face");
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + y);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > u ? D.rules : D.cssRules).length);
        m("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + dc(D, O, "src"));
        Yb(D);
      }
      k = N;
      return ba = !!H;
    }
    tb.splice(0, 0, function() {
      if (ma) {
        gb = 8 <= u || Ga || 9.5 <= W || pb || qb || 522 <= Ha || 3 <= cb || Hb || Vb ? 3 : 7.2 <= W ? 2 : 6 <= W || da ? 1 : 0;
        if (!gb && !u && !Wa) {
          var D = qa(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          gb = 6 <= D.offsetWidth ? 2 : 0;
          Ea(D);
        }
        m("p_cssGeneratedContentGrade:" + gb);
        return !0;
      }
    });
    ub = function(D) {
      function O(aa) {
        H = Pb(H);
        ia = aa;
        y.onload = y.onerror = w;
        z(D, aa);
      }
      if (ia !== N) {
        m("[dataURITest] already done : " + ia), z(D, ia);
      } else if (8 > u) {
        m("[dataURITest] trident < 8 : false"), z(D, !1);
      } else {
        m("[dataURITest] start!");
        var y = new Image(), H = z(function() {
          H && O(!1);
        });
        y.onerror = function() {
          m("[dataURITest] no DATA URI!");
          O(!1);
        };
        y.onload = function() {
          m("[dataURITest] DATA URI:" + (1 === y.width * y.height));
          O(1 === y.width * y.height);
        };
        y.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > u && sa(function() {
      var D = qa(Fa, "div");
      Cb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Jb = 1 < D.offsetHeight;
      Cb(D, "");
      Ea(D);
    });
    Qa = function(D, O) {
      function y() {
        if (aa || !a || H.complete) {
          m("[imageTest] timer -> img.complete. img.width=" + H.width);
          var b = !!H.width;
          sb = sb || b;
          z(D, b);
          H.onerror = H.onload = w;
          H = D = N;
        } else {
          --a, z(y);
        }
      }
      var H = new Image(), aa, a = 99;
      m("[imageTest] start.");
      H.onerror = function() {
        m("[imageTest] error!");
        aa = !0;
      };
      H.onload = function() {
        m("[imageTest] onload.");
        aa = !0;
      };
      H.src = O;
      z(y);
    };
    var J = 9 > u || 2 > Ca || 12 > W, P = "bad_" + (new bb() - 0) + "_", oa = ["sans-serif", "serif"], ba;
    Kb = function(D, O, y, H, aa, a, b) {
      function c(R) {
        D(R);
        ja && !R && Yb(ja);
        D = K = x = G = ja = N;
      }
      function e() {
        var R = '1.6em "' + O + '"';
        m("[webFontTest] testByNativeFontLoaderAPI start.");
        I.fonts.load(R).then(function(f) {
          m("[webFontTest] fonts.check() : " + I.fonts.check(R, "i") + ", fonts.length : " + f.length);
          (f = r(O)) ? z(c, f) : (m("[webFontTest] mesureWebFont() : false"), l(!0));
        }, function(f) {
          m("[webFontTest] fonts.load() rejected! " + f);
          ia !== N ? F(ia) : ub(F);
        });
      }
      function h(R) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (T = new bb() - 0, !1) : R < new bb() - T;
      }
      function l(R) {
        R && (m("[webFontTest] testWebFont start."), T = new bb() - 0);
        (R = r(O)) ? (m("[webFontTest] testWebFont mesurement success : " + R), c(R)) : h(pa) ? (m("[webFontTest] testWebFont timeout!"), U || J ? c(0) : ia !== N ? F(ia) : ub(F)) : z(l);
      }
      function r(R) {
        var f = 0, p = -1, M = 0;
        if (!G) {
          var t = -1;
          var L;
          K = qa(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (G = {}; L = oa[++t];) {
            na(K, "fontFamily", L), G[L] = K.offsetWidth;
          }
        }
        for (5 > u ? K || (K = qa(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Fa.appendChild(K); t = oa[++p];) {
          if (na(K, "fontFamily", '"' + R + '",' + t), K.offsetWidth !== G[t]) {
            f = 1;
            break;
          }
        }
        !u && f && aa && (K.innerHTML = aa, R = K.offsetWidth, K.innerHTML = a, M = R === K.offsetWidth ? 1 : 0, K.innerHTML = "mmmmmmmmmmlli");
        Ea(K);
        5 > u && (K = N);
        return f + M;
      }
      function F(R) {
        m("[webFontTest] onTestDataURIComplete : " + R);
        R ? (U = !0, ta(!0)) : c(0);
      }
      function ta(R) {
        var f;
        if (y) {
          for (f in R && (T = new bb() - 0), y) {
            r(f) ? (m("[webFontTest] success! " + f), x = qa(Fa, "div", {"aria-hidden":"true", className:H, id:H}), ja = Xb(), Zb(ja, "@import", y[f]), z(S, !0)) : h(100) ? (m("[webFontTest] timeout! " + f), delete y[f], z(ta, !0)) : z(ta);
            return;
          }
        }
        c(0);
      }
      function S(R) {
        R && (m("[webFontTest] testImportedCssReady start!"), O = O.replace(P, ""), m("[webFontTest] targetWebFontName : " + O), T = new bb() - 0);
        1 < x.offsetWidth ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + x.offsetWidth), Ea(x), pa = 100, z(l, !0)) : h(pa) ? 528 > Ha ? (m("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + x.offsetWidth), Ea(x), pa = 100, z(l, !0)) : (m("[webFontTest] testImportedCssReady timeout!"), Ea(x), c(0)) : z(S);
      }
      var pa = b || 5000, T, U, K, x, G, ja;
      O = P + O;
      m("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      k || ba ? ba || k() ? (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !I.fonts || 603 > Ha ? (m("[webFontTest] No native font loader."), l(!0)) : (m("[webFontTest] Use Native font loader."), e())) : (m("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), z(c, 0)) : (m("[webFontTest] webFontTest_maybeCanUseWebFont : false"), z(c, 0));
    };
  })();
  var Oa = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Oa(960), ")", "(", Oa(234), Oa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Oa(9824), "\u2190", Oa(9829), Oa(9830), Oa(9827), Oa(956), "\u03a9", "\u2193", "\u2192", "%", Oa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Oa(9619)], ec = (9 === u || da && 0 <= q.conpare(Q, "1.8.1") || qb) && !Va, nb = [], ob, Za, Ob = 7.2 > W ? function() {
    ob = !ob;
    for (var k = -1, J; J = nb[++k];) {
      -1 !== J.className.indexOf("pbAlp") ? na(J, "display", ob ? "" : "none") : (za(J, ob ? "pbChrCS" : "pbChr00"), Da(J, ob ? "pbChr00" : "pbChrCS"));
    }
  } : ec ? function() {
    ob = !ob;
    for (var k = -1, J; J = nb[++k];) {
      na(J, "opacity", ob ? 1 : 0);
    }
  } : N;
  var $b = ea.startBlinkingIfCursor = function(k) {
    Ob ? Ya(k, "pbChrCS") && (Za || !W && !Z || (Za = setInterval(Ob, 400)), -1 === nb.indexOf(k) && nb.push(k)) : nb = N;
  };
  ea.stopBlinkingIfCursor = function(k) {
    Ob && (k = nb.indexOf(k), 0 <= k && (nb.splice(k, 1), !nb.length && Za && (clearInterval(Za), Za = 0)));
  };
  ec && wa(function(k) {
    k ? Za || (Za = setInterval(Ob, 400)) : Za && (clearInterval(Za), Za = 0);
  });
  Ob && mb(function() {
    Za && clearInterval(Za);
  });
  Va || wa(function(k) {
    k ? (X(fa, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (zb || 9 === u || 5.5 <= u && 9 > u && Jb) && za(fa, "jsCanRotate")) : (Y(fa, "forced-colors"), Da(fa, "jsCanRotate"));
  });
  (function() {
    function k(x) {
      F = x;
      m("[pbList] WebFont test result : " + !!x);
      x ? ba() : sb ? oa(!0) : sb !== N ? ba() : (m("[pbList] Need imageTest " + ta), Qa(oa, ta));
      m("window.offscreenBuffering = " + B.offscreenBuffering);
    }
    function J() {
      J = N;
      Kb(k, "PB-100", {"PB-100_canTTF":$a + "pbFont/ttf.css", "PB-100_canWOFF":$a + "pbFont/woff.css", "PB-100_canEOT":$a + "pbFont/eot.css", "PB-100_canSVG":$a + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function P(x) {
      this.focus();
      x.preventDefault();
      x.stopPropagation();
    }
    function oa(x) {
      x ? (m("[pbList] Fallback start!"), za(Fa, "pbList-noWebFont")) : m("[pbList] image disabled!");
      ba();
    }
    function ba() {
      for (k = Kb = N; r.length;) {
        D(r.shift(), r.shift());
      }
      m("[pbList] complete.");
    }
    function D(x, G) {
      function ja(L) {
        L = Sa(L);
        for (var C = -1, ca; ca = L[++C];) {
          switch(ca.nodeType) {
            case 1:
              ja(ca);
              break;
            case 3:
              ca.data && f(ca.data) && p.push(ca);
          }
        }
      }
      function R(L) {
        var C = L.children, ca = 0, Ka = C.length;
        if (Ka) {
          for (; ca < Ka; ++ca) {
            R(C[ca]);
          }
        } else {
          (C = L.innerText) && f(C) && p.push(L);
        }
      }
      function f(L) {
        return L.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var p = [], M;
      if (k) {
        -1 === r.indexOf(x) && (r.push(x, G), S && J && J());
      } else {
        var t = r.indexOf(x);
        0 <= t && r.splice(t, 2);
        for (5 > u ? R(x) : ja(x); M = p.shift();) {
          t = 5 > u ? M.innerText : M.data, 2 !== F && (t = t.split(b).join(aa)), G ? 5 > u ? M.innerText = t : M.data = t : O(t.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(H).split("&amp;").join("&"), M);
        }
      }
    }
    function O(x, G) {
      function ja(xa, ha) {
        for (var La = ""; ha;) {
          ha & 1 && (La += xa), ha >>= 1, xa += xa;
        }
        return La;
      }
      function R(xa, ha, La) {
        for (var Eb, gc = -1, ac, bc; Eb = ha[++gc];) {
          for (; 0 <= (ac = xa.indexOf(Eb));) {
            bc = Eb.length, xa = xa.substr(0, ac) + ja(La, bc) + xa.substr(ac + bc);
          }
        }
        return xa;
      }
      function f(xa) {
        var ha = V(xa), La = "" + ha;
        return 0 < ha && ha === ha | 0 && (ha = xa.indexOf(La) + La.length, ha <= xa.length) ? ha : 0;
      }
      var p = " area line str cmd fnc syb".split(" "), M = 5 > u || 1 === G.nodeType, t = [], L = "", C, ca = -1, Ka, xb, Pa;
      if (M) {
        if (U) {
          var Ub = G.style.visibility;
          na(G, "visibility", "hidden");
        }
        G.innerHTML = "";
      }
      if (K) {
        var Fb = G;
        G = I.createDocumentFragment();
      }
      if (function(xa) {
        var ha = xa.indexOf("P");
        if (-1 === ha) {
          return !1;
        }
        ha = V(xa.charAt(ha + 1));
        return 0 <= ha && 9 >= ha;
      }(x)) {
        L = ja("+", x.length);
      } else {
        0 <= (C = f(x)) && (L = ja("|", C), ca = C, --ca);
        for (; C = x.charAt(++ca);) {
          C === H || Ka ? (L += "~", C === H && (Ka = !Ka)) : L += C;
        }
        L = R(L, l, "^");
        L = R(L, e, "{");
        L = R(L, h, "}");
      }
      ca = 0;
      for (Ka = x.length; ca < Ka; ++ca) {
        C = x.charAt(ca);
        var ka = C === c;
        var ra = " " === C;
        C = ka ? " " : C;
        var la = L.charAt(ca);
        var Ua = (xb = Ma) && ka;
        var Ma = "|" === la;
        la = p["+|~{}^".indexOf(la) + 1];
        "\n" !== C ? (F || !sb ? (2 === F && x.substr(ca, 2) === b && (C = b, ++ca), la = ra && "str" === la ? "pbList-strsp" : ka ? "" : !ra && la ? "pbList-" + la : "") : (ka = wb.indexOf(C), ka = -1 === ka ? "" : wb.indexOf(C).toString(16).toUpperCase(), ka = (ka = 1 === ka.length ? "0" + ka : ka) ? "pbChr" + ka : "", la = ra && "str" === la ? "pbList-strsp" : ra || !ka ? "" : la ? (ka ? ka + " " : "") + "pbList-" + la : ka), ka = N, Ua ? (C = 6 <= u && 8 > u ? " " : c, la = "") : Ma && (da && 
        !pb || 9.5 > W) ? (Ma && !xb && (Pa = 4 - (V(x.substr(ca)) + "").length), 7.5 > W ? ka = T ? "position:relative;top:-4px;left:" + 12 * Pa + "px" : {position:"relative", top:"-4px", left:12 * Pa + "px"} : ka = T ? "position:relative;left:" + 12 * Pa + "px" : {position:"relative", left:12 * Pa + "px"}) : ra && 7.5 > W && (la = "pbList-strsp"), T ? t.push("<font" + (la ? ' class="' + la + '"' : "") + (ka ? ' style="' + ka + '"' : "") + ">" + C + "</font>") : M || K ? qa(G, "font", {"class":la, 
        style:ka}, C) : lb(G, "font", {"class":la, style:ka}, C)) : (xb = Ma = !1, T ? t.push(C) : M || K ? Bb(G, C) : Tb(G, C));
      }
      if (M) {
        T ? G.innerHTML = t.join("") : K && Fb.appendChild(G), U && na(G, "visibility", Ub);
      } else {
        if (T) {
          p = I.createElement("font");
          for (p.innerHTML = t.join(""); t = p.firstChild;) {
            G.parentNode.insertBefore(t, G);
          }
          Ea(G);
        } else {
          K ? Fb.parentNode.replaceChild(G, Fb) : Ea(G);
        }
      }
    }
    E(function(x) {
      if (x) {
        x = Mb("pbChrCS");
        for (var G = 0, ja = x.length; G < ja; ++G) {
          $b(x[G]);
        }
        return !0;
      }
    });
    var y = [];
    E(function(x) {
      function G(ra) {
        var la = v(ra, "pbTip");
        if (la) {
          var Ua = la.charAt(0);
          var Ma = "_" === Ua;
          la = (Ma ? la.charAt(2) : Ua).toUpperCase().charCodeAt(0) - 65;
          t ? qa(ra, "div", {style:{left:7 * la + 3 + "px"}}) : (Ua = v(ra, "title"), Y(ra, "pbTip"), Y(ra, "title"), Ma = qa(ra, "div", {className:"pbTip" + (Ma ? "Btm" : ""), style:{width:Ua.length + R + "em", left:7 * la - 5 + "px"}}, Ua), qa(Ma, "div"));
        }
        M && 0 <= ra.className.indexOf("pbColor") && qa(ra, "u");
      }
      function ja(ra, la) {
        var Ua = v(ra, "pbGhst"), Ma = ra.className, xa = Ma.split("pbCsr")[1] || "", ha = Ma.split("pbAlp")[1] || "";
        if ("CS" === Ua) {
          var La = "_";
        } else {
          La = Ua, 3 === La.length && (La = La.substr(0, 2)), La = wb[parseInt(La, 16)] || "~";
        }
        var Eb;
        xa = xa.split(" ")[0];
        if (ha = V(ha.split(" ")[0])) {
          f && (Ma = Ma.split("pbChr")[1].split(" ")[0], na(ra, "backgroundPosition", Gb(Ma, 2, Ub) + "px " + -24 * (10 - ha) + "px")), !la && p && lb(ra, "a").appendChild(ra);
        }
        Ua && (ha = 10 - ha, f && (Eb = {backgroundPosition:Gb(Ua, 2, Ub) + "px " + -24 * (10 - ha) + "px"}), Y(ra, "pbGhst"), ca = lb(ra, "b", {className:"pbChr" + Ua + " pbCsr" + xa + " pbAlp" + ha, style:Eb}, La), $b(ca));
        $b(ra);
      }
      if (x) {
        var R = 6 > u ? 2 : 0, f = 7.2 > W || 0.9 > da || Wa, p = 1.1 === da, M = 1.4 > da;
        x = kb("SAMP");
        var t = 8 === u, L = gb, C, ca, Ka, xb, Pa;
        Jb && za(Fa, "pbLCD-AX");
        if (x.length) {
          for (Ka = -1; C = x[++Ka];) {
            if (Ya(Ia(C), "pbLCD")) {
              var Ub = Ya(C, "PB-120") || Ya(C, "FX-795P");
              var Fb = Ta(C);
              for (C = Fb.length; Pa = Fb[--C];) {
                switch(A(Pa)) {
                  case "A":
                    (2 > L || t) && G(Pa);
                    if (2 > L) {
                      var ka = Ta(Pa);
                      for (xb = ka.length; xb;) {
                        ja(ka[--xb], !0);
                      }
                    }
                    Hb ? X(Pa, "href", "javascript:void(0)") : (Ba(Pa, "click", P), y.push(Pa));
                    break;
                  case "B":
                    2 > L && ja(Pa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    mb(function() {
      for (var x; x = y.shift();) {
        Ja(x, "click", P);
      }
    });
    6 === u && (new Na("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var H = wb[7], aa = wb[30], a = wb[113], b = Oa(8337) + Oa(8331), c = Oa(160);
    Oa(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), l = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + aa + wb[31]).split(""), r = [], F, ta, S;
    if (0.9 <= da && 0 >= q.conpare(Q, "0.9.1")) {
      za(fa, "pbLCD-gecko091");
      var pa = !0;
    }
    E(function(x) {
      if (x) {
        ta = $a + "pbFont/x3mask" + (pa ? ".gecko0.9.1.gif" : ".png");
        x = kb("*");
        for (var G = -1, ja; ja = x[++G];) {
          Ya(ja, "pbList") ? D(ja) : Ya(ja, "pbFont") && D(ja, !0);
        }
        r.length && (m("[pbList] " + r.length / 2 + " elements found. WebFont test start."), J());
        return !0;
      }
    });
    var T = !1, U = 8 > W, K = !T && !U && !(6 > u) && I.createDocumentFragment && !!Fa.replaceChild;
    ea.prettify = D;
  })();
  var fc = I.scripts || kb("script");
  var $a = fc[fc.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  m("[p_assetUrl] " + $a);
  sa(function() {
    var k;
    (k = jb("logger")) || alert("#logger not found!");
    k ? (m = function(J) {
      qa(k, "P", N, J);
    }, Db = function(J) {
      qa(k, "P", {style:{color:"red"}}, J);
    }, B.onerror = function(J, P, oa) {
      Db(J + ", " + P + ", " + oa);
      return !0;
    }) : B.console ? (m = console.log, Db = console.error) : W ? (m = w, Db = opera.postError) : m = Db = w;
    for (; eb.length;) {
      m(eb.shift());
    }
    for (; Ab.length;) {
      m(Ab.shift());
    }
    eb = Ab = N;
  });
  6.1 > cb && vb(Lb);
  mb(Qb);
  6.1 > cb && vb(Rb);
  mb(Sb);
  10 > u && (11 !== rb || 5 !== u) || (9 > W || 1 > da || !Wa && !B.addEventListener ? I.write('<link href="' + $a + yb + '" rel="stylesheet"' + (8 > W ? "" : ' media="screen,handheld,projection,print"') + ">") : sa(function() {
    qa(ib, "link", {href:$a + "" + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

