PB100={};ua = [];
ua.conpare = function(aa, q) {
  var A = 0, v, E, ia = (aa + "").split("."), U = (q + "").split("."), Ha = ia.length;
  for (v = U.length; "0" === ia[Ha - 1];) {
    --Ha;
  }
  for (; "0" === U[v - 1];) {
    --v;
  }
  for (E = Ha < v ? Ha : v; A < E; ++A) {
    var Xa = ia[A] - 0, n = U[A] - 0;
    if (Xa !== n) {
      return Xa > n ? 1 : -1;
    }
  }
  return Ha > v ? 1 : Ha === v ? 0 : -1;
};
(function(aa, q, A, v, E, ia, U, Ha) {
  function Xa(D, la, ca) {
    ca = ia(D.split(la)[1]);
    return 0 <= ca ? ca : 0;
  }
  function n(D, la) {
    return 0 <= D.indexOf(la);
  }
  function cb(D) {
    return n(D, "Linux armv") || n(D, "Linux aarch") || n(D, "Linux i686") || n(D, "Linux x86_64");
  }
  function ra(D, la) {
    for (var ca in la) {
      if (ca === D) {
        return !0;
      }
    }
  }
  function t(D, la) {
    var ca = "", Ia = -1, Na;
    if (D = D.split(la)[1]) {
      for (; Na = D.charCodeAt(++Ia);) {
        if (48 <= Na && 57 >= Na || 46 === Na) {
          ca += D.charAt(Ia);
        } else {
          break;
        }
      }
      for (Ia = ca.length; Ia;) {
        if (46 === ca.charCodeAt(--Ia)) {
          ca = ca.substr(0, Ia);
        } else {
          break;
        }
      }
    }
    return ca;
  }
  function da(D) {
    for (var la = arguments, ca = 1, Ia = la[0], Na; ca < la.length; ++ca) {
      0 > xb(Ia, Na = la[ca]) && (Ia = Na);
    }
    return Ia;
  }
  function sa(D) {
    return D === D + "" ? D : D === D - 0 ? "" + D : D.min && D.max ? D.min + "~" + D.max : D.min ? D.min + "~" : "~" + D.max;
  }
  var xb = aa.conpare, d = v.userAgent, M = v.appVersion, Ra = ia(M) || 0, Q = v.platform, Sa = A.documentElement, eb = Sa && Sa.style, p = A.documentMode, Ya = E.width;
  E = E.height;
  var Fb = q.HTMLAudioElement, V = q.performance, ka = q.Int8Array, pb = q.ontouchstart !== Ha, Ta = t(M, "Version/") || t(d, "Version/"), Ja = q.operamini, Za = !Ja && q.opera, Nb = Za && (Za.version && "function" === typeof Za.version ? Za.version() : da(t(d, "Opera "), Ta, Ra)), ib = q.opr, qb = !Za && (A.all || p);
  p = qb && (p ? p : q.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  Sa = !qb && Sa.msContentZoomFactor;
  var db = !Sa && q.chrome, fb = !qb && function() {
    for (var D in eb) {
      if (0 === D.indexOf("Moz")) {
        return !0;
      }
    }
  }(), yb = n(d, "UCWEB"), Gb = yb && t(d, " U2/"), rb = yb && t(d, "; wds "), Ka = t(d.split("_").join("."), "; iPh OS "), ma = t(d, "; Adr "), jb = n(M, "YJApp-ANDROID"), Ca = n(Q, "Android") || fb && n(M, "Android") || jb;
  ma = t(Q, "Android ") || t(M, "Android ") || t(d, "Android ") || ma;
  var zb = n(Q, "Linux"), Ab = "MacIntel" === Q && v.standalone !== Ha, ba = fb && t(d, "Goanna/"), Oa = !ba && fb && (t(d, "rv:") || t(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Bb = t(d, "Firefox/"), T = t(d, "Opera/"), Kb = q.FNRBrowser, Ua = Xa(d, "AppleWebKit/"), kb = t(d, "Chrome/"), lb = t(d, "OPR/"), Lb = t(M, "KHTML/"), $a = t(d.toLowerCase(), "iris");
  t(d, "FxiOS/");
  t(d, "CriOS/");
  t(d, "EdgiOS/");
  var Cb = t(d, "Silk/"), gb = Xa(d, "SamsungBrowser/"), ta = !gb && function() {
    for (var D = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    la, ca = D.length; la = D[--ca];) {
      if (n(d, la)) {
        return 2 > ia(Ta) ? Ta : 0.9;
      }
    }
    D = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ca = D.length; la = D[--ca];) {
      if (n(d, la)) {
        return Ta;
      }
    }
  }(), mb = db && 534.3 >= Ua, ab = cb(Q), Pa = ab && !n(d, Q) && cb(d);
  pb = pb && (Ua || fb) && Pa || !ma && jb;
  jb = !!q.ReactNativeWebView;
  ab = ab && function() {
    for (var D in q) {
      if (0 === D.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Va = (Pa = q.puffinDevice) && Pa.clientInfo;
  Va = (Pa = Va && "iOS" === Va.os && Va.osVersion) && Va.model;
  var va = !p && A.registerElement, Hb = !p && A.execCommand, sb = zb && va && "11.0.696.34" === kb, Db = q._firefoxTV_playbackStateObserverJava, Eb = Xa(d, "diordnA ");
  if ("Nitro" === Q) {
    var x = 1;
  } else if ("Nintendo DSi" === Q) {
    x = 2;
    var u = T;
  } else if ("New Nintendo 3DS" === Q || n(d, "iPhone OS 6_0") && 320 === Ya && 240 === E) {
    x = 4, u = t(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === Q) {
    x = 3, u = t(d, "Version/"), Ua = 535;
  } else if ("Nintendo Swicth" === Q) {
    x = 7, u = t(M, "NintendoBrowser/");
  } else if ("Nintendo WiiU" === Q) {
    x = 6, u = t(M, "NintendoBrowser/"), Ua = t(M, "AppleWebKit/");
  } else if ("Nintendo Wii" === Q) {
    x = 5, u = t(d, "Wii; U; ; ");
  } else if (T = t(d, "PlayStation Vita ")) {
    x = 10, u = T;
  } else if (T = t(d, "(PlayStation Portable); ")) {
    x = 8;
    u = T;
    var Wa = 3.3;
  } else if (T = t(d, "PLAYSTATION 3; ") || t(d, "PLAYSTATION 3 ")) {
    if (x = 11, u = T, 0 > xb("4.10", T)) {
      var R = 26, N = T;
    }
  } else if (n(d, "Xbox One")) {
    x = 15, u = 1;
  } else if (n(d, "Xbox")) {
    x = 14, u = 1;
  } else if (2 === Ra && n(d, "Sony/COM2/")) {
    x = 17;
    u = 2;
    Wa = 3.4;
    var nb = !0;
  } else if (0 === Q.indexOf("iP") || Ka || Pa || Ab) {
    if (Pa) {
      switch(u = Pa, Va.substr(0, 4)) {
        case "iPho":
          var wa = 0;
          t(Va, wa);
          var xa = !0;
          break;
        case "iPad":
          wa = 1;
          t(Va, wa);
          var ja = !0;
          break;
        case "iPod":
          wa = 2;
          t(Va, wa);
          var ob = !0;
      }
    } else {
      Ka ? u = Ka : (u = t(M.split("_").join("."), "OS "), ra("isSecureContext", q), ra("enableWebGL", q), ra("sameOrigin", q));
      if (!u || Kb) {
        u = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : v.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : U.isNaN ? 9.2 : q.SharedWorker ? V && V.now ? 8.0 : 8.4 : Hb ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : ka ? 4.3 : Fb ? 4.1 : 3.2;
      }
      var Da = Ya === 1.5 * E || 1.5 * Ya === E;
      0 === Q.indexOf("iPhone") ? (wa = 0, xa = !0) : 0 === Q.indexOf("iPad") || Ab ? (wa = 1, ja = !0) : 0 === Q.indexOf("iPod") && (wa = 2, ob = !0);
    }
    R = !Pa && (v.standalone || (ja || 12 > u) && ra("webkitFullscreenEnabled", A) || 11 <= u && 13 > u && v.mediaDevices) ? 16 : 17;
    x = 24;
    N = u;
  } else if (n(d, "Kobo")) {
    x = 18, R = 21, N = 2.2, Ca = !0;
  } else if (n(d, "EBRD")) {
    x = 19, R = 21, N = 2.2;
  } else if (T = t(d, "CrOS x86_64 ") || t(d, "CrOS aarch64 ") || t(d, "CrOS i686 ") || t(d, "CrOS armv7l ")) {
    x = 28, u = T;
  } else if (q.onmoztimechange !== Ha) {
    x = 29, u = 18.1 > Oa ? "1.0.1" : 19 > Oa ? 1.1 : 27 > Oa ? 1.2 : 29 > Oa ? 1.3 : 31 > Oa ? 1.4 : 33 > Oa ? 2.0 : 35 > Oa ? 2.1 : 38 > Oa ? 2.2 : 45 > Oa ? 2.5 : 2.6, n(d, "Mobile") ? xa = !0 : n(d, "Tablet") ? ja = !0 : n(d, "TV");
  } else if (q.palmGetResource) {
    x = 30, u = t(d, "webOS/") || t(d, "WEBOS") || t(d, "hpwOS/"), n(d, "webOS.TV") || n(d, "/SmartTV") || (xa = !0);
  } else if (T = t(d, "Tizen ")) {
    x = 31, u = T, R = 24, N = gb, xa = !0;
  } else if (T = t(d, "Windows Phone ") || t(M, "Windows Phone OS ") || rb) {
    x = 23, u = T, xa = !0;
  } else if (Sa && "ARM" === Q) {
    x = 23, u = 10, xa = !0;
  } else if (qb && n(M, "ZuneWP")) {
    x = 23, u = 11 === p ? 8.1 : 10 === p ? 8 : 9 === p ? 7.5 : 7 === p ? 7 : "?", xa = !0;
  } else if (n(d, "FOMA;")) {
    x = 16, xa = !0;
  } else if (n(d, "SoftBank;")) {
    x = 16, xa = !0;
  } else if (n(d, "KFMUWI")) {
    var Ea = !0;
    u = 6.3;
    var ya = ja = !0;
  } else if (n(d, "KFKAWI")) {
    Ea = !0, u = 6, ya = ja = !0;
  } else if (n(d, "KFSUWI") || n(d, "KFAUWI") || n(d, "KFDOWI")) {
    Ea = !0, u = 5, ya = ja = !0;
  } else if (n(d, "KFGIWI")) {
    Ea = !0, u = 5, ya = ja = !0;
  } else if (n(d, "KFARWI") || n(d, "KFSAWA") || n(d, "KFSAWI")) {
    Ea = !0, u = 5 <= ia(ma) ? 5 : 4, ya = ja = !0;
  } else if (n(d, "KFSOWI") || n(d, "KFTHWA") || n(d, "KFTHWI") || n(d, "KFAPWA") || n(d, "KFAPWI")) {
    Ea = !0, u = 3, ya = ja = !0;
  } else if (n(d, "KFOT") || n(d, "KFTT") || n(d, "KFJWA") || n(d, "KFJWI")) {
    Ea = !0, u = 2, ya = ja = !0;
  } else if (n(d, "Kindle Fire")) {
    Ea = !0, u = 1, ya = ja = !0;
  } else if (T = t(d, "Kindle/")) {
    x = 20, u = T, R = 21, N = 2.2;
  } else if (Db) {
    Ea = !0, u = ma || Eb, ya = !0;
  } else if (n(d, "AmazonWebAppPlatform") || n(d, "; AFT")) {
    Ea = !0, u = ma, ya = !0;
  } else if (n(d, "MeeGo")) {
    x = 32;
  } else if (n(d, "Maemo")) {
    x = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || $a) {
    x = 22, nb = !0;
  } else if ("WinCE" === Q) {
    x = 21, nb = !0;
  } else if (0 === Q.indexOf("Win")) {
    x = "Win16" === Q ? 35 : "Win32" === Q ? 36 : "Win64" === Q ? 37 : 0, u = t(d, "Windows NT ") || t(d, "Windows ");
  } else if (0 === Q.indexOf("Mac")) {
    x = "Mac68K" === Q ? 39 : "MacPowerPC" === Q || "MacPPC" === Q ? 38 : "MacIntel" === Q ? 40 : 0;
    if (T = t(d.split("_").join("."), "Mac OS X ")) {
      u = T;
    }
    var Ib = !0;
  } else if (n(d, "BlackBerry") || n(d, "BB10")) {
    x = 34, u = Ta, xa = !0;
  } else if (n(d, "SunOS") || n(d, "Sun Solaris")) {
    x = 42;
  } else if (n(d, "FreeBSD")) {
    x = 43;
  } else if (n(d, "OpenBSD")) {
    x = 44;
  } else if (n(d, "NetBSD")) {
    x = 45;
  } else if (Ca && fb) {
    n(d, "Android 4.4;") ? Da = {min:2.3} : 4 <= ia(ma) ? Da = ma : Da = {min:2.2}, u = Da;
  } else if (Ca && Za) {
    ma ? Da = ma : Da = {min:1.6}, u = Da, n(d, "Tablet") ? ja = !0 : xa = !0;
  } else if (ma) {
    u = ma, Ca = !0;
  } else if (zb && pb || jb || ab) {
    var tb = !0;
    gb ? Da = {min:4.4} : db && !mb || ib || lb ? Da = {min:4} : (Da = ma = eb.touchAction !== Ha ? {min:5} : va ? 4.4 : ka ? v.connection ? q.searchBoxJavaBridge_ || db ? U.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ua ? 3 : 533 <= Ua ? Fb ? 2.3 : 2.2 : 530 <= Ua ? 2.0 : 1.5, ta && (R = 24, N = ta));
    u = Da;
    Ca = !0;
  } else {
    sb ? (u = {min:5}, tb = Ca = !0) : zb && (n(d, "Ubuntu") ? x = 46 : (T = t(d, "Mint/")) ? (x = 47, u = T) : (T = t(d, "Fedora/")) ? (x = 48, u = T) : x = n(d, "Gentoo") ? 49 : 50);
  }
  Ea || Ca && tb && Cb ? x = 27 : Ca && (x = x || 26);
  R || (ya = ya || Ca, Za ? (R = ya || nb || xa || ja ? 9 : 8, N = Nb) : qb ? (Da = Xa(M, "Trident/") + 4, R = nb || xa || ja || ob ? 3 : Ib && 5 <= p ? 7 : 2, N = p) : Sa ? (R = 23 === x ? 6 : 5, N = t(M, "Edge/")) : ba ? (R = 13, N = ba) : fb ? (R = ya ? 12 : 11, N = Oa || Bb) : gb ? (R = 24, N = gb) : (T = Wa || t(d, "NetFront/")) ? (R = 18, N = T) : (T = t(d, "iCab")) ? (R = 19, N = T) : (T = da(t(d, "Opera Mini/"), t(d, "Opera Mobi/")) || Ja && Ta) ? (R = 10, N = T, x || (n(d, "iPhone") ? wa = 
  0 : n(d, "iPad") ? wa = 1 : n(d, "iPod") && (wa = 2), wa && (x = 24))) : yb ? (R = 25, N = Gb) : Lb ? (R = 14, N = Ra) : Ca && mb ? (R = 21, N = ma) : db || ib || lb ? (R = ya ? 22 : 20, N = kb) : Ca && va ? (R = 23, N = 5 > ia(ma) ? ma : kb) : Ca && (Ta || tb) ? (R = 21, N = ma) : kb ? (R = ya ? 22 : 20, N = kb) : Ua && (R = 15, N = Ua));
  x && (aa[2] = x, u && (aa[3] = sa(u)));
  R && (aa[0] = R, N && (aa[1] = sa(N)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var aa = this[this.length - 1];
  --this.length;
  return aa;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var aa = arguments, q = 0, A = aa.length, v = this.length; q < A; ++q) {
    this[v + q] = aa[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var aa = this[0], q = 1, A = this.length; q < A; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return aa;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var aa = arguments, q = aa.length, A = this.length += q - 1, v = A; v >= q; --v) {
    this[v] = this[v - q];
  }
  for (v = 0; v < q; ++v) {
    this[v] = aa[v];
  }
  return A;
});
Array.prototype.splice || (Array.prototype.splice = function(aa, q) {
  var A = arguments, v = A.length - 2 - q, E = this.slice(aa, aa + q), ia;
  if (0 < v) {
    var U = this.length - 1;
    for (ia = aa + q; U >= ia; --U) {
      this[U + v] = this[U];
    }
  } else if (0 > v) {
    U = aa + q;
    for (ia = this.length; U < ia; ++U) {
      this[U + v] = this[U];
    }
    this.length += v;
  }
  U = 2;
  for (ia = A.length; U < ia; ++U) {
    this[U - 2 + aa] = A[U];
  }
  return E;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(aa, q) {
  var A = this.length >>> 0;
  if (0 === A) {
    return -1;
  }
  if (q) {
    var v = q || 0;
    v = -Infinity === v ? 0 : (0 > v ? -v : v) | 0;
    if (A <= v) {
      return -1;
    }
  }
  for (v = 0 <= v ? v : 0 < A + v ? A + v : 0; v < A; ++v) {
    if (this[v] === aa) {
      return v;
    }
  }
  return -1;
});
(function(aa, q, A, v, E, ia, U, Ha, Xa, n, cb, ra) {
  function t() {
    Jb = !Jb;
    for (var w = -1, H; H = Mb[++w];) {
      -1 !== H.className.indexOf("pbAlp") ? N(H, "display", Jb ? "" : "none") : (Wa(H, Jb ? "pbChrCS" : "pbChr00"), R(H, Jb ? "pbChr00" : "pbChrCS"));
    }
  }
  function da(w) {
    if (q[0] === w) {
      return eb === eb + "" ? U(eb) : eb;
    }
  }
  function sa(w) {
    var H = q[3];
    if (q[2] === w) {
      return H === H + "" ? U(H) : H;
    }
  }
  function xb(w) {
    7.2 > V ? u(w, "pbChrCS") && (Mb.length || setInterval(t, 500), -1 === Mb.indexOf(w) && Mb.push(w)) : t = null;
  }
  function d(w, H, na) {
    w + "" === w && ("a" === w.charAt(2) && (na = !0, w = w.substr(0, 2)), w = "CS" === w ? 7.2 > V ? 117 : 9 > p || 9 > V || Ya ? 1 : 132 : parseInt(w, 16));
    na && (50 === w && (w = 128), 102 < w && 108 > w && (w += 24));
    return (w - 1) * -(6 * (H || 2));
  }
  var M = E.body, Ra = M.style, Q, Sa, eb = q[1], p = da(2) || da(3), Ya = da(7), Fb = da(5) || da(6), V = da(8) || da(9), ka = da(11) || da(12), pb = ka && 0 <= q.conpare(eb, "1.9.1"), Ta = da(13), Ja = da(15), Za = da(16) || da(17), Nb = da(10) || da(25), ib = da(20) || da(22) || da(23) || da(21) || da(24), qb = U(ia.userAgent.split("Edg/")[1]);
  ia = U(ia.appVersion.split("Trident/")[1]) + 4;
  var db = sa(35) || sa(36) || sa(37), fb = !p && !Ya && (new Ha('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), yb = (Ya ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 7.2 > V ? "opr70" : 8 > V ? "opr72" : 9.5 > V ? "opr" + (V | 0) : ka && !pb ? 1.3 <= ka ? "gck190" : 1 <= ka ? "gck121" : "gck097" : "modern") + ".css";
  sa(1) || sa(2) || sa(3) || sa(4) || sa(8) || sa(9) || sa(10);
  var Gb, rb, Ka, ma = Ra.transform !== ra ? "transform" : Ra["-o-transform"] !== ra ? "-o-transform" : Ra["-ms-transform"] !== ra ? "-ms-transform" : Ra["-moz-transform"] !== ra ? "-moz-transform" : Ra["-webkit-transform"] !== ra ? "-webkit-transform" : "", jb = [], Ca, zb, Ab, ba, Oa, Bb, T, Kb, Ua, kb;
  (function() {
    function w() {
      for (var c, f = 0, h = new cb() - 0; f < I.length;) {
        h < I[0].t ? ++f : (c = I.splice(f, 1)[0], c.f(c.p));
      }
      b = I.length ? Xa(w, g) : 0;
    }
    function H() {
      for (var c, f = 0; f < Y.length; ++f) {
        c = Y[f], c.f();
      }
    }
    function na() {
      z && (z = clearInterval(z));
    }
    function ha() {
      b && (b = n(b));
    }
    Bb = function(c) {
      Y.length || (z = setInterval(H, B));
      Y.push({f:c, v:++O});
      return O;
    };
    T = function() {
      z && (na(), z = setInterval(H, B));
    };
    Kb = na;
    var Y = [], B = 999, O = 0, z;
    if (5 > p || Ya) {
      A._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    ba = function(c, f, h) {
      I.length || (b = Xa(w, g));
      I.push({f:c, p:f, v:++a, t:new cb() - 0 + (g < h ? h : g)});
      return a;
    };
    Oa = function(c) {
      for (var f = I.length, h; h = I[--f];) {
        if (h.v === c) {
          I.splice(f, 1);
          break;
        }
      }
      return 0;
    };
    Ua = function() {
      b && (ha(), b = Xa(w, g));
    };
    kb = ha;
    var I = [], g = 64, a = 0, b;
    if (5 > p || Ya) {
      A._wdb_ontimer = w, w = "_wdb_ontimer()";
    }
  })();
  var lb, Lb, $a, Cb, gb, ta, mb, ab, Pa, Va, va, Hb, sb, Db, Eb, x, u, Wa, R, N, nb;
  (function() {
    function w(a, b, c) {
      var f = ["<", a], h = 1, m, F;
      if (b) {
        for (m in b) {
          var J = b[m];
          if (null != J && "" !== J) {
            if ("style" === m) {
              f[++h] = ' style="';
              for (F in J) {
                for (var P = ++h, ea, W = [], L = F.split(""), S = L.length; S;) {
                  ea = L[--S], "A" <= ea && "Z" >= ea && (ea = "-" + ea.toLowerCase()), W[S] = ea;
                }
                f[P] = W.join("") + ":" + J[F] + ";";
              }
              f[++h] = '"';
            } else {
              "className" === m && (m = "class"), f[++h] = " " + m + '="' + J + '"';
            }
          }
        }
      }
      f[++h] = ">";
      null != c && (z && "font" !== a ? f[++h] = "<FONT>" + c + "</FONT>" : f[++h] = c);
      f[++h] = "</" + a + ">";
      return f.join("");
    }
    function H(a) {
      a = "*" === a && 6 > p ? "*" !== a ? E.all.tags(a.toUpperCase()) : E.all : E.getElementsByTagName(a);
      var b = [], c = 0, f;
      for (f = a.length; c < f; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function na(a) {
      return z ? a.parentElement : a.parentNode;
    }
    function ha(a, b, c, f, h, m) {
      if (z) {
        var F = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var J = Cb(2 > a ? $a(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(F, w(c, f, h));
        return Cb(b)[J];
      }
      b = I ? E.createElement(w(c, f)) : m ? E.createElementNS("http://www.w3.org/2000/svg", c) : E.createElement(c);
      if (f && !I) {
        for (F in f) {
          if ((c = f[F]) || 0 === c) {
            switch(F) {
              case "class":
              case "className":
                x(b, c);
                break;
              case "style":
                a = b.style;
                for (J in c) {
                  a[J] = c[J];
                }
                break;
              default:
                Db(b, F, c);
            }
          }
        }
      }
      g || null != h && Y(b, h);
      return b;
    }
    function Y(a, b) {
      if (z) {
        return ha(2, a, "font", ra, b);
      }
      var c = E.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function B(a, b) {
      9 > p ? a.className = b : a.setAttribute("class", b);
    }
    function O(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var z = 5 > p;
    Q = H("html")[0];
    Sa = H("head")[0];
    lb = H;
    Lb = function(a) {
      var b = [], c = 0, f, h = -1;
      if (9 > p || !E.getElementsByClassName) {
        var m = 6 > p ? E.all : E.getElementsByTagName("*");
      } else {
        var F = !0;
        m = E.getElementsByClassName(a);
      }
      for (f = m.length; c < f; ++c) {
        var J = m[c];
        if (F || (z || 1 === J.nodeType) && O(J, a)) {
          b[++h] = J;
        }
      }
      return b;
    };
    $a = na;
    Cb = function(a) {
      a = z ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    gb = function(a) {
      var b = !(7.03 < V && 7.2 > V) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], f = a.length, h = -1, m; f;) {
        if (m = a[--f], b || 1 === m.nodeType) {
          z && "FONT" === m.tagName || (c[++h] = m);
        }
      }
      return c;
    };
    ta = function(a, b, c, f, h) {
      b = ha(2, a, b, c, f, h);
      z || (a.appendChild(b), g && null != f && Y(b, f));
      return b;
    };
    mb = function(a, b, c, f, h) {
      b = ha(0, a, b, c, f, h);
      z || (na(a).insertBefore(b, a), g && null != f && Y(b, f));
      return b;
    };
    ab = function(a, b, c, f, h) {
      b = ha(1, a, b, c, f, h);
      var m;
      z || ((m = a.nextSibling) ? $a(m).insertBefore(b, m) : $a(a).appendChild(b), g && null != f && Y(b, f));
      return b;
    };
    Pa = Y;
    Va = function(a, b) {
      if (z) {
        return ha(0, a, "font", ra, b);
      }
      var c = E.createTextNode("" + b);
      $a(a).insertBefore(c, a);
      return c;
    };
    va = function(a) {
      z ? a.outerHTML = "" : $a(a).removeChild(a);
    };
    var I = 9 > p, g = 9 > p;
    Hb = function(a) {
      return a.tagName.toUpperCase();
    };
    sb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Db = function(a, b, c) {
      a.setAttribute(b, c);
    };
    Eb = function(a, b) {
      a.removeAttribute(b);
    };
    x = B;
    u = O;
    Wa = function(a, b) {
      var c;
      if (!O(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        B(a, c + b);
      }
    };
    R = function(a, b) {
      if (O(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        B(a, c.join(" "));
      }
    };
    N = function(a, b, c) {
      a.style[b] = c;
    };
    nb = function(a, b) {
      var c = -1, f, h;
      if (9 > V || 5.5 > p) {
        if (b) {
          for (f = b.split(";"); h = f[++c];) {
            var m = h.split(":");
            a.style[m[0]] = h.substr(m[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        a.style.cssText = b;
      }
    };
  })();
  var wa, xa, ja, ob, Da, Ea, ya, Ib, tb = 0;
  (function() {
    function w(e, k) {
      for (var C = 0; C < e.length; ++C) {
        !0 === e[C](k) && (e.splice(C, 1), --C);
      }
    }
    function H(e, k) {
      c && !b.length && ba(na);
      b.push(e, k);
    }
    function na() {
      var e = b, k;
      for (b = []; k = e.shift();) {
        w(k, e.shift());
      }
    }
    function ha(e) {
      var k = e || event;
      e = f[k.type];
      var C = -1, l, G;
      p ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : m && (k.u = k.stopPropagation, k.stopPropagation = function() {
        G = !0;
      });
      for (; l = e[++C];) {
        l.l === this ? (this.g = l.j, this.g(k), this.g = v, this.g = null) : 7.2 > V && this === E && l.l === A && (A.g = l.j, A.g(k), delete A.g);
      }
      if (p) {
        return k.preventDefault = k.stopPropagation = null, k.returnValue;
      }
      m && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (J = !0), G && !J && k.u(), k.u = k.stopPropagation = null);
    }
    function Y() {
      if (P) {
        var e = E.readyState;
        "loaded" === e || "complete" === e ? P() : ba(Y);
      }
    }
    function B(e) {
      w(ea, e);
    }
    function O() {
      var e = 9 === a.offsetWidth;
      Ib !== e && H(W, Ib = e);
    }
    function z() {
      return tb = S ? y ? 2 : r ? 3 : 1 : 0;
    }
    function I() {
      P || w(Fa);
    }
    var g = A.matchMedia, a, b = [], c;
    jb.push(function() {
      a = ta(M, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ja(function() {
        c = !0;
        b.length && ba(na);
      });
    });
    wa = function(e, k, C, l) {
      if (F) {
        e.addEventListener(k, C, l ? fb ? l : l.capture : !1);
      } else {
        var G = {l:e, j:C};
        l = f[k];
        var oa = "on" + k, Aa, Ga;
        if (l) {
          for (Aa = l.length; Ga = l[--Aa];) {
            if (Ga.l === e && Ga.j === C) {
              return;
            }
          }
          f[k].push(G);
        } else {
          f[k] = l = [G], h || (k = e[oa], "function" === typeof k && k !== ha && l.unshift({l:e, j:k}));
        }
        h ? e.attachEvent(oa, ha) : e[oa] = ha;
      }
    };
    xa = function(e, k, C, l) {
      if (F) {
        e.removeEventListener(k, C, l ? fb ? l : l.capture : !1);
      } else {
        l = f[k];
        k = "on" + k;
        var G, oa, Aa;
        if (l) {
          for (G = l.length; oa = l[--G];) {
            oa.l === e && (oa.j === C ? l.splice(G, 1) : Aa = !0);
          }
          Aa || (h ? e.detachEvent(k, ha) : (e[k] = v, e[k] = null));
        }
      }
    };
    var f = {}, h = !1, m = 525.13 > Ja, F = !m && !Ya && A.addEventListener, J;
    m && Q.addEventListener("click", function(e) {
      if (J) {
        return J = !1, e.preventDefault(), !1;
      }
    });
    ja = function(e) {
      jb.push(e);
    };
    ob = function(e) {
      ea.push(e);
    };
    var P = function(e) {
      xa(A, "load", P);
      P = null;
      w(jb, e);
    };
    var ea = [];
    419.3 >= Ja ? ba(Y) : wa(A, "load", P);
    (p || 1.8 > ka) && wa(A, "unload", B);
    Ea = function(e) {
      W.push(e);
    };
    var W = [];
    ja(function() {
      O();
      Bb(O);
    });
    ya = function(e) {
      L.push(e);
    };
    var L = [], S, r, y;
    if (10 <= p || Fb || db && qb) {
      g("(-ms-high-contrast:black-on-white)").addListener(function(e) {
        S = r = e.matches;
        H(L, z());
      }), g("(-ms-high-contrast:white-on-black)").addListener(function(e) {
        S = y = e.matches;
        H(L, z());
      }), g("(-ms-high-contrast:active)").addListener(function(e) {
        S = e.matches;
        H(L, z());
      });
    } else if (10 > p || db && (44 <= ka || Ta)) {
      var Z = function() {
        function e(G) {
          return "#ffffff" === G || "rgb(255,255,255)" === G;
        }
        var k = E.defaultView, C = tb;
        var l = k ? k.getComputedStyle(a, null) : a.currentStyle;
        k = (l && l.color || "").split(" ").join("");
        l = (l && l.backgroundColor || "").split(" ").join("");
        if (k) {
          return S = "#123456" !== k && "rgb(18,52,86)" !== k, r = ("#000000" === k || "rgb(0,0,0)" === k) && e(l), y = e(k) && ("#000000" === l || "rgb(0,0,0)" === l), C !== z() && H(L, tb), !0;
        }
      };
      ja(function() {
        N(a, "color", "#123456");
        N(a, "backgroundColor", "#123456");
        60 > ka || Ta ? Z() : Z() && Bb(Z);
        Z = null;
      });
    }
    Da = function(e) {
      Fa.push(e);
    };
    var Fa = [], Ba = 0, X = 1 > ka || 1.2 <= ka && 1.8 > ka || 7.2 >= V;
    X ? Bb(function() {
      var e = A.scrollY || M.scrollTop;
      Ba !== e && (Ba = e, I());
    }) : wa(A, "scroll", I);
    ob(function() {
      X || xa(A, "scroll", I);
    });
  })();
  var D = 9 > p || 525 <= Ja && 530 > Ja || 2 > ib, la = 0, ca, Ia, Na;
  (function() {
    function w(g) {
      for (var a = ha.length, b; a;) {
        if (b = ha[--a], b.D === g) {
          return b;
        }
      }
    }
    function H() {
      var g = E.styleSheets, a = [], b = 0, c = -1, f;
      if (g) {
        for (f = g.length; b < f; ++b) {
          if (2 > ib || db && 526 > Ja) {
            var h = na(g[b]);
            h.parentNode && (a[b] = h);
          } else {
            a[b] = na(g[b]);
          }
        }
      } else {
        for (g = lb("*"), f = g.length; b < f; ++b) {
          h = g[b];
          var m = Hb(h);
          if ("STYLE" === m || "LINK" === m && "text/css" === sb(h, "type")) {
            a[++c] = h;
          }
        }
      }
      return a;
    }
    function na(g) {
      return g.owningElement || g.ownerNode;
    }
    ca = function(g, a) {
      var b = H(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var f = b[c - 1];
      b = b[c];
      if (O || z) {
        var h = b ? mb(b, "style") : f ? ab(f, "style") : ta(Sa, "style");
        z && Pa(h, "");
        var m = h.styleSheet || h.sheet;
        g && Db(h, "media", g);
      } else if (Y || B) {
        m = {C:g, B:c, G:!0};
      }
      if (m) {
        return ha.push({D:m, h:h, m:[]}), m;
      }
    };
    Ia = function(g) {
      g = w(g);
      var a = g.m, b = a.length, c;
      for (g.h && va(g.h); c = a[--b];) {
        c.i && va(c.i);
      }
      ha.splice(ha.indexOf(g), 1);
    };
    Na = function(g, a, b, c) {
      var f = w(g), h = f.h;
      f = f.m;
      var m = "@import" === a, F = "@page" === a, J = "@font-face" === a, P = f.length, ea = "", W;
      if (g.imports) {
        var L = g.imports.length;
      } else {
        for (L = 0; L < P && "@import" === f[L].A; ++L) {
        }
      }
      if (m) {
        c = 0 <= c && c < L ? c : L;
        var S = a + ' "' + b + '"';
      } else {
        c = L <= c && c < P ? c : P;
        for (S in b) {
          ea += ";" + S + ":" + b[S];
        }
        ea = ea.substr(1);
        S = a + "{" + ea + "}";
        6 <= p && J && (c = P);
      }
      P = {A:a, F:b, s:c, o:c};
      if (9 > p) {
        L = g.rules;
        var r = L.length;
        if (J) {
          a = E.createElement("div"), a.innerHTML = '_<style type="text/css"' + (g.media ? ' media="' + g.media + '"' : "") + ">" + S + "</style>", a = a.lastChild, (W = h.nextSibling) ? $a(h).insertBefore(a, W) : $a(h).appendChild(a), P.i = a;
        } else {
          if (m ? g.addImport(b, c) : 5.5 <= p && F || g.addRule(a, ea, c), P.o = c + (L.length - r - 1), 0 === L.length - r) {
            return -1;
          }
        }
      } else if (O || z) {
        (db && Ja || 28 > ib) && m ? P.i = ab(h, "link", {href:b, rel:"stylesheet", type:"text/css"}) : D && J ? (a = P.i = ab(h, "style", {type:"text/css", media:g.media}), a.innerText = S) : g.insertRule(S, c);
      }
      f.splice(c, 0, P);
      if (Y || B) {
        h = w(g);
        W = h.m;
        a = h.h;
        b = g.B;
        m = H();
        g = m[b - 1];
        b = m[b];
        m = [];
        J = F = -1;
        ea = "style";
        P = {type:"text/css", media:h.C};
        for (var y; L = W[++F];) {
          if (S = L.A, L = L.F, "@import" === S) {
            m[++J] = S + ' "' + L + '"';
          } else {
            m[++J] = S + "{";
            S = "";
            for (y in L) {
              S += ";" + y + ":" + L[y];
            }
            m[++J] = S.substr(1) + "}";
          }
        }
        m = m.join("");
        Y && (m = "data:text/css;charset=utf-8;base64," + I(m), P.rel = "stylesheet", P.href = m, ea = "link", m = ra);
        a ? (h.h = ab(a, ea, P, m), va(a)) : (a = b ? mb(b, ea, P, m) : g ? ab(g, ea, P, m) : ta(Sa, ea, P, m), h.h = a);
      }
      y = c;
      g = f.length;
      for (h = y; h < g; ++h) {
        W = f[h], W.i || (a = W.o - W.s, W.s = y, W.o = y + a, y += 1 + a);
      }
      return c;
    };
    var ha = [], Y = 1 > ka || 8 <= V && 9 > V, B = 7.2 <= V && 8 > V, O = !!p || !Y && !B && function() {
      var g = ta(Q, "style"), a = !(!g.styleSheet && !g.sheet);
      va(g);
      return a;
    }(), z = !O && Ja && !Y && !B && function() {
      var g = ta(Q, "style");
      Pa(g, "");
      var a = !(!g.styleSheet && !g.sheet);
      va(g);
      return a;
    }();
    la = Y || B ? 1 : O || z ? 2 : 0;
    var I;
    (function(g) {
      function a(c) {
        for (var f = b, h = "", m = 0, F; F = c.length;) {
          4 > F && (m = [0, 2, 1, 0][F]), F = c.charCodeAt(0) << 16 | (1 < F ? c.charCodeAt(1) : 0) << 8 | (2 < F ? c.charCodeAt(2) : 0), h += [f[F >>> 18], f[F >>> 12 & 63], 2 <= m ? "=" : f[F >>> 6 & 63], 1 <= m ? "=" : f[F & 63]].join(""), c = c.substr(3);
        }
        return h;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      g.btoa && (a = g.btoa);
      I = a;
    })(this);
  })();
  (function() {
    function w() {
      if (525 > Ja || ka && !pb || 2.2 > da(21) || da(25) || 10 > da(3) || sa(32) || sa(30) || sa(1) || sa(2) || sa(3)) {
        return !1;
      }
      if (D) {
        return !0;
      }
      if (2 === la) {
        var B = ca();
        var O = Na(B, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        O = B.cssText || B.cssRules && B.cssRules[O] && B.cssRules[O].cssText || "";
        O = O.match("src") && O.match("@font-face");
        Ia(B);
      }
      w = null;
      return Y = !!O;
    }
    ja(function() {
      if (Ib) {
        if (Ka === ra && (Ka = 8 <= p || Fb || pb || Ta || 7.2 <= V || 522 <= Ja || 3 <= Za || ib ? 2 : 6 <= V || ka ? 1 : 0, !Ka)) {
          var B = ta(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ka = 6 <= B.offsetWidth ? 2 : 0;
          va(B);
        }
      } else {
        Ka = ra;
      }
    });
    Ca = function(B) {
      function O(g) {
        I = Oa(I);
        H = g;
        z.onload = z.onerror = v;
        ba(B, g);
      }
      if (H !== ra) {
        ba(B, H);
      } else if (8 > p) {
        ba(B, !1);
      } else {
        var z = new Image(), I = ba(function() {
          I && O(!1);
        });
        z.onerror = function() {
          O(!1);
        };
        z.onload = function() {
          O(1 === z.width * z.height);
        };
        z.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var H;
    9 > p && ja(function() {
      var B = ta(M, "div");
      nb(B, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Gb = 1 < B.offsetHeight;
      nb(B, "");
      va(B);
    });
    zb = function(B, O) {
      function z() {
        if (g || !a || I.complete) {
          var b = !!I.width;
          rb = rb || b;
          ba(B, b);
          I.onerror = I.onload = v;
          I = B = null;
        } else {
          --a, ba(z);
        }
      }
      var I = new Image(), g, a = 99;
      I.onerror = function() {
        g = !0;
      };
      I.onload = function() {
        g = !0;
      };
      I.src = O;
      ba(z);
    };
    var na = 9 > p || 2 > ib || 12 > V, ha = ["sans-serif", "serif"], Y;
    Ab = function(B, O, z, I, g, a, b) {
      function c(X) {
        B(X);
        Ba && !X && Ia(Ba);
        B = r = y = Z = Ba = null;
      }
      function f() {
        E.fonts.load('1.6em "' + O + '"').then(function() {
          F(O) ? ba(c, Fa) : m(!0);
        }, function() {
          Ca(J);
        });
      }
      function h(X) {
        return E.hidden || E.msHidden || E.mozHidden || E.webkitHidden ? (L = new cb() - 0, !1) : X < new cb() - L;
      }
      function m(X) {
        X && (L = new cb() - 0);
        F(O) ? c(Fa) : h(W) ? S ? c(0) : na ? ba(c, 0) : Ca(J) : ba(m);
      }
      function F(X) {
        var e = 0, k = -1, C = 0;
        if (!Z) {
          var l = -1;
          var G;
          r = ta(M, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Z = {}; G = ha[++l];) {
            N(r, "fontFamily", G), Z[G] = r.offsetWidth;
          }
        }
        for (5 > p ? r || (r = ta(M, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : M.appendChild(r); l = ha[++k];) {
          if (N(r, "fontFamily", '"' + X + '",' + l), r.offsetWidth !== Z[l]) {
            e = 1;
            break;
          }
        }
        !p && e && g && (r.innerHTML = g, X = r.offsetWidth, r.innerHTML = a, C = X === r.offsetWidth ? 1 : 0, r.innerHTML = "mmmmmmmmmmlli");
        va(r);
        5 > p && (r = null);
        return Fa = e + C;
      }
      function J(X) {
        (S = X) ? P(!0) : c(0);
      }
      function P(X) {
        var e;
        X && (L = new cb() - 0);
        for (e in z) {
          F(e) ? (y = ta(M, "div", {"aria-hidden":"true", className:I, id:I}), Ba = ca(), Na(Ba, "@import", z[e]), ba(ea, !0)) : h(100) ? (delete z[e], ba(P, !0)) : ba(P);
          return;
        }
        c(0);
      }
      function ea(X) {
        X && (L = new cb() - 0);
        1 < y.offsetWidth ? (va(y), W = 100, ba(m, !0)) : h(W) ? 528 > Ja ? (va(y), W = 100, ba(m, !0)) : (va(y), c(0)) : ba(ea);
      }
      var W = b || 5000, L, S, r, y, Z, Fa, Ba;
      w || Y ? Y || w() ? !E.fonts || 603 > Ja ? m(!0) : f() : ba(c, 0) : ba(c, 0);
    };
  })();
  var La = String.fromCharCode, Mb = [], Jb, ub = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", La(960), ")", "(", La(234), La(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", La(9824), "\u2190", La(9829), La(9830), La(9827), La(956), "\u03a9", "\u2193", "\u2192", "%", La(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", La(9619)];
  (10 > p || db && (44 <= ka || Ta)) && ya(function(w) {
    R(M, "jsHcm");
    R(M, "jsHcmWob");
    R(M, "jsHcmBow");
    if (w) {
      switch((ma || 9 === p || 5.5 <= p && 9 > p && Gb) && Wa(M, "jsCanRotate"), w) {
        case 1:
          Wa(M, "jsHcm");
          break;
        case 2:
          Wa(M, "jsHcmWob");
          break;
        case 3:
          Wa(M, "jsHcmBow");
      }
    } else {
      R(M, "jsCanRotate");
    }
  });
  (function() {
    function w(r) {
      (J = r) ? Y() : rb ? ha(!0) : rb !== ra ? Y() : zb(ha, P);
    }
    function H() {
      H = null;
      Ab(w, "PB-100", {"PB-100_canTTF":bb + "pbFont/ttf.css", "PB-100_canWOFF":bb + "pbFont/woff.css", "PB-100_canEOT":bb + "pbFont/eot.css", "PB-100_canSVG":bb + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function na(r) {
      this.focus();
      r.preventDefault();
      r.stopPropagation();
    }
    function ha(r) {
      r && (Wa(M, "pbList-noWebFont"), la && (2 !== Ka || 9.5 > V ? Na(ca(), ".pbList font", {"background-image":"url(" + P + ")"}) : Na(ca(), ".pbList font:after", {content:"url(" + P + ")"})));
      Y();
    }
    function Y() {
      for (w = Ab = null; F.length;) {
        B(F.shift(), F.shift());
      }
    }
    function B(r, y) {
      function Z(C) {
        C = Cb(C);
        for (var l = -1, G; G = C[++l];) {
          switch(G.nodeType) {
            case 1:
              Z(G);
              break;
            case 3:
              G.data && Ba(G.data) && X.push(G);
          }
        }
      }
      function Fa(C) {
        var l = C.children, G = 0, oa = l.length;
        if (oa) {
          for (; G < oa; ++G) {
            Fa(l[G]);
          }
        } else {
          (l = C.innerText) && Ba(l) && X.push(C);
        }
      }
      function Ba(C) {
        return C.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var X = [], e;
      if (w) {
        -1 === F.indexOf(r) && (F.push(r, y), ea && H && H());
      } else {
        var k = F.indexOf(r);
        0 <= k && F.splice(k, 2);
        for (5 > p ? Fa(r) : Z(r); e = X.shift();) {
          k = 5 > p ? e.innerText : e.data, 2 !== J && (k = k.split(b).join(g)), y ? 5 > p ? e.innerText = k : e.data = k : O(k.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(I).split("&amp;").join("&"), e);
        }
      }
    }
    function O(r, y) {
      function Z(pa, qa) {
        for (var vb = ""; qa;) {
          qa & 1 && (vb += pa), qa >>= 1, pa += pa;
        }
        return vb;
      }
      function Fa(pa, qa, vb) {
        for (var Ob, Rb = -1, Pb, Qb; Ob = qa[++Rb];) {
          for (; 0 <= (Pb = pa.indexOf(Ob));) {
            Qb = Ob.length, pa = pa.substr(0, Pb) + Z(vb, Qb) + pa.substr(Pb + Qb);
          }
        }
        return pa;
      }
      function Ba(pa) {
        var qa = U(pa), vb = "" + qa;
        return 0 < qa && qa === qa | 0 && (qa = pa.indexOf(vb) + vb.length, qa <= pa.length) ? qa : 0;
      }
      var X = " area line str cmd fnc syb".split(" "), e = 5 > p || 1 === y.nodeType, k = [], C = "", l, G = -1, oa, Aa, Ga;
      if (e) {
        if (L) {
          var za = y.style.visibility;
          N(y, "visibility", "hidden");
        }
        y.innerHTML = "";
      }
      if (S) {
        var Ma = y;
        y = E.createDocumentFragment();
      }
      if (function(pa) {
        var qa = pa.indexOf("P");
        if (-1 === qa) {
          return !1;
        }
        qa = U(pa.charAt(qa + 1));
        return 0 <= qa && 9 >= qa;
      }(r)) {
        C = Z("+", r.length);
      } else {
        0 <= (l = Ba(r)) && (C = Z("|", l), G = l, --G);
        for (; l = r.charAt(++G);) {
          l === I || oa ? (C += "~", l === I && (oa = !oa)) : C += l;
        }
        C = Fa(C, m, "^");
        C = Fa(C, f, "{");
        C = Fa(C, h, "}");
      }
      G = 0;
      for (oa = r.length; G < oa; ++G) {
        l = r.charAt(G);
        var K = l === c;
        var Qa = " " === l;
        l = K ? " " : l;
        var fa = C.charAt(G);
        var hb = (Aa = wb) && K;
        var wb = "|" === fa;
        fa = X["+|~{}^".indexOf(fa) + 1];
        "\n" !== l ? (J || !rb ? (2 === J && r.substr(G, 2) === b && (l = b, ++G), fa = Qa && "str" === fa ? "pbList-strsp" : K ? "" : !Qa && fa ? "pbList-" + fa : "") : (K = ub.indexOf(l), K = -1 === K ? "" : ub.indexOf(l).toString(16).toUpperCase(), K = (K = 1 === K.length ? "0" + K : K) ? "pbChr" + K : "", fa = Qa && "str" === fa ? "pbList-strsp" : Qa || !K ? "" : fa ? (K ? K + " " : "") + "pbList-" + fa : K), K = ra, hb ? (l = 6 <= p && 8 > p ? " " : c, fa = "") : wb && (1.9 > ka || 9.5 > V) ? 
        (wb && !Aa && (Ga = 4 - (U(r.substr(G)) + "").length), 7.5 > V ? K = W ? "position:relative;top:-4px;left:" + 12 * Ga + "px" : {position:"relative", top:"-4px", left:12 * Ga + "px"} : 1.3 <= ka ? (K = W ? "position:absolute;left:" + 12 * Ga + "px" : {position:"absolute", left:12 * Ga + "px"}, ++Ga) : K = W ? "position:relative;left:" + 12 * Ga + "px" : {position:"relative", left:12 * Ga + "px"}) : Qa && 7.5 > V && (fa = "pbList-strsp"), W ? k.push("<font" + (fa ? ' class="' + fa + '"' : "") + 
        (K ? ' style="' + K + '"' : "") + ">" + l + "</font>") : e || S ? ta(y, "font", {"class":fa, style:K}, l) : mb(y, "font", {"class":fa, style:K}, l)) : (Aa = wb = !1, W ? k.push(l) : e || S ? Pa(y, l) : Va(y, l));
      }
      if (e) {
        W ? y.innerHTML = k.join("") : S && Ma.appendChild(y), L && N(y, "visibility", za);
      } else {
        if (W) {
          X = E.createElement("font");
          for (X.innerHTML = k.join(""); k = X.firstChild;) {
            y.parentNode.insertBefore(k, y);
          }
          va(y);
        } else {
          S ? Ma.parentNode.replaceChild(y, Ma) : va(y);
        }
      }
    }
    Ea(function(r) {
      if (r) {
        r = Lb("pbChrCS");
        for (var y = 0, Z = r.length; y < Z; ++y) {
          xb(r[y]);
        }
        return !0;
      }
    });
    var z = [];
    Ea(function(r) {
      function y(za) {
        var Ma = sb(za, "pbTip"), K = Ma.charAt(0), Qa = "_" === K;
        Ma = Qa ? Ma.charAt(2) : K;
        K = Qa ? "Btm" : "";
        var fa = sb(za, "title");
        Ba || (Eb(za, "pbTip"), Eb(za, "title"), Wa(za, "pbTipPos" + Ma.toUpperCase()), ta(za, "div", {className:"pbTip" + K, style:{width:fa.length + Fa + "em"}}, fa));
        ta(za, "div", {className:"pbTail" + K});
        X && Qa && (za.focus(), za.blur());
      }
      function Z(za) {
        if (2 > Ka) {
          var Ma = sb(za, "pbGhst"), K = za.className, Qa = K.split("pbCsr")[1] || "", fa = K.split("pbAlp")[1] || "";
          if ("CS" === Ma) {
            var hb = "_";
          } else {
            hb = Ma, 3 === hb.length && (hb = hb.substr(0, 2)), hb = ub[parseInt(hb, 16)] || "~";
          }
          var wb;
          Qa = Qa.split(" ")[0];
          fa = U(fa.split(" ")[0]);
          var pa = 10 - fa;
          fa && 7.2 > V && (K = K.split("pbChr")[1], K = K.split(" ")[0], N(za, "backgroundPosition", d(K, 2, G) + "px " + -24 * (10 - fa) + "px"));
          Ma && (7.2 > V && (wb = {backgroundPosition:d(Ma, 2, G) + "px " + -24 * (10 - pa) + "px"}), Eb(za, "pbGhst"), k = mb(za, "b", {className:"pbChr" + Ma + " pbAlp" + pa + " pbCsr" + Qa, style:wb}, hb), xb(k));
          xb(za);
        }
      }
      if (r) {
        var Fa = 6 > p ? 2 : 0;
        r = lb("SAMP");
        var Ba = 8 === p, X = 5 <= p && 6 > p, e, k, C, l;
        Gb && Wa(M, "pbLCD-AX");
        if (r.length) {
          for (C = -1; e = r[++C];) {
            if (u($a(e), "pbLCD")) {
              var G = u(e, "PB-120") || u(e, "FX-795P");
              var oa = gb(e);
              for (e = oa.length; e;) {
                var Aa = oa[--e];
                switch(Hb(Aa)) {
                  case "A":
                    (2 > Ka || Ba) && y(Aa);
                    if (2 > Ka) {
                      var Ga = gb(Aa);
                      for (l = Ga.length; l;) {
                        !Ba && Z(Ga[--l]);
                      }
                    }
                    Nb ? Db(Aa, "href", "javascript:void(0)") : (wa(Aa, "click", na), z.push(Aa));
                    break;
                  case "B":
                    2 > Ka && Z(Aa);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ob(function(r) {
      for (; r = z.shift();) {
        xa(r, "click", na);
      }
    });
    6 === p && (new Ha("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(E);
    var I = ub[7], g = ub[30], a = ub[113], b = La(8337) + La(8331), c = La(160);
    La(8194);
    var f = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), m = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + g + ub[31]).split(""), F = [], J, P, ea;
    Ea(function(r) {
      if (r) {
        P = bb + "pbFont/x3mask.png";
        r = lb("*");
        for (var y = -1, Z; Z = r[++y];) {
          u(Z, "pbList") ? B(Z) : u(Z, "pbFont") && B(Z, !0);
        }
        F.length && H();
        return !0;
      }
    });
    ka && q.conpare(eb, "0.9.6");
    var W = !1, L = 8 > V, S = !W && !L && !(6 > p) && E.createDocumentFragment && !!M.replaceChild;
    aa.prettify = B;
  })();
  Ra = E.scripts || lb("script");
  var bb = Ra[Ra.length - 1].src.split("/");
  --bb.length;
  (bb = bb.join("/")) && (bb += "/");
  6.1 > Za && Da(T);
  ob(Kb);
  6.1 > Za && Da(Ua);
  ob(kb);
  10 > p && (11 !== ia || 5 !== p) || (9.5 > V || 1.5 > ka || !Ya && !A.addEventListener ? E.write('<link href="' + bb + yb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : ja(function() {
    ta(Sa, "link", {href:bb + "" + yb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

