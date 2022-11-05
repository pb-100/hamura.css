PB100={};var v;
ua = [];
ua.conpare = function(S, l) {
  var x = 0, r, B, ia = (S + "").split("."), N = (l + "").split("."), Ia = ia.length;
  for (r = N.length; "0" === ia[Ia - 1];) {
    --Ia;
  }
  for (; "0" === N[r - 1];) {
    --r;
  }
  for (B = Ia < r ? Ia : r; x < B; ++x) {
    var Xa = ia[x] - 0, k = N[x] - 0;
    if (Xa !== k) {
      return Xa > k ? 1 : -1;
    }
  }
  return Ia > r ? 1 : Ia === r ? 0 : -1;
};
(function(S, l, x, r, B, ia, N, Ia) {
  function Xa(m, la, J) {
    J = ia(m.split(la)[1]);
    return 0 <= J ? J : 0;
  }
  function k(m, la) {
    return 0 <= m.indexOf(la);
  }
  function Ya(m) {
    return k(m, "Linux armv") || k(m, "Linux aarch") || k(m, "Linux i686") || k(m, "Linux x86_64");
  }
  function H(m, la) {
    for (var J in la) {
      if (J === m) {
        return !0;
      }
    }
  }
  function g(m, la) {
    var J = "", ta = -1, ya;
    if (m = m.split(la)[1]) {
      for (; ya = m.charCodeAt(++ta);) {
        if (48 <= ya && 57 >= ya || 46 === ya) {
          J += m.charAt(ta);
        } else {
          break;
        }
      }
      for (ta = J.length; ta;) {
        if (46 === J.charCodeAt(--ta)) {
          J = J.substr(0, ta);
        } else {
          break;
        }
      }
    }
    return J;
  }
  function za(m) {
    for (var la = arguments, J = 1, ta = la[0], ya; J < la.length; ++J) {
      0 > Ja(ta, ya = la[J]) && (ta = ya);
    }
    return ta;
  }
  function Cb(m) {
    return m === m + "" ? m : m === m - 0 ? "" + m : m.min && m.max ? m.min + "~" + m.max : m.min ? m.min + "~" : "~" + m.max;
  }
  var Ja = S.conpare, b = r.userAgent, W = r.appVersion, nb = ia(W) || 0, K = r.platform, t = x.documentElement, Sa = t && t.style, Da = x.documentMode, P = B.width;
  B = B.height;
  var X = l.HTMLAudioElement, ob = l.performance, pb = l.Int8Array, ab = l.ontouchstart !== Ia, Za = g(W, "Version/") || g(b, "Version/"), Db = l.operamini, Ka = !Db && l.opera, Sb = Ka && (Ka.version && "function" === typeof Ka.version ? Ka.version() : za(g(b, "Opera "), Za, nb)), Eb = l.opr, eb = !Ka && (x.all || Da);
  Da = eb && (Da ? Da : l.XMLHttpRequest ? x.getElementsByTagName ? 7 : 4 : x.compatMode ? 6 : (0).toFixed ? 5.5 : l.attachEvent ? 5 : 4);
  t = !eb && t.msContentZoomFactor;
  var qb = !t && (l.chrome || l.chromium), fb = !eb && function() {
    for (var m in Sa) {
      if (0 === m.indexOf("Moz")) {
        return !0;
      }
    }
  }(), rb = k(b, "UCWEB"), sb = rb && g(b, " U2/"), tb = rb && g(b, "; wds "), La = g(b.split("_").join("."), "; iPh OS "), qa = g(b, "; Adr "), bb = k(W, "YJApp-ANDROID"), Aa = k(K, "Android") || fb && k(W, "Android") || bb;
  qa = g(K, "Android ") || g(W, "Android ") || g(b, "Android ") || qa;
  var Oa = k(K, "Linux"), vb = "MacIntel" === K && r.standalone !== Ia, wb = fb && g(b, "Goanna/"), Ma = !wb && fb && (g(b, "rv:") || g(b.substr(b.indexOf(") Gecko/") - 11), "; ")), ba = g(b, "Firefox/"), O = g(b, "Opera/"), Fb = l.FNRBrowser, Pa = Xa(b, "AppleWebKit/"), cb = g(b, "Chrome/"), Lb = g(W, "Iron/"), Gb = g(b, "OPR/"), Mb = g(W, "KHTML/"), Nb = g(b.toLowerCase(), "iris");
  g(b, "FxiOS/");
  g(b, "CriOS/");
  g(b, "EdgiOS/");
  var Ob = g(b, "Silk/"), db = Xa(b, "SamsungBrowser/"), Hb = !db && function() {
    for (var m = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    la, J = m.length; la = m[--J];) {
      if (k(b, la)) {
        return 2 > ia(Za) ? Za : 0.9;
      }
    }
    m = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (J = m.length; la = m[--J];) {
      if (k(b, la)) {
        return Za;
      }
    }
  }(), gb = qb && 534.3 >= Pa, hb = Ya(K), Ta = hb && !k(b, K) && Ya(b);
  ab = ab && (Pa || fb) && Ta || !qa && bb;
  bb = !!l.ReactNativeWebView;
  hb = hb && function() {
    for (var m in l) {
      if (0 === m.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Y = (Ta = l.puffinDevice) && Ta.clientInfo;
  Y = (Ta = Y && "iOS" === Y.os && Y.osVersion) && Y.model;
  var jb = !Da && x.registerElement, Pb = !Da && x.execCommand, Ib = l.webkitCancelAnimationFrame, Ua = Oa && jb && "11.0.696.34" === cb, Qb = l._firefoxTV_playbackStateObserverJava, xb = Xa(b, "diordnA ");
  if ("Nitro" === K) {
    var u = 1;
  } else if ("Nintendo DSi" === K) {
    u = 2;
    var p = O;
  } else if ("New Nintendo 3DS" === K || k(b, "iPhone OS 6_0") && 320 === P && 240 === B) {
    u = 4, p = g(b, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === K) {
    u = 3, p = g(b, "Version/"), Pa = 535;
  } else if ("Nintendo Swicth" === K) {
    u = 7, p = g(W, "NintendoBrowser/");
  } else if (l.wiiu) {
    u = 6;
    p = g(W, "NintendoBrowser/");
    var Q = 15, L = g(W, "AppleWebKit/") || (Ib ? 536 : 534);
    p || (p = Ib ? 4 : 2, k(W, "Macintosh;") || k(W, "Windows NT") && k(W, "Touch"));
  } else if (Ka && Ka.wiiremote) {
    u = 5, p = g(b, "Wii; U; ; ");
  } else if (O = g(b, "PlayStation Vita ")) {
    u = 10, p = O;
  } else if (O = g(b, "(PlayStation Portable); ")) {
    u = 8;
    p = O;
    var ib = 3.3;
  } else if (O = g(b, "PLAYSTATION 3; ") || g(b, "PLAYSTATION 3 ")) {
    u = 11, p = O, 0 > Ja("4.10", O) && (Q = 26, L = O);
  } else if (k(b, "Xbox One")) {
    u = 15, p = 1;
  } else if (k(b, "Xbox")) {
    u = 14, p = 1;
  } else if (2 === nb && k(b, "Sony/COM2/")) {
    u = 17;
    p = 2;
    ib = 3.4;
    var kb = !0;
  } else if (0 === K.indexOf("iP") || La || Ta || vb) {
    if (Ta) {
      switch(p = Ta, Y.substr(0, 4)) {
        case "iPho":
          var da = 0;
          g(Y, da);
          var wa = !0;
          break;
        case "iPad":
          da = 1;
          g(Y, da);
          var ma = !0;
          break;
        case "iPod":
          da = 2;
          g(Y, da);
          var yb = !0;
      }
    } else {
      La ? p = La : (p = g(W.split("_").join("."), "OS "), H("isSecureContext", l), H("enableWebGL", l), H("sameOrigin", l));
      if (!p || Fb) {
        p = l.PointerEvent ? 13 : l.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : r.sendBeacon ? 11.3 : l.WebAssembly ? 11.2 : l.HTMLMeterElement ? 10.3 : l.Proxy ? 10.2 : l.HTMLPictureElement ? 9.3 : N.isNaN ? 9.2 : l.SharedWorker ? ob && ob.now ? 8.0 : 8.4 : Pb ? 7.1 : l.webkitURL ? 6.1 : l.Worker ? 5.1 : pb ? 4.3 : X ? 4.1 : 3.2;
      }
      var ra = P === 1.5 * B || 1.5 * P === B;
      0 === K.indexOf("iPhone") ? (da = 0, wa = !0) : 0 === K.indexOf("iPad") || vb ? (da = 1, ma = !0) : 0 === K.indexOf("iPod") && (da = 2, yb = !0);
    }
    Q = !Ta && (r.standalone || (ma || 12 > p) && H("webkitFullscreenEnabled", x) || 11 <= p && 13 > p && r.mediaDevices) ? 16 : 17;
    u = 24;
    L = p;
  } else if (k(b, "Kobo")) {
    u = 18, Q = 21, L = 2.2, Aa = !0;
  } else if (k(b, "EBRD")) {
    u = 19, Q = 21, L = 2.2;
  } else if (O = g(b, "CrOS x86_64 ") || g(b, "CrOS aarch64 ") || g(b, "CrOS i686 ") || g(b, "CrOS armv7l ")) {
    u = 28, p = O;
  } else if (l.onmoztimechange !== Ia) {
    u = 29, p = 18.1 > Ma ? "1.0.1" : 19 > Ma ? 1.1 : 27 > Ma ? 1.2 : 29 > Ma ? 1.3 : 31 > Ma ? 1.4 : 33 > Ma ? 2.0 : 35 > Ma ? 2.1 : 38 > Ma ? 2.2 : 45 > Ma ? 2.5 : 2.6, k(b, "Mobile") ? wa = !0 : k(b, "Tablet") ? ma = !0 : k(b, "TV");
  } else if (l.palmGetResource) {
    u = 30, p = g(b, "webOS/") || g(b, "WEBOS") || g(b, "hpwOS/"), k(b, "webOS.TV") || k(b, "/SmartTV") || (wa = !0);
  } else if (O = g(b, "Tizen ")) {
    u = 31, p = O, Q = 24, L = db, wa = !0;
  } else if (O = g(b, "Windows Phone ") || g(W, "Windows Phone OS ") || tb) {
    u = 23, p = O, wa = !0;
  } else if (t && "ARM" === K) {
    u = 23, p = 10, wa = !0;
  } else if (eb && k(W, "ZuneWP")) {
    u = 23, p = 11 === Da ? 8.1 : 10 === Da ? 8 : 9 === Da ? 7.5 : 7 === Da ? 7 : "?", wa = !0;
  } else if (k(b, "FOMA;")) {
    u = 16, wa = !0;
  } else if (k(b, "SoftBank;")) {
    u = 16, wa = !0;
  } else if (k(b, "KFMUWI")) {
    var Ba = !0;
    p = 6.3;
    var ja = ma = !0;
  } else if (k(b, "KFKAWI")) {
    Ba = !0, p = 6, ja = ma = !0;
  } else if (k(b, "KFSUWI") || k(b, "KFAUWI") || k(b, "KFDOWI")) {
    Ba = !0, p = 5, ja = ma = !0;
  } else if (k(b, "KFGIWI")) {
    Ba = !0, p = 5, ja = ma = !0;
  } else if (k(b, "KFARWI") || k(b, "KFSAWA") || k(b, "KFSAWI")) {
    Ba = !0, p = 5 <= ia(qa) ? 5 : 4, ja = ma = !0;
  } else if (k(b, "KFSOWI") || k(b, "KFTHWA") || k(b, "KFTHWI") || k(b, "KFAPWA") || k(b, "KFAPWI")) {
    Ba = !0, p = 3, ja = ma = !0;
  } else if (k(b, "KFOT") || k(b, "KFTT") || k(b, "KFJWA") || k(b, "KFJWI")) {
    Ba = !0, p = 2, ja = ma = !0;
  } else if (k(b, "Kindle Fire")) {
    Ba = !0, p = 1, ja = ma = !0;
  } else if (O = g(b, "Kindle/")) {
    u = 20, p = O, Q = 21, L = 2.2;
  } else if (Qb) {
    Ba = !0, p = qa || xb, ja = !0;
  } else if (k(b, "AmazonWebAppPlatform") || k(b, "; AFT")) {
    Ba = !0, p = qa, ja = !0;
  } else if (k(b, "MeeGo")) {
    u = 32;
  } else if (k(b, "Maemo")) {
    u = 33;
  } else if (0 === b.indexOf("Windows Mobile;") || Nb) {
    u = 22, kb = !0;
  } else if ("WinCE" === K) {
    u = 21, kb = !0;
  } else if (0 === K.indexOf("Win")) {
    u = "Win16" === K ? 35 : "Win32" === K ? 36 : "Win64" === K ? 37 : 0, p = g(b, "Windows NT ") || g(b, "Windows ");
  } else if (0 === K.indexOf("Mac")) {
    u = "Mac68K" === K ? 39 : "MacPowerPC" === K || "MacPPC" === K ? 38 : "MacIntel" === K ? 40 : 0;
    if (O = g(b.split("_").join("."), "Mac OS X ")) {
      p = O;
    }
    var Jb = !0;
  } else if (k(b, "BlackBerry") || k(b, "BB10")) {
    u = 34, p = Za, wa = !0;
  } else if (k(b, "SunOS") || k(b, "Sun Solaris")) {
    u = 42;
  } else if (k(b, "FreeBSD")) {
    u = 43;
  } else if (k(b, "OpenBSD")) {
    u = 44;
  } else if (k(b, "NetBSD")) {
    u = 45;
  } else if (Aa && fb) {
    k(b, "Android 4.4;") ? ra = {min:2.3} : 4 <= ia(qa) ? ra = qa : ra = {min:2.2}, p = ra;
  } else if (Aa && Ka) {
    qa ? ra = qa : ra = {min:1.6}, p = ra, k(b, "Tablet") ? ma = !0 : wa = !0;
  } else if (qa) {
    p = qa, Aa = !0;
  } else if (Oa && ab || bb || hb) {
    var lb = !0;
    db ? ra = {min:4.4} : qb && !gb || Eb || Gb ? ra = {min:4} : (ra = qa = Sa.touchAction !== Ia ? {min:5} : jb ? 4.4 : pb ? r.connection ? l.searchBoxJavaBridge_ || qb ? N.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Pa ? 3 : 533 <= Pa ? X ? 2.3 : 2.2 : 530 <= Pa ? 2.0 : 1.5, Hb && (Q = 24, L = Hb));
    p = ra;
    Aa = !0;
  } else {
    Ua ? (p = {min:5}, lb = Aa = !0) : Oa && (k(b, "Ubuntu") ? u = 46 : (O = g(b, "Mint/")) ? (u = 47, p = O) : (O = g(b, "Fedora/")) ? (u = 48, p = O) : u = k(b, "Gentoo") ? 49 : 50);
  }
  Ba || Aa && lb && Ob ? u = 27 : Aa && (u = u || 26);
  Q || (ja = ja || Aa, Ka ? (Q = ja || kb || wa || ma ? 9 : 8, L = Sb) : eb ? (ra = Xa(W, "Trident/") + 4, Q = kb || wa || ma || yb ? 3 : Jb && 5 <= Da ? 7 : 2, L = Da) : t ? (Q = 23 === u ? 6 : 5, L = g(W, "Edge/")) : wb ? (Q = 13, L = wb) : fb ? (Q = ja ? 12 : 11, L = Ma || ba) : db ? (Q = 24, L = db) : (O = ib || g(b, "NetFront/")) ? (Q = 18, L = O) : (O = g(b, "iCab")) ? (Q = 19, L = O) : (O = za(g(b, "Opera Mini/"), g(b, "Opera Mobi/")) || Db && Za) ? (Q = 10, L = O, u || (k(b, "iPhone") ? da = 
  0 : k(b, "iPad") ? da = 1 : k(b, "iPod") && (da = 2), da && (u = 24))) : rb ? (Q = 25, L = sb) : Mb ? (Q = 14, L = nb) : Aa && gb ? (Q = 21, L = qa) : qb || Eb || Gb ? (Q = ja ? 22 : 20, L = cb || Lb) : Aa && jb ? (Q = 23, L = 5 > ia(qa) ? qa : cb) : Aa && (Za || lb) ? (Q = 21, L = qa) : cb ? (Q = ja ? 22 : 20, L = cb) : Pa && (Q = 15, L = Pa));
  u && (S[2] = u, p && (S[3] = Cb(p)));
  Q && (S[0] = Q, L && (S[1] = Cb(L)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var zb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var S = this[this.length - 1];
  --this.length;
  return S;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var S = arguments, l = 0, x = S.length, r = this.length; l < x; ++l) {
    this[r + l] = S[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var S = this[0], l = 1, x = this.length; l < x; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return S;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var S = arguments, l = S.length, x = this.length += l - 1, r = x; r >= l; --r) {
    this[r] = this[r - l];
  }
  for (r = 0; r < l; ++r) {
    this[r] = S[r];
  }
  return x;
});
Array.prototype.splice || (Array.prototype.splice = function(S, l) {
  var x = arguments, r = x.length - 2 - l, B = this.slice(S, S + l), ia;
  if (0 < r) {
    var N = this.length - 1;
    for (ia = S + l; N >= ia; --N) {
      this[N + r] = this[N];
    }
  } else if (0 > r) {
    N = S + l;
    for (ia = this.length; N < ia; ++N) {
      this[N + r] = this[N];
    }
    this.length += r;
  }
  N = 2;
  for (ia = x.length; N < ia; ++N) {
    this[N - 2 + S] = x[N];
  }
  return B;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(S, l) {
  var x = this.length >>> 0;
  if (0 === x) {
    return -1;
  }
  if (l) {
    var r = l || 0;
    r = -Infinity === r ? 0 : (0 > r ? -r : r) | 0;
    if (x <= r) {
      return -1;
    }
  }
  for (r = 0 <= r ? r : 0 < x + r ? x + r : 0; r < x; ++r) {
    if (this[r] === S) {
      return r;
    }
  }
  return -1;
});
(function(S, l, x, r, B, ia, N, Ia, Xa, k, Ya, H) {
  function g(h) {
    if (l[0] === h) {
      return K === K + "" ? N(K) : K;
    }
  }
  function za(h) {
    var D = l[3];
    if (l[2] === h) {
      return D === D + "" ? N(D) : D;
    }
  }
  function Cb(h, D, ea) {
    h + "" === h && ("a" === h.charAt(2) && (ea = !0, h = h.substr(0, 2)), h = "CS" === h ? 7.2 > P ? 117 : 0.9 > X || 9 > t || 9 > P || Sa ? 1 : 132 : parseInt(h, 16));
    ea && (50 === h && (h = 128), 102 < h && 108 > h && (h += 24));
    return (h - 1) * -(6 * (D || 2));
  }
  var Ja = B.body, b = Ja.style, W, nb, K = l[1], t = g(2) || g(3), Sa = g(7), Da = g(5) || g(6), P = g(8) || g(9), X = g(11) || g(12), ob = X && 0 <= l.conpare(K, "1.9.1"), pb = g(13), ab = g(15), Za = g(16) || g(17), Db = g(10) || g(25), Ka = g(20) || g(22), Sb = Ka || g(23) || g(21) || g(24), Eb = Ka && N(ia.userAgent.split("Edg/")[1]);
  ia = N(ia.appVersion.split("Trident/")[1]) + 4;
  var eb = za(35) || za(36) || za(37), qb = !t && !Sa && (new Ia('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), fb = (Sa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > P ? "opr70" : 8 > P ? "opr72" : 9.5 > P ? "opr" + (P | 0) : X && !ob ? 1.4 <= X ? "gck19" : 1.3 <= X ? "gck13" : 1 <= X ? "gck12" : 0.9 <= X ? "gck09" : 0.8 <= X ? "gck08" : "gck07" : "modern") + 
  ".css";
  za(1) || za(2) || za(3) || za(4) || za(8) || za(9) || za(10);
  var rb, sb, tb, La = 8 > t || 7.2 > P ? !1 : H, qa = b.transform !== H ? "transform" : b["-o-transform"] !== H ? "-o-transform" : b["-ms-transform"] !== H ? "-ms-transform" : b.MozTransform !== H ? "-moz-transform" : b["-webkit-transform"] !== H ? "-webkit-transform" : "", bb = [], Aa = [], Oa = [], vb, wb, Ma, ba, O, Fb, Pa = [], cb = [], Lb, Gb, Mb, Nb;
  (function() {
    function h() {
      for (var f, q = 0, C = new Ya() - 0; q < fa.length;) {
        C < fa[0].t ? ++q : (f = fa.splice(q, 1)[0], f.f(f.p));
      }
      d = fa.length ? Xa(h, na) : 0;
    }
    function D() {
      for (var f, q = 0; q < ca.length; ++q) {
        f = ca[q], f.f();
      }
    }
    function ea() {
      U && (U = clearInterval(U));
    }
    function ka() {
      d && (d = k(d));
    }
    v = function(f) {
      Pa.push(f);
    };
    zb = function(f) {
      cb.push(f);
    };
    Fb = function(f) {
      ca.length || (U = setInterval(D, sa));
      ca.push({f:f, l:++va});
      return va;
    };
    Lb = function() {
      U && (ea(), U = setInterval(D, sa));
    };
    Gb = ea;
    var ca = [], sa = 500, va = 0, U;
    if (5 > t || Sa) {
      x._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    ba = function(f, q, C) {
      fa.length || (d = Xa(h, na));
      fa.push({f:f, p:q, l:++c, t:new Ya() - 0 + (na < C ? C : na)});
      return c;
    };
    O = function(f) {
      for (var q = fa.length, C; C = fa[--q];) {
        if (C.l === f) {
          fa.splice(q, 1);
          break;
        }
      }
      return 0;
    };
    Mb = function() {
      d && (ka(), d = Xa(h, na));
    };
    Nb = ka;
    var fa = [], na = 16, c = 0, d;
    if (5 > t || Sa) {
      x._wdb_ontimer = h, h = "_wdb_ontimer()";
    }
  })();
  var Ob, db, Hb, gb, hb, Ta, Y, jb, Pb, Ib, Ua, Qb, xb, u, p, Q, L, ib, kb, da, wa;
  (function() {
    function h(c, d, f) {
      var q = ["<", c], C = 1, T, I;
      if (d) {
        for (T in d) {
          var M = d[T];
          if (null != M && "" !== M) {
            if ("style" === T) {
              q[++C] = ' style="';
              for (I in M) {
                for (var Ea = ++C, Ca, Fa = [], oa = I.split(""), xa = oa.length; xa;) {
                  Ca = oa[--xa], "A" <= Ca && "Z" >= Ca && (Ca = "-" + Ca.toLowerCase()), Fa[xa] = Ca;
                }
                q[Ea] = Fa.join("") + ":" + M[I] + ";";
              }
              q[++C] = '"';
            } else {
              "className" === T && (T = "class"), q[++C] = " " + T + '="' + M + '"';
            }
          }
        }
      }
      q[++C] = ">";
      null != f && (U && "font" !== c ? q[++C] = "<FONT>" + f + "</FONT>" : q[++C] = f);
      q[++C] = "</" + c + ">";
      return q.join("");
    }
    function D(c) {
      c = "*" === c && 6 > t ? "*" !== c ? B.all.tags(c.toUpperCase()) : B.all : B.getElementsByTagName(c);
      var d = [], f = 0, q;
      for (q = c.length; f < q; ++f) {
        d[f] = c[f];
      }
      return d;
    }
    function ea(c) {
      return U ? c.parentElement : c.parentNode;
    }
    function ka(c, d, f, q, C, T) {
      if (U) {
        var I = 0 === c ? "beforebegin" : 1 === c ? "afterend" : "beforeend";
        var M = hb(2 > c ? gb(d) : d);
        M = 2 > c ? M.indexOf(d) + c : M.length;
        d.insertAdjacentHTML(I, h(f, q, C));
        d = hb(d)[M];
        null != C && ("font" === f ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (fa) {
        d = B.createElement(h(f, q));
      } else {
        d = T ? B.createElementNS("http://www.w3.org/2000/svg", f) : B.createElement(f);
        if (q) {
          for (I in q) {
            if ((f = q[I]) || 0 === f) {
              switch(I) {
                case "class":
                case "className":
                  Q(d, f);
                  break;
                case "style":
                  c = d.style;
                  for (M in f) {
                    c[M] = f[M];
                  }
                  break;
                default:
                  u(d, I, f);
              }
            }
          }
        }
        na || null != C && ca(d, C);
      }
      return d;
    }
    function ca(c, d) {
      if (U) {
        return ka(2, c, "font", H, d);
      }
      var f = B.createTextNode("" + d);
      c.appendChild(f);
      return f;
    }
    function sa(c, d) {
      9 > t ? c.className = d : c.setAttribute("class", d);
    }
    function va(c, d) {
      return -1 !== (" " + c.className + " ").indexOf(" " + d + " ");
    }
    var U = 5 > t;
    W = D("html")[0];
    nb = D("head")[0];
    Ob = function(c) {
      return x[c] || B[c] || B.getElementById(c);
    };
    db = D;
    Hb = function(c) {
      var d = [], f = 0, q, C = -1;
      if (9 > t || !B.getElementsByClassName) {
        var T = 6 > t ? B.all : B.getElementsByTagName("*");
      } else {
        var I = !0;
        T = B.getElementsByClassName(c);
      }
      for (q = T.length; f < q; ++f) {
        var M = T[f];
        if (I || (U || 1 === M.nodeType) && va(M, c)) {
          d[++C] = M;
        }
      }
      return d;
    };
    gb = ea;
    hb = function(c) {
      c = U ? c.children : c.childNodes;
      for (var d = [], f = c.length; f;) {
        d[--f] = c[f];
      }
      return d;
    };
    Ta = function(c) {
      var d = !(7.03 < P && 7.2 > P) && c.children;
      c = d ? d : c.childNodes;
      for (var f = [], q = c.length, C = -1, T; q;) {
        if (T = c[--q], d || 1 === T.nodeType) {
          U && "FONT" === T.tagName || (f[++C] = T);
        }
      }
      return f;
    };
    Y = function(c, d, f, q, C) {
      d = ka(2, c, d, f, q, C);
      U || (c.appendChild(d), na && null != q && ca(d, q));
      return d;
    };
    jb = function(c, d, f, q, C) {
      d = ka(0, c, d, f, q, C);
      U || (ea(c).insertBefore(d, c), na && null != q && ca(d, q));
      return d;
    };
    Pb = ca;
    Ib = function(c, d) {
      if (U) {
        return ka(0, c, "font", H, d);
      }
      var f = B.createTextNode("" + d);
      gb(c).insertBefore(f, c);
      return f;
    };
    Ua = function(c) {
      gb(c) ? U ? c.outerHTML = "" : gb(c).removeChild(c) : v("[DOM] p_DOM_remove(), No parentNode!");
    };
    var fa = 9 > t, na = fa;
    Qb = function(c) {
      return c.tagName.toUpperCase();
    };
    xb = function(c, d) {
      return c.getAttribute(d) || "";
    };
    u = function(c, d, f) {
      c.setAttribute(d, f);
    };
    p = function(c, d) {
      c.removeAttribute(d);
    };
    Q = sa;
    L = va;
    ib = function(c, d) {
      var f;
      if (!va(c, d)) {
        if (f = c.className) {
          d = " " + d;
        }
        sa(c, f + d);
      }
    };
    kb = function(c, d) {
      if (va(c, d)) {
        var f = c.className.split(" ");
        f.splice(f.indexOf(d), 1);
        sa(c, f.join(" "));
      }
    };
    da = function(c, d, f) {
      c.style[d] = f;
    };
    wa = function(c, d) {
      var f = -1, q, C;
      if (5.5 > t) {
        if (d) {
          for (q = d.split(";"); C = q[++f];) {
            var T = C.split(":");
            c.style[T[0]] = C.substr(T[0].length + 1);
          }
        } else {
          c.removeAttribute("style");
        }
      } else {
        9 > P || 1 > X ? d ? c.setAttribute("style", d) : c.removeAttribute("style") : c.style.cssText = d;
      }
    };
  })();
  var ma, yb, ra, Ba, ja, Jb, lb, m, la;
  (function() {
    function h() {
      return Fa ? xa ? 2 : oa ? 3 : 1 : 0;
    }
    function D(a) {
      yb(x, "load", D);
      D = H;
      ka(bb, a, !0);
      bb = H;
    }
    function ea(a, e) {
      ja(function() {
        var z = fa(a);
        e(z);
        z.addListener(e);
        return !0;
      });
    }
    function ka(a, e, z) {
      for (var w = 0; w < a.length; ++w) {
        !0 === a[w](e) && (a.splice(w, 1), --w);
      }
      z && (a.length = 0);
    }
    function ca(a, e, z) {
      d && !c.length && ba(sa);
      c.push(a, e, z);
    }
    function sa() {
      var a = c, e;
      for (c = []; e = a.shift();) {
        ka(e, a.shift(), a.shift());
      }
    }
    function va(a) {
      var e = a || event;
      a = f[e.type];
      var z = -1, w, n;
      t ? (e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : C && (e.j = e.stopPropagation, e.stopPropagation = function() {
        n = !0;
      });
      for (; w = a[++z];) {
        w.i === this ? (this.g = w.h, this.g(e), this.g = r, this.g = H) : 7.2 > P && this === B && w.i === x && (x.g = w.h, x.g(e), delete x.g);
      }
      if (t) {
        return e.preventDefault = e.stopPropagation = H, e.returnValue;
      }
      C && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && (I = !0), n && !I && e.j(), e.j = e.stopPropagation = H);
    }
    function U() {
      var a = 9 === na.offsetWidth;
      lb !== a && (ca(Aa, lb = a), v("p_cssAvailability:" + lb));
    }
    var fa = x.matchMedia, na, c = [], d;
    bb.push(function() {
      ea = H;
      na = Y(Ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ra(function() {
        d = !0;
        c.length && ba(sa);
      });
    });
    ma = function(a, e, z, w) {
      if (T) {
        a.addEventListener(e, z, w ? qb ? w : w.capture : !1);
      } else {
        var n = {i:a, h:z};
        w = f[e];
        var A = "on" + e, E, F;
        if (w) {
          for (E = w.length; F = w[--E];) {
            if (F.i === a && F.h === z) {
              return;
            }
          }
          f[e].push(n);
        } else {
          f[e] = w = [n], q || (e = a[A], "function" === typeof e && e !== va && w.unshift({i:a, h:e}));
        }
        q ? a.attachEvent(A, va) : a[A] = va;
      }
    };
    yb = function(a, e, z, w) {
      if (T) {
        a.removeEventListener(e, z, w ? qb ? w : w.capture : !1);
      } else {
        w = f[e];
        e = "on" + e;
        var n, A, E;
        if (w) {
          for (n = w.length; A = w[--n];) {
            A.i === a && (A.h === z ? w.splice(n, 1) : E = !0);
          }
          E || (q ? a.detachEvent(e, va) : (a[e] = r, a[e] = null));
        }
      }
    };
    var f = {}, q = !1, C = 525.13 > ab, T = !C && !Sa && x.addEventListener, I;
    C && W.addEventListener("click", function(a) {
      if (I) {
        return I = !1, a.preventDefault(), !1;
      }
    });
    ra = function(a) {
      bb ? bb.push(a) : alert("Load event has already been dispatched!");
    };
    Ba = function(a) {
      M && M.push(a);
    };
    var M = [];
    if (419.3 >= ab) {
      var Ea = function() {
        if (Ea) {
          var a = B.readyState;
          "loaded" === a || "complete" === a ? (Ea = H, D()) : ba(Ea);
        }
      };
      ba(Ea);
    } else {
      ma(x, "load", D);
    }
    t || 0.9 <= X && 1.8 > X ? ma(x, "unload", function(a) {
      ka(M, a, !0);
    }) : M = H;
    ja = function(a) {
      Aa.push(a);
    };
    ra(function() {
      U();
      Fb(U);
    });
    Jb = function(a) {
      Oa && Oa.push(a);
    };
    var Ca = 60 > X || pb, Fa, oa, xa;
    if (89 <= X || 89 <= Ka || eb && 79 <= Eb || fa && (fa("(forced-colors:none)").matches || fa("(forced-colors:active)").matches)) {
      la = !0, ea("(forced-colors:active)", function(a) {
        Fa = a.matches;
        m = h();
        ca(Oa, m);
        v("(forced-colors:active):" + m);
      });
    } else if (10 <= t || Da || eb && Eb) {
      la = !0, ea("(-ms-high-contrast:black-on-white)", function(a) {
        Fa = oa = a.matches;
        m !== h() && (m = h(), ca(Oa, m), v("(-ms-high-contrast:black-on-white):" + m));
      }), ea("(-ms-high-contrast:white-on-black)", function(a) {
        Fa = xa = a.matches;
        m !== h() && (m = h(), ca(Oa, m), v("(-ms-high-contrast:white-on-black):" + m));
      }), ea("(-ms-high-contrast:active)", function(a) {
        Fa = a.matches;
        m !== h() && (m = h(), ca(Oa, m), v("(-ms-high-contrast:active):" + m));
      });
    } else if (eb && (t || X && 0 <= l.conpare(K, "1.8.1") || pb)) {
      var Qa = function() {
        function a(w, n) {
          if (n && "transparent" === w) {
            return 382.5;
          }
          if ("#" === w.charAt(0)) {
            return parseInt("0x" + w.substr(1, 2), 16) + parseInt("0x" + w.substr(3, 2), 16) + parseInt("0x" + w.substr(5, 2), 16);
          }
          var A = w.split("(")[1].split(",");
          return N(A[0]) + N(A[1]) + N(A[2]);
        }
        var e = B.defaultView;
        var z = e ? e.getComputedStyle(na, null) : na.currentStyle;
        e = (z && z.color || "").split(" ").join("");
        z = (z && z.backgroundColor || "").split(" ").join("");
        e && (Fa = "#123456" !== e && "rgb(18,52,86)" !== e, oa = a(e) < a(z, !0), xa = a(e) > a(z, !0), m !== h() && (m = h(), v("(forced-colors-fallback):" + m), ca(Oa, m, Ca)));
      };
      ja(function(a) {
        if (a) {
          return da(na, "color", "#123456"), da(na, "backgroundColor", "#123456"), Ca ? (Qa(), Oa = H) : Fb(Qa), Qa = H, !0;
        }
      });
    } else {
      Oa = h = H;
    }
  })();
  (function() {
    function h(n) {
      T(n);
      z && !n && Ua(z);
      T = I = M = Ea = Ca = Fa = Qa = a = e = w = z = H;
    }
    function D(n) {
      var A = '1.6em "' + n + '"';
      v("[webFontTest] testByNativeFontLoaderAPI start.");
      B.fonts.load(A).then(function(E) {
        v("[webFontTest] fonts.check() : " + B.fonts.check(A, "i") + ", fonts.length : " + E.length);
        (E = ca(I)) ? ba(h, E) : (v("[webFontTest] mesureWebFont() : false"), ka(!0));
      }, function(E) {
        v("[webFontTest] fonts.load() rejected! " + E);
        La !== H ? sa(La) : vb(sa);
      });
    }
    function ea(n) {
      return B.hidden || B.msHidden || B.mozHidden || B.webkitHidden ? (xa = new Ya() - 0, !1) : n < new Ya() - xa;
    }
    function ka(n) {
      n && (v("[webFontTest] testWebFont start."), xa = new Ya() - 0);
      (n = ca(I)) ? (v("[webFontTest] testWebFont mesurement success : " + n), h(n)) : ea(oa) ? (v("[webFontTest] testWebFont timeout!"), Qa || na ? h(0) : La !== H ? sa(La) : vb(sa)) : ba(ka);
    }
    function ca(n) {
      var A = 0, E = -1, F = 0;
      if (!w) {
        var G = -1;
        var y;
        a = Y(Ja, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, q);
        for (w = {}; y = C[++G];) {
          da(a, "fontFamily", y), w[y] = a.offsetWidth;
        }
      }
      for (5 > t ? a || (a = Y(Ja, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, q)) : Ja.appendChild(a); G = C[++E];) {
        if (da(a, "fontFamily", '"' + n + '",' + G), a.offsetWidth !== w[G]) {
          A = 1;
          break;
        }
      }
      !t && A && Ca && (a.innerHTML = Ca, n = a.offsetWidth, a.innerHTML = Fa, F = n === a.offsetWidth ? 1 : 0, a.innerHTML = q);
      Ua(a);
      5 > t && (a = H);
      return A + F;
    }
    function sa(n) {
      v("[webFontTest] onTestDataURIComplete : " + n);
      n ? (Qa = !0, va(!0)) : h(0);
    }
    function va(n) {
      var A;
      if (M) {
        for (A in n && (xa = new Ya() - 0), M) {
          ca(A) ? (v("[webFontTest] success! " + A), e = Y(Ja, "div", {"aria-hidden":"true", className:Ea, id:Ea}), z = Y(nb, "link", {type:"text/css", rel:"stylesheet", href:M[A]}), ba(U, !0)) : ea(f) ? (v("[webFontTest] timeout! " + A), delete M[A], ba(va, !0)) : ba(va);
          return;
        }
      }
      h(0);
    }
    function U(n) {
      n && (v("[webFontTest] testImportedCssReady start!"), I = I.replace(c, ""), v("[webFontTest] targetWebFontName : " + I), xa = new Ya() - 0);
      1 < e.offsetWidth ? (v("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + e.offsetWidth), Ua(e), oa = f, ba(ka, !0)) : ea(oa) ? 528 > ab ? (v("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + e.offsetWidth), Ua(e), oa = f, ba(ka, !0)) : (v("[webFontTest] testImportedCssReady timeout!"), Ua(e), h(0)) : ba(U);
    }
    Aa.splice(0, 0, function() {
      if (lb) {
        tb = 8 <= t || Da || 9.5 <= P || ob || pb || 522 <= ab || 3 <= Za || Db || Sb ? 3 : 7.2 <= P ? 2 : 6 <= P || X ? 1 : 0;
        if (!tb && !t && !Sa) {
          var n = Y(Ja, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          tb = 6 <= n.offsetWidth ? 2 : 0;
          Ua(n);
        }
        v("p_cssGeneratedContentGrade:" + tb);
        return !0;
      }
    });
    vb = !1 === La ? function(n) {
      ba(n, La);
    } : function(n) {
      function A(G) {
        F = O(F);
        La = G;
        E.onload = E.onerror = r;
        ba(n, G);
      }
      if (La !== H) {
        v("[dataURITest] already done : " + La), ba(n, La);
      } else if (8 > t) {
        v("[dataURITest] trident < 8 : false"), ba(n, !1);
      } else {
        v("[dataURITest] start!");
        var E = new Image(), F = ba(function() {
          F && A(!1);
        });
        E.onerror = function() {
          v("[dataURITest] no DATA URI!");
          A(!1);
        };
        E.onload = function() {
          v("[dataURITest] DATA URI:" + (1 === E.width * E.height));
          A(1 === E.width * E.height);
        };
        E.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && ra(function() {
      var n = Y(Ja, "div");
      wa(n, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      rb = 1 < n.offsetHeight;
      wa(n, "");
      Ua(n);
    });
    wb = function(n, A) {
      function E() {
        if (G || !y || F.complete) {
          v("[imageTest] timer -> img.complete. img.width=" + F.width);
          var R = !!F.width;
          sb = sb || R;
          ba(n, R);
          F.onerror = F.onload = r;
          F = n = H;
        } else {
          --y, ba(E);
        }
      }
      var F = new Image(), G, y = 99;
      v("[imageTest] start.");
      F.onerror = function() {
        v("[imageTest] error!");
        G = !0;
      };
      F.onload = function() {
        v("[imageTest] onload.");
        G = !0;
      };
      F.src = A;
      ba(E);
    };
    Ma = function(n, A, E, F, G, y, R) {
      T = n;
      I = A;
      M = E;
      Ea = F;
      Ca = G;
      Fa = y;
      oa = R || d;
      I = c + I;
      v("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      fa ? (v("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : false"), ba(h, 0)) : (v("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : true"), !B.fonts || 603 > ab ? (v("[webFontTest] No native font loader."), ka(!0)) : (v("[webFontTest] Use Native font loader."), D(I)));
    };
    var fa = 525 > ab || 10 > P || X && !ob || 2.2 > g(21) || g(25) || 10 > g(3) || za(32) || za(30) || za(3), na = 9 > t || 2 > Ka || 12 > P, c = "bad_" + (new Ya() - 0) + "_", d = 5000, f = 100, q = "mmmmmmmmmmlli", C = ["sans-serif", "serif"], T, I, M, Ea, Ca, Fa, oa, xa, Qa, a, e, z, w;
  })();
  var J = String.fromCharCode, ta = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", J(960), ")", "(", J(234), J(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", J(9824), "\u2190", J(9829), J(9830), J(9827), J(956), "\u03a9", "\u2193", "\u2192", "%", J(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", J(9619)];
  b = (9 === t || X && 0 <= l.conpare(K, "1.8.1") || pb) && !la;
  var ya = [], mb, Va, Kb = 7.2 > P ? function() {
    mb = !mb;
    for (var h = -1, D; D = ya[++h];) {
      -1 !== D.className.indexOf("pbAlp") ? da(D, "display", mb ? "" : "none") : (ib(D, mb ? "pbChrCS" : "pbChr00"), kb(D, mb ? "pbChr00" : "pbChrCS"));
    }
  } : b ? function() {
    mb = !mb;
    for (var h = -1, D; D = ya[++h];) {
      da(D, "opacity", mb ? 1 : 0);
    }
  } : H;
  var Tb = S.startBlinkingIfCursor = function(h) {
    Kb ? L(h, "pbChrCS") && (Va || !P && !m || (Va = setInterval(Kb, 400)), -1 === ya.indexOf(h) && ya.push(h)) : ya = H;
  };
  S.stopBlinkingIfCursor = function(h) {
    Kb && (h = ya.indexOf(h), 0 <= h && (ya.splice(h, 1), !ya.length && Va && (clearInterval(Va), Va = 0)));
  };
  b && Jb(function(h) {
    h ? Va || (Va = setInterval(Kb, 400)) : Va && (clearInterval(Va), Va = 0);
  });
  Kb && Ba(function() {
    Va && clearInterval(Va);
  });
  la || Jb(function(h) {
    h ? (u(W, "forced-colors", 2 === h ? "lod" : 3 === h ? "dol" : "active"), (qa || 9 === t || 5.5 <= t && 9 > t && rb) && ib(W, "jsCanRotate")) : (p(W, "forced-colors"), kb(W, "jsCanRotate"));
  });
  (function() {
    function h(a) {
      M = a;
      v("[pbList] WebFont test result : " + !!a);
      a ? ca() : sb ? ka(!0) : sb !== H ? ca() : (v("[pbList] Need imageTest " + Ea), wb(ka, Ea));
      v("window.offscreenBuffering = " + x.offscreenBuffering);
    }
    function D() {
      D = H;
      Ma(h, "PB-100", {"PB-100_canTTF":Wa + "pbFont/ttf.css", "PB-100_canWOFF":Wa + "pbFont/woff.css", "PB-100_canEOT":Wa + "pbFont/eot.css", "PB-100_canSVG":Wa + "pbFont/svg.css"}, "pbFont-testCssReady", d, "i", 5000);
    }
    function ea(a) {
      this.focus();
      a.preventDefault();
      a.stopPropagation();
    }
    function ka(a) {
      a ? (v("[pbList] Fallback start!"), ib(Ja, "pbList-noWebFont")) : v("[pbList] image disabled!");
      ca();
    }
    function ca() {
      for (h = Ma = H; I.length;) {
        sa(I.shift(), I.shift());
      }
      v("[pbList] complete.");
    }
    function sa(a, e) {
      function z(G) {
        G = hb(G);
        for (var y = -1, R; R = G[++y];) {
          switch(R.nodeType) {
            case 1:
              z(R);
              break;
            case 3:
              R.data && n(R.data) && A.push(R);
          }
        }
      }
      function w(G) {
        var y = G.children, R = 0, $a = y.length;
        if ($a) {
          for (; R < $a; ++R) {
            w(y[R]);
          }
        } else {
          (y = G.innerText) && n(y) && A.push(G);
        }
      }
      function n(G) {
        return G.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var A = [], E;
      if (h) {
        -1 === I.indexOf(a) && (I.push(a, e), Ca && D && D());
      } else {
        var F = I.indexOf(a);
        0 <= F && I.splice(F, 2);
        for (5 > t ? w(a) : z(a); E = A.shift();) {
          F = 5 > t ? E.innerText : E.data, 2 !== M && (F = F.split(d).join(na)), e ? 5 > t ? E.innerText = F : E.data = F : va(F.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(c).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fa).split("&amp;").join("&"), E);
        }
      }
    }
    function va(a, e) {
      function z(pa, V) {
        for (var Ga = ""; V;) {
          V & 1 && (Ga += pa), V >>= 1, pa += pa;
        }
        return Ga;
      }
      function w(pa, V, Ga) {
        for (var Ab, Wb = -1, Ub, Vb; Ab = V[++Wb];) {
          for (; 0 <= (Ub = pa.indexOf(Ab));) {
            Vb = Ab.length, pa = pa.substr(0, Ub) + z(Ga, Vb) + pa.substr(Ub + Vb);
          }
        }
        return pa;
      }
      function n(pa) {
        var V = N(pa), Ga = "" + V;
        return 0 < V && V === V | 0 && (V = pa.indexOf(Ga) + Ga.length, V <= pa.length) ? V : 0;
      }
      var A = " area line str cmd fnc syb".split(" "), E = 5 > t || 1 === e.nodeType, F = [], G = "", y, R = -1, $a, ub, Na;
      if (E) {
        if (xa) {
          var Rb = e.style.visibility;
          da(e, "visibility", "hidden");
        }
        e.innerHTML = "";
      }
      if (Qa) {
        var Bb = e;
        e = B.createDocumentFragment();
      }
      if (function(pa) {
        var V = pa.indexOf("P");
        if (-1 === V) {
          return !1;
        }
        V = N(pa.charAt(V + 1));
        return 0 <= V && 9 >= V;
      }(a)) {
        G = z("+", a.length);
      } else {
        0 <= (y = n(a)) && (G = z("|", y), R = y, --R);
        for (; y = a.charAt(++R);) {
          y === fa || $a ? (G += "~", y === fa && ($a = !$a)) : G += y;
        }
        G = w(G, T, "^");
        G = w(G, q, "{");
        G = w(G, C, "}");
      }
      R = 0;
      for ($a = a.length; R < $a; ++R) {
        y = a.charAt(R);
        var Z = y === f;
        var ha = " " === y;
        y = Z ? " " : y;
        var aa = G.charAt(R);
        var Ra = (ub = Ha) && Z;
        var Ha = "|" === aa;
        aa = A["+|~{}^".indexOf(aa) + 1];
        "\n" !== y ? (M || !sb ? (2 === M && a.substr(R, 2) === d && (y = d, ++R), aa = ha && "str" === aa ? "pbList-strsp" : Z ? "" : !ha && aa ? "pbList-" + aa : "") : (Z = ta.indexOf(y), Z = -1 === Z ? "" : ta.indexOf(y).toString(16).toUpperCase(), Z = (Z = 1 === Z.length ? "0" + Z : Z) ? "pbChr" + Z : "", aa = ha && "str" === aa ? "pbList-strsp" : ha || !Z ? "" : aa ? (Z ? Z + " " : "") + "pbList-" + aa : Z), Z = H, Ra ? (y = 6 <= t && 8 > t ? " " : f, aa = "") : Ha && (X && !ob || 9.5 > P) ? 
        (Ha && !ub && (Na = 4 - (N(a.substr(R)) + "").length), 7.5 > P ? Z = oa ? "position:relative;top:-4px;left:" + 12 * Na + "px" : {position:"relative", top:"-4px", left:12 * Na + "px"} : Z = oa ? "position:relative;left:" + 12 * Na + "px" : {position:"relative", left:12 * Na + "px"}) : ha && 7.5 > P && (aa = "pbList-strsp"), oa ? F.push("<font" + (aa ? ' class="' + aa + '"' : "") + (Z ? ' style="' + Z + '"' : "") + ">" + y + "</font>") : E || Qa ? Y(e, "font", {"class":aa, style:Z}, y) : jb(e, 
        "font", {"class":aa, style:Z}, y)) : (ub = Ha = !1, oa ? F.push(y) : E || Qa ? Pb(e, y) : Ib(e, y));
      }
      if (E) {
        oa ? e.innerHTML = F.join("") : Qa && Bb.appendChild(e), xa && da(e, "visibility", Rb);
      } else {
        if (oa) {
          A = B.createElement("font");
          for (A.innerHTML = F.join(""); F = A.firstChild;) {
            e.parentNode.insertBefore(F, e);
          }
          Ua(e);
        } else {
          Qa ? Bb.parentNode.replaceChild(e, Bb) : Ua(e);
        }
      }
    }
    ja(function(a) {
      if (a) {
        a = Hb("pbChrCS");
        for (var e = 0, z = a.length; e < z; ++e) {
          Tb(a[e]);
        }
        return !0;
      }
    });
    var U = [];
    ja(function(a) {
      function e(ha) {
        var aa = xb(ha, "pbTip");
        if (aa) {
          var Ra = aa.charAt(0);
          var Ha = "_" === Ra;
          aa = (Ha ? aa.charAt(2) : Ra).toUpperCase().charCodeAt(0) - 65;
          F ? Y(ha, "div", {style:{left:7 * aa + 3 + "px"}}) : (Ra = xb(ha, "title"), p(ha, "pbTip"), p(ha, "title"), Ha = Y(ha, "div", {className:"pbTip" + (Ha ? "Btm" : ""), style:{width:Ra.length + w + "em", left:7 * aa - 5 + "px"}}, Ra), Y(Ha, "div"));
        }
        E && 0 <= ha.className.indexOf("pbColor") && Y(ha, "u");
      }
      function z(ha, aa) {
        var Ra = xb(ha, "pbGhst"), Ha = ha.className, pa = Ha.split("pbCsr")[1] || "", V = Ha.split("pbAlp")[1] || "";
        if ("CS" === Ra) {
          var Ga = "_";
        } else {
          Ga = Ra, 3 === Ga.length && (Ga = Ga.substr(0, 2)), Ga = ta[parseInt(Ga, 16)] || "~";
        }
        var Ab;
        pa = pa.split(" ")[0];
        if (V = N(V.split(" ")[0])) {
          n && (Ha = Ha.split("pbChr")[1].split(" ")[0], da(ha, "backgroundPosition", Cb(Ha, 2, Rb) + "px " + -24 * (10 - V) + "px")), !aa && A && jb(ha, "a").appendChild(ha);
        }
        Ra && (V = 10 - V, n && (Ab = {backgroundPosition:Cb(Ra, 2, Rb) + "px " + -24 * (10 - V) + "px"}), p(ha, "pbGhst"), R = jb(ha, "b", {className:"pbChr" + Ra + " pbCsr" + pa + " pbAlp" + V, style:Ab}, Ga), Tb(R));
        Tb(ha);
      }
      if (a) {
        var w = 6 > t ? 2 : 0, n = 7.2 > P || 0.9 > X || Sa, A = 1.1 === X, E = 1.4 > X;
        a = db("SAMP");
        var F = 8 === t, G = tb, y, R, $a, ub, Na;
        rb && ib(Ja, "pbLCD-AX");
        if (a.length) {
          for ($a = -1; y = a[++$a];) {
            if (L(gb(y), "pbLCD")) {
              var Rb = L(y, "PB-120") || L(y, "FX-795P");
              var Bb = Ta(y);
              for (y = Bb.length; Na = Bb[--y];) {
                switch(Qb(Na)) {
                  case "A":
                    (2 > G || F) && e(Na);
                    if (2 > G) {
                      var Z = Ta(Na);
                      for (ub = Z.length; ub;) {
                        z(Z[--ub], !0);
                      }
                    }
                    Db ? u(Na, "href", "javascript:void(0)") : (ma(Na, "click", ea), U.push(Na));
                    break;
                  case "B":
                    2 > G && z(Na, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ba(function() {
      for (var a; a = U.shift();) {
        yb(a, "click", ea);
      }
    });
    6 === t && (new Ia("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(B);
    var fa = ta[7], na = ta[30], c = ta[113], d = J(8337) + J(8331), f = J(160);
    J(8194);
    var q = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), C = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), T = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + na + ta[31]).split(""), I = [], M, Ea, Ca;
    if (0.9 <= X && 0 >= l.conpare(K, "0.9.1")) {
      ib(W, "pbLCD-gecko09To091");
      var Fa = !0;
    }
    ja(function(a) {
      if (a) {
        Ea = Wa + "pbFont/x3mask" + (Fa ? ".gecko0.9.1.gif" : ".png");
        a = db("*");
        for (var e = -1, z; z = a[++e];) {
          L(z, "pbList") ? sa(z) : L(z, "pbFont") && sa(z, !0);
        }
        I.length && (v("[pbList] " + I.length / 2 + " elements found. WebFont test start."), D());
        return !0;
      }
    });
    var oa = !1, xa = 8 > P, Qa = !oa && !xa && !(6 > t) && B.createDocumentFragment && !!Ja.replaceChild;
    S.prettify = sa;
  })();
  b = B.scripts || db("script");
  var Wa = b[b.length - 1].src.split("/");
  --Wa.length;
  (Wa = Wa.join("/")) && (Wa += "/");
  v("[p_assetUrl] " + Wa);
  ra(function() {
    var h;
    (h = Ob("logger")) || alert("#logger not found!");
    h ? (v = function(D) {
      Y(h, "P", H, D);
    }, zb = function(D) {
      Y(h, "P", {style:{color:"red"}}, D);
    }, x.onerror = function(D, ea, ka) {
      zb(D + ", " + ea + ", " + ka);
      return !0;
    }) : x.console ? (v = console.log, zb = console.error) : P ? (v = r, zb = opera.postError) : v = zb = r;
    for (; Pa.length;) {
      v(Pa.shift());
    }
    for (; cb.length;) {
      v(cb.shift());
    }
    Pa = cb = H;
  });
  6.1 > Za && ma(x, "scroll", Lb);
  Ba(Gb);
  6.1 > Za && ma(x, "scroll", Mb);
  Ba(Nb);
  10 > t && (11 !== ia || 5 !== t) || (9 > P || 1 > X || !Sa && !x.addEventListener ? B.write('<link href="' + Wa + fb + '" rel="stylesheet"' + (8 > P ? "" : ' media="screen,handheld,projection,print"') + ">") : ra(function() {
    Y(nb, "link", {href:Wa + "" + fb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

