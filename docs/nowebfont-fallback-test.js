PB100={};var r;
ua = [];
ua.conpare = function(Z, t) {
  var B = 0, w, G, ka = (Z + "").split("."), V = (t + "").split("."), La = ka.length;
  for (w = V.length; "0" === ka[La - 1];) {
    --La;
  }
  for (; "0" === V[w - 1];) {
    --w;
  }
  for (G = La < w ? La : w; B < G; ++B) {
    var Za = ka[B] - 0, p = V[B] - 0;
    if (Za !== p) {
      return Za > p ? 1 : -1;
    }
  }
  return La > w ? 1 : La === w ? 0 : -1;
};
(function(Z, t, B, w, G, ka, V, La) {
  function Za(H, pa, ha) {
    ha = ka(H.split(pa)[1]);
    return 0 <= ha ? ha : 0;
  }
  function p(H, pa) {
    return 0 <= H.indexOf(pa);
  }
  function $a(H) {
    return p(H, "Linux armv") || p(H, "Linux aarch") || p(H, "Linux i686") || p(H, "Linux x86_64");
  }
  function xa(H, pa) {
    for (var ha in pa) {
      if (ha === H) {
        return !0;
      }
    }
  }
  function u(H, pa) {
    var ha = "", Aa = -1, Ra;
    if (H = H.split(pa)[1]) {
      for (; Ra = H.charCodeAt(++Aa);) {
        if (48 <= Ra && 57 >= Ra || 46 === Ra) {
          ha += H.charAt(Aa);
        } else {
          break;
        }
      }
      for (Aa = ha.length; Aa;) {
        if (46 === ha.charCodeAt(--Aa)) {
          ha = ha.substr(0, Aa);
        } else {
          break;
        }
      }
    }
    return ha;
  }
  function ba(H) {
    for (var pa = arguments, ha = 1, Aa = pa[0], Ra; ha < pa.length; ++ha) {
      0 > vb(Aa, Ra = pa[ha]) && (Aa = Ra);
    }
    return Aa;
  }
  function ya(H) {
    return H === H + "" ? H : H === H - 0 ? "" + H : H.min && H.max ? H.min + "~" + H.max : H.min ? H.min + "~" : "~" + H.max;
  }
  var vb = Z.conpare, e = w.userAgent, O = w.appVersion, Ua = ka(O) || 0, S = w.platform, Va = B.documentElement, eb = Va && Va.style, l = B.documentMode, ab = G.width;
  G = G.height;
  var Db = t.HTMLAudioElement, W = t.performance, na = t.Int8Array, lb = t.ontouchstart !== La, Wa = u(O, "Version/") || u(e, "Version/"), Ma = t.operamini, bb = !Ma && t.opera, Pb = bb && (bb.version && "function" === typeof bb.version ? bb.version() : ba(u(e, "Opera "), Wa, Ua)), hb = t.opr, mb = !bb && (B.all || l);
  l = mb && (l ? l : t.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : t.attachEvent ? 5 : 4);
  Va = !mb && Va.msContentZoomFactor;
  var db = !Va && t.chrome, fb = !mb && function() {
    for (var H in eb) {
      if (0 === H.indexOf("Moz")) {
        return !0;
      }
    }
  }(), wb = p(e, "UCWEB"), Eb = wb && u(e, " U2/"), nb = wb && u(e, "; wds "), Na = u(e.split("_").join("."), "; iPh OS "), ra = u(e, "; Adr "), ib = p(O, "YJApp-ANDROID"), Ea = p(S, "Android") || fb && p(O, "Android") || ib;
  ra = u(S, "Android ") || u(O, "Android ") || u(e, "Android ") || ra;
  var xb = p(S, "Linux"), yb = "MacIntel" === S && w.standalone !== La, aa = fb && u(e, "Goanna/"), Sa = !aa && fb && (u(e, "rv:") || u(e.substr(e.indexOf(") Gecko/") - 11), "; ")), zb = u(e, "Firefox/"), Q = u(e, "Opera/"), Kb = t.FNRBrowser, Xa = Za(e, "AppleWebKit/"), jb = u(e, "Chrome/"), Fb = u(e, "OPR/"), Lb = u(O, "KHTML/"), ob = u(e.toLowerCase(), "iris");
  u(e, "FxiOS/");
  u(e, "CriOS/");
  u(e, "EdgiOS/");
  var Mb = u(e, "Silk/"), Fa = Za(e, "SamsungBrowser/"), pb = !Fa && function() {
    for (var H = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    pa, ha = H.length; pa = H[--ha];) {
      if (p(e, pa)) {
        return 2 > ka(Wa) ? Wa : 0.9;
      }
    }
    H = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ha = H.length; pa = H[--ha];) {
      if (p(e, pa)) {
        return Wa;
      }
    }
  }(), Ab = db && 534.3 >= Xa, la = $a(S), Oa = la && !p(e, S) && $a(e);
  lb = lb && (Xa || fb) && Oa || !ra && ib;
  ib = !!t.ReactNativeWebView;
  la = la && function() {
    for (var H in t) {
      if (0 === H.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ga = (Oa = t.puffinDevice) && Oa.clientInfo;
  Ga = (Oa = Ga && "iOS" === Ga.os && Ga.osVersion) && Ga.model;
  var kb = !l && B.registerElement, Nb = !l && B.execCommand, Ha = xb && kb && "11.0.696.34" === jb, Gb = t._firefoxTV_playbackStateObserverJava, qb = Za(e, "diordnA ");
  if ("Nitro" === S) {
    var z = 1;
  } else if ("Nintendo DSi" === S) {
    z = 2;
    var x = Q;
  } else if ("New Nintendo 3DS" === S || p(e, "iPhone OS 6_0") && 320 === ab && 240 === G) {
    z = 4, x = u(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === S) {
    z = 3, x = u(e, "Version/"), Xa = 535;
  } else if ("Nintendo Swicth" === S) {
    z = 7, x = u(O, "NintendoBrowser/");
  } else if ("Nintendo WiiU" === S) {
    z = 6, x = u(O, "NintendoBrowser/"), Xa = u(O, "AppleWebKit/");
  } else if ("Nintendo Wii" === S) {
    z = 5, x = u(e, "Wii; U; ; ");
  } else if (Q = u(e, "PlayStation Vita ")) {
    z = 10, x = Q;
  } else if (Q = u(e, "(PlayStation Portable); ")) {
    z = 8;
    x = Q;
    var Hb = 3.3;
  } else if (Q = u(e, "PLAYSTATION 3; ") || u(e, "PLAYSTATION 3 ")) {
    if (z = 11, x = Q, 0 > vb("4.10", Q)) {
      var R = 26, P = Q;
    }
  } else if (p(e, "Xbox One")) {
    z = 15, x = 1;
  } else if (p(e, "Xbox")) {
    z = 14, x = 1;
  } else if (2 === Ua && p(e, "Sony/COM2/")) {
    z = 17;
    x = 2;
    Hb = 3.4;
    var cb = !0;
  } else if (0 === S.indexOf("iP") || Na || Oa || yb) {
    if (Oa) {
      switch(x = Oa, Ga.substr(0, 4)) {
        case "iPho":
          var ma = 0;
          u(Ga, ma);
          var Ba = !0;
          break;
        case "iPad":
          ma = 1;
          u(Ga, ma);
          var qa = !0;
          break;
        case "iPod":
          ma = 2;
          u(Ga, ma);
          var rb = !0;
      }
    } else {
      Na ? x = Na : (x = u(O.split("_").join("."), "OS "), xa("isSecureContext", t), xa("enableWebGL", t), xa("sameOrigin", t));
      if (!x || Kb) {
        x = t.PointerEvent ? 13 : t.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : t.WebAssembly ? 11.2 : t.HTMLMeterElement ? 10.3 : t.Proxy ? 10.2 : t.HTMLPictureElement ? 9.3 : V.isNaN ? 9.2 : t.SharedWorker ? W && W.now ? 8.0 : 8.4 : Nb ? 7.1 : t.webkitURL ? 6.1 : t.Worker ? 5.1 : na ? 4.3 : Db ? 4.1 : 3.2;
      }
      var oa = ab === 1.5 * G || 1.5 * ab === G;
      0 === S.indexOf("iPhone") ? (ma = 0, Ba = !0) : 0 === S.indexOf("iPad") || yb ? (ma = 1, qa = !0) : 0 === S.indexOf("iPod") && (ma = 2, rb = !0);
    }
    R = !Oa && (w.standalone || (qa || 12 > x) && xa("webkitFullscreenEnabled", B) || 11 <= x && 13 > x && w.mediaDevices) ? 16 : 17;
    z = 24;
    P = x;
  } else if (p(e, "Kobo")) {
    z = 18, R = 21, P = 2.2, Ea = !0;
  } else if (p(e, "EBRD")) {
    z = 19, R = 21, P = 2.2;
  } else if (Q = u(e, "CrOS x86_64 ") || u(e, "CrOS aarch64 ") || u(e, "CrOS i686 ") || u(e, "CrOS armv7l ")) {
    z = 28, x = Q;
  } else if (t.onmoztimechange !== La) {
    z = 29, x = 18.1 > Sa ? "1.0.1" : 19 > Sa ? 1.1 : 27 > Sa ? 1.2 : 29 > Sa ? 1.3 : 31 > Sa ? 1.4 : 33 > Sa ? 2.0 : 35 > Sa ? 2.1 : 38 > Sa ? 2.2 : 45 > Sa ? 2.5 : 2.6, p(e, "Mobile") ? Ba = !0 : p(e, "Tablet") ? qa = !0 : p(e, "TV");
  } else if (t.palmGetResource) {
    z = 30, x = u(e, "webOS/") || u(e, "WEBOS") || u(e, "hpwOS/"), p(e, "webOS.TV") || p(e, "/SmartTV") || (Ba = !0);
  } else if (Q = u(e, "Tizen ")) {
    z = 31, x = Q, R = 24, P = Fa, Ba = !0;
  } else if (Q = u(e, "Windows Phone ") || u(O, "Windows Phone OS ") || nb) {
    z = 23, x = Q, Ba = !0;
  } else if (Va && "ARM" === S) {
    z = 23, x = 10, Ba = !0;
  } else if (mb && p(O, "ZuneWP")) {
    z = 23, x = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", Ba = !0;
  } else if (p(e, "FOMA;")) {
    z = 16, Ba = !0;
  } else if (p(e, "SoftBank;")) {
    z = 16, Ba = !0;
  } else if (p(e, "KFMUWI")) {
    var Ia = !0;
    x = 6.3;
    var sa = qa = !0;
  } else if (p(e, "KFKAWI")) {
    Ia = !0, x = 6, sa = qa = !0;
  } else if (p(e, "KFSUWI") || p(e, "KFAUWI") || p(e, "KFDOWI")) {
    Ia = !0, x = 5, sa = qa = !0;
  } else if (p(e, "KFGIWI")) {
    Ia = !0, x = 5, sa = qa = !0;
  } else if (p(e, "KFARWI") || p(e, "KFSAWA") || p(e, "KFSAWI")) {
    Ia = !0, x = 5 <= ka(ra) ? 5 : 4, sa = qa = !0;
  } else if (p(e, "KFSOWI") || p(e, "KFTHWA") || p(e, "KFTHWI") || p(e, "KFAPWA") || p(e, "KFAPWI")) {
    Ia = !0, x = 3, sa = qa = !0;
  } else if (p(e, "KFOT") || p(e, "KFTT") || p(e, "KFJWA") || p(e, "KFJWI")) {
    Ia = !0, x = 2, sa = qa = !0;
  } else if (p(e, "Kindle Fire")) {
    Ia = !0, x = 1, sa = qa = !0;
  } else if (Q = u(e, "Kindle/")) {
    z = 20, x = Q, R = 21, P = 2.2;
  } else if (Gb) {
    Ia = !0, x = ra || qb, sa = !0;
  } else if (p(e, "AmazonWebAppPlatform") || p(e, "; AFT")) {
    Ia = !0, x = ra, sa = !0;
  } else if (p(e, "MeeGo")) {
    z = 32;
  } else if (p(e, "Maemo")) {
    z = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || ob) {
    z = 22, cb = !0;
  } else if ("WinCE" === S) {
    z = 21, cb = !0;
  } else if (0 === S.indexOf("Win")) {
    z = "Win16" === S ? 35 : "Win32" === S ? 36 : "Win64" === S ? 37 : 0, x = u(e, "Windows NT ") || u(e, "Windows ");
  } else if (0 === S.indexOf("Mac")) {
    z = "Mac68K" === S ? 39 : "MacPowerPC" === S || "MacPPC" === S ? 38 : "MacIntel" === S ? 40 : 0;
    if (Q = u(e.split("_").join("."), "Mac OS X ")) {
      x = Q;
    }
    var Bb = !0;
  } else if (p(e, "BlackBerry") || p(e, "BB10")) {
    z = 34, x = Wa, Ba = !0;
  } else if (p(e, "SunOS") || p(e, "Sun Solaris")) {
    z = 42;
  } else if (p(e, "FreeBSD")) {
    z = 43;
  } else if (p(e, "OpenBSD")) {
    z = 44;
  } else if (p(e, "NetBSD")) {
    z = 45;
  } else if (Ea && fb) {
    p(e, "Android 4.4;") ? oa = {min:2.3} : 4 <= ka(ra) ? oa = ra : oa = {min:2.2}, x = oa;
  } else if (Ea && bb) {
    ra ? oa = ra : oa = {min:1.6}, x = oa, p(e, "Tablet") ? qa = !0 : Ba = !0;
  } else if (ra) {
    x = ra, Ea = !0;
  } else if (xb && lb || ib || la) {
    var Cb = !0;
    Fa ? oa = {min:4.4} : db && !Ab || hb || Fb ? oa = {min:4} : (oa = ra = eb.touchAction !== La ? {min:5} : kb ? 4.4 : na ? w.connection ? t.searchBoxJavaBridge_ || db ? V.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Xa ? 3 : 533 <= Xa ? Db ? 2.3 : 2.2 : 530 <= Xa ? 2.0 : 1.5, pb && (R = 24, P = pb));
    x = oa;
    Ea = !0;
  } else {
    Ha ? (x = {min:5}, Cb = Ea = !0) : xb && (p(e, "Ubuntu") ? z = 46 : (Q = u(e, "Mint/")) ? (z = 47, x = Q) : (Q = u(e, "Fedora/")) ? (z = 48, x = Q) : z = p(e, "Gentoo") ? 49 : 50);
  }
  Ia || Ea && Cb && Mb ? z = 27 : Ea && (z = z || 26);
  R || (sa = sa || Ea, bb ? (R = sa || cb || Ba || qa ? 9 : 8, P = Pb) : mb ? (oa = Za(O, "Trident/") + 4, R = cb || Ba || qa || rb ? 3 : Bb && 5 <= l ? 7 : 2, P = l) : Va ? (R = 23 === z ? 6 : 5, P = u(O, "Edge/")) : aa ? (R = 13, P = aa) : fb ? (R = sa ? 12 : 11, P = Sa || zb) : Fa ? (R = 24, P = Fa) : (Q = Hb || u(e, "NetFront/")) ? (R = 18, P = Q) : (Q = u(e, "iCab")) ? (R = 19, P = Q) : (Q = ba(u(e, "Opera Mini/"), u(e, "Opera Mobi/")) || Ma && Wa) ? (R = 10, P = Q, z || (p(e, "iPhone") ? ma = 
  0 : p(e, "iPad") ? ma = 1 : p(e, "iPod") && (ma = 2), ma && (z = 24))) : wb ? (R = 25, P = Eb) : Lb ? (R = 14, P = Ua) : Ea && Ab ? (R = 21, P = ra) : db || hb || Fb ? (R = sa ? 22 : 20, P = jb) : Ea && kb ? (R = 23, P = 5 > ka(ra) ? ra : jb) : Ea && (Wa || Cb) ? (R = 21, P = ra) : jb ? (R = sa ? 22 : 20, P = jb) : Xa && (R = 15, P = Xa));
  z && (Z[2] = z, x && (Z[3] = ya(x)));
  R && (Z[0] = R, P && (Z[1] = ya(P)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Vb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var Z = this[this.length - 1];
  --this.length;
  return Z;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Z = arguments, t = 0, B = Z.length, w = this.length; t < B; ++t) {
    this[w + t] = Z[t];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Z = this[0], t = 1, B = this.length; t < B; ++t) {
    this[t - 1] = this[t];
  }
  --this.length;
  return Z;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Z = arguments, t = Z.length, B = this.length += t - 1, w = B; w >= t; --w) {
    this[w] = this[w - t];
  }
  for (w = 0; w < t; ++w) {
    this[w] = Z[w];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(Z, t) {
  var B = arguments, w = B.length - 2 - t, G = this.slice(Z, Z + t), ka;
  if (0 < w) {
    var V = this.length - 1;
    for (ka = Z + t; V >= ka; --V) {
      this[V + w] = this[V];
    }
  } else if (0 > w) {
    V = Z + t;
    for (ka = this.length; V < ka; ++V) {
      this[V + w] = this[V];
    }
    this.length += w;
  }
  V = 2;
  for (ka = B.length; V < ka; ++V) {
    this[V - 2 + Z] = B[V];
  }
  return G;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Z, t) {
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
    if (this[w] === Z) {
      return w;
    }
  }
  return -1;
});
(function(Z, t, B, w, G, ka, V, La, Za, p, $a, xa) {
  function u() {
    Ib = !Ib;
    for (var v = -1, D; D = Ob[++v];) {
      -1 !== D.className.indexOf("pbAlp") ? ma(D, "display", Ib ? "" : "none") : (P(D, Ib ? "pbChrCS" : "pbChr00"), cb(D, Ib ? "pbChr00" : "pbChrCS"));
    }
  }
  function ba(v) {
    if (t[0] === v) {
      return eb === eb + "" ? V(eb) : eb;
    }
  }
  function ya(v) {
    var D = t[3];
    if (t[2] === v) {
      return D === D + "" ? V(D) : D;
    }
  }
  function vb(v) {
    7.2 > W ? R(v, "pbChrCS") && (Ob.length || setInterval(u, 500), -1 === Ob.indexOf(v) && Ob.push(v)) : u = null;
  }
  function e(v, D, U) {
    v + "" === v && ("a" === v.charAt(2) && (U = !0, v = v.substr(0, 2)), v = "CS" === v ? 7.2 > W ? 117 : 9 > l || 9 > W || ab ? 1 : 132 : parseInt(v, 16));
    U && (50 === v && (v = 128), 102 < v && 108 > v && (v += 24));
    return (v - 1) * -(6 * (D || 2));
  }
  var O = G.body, Ua = O.style, S, Va, eb = t[1], l = ba(2) || ba(3), ab = ba(7), Db = ba(5) || ba(6), W = ba(8) || ba(9), na = ba(11) || ba(12), lb = na && 0 <= t.conpare(eb, "1.9.1"), Wa = ba(13), Ma = ba(15), bb = ba(16) || ba(17), Pb = ba(10) || ba(25), hb = ba(20) || ba(22) || ba(23) || ba(21) || ba(24), mb = V(ka.userAgent.split("Edg/")[1]);
  ka = V(ka.appVersion.split("Trident/")[1]) + 4;
  var db = ya(35) || ya(36) || ya(37), fb = !l && !ab && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), wb = (ab ? "ie5mac" : 5.5 > l ? "ie5win" : 6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > W ? "opr70" : 8 > W ? "opr72" : 9.5 > W ? "opr" + (W | 0) : na && !lb ? 1.3 <= na ? "gck190" : 1 <= na ? "gck121" : "gck097" : "modern") + ".css";
  ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9) || ya(10);
  var Eb, nb, Na, ra = Ua.transform !== xa ? "transform" : Ua["-o-transform"] !== xa ? "-o-transform" : Ua["-ms-transform"] !== xa ? "-ms-transform" : Ua["-moz-transform"] !== xa ? "-moz-transform" : Ua["-webkit-transform"] !== xa ? "-webkit-transform" : "", ib = [], Ea, xb, yb, aa, Sa, zb, Q = [], Kb, Xa, jb, Fb;
  (function() {
    function v() {
      for (var c, d = 0, k = new $a() - 0; d < C.length;) {
        k < C[0].t ? ++d : (c = C.splice(d, 1)[0], c.f(c.p));
      }
      b = C.length ? Za(v, M) : 0;
    }
    function D() {
      for (var c, d = 0; d < ca.length; ++d) {
        c = ca[d], c.f();
      }
    }
    function U() {
      A && (A = clearInterval(A));
    }
    function ia() {
      b && (b = p(b));
    }
    r = function(c) {
      Q.push(c);
    };
    zb = function(c) {
      ca.length || (A = setInterval(D, fa));
      ca.push({f:c, B:++E});
      return E;
    };
    Kb = function() {
      A && (U(), A = setInterval(D, fa));
    };
    Xa = U;
    var ca = [], fa = 999, E = 0, A;
    if (5 > l || ab) {
      B._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    aa = function(c, d, k) {
      C.length || (b = Za(v, M));
      C.push({f:c, p:d, B:++a, t:new $a() - 0 + (M < k ? k : M)});
      return a;
    };
    Sa = function(c) {
      for (var d = C.length, k; k = C[--d];) {
        if (k.B === c) {
          C.splice(d, 1);
          break;
        }
      }
      return 0;
    };
    jb = function() {
      b && (ia(), b = Za(v, M));
    };
    Fb = ia;
    var C = [], M = 64, a = 0, b;
    if (5 > l || ab) {
      B._wdb_ontimer = v, v = "_wdb_ontimer()";
    }
  })();
  var Lb, ob, Mb, Fa, pb, Ab, la, Oa, Ga, kb, Nb, Ha, Gb, qb, z, x, Hb, R, P, cb, ma, Ba;
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
                for (var ea = ++k, T, X = [], Y = q.split(""), K = Y.length; K;) {
                  T = Y[--K], "A" <= T && "Z" >= T && (T = "-" + T.toLowerCase()), X[K] = T;
                }
                d[ea] = X.join("") + ":" + F[q] + ";";
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
    function ia(a, b, c, d, k, m) {
      if (A) {
        var q = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var F = pb(2 > a ? Fa(b) : b);
        F = 2 > a ? F.indexOf(b) + a : F.length;
        b.insertAdjacentHTML(q, v(c, d, k));
        return pb(b)[F];
      }
      b = C ? G.createElement(v(c, d)) : m ? G.createElementNS("http://www.w3.org/2000/svg", c) : G.createElement(c);
      if (d && !C) {
        for (q in d) {
          if ((c = d[q]) || 0 === c) {
            switch(q) {
              case "class":
              case "className":
                Hb(b, c);
                break;
              case "style":
                a = b.style;
                for (F in c) {
                  a[F] = c[F];
                }
                break;
              default:
                z(b, q, c);
            }
          }
        }
      }
      M || null != k && ca(b, k);
      return b;
    }
    function ca(a, b) {
      if (A) {
        return ia(2, a, "font", xa, b);
      }
      var c = G.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function fa(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function E(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var A = 5 > l;
    S = D("html")[0];
    Va = D("head")[0];
    Lb = function(a) {
      return B[a] || G[a] || G.getElementById(a);
    };
    ob = D;
    Mb = function(a) {
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
    Fa = U;
    pb = function(a) {
      a = A ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Ab = function(a) {
      var b = !(7.03 < W && 7.2 > W) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], d = a.length, k = -1, m; d;) {
        if (m = a[--d], b || 1 === m.nodeType) {
          A && "FONT" === m.tagName || (c[++k] = m);
        }
      }
      return c;
    };
    la = function(a, b, c, d, k) {
      b = ia(2, a, b, c, d, k);
      A || (a.appendChild(b), M && null != d && ca(b, d));
      return b;
    };
    Oa = function(a, b, c, d, k) {
      b = ia(0, a, b, c, d, k);
      A || (U(a).insertBefore(b, a), M && null != d && ca(b, d));
      return b;
    };
    Ga = function(a, b, c, d, k) {
      b = ia(1, a, b, c, d, k);
      var m;
      A || ((m = a.nextSibling) ? Fa(m).insertBefore(b, m) : Fa(a).appendChild(b), M && null != d && ca(b, d));
      return b;
    };
    kb = ca;
    Nb = function(a, b) {
      if (A) {
        return ia(0, a, "font", xa, b);
      }
      var c = G.createTextNode("" + b);
      Fa(a).insertBefore(c, a);
      return c;
    };
    Ha = function(a) {
      Fa(a) ? A ? a.outerHTML = "" : Fa(a).removeChild(a) : r("[DOM] p_DOM_remove(), No parentNode!");
    };
    var C = 9 > l, M = 9 > l;
    Gb = function(a) {
      return a.tagName.toUpperCase();
    };
    qb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    z = function(a, b, c) {
      a.setAttribute(b, c);
    };
    x = function(a, b) {
      a.removeAttribute(b);
    };
    Hb = fa;
    R = E;
    P = function(a, b) {
      var c;
      if (!E(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        fa(a, c + b);
      }
    };
    cb = function(a, b) {
      if (E(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        fa(a, c.join(" "));
      }
    };
    ma = function(a, b, c) {
      a.style[b] = c;
    };
    Ba = function(a, b) {
      var c = -1, d, k;
      if (9 > W || 5.5 > l) {
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
  var qa, rb, oa, Ia, sa, Bb, Cb, H, pa = 0;
  (function() {
    function v(f, g) {
      for (var I = 0; I < f.length; ++I) {
        !0 === f[I](g) && (f.splice(I, 1), --I);
      }
    }
    function D(f, g) {
      c && !b.length && aa(U);
      b.push(f, g);
    }
    function U() {
      var f = b, g;
      for (b = []; g = f.shift();) {
        v(g, f.shift());
      }
    }
    function ia(f) {
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
        n.l === this ? (this.g = n.j, this.g(g), this.g = w, this.g = null) : 7.2 > W && this === G && n.l === B && (B.g = n.j, B.g(g), delete B.g);
      }
      if (l) {
        return g.preventDefault = g.stopPropagation = null, g.returnValue;
      }
      m && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (F = !0), J && !F && g.A(), g.A = g.stopPropagation = null);
    }
    function ca() {
      if (ea) {
        var f = G.readyState;
        "loaded" === f || "complete" === f ? ea() : aa(ca);
      }
    }
    function fa(f) {
      v(T, f);
    }
    function E() {
      var f = 9 === a.offsetWidth;
      H !== f && D(X, H = f);
    }
    function A() {
      return pa = K ? y ? 2 : h ? 3 : 1 : 0;
    }
    function C() {
      ea || v(Ca);
    }
    var M = B.matchMedia, a, b = [], c;
    ib.push(function() {
      a = la(O, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      oa(function() {
        c = !0;
        b.length && aa(U);
      });
    });
    qa = function(f, g, I, n) {
      if (q) {
        f.addEventListener(g, I, n ? fb ? n : n.capture : !1);
      } else {
        var J = {l:f, j:I};
        n = d[g];
        var ja = "on" + g, Da, Ka;
        if (n) {
          for (Da = n.length; Ka = n[--Da];) {
            if (Ka.l === f && Ka.j === I) {
              return;
            }
          }
          d[g].push(J);
        } else {
          d[g] = n = [J], k || (g = f[ja], "function" === typeof g && g !== ia && n.unshift({l:f, j:g}));
        }
        k ? f.attachEvent(ja, ia) : f[ja] = ia;
      }
    };
    rb = function(f, g, I, n) {
      if (q) {
        f.removeEventListener(g, I, n ? fb ? n : n.capture : !1);
      } else {
        n = d[g];
        g = "on" + g;
        var J, ja, Da;
        if (n) {
          for (J = n.length; ja = n[--J];) {
            ja.l === f && (ja.j === I ? n.splice(J, 1) : Da = !0);
          }
          Da || (k ? f.detachEvent(g, ia) : (f[g] = w, f[g] = null));
        }
      }
    };
    var d = {}, k = !1, m = 525.13 > Ma, q = !m && !ab && B.addEventListener, F;
    m && S.addEventListener("click", function(f) {
      if (F) {
        return F = !1, f.preventDefault(), !1;
      }
    });
    oa = function(f) {
      ib.push(f);
    };
    Ia = function(f) {
      T.push(f);
    };
    var ea = function(f) {
      rb(B, "load", ea);
      ea = null;
      v(ib, f);
    };
    var T = [];
    419.3 >= Ma ? aa(ca) : qa(B, "load", ea);
    (l || 1.8 > na) && qa(B, "unload", fa);
    Bb = function(f) {
      X.push(f);
    };
    var X = [];
    oa(function() {
      E();
      zb(E);
    });
    Cb = function(f) {
      Y.push(f);
    };
    var Y = [], K, h, y;
    if (10 <= l || Db || db && mb) {
      M("(-ms-high-contrast:black-on-white)").addListener(function(f) {
        K = h = f.matches;
        D(Y, A());
      }), M("(-ms-high-contrast:white-on-black)").addListener(function(f) {
        K = y = f.matches;
        D(Y, A());
      }), M("(-ms-high-contrast:active)").addListener(function(f) {
        K = f.matches;
        D(Y, A());
      });
    } else if (10 > l || db && (44 <= na || Wa)) {
      var L = function() {
        function f(J) {
          return "#ffffff" === J || "rgb(255,255,255)" === J;
        }
        var g = G.defaultView, I = pa;
        var n = g ? g.getComputedStyle(a, null) : a.currentStyle;
        g = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        if (g) {
          return K = "#123456" !== g && "rgb(18,52,86)" !== g, h = ("#000000" === g || "rgb(0,0,0)" === g) && f(n), y = f(g) && ("#000000" === n || "rgb(0,0,0)" === n), I !== A() && D(Y, pa), !0;
        }
      };
      oa(function() {
        ma(a, "color", "#123456");
        ma(a, "backgroundColor", "#123456");
        60 > na || Wa ? L() : L() && zb(L);
        L = null;
      });
    }
    sa = function(f) {
      Ca.push(f);
    };
    var Ca = [], Ja = 0, ta = 1 > na || 1.2 <= na && 1.8 > na || 7.2 >= W;
    ta ? zb(function() {
      var f = B.scrollY || O.scrollTop;
      Ja !== f && (Ja = f, C());
    }) : qa(B, "scroll", C);
    Ia(function() {
      ta || rb(B, "scroll", C);
    });
  })();
  var ha = 9 > l || 525 <= Ma && 530 > Ma || 2 > hb, Aa = 0, Ra, Qb, Jb, Rb;
  (function() {
    function v(a) {
      for (var b = ca.length, c; b;) {
        if (c = ca[--b], c.F === a) {
          return c;
        }
      }
    }
    function D() {
      var a = G.styleSheets, b = [], c = 0, d = -1, k;
      if (a) {
        for (k = a.length; c < k; ++c) {
          if (2 > hb || db && 526 > Ma) {
            var m = ia(a[c]);
            m.parentNode && (b[c] = m);
          } else {
            b[c] = ia(a[c]);
          }
        }
      } else {
        for (a = ob("*"), k = a.length; c < k; ++c) {
          m = a[c];
          var q = Gb(m);
          if ("STYLE" === q || "LINK" === q && "text/css" === qb(m, "type")) {
            b[++d] = m;
          }
        }
      }
      return b;
    }
    function U(a) {
      return a.styleSheet || a.sheet;
    }
    function ia(a) {
      return a.owningElement || a.ownerNode;
    }
    Ra = function(a, b) {
      var c = D(), d = c.length;
      d = 0 <= b && b < d ? b : d;
      var k = c[d - 1];
      c = c[d];
      if (A || C) {
        var m = c ? Oa(c, "style") : k ? Ga(k, "style") : la(Va, "style");
        C && kb(m, "");
        var q = U(m);
        a && z(m, "media", a);
      } else if (fa || E) {
        q = {D:a, C:d, G:!0};
      }
      if (q) {
        return ca.push({F:q, h:m, m:[]}), q;
      }
    };
    Qb = function(a) {
      a = v(a);
      var b = a.m, c = b.length, d;
      for (a.h && Ha(a.h); d = b[--c];) {
        d.i && Ha(d.i);
      }
      ca.splice(ca.indexOf(a), 1);
    };
    Jb = function(a, b, c, d) {
      var k = v(a), m = k.h;
      k = k.m;
      var q = "@import" === b, F = "@page" === b, ea = "@font-face" === b, T = k.length, X = "", Y;
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
          X += ";" + h + ":" + c[h];
        }
        X = X.substr(1);
        h = b + "{" + X + "}";
        6 <= l && ea && (d = T);
      }
      T = {u:b, v:c, o:d, s:d};
      if (9 > l) {
        K = a.rules;
        var y = K.length;
        if (ea) {
          b = G.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + h + "</style>", b = b.lastChild, (Y = m.nextSibling) ? Fa(m).insertBefore(b, Y) : Fa(m).appendChild(b), T.i = b;
        } else {
          q ? a.addImport(c, d) : 5.5 <= l && F || a.addRule(b, X, d);
          T.s = d + (K.length - y - 1);
          if (0 === K.length - y) {
            return r("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + h), -1;
          }
          r("[CSSOM] rules.length \u306e\u5897\u5206" + (K.length - y));
        }
      } else if (A || C) {
        (db && Ma || 28 > hb) && q ? T.i = Ga(m, "link", {href:c, rel:"stylesheet", type:"text/css"}) : ha && ea ? (b = T.i = Ga(m, "style", {type:"text/css", media:a.media}), b.innerText = h) : a.insertRule(h, d);
      }
      k.splice(d, 0, T);
      if (fa || E) {
        m = v(a);
        Y = m.m;
        b = m.h;
        c = a.C;
        q = D();
        a = q[c - 1];
        c = q[c];
        q = [];
        ea = F = -1;
        X = "style";
        T = {type:"text/css", media:m.D};
        for (var L; K = Y[++F];) {
          if (h = K.u, K = K.v, "@import" === h) {
            q[++ea] = h + ' "' + K + '"';
          } else {
            q[++ea] = h + "{";
            h = "";
            for (L in K) {
              h += ";" + L + ":" + K[L];
            }
            q[++ea] = h.substr(1) + "}";
          }
        }
        q = q.join("");
        fa && (q = "data:text/css;charset=utf-8;base64," + M(q), T.rel = "stylesheet", T.href = q, X = "link", q = xa);
        b ? (m.h = Ga(b, X, T, q), Ha(b)) : (b = c ? Oa(c, X, T, q) : a ? Ga(a, X, T, q) : la(Va, X, T, q), m.h = b);
      }
      L = d;
      a = k.length;
      for (m = L; m < a; ++m) {
        Y = k[m], Y.i || (b = Y.s - Y.o, Y.o = L, Y.s = L + b, L += 1 + b);
      }
      return d;
    };
    Rb = function(a, b, c) {
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
    var ca = [], fa = 1 > na || 8 <= W && 9 > W, E = 7.2 <= W && 8 > W, A = !!l || !fa && !E && function() {
      var a = la(S, "style"), b = !!U(a);
      b && (r("[CSSOM] CSSStyleSheet @insertRule : " + !!U(a).insertRule), r("[CSSOM] CSSStyleSheet @addRule : " + !!U(a).addRule), r("[CSSOM] CSSStyleSheet @cssRules : " + !!U(a).cssRules), r("[CSSOM] CSSStyleSheet @rules : " + !!U(a).rules), r("[CSSOM] CSSStyleSheet @cssText : " + ("" === U(a).cssText)));
      Ha(a);
      return b;
    }();
    r("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + A);
    var C = !A && Ma && !fa && !E && function() {
      var a = la(S, "style"), b;
      kb(a, "");
      if (b = !!U(a)) {
        r("[CSSOM] CSSStyleSheet @insertRule : " + !!U(a).insertRule), r("[CSSOM] CSSStyleSheet @addRule : " + !!U(a).addRule), r("[CSSOM] CSSStyleSheet @cssRules : " + !!U(a).cssRules), r("[CSSOM] CSSStyleSheet @rules : " + !!U(a).rules), r("[CSSOM] CSSStyleSheet @cssText : " + ("" === U(a).cssText));
      }
      Ha(a);
      return b;
    }();
    A || r("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + C);
    Aa = fa || E ? 1 : A || C ? 2 : 0;
    r("[CSSOM] p_CSSOM_canuse : " + Aa);
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
      if (525 > Ma || na && !lb || 2.2 > ba(21) || ba(25) || 10 > ba(3) || ya(32) || ya(30) || ya(1) || ya(2) || ya(3)) {
        return !1;
      }
      if (ha) {
        return !0;
      }
      if (2 === Aa) {
        var E = Ra();
        var A = Jb(E, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        var C = E.cssText || E.cssRules && E.cssRules[A] && E.cssRules[A].cssText || "";
        var M = C.match("src") && C.match("@font-face");
        r("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + C);
        r("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > l ? E.rules : E.cssRules).length);
        r("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + Rb(E, A, "src"));
        Qb(E);
      }
      v = null;
      return fa = !!M;
    }
    oa(function() {
      if (H) {
        if (Na === xa && (Na = 8 <= l || Db || lb || Wa || 7.2 <= W || 522 <= Ma || 3 <= bb || hb ? 2 : 6 <= W || na ? 1 : 0, !Na)) {
          var E = la(O, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Na = 6 <= E.offsetWidth ? 2 : 0;
          Ha(E);
        }
      } else {
        Na = xa;
      }
    });
    Ea = function(E) {
      function A(a) {
        M = Sa(M);
        D = a;
        C.onload = C.onerror = w;
        aa(E, a);
      }
      if (D !== xa) {
        r("[dataUriTest] already done : " + D), aa(E, D);
      } else if (8 > l) {
        r("[dataUriTest] trident < 8 : false"), aa(E, !1);
      } else {
        r("[dataUriTest] start!");
        var C = new Image(), M = aa(function() {
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
    9 > l && oa(function() {
      var E = la(O, "div");
      Ba(E, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Eb = 1 < E.offsetHeight;
      Ba(E, "");
      Ha(E);
    });
    xb = function(E, A) {
      function C() {
        if (a || !b || M.complete) {
          r("[imageTest] timer -> img.complete. img.width=" + M.width);
          var c = !!M.width;
          nb = nb || c;
          aa(E, c);
          M.onerror = M.onload = w;
          M = E = null;
        } else {
          --b, aa(C);
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
      aa(C);
    };
    var U = 9 > l || 2 > hb || 12 > W, ia = "bad_" + (new $a() - 0) + "_", ca = ["sans-serif", "serif"], fa;
    yb = function(E, A, C, M, a, b, c) {
      function d(f) {
        E(f);
        ta && !f && Qb(ta);
        E = y = L = Ca = ta = null;
      }
      function k() {
        var f = '1.6em "' + A + '"';
        r("[webFontTest] testByNativeFontLoaderAPI start.");
        G.fonts.load(f).then(function(g) {
          r("[webFontTest] fonts.check() : " + G.fonts.check(f, "i") + ", fonts.length : " + g.length);
          F(A) ? aa(d, Ja) : (r("[webFontTest] mesureWebFont() : false"), q(!0));
        }, function(g) {
          r("[webFontTest] fonts.load() rejected! " + g);
          Ea(ea);
        });
      }
      function m(f) {
        return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (K = new $a() - 0, !1) : f < new $a() - K;
      }
      function q(f) {
        f && (r("[webFontTest] testWebFont start."), K = new $a() - 0);
        F(A) ? (r("[webFontTest] testWebFont mesurement success : " + Ja), d(Ja)) : m(Y) ? (r("[webFontTest] testWebFont timeout!"), h ? d(0) : U ? aa(d, 0) : Ea(ea)) : aa(q);
      }
      function F(f) {
        var g = 0, I = -1, n = 0;
        if (!Ca) {
          var J = -1;
          var ja;
          y = la(O, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (Ca = {}; ja = ca[++J];) {
            ma(y, "fontFamily", ja), Ca[ja] = y.offsetWidth;
          }
        }
        for (5 > l ? y || (y = la(O, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : O.appendChild(y); J = ca[++I];) {
          if (ma(y, "fontFamily", '"' + f + '",' + J), y.offsetWidth !== Ca[J]) {
            g = 1;
            break;
          }
        }
        !l && g && a && (y.innerHTML = a, f = y.offsetWidth, y.innerHTML = b, n = f === y.offsetWidth ? 1 : 0, y.innerHTML = "mmmmmmmmmmlli");
        Ha(y);
        5 > l && (y = null);
        return Ja = g + n;
      }
      function ea(f) {
        r("[webFontTest] onTestDataURIComplete : " + f);
        (h = f) ? T(!0) : d(0);
      }
      function T(f) {
        var g;
        f && (K = new $a() - 0);
        for (g in C) {
          F(g) ? (r("[webFontTest] success! " + g), L = la(O, "div", {"aria-hidden":"true", className:M, id:M}), ta = Ra(), Jb(ta, "@import", C[g]), aa(X, !0)) : m(100) ? (r("[webFontTest] timeout! " + g), delete C[g], aa(T, !0)) : aa(T);
          return;
        }
        d(0);
      }
      function X(f) {
        f && (r("[webFontTest] testImportedCssReady start!"), r("[webFontTest] targetWebFontName : " + A), K = new $a() - 0);
        1 < L.offsetWidth ? (r("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + L.offsetWidth), Ha(L), Y = 100, aa(q, !0)) : m(Y) ? 528 > Ma ? (r("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + L.offsetWidth), Ha(L), Y = 100, aa(q, !0)) : (r("[webFontTest] testImportedCssReady timeout!"), Ha(L), d(0)) : aa(X);
      }
      var Y = c || 5000, K, h, y, L, Ca, Ja, ta;
      A = ia + A;
      r("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      v || fa ? fa || v() ? (r("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !G.fonts || 603 > Ma ? (r("[webFontTest] No native font loader."), q(!0)) : (r("[webFontTest] Use Native font loader."), k())) : (r("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), aa(d, 0)) : (r("[webFontTest] webFontTest_maybeCanUseWebFont : false"), aa(d, 0));
    };
  })();
  var Pa = String.fromCharCode, Ob = [], Ib, sb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Pa(960), ")", "(", Pa(234), Pa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Pa(9824), "\u2190", Pa(9829), Pa(9830), Pa(9827), Pa(956), "\u03a9", "\u2193", "\u2192", "%", Pa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Pa(9619)];
  (10 > l || db && (44 <= na || Wa)) && Cb(function(v) {
    cb(O, "jsHcm");
    cb(O, "jsHcmWob");
    cb(O, "jsHcmBow");
    if (v) {
      switch((ra || 9 === l || 5.5 <= l && 9 > l && Eb) && P(O, "jsCanRotate"), v) {
        case 1:
          P(O, "jsHcm");
          break;
        case 2:
          P(O, "jsHcmWob");
          break;
        case 3:
          P(O, "jsHcmBow");
      }
    } else {
      cb(O, "jsCanRotate");
    }
  });
  (function() {
    function v(h) {
      F = h;
      r("[pbList] WebFont test result : " + !!h);
      h ? ca() : nb ? ia(!0) : nb !== xa ? ca() : (r("[pbList] Need imageTest " + ea), xb(ia, ea));
    }
    function D() {
      D = null;
      yb(v, "PB-100", {"PB-100_canTTF":Ya + "pbFont/ttf.css", "PB-100_canWOFF":Ya + "pbFont/woff.css", "PB-100_canEOT":Ya + "pbFont/eot.css", "PB-100_canSVG":Ya + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function U(h) {
      this.focus();
      h.preventDefault();
      h.stopPropagation();
    }
    function ia(h) {
      h ? (r("[pbList] Fallback start!"), P(O, "pbList-noWebFont"), Aa && (2 !== Na || 9.5 > W ? (Jb(h = Ra(), ".pbList font", {"background-image":"url(" + ea + ")"}), 2 === Aa && r("[pbList] " + (9 > l ? h.rules : h.cssRules).length + ", " + Rb(h, 0, "background-image") + " " + (9 > l ? h.cssText : h.cssRules[0] && h.cssRules[0].cssText))) : (Jb(h = Ra(), ".pbList font:after", {content:"url(" + ea + ")"}), 2 === Aa && r("[pbList] " + (9 > l ? h.rules : h.cssRules).length + ", " + (9 > l ? h.cssText : 
      h.cssRules[0] && h.cssRules[0].cssText))))) : r("[pbList] image disabled!");
      ca();
    }
    function ca() {
      for (v = yb = null; q.length;) {
        fa(q.shift(), q.shift());
      }
      r("[pbList] complete.");
    }
    function fa(h, y) {
      function L(I) {
        I = pb(I);
        for (var n = -1, J; J = I[++n];) {
          switch(J.nodeType) {
            case 1:
              L(J);
              break;
            case 3:
              J.data && Ja(J.data) && ta.push(J);
          }
        }
      }
      function Ca(I) {
        var n = I.children, J = 0, ja = n.length;
        if (ja) {
          for (; J < ja; ++J) {
            Ca(n[J]);
          }
        } else {
          (n = I.innerText) && Ja(n) && ta.push(I);
        }
      }
      function Ja(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var ta = [], f;
      if (v) {
        -1 === q.indexOf(h) && (q.push(h, y), T && D && D());
      } else {
        var g = q.indexOf(h);
        0 <= g && q.splice(g, 2);
        for (5 > l ? Ca(h) : L(h); f = ta.shift();) {
          g = 5 > l ? f.innerText : f.data, 2 !== F && (g = g.split(b).join(M)), y ? 5 > l ? f.innerText = g : f.data = g : E(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(C).split("&amp;").join("&"), f);
        }
      }
    }
    function E(h, y) {
      function L(va, wa) {
        for (var tb = ""; wa;) {
          wa & 1 && (tb += va), wa >>= 1, va += va;
        }
        return tb;
      }
      function Ca(va, wa, tb) {
        for (var Sb, Wb = -1, Tb, Ub; Sb = wa[++Wb];) {
          for (; 0 <= (Tb = va.indexOf(Sb));) {
            Ub = Sb.length, va = va.substr(0, Tb) + L(tb, Ub) + va.substr(Tb + Ub);
          }
        }
        return va;
      }
      function Ja(va) {
        var wa = V(va), tb = "" + wa;
        return 0 < wa && wa === wa | 0 && (wa = va.indexOf(tb) + tb.length, wa <= va.length) ? wa : 0;
      }
      var ta = " area line str cmd fnc syb".split(" "), f = 5 > l || 1 === y.nodeType, g = [], I = "", n, J = -1, ja, Da, Ka;
      if (f) {
        if (Y) {
          var za = y.style.visibility;
          ma(y, "visibility", "hidden");
        }
        y.innerHTML = "";
      }
      if (K) {
        var Qa = y;
        y = G.createDocumentFragment();
      }
      if (function(va) {
        var wa = va.indexOf("P");
        if (-1 === wa) {
          return !1;
        }
        wa = V(va.charAt(wa + 1));
        return 0 <= wa && 9 >= wa;
      }(h)) {
        I = L("+", h.length);
      } else {
        0 <= (n = Ja(h)) && (I = L("|", n), J = n, --J);
        for (; n = h.charAt(++J);) {
          n === C || ja ? (I += "~", n === C && (ja = !ja)) : I += n;
        }
        I = Ca(I, m, "^");
        I = Ca(I, d, "{");
        I = Ca(I, k, "}");
      }
      J = 0;
      for (ja = h.length; J < ja; ++J) {
        n = h.charAt(J);
        var N = n === c;
        var Ta = " " === n;
        n = N ? " " : n;
        var da = I.charAt(J);
        var gb = (Da = ub) && N;
        var ub = "|" === da;
        da = ta["+|~{}^".indexOf(da) + 1];
        "\n" !== n ? (F || !nb ? (2 === F && h.substr(J, 2) === b && (n = b, ++J), da = Ta && "str" === da ? "pbList-strsp" : N ? "" : !Ta && da ? "pbList-" + da : "") : (N = sb.indexOf(n), N = -1 === N ? "" : sb.indexOf(n).toString(16).toUpperCase(), N = (N = 1 === N.length ? "0" + N : N) ? "pbChr" + N : "", da = Ta && "str" === da ? "pbList-strsp" : Ta || !N ? "" : da ? (N ? N + " " : "") + "pbList-" + da : N), N = xa, gb ? (n = 6 <= l && 8 > l ? " " : c, da = "") : ub && (1.9 > na || 9.5 > W) ? 
        (ub && !Da && (Ka = 4 - (V(h.substr(J)) + "").length), 7.5 > W ? N = X ? "position:relative;top:-4px;left:" + 12 * Ka + "px" : {position:"relative", top:"-4px", left:12 * Ka + "px"} : 1.3 <= na ? (N = X ? "position:absolute;left:" + 12 * Ka + "px" : {position:"absolute", left:12 * Ka + "px"}, ++Ka) : N = X ? "position:relative;left:" + 12 * Ka + "px" : {position:"relative", left:12 * Ka + "px"}) : Ta && 7.5 > W && (da = "pbList-strsp"), X ? g.push("<font" + (da ? ' class="' + da + '"' : "") + 
        (N ? ' style="' + N + '"' : "") + ">" + n + "</font>") : f || K ? la(y, "font", {"class":da, style:N}, n) : Oa(y, "font", {"class":da, style:N}, n)) : (Da = ub = !1, X ? g.push(n) : f || K ? kb(y, n) : Nb(y, n));
      }
      if (f) {
        X ? y.innerHTML = g.join("") : K && Qa.appendChild(y), Y && ma(y, "visibility", za);
      } else {
        if (X) {
          ta = G.createElement("font");
          for (ta.innerHTML = g.join(""); g = ta.firstChild;) {
            y.parentNode.insertBefore(g, y);
          }
          Ha(y);
        } else {
          K ? Qa.parentNode.replaceChild(y, Qa) : Ha(y);
        }
      }
    }
    Bb(function(h) {
      if (h) {
        h = Mb("pbChrCS");
        for (var y = 0, L = h.length; y < L; ++y) {
          vb(h[y]);
        }
        return !0;
      }
    });
    var A = [];
    Bb(function(h) {
      function y(za) {
        var Qa = qb(za, "pbTip"), N = Qa.charAt(0), Ta = "_" === N;
        Qa = Ta ? Qa.charAt(2) : N;
        N = Ta ? "Btm" : "";
        var da = qb(za, "title");
        Ja || (x(za, "pbTip"), x(za, "title"), P(za, "pbTipPos" + Qa.toUpperCase()), la(za, "div", {className:"pbTip" + N, style:{width:da.length + Ca + "em"}}, da));
        la(za, "div", {className:"pbTail" + N});
        ta && Ta && (za.focus(), za.blur());
      }
      function L(za) {
        if (2 > Na) {
          var Qa = qb(za, "pbGhst"), N = za.className, Ta = N.split("pbCsr")[1] || "", da = N.split("pbAlp")[1] || "";
          if ("CS" === Qa) {
            var gb = "_";
          } else {
            gb = Qa, 3 === gb.length && (gb = gb.substr(0, 2)), gb = sb[parseInt(gb, 16)] || "~";
          }
          var ub;
          Ta = Ta.split(" ")[0];
          da = V(da.split(" ")[0]);
          var va = 10 - da;
          da && 7.2 > W && (N = N.split("pbChr")[1], N = N.split(" ")[0], ma(za, "backgroundPosition", e(N, 2, J) + "px " + -24 * (10 - da) + "px"));
          Qa && (7.2 > W && (ub = {backgroundPosition:e(Qa, 2, J) + "px " + -24 * (10 - va) + "px"}), x(za, "pbGhst"), g = Oa(za, "b", {className:"pbChr" + Qa + " pbAlp" + va + " pbCsr" + Ta, style:ub}, gb), vb(g));
          vb(za);
        }
      }
      if (h) {
        var Ca = 6 > l ? 2 : 0;
        h = ob("SAMP");
        var Ja = 8 === l, ta = 5 <= l && 6 > l, f, g, I, n;
        Eb && P(O, "pbLCD-AX");
        if (h.length) {
          for (I = -1; f = h[++I];) {
            if (R(Fa(f), "pbLCD")) {
              var J = R(f, "PB-120") || R(f, "FX-795P");
              var ja = Ab(f);
              for (f = ja.length; f;) {
                var Da = ja[--f];
                switch(Gb(Da)) {
                  case "A":
                    (2 > Na || Ja) && y(Da);
                    if (2 > Na) {
                      var Ka = Ab(Da);
                      for (n = Ka.length; n;) {
                        !Ja && L(Ka[--n]);
                      }
                    }
                    Pb ? z(Da, "href", "javascript:void(0)") : (qa(Da, "click", U), A.push(Da));
                    break;
                  case "B":
                    2 > Na && L(Da);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ia(function(h) {
      for (; h = A.shift();) {
        rb(h, "click", U);
      }
    });
    6 === l && (new La("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(G);
    var C = sb[7], M = sb[30], a = sb[113], b = Pa(8337) + Pa(8331), c = Pa(160);
    Pa(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), k = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), m = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + M + sb[31]).split(""), q = [], F, ea, T;
    Bb(function(h) {
      if (h) {
        ea = Ya + "pbFont/x3mask.png";
        h = ob("*");
        for (var y = -1, L; L = h[++y];) {
          R(L, "pbList") ? fa(L) : R(L, "pbFont") && fa(L, !0);
        }
        q.length && (r("[pbList] " + q.length / 2 + " elements found. WebFont test start."), D());
        return !0;
      }
    });
    na && t.conpare(eb, "0.9.6");
    var X = !1, Y = 8 > W, K = !X && !Y && !(6 > l) && G.createDocumentFragment && !!O.replaceChild;
    Z.prettify = fa;
  })();
  Ua = G.scripts || ob("script");
  var Ya = Ua[Ua.length - 1].src.split("/");
  --Ya.length;
  (Ya = Ya.join("/")) && (Ya += "/");
  r("[p_assetUrl] " + Ya);
  oa(function() {
    var v;
    (v = Lb("logger")) || alert("#logger not found!");
    v ? (r = function(D) {
      la(v, "P", null, D);
    }, Vb = function(D) {
      la(v, "P", {style:{color:"red"}}, D);
    }, B.onerror = function(D, U, ia) {
      Vb(D + ", " + U + ", " + ia);
      return !0;
    }) : B.console ? r = console.log : r = w;
    for (; Q.length;) {
      r(Q.shift());
    }
    Q = null;
  });
  6.1 > bb && sa(Kb);
  Ia(Xa);
  6.1 > bb && sa(jb);
  Ia(Fb);
  10 > l && (11 !== ka || 5 !== l) || (9.5 > W || 1.5 > na || !ab && !B.addEventListener ? G.write('<link href="' + Ya + wb + '" rel="stylesheet" type="text/css" media="screen,handheld,print">') : oa(function() {
    la(Va, "link", {href:Ya + "" + wb, rel:"stylesheet", type:"text/css", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

