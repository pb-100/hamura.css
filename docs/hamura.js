PB100={};ua = [];
ua.conpare = function(Q, m) {
  var w = 0, r, A, ia = (Q + "").split("."), J = (m + "").split("."), Ga = ia.length;
  for (r = J.length; "0" === ia[Ga - 1];) {
    --Ga;
  }
  for (; "0" === J[r - 1];) {
    --r;
  }
  for (A = Ga < r ? Ga : r; w < A; ++w) {
    var Ua = ia[w] - 0, k = J[w] - 0;
    if (Ua !== k) {
      return Ua > k ? 1 : -1;
    }
  }
  return Ga > r ? 1 : Ga === r ? 0 : -1;
};
(function(Q, m, w, r, A, ia, J, Ga) {
  function Ua(u, aa, R) {
    R = ia(u.split(aa)[1]);
    return 0 <= R ? R : 0;
  }
  function k(u, aa) {
    return 0 <= u.indexOf(aa);
  }
  function ab(u) {
    return k(u, "Linux armv") || k(u, "Linux aarch") || k(u, "Linux i686") || k(u, "Linux x86_64");
  }
  function E(u, aa) {
    for (var R in aa) {
      if (R === u) {
        return !0;
      }
    }
  }
  function g(u, aa) {
    var R = "", ea = -1, Oa;
    if (u = u.split(aa)[1]) {
      for (; Oa = u.charCodeAt(++ea);) {
        if (48 <= Oa && 57 >= Oa || 46 === Oa) {
          R += u.charAt(ea);
        } else {
          break;
        }
      }
      for (ea = R.length; ea;) {
        if (46 === R.charCodeAt(--ea)) {
          R = R.substr(0, ea);
        } else {
          break;
        }
      }
    }
    return R;
  }
  function xa(u) {
    for (var aa = arguments, R = 1, ea = aa[0], Oa; R < aa.length; ++R) {
      0 > Ha(ea, Oa = aa[R]) && (ea = Oa);
    }
    return ea;
  }
  function Db(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var Ha = Q.conpare, a = r.userAgent, V = r.appVersion, jb = ia(V) || 0, H = r.platform, t = w.documentElement, Sa = t && t.style, Ba = w.documentMode, S = A.width;
  A = A.height;
  var W = m.HTMLAudioElement, kb = m.performance, lb = m.Int8Array, bb = m.ontouchstart !== Ga, Va = g(V, "Version/") || g(a, "Version/"), Eb = m.operamini, Ia = !Eb && m.opera, Nb = Ia && (Ia.version && "function" === typeof Ia.version ? Ia.version() : xa(g(a, "Opera "), Va, jb)), Fb = m.opr, db = !Ia && (w.all || Ba);
  Ba = db && (Ba ? Ba : m.XMLHttpRequest ? w.getElementsByTagName ? 7 : 4 : w.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4);
  t = !db && t.msContentZoomFactor;
  var mb = !t && (m.chrome || m.chromium), eb = !db && function() {
    for (var u in Sa) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), nb = k(a, "UCWEB"), ob = nb && g(a, " U2/"), tb = nb && g(a, "; wds "), Pa = g(a.split("_").join("."), "; iPh OS "), qa = g(a, "; Adr "), fb = k(V, "YJApp-ANDROID"), ya = k(H, "Android") || eb && k(V, "Android") || fb;
  qa = g(H, "Android ") || g(V, "Android ") || g(a, "Android ") || qa;
  var Qa = k(H, "Linux"), ub = "MacIntel" === H && r.standalone !== Ga, vb = eb && g(a, "Goanna/"), Ja = !vb && eb && (g(a, "rv:") || g(a.substr(a.indexOf(") Gecko/") - 11), "; ")), ca = g(a, "Firefox/"), K = g(a, "Opera/"), Gb = m.FNRBrowser, Wa = Ua(a, "AppleWebKit/"), ib = g(a, "Chrome/"), Ib = g(V, "Iron/"), Hb = g(a, "OPR/"), wb = g(V, "KHTML/"), Jb = g(a.toLowerCase(), "iris");
  g(a, "FxiOS/");
  g(a, "CriOS/");
  g(a, "EdgiOS/");
  var pb = g(a, "Silk/"), cb = Ua(a, "SamsungBrowser/"), xb = !cb && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    aa, R = u.length; aa = u[--R];) {
      if (k(a, aa)) {
        return 2 > ia(Va) ? Va : 0.9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (R = u.length; aa = u[--R];) {
      if (k(a, aa)) {
        return Va;
      }
    }
  }(), va = mb && 534.3 >= Wa, gb = ab(H), Xa = gb && !k(a, H) && ab(a);
  bb = bb && (Wa || eb) && Xa || !qa && fb;
  fb = !!m.ReactNativeWebView;
  gb = gb && function() {
    for (var u in m) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ta = (Xa = m.puffinDevice) && Xa.clientInfo;
  Ta = (Xa = Ta && "iOS" === Ta.os && Ta.osVersion) && Ta.model;
  var Ka = !Ba && w.registerElement, Kb = !Ba && w.execCommand, qb = m.webkitCancelAnimationFrame, yb = Qa && Ka && "11.0.696.34" === ib, rb = m._firefoxTV_playbackStateObserverJava, Lb = Ua(a, "diordnA ");
  if ("Nitro" === H) {
    var q = 1;
  } else if ("Nintendo DSi" === H) {
    q = 2;
    var n = K;
  } else if ("New Nintendo 3DS" === H || k(a, "iPhone OS 6_0") && 320 === S && 240 === A) {
    q = 4, n = g(a, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === H) {
    q = 3, n = g(a, "Version/"), Wa = 535;
  } else if ("Nintendo Swicth" === H) {
    q = 7, n = g(V, "NintendoBrowser/");
  } else if (m.wiiu) {
    q = 6;
    n = g(V, "NintendoBrowser/");
    var N = 15, B = g(V, "AppleWebKit/") || (qb ? 536 : 534);
    n || (n = qb ? 4 : 2, k(V, "Macintosh;") || k(V, "Windows NT") && k(V, "Touch"));
  } else if (Ia && Ia.wiiremote) {
    q = 5, n = g(a, "Wii; U; ; ");
  } else if (K = g(a, "PlayStation Vita ")) {
    q = 10, n = K;
  } else if (K = g(a, "(PlayStation Portable); ")) {
    q = 8;
    n = K;
    var zb = 3.3;
  } else if (K = g(a, "PLAYSTATION 3; ") || g(a, "PLAYSTATION 3 ")) {
    q = 11, n = K, 0 > Ha("4.10", K) && (N = 26, B = K);
  } else if (k(a, "Xbox One")) {
    q = 15, n = 1;
  } else if (k(a, "Xbox")) {
    q = 14, n = 1;
  } else if (2 === jb && k(a, "Sony/COM2/")) {
    q = 17;
    n = 2;
    zb = 3.4;
    var Ya = !0;
  } else if (0 === H.indexOf("iP") || Pa || Xa || ub) {
    if (Xa) {
      switch(n = Xa, Ta.substr(0, 4)) {
        case "iPho":
          var za = 0;
          g(Ta, za);
          var la = !0;
          break;
        case "iPad":
          za = 1;
          g(Ta, za);
          var ma = !0;
          break;
        case "iPod":
          za = 2;
          g(Ta, za);
          var hb = !0;
      }
    } else {
      Pa ? n = Pa : (n = g(V.split("_").join("."), "OS "), E("isSecureContext", m), E("enableWebGL", m), E("sameOrigin", m));
      if (!n || Gb) {
        n = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : r.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : J.isNaN ? 9.2 : m.SharedWorker ? kb && kb.now ? 8.0 : 8.4 : Kb ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : lb ? 4.3 : W ? 4.1 : 3.2;
      }
      var Aa = S === 1.5 * A || 1.5 * S === A;
      0 === H.indexOf("iPhone") ? (za = 0, la = !0) : 0 === H.indexOf("iPad") || ub ? (za = 1, ma = !0) : 0 === H.indexOf("iPod") && (za = 2, hb = !0);
    }
    N = !Xa && (r.standalone || (ma || 12 > n) && E("webkitFullscreenEnabled", w) || 11 <= n && 13 > n && r.mediaDevices) ? 16 : 17;
    q = 24;
    B = n;
  } else if (k(a, "Kobo")) {
    q = 18, N = 21, B = 2.2, ya = !0;
  } else if (k(a, "EBRD")) {
    q = 19, N = 21, B = 2.2;
  } else if (K = g(a, "CrOS x86_64 ") || g(a, "CrOS aarch64 ") || g(a, "CrOS i686 ") || g(a, "CrOS armv7l ")) {
    q = 28, n = K;
  } else if (m.onmoztimechange !== Ga) {
    q = 29, n = 18.1 > Ja ? "1.0.1" : 19 > Ja ? 1.1 : 27 > Ja ? 1.2 : 29 > Ja ? 1.3 : 31 > Ja ? 1.4 : 33 > Ja ? 2.0 : 35 > Ja ? 2.1 : 38 > Ja ? 2.2 : 45 > Ja ? 2.5 : 2.6, k(a, "Mobile") ? la = !0 : k(a, "Tablet") ? ma = !0 : k(a, "TV");
  } else if (m.palmGetResource) {
    q = 30, n = g(a, "webOS/") || g(a, "WEBOS") || g(a, "hpwOS/"), k(a, "webOS.TV") || k(a, "/SmartTV") || (la = !0);
  } else if (K = g(a, "Tizen ")) {
    q = 31, n = K, N = 24, B = cb, la = !0;
  } else if (K = g(a, "Windows Phone ") || g(V, "Windows Phone OS ") || tb) {
    q = 23, n = K, la = !0;
  } else if (t && "ARM" === H) {
    q = 23, n = 10, la = !0;
  } else if (db && k(V, "ZuneWP")) {
    q = 23, n = 11 === Ba ? 8.1 : 10 === Ba ? 8 : 9 === Ba ? 7.5 : 7 === Ba ? 7 : "?", la = !0;
  } else if (k(a, "FOMA;")) {
    q = 16, la = !0;
  } else if (k(a, "SoftBank;")) {
    q = 16, la = !0;
  } else if (k(a, "KFMUWI")) {
    var La = !0;
    n = 6.3;
    var O = ma = !0;
  } else if (k(a, "KFKAWI")) {
    La = !0, n = 6, O = ma = !0;
  } else if (k(a, "KFSUWI") || k(a, "KFAUWI") || k(a, "KFDOWI")) {
    La = !0, n = 5, O = ma = !0;
  } else if (k(a, "KFGIWI")) {
    La = !0, n = 5, O = ma = !0;
  } else if (k(a, "KFARWI") || k(a, "KFSAWA") || k(a, "KFSAWI")) {
    La = !0, n = 5 <= ia(qa) ? 5 : 4, O = ma = !0;
  } else if (k(a, "KFSOWI") || k(a, "KFTHWA") || k(a, "KFTHWI") || k(a, "KFAPWA") || k(a, "KFAPWI")) {
    La = !0, n = 3, O = ma = !0;
  } else if (k(a, "KFOT") || k(a, "KFTT") || k(a, "KFJWA") || k(a, "KFJWI")) {
    La = !0, n = 2, O = ma = !0;
  } else if (k(a, "Kindle Fire")) {
    La = !0, n = 1, O = ma = !0;
  } else if (K = g(a, "Kindle/")) {
    q = 20, n = K, N = 21, B = 2.2;
  } else if (rb) {
    La = !0, n = qa || Lb, O = !0;
  } else if (k(a, "AmazonWebAppPlatform") || k(a, "; AFT")) {
    La = !0, n = qa, O = !0;
  } else if (k(a, "MeeGo")) {
    q = 32;
  } else if (k(a, "Maemo")) {
    q = 33;
  } else if (0 === a.indexOf("Windows Mobile;") || Jb) {
    q = 22, Ya = !0;
  } else if ("WinCE" === H) {
    q = 21, Ya = !0;
  } else if (0 === H.indexOf("Win")) {
    q = "Win16" === H ? 35 : "Win32" === H ? 36 : "Win64" === H ? 37 : 0, n = g(a, "Windows NT ") || g(a, "Windows ");
  } else if (0 === H.indexOf("Mac")) {
    q = "Mac68K" === H ? 39 : "MacPowerPC" === H || "MacPPC" === H ? 38 : "MacIntel" === H ? 40 : 0;
    if (K = g(a.split("_").join("."), "Mac OS X ")) {
      n = K;
    }
    var Ab = !0;
  } else if (k(a, "BlackBerry") || k(a, "BB10")) {
    q = 34, n = Va, la = !0;
  } else if (k(a, "SunOS") || k(a, "Sun Solaris")) {
    q = 42;
  } else if (k(a, "FreeBSD")) {
    q = 43;
  } else if (k(a, "OpenBSD")) {
    q = 44;
  } else if (k(a, "NetBSD")) {
    q = 45;
  } else if (ya && eb) {
    k(a, "Android 4.4;") ? Aa = {min:2.3} : 4 <= ia(qa) ? Aa = qa : Aa = {min:2.2}, n = Aa;
  } else if (ya && Ia) {
    qa ? Aa = qa : Aa = {min:1.6}, n = Aa, k(a, "Tablet") ? ma = !0 : la = !0;
  } else if (qa) {
    n = qa, ya = !0;
  } else if (Qa && bb || fb || gb) {
    var sa = !0;
    cb ? Aa = {min:4.4} : mb && !va || Fb || Hb ? Aa = {min:4} : (Aa = qa = Sa.touchAction !== Ga ? {min:5} : Ka ? 4.4 : lb ? r.connection ? m.searchBoxJavaBridge_ || mb ? J.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Wa ? 3 : 533 <= Wa ? W ? 2.3 : 2.2 : 530 <= Wa ? 2.0 : 1.5, xb && (N = 24, B = xb));
    n = Aa;
    ya = !0;
  } else {
    yb ? (n = {min:5}, sa = ya = !0) : Qa && (k(a, "Ubuntu") ? q = 46 : (K = g(a, "Mint/")) ? (q = 47, n = K) : (K = g(a, "Fedora/")) ? (q = 48, n = K) : q = k(a, "Gentoo") ? 49 : 50);
  }
  La || ya && sa && pb ? q = 27 : ya && (q = q || 26);
  N || (O = O || ya, Ia ? (N = O || Ya || la || ma ? 9 : 8, B = Nb) : db ? (Aa = Ua(V, "Trident/") + 4, N = Ya || la || ma || hb ? 3 : Ab && 5 <= Ba ? 7 : 2, B = Ba) : t ? (N = 23 === q ? 6 : 5, B = g(V, "Edge/")) : vb ? (N = 13, B = vb) : eb ? (N = O ? 12 : 11, B = Ja || ca) : cb ? (N = 24, B = cb) : (K = zb || g(a, "NetFront/")) ? (N = 18, B = K) : (K = g(a, "iCab")) ? (N = 19, B = K) : (K = xa(g(a, "Opera Mini/"), g(a, "Opera Mobi/")) || Eb && Va) ? (N = 10, B = K, q || (k(a, "iPhone") ? za = 
  0 : k(a, "iPad") ? za = 1 : k(a, "iPod") && (za = 2), za && (q = 24))) : nb ? (N = 25, B = ob) : wb ? (N = 14, B = jb) : ya && va ? (N = 21, B = qa) : mb || Fb || Hb ? (N = O ? 22 : 20, B = ib || Ib) : ya && Ka ? (N = 23, B = 5 > ia(qa) ? qa : ib) : ya && (Va || sa) ? (N = 21, B = qa) : ib ? (N = O ? 22 : 20, B = ib) : Wa && (N = 15, B = Wa));
  q && (Q[2] = q, n && (Q[3] = Db(n)));
  N && (Q[0] = N, B && (Q[1] = Db(B)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var Q = this[this.length - 1];
  --this.length;
  return Q;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Q = arguments, m = 0, w = Q.length, r = this.length; m < w; ++m) {
    this[r + m] = Q[m];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Q = this[0], m = 1, w = this.length; m < w; ++m) {
    this[m - 1] = this[m];
  }
  --this.length;
  return Q;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Q = arguments, m = Q.length, w = this.length += m - 1, r = w; r >= m; --r) {
    this[r] = this[r - m];
  }
  for (r = 0; r < m; ++r) {
    this[r] = Q[r];
  }
  return w;
});
Array.prototype.splice || (Array.prototype.splice = function(Q, m) {
  var w = arguments, r = w.length - 2 - m, A = this.slice(Q, Q + m), ia;
  if (0 < r) {
    var J = this.length - 1;
    for (ia = Q + m; J >= ia; --J) {
      this[J + r] = this[J];
    }
  } else if (0 > r) {
    J = Q + m;
    for (ia = this.length; J < ia; ++J) {
      this[J + r] = this[J];
    }
    this.length += r;
  }
  J = 2;
  for (ia = w.length; J < ia; ++J) {
    this[J - 2 + Q] = w[J];
  }
  return A;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Q, m) {
  var w = this.length >>> 0;
  if (0 === w) {
    return -1;
  }
  if (m) {
    var r = m || 0;
    r = -Infinity === r ? 0 : (0 > r ? -r : r) | 0;
    if (w <= r) {
      return -1;
    }
  }
  for (r = 0 <= r ? r : 0 < w + r ? w + r : 0; r < w; ++r) {
    if (this[r] === Q) {
      return r;
    }
  }
  return -1;
});
(function(Q, m, w, r, A, ia, J, Ga, Ua, k, ab, E) {
  function g(l) {
    if (m[0] === l) {
      return H === H + "" ? J(H) : H;
    }
  }
  function xa(l) {
    var F = m[3];
    if (m[2] === l) {
      return F === F + "" ? J(F) : F;
    }
  }
  function Db(l, F, ja) {
    l + "" === l && ("a" === l.charAt(2) && (ja = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > S ? 117 : 0.9 > W || 9 > t || 9 > S || Sa ? 1 : 132 : parseInt(l, 16));
    ja && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (F || 2));
  }
  var Ha = A.body, a = Ha.style, V, jb, H = m[1], t = g(2) || g(3), Sa = g(7), Ba = g(5) || g(6), S = g(8) || g(9), W = g(11) || g(12), kb = W && 0 <= m.conpare(H, "1.9.1"), lb = g(13), bb = g(15), Va = g(16) || g(17), Eb = g(10) || g(25), Ia = g(20) || g(22), Nb = Ia || g(23) || g(21) || g(24), Fb = Ia && J(ia.userAgent.split("Edg/")[1]);
  ia = J(ia.appVersion.split("Trident/")[1]) + 4;
  var db = xa(35) || xa(36) || xa(37), mb = !t && !Sa && (new Ga('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), eb = (Sa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > S ? "opr70" : 8 > S ? "opr72" : 9.5 > S ? "opr" + (S | 0) : W && !kb ? 1.4 <= W ? "gck19" : 1.3 <= W ? "gck13" : 1 <= W ? "gck12" : 0.9 <= W ? "gck09" : 0.8 <= W ? "gck08" : "gck07" : "modern") + 
  ".css";
  xa(1) || xa(2) || xa(3) || xa(4) || xa(8) || xa(9) || xa(10);
  var nb, ob, tb, Pa = 8 > t || 7.2 > S ? !1 : E, qa = a.transform !== E ? "transform" : a["-o-transform"] !== E ? "-o-transform" : a["-ms-transform"] !== E ? "-ms-transform" : a.MozTransform !== E ? "-moz-transform" : a["-webkit-transform"] !== E ? "-webkit-transform" : "", fb = [], ya = [], Qa = [], ub, vb, Ja, ca, K, Gb, Wa, ib, Ib, Hb;
  (function() {
    function l() {
      for (var h, p = 0, x = new ab() - 0; p < fa.length;) {
        x < fa[0].t ? ++p : (h = fa.splice(p, 1)[0], h.f(h.p));
      }
      c = fa.length ? Ua(l, ka) : 0;
    }
    function F() {
      for (var h, p = 0; p < da.length; ++p) {
        h = da[p], h.f();
      }
    }
    function ja() {
      T && (T = clearInterval(T));
    }
    function na() {
      c && (c = k(c));
    }
    Gb = function(h) {
      da.length || (T = setInterval(F, ra));
      da.push({f:h, l:++ta});
      return ta;
    };
    Wa = function() {
      T && (ja(), T = setInterval(F, ra));
    };
    ib = ja;
    var da = [], ra = 500, ta = 0, T;
    if (5 > t || Sa) {
      w._wdb_onlooptimer = F, F = "_wdb_onlooptimer()";
    }
    ca = function(h, p, x) {
      fa.length || (c = Ua(l, ka));
      fa.push({f:h, p:p, l:++d, t:new ab() - 0 + (ka < x ? x : ka)});
      return d;
    };
    K = function(h) {
      for (var p = fa.length, x; x = fa[--p];) {
        if (x.l === h) {
          fa.splice(p, 1);
          break;
        }
      }
      return 0;
    };
    Ib = function() {
      c && (na(), c = Ua(l, ka));
    };
    Hb = na;
    var fa = [], ka = 16, d = 0, c;
    if (5 > t || Sa) {
      w._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var wb, Jb, pb, cb, xb, va, gb, Xa, Ta, Ka, Kb, qb, yb, rb, Lb, q, n, N, B, zb;
  (function() {
    function l(d, c, h) {
      var p = ["<", d], x = 1, P, L;
      if (c) {
        for (P in c) {
          var M = c[P];
          if (null != M && "" !== M) {
            if ("style" === P) {
              p[++x] = ' style="';
              for (L in M) {
                for (var Ma = ++x, Ca, wa = [], oa = L.split(""), Da = oa.length; Da;) {
                  Ca = oa[--Da], "A" <= Ca && "Z" >= Ca && (Ca = "-" + Ca.toLowerCase()), wa[Da] = Ca;
                }
                p[Ma] = wa.join("") + ":" + M[L] + ";";
              }
              p[++x] = '"';
            } else {
              "className" === P && (P = "class"), p[++x] = " " + P + '="' + M + '"';
            }
          }
        }
      }
      p[++x] = ">";
      null != h && (T && "font" !== d ? p[++x] = "<FONT>" + h + "</FONT>" : p[++x] = h);
      p[++x] = "</" + d + ">";
      return p.join("");
    }
    function F(d) {
      d = "*" === d && 6 > t ? "*" !== d ? A.all.tags(d.toUpperCase()) : A.all : A.getElementsByTagName(d);
      var c = [], h = 0, p;
      for (p = d.length; h < p; ++h) {
        c[h] = d[h];
      }
      return c;
    }
    function ja(d) {
      return T ? d.parentElement : d.parentNode;
    }
    function na(d, c, h, p, x, P) {
      if (T) {
        var L = 0 === d ? "beforebegin" : 1 === d ? "afterend" : "beforeend";
        var M = cb(2 > d ? pb(c) : c);
        M = 2 > d ? M.indexOf(c) + d : M.length;
        c.insertAdjacentHTML(L, l(h, p, x));
        c = cb(c)[M];
        null != x && ("font" === h ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (fa) {
        c = A.createElement(l(h, p));
      } else {
        c = P ? A.createElementNS("http://www.w3.org/2000/svg", h) : A.createElement(h);
        if (p) {
          for (L in p) {
            if ((h = p[L]) || 0 === h) {
              switch(L) {
                case "class":
                case "className":
                  Lb(c, h);
                  break;
                case "style":
                  d = c.style;
                  for (M in h) {
                    d[M] = h[M];
                  }
                  break;
                default:
                  yb(c, L, h);
              }
            }
          }
        }
        ka || null != x && da(c, x);
      }
      return c;
    }
    function da(d, c) {
      if (T) {
        return na(2, d, "font", E, c);
      }
      var h = A.createTextNode("" + c);
      d.appendChild(h);
      return h;
    }
    function ra(d, c) {
      9 > t ? d.className = c : d.setAttribute("class", c);
    }
    function ta(d, c) {
      return -1 !== (" " + d.className + " ").indexOf(" " + c + " ");
    }
    var T = 5 > t;
    V = F("html")[0];
    jb = F("head")[0];
    wb = F;
    Jb = function(d) {
      var c = [], h = 0, p, x = -1;
      if (9 > t || !A.getElementsByClassName) {
        var P = 6 > t ? A.all : A.getElementsByTagName("*");
      } else {
        var L = !0;
        P = A.getElementsByClassName(d);
      }
      for (p = P.length; h < p; ++h) {
        var M = P[h];
        if (L || (T || 1 === M.nodeType) && ta(M, d)) {
          c[++x] = M;
        }
      }
      return c;
    };
    pb = ja;
    cb = function(d) {
      d = T ? d.children : d.childNodes;
      for (var c = [], h = d.length; h;) {
        c[--h] = d[h];
      }
      return c;
    };
    xb = function(d) {
      var c = !(7.03 < S && 7.2 > S) && d.children;
      d = c ? c : d.childNodes;
      for (var h = [], p = d.length, x = -1, P; p;) {
        if (P = d[--p], c || 1 === P.nodeType) {
          T && "FONT" === P.tagName || (h[++x] = P);
        }
      }
      return h;
    };
    va = function(d, c, h, p, x) {
      c = na(2, d, c, h, p, x);
      T || (d.appendChild(c), ka && null != p && da(c, p));
      return c;
    };
    gb = function(d, c, h, p, x) {
      c = na(0, d, c, h, p, x);
      T || (ja(d).insertBefore(c, d), ka && null != p && da(c, p));
      return c;
    };
    Xa = da;
    Ta = function(d, c) {
      if (T) {
        return na(0, d, "font", E, c);
      }
      var h = A.createTextNode("" + c);
      pb(d).insertBefore(h, d);
      return h;
    };
    Ka = function(d) {
      T ? d.outerHTML = "" : pb(d).removeChild(d);
    };
    var fa = 9 > t, ka = fa;
    Kb = function(d) {
      return d.tagName.toUpperCase();
    };
    qb = function(d, c) {
      return d.getAttribute(c) || "";
    };
    yb = function(d, c, h) {
      d.setAttribute(c, h);
    };
    rb = function(d, c) {
      d.removeAttribute(c);
    };
    Lb = ra;
    q = ta;
    n = function(d, c) {
      var h;
      if (!ta(d, c)) {
        if (h = d.className) {
          c = " " + c;
        }
        ra(d, h + c);
      }
    };
    N = function(d, c) {
      if (ta(d, c)) {
        var h = d.className.split(" ");
        h.splice(h.indexOf(c), 1);
        ra(d, h.join(" "));
      }
    };
    B = function(d, c, h) {
      d.style[c] = h;
    };
    zb = function(d, c) {
      var h = -1, p, x;
      if (5.5 > t) {
        if (c) {
          for (p = c.split(";"); x = p[++h];) {
            var P = x.split(":");
            d.style[P[0]] = x.substr(P[0].length + 1);
          }
        } else {
          d.removeAttribute("style");
        }
      } else {
        9 > S || 1 > W ? c ? d.setAttribute("style", c) : d.removeAttribute("style") : d.style.cssText = c;
      }
    };
  })();
  var Ya, za, la, ma, hb, Aa, La, O, Ab;
  (function() {
    function l() {
      return wa ? Da ? 2 : oa ? 3 : 1 : 0;
    }
    function F(b) {
      za(w, "load", F);
      F = E;
      na(fb, b, !0);
      la = fb = E;
    }
    function ja(b, e) {
      hb(function() {
        var v = fa(b);
        e(v);
        v.addListener(e);
        return !0;
      });
    }
    function na(b, e, v) {
      for (var f = 0; f < b.length; ++f) {
        !0 === b[f](e) && (b.splice(f, 1), --f);
      }
      v && (b.length = 0);
    }
    function da(b, e, v) {
      c && !d.length && ca(ra);
      d.push(b, e, v);
    }
    function ra() {
      var b = d, e;
      for (d = []; e = b.shift();) {
        na(e, b.shift(), b.shift());
      }
    }
    function ta(b) {
      var e = b || event;
      b = h[e.type];
      var v = -1, f, z;
      t ? (e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : x && (e.j = e.stopPropagation, e.stopPropagation = function() {
        z = !0;
      });
      for (; f = b[++v];) {
        f.i === this ? (this.g = f.h, this.g(e), this.g = r, this.g = E) : 7.2 > S && this === A && f.i === w && (w.g = f.h, w.g(e), delete w.g);
      }
      if (t) {
        return e.preventDefault = e.stopPropagation = E, e.returnValue;
      }
      x && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && (L = !0), z && !L && e.j(), e.j = e.stopPropagation = E);
    }
    function T() {
      var b = 9 === ka.offsetWidth;
      La !== b && da(ya, La = b);
    }
    var fa = w.matchMedia, ka, d = [], c;
    fb.push(function() {
      ja = E;
      ka = va(Ha, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      la(function() {
        c = !0;
        d.length && ca(ra);
      });
    });
    Ya = function(b, e, v, f) {
      if (P) {
        b.addEventListener(e, v, f ? mb ? f : f.capture : !1);
      } else {
        var z = {i:b, h:v};
        f = h[e];
        var C = "on" + e, D, G;
        if (f) {
          for (D = f.length; G = f[--D];) {
            if (G.i === b && G.h === v) {
              return;
            }
          }
          h[e].push(z);
        } else {
          h[e] = f = [z], p || (e = b[C], "function" === typeof e && e !== ta && f.unshift({i:b, h:e}));
        }
        p ? b.attachEvent(C, ta) : b[C] = ta;
      }
    };
    za = function(b, e, v, f) {
      if (P) {
        b.removeEventListener(e, v, f ? mb ? f : f.capture : !1);
      } else {
        f = h[e];
        e = "on" + e;
        var z, C, D;
        if (f) {
          for (z = f.length; C = f[--z];) {
            C.i === b && (C.h === v ? f.splice(z, 1) : D = !0);
          }
          D || (p ? b.detachEvent(e, ta) : (b[e] = r, b[e] = null));
        }
      }
    };
    var h = {}, p = !1, x = 525.13 > bb, P = !x && !Sa && w.addEventListener, L;
    x && V.addEventListener("click", function(b) {
      if (L) {
        return L = !1, b.preventDefault(), !1;
      }
    });
    la = function(b) {
      fb.push(b);
    };
    ma = function(b) {
      M && M.push(b);
    };
    var M = [];
    if (419.3 >= bb) {
      var Ma = function() {
        if (Ma) {
          var b = A.readyState;
          "loaded" === b || "complete" === b ? (Ma = E, F()) : ca(Ma);
        }
      };
      ca(Ma);
    } else {
      Ya(w, "load", F);
    }
    t || 0.9 <= W && 1.8 > W ? Ya(w, "unload", function(b) {
      na(M, b, !0);
    }) : M = E;
    hb = function(b) {
      ya.push(b);
    };
    la(function() {
      T();
      Gb(T);
    });
    Aa = function(b) {
      Qa && Qa.push(b);
    };
    var Ca = 60 > W || lb, wa, oa, Da;
    if (89 <= W || 89 <= Ia || db && 79 <= Fb || fa && (fa("(forced-colors:none)").matches || fa("(forced-colors:active)").matches)) {
      Ab = !0, ja("(forced-colors:active)", function(b) {
        wa = b.matches;
        O = l();
        da(Qa, O);
      });
    } else if (10 <= t || Ba || db && Fb) {
      Ab = !0, ja("(-ms-high-contrast:black-on-white)", function(b) {
        wa = oa = b.matches;
        O !== l() && (O = l(), da(Qa, O));
      }), ja("(-ms-high-contrast:white-on-black)", function(b) {
        wa = Da = b.matches;
        O !== l() && (O = l(), da(Qa, O));
      }), ja("(-ms-high-contrast:active)", function(b) {
        wa = b.matches;
        O !== l() && (O = l(), da(Qa, O));
      });
    } else if (db && (t || W && 0 <= m.conpare(H, "1.8.1") || lb)) {
      var X = function() {
        function b(f, z) {
          if (z && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var C = f.split("(")[1].split(",");
          return J(C[0]) + J(C[1]) + J(C[2]);
        }
        var e = A.defaultView;
        var v = e ? e.getComputedStyle(ka, null) : ka.currentStyle;
        e = (v && v.color || "").split(" ").join("");
        v = (v && v.backgroundColor || "").split(" ").join("");
        e && (wa = "#123456" !== e && "rgb(18,52,86)" !== e, oa = b(e) < b(v, !0), Da = b(e) > b(v, !0), O !== l() && (O = l(), da(Qa, O, Ca)));
      };
      hb(function(b) {
        if (b) {
          return B(ka, "color", "#123456"), B(ka, "backgroundColor", "#123456"), Ca ? (X(), Qa = E) : Gb(X), X = E, !0;
        }
      });
    } else {
      Qa = l = E;
    }
  })();
  (function() {
    function l(f) {
      x(f);
      e && !f && Ka(e);
      x = P = L = M = Ma = Ca = Da = X = b = v = e = E;
    }
    function F(f) {
      A.fonts.load('1.6em "' + f + '"').then(function() {
        var z;
        (z = da(P)) ? ca(l, z) : na(!0);
      }, function() {
        Pa !== E ? ra(Pa) : ub(ra);
      });
    }
    function ja(f) {
      return A.hidden || A.msHidden || A.mozHidden || A.webkitHidden ? (oa = new ab() - 0, !1) : f < new ab() - oa;
    }
    function na(f) {
      var z;
      f && (oa = new ab() - 0);
      (z = da(P)) ? l(z) : ja(wa) ? Da || ka ? l(0) : Pa !== E ? ra(Pa) : ub(ra) : ca(na);
    }
    function da(f) {
      var z = 0, C = -1, D = 0;
      if (!v) {
        var G = -1;
        var I;
        X = va(Ha, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, h);
        for (v = {}; I = p[++G];) {
          B(X, "fontFamily", I), v[I] = X.offsetWidth;
        }
      }
      for (5 > t ? X || (X = va(Ha, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, h)) : Ha.appendChild(X); G = p[++C];) {
        if (B(X, "fontFamily", '"' + f + '",' + G), X.offsetWidth !== v[G]) {
          z = 1;
          break;
        }
      }
      !t && z && Ma && (X.innerHTML = Ma, f = X.offsetWidth, X.innerHTML = Ca, D = f === X.offsetWidth ? 1 : 0, X.innerHTML = h);
      Ka(X);
      5 > t && (X = E);
      return z + D;
    }
    function ra(f) {
      f ? (Da = !0, ta(!0)) : l(0);
    }
    function ta(f) {
      var z;
      if (L) {
        for (z in f && (oa = new ab() - 0), L) {
          da(z) ? (b = va(Ha, "div", {"aria-hidden":"true", className:M, id:M}), e = va(jb, "link", {type:"text/css", rel:"stylesheet", href:L[z]}), ca(T, !0)) : ja(c) ? (delete L[z], ca(ta, !0)) : ca(ta);
          return;
        }
      }
      l(0);
    }
    function T(f) {
      f && (oa = new ab() - 0);
      1 < b.offsetWidth ? (Ka(b), wa = c, ca(na, !0)) : ja(wa) ? 528 > bb ? (Ka(b), wa = c, ca(na, !0)) : (Ka(b), l(0)) : ca(T);
    }
    ya.splice(0, 0, function() {
      if (La) {
        tb = 8 <= t || Ba || 9.5 <= S || kb || lb || 522 <= bb || 3 <= Va || Eb || Nb ? 3 : 7.2 <= S ? 2 : 6 <= S || W ? 1 : 0;
        if (!tb && !t && !Sa) {
          var f = va(Ha, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          tb = 6 <= f.offsetWidth ? 2 : 0;
          Ka(f);
        }
        return !0;
      }
    });
    ub = !1 === Pa ? function(f) {
      ca(f, Pa);
    } : function(f) {
      function z(G) {
        D = K(D);
        Pa = G;
        C.onload = C.onerror = r;
        ca(f, G);
      }
      if (Pa !== E) {
        ca(f, Pa);
      } else if (8 > t) {
        ca(f, !1);
      } else {
        var C = new Image(), D = ca(function() {
          D && z(!1);
        });
        C.onerror = function() {
          z(!1);
        };
        C.onload = function() {
          z(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && la(function() {
      var f = va(Ha, "div");
      zb(f, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      nb = 1 < f.offsetHeight;
      zb(f, "");
      Ka(f);
    });
    vb = function(f, z) {
      function C() {
        if (G || !I || D.complete) {
          var y = !!D.width;
          ob = ob || y;
          ca(f, y);
          D.onerror = D.onload = r;
          D = f = E;
        } else {
          --I, ca(C);
        }
      }
      var D = new Image(), G, I = 99;
      D.onerror = function() {
        G = !0;
      };
      D.onload = function() {
        G = !0;
      };
      D.src = z;
      ca(C);
    };
    Ja = function(f, z, C, D, G, I, y) {
      x = f;
      P = z;
      L = C;
      M = D;
      Ma = G;
      Ca = I;
      wa = y || d;
      fa ? ca(l, 0) : !A.fonts || 603 > bb ? na(!0) : F(P);
    };
    var fa = 525 > bb || 10 > S || W && !kb || 2.2 > g(21) || g(25) || 10 > g(3) || xa(32) || xa(30) || xa(3), ka = 9 > t || 2 > Ia || 12 > S, d = 5000, c = 100, h = "mmmmmmmmmmlli", p = ["sans-serif", "serif"], x, P, L, M, Ma, Ca, wa, oa, Da, X, b, e, v;
  })();
  var sa = String.fromCharCode, u = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", sa(960), ")", "(", sa(234), sa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", sa(9824), "\u2190", sa(9829), sa(9830), sa(9827), sa(956), "\u03a9", "\u2193", "\u2192", "%", sa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", sa(9619)];
  a = (9 === t || W && 0 <= m.conpare(H, "1.8.1") || lb) && !Ab;
  var aa = [], R, ea, Oa = 7.2 > S ? function() {
    R = !R;
    for (var l = -1, F; F = aa[++l];) {
      -1 !== F.className.indexOf("pbAlp") ? B(F, "display", R ? "" : "none") : (n(F, R ? "pbChrCS" : "pbChr00"), N(F, R ? "pbChr00" : "pbChrCS"));
    }
  } : a ? function() {
    R = !R;
    for (var l = -1, F; F = aa[++l];) {
      B(F, "opacity", R ? 1 : 0);
    }
  } : E;
  var Ob = Q.startBlinkingIfCursor = function(l) {
    Oa ? q(l, "pbChrCS") && (ea || !S && !O || (ea = setInterval(Oa, 400)), -1 === aa.indexOf(l) && aa.push(l)) : aa = E;
  };
  Q.stopBlinkingIfCursor = function(l) {
    Oa && (l = aa.indexOf(l), 0 <= l && (aa.splice(l, 1), !aa.length && ea && (clearInterval(ea), ea = 0)));
  };
  a && Aa(function(l) {
    l ? ea || (ea = setInterval(Oa, 400)) : ea && (clearInterval(ea), ea = 0);
  });
  Oa && ma(function() {
    ea && clearInterval(ea);
  });
  Ab || Aa(function(l) {
    l ? (yb(V, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (qa || 9 === t || 5.5 <= t && 9 > t && nb) && n(V, "jsCanRotate")) : (rb(V, "forced-colors"), N(V, "jsCanRotate"));
  });
  (function() {
    function l(b) {
      (M = b) ? da() : ob ? na(!0) : ob !== E ? da() : vb(na, Ma);
    }
    function F() {
      F = E;
      Ja(l, "PB-100", {"PB-100_canTTF":Za + "pbFont/ttf.css", "PB-100_canWOFF":Za + "pbFont/woff.css", "PB-100_canEOT":Za + "pbFont/eot.css", "PB-100_canSVG":Za + "pbFont/svg.css"}, "pbFont-testCssReady", c, "i", 5000);
    }
    function ja(b) {
      this.focus();
      b.preventDefault();
      b.stopPropagation();
    }
    function na(b) {
      b && n(Ha, "pbList-noWebFont");
      da();
    }
    function da() {
      for (l = Ja = E; L.length;) {
        ra(L.shift(), L.shift());
      }
    }
    function ra(b, e) {
      function v(I) {
        I = cb(I);
        for (var y = -1, ba; ba = I[++y];) {
          switch(ba.nodeType) {
            case 1:
              v(ba);
              break;
            case 3:
              ba.data && z(ba.data) && C.push(ba);
          }
        }
      }
      function f(I) {
        var y = I.children, ba = 0, $a = y.length;
        if ($a) {
          for (; ba < $a; ++ba) {
            f(y[ba]);
          }
        } else {
          (y = I.innerText) && z(y) && C.push(I);
        }
      }
      function z(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var C = [], D;
      if (l) {
        -1 === L.indexOf(b) && (L.push(b, e), Ca && F && F());
      } else {
        var G = L.indexOf(b);
        0 <= G && L.splice(G, 2);
        for (5 > t ? f(b) : v(b); D = C.shift();) {
          G = 5 > t ? D.innerText : D.data, 2 !== M && (G = G.split(c).join(ka)), e ? 5 > t ? D.innerText = G : D.data = G : ta(G.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(d).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fa).split("&amp;").join("&"), D);
        }
      }
    }
    function ta(b, e) {
      function v(pa, U) {
        for (var Ea = ""; U;) {
          U & 1 && (Ea += pa), U >>= 1, pa += pa;
        }
        return Ea;
      }
      function f(pa, U, Ea) {
        for (var Bb, Rb = -1, Pb, Qb; Bb = U[++Rb];) {
          for (; 0 <= (Pb = pa.indexOf(Bb));) {
            Qb = Bb.length, pa = pa.substr(0, Pb) + v(Ea, Qb) + pa.substr(Pb + Qb);
          }
        }
        return pa;
      }
      function z(pa) {
        var U = J(pa), Ea = "" + U;
        return 0 < U && U === U | 0 && (U = pa.indexOf(Ea) + Ea.length, U <= pa.length) ? U : 0;
      }
      var C = " area line str cmd fnc syb".split(" "), D = 5 > t || 1 === e.nodeType, G = [], I = "", y, ba = -1, $a, sb, Na;
      if (D) {
        if (Da) {
          var Mb = e.style.visibility;
          B(e, "visibility", "hidden");
        }
        e.innerHTML = "";
      }
      if (X) {
        var Cb = e;
        e = A.createDocumentFragment();
      }
      if (function(pa) {
        var U = pa.indexOf("P");
        if (-1 === U) {
          return !1;
        }
        U = J(pa.charAt(U + 1));
        return 0 <= U && 9 >= U;
      }(b)) {
        I = v("+", b.length);
      } else {
        0 <= (y = z(b)) && (I = v("|", y), ba = y, --ba);
        for (; y = b.charAt(++ba);) {
          y === fa || $a ? (I += "~", y === fa && ($a = !$a)) : I += y;
        }
        I = f(I, P, "^");
        I = f(I, p, "{");
        I = f(I, x, "}");
      }
      ba = 0;
      for ($a = b.length; ba < $a; ++ba) {
        y = b.charAt(ba);
        var Y = y === h;
        var ha = " " === y;
        y = Y ? " " : y;
        var Z = I.charAt(ba);
        var Ra = (sb = Fa) && Y;
        var Fa = "|" === Z;
        Z = C["+|~{}^".indexOf(Z) + 1];
        "\n" !== y ? (M || !ob ? (2 === M && b.substr(ba, 2) === c && (y = c, ++ba), Z = ha && "str" === Z ? "pbList-strsp" : Y ? "" : !ha && Z ? "pbList-" + Z : "") : (Y = u.indexOf(y), Y = -1 === Y ? "" : u.indexOf(y).toString(16).toUpperCase(), Y = (Y = 1 === Y.length ? "0" + Y : Y) ? "pbChr" + Y : "", Z = ha && "str" === Z ? "pbList-strsp" : ha || !Y ? "" : Z ? (Y ? Y + " " : "") + "pbList-" + Z : Y), Y = E, Ra ? (y = 6 <= t && 8 > t ? " " : h, Z = "") : Fa && (W && !kb || 9.5 > S) ? (Fa && !sb && 
        (Na = 4 - (J(b.substr(ba)) + "").length), 7.5 > S ? Y = oa ? "position:relative;top:-4px;left:" + 12 * Na + "px" : {position:"relative", top:"-4px", left:12 * Na + "px"} : Y = oa ? "position:relative;left:" + 12 * Na + "px" : {position:"relative", left:12 * Na + "px"}) : ha && 7.5 > S && (Z = "pbList-strsp"), oa ? G.push("<font" + (Z ? ' class="' + Z + '"' : "") + (Y ? ' style="' + Y + '"' : "") + ">" + y + "</font>") : D || X ? va(e, "font", {"class":Z, style:Y}, y) : gb(e, "font", {"class":Z, 
        style:Y}, y)) : (sb = Fa = !1, oa ? G.push(y) : D || X ? Xa(e, y) : Ta(e, y));
      }
      if (D) {
        oa ? e.innerHTML = G.join("") : X && Cb.appendChild(e), Da && B(e, "visibility", Mb);
      } else {
        if (oa) {
          C = A.createElement("font");
          for (C.innerHTML = G.join(""); G = C.firstChild;) {
            e.parentNode.insertBefore(G, e);
          }
          Ka(e);
        } else {
          X ? Cb.parentNode.replaceChild(e, Cb) : Ka(e);
        }
      }
    }
    hb(function(b) {
      if (b) {
        b = Jb("pbChrCS");
        for (var e = 0, v = b.length; e < v; ++e) {
          Ob(b[e]);
        }
        return !0;
      }
    });
    var T = [];
    hb(function(b) {
      function e(ha) {
        var Z = qb(ha, "pbTip");
        if (Z) {
          var Ra = Z.charAt(0);
          var Fa = "_" === Ra;
          Z = (Fa ? Z.charAt(2) : Ra).toUpperCase().charCodeAt(0) - 65;
          G ? va(ha, "div", {style:{left:7 * Z + 3 + "px"}}) : (Ra = qb(ha, "title"), rb(ha, "pbTip"), rb(ha, "title"), Fa = va(ha, "div", {className:"pbTip" + (Fa ? "Btm" : ""), style:{width:Ra.length + f + "em", left:7 * Z - 5 + "px"}}, Ra), va(Fa, "div"));
        }
        D && 0 <= ha.className.indexOf("pbColor") && va(ha, "u");
      }
      function v(ha, Z) {
        var Ra = qb(ha, "pbGhst"), Fa = ha.className, pa = Fa.split("pbCsr")[1] || "", U = Fa.split("pbAlp")[1] || "";
        if ("CS" === Ra) {
          var Ea = "_";
        } else {
          Ea = Ra, 3 === Ea.length && (Ea = Ea.substr(0, 2)), Ea = u[parseInt(Ea, 16)] || "~";
        }
        var Bb;
        pa = pa.split(" ")[0];
        if (U = J(U.split(" ")[0])) {
          z && (Fa = Fa.split("pbChr")[1].split(" ")[0], B(ha, "backgroundPosition", Db(Fa, 2, Mb) + "px " + -24 * (10 - U) + "px")), !Z && C && gb(ha, "a").appendChild(ha);
        }
        Ra && (U = 10 - U, z && (Bb = {backgroundPosition:Db(Ra, 2, Mb) + "px " + -24 * (10 - U) + "px"}), rb(ha, "pbGhst"), ba = gb(ha, "b", {className:"pbChr" + Ra + " pbCsr" + pa + " pbAlp" + U, style:Bb}, Ea), Ob(ba));
        Ob(ha);
      }
      if (b) {
        var f = 6 > t ? 2 : 0, z = 7.2 > S || 0.9 > W || Sa, C = 1.1 === W, D = 1.4 > W;
        b = wb("SAMP");
        var G = 8 === t, I = tb, y, ba, $a, sb, Na;
        nb && n(Ha, "pbLCD-AX");
        if (b.length) {
          for ($a = -1; y = b[++$a];) {
            if (q(pb(y), "pbLCD")) {
              var Mb = q(y, "PB-120") || q(y, "FX-795P");
              var Cb = xb(y);
              for (y = Cb.length; Na = Cb[--y];) {
                switch(Kb(Na)) {
                  case "A":
                    (2 > I || G) && e(Na);
                    if (2 > I) {
                      var Y = xb(Na);
                      for (sb = Y.length; sb;) {
                        v(Y[--sb], !0);
                      }
                    }
                    Eb ? yb(Na, "href", "javascript:void(0)") : (Ya(Na, "click", ja), T.push(Na));
                    break;
                  case "B":
                    2 > I && v(Na, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ma(function() {
      for (var b; b = T.shift();) {
        za(b, "click", ja);
      }
    });
    6 === t && (new Ga("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(A);
    var fa = u[7], ka = u[30], d = u[113], c = sa(8337) + sa(8331), h = sa(160);
    sa(8194);
    var p = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), x = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), P = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + ka + u[31]).split(""), L = [], M, Ma, Ca;
    if (0.9 <= W && 0 >= m.conpare(H, "0.9.1")) {
      n(V, "pbLCD-gecko09To091");
      var wa = !0;
    }
    hb(function(b) {
      if (b) {
        Ma = Za + "pbFont/x3mask" + (wa ? ".gecko0.9.1.gif" : ".png");
        b = wb("*");
        for (var e = -1, v; v = b[++e];) {
          q(v, "pbList") ? ra(v) : q(v, "pbFont") && ra(v, !0);
        }
        L.length && F();
        return !0;
      }
    });
    var oa = !1, Da = 8 > S, X = !oa && !Da && !(6 > t) && A.createDocumentFragment && !!Ha.replaceChild;
    Q.prettify = ra;
  })();
  a = A.scripts || wb("script");
  var Za = a[a.length - 1].src.split("/");
  --Za.length;
  (Za = Za.join("/")) && (Za += "/");
  6.1 > Va && Ya(w, "scroll", Wa);
  ma(ib);
  6.1 > Va && Ya(w, "scroll", Ib);
  ma(Hb);
  10 > t && (11 !== ia || 5 !== t) || (9 > S || 1 > W || !Sa && !w.addEventListener ? A.write('<link href="' + Za + eb + '" rel="stylesheet"' + (8 > S ? "" : ' media="screen,handheld,projection,print"') + ">") : la(function() {
    va(jb, "link", {href:Za + "" + eb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

