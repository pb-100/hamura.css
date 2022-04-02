PB100={};ua = [];
ua.conpare = function(aa, p) {
  var A = 0, w, F, la = (aa + "").split("."), R = (p + "").split("."), Ma = la.length;
  for (w = R.length; "0" === la[Ma - 1];) {
    --Ma;
  }
  for (; "0" === R[w - 1];) {
    --w;
  }
  for (F = Ma < w ? Ma : w; A < F; ++A) {
    var Va = la[A] - 0, m = R[A] - 0;
    if (Va !== m) {
      return Va > m ? 1 : -1;
    }
  }
  return Ma > w ? 1 : Ma === w ? 0 : -1;
};
(function(aa, p, A, w, F, la, R, Ma) {
  function Va(B, ma, fa) {
    fa = la(B.split(ma)[1]);
    return 0 <= fa ? fa : 0;
  }
  function m(B, ma) {
    return 0 <= B.indexOf(ma);
  }
  function cb(B) {
    return m(B, "Linux armv") || m(B, "Linux aarch") || m(B, "Linux i686") || m(B, "Linux x86_64");
  }
  function O(B, ma) {
    for (var fa in ma) {
      if (fa === B) {
        return !0;
      }
    }
  }
  function h(B, ma) {
    var fa = "", Da = -1, Wa;
    if (B = B.split(ma)[1]) {
      for (; Wa = B.charCodeAt(++Da);) {
        if (48 <= Wa && 57 >= Wa || 46 === Wa) {
          fa += B.charAt(Da);
        } else {
          break;
        }
      }
      for (Da = fa.length; Da;) {
        if (46 === fa.charCodeAt(--Da)) {
          fa = fa.substr(0, Da);
        } else {
          break;
        }
      }
    }
    return fa;
  }
  function sa(B) {
    for (var ma = arguments, fa = 1, Da = ma[0], Wa; fa < ma.length; ++fa) {
      0 > na(Da, Wa = ma[fa]) && (Da = Wa);
    }
    return Da;
  }
  function Hb(B) {
    return B === B + "" ? B : B === B - 0 ? "" + B : B.min && B.max ? B.min + "~" + B.max : B.min ? B.min + "~" : "~" + B.max;
  }
  var na = aa.conpare, d = w.userAgent, ha = w.appVersion, jb = la(ha) || 0, P = w.platform, u = A.documentElement, Xa = u && u.style, Ha = A.documentMode, S = F.width;
  F = F.height;
  var ia = p.HTMLAudioElement, xb = p.performance, yb = p.Int8Array, Ia = p.ontouchstart !== Ma, Ya = h(ha, "Version/") || h(d, "Version/"), Ib = p.operamini, za = !Ib && p.opera, Rb = za && (za.version && "function" === typeof za.version ? za.version() : sa(h(d, "Opera "), Ya, jb)), Jb = p.opr, ob = !za && (A.all || Ha);
  Ha = ob && (Ha ? Ha : p.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4);
  u = !ob && u.msContentZoomFactor;
  var db = !u && (p.chrome || p.chromium), hb = !ob && function() {
    for (var B in Xa) {
      if (0 === B.indexOf("Moz")) {
        return !0;
      }
    }
  }(), zb = m(d, "UCWEB"), Kb = zb && h(d, " U2/"), pb = zb && h(d, "; wds "), Ua = h(d.split("_").join("."), "; iPh OS "), oa = h(d, "; Adr "), eb = m(ha, "YJApp-ANDROID"), Ea = m(P, "Android") || hb && m(ha, "Android") || eb;
  oa = h(P, "Android ") || h(ha, "Android ") || h(d, "Android ") || oa;
  var Ra = m(P, "Linux"), Ab = "MacIntel" === P && w.standalone !== Ma, Bb = hb && h(d, "Goanna/"), Na = !Bb && hb && (h(d, "rv:") || h(d.substr(d.indexOf(") Gecko/") - 11), "; ")), da = h(d, "Firefox/"), U = h(d, "Opera/"), Cb = p.FNRBrowser, Za = Va(d, "AppleWebKit/"), kb = h(d, "Chrome/"), Ob = h(ha, "Iron/"), Lb = h(d, "OPR/"), qb = h(ha, "KHTML/"), Pb = h(d.toLowerCase(), "iris");
  h(d, "FxiOS/");
  h(d, "CriOS/");
  h(d, "EdgiOS/");
  var $a = h(d, "Silk/"), fb = Va(d, "SamsungBrowser/"), Db = !fb && function() {
    for (var B = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ma, fa = B.length; ma = B[--fa];) {
      if (m(d, ma)) {
        return 2 > la(Ya) ? Ya : 0.9;
      }
    }
    B = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (fa = B.length; ma = B[--fa];) {
      if (m(d, ma)) {
        return Ya;
      }
    }
  }(), ta = db && 534.3 >= Za, gb = cb(P), Ja = gb && !m(d, P) && cb(d);
  Ia = Ia && (Za || hb) && Ja || !oa && eb;
  eb = !!p.ReactNativeWebView;
  gb = gb && function() {
    for (var B in p) {
      if (0 === B.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Oa = (Ja = p.puffinDevice) && Ja.clientInfo;
  Oa = (Ja = Oa && "iOS" === Oa.os && Oa.osVersion) && Oa.model;
  var Eb = !Ha && A.registerElement, Fa = !Ha && A.execCommand, Fb = p.webkitCancelAnimationFrame, rb = Ra && Eb && "11.0.696.34" === kb, sb = p._firefoxTV_playbackStateObserverJava, tb = Va(d, "diordnA ");
  if ("Nitro" === P) {
    var x = 1;
  } else if ("Nintendo DSi" === P) {
    x = 2;
    var v = U;
  } else if ("New Nintendo 3DS" === P || m(d, "iPhone OS 6_0") && 320 === S && 240 === F) {
    x = 4, v = h(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === P) {
    x = 3, v = h(d, "Version/"), Za = 535;
  } else if ("Nintendo Swicth" === P) {
    x = 7, v = h(ha, "NintendoBrowser/");
  } else if (p.wiiu) {
    x = 6;
    v = h(ha, "NintendoBrowser/");
    var Q = 15, X = h(ha, "AppleWebKit/") || (Fb ? 536 : 534);
    v || (v = Fb ? 4 : 2, m(ha, "Macintosh;") || m(ha, "Windows NT") && m(ha, "Touch"));
  } else if (za && za.wiiremote) {
    x = 5, v = h(d, "Wii; U; ; ");
  } else if (U = h(d, "PlayStation Vita ")) {
    x = 10, v = U;
  } else if (U = h(d, "(PlayStation Portable); ")) {
    x = 8;
    v = U;
    var Sa = 3.3;
  } else if (U = h(d, "PLAYSTATION 3; ") || h(d, "PLAYSTATION 3 ")) {
    x = 11, v = U, 0 > na("4.10", U) && (Q = 26, X = U);
  } else if (m(d, "Xbox One")) {
    x = 15, v = 1;
  } else if (m(d, "Xbox")) {
    x = 14, v = 1;
  } else if (2 === jb && m(d, "Sony/COM2/")) {
    x = 17;
    v = 2;
    Sa = 3.4;
    var lb = !0;
  } else if (0 === P.indexOf("iP") || Ua || Ja || Ab) {
    if (Ja) {
      switch(v = Ja, Oa.substr(0, 4)) {
        case "iPho":
          var va = 0;
          h(Oa, va);
          var wa = !0;
          break;
        case "iPad":
          va = 1;
          h(Oa, va);
          var ka = !0;
          break;
        case "iPod":
          va = 2;
          h(Oa, va);
          var mb = !0;
      }
    } else {
      Ua ? v = Ua : (v = h(ha.split("_").join("."), "OS "), O("isSecureContext", p), O("enableWebGL", p), O("sameOrigin", p));
      if (!v || Cb) {
        v = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : R.isNaN ? 9.2 : p.SharedWorker ? xb && xb.now ? 8.0 : 8.4 : Fa ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : yb ? 4.3 : ia ? 4.1 : 3.2;
      }
      var Ga = S === 1.5 * F || 1.5 * S === F;
      0 === P.indexOf("iPhone") ? (va = 0, wa = !0) : 0 === P.indexOf("iPad") || Ab ? (va = 1, ka = !0) : 0 === P.indexOf("iPod") && (va = 2, mb = !0);
    }
    Q = !Ja && (w.standalone || (ka || 12 > v) && O("webkitFullscreenEnabled", A) || 11 <= v && 13 > v && w.mediaDevices) ? 16 : 17;
    x = 24;
    X = v;
  } else if (m(d, "Kobo")) {
    x = 18, Q = 21, X = 2.2, Ea = !0;
  } else if (m(d, "EBRD")) {
    x = 19, Q = 21, X = 2.2;
  } else if (U = h(d, "CrOS x86_64 ") || h(d, "CrOS aarch64 ") || h(d, "CrOS i686 ") || h(d, "CrOS armv7l ")) {
    x = 28, v = U;
  } else if (p.onmoztimechange !== Ma) {
    x = 29, v = 18.1 > Na ? "1.0.1" : 19 > Na ? 1.1 : 27 > Na ? 1.2 : 29 > Na ? 1.3 : 31 > Na ? 1.4 : 33 > Na ? 2.0 : 35 > Na ? 2.1 : 38 > Na ? 2.2 : 45 > Na ? 2.5 : 2.6, m(d, "Mobile") ? wa = !0 : m(d, "Tablet") ? ka = !0 : m(d, "TV");
  } else if (p.palmGetResource) {
    x = 30, v = h(d, "webOS/") || h(d, "WEBOS") || h(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (wa = !0);
  } else if (U = h(d, "Tizen ")) {
    x = 31, v = U, Q = 24, X = fb, wa = !0;
  } else if (U = h(d, "Windows Phone ") || h(ha, "Windows Phone OS ") || pb) {
    x = 23, v = U, wa = !0;
  } else if (u && "ARM" === P) {
    x = 23, v = 10, wa = !0;
  } else if (ob && m(ha, "ZuneWP")) {
    x = 23, v = 11 === Ha ? 8.1 : 10 === Ha ? 8 : 9 === Ha ? 7.5 : 7 === Ha ? 7 : "?", wa = !0;
  } else if (m(d, "FOMA;")) {
    x = 16, wa = !0;
  } else if (m(d, "SoftBank;")) {
    x = 16, wa = !0;
  } else if (m(d, "KFMUWI")) {
    var Aa = !0;
    v = 6.3;
    var pa = ka = !0;
  } else if (m(d, "KFKAWI")) {
    Aa = !0, v = 6, pa = ka = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    Aa = !0, v = 5, pa = ka = !0;
  } else if (m(d, "KFGIWI")) {
    Aa = !0, v = 5, pa = ka = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    Aa = !0, v = 5 <= la(oa) ? 5 : 4, pa = ka = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    Aa = !0, v = 3, pa = ka = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    Aa = !0, v = 2, pa = ka = !0;
  } else if (m(d, "Kindle Fire")) {
    Aa = !0, v = 1, pa = ka = !0;
  } else if (U = h(d, "Kindle/")) {
    x = 20, v = U, Q = 21, X = 2.2;
  } else if (sb) {
    Aa = !0, v = oa || tb, pa = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    Aa = !0, v = oa, pa = !0;
  } else if (m(d, "MeeGo")) {
    x = 32;
  } else if (m(d, "Maemo")) {
    x = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Pb) {
    x = 22, lb = !0;
  } else if ("WinCE" === P) {
    x = 21, lb = !0;
  } else if (0 === P.indexOf("Win")) {
    x = "Win16" === P ? 35 : "Win32" === P ? 36 : "Win64" === P ? 37 : 0, v = h(d, "Windows NT ") || h(d, "Windows ");
  } else if (0 === P.indexOf("Mac")) {
    x = "Mac68K" === P ? 39 : "MacPowerPC" === P || "MacPPC" === P ? 38 : "MacIntel" === P ? 40 : 0;
    if (U = h(d.split("_").join("."), "Mac OS X ")) {
      v = U;
    }
    var Mb = !0;
  } else if (m(d, "BlackBerry") || m(d, "BB10")) {
    x = 34, v = Ya, wa = !0;
  } else if (m(d, "SunOS") || m(d, "Sun Solaris")) {
    x = 42;
  } else if (m(d, "FreeBSD")) {
    x = 43;
  } else if (m(d, "OpenBSD")) {
    x = 44;
  } else if (m(d, "NetBSD")) {
    x = 45;
  } else if (Ea && hb) {
    m(d, "Android 4.4;") ? Ga = {min:2.3} : 4 <= la(oa) ? Ga = oa : Ga = {min:2.2}, v = Ga;
  } else if (Ea && za) {
    oa ? Ga = oa : Ga = {min:1.6}, v = Ga, m(d, "Tablet") ? ka = !0 : wa = !0;
  } else if (oa) {
    v = oa, Ea = !0;
  } else if (Ra && Ia || eb || gb) {
    var xa = !0;
    fb ? Ga = {min:4.4} : db && !ta || Jb || Lb ? Ga = {min:4} : (Ga = oa = Xa.touchAction !== Ma ? {min:5} : Eb ? 4.4 : yb ? w.connection ? p.searchBoxJavaBridge_ || db ? R.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Za ? 3 : 533 <= Za ? ia ? 2.3 : 2.2 : 530 <= Za ? 2.0 : 1.5, Db && (Q = 24, X = Db));
    v = Ga;
    Ea = !0;
  } else {
    rb ? (v = {min:5}, xa = Ea = !0) : Ra && (m(d, "Ubuntu") ? x = 46 : (U = h(d, "Mint/")) ? (x = 47, v = U) : (U = h(d, "Fedora/")) ? (x = 48, v = U) : x = m(d, "Gentoo") ? 49 : 50);
  }
  Aa || Ea && xa && $a ? x = 27 : Ea && (x = x || 26);
  Q || (pa = pa || Ea, za ? (Q = pa || lb || wa || ka ? 9 : 8, X = Rb) : ob ? (Ga = Va(ha, "Trident/") + 4, Q = lb || wa || ka || mb ? 3 : Mb && 5 <= Ha ? 7 : 2, X = Ha) : u ? (Q = 23 === x ? 6 : 5, X = h(ha, "Edge/")) : Bb ? (Q = 13, X = Bb) : hb ? (Q = pa ? 12 : 11, X = Na || da) : fb ? (Q = 24, X = fb) : (U = Sa || h(d, "NetFront/")) ? (Q = 18, X = U) : (U = h(d, "iCab")) ? (Q = 19, X = U) : (U = sa(h(d, "Opera Mini/"), h(d, "Opera Mobi/")) || Ib && Ya) ? (Q = 10, X = U, x || (m(d, "iPhone") ? 
  va = 0 : m(d, "iPad") ? va = 1 : m(d, "iPod") && (va = 2), va && (x = 24))) : zb ? (Q = 25, X = Kb) : qb ? (Q = 14, X = jb) : Ea && ta ? (Q = 21, X = oa) : db || Jb || Lb ? (Q = pa ? 22 : 20, X = kb || Ob) : Ea && Eb ? (Q = 23, X = 5 > la(oa) ? oa : kb) : Ea && (Ya || xa) ? (Q = 21, X = oa) : kb ? (Q = pa ? 22 : 20, X = kb) : Za && (Q = 15, X = Za));
  x && (aa[2] = x, v && (aa[3] = Hb(v)));
  Q && (aa[0] = Q, X && (aa[1] = Hb(X)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var aa = this[this.length - 1];
  --this.length;
  return aa;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var aa = arguments, p = 0, A = aa.length, w = this.length; p < A; ++p) {
    this[w + p] = aa[p];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var aa = this[0], p = 1, A = this.length; p < A; ++p) {
    this[p - 1] = this[p];
  }
  --this.length;
  return aa;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var aa = arguments, p = aa.length, A = this.length += p - 1, w = A; w >= p; --w) {
    this[w] = this[w - p];
  }
  for (w = 0; w < p; ++w) {
    this[w] = aa[w];
  }
  return A;
});
Array.prototype.splice || (Array.prototype.splice = function(aa, p) {
  var A = arguments, w = A.length - 2 - p, F = this.slice(aa, aa + p), la;
  if (0 < w) {
    var R = this.length - 1;
    for (la = aa + p; R >= la; --R) {
      this[R + w] = this[R];
    }
  } else if (0 > w) {
    R = aa + p;
    for (la = this.length; R < la; ++R) {
      this[R + w] = this[R];
    }
    this.length += w;
  }
  R = 2;
  for (la = A.length; R < la; ++R) {
    this[R - 2 + aa] = A[R];
  }
  return F;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(aa, p) {
  var A = this.length >>> 0;
  if (0 === A) {
    return -1;
  }
  if (p) {
    var w = p || 0;
    w = -Infinity === w ? 0 : (0 > w ? -w : w) | 0;
    if (A <= w) {
      return -1;
    }
  }
  for (w = 0 <= w ? w : 0 < A + w ? A + w : 0; w < A; ++w) {
    if (this[w] === aa) {
      return w;
    }
  }
  return -1;
});
(function(aa, p, A, w, F, la, R, Ma, Va, m, cb, O) {
  function h(r) {
    if (p[0] === r) {
      return P === P + "" ? R(P) : P;
    }
  }
  function sa(r) {
    var H = p[3];
    if (p[2] === r) {
      return H === H + "" ? R(H) : H;
    }
  }
  function Hb(r, H, ja) {
    r + "" === r && ("a" === r.charAt(2) && (ja = !0, r = r.substr(0, 2)), r = "CS" === r ? 7.2 > S ? 117 : 9 > u || 9 > S || Xa ? 1 : 132 : parseInt(r, 16));
    ja && (50 === r && (r = 128), 102 < r && 108 > r && (r += 24));
    return (r - 1) * -(6 * (H || 2));
  }
  var na = F.body, d = na.style, ha, jb, P = p[1], u = h(2) || h(3), Xa = h(7), Ha = h(5) || h(6), S = h(8) || h(9), ia = h(11) || h(12), xb = ia && 0 <= p.conpare(P, "1.9.1"), yb = h(13), Ia = h(15), Ya = h(16) || h(17), Ib = h(10) || h(25), za = h(20) || h(22), Rb = za || h(23) || h(21) || h(24), Jb = za && R(la.userAgent.split("Edg/")[1]), ob = R(la.appVersion.split("Trident/")[1]) + 4, db = sa(35) || sa(36) || sa(37), hb = !u && !Xa && (new Ma('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  zb = (Xa ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : 7.2 > S ? "opr70" : 8 > S ? "opr72" : 9.5 > S ? "opr" + (S | 0) : ia && !xb ? 1.3 <= ia ? "gck190" : 1 <= ia ? "gck121" : "gck097" : "modern") + ".css";
  sa(1) || sa(2) || sa(3) || sa(4) || sa(8) || sa(9) || sa(10);
  var Kb, pb, Ua, oa = d.transform !== O ? "transform" : d["-o-transform"] !== O ? "-o-transform" : d["-ms-transform"] !== O ? "-ms-transform" : d.MozTransform !== O ? "-moz-transform" : d["-webkit-transform"] !== O ? "-webkit-transform" : "", eb = [], Ea = [], Ra = [], Ab, Bb, Na, da, U, Cb, Za, kb, Ob, Lb;
  (function() {
    function r() {
      for (var c, g = 0, l = new cb() - 0; g < J.length;) {
        l < J[0].t ? ++g : (c = J.splice(g, 1)[0], c.f(c.p));
      }
      b = J.length ? Va(r, k) : 0;
    }
    function H() {
      for (var c, g = 0; g < V.length; ++g) {
        c = V[g], c.f();
      }
    }
    function ja() {
      C && (C = clearInterval(C));
    }
    function ea() {
      b && (b = m(b));
    }
    Cb = function(c) {
      V.length || (C = setInterval(H, D));
      V.push({f:c, v:++N});
      return N;
    };
    Za = function() {
      C && (ja(), C = setInterval(H, D));
    };
    kb = ja;
    var V = [], D = 500, N = 0, C;
    if (5 > u || Xa) {
      A._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    da = function(c, g, l) {
      J.length || (b = Va(r, k));
      J.push({f:c, p:g, v:++a, t:new cb() - 0 + (k < l ? l : k)});
      return a;
    };
    U = function(c) {
      for (var g = J.length, l; l = J[--g];) {
        if (l.v === c) {
          J.splice(g, 1);
          break;
        }
      }
      return 0;
    };
    Ob = function() {
      b && (ea(), b = Va(r, k));
    };
    Lb = ea;
    var J = [], k = 16, a = 0, b;
    if (5 > u || Xa) {
      A._wdb_ontimer = r, r = "_wdb_ontimer()";
    }
  })();
  var qb, Pb, $a, fb, Db, ta, gb, Ja, Oa, Eb, Fa, Fb, rb, sb, tb, x, v, Q, X, Sa, lb;
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
                for (var T = ++l, Z, Y = [], L = G.split(""), W = L.length; W;) {
                  Z = L[--W], "A" <= Z && "Z" >= Z && (Z = "-" + Z.toLowerCase()), Y[W] = Z;
                }
                g[T] = Y.join("") + ":" + K[G] + ";";
              }
              g[++l] = '"';
            } else {
              "className" === n && (n = "class"), g[++l] = " " + n + '="' + K + '"';
            }
          }
        }
      }
      g[++l] = ">";
      null != c && (C && "font" !== a ? g[++l] = "<FONT>" + c + "</FONT>" : g[++l] = c);
      g[++l] = "</" + a + ">";
      return g.join("");
    }
    function H(a) {
      a = "*" === a && 6 > u ? "*" !== a ? F.all.tags(a.toUpperCase()) : F.all : F.getElementsByTagName(a);
      var b = [], c = 0, g;
      for (g = a.length; c < g; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function ja(a) {
      return C ? a.parentElement : a.parentNode;
    }
    function ea(a, b, c, g, l, n) {
      if (C) {
        var G = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = fb(2 > a ? $a(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(G, r(c, g, l));
        return fb(b)[K];
      }
      b = J ? F.createElement(r(c, g)) : n ? F.createElementNS("http://www.w3.org/2000/svg", c) : F.createElement(c);
      if (g && !J) {
        for (G in g) {
          if ((c = g[G]) || 0 === c) {
            switch(G) {
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
                sb(b, G, c);
            }
          }
        }
      }
      k || null != l && V(b, l);
      return b;
    }
    function V(a, b) {
      if (C) {
        return ea(2, a, "font", O, b);
      }
      var c = F.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function D(a, b) {
      9 > u ? a.className = b : a.setAttribute("class", b);
    }
    function N(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var C = 5 > u;
    ha = H("html")[0];
    jb = H("head")[0];
    qb = H;
    Pb = function(a) {
      var b = [], c = 0, g, l = -1;
      if (9 > u || !F.getElementsByClassName) {
        var n = 6 > u ? F.all : F.getElementsByTagName("*");
      } else {
        var G = !0;
        n = F.getElementsByClassName(a);
      }
      for (g = n.length; c < g; ++c) {
        var K = n[c];
        if (G || (C || 1 === K.nodeType) && N(K, a)) {
          b[++l] = K;
        }
      }
      return b;
    };
    $a = ja;
    fb = function(a) {
      a = C ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Db = function(a) {
      var b = !(7.03 < S && 7.2 > S) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], g = a.length, l = -1, n; g;) {
        if (n = a[--g], b || 1 === n.nodeType) {
          C && "FONT" === n.tagName || (c[++l] = n);
        }
      }
      return c;
    };
    ta = function(a, b, c, g, l) {
      b = ea(2, a, b, c, g, l);
      C || (a.appendChild(b), k && null != g && V(b, g));
      return b;
    };
    gb = function(a, b, c, g, l) {
      b = ea(0, a, b, c, g, l);
      C || (ja(a).insertBefore(b, a), k && null != g && V(b, g));
      return b;
    };
    Ja = function(a, b, c, g, l) {
      b = ea(1, a, b, c, g, l);
      var n;
      C || ((n = a.nextSibling) ? $a(n).insertBefore(b, n) : $a(a).appendChild(b), k && null != g && V(b, g));
      return b;
    };
    Oa = V;
    Eb = function(a, b) {
      if (C) {
        return ea(0, a, "font", O, b);
      }
      var c = F.createTextNode("" + b);
      $a(a).insertBefore(c, a);
      return c;
    };
    Fa = function(a) {
      C ? a.outerHTML = "" : $a(a).removeChild(a);
    };
    var J = 9 > u, k = 9 > u;
    Fb = function(a) {
      return a.tagName.toUpperCase();
    };
    rb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    sb = function(a, b, c) {
      a.setAttribute(b, c);
    };
    tb = function(a, b) {
      a.removeAttribute(b);
    };
    x = D;
    v = N;
    Q = function(a, b) {
      var c;
      if (!N(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        D(a, c + b);
      }
    };
    X = function(a, b) {
      if (N(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        D(a, c.join(" "));
      }
    };
    Sa = function(a, b, c) {
      a.style[b] = c;
    };
    lb = function(a, b) {
      var c = -1, g, l;
      if (5.5 > u) {
        if (b) {
          for (g = b.split(";"); l = g[++c];) {
            var n = l.split(":");
            a.style[n[0]] = l.substr(n[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > S || 1 > ia ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var va, wa, ka, mb, Ga, Aa, pa, Mb, xa, B;
  (function() {
    function r() {
      return L ? t ? 2 : W ? 3 : 1 : 0;
    }
    function H(e) {
      wa(A, "load", H);
      H = O;
      ea(eb, e, !0);
      ka = eb = O;
    }
    function ja(e, f) {
      Aa(function() {
        var E = k(e);
        f(E);
        E.addListener(f);
        return !0;
      });
    }
    function ea(e, f, E) {
      for (var q = 0; q < e.length; ++q) {
        !0 === e[q](f) && (e.splice(q, 1), --q);
      }
      E && (e.length = 0);
    }
    function V(e, f, E) {
      c && !b.length && da(D);
      b.push(e, f, E);
    }
    function D() {
      var e = b, f;
      for (b = []; f = e.shift();) {
        ea(f, e.shift(), e.shift());
      }
    }
    function N(e) {
      var f = e || event;
      e = g[f.type];
      var E = -1, q, y;
      u ? (f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : n && (f.u = f.stopPropagation, f.stopPropagation = function() {
        y = !0;
      });
      for (; q = e[++E];) {
        q.l === this ? (this.g = q.j, this.g(f), this.g = w, this.g = O) : 7.2 > S && this === F && q.l === A && (A.g = q.j, A.g(f), delete A.g);
      }
      if (u) {
        return f.preventDefault = f.stopPropagation = O, f.returnValue;
      }
      n && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (K = !0), y && !K && f.u(), f.u = f.stopPropagation = O);
    }
    function C() {
      var e = 9 === a.offsetWidth;
      Mb !== e && V(Ea, Mb = e);
    }
    function J(e) {
      eb || ea(ba, e);
    }
    var k = A.matchMedia, a, b = [], c;
    eb.push(function() {
      ja = O;
      a = ta(na, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ka(function() {
        c = !0;
        b.length && da(D);
      });
    });
    va = function(e, f, E, q) {
      if (G) {
        e.addEventListener(f, E, q ? hb ? q : q.capture : !1);
      } else {
        var y = {l:e, j:E};
        q = g[f];
        var I = "on" + f, Ba, Ka;
        if (q) {
          for (Ba = q.length; Ka = q[--Ba];) {
            if (Ka.l === e && Ka.j === E) {
              return;
            }
          }
          g[f].push(y);
        } else {
          g[f] = q = [y], l || (f = e[I], "function" === typeof f && f !== N && q.unshift({l:e, j:f}));
        }
        l ? e.attachEvent(I, N) : e[I] = N;
      }
    };
    wa = function(e, f, E, q) {
      if (G) {
        e.removeEventListener(f, E, q ? hb ? q : q.capture : !1);
      } else {
        q = g[f];
        f = "on" + f;
        var y, I, Ba;
        if (q) {
          for (y = q.length; I = q[--y];) {
            I.l === e && (I.j === E ? q.splice(y, 1) : Ba = !0);
          }
          Ba || (l ? e.detachEvent(f, N) : (e[f] = w, e[f] = null));
        }
      }
    };
    var g = {}, l = !1, n = 525.13 > Ia, G = !n && !Xa && A.addEventListener, K;
    n && ha.addEventListener("click", function(e) {
      if (K) {
        return K = !1, e.preventDefault(), !1;
      }
    });
    ka = function(e) {
      eb.push(e);
    };
    mb = function(e) {
      T && T.push(e);
    };
    var T = [];
    if (419.3 >= Ia) {
      var Z = function() {
        if (Z) {
          var e = F.readyState;
          "loaded" === e || "complete" === e ? (Z = O, H()) : da(Z);
        }
      };
      da(Z);
    } else {
      va(A, "load", H);
    }
    u || 1.8 > ia ? va(A, "unload", function(e) {
      ea(T, e, !0);
    }) : T = O;
    Aa = function(e) {
      Ea.push(e);
    };
    ka(function() {
      C();
      Cb(C);
    });
    pa = function(e) {
      Ra && Ra.push(e);
    };
    var Y = 60 > ia || yb, L, W, t;
    if (89 <= ia || 89 <= za || db && 79 <= Jb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      B = !0, ja("(forced-colors:active)", function(e) {
        L = e.matches;
        xa = r();
        V(Ra, xa);
      });
    } else if (10 <= u || Ha || db && Jb) {
      B = !0, ja("(-ms-high-contrast:black-on-white)", function(e) {
        L = W = e.matches;
        xa !== r() && (xa = r(), V(Ra, xa));
      }), ja("(-ms-high-contrast:white-on-black)", function(e) {
        L = t = e.matches;
        xa !== r() && (xa = r(), V(Ra, xa));
      }), ja("(-ms-high-contrast:active)", function(e) {
        L = e.matches;
        xa !== r() && (xa = r(), V(Ra, xa));
      });
    } else if (db && (u || ia && 0 <= p.conpare(P, "1.8.1") || yb)) {
      var z = function() {
        function e(q, y) {
          if (y && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var I = q.split("(")[1].split(",");
          return R(I[0]) + R(I[1]) + R(I[2]);
        }
        var f = F.defaultView;
        var E = f ? f.getComputedStyle(a, null) : a.currentStyle;
        f = (E && E.color || "").split(" ").join("");
        E = (E && E.backgroundColor || "").split(" ").join("");
        f && (L = "#123456" !== f && "rgb(18,52,86)" !== f, W = e(f) < e(E, !0), t = e(f) > e(E, !0), xa !== r() && (xa = r(), V(Ra, xa, Y)));
      };
      Aa(function(e) {
        if (e) {
          return Sa(a, "color", "#123456"), Sa(a, "backgroundColor", "#123456"), Y ? (z(), Ra = O) : Cb(z), z = O, !0;
        }
      });
    } else {
      Ra = r = O;
    }
    Ga = function(e) {
      ba.push(e);
    };
    var ba = [], La = 0, Ca = 1 > ia || 1.2 <= ia && 1.8 > ia || 7.2 >= S;
    Ca ? Cb(function() {
      var e = A.scrollY || na.scrollTop;
      La !== e && (La = e, J());
    }) : va(A, "scroll", J);
    mb(function() {
      Ca || wa(A, "scroll", J);
    });
  })();
  var ma = 9 > u || 525 <= Ia && 530 > Ia || 2 > za, fa = 0, Da, Wa, Nb;
  (function() {
    function r(k) {
      for (var a = ea.length, b; a;) {
        if (b = ea[--a], b.D === k) {
          return b;
        }
      }
    }
    function H() {
      var k = F.styleSheets, a = [], b = 0, c = -1, g;
      if (k) {
        for (g = k.length; b < g; ++b) {
          if (2 > za || db && 526 > Ia) {
            var l = ja(k[b]);
            l.parentNode && (a[b] = l);
          } else {
            a[b] = ja(k[b]);
          }
        }
      } else {
        for (k = qb("*"), g = k.length; b < g; ++b) {
          l = k[b];
          var n = Fb(l);
          if ("STYLE" === n || "LINK" === n && "text/css" === rb(l, "type")) {
            a[++c] = l;
          }
        }
      }
      return a;
    }
    function ja(k) {
      return k.owningElement || k.ownerNode;
    }
    Da = function(k, a) {
      var b = H(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var g = b[c - 1];
      b = b[c];
      if (N || C) {
        var l = b ? gb(b, "style") : g ? Ja(g, "style") : ta(jb, "style");
        C && Oa(l, "");
        var n = l.styleSheet || l.sheet;
        k && sb(l, "media", k);
      } else if (V || D) {
        n = {C:k, B:c, G:!0};
      }
      if (n) {
        return ea.push({D:n, h:l, m:[]}), n;
      }
    };
    Wa = function(k) {
      k = r(k);
      var a = k.m, b = a.length, c;
      for (k.h && Fa(k.h); c = a[--b];) {
        c.i && Fa(c.i);
      }
      ea.splice(ea.indexOf(k), 1);
    };
    Nb = function(k, a, b, c) {
      var g = r(k), l = g.h;
      g = g.m;
      var n = "@import" === a, G = "@page" === a, K = "@font-face" === a, T = g.length, Z = "", Y;
      if (k.imports) {
        var L = k.imports.length;
      } else {
        for (L = 0; L < T && "@import" === g[L].A; ++L) {
        }
      }
      if (n) {
        c = 0 <= c && c < L ? c : L;
        var W = a + ' "' + b + '"';
      } else {
        c = L <= c && c < T ? c : T;
        for (W in b) {
          Z += ";" + W + ":" + b[W];
        }
        Z = Z.substr(1);
        W = a + "{" + Z + "}";
        6 <= u && K && (c = T);
      }
      T = {A:a, F:b, s:c, o:c};
      if (9 > u) {
        L = k.rules;
        var t = L.length;
        if (K) {
          a = F.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + W + "</style>", a = a.lastChild, (Y = l.nextSibling) ? $a(l).insertBefore(a, Y) : $a(l).appendChild(a), T.i = a;
        } else {
          if (n ? k.addImport(b, c) : 5.5 <= u && G || k.addRule(a, Z, c), T.o = c + (L.length - t - 1), 0 === L.length - t) {
            return -1;
          }
        }
      } else if (N || C) {
        (db && Ia || 28 > za) && n ? T.i = Ja(l, "link", {href:b, rel:"stylesheet", type:"text/css"}) : ma && K ? (a = T.i = Ja(l, "style", {type:"text/css", media:k.media}), a.innerText = W) : k.insertRule(W, c);
      }
      g.splice(c, 0, T);
      if (V || D) {
        l = r(k);
        Y = l.m;
        a = l.h;
        b = k.B;
        n = H();
        k = n[b - 1];
        b = n[b];
        n = [];
        K = G = -1;
        Z = "style";
        T = {type:"text/css", media:l.C};
        for (var z; L = Y[++G];) {
          if (W = L.A, L = L.F, "@import" === W) {
            n[++K] = W + ' "' + L + '"';
          } else {
            n[++K] = W + "{";
            W = "";
            for (z in L) {
              W += ";" + z + ":" + L[z];
            }
            n[++K] = W.substr(1) + "}";
          }
        }
        n = n.join("");
        V && (n = "data:text/css;charset=utf-8;base64," + J(n), T.rel = "stylesheet", T.href = n, Z = "link", n = O);
        a ? (l.h = Ja(a, Z, T, n), Fa(a)) : (a = b ? gb(b, Z, T, n) : k ? Ja(k, Z, T, n) : ta(jb, Z, T, n), l.h = a);
      }
      z = c;
      k = g.length;
      for (l = z; l < k; ++l) {
        Y = g[l], Y.i || (a = Y.o - Y.s, Y.s = z, Y.o = z + a, z += 1 + a);
      }
      return c;
    };
    var ea = [], V = 1 > ia || 8 <= S && 9 > S, D = 7.2 <= S && 8 > S, N = !!u || !V && !D && function() {
      var k = ta(ha, "style"), a = !(!k.styleSheet && !k.sheet);
      Fa(k);
      return a;
    }(), C = !N && Ia && !V && !D && function() {
      var k = ta(ha, "style");
      Oa(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      Fa(k);
      return a;
    }();
    fa = V || D ? 1 : N || C ? 2 : 0;
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
      if (525 > Ia || ia && !xb || 2.2 > h(21) || h(25) || 10 > h(3) || sa(32) || sa(30) || sa(1) || sa(2) || sa(3)) {
        return !1;
      }
      if (ma) {
        return !0;
      }
      if (2 === fa) {
        var D = Da();
        var N = Nb(D, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        N = D.cssText || D.cssRules && D.cssRules[N] && D.cssRules[N].cssText || "";
        N = N.match("src") && N.match("@font-face");
        Wa(D);
      }
      r = O;
      return V = !!N;
    }
    Ea.splice(0, 0, function() {
      if (Mb) {
        Ua = 8 <= u || Ha || 9.5 <= S || xb || yb || 522 <= Ia || 3 <= Ya || Ib || Rb ? 3 : 7.2 <= S ? 2 : 6 <= S || ia ? 1 : 0;
        if (!Ua && !u && !Xa) {
          var D = ta(na, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ua = 6 <= D.offsetWidth ? 2 : 0;
          Fa(D);
        }
        return !0;
      }
    });
    Ab = function(D) {
      function N(k) {
        J = U(J);
        H = k;
        C.onload = C.onerror = w;
        da(D, k);
      }
      if (H !== O) {
        da(D, H);
      } else if (8 > u) {
        da(D, !1);
      } else {
        var C = new Image(), J = da(function() {
          J && N(!1);
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
    var H;
    9 > u && ka(function() {
      var D = ta(na, "div");
      lb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Kb = 1 < D.offsetHeight;
      lb(D, "");
      Fa(D);
    });
    Bb = function(D, N) {
      function C() {
        if (k || !a || J.complete) {
          var b = !!J.width;
          pb = pb || b;
          da(D, b);
          J.onerror = J.onload = w;
          J = D = O;
        } else {
          --a, da(C);
        }
      }
      var J = new Image(), k, a = 99;
      J.onerror = function() {
        k = !0;
      };
      J.onload = function() {
        k = !0;
      };
      J.src = N;
      da(C);
    };
    var ja = 9 > u || 2 > za || 12 > S, ea = ["sans-serif", "serif"], V;
    Na = function(D, N, C, J, k, a, b) {
      function c(e) {
        D(e);
        Ca && !e && Wa(Ca);
        D = t = z = ba = Ca = O;
      }
      function g() {
        F.fonts.load('1.6em "' + N + '"').then(function() {
          G(N) ? da(c, La) : n(!0);
        }, function() {
          Ab(K);
        });
      }
      function l(e) {
        return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (L = new cb() - 0, !1) : e < new cb() - L;
      }
      function n(e) {
        e && (L = new cb() - 0);
        G(N) ? c(La) : l(Y) ? W ? c(0) : ja ? da(c, 0) : Ab(K) : da(n);
      }
      function G(e) {
        var f = 0, E = -1, q = 0;
        if (!ba) {
          var y = -1;
          var I;
          t = ta(na, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (ba = {}; I = ea[++y];) {
            Sa(t, "fontFamily", I), ba[I] = t.offsetWidth;
          }
        }
        for (5 > u ? t || (t = ta(na, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : na.appendChild(t); y = ea[++E];) {
          if (Sa(t, "fontFamily", '"' + e + '",' + y), t.offsetWidth !== ba[y]) {
            f = 1;
            break;
          }
        }
        !u && f && k && (t.innerHTML = k, e = t.offsetWidth, t.innerHTML = a, q = e === t.offsetWidth ? 1 : 0, t.innerHTML = "mmmmmmmmmmlli");
        Fa(t);
        5 > u && (t = O);
        return La = f + q;
      }
      function K(e) {
        (W = e) ? T(!0) : c(0);
      }
      function T(e) {
        var f;
        e && (L = new cb() - 0);
        for (f in C) {
          G(f) ? (z = ta(na, "div", {"aria-hidden":"true", className:J, id:J}), Ca = Da(), Nb(Ca, "@import", C[f]), da(Z, !0)) : l(100) ? (delete C[f], da(T, !0)) : da(T);
          return;
        }
        c(0);
      }
      function Z(e) {
        e && (L = new cb() - 0);
        1 < z.offsetWidth ? (Fa(z), Y = 100, da(n, !0)) : l(Y) ? 528 > Ia ? (Fa(z), Y = 100, da(n, !0)) : (Fa(z), c(0)) : da(Z);
      }
      var Y = b || 5000, L, W, t, z, ba, La, Ca;
      r || V ? V || r() ? !F.fonts || 603 > Ia ? n(!0) : g() : da(c, 0) : da(c, 0);
    };
  })();
  var Pa = String.fromCharCode, ub = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Pa(960), ")", "(", Pa(234), Pa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Pa(9824), "\u2190", Pa(9829), Pa(9830), Pa(9827), Pa(956), "\u03a9", "\u2193", "\u2192", "%", Pa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Pa(9619)], Xb = (9 === u || 2 <= ia) && !B, Gb = [], nb, Qb, Sb = 7.2 > S ? function() {
    nb = !nb;
    for (var r = -1, H; H = Gb[++r];) {
      -1 !== H.className.indexOf("pbAlp") ? Sa(H, "display", nb ? "" : "none") : (Q(H, nb ? "pbChrCS" : "pbChr00"), X(H, nb ? "pbChr00" : "pbChrCS"));
    }
  } : Xb ? function() {
    nb = !nb;
    for (var r = -1, H; H = Gb[++r];) {
      Sa(H, "opacity", nb ? 1 : 0);
    }
  } : O;
  var Tb = function(r) {
    Sb ? v(r, "pbChrCS") && (!Gb.length && S && setInterval(Sb, 400), -1 === Gb.indexOf(r) && Gb.push(r)) : Gb = O;
  };
  Xb && pa(function(r) {
    r ? Qb || (Qb = setInterval(Sb, 400)) : (clearInterval(Qb), Qb = 0);
  });
  B || pa(function(r) {
    r ? (sb(na, "forced-colors", 2 === r ? "lod" : 3 === r ? "dol" : "active"), (oa || 9 === u || 5.5 <= u && 9 > u && Kb) && Q(na, "jsCanRotate")) : (tb(na, "forced-colors"), X(na, "jsCanRotate"));
  });
  (function() {
    function r(t) {
      (K = t) ? V() : pb ? ea(!0) : pb !== O ? V() : Bb(ea, T);
    }
    function H() {
      H = O;
      Na(r, "PB-100", {"PB-100_canTTF":ab + "pbFont/ttf.css", "PB-100_canWOFF":ab + "pbFont/woff.css", "PB-100_canEOT":ab + "pbFont/eot.css", "PB-100_canSVG":ab + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function ja(t) {
      this.focus();
      t.preventDefault();
      t.stopPropagation();
    }
    function ea(t) {
      t && (Q(na, "pbList-noWebFont"), fa && (2 <= Ua ? Nb(Da(), ".pbList font:after", {content:"url(" + T + ")"}) : Nb(Da(), ".pbList font", {"background-image":"url(" + T + ")"})));
      V();
    }
    function V() {
      for (r = Na = O; G.length;) {
        D(G.shift(), G.shift());
      }
    }
    function D(t, z) {
      function ba(q) {
        q = fb(q);
        for (var y = -1, I; I = q[++y];) {
          switch(I.nodeType) {
            case 1:
              ba(I);
              break;
            case 3:
              I.data && Ca(I.data) && e.push(I);
          }
        }
      }
      function La(q) {
        var y = q.children, I = 0, Ba = y.length;
        if (Ba) {
          for (; I < Ba; ++I) {
            La(y[I]);
          }
        } else {
          (y = q.innerText) && Ca(y) && e.push(q);
        }
      }
      function Ca(q) {
        return q.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var e = [], f;
      if (r) {
        -1 === G.indexOf(t) && (G.push(t, z), Z && H && H());
      } else {
        var E = G.indexOf(t);
        0 <= E && G.splice(E, 2);
        for (5 > u ? La(t) : ba(t); f = e.shift();) {
          E = 5 > u ? f.innerText : f.data, 2 !== K && (E = E.split(b).join(k)), z ? 5 > u ? f.innerText = E : f.data = E : N(E.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(J).split("&amp;").join("&"), f);
        }
      }
    }
    function N(t, z) {
      function ba(qa, ra) {
        for (var vb = ""; ra;) {
          ra & 1 && (vb += qa), ra >>= 1, qa += qa;
        }
        return vb;
      }
      function La(qa, ra, vb) {
        for (var Ub, Zb = -1, Vb, Wb; Ub = ra[++Zb];) {
          for (; 0 <= (Vb = qa.indexOf(Ub));) {
            Wb = Ub.length, qa = qa.substr(0, Vb) + ba(vb, Wb) + qa.substr(Vb + Wb);
          }
        }
        return qa;
      }
      function Ca(qa) {
        var ra = R(qa), vb = "" + ra;
        return 0 < ra && ra === ra | 0 && (ra = qa.indexOf(vb) + vb.length, ra <= qa.length) ? ra : 0;
      }
      var e = " area line str cmd fnc syb".split(" "), f = 5 > u || 1 === z.nodeType, E = [], q = "", y, I = -1, Ba, Ka, bb;
      if (f) {
        if (L) {
          var ya = z.style.visibility;
          Sa(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (W) {
        var Qa = z;
        z = F.createDocumentFragment();
      }
      if (function(qa) {
        var ra = qa.indexOf("P");
        if (-1 === ra) {
          return !1;
        }
        ra = R(qa.charAt(ra + 1));
        return 0 <= ra && 9 >= ra;
      }(t)) {
        q = ba("+", t.length);
      } else {
        0 <= (y = Ca(t)) && (q = ba("|", y), I = y, --I);
        for (; y = t.charAt(++I);) {
          y === J || Ba ? (q += "~", y === J && (Ba = !Ba)) : q += y;
        }
        q = La(q, n, "^");
        q = La(q, g, "{");
        q = La(q, l, "}");
      }
      I = 0;
      for (Ba = t.length; I < Ba; ++I) {
        y = t.charAt(I);
        var M = y === c;
        var Ta = " " === y;
        y = M ? " " : y;
        var ca = q.charAt(I);
        var ib = (Ka = wb) && M;
        var wb = "|" === ca;
        ca = e["+|~{}^".indexOf(ca) + 1];
        "\n" !== y ? (K || !pb ? (2 === K && t.substr(I, 2) === b && (y = b, ++I), ca = Ta && "str" === ca ? "pbList-strsp" : M ? "" : !Ta && ca ? "pbList-" + ca : "") : (M = ub.indexOf(y), M = -1 === M ? "" : ub.indexOf(y).toString(16).toUpperCase(), M = (M = 1 === M.length ? "0" + M : M) ? "pbChr" + M : "", ca = Ta && "str" === ca ? "pbList-strsp" : Ta || !M ? "" : ca ? (M ? M + " " : "") + "pbList-" + ca : M), M = O, ib ? (y = 6 <= u && 8 > u ? " " : c, ca = "") : wb && (1.9 > ia || 9.5 > S) ? 
        (wb && !Ka && (bb = 4 - (R(t.substr(I)) + "").length), 7.5 > S ? M = Y ? "position:relative;top:-4px;left:" + 12 * bb + "px" : {position:"relative", top:"-4px", left:12 * bb + "px"} : 1.3 <= ia ? (M = Y ? "position:absolute;left:" + 12 * bb + "px" : {position:"absolute", left:12 * bb + "px"}, ++bb) : M = Y ? "position:relative;left:" + 12 * bb + "px" : {position:"relative", left:12 * bb + "px"}) : Ta && 7.5 > S && (ca = "pbList-strsp"), Y ? E.push("<font" + (ca ? ' class="' + ca + '"' : "") + 
        (M ? ' style="' + M + '"' : "") + ">" + y + "</font>") : f || W ? ta(z, "font", {"class":ca, style:M}, y) : gb(z, "font", {"class":ca, style:M}, y)) : (Ka = wb = !1, Y ? E.push(y) : f || W ? Oa(z, y) : Eb(z, y));
      }
      if (f) {
        Y ? z.innerHTML = E.join("") : W && Qa.appendChild(z), L && Sa(z, "visibility", ya);
      } else {
        if (Y) {
          e = F.createElement("font");
          for (e.innerHTML = E.join(""); E = e.firstChild;) {
            z.parentNode.insertBefore(E, z);
          }
          Fa(z);
        } else {
          W ? Qa.parentNode.replaceChild(z, Qa) : Fa(z);
        }
      }
    }
    Aa(function(t) {
      if (t) {
        t = Pb("pbChrCS");
        for (var z = 0, ba = t.length; z < ba; ++z) {
          Tb(t[z]);
        }
        return !0;
      }
    });
    var C = [];
    Aa(function(t) {
      function z(ya) {
        var Qa = rb(ya, "pbTip"), M = Qa.charAt(0), Ta = "_" === M;
        Qa = Ta ? Qa.charAt(2) : M;
        M = Ta ? "Btm" : "";
        var ca = rb(ya, "title");
        Ca || (tb(ya, "pbTip"), tb(ya, "title"), Q(ya, "pbTipPos" + Qa.toUpperCase()), ta(ya, "div", {className:"pbTip" + M, style:{width:ca.length + La + "em"}}, ca));
        ta(ya, "div", {className:"pbTail" + M});
        e && Ta && (ya.focus(), ya.blur());
      }
      function ba(ya) {
        if (2 > Ua) {
          var Qa = rb(ya, "pbGhst"), M = ya.className, Ta = M.split("pbCsr")[1] || "", ca = M.split("pbAlp")[1] || "";
          if ("CS" === Qa) {
            var ib = "_";
          } else {
            ib = Qa, 3 === ib.length && (ib = ib.substr(0, 2)), ib = ub[parseInt(ib, 16)] || "~";
          }
          var wb;
          Ta = Ta.split(" ")[0];
          ca = R(ca.split(" ")[0]);
          var qa = 10 - ca;
          ca && 7.2 > S && (M = M.split("pbChr")[1], M = M.split(" ")[0], Sa(ya, "backgroundPosition", Hb(M, 2, I) + "px " + -24 * (10 - ca) + "px"));
          Qa && (7.2 > S && (wb = {backgroundPosition:Hb(Qa, 2, I) + "px " + -24 * (10 - qa) + "px"}), tb(ya, "pbGhst"), E = gb(ya, "b", {className:"pbChr" + Qa + " pbAlp" + qa + " pbCsr" + Ta, style:wb}, ib), Tb(E));
          Tb(ya);
        }
      }
      if (t) {
        var La = 6 > u ? 2 : 0;
        t = qb("SAMP");
        var Ca = 8 === u, e = 5 <= u && 6 > u, f, E, q, y;
        Kb && Q(na, "pbLCD-AX");
        if (t.length) {
          for (q = -1; f = t[++q];) {
            if (v($a(f), "pbLCD")) {
              var I = v(f, "PB-120") || v(f, "FX-795P");
              var Ba = Db(f);
              for (f = Ba.length; f;) {
                var Ka = Ba[--f];
                switch(Fb(Ka)) {
                  case "A":
                    (2 > Ua || Ca) && z(Ka);
                    if (2 > Ua) {
                      var bb = Db(Ka);
                      for (y = bb.length; y;) {
                        !Ca && ba(bb[--y]);
                      }
                    }
                    Ib ? sb(Ka, "href", "javascript:void(0)") : (va(Ka, "click", ja), C.push(Ka));
                    break;
                  case "B":
                    2 > Ua && ba(Ka);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    mb(function(t) {
      for (; t = C.shift();) {
        wa(t, "click", ja);
      }
    });
    6 === u && (new Ma("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var J = ub[7], k = ub[30], a = ub[113], b = Pa(8337) + Pa(8331), c = Pa(160);
    Pa(8194);
    var g = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), n = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + ub[31]).split(""), G = [], K, T, Z;
    Aa(function(t) {
      if (t) {
        T = ab + "pbFont/x3mask.png";
        t = qb("*");
        for (var z = -1, ba; ba = t[++z];) {
          v(ba, "pbList") ? D(ba) : v(ba, "pbFont") && D(ba, !0);
        }
        G.length && H();
        return !0;
      }
    });
    ia && p.conpare(P, "0.9.6");
    var Y = !1, L = 8 > S, W = !Y && !L && !(6 > u) && F.createDocumentFragment && !!na.replaceChild;
    aa.prettify = D;
  })();
  var Yb = F.scripts || qb("script");
  var ab = Yb[Yb.length - 1].src.split("/");
  --ab.length;
  (ab = ab.join("/")) && (ab += "/");
  6.1 > Ya && Ga(Za);
  mb(kb);
  6.1 > Ya && Ga(Ob);
  mb(Lb);
  10 > u && (11 !== ob || 5 !== u) || (9 > S || 1 > ia || !Xa && !A.addEventListener ? F.write('<link href="' + ab + zb + '" rel="stylesheet"' + (8 > S ? "" : ' media="screen,handheld,projection,print"') + ">") : ka(function() {
    ta(jb, "link", {href:ab + "" + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

