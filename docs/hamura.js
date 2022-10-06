PB100={};ua = [];
ua.conpare = function(Q, m) {
  var z = 0, r, C, fa = (Q + "").split("."), I = (m + "").split("."), Ia = fa.length;
  for (r = I.length; "0" === fa[Ia - 1];) {
    --Ia;
  }
  for (; "0" === I[r - 1];) {
    --r;
  }
  for (C = Ia < r ? Ia : r; z < C; ++z) {
    var Va = fa[z] - 0, h = I[z] - 0;
    if (Va !== h) {
      return Va > h ? 1 : -1;
    }
  }
  return Ia > r ? 1 : Ia === r ? 0 : -1;
};
(function(Q, m, z, r, C, fa, I, Ia) {
  function Va(t, aa, R) {
    R = fa(t.split(aa)[1]);
    return 0 <= R ? R : 0;
  }
  function h(t, aa) {
    return 0 <= t.indexOf(aa);
  }
  function $a(t) {
    return h(t, "Linux armv") || h(t, "Linux aarch") || h(t, "Linux i686") || h(t, "Linux x86_64");
  }
  function F(t, aa) {
    for (var R in aa) {
      if (R === t) {
        return !0;
      }
    }
  }
  function e(t, aa) {
    var R = "", oa = -1, la;
    if (t = t.split(aa)[1]) {
      for (; la = t.charCodeAt(++oa);) {
        if (48 <= la && 57 >= la || 46 === la) {
          R += t.charAt(oa);
        } else {
          break;
        }
      }
      for (oa = R.length; oa;) {
        if (46 === R.charCodeAt(--oa)) {
          R = R.substr(0, oa);
        } else {
          break;
        }
      }
    }
    return R;
  }
  function Aa(t) {
    for (var aa = arguments, R = 1, oa = aa[0], la; R < aa.length; ++R) {
      0 > Ca(oa, la = aa[R]) && (oa = la);
    }
    return oa;
  }
  function Eb(t) {
    return t === t + "" ? t : t === t - 0 ? "" + t : t.min && t.max ? t.min + "~" + t.max : t.min ? t.min + "~" : "~" + t.max;
  }
  var Ca = Q.conpare, a = r.userAgent, V = r.appVersion, jb = fa(V) || 0, H = r.platform, w = z.documentElement, Ta = w && w.style, Da = z.documentMode, O = C.width;
  C = C.height;
  var S = m.HTMLAudioElement, kb = m.performance, lb = m.Int8Array, ab = m.ontouchstart !== Ia, Wa = e(V, "Version/") || e(a, "Version/"), Fb = m.operamini, Ja = !Fb && m.opera, Ob = Ja && (Ja.version && "function" === typeof Ja.version ? Ja.version() : Aa(e(a, "Opera "), Wa, jb)), Gb = m.opr, eb = !Ja && (z.all || Da);
  Da = eb && (Da ? Da : m.XMLHttpRequest ? z.getElementsByTagName ? 7 : 4 : z.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4);
  w = !eb && w.msContentZoomFactor;
  var mb = !w && (m.chrome || m.chromium), fb = !eb && function() {
    for (var t in Ta) {
      if (0 === t.indexOf("Moz")) {
        return !0;
      }
    }
  }(), nb = h(a, "UCWEB"), ob = nb && e(a, " U2/"), tb = nb && e(a, "; wds "), Pa = e(a.split("_").join("."), "; iPh OS "), pa = e(a, "; Adr "), bb = h(V, "YJApp-ANDROID"), Ba = h(H, "Android") || fb && h(V, "Android") || bb;
  pa = e(H, "Android ") || e(V, "Android ") || e(a, "Android ") || pa;
  var Qa = h(H, "Linux"), ub = "MacIntel" === H && r.standalone !== Ia, vb = fb && e(a, "Goanna/"), Ka = !vb && fb && (e(a, "rv:") || e(a.substr(a.indexOf(") Gecko/") - 11), "; ")), ba = e(a, "Firefox/"), K = e(a, "Opera/"), wb = m.FNRBrowser, Xa = Va(a, "AppleWebKit/"), hb = e(a, "Chrome/"), Jb = e(V, "Iron/"), Hb = e(a, "OPR/"), xb = e(V, "KHTML/"), Kb = e(a.toLowerCase(), "iris");
  e(a, "FxiOS/");
  e(a, "CriOS/");
  e(a, "EdgiOS/");
  var pb = e(a, "Silk/"), cb = Va(a, "SamsungBrowser/"), yb = !cb && function() {
    for (var t = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    aa, R = t.length; aa = t[--R];) {
      if (h(a, aa)) {
        return 2 > fa(Wa) ? Wa : 0.9;
      }
    }
    t = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (R = t.length; aa = t[--R];) {
      if (h(a, aa)) {
        return Wa;
      }
    }
  }(), wa = mb && 534.3 >= Xa, gb = $a(H), Ya = gb && !h(a, H) && $a(a);
  ab = ab && (Xa || fb) && Ya || !pa && bb;
  bb = !!m.ReactNativeWebView;
  gb = gb && function() {
    for (var t in m) {
      if (0 === t.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ua = (Ya = m.puffinDevice) && Ya.clientInfo;
  Ua = (Ya = Ua && "iOS" === Ua.os && Ua.osVersion) && Ua.model;
  var La = !Da && z.registerElement, Lb = !Da && z.execCommand, qb = m.webkitCancelAnimationFrame, zb = Qa && La && "11.0.696.34" === hb, rb = m._firefoxTV_playbackStateObserverJava, Mb = Va(a, "diordnA ");
  if ("Nitro" === H) {
    var q = 1;
  } else if ("Nintendo DSi" === H) {
    q = 2;
    var n = K;
  } else if ("New Nintendo 3DS" === H || h(a, "iPhone OS 6_0") && 320 === O && 240 === C) {
    q = 4, n = e(a, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === H) {
    q = 3, n = e(a, "Version/"), Xa = 535;
  } else if ("Nintendo Swicth" === H) {
    q = 7, n = e(V, "NintendoBrowser/");
  } else if (m.wiiu) {
    q = 6;
    n = e(V, "NintendoBrowser/");
    var M = 15, D = e(V, "AppleWebKit/") || (qb ? 536 : 534);
    n || (n = qb ? 4 : 2, h(V, "Macintosh;") || h(V, "Windows NT") && h(V, "Touch"));
  } else if (Ja && Ja.wiiremote) {
    q = 5, n = e(a, "Wii; U; ; ");
  } else if (K = e(a, "PlayStation Vita ")) {
    q = 10, n = K;
  } else if (K = e(a, "(PlayStation Portable); ")) {
    q = 8;
    n = K;
    var Ab = 3.3;
  } else if (K = e(a, "PLAYSTATION 3; ") || e(a, "PLAYSTATION 3 ")) {
    q = 11, n = K, 0 > Ca("4.10", K) && (M = 26, D = K);
  } else if (h(a, "Xbox One")) {
    q = 15, n = 1;
  } else if (h(a, "Xbox")) {
    q = 14, n = 1;
  } else if (2 === jb && h(a, "Sony/COM2/")) {
    q = 17;
    n = 2;
    Ab = 3.4;
    var db = !0;
  } else if (0 === H.indexOf("iP") || Pa || Ya || ub) {
    if (Ya) {
      switch(n = Ya, Ua.substr(0, 4)) {
        case "iPho":
          var xa = 0;
          e(Ua, xa);
          var ma = !0;
          break;
        case "iPad":
          xa = 1;
          e(Ua, xa);
          var ia = !0;
          break;
        case "iPod":
          xa = 2;
          e(Ua, xa);
          var Bb = !0;
      }
    } else {
      Pa ? n = Pa : (n = e(V.split("_").join("."), "OS "), F("isSecureContext", m), F("enableWebGL", m), F("sameOrigin", m));
      if (!n || wb) {
        n = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : r.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : I.isNaN ? 9.2 : m.SharedWorker ? kb && kb.now ? 8.0 : 8.4 : Lb ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : lb ? 4.3 : S ? 4.1 : 3.2;
      }
      var qa = O === 1.5 * C || 1.5 * O === C;
      0 === H.indexOf("iPhone") ? (xa = 0, ma = !0) : 0 === H.indexOf("iPad") || ub ? (xa = 1, ia = !0) : 0 === H.indexOf("iPod") && (xa = 2, Bb = !0);
    }
    M = !Ya && (r.standalone || (ia || 12 > n) && F("webkitFullscreenEnabled", z) || 11 <= n && 13 > n && r.mediaDevices) ? 16 : 17;
    q = 24;
    D = n;
  } else if (h(a, "Kobo")) {
    q = 18, M = 21, D = 2.2, Ba = !0;
  } else if (h(a, "EBRD")) {
    q = 19, M = 21, D = 2.2;
  } else if (K = e(a, "CrOS x86_64 ") || e(a, "CrOS aarch64 ") || e(a, "CrOS i686 ") || e(a, "CrOS armv7l ")) {
    q = 28, n = K;
  } else if (m.onmoztimechange !== Ia) {
    q = 29, n = 18.1 > Ka ? "1.0.1" : 19 > Ka ? 1.1 : 27 > Ka ? 1.2 : 29 > Ka ? 1.3 : 31 > Ka ? 1.4 : 33 > Ka ? 2.0 : 35 > Ka ? 2.1 : 38 > Ka ? 2.2 : 45 > Ka ? 2.5 : 2.6, h(a, "Mobile") ? ma = !0 : h(a, "Tablet") ? ia = !0 : h(a, "TV");
  } else if (m.palmGetResource) {
    q = 30, n = e(a, "webOS/") || e(a, "WEBOS") || e(a, "hpwOS/"), h(a, "webOS.TV") || h(a, "/SmartTV") || (ma = !0);
  } else if (K = e(a, "Tizen ")) {
    q = 31, n = K, M = 24, D = cb, ma = !0;
  } else if (K = e(a, "Windows Phone ") || e(V, "Windows Phone OS ") || tb) {
    q = 23, n = K, ma = !0;
  } else if (w && "ARM" === H) {
    q = 23, n = 10, ma = !0;
  } else if (eb && h(V, "ZuneWP")) {
    q = 23, n = 11 === Da ? 8.1 : 10 === Da ? 8 : 9 === Da ? 7.5 : 7 === Da ? 7 : "?", ma = !0;
  } else if (h(a, "FOMA;")) {
    q = 16, ma = !0;
  } else if (h(a, "SoftBank;")) {
    q = 16, ma = !0;
  } else if (h(a, "KFMUWI")) {
    var Ma = !0;
    n = 6.3;
    var ra = ia = !0;
  } else if (h(a, "KFKAWI")) {
    Ma = !0, n = 6, ra = ia = !0;
  } else if (h(a, "KFSUWI") || h(a, "KFAUWI") || h(a, "KFDOWI")) {
    Ma = !0, n = 5, ra = ia = !0;
  } else if (h(a, "KFGIWI")) {
    Ma = !0, n = 5, ra = ia = !0;
  } else if (h(a, "KFARWI") || h(a, "KFSAWA") || h(a, "KFSAWI")) {
    Ma = !0, n = 5 <= fa(pa) ? 5 : 4, ra = ia = !0;
  } else if (h(a, "KFSOWI") || h(a, "KFTHWA") || h(a, "KFTHWI") || h(a, "KFAPWA") || h(a, "KFAPWI")) {
    Ma = !0, n = 3, ra = ia = !0;
  } else if (h(a, "KFOT") || h(a, "KFTT") || h(a, "KFJWA") || h(a, "KFJWI")) {
    Ma = !0, n = 2, ra = ia = !0;
  } else if (h(a, "Kindle Fire")) {
    Ma = !0, n = 1, ra = ia = !0;
  } else if (K = e(a, "Kindle/")) {
    q = 20, n = K, M = 21, D = 2.2;
  } else if (rb) {
    Ma = !0, n = pa || Mb, ra = !0;
  } else if (h(a, "AmazonWebAppPlatform") || h(a, "; AFT")) {
    Ma = !0, n = pa, ra = !0;
  } else if (h(a, "MeeGo")) {
    q = 32;
  } else if (h(a, "Maemo")) {
    q = 33;
  } else if (0 === a.indexOf("Windows Mobile;") || Kb) {
    q = 22, db = !0;
  } else if ("WinCE" === H) {
    q = 21, db = !0;
  } else if (0 === H.indexOf("Win")) {
    q = "Win16" === H ? 35 : "Win32" === H ? 36 : "Win64" === H ? 37 : 0, n = e(a, "Windows NT ") || e(a, "Windows ");
  } else if (0 === H.indexOf("Mac")) {
    q = "Mac68K" === H ? 39 : "MacPowerPC" === H || "MacPPC" === H ? 38 : "MacIntel" === H ? 40 : 0;
    if (K = e(a.split("_").join("."), "Mac OS X ")) {
      n = K;
    }
    var ya = !0;
  } else if (h(a, "BlackBerry") || h(a, "BB10")) {
    q = 34, n = Wa, ma = !0;
  } else if (h(a, "SunOS") || h(a, "Sun Solaris")) {
    q = 42;
  } else if (h(a, "FreeBSD")) {
    q = 43;
  } else if (h(a, "OpenBSD")) {
    q = 44;
  } else if (h(a, "NetBSD")) {
    q = 45;
  } else if (Ba && fb) {
    h(a, "Android 4.4;") ? qa = {min:2.3} : 4 <= fa(pa) ? qa = pa : qa = {min:2.2}, n = qa;
  } else if (Ba && Ja) {
    pa ? qa = pa : qa = {min:1.6}, n = qa, h(a, "Tablet") ? ia = !0 : ma = !0;
  } else if (pa) {
    n = pa, Ba = !0;
  } else if (Qa && ab || bb || gb) {
    var ib = !0;
    cb ? qa = {min:4.4} : mb && !wa || Gb || Hb ? qa = {min:4} : (qa = pa = Ta.touchAction !== Ia ? {min:5} : La ? 4.4 : lb ? r.connection ? m.searchBoxJavaBridge_ || mb ? I.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Xa ? 3 : 533 <= Xa ? S ? 2.3 : 2.2 : 530 <= Xa ? 2.0 : 1.5, yb && (M = 24, D = yb));
    n = qa;
    Ba = !0;
  } else {
    zb ? (n = {min:5}, ib = Ba = !0) : Qa && (h(a, "Ubuntu") ? q = 46 : (K = e(a, "Mint/")) ? (q = 47, n = K) : (K = e(a, "Fedora/")) ? (q = 48, n = K) : q = h(a, "Gentoo") ? 49 : 50);
  }
  Ma || Ba && ib && pb ? q = 27 : Ba && (q = q || 26);
  M || (ra = ra || Ba, Ja ? (M = ra || db || ma || ia ? 9 : 8, D = Ob) : eb ? (qa = Va(V, "Trident/") + 4, M = db || ma || ia || Bb ? 3 : ya && 5 <= Da ? 7 : 2, D = Da) : w ? (M = 23 === q ? 6 : 5, D = e(V, "Edge/")) : vb ? (M = 13, D = vb) : fb ? (M = ra ? 12 : 11, D = Ka || ba) : cb ? (M = 24, D = cb) : (K = Ab || e(a, "NetFront/")) ? (M = 18, D = K) : (K = e(a, "iCab")) ? (M = 19, D = K) : (K = Aa(e(a, "Opera Mini/"), e(a, "Opera Mobi/")) || Fb && Wa) ? (M = 10, D = K, q || (h(a, "iPhone") ? xa = 
  0 : h(a, "iPad") ? xa = 1 : h(a, "iPod") && (xa = 2), xa && (q = 24))) : nb ? (M = 25, D = ob) : xb ? (M = 14, D = jb) : Ba && wa ? (M = 21, D = pa) : mb || Gb || Hb ? (M = ra ? 22 : 20, D = hb || Jb) : Ba && La ? (M = 23, D = 5 > fa(pa) ? pa : hb) : Ba && (Wa || ib) ? (M = 21, D = pa) : hb ? (M = ra ? 22 : 20, D = hb) : Xa && (M = 15, D = Xa));
  q && (Q[2] = q, n && (Q[3] = Eb(n)));
  M && (Q[0] = M, D && (Q[1] = Eb(D)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var Q = this[this.length - 1];
  --this.length;
  return Q;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Q = arguments, m = 0, z = Q.length, r = this.length; m < z; ++m) {
    this[r + m] = Q[m];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Q = this[0], m = 1, z = this.length; m < z; ++m) {
    this[m - 1] = this[m];
  }
  --this.length;
  return Q;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Q = arguments, m = Q.length, z = this.length += m - 1, r = z; r >= m; --r) {
    this[r] = this[r - m];
  }
  for (r = 0; r < m; ++r) {
    this[r] = Q[r];
  }
  return z;
});
Array.prototype.splice || (Array.prototype.splice = function(Q, m) {
  var z = arguments, r = z.length - 2 - m, C = this.slice(Q, Q + m), fa;
  if (0 < r) {
    var I = this.length - 1;
    for (fa = Q + m; I >= fa; --I) {
      this[I + r] = this[I];
    }
  } else if (0 > r) {
    I = Q + m;
    for (fa = this.length; I < fa; ++I) {
      this[I + r] = this[I];
    }
    this.length += r;
  }
  I = 2;
  for (fa = z.length; I < fa; ++I) {
    this[I - 2 + Q] = z[I];
  }
  return C;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Q, m) {
  var z = this.length >>> 0;
  if (0 === z) {
    return -1;
  }
  if (m) {
    var r = m || 0;
    r = -Infinity === r ? 0 : (0 > r ? -r : r) | 0;
    if (z <= r) {
      return -1;
    }
  }
  for (r = 0 <= r ? r : 0 < z + r ? z + r : 0; r < z; ++r) {
    if (this[r] === Q) {
      return r;
    }
  }
  return -1;
});
(function(Q, m, z, r, C, fa, I, Ia, Va, h, $a, F) {
  function e(l) {
    if (m[0] === l) {
      return H === H + "" ? I(H) : H;
    }
  }
  function Aa(l) {
    var G = m[3];
    if (m[2] === l) {
      return G === G + "" ? I(G) : G;
    }
  }
  function Eb(l, G, ja) {
    l + "" === l && ("a" === l.charAt(2) && (ja = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > O ? 117 : 0.9 > S || 9 > w || 9 > O || Ta ? 1 : 132 : parseInt(l, 16));
    ja && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (G || 2));
  }
  var Ca = C.body, a = Ca.style, V, jb, H = m[1], w = e(2) || e(3), Ta = e(7), Da = e(5) || e(6), O = e(8) || e(9), S = e(11) || e(12), kb = S && 0 <= m.conpare(H, "1.9.1"), lb = e(13), ab = e(15), Wa = e(16) || e(17), Fb = e(10) || e(25), Ja = e(20) || e(22), Ob = Ja || e(23) || e(21) || e(24), Gb = Ja && I(fa.userAgent.split("Edg/")[1]);
  fa = I(fa.appVersion.split("Trident/")[1]) + 4;
  var eb = Aa(35) || Aa(36) || Aa(37), mb = !w && !Ta && (new Ia('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), fb = (Ta ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : 7.2 > O ? "opr70" : 8 > O ? "opr72" : 9.5 > O ? "opr" + (O | 0) : S && !kb ? 1.4 <= S ? "gck19" : 1.3 <= S ? "gck13" : 1 <= S ? "gck12" : 0.9 <= S ? "gck09" : 0.8 <= S ? "gck08" : "gck07" : "modern") + 
  ".css";
  Aa(1) || Aa(2) || Aa(3) || Aa(4) || Aa(8) || Aa(9) || Aa(10);
  var nb, ob, tb, Pa = 8 > w || 7.2 > O ? !1 : F, pa = a.transform !== F ? "transform" : a["-o-transform"] !== F ? "-o-transform" : a["-ms-transform"] !== F ? "-ms-transform" : a.MozTransform !== F ? "-moz-transform" : a["-webkit-transform"] !== F ? "-webkit-transform" : "", bb = [], Ba = [], Qa = [], ub, vb, Ka, ba, K, wb, Xa, hb, Jb, Hb;
  (function() {
    function l() {
      for (var g, p = 0, B = new $a() - 0; p < ha.length;) {
        B < ha[0].t ? ++p : (g = ha.splice(p, 1)[0], g.f(g.p));
      }
      c = ha.length ? Va(l, sa) : 0;
    }
    function G() {
      for (var g, p = 0; p < ca.length; ++p) {
        g = ca[p], g.f();
      }
    }
    function ja() {
      T && (T = clearInterval(T));
    }
    function ka() {
      c && (c = h(c));
    }
    wb = function(g) {
      ca.length || (T = setInterval(G, ta));
      ca.push({f:g, l:++va});
      return va;
    };
    Xa = function() {
      T && (ja(), T = setInterval(G, ta));
    };
    hb = ja;
    var ca = [], ta = 500, va = 0, T;
    if (5 > w || Ta) {
      z._wdb_onlooptimer = G, G = "_wdb_onlooptimer()";
    }
    ba = function(g, p, B) {
      ha.length || (c = Va(l, sa));
      ha.push({f:g, p:p, l:++d, t:new $a() - 0 + (sa < B ? B : sa)});
      return d;
    };
    K = function(g) {
      for (var p = ha.length, B; B = ha[--p];) {
        if (B.l === g) {
          ha.splice(p, 1);
          break;
        }
      }
      return 0;
    };
    Jb = function() {
      c && (ka(), c = Va(l, sa));
    };
    Hb = ka;
    var ha = [], sa = 16, d = 0, c;
    if (5 > w || Ta) {
      z._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var xb, Kb, pb, cb, yb, wa, gb, Ya, Ua, La, Lb, qb, zb, rb, Mb, q, n, M, D, Ab;
  (function() {
    function l(d, c, g) {
      var p = ["<", d], B = 1, J, P;
      if (c) {
        for (J in c) {
          var L = c[J];
          if (null != L && "" !== L) {
            if ("style" === J) {
              p[++B] = ' style="';
              for (P in L) {
                for (var Na = ++B, za, Ra = [], da = P.split(""), Ea = da.length; Ea;) {
                  za = da[--Ea], "A" <= za && "Z" >= za && (za = "-" + za.toLowerCase()), Ra[Ea] = za;
                }
                p[Na] = Ra.join("") + ":" + L[P] + ";";
              }
              p[++B] = '"';
            } else {
              "className" === J && (J = "class"), p[++B] = " " + J + '="' + L + '"';
            }
          }
        }
      }
      p[++B] = ">";
      null != g && (T && "font" !== d ? p[++B] = "<FONT>" + g + "</FONT>" : p[++B] = g);
      p[++B] = "</" + d + ">";
      return p.join("");
    }
    function G(d) {
      d = "*" === d && 6 > w ? "*" !== d ? C.all.tags(d.toUpperCase()) : C.all : C.getElementsByTagName(d);
      var c = [], g = 0, p;
      for (p = d.length; g < p; ++g) {
        c[g] = d[g];
      }
      return c;
    }
    function ja(d) {
      return T ? d.parentElement : d.parentNode;
    }
    function ka(d, c, g, p, B, J) {
      if (T) {
        var P = 0 === d ? "beforebegin" : 1 === d ? "afterend" : "beforeend";
        var L = cb(2 > d ? pb(c) : c);
        L = 2 > d ? L.indexOf(c) + d : L.length;
        c.insertAdjacentHTML(P, l(g, p, B));
        c = cb(c)[L];
        null != B && ("font" === g ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (ha) {
        c = C.createElement(l(g, p));
      } else {
        c = J ? C.createElementNS("http://www.w3.org/2000/svg", g) : C.createElement(g);
        if (p) {
          for (P in p) {
            if ((g = p[P]) || 0 === g) {
              switch(P) {
                case "class":
                case "className":
                  Mb(c, g);
                  break;
                case "style":
                  d = c.style;
                  for (L in g) {
                    d[L] = g[L];
                  }
                  break;
                default:
                  zb(c, P, g);
              }
            }
          }
        }
        sa || null != B && ca(c, B);
      }
      return c;
    }
    function ca(d, c) {
      if (T) {
        return ka(2, d, "font", F, c);
      }
      var g = C.createTextNode("" + c);
      d.appendChild(g);
      return g;
    }
    function ta(d, c) {
      9 > w ? d.className = c : d.setAttribute("class", c);
    }
    function va(d, c) {
      return -1 !== (" " + d.className + " ").indexOf(" " + c + " ");
    }
    var T = 5 > w;
    V = G("html")[0];
    jb = G("head")[0];
    xb = G;
    Kb = function(d) {
      var c = [], g = 0, p, B = -1;
      if (9 > w || !C.getElementsByClassName) {
        var J = 6 > w ? C.all : C.getElementsByTagName("*");
      } else {
        var P = !0;
        J = C.getElementsByClassName(d);
      }
      for (p = J.length; g < p; ++g) {
        var L = J[g];
        if (P || (T || 1 === L.nodeType) && va(L, d)) {
          c[++B] = L;
        }
      }
      return c;
    };
    pb = ja;
    cb = function(d) {
      d = T ? d.children : d.childNodes;
      for (var c = [], g = d.length; g;) {
        c[--g] = d[g];
      }
      return c;
    };
    yb = function(d) {
      var c = !(7.03 < O && 7.2 > O) && d.children;
      d = c ? c : d.childNodes;
      for (var g = [], p = d.length, B = -1, J; p;) {
        if (J = d[--p], c || 1 === J.nodeType) {
          T && "FONT" === J.tagName || (g[++B] = J);
        }
      }
      return g;
    };
    wa = function(d, c, g, p, B) {
      c = ka(2, d, c, g, p, B);
      T || (d.appendChild(c), sa && null != p && ca(c, p));
      return c;
    };
    gb = function(d, c, g, p, B) {
      c = ka(0, d, c, g, p, B);
      T || (ja(d).insertBefore(c, d), sa && null != p && ca(c, p));
      return c;
    };
    Ya = ca;
    Ua = function(d, c) {
      if (T) {
        return ka(0, d, "font", F, c);
      }
      var g = C.createTextNode("" + c);
      pb(d).insertBefore(g, d);
      return g;
    };
    La = function(d) {
      T ? d.outerHTML = "" : pb(d).removeChild(d);
    };
    var ha = 9 > w, sa = ha;
    Lb = function(d) {
      return d.tagName.toUpperCase();
    };
    qb = function(d, c) {
      return d.getAttribute(c) || "";
    };
    zb = function(d, c, g) {
      d.setAttribute(c, g);
    };
    rb = function(d, c) {
      d.removeAttribute(c);
    };
    Mb = ta;
    q = va;
    n = function(d, c) {
      var g;
      if (!va(d, c)) {
        if (g = d.className) {
          c = " " + c;
        }
        ta(d, g + c);
      }
    };
    M = function(d, c) {
      if (va(d, c)) {
        var g = d.className.split(" ");
        g.splice(g.indexOf(c), 1);
        ta(d, g.join(" "));
      }
    };
    D = function(d, c, g) {
      d.style[c] = g;
    };
    Ab = function(d, c) {
      var g = -1, p, B;
      if (5.5 > w) {
        if (c) {
          for (p = c.split(";"); B = p[++g];) {
            var J = B.split(":");
            d.style[J[0]] = B.substr(J[0].length + 1);
          }
        } else {
          d.removeAttribute("style");
        }
      } else {
        9 > O || 1 > S ? c ? d.setAttribute("style", c) : d.removeAttribute("style") : d.style.cssText = c;
      }
    };
  })();
  var db, xa, ma, ia, Bb, qa, Ma, ra, ya, ib;
  (function() {
    function l() {
      return da ? W ? 2 : Ea ? 3 : 1 : 0;
    }
    function G(b) {
      xa(z, "load", G);
      G = F;
      ka(bb, b, !0);
      ma = bb = F;
    }
    function ja(b, f) {
      qa(function() {
        var u = sa(b);
        f(u);
        u.addListener(f);
        return !0;
      });
    }
    function ka(b, f, u) {
      for (var k = 0; k < b.length; ++k) {
        !0 === b[k](f) && (b.splice(k, 1), --k);
      }
      u && (b.length = 0);
    }
    function ca(b, f, u) {
      g && !c.length && ba(ta);
      c.push(b, f, u);
    }
    function ta() {
      var b = c, f;
      for (c = []; f = b.shift();) {
        ka(f, b.shift(), b.shift());
      }
    }
    function va(b) {
      var f = b || event;
      b = p[f.type];
      var u = -1, k, A;
      w ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : J && (f.j = f.stopPropagation, f.stopPropagation = function() {
        A = !0;
      });
      for (; k = b[++u];) {
        k.i === this ? (this.g = k.h, this.g(f), this.g = r, this.g = F) : 7.2 > O && this === C && k.i === z && (z.g = k.h, z.g(f), delete z.g);
      }
      if (w) {
        return f.preventDefault = f.stopPropagation = F, f.returnValue;
      }
      J && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (L = !0), A && !L && f.j(), f.j = f.stopPropagation = F);
    }
    function T() {
      var b = 9 === d.offsetWidth;
      ra !== b && ca(Ba, ra = b);
    }
    function ha(b) {
      bb || ka(E, b);
    }
    var sa = z.matchMedia, d, c = [], g;
    bb.push(function() {
      ja = F;
      d = wa(Ca, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ma(function() {
        g = !0;
        c.length && ba(ta);
      });
    });
    db = function(b, f, u, k) {
      if (P) {
        b.addEventListener(f, u, k ? mb ? k : k.capture : !1);
      } else {
        var A = {i:b, h:u};
        k = p[f];
        var v = "on" + f, N, Fa;
        if (k) {
          for (N = k.length; Fa = k[--N];) {
            if (Fa.i === b && Fa.h === u) {
              return;
            }
          }
          p[f].push(A);
        } else {
          p[f] = k = [A], B || (f = b[v], "function" === typeof f && f !== va && k.unshift({i:b, h:f}));
        }
        B ? b.attachEvent(v, va) : b[v] = va;
      }
    };
    xa = function(b, f, u, k) {
      if (P) {
        b.removeEventListener(f, u, k ? mb ? k : k.capture : !1);
      } else {
        k = p[f];
        f = "on" + f;
        var A, v, N;
        if (k) {
          for (A = k.length; v = k[--A];) {
            v.i === b && (v.h === u ? k.splice(A, 1) : N = !0);
          }
          N || (B ? b.detachEvent(f, va) : (b[f] = r, b[f] = null));
        }
      }
    };
    var p = {}, B = !1, J = 525.13 > ab, P = !J && !Ta && z.addEventListener, L;
    J && V.addEventListener("click", function(b) {
      if (L) {
        return L = !1, b.preventDefault(), !1;
      }
    });
    ma = function(b) {
      bb.push(b);
    };
    ia = function(b) {
      Na && Na.push(b);
    };
    var Na = [];
    if (419.3 >= ab) {
      var za = function() {
        if (za) {
          var b = C.readyState;
          "loaded" === b || "complete" === b ? (za = F, G()) : ba(za);
        }
      };
      ba(za);
    } else {
      db(z, "load", G);
    }
    w || 0.9 <= S && 1.8 > S ? db(z, "unload", function(b) {
      ka(Na, b, !0);
    }) : Na = F;
    qa = function(b) {
      Ba.push(b);
    };
    ma(function() {
      T();
      wb(T);
    });
    Ma = function(b) {
      Qa && Qa.push(b);
    };
    var Ra = 60 > S || lb, da, Ea, W;
    if (89 <= S || 89 <= Ja || eb && 79 <= Gb || sa && (sa("(forced-colors:none)").matches || sa("(forced-colors:active)").matches)) {
      ib = !0, ja("(forced-colors:active)", function(b) {
        da = b.matches;
        ya = l();
        ca(Qa, ya);
      });
    } else if (10 <= w || Da || eb && Gb) {
      ib = !0, ja("(-ms-high-contrast:black-on-white)", function(b) {
        da = Ea = b.matches;
        ya !== l() && (ya = l(), ca(Qa, ya));
      }), ja("(-ms-high-contrast:white-on-black)", function(b) {
        da = W = b.matches;
        ya !== l() && (ya = l(), ca(Qa, ya));
      }), ja("(-ms-high-contrast:active)", function(b) {
        da = b.matches;
        ya !== l() && (ya = l(), ca(Qa, ya));
      });
    } else if (eb && (w || S && 0 <= m.conpare(H, "1.8.1") || lb)) {
      var x = function() {
        function b(k, A) {
          if (A && "transparent" === k) {
            return 382.5;
          }
          if ("#" === k.charAt(0)) {
            return parseInt("0x" + k.substr(1, 2), 16) + parseInt("0x" + k.substr(3, 2), 16) + parseInt("0x" + k.substr(5, 2), 16);
          }
          var v = k.split("(")[1].split(",");
          return I(v[0]) + I(v[1]) + I(v[2]);
        }
        var f = C.defaultView;
        var u = f ? f.getComputedStyle(d, null) : d.currentStyle;
        f = (u && u.color || "").split(" ").join("");
        u = (u && u.backgroundColor || "").split(" ").join("");
        f && (da = "#123456" !== f && "rgb(18,52,86)" !== f, Ea = b(f) < b(u, !0), W = b(f) > b(u, !0), ya !== l() && (ya = l(), ca(Qa, ya, Ra)));
      };
      qa(function(b) {
        if (b) {
          return D(d, "color", "#123456"), D(d, "backgroundColor", "#123456"), Ra ? (x(), Qa = F) : wb(x), x = F, !0;
        }
      });
    } else {
      Qa = l = F;
    }
    Bb = function(b) {
      E.push(b);
    };
    var E = [], X = 0, y = 1 > S || 1.2 <= S && 1.8 > S || 7.2 >= O;
    y ? wb(function() {
      var b = z.scrollY || Ca.scrollTop;
      X !== b && (X = b, ha());
    }) : db(z, "scroll", ha);
    ia(function() {
      y || xa(z, "scroll", ha);
    });
  })();
  (function() {
    function l(y) {
      B(y);
      E && !y && La(E);
      B = J = P = L = Na = za = Ea = W = x = X = E = F;
    }
    function G(y) {
      C.fonts.load('1.6em "' + y + '"').then(function() {
        var b;
        (b = ca(J)) ? ba(l, b) : ka(!0);
      }, function() {
        Pa !== F ? ta(Pa) : ub(ta);
      });
    }
    function ja(y) {
      return C.hidden || C.msHidden || C.mozHidden || C.webkitHidden ? (da = new $a() - 0, !1) : y < new $a() - da;
    }
    function ka(y) {
      var b;
      y && (da = new $a() - 0);
      (b = ca(J)) ? l(b) : ja(Ra) ? Ea || sa ? l(0) : Pa !== F ? ta(Pa) : ub(ta) : ba(ka);
    }
    function ca(y) {
      var b = 0, f = -1, u = 0;
      if (!X) {
        var k = -1;
        var A;
        W = wa(Ca, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, g);
        for (X = {}; A = p[++k];) {
          D(W, "fontFamily", A), X[A] = W.offsetWidth;
        }
      }
      for (5 > w ? W || (W = wa(Ca, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, g)) : Ca.appendChild(W); k = p[++f];) {
        if (D(W, "fontFamily", '"' + y + '",' + k), W.offsetWidth !== X[k]) {
          b = 1;
          break;
        }
      }
      !w && b && Na && (W.innerHTML = Na, y = W.offsetWidth, W.innerHTML = za, u = y === W.offsetWidth ? 1 : 0, W.innerHTML = g);
      La(W);
      5 > w && (W = F);
      return b + u;
    }
    function ta(y) {
      y ? (Ea = !0, va(!0)) : l(0);
    }
    function va(y) {
      var b;
      if (P) {
        for (b in y && (da = new $a() - 0), P) {
          ca(b) ? (x = wa(Ca, "div", {"aria-hidden":"true", className:L, id:L}), E = wa(jb, "link", {type:"text/css", rel:"stylesheet", href:P[b]}), ba(T, !0)) : ja(c) ? (delete P[b], ba(va, !0)) : ba(va);
          return;
        }
      }
      l(0);
    }
    function T(y) {
      y && (da = new $a() - 0);
      1 < x.offsetWidth ? (La(x), Ra = c, ba(ka, !0)) : ja(Ra) ? 528 > ab ? (La(x), Ra = c, ba(ka, !0)) : (La(x), l(0)) : ba(T);
    }
    Ba.splice(0, 0, function() {
      if (ra) {
        tb = 8 <= w || Da || 9.5 <= O || kb || lb || 522 <= ab || 3 <= Wa || Fb || Ob ? 3 : 7.2 <= O ? 2 : 6 <= O || S ? 1 : 0;
        if (!tb && !w && !Ta) {
          var y = wa(Ca, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          tb = 6 <= y.offsetWidth ? 2 : 0;
          La(y);
        }
        return !0;
      }
    });
    ub = !1 === Pa ? function(y) {
      ba(y, Pa);
    } : function(y) {
      function b(k) {
        u = K(u);
        Pa = k;
        f.onload = f.onerror = r;
        ba(y, k);
      }
      if (Pa !== F) {
        ba(y, Pa);
      } else if (8 > w) {
        ba(y, !1);
      } else {
        var f = new Image(), u = ba(function() {
          u && b(!1);
        });
        f.onerror = function() {
          b(!1);
        };
        f.onload = function() {
          b(1 === f.width * f.height);
        };
        f.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > w && ma(function() {
      var y = wa(Ca, "div");
      Ab(y, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      nb = 1 < y.offsetHeight;
      Ab(y, "");
      La(y);
    });
    vb = function(y, b) {
      function f() {
        if (k || !A || u.complete) {
          var v = !!u.width;
          ob = ob || v;
          ba(y, v);
          u.onerror = u.onload = r;
          u = y = F;
        } else {
          --A, ba(f);
        }
      }
      var u = new Image(), k, A = 99;
      u.onerror = function() {
        k = !0;
      };
      u.onload = function() {
        k = !0;
      };
      u.src = b;
      ba(f);
    };
    Ka = function(y, b, f, u, k, A, v) {
      B = y;
      J = b;
      P = f;
      L = u;
      Na = k;
      za = A;
      Ra = v || d;
      ha ? ba(l, 0) : !C.fonts || 603 > ab ? ka(!0) : G(J);
    };
    var ha = 525 > ab || 10 > O || S && !kb || 2.2 > e(21) || e(25) || 10 > e(3) || Aa(32) || Aa(30) || Aa(3), sa = 9 > w || 2 > Ja || 12 > O, d = 5000, c = 100, g = "mmmmmmmmmmlli", p = ["sans-serif", "serif"], B, J, P, L, Na, za, Ra, da, Ea, W, x, E, X;
  })();
  var t = String.fromCharCode, aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", t(960), ")", "(", t(234), t(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", t(9824), "\u2190", t(9829), t(9830), t(9827), t(956), "\u03a9", "\u2193", "\u2192", "%", t(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", t(9619)];
  a = (9 === w || S && 0 <= m.conpare(H, "1.8.1") || lb) && !ib;
  var R = [], oa, la, Ib = 7.2 > O ? function() {
    oa = !oa;
    for (var l = -1, G; G = R[++l];) {
      -1 !== G.className.indexOf("pbAlp") ? D(G, "display", oa ? "" : "none") : (n(G, oa ? "pbChrCS" : "pbChr00"), M(G, oa ? "pbChr00" : "pbChrCS"));
    }
  } : a ? function() {
    oa = !oa;
    for (var l = -1, G; G = R[++l];) {
      D(G, "opacity", oa ? 1 : 0);
    }
  } : F;
  var Pb = Q.startBlinkingIfCursor = function(l) {
    Ib ? q(l, "pbChrCS") && (la || !O && !ya || (la = setInterval(Ib, 400)), -1 === R.indexOf(l) && R.push(l)) : R = F;
  };
  Q.stopBlinkingIfCursor = function(l) {
    Ib && (l = R.indexOf(l), 0 <= l && (R.splice(l, 1), !R.length && la && (clearInterval(la), la = 0)));
  };
  a && Ma(function(l) {
    l ? la || (la = setInterval(Ib, 400)) : la && (clearInterval(la), la = 0);
  });
  Ib && ia(function() {
    la && clearInterval(la);
  });
  ib || Ma(function(l) {
    l ? (zb(V, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (pa || 9 === w || 5.5 <= w && 9 > w && nb) && n(V, "jsCanRotate")) : (rb(V, "forced-colors"), M(V, "jsCanRotate"));
  });
  (function() {
    function l(x) {
      (L = x) ? ca() : ob ? ka(!0) : ob !== F ? ca() : vb(ka, Na);
    }
    function G() {
      G = F;
      Ka(l, "PB-100", {"PB-100_canTTF":Za + "pbFont/ttf.css", "PB-100_canWOFF":Za + "pbFont/woff.css", "PB-100_canEOT":Za + "pbFont/eot.css", "PB-100_canSVG":Za + "pbFont/svg.css"}, "pbFont-testCssReady", c, "i", 5000);
    }
    function ja(x) {
      this.focus();
      x.preventDefault();
      x.stopPropagation();
    }
    function ka(x) {
      x && n(Ca, "pbList-noWebFont");
      ca();
    }
    function ca() {
      for (l = Ka = F; P.length;) {
        ta(P.shift(), P.shift());
      }
    }
    function ta(x, E) {
      function X(A) {
        A = cb(A);
        for (var v = -1, N; N = A[++v];) {
          switch(N.nodeType) {
            case 1:
              X(N);
              break;
            case 3:
              N.data && b(N.data) && f.push(N);
          }
        }
      }
      function y(A) {
        var v = A.children, N = 0, Fa = v.length;
        if (Fa) {
          for (; N < Fa; ++N) {
            y(v[N]);
          }
        } else {
          (v = A.innerText) && b(v) && f.push(A);
        }
      }
      function b(A) {
        return A.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], u;
      if (l) {
        -1 === P.indexOf(x) && (P.push(x, E), za && G && G());
      } else {
        var k = P.indexOf(x);
        0 <= k && P.splice(k, 2);
        for (5 > w ? y(x) : X(x); u = f.shift();) {
          k = 5 > w ? u.innerText : u.data, 2 !== L && (k = k.split(c).join(sa)), E ? 5 > w ? u.innerText = k : u.data = k : va(k.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(d).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(ha).split("&amp;").join("&"), u);
        }
      }
    }
    function va(x, E) {
      function X(na, U) {
        for (var Ga = ""; U;) {
          U & 1 && (Ga += na), U >>= 1, na += na;
        }
        return Ga;
      }
      function y(na, U, Ga) {
        for (var Cb, Sb = -1, Qb, Rb; Cb = U[++Sb];) {
          for (; 0 <= (Qb = na.indexOf(Cb));) {
            Rb = Cb.length, na = na.substr(0, Qb) + X(Ga, Rb) + na.substr(Qb + Rb);
          }
        }
        return na;
      }
      function b(na) {
        var U = I(na), Ga = "" + U;
        return 0 < U && U === U | 0 && (U = na.indexOf(Ga) + Ga.length, U <= na.length) ? U : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), u = 5 > w || 1 === E.nodeType, k = [], A = "", v, N = -1, Fa, sb, Oa;
      if (u) {
        if (Ea) {
          var Nb = E.style.visibility;
          D(E, "visibility", "hidden");
        }
        E.innerHTML = "";
      }
      if (W) {
        var Db = E;
        E = C.createDocumentFragment();
      }
      if (function(na) {
        var U = na.indexOf("P");
        if (-1 === U) {
          return !1;
        }
        U = I(na.charAt(U + 1));
        return 0 <= U && 9 >= U;
      }(x)) {
        A = X("+", x.length);
      } else {
        0 <= (v = b(x)) && (A = X("|", v), N = v, --N);
        for (; v = x.charAt(++N);) {
          v === ha || Fa ? (A += "~", v === ha && (Fa = !Fa)) : A += v;
        }
        A = y(A, J, "^");
        A = y(A, p, "{");
        A = y(A, B, "}");
      }
      N = 0;
      for (Fa = x.length; N < Fa; ++N) {
        v = x.charAt(N);
        var Y = v === g;
        var ea = " " === v;
        v = Y ? " " : v;
        var Z = A.charAt(N);
        var Sa = (sb = Ha) && Y;
        var Ha = "|" === Z;
        Z = f["+|~{}^".indexOf(Z) + 1];
        "\n" !== v ? (L || !ob ? (2 === L && x.substr(N, 2) === c && (v = c, ++N), Z = ea && "str" === Z ? "pbList-strsp" : Y ? "" : !ea && Z ? "pbList-" + Z : "") : (Y = aa.indexOf(v), Y = -1 === Y ? "" : aa.indexOf(v).toString(16).toUpperCase(), Y = (Y = 1 === Y.length ? "0" + Y : Y) ? "pbChr" + Y : "", Z = ea && "str" === Z ? "pbList-strsp" : ea || !Y ? "" : Z ? (Y ? Y + " " : "") + "pbList-" + Z : Y), Y = F, Sa ? (v = 6 <= w && 8 > w ? " " : g, Z = "") : Ha && (S && !kb || 9.5 > O) ? (Ha && !sb && 
        (Oa = 4 - (I(x.substr(N)) + "").length), 7.5 > O ? Y = da ? "position:relative;top:-4px;left:" + 12 * Oa + "px" : {position:"relative", top:"-4px", left:12 * Oa + "px"} : Y = da ? "position:relative;left:" + 12 * Oa + "px" : {position:"relative", left:12 * Oa + "px"}) : ea && 7.5 > O && (Z = "pbList-strsp"), da ? k.push("<font" + (Z ? ' class="' + Z + '"' : "") + (Y ? ' style="' + Y + '"' : "") + ">" + v + "</font>") : u || W ? wa(E, "font", {"class":Z, style:Y}, v) : gb(E, "font", {"class":Z, 
        style:Y}, v)) : (sb = Ha = !1, da ? k.push(v) : u || W ? Ya(E, v) : Ua(E, v));
      }
      if (u) {
        da ? E.innerHTML = k.join("") : W && Db.appendChild(E), Ea && D(E, "visibility", Nb);
      } else {
        if (da) {
          f = C.createElement("font");
          for (f.innerHTML = k.join(""); k = f.firstChild;) {
            E.parentNode.insertBefore(k, E);
          }
          La(E);
        } else {
          W ? Db.parentNode.replaceChild(E, Db) : La(E);
        }
      }
    }
    qa(function(x) {
      if (x) {
        x = Kb("pbChrCS");
        for (var E = 0, X = x.length; E < X; ++E) {
          Pb(x[E]);
        }
        return !0;
      }
    });
    var T = [];
    qa(function(x) {
      function E(ea) {
        var Z = qb(ea, "pbTip");
        if (Z) {
          var Sa = Z.charAt(0);
          var Ha = "_" === Sa;
          Z = (Ha ? Z.charAt(2) : Sa).toUpperCase().charCodeAt(0) - 65;
          k ? wa(ea, "div", {style:{left:7 * Z + 3 + "px"}}) : (Sa = qb(ea, "title"), rb(ea, "pbTip"), rb(ea, "title"), Ha = wa(ea, "div", {className:"pbTip" + (Ha ? "Btm" : ""), style:{width:Sa.length + y + "em", left:7 * Z - 5 + "px"}}, Sa), wa(Ha, "div"));
        }
        u && 0 <= ea.className.indexOf("pbColor") && wa(ea, "u");
      }
      function X(ea, Z) {
        var Sa = qb(ea, "pbGhst"), Ha = ea.className, na = Ha.split("pbCsr")[1] || "", U = Ha.split("pbAlp")[1] || "";
        if ("CS" === Sa) {
          var Ga = "_";
        } else {
          Ga = Sa, 3 === Ga.length && (Ga = Ga.substr(0, 2)), Ga = aa[parseInt(Ga, 16)] || "~";
        }
        var Cb;
        na = na.split(" ")[0];
        if (U = I(U.split(" ")[0])) {
          b && (Ha = Ha.split("pbChr")[1].split(" ")[0], D(ea, "backgroundPosition", Eb(Ha, 2, Nb) + "px " + -24 * (10 - U) + "px")), !Z && f && gb(ea, "a").appendChild(ea);
        }
        Sa && (U = 10 - U, b && (Cb = {backgroundPosition:Eb(Sa, 2, Nb) + "px " + -24 * (10 - U) + "px"}), rb(ea, "pbGhst"), N = gb(ea, "b", {className:"pbChr" + Sa + " pbCsr" + na + " pbAlp" + U, style:Cb}, Ga), Pb(N));
        Pb(ea);
      }
      if (x) {
        var y = 6 > w ? 2 : 0, b = 7.2 > O || 0.9 > S || Ta, f = 1.1 === S, u = 1.4 > S;
        x = xb("SAMP");
        var k = 8 === w, A = tb, v, N, Fa, sb, Oa;
        nb && n(Ca, "pbLCD-AX");
        if (x.length) {
          for (Fa = -1; v = x[++Fa];) {
            if (q(pb(v), "pbLCD")) {
              var Nb = q(v, "PB-120") || q(v, "FX-795P");
              var Db = yb(v);
              for (v = Db.length; Oa = Db[--v];) {
                switch(Lb(Oa)) {
                  case "A":
                    (2 > A || k) && E(Oa);
                    if (2 > A) {
                      var Y = yb(Oa);
                      for (sb = Y.length; sb;) {
                        X(Y[--sb], !0);
                      }
                    }
                    Fb ? zb(Oa, "href", "javascript:void(0)") : (db(Oa, "click", ja), T.push(Oa));
                    break;
                  case "B":
                    2 > A && X(Oa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ia(function() {
      for (var x; x = T.shift();) {
        xa(x, "click", ja);
      }
    });
    6 === w && (new Ia("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(C);
    var ha = aa[7], sa = aa[30], d = aa[113], c = t(8337) + t(8331), g = t(160);
    t(8194);
    var p = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), B = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), J = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + sa + aa[31]).split(""), P = [], L, Na, za;
    if (0.9 <= S && 0 >= m.conpare(H, "0.9.1")) {
      n(V, "pbLCD-gecko09To091");
      var Ra = !0;
    }
    qa(function(x) {
      if (x) {
        Na = Za + "pbFont/x3mask" + (Ra ? ".gecko0.9.1.gif" : ".png");
        x = xb("*");
        for (var E = -1, X; X = x[++E];) {
          q(X, "pbList") ? ta(X) : q(X, "pbFont") && ta(X, !0);
        }
        P.length && G();
        return !0;
      }
    });
    var da = !1, Ea = 8 > O, W = !da && !Ea && !(6 > w) && C.createDocumentFragment && !!Ca.replaceChild;
    Q.prettify = ta;
  })();
  a = C.scripts || xb("script");
  var Za = a[a.length - 1].src.split("/");
  --Za.length;
  (Za = Za.join("/")) && (Za += "/");
  6.1 > Wa && Bb(Xa);
  ia(hb);
  6.1 > Wa && Bb(Jb);
  ia(Hb);
  10 > w && (11 !== fa || 5 !== w) || (9 > O || 1 > S || !Ta && !z.addEventListener ? C.write('<link href="' + Za + fb + '" rel="stylesheet"' + (8 > O ? "" : ' media="screen,handheld,projection,print"') + ">") : ma(function() {
    wa(jb, "link", {href:Za + "" + fb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

