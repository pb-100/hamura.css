PB100={};ua = [];
ua.conpare = function(ba, p) {
  var A = 0, x, F, ja = (ba + "").split("."), T = (p + "").split("."), Ja = ja.length;
  for (x = T.length; "0" === ja[Ja - 1];) {
    --Ja;
  }
  for (; "0" === T[x - 1];) {
    --x;
  }
  for (F = Ja < x ? Ja : x; A < F; ++A) {
    var Sa = ja[A] - 0, m = T[A] - 0;
    if (Sa !== m) {
      return Sa > m ? 1 : -1;
    }
  }
  return Ja > x ? 1 : Ja === x ? 0 : -1;
};
(function(ba, p, A, x, F, ja, T, Ja) {
  function Sa(E, na, ca) {
    ca = ja(E.split(na)[1]);
    return 0 <= ca ? ca : 0;
  }
  function m(E, na) {
    return 0 <= E.indexOf(na);
  }
  function ab(E) {
    return m(E, "Linux armv") || m(E, "Linux aarch") || m(E, "Linux i686") || m(E, "Linux x86_64");
  }
  function P(E, na) {
    for (var ca in na) {
      if (ca === E) {
        return !0;
      }
    }
  }
  function h(E, na) {
    var ca = "", Ka = -1, Oa;
    if (E = E.split(na)[1]) {
      for (; Oa = E.charCodeAt(++Ka);) {
        if (48 <= Oa && 57 >= Oa || 46 === Oa) {
          ca += E.charAt(Ka);
        } else {
          break;
        }
      }
      for (Ka = ca.length; Ka;) {
        if (46 === ca.charCodeAt(--Ka)) {
          ca = ca.substr(0, Ka);
        } else {
          break;
        }
      }
    }
    return ca;
  }
  function wa(E) {
    for (var na = arguments, ca = 1, Ka = na[0], Oa; ca < na.length; ++ca) {
      0 > qa(Ka, Oa = na[ca]) && (Ka = Oa);
    }
    return Ka;
  }
  function Eb(E) {
    return E === E + "" ? E : E === E - 0 ? "" + E : E.min && E.max ? E.min + "~" + E.max : E.min ? E.min + "~" : "~" + E.max;
  }
  var qa = ba.conpare, d = x.userAgent, ha = x.appVersion, gb = ja(ha) || 0, Q = x.platform, t = A.documentElement, Ta = t && t.style, Fa = A.documentMode, V = F.width;
  F = F.height;
  var ka = p.HTMLAudioElement, yb = p.performance, zb = p.Int8Array, Ga = p.ontouchstart !== Ja, Ua = h(ha, "Version/") || h(d, "Version/"), Fb = p.operamini, Aa = !Fb && p.opera, Qb = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : wa(h(d, "Opera "), Ua, gb)), Gb = p.opr, Va = !Aa && (A.all || Fa);
  Fa = Va && (Fa ? Fa : p.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4);
  t = !Va && t.msContentZoomFactor;
  var nb = !t && (p.chrome || p.chromium), db = !Va && function() {
    for (var E in Ta) {
      if (0 === E.indexOf("Moz")) {
        return !0;
      }
    }
  }(), ob = m(d, "UCWEB"), pb = ob && h(d, " U2/"), bb = ob && h(d, "; wds "), Hb = h(d.split("_").join("."), "; iPh OS "), ia = h(d, "; Adr "), hb = m(ha, "YJApp-ANDROID"), la = m(Q, "Android") || db && m(ha, "Android") || hb;
  ia = h(Q, "Android ") || h(ha, "Android ") || h(d, "Android ") || ia;
  var qb = m(Q, "Linux"), Ib = "MacIntel" === Q && x.standalone !== Ja, rb = db && h(d, "Goanna/"), R = !rb && db && (h(d, "rv:") || h(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Kb = h(d, "Firefox/"), S = h(d, "Opera/"), Lb = p.FNRBrowser, Wa = Sa(d, "AppleWebKit/"), ib = h(d, "Chrome/"), Mb = h(ha, "Iron/"), jb = h(d, "OPR/"), Nb = h(ha, "KHTML/"), Xa = h(d.toLowerCase(), "iris");
  h(d, "FxiOS/");
  h(d, "CriOS/");
  h(d, "EdgiOS/");
  var Ab = h(d, "Silk/"), eb = Sa(d, "SamsungBrowser/"), xa = !eb && function() {
    for (var E = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    na, ca = E.length; na = E[--ca];) {
      if (m(d, na)) {
        return 2 > ja(Ua) ? Ua : 0.9;
      }
    }
    E = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ca = E.length; na = E[--ca];) {
      if (m(d, na)) {
        return Ua;
      }
    }
  }(), kb = nb && 534.3 >= Wa, Ya = ab(Q), Pa = Ya && !m(d, Q) && ab(d);
  Ga = Ga && (Wa || db) && Pa || !ia && hb;
  hb = !!p.ReactNativeWebView;
  Ya = Ya && function() {
    for (var E in p) {
      if (0 === E.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ra = (Pa = p.puffinDevice) && Pa.clientInfo;
  Ra = (Pa = Ra && "iOS" === Ra.os && Ra.osVersion) && Ra.model;
  var ya = !Fa && A.registerElement, Jb = !Fa && A.execCommand, lb = p.webkitCancelAnimationFrame, sb = qb && ya && "11.0.696.34" === ib, tb = p._firefoxTV_playbackStateObserverJava, Ob = Sa(d, "diordnA ");
  if ("Nitro" === Q) {
    var w = 1;
  } else if ("Nintendo DSi" === Q) {
    w = 2;
    var v = S;
  } else if ("New Nintendo 3DS" === Q || m(d, "iPhone OS 6_0") && 320 === V && 240 === F) {
    w = 4, v = h(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === Q) {
    w = 3, v = h(d, "Version/"), Wa = 535;
  } else if ("Nintendo Swicth" === Q) {
    w = 7, v = h(ha, "NintendoBrowser/");
  } else if (p.wiiu) {
    w = 6;
    v = h(ha, "NintendoBrowser/");
    var X = 15, N = h(ha, "AppleWebKit/") || (lb ? 536 : 534);
    v || (v = lb ? 4 : 2, m(ha, "Macintosh;") || m(ha, "Windows NT") && m(ha, "Touch"));
  } else if (Aa && Aa.wiiremote) {
    w = 5, v = h(d, "Wii; U; ; ");
  } else if (S = h(d, "PlayStation Vita ")) {
    w = 10, v = S;
  } else if (S = h(d, "(PlayStation Portable); ")) {
    w = 8;
    v = S;
    var Bb = 3.3;
  } else if (S = h(d, "PLAYSTATION 3; ") || h(d, "PLAYSTATION 3 ")) {
    w = 11, v = S, 0 > qa("4.10", S) && (X = 26, N = S);
  } else if (m(d, "Xbox One")) {
    w = 15, v = 1;
  } else if (m(d, "Xbox")) {
    w = 14, v = 1;
  } else if (2 === gb && m(d, "Sony/COM2/")) {
    w = 17;
    v = 2;
    Bb = 3.4;
    var cb = !0;
  } else if (0 === Q.indexOf("iP") || Hb || Pa || Ib) {
    if (Pa) {
      switch(v = Pa, Ra.substr(0, 4)) {
        case "iPho":
          var Ba = 0;
          h(Ra, Ba);
          var oa = !0;
          break;
        case "iPad":
          Ba = 1;
          h(Ra, Ba);
          var pa = !0;
          break;
        case "iPod":
          Ba = 2;
          h(Ra, Ba);
          var Cb = !0;
      }
    } else {
      Hb ? v = Hb : (v = h(ha.split("_").join("."), "OS "), P("isSecureContext", p), P("enableWebGL", p), P("sameOrigin", p));
      if (!v || Lb) {
        v = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : x.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : T.isNaN ? 9.2 : p.SharedWorker ? yb && yb.now ? 8.0 : 8.4 : Jb ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : zb ? 4.3 : ka ? 4.1 : 3.2;
      }
      var ra = V === 1.5 * F || 1.5 * V === F;
      0 === Q.indexOf("iPhone") ? (Ba = 0, oa = !0) : 0 === Q.indexOf("iPad") || Ib ? (Ba = 1, pa = !0) : 0 === Q.indexOf("iPod") && (Ba = 2, Cb = !0);
    }
    X = !Pa && (x.standalone || (pa || 12 > v) && P("webkitFullscreenEnabled", A) || 11 <= v && 13 > v && x.mediaDevices) ? 16 : 17;
    w = 24;
    N = v;
  } else if (m(d, "Kobo")) {
    w = 18, X = 21, N = 2.2, la = !0;
  } else if (m(d, "EBRD")) {
    w = 19, X = 21, N = 2.2;
  } else if (S = h(d, "CrOS x86_64 ") || h(d, "CrOS aarch64 ") || h(d, "CrOS i686 ") || h(d, "CrOS armv7l ")) {
    w = 28, v = S;
  } else if (p.onmoztimechange !== Ja) {
    w = 29, v = 18.1 > R ? "1.0.1" : 19 > R ? 1.1 : 27 > R ? 1.2 : 29 > R ? 1.3 : 31 > R ? 1.4 : 33 > R ? 2.0 : 35 > R ? 2.1 : 38 > R ? 2.2 : 45 > R ? 2.5 : 2.6, m(d, "Mobile") ? oa = !0 : m(d, "Tablet") ? pa = !0 : m(d, "TV");
  } else if (p.palmGetResource) {
    w = 30, v = h(d, "webOS/") || h(d, "WEBOS") || h(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (oa = !0);
  } else if (S = h(d, "Tizen ")) {
    w = 31, v = S, X = 24, N = eb, oa = !0;
  } else if (S = h(d, "Windows Phone ") || h(ha, "Windows Phone OS ") || bb) {
    w = 23, v = S, oa = !0;
  } else if (t && "ARM" === Q) {
    w = 23, v = 10, oa = !0;
  } else if (Va && m(ha, "ZuneWP")) {
    w = 23, v = 11 === Fa ? 8.1 : 10 === Fa ? 8 : 9 === Fa ? 7.5 : 7 === Fa ? 7 : "?", oa = !0;
  } else if (m(d, "FOMA;")) {
    w = 16, oa = !0;
  } else if (m(d, "SoftBank;")) {
    w = 16, oa = !0;
  } else if (m(d, "KFMUWI")) {
    var La = !0;
    v = 6.3;
    var sa = pa = !0;
  } else if (m(d, "KFKAWI")) {
    La = !0, v = 6, sa = pa = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    La = !0, v = 5, sa = pa = !0;
  } else if (m(d, "KFGIWI")) {
    La = !0, v = 5, sa = pa = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    La = !0, v = 5 <= ja(ia) ? 5 : 4, sa = pa = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    La = !0, v = 3, sa = pa = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    La = !0, v = 2, sa = pa = !0;
  } else if (m(d, "Kindle Fire")) {
    La = !0, v = 1, sa = pa = !0;
  } else if (S = h(d, "Kindle/")) {
    w = 20, v = S, X = 21, N = 2.2;
  } else if (tb) {
    La = !0, v = ia || Ob, sa = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    La = !0, v = ia, sa = !0;
  } else if (m(d, "MeeGo")) {
    w = 32;
  } else if (m(d, "Maemo")) {
    w = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Xa) {
    w = 22, cb = !0;
  } else if ("WinCE" === Q) {
    w = 21, cb = !0;
  } else if (0 === Q.indexOf("Win")) {
    w = "Win16" === Q ? 35 : "Win32" === Q ? 36 : "Win64" === Q ? 37 : 0, v = h(d, "Windows NT ") || h(d, "Windows ");
  } else if (0 === Q.indexOf("Mac")) {
    w = "Mac68K" === Q ? 39 : "MacPowerPC" === Q || "MacPPC" === Q ? 38 : "MacIntel" === Q ? 40 : 0;
    if (S = h(d.split("_").join("."), "Mac OS X ")) {
      v = S;
    }
    var Ea = !0;
  } else if (m(d, "BlackBerry") || m(d, "BB10")) {
    w = 34, v = Ua, oa = !0;
  } else if (m(d, "SunOS") || m(d, "Sun Solaris")) {
    w = 42;
  } else if (m(d, "FreeBSD")) {
    w = 43;
  } else if (m(d, "OpenBSD")) {
    w = 44;
  } else if (m(d, "NetBSD")) {
    w = 45;
  } else if (la && db) {
    m(d, "Android 4.4;") ? ra = {min:2.3} : 4 <= ja(ia) ? ra = ia : ra = {min:2.2}, v = ra;
  } else if (la && Aa) {
    ia ? ra = ia : ra = {min:1.6}, v = ra, m(d, "Tablet") ? pa = !0 : oa = !0;
  } else if (ia) {
    v = ia, la = !0;
  } else if (qb && Ga || hb || Ya) {
    var ub = !0;
    eb ? ra = {min:4.4} : nb && !kb || Gb || jb ? ra = {min:4} : (ra = ia = Ta.touchAction !== Ja ? {min:5} : ya ? 4.4 : zb ? x.connection ? p.searchBoxJavaBridge_ || nb ? T.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Wa ? 3 : 533 <= Wa ? ka ? 2.3 : 2.2 : 530 <= Wa ? 2.0 : 1.5, xa && (X = 24, N = xa));
    v = ra;
    la = !0;
  } else {
    sb ? (v = {min:5}, ub = la = !0) : qb && (m(d, "Ubuntu") ? w = 46 : (S = h(d, "Mint/")) ? (w = 47, v = S) : (S = h(d, "Fedora/")) ? (w = 48, v = S) : w = m(d, "Gentoo") ? 49 : 50);
  }
  La || la && ub && Ab ? w = 27 : la && (w = w || 26);
  X || (sa = sa || la, Aa ? (X = sa || cb || oa || pa ? 9 : 8, N = Qb) : Va ? (ra = Sa(ha, "Trident/") + 4, X = cb || oa || pa || Cb ? 3 : Ea && 5 <= Fa ? 7 : 2, N = Fa) : t ? (X = 23 === w ? 6 : 5, N = h(ha, "Edge/")) : rb ? (X = 13, N = rb) : db ? (X = sa ? 12 : 11, N = R || Kb) : eb ? (X = 24, N = eb) : (S = Bb || h(d, "NetFront/")) ? (X = 18, N = S) : (S = h(d, "iCab")) ? (X = 19, N = S) : (S = wa(h(d, "Opera Mini/"), h(d, "Opera Mobi/")) || Fb && Ua) ? (X = 10, N = S, w || (m(d, "iPhone") ? 
  Ba = 0 : m(d, "iPad") ? Ba = 1 : m(d, "iPod") && (Ba = 2), Ba && (w = 24))) : ob ? (X = 25, N = pb) : Nb ? (X = 14, N = gb) : la && kb ? (X = 21, N = ia) : nb || Gb || jb ? (X = sa ? 22 : 20, N = ib || Mb) : la && ya ? (X = 23, N = 5 > ja(ia) ? ia : ib) : la && (Ua || ub) ? (X = 21, N = ia) : ib ? (X = sa ? 22 : 20, N = ib) : Wa && (X = 15, N = Wa));
  w && (ba[2] = w, v && (ba[3] = Eb(v)));
  X && (ba[0] = X, N && (ba[1] = Eb(N)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var ba = this[this.length - 1];
  --this.length;
  return ba;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ba = arguments, p = 0, A = ba.length, x = this.length; p < A; ++p) {
    this[x + p] = ba[p];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ba = this[0], p = 1, A = this.length; p < A; ++p) {
    this[p - 1] = this[p];
  }
  --this.length;
  return ba;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ba = arguments, p = ba.length, A = this.length += p - 1, x = A; x >= p; --x) {
    this[x] = this[x - p];
  }
  for (x = 0; x < p; ++x) {
    this[x] = ba[x];
  }
  return A;
});
Array.prototype.splice || (Array.prototype.splice = function(ba, p) {
  var A = arguments, x = A.length - 2 - p, F = this.slice(ba, ba + p), ja;
  if (0 < x) {
    var T = this.length - 1;
    for (ja = ba + p; T >= ja; --T) {
      this[T + x] = this[T];
    }
  } else if (0 > x) {
    T = ba + p;
    for (ja = this.length; T < ja; ++T) {
      this[T + x] = this[T];
    }
    this.length += x;
  }
  T = 2;
  for (ja = A.length; T < ja; ++T) {
    this[T - 2 + ba] = A[T];
  }
  return F;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ba, p) {
  var A = this.length >>> 0;
  if (0 === A) {
    return -1;
  }
  if (p) {
    var x = p || 0;
    x = -Infinity === x ? 0 : (0 > x ? -x : x) | 0;
    if (A <= x) {
      return -1;
    }
  }
  for (x = 0 <= x ? x : 0 < A + x ? A + x : 0; x < A; ++x) {
    if (this[x] === ba) {
      return x;
    }
  }
  return -1;
});
(function(ba, p, A, x, F, ja, T, Ja, Sa, m, ab, P) {
  function h(r) {
    if (p[0] === r) {
      return Q === Q + "" ? T(Q) : Q;
    }
  }
  function wa(r) {
    var H = p[3];
    if (p[2] === r) {
      return H === H + "" ? T(H) : H;
    }
  }
  function Eb(r, H, ma) {
    r + "" === r && ("a" === r.charAt(2) && (ma = !0, r = r.substr(0, 2)), r = "CS" === r ? 7.2 > V ? 117 : 9 > t || 9 > V || Ta ? 1 : 132 : parseInt(r, 16));
    ma && (50 === r && (r = 128), 102 < r && 108 > r && (r += 24));
    return (r - 1) * -(6 * (H || 2));
  }
  var qa = F.body, d = qa.style, ha, gb, Q = p[1], t = h(2) || h(3), Ta = h(7), Fa = h(5) || h(6), V = h(8) || h(9), ka = h(11) || h(12), yb = ka && 0 <= p.conpare(Q, "1.9.1"), zb = h(13), Ga = h(15), Ua = h(16) || h(17), Fb = h(10) || h(25), Aa = h(20) || h(22), Qb = Aa || h(23) || h(21) || h(24), Gb = Aa && T(ja.userAgent.split("Edg/")[1]);
  ja = T(ja.appVersion.split("Trident/")[1]) + 4;
  var Va = wa(35) || wa(36) || wa(37), nb = !t && !Ta && (new Ja('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), db = (Ta ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > V ? "opr70" : 8 > V ? "opr72" : 9.5 > V ? "opr" + (V | 0) : ka && !yb ? 1.3 <= ka ? "gck190" : 1 <= ka ? "gck121" : "gck097" : "modern") + ".css";
  wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9) || wa(10);
  var ob, pb, bb, Hb = d.transform !== P ? "transform" : d["-o-transform"] !== P ? "-o-transform" : d["-ms-transform"] !== P ? "-ms-transform" : d.MozTransform !== P ? "-moz-transform" : d["-webkit-transform"] !== P ? "-webkit-transform" : "", ia = [], hb = [], la = [], qb, Ib, rb, R, Kb, S, Lb, Wa, ib, Mb;
  (function() {
    function r() {
      for (var c, g = 0, l = new ab() - 0; g < J.length;) {
        l < J[0].t ? ++g : (c = J.splice(g, 1)[0], c.f(c.p));
      }
      b = J.length ? Sa(r, k) : 0;
    }
    function H() {
      for (var c, g = 0; g < W.length; ++g) {
        c = W[g], c.f();
      }
    }
    function ma() {
      B && (B = clearInterval(B));
    }
    function fa() {
      b && (b = m(b));
    }
    S = function(c) {
      W.length || (B = setInterval(H, C));
      W.push({f:c, v:++O});
      return O;
    };
    Lb = function() {
      B && (ma(), B = setInterval(H, C));
    };
    Wa = ma;
    var W = [], C = 500, O = 0, B;
    if (5 > t || Ta) {
      A._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    R = function(c, g, l) {
      J.length || (b = Sa(r, k));
      J.push({f:c, p:g, v:++a, t:new ab() - 0 + (k < l ? l : k)});
      return a;
    };
    Kb = function(c) {
      for (var g = J.length, l; l = J[--g];) {
        if (l.v === c) {
          J.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    ib = function() {
      b && (fa(), b = Sa(r, k));
    };
    Mb = fa;
    var J = [], k = 16, a = 0, b;
    if (5 > t || Ta) {
      A._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var jb, Nb, Xa, Ab, eb, xa, kb, Ya, Pa, Ra, ya, Jb, lb, sb, tb, Ob, w, v, X, N, Bb;
  (function() {
    function r(a, b, c) {
      var g = ["<", a], l = 1, n, G;
      if (b) {
        for (n in b) {
          var K = b[n];
          if (null != K && "" !== K) {
            if ("style" === n) {
              g[++l] = ' style="';
              for (G in K) {
                for (var U = ++l, aa, Z = [], L = G.split(""), Y = L.length; Y;) {
                  aa = L[--Y], "A" <= aa && "Z" >= aa && (aa = "-" + aa.toLowerCase()), Z[Y] = aa;
                }
                g[U] = Z.join("") + ":" + K[G] + ";";
              }
              g[++l] = '"';
            } else {
              "className" === n && (n = "class"), g[++l] = " " + n + '="' + K + '"';
            }
          }
        }
      }
      g[++l] = ">";
      null != c && (B && "font" !== a ? g[++l] = "<FONT>" + c + "</FONT>" : g[++l] = c);
      g[++l] = "</" + a + ">";
      return g.join("");
    }
    function H(a) {
      a = "*" === a && 6 > t ? "*" !== a ? F.all.tags(a.toUpperCase()) : F.all : F.getElementsByTagName(a);
      var b = [], c = 0, g;
      for (g = a.length; c < g; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function ma(a) {
      return B ? a.parentElement : a.parentNode;
    }
    function fa(a, b, c, g, l, n) {
      if (B) {
        var G = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = Ab(2 > a ? Xa(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(G, r(c, g, l));
        return Ab(b)[K];
      }
      b = J ? F.createElement(r(c, g)) : n ? F.createElementNS("http://www.w3.org/2000/svg", c) : F.createElement(c);
      if (g && !J) {
        for (G in g) {
          if ((c = g[G]) || 0 === c) {
            switch(G) {
              case "class":
              case "className":
                Ob(b, c);
                break;
              case "style":
                a = b.style;
                for (K in c) {
                  a[K] = c[K];
                }
                break;
              default:
                sb(b, G, c);
            }
          }
        }
      }
      k || null != l && W(b, l);
      return b;
    }
    function W(a, b) {
      if (B) {
        return fa(2, a, "font", P, b);
      }
      var c = F.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function C(a, b) {
      9 > t ? a.className = b : a.setAttribute("class", b);
    }
    function O(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var B = 5 > t;
    ha = H("html")[0];
    gb = H("head")[0];
    jb = H;
    Nb = function(a) {
      var b = [], c = 0, g, l = -1;
      if (9 > t || !F.getElementsByClassName) {
        var n = 6 > t ? F.all : F.getElementsByTagName("*");
      } else {
        var G = !0;
        n = F.getElementsByClassName(a);
      }
      for (g = n.length; c < g; ++c) {
        var K = n[c];
        if (G || (B || 1 === K.nodeType) && O(K, a)) {
          b[++l] = K;
        }
      }
      return b;
    };
    Xa = ma;
    Ab = function(a) {
      a = B ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    eb = function(a) {
      var b = !(7.03 < V && 7.2 > V) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], g = a.length, l = -1, n; g;) {
        if (n = a[--g], b || 1 === n.nodeType) {
          B && "FONT" === n.tagName || (c[++l] = n);
        }
      }
      return c;
    };
    xa = function(a, b, c, g, l) {
      b = fa(2, a, b, c, g, l);
      B || (a.appendChild(b), k && null != g && W(b, g));
      return b;
    };
    kb = function(a, b, c, g, l) {
      b = fa(0, a, b, c, g, l);
      B || (ma(a).insertBefore(b, a), k && null != g && W(b, g));
      return b;
    };
    Ya = function(a, b, c, g, l) {
      b = fa(1, a, b, c, g, l);
      var n;
      B || ((n = a.nextSibling) ? Xa(n).insertBefore(b, n) : Xa(a).appendChild(b), k && null != g && W(b, g));
      return b;
    };
    Pa = W;
    Ra = function(a, b) {
      if (B) {
        return fa(0, a, "font", P, b);
      }
      var c = F.createTextNode("" + b);
      Xa(a).insertBefore(c, a);
      return c;
    };
    ya = function(a) {
      B ? a.outerHTML = "" : Xa(a).removeChild(a);
    };
    var J = 9 > t, k = 9 > t;
    Jb = function(a) {
      return a.tagName.toUpperCase();
    };
    lb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    sb = function(a, b, c) {
      a.setAttribute(b, c);
    };
    tb = function(a, b) {
      a.removeAttribute(b);
    };
    Ob = C;
    w = O;
    v = function(a, b) {
      var c;
      if (!O(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        C(a, c + b);
      }
    };
    X = function(a, b) {
      if (O(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        C(a, c.join(" "));
      }
    };
    N = function(a, b, c) {
      a.style[b] = c;
    };
    Bb = function(a, b) {
      var c = -1, g, l;
      if (5.5 > t) {
        if (b) {
          for (g = b.split(";"); l = g[++c];) {
            var n = l.split(":");
            a.style[n[0]] = l.substr(n[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > V || 1 > ka ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var cb, Ba, oa, pa, Cb, ra, La, sa, Ea, ub;
  (function() {
    function r() {
      return L ? u ? 2 : Y ? 3 : 1 : 0;
    }
    function H(e) {
      Ba(A, "load", H);
      H = P;
      fa(ia, e, !0);
      oa = ia = P;
    }
    function ma(e, f) {
      ra(function() {
        var D = k(e);
        f(D);
        D.addListener(f);
        return !0;
      });
    }
    function fa(e, f, D) {
      for (var q = 0; q < e.length; ++q) {
        !0 === e[q](f) && (e.splice(q, 1), --q);
      }
      D && (e.length = 0);
    }
    function W(e, f, D) {
      c && !b.length && R(C);
      b.push(e, f, D);
    }
    function C() {
      var e = b, f;
      for (b = []; f = e.shift();) {
        fa(f, e.shift(), e.shift());
      }
    }
    function O(e) {
      var f = e || event;
      e = g[f.type];
      var D = -1, q, y;
      t ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : n && (f.u = f.stopPropagation, f.stopPropagation = function() {
        y = !0;
      });
      for (; q = e[++D];) {
        q.l === this ? (this.g = q.j, this.g(f), this.g = x, this.g = P) : 7.2 > V && this === F && q.l === A && (A.g = q.j, A.g(f), delete A.g);
      }
      if (t) {
        return f.preventDefault = f.stopPropagation = P, f.returnValue;
      }
      n && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (K = !0), y && !K && f.u(), f.u = f.stopPropagation = P);
    }
    function B() {
      var e = 9 === a.offsetWidth;
      sa !== e && W(hb, sa = e);
    }
    function J(e) {
      ia || fa(da, e);
    }
    var k = A.matchMedia, a, b = [], c;
    ia.push(function() {
      ma = P;
      a = xa(qa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      oa(function() {
        c = !0;
        b.length && R(C);
      });
    });
    cb = function(e, f, D, q) {
      if (G) {
        e.addEventListener(f, D, q ? nb ? q : q.capture : !1);
      } else {
        var y = {l:e, j:D};
        q = g[f];
        var I = "on" + f, Ca, Ha;
        if (q) {
          for (Ca = q.length; Ha = q[--Ca];) {
            if (Ha.l === e && Ha.j === D) {
              return;
            }
          }
          g[f].push(y);
        } else {
          g[f] = q = [y], l || (f = e[I], "function" === typeof f && f !== O && q.unshift({l:e, j:f}));
        }
        l ? e.attachEvent(I, O) : e[I] = O;
      }
    };
    Ba = function(e, f, D, q) {
      if (G) {
        e.removeEventListener(f, D, q ? nb ? q : q.capture : !1);
      } else {
        q = g[f];
        f = "on" + f;
        var y, I, Ca;
        if (q) {
          for (y = q.length; I = q[--y];) {
            I.l === e && (I.j === D ? q.splice(y, 1) : Ca = !0);
          }
          Ca || (l ? e.detachEvent(f, O) : (e[f] = x, e[f] = null));
        }
      }
    };
    var g = {}, l = !1, n = 525.13 > Ga, G = !n && !Ta && A.addEventListener, K;
    n && ha.addEventListener("click", function(e) {
      if (K) {
        return K = !1, e.preventDefault(), !1;
      }
    });
    oa = function(e) {
      ia.push(e);
    };
    pa = function(e) {
      U && U.push(e);
    };
    var U = [];
    if (419.3 >= Ga) {
      var aa = function() {
        if (aa) {
          var e = F.readyState;
          "loaded" === e || "complete" === e ? (aa = P, H()) : R(aa);
        }
      };
      R(aa);
    } else {
      cb(A, "load", H);
    }
    t || 1.8 > ka ? cb(A, "unload", function(e) {
      fa(U, e, !0);
    }) : U = P;
    ra = function(e) {
      hb.push(e);
    };
    oa(function() {
      B();
      S(B);
    });
    La = function(e) {
      la && la.push(e);
    };
    var Z = 60 > ka || zb, L, Y, u;
    if (89 <= ka || 89 <= Aa || Va && 79 <= Gb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      ub = !0, ma("(forced-colors:active)", function(e) {
        L = e.matches;
        Ea = r();
        W(la, Ea);
      });
    } else if (10 <= t || Fa || Va && Gb) {
      ub = !0, ma("(-ms-high-contrast:black-on-white)", function(e) {
        L = Y = e.matches;
        Ea !== r() && (Ea = r(), W(la, Ea));
      }), ma("(-ms-high-contrast:white-on-black)", function(e) {
        L = u = e.matches;
        Ea !== r() && (Ea = r(), W(la, Ea));
      }), ma("(-ms-high-contrast:active)", function(e) {
        L = e.matches;
        Ea !== r() && (Ea = r(), W(la, Ea));
      });
    } else if (Va && (t || ka && 0 <= p.conpare(Q, "1.8.1") || zb)) {
      var z = function() {
        function e(q, y) {
          if (y && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var I = q.split("(")[1].split(",");
          return T(I[0]) + T(I[1]) + T(I[2]);
        }
        var f = F.defaultView;
        var D = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (D && D.color || "").split(" ").join("");
        D = (D && D.backgroundColor || "").split(" ").join("");
        f && (L = "#123456" !== f && "rgb(18,52,86)" !== f, Y = e(f) < e(D, !0), u = e(f) > e(D, !0), Ea !== r() && (Ea = r(), W(la, Ea, Z)));
      };
      ra(function(e) {
        if (e) {
          return N(a, "color", "#123456"), N(a, "backgroundColor", "#123456"), Z ? (z(), la = P) : S(z), z = P, !0;
        }
      });
    } else {
      la = r = P;
    }
    Cb = function(e) {
      da.push(e);
    };
    var da = [], Ia = 0, Da = 1 > ka || 1.2 <= ka && 1.8 > ka || 7.2 >= V;
    Da ? S(function() {
      var e = A.scrollY || qa.scrollTop;
      Ia !== e && (Ia = e, J());
    }) : cb(A, "scroll", J);
    pa(function() {
      Da || Ba(A, "scroll", J);
    });
  })();
  var E = 9 > t || 525 <= Ga && 530 > Ga || 2 > Aa, na = 0, ca, Ka, Oa;
  (function() {
    function r(k) {
      for (var a = fa.length, b; a;) {
        if (b = fa[--a], b.D === k) {
          return b;
        }
      }
    }
    function H() {
      var k = F.styleSheets, a = [], b = 0, c = -1, g;
      if (k) {
        for (g = k.length; b < g; ++b) {
          if (2 > Aa || Va && 526 > Ga) {
            var l = ma(k[b]);
            l.parentNode && (a[b] = l);
          } else {
            a[b] = ma(k[b]);
          }
        }
      } else {
        for (k = jb("*"), g = k.length; b < g; ++b) {
          l = k[b];
          var n = Jb(l);
          if ("STYLE" === n || "LINK" === n && "text/css" === lb(l, "type")) {
            a[++c] = l;
          }
        }
      }
      return a;
    }
    function ma(k) {
      return k.owningElement || k.ownerNode;
    }
    ca = function(k, a) {
      var b = H(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var g = b[c - 1];
      b = b[c];
      if (O || B) {
        var l = b ? kb(b, "style") : g ? Ya(g, "style") : xa(gb, "style");
        B && Pa(l, "");
        var n = l.styleSheet || l.sheet;
        k && sb(l, "media", k);
      } else if (W || C) {
        n = {C:k, B:c, G:!0};
      }
      if (n) {
        return fa.push({D:n, h:l, m:[]}), n;
      }
    };
    Ka = function(k) {
      k = r(k);
      var a = k.m, b = a.length, c;
      for (k.h && ya(k.h); c = a[--b];) {
        c.i && ya(c.i);
      }
      fa.splice(fa.indexOf(k), 1);
    };
    Oa = function(k, a, b, c) {
      var g = r(k), l = g.h;
      g = g.m;
      var n = "@import" === a, G = "@page" === a, K = "@font-face" === a, U = g.length, aa = "", Z;
      if (k.imports) {
        var L = k.imports.length;
      } else {
        for (L = 0; L < U && "@import" === g[L].A; ++L) {
        }
      }
      if (n) {
        c = 0 <= c && c < L ? c : L;
        var Y = a + ' "' + b + '"';
      } else {
        c = L <= c && c < U ? c : U;
        for (Y in b) {
          aa += ";" + Y + ":" + b[Y];
        }
        aa = aa.substr(1);
        Y = a + "{" + aa + "}";
        6 <= t && K && (c = U);
      }
      U = {A:a, F:b, s:c, o:c};
      if (9 > t) {
        L = k.rules;
        var u = L.length;
        if (K) {
          a = F.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + Y + "</style>", a = a.lastChild, (Z = l.nextSibling) ? Xa(l).insertBefore(a, Z) : Xa(l).appendChild(a), U.i = a;
        } else {
          if (n ? k.addImport(b, c) : 5.5 <= t && G || k.addRule(a, aa, c), U.o = c + (L.length - u - 1), 0 === L.length - u) {
            return -1;
          }
        }
      } else if (O || B) {
        (Va && Ga || 28 > Aa) && n ? U.i = Ya(l, "link", {href:b, rel:"stylesheet", type:"text/css"}) : E && K ? (a = U.i = Ya(l, "style", {type:"text/css", media:k.media}), a.innerText = Y) : k.insertRule(Y, c);
      }
      g.splice(c, 0, U);
      if (W || C) {
        l = r(k);
        Z = l.m;
        a = l.h;
        b = k.B;
        n = H();
        k = n[b - 1];
        b = n[b];
        n = [];
        K = G = -1;
        aa = "style";
        U = {type:"text/css", media:l.C};
        for (var z; L = Z[++G];) {
          if (Y = L.A, L = L.F, "@import" === Y) {
            n[++K] = Y + ' "' + L + '"';
          } else {
            n[++K] = Y + "{";
            Y = "";
            for (z in L) {
              Y += ";" + z + ":" + L[z];
            }
            n[++K] = Y.substr(1) + "}";
          }
        }
        n = n.join("");
        W && (n = "data:text/css;charset=utf-8;base64," + J(n), U.rel = "stylesheet", U.href = n, aa = "link", n = P);
        a ? (l.h = Ya(a, aa, U, n), ya(a)) : (a = b ? kb(b, aa, U, n) : k ? Ya(k, aa, U, n) : xa(gb, aa, U, n), l.h = a);
      }
      z = c;
      k = g.length;
      for (l = z; l < k; ++l) {
        Z = g[l], Z.i || (a = Z.o - Z.s, Z.s = z, Z.o = z + a, z += 1 + a);
      }
      return c;
    };
    var fa = [], W = 1 > ka || 8 <= V && 9 > V, C = 7.2 <= V && 8 > V, O = !!t || !W && !C && function() {
      var k = xa(ha, "style"), a = !(!k.styleSheet && !k.sheet);
      ya(k);
      return a;
    }(), B = !O && Ga && !W && !C && function() {
      var k = xa(ha, "style");
      Pa(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      ya(k);
      return a;
    }();
    na = W || C ? 1 : O || B ? 2 : 0;
    var J;
    (function(k) {
      function a(c) {
        for (var g = b, l = "", n = 0, G; G = c.length;) {
          4 > G && (n = [0, 2, 1, 0][G]), G = c.charCodeAt(0) << 16 | (1 < G ? c.charCodeAt(1) : 0) << 8 | (2 < G ? c.charCodeAt(2) : 0), l += [g[G >>> 18], g[G >>> 12 & 63], 2 <= n ? "=" : g[G >>> 6 & 63], 1 <= n ? "=" : g[G & 63]].join(""), c = c.substr(3);
        }
        return l;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      k.btoa && (a = k.btoa);
      J = a;
    })(this);
  })();
  (function() {
    function r() {
      if (525 > Ga || ka && !yb || 2.2 > h(21) || h(25) || 10 > h(3) || wa(32) || wa(30) || wa(1) || wa(2) || wa(3)) {
        return !1;
      }
      if (E) {
        return !0;
      }
      if (2 === na) {
        var C = ca();
        var O = Oa(C, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        O = C.cssText || C.cssRules && C.cssRules[O] && C.cssRules[O].cssText || "";
        O = O.match("src") && O.match("@font-face");
        Ka(C);
      }
      r = P;
      return W = !!O;
    }
    hb.splice(0, 0, function() {
      if (sa) {
        bb = 8 <= t || Fa || 9.5 <= V || yb || zb || 522 <= Ga || 3 <= Ua || Fb || Qb ? 3 : 7.2 <= V ? 2 : 6 <= V || ka ? 1 : 0;
        if (!bb && !t && !Ta) {
          var C = xa(qa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          bb = 6 <= C.offsetWidth ? 2 : 0;
          ya(C);
        }
        return !0;
      }
    });
    qb = function(C) {
      function O(k) {
        J = Kb(J);
        H = k;
        B.onload = B.onerror = x;
        R(C, k);
      }
      if (H !== P) {
        R(C, H);
      } else if (8 > t) {
        R(C, !1);
      } else {
        var B = new Image(), J = R(function() {
          J && O(!1);
        });
        B.onerror = function() {
          O(!1);
        };
        B.onload = function() {
          O(1 === B.width * B.height);
        };
        B.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var H;
    9 > t && oa(function() {
      var C = xa(qa, "div");
      Bb(C, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ob = 1 < C.offsetHeight;
      Bb(C, "");
      ya(C);
    });
    Ib = function(C, O) {
      function B() {
        if (k || !a || J.complete) {
          var b = !!J.width;
          pb = pb || b;
          R(C, b);
          J.onerror = J.onload = x;
          J = C = P;
        } else {
          --a, R(B);
        }
      }
      var J = new Image(), k, a = 99;
      J.onerror = function() {
        k = !0;
      };
      J.onload = function() {
        k = !0;
      };
      J.src = O;
      R(B);
    };
    var ma = 9 > t || 2 > Aa || 12 > V, fa = ["sans-serif", "serif"], W;
    rb = function(C, O, B, J, k, a, b) {
      function c(e) {
        C(e);
        Da && !e && Ka(Da);
        C = u = z = da = Da = P;
      }
      function g() {
        F.fonts.load('1.6em "' + O + '"').then(function() {
          G(O) ? R(c, Ia) : n(!0);
        }, function() {
          qb(K);
        });
      }
      function l(e) {
        return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (L = new ab() - 0, !1) : e < new ab() - L;
      }
      function n(e) {
        e && (L = new ab() - 0);
        G(O) ? c(Ia) : l(Z) ? Y ? c(0) : ma ? R(c, 0) : qb(K) : R(n);
      }
      function G(e) {
        var f = 0, D = -1, q = 0;
        if (!da) {
          var y = -1;
          var I;
          u = xa(qa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (da = {}; I = fa[++y];) {
            N(u, "fontFamily", I), da[I] = u.offsetWidth;
          }
        }
        for (5 > t ? u || (u = xa(qa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : qa.appendChild(u); y = fa[++D];) {
          if (N(u, "fontFamily", '"' + e + '",' + y), u.offsetWidth !== da[y]) {
            f = 1;
            break;
          }
        }
        !t && f && k && (u.innerHTML = k, e = u.offsetWidth, u.innerHTML = a, q = e === u.offsetWidth ? 1 : 0, u.innerHTML = "mmmmmmmmmmlli");
        ya(u);
        5 > t && (u = P);
        return Ia = f + q;
      }
      function K(e) {
        (Y = e) ? U(!0) : c(0);
      }
      function U(e) {
        var f;
        e && (L = new ab() - 0);
        for (f in B) {
          G(f) ? (z = xa(qa, "div", {"aria-hidden":"true", className:J, id:J}), Da = ca(), Oa(Da, "@import", B[f]), R(aa, !0)) : l(100) ? (delete B[f], R(U, !0)) : R(U);
          return;
        }
        c(0);
      }
      function aa(e) {
        e && (L = new ab() - 0);
        1 < z.offsetWidth ? (ya(z), Z = 100, R(n, !0)) : l(Z) ? 528 > Ga ? (ya(z), Z = 100, R(n, !0)) : (ya(z), c(0)) : R(aa);
      }
      var Z = b || 5000, L, Y, u, z, da, Ia, Da;
      r || W ? W || r() ? !F.fonts || 603 > Ga ? n(!0) : g() : R(c, 0) : R(c, 0);
    };
  })();
  var Ma = String.fromCharCode, vb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Ma(960), ")", "(", Ma(234), Ma(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Ma(9824), "\u2190", Ma(9829), Ma(9830), Ma(9827), Ma(956), "\u03a9", "\u2193", "\u2192", "%", Ma(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Ma(9619)], Db = [], mb, Pb, Rb = 7.2 > V ? function() {
    mb = !mb;
    for (var r = -1, H; H = Db[++r];) {
      -1 !== H.className.indexOf("pbAlp") ? N(H, "display", mb ? "" : "none") : (v(H, mb ? "pbChrCS" : "pbChr00"), X(H, mb ? "pbChr00" : "pbChrCS"));
    }
  } : 9 === t ? function() {
    mb = !mb;
    for (var r = -1, H; H = Db[++r];) {
      N(H, "visibility", mb ? "visibility" : "hidden");
    }
  } : P;
  var Sb = function(r) {
    Rb ? w(r, "pbChrCS") && (Db.length || t || setInterval(Rb, 400), -1 === Db.indexOf(r) && Db.push(r)) : Db = P;
  };
  9 === t && La(function(r) {
    r ? Pb || (Pb = setInterval(Rb, 400)) : (clearInterval(Pb), Pb = 0);
  });
  ub || La(function(r) {
    r ? (sb(qa, "forced-colors", 2 === r ? "lod" : 3 === r ? "dol" : "active"), (Hb || 9 === t || 5.5 <= t && 9 > t && ob) && v(qa, "jsCanRotate")) : (tb(qa, "forced-colors"), X(qa, "jsCanRotate"));
  });
  (function() {
    function r(u) {
      (K = u) ? W() : pb ? fa(!0) : pb !== P ? W() : Ib(fa, U);
    }
    function H() {
      H = P;
      rb(r, "PB-100", {"PB-100_canTTF":Za + "pbFont/ttf.css", "PB-100_canWOFF":Za + "pbFont/woff.css", "PB-100_canEOT":Za + "pbFont/eot.css", "PB-100_canSVG":Za + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function ma(u) {
      this.focus();
      u.preventDefault();
      u.stopPropagation();
    }
    function fa(u) {
      u && (v(qa, "pbList-noWebFont"), na && (2 <= bb ? Oa(ca(), ".pbList font:after", {content:"url(" + U + ")"}) : Oa(ca(), ".pbList font", {"background-image":"url(" + U + ")"})));
      W();
    }
    function W() {
      for (r = rb = P; G.length;) {
        C(G.shift(), G.shift());
      }
    }
    function C(u, z) {
      function da(q) {
        q = Ab(q);
        for (var y = -1, I; I = q[++y];) {
          switch(I.nodeType) {
            case 1:
              da(I);
              break;
            case 3:
              I.data && Da(I.data) && e.push(I);
          }
        }
      }
      function Ia(q) {
        var y = q.children, I = 0, Ca = y.length;
        if (Ca) {
          for (; I < Ca; ++I) {
            Ia(y[I]);
          }
        } else {
          (y = q.innerText) && Da(y) && e.push(q);
        }
      }
      function Da(q) {
        return q.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var e = [], f;
      if (r) {
        -1 === G.indexOf(u) && (G.push(u, z), aa && H && H());
      } else {
        var D = G.indexOf(u);
        0 <= D && G.splice(D, 2);
        for (5 > t ? Ia(u) : da(u); f = e.shift();) {
          D = 5 > t ? f.innerText : f.data, 2 !== K && (D = D.split(b).join(k)), z ? 5 > t ? f.innerText = D : f.data = D : O(D.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(J).split("&amp;").join("&"), f);
        }
      }
    }
    function O(u, z) {
      function da(ta, va) {
        for (var wb = ""; va;) {
          va & 1 && (wb += ta), va >>= 1, ta += ta;
        }
        return wb;
      }
      function Ia(ta, va, wb) {
        for (var Tb, Wb = -1, Ub, Vb; Tb = va[++Wb];) {
          for (; 0 <= (Ub = ta.indexOf(Tb));) {
            Vb = Tb.length, ta = ta.substr(0, Ub) + da(wb, Vb) + ta.substr(Ub + Vb);
          }
        }
        return ta;
      }
      function Da(ta) {
        var va = T(ta), wb = "" + va;
        return 0 < va && va === va | 0 && (va = ta.indexOf(wb) + wb.length, va <= ta.length) ? va : 0;
      }
      var e = " area line str cmd fnc syb".split(" "), f = 5 > t || 1 === z.nodeType, D = [], q = "", y, I = -1, Ca, Ha, $a;
      if (f) {
        if (L) {
          var za = z.style.visibility;
          N(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (Y) {
        var Na = z;
        z = F.createDocumentFragment();
      }
      if (function(ta) {
        var va = ta.indexOf("P");
        if (-1 === va) {
          return !1;
        }
        va = T(ta.charAt(va + 1));
        return 0 <= va && 9 >= va;
      }(u)) {
        q = da("+", u.length);
      } else {
        0 <= (y = Da(u)) && (q = da("|", y), I = y, --I);
        for (; y = u.charAt(++I);) {
          y === J || Ca ? (q += "~", y === J && (Ca = !Ca)) : q += y;
        }
        q = Ia(q, n, "^");
        q = Ia(q, g, "{");
        q = Ia(q, l, "}");
      }
      I = 0;
      for (Ca = u.length; I < Ca; ++I) {
        y = u.charAt(I);
        var M = y === c;
        var Qa = " " === y;
        y = M ? " " : y;
        var ea = q.charAt(I);
        var fb = (Ha = xb) && M;
        var xb = "|" === ea;
        ea = e["+|~{}^".indexOf(ea) + 1];
        "\n" !== y ? (K || !pb ? (2 === K && u.substr(I, 2) === b && (y = b, ++I), ea = Qa && "str" === ea ? "pbList-strsp" : M ? "" : !Qa && ea ? "pbList-" + ea : "") : (M = vb.indexOf(y), M = -1 === M ? "" : vb.indexOf(y).toString(16).toUpperCase(), M = (M = 1 === M.length ? "0" + M : M) ? "pbChr" + M : "", ea = Qa && "str" === ea ? "pbList-strsp" : Qa || !M ? "" : ea ? (M ? M + " " : "") + "pbList-" + ea : M), M = P, fb ? (y = 6 <= t && 8 > t ? " " : c, ea = "") : xb && (1.9 > ka || 9.5 > V) ? 
        (xb && !Ha && ($a = 4 - (T(u.substr(I)) + "").length), 7.5 > V ? M = Z ? "position:relative;top:-4px;left:" + 12 * $a + "px" : {position:"relative", top:"-4px", left:12 * $a + "px"} : 1.3 <= ka ? (M = Z ? "position:absolute;left:" + 12 * $a + "px" : {position:"absolute", left:12 * $a + "px"}, ++$a) : M = Z ? "position:relative;left:" + 12 * $a + "px" : {position:"relative", left:12 * $a + "px"}) : Qa && 7.5 > V && (ea = "pbList-strsp"), Z ? D.push("<font" + (ea ? ' class="' + ea + '"' : "") + 
        (M ? ' style="' + M + '"' : "") + ">" + y + "</font>") : f || Y ? xa(z, "font", {"class":ea, style:M}, y) : kb(z, "font", {"class":ea, style:M}, y)) : (Ha = xb = !1, Z ? D.push(y) : f || Y ? Pa(z, y) : Ra(z, y));
      }
      if (f) {
        Z ? z.innerHTML = D.join("") : Y && Na.appendChild(z), L && N(z, "visibility", za);
      } else {
        if (Z) {
          e = F.createElement("font");
          for (e.innerHTML = D.join(""); D = e.firstChild;) {
            z.parentNode.insertBefore(D, z);
          }
          ya(z);
        } else {
          Y ? Na.parentNode.replaceChild(z, Na) : ya(z);
        }
      }
    }
    ra(function(u) {
      if (u) {
        u = Nb("pbChrCS");
        for (var z = 0, da = u.length; z < da; ++z) {
          Sb(u[z]);
        }
        return !0;
      }
    });
    var B = [];
    ra(function(u) {
      function z(za) {
        var Na = lb(za, "pbTip"), M = Na.charAt(0), Qa = "_" === M;
        Na = Qa ? Na.charAt(2) : M;
        M = Qa ? "Btm" : "";
        var ea = lb(za, "title");
        Da || (tb(za, "pbTip"), tb(za, "title"), v(za, "pbTipPos" + Na.toUpperCase()), xa(za, "div", {className:"pbTip" + M, style:{width:ea.length + Ia + "em"}}, ea));
        xa(za, "div", {className:"pbTail" + M});
        e && Qa && (za.focus(), za.blur());
      }
      function da(za) {
        if (2 > bb) {
          var Na = lb(za, "pbGhst"), M = za.className, Qa = M.split("pbCsr")[1] || "", ea = M.split("pbAlp")[1] || "";
          if ("CS" === Na) {
            var fb = "_";
          } else {
            fb = Na, 3 === fb.length && (fb = fb.substr(0, 2)), fb = vb[parseInt(fb, 16)] || "~";
          }
          var xb;
          Qa = Qa.split(" ")[0];
          ea = T(ea.split(" ")[0]);
          var ta = 10 - ea;
          ea && 7.2 > V && (M = M.split("pbChr")[1], M = M.split(" ")[0], N(za, "backgroundPosition", Eb(M, 2, I) + "px " + -24 * (10 - ea) + "px"));
          Na && (7.2 > V && (xb = {backgroundPosition:Eb(Na, 2, I) + "px " + -24 * (10 - ta) + "px"}), tb(za, "pbGhst"), D = kb(za, "b", {className:"pbChr" + Na + " pbAlp" + ta + " pbCsr" + Qa, style:xb}, fb), Sb(D));
          Sb(za);
        }
      }
      if (u) {
        var Ia = 6 > t ? 2 : 0;
        u = jb("SAMP");
        var Da = 8 === t, e = 5 <= t && 6 > t, f, D, q, y;
        ob && v(qa, "pbLCD-AX");
        if (u.length) {
          for (q = -1; f = u[++q];) {
            if (w(Xa(f), "pbLCD")) {
              var I = w(f, "PB-120") || w(f, "FX-795P");
              var Ca = eb(f);
              for (f = Ca.length; f;) {
                var Ha = Ca[--f];
                switch(Jb(Ha)) {
                  case "A":
                    (2 > bb || Da) && z(Ha);
                    if (2 > bb) {
                      var $a = eb(Ha);
                      for (y = $a.length; y;) {
                        !Da && da($a[--y]);
                      }
                    }
                    Fb ? sb(Ha, "href", "javascript:void(0)") : (cb(Ha, "click", ma), B.push(Ha));
                    break;
                  case "B":
                    2 > bb && da(Ha);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    pa(function(u) {
      for (; u = B.shift();) {
        Ba(u, "click", ma);
      }
    });
    6 === t && (new Ja("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var J = vb[7], k = vb[30], a = vb[113], b = Ma(8337) + Ma(8331), c = Ma(160);
    Ma(8194);
    var g = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), n = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + vb[31]).split(""), G = [], K, U, aa;
    ra(function(u) {
      if (u) {
        U = Za + "pbFont/x3mask.png";
        u = jb("*");
        for (var z = -1, da; da = u[++z];) {
          w(da, "pbList") ? C(da) : w(da, "pbFont") && C(da, !0);
        }
        G.length && H();
        return !0;
      }
    });
    ka && p.conpare(Q, "0.9.6");
    var Z = !1, L = 8 > V, Y = !Z && !L && !(6 > t) && F.createDocumentFragment && !!qa.replaceChild;
    ba.prettify = C;
  })();
  d = F.scripts || jb("script");
  var Za = d[d.length - 1].src.split("/");
  --Za.length;
  (Za = Za.join("/")) && (Za += "/");
  6.1 > Ua && Cb(Lb);
  pa(Wa);
  6.1 > Ua && Cb(ib);
  pa(Mb);
  10 > t && (11 !== ja || 5 !== t) || (9 > V || 1 > ka || !Ta && !A.addEventListener ? F.write('<link href="' + Za + db + '" rel="stylesheet"' + (8 > V ? "" : ' media="screen,handheld,projection,print"') + ">") : oa(function() {
    xa(gb, "link", {href:Za + "" + db, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

