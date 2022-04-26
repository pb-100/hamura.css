PB100={};var p;
ua = [];
ua.conpare = function(ea, t) {
  var B = 0, x, J, sa = (ea + "").split("."), V = (t + "").split("."), Ka = sa.length;
  for (x = V.length; "0" === sa[Ka - 1];) {
    --Ka;
  }
  for (; "0" === V[x - 1];) {
    --x;
  }
  for (J = Ka < x ? Ka : x; B < J; ++B) {
    var Ya = sa[B] - 0, r = V[B] - 0;
    if (Ya !== r) {
      return Ya > r ? 1 : -1;
    }
  }
  return Ka > x ? 1 : Ka === x ? 0 : -1;
};
(function(ea, t, B, x, J, sa, V, Ka) {
  function Ya(E, ta, la) {
    la = sa(E.split(ta)[1]);
    return 0 <= la ? la : 0;
  }
  function r(E, ta) {
    return 0 <= E.indexOf(ta);
  }
  function Za(E) {
    return r(E, "Linux armv") || r(E, "Linux aarch") || r(E, "Linux i686") || r(E, "Linux x86_64");
  }
  function M(E, ta) {
    for (var la in ta) {
      if (la === E) {
        return !0;
      }
    }
  }
  function g(E, ta) {
    var la = "", Z = -1, Qa;
    if (E = E.split(ta)[1]) {
      for (; Qa = E.charCodeAt(++Z);) {
        if (48 <= Qa && 57 >= Qa || 46 === Qa) {
          la += E.charAt(Z);
        } else {
          break;
        }
      }
      for (Z = la.length; Z;) {
        if (46 === la.charCodeAt(--Z)) {
          la = la.substr(0, Z);
        } else {
          break;
        }
      }
    }
    return la;
  }
  function xa(E) {
    for (var ta = arguments, la = 1, Z = ta[0], Qa; la < ta.length; ++la) {
      0 > Fa(Z, Qa = ta[la]) && (Z = Qa);
    }
    return Z;
  }
  function Eb(E) {
    return E === E + "" ? E : E === E - 0 ? "" + E : E.min && E.max ? E.min + "~" + E.max : E.min ? E.min + "~" : "~" + E.max;
  }
  var Fa = ea.conpare, d = x.userAgent, ia = x.appVersion, hb = sa(ia) || 0, S = x.platform, v = B.documentElement, Ra = v && v.style, Ga = B.documentMode, W = J.width;
  J = J.height;
  var fa = t.HTMLAudioElement, pb = t.performance, qb = t.Int8Array, Ha = t.ontouchstart !== Ka, $a = g(ia, "Version/") || g(d, "Version/"), Fb = t.operamini, Aa = !Fb && t.opera, Tb = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : xa(g(d, "Opera "), $a, hb)), Gb = t.opr, rb = !Aa && (B.all || Ga);
  Ga = rb && (Ga ? Ga : t.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : t.attachEvent ? 5 : 4);
  v = !rb && v.msContentZoomFactor;
  var ab = !v && (t.chrome || t.chromium), eb = !rb && function() {
    for (var E in Ra) {
      if (0 === E.indexOf("Moz")) {
        return !0;
      }
    }
  }(), xb = r(d, "UCWEB"), Hb = xb && g(d, " U2/"), sb = xb && g(d, "; wds "), fb = g(d.split("_").join("."), "; iPh OS "), ka = g(d, "; Adr "), yb = r(ia, "YJApp-ANDROID"), va = r(S, "Android") || eb && r(ia, "Android") || yb;
  ka = g(S, "Android ") || g(ia, "Android ") || g(d, "Android ") || ka;
  var tb = r(S, "Linux"), Sa = "MacIntel" === S && x.standalone !== Ka, ub = eb && g(d, "Goanna/"), Ma = !ub && eb && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Ib = g(d, "Firefox/"), z = g(d, "Opera/"), Nb = t.FNRBrowser, Na = Ya(d, "AppleWebKit/"), bb = g(d, "Chrome/"), zb = g(ia, "Iron/"), Jb = g(d, "OPR/"), Ob = g(ia, "KHTML/"), Pb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var Qb = g(d, "Silk/"), ib = Ya(d, "SamsungBrowser/"), jb = !ib && function() {
    for (var E = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ta, la = E.length; ta = E[--la];) {
      if (r(d, ta)) {
        return 2 > sa($a) ? $a : 0.9;
      }
    }
    E = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (la = E.length; ta = E[--la];) {
      if (r(d, ta)) {
        return $a;
      }
    }
  }(), Kb = ab && 534.3 >= Na, Ia = Za(S), Oa = Ia && !r(d, S) && Za(d);
  Ha = Ha && (Na || eb) && Oa || !ka && yb;
  yb = !!t.ReactNativeWebView;
  Ia = Ia && function() {
    for (var E in t) {
      if (0 === E.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Pa = (Oa = t.puffinDevice) && Oa.clientInfo;
  Pa = (Oa = Pa && "iOS" === Pa.os && Pa.osVersion) && Pa.model;
  var ra = !Ga && B.registerElement, kb = !Ga && B.execCommand, gb = t.webkitCancelAnimationFrame, Ab = tb && ra && "11.0.696.34" === bb, Rb = t._firefoxTV_playbackStateObserverJava, Da = Ya(d, "diordnA ");
  if ("Nitro" === S) {
    var A = 1;
  } else if ("Nintendo DSi" === S) {
    A = 2;
    var w = z;
  } else if ("New Nintendo 3DS" === S || r(d, "iPhone OS 6_0") && 320 === W && 240 === J) {
    A = 4, w = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === S) {
    A = 3, w = g(d, "Version/"), Na = 535;
  } else if ("Nintendo Swicth" === S) {
    A = 7, w = g(ia, "NintendoBrowser/");
  } else if (t.wiiu) {
    A = 6;
    w = g(ia, "NintendoBrowser/");
    var X = 15, Y = g(ia, "AppleWebKit/") || (gb ? 536 : 534);
    w || (w = gb ? 4 : 2, r(ia, "Macintosh;") || r(ia, "Windows NT") && r(ia, "Touch"));
  } else if (Aa && Aa.wiiremote) {
    A = 5, w = g(d, "Wii; U; ; ");
  } else if (z = g(d, "PlayStation Vita ")) {
    A = 10, w = z;
  } else if (z = g(d, "(PlayStation Portable); ")) {
    A = 8;
    w = z;
    var Lb = 3.3;
  } else if (z = g(d, "PLAYSTATION 3; ") || g(d, "PLAYSTATION 3 ")) {
    A = 11, w = z, 0 > Fa("4.10", z) && (X = 26, Y = z);
  } else if (r(d, "Xbox One")) {
    A = 15, w = 1;
  } else if (r(d, "Xbox")) {
    A = 14, w = 1;
  } else if (2 === hb && r(d, "Sony/COM2/")) {
    A = 17;
    w = 2;
    Lb = 3.4;
    var Ta = !0;
  } else if (0 === S.indexOf("iP") || fb || Oa || Sa) {
    if (Oa) {
      switch(w = Oa, Pa.substr(0, 4)) {
        case "iPho":
          var wa = 0;
          g(Pa, wa);
          var Ba = !0;
          break;
        case "iPad":
          wa = 1;
          g(Pa, wa);
          var ma = !0;
          break;
        case "iPod":
          wa = 2;
          g(Pa, wa);
          var Bb = !0;
      }
    } else {
      fb ? w = fb : (w = g(ia.split("_").join("."), "OS "), M("isSecureContext", t), M("enableWebGL", t), M("sameOrigin", t));
      if (!w || Nb) {
        w = t.PointerEvent ? 13 : t.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : t.WebAssembly ? 11.2 : t.HTMLMeterElement ? 10.3 : t.Proxy ? 10.2 : t.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : t.SharedWorker ? pb && pb.now ? 8.0 : 8.4 : kb ? 7.1 : t.webkitURL ? 6.1 : t.Worker ? 5.1 : qb ? 4.3 : fa ? 4.1 : 3.2;
      }
      var ya = W === 1.5 * J || 1.5 * W === J;
      0 === S.indexOf("iPhone") ? (wa = 0, Ba = !0) : 0 === S.indexOf("iPad") || Sa ? (wa = 1, ma = !0) : 0 === S.indexOf("iPod") && (wa = 2, Bb = !0);
    }
    X = !Oa && (x.standalone || (ma || 12 > w) && M("webkitFullscreenEnabled", B) || 11 <= w && 13 > w && x.mediaDevices) ? 16 : 17;
    A = 24;
    Y = w;
  } else if (r(d, "Kobo")) {
    A = 18, X = 21, Y = 2.2, va = !0;
  } else if (r(d, "EBRD")) {
    A = 19, X = 21, Y = 2.2;
  } else if (z = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    A = 28, w = z;
  } else if (t.onmoztimechange !== Ka) {
    A = 29, w = 18.1 > Ma ? "1.0.1" : 19 > Ma ? 1.1 : 27 > Ma ? 1.2 : 29 > Ma ? 1.3 : 31 > Ma ? 1.4 : 33 > Ma ? 2.0 : 35 > Ma ? 2.1 : 38 > Ma ? 2.2 : 45 > Ma ? 2.5 : 2.6, r(d, "Mobile") ? Ba = !0 : r(d, "Tablet") ? ma = !0 : r(d, "TV");
  } else if (t.palmGetResource) {
    A = 30, w = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), r(d, "webOS.TV") || r(d, "/SmartTV") || (Ba = !0);
  } else if (z = g(d, "Tizen ")) {
    A = 31, w = z, X = 24, Y = ib, Ba = !0;
  } else if (z = g(d, "Windows Phone ") || g(ia, "Windows Phone OS ") || sb) {
    A = 23, w = z, Ba = !0;
  } else if (v && "ARM" === S) {
    A = 23, w = 10, Ba = !0;
  } else if (rb && r(ia, "ZuneWP")) {
    A = 23, w = 11 === Ga ? 8.1 : 10 === Ga ? 8 : 9 === Ga ? 7.5 : 7 === Ga ? 7 : "?", Ba = !0;
  } else if (r(d, "FOMA;")) {
    A = 16, Ba = !0;
  } else if (r(d, "SoftBank;")) {
    A = 16, Ba = !0;
  } else if (r(d, "KFMUWI")) {
    var Ja = !0;
    w = 6.3;
    var pa = ma = !0;
  } else if (r(d, "KFKAWI")) {
    Ja = !0, w = 6, pa = ma = !0;
  } else if (r(d, "KFSUWI") || r(d, "KFAUWI") || r(d, "KFDOWI")) {
    Ja = !0, w = 5, pa = ma = !0;
  } else if (r(d, "KFGIWI")) {
    Ja = !0, w = 5, pa = ma = !0;
  } else if (r(d, "KFARWI") || r(d, "KFSAWA") || r(d, "KFSAWI")) {
    Ja = !0, w = 5 <= sa(ka) ? 5 : 4, pa = ma = !0;
  } else if (r(d, "KFSOWI") || r(d, "KFTHWA") || r(d, "KFTHWI") || r(d, "KFAPWA") || r(d, "KFAPWI")) {
    Ja = !0, w = 3, pa = ma = !0;
  } else if (r(d, "KFOT") || r(d, "KFTT") || r(d, "KFJWA") || r(d, "KFJWI")) {
    Ja = !0, w = 2, pa = ma = !0;
  } else if (r(d, "Kindle Fire")) {
    Ja = !0, w = 1, pa = ma = !0;
  } else if (z = g(d, "Kindle/")) {
    A = 20, w = z, X = 21, Y = 2.2;
  } else if (Rb) {
    Ja = !0, w = ka || Da, pa = !0;
  } else if (r(d, "AmazonWebAppPlatform") || r(d, "; AFT")) {
    Ja = !0, w = ka, pa = !0;
  } else if (r(d, "MeeGo")) {
    A = 32;
  } else if (r(d, "Maemo")) {
    A = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Pb) {
    A = 22, Ta = !0;
  } else if ("WinCE" === S) {
    A = 21, Ta = !0;
  } else if (0 === S.indexOf("Win")) {
    A = "Win16" === S ? 35 : "Win32" === S ? 36 : "Win64" === S ? 37 : 0, w = g(d, "Windows NT ") || g(d, "Windows ");
  } else if (0 === S.indexOf("Mac")) {
    A = "Mac68K" === S ? 39 : "MacPowerPC" === S || "MacPPC" === S ? 38 : "MacIntel" === S ? 40 : 0;
    if (z = g(d.split("_").join("."), "Mac OS X ")) {
      w = z;
    }
    var lb = !0;
  } else if (r(d, "BlackBerry") || r(d, "BB10")) {
    A = 34, w = $a, Ba = !0;
  } else if (r(d, "SunOS") || r(d, "Sun Solaris")) {
    A = 42;
  } else if (r(d, "FreeBSD")) {
    A = 43;
  } else if (r(d, "OpenBSD")) {
    A = 44;
  } else if (r(d, "NetBSD")) {
    A = 45;
  } else if (va && eb) {
    r(d, "Android 4.4;") ? ya = {min:2.3} : 4 <= sa(ka) ? ya = ka : ya = {min:2.2}, w = ya;
  } else if (va && Aa) {
    ka ? ya = ka : ya = {min:1.6}, w = ya, r(d, "Tablet") ? ma = !0 : Ba = !0;
  } else if (ka) {
    w = ka, va = !0;
  } else if (tb && Ha || yb || Ia) {
    var vb = !0;
    ib ? ya = {min:4.4} : ab && !Kb || Gb || Jb ? ya = {min:4} : (ya = ka = Ra.touchAction !== Ka ? {min:5} : ra ? 4.4 : qb ? x.connection ? t.searchBoxJavaBridge_ || ab ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Na ? 3 : 533 <= Na ? fa ? 2.3 : 2.2 : 530 <= Na ? 2.0 : 1.5, jb && (X = 24, Y = jb));
    w = ya;
    va = !0;
  } else {
    Ab ? (w = {min:5}, vb = va = !0) : tb && (r(d, "Ubuntu") ? A = 46 : (z = g(d, "Mint/")) ? (A = 47, w = z) : (z = g(d, "Fedora/")) ? (A = 48, w = z) : A = r(d, "Gentoo") ? 49 : 50);
  }
  Ja || va && vb && Qb ? A = 27 : va && (A = A || 26);
  X || (pa = pa || va, Aa ? (X = pa || Ta || Ba || ma ? 9 : 8, Y = Tb) : rb ? (ya = Ya(ia, "Trident/") + 4, X = Ta || Ba || ma || Bb ? 3 : lb && 5 <= Ga ? 7 : 2, Y = Ga) : v ? (X = 23 === A ? 6 : 5, Y = g(ia, "Edge/")) : ub ? (X = 13, Y = ub) : eb ? (X = pa ? 12 : 11, Y = Ma || Ib) : ib ? (X = 24, Y = ib) : (z = Lb || g(d, "NetFront/")) ? (X = 18, Y = z) : (z = g(d, "iCab")) ? (X = 19, Y = z) : (z = xa(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Fb && $a) ? (X = 10, Y = z, A || (r(d, "iPhone") ? 
  wa = 0 : r(d, "iPad") ? wa = 1 : r(d, "iPod") && (wa = 2), wa && (A = 24))) : xb ? (X = 25, Y = Hb) : Ob ? (X = 14, Y = hb) : va && Kb ? (X = 21, Y = ka) : ab || Gb || Jb ? (X = pa ? 22 : 20, Y = bb || zb) : va && ra ? (X = 23, Y = 5 > sa(ka) ? ka : bb) : va && ($a || vb) ? (X = 21, Y = ka) : bb ? (X = pa ? 22 : 20, Y = bb) : Na && (X = 15, Y = Na));
  A && (ea[2] = A, w && (ea[3] = Eb(w)));
  X && (ea[0] = X, Y && (ea[1] = Eb(Y)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Cb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var ea = this[this.length - 1];
  --this.length;
  return ea;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ea = arguments, t = 0, B = ea.length, x = this.length; t < B; ++t) {
    this[x + t] = ea[t];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ea = this[0], t = 1, B = this.length; t < B; ++t) {
    this[t - 1] = this[t];
  }
  --this.length;
  return ea;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ea = arguments, t = ea.length, B = this.length += t - 1, x = B; x >= t; --x) {
    this[x] = this[x - t];
  }
  for (x = 0; x < t; ++x) {
    this[x] = ea[x];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(ea, t) {
  var B = arguments, x = B.length - 2 - t, J = this.slice(ea, ea + t), sa;
  if (0 < x) {
    var V = this.length - 1;
    for (sa = ea + t; V >= sa; --V) {
      this[V + x] = this[V];
    }
  } else if (0 > x) {
    V = ea + t;
    for (sa = this.length; V < sa; ++V) {
      this[V + x] = this[V];
    }
    this.length += x;
  }
  V = 2;
  for (sa = B.length; V < sa; ++V) {
    this[V - 2 + ea] = B[V];
  }
  return J;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ea, t) {
  var B = this.length >>> 0;
  if (0 === B) {
    return -1;
  }
  if (t) {
    var x = t || 0;
    x = -Infinity === x ? 0 : (0 > x ? -x : x) | 0;
    if (B <= x) {
      return -1;
    }
  }
  for (x = 0 <= x ? x : 0 < B + x ? B + x : 0; x < B; ++x) {
    if (this[x] === ea) {
      return x;
    }
  }
  return -1;
});
(function(ea, t, B, x, J, sa, V, Ka, Ya, r, Za, M) {
  function g(l) {
    if (t[0] === l) {
      return S === S + "" ? V(S) : S;
    }
  }
  function xa(l) {
    var K = t[3];
    if (t[2] === l) {
      return K === K + "" ? V(K) : K;
    }
  }
  function Eb(l, K, P) {
    l + "" === l && ("a" === l.charAt(2) && (P = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > W ? 117 : 0.9 > fa || 9 > v || 9 > W || Ra ? 1 : 132 : parseInt(l, 16));
    P && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (K || 2));
  }
  var Fa = J.body, d = Fa.style, ia, hb, S = t[1], v = g(2) || g(3), Ra = g(7), Ga = g(5) || g(6), W = g(8) || g(9), fa = g(11) || g(12), pb = fa && 0 <= t.conpare(S, "1.9.1"), qb = g(13), Ha = g(15), $a = g(16) || g(17), Fb = g(10) || g(25), Aa = g(20) || g(22), Tb = Aa || g(23) || g(21) || g(24), Gb = Aa && V(sa.userAgent.split("Edg/")[1]), rb = V(sa.appVersion.split("Trident/")[1]) + 4, ab = xa(35) || xa(36) || xa(37), eb = !v && !Ra && (new Ka('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  xb = (Ra ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > W ? "opr70" : 8 > W ? "opr72" : 9.5 > W ? "opr" + (W | 0) : fa && !pb ? 1.4 <= fa ? "gck19" : 1.3 <= fa ? "gck13" : 1 <= fa ? "gck12" : 0.9 <= fa ? "gck09" : 0.8 <= fa ? "gck08" : "gck07" : "modern") + ".css";
  xa(1) || xa(2) || xa(3) || xa(4) || xa(8) || xa(9) || xa(10);
  var Hb, sb, fb, ka, yb = d.transform !== M ? "transform" : d["-o-transform"] !== M ? "-o-transform" : d["-ms-transform"] !== M ? "-ms-transform" : d.MozTransform !== M ? "-moz-transform" : d["-webkit-transform"] !== M ? "-webkit-transform" : "", va = [], tb = [], Sa = [], ub, Ma, Ib, z, Nb, Na, bb = [], zb = [], Jb, Ob, Pb, Qb;
  (function() {
    function l() {
      for (var c, e = 0, h = new Za() - 0; e < G.length;) {
        h < G[0].t ? ++e : (c = G.splice(e, 1)[0], c.f(c.p));
      }
      b = G.length ? Ya(l, aa) : 0;
    }
    function K() {
      for (var c, e = 0; e < ba.length; ++e) {
        c = ba[e], c.f();
      }
    }
    function P() {
      y && (y = clearInterval(y));
    }
    function na() {
      b && (b = r(b));
    }
    p = function(c) {
      bb.push(c);
    };
    Cb = function(c) {
      zb.push(c);
    };
    Na = function(c) {
      ba.length || (y = setInterval(K, C));
      ba.push({f:c, B:++N});
      return N;
    };
    Jb = function() {
      y && (P(), y = setInterval(K, C));
    };
    Ob = P;
    var ba = [], C = 500, N = 0, y;
    if (5 > v || Ra) {
      B._wdb_onlooptimer = K, K = "_wdb_onlooptimer()";
    }
    z = function(c, e, h) {
      G.length || (b = Ya(l, aa));
      G.push({f:c, p:e, B:++a, t:new Za() - 0 + (aa < h ? h : aa)});
      return a;
    };
    Nb = function(c) {
      for (var e = G.length, h; h = G[--e];) {
        if (h.B === c) {
          G.splice(e, 1);
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      b && (na(), b = Ya(l, aa));
    };
    Qb = na;
    var G = [], aa = 16, a = 0, b;
    if (5 > v || Ra) {
      B._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var ib, jb, Kb, Ia, Oa, Pa, ra, kb, gb, Ab, Rb, Da, A, w, X, Y, Lb, Ta, wa, Ba, ma, Bb;
  (function() {
    function l(a, b, c) {
      var e = ["<", a], h = 1, m, u;
      if (b) {
        for (m in b) {
          var F = b[m];
          if (null != F && "" !== F) {
            if ("style" === m) {
              e[++h] = ' style="';
              for (u in F) {
                for (var qa = ++h, T, ca = [], da = u.split(""), Q = da.length; Q;) {
                  T = da[--Q], "A" <= T && "Z" >= T && (T = "-" + T.toLowerCase()), ca[Q] = T;
                }
                e[qa] = ca.join("") + ":" + F[u] + ";";
              }
              e[++h] = '"';
            } else {
              "className" === m && (m = "class"), e[++h] = " " + m + '="' + F + '"';
            }
          }
        }
      }
      e[++h] = ">";
      null != c && (y && "font" !== a ? e[++h] = "<FONT>" + c + "</FONT>" : e[++h] = c);
      e[++h] = "</" + a + ">";
      return e.join("");
    }
    function K(a) {
      a = "*" === a && 6 > v ? "*" !== a ? J.all.tags(a.toUpperCase()) : J.all : J.getElementsByTagName(a);
      var b = [], c = 0, e;
      for (e = a.length; c < e; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function P(a) {
      return y ? a.parentElement : a.parentNode;
    }
    function na(a, b, c, e, h, m) {
      if (y) {
        var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var F = Oa(2 > a ? Ia(b) : b);
        F = 2 > a ? F.indexOf(b) + a : F.length;
        b.insertAdjacentHTML(u, l(c, e, h));
        b = Oa(b)[F];
        null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (G) {
        b = J.createElement(l(c, e));
      } else {
        b = m ? J.createElementNS("http://www.w3.org/2000/svg", c) : J.createElement(c);
        if (e) {
          for (u in e) {
            if ((c = e[u]) || 0 === c) {
              switch(u) {
                case "class":
                case "className":
                  Lb(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (F in c) {
                    a[F] = c[F];
                  }
                  break;
                default:
                  X(b, u, c);
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
        return na(2, a, "font", M, b);
      }
      var c = J.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function C(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function N(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var y = 5 > v;
    ia = K("html")[0];
    hb = K("head")[0];
    ib = function(a) {
      return B[a] || J[a] || J.getElementById(a);
    };
    jb = K;
    Kb = function(a) {
      var b = [], c = 0, e, h = -1;
      if (9 > v || !J.getElementsByClassName) {
        var m = 6 > v ? J.all : J.getElementsByTagName("*");
      } else {
        var u = !0;
        m = J.getElementsByClassName(a);
      }
      for (e = m.length; c < e; ++c) {
        var F = m[c];
        if (u || (y || 1 === F.nodeType) && N(F, a)) {
          b[++h] = F;
        }
      }
      return b;
    };
    Ia = P;
    Oa = function(a) {
      a = y ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Pa = function(a) {
      var b = !(7.03 < W && 7.2 > W) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, m; e;) {
        if (m = a[--e], b || 1 === m.nodeType) {
          y && "FONT" === m.tagName || (c[++h] = m);
        }
      }
      return c;
    };
    ra = function(a, b, c, e, h) {
      b = na(2, a, b, c, e, h);
      y || (a.appendChild(b), aa && null != e && ba(b, e));
      return b;
    };
    kb = function(a, b, c, e, h) {
      b = na(0, a, b, c, e, h);
      y || (P(a).insertBefore(b, a), aa && null != e && ba(b, e));
      return b;
    };
    gb = function(a, b, c, e, h) {
      b = na(1, a, b, c, e, h);
      var m;
      y || ((m = a.nextSibling) ? Ia(m).insertBefore(b, m) : Ia(a).appendChild(b), aa && null != e && ba(b, e));
      return b;
    };
    Ab = ba;
    Rb = function(a, b) {
      if (y) {
        return na(0, a, "font", M, b);
      }
      var c = J.createTextNode("" + b);
      Ia(a).insertBefore(c, a);
      return c;
    };
    Da = function(a) {
      Ia(a) ? y ? a.outerHTML = "" : Ia(a).removeChild(a) : p("[DOM] p_DOM_remove(), No parentNode!");
    };
    var G = 9 > v, aa = G;
    A = function(a) {
      return a.tagName.toUpperCase();
    };
    w = function(a, b) {
      return a.getAttribute(b) || "";
    };
    X = function(a, b, c) {
      a.setAttribute(b, c);
    };
    Y = function(a, b) {
      a.removeAttribute(b);
    };
    Lb = C;
    Ta = N;
    wa = function(a, b) {
      var c;
      if (!N(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        C(a, c + b);
      }
    };
    Ba = function(a, b) {
      if (N(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        C(a, c.join(" "));
      }
    };
    ma = function(a, b, c) {
      a.style[b] = c;
    };
    Bb = function(a, b) {
      var c = -1, e, h;
      if (5.5 > v) {
        if (b) {
          for (e = b.split(";"); h = e[++c];) {
            var m = h.split(":");
            a.style[m[0]] = h.substr(m[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > W || 1 > fa ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ya, Ja, pa, lb, vb, E, ta, la, Z, Qa;
  (function() {
    function l() {
      return da ? k ? 2 : Q ? 3 : 1 : 0;
    }
    function K(f) {
      Ja(B, "load", K);
      K = M;
      na(va, f, !0);
      va = M;
    }
    function P(f, n) {
      E(function() {
        var H = aa(f);
        n(H);
        H.addListener(n);
        return !0;
      });
    }
    function na(f, n, H) {
      for (var q = 0; q < f.length; ++q) {
        !0 === f[q](n) && (f.splice(q, 1), --q);
      }
      H && (f.length = 0);
    }
    function ba(f, n, H) {
      c && !b.length && z(C);
      b.push(f, n, H);
    }
    function C() {
      var f = b, n;
      for (b = []; n = f.shift();) {
        na(n, f.shift(), f.shift());
      }
    }
    function N(f) {
      var n = f || event;
      f = e[n.type];
      var H = -1, q, D;
      v ? (n.preventDefault = function() {
        n.returnValue = !1;
      }, n.stopPropagation = function() {
        n.cancelBubble = !0;
      }) : m && (n.A = n.stopPropagation, n.stopPropagation = function() {
        D = !0;
      });
      for (; q = f[++H];) {
        q.l === this ? (this.g = q.j, this.g(n), this.g = x, this.g = M) : 7.2 > W && this === J && q.l === B && (B.g = q.j, B.g(n), delete B.g);
      }
      if (v) {
        return n.preventDefault = n.stopPropagation = M, n.returnValue;
      }
      m && (n.defaultPrevented && "click" === n.type && "A" === n.target.tagName && (F = !0), D && !F && n.A(), n.A = n.stopPropagation = M);
    }
    function y() {
      var f = 9 === a.offsetWidth;
      la !== f && (ba(tb, la = f), p("p_cssAvailability:" + la));
    }
    function G(f) {
      va || na(R, f);
    }
    var aa = B.matchMedia, a, b = [], c;
    va.push(function() {
      P = M;
      a = ra(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      pa(function() {
        c = !0;
        b.length && z(C);
      });
    });
    ya = function(f, n, H, q) {
      if (u) {
        f.addEventListener(n, H, q ? eb ? q : q.capture : !1);
      } else {
        var D = {l:f, j:H};
        q = e[n];
        var O = "on" + n, za, Ea;
        if (q) {
          for (za = q.length; Ea = q[--za];) {
            if (Ea.l === f && Ea.j === H) {
              return;
            }
          }
          e[n].push(D);
        } else {
          e[n] = q = [D], h || (n = f[O], "function" === typeof n && n !== N && q.unshift({l:f, j:n}));
        }
        h ? f.attachEvent(O, N) : f[O] = N;
      }
    };
    Ja = function(f, n, H, q) {
      if (u) {
        f.removeEventListener(n, H, q ? eb ? q : q.capture : !1);
      } else {
        q = e[n];
        n = "on" + n;
        var D, O, za;
        if (q) {
          for (D = q.length; O = q[--D];) {
            O.l === f && (O.j === H ? q.splice(D, 1) : za = !0);
          }
          za || (h ? f.detachEvent(n, N) : (f[n] = x, f[n] = null));
        }
      }
    };
    var e = {}, h = !1, m = 525.13 > Ha, u = !m && !Ra && B.addEventListener, F;
    m && ia.addEventListener("click", function(f) {
      if (F) {
        return F = !1, f.preventDefault(), !1;
      }
    });
    pa = function(f) {
      va ? va.push(f) : alert("Load event has already been dispatched!");
    };
    lb = function(f) {
      qa && qa.push(f);
    };
    var qa = [];
    if (419.3 >= Ha) {
      var T = function() {
        if (T) {
          var f = J.readyState;
          "loaded" === f || "complete" === f ? (T = M, K()) : z(T);
        }
      };
      z(T);
    } else {
      ya(B, "load", K);
    }
    v || 0.9 <= fa && 1.8 > fa ? ya(B, "unload", function(f) {
      na(qa, f, !0);
    }) : qa = M;
    E = function(f) {
      tb.push(f);
    };
    pa(function() {
      y();
      Na(y);
    });
    ta = function(f) {
      Sa && Sa.push(f);
    };
    var ca = 60 > fa || qb, da, Q, k;
    if (89 <= fa || 89 <= Aa || ab && 79 <= Gb || aa && (aa("(forced-colors:none)").matches || aa("(forced-colors:active)").matches)) {
      Qa = !0, P("(forced-colors:active)", function(f) {
        da = f.matches;
        Z = l();
        ba(Sa, Z);
        p("(forced-colors:active):" + Z);
      });
    } else if (10 <= v || Ga || ab && Gb) {
      Qa = !0, P("(-ms-high-contrast:black-on-white)", function(f) {
        da = Q = f.matches;
        Z !== l() && (Z = l(), ba(Sa, Z), p("(-ms-high-contrast:black-on-white):" + Z));
      }), P("(-ms-high-contrast:white-on-black)", function(f) {
        da = k = f.matches;
        Z !== l() && (Z = l(), ba(Sa, Z), p("(-ms-high-contrast:white-on-black):" + Z));
      }), P("(-ms-high-contrast:active)", function(f) {
        da = f.matches;
        Z !== l() && (Z = l(), ba(Sa, Z), p("(-ms-high-contrast:active):" + Z));
      });
    } else if (ab && (v || fa && 0 <= t.conpare(S, "1.8.1") || qb)) {
      var I = function() {
        function f(q, D) {
          if (D && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var O = q.split("(")[1].split(",");
          return V(O[0]) + V(O[1]) + V(O[2]);
        }
        var n = J.defaultView;
        var H = n ? n.getComputedStyle(a, null) : a.currentStyle;
        n = (H && H.color || "").split(" ").join("");
        H = (H && H.backgroundColor || "").split(" ").join("");
        n && (da = "#123456" !== n && "rgb(18,52,86)" !== n, Q = f(n) < f(H, !0), k = f(n) > f(H, !0), Z !== l() && (Z = l(), p("(forced-colors-fallback):" + Z), ba(Sa, Z, ca)));
      };
      E(function(f) {
        if (f) {
          return ma(a, "color", "#123456"), ma(a, "backgroundColor", "#123456"), ca ? (I(), Sa = M) : Na(I), I = M, !0;
        }
      });
    } else {
      Sa = l = M;
    }
    vb = function(f) {
      R.push(f);
    };
    var R = [], Ca = 0, U = 1 > fa || 1.2 <= fa && 1.8 > fa || 7.2 >= W;
    U ? Na(function() {
      var f = B.scrollY || Fa.scrollTop;
      Ca !== f && (Ca = f, G());
    }) : ya(B, "scroll", G);
    lb(function() {
      U || Ja(B, "scroll", G);
    });
  })();
  var bc = 9 > v || 525 <= Ha && 530 > Ha || 2 > Aa, Ub = 0, Vb, Wb, Xb, cc;
  (function() {
    function l(a) {
      for (var b = ba.length, c; b;) {
        if (c = ba[--b], c.F === a) {
          return c;
        }
      }
    }
    function K() {
      var a = J.styleSheets, b = [], c = 0, e = -1, h;
      if (a) {
        for (h = a.length; c < h; ++c) {
          if (2 > Aa || ab && 526 > Ha) {
            var m = na(a[c]);
            m.parentNode && (b[c] = m);
          } else {
            b[c] = na(a[c]);
          }
        }
      } else {
        for (a = jb("*"), h = a.length; c < h; ++c) {
          m = a[c];
          var u = A(m);
          if ("STYLE" === u || "LINK" === u && "text/css" === w(m, "type")) {
            b[++e] = m;
          }
        }
      }
      return b;
    }
    function P(a) {
      return a.styleSheet || a.sheet;
    }
    function na(a) {
      return a.owningElement || a.ownerNode;
    }
    Vb = function(a, b) {
      var c = K(), e = c.length;
      e = 0 <= b && b < e ? b : e;
      var h = c[e - 1];
      c = c[e];
      if (y || G) {
        var m = c ? kb(c, "style") : h ? gb(h, "style") : ra(hb, "style");
        G && Ab(m, "");
        var u = P(m);
        a && X(m, "media", a);
      } else if (C || N) {
        u = {D:a, C:e, G:!0};
      }
      if (u) {
        return ba.push({F:u, h:m, m:[]}), u;
      }
    };
    Wb = function(a) {
      a = l(a);
      var b = a.m, c = b.length, e;
      for (a.h && Da(a.h); e = b[--c];) {
        e.i && Da(e.i);
      }
      ba.splice(ba.indexOf(a), 1);
    };
    Xb = function(a, b, c, e) {
      var h = l(a), m = h.h;
      h = h.m;
      var u = "@import" === b, F = "@page" === b, qa = "@font-face" === b, T = h.length, ca = "", da;
      if (a.imports) {
        var Q = a.imports.length;
      } else {
        for (Q = 0; Q < T && "@import" === h[Q].u; ++Q) {
        }
      }
      if (u) {
        e = 0 <= e && e < Q ? e : Q;
        var k = b + ' "' + c + '"';
      } else {
        e = Q <= e && e < T ? e : T;
        for (k in c) {
          ca += ";" + k + ":" + c[k];
        }
        ca = ca.substr(1);
        k = b + "{" + ca + "}";
        6 <= v && qa && (e = T);
      }
      T = {u:b, v:c, o:e, s:e};
      if (9 > v) {
        Q = a.rules;
        var I = Q.length;
        if (qa) {
          b = J.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + k + "</style>", b = b.lastChild, (da = m.nextSibling) ? Ia(m).insertBefore(b, da) : Ia(m).appendChild(b), T.i = b;
        } else {
          u ? a.addImport(c, e) : 5.5 <= v && F || a.addRule(b, ca, e);
          T.s = e + (Q.length - I - 1);
          if (0 === Q.length - I) {
            return p("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + k), -1;
          }
          p("[CSSOM] rules.length \u306e\u5897\u5206" + (Q.length - I));
        }
      } else if (y || G) {
        (ab && Ha || 28 > Aa) && u ? T.i = gb(m, "link", {href:c, rel:"stylesheet", type:"text/css"}) : bc && qa ? (b = T.i = gb(m, "style", {type:"text/css", media:a.media}), b.innerText = k) : a.insertRule(k, e);
      }
      h.splice(e, 0, T);
      if (C || N) {
        m = l(a);
        da = m.m;
        b = m.h;
        c = a.C;
        u = K();
        a = u[c - 1];
        c = u[c];
        u = [];
        qa = F = -1;
        ca = "style";
        T = {type:"text/css", media:m.D};
        for (var R; Q = da[++F];) {
          if (k = Q.u, Q = Q.v, "@import" === k) {
            u[++qa] = k + ' "' + Q + '"';
          } else {
            u[++qa] = k + "{";
            k = "";
            for (R in Q) {
              k += ";" + R + ":" + Q[R];
            }
            u[++qa] = k.substr(1) + "}";
          }
        }
        u = u.join("");
        C && (u = "data:text/css;charset=utf-8;base64," + aa(u), T.rel = "stylesheet", T.href = u, ca = "link", u = M);
        b ? (m.h = gb(b, ca, T, u), Da(b)) : (b = c ? kb(c, ca, T, u) : a ? gb(a, ca, T, u) : ra(hb, ca, T, u), m.h = b);
      }
      R = e;
      a = h.length;
      for (m = R; m < a; ++m) {
        da = h[m], da.i || (b = da.s - da.o, da.o = R, da.s = R + b, R += 1 + b);
      }
      return e;
    };
    cc = function(a, b, c) {
      b = l(a).m[b];
      var e;
      if (b) {
        if ("@import" === b.u) {
          var h = b.v;
        } else if (y || G) {
          p("[CSSOM] CSSOM_getRawValueOfRule : " + e + " " + (9 > v ? a.rules : a.cssRules).length + " " + b.o);
          if (a = e = (9 > v ? a.rules : a.cssRules)[b.o]) {
            e = e.style;
            a = [];
            c = c.split("");
            h = 0;
            b = c.length;
            for (var m, u = !1; h < b; ++h) {
              m = c[h], "-" === m ? u = !0 : u ? (a[h] = m.toUpperCase(), u = !1) : a[h] = m;
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
    var ba = [], C = 1 > fa || 8 <= W && 9 > W, N = 7.2 <= W && 8 > W, y = !!v || !C && !N && function() {
      var a = ra(ia, "style"), b = !!P(a);
      b && (p("[CSSOM] CSSStyleSheet @insertRule : " + !!P(a).insertRule), p("[CSSOM] CSSStyleSheet @addRule : " + !!P(a).addRule), p("[CSSOM] CSSStyleSheet @cssRules : " + !!P(a).cssRules), p("[CSSOM] CSSStyleSheet @rules : " + !!P(a).rules), p("[CSSOM] CSSStyleSheet @cssText : " + ("" === P(a).cssText)));
      Da(a);
      return b;
    }();
    p("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + y);
    var G = !y && Ha && !C && !N && function() {
      var a = ra(ia, "style"), b;
      Ab(a, "");
      if (b = !!P(a)) {
        p("[CSSOM] CSSStyleSheet @insertRule : " + !!P(a).insertRule), p("[CSSOM] CSSStyleSheet @addRule : " + !!P(a).addRule), p("[CSSOM] CSSStyleSheet @cssRules : " + !!P(a).cssRules), p("[CSSOM] CSSStyleSheet @rules : " + !!P(a).rules), p("[CSSOM] CSSStyleSheet @cssText : " + ("" === P(a).cssText));
      }
      Da(a);
      return b;
    }();
    y || p("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + G);
    Ub = C || N ? 1 : y || G ? 2 : 0;
    p("[CSSOM] p_CSSOM_canuse : " + Ub);
    var aa;
    (function(a) {
      function b(e) {
        for (var h = c, m = "", u = 0, F; F = e.length;) {
          4 > F && (u = [0, 2, 1, 0][F]), F = e.charCodeAt(0) << 16 | (1 < F ? e.charCodeAt(1) : 0) << 8 | (2 < F ? e.charCodeAt(2) : 0), m += [h[F >>> 18], h[F >>> 12 & 63], 2 <= u ? "=" : h[F >>> 6 & 63], 1 <= u ? "=" : h[F & 63]].join(""), e = e.substr(3);
        }
        return m;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      aa = b;
    })(this);
  })();
  (function() {
    function l() {
      if (525 > Ha || fa && !pb || 2.2 > g(21) || g(25) || 10 > g(3) || xa(32) || xa(30) || xa(1) || xa(2) || xa(3)) {
        return !1;
      }
      if (bc) {
        return !0;
      }
      if (2 === Ub) {
        var C = Vb();
        var N = Xb(C, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var y = C.cssText || C.cssRules && C.cssRules[N] && C.cssRules[N].cssText || "";
        var G = y.match("src") && y.match("@font-face");
        p("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + y);
        p("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > v ? C.rules : C.cssRules).length);
        p("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + cc(C, N, "src"));
        Wb(C);
      }
      l = M;
      return ba = !!G;
    }
    tb.splice(0, 0, function() {
      if (la) {
        fb = 8 <= v || Ga || 9.5 <= W || pb || qb || 522 <= Ha || 3 <= $a || Fb || Tb ? 3 : 7.2 <= W ? 2 : 6 <= W || fa ? 1 : 0;
        if (!fb && !v && !Ra) {
          var C = ra(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          fb = 6 <= C.offsetWidth ? 2 : 0;
          Da(C);
        }
        p("p_cssGeneratedContentGrade:" + fb);
        return !0;
      }
    });
    ub = function(C) {
      function N(aa) {
        G = Nb(G);
        ka = aa;
        y.onload = y.onerror = x;
        z(C, aa);
      }
      if (ka !== M) {
        p("[dataURITest] already done : " + ka), z(C, ka);
      } else if (8 > v) {
        p("[dataURITest] trident < 8 : false"), z(C, !1);
      } else {
        p("[dataURITest] start!");
        var y = new Image(), G = z(function() {
          G && N(!1);
        });
        y.onerror = function() {
          p("[dataURITest] no DATA URI!");
          N(!1);
        };
        y.onload = function() {
          p("[dataURITest] DATA URI:" + (1 === y.width * y.height));
          N(1 === y.width * y.height);
        };
        y.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > v && pa(function() {
      var C = ra(Fa, "div");
      Bb(C, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Hb = 1 < C.offsetHeight;
      Bb(C, "");
      Da(C);
    });
    Ma = function(C, N) {
      function y() {
        if (aa || !a || G.complete) {
          p("[imageTest] timer -> img.complete. img.width=" + G.width);
          var b = !!G.width;
          sb = sb || b;
          z(C, b);
          G.onerror = G.onload = x;
          G = C = M;
        } else {
          --a, z(y);
        }
      }
      var G = new Image(), aa, a = 99;
      p("[imageTest] start.");
      G.onerror = function() {
        p("[imageTest] error!");
        aa = !0;
      };
      G.onload = function() {
        p("[imageTest] onload.");
        aa = !0;
      };
      G.src = N;
      z(y);
    };
    var K = 9 > v || 2 > Aa || 12 > W, P = "bad_" + (new Za() - 0) + "_", na = ["sans-serif", "serif"], ba;
    Ib = function(C, N, y, G, aa, a, b) {
      function c(U) {
        C(U);
        Ca && !U && Wb(Ca);
        C = k = I = R = Ca = M;
      }
      function e() {
        var U = '1.6em "' + N + '"';
        p("[webFontTest] testByNativeFontLoaderAPI start.");
        J.fonts.load(U).then(function(f) {
          p("[webFontTest] fonts.check() : " + J.fonts.check(U, "i") + ", fonts.length : " + f.length);
          (f = u(N)) ? z(c, f) : (p("[webFontTest] mesureWebFont() : false"), m(!0));
        }, function(f) {
          p("[webFontTest] fonts.load() rejected! " + f);
          ka !== M ? F(ka) : ub(F);
        });
      }
      function h(U) {
        return J.hidden || J.msHidden || J.mozHidden || J.webkitHidden ? (da = new Za() - 0, !1) : U < new Za() - da;
      }
      function m(U) {
        U && (p("[webFontTest] testWebFont start."), da = new Za() - 0);
        (U = u(N)) ? (p("[webFontTest] testWebFont mesurement success : " + U), c(U)) : h(ca) ? (p("[webFontTest] testWebFont timeout!"), Q || K ? c(0) : ka !== M ? F(ka) : ub(F)) : z(m);
      }
      function u(U) {
        var f = 0, n = -1, H = 0;
        if (!R) {
          var q = -1;
          var D;
          k = ra(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (R = {}; D = na[++q];) {
            ma(k, "fontFamily", D), R[D] = k.offsetWidth;
          }
        }
        for (5 > v ? k || (k = ra(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Fa.appendChild(k); q = na[++n];) {
          if (ma(k, "fontFamily", '"' + U + '",' + q), k.offsetWidth !== R[q]) {
            f = 1;
            break;
          }
        }
        !v && f && aa && (k.innerHTML = aa, U = k.offsetWidth, k.innerHTML = a, H = U === k.offsetWidth ? 1 : 0, k.innerHTML = "mmmmmmmmmmlli");
        Da(k);
        5 > v && (k = M);
        return f + H;
      }
      function F(U) {
        p("[webFontTest] onTestDataURIComplete : " + U);
        U ? (Q = !0, qa(!0)) : c(0);
      }
      function qa(U) {
        var f;
        if (y) {
          for (f in U && (da = new Za() - 0), y) {
            u(f) ? (p("[webFontTest] success! " + f), I = ra(Fa, "div", {"aria-hidden":"true", className:G, id:G}), Ca = Vb(), Xb(Ca, "@import", y[f]), z(T, !0)) : h(100) ? (p("[webFontTest] timeout! " + f), delete y[f], z(qa, !0)) : z(qa);
            return;
          }
        }
        c(0);
      }
      function T(U) {
        U && (p("[webFontTest] testImportedCssReady start!"), N = N.replace(P, ""), p("[webFontTest] targetWebFontName : " + N), da = new Za() - 0);
        1 < I.offsetWidth ? (p("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + I.offsetWidth), Da(I), ca = 100, z(m, !0)) : h(ca) ? 528 > Ha ? (p("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + I.offsetWidth), Da(I), ca = 100, z(m, !0)) : (p("[webFontTest] testImportedCssReady timeout!"), Da(I), c(0)) : z(T);
      }
      var ca = b || 5000, da, Q, k, I, R, Ca;
      N = P + N;
      p("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      l || ba ? ba || l() ? (p("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !J.fonts || 603 > Ha ? (p("[webFontTest] No native font loader."), m(!0)) : (p("[webFontTest] Use Native font loader."), e())) : (p("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), z(c, 0)) : (p("[webFontTest] webFontTest_maybeCanUseWebFont : false"), z(c, 0));
    };
  })();
  var La = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", La(960), ")", "(", La(234), La(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", La(9824), "\u2190", La(9829), La(9830), La(9827), La(956), "\u03a9", "\u2193", "\u2192", "%", La(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", La(9619)], dc = (9 === v || fa && 0 <= t.conpare(S, "1.8.1") || qb) && !Qa, mb = [], nb, Ua, Mb = 7.2 > W ? function() {
    nb = !nb;
    for (var l = -1, K; K = mb[++l];) {
      -1 !== K.className.indexOf("pbAlp") ? ma(K, "display", nb ? "" : "none") : (wa(K, nb ? "pbChrCS" : "pbChr00"), Ba(K, nb ? "pbChr00" : "pbChrCS"));
    }
  } : dc ? function() {
    nb = !nb;
    for (var l = -1, K; K = mb[++l];) {
      ma(K, "opacity", nb ? 1 : 0);
    }
  } : M;
  var Yb = ea.startBlinkingIfCursor = function(l) {
    Mb ? Ta(l, "pbChrCS") && (Ua || !W && !Z || (Ua = setInterval(Mb, 400)), -1 === mb.indexOf(l) && mb.push(l)) : mb = M;
  };
  ea.stopBlinkingIfCursor = function(l) {
    Mb && (l = mb.indexOf(l), 0 <= l && (mb.splice(l, 1), !mb.length && Ua && (clearInterval(Ua), Ua = 0)));
  };
  dc && ta(function(l) {
    l ? Ua || (Ua = setInterval(Mb, 400)) : Ua && (clearInterval(Ua), Ua = 0);
  });
  Mb && lb(function() {
    Ua && clearInterval(Ua);
  });
  Qa || ta(function(l) {
    l ? (X(ia, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (yb || 9 === v || 5.5 <= v && 9 > v && Hb) && wa(ia, "jsCanRotate")) : (Y(ia, "forced-colors"), Ba(ia, "jsCanRotate"));
  });
  (function() {
    function l(k) {
      F = k;
      p("[pbList] WebFont test result : " + !!k);
      k ? ba() : sb ? na(!0) : sb !== M ? ba() : (p("[pbList] Need imageTest " + qa), Ma(na, qa));
      p("window.offscreenBuffering = " + B.offscreenBuffering);
    }
    function K() {
      K = M;
      Ib(l, "PB-100", {"PB-100_canTTF":Va + "pbFont/ttf.css", "PB-100_canWOFF":Va + "pbFont/woff.css", "PB-100_canEOT":Va + "pbFont/eot.css", "PB-100_canSVG":Va + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function P(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function na(k) {
      k ? (p("[pbList] Fallback start!"), wa(Fa, "pbList-noWebFont")) : p("[pbList] image disabled!");
      ba();
    }
    function ba() {
      for (l = Ib = M; u.length;) {
        C(u.shift(), u.shift());
      }
      p("[pbList] complete.");
    }
    function C(k, I) {
      function R(q) {
        q = Oa(q);
        for (var D = -1, O; O = q[++D];) {
          switch(O.nodeType) {
            case 1:
              R(O);
              break;
            case 3:
              O.data && U(O.data) && f.push(O);
          }
        }
      }
      function Ca(q) {
        var D = q.children, O = 0, za = D.length;
        if (za) {
          for (; O < za; ++O) {
            Ca(D[O]);
          }
        } else {
          (D = q.innerText) && U(D) && f.push(q);
        }
      }
      function U(q) {
        return q.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], n;
      if (l) {
        -1 === u.indexOf(k) && (u.push(k, I), T && K && K());
      } else {
        var H = u.indexOf(k);
        0 <= H && u.splice(H, 2);
        for (5 > v ? Ca(k) : R(k); n = f.shift();) {
          H = 5 > v ? n.innerText : n.data, 2 !== F && (H = H.split(b).join(aa)), I ? 5 > v ? n.innerText = H : n.data = H : N(H.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(G).split("&amp;").join("&"), n);
        }
      }
    }
    function N(k, I) {
      function R(oa, ja) {
        for (var cb = ""; ja;) {
          ja & 1 && (cb += oa), ja >>= 1, oa += oa;
        }
        return cb;
      }
      function Ca(oa, ja, cb) {
        for (var Zb, fc = -1, $b, ac; Zb = ja[++fc];) {
          for (; 0 <= ($b = oa.indexOf(Zb));) {
            ac = Zb.length, oa = oa.substr(0, $b) + R(cb, ac) + oa.substr($b + ac);
          }
        }
        return oa;
      }
      function U(oa) {
        var ja = V(oa), cb = "" + ja;
        return 0 < ja && ja === ja | 0 && (ja = oa.indexOf(cb) + cb.length, ja <= oa.length) ? ja : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), n = 5 > v || 1 === I.nodeType, H = [], q = "", D, O = -1, za, Ea, ob;
      if (n) {
        if (da) {
          var Sb = I.style.visibility;
          ma(I, "visibility", "hidden");
        }
        I.innerHTML = "";
      }
      if (Q) {
        var Db = I;
        I = J.createDocumentFragment();
      }
      if (function(oa) {
        var ja = oa.indexOf("P");
        if (-1 === ja) {
          return !1;
        }
        ja = V(oa.charAt(ja + 1));
        return 0 <= ja && 9 >= ja;
      }(k)) {
        q = R("+", k.length);
      } else {
        0 <= (D = U(k)) && (q = R("|", D), O = D, --O);
        for (; D = k.charAt(++O);) {
          D === G || za ? (q += "~", D === G && (za = !za)) : q += D;
        }
        q = Ca(q, m, "^");
        q = Ca(q, e, "{");
        q = Ca(q, h, "}");
      }
      O = 0;
      for (za = k.length; O < za; ++O) {
        D = k.charAt(O);
        var L = D === c;
        var Wa = " " === D;
        D = L ? " " : D;
        var ha = q.charAt(O);
        var Xa = (Ea = db) && L;
        var db = "|" === ha;
        ha = f["+|~{}^".indexOf(ha) + 1];
        "\n" !== D ? (F || !sb ? (2 === F && k.substr(O, 2) === b && (D = b, ++O), ha = Wa && "str" === ha ? "pbList-strsp" : L ? "" : !Wa && ha ? "pbList-" + ha : "") : (L = wb.indexOf(D), L = -1 === L ? "" : wb.indexOf(D).toString(16).toUpperCase(), L = (L = 1 === L.length ? "0" + L : L) ? "pbChr" + L : "", ha = Wa && "str" === ha ? "pbList-strsp" : Wa || !L ? "" : ha ? (L ? L + " " : "") + "pbList-" + ha : L), L = M, Xa ? (D = 6 <= v && 8 > v ? " " : c, ha = "") : db && (fa && !pb || 9.5 > W) ? 
        (db && !Ea && (ob = 4 - (V(k.substr(O)) + "").length), 7.5 > W ? L = ca ? "position:relative;top:-4px;left:" + 12 * ob + "px" : {position:"relative", top:"-4px", left:12 * ob + "px"} : L = ca ? "position:relative;left:" + 12 * ob + "px" : {position:"relative", left:12 * ob + "px"}) : Wa && 7.5 > W && (ha = "pbList-strsp"), ca ? H.push("<font" + (ha ? ' class="' + ha + '"' : "") + (L ? ' style="' + L + '"' : "") + ">" + D + "</font>") : n || Q ? ra(I, "font", {"class":ha, style:L}, D) : kb(I, 
        "font", {"class":ha, style:L}, D)) : (Ea = db = !1, ca ? H.push(D) : n || Q ? Ab(I, D) : Rb(I, D));
      }
      if (n) {
        ca ? I.innerHTML = H.join("") : Q && Db.appendChild(I), da && ma(I, "visibility", Sb);
      } else {
        if (ca) {
          f = J.createElement("font");
          for (f.innerHTML = H.join(""); H = f.firstChild;) {
            I.parentNode.insertBefore(H, I);
          }
          Da(I);
        } else {
          Q ? Db.parentNode.replaceChild(I, Db) : Da(I);
        }
      }
    }
    E(function(k) {
      if (k) {
        k = Kb("pbChrCS");
        for (var I = 0, R = k.length; I < R; ++I) {
          Yb(k[I]);
        }
        return !0;
      }
    });
    var y = [];
    E(function(k) {
      function I(L) {
        var Wa = w(L, "pbTip"), ha = Wa.charAt(0), Xa = "_" === ha;
        Wa = Xa ? Wa.charAt(2) : ha;
        Xa = Xa ? "Btm" : "";
        ha = w(L, "title");
        if (!n) {
          Y(L, "pbTip");
          Y(L, "title");
          wa(L, "pbTipPos" + Wa.toUpperCase());
          var db = ra(L, "div", {className:"pbTip" + Xa, style:{width:ha.length + Ca + "em"}}, ha);
        }
        ra(db || L, "div");
      }
      function R(L, Wa) {
        var ha = w(L, "pbGhst"), Xa = L.className, db = Xa.split("pbCsr")[1] || "", oa = Xa.split("pbAlp")[1] || "";
        if ("CS" === ha) {
          var ja = "_";
        } else {
          ja = ha, 3 === ja.length && (ja = ja.substr(0, 2)), ja = wb[parseInt(ja, 16)] || "~";
        }
        var cb;
        db = db.split(" ")[0];
        if (oa = V(oa.split(" ")[0])) {
          U && (Xa = Xa.split("pbChr")[1].split(" ")[0], ma(L, "backgroundPosition", Eb(Xa, 2, ob) + "px " + -24 * (10 - oa) + "px")), !Wa && f && kb(L, "a").appendChild(L);
        }
        ha && (oa = 10 - oa, U && (cb = {backgroundPosition:Eb(ha, 2, ob) + "px " + -24 * (10 - oa) + "px"}), Y(L, "pbGhst"), D = kb(L, "b", {className:"pbChr" + ha + " pbCsr" + db + " pbAlp" + oa, style:cb}, ja), Yb(D));
        Yb(L);
      }
      if (k) {
        var Ca = 6 > v ? 2 : 0, U = 7.2 > W || 0.9 > fa || Ra, f = 1.1 === fa;
        k = jb("SAMP");
        var n = 8 === v, H = fb, q, D, O, za, Ea;
        Hb && wa(Fa, "pbLCD-AX");
        if (k.length) {
          for (O = -1; q = k[++O];) {
            if (Ta(Ia(q), "pbLCD")) {
              var ob = Ta(q, "PB-120") || Ta(q, "FX-795P");
              var Sb = Pa(q);
              for (q = Sb.length; Ea = Sb[--q];) {
                switch(A(Ea)) {
                  case "A":
                    (2 > H || n) && I(Ea);
                    if (2 > H) {
                      var Db = Pa(Ea);
                      for (za = Db.length; za;) {
                        R(Db[--za], !0);
                      }
                    }
                    Fb ? X(Ea, "href", "javascript:void(0)") : (ya(Ea, "click", P), y.push(Ea));
                    break;
                  case "B":
                    2 > H && R(Ea, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    lb(function() {
      for (var k; k = y.shift();) {
        Ja(k, "click", P);
      }
    });
    6 === v && (new Ka("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(J);
    var G = wb[7], aa = wb[30], a = wb[113], b = La(8337) + La(8331), c = La(160);
    La(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), m = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + aa + wb[31]).split(""), u = [], F, qa, T;
    E(function(k) {
      if (k) {
        qa = 1 > Va + fa ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        k = jb("*");
        for (var I = -1, R; R = k[++I];) {
          Ta(R, "pbList") ? C(R) : Ta(R, "pbFont") && C(R, !0);
        }
        u.length && (p("[pbList] " + u.length / 2 + " elements found. WebFont test start."), K());
        return !0;
      }
    });
    var ca = !1, da = 8 > W, Q = !ca && !da && !(6 > v) && J.createDocumentFragment && !!Fa.replaceChild;
    ea.prettify = C;
  })();
  var ec = J.scripts || jb("script");
  var Va = ec[ec.length - 1].src.split("/");
  --Va.length;
  (Va = Va.join("/")) && (Va += "/");
  p("[p_assetUrl] " + Va);
  pa(function() {
    var l;
    (l = ib("logger")) || alert("#logger not found!");
    l ? (p = function(K) {
      ra(l, "P", M, K);
    }, Cb = function(K) {
      ra(l, "P", {style:{color:"red"}}, K);
    }, B.onerror = function(K, P, na) {
      Cb(K + ", " + P + ", " + na);
      return !0;
    }) : B.console ? (p = console.log, Cb = console.error) : W ? (p = x, Cb = opera.postError) : p = Cb = x;
    for (; bb.length;) {
      p(bb.shift());
    }
    for (; zb.length;) {
      p(zb.shift());
    }
    bb = zb = M;
  });
  6.1 > $a && vb(Jb);
  lb(Ob);
  6.1 > $a && vb(Pb);
  lb(Qb);
  10 > v && (11 !== rb || 5 !== v) || (9 > W || 1 > fa || !Ra && !B.addEventListener ? J.write('<link href="' + Va + xb + '" rel="stylesheet"' + (8 > W ? "" : ' media="screen,handheld,projection,print"') + ">") : pa(function() {
    ra(hb, "link", {href:Va + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

