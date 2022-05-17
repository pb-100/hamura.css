PB100={};ua = [];
ua.conpare = function(ba, q) {
  var C = 0, w, G, ra = (ba + "").split("."), T = (q + "").split("."), Na = ra.length;
  for (w = T.length; "0" === ra[Na - 1];) {
    --Na;
  }
  for (; "0" === T[w - 1];) {
    --w;
  }
  for (G = Na < w ? Na : w; C < G; ++C) {
    var Ya = ra[C] - 0, l = T[C] - 0;
    if (Ya !== l) {
      return Ya > l ? 1 : -1;
    }
  }
  return Na > w ? 1 : Na === w ? 0 : -1;
};
(function(ba, q, C, w, G, ra, T, Na) {
  function Ya(v, qa, ka) {
    ka = ra(v.split(qa)[1]);
    return 0 <= ka ? ka : 0;
  }
  function l(v, qa) {
    return 0 <= v.indexOf(qa);
  }
  function bb(v) {
    return l(v, "Linux armv") || l(v, "Linux aarch") || l(v, "Linux i686") || l(v, "Linux x86_64");
  }
  function O(v, qa) {
    for (var ka in qa) {
      if (ka === v) {
        return !0;
      }
    }
  }
  function f(v, qa) {
    var ka = "", Ra = -1, Za;
    if (v = v.split(qa)[1]) {
      for (; Za = v.charCodeAt(++Ra);) {
        if (48 <= Za && 57 >= Za || 46 === Za) {
          ka += v.charAt(Ra);
        } else {
          break;
        }
      }
      for (Ra = ka.length; Ra;) {
        if (46 === ka.charCodeAt(--Ra)) {
          ka = ka.substr(0, Ra);
        } else {
          break;
        }
      }
    }
    return ka;
  }
  function ya(v) {
    for (var qa = arguments, ka = 1, Ra = qa[0], Za; ka < qa.length; ++ka) {
      0 > Ea(Ra, Za = qa[ka]) && (Ra = Za);
    }
    return Ra;
  }
  function Eb(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var Ea = ba.conpare, d = w.userAgent, ca = w.appVersion, fb = ra(ca) || 0, Q = w.platform, t = C.documentElement, Va = t && t.style, Fa = C.documentMode, W = G.width;
  G = G.height;
  var Y = q.HTMLAudioElement, lb = q.performance, mb = q.Int8Array, Ga = q.ontouchstart !== Na, $a = f(ca, "Version/") || f(d, "Version/"), Fb = q.operamini, Aa = !Fb && q.opera, Tb = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : ya(f(d, "Opera "), $a, fb)), Gb = q.opr, nb = !Aa && (C.all || Fa);
  Fa = nb && (Fa ? Fa : q.XMLHttpRequest ? C.getElementsByTagName ? 7 : 4 : C.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  t = !nb && t.msContentZoomFactor;
  var cb = !t && (q.chrome || q.chromium), db = !nb && function() {
    for (var v in Va) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), yb = l(d, "UCWEB"), Hb = yb && f(d, " U2/"), ob = yb && f(d, "; wds "), gb = f(d.split("_").join("."), "; iPh OS "), ia = f(d, "; Adr "), zb = l(ca, "YJApp-ANDROID"), za = l(Q, "Android") || db && l(ca, "Android") || zb;
  ia = f(Q, "Android ") || f(ca, "Android ") || f(d, "Android ") || ia;
  var pb = l(Q, "Linux"), Wa = "MacIntel" === Q && w.standalone !== Na, qb = db && f(d, "Goanna/"), Sa = !qb && db && (f(d, "rv:") || f(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Ib = f(d, "Firefox/"), A = f(d, "Opera/"), Nb = q.FNRBrowser, Ta = Ya(d, "AppleWebKit/"), hb = f(d, "Chrome/"), Ob = f(ca, "Iron/"), Jb = f(d, "OPR/"), Pb = f(ca, "KHTML/"), rb = f(d.toLowerCase(), "iris");
  f(d, "FxiOS/");
  f(d, "CriOS/");
  f(d, "EdgiOS/");
  var Qb = f(d, "Silk/"), Ha = Ya(d, "SamsungBrowser/"), sb = !Ha && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    qa, ka = v.length; qa = v[--ka];) {
      if (l(d, qa)) {
        return 2 > ra($a) ? $a : 0.9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ka = v.length; qa = v[--ka];) {
      if (l(d, qa)) {
        return $a;
      }
    }
  }(), Ab = cb && 534.3 >= Ta, oa = bb(Q), Ia = oa && !l(d, Q) && bb(d);
  Ga = Ga && (Ta || db) && Ia || !ia && zb;
  zb = !!q.ReactNativeWebView;
  oa = oa && function() {
    for (var v in q) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ca = (Ia = q.puffinDevice) && Ia.clientInfo;
  Ca = (Ia = Ca && "iOS" === Ca.os && Ca.osVersion) && Ca.model;
  var ib = !Fa && C.registerElement, Rb = !Fa && C.execCommand, Ba = q.webkitCancelAnimationFrame, Kb = pb && ib && "11.0.696.34" === hb, tb = q._firefoxTV_playbackStateObserverJava, ub = Ya(d, "diordnA ");
  if ("Nitro" === Q) {
    var y = 1;
  } else if ("Nintendo DSi" === Q) {
    y = 2;
    var x = A;
  } else if ("New Nintendo 3DS" === Q || l(d, "iPhone OS 6_0") && 320 === W && 240 === G) {
    y = 4, x = f(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === Q) {
    y = 3, x = f(d, "Version/"), Ta = 535;
  } else if ("Nintendo Swicth" === Q) {
    y = 7, x = f(ca, "NintendoBrowser/");
  } else if (q.wiiu) {
    y = 6;
    x = f(ca, "NintendoBrowser/");
    var R = 15, U = f(ca, "AppleWebKit/") || (Ba ? 536 : 534);
    x || (x = Ba ? 4 : 2, l(ca, "Macintosh;") || l(ca, "Windows NT") && l(ca, "Touch"));
  } else if (Aa && Aa.wiiremote) {
    y = 5, x = f(d, "Wii; U; ; ");
  } else if (A = f(d, "PlayStation Vita ")) {
    y = 10, x = A;
  } else if (A = f(d, "(PlayStation Portable); ")) {
    y = 8;
    x = A;
    var Bb = 3.3;
  } else if (A = f(d, "PLAYSTATION 3; ") || f(d, "PLAYSTATION 3 ")) {
    y = 11, x = A, 0 > Ea("4.10", A) && (R = 26, U = A);
  } else if (l(d, "Xbox One")) {
    y = 15, x = 1;
  } else if (l(d, "Xbox")) {
    y = 14, x = 1;
  } else if (2 === fb && l(d, "Sony/COM2/")) {
    y = 17;
    x = 2;
    Bb = 3.4;
    var Ja = !0;
  } else if (0 === Q.indexOf("iP") || gb || Ia || Wa) {
    if (Ia) {
      switch(x = Ia, Ca.substr(0, 4)) {
        case "iPho":
          var Da = 0;
          f(Ca, Da);
          var ta = !0;
          break;
        case "iPad":
          Da = 1;
          f(Ca, Da);
          var va = !0;
          break;
        case "iPod":
          Da = 2;
          f(Ca, Da);
          var eb = !0;
      }
    } else {
      gb ? x = gb : (x = f(ca.split("_").join("."), "OS "), O("isSecureContext", q), O("enableWebGL", q), O("sameOrigin", q));
      if (!x || Nb) {
        x = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : T.isNaN ? 9.2 : q.SharedWorker ? lb && lb.now ? 8.0 : 8.4 : Rb ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : mb ? 4.3 : Y ? 4.1 : 3.2;
      }
      var wa = W === 1.5 * G || 1.5 * W === G;
      0 === Q.indexOf("iPhone") ? (Da = 0, ta = !0) : 0 === Q.indexOf("iPad") || Wa ? (Da = 1, va = !0) : 0 === Q.indexOf("iPod") && (Da = 2, eb = !0);
    }
    R = !Ia && (w.standalone || (va || 12 > x) && O("webkitFullscreenEnabled", C) || 11 <= x && 13 > x && w.mediaDevices) ? 16 : 17;
    y = 24;
    U = x;
  } else if (l(d, "Kobo")) {
    y = 18, R = 21, U = 2.2, za = !0;
  } else if (l(d, "EBRD")) {
    y = 19, R = 21, U = 2.2;
  } else if (A = f(d, "CrOS x86_64 ") || f(d, "CrOS aarch64 ") || f(d, "CrOS i686 ") || f(d, "CrOS armv7l ")) {
    y = 28, x = A;
  } else if (q.onmoztimechange !== Na) {
    y = 29, x = 18.1 > Sa ? "1.0.1" : 19 > Sa ? 1.1 : 27 > Sa ? 1.2 : 29 > Sa ? 1.3 : 31 > Sa ? 1.4 : 33 > Sa ? 2.0 : 35 > Sa ? 2.1 : 38 > Sa ? 2.2 : 45 > Sa ? 2.5 : 2.6, l(d, "Mobile") ? ta = !0 : l(d, "Tablet") ? va = !0 : l(d, "TV");
  } else if (q.palmGetResource) {
    y = 30, x = f(d, "webOS/") || f(d, "WEBOS") || f(d, "hpwOS/"), l(d, "webOS.TV") || l(d, "/SmartTV") || (ta = !0);
  } else if (A = f(d, "Tizen ")) {
    y = 31, x = A, R = 24, U = Ha, ta = !0;
  } else if (A = f(d, "Windows Phone ") || f(ca, "Windows Phone OS ") || ob) {
    y = 23, x = A, ta = !0;
  } else if (t && "ARM" === Q) {
    y = 23, x = 10, ta = !0;
  } else if (nb && l(ca, "ZuneWP")) {
    y = 23, x = 11 === Fa ? 8.1 : 10 === Fa ? 8 : 9 === Fa ? 7.5 : 7 === Fa ? 7 : "?", ta = !0;
  } else if (l(d, "FOMA;")) {
    y = 16, ta = !0;
  } else if (l(d, "SoftBank;")) {
    y = 16, ta = !0;
  } else if (l(d, "KFMUWI")) {
    var Oa = !0;
    x = 6.3;
    var pa = va = !0;
  } else if (l(d, "KFKAWI")) {
    Oa = !0, x = 6, pa = va = !0;
  } else if (l(d, "KFSUWI") || l(d, "KFAUWI") || l(d, "KFDOWI")) {
    Oa = !0, x = 5, pa = va = !0;
  } else if (l(d, "KFGIWI")) {
    Oa = !0, x = 5, pa = va = !0;
  } else if (l(d, "KFARWI") || l(d, "KFSAWA") || l(d, "KFSAWI")) {
    Oa = !0, x = 5 <= ra(ia) ? 5 : 4, pa = va = !0;
  } else if (l(d, "KFSOWI") || l(d, "KFTHWA") || l(d, "KFTHWI") || l(d, "KFAPWA") || l(d, "KFAPWI")) {
    Oa = !0, x = 3, pa = va = !0;
  } else if (l(d, "KFOT") || l(d, "KFTT") || l(d, "KFJWA") || l(d, "KFJWI")) {
    Oa = !0, x = 2, pa = va = !0;
  } else if (l(d, "Kindle Fire")) {
    Oa = !0, x = 1, pa = va = !0;
  } else if (A = f(d, "Kindle/")) {
    y = 20, x = A, R = 21, U = 2.2;
  } else if (tb) {
    Oa = !0, x = ia || ub, pa = !0;
  } else if (l(d, "AmazonWebAppPlatform") || l(d, "; AFT")) {
    Oa = !0, x = ia, pa = !0;
  } else if (l(d, "MeeGo")) {
    y = 32;
  } else if (l(d, "Maemo")) {
    y = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || rb) {
    y = 22, Ja = !0;
  } else if ("WinCE" === Q) {
    y = 21, Ja = !0;
  } else if (0 === Q.indexOf("Win")) {
    y = "Win16" === Q ? 35 : "Win32" === Q ? 36 : "Win64" === Q ? 37 : 0, x = f(d, "Windows NT ") || f(d, "Windows ");
  } else if (0 === Q.indexOf("Mac")) {
    y = "Mac68K" === Q ? 39 : "MacPowerPC" === Q || "MacPPC" === Q ? 38 : "MacIntel" === Q ? 40 : 0;
    if (A = f(d.split("_").join("."), "Mac OS X ")) {
      x = A;
    }
    var Lb = !0;
  } else if (l(d, "BlackBerry") || l(d, "BB10")) {
    y = 34, x = $a, ta = !0;
  } else if (l(d, "SunOS") || l(d, "Sun Solaris")) {
    y = 42;
  } else if (l(d, "FreeBSD")) {
    y = 43;
  } else if (l(d, "OpenBSD")) {
    y = 44;
  } else if (l(d, "NetBSD")) {
    y = 45;
  } else if (za && db) {
    l(d, "Android 4.4;") ? wa = {min:2.3} : 4 <= ra(ia) ? wa = ia : wa = {min:2.2}, x = wa;
  } else if (za && Aa) {
    ia ? wa = ia : wa = {min:1.6}, x = wa, l(d, "Tablet") ? va = !0 : ta = !0;
  } else if (ia) {
    x = ia, za = !0;
  } else if (pb && Ga || zb || oa) {
    var vb = !0;
    Ha ? wa = {min:4.4} : cb && !Ab || Gb || Jb ? wa = {min:4} : (wa = ia = Va.touchAction !== Na ? {min:5} : ib ? 4.4 : mb ? w.connection ? q.searchBoxJavaBridge_ || cb ? T.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ta ? 3 : 533 <= Ta ? Y ? 2.3 : 2.2 : 530 <= Ta ? 2.0 : 1.5, sb && (R = 24, U = sb));
    x = wa;
    za = !0;
  } else {
    Kb ? (x = {min:5}, vb = za = !0) : pb && (l(d, "Ubuntu") ? y = 46 : (A = f(d, "Mint/")) ? (y = 47, x = A) : (A = f(d, "Fedora/")) ? (y = 48, x = A) : y = l(d, "Gentoo") ? 49 : 50);
  }
  Oa || za && vb && Qb ? y = 27 : za && (y = y || 26);
  R || (pa = pa || za, Aa ? (R = pa || Ja || ta || va ? 9 : 8, U = Tb) : nb ? (wa = Ya(ca, "Trident/") + 4, R = Ja || ta || va || eb ? 3 : Lb && 5 <= Fa ? 7 : 2, U = Fa) : t ? (R = 23 === y ? 6 : 5, U = f(ca, "Edge/")) : qb ? (R = 13, U = qb) : db ? (R = pa ? 12 : 11, U = Sa || Ib) : Ha ? (R = 24, U = Ha) : (A = Bb || f(d, "NetFront/")) ? (R = 18, U = A) : (A = f(d, "iCab")) ? (R = 19, U = A) : (A = ya(f(d, "Opera Mini/"), f(d, "Opera Mobi/")) || Fb && $a) ? (R = 10, U = A, y || (l(d, "iPhone") ? 
  Da = 0 : l(d, "iPad") ? Da = 1 : l(d, "iPod") && (Da = 2), Da && (y = 24))) : yb ? (R = 25, U = Hb) : Pb ? (R = 14, U = fb) : za && Ab ? (R = 21, U = ia) : cb || Gb || Jb ? (R = pa ? 22 : 20, U = hb || Ob) : za && ib ? (R = 23, U = 5 > ra(ia) ? ia : hb) : za && ($a || vb) ? (R = 21, U = ia) : hb ? (R = pa ? 22 : 20, U = hb) : Ta && (R = 15, U = Ta));
  y && (ba[2] = y, x && (ba[3] = Eb(x)));
  R && (ba[0] = R, U && (ba[1] = Eb(U)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var ba = this[this.length - 1];
  --this.length;
  return ba;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ba = arguments, q = 0, C = ba.length, w = this.length; q < C; ++q) {
    this[w + q] = ba[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ba = this[0], q = 1, C = this.length; q < C; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return ba;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ba = arguments, q = ba.length, C = this.length += q - 1, w = C; w >= q; --w) {
    this[w] = this[w - q];
  }
  for (w = 0; w < q; ++w) {
    this[w] = ba[w];
  }
  return C;
});
Array.prototype.splice || (Array.prototype.splice = function(ba, q) {
  var C = arguments, w = C.length - 2 - q, G = this.slice(ba, ba + q), ra;
  if (0 < w) {
    var T = this.length - 1;
    for (ra = ba + q; T >= ra; --T) {
      this[T + w] = this[T];
    }
  } else if (0 > w) {
    T = ba + q;
    for (ra = this.length; T < ra; ++T) {
      this[T + w] = this[T];
    }
    this.length += w;
  }
  T = 2;
  for (ra = C.length; T < ra; ++T) {
    this[T - 2 + ba] = C[T];
  }
  return G;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ba, q) {
  var C = this.length >>> 0;
  if (0 === C) {
    return -1;
  }
  if (q) {
    var w = q || 0;
    w = -Infinity === w ? 0 : (0 > w ? -w : w) | 0;
    if (C <= w) {
      return -1;
    }
  }
  for (w = 0 <= w ? w : 0 < C + w ? C + w : 0; w < C; ++w) {
    if (this[w] === ba) {
      return w;
    }
  }
  return -1;
});
(function(ba, q, C, w, G, ra, T, Na, Ya, l, bb, O) {
  function f(n) {
    if (q[0] === n) {
      return Q === Q + "" ? T(Q) : Q;
    }
  }
  function ya(n) {
    var J = q[3];
    if (q[2] === n) {
      return J === J + "" ? T(J) : J;
    }
  }
  function Eb(n, J, la) {
    n + "" === n && ("a" === n.charAt(2) && (la = !0, n = n.substr(0, 2)), n = "CS" === n ? 7.2 > W ? 117 : 0.9 > Y || 9 > t || 9 > W || Va ? 1 : 132 : parseInt(n, 16));
    la && (50 === n && (n = 128), 102 < n && 108 > n && (n += 24));
    return (n - 1) * -(6 * (J || 2));
  }
  var Ea = G.body, d = Ea.style, ca, fb, Q = q[1], t = f(2) || f(3), Va = f(7), Fa = f(5) || f(6), W = f(8) || f(9), Y = f(11) || f(12), lb = Y && 0 <= q.conpare(Q, "1.9.1"), mb = f(13), Ga = f(15), $a = f(16) || f(17), Fb = f(10) || f(25), Aa = f(20) || f(22), Tb = Aa || f(23) || f(21) || f(24), Gb = Aa && T(ra.userAgent.split("Edg/")[1]), nb = T(ra.appVersion.split("Trident/")[1]) + 4, cb = ya(35) || ya(36) || ya(37), db = !t && !Va && (new Na('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  yb = (Va ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > W ? "opr70" : 8 > W ? "opr72" : 9.5 > W ? "opr" + (W | 0) : Y && !lb ? 1.4 <= Y ? "gck19" : 1.3 <= Y ? "gck13" : 1 <= Y ? "gck12" : 0.9 <= Y ? "gck09" : 0.8 <= Y ? "gck08" : "gck07" : "modern") + ".css";
  ya(1) || ya(2) || ya(3) || ya(4) || ya(8) || ya(9) || ya(10);
  var Hb, ob, gb, ia, zb = d.transform !== O ? "transform" : d["-o-transform"] !== O ? "-o-transform" : d["-ms-transform"] !== O ? "-ms-transform" : d.MozTransform !== O ? "-moz-transform" : d["-webkit-transform"] !== O ? "-webkit-transform" : "", za = [], pb = [], Wa = [], qb, Sa, Ib, A, Nb, Ta, hb, Ob, Jb, Pb;
  (function() {
    function n() {
      for (var c, e = 0, h = new bb() - 0; e < V.length;) {
        h < V[0].t ? ++e : (c = V.splice(e, 1)[0], c.f(c.p));
      }
      b = V.length ? Ya(n, k) : 0;
    }
    function J() {
      for (var c, e = 0; e < z.length; ++e) {
        c = z[e], c.f();
      }
    }
    function la() {
      D && (D = clearInterval(D));
    }
    function ea() {
      b && (b = l(b));
    }
    Ta = function(c) {
      z.length || (D = setInterval(J, M));
      z.push({f:c, v:++S});
      return S;
    };
    hb = function() {
      D && (la(), D = setInterval(J, M));
    };
    Ob = la;
    var z = [], M = 500, S = 0, D;
    if (5 > t || Va) {
      C._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    A = function(c, e, h) {
      V.length || (b = Ya(n, k));
      V.push({f:c, p:e, v:++a, t:new bb() - 0 + (k < h ? h : k)});
      return a;
    };
    Nb = function(c) {
      for (var e = V.length, h; h = V[--e];) {
        if (h.v === c) {
          V.splice(e, 1);
          break;
        }
      }
      return 0;
    };
    Jb = function() {
      b && (ea(), b = Ya(n, k));
    };
    Pb = ea;
    var V = [], k = 16, a = 0, b;
    if (5 > t || Va) {
      C._wdb_ontimer = n, n = "_wdb_ontimer()";
    }
  })();
  var rb, Qb, Ha, sb, Ab, oa, Ia, Ca, ib, Rb, Ba, Kb, tb, ub, y, x, R, U, Bb, Ja, Da;
  (function() {
    function n(a, b, c) {
      var e = ["<", a], h = 1, p, E;
      if (b) {
        for (p in b) {
          var K = b[p];
          if (null != K && "" !== K) {
            if ("style" === p) {
              e[++h] = ' style="';
              for (E in K) {
                for (var Z = ++h, aa, ja = [], L = E.split(""), F = L.length; F;) {
                  aa = L[--F], "A" <= aa && "Z" >= aa && (aa = "-" + aa.toLowerCase()), ja[F] = aa;
                }
                e[Z] = ja.join("") + ":" + K[E] + ";";
              }
              e[++h] = '"';
            } else {
              "className" === p && (p = "class"), e[++h] = " " + p + '="' + K + '"';
            }
          }
        }
      }
      e[++h] = ">";
      null != c && (D && "font" !== a ? e[++h] = "<FONT>" + c + "</FONT>" : e[++h] = c);
      e[++h] = "</" + a + ">";
      return e.join("");
    }
    function J(a) {
      a = "*" === a && 6 > t ? "*" !== a ? G.all.tags(a.toUpperCase()) : G.all : G.getElementsByTagName(a);
      var b = [], c = 0, e;
      for (e = a.length; c < e; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function la(a) {
      return D ? a.parentElement : a.parentNode;
    }
    function ea(a, b, c, e, h, p) {
      if (D) {
        var E = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = sb(2 > a ? Ha(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(E, n(c, e, h));
        b = sb(b)[K];
        null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (V) {
        b = G.createElement(n(c, e));
      } else {
        b = p ? G.createElementNS("http://www.w3.org/2000/svg", c) : G.createElement(c);
        if (e) {
          for (E in e) {
            if ((c = e[E]) || 0 === c) {
              switch(E) {
                case "class":
                case "className":
                  x(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (K in c) {
                    a[K] = c[K];
                  }
                  break;
                default:
                  ub(b, E, c);
              }
            }
          }
        }
        k || null != h && z(b, h);
      }
      return b;
    }
    function z(a, b) {
      if (D) {
        return ea(2, a, "font", O, b);
      }
      var c = G.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function M(a, b) {
      9 > t ? a.className = b : a.setAttribute("class", b);
    }
    function S(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var D = 5 > t;
    ca = J("html")[0];
    fb = J("head")[0];
    rb = J;
    Qb = function(a) {
      var b = [], c = 0, e, h = -1;
      if (9 > t || !G.getElementsByClassName) {
        var p = 6 > t ? G.all : G.getElementsByTagName("*");
      } else {
        var E = !0;
        p = G.getElementsByClassName(a);
      }
      for (e = p.length; c < e; ++c) {
        var K = p[c];
        if (E || (D || 1 === K.nodeType) && S(K, a)) {
          b[++h] = K;
        }
      }
      return b;
    };
    Ha = la;
    sb = function(a) {
      a = D ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Ab = function(a) {
      var b = !(7.03 < W && 7.2 > W) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, p; e;) {
        if (p = a[--e], b || 1 === p.nodeType) {
          D && "FONT" === p.tagName || (c[++h] = p);
        }
      }
      return c;
    };
    oa = function(a, b, c, e, h) {
      b = ea(2, a, b, c, e, h);
      D || (a.appendChild(b), k && null != e && z(b, e));
      return b;
    };
    Ia = function(a, b, c, e, h) {
      b = ea(0, a, b, c, e, h);
      D || (la(a).insertBefore(b, a), k && null != e && z(b, e));
      return b;
    };
    Ca = function(a, b, c, e, h) {
      b = ea(1, a, b, c, e, h);
      var p;
      D || ((p = a.nextSibling) ? Ha(p).insertBefore(b, p) : Ha(a).appendChild(b), k && null != e && z(b, e));
      return b;
    };
    ib = z;
    Rb = function(a, b) {
      if (D) {
        return ea(0, a, "font", O, b);
      }
      var c = G.createTextNode("" + b);
      Ha(a).insertBefore(c, a);
      return c;
    };
    Ba = function(a) {
      D ? a.outerHTML = "" : Ha(a).removeChild(a);
    };
    var V = 9 > t, k = V;
    Kb = function(a) {
      return a.tagName.toUpperCase();
    };
    tb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    ub = function(a, b, c) {
      a.setAttribute(b, c);
    };
    y = function(a, b) {
      a.removeAttribute(b);
    };
    x = M;
    R = S;
    U = function(a, b) {
      var c;
      if (!S(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        M(a, c + b);
      }
    };
    Bb = function(a, b) {
      if (S(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        M(a, c.join(" "));
      }
    };
    Ja = function(a, b, c) {
      a.style[b] = c;
    };
    Da = function(a, b) {
      var c = -1, e, h;
      if (5.5 > t) {
        if (b) {
          for (e = b.split(";"); h = e[++c];) {
            var p = h.split(":");
            a.style[p[0]] = h.substr(p[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > W || 1 > Y ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ta, va, eb, wa, Oa, pa, Lb, vb, v, qa;
  (function() {
    function n() {
      return L ? xa ? 2 : F ? 3 : 1 : 0;
    }
    function J(g) {
      va(C, "load", J);
      J = O;
      ea(za, g, !0);
      eb = za = O;
    }
    function la(g, m) {
      pa(function() {
        var H = k(g);
        m(H);
        H.addListener(m);
        return !0;
      });
    }
    function ea(g, m, H) {
      for (var r = 0; r < g.length; ++r) {
        !0 === g[r](m) && (g.splice(r, 1), --r);
      }
      H && (g.length = 0);
    }
    function z(g, m, H) {
      c && !b.length && A(M);
      b.push(g, m, H);
    }
    function M() {
      var g = b, m;
      for (b = []; m = g.shift();) {
        ea(m, g.shift(), g.shift());
      }
    }
    function S(g) {
      var m = g || event;
      g = e[m.type];
      var H = -1, r, P;
      t ? (m.preventDefault = function() {
        m.returnValue = !1;
      }, m.stopPropagation = function() {
        m.cancelBubble = !0;
      }) : p && (m.u = m.stopPropagation, m.stopPropagation = function() {
        P = !0;
      });
      for (; r = g[++H];) {
        r.l === this ? (this.g = r.j, this.g(m), this.g = w, this.g = O) : 7.2 > W && this === G && r.l === C && (C.g = r.j, C.g(m), delete C.g);
      }
      if (t) {
        return m.preventDefault = m.stopPropagation = O, m.returnValue;
      }
      p && (m.defaultPrevented && "click" === m.type && "A" === m.target.tagName && (K = !0), P && !K && m.u(), m.u = m.stopPropagation = O);
    }
    function D() {
      var g = 9 === a.offsetWidth;
      vb !== g && z(pb, vb = g);
    }
    function V(g) {
      za || ea(N, g);
    }
    var k = C.matchMedia, a, b = [], c;
    za.push(function() {
      la = O;
      a = oa(Ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        c = !0;
        b.length && A(M);
      });
    });
    ta = function(g, m, H, r) {
      if (E) {
        g.addEventListener(m, H, r ? db ? r : r.capture : !1);
      } else {
        var P = {l:g, j:H};
        r = e[m];
        var B = "on" + m, X, Ka;
        if (r) {
          for (X = r.length; Ka = r[--X];) {
            if (Ka.l === g && Ka.j === H) {
              return;
            }
          }
          e[m].push(P);
        } else {
          e[m] = r = [P], h || (m = g[B], "function" === typeof m && m !== S && r.unshift({l:g, j:m}));
        }
        h ? g.attachEvent(B, S) : g[B] = S;
      }
    };
    va = function(g, m, H, r) {
      if (E) {
        g.removeEventListener(m, H, r ? db ? r : r.capture : !1);
      } else {
        r = e[m];
        m = "on" + m;
        var P, B, X;
        if (r) {
          for (P = r.length; B = r[--P];) {
            B.l === g && (B.j === H ? r.splice(P, 1) : X = !0);
          }
          X || (h ? g.detachEvent(m, S) : (g[m] = w, g[m] = null));
        }
      }
    };
    var e = {}, h = !1, p = 525.13 > Ga, E = !p && !Va && C.addEventListener, K;
    p && ca.addEventListener("click", function(g) {
      if (K) {
        return K = !1, g.preventDefault(), !1;
      }
    });
    eb = function(g) {
      za.push(g);
    };
    wa = function(g) {
      Z && Z.push(g);
    };
    var Z = [];
    if (419.3 >= Ga) {
      var aa = function() {
        if (aa) {
          var g = G.readyState;
          "loaded" === g || "complete" === g ? (aa = O, J()) : A(aa);
        }
      };
      A(aa);
    } else {
      ta(C, "load", J);
    }
    t || 0.9 <= Y && 1.8 > Y ? ta(C, "unload", function(g) {
      ea(Z, g, !0);
    }) : Z = O;
    pa = function(g) {
      pb.push(g);
    };
    eb(function() {
      D();
      Ta(D);
    });
    Lb = function(g) {
      Wa && Wa.push(g);
    };
    var ja = 60 > Y || mb, L, F, xa;
    if (89 <= Y || 89 <= Aa || cb && 79 <= Gb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      qa = !0, la("(forced-colors:active)", function(g) {
        L = g.matches;
        v = n();
        z(Wa, v);
      });
    } else if (10 <= t || Fa || cb && Gb) {
      qa = !0, la("(-ms-high-contrast:black-on-white)", function(g) {
        L = F = g.matches;
        v !== n() && (v = n(), z(Wa, v));
      }), la("(-ms-high-contrast:white-on-black)", function(g) {
        L = xa = g.matches;
        v !== n() && (v = n(), z(Wa, v));
      }), la("(-ms-high-contrast:active)", function(g) {
        L = g.matches;
        v !== n() && (v = n(), z(Wa, v));
      });
    } else if (cb && (t || Y && 0 <= q.conpare(Q, "1.8.1") || mb)) {
      var u = function() {
        function g(r, P) {
          if (P && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var B = r.split("(")[1].split(",");
          return T(B[0]) + T(B[1]) + T(B[2]);
        }
        var m = G.defaultView;
        var H = m ? m.getComputedStyle(a, null) : a.currentStyle;
        m = (H && H.color || "").split(" ").join("");
        H = (H && H.backgroundColor || "").split(" ").join("");
        m && (L = "#123456" !== m && "rgb(18,52,86)" !== m, F = g(m) < g(H, !0), xa = g(m) > g(H, !0), v !== n() && (v = n(), z(Wa, v, ja)));
      };
      pa(function(g) {
        if (g) {
          return Ja(a, "color", "#123456"), Ja(a, "backgroundColor", "#123456"), ja ? (u(), Wa = O) : Ta(u), u = O, !0;
        }
      });
    } else {
      Wa = n = O;
    }
    Oa = function(g) {
      N.push(g);
    };
    var N = [], I = 0, ma = 1 > Y || 1.2 <= Y && 1.8 > Y || 7.2 >= W;
    ma ? Ta(function() {
      var g = C.scrollY || Ea.scrollTop;
      I !== g && (I = g, V());
    }) : ta(C, "scroll", V);
    wa(function() {
      ma || va(C, "scroll", V);
    });
  })();
  var ka = 9 > t || 525 <= Ga && 530 > Ga || 2 > Aa, Ra = 0, Za, Ub, Vb;
  (function() {
    function n(k) {
      for (var a = ea.length, b; a;) {
        if (b = ea[--a], b.D === k) {
          return b;
        }
      }
    }
    function J() {
      var k = G.styleSheets, a = [], b = 0, c = -1, e;
      if (k) {
        for (e = k.length; b < e; ++b) {
          if (2 > Aa || cb && 526 > Ga) {
            var h = la(k[b]);
            h.parentNode && (a[b] = h);
          } else {
            a[b] = la(k[b]);
          }
        }
      } else {
        for (k = rb("*"), e = k.length; b < e; ++b) {
          h = k[b];
          var p = Kb(h);
          if ("STYLE" === p || "LINK" === p && "text/css" === tb(h, "type")) {
            a[++c] = h;
          }
        }
      }
      return a;
    }
    function la(k) {
      return k.owningElement || k.ownerNode;
    }
    Za = function(k, a) {
      var b = J(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var e = b[c - 1];
      b = b[c];
      if (S || D) {
        var h = b ? Ia(b, "style") : e ? Ca(e, "style") : oa(fb, "style");
        D && ib(h, "");
        var p = h.styleSheet || h.sheet;
        k && ub(h, "media", k);
      } else if (z || M) {
        p = {C:k, B:c, G:!0};
      }
      if (p) {
        return ea.push({D:p, h:h, m:[]}), p;
      }
    };
    Ub = function(k) {
      k = n(k);
      var a = k.m, b = a.length, c;
      for (k.h && Ba(k.h); c = a[--b];) {
        c.i && Ba(c.i);
      }
      ea.splice(ea.indexOf(k), 1);
    };
    Vb = function(k, a, b, c) {
      var e = n(k), h = e.h;
      e = e.m;
      var p = "@import" === a, E = "@page" === a, K = "@font-face" === a, Z = e.length, aa = "", ja;
      if (k.imports) {
        var L = k.imports.length;
      } else {
        for (L = 0; L < Z && "@import" === e[L].A; ++L) {
        }
      }
      if (p) {
        c = 0 <= c && c < L ? c : L;
        var F = a + ' "' + b + '"';
      } else {
        c = L <= c && c < Z ? c : Z;
        for (F in b) {
          aa += ";" + F + ":" + b[F];
        }
        aa = aa.substr(1);
        F = a + "{" + aa + "}";
        6 <= t && K && (c = Z);
      }
      Z = {A:a, F:b, s:c, o:c};
      if (9 > t) {
        L = k.rules;
        var xa = L.length;
        if (K) {
          a = G.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + F + "</style>", a = a.lastChild, (ja = h.nextSibling) ? Ha(h).insertBefore(a, ja) : Ha(h).appendChild(a), Z.i = a;
        } else {
          if (p ? k.addImport(b, c) : 5.5 <= t && E || k.addRule(a, aa, c), Z.o = c + (L.length - xa - 1), 0 === L.length - xa) {
            return -1;
          }
        }
      } else if (S || D) {
        (cb && Ga || 28 > Aa) && p ? Z.i = Ca(h, "link", {href:b, rel:"stylesheet", type:"text/css"}) : ka && K ? (a = Z.i = Ca(h, "style", {type:"text/css", media:k.media}), a.innerText = F) : k.insertRule(F, c);
      }
      e.splice(c, 0, Z);
      if (z || M) {
        h = n(k);
        ja = h.m;
        a = h.h;
        b = k.B;
        p = J();
        k = p[b - 1];
        b = p[b];
        p = [];
        K = E = -1;
        aa = "style";
        Z = {type:"text/css", media:h.C};
        for (var u; L = ja[++E];) {
          if (F = L.A, L = L.F, "@import" === F) {
            p[++K] = F + ' "' + L + '"';
          } else {
            p[++K] = F + "{";
            F = "";
            for (u in L) {
              F += ";" + u + ":" + L[u];
            }
            p[++K] = F.substr(1) + "}";
          }
        }
        p = p.join("");
        z && (p = "data:text/css;charset=utf-8;base64," + V(p), Z.rel = "stylesheet", Z.href = p, aa = "link", p = O);
        a ? (h.h = Ca(a, aa, Z, p), Ba(a)) : (a = b ? Ia(b, aa, Z, p) : k ? Ca(k, aa, Z, p) : oa(fb, aa, Z, p), h.h = a);
      }
      u = c;
      k = e.length;
      for (h = u; h < k; ++h) {
        ja = e[h], ja.i || (a = ja.o - ja.s, ja.s = u, ja.o = u + a, u += 1 + a);
      }
      return c;
    };
    var ea = [], z = 1 > Y || 8 <= W && 9 > W, M = 7.2 <= W && 8 > W, S = !!t || !z && !M && function() {
      var k = oa(ca, "style"), a = !(!k.styleSheet && !k.sheet);
      Ba(k);
      return a;
    }(), D = !S && Ga && !z && !M && function() {
      var k = oa(ca, "style");
      ib(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      Ba(k);
      return a;
    }();
    Ra = z || M ? 1 : S || D ? 2 : 0;
    var V;
    (function(k) {
      function a(c) {
        for (var e = b, h = "", p = 0, E; E = c.length;) {
          4 > E && (p = [0, 2, 1, 0][E]), E = c.charCodeAt(0) << 16 | (1 < E ? c.charCodeAt(1) : 0) << 8 | (2 < E ? c.charCodeAt(2) : 0), h += [e[E >>> 18], e[E >>> 12 & 63], 2 <= p ? "=" : e[E >>> 6 & 63], 1 <= p ? "=" : e[E & 63]].join(""), c = c.substr(3);
        }
        return h;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      k.btoa && (a = k.btoa);
      V = a;
    })(this);
  })();
  (function() {
    function n() {
      if (525 > Ga || Y && !lb || 2.2 > f(21) || f(25) || 10 > f(3) || ya(32) || ya(30) || ya(1) || ya(2) || ya(3)) {
        return !1;
      }
      if (ka) {
        return !0;
      }
      if (2 === Ra) {
        var z = Za();
        var M = Vb(z, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        M = z.cssText || z.cssRules && z.cssRules[M] && z.cssRules[M].cssText || "";
        M = M.match("src") && M.match("@font-face");
        Ub(z);
      }
      n = O;
      return ea = !!M;
    }
    pb.splice(0, 0, function() {
      if (vb) {
        gb = 8 <= t || Fa || 9.5 <= W || lb || mb || 522 <= Ga || 3 <= $a || Fb || Tb ? 3 : 7.2 <= W ? 2 : 6 <= W || Y ? 1 : 0;
        if (!gb && !t && !Va) {
          var z = oa(Ea, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          gb = 6 <= z.offsetWidth ? 2 : 0;
          Ba(z);
        }
        return !0;
      }
    });
    qb = function(z) {
      function M(V) {
        D = Nb(D);
        ia = V;
        S.onload = S.onerror = w;
        A(z, V);
      }
      if (ia !== O) {
        A(z, ia);
      } else if (8 > t) {
        A(z, !1);
      } else {
        var S = new Image(), D = A(function() {
          D && M(!1);
        });
        S.onerror = function() {
          M(!1);
        };
        S.onload = function() {
          M(1 === S.width * S.height);
        };
        S.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && eb(function() {
      var z = oa(Ea, "div");
      Da(z, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Hb = 1 < z.offsetHeight;
      Da(z, "");
      Ba(z);
    });
    Sa = function(z, M) {
      function S() {
        if (V || !k || D.complete) {
          var a = !!D.width;
          ob = ob || a;
          A(z, a);
          D.onerror = D.onload = w;
          D = z = O;
        } else {
          --k, A(S);
        }
      }
      var D = new Image(), V, k = 99;
      D.onerror = function() {
        V = !0;
      };
      D.onload = function() {
        V = !0;
      };
      D.src = M;
      A(S);
    };
    var J = 9 > t || 2 > Aa || 12 > W, la = ["sans-serif", "serif"], ea;
    Ib = function(z, M, S, D, V, k, a) {
      function b(I) {
        z(I);
        N && !I && Ub(N);
        z = F = xa = u = N = O;
      }
      function c() {
        G.fonts.load('1.6em "' + M + '"').then(function() {
          var I;
          (I = p(M)) ? A(b, I) : h(!0);
        }, function() {
          ia !== O ? E(ia) : qb(E);
        });
      }
      function e(I) {
        return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (ja = new bb() - 0, !1) : I < new bb() - ja;
      }
      function h(I) {
        var ma;
        I && (ja = new bb() - 0);
        (ma = p(M)) ? b(ma) : e(aa) ? L || J ? b(0) : ia !== O ? E(ia) : qb(E) : A(h);
      }
      function p(I) {
        var ma = 0, g = -1, m = 0;
        if (!u) {
          var H = -1;
          var r;
          F = oa(Ea, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (u = {}; r = la[++H];) {
            Ja(F, "fontFamily", r), u[r] = F.offsetWidth;
          }
        }
        for (5 > t ? F || (F = oa(Ea, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Ea.appendChild(F); H = la[++g];) {
          if (Ja(F, "fontFamily", '"' + I + '",' + H), F.offsetWidth !== u[H]) {
            ma = 1;
            break;
          }
        }
        !t && ma && V && (F.innerHTML = V, I = F.offsetWidth, F.innerHTML = k, m = I === F.offsetWidth ? 1 : 0, F.innerHTML = "mmmmmmmmmmlli");
        Ba(F);
        5 > t && (F = O);
        return ma + m;
      }
      function E(I) {
        I ? (L = !0, K(!0)) : b(0);
      }
      function K(I) {
        var ma;
        if (S) {
          for (ma in I && (ja = new bb() - 0), S) {
            p(ma) ? (xa = oa(Ea, "div", {"aria-hidden":"true", className:D, id:D}), N = Za(), Vb(N, "@import", S[ma]), A(Z, !0)) : e(100) ? (delete S[ma], A(K, !0)) : A(K);
            return;
          }
        }
        b(0);
      }
      function Z(I) {
        I && (ja = new bb() - 0);
        1 < xa.offsetWidth ? (Ba(xa), aa = 100, A(h, !0)) : e(aa) ? 528 > Ga ? (Ba(xa), aa = 100, A(h, !0)) : (Ba(xa), b(0)) : A(Z);
      }
      var aa = a || 5000, ja, L, F, xa, u, N;
      n || ea ? ea || n() ? !G.fonts || 603 > Ga ? h(!0) : c() : A(b, 0) : A(b, 0);
    };
  })();
  var Pa = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Pa(960), ")", "(", Pa(234), Pa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Pa(9824), "\u2190", Pa(9829), Pa(9830), Pa(9827), Pa(956), "\u03a9", "\u2193", "\u2192", "%", Pa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Pa(9619)], Zb = (9 === t || Y && 0 <= q.conpare(Q, "1.8.1") || mb) && !qa, jb = [], kb, Xa, Mb = 7.2 > W ? function() {
    kb = !kb;
    for (var n = -1, J; J = jb[++n];) {
      -1 !== J.className.indexOf("pbAlp") ? Ja(J, "display", kb ? "" : "none") : (U(J, kb ? "pbChrCS" : "pbChr00"), Bb(J, kb ? "pbChr00" : "pbChrCS"));
    }
  } : Zb ? function() {
    kb = !kb;
    for (var n = -1, J; J = jb[++n];) {
      Ja(J, "opacity", kb ? 1 : 0);
    }
  } : O;
  var Wb = ba.startBlinkingIfCursor = function(n) {
    Mb ? R(n, "pbChrCS") && (Xa || !W && !v || (Xa = setInterval(Mb, 400)), -1 === jb.indexOf(n) && jb.push(n)) : jb = O;
  };
  ba.stopBlinkingIfCursor = function(n) {
    Mb && (n = jb.indexOf(n), 0 <= n && (jb.splice(n, 1), !jb.length && Xa && (clearInterval(Xa), Xa = 0)));
  };
  Zb && Lb(function(n) {
    n ? Xa || (Xa = setInterval(Mb, 400)) : Xa && (clearInterval(Xa), Xa = 0);
  });
  Mb && wa(function() {
    Xa && clearInterval(Xa);
  });
  qa || Lb(function(n) {
    n ? (ub(ca, "forced-colors", 2 === n ? "lod" : 3 === n ? "dol" : "active"), (zb || 9 === t || 5.5 <= t && 9 > t && Hb) && U(ca, "jsCanRotate")) : (y(ca, "forced-colors"), Bb(ca, "jsCanRotate"));
  });
  (function() {
    function n(u) {
      (K = u) ? z() : ob ? ea(!0) : ob !== O ? z() : Sa(ea, Z);
    }
    function J() {
      J = O;
      Ib(n, "PB-100", {"PB-100_canTTF":ab + "pbFont/ttf.css", "PB-100_canWOFF":ab + "pbFont/woff.css", "PB-100_canEOT":ab + "pbFont/eot.css", "PB-100_canSVG":ab + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function la(u) {
      this.focus();
      u.preventDefault();
      u.stopPropagation();
    }
    function ea(u) {
      u && U(Ea, "pbList-noWebFont");
      z();
    }
    function z() {
      for (n = Ib = O; E.length;) {
        M(E.shift(), E.shift());
      }
    }
    function M(u, N) {
      function I(P) {
        P = sb(P);
        for (var B = -1, X; X = P[++B];) {
          switch(X.nodeType) {
            case 1:
              I(X);
              break;
            case 3:
              X.data && g(X.data) && m.push(X);
          }
        }
      }
      function ma(P) {
        var B = P.children, X = 0, Ka = B.length;
        if (Ka) {
          for (; X < Ka; ++X) {
            ma(B[X]);
          }
        } else {
          (B = P.innerText) && g(B) && m.push(P);
        }
      }
      function g(P) {
        return P.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var m = [], H;
      if (n) {
        -1 === E.indexOf(u) && (E.push(u, N), aa && J && J());
      } else {
        var r = E.indexOf(u);
        0 <= r && E.splice(r, 2);
        for (5 > t ? ma(u) : I(u); H = m.shift();) {
          r = 5 > t ? H.innerText : H.data, 2 !== K && (r = r.split(b).join(k)), N ? 5 > t ? H.innerText = r : H.data = r : S(r.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(V).split("&amp;").join("&"), H);
        }
      }
    }
    function S(u, N) {
      function I(sa, da) {
        for (var La = ""; da;) {
          da & 1 && (La += sa), da >>= 1, sa += sa;
        }
        return La;
      }
      function ma(sa, da, La) {
        for (var Cb, ac = -1, Xb, Yb; Cb = da[++ac];) {
          for (; 0 <= (Xb = sa.indexOf(Cb));) {
            Yb = Cb.length, sa = sa.substr(0, Xb) + I(La, Yb) + sa.substr(Xb + Yb);
          }
        }
        return sa;
      }
      function g(sa) {
        var da = T(sa), La = "" + da;
        return 0 < da && da === da | 0 && (da = sa.indexOf(La) + La.length, da <= sa.length) ? da : 0;
      }
      var m = " area line str cmd fnc syb".split(" "), H = 5 > t || 1 === N.nodeType, r = [], P = "", B, X = -1, Ka, xb, Qa;
      if (H) {
        if (F) {
          var Sb = N.style.visibility;
          Ja(N, "visibility", "hidden");
        }
        N.innerHTML = "";
      }
      if (xa) {
        var Db = N;
        N = G.createDocumentFragment();
      }
      if (function(sa) {
        var da = sa.indexOf("P");
        if (-1 === da) {
          return !1;
        }
        da = T(sa.charAt(da + 1));
        return 0 <= da && 9 >= da;
      }(u)) {
        P = I("+", u.length);
      } else {
        0 <= (B = g(u)) && (P = I("|", B), X = B, --X);
        for (; B = u.charAt(++X);) {
          B === V || Ka ? (P += "~", B === V && (Ka = !Ka)) : P += B;
        }
        P = ma(P, p, "^");
        P = ma(P, e, "{");
        P = ma(P, h, "}");
      }
      X = 0;
      for (Ka = u.length; X < Ka; ++X) {
        B = u.charAt(X);
        var fa = B === c;
        var na = " " === B;
        B = fa ? " " : B;
        var ha = P.charAt(X);
        var Ua = (xb = Ma) && fa;
        var Ma = "|" === ha;
        ha = m["+|~{}^".indexOf(ha) + 1];
        "\n" !== B ? (K || !ob ? (2 === K && u.substr(X, 2) === b && (B = b, ++X), ha = na && "str" === ha ? "pbList-strsp" : fa ? "" : !na && ha ? "pbList-" + ha : "") : (fa = wb.indexOf(B), fa = -1 === fa ? "" : wb.indexOf(B).toString(16).toUpperCase(), fa = (fa = 1 === fa.length ? "0" + fa : fa) ? "pbChr" + fa : "", ha = na && "str" === ha ? "pbList-strsp" : na || !fa ? "" : ha ? (fa ? fa + " " : "") + "pbList-" + ha : fa), fa = O, Ua ? (B = 6 <= t && 8 > t ? " " : c, ha = "") : Ma && (Y && !lb || 
        9.5 > W) ? (Ma && !xb && (Qa = 4 - (T(u.substr(X)) + "").length), 7.5 > W ? fa = L ? "position:relative;top:-4px;left:" + 12 * Qa + "px" : {position:"relative", top:"-4px", left:12 * Qa + "px"} : fa = L ? "position:relative;left:" + 12 * Qa + "px" : {position:"relative", left:12 * Qa + "px"}) : na && 7.5 > W && (ha = "pbList-strsp"), L ? r.push("<font" + (ha ? ' class="' + ha + '"' : "") + (fa ? ' style="' + fa + '"' : "") + ">" + B + "</font>") : H || xa ? oa(N, "font", {"class":ha, style:fa}, 
        B) : Ia(N, "font", {"class":ha, style:fa}, B)) : (xb = Ma = !1, L ? r.push(B) : H || xa ? ib(N, B) : Rb(N, B));
      }
      if (H) {
        L ? N.innerHTML = r.join("") : xa && Db.appendChild(N), F && Ja(N, "visibility", Sb);
      } else {
        if (L) {
          m = G.createElement("font");
          for (m.innerHTML = r.join(""); r = m.firstChild;) {
            N.parentNode.insertBefore(r, N);
          }
          Ba(N);
        } else {
          xa ? Db.parentNode.replaceChild(N, Db) : Ba(N);
        }
      }
    }
    pa(function(u) {
      if (u) {
        u = Qb("pbChrCS");
        for (var N = 0, I = u.length; N < I; ++N) {
          Wb(u[N]);
        }
        return !0;
      }
    });
    var D = [];
    pa(function(u) {
      function N(na) {
        var ha = tb(na, "pbTip");
        if (ha) {
          var Ua = ha.charAt(0);
          var Ma = "_" === Ua;
          ha = (Ma ? ha.charAt(2) : Ua).toUpperCase().charCodeAt(0) - 65;
          r ? oa(na, "div", {style:{left:7 * ha + 3 + "px"}}) : (Ua = tb(na, "title"), y(na, "pbTip"), y(na, "title"), Ma = oa(na, "div", {className:"pbTip" + (Ma ? "Btm" : ""), style:{width:Ua.length + ma + "em", left:7 * ha - 5 + "px"}}, Ua), oa(Ma, "div"));
        }
        H && 0 <= na.className.indexOf("pbColor") && oa(na, "u");
      }
      function I(na, ha) {
        var Ua = tb(na, "pbGhst"), Ma = na.className, sa = Ma.split("pbCsr")[1] || "", da = Ma.split("pbAlp")[1] || "";
        if ("CS" === Ua) {
          var La = "_";
        } else {
          La = Ua, 3 === La.length && (La = La.substr(0, 2)), La = wb[parseInt(La, 16)] || "~";
        }
        var Cb;
        sa = sa.split(" ")[0];
        if (da = T(da.split(" ")[0])) {
          g && (Ma = Ma.split("pbChr")[1].split(" ")[0], Ja(na, "backgroundPosition", Eb(Ma, 2, Sb) + "px " + -24 * (10 - da) + "px")), !ha && m && Ia(na, "a").appendChild(na);
        }
        Ua && (da = 10 - da, g && (Cb = {backgroundPosition:Eb(Ua, 2, Sb) + "px " + -24 * (10 - da) + "px"}), y(na, "pbGhst"), X = Ia(na, "b", {className:"pbChr" + Ua + " pbCsr" + sa + " pbAlp" + da, style:Cb}, La), Wb(X));
        Wb(na);
      }
      if (u) {
        var ma = 6 > t ? 2 : 0, g = 7.2 > W || 0.9 > Y || Va, m = 1.1 === Y, H = 1.4 > Y;
        u = rb("SAMP");
        var r = 8 === t, P = gb, B, X, Ka, xb, Qa;
        Hb && U(Ea, "pbLCD-AX");
        if (u.length) {
          for (Ka = -1; B = u[++Ka];) {
            if (R(Ha(B), "pbLCD")) {
              var Sb = R(B, "PB-120") || R(B, "FX-795P");
              var Db = Ab(B);
              for (B = Db.length; Qa = Db[--B];) {
                switch(Kb(Qa)) {
                  case "A":
                    (2 > P || r) && N(Qa);
                    if (2 > P) {
                      var fa = Ab(Qa);
                      for (xb = fa.length; xb;) {
                        I(fa[--xb], !0);
                      }
                    }
                    Fb ? ub(Qa, "href", "javascript:void(0)") : (ta(Qa, "click", la), D.push(Qa));
                    break;
                  case "B":
                    2 > P && I(Qa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    wa(function() {
      for (var u; u = D.shift();) {
        va(u, "click", la);
      }
    });
    6 === t && (new Na("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(G);
    var V = wb[7], k = wb[30], a = wb[113], b = Pa(8337) + Pa(8331), c = Pa(160);
    Pa(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), p = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + wb[31]).split(""), E = [], K, Z, aa;
    if (0.9 <= Y && 0 >= q.conpare(Q, "0.9.1")) {
      U(ca, "pbLCD-gecko091");
      var ja = !0;
    }
    pa(function(u) {
      if (u) {
        Z = ab + "pbFont/x3mask" + (ja ? ".gecko0.9.1.gif" : ".png");
        u = rb("*");
        for (var N = -1, I; I = u[++N];) {
          R(I, "pbList") ? M(I) : R(I, "pbFont") && M(I, !0);
        }
        E.length && J();
        return !0;
      }
    });
    var L = !1, F = 8 > W, xa = !L && !F && !(6 > t) && G.createDocumentFragment && !!Ea.replaceChild;
    ba.prettify = M;
  })();
  var $b = G.scripts || rb("script");
  var ab = $b[$b.length - 1].src.split("/");
  --ab.length;
  (ab = ab.join("/")) && (ab += "/");
  6.1 > $a && Oa(hb);
  wa(Ob);
  6.1 > $a && Oa(Jb);
  wa(Pb);
  10 > t && (11 !== nb || 5 !== t) || (9 > W || 1 > Y || !Va && !C.addEventListener ? G.write('<link href="' + ab + yb + '" rel="stylesheet"' + (8 > W ? "" : ' media="screen,handheld,projection,print"') + ">") : eb(function() {
    oa(fb, "link", {href:ab + "" + yb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

