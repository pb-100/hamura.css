PB100={};var p;
ua = [];
ua.conpare = function(da, t) {
  var C = 0, x, I, ta = (da + "").split("."), U = (t + "").split("."), La = ta.length;
  for (x = U.length; "0" === ta[La - 1];) {
    --La;
  }
  for (; "0" === U[x - 1];) {
    --x;
  }
  for (I = La < x ? La : x; C < I; ++C) {
    var Za = ta[C] - 0, q = U[C] - 0;
    if (Za !== q) {
      return Za > q ? 1 : -1;
    }
  }
  return La > x ? 1 : La === x ? 0 : -1;
};
(function(da, t, C, x, I, ta, U, La) {
  function Za(E, va, ka) {
    ka = ta(E.split(va)[1]);
    return 0 <= ka ? ka : 0;
  }
  function q(E, va) {
    return 0 <= E.indexOf(va);
  }
  function $a(E) {
    return q(E, "Linux armv") || q(E, "Linux aarch") || q(E, "Linux i686") || q(E, "Linux x86_64");
  }
  function L(E, va) {
    for (var ka in va) {
      if (ka === E) {
        return !0;
      }
    }
  }
  function g(E, va) {
    var ka = "", Y = -1, Ua;
    if (E = E.split(va)[1]) {
      for (; Ua = E.charCodeAt(++Y);) {
        if (48 <= Ua && 57 >= Ua || 46 === Ua) {
          ka += E.charAt(Y);
        } else {
          break;
        }
      }
      for (Y = ka.length; Y;) {
        if (46 === ka.charCodeAt(--Y)) {
          ka = ka.substr(0, Y);
        } else {
          break;
        }
      }
    }
    return ka;
  }
  function ya(E) {
    for (var va = arguments, ka = 1, Y = va[0], Ua; ka < va.length; ++ka) {
      0 > Fa(Y, Ua = va[ka]) && (Y = Ua);
    }
    return Y;
  }
  function Fb(E) {
    return E === E + "" ? E : E === E - 0 ? "" + E : E.min && E.max ? E.min + "~" + E.max : E.min ? E.min + "~" : "~" + E.max;
  }
  var Fa = da.conpare, d = x.userAgent, fa = x.appVersion, ib = ta(fa) || 0, R = x.platform, v = C.documentElement, ab = v && v.style, Ga = C.documentMode, V = I.width;
  I = I.height;
  var ea = t.HTMLAudioElement, pb = t.performance, qb = t.Int8Array, Ha = t.ontouchstart !== La, bb = g(fa, "Version/") || g(d, "Version/"), Gb = t.operamini, Aa = !Gb && t.opera, Ub = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : ya(g(d, "Opera "), bb, ib)), Hb = t.opr, rb = !Aa && (C.all || Ga);
  Ga = rb && (Ga ? Ga : t.XMLHttpRequest ? C.getElementsByTagName ? 7 : 4 : C.compatMode ? 6 : (0).toFixed ? 5.5 : t.attachEvent ? 5 : 4);
  v = !rb && v.msContentZoomFactor;
  var db = !v && (t.chrome || t.chromium), fb = !rb && function() {
    for (var E in ab) {
      if (0 === E.indexOf("Moz")) {
        return !0;
      }
    }
  }(), xb = q(d, "UCWEB"), Ib = xb && g(d, " U2/"), sb = xb && g(d, "; wds "), gb = g(d.split("_").join("."), "; iPh OS "), ia = g(d, "; Adr "), yb = q(fa, "YJApp-ANDROID"), wa = q(R, "Android") || fb && q(fa, "Android") || yb;
  ia = g(R, "Android ") || g(fa, "Android ") || g(d, "Android ") || ia;
  var tb = q(R, "Linux"), Va = "MacIntel" === R && x.standalone !== La, ub = fb && g(d, "Goanna/"), Pa = !ub && fb && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Jb = g(d, "Firefox/"), A = g(d, "Opera/"), Ob = t.FNRBrowser, Qa = Za(d, "AppleWebKit/"), eb = g(d, "Chrome/"), zb = g(fa, "Iron/"), Kb = g(d, "OPR/"), Pb = g(fa, "KHTML/"), Qb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var Rb = g(d, "Silk/"), jb = Za(d, "SamsungBrowser/"), kb = !jb && function() {
    for (var E = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    va, ka = E.length; va = E[--ka];) {
      if (q(d, va)) {
        return 2 > ta(bb) ? bb : 0.9;
      }
    }
    E = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ka = E.length; va = E[--ka];) {
      if (q(d, va)) {
        return bb;
      }
    }
  }(), Lb = db && 534.3 >= Qa, Ia = $a(R), Ra = Ia && !q(d, R) && $a(d);
  Ha = Ha && (Qa || fb) && Ra || !ia && yb;
  yb = !!t.ReactNativeWebView;
  Ia = Ia && function() {
    for (var E in t) {
      if (0 === E.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Sa = (Ra = t.puffinDevice) && Ra.clientInfo;
  Sa = (Ra = Sa && "iOS" === Sa.os && Sa.osVersion) && Sa.model;
  var sa = !Ga && C.registerElement, lb = !Ga && C.execCommand, hb = t.webkitCancelAnimationFrame, Ab = tb && sa && "11.0.696.34" === eb, Sb = t._firefoxTV_playbackStateObserverJava, Ea = Za(d, "diordnA ");
  if ("Nitro" === R) {
    var B = 1;
  } else if ("Nintendo DSi" === R) {
    B = 2;
    var w = A;
  } else if ("New Nintendo 3DS" === R || q(d, "iPhone OS 6_0") && 320 === V && 240 === I) {
    B = 4, w = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    B = 3, w = g(d, "Version/"), Qa = 535;
  } else if ("Nintendo Swicth" === R) {
    B = 7, w = g(fa, "NintendoBrowser/");
  } else if (t.wiiu) {
    B = 6;
    w = g(fa, "NintendoBrowser/");
    var W = 15, X = g(fa, "AppleWebKit/") || (hb ? 536 : 534);
    w || (w = hb ? 4 : 2, q(fa, "Macintosh;") || q(fa, "Windows NT") && q(fa, "Touch"));
  } else if (Aa && Aa.wiiremote) {
    B = 5, w = g(d, "Wii; U; ; ");
  } else if (A = g(d, "PlayStation Vita ")) {
    B = 10, w = A;
  } else if (A = g(d, "(PlayStation Portable); ")) {
    B = 8;
    w = A;
    var Mb = 3.3;
  } else if (A = g(d, "PLAYSTATION 3; ") || g(d, "PLAYSTATION 3 ")) {
    B = 11, w = A, 0 > Fa("4.10", A) && (W = 26, X = A);
  } else if (q(d, "Xbox One")) {
    B = 15, w = 1;
  } else if (q(d, "Xbox")) {
    B = 14, w = 1;
  } else if (2 === ib && q(d, "Sony/COM2/")) {
    B = 17;
    w = 2;
    Mb = 3.4;
    var Wa = !0;
  } else if (0 === R.indexOf("iP") || gb || Ra || Va) {
    if (Ra) {
      switch(w = Ra, Sa.substr(0, 4)) {
        case "iPho":
          var xa = 0;
          g(Sa, xa);
          var Ba = !0;
          break;
        case "iPad":
          xa = 1;
          g(Sa, xa);
          var la = !0;
          break;
        case "iPod":
          xa = 2;
          g(Sa, xa);
          var Bb = !0;
      }
    } else {
      gb ? w = gb : (w = g(fa.split("_").join("."), "OS "), L("isSecureContext", t), L("enableWebGL", t), L("sameOrigin", t));
      if (!w || Ob) {
        w = t.PointerEvent ? 13 : t.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : t.WebAssembly ? 11.2 : t.HTMLMeterElement ? 10.3 : t.Proxy ? 10.2 : t.HTMLPictureElement ? 9.3 : U.isNaN ? 9.2 : t.SharedWorker ? pb && pb.now ? 8.0 : 8.4 : lb ? 7.1 : t.webkitURL ? 6.1 : t.Worker ? 5.1 : qb ? 4.3 : ea ? 4.1 : 3.2;
      }
      var za = V === 1.5 * I || 1.5 * V === I;
      0 === R.indexOf("iPhone") ? (xa = 0, Ba = !0) : 0 === R.indexOf("iPad") || Va ? (xa = 1, la = !0) : 0 === R.indexOf("iPod") && (xa = 2, Bb = !0);
    }
    W = !Ra && (x.standalone || (la || 12 > w) && L("webkitFullscreenEnabled", C) || 11 <= w && 13 > w && x.mediaDevices) ? 16 : 17;
    B = 24;
    X = w;
  } else if (q(d, "Kobo")) {
    B = 18, W = 21, X = 2.2, wa = !0;
  } else if (q(d, "EBRD")) {
    B = 19, W = 21, X = 2.2;
  } else if (A = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    B = 28, w = A;
  } else if (t.onmoztimechange !== La) {
    B = 29, w = 18.1 > Pa ? "1.0.1" : 19 > Pa ? 1.1 : 27 > Pa ? 1.2 : 29 > Pa ? 1.3 : 31 > Pa ? 1.4 : 33 > Pa ? 2.0 : 35 > Pa ? 2.1 : 38 > Pa ? 2.2 : 45 > Pa ? 2.5 : 2.6, q(d, "Mobile") ? Ba = !0 : q(d, "Tablet") ? la = !0 : q(d, "TV");
  } else if (t.palmGetResource) {
    B = 30, w = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), q(d, "webOS.TV") || q(d, "/SmartTV") || (Ba = !0);
  } else if (A = g(d, "Tizen ")) {
    B = 31, w = A, W = 24, X = jb, Ba = !0;
  } else if (A = g(d, "Windows Phone ") || g(fa, "Windows Phone OS ") || sb) {
    B = 23, w = A, Ba = !0;
  } else if (v && "ARM" === R) {
    B = 23, w = 10, Ba = !0;
  } else if (rb && q(fa, "ZuneWP")) {
    B = 23, w = 11 === Ga ? 8.1 : 10 === Ga ? 8 : 9 === Ga ? 7.5 : 7 === Ga ? 7 : "?", Ba = !0;
  } else if (q(d, "FOMA;")) {
    B = 16, Ba = !0;
  } else if (q(d, "SoftBank;")) {
    B = 16, Ba = !0;
  } else if (q(d, "KFMUWI")) {
    var Ja = !0;
    w = 6.3;
    var qa = la = !0;
  } else if (q(d, "KFKAWI")) {
    Ja = !0, w = 6, qa = la = !0;
  } else if (q(d, "KFSUWI") || q(d, "KFAUWI") || q(d, "KFDOWI")) {
    Ja = !0, w = 5, qa = la = !0;
  } else if (q(d, "KFGIWI")) {
    Ja = !0, w = 5, qa = la = !0;
  } else if (q(d, "KFARWI") || q(d, "KFSAWA") || q(d, "KFSAWI")) {
    Ja = !0, w = 5 <= ta(ia) ? 5 : 4, qa = la = !0;
  } else if (q(d, "KFSOWI") || q(d, "KFTHWA") || q(d, "KFTHWI") || q(d, "KFAPWA") || q(d, "KFAPWI")) {
    Ja = !0, w = 3, qa = la = !0;
  } else if (q(d, "KFOT") || q(d, "KFTT") || q(d, "KFJWA") || q(d, "KFJWI")) {
    Ja = !0, w = 2, qa = la = !0;
  } else if (q(d, "Kindle Fire")) {
    Ja = !0, w = 1, qa = la = !0;
  } else if (A = g(d, "Kindle/")) {
    B = 20, w = A, W = 21, X = 2.2;
  } else if (Sb) {
    Ja = !0, w = ia || Ea, qa = !0;
  } else if (q(d, "AmazonWebAppPlatform") || q(d, "; AFT")) {
    Ja = !0, w = ia, qa = !0;
  } else if (q(d, "MeeGo")) {
    B = 32;
  } else if (q(d, "Maemo")) {
    B = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Qb) {
    B = 22, Wa = !0;
  } else if ("WinCE" === R) {
    B = 21, Wa = !0;
  } else if (0 === R.indexOf("Win")) {
    B = "Win16" === R ? 35 : "Win32" === R ? 36 : "Win64" === R ? 37 : 0, w = g(d, "Windows NT ") || g(d, "Windows ");
  } else if (0 === R.indexOf("Mac")) {
    B = "Mac68K" === R ? 39 : "MacPowerPC" === R || "MacPPC" === R ? 38 : "MacIntel" === R ? 40 : 0;
    if (A = g(d.split("_").join("."), "Mac OS X ")) {
      w = A;
    }
    var mb = !0;
  } else if (q(d, "BlackBerry") || q(d, "BB10")) {
    B = 34, w = bb, Ba = !0;
  } else if (q(d, "SunOS") || q(d, "Sun Solaris")) {
    B = 42;
  } else if (q(d, "FreeBSD")) {
    B = 43;
  } else if (q(d, "OpenBSD")) {
    B = 44;
  } else if (q(d, "NetBSD")) {
    B = 45;
  } else if (wa && fb) {
    q(d, "Android 4.4;") ? za = {min:2.3} : 4 <= ta(ia) ? za = ia : za = {min:2.2}, w = za;
  } else if (wa && Aa) {
    ia ? za = ia : za = {min:1.6}, w = za, q(d, "Tablet") ? la = !0 : Ba = !0;
  } else if (ia) {
    w = ia, wa = !0;
  } else if (tb && Ha || yb || Ia) {
    var vb = !0;
    jb ? za = {min:4.4} : db && !Lb || Hb || Kb ? za = {min:4} : (za = ia = ab.touchAction !== La ? {min:5} : sa ? 4.4 : qb ? x.connection ? t.searchBoxJavaBridge_ || db ? U.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Qa ? 3 : 533 <= Qa ? ea ? 2.3 : 2.2 : 530 <= Qa ? 2.0 : 1.5, kb && (W = 24, X = kb));
    w = za;
    wa = !0;
  } else {
    Ab ? (w = {min:5}, vb = wa = !0) : tb && (q(d, "Ubuntu") ? B = 46 : (A = g(d, "Mint/")) ? (B = 47, w = A) : (A = g(d, "Fedora/")) ? (B = 48, w = A) : B = q(d, "Gentoo") ? 49 : 50);
  }
  Ja || wa && vb && Rb ? B = 27 : wa && (B = B || 26);
  W || (qa = qa || wa, Aa ? (W = qa || Wa || Ba || la ? 9 : 8, X = Ub) : rb ? (za = Za(fa, "Trident/") + 4, W = Wa || Ba || la || Bb ? 3 : mb && 5 <= Ga ? 7 : 2, X = Ga) : v ? (W = 23 === B ? 6 : 5, X = g(fa, "Edge/")) : ub ? (W = 13, X = ub) : fb ? (W = qa ? 12 : 11, X = Pa || Jb) : jb ? (W = 24, X = jb) : (A = Mb || g(d, "NetFront/")) ? (W = 18, X = A) : (A = g(d, "iCab")) ? (W = 19, X = A) : (A = ya(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Gb && bb) ? (W = 10, X = A, B || (q(d, "iPhone") ? 
  xa = 0 : q(d, "iPad") ? xa = 1 : q(d, "iPod") && (xa = 2), xa && (B = 24))) : xb ? (W = 25, X = Ib) : Pb ? (W = 14, X = ib) : wa && Lb ? (W = 21, X = ia) : db || Hb || Kb ? (W = qa ? 22 : 20, X = eb || zb) : wa && sa ? (W = 23, X = 5 > ta(ia) ? ia : eb) : wa && (bb || vb) ? (W = 21, X = ia) : eb ? (W = qa ? 22 : 20, X = eb) : Qa && (W = 15, X = Qa));
  B && (da[2] = B, w && (da[3] = Fb(w)));
  W && (da[0] = W, X && (da[1] = Fb(X)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Cb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var da = this[this.length - 1];
  --this.length;
  return da;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var da = arguments, t = 0, C = da.length, x = this.length; t < C; ++t) {
    this[x + t] = da[t];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var da = this[0], t = 1, C = this.length; t < C; ++t) {
    this[t - 1] = this[t];
  }
  --this.length;
  return da;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var da = arguments, t = da.length, C = this.length += t - 1, x = C; x >= t; --x) {
    this[x] = this[x - t];
  }
  for (x = 0; x < t; ++x) {
    this[x] = da[x];
  }
  return C;
});
Array.prototype.splice || (Array.prototype.splice = function(da, t) {
  var C = arguments, x = C.length - 2 - t, I = this.slice(da, da + t), ta;
  if (0 < x) {
    var U = this.length - 1;
    for (ta = da + t; U >= ta; --U) {
      this[U + x] = this[U];
    }
  } else if (0 > x) {
    U = da + t;
    for (ta = this.length; U < ta; ++U) {
      this[U + x] = this[U];
    }
    this.length += x;
  }
  U = 2;
  for (ta = C.length; U < ta; ++U) {
    this[U - 2 + da] = C[U];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(da, t) {
  var C = this.length >>> 0;
  if (0 === C) {
    return -1;
  }
  if (t) {
    var x = t || 0;
    x = -Infinity === x ? 0 : (0 > x ? -x : x) | 0;
    if (C <= x) {
      return -1;
    }
  }
  for (x = 0 <= x ? x : 0 < C + x ? C + x : 0; x < C; ++x) {
    if (this[x] === da) {
      return x;
    }
  }
  return -1;
});
(function(da, t, C, x, I, ta, U, La, Za, q, $a, L) {
  function g(l) {
    if (t[0] === l) {
      return R === R + "" ? U(R) : R;
    }
  }
  function ya(l) {
    var J = t[3];
    if (t[2] === l) {
      return J === J + "" ? U(J) : J;
    }
  }
  function Fb(l, J, P) {
    l + "" === l && ("a" === l.charAt(2) && (P = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > V ? 117 : 0.9 > ea || 9 > v || 9 > V || ab ? 1 : 132 : parseInt(l, 16));
    P && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (J || 2));
  }
  var Fa = I.body, d = Fa.style, fa, ib, R = t[1], v = g(2) || g(3), ab = g(7), Ga = g(5) || g(6), V = g(8) || g(9), ea = g(11) || g(12), pb = ea && 0 <= t.conpare(R, "1.9.1"), qb = g(13), Ha = g(15), bb = g(16) || g(17), Gb = g(10) || g(25), Aa = g(20) || g(22), Ub = Aa || g(23) || g(21) || g(24), Hb = Aa && U(ta.userAgent.split("Edg/")[1]), rb = U(ta.appVersion.split("Trident/")[1]) + 4, db = ya(35) || ya(36) || ya(37), fb = !v && !ab && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  xb = (ab ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > V ? "opr70" : 8 > V ? "opr72" : 9.5 > V ? "opr" + (V | 0) : ea && !pb ? 1.4 <= ea ? "gck19" : 1.3 <= ea ? "gck13" : 1 <= ea ? "gck12" : 0.9 <= ea ? "gck09" : 0.8 <= ea ? "gck08" : "gck07" : "modern") + ".css";
  ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9) || ya(10);
  var Ib, sb, gb, ia, yb = d.transform !== L ? "transform" : d["-o-transform"] !== L ? "-o-transform" : d["-ms-transform"] !== L ? "-ms-transform" : d.MozTransform !== L ? "-moz-transform" : d["-webkit-transform"] !== L ? "-webkit-transform" : "", wa = [], tb = [], Va = [], ub, Pa, Jb, A, Ob, Qa, eb = [], zb = [], Kb, Pb, Qb, Rb;
  (function() {
    function l() {
      for (var c, e = 0, h = new $a() - 0; e < G.length;) {
        h < G[0].t ? ++e : (c = G.splice(e, 1)[0], c.f(c.p));
      }
      b = G.length ? Za(l, Z) : 0;
    }
    function J() {
      for (var c, e = 0; e < aa.length; ++e) {
        c = aa[e], c.f();
      }
    }
    function P() {
      y && (y = clearInterval(y));
    }
    function ma() {
      b && (b = q(b));
    }
    p = function(c) {
      eb.push(c);
    };
    Cb = function(c) {
      zb.push(c);
    };
    Qa = function(c) {
      aa.length || (y = setInterval(J, D));
      aa.push({f:c, B:++M});
      return M;
    };
    Kb = function() {
      y && (P(), y = setInterval(J, D));
    };
    Pb = P;
    var aa = [], D = 500, M = 0, y;
    if (5 > v || ab) {
      C._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    A = function(c, e, h) {
      G.length || (b = Za(l, Z));
      G.push({f:c, p:e, B:++a, t:new $a() - 0 + (Z < h ? h : Z)});
      return a;
    };
    Ob = function(c) {
      for (var e = G.length, h; h = G[--e];) {
        if (h.B === c) {
          G.splice(e, 1);
          break;
        }
      }
      return 0;
    };
    Qb = function() {
      b && (ma(), b = Za(l, Z));
    };
    Rb = ma;
    var G = [], Z = 16, a = 0, b;
    if (5 > v || ab) {
      C._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var jb, kb, Lb, Ia, Ra, Sa, sa, lb, hb, Ab, Sb, Ea, B, w, W, X, Mb, Wa, xa, Ba, la, Bb;
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
                for (var ra = ++h, S, ba = [], ca = u.split(""), O = ca.length; O;) {
                  S = ca[--O], "A" <= S && "Z" >= S && (S = "-" + S.toLowerCase()), ba[O] = S;
                }
                e[ra] = ba.join("") + ":" + F[u] + ";";
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
    function J(a) {
      a = "*" === a && 6 > v ? "*" !== a ? I.all.tags(a.toUpperCase()) : I.all : I.getElementsByTagName(a);
      var b = [], c = 0, e;
      for (e = a.length; c < e; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function P(a) {
      return y ? a.parentElement : a.parentNode;
    }
    function ma(a, b, c, e, h, m) {
      if (y) {
        var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var F = Ra(2 > a ? Ia(b) : b);
        F = 2 > a ? F.indexOf(b) + a : F.length;
        b.insertAdjacentHTML(u, l(c, e, h));
        b = Ra(b)[F];
        null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (G) {
        b = I.createElement(l(c, e));
      } else {
        b = m ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
        if (e) {
          for (u in e) {
            if ((c = e[u]) || 0 === c) {
              switch(u) {
                case "class":
                case "className":
                  Mb(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (F in c) {
                    a[F] = c[F];
                  }
                  break;
                default:
                  W(b, u, c);
              }
            }
          }
        }
        Z || null != h && aa(b, h);
      }
      return b;
    }
    function aa(a, b) {
      if (y) {
        return ma(2, a, "font", L, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function D(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function M(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var y = 5 > v;
    fa = J("html")[0];
    ib = J("head")[0];
    jb = function(a) {
      return C[a] || I[a] || I.getElementById(a);
    };
    kb = J;
    Lb = function(a) {
      var b = [], c = 0, e, h = -1;
      if (9 > v || !I.getElementsByClassName) {
        var m = 6 > v ? I.all : I.getElementsByTagName("*");
      } else {
        var u = !0;
        m = I.getElementsByClassName(a);
      }
      for (e = m.length; c < e; ++c) {
        var F = m[c];
        if (u || (y || 1 === F.nodeType) && M(F, a)) {
          b[++h] = F;
        }
      }
      return b;
    };
    Ia = P;
    Ra = function(a) {
      a = y ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Sa = function(a) {
      var b = !(7.03 < V && 7.2 > V) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, m; e;) {
        if (m = a[--e], b || 1 === m.nodeType) {
          y && "FONT" === m.tagName || (c[++h] = m);
        }
      }
      return c;
    };
    sa = function(a, b, c, e, h) {
      b = ma(2, a, b, c, e, h);
      y || (a.appendChild(b), Z && null != e && aa(b, e));
      return b;
    };
    lb = function(a, b, c, e, h) {
      b = ma(0, a, b, c, e, h);
      y || (P(a).insertBefore(b, a), Z && null != e && aa(b, e));
      return b;
    };
    hb = function(a, b, c, e, h) {
      b = ma(1, a, b, c, e, h);
      var m;
      y || ((m = a.nextSibling) ? Ia(m).insertBefore(b, m) : Ia(a).appendChild(b), Z && null != e && aa(b, e));
      return b;
    };
    Ab = aa;
    Sb = function(a, b) {
      if (y) {
        return ma(0, a, "font", L, b);
      }
      var c = I.createTextNode("" + b);
      Ia(a).insertBefore(c, a);
      return c;
    };
    Ea = function(a) {
      Ia(a) ? y ? a.outerHTML = "" : Ia(a).removeChild(a) : p("[DOM] p_DOM_remove(), No parentNode!");
    };
    var G = 9 > v, Z = G;
    B = function(a) {
      return a.tagName.toUpperCase();
    };
    w = function(a, b) {
      return a.getAttribute(b) || "";
    };
    W = function(a, b, c) {
      a.setAttribute(b, c);
    };
    X = function(a, b) {
      a.removeAttribute(b);
    };
    Mb = D;
    Wa = M;
    xa = function(a, b) {
      var c;
      if (!M(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        D(a, c + b);
      }
    };
    Ba = function(a, b) {
      if (M(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        D(a, c.join(" "));
      }
    };
    la = function(a, b, c) {
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
        9 > V || 1 > ea ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var za, Ja, qa, mb, vb, E, va, ka, Y, Ua;
  (function() {
    function l() {
      return ca ? k ? 2 : O ? 3 : 1 : 0;
    }
    function J(f) {
      Ja(C, "load", J);
      J = L;
      ma(wa, f, !0);
      wa = L;
    }
    function P(f, n) {
      E(function() {
        var K = Z(f);
        n(K);
        K.addListener(n);
        return !0;
      });
    }
    function ma(f, n, K) {
      for (var r = 0; r < f.length; ++r) {
        !0 === f[r](n) && (f.splice(r, 1), --r);
      }
      K && (f.length = 0);
    }
    function aa(f, n, K) {
      c && !b.length && A(D);
      b.push(f, n, K);
    }
    function D() {
      var f = b, n;
      for (b = []; n = f.shift();) {
        ma(n, f.shift(), f.shift());
      }
    }
    function M(f) {
      var n = f || event;
      f = e[n.type];
      var K = -1, r, z;
      v ? (n.preventDefault = function() {
        n.returnValue = !1;
      }, n.stopPropagation = function() {
        n.cancelBubble = !0;
      }) : m && (n.A = n.stopPropagation, n.stopPropagation = function() {
        z = !0;
      });
      for (; r = f[++K];) {
        r.l === this ? (this.g = r.j, this.g(n), this.g = x, this.g = L) : 7.2 > V && this === I && r.l === C && (C.g = r.j, C.g(n), delete C.g);
      }
      if (v) {
        return n.preventDefault = n.stopPropagation = L, n.returnValue;
      }
      m && (n.defaultPrevented && "click" === n.type && "A" === n.target.tagName && (F = !0), z && !F && n.A(), n.A = n.stopPropagation = L);
    }
    function y() {
      var f = 9 === a.offsetWidth;
      ka !== f && (aa(tb, ka = f), p("p_cssAvailability:" + ka));
    }
    function G(f) {
      wa || ma(Q, f);
    }
    var Z = C.matchMedia, a, b = [], c;
    wa.push(function() {
      P = L;
      a = sa(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      qa(function() {
        c = !0;
        b.length && A(D);
      });
    });
    za = function(f, n, K, r) {
      if (u) {
        f.addEventListener(n, K, r ? fb ? r : r.capture : !1);
      } else {
        var z = {l:f, j:K};
        r = e[n];
        var N = "on" + n, Ca, cb;
        if (r) {
          for (Ca = r.length; cb = r[--Ca];) {
            if (cb.l === f && cb.j === K) {
              return;
            }
          }
          e[n].push(z);
        } else {
          e[n] = r = [z], h || (n = f[N], "function" === typeof n && n !== M && r.unshift({l:f, j:n}));
        }
        h ? f.attachEvent(N, M) : f[N] = M;
      }
    };
    Ja = function(f, n, K, r) {
      if (u) {
        f.removeEventListener(n, K, r ? fb ? r : r.capture : !1);
      } else {
        r = e[n];
        n = "on" + n;
        var z, N, Ca;
        if (r) {
          for (z = r.length; N = r[--z];) {
            N.l === f && (N.j === K ? r.splice(z, 1) : Ca = !0);
          }
          Ca || (h ? f.detachEvent(n, M) : (f[n] = x, f[n] = null));
        }
      }
    };
    var e = {}, h = !1, m = 525.13 > Ha, u = !m && !ab && C.addEventListener, F;
    m && fa.addEventListener("click", function(f) {
      if (F) {
        return F = !1, f.preventDefault(), !1;
      }
    });
    qa = function(f) {
      wa ? wa.push(f) : alert("Load event has already been dispatched!");
    };
    mb = function(f) {
      ra && ra.push(f);
    };
    var ra = [];
    if (419.3 >= Ha) {
      var S = function() {
        if (S) {
          var f = I.readyState;
          "loaded" === f || "complete" === f ? (S = L, J()) : A(S);
        }
      };
      A(S);
    } else {
      za(C, "load", J);
    }
    v || 0.9 <= ea && 1.8 > ea ? za(C, "unload", function(f) {
      ma(ra, f, !0);
    }) : ra = L;
    E = function(f) {
      tb.push(f);
    };
    qa(function() {
      y();
      Qa(y);
    });
    va = function(f) {
      Va && Va.push(f);
    };
    var ba = 60 > ea || qb, ca, O, k;
    if (89 <= ea || 89 <= Aa || db && 79 <= Hb || Z && (Z("(forced-colors:none)").matches || Z("(forced-colors:active)").matches)) {
      Ua = !0, P("(forced-colors:active)", function(f) {
        ca = f.matches;
        Y = l();
        aa(Va, Y);
        p("(forced-colors:active):" + Y);
      });
    } else if (10 <= v || Ga || db && Hb) {
      Ua = !0, P("(-ms-high-contrast:black-on-white)", function(f) {
        ca = O = f.matches;
        Y !== l() && (Y = l(), aa(Va, Y), p("(-ms-high-contrast:black-on-white):" + Y));
      }), P("(-ms-high-contrast:white-on-black)", function(f) {
        ca = k = f.matches;
        Y !== l() && (Y = l(), aa(Va, Y), p("(-ms-high-contrast:white-on-black):" + Y));
      }), P("(-ms-high-contrast:active)", function(f) {
        ca = f.matches;
        Y !== l() && (Y = l(), aa(Va, Y), p("(-ms-high-contrast:active):" + Y));
      });
    } else if (db && (v || ea && 0 <= t.conpare(R, "1.8.1") || qb)) {
      var H = function() {
        function f(r, z) {
          if (z && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var N = r.split("(")[1].split(",");
          return U(N[0]) + U(N[1]) + U(N[2]);
        }
        var n = I.defaultView;
        var K = n ? n.getComputedStyle(a, null) : a.currentStyle;
        n = (K && K.color || "").split(" ").join("");
        K = (K && K.backgroundColor || "").split(" ").join("");
        n && (ca = "#123456" !== n && "rgb(18,52,86)" !== n, O = f(n) < f(K, !0), k = f(n) > f(K, !0), Y !== l() && (Y = l(), p("(forced-colors-fallback):" + Y), aa(Va, Y, ba)));
      };
      E(function(f) {
        if (f) {
          return la(a, "color", "#123456"), la(a, "backgroundColor", "#123456"), ba ? (H(), Va = L) : Qa(H), H = L, !0;
        }
      });
    } else {
      Va = l = L;
    }
    vb = function(f) {
      Q.push(f);
    };
    var Q = [], Da = 0, T = 1 > ea || 1.2 <= ea && 1.8 > ea || 7.2 >= V;
    T ? Qa(function() {
      var f = C.scrollY || Fa.scrollTop;
      Da !== f && (Da = f, G());
    }) : za(C, "scroll", G);
    mb(function() {
      T || Ja(C, "scroll", G);
    });
  })();
  var bc = 9 > v || 525 <= Ha && 530 > Ha || 2 > Aa, Vb = 0, Wb, Xb, Yb, cc;
  (function() {
    function l(a) {
      for (var b = aa.length, c; b;) {
        if (c = aa[--b], c.F === a) {
          return c;
        }
      }
    }
    function J() {
      var a = I.styleSheets, b = [], c = 0, e = -1, h;
      if (a) {
        for (h = a.length; c < h; ++c) {
          if (2 > Aa || db && 526 > Ha) {
            var m = ma(a[c]);
            m.parentNode && (b[c] = m);
          } else {
            b[c] = ma(a[c]);
          }
        }
      } else {
        for (a = kb("*"), h = a.length; c < h; ++c) {
          m = a[c];
          var u = B(m);
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
    function ma(a) {
      return a.owningElement || a.ownerNode;
    }
    Wb = function(a, b) {
      var c = J(), e = c.length;
      e = 0 <= b && b < e ? b : e;
      var h = c[e - 1];
      c = c[e];
      if (y || G) {
        var m = c ? lb(c, "style") : h ? hb(h, "style") : sa(ib, "style");
        G && Ab(m, "");
        var u = P(m);
        a && W(m, "media", a);
      } else if (D || M) {
        u = {D:a, C:e, G:!0};
      }
      if (u) {
        return aa.push({F:u, h:m, m:[]}), u;
      }
    };
    Xb = function(a) {
      a = l(a);
      var b = a.m, c = b.length, e;
      for (a.h && Ea(a.h); e = b[--c];) {
        e.i && Ea(e.i);
      }
      aa.splice(aa.indexOf(a), 1);
    };
    Yb = function(a, b, c, e) {
      var h = l(a), m = h.h;
      h = h.m;
      var u = "@import" === b, F = "@page" === b, ra = "@font-face" === b, S = h.length, ba = "", ca;
      if (a.imports) {
        var O = a.imports.length;
      } else {
        for (O = 0; O < S && "@import" === h[O].u; ++O) {
        }
      }
      if (u) {
        e = 0 <= e && e < O ? e : O;
        var k = b + ' "' + c + '"';
      } else {
        e = O <= e && e < S ? e : S;
        for (k in c) {
          ba += ";" + k + ":" + c[k];
        }
        ba = ba.substr(1);
        k = b + "{" + ba + "}";
        6 <= v && ra && (e = S);
      }
      S = {u:b, v:c, o:e, s:e};
      if (9 > v) {
        O = a.rules;
        var H = O.length;
        if (ra) {
          b = I.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + k + "</style>", b = b.lastChild, (ca = m.nextSibling) ? Ia(m).insertBefore(b, ca) : Ia(m).appendChild(b), S.i = b;
        } else {
          u ? a.addImport(c, e) : 5.5 <= v && F || a.addRule(b, ba, e);
          S.s = e + (O.length - H - 1);
          if (0 === O.length - H) {
            return p("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + k), -1;
          }
          p("[CSSOM] rules.length \u306e\u5897\u5206" + (O.length - H));
        }
      } else if (y || G) {
        (db && Ha || 28 > Aa) && u ? S.i = hb(m, "link", {href:c, rel:"stylesheet", type:"text/css"}) : bc && ra ? (b = S.i = hb(m, "style", {type:"text/css", media:a.media}), b.innerText = k) : a.insertRule(k, e);
      }
      h.splice(e, 0, S);
      if (D || M) {
        m = l(a);
        ca = m.m;
        b = m.h;
        c = a.C;
        u = J();
        a = u[c - 1];
        c = u[c];
        u = [];
        ra = F = -1;
        ba = "style";
        S = {type:"text/css", media:m.D};
        for (var Q; O = ca[++F];) {
          if (k = O.u, O = O.v, "@import" === k) {
            u[++ra] = k + ' "' + O + '"';
          } else {
            u[++ra] = k + "{";
            k = "";
            for (Q in O) {
              k += ";" + Q + ":" + O[Q];
            }
            u[++ra] = k.substr(1) + "}";
          }
        }
        u = u.join("");
        D && (u = "data:text/css;charset=utf-8;base64," + Z(u), S.rel = "stylesheet", S.href = u, ba = "link", u = L);
        b ? (m.h = hb(b, ba, S, u), Ea(b)) : (b = c ? lb(c, ba, S, u) : a ? hb(a, ba, S, u) : sa(ib, ba, S, u), m.h = b);
      }
      Q = e;
      a = h.length;
      for (m = Q; m < a; ++m) {
        ca = h[m], ca.i || (b = ca.s - ca.o, ca.o = Q, ca.s = Q + b, Q += 1 + b);
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
    var aa = [], D = 1 > ea || 8 <= V && 9 > V, M = 7.2 <= V && 8 > V, y = !!v || !D && !M && function() {
      var a = sa(fa, "style"), b = !!P(a);
      b && (p("[CSSOM] CSSStyleSheet @insertRule : " + !!P(a).insertRule), p("[CSSOM] CSSStyleSheet @addRule : " + !!P(a).addRule), p("[CSSOM] CSSStyleSheet @cssRules : " + !!P(a).cssRules), p("[CSSOM] CSSStyleSheet @rules : " + !!P(a).rules), p("[CSSOM] CSSStyleSheet @cssText : " + ("" === P(a).cssText)));
      Ea(a);
      return b;
    }();
    p("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + y);
    var G = !y && Ha && !D && !M && function() {
      var a = sa(fa, "style"), b;
      Ab(a, "");
      if (b = !!P(a)) {
        p("[CSSOM] CSSStyleSheet @insertRule : " + !!P(a).insertRule), p("[CSSOM] CSSStyleSheet @addRule : " + !!P(a).addRule), p("[CSSOM] CSSStyleSheet @cssRules : " + !!P(a).cssRules), p("[CSSOM] CSSStyleSheet @rules : " + !!P(a).rules), p("[CSSOM] CSSStyleSheet @cssText : " + ("" === P(a).cssText));
      }
      Ea(a);
      return b;
    }();
    y || p("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + G);
    Vb = D || M ? 1 : y || G ? 2 : 0;
    p("[CSSOM] p_CSSOM_canuse : " + Vb);
    var Z;
    (function(a) {
      function b(e) {
        for (var h = c, m = "", u = 0, F; F = e.length;) {
          4 > F && (u = [0, 2, 1, 0][F]), F = e.charCodeAt(0) << 16 | (1 < F ? e.charCodeAt(1) : 0) << 8 | (2 < F ? e.charCodeAt(2) : 0), m += [h[F >>> 18], h[F >>> 12 & 63], 2 <= u ? "=" : h[F >>> 6 & 63], 1 <= u ? "=" : h[F & 63]].join(""), e = e.substr(3);
        }
        return m;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      Z = b;
    })(this);
  })();
  (function() {
    function l() {
      if (525 > Ha || ea && !pb || 2.2 > g(21) || g(25) || 10 > g(3) || ya(32) || ya(30) || ya(1) || ya(2) || ya(3)) {
        return !1;
      }
      if (bc) {
        return !0;
      }
      if (2 === Vb) {
        var D = Wb();
        var M = Yb(D, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var y = D.cssText || D.cssRules && D.cssRules[M] && D.cssRules[M].cssText || "";
        var G = y.match("src") && y.match("@font-face");
        p("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + y);
        p("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > v ? D.rules : D.cssRules).length);
        p("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + cc(D, M, "src"));
        Xb(D);
      }
      l = L;
      return aa = !!G;
    }
    tb.splice(0, 0, function() {
      if (ka) {
        gb = 8 <= v || Ga || 9.5 <= V || pb || qb || 522 <= Ha || 3 <= bb || Gb || Ub ? 3 : 7.2 <= V ? 2 : 6 <= V || ea ? 1 : 0;
        if (!gb && !v && !ab) {
          var D = sa(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          gb = 6 <= D.offsetWidth ? 2 : 0;
          Ea(D);
        }
        p("p_cssGeneratedContentGrade:" + gb);
        return !0;
      }
    });
    ub = function(D) {
      function M(Z) {
        G = Ob(G);
        ia = Z;
        y.onload = y.onerror = x;
        A(D, Z);
      }
      if (ia !== L) {
        p("[dataURITest] already done : " + ia), A(D, ia);
      } else if (8 > v) {
        p("[dataURITest] trident < 8 : false"), A(D, !1);
      } else {
        p("[dataURITest] start!");
        var y = new Image(), G = A(function() {
          G && M(!1);
        });
        y.onerror = function() {
          p("[dataURITest] no DATA URI!");
          M(!1);
        };
        y.onload = function() {
          p("[dataURITest] DATA URI:" + (1 === y.width * y.height));
          M(1 === y.width * y.height);
        };
        y.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > v && qa(function() {
      var D = sa(Fa, "div");
      Bb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ib = 1 < D.offsetHeight;
      Bb(D, "");
      Ea(D);
    });
    Pa = function(D, M) {
      function y() {
        if (Z || !a || G.complete) {
          p("[imageTest] timer -> img.complete. img.width=" + G.width);
          var b = !!G.width;
          sb = sb || b;
          A(D, b);
          G.onerror = G.onload = x;
          G = D = L;
        } else {
          --a, A(y);
        }
      }
      var G = new Image(), Z, a = 99;
      p("[imageTest] start.");
      G.onerror = function() {
        p("[imageTest] error!");
        Z = !0;
      };
      G.onload = function() {
        p("[imageTest] onload.");
        Z = !0;
      };
      G.src = M;
      A(y);
    };
    var J = 9 > v || 2 > Aa || 12 > V, P = "bad_" + (new $a() - 0) + "_", ma = ["sans-serif", "serif"], aa;
    Jb = function(D, M, y, G, Z, a, b) {
      function c(T) {
        D(T);
        Da && !T && Xb(Da);
        D = k = H = Q = Da = L;
      }
      function e() {
        var T = '1.6em "' + M + '"';
        p("[webFontTest] testByNativeFontLoaderAPI start.");
        I.fonts.load(T).then(function(f) {
          p("[webFontTest] fonts.check() : " + I.fonts.check(T, "i") + ", fonts.length : " + f.length);
          (f = u(M)) ? A(c, f) : (p("[webFontTest] mesureWebFont() : false"), m(!0));
        }, function(f) {
          p("[webFontTest] fonts.load() rejected! " + f);
          ia !== L ? F(ia) : ub(F);
        });
      }
      function h(T) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (ca = new $a() - 0, !1) : T < new $a() - ca;
      }
      function m(T) {
        T && (p("[webFontTest] testWebFont start."), ca = new $a() - 0);
        (T = u(M)) ? (p("[webFontTest] testWebFont mesurement success : " + T), c(T)) : h(ba) ? (p("[webFontTest] testWebFont timeout!"), O || J ? c(0) : ia !== L ? F(ia) : ub(F)) : A(m);
      }
      function u(T) {
        var f = 0, n = -1, K = 0;
        if (!Q) {
          var r = -1;
          var z;
          k = sa(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Q = {}; z = ma[++r];) {
            la(k, "fontFamily", z), Q[z] = k.offsetWidth;
          }
        }
        for (5 > v ? k || (k = sa(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Fa.appendChild(k); r = ma[++n];) {
          if (la(k, "fontFamily", '"' + T + '",' + r), k.offsetWidth !== Q[r]) {
            f = 1;
            break;
          }
        }
        !v && f && Z && (k.innerHTML = Z, T = k.offsetWidth, k.innerHTML = a, K = T === k.offsetWidth ? 1 : 0, k.innerHTML = "mmmmmmmmmmlli");
        Ea(k);
        5 > v && (k = L);
        return f + K;
      }
      function F(T) {
        p("[webFontTest] onTestDataURIComplete : " + T);
        T ? (O = !0, ra(!0)) : c(0);
      }
      function ra(T) {
        var f;
        if (y) {
          for (f in T && (ca = new $a() - 0), y) {
            u(f) ? (p("[webFontTest] success! " + f), H = sa(Fa, "div", {"aria-hidden":"true", className:G, id:G}), Da = Wb(), Yb(Da, "@import", y[f]), A(S, !0)) : h(100) ? (p("[webFontTest] timeout! " + f), delete y[f], A(ra, !0)) : A(ra);
            return;
          }
        }
        c(0);
      }
      function S(T) {
        T && (p("[webFontTest] testImportedCssReady start!"), p("[webFontTest] targetWebFontName : " + M), ca = new $a() - 0);
        1 < H.offsetWidth ? (p("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + H.offsetWidth), Ea(H), ba = 100, A(m, !0)) : h(ba) ? 528 > Ha ? (p("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + H.offsetWidth), Ea(H), ba = 100, A(m, !0)) : (p("[webFontTest] testImportedCssReady timeout!"), Ea(H), c(0)) : A(S);
      }
      var ba = b || 5000, ca, O, k, H, Q, Da;
      M = P + M;
      p("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      l || aa ? aa || l() ? (p("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !I.fonts || 603 > Ha ? (p("[webFontTest] No native font loader."), m(!0)) : (p("[webFontTest] Use Native font loader."), e())) : (p("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), A(c, 0)) : (p("[webFontTest] webFontTest_maybeCanUseWebFont : false"), A(c, 0));
    };
  })();
  var Ma = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Ma(960), ")", "(", Ma(234), Ma(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Ma(9824), "\u2190", Ma(9829), Ma(9830), Ma(9827), Ma(956), "\u03a9", "\u2193", "\u2192", "%", Ma(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Ma(9619)], dc = (9 === v || ea && 0 <= t.conpare(R, "1.8.1") || qb) && !Ua, nb = [], ob, Xa, Nb = 7.2 > V ? function() {
    ob = !ob;
    for (var l = -1, J; J = nb[++l];) {
      -1 !== J.className.indexOf("pbAlp") ? la(J, "display", ob ? "" : "none") : (xa(J, ob ? "pbChrCS" : "pbChr00"), Ba(J, ob ? "pbChr00" : "pbChrCS"));
    }
  } : dc ? function() {
    ob = !ob;
    for (var l = -1, J; J = nb[++l];) {
      la(J, "opacity", ob ? 1 : 0);
    }
  } : L;
  var Zb = da.startBlinkingIfCursor = function(l) {
    Nb ? Wa(l, "pbChrCS") && (Xa || !V && !Y || (Xa = setInterval(Nb, 400)), -1 === nb.indexOf(l) && nb.push(l)) : nb = L;
  };
  da.stopBlinkingIfCursor = function(l) {
    Nb && (l = nb.indexOf(l), 0 <= l && (nb.splice(l, 1), !nb.length && Xa && (clearInterval(Xa), Xa = 0)));
  };
  dc && va(function(l) {
    l ? Xa || (Xa = setInterval(Nb, 400)) : Xa && (clearInterval(Xa), Xa = 0);
  });
  Nb && mb(function() {
    Xa && clearInterval(Xa);
  });
  Ua || va(function(l) {
    l ? (W(fa, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (yb || 9 === v || 5.5 <= v && 9 > v && Ib) && xa(fa, "jsCanRotate")) : (X(fa, "forced-colors"), Ba(fa, "jsCanRotate"));
  });
  (function() {
    function l(k) {
      F = k;
      p("[pbList] WebFont test result : " + !!k);
      k ? aa() : sb ? ma(!0) : sb !== L ? aa() : (p("[pbList] Need imageTest " + ra), Pa(ma, ra));
      p("window.offscreenBuffering = " + C.offscreenBuffering);
    }
    function J() {
      J = L;
      Jb(l, "PB-100", {"PB-100_canTTF":Ya + "pbFont/ttf.css", "PB-100_canWOFF":Ya + "pbFont/woff.css", "PB-100_canEOT":Ya + "pbFont/eot.css", "PB-100_canSVG":Ya + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function P(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function ma(k) {
      k ? (p("[pbList] Fallback start!"), xa(Fa, "pbList-noWebFont")) : p("[pbList] image disabled!");
      aa();
    }
    function aa() {
      for (l = Jb = L; u.length;) {
        D(u.shift(), u.shift());
      }
      p("[pbList] complete.");
    }
    function D(k, H) {
      function Q(r) {
        r = Ra(r);
        for (var z = -1, N; N = r[++z];) {
          switch(N.nodeType) {
            case 1:
              Q(N);
              break;
            case 3:
              N.data && T(N.data) && f.push(N);
          }
        }
      }
      function Da(r) {
        var z = r.children, N = 0, Ca = z.length;
        if (Ca) {
          for (; N < Ca; ++N) {
            Da(z[N]);
          }
        } else {
          (z = r.innerText) && T(z) && f.push(r);
        }
      }
      function T(r) {
        return r.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], n;
      if (l) {
        -1 === u.indexOf(k) && (u.push(k, H), S && J && J());
      } else {
        var K = u.indexOf(k);
        0 <= K && u.splice(K, 2);
        for (5 > v ? Da(k) : Q(k); n = f.shift();) {
          K = 5 > v ? n.innerText : n.data, 2 !== F && (K = K.split(b).join(Z)), H ? 5 > v ? n.innerText = K : n.data = K : M(K.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(G).split("&amp;").join("&"), n);
        }
      }
    }
    function M(k, H) {
      function Q(pa, ha) {
        for (var Ka = ""; ha;) {
          ha & 1 && (Ka += pa), ha >>= 1, pa += pa;
        }
        return Ka;
      }
      function Da(pa, ha, Ka) {
        for (var Db, fc = -1, $b, ac; Db = ha[++fc];) {
          for (; 0 <= ($b = pa.indexOf(Db));) {
            ac = Db.length, pa = pa.substr(0, $b) + Q(Ka, ac) + pa.substr($b + ac);
          }
        }
        return pa;
      }
      function T(pa) {
        var ha = U(pa), Ka = "" + ha;
        return 0 < ha && ha === ha | 0 && (ha = pa.indexOf(Ka) + Ka.length, ha <= pa.length) ? ha : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), n = 5 > v || 1 === H.nodeType, K = [], r = "", z, N = -1, Ca, cb, Na;
      if (n) {
        if (ca) {
          var Tb = H.style.visibility;
          la(H, "visibility", "hidden");
        }
        H.innerHTML = "";
      }
      if (O) {
        var Eb = H;
        H = I.createDocumentFragment();
      }
      if (function(pa) {
        var ha = pa.indexOf("P");
        if (-1 === ha) {
          return !1;
        }
        ha = U(pa.charAt(ha + 1));
        return 0 <= ha && 9 >= ha;
      }(k)) {
        r = Q("+", k.length);
      } else {
        0 <= (z = T(k)) && (r = Q("|", z), N = z, --N);
        for (; z = k.charAt(++N);) {
          z === G || Ca ? (r += "~", z === G && (Ca = !Ca)) : r += z;
        }
        r = Da(r, m, "^");
        r = Da(r, e, "{");
        r = Da(r, h, "}");
      }
      N = 0;
      for (Ca = k.length; N < Ca; ++N) {
        z = k.charAt(N);
        var ja = z === c;
        var na = " " === z;
        z = ja ? " " : z;
        var oa = r.charAt(N);
        var Ta = (cb = Oa) && ja;
        var Oa = "|" === oa;
        oa = f["+|~{}^".indexOf(oa) + 1];
        "\n" !== z ? (F || !sb ? (2 === F && k.substr(N, 2) === b && (z = b, ++N), oa = na && "str" === oa ? "pbList-strsp" : ja ? "" : !na && oa ? "pbList-" + oa : "") : (ja = wb.indexOf(z), ja = -1 === ja ? "" : wb.indexOf(z).toString(16).toUpperCase(), ja = (ja = 1 === ja.length ? "0" + ja : ja) ? "pbChr" + ja : "", oa = na && "str" === oa ? "pbList-strsp" : na || !ja ? "" : oa ? (ja ? ja + " " : "") + "pbList-" + oa : ja), ja = L, Ta ? (z = 6 <= v && 8 > v ? " " : c, oa = "") : Oa && (ea && !pb || 
        9.5 > V) ? (Oa && !cb && (Na = 4 - (U(k.substr(N)) + "").length), 7.5 > V ? ja = ba ? "position:relative;top:-4px;left:" + 12 * Na + "px" : {position:"relative", top:"-4px", left:12 * Na + "px"} : ja = ba ? "position:relative;left:" + 12 * Na + "px" : {position:"relative", left:12 * Na + "px"}) : na && 7.5 > V && (oa = "pbList-strsp"), ba ? K.push("<font" + (oa ? ' class="' + oa + '"' : "") + (ja ? ' style="' + ja + '"' : "") + ">" + z + "</font>") : n || O ? sa(H, "font", {"class":oa, style:ja}, 
        z) : lb(H, "font", {"class":oa, style:ja}, z)) : (cb = Oa = !1, ba ? K.push(z) : n || O ? Ab(H, z) : Sb(H, z));
      }
      if (n) {
        ba ? H.innerHTML = K.join("") : O && Eb.appendChild(H), ca && la(H, "visibility", Tb);
      } else {
        if (ba) {
          f = I.createElement("font");
          for (f.innerHTML = K.join(""); K = f.firstChild;) {
            H.parentNode.insertBefore(K, H);
          }
          Ea(H);
        } else {
          O ? Eb.parentNode.replaceChild(H, Eb) : Ea(H);
        }
      }
    }
    E(function(k) {
      if (k) {
        k = Lb("pbChrCS");
        for (var H = 0, Q = k.length; H < Q; ++H) {
          Zb(k[H]);
        }
        return !0;
      }
    });
    var y = [];
    E(function(k) {
      function H(na) {
        var oa = w(na, "pbTip"), Ta = oa.charAt(0), Oa = "_" === Ta;
        oa = Oa ? oa.charAt(2) : Ta;
        Ta = Oa ? "Btm" : "";
        var pa = w(na, "title");
        n || (X(na, "pbTip"), X(na, "title"), xa(na, "pbTipPos" + oa.toUpperCase()), sa(na, "div", {className:"pbTip" + Ta, style:{width:pa.length + Da + "em"}}, pa));
        sa(na, "div", {className:"pbTail" + Ta});
        K && Oa && (na.focus(), na.blur());
      }
      function Q(na, oa) {
        var Ta = w(na, "pbGhst"), Oa = na.className, pa = Oa.split("pbCsr")[1] || "", ha = Oa.split("pbAlp")[1] || "";
        if ("CS" === Ta) {
          var Ka = "_";
        } else {
          Ka = Ta, 3 === Ka.length && (Ka = Ka.substr(0, 2)), Ka = wb[parseInt(Ka, 16)] || "~";
        }
        var Db;
        pa = pa.split(" ")[0];
        if (ha = U(ha.split(" ")[0])) {
          T && (Oa = Oa.split("pbChr")[1].split(" ")[0], la(na, "backgroundPosition", Fb(Oa, 2, Tb) + "px " + -24 * (10 - ha) + "px")), !oa && f && lb(na, "a").appendChild(na);
        }
        Ta && (ha = 10 - ha, T && (Db = {backgroundPosition:Fb(Ta, 2, Tb) + "px " + -24 * (10 - ha) + "px"}), X(na, "pbGhst"), N = lb(na, "b", {className:"pbChr" + Ta + " pbCsr" + pa + " pbAlp" + ha, style:Db}, Ka), Zb(N));
        Zb(na);
      }
      if (k) {
        var Da = 6 > v ? 2 : 0, T = 7.2 > V || 0.9 > ea, f = 1.1 === ea;
        k = kb("SAMP");
        var n = 8 === v, K = 5 <= v && 6 > v, r = gb, z, N, Ca, cb, Na;
        Ib && xa(Fa, "pbLCD-AX");
        if (k.length) {
          for (Ca = -1; z = k[++Ca];) {
            if (Wa(Ia(z), "pbLCD")) {
              var Tb = Wa(z, "PB-120") || Wa(z, "FX-795P");
              var Eb = Sa(z);
              for (z = Eb.length; Na = Eb[--z];) {
                switch(B(Na)) {
                  case "A":
                    (2 > r || n) && H(Na);
                    if (2 > r) {
                      var ja = Sa(Na);
                      for (cb = ja.length; cb;) {
                        Q(ja[--cb], !0);
                      }
                    }
                    Gb ? W(Na, "href", "javascript:void(0)") : (za(Na, "click", P), y.push(Na));
                    break;
                  case "B":
                    2 > r && Q(Na, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    mb(function() {
      for (var k; k = y.shift();) {
        Ja(k, "click", P);
      }
    });
    6 === v && (new La("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var G = wb[7], Z = wb[30], a = wb[113], b = Ma(8337) + Ma(8331), c = Ma(160);
    Ma(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), m = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Z + wb[31]).split(""), u = [], F, ra, S;
    E(function(k) {
      if (k) {
        ra = 1 > Ya + ea ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        k = kb("*");
        for (var H = -1, Q; Q = k[++H];) {
          Wa(Q, "pbList") ? D(Q) : Wa(Q, "pbFont") && D(Q, !0);
        }
        u.length && (p("[pbList] " + u.length / 2 + " elements found. WebFont test start."), J());
        return !0;
      }
    });
    var ba = !1, ca = 8 > V, O = !ba && !ca && !(6 > v) && I.createDocumentFragment && !!Fa.replaceChild;
    da.prettify = D;
  })();
  var ec = I.scripts || kb("script");
  var Ya = ec[ec.length - 1].src.split("/");
  --Ya.length;
  (Ya = Ya.join("/")) && (Ya += "/");
  p("[p_assetUrl] " + Ya);
  qa(function() {
    var l;
    (l = jb("logger")) || alert("#logger not found!");
    l ? (p = function(J) {
      sa(l, "P", L, J);
    }, Cb = function(J) {
      sa(l, "P", {style:{color:"red"}}, J);
    }, C.onerror = function(J, P, ma) {
      Cb(J + ", " + P + ", " + ma);
      return !0;
    }) : C.console ? (p = console.log, Cb = console.error) : V ? (p = x, Cb = opera.postError) : p = Cb = x;
    for (; eb.length;) {
      p(eb.shift());
    }
    for (; zb.length;) {
      p(zb.shift());
    }
    eb = zb = L;
  });
  6.1 > bb && vb(Kb);
  mb(Pb);
  6.1 > bb && vb(Qb);
  mb(Rb);
  10 > v && (11 !== rb || 5 !== v) || (9 > V || 1 > ea || !ab && !C.addEventListener ? I.write('<link href="' + Ya + xb + '" rel="stylesheet"' + (8 > V ? "" : ' media="screen,handheld,projection,print"') + ">") : qa(function() {
    sa(ib, "link", {href:Ya + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

