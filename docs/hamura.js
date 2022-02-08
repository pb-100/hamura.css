PB100={};ua = [];
ua.conpare = function(ca, q) {
  var A = 0, u, E, ja = (ca + "").split("."), V = (q + "").split("."), Ia = ja.length;
  for (u = V.length; "0" === ja[Ia - 1];) {
    --Ia;
  }
  for (; "0" === V[u - 1];) {
    --u;
  }
  for (E = Ia < u ? Ia : u; A < E; ++A) {
    var Va = ja[A] - 0, n = V[A] - 0;
    if (Va !== n) {
      return Va > n ? 1 : -1;
    }
  }
  return Ia > u ? 1 : Ia === u ? 0 : -1;
};
(function(ca, q, A, u, E, ja, V, Ia) {
  function Va(B, ma, ia) {
    ia = ja(B.split(ma)[1]);
    return 0 <= ia ? ia : 0;
  }
  function n(B, ma) {
    return 0 <= B.indexOf(ma);
  }
  function ab(B) {
    return n(B, "Linux armv") || n(B, "Linux aarch") || n(B, "Linux i686") || n(B, "Linux x86_64");
  }
  function ta(B, ma) {
    for (var ia in ma) {
      if (ia === B) {
        return !0;
      }
    }
  }
  function t(B, ma) {
    var ia = "", Ba = -1, Wa;
    if (B = B.split(ma)[1]) {
      for (; Wa = B.charCodeAt(++Ba);) {
        if (48 <= Wa && 57 >= Wa || 46 === Wa) {
          ia += B.charAt(Ba);
        } else {
          break;
        }
      }
      for (Ba = ia.length; Ba;) {
        if (46 === ia.charCodeAt(--Ba)) {
          ia = ia.substr(0, Ba);
        } else {
          break;
        }
      }
    }
    return ia;
  }
  function da(B) {
    for (var ma = arguments, ia = 1, Ba = ma[0], Wa; ia < ma.length; ++ia) {
      0 > ub(Ba, Wa = ma[ia]) && (Ba = Wa);
    }
    return Ba;
  }
  function va(B) {
    return B === B + "" ? B : B === B - 0 ? "" + B : B.min && B.max ? B.min + "~" + B.max : B.min ? B.min + "~" : "~" + B.max;
  }
  var ub = ca.conpare, d = u.userAgent, N = u.appVersion, Qa = ja(N) || 0, S = u.platform, Ra = A.documentElement, fb = Ra && Ra.style, p = A.documentMode, Xa = E.width;
  E = E.height;
  var Bb = q.HTMLAudioElement, W = q.performance, ka = q.Int8Array, kb = q.ontouchstart !== Ia, Sa = t(N, "Version/") || t(d, "Version/"), Ja = q.operamini, Ya = !Ja && q.opera, Ob = Ya && (Ya.version && "function" === typeof Ya.version ? Ya.version() : da(t(d, "Opera "), Sa, Qa)), ib = q.opr, lb = !Ya && (A.all || p);
  p = lb && (p ? p : q.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  Ra = !lb && Ra.msContentZoomFactor;
  var vb = !Ra && q.chrome, Ta = !lb && function() {
    for (var B in fb) {
      if (0 === B.indexOf("Moz")) {
        return !0;
      }
    }
  }(), wb = n(d, "UCWEB"), Ib = wb && t(d, " U2/"), Cb = wb && t(d, "; wds "), gb = t(d.split("_").join("."), "; iPh OS "), Z = t(d, "; Adr "), xb = n(N, "YJApp-ANDROID"), Ca = n(S, "Android") || Ta && n(N, "Android") || xb;
  Z = t(S, "Android ") || t(N, "Android ") || t(d, "Android ") || Z;
  var mb = n(S, "Linux"), Db = "MacIntel" === S && u.standalone !== Ia, nb = Ta && t(d, "Goanna/"), Q = !nb && Ta && (t(d, "rv:") || t(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Jb = t(d, "Firefox/"), R = t(d, "Opera/"), Kb = q.FNRBrowser, Ua = Va(d, "AppleWebKit/"), jb = t(d, "Chrome/"), Eb = t(d, "OPR/"), ob = t(N, "KHTML/"), Lb = t(d.toLowerCase(), "iris");
  t(d, "FxiOS/");
  t(d, "CriOS/");
  t(d, "EdgiOS/");
  var Za = t(d, "Silk/"), bb = Va(d, "SamsungBrowser/"), yb = !bb && function() {
    for (var B = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ma, ia = B.length; ma = B[--ia];) {
      if (n(d, ma)) {
        return 2 > ja(Sa) ? Sa : 0.9;
      }
    }
    B = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ia = B.length; ma = B[--ia];) {
      if (n(d, ma)) {
        return Sa;
      }
    }
  }(), wa = vb && 534.3 >= Ua, cb = ab(S), Fa = cb && !n(d, S) && ab(d);
  kb = kb && (Ua || Ta) && Fa || !Z && xb;
  xb = !!q.ReactNativeWebView;
  cb = cb && function() {
    for (var B in q) {
      if (0 === B.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ka = (Fa = q.puffinDevice) && Fa.clientInfo;
  Ka = (Fa = Ka && "iOS" === Ka.os && Ka.osVersion) && Ka.model;
  var zb = !p && A.registerElement, Da = !p && A.execCommand, Fb = mb && zb && "11.0.696.34" === jb, pb = q._firefoxTV_playbackStateObserverJava, Ab = Va(d, "diordnA ");
  if ("Nitro" === S) {
    var v = 1;
  } else if ("Nintendo DSi" === S) {
    v = 2;
    var w = R;
  } else if ("New Nintendo 3DS" === S || n(d, "iPhone OS 6_0") && 320 === Xa && 240 === E) {
    v = 4, w = t(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === S) {
    v = 3, w = t(d, "Version/"), Ua = 535;
  } else if ("Nintendo Swicth" === S) {
    v = 7, w = t(N, "NintendoBrowser/");
  } else if ("Nintendo WiiU" === S) {
    v = 6, w = t(N, "NintendoBrowser/"), Ua = t(N, "AppleWebKit/");
  } else if ("Nintendo Wii" === S) {
    v = 5, w = t(d, "Wii; U; ; ");
  } else if (R = t(d, "PlayStation Vita ")) {
    v = 10, w = R;
  } else if (R = t(d, "(PlayStation Portable); ")) {
    v = 8;
    w = R;
    var db = 3.3;
  } else if (R = t(d, "PLAYSTATION 3; ") || t(d, "PLAYSTATION 3 ")) {
    if (v = 11, w = R, 0 > ub("4.10", R)) {
      var M = 26, U = R;
    }
  } else if (n(d, "Xbox One")) {
    v = 15, w = 1;
  } else if (n(d, "Xbox")) {
    v = 14, w = 1;
  } else if (2 === Qa && n(d, "Sony/COM2/")) {
    v = 17;
    w = 2;
    db = 3.4;
    var La = !0;
  } else if (0 === S.indexOf("iP") || gb || Fa || Db) {
    if (Fa) {
      switch(w = Fa, Ka.substr(0, 4)) {
        case "iPho":
          var Ea = 0;
          t(Ka, Ea);
          var na = !0;
          break;
        case "iPad":
          Ea = 1;
          t(Ka, Ea);
          var oa = !0;
          break;
        case "iPod":
          Ea = 2;
          t(Ka, Ea);
          var eb = !0;
      }
    } else {
      gb ? w = gb : (w = t(N.split("_").join("."), "OS "), ta("isSecureContext", q), ta("enableWebGL", q), ta("sameOrigin", q));
      if (!w || Kb) {
        w = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : u.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : q.SharedWorker ? W && W.now ? 8.0 : 8.4 : Da ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : ka ? 4.3 : Bb ? 4.1 : 3.2;
      }
      var xa = Xa === 1.5 * E || 1.5 * Xa === E;
      0 === S.indexOf("iPhone") ? (Ea = 0, na = !0) : 0 === S.indexOf("iPad") || Db ? (Ea = 1, oa = !0) : 0 === S.indexOf("iPod") && (Ea = 2, eb = !0);
    }
    M = !Fa && (u.standalone || (oa || 12 > w) && ta("webkitFullscreenEnabled", A) || 11 <= w && 13 > w && u.mediaDevices) ? 16 : 17;
    v = 24;
    U = w;
  } else if (n(d, "Kobo")) {
    v = 18, M = 21, U = 2.2, Ca = !0;
  } else if (n(d, "EBRD")) {
    v = 19, M = 21, U = 2.2;
  } else if (R = t(d, "CrOS x86_64 ") || t(d, "CrOS aarch64 ") || t(d, "CrOS i686 ") || t(d, "CrOS armv7l ")) {
    v = 28, w = R;
  } else if (q.onmoztimechange !== Ia) {
    v = 29, w = 18.1 > Q ? "1.0.1" : 19 > Q ? 1.1 : 27 > Q ? 1.2 : 29 > Q ? 1.3 : 31 > Q ? 1.4 : 33 > Q ? 2.0 : 35 > Q ? 2.1 : 38 > Q ? 2.2 : 45 > Q ? 2.5 : 2.6, n(d, "Mobile") ? na = !0 : n(d, "Tablet") ? oa = !0 : n(d, "TV");
  } else if (q.palmGetResource) {
    v = 30, w = t(d, "webOS/") || t(d, "WEBOS") || t(d, "hpwOS/"), n(d, "webOS.TV") || n(d, "/SmartTV") || (na = !0);
  } else if (R = t(d, "Tizen ")) {
    v = 31, w = R, M = 24, U = bb, na = !0;
  } else if (R = t(d, "Windows Phone ") || t(N, "Windows Phone OS ") || Cb) {
    v = 23, w = R, na = !0;
  } else if (Ra && "ARM" === S) {
    v = 23, w = 10, na = !0;
  } else if (lb && n(N, "ZuneWP")) {
    v = 23, w = 11 === p ? 8.1 : 10 === p ? 8 : 9 === p ? 7.5 : 7 === p ? 7 : "?", na = !0;
  } else if (n(d, "FOMA;")) {
    v = 16, na = !0;
  } else if (n(d, "SoftBank;")) {
    v = 16, na = !0;
  } else if (n(d, "KFMUWI")) {
    var Ma = !0;
    w = 6.3;
    var la = oa = !0;
  } else if (n(d, "KFKAWI")) {
    Ma = !0, w = 6, la = oa = !0;
  } else if (n(d, "KFSUWI") || n(d, "KFAUWI") || n(d, "KFDOWI")) {
    Ma = !0, w = 5, la = oa = !0;
  } else if (n(d, "KFGIWI")) {
    Ma = !0, w = 5, la = oa = !0;
  } else if (n(d, "KFARWI") || n(d, "KFSAWA") || n(d, "KFSAWI")) {
    Ma = !0, w = 5 <= ja(Z) ? 5 : 4, la = oa = !0;
  } else if (n(d, "KFSOWI") || n(d, "KFTHWA") || n(d, "KFTHWI") || n(d, "KFAPWA") || n(d, "KFAPWI")) {
    Ma = !0, w = 3, la = oa = !0;
  } else if (n(d, "KFOT") || n(d, "KFTT") || n(d, "KFJWA") || n(d, "KFJWI")) {
    Ma = !0, w = 2, la = oa = !0;
  } else if (n(d, "Kindle Fire")) {
    Ma = !0, w = 1, la = oa = !0;
  } else if (R = t(d, "Kindle/")) {
    v = 20, w = R, M = 21, U = 2.2;
  } else if (pb) {
    Ma = !0, w = Z || Ab, la = !0;
  } else if (n(d, "AmazonWebAppPlatform") || n(d, "; AFT")) {
    Ma = !0, w = Z, la = !0;
  } else if (n(d, "MeeGo")) {
    v = 32;
  } else if (n(d, "Maemo")) {
    v = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Lb) {
    v = 22, La = !0;
  } else if ("WinCE" === S) {
    v = 21, La = !0;
  } else if (0 === S.indexOf("Win")) {
    v = "Win16" === S ? 35 : "Win32" === S ? 36 : "Win64" === S ? 37 : 0, w = t(d, "Windows NT ") || t(d, "Windows ");
  } else if (0 === S.indexOf("Mac")) {
    v = "Mac68K" === S ? 39 : "MacPowerPC" === S || "MacPPC" === S ? 38 : "MacIntel" === S ? 40 : 0;
    if (R = t(d.split("_").join("."), "Mac OS X ")) {
      w = R;
    }
    var Mb = !0;
  } else if (n(d, "BlackBerry") || n(d, "BB10")) {
    v = 34, w = Sa, na = !0;
  } else if (n(d, "SunOS") || n(d, "Sun Solaris")) {
    v = 42;
  } else if (n(d, "FreeBSD")) {
    v = 43;
  } else if (n(d, "OpenBSD")) {
    v = 44;
  } else if (n(d, "NetBSD")) {
    v = 45;
  } else if (Ca && Ta) {
    n(d, "Android 4.4;") ? xa = {min:2.3} : 4 <= ja(Z) ? xa = Z : xa = {min:2.2}, w = xa;
  } else if (Ca && Ya) {
    Z ? xa = Z : xa = {min:1.6}, w = xa, n(d, "Tablet") ? oa = !0 : na = !0;
  } else if (Z) {
    w = Z, Ca = !0;
  } else if (mb && kb || xb || cb) {
    var qb = !0;
    bb ? xa = {min:4.4} : vb && !wa || ib || Eb ? xa = {min:4} : (xa = Z = fb.touchAction !== Ia ? {min:5} : zb ? 4.4 : ka ? u.connection ? q.searchBoxJavaBridge_ || vb ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ua ? 3 : 533 <= Ua ? Bb ? 2.3 : 2.2 : 530 <= Ua ? 2.0 : 1.5, yb && (M = 24, U = yb));
    w = xa;
    Ca = !0;
  } else {
    Fb ? (w = {min:5}, qb = Ca = !0) : mb && (n(d, "Ubuntu") ? v = 46 : (R = t(d, "Mint/")) ? (v = 47, w = R) : (R = t(d, "Fedora/")) ? (v = 48, w = R) : v = n(d, "Gentoo") ? 49 : 50);
  }
  Ma || Ca && qb && Za ? v = 27 : Ca && (v = v || 26);
  M || (la = la || Ca, Ya ? (M = la || La || na || oa ? 9 : 8, U = Ob) : lb ? (xa = Va(N, "Trident/") + 4, M = La || na || oa || eb ? 3 : Mb && 5 <= p ? 7 : 2, U = p) : Ra ? (M = 23 === v ? 6 : 5, U = t(N, "Edge/")) : nb ? (M = 13, U = nb) : Ta ? (M = la ? 12 : 11, U = Q || Jb) : bb ? (M = 24, U = bb) : (R = db || t(d, "NetFront/")) ? (M = 18, U = R) : (R = t(d, "iCab")) ? (M = 19, U = R) : (R = da(t(d, "Opera Mini/"), t(d, "Opera Mobi/")) || Ja && Sa) ? (M = 10, U = R, v || (n(d, "iPhone") ? Ea = 
  0 : n(d, "iPad") ? Ea = 1 : n(d, "iPod") && (Ea = 2), Ea && (v = 24))) : wb ? (M = 25, U = Ib) : ob ? (M = 14, U = Qa) : Ca && wa ? (M = 21, U = Z) : vb || ib || Eb ? (M = la ? 22 : 20, U = jb) : Ca && zb ? (M = 23, U = 5 > ja(Z) ? Z : jb) : Ca && (Sa || qb) ? (M = 21, U = Z) : jb ? (M = la ? 22 : 20, U = jb) : Ua && (M = 15, U = Ua));
  v && (ca[2] = v, w && (ca[3] = va(w)));
  M && (ca[0] = M, U && (ca[1] = va(U)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var ca = this[this.length - 1];
  --this.length;
  return ca;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ca = arguments, q = 0, A = ca.length, u = this.length; q < A; ++q) {
    this[u + q] = ca[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ca = this[0], q = 1, A = this.length; q < A; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return ca;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ca = arguments, q = ca.length, A = this.length += q - 1, u = A; u >= q; --u) {
    this[u] = this[u - q];
  }
  for (u = 0; u < q; ++u) {
    this[u] = ca[u];
  }
  return A;
});
Array.prototype.splice || (Array.prototype.splice = function(ca, q) {
  var A = arguments, u = A.length - 2 - q, E = this.slice(ca, ca + q), ja;
  if (0 < u) {
    var V = this.length - 1;
    for (ja = ca + q; V >= ja; --V) {
      this[V + u] = this[V];
    }
  } else if (0 > u) {
    V = ca + q;
    for (ja = this.length; V < ja; ++V) {
      this[V + u] = this[V];
    }
    this.length += u;
  }
  V = 2;
  for (ja = A.length; V < ja; ++V) {
    this[V - 2 + ca] = A[V];
  }
  return E;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ca, q) {
  var A = this.length >>> 0;
  if (0 === A) {
    return -1;
  }
  if (q) {
    var u = q || 0;
    u = -Infinity === u ? 0 : (0 > u ? -u : u) | 0;
    if (A <= u) {
      return -1;
    }
  }
  for (u = 0 <= u ? u : 0 < A + u ? A + u : 0; u < A; ++u) {
    if (this[u] === ca) {
      return u;
    }
  }
  return -1;
});
(function(ca, q, A, u, E, ja, V, Ia, Va, n, ab, ta) {
  function t() {
    Gb = !Gb;
    for (var x = -1, H; H = Nb[++x];) {
      -1 !== H.className.indexOf("pbAlp") ? La(H, "display", Gb ? "" : "none") : (M(H, Gb ? "pbChrCS" : "pbChr00"), U(H, Gb ? "pbChr00" : "pbChrCS"));
    }
  }
  function da(x) {
    if (q[0] === x) {
      return fb === fb + "" ? V(fb) : fb;
    }
  }
  function va(x) {
    var H = q[3];
    if (q[2] === x) {
      return H === H + "" ? V(H) : H;
    }
  }
  function ub(x) {
    7.2 > W ? db(x, "pbChrCS") && (Nb.length || setInterval(t, 500), -1 === Nb.indexOf(x) && Nb.push(x)) : t = null;
  }
  function d(x, H, pa) {
    x + "" === x && ("a" === x.charAt(2) && (pa = !0, x = x.substr(0, 2)), x = "CS" === x ? 7.2 > W ? 117 : 9 > p || 9 > W || Xa ? 1 : 132 : parseInt(x, 16));
    pa && (50 === x && (x = 128), 102 < x && 108 > x && (x += 24));
    return (x - 1) * -(6 * (H || 2));
  }
  var N = E.body, Qa = N.style, S, Ra, fb = q[1], p = da(2) || da(3), Xa = da(7), Bb = da(5) || da(6), W = da(8) || da(9), ka = da(11) || da(12), kb = ka && 0 <= q.conpare(fb, "1.9.1"), Sa = da(13), Ja = da(15), Ya = da(16) || da(17), Ob = da(10) || da(25), ib = da(20), lb = ib || da(22) || da(23) || da(21) || da(24), vb = V(ja.userAgent.split("Edg/")[1]);
  ja = V(ja.appVersion.split("Trident/")[1]) + 4;
  var Ta = va(35) || va(36) || va(37), wb = !p && !Xa && (new Ia('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Ib = (Xa ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 7.2 > W ? "opr70" : 8 > W ? "opr72" : 9.5 > W ? "opr" + (W | 0) : ka && !kb ? 1.3 <= ka ? "gck190" : 1 <= ka ? "gck121" : "gck097" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var Cb, gb, Z, xb = Qa.transform !== ta ? "transform" : Qa["-o-transform"] !== ta ? "-o-transform" : Qa["-ms-transform"] !== ta ? "-ms-transform" : Qa["-moz-transform"] !== ta ? "-moz-transform" : Qa["-webkit-transform"] !== ta ? "-webkit-transform" : "", Ca = [], mb, Db, nb, Q, Jb, R, Kb, Ua, jb, Eb;
  (function() {
    function x() {
      for (var c, f = 0, h = new ab() - 0; f < I.length;) {
        h < I[0].t ? ++f : (c = I.splice(f, 1)[0], c.f(c.p));
      }
      b = I.length ? Va(x, g) : 0;
    }
    function H() {
      for (var c, f = 0; f < aa.length; ++f) {
        c = aa[f], c.f();
      }
    }
    function pa() {
      z && (z = clearInterval(z));
    }
    function ha() {
      b && (b = n(b));
    }
    R = function(c) {
      aa.length || (z = setInterval(H, C));
      aa.push({f:c, v:++O});
      return O;
    };
    Kb = function() {
      z && (pa(), z = setInterval(H, C));
    };
    Ua = pa;
    var aa = [], C = 999, O = 0, z;
    if (5 > p || Xa) {
      A._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    Q = function(c, f, h) {
      I.length || (b = Va(x, g));
      I.push({f:c, p:f, v:++a, t:new ab() - 0 + (g < h ? h : g)});
      return a;
    };
    Jb = function(c) {
      for (var f = I.length, h; h = I[--f];) {
        if (h.v === c) {
          I.splice(f, 1);
          break;
        }
      }
      return 0;
    };
    jb = function() {
      b && (ha(), b = Va(x, g));
    };
    Eb = ha;
    var I = [], g = 64, a = 0, b;
    if (5 > p || Xa) {
      A._wdb_ontimer = x, x = "_wdb_ontimer()";
    }
  })();
  var ob, Lb, Za, bb, yb, wa, cb, Fa, Ka, zb, Da, Fb, pb, Ab, v, w, db, M, U, La, Ea;
  (function() {
    function x(a, b, c) {
      var f = ["<", a], h = 1, m, F;
      if (b) {
        for (m in b) {
          var J = b[m];
          if (null != J && "" !== J) {
            if ("style" === m) {
              f[++h] = ' style="';
              for (F in J) {
                for (var P = ++h, ea, X = [], L = F.split(""), T = L.length; T;) {
                  ea = L[--T], "A" <= ea && "Z" >= ea && (ea = "-" + ea.toLowerCase()), X[T] = ea;
                }
                f[P] = X.join("") + ":" + J[F] + ";";
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
    function pa(a) {
      return z ? a.parentElement : a.parentNode;
    }
    function ha(a, b, c, f, h, m) {
      if (z) {
        var F = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var J = bb(2 > a ? Za(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(F, x(c, f, h));
        return bb(b)[J];
      }
      b = I ? E.createElement(x(c, f)) : m ? E.createElementNS("http://www.w3.org/2000/svg", c) : E.createElement(c);
      if (f && !I) {
        for (F in f) {
          if ((c = f[F]) || 0 === c) {
            switch(F) {
              case "class":
              case "className":
                w(b, c);
                break;
              case "style":
                a = b.style;
                for (J in c) {
                  a[J] = c[J];
                }
                break;
              default:
                Ab(b, F, c);
            }
          }
        }
      }
      g || null != h && aa(b, h);
      return b;
    }
    function aa(a, b) {
      if (z) {
        return ha(2, a, "font", ta, b);
      }
      var c = E.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function C(a, b) {
      9 > p ? a.className = b : a.setAttribute("class", b);
    }
    function O(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var z = 5 > p;
    S = H("html")[0];
    Ra = H("head")[0];
    ob = H;
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
    Za = pa;
    bb = function(a) {
      a = z ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    yb = function(a) {
      var b = !(7.03 < W && 7.2 > W) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], f = a.length, h = -1, m; f;) {
        if (m = a[--f], b || 1 === m.nodeType) {
          z && "FONT" === m.tagName || (c[++h] = m);
        }
      }
      return c;
    };
    wa = function(a, b, c, f, h) {
      b = ha(2, a, b, c, f, h);
      z || (a.appendChild(b), g && null != f && aa(b, f));
      return b;
    };
    cb = function(a, b, c, f, h) {
      b = ha(0, a, b, c, f, h);
      z || (pa(a).insertBefore(b, a), g && null != f && aa(b, f));
      return b;
    };
    Fa = function(a, b, c, f, h) {
      b = ha(1, a, b, c, f, h);
      var m;
      z || ((m = a.nextSibling) ? Za(m).insertBefore(b, m) : Za(a).appendChild(b), g && null != f && aa(b, f));
      return b;
    };
    Ka = aa;
    zb = function(a, b) {
      if (z) {
        return ha(0, a, "font", ta, b);
      }
      var c = E.createTextNode("" + b);
      Za(a).insertBefore(c, a);
      return c;
    };
    Da = function(a) {
      z ? a.outerHTML = "" : Za(a).removeChild(a);
    };
    var I = 9 > p, g = 9 > p;
    Fb = function(a) {
      return a.tagName.toUpperCase();
    };
    pb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Ab = function(a, b, c) {
      a.setAttribute(b, c);
    };
    v = function(a, b) {
      a.removeAttribute(b);
    };
    w = C;
    db = O;
    M = function(a, b) {
      var c;
      if (!O(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        C(a, c + b);
      }
    };
    U = function(a, b) {
      if (O(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        C(a, c.join(" "));
      }
    };
    La = function(a, b, c) {
      a.style[b] = c;
    };
    Ea = function(a, b) {
      var c = -1, f, h;
      if (9 > W || 5.5 > p) {
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
  var na, oa, eb, xa, Ma, la, Mb, qb, B = 0;
  (function() {
    function x(e, k) {
      for (var D = 0; D < e.length; ++D) {
        !0 === e[D](k) && (e.splice(D, 1), --D);
      }
    }
    function H(e, k) {
      c && !b.length && Q(pa);
      b.push(e, k);
    }
    function pa() {
      var e = b, k;
      for (b = []; k = e.shift();) {
        x(k, e.shift());
      }
    }
    function ha(e) {
      var k = e || event;
      e = f[k.type];
      var D = -1, l, G;
      p ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : m && (k.u = k.stopPropagation, k.stopPropagation = function() {
        G = !0;
      });
      for (; l = e[++D];) {
        l.l === this ? (this.g = l.j, this.g(k), this.g = u, this.g = null) : 7.2 > W && this === E && l.l === A && (A.g = l.j, A.g(k), delete A.g);
      }
      if (p) {
        return k.preventDefault = k.stopPropagation = null, k.returnValue;
      }
      m && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (J = !0), G && !J && k.u(), k.u = k.stopPropagation = null);
    }
    function aa() {
      if (P) {
        var e = E.readyState;
        "loaded" === e || "complete" === e ? P() : Q(aa);
      }
    }
    function C(e) {
      x(ea, e);
    }
    function O() {
      var e = 9 === a.offsetWidth;
      qb !== e && H(X, qb = e);
    }
    function z() {
      return B = T ? y ? 2 : r ? 3 : 1 : 0;
    }
    function I() {
      P || x(Ga);
    }
    var g = A.matchMedia, a, b = [], c;
    Ca.push(function() {
      a = wa(N, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        c = !0;
        b.length && Q(pa);
      });
    });
    na = function(e, k, D, l) {
      if (F) {
        e.addEventListener(k, D, l ? wb ? l : l.capture : !1);
      } else {
        var G = {l:e, j:D};
        l = f[k];
        var qa = "on" + k, za, Ha;
        if (l) {
          for (za = l.length; Ha = l[--za];) {
            if (Ha.l === e && Ha.j === D) {
              return;
            }
          }
          f[k].push(G);
        } else {
          f[k] = l = [G], h || (k = e[qa], "function" === typeof k && k !== ha && l.unshift({l:e, j:k}));
        }
        h ? e.attachEvent(qa, ha) : e[qa] = ha;
      }
    };
    oa = function(e, k, D, l) {
      if (F) {
        e.removeEventListener(k, D, l ? wb ? l : l.capture : !1);
      } else {
        l = f[k];
        k = "on" + k;
        var G, qa, za;
        if (l) {
          for (G = l.length; qa = l[--G];) {
            qa.l === e && (qa.j === D ? l.splice(G, 1) : za = !0);
          }
          za || (h ? e.detachEvent(k, ha) : (e[k] = u, e[k] = null));
        }
      }
    };
    var f = {}, h = !1, m = 525.13 > Ja, F = !m && !Xa && A.addEventListener, J;
    m && S.addEventListener("click", function(e) {
      if (J) {
        return J = !1, e.preventDefault(), !1;
      }
    });
    eb = function(e) {
      Ca.push(e);
    };
    xa = function(e) {
      ea.push(e);
    };
    var P = function(e) {
      oa(A, "load", P);
      P = null;
      x(Ca, e);
    };
    var ea = [];
    419.3 >= Ja ? Q(aa) : na(A, "load", P);
    (p || 1.8 > ka) && na(A, "unload", C);
    la = function(e) {
      X.push(e);
    };
    var X = [];
    eb(function() {
      O();
      R(O);
    });
    Mb = function(e) {
      L.push(e);
    };
    var L = [], T, r, y;
    if (10 <= p || Bb || Ta && vb) {
      g("(-ms-high-contrast:black-on-white)").addListener(function(e) {
        T = r = e.matches;
        H(L, z());
      }), g("(-ms-high-contrast:white-on-black)").addListener(function(e) {
        T = y = e.matches;
        H(L, z());
      }), g("(-ms-high-contrast:active)").addListener(function(e) {
        T = e.matches;
        H(L, z());
      });
    } else if (10 > p || Ta && (44 <= ka || Sa)) {
      var ba = function() {
        function e(G) {
          return "#ffffff" === G || "rgb(255,255,255)" === G;
        }
        var k = E.defaultView, D = B;
        var l = k ? k.getComputedStyle(a, null) : a.currentStyle;
        k = (l && l.color || "").split(" ").join("");
        l = (l && l.backgroundColor || "").split(" ").join("");
        if (k) {
          return T = "#123456" !== k && "rgb(18,52,86)" !== k, r = ("#000000" === k || "rgb(0,0,0)" === k) && e(l), y = e(k) && ("#000000" === l || "rgb(0,0,0)" === l), D !== z() && H(L, B), !0;
        }
      };
      eb(function() {
        La(a, "color", "#123456");
        La(a, "backgroundColor", "#123456");
        60 > ka || Sa ? ba() : ba() && R(ba);
        ba = null;
      });
    }
    Ma = function(e) {
      Ga.push(e);
    };
    var Ga = [], Aa = 0, Y = 1 > ka || 1.2 <= ka && 1.8 > ka || 7.2 >= W;
    Y ? R(function() {
      var e = A.scrollY || N.scrollTop;
      Aa !== e && (Aa = e, I());
    }) : na(A, "scroll", I);
    xa(function() {
      Y || oa(A, "scroll", I);
    });
  })();
  var ma = 9 > p || 525 <= Ja && 530 > Ja || 2 > ib, ia = 0, Ba, Wa, Hb;
  (function() {
    function x(g) {
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
          if (2 > ib || Ta && 526 > Ja) {
            var h = pa(g[b]);
            h.parentNode && (a[b] = h);
          } else {
            a[b] = pa(g[b]);
          }
        }
      } else {
        for (g = ob("*"), f = g.length; b < f; ++b) {
          h = g[b];
          var m = Fb(h);
          if ("STYLE" === m || "LINK" === m && "text/css" === pb(h, "type")) {
            a[++c] = h;
          }
        }
      }
      return a;
    }
    function pa(g) {
      return g.owningElement || g.ownerNode;
    }
    Ba = function(g, a) {
      var b = H(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var f = b[c - 1];
      b = b[c];
      if (O || z) {
        var h = b ? cb(b, "style") : f ? Fa(f, "style") : wa(Ra, "style");
        z && Ka(h, "");
        var m = h.styleSheet || h.sheet;
        g && Ab(h, "media", g);
      } else if (aa || C) {
        m = {C:g, B:c, G:!0};
      }
      if (m) {
        return ha.push({D:m, h:h, m:[]}), m;
      }
    };
    Wa = function(g) {
      g = x(g);
      var a = g.m, b = a.length, c;
      for (g.h && Da(g.h); c = a[--b];) {
        c.i && Da(c.i);
      }
      ha.splice(ha.indexOf(g), 1);
    };
    Hb = function(g, a, b, c) {
      var f = x(g), h = f.h;
      f = f.m;
      var m = "@import" === a, F = "@page" === a, J = "@font-face" === a, P = f.length, ea = "", X;
      if (g.imports) {
        var L = g.imports.length;
      } else {
        for (L = 0; L < P && "@import" === f[L].A; ++L) {
        }
      }
      if (m) {
        c = 0 <= c && c < L ? c : L;
        var T = a + ' "' + b + '"';
      } else {
        c = L <= c && c < P ? c : P;
        for (T in b) {
          ea += ";" + T + ":" + b[T];
        }
        ea = ea.substr(1);
        T = a + "{" + ea + "}";
        6 <= p && J && (c = P);
      }
      P = {A:a, F:b, s:c, o:c};
      if (9 > p) {
        L = g.rules;
        var r = L.length;
        if (J) {
          a = E.createElement("div"), a.innerHTML = '_<style type="text/css"' + (g.media ? ' media="' + g.media + '"' : "") + ">" + T + "</style>", a = a.lastChild, (X = h.nextSibling) ? Za(h).insertBefore(a, X) : Za(h).appendChild(a), P.i = a;
        } else {
          if (m ? g.addImport(b, c) : 5.5 <= p && F || g.addRule(a, ea, c), P.o = c + (L.length - r - 1), 0 === L.length - r) {
            return -1;
          }
        }
      } else if (O || z) {
        (Ta && Ja || 28 > ib) && m ? P.i = Fa(h, "link", {href:b, rel:"stylesheet", type:"text/css"}) : ma && J ? (a = P.i = Fa(h, "style", {type:"text/css", media:g.media}), a.innerText = T) : g.insertRule(T, c);
      }
      f.splice(c, 0, P);
      if (aa || C) {
        h = x(g);
        X = h.m;
        a = h.h;
        b = g.B;
        m = H();
        g = m[b - 1];
        b = m[b];
        m = [];
        J = F = -1;
        ea = "style";
        P = {type:"text/css", media:h.C};
        for (var y; L = X[++F];) {
          if (T = L.A, L = L.F, "@import" === T) {
            m[++J] = T + ' "' + L + '"';
          } else {
            m[++J] = T + "{";
            T = "";
            for (y in L) {
              T += ";" + y + ":" + L[y];
            }
            m[++J] = T.substr(1) + "}";
          }
        }
        m = m.join("");
        aa && (m = "data:text/css;charset=utf-8;base64," + I(m), P.rel = "stylesheet", P.href = m, ea = "link", m = ta);
        a ? (h.h = Fa(a, ea, P, m), Da(a)) : (a = b ? cb(b, ea, P, m) : g ? Fa(g, ea, P, m) : wa(Ra, ea, P, m), h.h = a);
      }
      y = c;
      g = f.length;
      for (h = y; h < g; ++h) {
        X = f[h], X.i || (a = X.o - X.s, X.s = y, X.o = y + a, y += 1 + a);
      }
      return c;
    };
    var ha = [], aa = 1 > ka || 8 <= W && 9 > W, C = 7.2 <= W && 8 > W, O = !!p || !aa && !C && function() {
      var g = wa(S, "style"), a = !(!g.styleSheet && !g.sheet);
      Da(g);
      return a;
    }(), z = !O && Ja && !aa && !C && function() {
      var g = wa(S, "style");
      Ka(g, "");
      var a = !(!g.styleSheet && !g.sheet);
      Da(g);
      return a;
    }();
    ia = aa || C ? 1 : O || z ? 2 : 0;
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
    function x() {
      if (525 > Ja || ka && !kb || 2.2 > da(21) || da(25) || 10 > da(3) || va(32) || va(30) || va(1) || va(2) || va(3)) {
        return !1;
      }
      if (ma) {
        return !0;
      }
      if (2 === ia) {
        var C = Ba();
        var O = Hb(C, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        O = C.cssText || C.cssRules && C.cssRules[O] && C.cssRules[O].cssText || "";
        O = O.match("src") && O.match("@font-face");
        Wa(C);
      }
      x = null;
      return aa = !!O;
    }
    eb(function() {
      if (qb) {
        if (Z === ta && (Z = 8 <= p || Bb || kb || Sa || 7.2 <= W || 522 <= Ja || 3 <= Ya || lb ? 2 : 6 <= W || ka ? 1 : 0, !Z)) {
          var C = wa(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Z = 6 <= C.offsetWidth ? 2 : 0;
          Da(C);
        }
      } else {
        Z = ta;
      }
    });
    mb = function(C) {
      function O(g) {
        I = Jb(I);
        H = g;
        z.onload = z.onerror = u;
        Q(C, g);
      }
      if (H !== ta) {
        Q(C, H);
      } else if (8 > p) {
        Q(C, !1);
      } else {
        var z = new Image(), I = Q(function() {
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
    9 > p && eb(function() {
      var C = wa(N, "div");
      Ea(C, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Cb = 1 < C.offsetHeight;
      Ea(C, "");
      Da(C);
    });
    Db = function(C, O) {
      function z() {
        if (g || !a || I.complete) {
          var b = !!I.width;
          gb = gb || b;
          Q(C, b);
          I.onerror = I.onload = u;
          I = C = null;
        } else {
          --a, Q(z);
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
      Q(z);
    };
    var pa = 9 > p || 2 > ib || 12 > W, ha = ["sans-serif", "serif"], aa;
    nb = function(C, O, z, I, g, a, b) {
      function c(Y) {
        C(Y);
        Aa && !Y && Wa(Aa);
        C = r = y = ba = Aa = null;
      }
      function f() {
        E.fonts.load('1.6em "' + O + '"').then(function() {
          F(O) ? Q(c, Ga) : m(!0);
        }, function() {
          mb(J);
        });
      }
      function h(Y) {
        return E.hidden || E.msHidden || E.mozHidden || E.webkitHidden ? (L = new ab() - 0, !1) : Y < new ab() - L;
      }
      function m(Y) {
        Y && (L = new ab() - 0);
        F(O) ? c(Ga) : h(X) ? T ? c(0) : pa ? Q(c, 0) : mb(J) : Q(m);
      }
      function F(Y) {
        var e = 0, k = -1, D = 0;
        if (!ba) {
          var l = -1;
          var G;
          r = wa(N, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (ba = {}; G = ha[++l];) {
            La(r, "fontFamily", G), ba[G] = r.offsetWidth;
          }
        }
        for (5 > p ? r || (r = wa(N, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : N.appendChild(r); l = ha[++k];) {
          if (La(r, "fontFamily", '"' + Y + '",' + l), r.offsetWidth !== ba[l]) {
            e = 1;
            break;
          }
        }
        !p && e && g && (r.innerHTML = g, Y = r.offsetWidth, r.innerHTML = a, D = Y === r.offsetWidth ? 1 : 0, r.innerHTML = "mmmmmmmmmmlli");
        Da(r);
        5 > p && (r = null);
        return Ga = e + D;
      }
      function J(Y) {
        (T = Y) ? P(!0) : c(0);
      }
      function P(Y) {
        var e;
        Y && (L = new ab() - 0);
        for (e in z) {
          F(e) ? (y = wa(N, "div", {"aria-hidden":"true", className:I, id:I}), Aa = Ba(), Hb(Aa, "@import", z[e]), Q(ea, !0)) : h(100) ? (delete z[e], Q(P, !0)) : Q(P);
          return;
        }
        c(0);
      }
      function ea(Y) {
        Y && (L = new ab() - 0);
        1 < y.offsetWidth ? (Da(y), X = 100, Q(m, !0)) : h(X) ? 528 > Ja ? (Da(y), X = 100, Q(m, !0)) : (Da(y), c(0)) : Q(ea);
      }
      var X = b || 5000, L, T, r, y, ba, Ga, Aa;
      x || aa ? aa || x() ? !E.fonts || 603 > Ja ? m(!0) : f() : Q(c, 0) : Q(c, 0);
    };
  })();
  var Na = String.fromCharCode, Nb = [], Gb, rb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Na(960), ")", "(", Na(234), Na(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Na(9824), "\u2190", Na(9829), Na(9830), Na(9827), Na(956), "\u03a9", "\u2193", "\u2192", "%", Na(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Na(9619)];
  (10 > p || Ta && (44 <= ka || Sa)) && Mb(function(x) {
    U(N, "jsHcm");
    U(N, "jsHcmWob");
    U(N, "jsHcmBow");
    if (x) {
      switch((xb || 9 === p || 5.5 <= p && 9 > p && Cb) && M(N, "jsCanRotate"), x) {
        case 1:
          M(N, "jsHcm");
          break;
        case 2:
          M(N, "jsHcmWob");
          break;
        case 3:
          M(N, "jsHcmBow");
      }
    } else {
      U(N, "jsCanRotate");
    }
  });
  (function() {
    function x(r) {
      (J = r) ? aa() : gb ? ha(!0) : gb !== ta ? aa() : Db(ha, P);
    }
    function H() {
      H = null;
      nb(x, "PB-100", {"PB-100_canTTF":$a + "pbFont/ttf.css", "PB-100_canWOFF":$a + "pbFont/woff.css", "PB-100_canEOT":$a + "pbFont/eot.css", "PB-100_canSVG":$a + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function pa(r) {
      this.focus();
      r.preventDefault();
      r.stopPropagation();
    }
    function ha(r) {
      r && (M(N, "pbList-noWebFont"), ia && (2 !== Z || 9.5 > W ? Hb(Ba(), ".pbList font", {"background-image":"url(" + P + ")"}) : Hb(Ba(), ".pbList font:after", {content:"url(" + P + ")"})));
      aa();
    }
    function aa() {
      for (x = nb = null; F.length;) {
        C(F.shift(), F.shift());
      }
    }
    function C(r, y) {
      function ba(D) {
        D = bb(D);
        for (var l = -1, G; G = D[++l];) {
          switch(G.nodeType) {
            case 1:
              ba(G);
              break;
            case 3:
              G.data && Aa(G.data) && Y.push(G);
          }
        }
      }
      function Ga(D) {
        var l = D.children, G = 0, qa = l.length;
        if (qa) {
          for (; G < qa; ++G) {
            Ga(l[G]);
          }
        } else {
          (l = D.innerText) && Aa(l) && Y.push(D);
        }
      }
      function Aa(D) {
        return D.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var Y = [], e;
      if (x) {
        -1 === F.indexOf(r) && (F.push(r, y), ea && H && H());
      } else {
        var k = F.indexOf(r);
        0 <= k && F.splice(k, 2);
        for (5 > p ? Ga(r) : ba(r); e = Y.shift();) {
          k = 5 > p ? e.innerText : e.data, 2 !== J && (k = k.split(b).join(g)), y ? 5 > p ? e.innerText = k : e.data = k : O(k.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(I).split("&amp;").join("&"), e);
        }
      }
    }
    function O(r, y) {
      function ba(ra, sa) {
        for (var sb = ""; sa;) {
          sa & 1 && (sb += ra), sa >>= 1, ra += ra;
        }
        return sb;
      }
      function Ga(ra, sa, sb) {
        for (var Pb, Sb = -1, Qb, Rb; Pb = sa[++Sb];) {
          for (; 0 <= (Qb = ra.indexOf(Pb));) {
            Rb = Pb.length, ra = ra.substr(0, Qb) + ba(sb, Rb) + ra.substr(Qb + Rb);
          }
        }
        return ra;
      }
      function Aa(ra) {
        var sa = V(ra), sb = "" + sa;
        return 0 < sa && sa === sa | 0 && (sa = ra.indexOf(sb) + sb.length, sa <= ra.length) ? sa : 0;
      }
      var Y = " area line str cmd fnc syb".split(" "), e = 5 > p || 1 === y.nodeType, k = [], D = "", l, G = -1, qa, za, Ha;
      if (e) {
        if (L) {
          var ya = y.style.visibility;
          La(y, "visibility", "hidden");
        }
        y.innerHTML = "";
      }
      if (T) {
        var Oa = y;
        y = E.createDocumentFragment();
      }
      if (function(ra) {
        var sa = ra.indexOf("P");
        if (-1 === sa) {
          return !1;
        }
        sa = V(ra.charAt(sa + 1));
        return 0 <= sa && 9 >= sa;
      }(r)) {
        D = ba("+", r.length);
      } else {
        0 <= (l = Aa(r)) && (D = ba("|", l), G = l, --G);
        for (; l = r.charAt(++G);) {
          l === I || qa ? (D += "~", l === I && (qa = !qa)) : D += l;
        }
        D = Ga(D, m, "^");
        D = Ga(D, f, "{");
        D = Ga(D, h, "}");
      }
      G = 0;
      for (qa = r.length; G < qa; ++G) {
        l = r.charAt(G);
        var K = l === c;
        var Pa = " " === l;
        l = K ? " " : l;
        var fa = D.charAt(G);
        var hb = (za = tb) && K;
        var tb = "|" === fa;
        fa = Y["+|~{}^".indexOf(fa) + 1];
        "\n" !== l ? (J || !gb ? (2 === J && r.substr(G, 2) === b && (l = b, ++G), fa = Pa && "str" === fa ? "pbList-strsp" : K ? "" : !Pa && fa ? "pbList-" + fa : "") : (K = rb.indexOf(l), K = -1 === K ? "" : rb.indexOf(l).toString(16).toUpperCase(), K = (K = 1 === K.length ? "0" + K : K) ? "pbChr" + K : "", fa = Pa && "str" === fa ? "pbList-strsp" : Pa || !K ? "" : fa ? (K ? K + " " : "") + "pbList-" + fa : K), K = ta, hb ? (l = 6 <= p && 8 > p ? " " : c, fa = "") : tb && (1.9 > ka || 9.5 > W) ? 
        (tb && !za && (Ha = 4 - (V(r.substr(G)) + "").length), 7.5 > W ? K = X ? "position:relative;top:-4px;left:" + 12 * Ha + "px" : {position:"relative", top:"-4px", left:12 * Ha + "px"} : 1.3 <= ka ? (K = X ? "position:absolute;left:" + 12 * Ha + "px" : {position:"absolute", left:12 * Ha + "px"}, ++Ha) : K = X ? "position:relative;left:" + 12 * Ha + "px" : {position:"relative", left:12 * Ha + "px"}) : Pa && 7.5 > W && (fa = "pbList-strsp"), X ? k.push("<font" + (fa ? ' class="' + fa + '"' : "") + 
        (K ? ' style="' + K + '"' : "") + ">" + l + "</font>") : e || T ? wa(y, "font", {"class":fa, style:K}, l) : cb(y, "font", {"class":fa, style:K}, l)) : (za = tb = !1, X ? k.push(l) : e || T ? Ka(y, l) : zb(y, l));
      }
      if (e) {
        X ? y.innerHTML = k.join("") : T && Oa.appendChild(y), L && La(y, "visibility", ya);
      } else {
        if (X) {
          Y = E.createElement("font");
          for (Y.innerHTML = k.join(""); k = Y.firstChild;) {
            y.parentNode.insertBefore(k, y);
          }
          Da(y);
        } else {
          T ? Oa.parentNode.replaceChild(y, Oa) : Da(y);
        }
      }
    }
    la(function(r) {
      if (r) {
        r = Lb("pbChrCS");
        for (var y = 0, ba = r.length; y < ba; ++y) {
          ub(r[y]);
        }
        return !0;
      }
    });
    var z = [];
    la(function(r) {
      function y(ya) {
        var Oa = pb(ya, "pbTip"), K = Oa.charAt(0), Pa = "_" === K;
        Oa = Pa ? Oa.charAt(2) : K;
        K = Pa ? "Btm" : "";
        var fa = pb(ya, "title");
        Aa || (v(ya, "pbTip"), v(ya, "title"), M(ya, "pbTipPos" + Oa.toUpperCase()), wa(ya, "div", {className:"pbTip" + K, style:{width:fa.length + Ga + "em"}}, fa));
        wa(ya, "div", {className:"pbTail" + K});
        Y && Pa && (ya.focus(), ya.blur());
      }
      function ba(ya) {
        if (2 > Z) {
          var Oa = pb(ya, "pbGhst"), K = ya.className, Pa = K.split("pbCsr")[1] || "", fa = K.split("pbAlp")[1] || "";
          if ("CS" === Oa) {
            var hb = "_";
          } else {
            hb = Oa, 3 === hb.length && (hb = hb.substr(0, 2)), hb = rb[parseInt(hb, 16)] || "~";
          }
          var tb;
          Pa = Pa.split(" ")[0];
          fa = V(fa.split(" ")[0]);
          var ra = 10 - fa;
          fa && 7.2 > W && (K = K.split("pbChr")[1], K = K.split(" ")[0], La(ya, "backgroundPosition", d(K, 2, G) + "px " + -24 * (10 - fa) + "px"));
          Oa && (7.2 > W && (tb = {backgroundPosition:d(Oa, 2, G) + "px " + -24 * (10 - ra) + "px"}), v(ya, "pbGhst"), k = cb(ya, "b", {className:"pbChr" + Oa + " pbAlp" + ra + " pbCsr" + Pa, style:tb}, hb), ub(k));
          ub(ya);
        }
      }
      if (r) {
        var Ga = 6 > p ? 2 : 0;
        r = ob("SAMP");
        var Aa = 8 === p, Y = 5 <= p && 6 > p, e, k, D, l;
        Cb && M(N, "pbLCD-AX");
        if (r.length) {
          for (D = -1; e = r[++D];) {
            if (db(Za(e), "pbLCD")) {
              var G = db(e, "PB-120") || db(e, "FX-795P");
              var qa = yb(e);
              for (e = qa.length; e;) {
                var za = qa[--e];
                switch(Fb(za)) {
                  case "A":
                    (2 > Z || Aa) && y(za);
                    if (2 > Z) {
                      var Ha = yb(za);
                      for (l = Ha.length; l;) {
                        !Aa && ba(Ha[--l]);
                      }
                    }
                    Ob ? Ab(za, "href", "javascript:void(0)") : (na(za, "click", pa), z.push(za));
                    break;
                  case "B":
                    2 > Z && ba(za);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    xa(function(r) {
      for (; r = z.shift();) {
        oa(r, "click", pa);
      }
    });
    6 === p && (new Ia("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(E);
    var I = rb[7], g = rb[30], a = rb[113], b = Na(8337) + Na(8331), c = Na(160);
    Na(8194);
    var f = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), m = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + g + rb[31]).split(""), F = [], J, P, ea;
    la(function(r) {
      if (r) {
        P = $a + "pbFont/x3mask.png";
        r = ob("*");
        for (var y = -1, ba; ba = r[++y];) {
          db(ba, "pbList") ? C(ba) : db(ba, "pbFont") && C(ba, !0);
        }
        F.length && H();
        return !0;
      }
    });
    ka && q.conpare(fb, "0.9.6");
    var X = !1, L = 8 > W, T = !X && !L && !(6 > p) && E.createDocumentFragment && !!N.replaceChild;
    ca.prettify = C;
  })();
  Qa = E.scripts || ob("script");
  var $a = Qa[Qa.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  6.1 > Ya && Ma(Kb);
  xa(Ua);
  6.1 > Ya && Ma(jb);
  xa(Eb);
  10 > p && (11 !== ja || 5 !== p) || (9 > W || 1 > ka || !Xa && !A.addEventListener ? E.write('<link href="' + $a + Ib + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : eb(function() {
    wa(Ra, "link", {href:$a + "" + Ib, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

