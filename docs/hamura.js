PB100={};ua = [];
ua.conpare = function(ba, p) {
  var B = 0, w, F, la = (ba + "").split("."), Y = (p + "").split("."), Ka = la.length;
  for (w = Y.length; "0" === la[Ka - 1];) {
    --Ka;
  }
  for (; "0" === Y[w - 1];) {
    --w;
  }
  for (F = Ka < w ? Ka : w; B < F; ++B) {
    var Xa = la[B] - 0, l = Y[B] - 0;
    if (Xa !== l) {
      return Xa > l ? 1 : -1;
    }
  }
  return Ka > w ? 1 : Ka === w ? 0 : -1;
};
(function(ba, p, B, w, F, la, Y, Ka) {
  function Xa(E, pa, ja) {
    ja = la(E.split(pa)[1]);
    return 0 <= ja ? ja : 0;
  }
  function l(E, pa) {
    return 0 <= E.indexOf(pa);
  }
  function cb(E) {
    return l(E, "Linux armv") || l(E, "Linux aarch") || l(E, "Linux i686") || l(E, "Linux x86_64");
  }
  function R(E, pa) {
    for (var ja in pa) {
      if (ja === E) {
        return !0;
      }
    }
  }
  function r(E, pa) {
    var ja = "", Ea = -1, Ya;
    if (E = E.split(pa)[1]) {
      for (; Ya = E.charCodeAt(++Ea);) {
        if (48 <= Ya && 57 >= Ya || 46 === Ya) {
          ja += E.charAt(Ea);
        } else {
          break;
        }
      }
      for (Ea = ja.length; Ea;) {
        if (46 === ja.charCodeAt(--Ea)) {
          ja = ja.substr(0, Ea);
        } else {
          break;
        }
      }
    }
    return ja;
  }
  function da(E) {
    for (var pa = arguments, ja = 1, Ea = pa[0], Ya; ja < pa.length; ++ja) {
      0 > vb(Ea, Ya = pa[ja]) && (Ea = Ya);
    }
    return Ea;
  }
  function sa(E) {
    return E === E + "" ? E : E === E - 0 ? "" + E : E.min && E.max ? E.min + "~" + E.max : E.min ? E.min + "~" : "~" + E.max;
  }
  var vb = ba.conpare, d = w.userAgent, H = w.appVersion, Sa = la(H) || 0, X = w.platform, Ta = B.documentElement, db = Ta && Ta.style, q = B.documentMode, Ua = F.width;
  F = F.height;
  var Gb = p.HTMLAudioElement, U = p.performance, ma = p.Int8Array, mb = p.ontouchstart !== Ka, Za = r(H, "Version/") || r(d, "Version/"), La = p.operamini, Qa = !La && p.opera, Mb = Qa && (Qa.version && "function" === typeof Qa.version ? Qa.version() : da(r(d, "Opera "), Za, Sa)), eb = p.opr, nb = !Qa && (B.all || q);
  q = nb && (q ? q : p.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4);
  Ta = !nb && Ta.msContentZoomFactor;
  var ob = !Ta && (p.chrome || p.chromium), Va = !nb && function() {
    for (var E in db) {
      if (0 === E.indexOf("Moz")) {
        return !0;
      }
    }
  }(), wb = l(d, "UCWEB"), Nb = wb && r(d, " U2/"), Hb = wb && r(d, "; wds "), hb = r(d.split("_").join("."), "; iPh OS "), ea = r(d, "; Adr "), xb = l(H, "YJApp-ANDROID"), ta = l(X, "Android") || Va && l(H, "Android") || xb;
  ea = r(X, "Android ") || r(H, "Android ") || r(d, "Android ") || ea;
  var pb = l(X, "Linux"), yb = "MacIntel" === X && w.standalone !== Ka, zb = Va && r(d, "Goanna/"), Ma = !zb && Va && (r(d, "rv:") || r(d.substr(d.indexOf(") Gecko/") - 11), "; ")), ha = r(d, "Firefox/"), V = r(d, "Opera/"), Ab = p.FNRBrowser, $a = Xa(d, "AppleWebKit/"), jb = r(d, "Chrome/"), Ob = r(H, "Iron/"), Ib = r(d, "OPR/"), qb = r(H, "KHTML/"), Pb = r(d.toLowerCase(), "iris");
  r(d, "FxiOS/");
  r(d, "CriOS/");
  r(d, "EdgiOS/");
  var ab = r(d, "Silk/"), fb = Xa(d, "SamsungBrowser/"), Bb = !fb && function() {
    for (var E = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    pa, ja = E.length; pa = E[--ja];) {
      if (l(d, pa)) {
        return 2 > la(Za) ? Za : 0.9;
      }
    }
    E = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ja = E.length; pa = E[--ja];) {
      if (l(d, pa)) {
        return Za;
      }
    }
  }(), va = ob && 534.3 >= $a, gb = cb(X), Ha = gb && !l(d, X) && cb(d);
  mb = mb && ($a || Va) && Ha || !ea && xb;
  xb = !!p.ReactNativeWebView;
  gb = gb && function() {
    for (var E in p) {
      if (0 === E.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Na = (Ha = p.puffinDevice) && Ha.clientInfo;
  Na = (Ha = Na && "iOS" === Na.os && Na.osVersion) && Na.model;
  var Cb = !q && B.registerElement, Fa = !q && B.execCommand, Db = p.webkitCancelAnimationFrame, rb = pb && Cb && "11.0.696.34" === jb, Eb = p._firefoxTV_playbackStateObserverJava, Fb = Xa(d, "diordnA ");
  if ("Nitro" === X) {
    var y = 1;
  } else if ("Nintendo DSi" === X) {
    y = 2;
    var u = V;
  } else if ("New Nintendo 3DS" === X || l(d, "iPhone OS 6_0") && 320 === Ua && 240 === F) {
    y = 4, u = r(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === X) {
    y = 3, u = r(d, "Version/"), $a = 535;
  } else if ("Nintendo Swicth" === X) {
    y = 7, u = r(H, "NintendoBrowser/");
  } else if (p.wiiu) {
    y = 6;
    u = r(H, "NintendoBrowser/");
    var M = 15, S = r(H, "AppleWebKit/") || (Db ? 536 : 534);
    u || (u = Db ? 4 : 2, l(H, "Macintosh;") || l(H, "Windows NT") && l(H, "Touch"));
  } else if (Qa && Qa.wiiremote) {
    y = 5, u = r(d, "Wii; U; ; ");
  } else if (V = r(d, "PlayStation Vita ")) {
    y = 10, u = V;
  } else if (V = r(d, "(PlayStation Portable); ")) {
    y = 8;
    u = V;
    var Wa = 3.3;
  } else if (V = r(d, "PLAYSTATION 3; ") || r(d, "PLAYSTATION 3 ")) {
    y = 11, u = V, 0 > vb("4.10", V) && (M = 26, S = V);
  } else if (l(d, "Xbox One")) {
    y = 15, u = 1;
  } else if (l(d, "Xbox")) {
    y = 14, u = 1;
  } else if (2 === Sa && l(d, "Sony/COM2/")) {
    y = 17;
    u = 2;
    Wa = 3.4;
    var kb = !0;
  } else if (0 === X.indexOf("iP") || hb || Ha || yb) {
    if (Ha) {
      switch(u = Ha, Na.substr(0, 4)) {
        case "iPho":
          var wa = 0;
          r(Na, wa);
          var xa = !0;
          break;
        case "iPad":
          wa = 1;
          r(Na, wa);
          var oa = !0;
          break;
        case "iPod":
          wa = 2;
          r(Na, wa);
          var lb = !0;
      }
    } else {
      hb ? u = hb : (u = r(H.split("_").join("."), "OS "), R("isSecureContext", p), R("enableWebGL", p), R("sameOrigin", p));
      if (!u || Ab) {
        u = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : Y.isNaN ? 9.2 : p.SharedWorker ? U && U.now ? 8.0 : 8.4 : Fa ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : ma ? 4.3 : Gb ? 4.1 : 3.2;
      }
      var Ga = Ua === 1.5 * F || 1.5 * Ua === F;
      0 === X.indexOf("iPhone") ? (wa = 0, xa = !0) : 0 === X.indexOf("iPad") || yb ? (wa = 1, oa = !0) : 0 === X.indexOf("iPod") && (wa = 2, lb = !0);
    }
    M = !Ha && (w.standalone || (oa || 12 > u) && R("webkitFullscreenEnabled", B) || 11 <= u && 13 > u && w.mediaDevices) ? 16 : 17;
    y = 24;
    S = u;
  } else if (l(d, "Kobo")) {
    y = 18, M = 21, S = 2.2, ta = !0;
  } else if (l(d, "EBRD")) {
    y = 19, M = 21, S = 2.2;
  } else if (V = r(d, "CrOS x86_64 ") || r(d, "CrOS aarch64 ") || r(d, "CrOS i686 ") || r(d, "CrOS armv7l ")) {
    y = 28, u = V;
  } else if (p.onmoztimechange !== Ka) {
    y = 29, u = 18.1 > Ma ? "1.0.1" : 19 > Ma ? 1.1 : 27 > Ma ? 1.2 : 29 > Ma ? 1.3 : 31 > Ma ? 1.4 : 33 > Ma ? 2.0 : 35 > Ma ? 2.1 : 38 > Ma ? 2.2 : 45 > Ma ? 2.5 : 2.6, l(d, "Mobile") ? xa = !0 : l(d, "Tablet") ? oa = !0 : l(d, "TV");
  } else if (p.palmGetResource) {
    y = 30, u = r(d, "webOS/") || r(d, "WEBOS") || r(d, "hpwOS/"), l(d, "webOS.TV") || l(d, "/SmartTV") || (xa = !0);
  } else if (V = r(d, "Tizen ")) {
    y = 31, u = V, M = 24, S = fb, xa = !0;
  } else if (V = r(d, "Windows Phone ") || r(H, "Windows Phone OS ") || Hb) {
    y = 23, u = V, xa = !0;
  } else if (Ta && "ARM" === X) {
    y = 23, u = 10, xa = !0;
  } else if (nb && l(H, "ZuneWP")) {
    y = 23, u = 11 === q ? 8.1 : 10 === q ? 8 : 9 === q ? 7.5 : 7 === q ? 7 : "?", xa = !0;
  } else if (l(d, "FOMA;")) {
    y = 16, xa = !0;
  } else if (l(d, "SoftBank;")) {
    y = 16, xa = !0;
  } else if (l(d, "KFMUWI")) {
    var Ba = !0;
    u = 6.3;
    var ya = oa = !0;
  } else if (l(d, "KFKAWI")) {
    Ba = !0, u = 6, ya = oa = !0;
  } else if (l(d, "KFSUWI") || l(d, "KFAUWI") || l(d, "KFDOWI")) {
    Ba = !0, u = 5, ya = oa = !0;
  } else if (l(d, "KFGIWI")) {
    Ba = !0, u = 5, ya = oa = !0;
  } else if (l(d, "KFARWI") || l(d, "KFSAWA") || l(d, "KFSAWI")) {
    Ba = !0, u = 5 <= la(ea) ? 5 : 4, ya = oa = !0;
  } else if (l(d, "KFSOWI") || l(d, "KFTHWA") || l(d, "KFTHWI") || l(d, "KFAPWA") || l(d, "KFAPWI")) {
    Ba = !0, u = 3, ya = oa = !0;
  } else if (l(d, "KFOT") || l(d, "KFTT") || l(d, "KFJWA") || l(d, "KFJWI")) {
    Ba = !0, u = 2, ya = oa = !0;
  } else if (l(d, "Kindle Fire")) {
    Ba = !0, u = 1, ya = oa = !0;
  } else if (V = r(d, "Kindle/")) {
    y = 20, u = V, M = 21, S = 2.2;
  } else if (Eb) {
    Ba = !0, u = ea || Fb, ya = !0;
  } else if (l(d, "AmazonWebAppPlatform") || l(d, "; AFT")) {
    Ba = !0, u = ea, ya = !0;
  } else if (l(d, "MeeGo")) {
    y = 32;
  } else if (l(d, "Maemo")) {
    y = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Pb) {
    y = 22, kb = !0;
  } else if ("WinCE" === X) {
    y = 21, kb = !0;
  } else if (0 === X.indexOf("Win")) {
    y = "Win16" === X ? 35 : "Win32" === X ? 36 : "Win64" === X ? 37 : 0, u = r(d, "Windows NT ") || r(d, "Windows ");
  } else if (0 === X.indexOf("Mac")) {
    y = "Mac68K" === X ? 39 : "MacPowerPC" === X || "MacPPC" === X ? 38 : "MacIntel" === X ? 40 : 0;
    if (V = r(d.split("_").join("."), "Mac OS X ")) {
      u = V;
    }
    var Jb = !0;
  } else if (l(d, "BlackBerry") || l(d, "BB10")) {
    y = 34, u = Za, xa = !0;
  } else if (l(d, "SunOS") || l(d, "Sun Solaris")) {
    y = 42;
  } else if (l(d, "FreeBSD")) {
    y = 43;
  } else if (l(d, "OpenBSD")) {
    y = 44;
  } else if (l(d, "NetBSD")) {
    y = 45;
  } else if (ta && Va) {
    l(d, "Android 4.4;") ? Ga = {min:2.3} : 4 <= la(ea) ? Ga = ea : Ga = {min:2.2}, u = Ga;
  } else if (ta && Qa) {
    ea ? Ga = ea : Ga = {min:1.6}, u = Ga, l(d, "Tablet") ? oa = !0 : xa = !0;
  } else if (ea) {
    u = ea, ta = !0;
  } else if (pb && mb || xb || gb) {
    var za = !0;
    fb ? Ga = {min:4.4} : ob && !va || eb || Ib ? Ga = {min:4} : (Ga = ea = db.touchAction !== Ka ? {min:5} : Cb ? 4.4 : ma ? w.connection ? p.searchBoxJavaBridge_ || ob ? Y.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= $a ? 3 : 533 <= $a ? Gb ? 2.3 : 2.2 : 530 <= $a ? 2.0 : 1.5, Bb && (M = 24, S = Bb));
    u = Ga;
    ta = !0;
  } else {
    rb ? (u = {min:5}, za = ta = !0) : pb && (l(d, "Ubuntu") ? y = 46 : (V = r(d, "Mint/")) ? (y = 47, u = V) : (V = r(d, "Fedora/")) ? (y = 48, u = V) : y = l(d, "Gentoo") ? 49 : 50);
  }
  Ba || ta && za && ab ? y = 27 : ta && (y = y || 26);
  M || (ya = ya || ta, Qa ? (M = ya || kb || xa || oa ? 9 : 8, S = Mb) : nb ? (Ga = Xa(H, "Trident/") + 4, M = kb || xa || oa || lb ? 3 : Jb && 5 <= q ? 7 : 2, S = q) : Ta ? (M = 23 === y ? 6 : 5, S = r(H, "Edge/")) : zb ? (M = 13, S = zb) : Va ? (M = ya ? 12 : 11, S = Ma || ha) : fb ? (M = 24, S = fb) : (V = Wa || r(d, "NetFront/")) ? (M = 18, S = V) : (V = r(d, "iCab")) ? (M = 19, S = V) : (V = da(r(d, "Opera Mini/"), r(d, "Opera Mobi/")) || La && Za) ? (M = 10, S = V, y || (l(d, "iPhone") ? wa = 
  0 : l(d, "iPad") ? wa = 1 : l(d, "iPod") && (wa = 2), wa && (y = 24))) : wb ? (M = 25, S = Nb) : qb ? (M = 14, S = Sa) : ta && va ? (M = 21, S = ea) : ob || eb || Ib ? (M = ya ? 22 : 20, S = jb || Ob) : ta && Cb ? (M = 23, S = 5 > la(ea) ? ea : jb) : ta && (Za || za) ? (M = 21, S = ea) : jb ? (M = ya ? 22 : 20, S = jb) : $a && (M = 15, S = $a));
  y && (ba[2] = y, u && (ba[3] = sa(u)));
  M && (ba[0] = M, S && (ba[1] = sa(S)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var ba = this[this.length - 1];
  --this.length;
  return ba;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ba = arguments, p = 0, B = ba.length, w = this.length; p < B; ++p) {
    this[w + p] = ba[p];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ba = this[0], p = 1, B = this.length; p < B; ++p) {
    this[p - 1] = this[p];
  }
  --this.length;
  return ba;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ba = arguments, p = ba.length, B = this.length += p - 1, w = B; w >= p; --w) {
    this[w] = this[w - p];
  }
  for (w = 0; w < p; ++w) {
    this[w] = ba[w];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(ba, p) {
  var B = arguments, w = B.length - 2 - p, F = this.slice(ba, ba + p), la;
  if (0 < w) {
    var Y = this.length - 1;
    for (la = ba + p; Y >= la; --Y) {
      this[Y + w] = this[Y];
    }
  } else if (0 > w) {
    Y = ba + p;
    for (la = this.length; Y < la; ++Y) {
      this[Y + w] = this[Y];
    }
    this.length += w;
  }
  Y = 2;
  for (la = B.length; Y < la; ++Y) {
    this[Y - 2 + ba] = B[Y];
  }
  return F;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ba, p) {
  var B = this.length >>> 0;
  if (0 === B) {
    return -1;
  }
  if (p) {
    var w = p || 0;
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
(function(ba, p, B, w, F, la, Y, Ka, Xa, l, cb, R) {
  function r() {
    Kb = !Kb;
    for (var v = -1, J; J = Qb[++v];) {
      -1 !== J.className.indexOf("pbAlp") ? Wa(J, "display", Kb ? "" : "none") : (M(J, Kb ? "pbChrCS" : "pbChr00"), S(J, Kb ? "pbChr00" : "pbChrCS"));
    }
  }
  function da(v) {
    if (p[0] === v) {
      return db === db + "" ? Y(db) : db;
    }
  }
  function sa(v) {
    var J = p[3];
    if (p[2] === v) {
      return J === J + "" ? Y(J) : J;
    }
  }
  function vb(v) {
    7.2 > U ? u(v, "pbChrCS") && (Qb.length || setInterval(r, 500), -1 === Qb.indexOf(v) && Qb.push(v)) : r = null;
  }
  function d(v, J, na) {
    v + "" === v && ("a" === v.charAt(2) && (na = !0, v = v.substr(0, 2)), v = "CS" === v ? 7.2 > U ? 117 : 9 > q || 9 > U || Ua ? 1 : 132 : parseInt(v, 16));
    na && (50 === v && (v = 128), 102 < v && 108 > v && (v += 24));
    return (v - 1) * -(6 * (J || 2));
  }
  var H = F.body, Sa = H.style, X, Ta, db = p[1], q = da(2) || da(3), Ua = da(7), Gb = da(5) || da(6), U = da(8) || da(9), ma = da(11) || da(12), mb = ma && 0 <= p.conpare(db, "1.9.1"), Za = da(13), La = da(15), Qa = da(16) || da(17), Mb = da(10) || da(25), eb = da(20) || da(22), nb = eb || da(23) || da(21) || da(24), ob = eb && Y(la.userAgent.split("Edg/")[1]);
  la = Y(la.appVersion.split("Trident/")[1]) + 4;
  var Va = sa(35) || sa(36) || sa(37), wb = !q && !Ua && (new Ka('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), Nb = (Ua ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 7.2 > U ? "opr70" : 8 > U ? "opr72" : 9.5 > U ? "opr" + (U | 0) : ma && !mb ? 1.3 <= ma ? "gck190" : 1 <= ma ? "gck121" : "gck097" : "modern") + ".css";
  sa(1) || sa(2) || sa(3) || sa(4) || sa(8) || sa(9) || sa(10);
  var Hb, hb, ea, xb = Sa.transform !== R ? "transform" : Sa["-o-transform"] !== R ? "-o-transform" : Sa["-ms-transform"] !== R ? "-ms-transform" : Sa.MozTransform !== R ? "-moz-transform" : Sa["-webkit-transform"] !== R ? "-webkit-transform" : "", ta = [], pb = [], yb, zb, Ma, ha, V, Ab, $a, jb, Ob, Ib;
  (function() {
    function v() {
      for (var c, f = 0, k = new cb() - 0; f < I.length;) {
        k < I[0].t ? ++f : (c = I.splice(f, 1)[0], c.f(c.p));
      }
      b = I.length ? Xa(v, g) : 0;
    }
    function J() {
      for (var c, f = 0; f < W.length; ++f) {
        c = W[f], c.f();
      }
    }
    function na() {
      C && (C = clearInterval(C));
    }
    function ia() {
      b && (b = l(b));
    }
    Ab = function(c) {
      W.length || (C = setInterval(J, D));
      W.push({f:c, v:++N});
      return N;
    };
    $a = function() {
      C && (na(), C = setInterval(J, D));
    };
    jb = na;
    var W = [], D = 500, N = 0, C;
    if (5 > q || Ua) {
      B._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    ha = function(c, f, k) {
      I.length || (b = Xa(v, g));
      I.push({f:c, p:f, v:++a, t:new cb() - 0 + (g < k ? k : g)});
      return a;
    };
    V = function(c) {
      for (var f = I.length, k; k = I[--f];) {
        if (k.v === c) {
          I.splice(f, 1);
          break;
        }
      }
      return 0;
    };
    Ob = function() {
      b && (ia(), b = Xa(v, g));
    };
    Ib = ia;
    var I = [], g = 16, a = 0, b;
    if (5 > q || Ua) {
      B._wdb_ontimer = v, v = "_wdb_ontimer()";
    }
  })();
  var qb, Pb, ab, fb, Bb, va, gb, Ha, Na, Cb, Fa, Db, rb, Eb, Fb, y, u, M, S, Wa, kb;
  (function() {
    function v(a, b, c) {
      var f = ["<", a], k = 1, n, G;
      if (b) {
        for (n in b) {
          var K = b[n];
          if (null != K && "" !== K) {
            if ("style" === n) {
              f[++k] = ' style="';
              for (G in K) {
                for (var T = ++k, aa, O = [], P = G.split(""), Q = P.length; Q;) {
                  aa = P[--Q], "A" <= aa && "Z" >= aa && (aa = "-" + aa.toLowerCase()), O[Q] = aa;
                }
                f[T] = O.join("") + ":" + K[G] + ";";
              }
              f[++k] = '"';
            } else {
              "className" === n && (n = "class"), f[++k] = " " + n + '="' + K + '"';
            }
          }
        }
      }
      f[++k] = ">";
      null != c && (C && "font" !== a ? f[++k] = "<FONT>" + c + "</FONT>" : f[++k] = c);
      f[++k] = "</" + a + ">";
      return f.join("");
    }
    function J(a) {
      a = "*" === a && 6 > q ? "*" !== a ? F.all.tags(a.toUpperCase()) : F.all : F.getElementsByTagName(a);
      var b = [], c = 0, f;
      for (f = a.length; c < f; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function na(a) {
      return C ? a.parentElement : a.parentNode;
    }
    function ia(a, b, c, f, k, n) {
      if (C) {
        var G = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = fb(2 > a ? ab(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(G, v(c, f, k));
        return fb(b)[K];
      }
      b = I ? F.createElement(v(c, f)) : n ? F.createElementNS("http://www.w3.org/2000/svg", c) : F.createElement(c);
      if (f && !I) {
        for (G in f) {
          if ((c = f[G]) || 0 === c) {
            switch(G) {
              case "class":
              case "className":
                y(b, c);
                break;
              case "style":
                a = b.style;
                for (K in c) {
                  a[K] = c[K];
                }
                break;
              default:
                Eb(b, G, c);
            }
          }
        }
      }
      g || null != k && W(b, k);
      return b;
    }
    function W(a, b) {
      if (C) {
        return ia(2, a, "font", R, b);
      }
      var c = F.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function D(a, b) {
      9 > q ? a.className = b : a.setAttribute("class", b);
    }
    function N(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var C = 5 > q;
    X = J("html")[0];
    Ta = J("head")[0];
    qb = J;
    Pb = function(a) {
      var b = [], c = 0, f, k = -1;
      if (9 > q || !F.getElementsByClassName) {
        var n = 6 > q ? F.all : F.getElementsByTagName("*");
      } else {
        var G = !0;
        n = F.getElementsByClassName(a);
      }
      for (f = n.length; c < f; ++c) {
        var K = n[c];
        if (G || (C || 1 === K.nodeType) && N(K, a)) {
          b[++k] = K;
        }
      }
      return b;
    };
    ab = na;
    fb = function(a) {
      a = C ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Bb = function(a) {
      var b = !(7.03 < U && 7.2 > U) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], f = a.length, k = -1, n; f;) {
        if (n = a[--f], b || 1 === n.nodeType) {
          C && "FONT" === n.tagName || (c[++k] = n);
        }
      }
      return c;
    };
    va = function(a, b, c, f, k) {
      b = ia(2, a, b, c, f, k);
      C || (a.appendChild(b), g && null != f && W(b, f));
      return b;
    };
    gb = function(a, b, c, f, k) {
      b = ia(0, a, b, c, f, k);
      C || (na(a).insertBefore(b, a), g && null != f && W(b, f));
      return b;
    };
    Ha = function(a, b, c, f, k) {
      b = ia(1, a, b, c, f, k);
      var n;
      C || ((n = a.nextSibling) ? ab(n).insertBefore(b, n) : ab(a).appendChild(b), g && null != f && W(b, f));
      return b;
    };
    Na = W;
    Cb = function(a, b) {
      if (C) {
        return ia(0, a, "font", R, b);
      }
      var c = F.createTextNode("" + b);
      ab(a).insertBefore(c, a);
      return c;
    };
    Fa = function(a) {
      C ? a.outerHTML = "" : ab(a).removeChild(a);
    };
    var I = 9 > q, g = 9 > q;
    Db = function(a) {
      return a.tagName.toUpperCase();
    };
    rb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    Eb = function(a, b, c) {
      a.setAttribute(b, c);
    };
    Fb = function(a, b) {
      a.removeAttribute(b);
    };
    y = D;
    u = N;
    M = function(a, b) {
      var c;
      if (!N(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        D(a, c + b);
      }
    };
    S = function(a, b) {
      if (N(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        D(a, c.join(" "));
      }
    };
    Wa = function(a, b, c) {
      a.style[b] = c;
    };
    kb = function(a, b) {
      var c = -1, f, k;
      if (5.5 > q) {
        if (b) {
          for (f = b.split(";"); k = f[++c];) {
            var n = k.split(":");
            a.style[n[0]] = k.substr(n[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > U || 1 > ma ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var wa, xa, oa, lb, Ga, Ba, ya, Jb, za, E;
  (function() {
    function v() {
      return Q ? z ? 2 : t ? 3 : 1 : 0;
    }
    function J(e) {
      xa(B, "load", J);
      J = R;
      ia(ta, e, !0);
      oa = ta = R;
    }
    function na(e, m) {
      Ba(function() {
        var x = g(e);
        m(x);
        x.addListener(m);
        return !0;
      });
    }
    function ia(e, m, x) {
      for (var h = 0; h < e.length; ++h) {
        !0 === e[h](m) && (e.splice(h, 1), --h);
      }
      x && (e.length = 0);
    }
    function W(e, m, x) {
      c && !b.length && ha(D);
      b.push(e, m, x);
    }
    function D() {
      var e = b, m;
      for (b = []; m = e.shift();) {
        ia(m, e.shift(), e.shift());
      }
    }
    function N(e) {
      var m = e || event;
      e = f[m.type];
      var x = -1, h, A;
      q ? (m.preventDefault = function() {
        m.returnValue = !1;
      }, m.stopPropagation = function() {
        m.cancelBubble = !0;
      }) : n && (m.u = m.stopPropagation, m.stopPropagation = function() {
        A = !0;
      });
      for (; h = e[++x];) {
        h.l === this ? (this.g = h.j, this.g(m), this.g = w, this.g = R) : 7.2 > U && this === F && h.l === B && (B.g = h.j, B.g(m), delete B.g);
      }
      if (q) {
        return m.preventDefault = m.stopPropagation = R, m.returnValue;
      }
      n && (m.defaultPrevented && "click" === m.type && "A" === m.target.tagName && (K = !0), A && !K && m.u(), m.u = m.stopPropagation = R);
    }
    function C() {
      var e = 9 === a.offsetWidth;
      Jb !== e && W(pb, Jb = e);
    }
    function I(e) {
      ta || ia(Ia, e);
    }
    var g = B.matchMedia, a, b = [], c;
    ta.push(function() {
      na = R;
      a = va(H, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      oa(function() {
        c = !0;
        b.length && ha(D);
      });
    });
    wa = function(e, m, x, h) {
      if (G) {
        e.addEventListener(m, x, h ? wb ? h : h.capture : !1);
      } else {
        var A = {l:e, j:x};
        h = f[m];
        var ka = "on" + m, Ca, Ja;
        if (h) {
          for (Ca = h.length; Ja = h[--Ca];) {
            if (Ja.l === e && Ja.j === x) {
              return;
            }
          }
          f[m].push(A);
        } else {
          f[m] = h = [A], k || (m = e[ka], "function" === typeof m && m !== N && h.unshift({l:e, j:m}));
        }
        k ? e.attachEvent(ka, N) : e[ka] = N;
      }
    };
    xa = function(e, m, x, h) {
      if (G) {
        e.removeEventListener(m, x, h ? wb ? h : h.capture : !1);
      } else {
        h = f[m];
        m = "on" + m;
        var A, ka, Ca;
        if (h) {
          for (A = h.length; ka = h[--A];) {
            ka.l === e && (ka.j === x ? h.splice(A, 1) : Ca = !0);
          }
          Ca || (k ? e.detachEvent(m, N) : (e[m] = w, e[m] = null));
        }
      }
    };
    var f = {}, k = !1, n = 525.13 > La, G = !n && !Ua && B.addEventListener, K;
    n && X.addEventListener("click", function(e) {
      if (K) {
        return K = !1, e.preventDefault(), !1;
      }
    });
    oa = function(e) {
      ta.push(e);
    };
    lb = function(e) {
      T && T.push(e);
    };
    var T = [];
    if (419.3 >= La) {
      var aa = function() {
        if (aa) {
          var e = F.readyState;
          "loaded" === e || "complete" === e ? (aa = R, J()) : ha(aa);
        }
      };
      ha(aa);
    } else {
      wa(B, "load", J);
    }
    q || 1.8 > ma ? wa(B, "unload", function(e) {
      ia(T, e, !0);
    }) : T = R;
    Ba = function(e) {
      pb.push(e);
    };
    oa(function() {
      C();
      Ab(C);
    });
    ya = function(e) {
      O && O.push(e);
    };
    var O = [], P = 60 > ma || Za, Q, t, z;
    if (89 <= ma || 89 <= eb || Va && 79 <= ob || g && (g("(forced-colors:none)").matches || g("(forced-colors:active)").matches)) {
      E = !0, na("(forced-colors:active)", function(e) {
        Q = e.matches;
        za = v();
        W(O, za);
      });
    } else if (10 <= q || Gb || Va && ob) {
      E = !0, na("(-ms-high-contrast:black-on-white)", function(e) {
        Q = t = e.matches;
        za !== v() && (za = v(), W(O, za));
      }), na("(-ms-high-contrast:white-on-black)", function(e) {
        Q = z = e.matches;
        za !== v() && (za = v(), W(O, za));
      }), na("(-ms-high-contrast:active)", function(e) {
        Q = e.matches;
        za !== v() && (za = v(), W(O, za));
      });
    } else if (Va && (q || ma && 0 <= p.conpare(db, "1.8.1") || Za)) {
      var ca = function() {
        function e(A, ka) {
          return "#000000" === A || "rgb(0,0,0)" === A || ka && "transparent" === A;
        }
        function m(A, ka) {
          return "#ffffff" === A || "rgb(255,255,255)" === A || ka && "transparent" === A;
        }
        var x = F.defaultView;
        var h = x ? x.getComputedStyle(a, null) : a.currentStyle;
        x = (h && h.color || "").split(" ").join("");
        h = (h && h.backgroundColor || "").split(" ").join("");
        x && (Q = "#123456" !== x && "rgb(18,52,86)" !== x, t = e(x) && m(h, !0), z = m(x) && e(h, !0), za !== v() && (za = v(), W(O, za, P)));
      };
      Ba(function(e) {
        if (e) {
          return Wa(a, "color", "#123456"), Wa(a, "backgroundColor", "#123456"), P ? (ca(), O = R) : Ab(ca), ca = R, !0;
        }
      });
    } else {
      O = v = R;
    }
    Ga = function(e) {
      Ia.push(e);
    };
    var Ia = [], Da = 0, Z = 1 > ma || 1.2 <= ma && 1.8 > ma || 7.2 >= U;
    Z ? Ab(function() {
      var e = B.scrollY || H.scrollTop;
      Da !== e && (Da = e, I());
    }) : wa(B, "scroll", I);
    lb(function() {
      Z || xa(B, "scroll", I);
    });
  })();
  var pa = 9 > q || 525 <= La && 530 > La || 2 > eb, ja = 0, Ea, Ya, Lb;
  (function() {
    function v(g) {
      for (var a = ia.length, b; a;) {
        if (b = ia[--a], b.D === g) {
          return b;
        }
      }
    }
    function J() {
      var g = F.styleSheets, a = [], b = 0, c = -1, f;
      if (g) {
        for (f = g.length; b < f; ++b) {
          if (2 > eb || Va && 526 > La) {
            var k = na(g[b]);
            k.parentNode && (a[b] = k);
          } else {
            a[b] = na(g[b]);
          }
        }
      } else {
        for (g = qb("*"), f = g.length; b < f; ++b) {
          k = g[b];
          var n = Db(k);
          if ("STYLE" === n || "LINK" === n && "text/css" === rb(k, "type")) {
            a[++c] = k;
          }
        }
      }
      return a;
    }
    function na(g) {
      return g.owningElement || g.ownerNode;
    }
    Ea = function(g, a) {
      var b = J(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var f = b[c - 1];
      b = b[c];
      if (N || C) {
        var k = b ? gb(b, "style") : f ? Ha(f, "style") : va(Ta, "style");
        C && Na(k, "");
        var n = k.styleSheet || k.sheet;
        g && Eb(k, "media", g);
      } else if (W || D) {
        n = {C:g, B:c, G:!0};
      }
      if (n) {
        return ia.push({D:n, h:k, m:[]}), n;
      }
    };
    Ya = function(g) {
      g = v(g);
      var a = g.m, b = a.length, c;
      for (g.h && Fa(g.h); c = a[--b];) {
        c.i && Fa(c.i);
      }
      ia.splice(ia.indexOf(g), 1);
    };
    Lb = function(g, a, b, c) {
      var f = v(g), k = f.h;
      f = f.m;
      var n = "@import" === a, G = "@page" === a, K = "@font-face" === a, T = f.length, aa = "", O;
      if (g.imports) {
        var P = g.imports.length;
      } else {
        for (P = 0; P < T && "@import" === f[P].A; ++P) {
        }
      }
      if (n) {
        c = 0 <= c && c < P ? c : P;
        var Q = a + ' "' + b + '"';
      } else {
        c = P <= c && c < T ? c : T;
        for (Q in b) {
          aa += ";" + Q + ":" + b[Q];
        }
        aa = aa.substr(1);
        Q = a + "{" + aa + "}";
        6 <= q && K && (c = T);
      }
      T = {A:a, F:b, s:c, o:c};
      if (9 > q) {
        P = g.rules;
        var t = P.length;
        if (K) {
          a = F.createElement("div"), a.innerHTML = '_<style type="text/css"' + (g.media ? ' media="' + g.media + '"' : "") + ">" + Q + "</style>", a = a.lastChild, (O = k.nextSibling) ? ab(k).insertBefore(a, O) : ab(k).appendChild(a), T.i = a;
        } else {
          if (n ? g.addImport(b, c) : 5.5 <= q && G || g.addRule(a, aa, c), T.o = c + (P.length - t - 1), 0 === P.length - t) {
            return -1;
          }
        }
      } else if (N || C) {
        (Va && La || 28 > eb) && n ? T.i = Ha(k, "link", {href:b, rel:"stylesheet", type:"text/css"}) : pa && K ? (a = T.i = Ha(k, "style", {type:"text/css", media:g.media}), a.innerText = Q) : g.insertRule(Q, c);
      }
      f.splice(c, 0, T);
      if (W || D) {
        k = v(g);
        O = k.m;
        a = k.h;
        b = g.B;
        n = J();
        g = n[b - 1];
        b = n[b];
        n = [];
        K = G = -1;
        aa = "style";
        T = {type:"text/css", media:k.C};
        for (var z; P = O[++G];) {
          if (Q = P.A, P = P.F, "@import" === Q) {
            n[++K] = Q + ' "' + P + '"';
          } else {
            n[++K] = Q + "{";
            Q = "";
            for (z in P) {
              Q += ";" + z + ":" + P[z];
            }
            n[++K] = Q.substr(1) + "}";
          }
        }
        n = n.join("");
        W && (n = "data:text/css;charset=utf-8;base64," + I(n), T.rel = "stylesheet", T.href = n, aa = "link", n = R);
        a ? (k.h = Ha(a, aa, T, n), Fa(a)) : (a = b ? gb(b, aa, T, n) : g ? Ha(g, aa, T, n) : va(Ta, aa, T, n), k.h = a);
      }
      z = c;
      g = f.length;
      for (k = z; k < g; ++k) {
        O = f[k], O.i || (a = O.o - O.s, O.s = z, O.o = z + a, z += 1 + a);
      }
      return c;
    };
    var ia = [], W = 1 > ma || 8 <= U && 9 > U, D = 7.2 <= U && 8 > U, N = !!q || !W && !D && function() {
      var g = va(X, "style"), a = !(!g.styleSheet && !g.sheet);
      Fa(g);
      return a;
    }(), C = !N && La && !W && !D && function() {
      var g = va(X, "style");
      Na(g, "");
      var a = !(!g.styleSheet && !g.sheet);
      Fa(g);
      return a;
    }();
    ja = W || D ? 1 : N || C ? 2 : 0;
    var I;
    (function(g) {
      function a(c) {
        for (var f = b, k = "", n = 0, G; G = c.length;) {
          4 > G && (n = [0, 2, 1, 0][G]), G = c.charCodeAt(0) << 16 | (1 < G ? c.charCodeAt(1) : 0) << 8 | (2 < G ? c.charCodeAt(2) : 0), k += [f[G >>> 18], f[G >>> 12 & 63], 2 <= n ? "=" : f[G >>> 6 & 63], 1 <= n ? "=" : f[G & 63]].join(""), c = c.substr(3);
        }
        return k;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      g.btoa && (a = g.btoa);
      I = a;
    })(this);
  })();
  (function() {
    function v() {
      if (525 > La || ma && !mb || 2.2 > da(21) || da(25) || 10 > da(3) || sa(32) || sa(30) || sa(1) || sa(2) || sa(3)) {
        return !1;
      }
      if (pa) {
        return !0;
      }
      if (2 === ja) {
        var D = Ea();
        var N = Lb(D, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        N = D.cssText || D.cssRules && D.cssRules[N] && D.cssRules[N].cssText || "";
        N = N.match("src") && N.match("@font-face");
        Ya(D);
      }
      v = R;
      return W = !!N;
    }
    pb.splice(0, 0, function() {
      if (Jb) {
        ea = 8 <= q || Gb || 9.5 <= U || mb || Za || 522 <= La || 3 <= Qa || Mb || nb ? 3 : 7.2 <= U ? 2 : 6 <= U || ma ? 1 : 0;
        if (!ea && !q && !Ua) {
          var D = va(H, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          ea = 6 <= D.offsetWidth ? 2 : 0;
          Fa(D);
        }
        return !0;
      }
    });
    yb = function(D) {
      function N(g) {
        I = V(I);
        J = g;
        C.onload = C.onerror = w;
        ha(D, g);
      }
      if (J !== R) {
        ha(D, J);
      } else if (8 > q) {
        ha(D, !1);
      } else {
        var C = new Image(), I = ha(function() {
          I && N(!1);
        });
        C.onerror = function() {
          N(!1);
        };
        C.onload = function() {
          N(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var J;
    9 > q && oa(function() {
      var D = va(H, "div");
      kb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Hb = 1 < D.offsetHeight;
      kb(D, "");
      Fa(D);
    });
    zb = function(D, N) {
      function C() {
        if (g || !a || I.complete) {
          var b = !!I.width;
          hb = hb || b;
          ha(D, b);
          I.onerror = I.onload = w;
          I = D = R;
        } else {
          --a, ha(C);
        }
      }
      var I = new Image(), g, a = 99;
      I.onerror = function() {
        g = !0;
      };
      I.onload = function() {
        g = !0;
      };
      I.src = N;
      ha(C);
    };
    var na = 9 > q || 2 > eb || 12 > U, ia = ["sans-serif", "serif"], W;
    Ma = function(D, N, C, I, g, a, b) {
      function c(Z) {
        D(Z);
        Da && !Z && Ya(Da);
        D = t = z = ca = Da = R;
      }
      function f() {
        F.fonts.load('1.6em "' + N + '"').then(function() {
          G(N) ? ha(c, Ia) : n(!0);
        }, function() {
          yb(K);
        });
      }
      function k(Z) {
        return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (P = new cb() - 0, !1) : Z < new cb() - P;
      }
      function n(Z) {
        Z && (P = new cb() - 0);
        G(N) ? c(Ia) : k(O) ? Q ? c(0) : na ? ha(c, 0) : yb(K) : ha(n);
      }
      function G(Z) {
        var e = 0, m = -1, x = 0;
        if (!ca) {
          var h = -1;
          var A;
          t = va(H, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (ca = {}; A = ia[++h];) {
            Wa(t, "fontFamily", A), ca[A] = t.offsetWidth;
          }
        }
        for (5 > q ? t || (t = va(H, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : H.appendChild(t); h = ia[++m];) {
          if (Wa(t, "fontFamily", '"' + Z + '",' + h), t.offsetWidth !== ca[h]) {
            e = 1;
            break;
          }
        }
        !q && e && g && (t.innerHTML = g, Z = t.offsetWidth, t.innerHTML = a, x = Z === t.offsetWidth ? 1 : 0, t.innerHTML = "mmmmmmmmmmlli");
        Fa(t);
        5 > q && (t = R);
        return Ia = e + x;
      }
      function K(Z) {
        (Q = Z) ? T(!0) : c(0);
      }
      function T(Z) {
        var e;
        Z && (P = new cb() - 0);
        for (e in C) {
          G(e) ? (z = va(H, "div", {"aria-hidden":"true", className:I, id:I}), Da = Ea(), Lb(Da, "@import", C[e]), ha(aa, !0)) : k(100) ? (delete C[e], ha(T, !0)) : ha(T);
          return;
        }
        c(0);
      }
      function aa(Z) {
        Z && (P = new cb() - 0);
        1 < z.offsetWidth ? (Fa(z), O = 100, ha(n, !0)) : k(O) ? 528 > La ? (Fa(z), O = 100, ha(n, !0)) : (Fa(z), c(0)) : ha(aa);
      }
      var O = b || 5000, P, Q, t, z, ca, Ia, Da;
      v || W ? W || v() ? !F.fonts || 603 > La ? n(!0) : f() : ha(c, 0) : ha(c, 0);
    };
  })();
  var Oa = String.fromCharCode, Qb = [], Kb, sb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Oa(960), ")", "(", Oa(234), Oa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Oa(9824), "\u2190", Oa(9829), Oa(9830), Oa(9827), Oa(956), "\u03a9", "\u2193", "\u2192", "%", Oa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Oa(9619)];
  E || ya(function(v) {
    S(H, "jsHcm");
    S(H, "jsHcmWob");
    S(H, "jsHcmBow");
    if (v) {
      switch((xb || 9 === q || 5.5 <= q && 9 > q && Hb) && M(H, "jsCanRotate"), v) {
        case 1:
          M(H, "jsHcm");
          break;
        case 2:
          M(H, "jsHcmWob");
          break;
        case 3:
          M(H, "jsHcmBow");
      }
    } else {
      S(H, "jsCanRotate");
    }
  });
  (function() {
    function v(t) {
      (K = t) ? W() : hb ? ia(!0) : hb !== R ? W() : zb(ia, T);
    }
    function J() {
      J = R;
      Ma(v, "PB-100", {"PB-100_canTTF":bb + "pbFont/ttf.css", "PB-100_canWOFF":bb + "pbFont/woff.css", "PB-100_canEOT":bb + "pbFont/eot.css", "PB-100_canSVG":bb + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function na(t) {
      this.focus();
      t.preventDefault();
      t.stopPropagation();
    }
    function ia(t) {
      t && (M(H, "pbList-noWebFont"), ja && (2 !== ea || 9.5 > U ? Lb(Ea(), ".pbList font", {"background-image":"url(" + T + ")"}) : Lb(Ea(), ".pbList font:after", {content:"url(" + T + ")"})));
      W();
    }
    function W() {
      for (v = Ma = R; G.length;) {
        D(G.shift(), G.shift());
      }
    }
    function D(t, z) {
      function ca(x) {
        x = fb(x);
        for (var h = -1, A; A = x[++h];) {
          switch(A.nodeType) {
            case 1:
              ca(A);
              break;
            case 3:
              A.data && Da(A.data) && Z.push(A);
          }
        }
      }
      function Ia(x) {
        var h = x.children, A = 0, ka = h.length;
        if (ka) {
          for (; A < ka; ++A) {
            Ia(h[A]);
          }
        } else {
          (h = x.innerText) && Da(h) && Z.push(x);
        }
      }
      function Da(x) {
        return x.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var Z = [], e;
      if (v) {
        -1 === G.indexOf(t) && (G.push(t, z), aa && J && J());
      } else {
        var m = G.indexOf(t);
        0 <= m && G.splice(m, 2);
        for (5 > q ? Ia(t) : ca(t); e = Z.shift();) {
          m = 5 > q ? e.innerText : e.data, 2 !== K && (m = m.split(b).join(g)), z ? 5 > q ? e.innerText = m : e.data = m : N(m.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(I).split("&amp;").join("&"), e);
        }
      }
    }
    function N(t, z) {
      function ca(qa, ra) {
        for (var tb = ""; ra;) {
          ra & 1 && (tb += qa), ra >>= 1, qa += qa;
        }
        return tb;
      }
      function Ia(qa, ra, tb) {
        for (var Rb, Ub = -1, Sb, Tb; Rb = ra[++Ub];) {
          for (; 0 <= (Sb = qa.indexOf(Rb));) {
            Tb = Rb.length, qa = qa.substr(0, Sb) + ca(tb, Tb) + qa.substr(Sb + Tb);
          }
        }
        return qa;
      }
      function Da(qa) {
        var ra = Y(qa), tb = "" + ra;
        return 0 < ra && ra === ra | 0 && (ra = qa.indexOf(tb) + tb.length, ra <= qa.length) ? ra : 0;
      }
      var Z = " area line str cmd fnc syb".split(" "), e = 5 > q || 1 === z.nodeType, m = [], x = "", h, A = -1, ka, Ca, Ja;
      if (e) {
        if (P) {
          var Aa = z.style.visibility;
          Wa(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (Q) {
        var Pa = z;
        z = F.createDocumentFragment();
      }
      if (function(qa) {
        var ra = qa.indexOf("P");
        if (-1 === ra) {
          return !1;
        }
        ra = Y(qa.charAt(ra + 1));
        return 0 <= ra && 9 >= ra;
      }(t)) {
        x = ca("+", t.length);
      } else {
        0 <= (h = Da(t)) && (x = ca("|", h), A = h, --A);
        for (; h = t.charAt(++A);) {
          h === I || ka ? (x += "~", h === I && (ka = !ka)) : x += h;
        }
        x = Ia(x, n, "^");
        x = Ia(x, f, "{");
        x = Ia(x, k, "}");
      }
      A = 0;
      for (ka = t.length; A < ka; ++A) {
        h = t.charAt(A);
        var L = h === c;
        var Ra = " " === h;
        h = L ? " " : h;
        var fa = x.charAt(A);
        var ib = (Ca = ub) && L;
        var ub = "|" === fa;
        fa = Z["+|~{}^".indexOf(fa) + 1];
        "\n" !== h ? (K || !hb ? (2 === K && t.substr(A, 2) === b && (h = b, ++A), fa = Ra && "str" === fa ? "pbList-strsp" : L ? "" : !Ra && fa ? "pbList-" + fa : "") : (L = sb.indexOf(h), L = -1 === L ? "" : sb.indexOf(h).toString(16).toUpperCase(), L = (L = 1 === L.length ? "0" + L : L) ? "pbChr" + L : "", fa = Ra && "str" === fa ? "pbList-strsp" : Ra || !L ? "" : fa ? (L ? L + " " : "") + "pbList-" + fa : L), L = R, ib ? (h = 6 <= q && 8 > q ? " " : c, fa = "") : ub && (1.9 > ma || 9.5 > U) ? 
        (ub && !Ca && (Ja = 4 - (Y(t.substr(A)) + "").length), 7.5 > U ? L = O ? "position:relative;top:-4px;left:" + 12 * Ja + "px" : {position:"relative", top:"-4px", left:12 * Ja + "px"} : 1.3 <= ma ? (L = O ? "position:absolute;left:" + 12 * Ja + "px" : {position:"absolute", left:12 * Ja + "px"}, ++Ja) : L = O ? "position:relative;left:" + 12 * Ja + "px" : {position:"relative", left:12 * Ja + "px"}) : Ra && 7.5 > U && (fa = "pbList-strsp"), O ? m.push("<font" + (fa ? ' class="' + fa + '"' : "") + 
        (L ? ' style="' + L + '"' : "") + ">" + h + "</font>") : e || Q ? va(z, "font", {"class":fa, style:L}, h) : gb(z, "font", {"class":fa, style:L}, h)) : (Ca = ub = !1, O ? m.push(h) : e || Q ? Na(z, h) : Cb(z, h));
      }
      if (e) {
        O ? z.innerHTML = m.join("") : Q && Pa.appendChild(z), P && Wa(z, "visibility", Aa);
      } else {
        if (O) {
          Z = F.createElement("font");
          for (Z.innerHTML = m.join(""); m = Z.firstChild;) {
            z.parentNode.insertBefore(m, z);
          }
          Fa(z);
        } else {
          Q ? Pa.parentNode.replaceChild(z, Pa) : Fa(z);
        }
      }
    }
    Ba(function(t) {
      if (t) {
        t = Pb("pbChrCS");
        for (var z = 0, ca = t.length; z < ca; ++z) {
          vb(t[z]);
        }
        return !0;
      }
    });
    var C = [];
    Ba(function(t) {
      function z(Aa) {
        var Pa = rb(Aa, "pbTip"), L = Pa.charAt(0), Ra = "_" === L;
        Pa = Ra ? Pa.charAt(2) : L;
        L = Ra ? "Btm" : "";
        var fa = rb(Aa, "title");
        Da || (Fb(Aa, "pbTip"), Fb(Aa, "title"), M(Aa, "pbTipPos" + Pa.toUpperCase()), va(Aa, "div", {className:"pbTip" + L, style:{width:fa.length + Ia + "em"}}, fa));
        va(Aa, "div", {className:"pbTail" + L});
        Z && Ra && (Aa.focus(), Aa.blur());
      }
      function ca(Aa) {
        if (2 > ea) {
          var Pa = rb(Aa, "pbGhst"), L = Aa.className, Ra = L.split("pbCsr")[1] || "", fa = L.split("pbAlp")[1] || "";
          if ("CS" === Pa) {
            var ib = "_";
          } else {
            ib = Pa, 3 === ib.length && (ib = ib.substr(0, 2)), ib = sb[parseInt(ib, 16)] || "~";
          }
          var ub;
          Ra = Ra.split(" ")[0];
          fa = Y(fa.split(" ")[0]);
          var qa = 10 - fa;
          fa && 7.2 > U && (L = L.split("pbChr")[1], L = L.split(" ")[0], Wa(Aa, "backgroundPosition", d(L, 2, A) + "px " + -24 * (10 - fa) + "px"));
          Pa && (7.2 > U && (ub = {backgroundPosition:d(Pa, 2, A) + "px " + -24 * (10 - qa) + "px"}), Fb(Aa, "pbGhst"), m = gb(Aa, "b", {className:"pbChr" + Pa + " pbAlp" + qa + " pbCsr" + Ra, style:ub}, ib), vb(m));
          vb(Aa);
        }
      }
      if (t) {
        var Ia = 6 > q ? 2 : 0;
        t = qb("SAMP");
        var Da = 8 === q, Z = 5 <= q && 6 > q, e, m, x, h;
        Hb && M(H, "pbLCD-AX");
        if (t.length) {
          for (x = -1; e = t[++x];) {
            if (u(ab(e), "pbLCD")) {
              var A = u(e, "PB-120") || u(e, "FX-795P");
              var ka = Bb(e);
              for (e = ka.length; e;) {
                var Ca = ka[--e];
                switch(Db(Ca)) {
                  case "A":
                    (2 > ea || Da) && z(Ca);
                    if (2 > ea) {
                      var Ja = Bb(Ca);
                      for (h = Ja.length; h;) {
                        !Da && ca(Ja[--h]);
                      }
                    }
                    Mb ? Eb(Ca, "href", "javascript:void(0)") : (wa(Ca, "click", na), C.push(Ca));
                    break;
                  case "B":
                    2 > ea && ca(Ca);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    lb(function(t) {
      for (; t = C.shift();) {
        xa(t, "click", na);
      }
    });
    6 === q && (new Ka("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var I = sb[7], g = sb[30], a = sb[113], b = Oa(8337) + Oa(8331), c = Oa(160);
    Oa(8194);
    var f = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), k = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), n = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + g + sb[31]).split(""), G = [], K, T, aa;
    Ba(function(t) {
      if (t) {
        T = bb + "pbFont/x3mask.png";
        t = qb("*");
        for (var z = -1, ca; ca = t[++z];) {
          u(ca, "pbList") ? D(ca) : u(ca, "pbFont") && D(ca, !0);
        }
        G.length && J();
        return !0;
      }
    });
    ma && p.conpare(db, "0.9.6");
    var O = !1, P = 8 > U, Q = !O && !P && !(6 > q) && F.createDocumentFragment && !!H.replaceChild;
    ba.prettify = D;
  })();
  Sa = F.scripts || qb("script");
  var bb = Sa[Sa.length - 1].src.split("/");
  --bb.length;
  (bb = bb.join("/")) && (bb += "/");
  6.1 > Qa && Ga($a);
  lb(jb);
  6.1 > Qa && Ga(Ob);
  lb(Ib);
  10 > q && (11 !== la || 5 !== q) || (9 > U || 1 > ma || !Ua && !B.addEventListener ? F.write('<link href="' + bb + Nb + '" rel="stylesheet"' + (8 > U ? "" : ' media="screen,handheld,projection,print"') + ">") : oa(function() {
    va(Ta, "link", {href:bb + "" + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

