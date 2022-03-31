PB100={};var r;
ua = [];
ua.conpare = function(ba, t) {
  var B = 0, w, G, na = (ba + "").split("."), W = (t + "").split("."), Ja = na.length;
  for (w = W.length; "0" === na[Ja - 1];) {
    --Ja;
  }
  for (; "0" === W[w - 1];) {
    --w;
  }
  for (G = Ja < w ? Ja : w; B < G; ++B) {
    var Ya = na[B] - 0, p = W[B] - 0;
    if (Ya !== p) {
      return Ya > p ? 1 : -1;
    }
  }
  return Ja > w ? 1 : Ja === w ? 0 : -1;
};
(function(ba, t, B, w, G, na, W, Ja) {
  function Ya(H, qa, ia) {
    ia = na(H.split(qa)[1]);
    return 0 <= ia ? ia : 0;
  }
  function p(H, qa) {
    return 0 <= H.indexOf(qa);
  }
  function Za(H) {
    return p(H, "Linux armv") || p(H, "Linux aarch") || p(H, "Linux i686") || p(H, "Linux x86_64");
  }
  function xa(H, qa) {
    for (var ia in qa) {
      if (ia === H) {
        return !0;
      }
    }
  }
  function u(H, qa) {
    var ia = "", Pa = -1, Ka;
    if (H = H.split(qa)[1]) {
      for (; Ka = H.charCodeAt(++Pa);) {
        if (48 <= Ka && 57 >= Ka || 46 === Ka) {
          ia += H.charAt(Pa);
        } else {
          break;
        }
      }
      for (Pa = ia.length; Pa;) {
        if (46 === ia.charCodeAt(--Pa)) {
          ia = ia.substr(0, Pa);
        } else {
          break;
        }
      }
    }
    return ia;
  }
  function ca(H) {
    for (var qa = arguments, ia = 1, Pa = qa[0], Ka; ia < qa.length; ++ia) {
      0 > vb(Pa, Ka = qa[ia]) && (Pa = Ka);
    }
    return Pa;
  }
  function ya(H) {
    return H === H + "" ? H : H === H - 0 ? "" + H : H.min && H.max ? H.min + "~" + H.max : H.min ? H.min + "~" : "~" + H.max;
  }
  var vb = ba.conpare, e = w.userAgent, O = w.appVersion, Sa = na(O) || 0, R = w.platform, Ta = B.documentElement, cb = Ta && Ta.style, l = B.documentMode, $a = G.width;
  G = G.height;
  var Bb = t.HTMLAudioElement, V = t.performance, oa = t.Int8Array, lb = t.ontouchstart !== Ja, Ua = u(O, "Version/") || u(e, "Version/"), La = t.operamini, ab = !La && t.opera, Qb = ab && (ab.version && "function" === typeof ab.version ? ab.version() : ca(u(e, "Opera "), Ua, Sa)), db = t.opr, mb = !ab && (B.all || l);
  l = mb && (l ? l : t.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : t.attachEvent ? 5 : 4);
  Ta = !mb && Ta.msContentZoomFactor;
  var wb = !Ta && t.chrome, Va = !mb && function() {
    for (var H in cb) {
      if (0 === H.indexOf("Moz")) {
        return !0;
      }
    }
  }(), xb = p(e, "UCWEB"), Kb = xb && u(e, " U2/"), Cb = xb && u(e, "; wds "), eb = u(e.split("_").join("."), "; iPh OS "), Z = u(e, "; Adr "), yb = p(O, "YJApp-ANDROID"), Ea = p(R, "Android") || Va && p(O, "Android") || yb;
  Z = u(R, "Android ") || u(O, "Android ") || u(e, "Android ") || Z;
  var nb = p(R, "Linux"), Db = "MacIntel" === R && w.standalone !== Ja, ob = Va && u(e, "Goanna/"), P = !ob && Va && (u(e, "rv:") || u(e.substr(e.indexOf(") Gecko/") - 11), "; ")), Lb = u(e, "Firefox/"), Q = u(e, "Opera/"), zb = t.FNRBrowser, Wa = Ya(e, "AppleWebKit/"), gb = u(e, "Chrome/"), Eb = u(e, "OPR/"), Mb = u(O, "KHTML/"), Nb = u(e.toLowerCase(), "iris");
  u(e, "FxiOS/");
  u(e, "CriOS/");
  u(e, "EdgiOS/");
  var pb = u(e, "Silk/"), hb = Ya(e, "SamsungBrowser/"), Qa = !hb && function() {
    for (var H = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    qa, ia = H.length; qa = H[--ia];) {
      if (p(e, qa)) {
        return 2 > na(Ua) ? Ua : 0.9;
      }
    }
    H = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ia = H.length; qa = H[--ia];) {
      if (p(e, qa)) {
        return Ua;
      }
    }
  }(), qb = wb && 534.3 >= Wa, ib = Za(R), da = ib && !p(e, R) && Za(e);
  lb = lb && (Wa || Va) && da || !Z && yb;
  yb = !!t.ReactNativeWebView;
  ib = ib && function() {
    for (var H in t) {
      if (0 === H.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ha = (da = t.puffinDevice) && da.clientInfo;
  Ha = (da = Ha && "iOS" === Ha.os && Ha.osVersion) && Ha.model;
  var bb = !l && B.registerElement, Ab = !l && B.execCommand, Ob = nb && bb && "11.0.696.34" === gb, Fa = t._firefoxTV_playbackStateObserverJava, Fb = Ya(e, "diordnA ");
  if ("Nitro" === R) {
    var y = 1;
  } else if ("Nintendo DSi" === R) {
    y = 2;
    var x = Q;
  } else if ("New Nintendo 3DS" === R || p(e, "iPhone OS 6_0") && 320 === $a && 240 === G) {
    y = 4, x = u(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    y = 3, x = u(e, "Version/"), Wa = 535;
  } else if ("Nintendo Swicth" === R) {
    y = 7, x = u(O, "NintendoBrowser/");
  } else if ("Nintendo WiiU" === R) {
    y = 6, x = u(O, "NintendoBrowser/"), Wa = u(O, "AppleWebKit/");
  } else if ("Nintendo Wii" === R) {
    y = 5, x = u(e, "Wii; U; ; ");
  } else if (Q = u(e, "PlayStation Vita ")) {
    y = 10, x = Q;
  } else if (Q = u(e, "(PlayStation Portable); ")) {
    y = 8;
    x = Q;
    var rb = 3.3;
  } else if (Q = u(e, "PLAYSTATION 3; ") || u(e, "PLAYSTATION 3 ")) {
    if (y = 11, x = Q, 0 > vb("4.10", Q)) {
      var X = 26, S = Q;
    }
  } else if (p(e, "Xbox One")) {
    y = 15, x = 1;
  } else if (p(e, "Xbox")) {
    y = 14, x = 1;
  } else if (2 === Sa && p(e, "Sony/COM2/")) {
    y = 17;
    x = 2;
    rb = 3.4;
    var Ma = !0;
  } else if (0 === R.indexOf("iP") || eb || da || Db) {
    if (da) {
      switch(x = da, Ha.substr(0, 4)) {
        case "iPho":
          var ra = 0;
          u(Ha, ra);
          var ka = !0;
          break;
        case "iPad":
          ra = 1;
          u(Ha, ra);
          var za = !0;
          break;
        case "iPod":
          ra = 2;
          u(Ha, ra);
          var jb = !0;
      }
    } else {
      eb ? x = eb : (x = u(O.split("_").join("."), "OS "), xa("isSecureContext", t), xa("enableWebGL", t), xa("sameOrigin", t));
      if (!x || zb) {
        x = t.PointerEvent ? 13 : t.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : t.WebAssembly ? 11.2 : t.HTMLMeterElement ? 10.3 : t.Proxy ? 10.2 : t.HTMLPictureElement ? 9.3 : W.isNaN ? 9.2 : t.SharedWorker ? V && V.now ? 8.0 : 8.4 : Ab ? 7.1 : t.webkitURL ? 6.1 : t.Worker ? 5.1 : oa ? 4.3 : Bb ? 4.1 : 3.2;
      }
      var Ba = $a === 1.5 * G || 1.5 * $a === G;
      0 === R.indexOf("iPhone") ? (ra = 0, ka = !0) : 0 === R.indexOf("iPad") || Db ? (ra = 1, za = !0) : 0 === R.indexOf("iPod") && (ra = 2, jb = !0);
    }
    X = !da && (w.standalone || (za || 12 > x) && xa("webkitFullscreenEnabled", B) || 11 <= x && 13 > x && w.mediaDevices) ? 16 : 17;
    y = 24;
    S = x;
  } else if (p(e, "Kobo")) {
    y = 18, X = 21, S = 2.2, Ea = !0;
  } else if (p(e, "EBRD")) {
    y = 19, X = 21, S = 2.2;
  } else if (Q = u(e, "CrOS x86_64 ") || u(e, "CrOS aarch64 ") || u(e, "CrOS i686 ") || u(e, "CrOS armv7l ")) {
    y = 28, x = Q;
  } else if (t.onmoztimechange !== Ja) {
    y = 29, x = 18.1 > P ? "1.0.1" : 19 > P ? 1.1 : 27 > P ? 1.2 : 29 > P ? 1.3 : 31 > P ? 1.4 : 33 > P ? 2.0 : 35 > P ? 2.1 : 38 > P ? 2.2 : 45 > P ? 2.5 : 2.6, p(e, "Mobile") ? ka = !0 : p(e, "Tablet") ? za = !0 : p(e, "TV");
  } else if (t.palmGetResource) {
    y = 30, x = u(e, "webOS/") || u(e, "WEBOS") || u(e, "hpwOS/"), p(e, "webOS.TV") || p(e, "/SmartTV") || (ka = !0);
  } else if (Q = u(e, "Tizen ")) {
    y = 31, x = Q, X = 24, S = hb, ka = !0;
  } else if (Q = u(e, "Windows Phone ") || u(O, "Windows Phone OS ") || Cb) {
    y = 23, x = Q, ka = !0;
  } else if (Ta && "ARM" === R) {
    y = 23, x = 10, ka = !0;
  } else if (mb && p(O, "ZuneWP")) {
    y = 23, x = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", ka = !0;
  } else if (p(e, "FOMA;")) {
    y = 16, ka = !0;
  } else if (p(e, "SoftBank;")) {
    y = 16, ka = !0;
  } else if (p(e, "KFMUWI")) {
    var sa = !0;
    x = 6.3;
    var pa = za = !0;
  } else if (p(e, "KFKAWI")) {
    sa = !0, x = 6, pa = za = !0;
  } else if (p(e, "KFSUWI") || p(e, "KFAUWI") || p(e, "KFDOWI")) {
    sa = !0, x = 5, pa = za = !0;
  } else if (p(e, "KFGIWI")) {
    sa = !0, x = 5, pa = za = !0;
  } else if (p(e, "KFARWI") || p(e, "KFSAWA") || p(e, "KFSAWI")) {
    sa = !0, x = 5 <= na(Z) ? 5 : 4, pa = za = !0;
  } else if (p(e, "KFSOWI") || p(e, "KFTHWA") || p(e, "KFTHWI") || p(e, "KFAPWA") || p(e, "KFAPWI")) {
    sa = !0, x = 3, pa = za = !0;
  } else if (p(e, "KFOT") || p(e, "KFTT") || p(e, "KFJWA") || p(e, "KFJWI")) {
    sa = !0, x = 2, pa = za = !0;
  } else if (p(e, "Kindle Fire")) {
    sa = !0, x = 1, pa = za = !0;
  } else if (Q = u(e, "Kindle/")) {
    y = 20, x = Q, X = 21, S = 2.2;
  } else if (Fa) {
    sa = !0, x = Z || Fb, pa = !0;
  } else if (p(e, "AmazonWebAppPlatform") || p(e, "; AFT")) {
    sa = !0, x = Z, pa = !0;
  } else if (p(e, "MeeGo")) {
    y = 32;
  } else if (p(e, "Maemo")) {
    y = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || Nb) {
    y = 22, Ma = !0;
  } else if ("WinCE" === R) {
    y = 21, Ma = !0;
  } else if (0 === R.indexOf("Win")) {
    y = "Win16" === R ? 35 : "Win32" === R ? 36 : "Win64" === R ? 37 : 0, x = u(e, "Windows NT ") || u(e, "Windows ");
  } else if (0 === R.indexOf("Mac")) {
    y = "Mac68K" === R ? 39 : "MacPowerPC" === R || "MacPPC" === R ? 38 : "MacIntel" === R ? 40 : 0;
    if (Q = u(e.split("_").join("."), "Mac OS X ")) {
      x = Q;
    }
    var Gb = !0;
  } else if (p(e, "BlackBerry") || p(e, "BB10")) {
    y = 34, x = Ua, ka = !0;
  } else if (p(e, "SunOS") || p(e, "Sun Solaris")) {
    y = 42;
  } else if (p(e, "FreeBSD")) {
    y = 43;
  } else if (p(e, "OpenBSD")) {
    y = 44;
  } else if (p(e, "NetBSD")) {
    y = 45;
  } else if (Ea && Va) {
    p(e, "Android 4.4;") ? Ba = {min:2.3} : 4 <= na(Z) ? Ba = Z : Ba = {min:2.2}, x = Ba;
  } else if (Ea && ab) {
    Z ? Ba = Z : Ba = {min:1.6}, x = Ba, p(e, "Tablet") ? za = !0 : ka = !0;
  } else if (Z) {
    x = Z, Ea = !0;
  } else if (nb && lb || yb || ib) {
    var kb = !0;
    hb ? Ba = {min:4.4} : wb && !qb || db || Eb ? Ba = {min:4} : (Ba = Z = cb.touchAction !== Ja ? {min:5} : bb ? 4.4 : oa ? w.connection ? t.searchBoxJavaBridge_ || wb ? W.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Wa ? 3 : 533 <= Wa ? Bb ? 2.3 : 2.2 : 530 <= Wa ? 2.0 : 1.5, Qa && (X = 24, S = Qa));
    x = Ba;
    Ea = !0;
  } else {
    Ob ? (x = {min:5}, kb = Ea = !0) : nb && (p(e, "Ubuntu") ? y = 46 : (Q = u(e, "Mint/")) ? (y = 47, x = Q) : (Q = u(e, "Fedora/")) ? (y = 48, x = Q) : y = p(e, "Gentoo") ? 49 : 50);
  }
  sa || Ea && kb && pb ? y = 27 : Ea && (y = y || 26);
  X || (pa = pa || Ea, ab ? (X = pa || Ma || ka || za ? 9 : 8, S = Qb) : mb ? (Ba = Ya(O, "Trident/") + 4, X = Ma || ka || za || jb ? 3 : Gb && 5 <= l ? 7 : 2, S = l) : Ta ? (X = 23 === y ? 6 : 5, S = u(O, "Edge/")) : ob ? (X = 13, S = ob) : Va ? (X = pa ? 12 : 11, S = P || Lb) : hb ? (X = 24, S = hb) : (Q = rb || u(e, "NetFront/")) ? (X = 18, S = Q) : (Q = u(e, "iCab")) ? (X = 19, S = Q) : (Q = ca(u(e, "Opera Mini/"), u(e, "Opera Mobi/")) || La && Ua) ? (X = 10, S = Q, y || (p(e, "iPhone") ? ra = 
  0 : p(e, "iPad") ? ra = 1 : p(e, "iPod") && (ra = 2), ra && (y = 24))) : xb ? (X = 25, S = Kb) : Mb ? (X = 14, S = Sa) : Ea && qb ? (X = 21, S = Z) : wb || db || Eb ? (X = pa ? 22 : 20, S = gb) : Ea && bb ? (X = 23, S = 5 > na(Z) ? Z : gb) : Ea && (Ua || kb) ? (X = 21, S = Z) : gb ? (X = pa ? 22 : 20, S = gb) : Wa && (X = 15, S = Wa));
  y && (ba[2] = y, x && (ba[3] = ya(x)));
  X && (ba[0] = X, S && (ba[1] = ya(S)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Wb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var ba = this[this.length - 1];
  --this.length;
  return ba;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ba = arguments, t = 0, B = ba.length, w = this.length; t < B; ++t) {
    this[w + t] = ba[t];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ba = this[0], t = 1, B = this.length; t < B; ++t) {
    this[t - 1] = this[t];
  }
  --this.length;
  return ba;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ba = arguments, t = ba.length, B = this.length += t - 1, w = B; w >= t; --w) {
    this[w] = this[w - t];
  }
  for (w = 0; w < t; ++w) {
    this[w] = ba[w];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(ba, t) {
  var B = arguments, w = B.length - 2 - t, G = this.slice(ba, ba + t), na;
  if (0 < w) {
    var W = this.length - 1;
    for (na = ba + t; W >= na; --W) {
      this[W + w] = this[W];
    }
  } else if (0 > w) {
    W = ba + t;
    for (na = this.length; W < na; ++W) {
      this[W + w] = this[W];
    }
    this.length += w;
  }
  W = 2;
  for (na = B.length; W < na; ++W) {
    this[W - 2 + ba] = B[W];
  }
  return G;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ba, t) {
  var B = this.length >>> 0;
  if (0 === B) {
    return -1;
  }
  if (t) {
    var w = t || 0;
    w = -Infinity === w ? 0 : (0 > w ? -w : w) | 0;
    if (B <= w) {
      return -1;
    }
  }
  for (w = 0 <= w ? w : 0 < B + w ? B + w : 0; w < B; ++w) {
    if (this[w] === ba) {
      return w;
    }
  }
  return -1;
});
(function(ba, t, B, w, G, na, W, Ja, Ya, p, Za, xa) {
  function u() {
    Hb = !Hb;
    for (var v = -1, D; D = Pb[++v];) {
      -1 !== D.className.indexOf("pbAlp") ? ka(D, "display", Hb ? "" : "none") : (Ma(D, Hb ? "pbChrCS" : "pbChr00"), ra(D, Hb ? "pbChr00" : "pbChrCS"));
    }
  }
  function ca(v) {
    if (t[0] === v) {
      return cb === cb + "" ? W(cb) : cb;
    }
  }
  function ya(v) {
    var D = t[3];
    if (t[2] === v) {
      return D === D + "" ? W(D) : D;
    }
  }
  function vb(v) {
    7.2 > V ? S(v, "pbChrCS") && (Pb.length || setInterval(u, 500), -1 === Pb.indexOf(v) && Pb.push(v)) : u = null;
  }
  function e(v, D, U) {
    v + "" === v && ("a" === v.charAt(2) && (U = !0, v = v.substr(0, 2)), v = "CS" === v ? 7.2 > V ? 117 : 9 > l || 9 > V || $a ? 1 : 132 : parseInt(v, 16));
    U && (50 === v && (v = 128), 102 < v && 108 > v && (v += 24));
    return (v - 1) * -(6 * (D || 2));
  }
  var O = G.body, Sa = O.style, R, Ta, cb = t[1], l = ca(2) || ca(3), $a = ca(7), Bb = ca(5) || ca(6), V = ca(8) || ca(9), oa = ca(11) || ca(12), lb = oa && 0 <= t.conpare(cb, "1.9.1"), Ua = ca(13), La = ca(15), ab = ca(16) || ca(17), Qb = ca(10) || ca(25), db = ca(20) || ca(22), mb = db || ca(23) || ca(21) || ca(24), wb = db && W(na.userAgent.split("Edg/")[1]);
  na = W(na.appVersion.split("Trident/")[1]) + 4;
  var Va = ya(35) || ya(36) || ya(37), xb = !l && !$a && (new Ja('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Kb = ($a ? "ie5mac" : 5.5 > l ? "ie5win" : 6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > V ? "opr70" : 8 > V ? "opr72" : 9.5 > V ? "opr" + (V | 0) : oa && !lb ? 1.3 <= oa ? "gck190" : 1 <= oa ? "gck121" : "gck097" : "modern") + ".css";
  ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9) || ya(10);
  var Cb, eb, Z, yb = Sa.transform !== xa ? "transform" : Sa["-o-transform"] !== xa ? "-o-transform" : Sa["-ms-transform"] !== xa ? "-ms-transform" : Sa["-moz-transform"] !== xa ? "-moz-transform" : Sa["-webkit-transform"] !== xa ? "-webkit-transform" : "", Ea = [], nb, Db, ob, P, Lb, Q, zb = [], Wa, gb, Eb, Mb;
  (function() {
    function v() {
      for (var c, d = 0, k = new Za() - 0; d < C.length;) {
        k < C[0].t ? ++d : (c = C.splice(d, 1)[0], c.f(c.p));
      }
      b = C.length ? Ya(v, M) : 0;
    }
    function D() {
      for (var c, d = 0; d < ea.length; ++d) {
        c = ea[d], c.f();
      }
    }
    function U() {
      A && (A = clearInterval(A));
    }
    function la() {
      b && (b = p(b));
    }
    r = function(c) {
      zb.push(c);
    };
    Q = function(c) {
      ea.length || (A = setInterval(D, ja));
      ea.push({f:c, B:++E});
      return E;
    };
    Wa = function() {
      A && (U(), A = setInterval(D, ja));
    };
    gb = U;
    var ea = [], ja = 999, E = 0, A;
    if (5 > l || $a) {
      B._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    P = function(c, d, k) {
      C.length || (b = Ya(v, M));
      C.push({f:c, p:d, B:++a, t:new Za() - 0 + (M < k ? k : M)});
      return a;
    };
    Lb = function(c) {
      for (var d = C.length, k; k = C[--d];) {
        if (k.B === c) {
          C.splice(d, 1);
          break;
        }
      }
      return 0;
    };
    Eb = function() {
      b && (la(), b = Ya(v, M));
    };
    Mb = la;
    var C = [], M = 64, a = 0, b;
    if (5 > l || $a) {
      B._wdb_ontimer = v, v = "_wdb_ontimer()";
    }
  })();
  var Nb, pb, hb, Qa, qb, ib, da, Ha, bb, Ab, Ob, Fa, Fb, y, x, rb, X, S, Ma, ra, ka, za;
  (function() {
    function v(a, b, c) {
      var d = ["<", a], k = 1, m, q;
      if (b) {
        for (m in b) {
          var F = b[m];
          if (null != F && "" !== F) {
            if ("style" === m) {
              d[++k] = ' style="';
              for (q in F) {
                for (var ha = ++k, T, Y = [], aa = q.split(""), K = aa.length; K;) {
                  T = aa[--K], "A" <= T && "Z" >= T && (T = "-" + T.toLowerCase()), Y[K] = T;
                }
                d[ha] = Y.join("") + ":" + F[q] + ";";
              }
              d[++k] = '"';
            } else {
              "className" === m && (m = "class"), d[++k] = " " + m + '="' + F + '"';
            }
          }
        }
      }
      d[++k] = ">";
      null != c && (A && "font" !== a ? d[++k] = "<FONT>" + c + "</FONT>" : d[++k] = c);
      d[++k] = "</" + a + ">";
      return d.join("");
    }
    function D(a) {
      a = "*" === a && 6 > l ? "*" !== a ? G.all.tags(a.toUpperCase()) : G.all : G.getElementsByTagName(a);
      var b = [], c = 0, d;
      for (d = a.length; c < d; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function U(a) {
      return A ? a.parentElement : a.parentNode;
    }
    function la(a, b, c, d, k, m) {
      if (A) {
        var q = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var F = qb(2 > a ? Qa(b) : b);
        F = 2 > a ? F.indexOf(b) + a : F.length;
        b.insertAdjacentHTML(q, v(c, d, k));
        return qb(b)[F];
      }
      b = C ? G.createElement(v(c, d)) : m ? G.createElementNS("http://www.w3.org/2000/svg", c) : G.createElement(c);
      if (d && !C) {
        for (q in d) {
          if ((c = d[q]) || 0 === c) {
            switch(q) {
              case "class":
              case "className":
                X(b, c);
                break;
              case "style":
                a = b.style;
                for (F in c) {
                  a[F] = c[F];
                }
                break;
              default:
                x(b, q, c);
            }
          }
        }
      }
      M || null != k && ea(b, k);
      return b;
    }
    function ea(a, b) {
      if (A) {
        return la(2, a, "font", xa, b);
      }
      var c = G.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function ja(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function E(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var A = 5 > l;
    R = D("html")[0];
    Ta = D("head")[0];
    Nb = function(a) {
      return B[a] || G[a] || G.getElementById(a);
    };
    pb = D;
    hb = function(a) {
      var b = [], c = 0, d, k = -1;
      if (9 > l || !G.getElementsByClassName) {
        var m = 6 > l ? G.all : G.getElementsByTagName("*");
      } else {
        var q = !0;
        m = G.getElementsByClassName(a);
      }
      for (d = m.length; c < d; ++c) {
        var F = m[c];
        if (q || (A || 1 === F.nodeType) && E(F, a)) {
          b[++k] = F;
        }
      }
      return b;
    };
    Qa = U;
    qb = function(a) {
      a = A ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    ib = function(a) {
      var b = !(7.03 < V && 7.2 > V) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], d = a.length, k = -1, m; d;) {
        if (m = a[--d], b || 1 === m.nodeType) {
          A && "FONT" === m.tagName || (c[++k] = m);
        }
      }
      return c;
    };
    da = function(a, b, c, d, k) {
      b = la(2, a, b, c, d, k);
      A || (a.appendChild(b), M && null != d && ea(b, d));
      return b;
    };
    Ha = function(a, b, c, d, k) {
      b = la(0, a, b, c, d, k);
      A || (U(a).insertBefore(b, a), M && null != d && ea(b, d));
      return b;
    };
    bb = function(a, b, c, d, k) {
      b = la(1, a, b, c, d, k);
      var m;
      A || ((m = a.nextSibling) ? Qa(m).insertBefore(b, m) : Qa(a).appendChild(b), M && null != d && ea(b, d));
      return b;
    };
    Ab = ea;
    Ob = function(a, b) {
      if (A) {
        return la(0, a, "font", xa, b);
      }
      var c = G.createTextNode("" + b);
      Qa(a).insertBefore(c, a);
      return c;
    };
    Fa = function(a) {
      Qa(a) ? A ? a.outerHTML = "" : Qa(a).removeChild(a) : r("[DOM] p_DOM_remove(), No parentNode!");
    };
    var C = 9 > l, M = 9 > l;
    Fb = function(a) {
      return a.tagName.toUpperCase();
    };
    y = function(a, b) {
      return a.getAttribute(b) || "";
    };
    x = function(a, b, c) {
      a.setAttribute(b, c);
    };
    rb = function(a, b) {
      a.removeAttribute(b);
    };
    X = ja;
    S = E;
    Ma = function(a, b) {
      var c;
      if (!E(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        ja(a, c + b);
      }
    };
    ra = function(a, b) {
      if (E(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        ja(a, c.join(" "));
      }
    };
    ka = function(a, b, c) {
      a.style[b] = c;
    };
    za = function(a, b) {
      var c = -1, d, k;
      if (9 > V || 5.5 > l) {
        if (b) {
          for (d = b.split(";"); k = d[++c];) {
            var m = k.split(":");
            a.style[m[0]] = k.substr(m[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        a.style.cssText = b;
      }
    };
  })();
  var jb, Ba, sa, pa, Gb, kb, H, qa, ia = 0;
  (function() {
    function v(f, g) {
      for (var I = 0; I < f.length; ++I) {
        !0 === f[I](g) && (f.splice(I, 1), --I);
      }
    }
    function D(f, g) {
      c && !b.length && P(U);
      b.push(f, g);
    }
    function U() {
      var f = b, g;
      for (b = []; g = f.shift();) {
        v(g, f.shift());
      }
    }
    function la(f) {
      var g = f || event;
      f = d[g.type];
      var I = -1, n, J;
      l ? (g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : m && (g.A = g.stopPropagation, g.stopPropagation = function() {
        J = !0;
      });
      for (; n = f[++I];) {
        n.l === this ? (this.g = n.j, this.g(g), this.g = w, this.g = null) : 7.2 > V && this === G && n.l === B && (B.g = n.j, B.g(g), delete B.g);
      }
      if (l) {
        return g.preventDefault = g.stopPropagation = null, g.returnValue;
      }
      m && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (F = !0), J && !F && g.A(), g.A = g.stopPropagation = null);
    }
    function ea() {
      if (ha) {
        var f = G.readyState;
        "loaded" === f || "complete" === f ? ha() : P(ea);
      }
    }
    function ja(f) {
      v(T, f);
    }
    function E() {
      var f = 9 === a.offsetWidth;
      qa !== f && D(Y, qa = f);
    }
    function A() {
      return ia = K ? z ? 2 : h ? 3 : 1 : 0;
    }
    function C() {
      ha || v(Ca);
    }
    var M = B.matchMedia, a, b = [], c;
    Ea.push(function() {
      a = da(O, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      sa(function() {
        c = !0;
        b.length && P(U);
      });
    });
    jb = function(f, g, I, n) {
      if (q) {
        f.addEventListener(g, I, n ? xb ? n : n.capture : !1);
      } else {
        var J = {l:f, j:I};
        n = d[g];
        var ma = "on" + g, Da, Ia;
        if (n) {
          for (Da = n.length; Ia = n[--Da];) {
            if (Ia.l === f && Ia.j === I) {
              return;
            }
          }
          d[g].push(J);
        } else {
          d[g] = n = [J], k || (g = f[ma], "function" === typeof g && g !== la && n.unshift({l:f, j:g}));
        }
        k ? f.attachEvent(ma, la) : f[ma] = la;
      }
    };
    Ba = function(f, g, I, n) {
      if (q) {
        f.removeEventListener(g, I, n ? xb ? n : n.capture : !1);
      } else {
        n = d[g];
        g = "on" + g;
        var J, ma, Da;
        if (n) {
          for (J = n.length; ma = n[--J];) {
            ma.l === f && (ma.j === I ? n.splice(J, 1) : Da = !0);
          }
          Da || (k ? f.detachEvent(g, la) : (f[g] = w, f[g] = null));
        }
      }
    };
    var d = {}, k = !1, m = 525.13 > La, q = !m && !$a && B.addEventListener, F;
    m && R.addEventListener("click", function(f) {
      if (F) {
        return F = !1, f.preventDefault(), !1;
      }
    });
    sa = function(f) {
      Ea.push(f);
    };
    pa = function(f) {
      T.push(f);
    };
    var ha = function(f) {
      Ba(B, "load", ha);
      ha = null;
      v(Ea, f);
    };
    var T = [];
    419.3 >= La ? P(ea) : jb(B, "load", ha);
    (l || 1.8 > oa) && jb(B, "unload", ja);
    kb = function(f) {
      Y.push(f);
    };
    var Y = [];
    sa(function() {
      E();
      Q(E);
    });
    H = function(f) {
      aa.push(f);
    };
    var aa = [], K, h, z;
    if (10 <= l || Bb || Va && wb) {
      M("(-ms-high-contrast:black-on-white)").addListener(function(f) {
        K = h = f.matches;
        D(aa, A());
      }), M("(-ms-high-contrast:white-on-black)").addListener(function(f) {
        K = z = f.matches;
        D(aa, A());
      }), M("(-ms-high-contrast:active)").addListener(function(f) {
        K = f.matches;
        D(aa, A());
      });
    } else if (10 > l || Va && (44 <= oa || Ua)) {
      var L = function() {
        function f(J) {
          return "#ffffff" === J || "rgb(255,255,255)" === J;
        }
        var g = G.defaultView, I = ia;
        var n = g ? g.getComputedStyle(a, null) : a.currentStyle;
        g = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        if (g) {
          return K = "#123456" !== g && "rgb(18,52,86)" !== g, h = ("#000000" === g || "rgb(0,0,0)" === g) && f(n), z = f(g) && ("#000000" === n || "rgb(0,0,0)" === n), I !== A() && D(aa, ia), !0;
        }
      };
      sa(function() {
        ka(a, "color", "#123456");
        ka(a, "backgroundColor", "#123456");
        60 > oa || Ua ? L() : L() && Q(L);
        L = null;
      });
    }
    Gb = function(f) {
      Ca.push(f);
    };
    var Ca = [], Ga = 0, ta = 1 > oa || 1.2 <= oa && 1.8 > oa || 7.2 >= V;
    ta ? Q(function() {
      var f = B.scrollY || O.scrollTop;
      Ga !== f && (Ga = f, C());
    }) : jb(B, "scroll", C);
    pa(function() {
      ta || Ba(B, "scroll", C);
    });
  })();
  var Pa = 9 > l || 525 <= La && 530 > La || 2 > db, Ka = 0, Ib, Rb, Jb, Sb;
  (function() {
    function v(a) {
      for (var b = ea.length, c; b;) {
        if (c = ea[--b], c.F === a) {
          return c;
        }
      }
    }
    function D() {
      var a = G.styleSheets, b = [], c = 0, d = -1, k;
      if (a) {
        for (k = a.length; c < k; ++c) {
          if (2 > db || Va && 526 > La) {
            var m = la(a[c]);
            m.parentNode && (b[c] = m);
          } else {
            b[c] = la(a[c]);
          }
        }
      } else {
        for (a = pb("*"), k = a.length; c < k; ++c) {
          m = a[c];
          var q = Fb(m);
          if ("STYLE" === q || "LINK" === q && "text/css" === y(m, "type")) {
            b[++d] = m;
          }
        }
      }
      return b;
    }
    function U(a) {
      return a.styleSheet || a.sheet;
    }
    function la(a) {
      return a.owningElement || a.ownerNode;
    }
    Ib = function(a, b) {
      var c = D(), d = c.length;
      d = 0 <= b && b < d ? b : d;
      var k = c[d - 1];
      c = c[d];
      if (A || C) {
        var m = c ? Ha(c, "style") : k ? bb(k, "style") : da(Ta, "style");
        C && Ab(m, "");
        var q = U(m);
        a && x(m, "media", a);
      } else if (ja || E) {
        q = {D:a, C:d, G:!0};
      }
      if (q) {
        return ea.push({F:q, h:m, m:[]}), q;
      }
    };
    Rb = function(a) {
      a = v(a);
      var b = a.m, c = b.length, d;
      for (a.h && Fa(a.h); d = b[--c];) {
        d.i && Fa(d.i);
      }
      ea.splice(ea.indexOf(a), 1);
    };
    Jb = function(a, b, c, d) {
      var k = v(a), m = k.h;
      k = k.m;
      var q = "@import" === b, F = "@page" === b, ha = "@font-face" === b, T = k.length, Y = "", aa;
      if (a.imports) {
        var K = a.imports.length;
      } else {
        for (K = 0; K < T && "@import" === k[K].u; ++K) {
        }
      }
      if (q) {
        d = 0 <= d && d < K ? d : K;
        var h = b + ' "' + c + '"';
      } else {
        d = K <= d && d < T ? d : T;
        for (h in c) {
          Y += ";" + h + ":" + c[h];
        }
        Y = Y.substr(1);
        h = b + "{" + Y + "}";
        6 <= l && ha && (d = T);
      }
      T = {u:b, v:c, o:d, s:d};
      if (9 > l) {
        K = a.rules;
        var z = K.length;
        if (ha) {
          b = G.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + h + "</style>", b = b.lastChild, (aa = m.nextSibling) ? Qa(m).insertBefore(b, aa) : Qa(m).appendChild(b), T.i = b;
        } else {
          q ? a.addImport(c, d) : 5.5 <= l && F || a.addRule(b, Y, d);
          T.s = d + (K.length - z - 1);
          if (0 === K.length - z) {
            return r("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + h), -1;
          }
          r("[CSSOM] rules.length \u306e\u5897\u5206" + (K.length - z));
        }
      } else if (A || C) {
        (Va && La || 28 > db) && q ? T.i = bb(m, "link", {href:c, rel:"stylesheet", type:"text/css"}) : Pa && ha ? (b = T.i = bb(m, "style", {type:"text/css", media:a.media}), b.innerText = h) : a.insertRule(h, d);
      }
      k.splice(d, 0, T);
      if (ja || E) {
        m = v(a);
        aa = m.m;
        b = m.h;
        c = a.C;
        q = D();
        a = q[c - 1];
        c = q[c];
        q = [];
        ha = F = -1;
        Y = "style";
        T = {type:"text/css", media:m.D};
        for (var L; K = aa[++F];) {
          if (h = K.u, K = K.v, "@import" === h) {
            q[++ha] = h + ' "' + K + '"';
          } else {
            q[++ha] = h + "{";
            h = "";
            for (L in K) {
              h += ";" + L + ":" + K[L];
            }
            q[++ha] = h.substr(1) + "}";
          }
        }
        q = q.join("");
        ja && (q = "data:text/css;charset=utf-8;base64," + M(q), T.rel = "stylesheet", T.href = q, Y = "link", q = xa);
        b ? (m.h = bb(b, Y, T, q), Fa(b)) : (b = c ? Ha(c, Y, T, q) : a ? bb(a, Y, T, q) : da(Ta, Y, T, q), m.h = b);
      }
      L = d;
      a = k.length;
      for (m = L; m < a; ++m) {
        aa = k[m], aa.i || (b = aa.s - aa.o, aa.o = L, aa.s = L + b, L += 1 + b);
      }
      return d;
    };
    Sb = function(a, b, c) {
      b = v(a).m[b];
      var d;
      if (b) {
        if ("@import" === b.u) {
          var k = b.v;
        } else if (A || C) {
          r("[CSSOM] CSSOM_getRawValueOfRule : " + d + " " + (9 > l ? a.rules : a.cssRules).length + " " + b.o);
          if (a = d = (9 > l ? a.rules : a.cssRules)[b.o]) {
            d = d.style;
            a = [];
            c = c.split("");
            k = 0;
            b = c.length;
            for (var m, q = !1; k < b; ++k) {
              m = c[k], "-" === m ? q = !0 : q ? (a[k] = m.toUpperCase(), q = !1) : a[k] = m;
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
    var ea = [], ja = 1 > oa || 8 <= V && 9 > V, E = 7.2 <= V && 8 > V, A = !!l || !ja && !E && function() {
      var a = da(R, "style"), b = !!U(a);
      b && (r("[CSSOM] CSSStyleSheet @insertRule : " + !!U(a).insertRule), r("[CSSOM] CSSStyleSheet @addRule : " + !!U(a).addRule), r("[CSSOM] CSSStyleSheet @cssRules : " + !!U(a).cssRules), r("[CSSOM] CSSStyleSheet @rules : " + !!U(a).rules), r("[CSSOM] CSSStyleSheet @cssText : " + ("" === U(a).cssText)));
      Fa(a);
      return b;
    }();
    r("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + A);
    var C = !A && La && !ja && !E && function() {
      var a = da(R, "style"), b;
      Ab(a, "");
      if (b = !!U(a)) {
        r("[CSSOM] CSSStyleSheet @insertRule : " + !!U(a).insertRule), r("[CSSOM] CSSStyleSheet @addRule : " + !!U(a).addRule), r("[CSSOM] CSSStyleSheet @cssRules : " + !!U(a).cssRules), r("[CSSOM] CSSStyleSheet @rules : " + !!U(a).rules), r("[CSSOM] CSSStyleSheet @cssText : " + ("" === U(a).cssText));
      }
      Fa(a);
      return b;
    }();
    A || r("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + C);
    Ka = ja || E ? 1 : A || C ? 2 : 0;
    r("[CSSOM] p_CSSOM_canuse : " + Ka);
    var M;
    (function(a) {
      function b(d) {
        for (var k = c, m = "", q = 0, F; F = d.length;) {
          4 > F && (q = [0, 2, 1, 0][F]), F = d.charCodeAt(0) << 16 | (1 < F ? d.charCodeAt(1) : 0) << 8 | (2 < F ? d.charCodeAt(2) : 0), m += [k[F >>> 18], k[F >>> 12 & 63], 2 <= q ? "=" : k[F >>> 6 & 63], 1 <= q ? "=" : k[F & 63]].join(""), d = d.substr(3);
        }
        return m;
      }
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      a.btoa && (b = a.btoa);
      M = b;
    })(this);
  })();
  (function() {
    function v() {
      if (525 > La || oa && !lb || 2.2 > ca(21) || ca(25) || 10 > ca(3) || ya(32) || ya(30) || ya(1) || ya(2) || ya(3)) {
        return !1;
      }
      if (Pa) {
        return !0;
      }
      if (2 === Ka) {
        var E = Ib();
        var A = Jb(E, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var C = E.cssText || E.cssRules && E.cssRules[A] && E.cssRules[A].cssText || "";
        var M = C.match("src") && C.match("@font-face");
        r("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + C);
        r("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > l ? E.rules : E.cssRules).length);
        r("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + Sb(E, A, "src"));
        Rb(E);
      }
      v = null;
      return ja = !!M;
    }
    sa(function() {
      if (qa) {
        if (Z === xa && (Z = 8 <= l || Bb || lb || Ua || 7.2 <= V || 522 <= La || 3 <= ab || mb ? 2 : 6 <= V || oa ? 1 : 0, !Z)) {
          var E = da(O, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Z = 6 <= E.offsetWidth ? 2 : 0;
          Fa(E);
        }
      } else {
        Z = xa;
      }
    });
    nb = function(E) {
      function A(a) {
        M = Lb(M);
        D = a;
        C.onload = C.onerror = w;
        P(E, a);
      }
      if (D !== xa) {
        r("[dataUriTest] already done : " + D), P(E, D);
      } else if (8 > l) {
        r("[dataUriTest] trident < 8 : false"), P(E, !1);
      } else {
        r("[dataUriTest] start!");
        var C = new Image(), M = P(function() {
          M && A(!1);
        });
        C.onerror = function() {
          r("[dataUriTest] no DATA URI!");
          A(!1);
        };
        C.onload = function() {
          r("[dataUriTest] DATA URI:" + (1 === C.width * C.height));
          A(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var D;
    9 > l && sa(function() {
      var E = da(O, "div");
      za(E, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Cb = 1 < E.offsetHeight;
      za(E, "");
      Fa(E);
    });
    Db = function(E, A) {
      function C() {
        if (a || !b || M.complete) {
          r("[imageTest] timer -> img.complete. img.width=" + M.width);
          var c = !!M.width;
          eb = eb || c;
          P(E, c);
          M.onerror = M.onload = w;
          M = E = null;
        } else {
          --b, P(C);
        }
      }
      var M = new Image(), a, b = 99;
      r("[imageTest] start.");
      M.onerror = function() {
        r("[imageTest] error!");
        a = !0;
      };
      M.onload = function() {
        r("[imageTest] onload.");
        a = !0;
      };
      M.src = A;
      P(C);
    };
    var U = 9 > l || 2 > db || 12 > V, la = "bad_" + (new Za() - 0) + "_", ea = ["sans-serif", "serif"], ja;
    ob = function(E, A, C, M, a, b, c) {
      function d(f) {
        E(f);
        ta && !f && Rb(ta);
        E = z = L = Ca = ta = null;
      }
      function k() {
        var f = '1.6em "' + A + '"';
        r("[webFontTest] testByNativeFontLoaderAPI start.");
        G.fonts.load(f).then(function(g) {
          r("[webFontTest] fonts.check() : " + G.fonts.check(f, "i") + ", fonts.length : " + g.length);
          F(A) ? P(d, Ga) : (r("[webFontTest] mesureWebFont() : false"), q(!0));
        }, function(g) {
          r("[webFontTest] fonts.load() rejected! " + g);
          nb(ha);
        });
      }
      function m(f) {
        return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (K = new Za() - 0, !1) : f < new Za() - K;
      }
      function q(f) {
        f && (r("[webFontTest] testWebFont start."), K = new Za() - 0);
        F(A) ? (r("[webFontTest] testWebFont mesurement success : " + Ga), d(Ga)) : m(aa) ? (r("[webFontTest] testWebFont timeout!"), h ? d(0) : U ? P(d, 0) : nb(ha)) : P(q);
      }
      function F(f) {
        var g = 0, I = -1, n = 0;
        if (!Ca) {
          var J = -1;
          var ma;
          z = da(O, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Ca = {}; ma = ea[++J];) {
            ka(z, "fontFamily", ma), Ca[ma] = z.offsetWidth;
          }
        }
        for (5 > l ? z || (z = da(O, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : O.appendChild(z); J = ea[++I];) {
          if (ka(z, "fontFamily", '"' + f + '",' + J), z.offsetWidth !== Ca[J]) {
            g = 1;
            break;
          }
        }
        !l && g && a && (z.innerHTML = a, f = z.offsetWidth, z.innerHTML = b, n = f === z.offsetWidth ? 1 : 0, z.innerHTML = "mmmmmmmmmmlli");
        Fa(z);
        5 > l && (z = null);
        return Ga = g + n;
      }
      function ha(f) {
        r("[webFontTest] onTestDataURIComplete : " + f);
        (h = f) ? T(!0) : d(0);
      }
      function T(f) {
        var g;
        f && (K = new Za() - 0);
        for (g in C) {
          F(g) ? (r("[webFontTest] success! " + g), L = da(O, "div", {"aria-hidden":"true", className:M, id:M}), ta = Ib(), Jb(ta, "@import", C[g]), P(Y, !0)) : m(100) ? (r("[webFontTest] timeout! " + g), delete C[g], P(T, !0)) : P(T);
          return;
        }
        d(0);
      }
      function Y(f) {
        f && (r("[webFontTest] testImportedCssReady start!"), r("[webFontTest] targetWebFontName : " + A), K = new Za() - 0);
        1 < L.offsetWidth ? (r("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + L.offsetWidth), Fa(L), aa = 100, P(q, !0)) : m(aa) ? 528 > La ? (r("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + L.offsetWidth), Fa(L), aa = 100, P(q, !0)) : (r("[webFontTest] testImportedCssReady timeout!"), Fa(L), d(0)) : P(Y);
      }
      var aa = c || 5000, K, h, z, L, Ca, Ga, ta;
      A = la + A;
      r("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      v || ja ? ja || v() ? (r("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !G.fonts || 603 > La ? (r("[webFontTest] No native font loader."), q(!0)) : (r("[webFontTest] Use Native font loader."), k())) : (r("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), P(d, 0)) : (r("[webFontTest] webFontTest_maybeCanUseWebFont : false"), P(d, 0));
    };
  })();
  var Na = String.fromCharCode, Pb = [], Hb, sb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Na(960), ")", "(", Na(234), Na(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Na(9824), "\u2190", Na(9829), Na(9830), Na(9827), Na(956), "\u03a9", "\u2193", "\u2192", "%", Na(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Na(9619)];
  (10 > l || Va && (44 <= oa || Ua)) && H(function(v) {
    ra(O, "jsHcm");
    ra(O, "jsHcmWob");
    ra(O, "jsHcmBow");
    if (v) {
      switch((yb || 9 === l || 5.5 <= l && 9 > l && Cb) && Ma(O, "jsCanRotate"), v) {
        case 1:
          Ma(O, "jsHcm");
          break;
        case 2:
          Ma(O, "jsHcmWob");
          break;
        case 3:
          Ma(O, "jsHcmBow");
      }
    } else {
      ra(O, "jsCanRotate");
    }
  });
  (function() {
    function v(h) {
      F = h;
      r("[pbList] WebFont test result : " + !!h);
      h ? ea() : eb ? la(!0) : eb !== xa ? ea() : (r("[pbList] Need imageTest " + ha), Db(la, ha));
    }
    function D() {
      D = null;
      ob(v, "PB-100", {"PB-100_canTTF":Xa + "pbFont/ttf.css", "PB-100_canWOFF":Xa + "pbFont/woff.css", "PB-100_canEOT":Xa + "pbFont/eot.css", "PB-100_canSVG":Xa + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function U(h) {
      this.focus();
      h.preventDefault();
      h.stopPropagation();
    }
    function la(h) {
      h ? (r("[pbList] Fallback start!"), Ma(O, "pbList-noWebFont"), Ka && (2 !== Z || 9.5 > V ? (Jb(h = Ib(), ".pbList font", {"background-image":"url(" + ha + ")"}), 2 === Ka && r("[pbList] " + (9 > l ? h.rules : h.cssRules).length + ", " + Sb(h, 0, "background-image") + " " + (9 > l ? h.cssText : h.cssRules[0] && h.cssRules[0].cssText))) : (Jb(h = Ib(), ".pbList font:after", {content:"url(" + ha + ")"}), 2 === Ka && r("[pbList] " + (9 > l ? h.rules : h.cssRules).length + ", " + (9 > l ? h.cssText : 
      h.cssRules[0] && h.cssRules[0].cssText))))) : r("[pbList] image disabled!");
      ea();
    }
    function ea() {
      for (v = ob = null; q.length;) {
        ja(q.shift(), q.shift());
      }
      r("[pbList] complete.");
    }
    function ja(h, z) {
      function L(I) {
        I = qb(I);
        for (var n = -1, J; J = I[++n];) {
          switch(J.nodeType) {
            case 1:
              L(J);
              break;
            case 3:
              J.data && Ga(J.data) && ta.push(J);
          }
        }
      }
      function Ca(I) {
        var n = I.children, J = 0, ma = n.length;
        if (ma) {
          for (; J < ma; ++J) {
            Ca(n[J]);
          }
        } else {
          (n = I.innerText) && Ga(n) && ta.push(I);
        }
      }
      function Ga(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var ta = [], f;
      if (v) {
        -1 === q.indexOf(h) && (q.push(h, z), T && D && D());
      } else {
        var g = q.indexOf(h);
        0 <= g && q.splice(g, 2);
        for (5 > l ? Ca(h) : L(h); f = ta.shift();) {
          g = 5 > l ? f.innerText : f.data, 2 !== F && (g = g.split(b).join(M)), z ? 5 > l ? f.innerText = g : f.data = g : E(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(C).split("&amp;").join("&"), f);
        }
      }
    }
    function E(h, z) {
      function L(va, wa) {
        for (var tb = ""; wa;) {
          wa & 1 && (tb += va), wa >>= 1, va += va;
        }
        return tb;
      }
      function Ca(va, wa, tb) {
        for (var Tb, Xb = -1, Ub, Vb; Tb = wa[++Xb];) {
          for (; 0 <= (Ub = va.indexOf(Tb));) {
            Vb = Tb.length, va = va.substr(0, Ub) + L(tb, Vb) + va.substr(Ub + Vb);
          }
        }
        return va;
      }
      function Ga(va) {
        var wa = W(va), tb = "" + wa;
        return 0 < wa && wa === wa | 0 && (wa = va.indexOf(tb) + tb.length, wa <= va.length) ? wa : 0;
      }
      var ta = " area line str cmd fnc syb".split(" "), f = 5 > l || 1 === z.nodeType, g = [], I = "", n, J = -1, ma, Da, Ia;
      if (f) {
        if (aa) {
          var Aa = z.style.visibility;
          ka(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (K) {
        var Oa = z;
        z = G.createDocumentFragment();
      }
      if (function(va) {
        var wa = va.indexOf("P");
        if (-1 === wa) {
          return !1;
        }
        wa = W(va.charAt(wa + 1));
        return 0 <= wa && 9 >= wa;
      }(h)) {
        I = L("+", h.length);
      } else {
        0 <= (n = Ga(h)) && (I = L("|", n), J = n, --J);
        for (; n = h.charAt(++J);) {
          n === C || ma ? (I += "~", n === C && (ma = !ma)) : I += n;
        }
        I = Ca(I, m, "^");
        I = Ca(I, d, "{");
        I = Ca(I, k, "}");
      }
      J = 0;
      for (ma = h.length; J < ma; ++J) {
        n = h.charAt(J);
        var N = n === c;
        var Ra = " " === n;
        n = N ? " " : n;
        var fa = I.charAt(J);
        var fb = (Da = ub) && N;
        var ub = "|" === fa;
        fa = ta["+|~{}^".indexOf(fa) + 1];
        "\n" !== n ? (F || !eb ? (2 === F && h.substr(J, 2) === b && (n = b, ++J), fa = Ra && "str" === fa ? "pbList-strsp" : N ? "" : !Ra && fa ? "pbList-" + fa : "") : (N = sb.indexOf(n), N = -1 === N ? "" : sb.indexOf(n).toString(16).toUpperCase(), N = (N = 1 === N.length ? "0" + N : N) ? "pbChr" + N : "", fa = Ra && "str" === fa ? "pbList-strsp" : Ra || !N ? "" : fa ? (N ? N + " " : "") + "pbList-" + fa : N), N = xa, fb ? (n = 6 <= l && 8 > l ? " " : c, fa = "") : ub && (1.9 > oa || 9.5 > V) ? 
        (ub && !Da && (Ia = 4 - (W(h.substr(J)) + "").length), 7.5 > V ? N = Y ? "position:relative;top:-4px;left:" + 12 * Ia + "px" : {position:"relative", top:"-4px", left:12 * Ia + "px"} : 1.3 <= oa ? (N = Y ? "position:absolute;left:" + 12 * Ia + "px" : {position:"absolute", left:12 * Ia + "px"}, ++Ia) : N = Y ? "position:relative;left:" + 12 * Ia + "px" : {position:"relative", left:12 * Ia + "px"}) : Ra && 7.5 > V && (fa = "pbList-strsp"), Y ? g.push("<font" + (fa ? ' class="' + fa + '"' : "") + 
        (N ? ' style="' + N + '"' : "") + ">" + n + "</font>") : f || K ? da(z, "font", {"class":fa, style:N}, n) : Ha(z, "font", {"class":fa, style:N}, n)) : (Da = ub = !1, Y ? g.push(n) : f || K ? Ab(z, n) : Ob(z, n));
      }
      if (f) {
        Y ? z.innerHTML = g.join("") : K && Oa.appendChild(z), aa && ka(z, "visibility", Aa);
      } else {
        if (Y) {
          ta = G.createElement("font");
          for (ta.innerHTML = g.join(""); g = ta.firstChild;) {
            z.parentNode.insertBefore(g, z);
          }
          Fa(z);
        } else {
          K ? Oa.parentNode.replaceChild(z, Oa) : Fa(z);
        }
      }
    }
    kb(function(h) {
      if (h) {
        h = hb("pbChrCS");
        for (var z = 0, L = h.length; z < L; ++z) {
          vb(h[z]);
        }
        return !0;
      }
    });
    var A = [];
    kb(function(h) {
      function z(Aa) {
        var Oa = y(Aa, "pbTip"), N = Oa.charAt(0), Ra = "_" === N;
        Oa = Ra ? Oa.charAt(2) : N;
        N = Ra ? "Btm" : "";
        var fa = y(Aa, "title");
        Ga || (rb(Aa, "pbTip"), rb(Aa, "title"), Ma(Aa, "pbTipPos" + Oa.toUpperCase()), da(Aa, "div", {className:"pbTip" + N, style:{width:fa.length + Ca + "em"}}, fa));
        da(Aa, "div", {className:"pbTail" + N});
        ta && Ra && (Aa.focus(), Aa.blur());
      }
      function L(Aa) {
        if (2 > Z) {
          var Oa = y(Aa, "pbGhst"), N = Aa.className, Ra = N.split("pbCsr")[1] || "", fa = N.split("pbAlp")[1] || "";
          if ("CS" === Oa) {
            var fb = "_";
          } else {
            fb = Oa, 3 === fb.length && (fb = fb.substr(0, 2)), fb = sb[parseInt(fb, 16)] || "~";
          }
          var ub;
          Ra = Ra.split(" ")[0];
          fa = W(fa.split(" ")[0]);
          var va = 10 - fa;
          fa && 7.2 > V && (N = N.split("pbChr")[1], N = N.split(" ")[0], ka(Aa, "backgroundPosition", e(N, 2, J) + "px " + -24 * (10 - fa) + "px"));
          Oa && (7.2 > V && (ub = {backgroundPosition:e(Oa, 2, J) + "px " + -24 * (10 - va) + "px"}), rb(Aa, "pbGhst"), g = Ha(Aa, "b", {className:"pbChr" + Oa + " pbAlp" + va + " pbCsr" + Ra, style:ub}, fb), vb(g));
          vb(Aa);
        }
      }
      if (h) {
        var Ca = 6 > l ? 2 : 0;
        h = pb("SAMP");
        var Ga = 8 === l, ta = 5 <= l && 6 > l, f, g, I, n;
        Cb && Ma(O, "pbLCD-AX");
        if (h.length) {
          for (I = -1; f = h[++I];) {
            if (S(Qa(f), "pbLCD")) {
              var J = S(f, "PB-120") || S(f, "FX-795P");
              var ma = ib(f);
              for (f = ma.length; f;) {
                var Da = ma[--f];
                switch(Fb(Da)) {
                  case "A":
                    (2 > Z || Ga) && z(Da);
                    if (2 > Z) {
                      var Ia = ib(Da);
                      for (n = Ia.length; n;) {
                        !Ga && L(Ia[--n]);
                      }
                    }
                    Qb ? x(Da, "href", "javascript:void(0)") : (jb(Da, "click", U), A.push(Da));
                    break;
                  case "B":
                    2 > Z && L(Da);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    pa(function(h) {
      for (; h = A.shift();) {
        Ba(h, "click", U);
      }
    });
    6 === l && (new Ja("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(G);
    var C = sb[7], M = sb[30], a = sb[113], b = Na(8337) + Na(8331), c = Na(160);
    Na(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), k = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), m = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + M + sb[31]).split(""), q = [], F, ha, T;
    kb(function(h) {
      if (h) {
        ha = Xa + "pbFont/x3mask.png";
        h = pb("*");
        for (var z = -1, L; L = h[++z];) {
          S(L, "pbList") ? ja(L) : S(L, "pbFont") && ja(L, !0);
        }
        q.length && (r("[pbList] " + q.length / 2 + " elements found. WebFont test start."), D());
        return !0;
      }
    });
    oa && t.conpare(cb, "0.9.6");
    var Y = !1, aa = 8 > V, K = !Y && !aa && !(6 > l) && G.createDocumentFragment && !!O.replaceChild;
    ba.prettify = ja;
  })();
  Sa = G.scripts || pb("script");
  var Xa = Sa[Sa.length - 1].src.split("/");
  --Xa.length;
  (Xa = Xa.join("/")) && (Xa += "/");
  r("[p_assetUrl] " + Xa);
  sa(function() {
    var v;
    (v = Nb("logger")) || alert("#logger not found!");
    v ? (r = function(D) {
      da(v, "P", null, D);
    }, Wb = function(D) {
      da(v, "P", {style:{color:"red"}}, D);
    }, B.onerror = function(D, U, la) {
      Wb(D + ", " + U + ", " + la);
      return !0;
    }) : B.console ? r = console.log : r = w;
    for (; zb.length;) {
      r(zb.shift());
    }
    zb = null;
  });
  6.1 > ab && Gb(Wa);
  pa(gb);
  6.1 > ab && Gb(Eb);
  pa(Mb);
  10 > l && (11 !== na || 5 !== l) || (9 > V || 1 > oa || !$a && !B.addEventListener ? G.write('<link href="' + Xa + Kb + '" rel="stylesheet"' + (8 > V ? "" : ' media="screen,handheld,print"') + ">") : sa(function() {
    da(Ta, "link", {href:Xa + "" + Kb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

