PB100={};ua = [];
ua.conpare = function(ba, r) {
  var D = 0, v, I, qa = (ba + "").split("."), T = (r + "").split("."), Ka = qa.length;
  for (v = T.length; "0" === qa[Ka - 1];) {
    --Ka;
  }
  for (; "0" === T[v - 1];) {
    --v;
  }
  for (I = Ka < v ? Ka : v; D < I; ++D) {
    var Va = qa[D] - 0, m = T[D] - 0;
    if (Va !== m) {
      return Va > m ? 1 : -1;
    }
  }
  return Ka > v ? 1 : Ka === v ? 0 : -1;
};
(function(ba, r, D, v, I, qa, T, Ka) {
  function Va(u, pa, la) {
    la = qa(u.split(pa)[1]);
    return 0 <= la ? la : 0;
  }
  function m(u, pa) {
    return 0 <= u.indexOf(pa);
  }
  function Za(u) {
    return m(u, "Linux armv") || m(u, "Linux aarch") || m(u, "Linux i686") || m(u, "Linux x86_64");
  }
  function N(u, pa) {
    for (var la in pa) {
      if (la === u) {
        return !0;
      }
    }
  }
  function g(u, pa) {
    var la = "", Na = -1, Wa;
    if (u = u.split(pa)[1]) {
      for (; Wa = u.charCodeAt(++Na);) {
        if (48 <= Wa && 57 >= Wa || 46 === Wa) {
          la += u.charAt(Na);
        } else {
          break;
        }
      }
      for (Na = la.length; Na;) {
        if (46 === la.charCodeAt(--Na)) {
          la = la.substr(0, Na);
        } else {
          break;
        }
      }
    }
    return la;
  }
  function wa(u) {
    for (var pa = arguments, la = 1, Na = pa[0], Wa; la < pa.length; ++la) {
      0 > Ea(Na, Wa = pa[la]) && (Na = Wa);
    }
    return Na;
  }
  function Cb(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var Ea = ba.conpare, d = v.userAgent, ea = v.appVersion, eb = qa(ea) || 0, S = v.platform, t = D.documentElement, Qa = t && t.style, Fa = D.documentMode, W = I.width;
  I = I.height;
  var ca = r.HTMLAudioElement, lb = r.performance, mb = r.Int8Array, Ga = r.ontouchstart !== Ka, Xa = g(ea, "Version/") || g(d, "Version/"), Db = r.operamini, za = !Db && r.opera, Rb = za && (za.version && "function" === typeof za.version ? za.version() : wa(g(d, "Opera "), Xa, eb)), Eb = r.opr, nb = !za && (D.all || Fa);
  Fa = nb && (Fa ? Fa : r.XMLHttpRequest ? D.getElementsByTagName ? 7 : 4 : D.compatMode ? 6 : (0).toFixed ? 5.5 : r.attachEvent ? 5 : 4);
  t = !nb && t.msContentZoomFactor;
  var $a = !t && (r.chrome || r.chromium), cb = !nb && function() {
    for (var u in Qa) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), xb = m(d, "UCWEB"), Fb = xb && g(d, " U2/"), ob = xb && g(d, "; wds "), fb = g(d.split("_").join("."), "; iPh OS "), ja = g(d, "; Adr "), yb = m(ea, "YJApp-ANDROID"), xa = m(S, "Android") || cb && m(ea, "Android") || yb;
  ja = g(S, "Android ") || g(ea, "Android ") || g(d, "Android ") || ja;
  var pb = m(S, "Linux"), Ra = "MacIntel" === S && v.standalone !== Ka, qb = cb && g(d, "Goanna/"), Oa = !qb && cb && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Gb = g(d, "Firefox/"), z = g(d, "Opera/"), Lb = r.FNRBrowser, Pa = Va(d, "AppleWebKit/"), gb = g(d, "Chrome/"), Mb = g(ea, "Iron/"), Hb = g(d, "OPR/"), Nb = g(ea, "KHTML/"), rb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var Ob = g(d, "Silk/"), Ha = Va(d, "SamsungBrowser/"), sb = !Ha && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    pa, la = u.length; pa = u[--la];) {
      if (m(d, pa)) {
        return 2 > qa(Xa) ? Xa : 0.9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (la = u.length; pa = u[--la];) {
      if (m(d, pa)) {
        return Xa;
      }
    }
  }(), zb = $a && 534.3 >= Pa, ra = Za(S), Ia = ra && !m(d, S) && Za(d);
  Ga = Ga && (Pa || cb) && Ia || !ja && yb;
  yb = !!r.ReactNativeWebView;
  ra = ra && function() {
    for (var u in r) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ba = (Ia = r.puffinDevice) && Ia.clientInfo;
  Ba = (Ia = Ba && "iOS" === Ba.os && Ba.osVersion) && Ba.model;
  var hb = !Fa && D.registerElement, Pb = !Fa && D.execCommand, Aa = r.webkitCancelAnimationFrame, Ib = pb && hb && "11.0.696.34" === gb, tb = r._firefoxTV_playbackStateObserverJava, ub = Va(d, "diordnA ");
  if ("Nitro" === S) {
    var x = 1;
  } else if ("Nintendo DSi" === S) {
    x = 2;
    var w = z;
  } else if ("New Nintendo 3DS" === S || m(d, "iPhone OS 6_0") && 320 === W && 240 === I) {
    x = 4, w = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === S) {
    x = 3, w = g(d, "Version/"), Pa = 535;
  } else if ("Nintendo Swicth" === S) {
    x = 7, w = g(ea, "NintendoBrowser/");
  } else if (r.wiiu) {
    x = 6;
    w = g(ea, "NintendoBrowser/");
    var P = 15, U = g(ea, "AppleWebKit/") || (Aa ? 536 : 534);
    w || (w = Aa ? 4 : 2, m(ea, "Macintosh;") || m(ea, "Windows NT") && m(ea, "Touch"));
  } else if (za && za.wiiremote) {
    x = 5, w = g(d, "Wii; U; ; ");
  } else if (z = g(d, "PlayStation Vita ")) {
    x = 10, w = z;
  } else if (z = g(d, "(PlayStation Portable); ")) {
    x = 8;
    w = z;
    var Ab = 3.3;
  } else if (z = g(d, "PLAYSTATION 3; ") || g(d, "PLAYSTATION 3 ")) {
    x = 11, w = z, 0 > Ea("4.10", z) && (P = 26, U = z);
  } else if (m(d, "Xbox One")) {
    x = 15, w = 1;
  } else if (m(d, "Xbox")) {
    x = 14, w = 1;
  } else if (2 === eb && m(d, "Sony/COM2/")) {
    x = 17;
    w = 2;
    Ab = 3.4;
    var Ja = !0;
  } else if (0 === S.indexOf("iP") || fb || Ia || Ra) {
    if (Ia) {
      switch(w = Ia, Ba.substr(0, 4)) {
        case "iPho":
          var Ca = 0;
          g(Ba, Ca);
          var sa = !0;
          break;
        case "iPad":
          Ca = 1;
          g(Ba, Ca);
          var ta = !0;
          break;
        case "iPod":
          Ca = 2;
          g(Ba, Ca);
          var db = !0;
      }
    } else {
      fb ? w = fb : (w = g(ea.split("_").join("."), "OS "), N("isSecureContext", r), N("enableWebGL", r), N("sameOrigin", r));
      if (!w || Lb) {
        w = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : v.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : T.isNaN ? 9.2 : r.SharedWorker ? lb && lb.now ? 8.0 : 8.4 : Pb ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : mb ? 4.3 : ca ? 4.1 : 3.2;
      }
      var va = W === 1.5 * I || 1.5 * W === I;
      0 === S.indexOf("iPhone") ? (Ca = 0, sa = !0) : 0 === S.indexOf("iPad") || Ra ? (Ca = 1, ta = !0) : 0 === S.indexOf("iPod") && (Ca = 2, db = !0);
    }
    P = !Ia && (v.standalone || (ta || 12 > w) && N("webkitFullscreenEnabled", D) || 11 <= w && 13 > w && v.mediaDevices) ? 16 : 17;
    x = 24;
    U = w;
  } else if (m(d, "Kobo")) {
    x = 18, P = 21, U = 2.2, xa = !0;
  } else if (m(d, "EBRD")) {
    x = 19, P = 21, U = 2.2;
  } else if (z = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    x = 28, w = z;
  } else if (r.onmoztimechange !== Ka) {
    x = 29, w = 18.1 > Oa ? "1.0.1" : 19 > Oa ? 1.1 : 27 > Oa ? 1.2 : 29 > Oa ? 1.3 : 31 > Oa ? 1.4 : 33 > Oa ? 2.0 : 35 > Oa ? 2.1 : 38 > Oa ? 2.2 : 45 > Oa ? 2.5 : 2.6, m(d, "Mobile") ? sa = !0 : m(d, "Tablet") ? ta = !0 : m(d, "TV");
  } else if (r.palmGetResource) {
    x = 30, w = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (sa = !0);
  } else if (z = g(d, "Tizen ")) {
    x = 31, w = z, P = 24, U = Ha, sa = !0;
  } else if (z = g(d, "Windows Phone ") || g(ea, "Windows Phone OS ") || ob) {
    x = 23, w = z, sa = !0;
  } else if (t && "ARM" === S) {
    x = 23, w = 10, sa = !0;
  } else if (nb && m(ea, "ZuneWP")) {
    x = 23, w = 11 === Fa ? 8.1 : 10 === Fa ? 8 : 9 === Fa ? 7.5 : 7 === Fa ? 7 : "?", sa = !0;
  } else if (m(d, "FOMA;")) {
    x = 16, sa = !0;
  } else if (m(d, "SoftBank;")) {
    x = 16, sa = !0;
  } else if (m(d, "KFMUWI")) {
    var La = !0;
    w = 6.3;
    var na = ta = !0;
  } else if (m(d, "KFKAWI")) {
    La = !0, w = 6, na = ta = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    La = !0, w = 5, na = ta = !0;
  } else if (m(d, "KFGIWI")) {
    La = !0, w = 5, na = ta = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    La = !0, w = 5 <= qa(ja) ? 5 : 4, na = ta = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    La = !0, w = 3, na = ta = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    La = !0, w = 2, na = ta = !0;
  } else if (m(d, "Kindle Fire")) {
    La = !0, w = 1, na = ta = !0;
  } else if (z = g(d, "Kindle/")) {
    x = 20, w = z, P = 21, U = 2.2;
  } else if (tb) {
    La = !0, w = ja || ub, na = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    La = !0, w = ja, na = !0;
  } else if (m(d, "MeeGo")) {
    x = 32;
  } else if (m(d, "Maemo")) {
    x = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || rb) {
    x = 22, Ja = !0;
  } else if ("WinCE" === S) {
    x = 21, Ja = !0;
  } else if (0 === S.indexOf("Win")) {
    x = "Win16" === S ? 35 : "Win32" === S ? 36 : "Win64" === S ? 37 : 0, w = g(d, "Windows NT ") || g(d, "Windows ");
  } else if (0 === S.indexOf("Mac")) {
    x = "Mac68K" === S ? 39 : "MacPowerPC" === S || "MacPPC" === S ? 38 : "MacIntel" === S ? 40 : 0;
    if (z = g(d.split("_").join("."), "Mac OS X ")) {
      w = z;
    }
    var Jb = !0;
  } else if (m(d, "BlackBerry") || m(d, "BB10")) {
    x = 34, w = Xa, sa = !0;
  } else if (m(d, "SunOS") || m(d, "Sun Solaris")) {
    x = 42;
  } else if (m(d, "FreeBSD")) {
    x = 43;
  } else if (m(d, "OpenBSD")) {
    x = 44;
  } else if (m(d, "NetBSD")) {
    x = 45;
  } else if (xa && cb) {
    m(d, "Android 4.4;") ? va = {min:2.3} : 4 <= qa(ja) ? va = ja : va = {min:2.2}, w = va;
  } else if (xa && za) {
    ja ? va = ja : va = {min:1.6}, w = va, m(d, "Tablet") ? ta = !0 : sa = !0;
  } else if (ja) {
    w = ja, xa = !0;
  } else if (pb && Ga || yb || ra) {
    var vb = !0;
    Ha ? va = {min:4.4} : $a && !zb || Eb || Hb ? va = {min:4} : (va = ja = Qa.touchAction !== Ka ? {min:5} : hb ? 4.4 : mb ? v.connection ? r.searchBoxJavaBridge_ || $a ? T.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Pa ? 3 : 533 <= Pa ? ca ? 2.3 : 2.2 : 530 <= Pa ? 2.0 : 1.5, sb && (P = 24, U = sb));
    w = va;
    xa = !0;
  } else {
    Ib ? (w = {min:5}, vb = xa = !0) : pb && (m(d, "Ubuntu") ? x = 46 : (z = g(d, "Mint/")) ? (x = 47, w = z) : (z = g(d, "Fedora/")) ? (x = 48, w = z) : x = m(d, "Gentoo") ? 49 : 50);
  }
  La || xa && vb && Ob ? x = 27 : xa && (x = x || 26);
  P || (na = na || xa, za ? (P = na || Ja || sa || ta ? 9 : 8, U = Rb) : nb ? (va = Va(ea, "Trident/") + 4, P = Ja || sa || ta || db ? 3 : Jb && 5 <= Fa ? 7 : 2, U = Fa) : t ? (P = 23 === x ? 6 : 5, U = g(ea, "Edge/")) : qb ? (P = 13, U = qb) : cb ? (P = na ? 12 : 11, U = Oa || Gb) : Ha ? (P = 24, U = Ha) : (z = Ab || g(d, "NetFront/")) ? (P = 18, U = z) : (z = g(d, "iCab")) ? (P = 19, U = z) : (z = wa(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Db && Xa) ? (P = 10, U = z, x || (m(d, "iPhone") ? 
  Ca = 0 : m(d, "iPad") ? Ca = 1 : m(d, "iPod") && (Ca = 2), Ca && (x = 24))) : xb ? (P = 25, U = Fb) : Nb ? (P = 14, U = eb) : xa && zb ? (P = 21, U = ja) : $a || Eb || Hb ? (P = na ? 22 : 20, U = gb || Mb) : xa && hb ? (P = 23, U = 5 > qa(ja) ? ja : gb) : xa && (Xa || vb) ? (P = 21, U = ja) : gb ? (P = na ? 22 : 20, U = gb) : Pa && (P = 15, U = Pa));
  x && (ba[2] = x, w && (ba[3] = Cb(w)));
  P && (ba[0] = P, U && (ba[1] = Cb(U)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var ba = this[this.length - 1];
  --this.length;
  return ba;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ba = arguments, r = 0, D = ba.length, v = this.length; r < D; ++r) {
    this[v + r] = ba[r];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ba = this[0], r = 1, D = this.length; r < D; ++r) {
    this[r - 1] = this[r];
  }
  --this.length;
  return ba;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ba = arguments, r = ba.length, D = this.length += r - 1, v = D; v >= r; --v) {
    this[v] = this[v - r];
  }
  for (v = 0; v < r; ++v) {
    this[v] = ba[v];
  }
  return D;
});
Array.prototype.splice || (Array.prototype.splice = function(ba, r) {
  var D = arguments, v = D.length - 2 - r, I = this.slice(ba, ba + r), qa;
  if (0 < v) {
    var T = this.length - 1;
    for (qa = ba + r; T >= qa; --T) {
      this[T + v] = this[T];
    }
  } else if (0 > v) {
    T = ba + r;
    for (qa = this.length; T < qa; ++T) {
      this[T + v] = this[T];
    }
    this.length += v;
  }
  T = 2;
  for (qa = D.length; T < qa; ++T) {
    this[T - 2 + ba] = D[T];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ba, r) {
  var D = this.length >>> 0;
  if (0 === D) {
    return -1;
  }
  if (r) {
    var v = r || 0;
    v = -Infinity === v ? 0 : (0 > v ? -v : v) | 0;
    if (D <= v) {
      return -1;
    }
  }
  for (v = 0 <= v ? v : 0 < D + v ? D + v : 0; v < D; ++v) {
    if (this[v] === ba) {
      return v;
    }
  }
  return -1;
});
(function(ba, r, D, v, I, qa, T, Ka, Va, m, Za, N) {
  function g(p) {
    if (r[0] === p) {
      return S === S + "" ? T(S) : S;
    }
  }
  function wa(p) {
    var K = r[3];
    if (r[2] === p) {
      return K === K + "" ? T(K) : K;
    }
  }
  function Cb(p, K, ma) {
    p + "" === p && ("a" === p.charAt(2) && (ma = !0, p = p.substr(0, 2)), p = "CS" === p ? 7.2 > W ? 117 : 0.9 > ca || 9 > t || 9 > W || Qa ? 1 : 132 : parseInt(p, 16));
    ma && (50 === p && (p = 128), 102 < p && 108 > p && (p += 24));
    return (p - 1) * -(6 * (K || 2));
  }
  var Ea = I.body, d = Ea.style, ea, eb, S = r[1], t = g(2) || g(3), Qa = g(7), Fa = g(5) || g(6), W = g(8) || g(9), ca = g(11) || g(12), lb = ca && 0 <= r.conpare(S, "1.9.1"), mb = g(13), Ga = g(15), Xa = g(16) || g(17), Db = g(10) || g(25), za = g(20) || g(22), Rb = za || g(23) || g(21) || g(24), Eb = za && T(qa.userAgent.split("Edg/")[1]), nb = T(qa.appVersion.split("Trident/")[1]) + 4, $a = wa(35) || wa(36) || wa(37), cb = !t && !Qa && (new Ka('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  xb = (Qa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > W ? "opr70" : 8 > W ? "opr72" : 9.5 > W ? "opr" + (W | 0) : ca && !lb ? 1.4 <= ca ? "gck19" : 1.3 <= ca ? "gck13" : 1 <= ca ? "gck12" : 0.9 <= ca ? "gck09" : 0.8 <= ca ? "gck08" : "gck07" : "modern") + ".css";
  wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9) || wa(10);
  var Fb, ob, fb, ja, yb = d.transform !== N ? "transform" : d["-o-transform"] !== N ? "-o-transform" : d["-ms-transform"] !== N ? "-ms-transform" : d.MozTransform !== N ? "-moz-transform" : d["-webkit-transform"] !== N ? "-webkit-transform" : "", xa = [], pb = [], Ra = [], qb, Oa, Gb, z, Lb, Pa, gb, Mb, Hb, Nb;
  (function() {
    function p() {
      for (var c, e = 0, h = new Za() - 0; e < V.length;) {
        h < V[0].t ? ++e : (c = V.splice(e, 1)[0], c.f(c.p));
      }
      b = V.length ? Va(p, k) : 0;
    }
    function K() {
      for (var c, e = 0; e < y.length; ++e) {
        c = y[e], c.f();
      }
    }
    function ma() {
      E && (E = clearInterval(E));
    }
    function ha() {
      b && (b = m(b));
    }
    Pa = function(c) {
      y.length || (E = setInterval(K, M));
      y.push({f:c, v:++Q});
      return Q;
    };
    gb = function() {
      E && (ma(), E = setInterval(K, M));
    };
    Mb = ma;
    var y = [], M = 500, Q = 0, E;
    if (5 > t || Qa) {
      D._wdb_onlooptimer = K, K = "_wdb_onlooptimer()";
    }
    z = function(c, e, h) {
      V.length || (b = Va(p, k));
      V.push({f:c, p:e, v:++a, t:new Za() - 0 + (k < h ? h : k)});
      return a;
    };
    Lb = function(c) {
      for (var e = V.length, h; h = V[--e];) {
        if (h.v === c) {
          V.splice(e, 1);
          break;
        }
      }
      return 0;
    };
    Hb = function() {
      b && (ha(), b = Va(p, k));
    };
    Nb = ha;
    var V = [], k = 16, a = 0, b;
    if (5 > t || Qa) {
      D._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var rb, Ob, Ha, sb, zb, ra, Ia, Ba, hb, Pb, Aa, Ib, tb, ub, x, w, P, U, Ab, Ja, Ca;
  (function() {
    function p(a, b, c) {
      var e = ["<", a], h = 1, q, H;
      if (b) {
        for (q in b) {
          var L = b[q];
          if (null != L && "" !== L) {
            if ("style" === q) {
              e[++h] = ' style="';
              for (H in L) {
                for (var Y = ++h, Z, aa = [], R = H.split(""), F = R.length; F;) {
                  Z = R[--F], "A" <= Z && "Z" >= Z && (Z = "-" + Z.toLowerCase()), aa[F] = Z;
                }
                e[Y] = aa.join("") + ":" + L[H] + ";";
              }
              e[++h] = '"';
            } else {
              "className" === q && (q = "class"), e[++h] = " " + q + '="' + L + '"';
            }
          }
        }
      }
      e[++h] = ">";
      null != c && (E && "font" !== a ? e[++h] = "<FONT>" + c + "</FONT>" : e[++h] = c);
      e[++h] = "</" + a + ">";
      return e.join("");
    }
    function K(a) {
      a = "*" === a && 6 > t ? "*" !== a ? I.all.tags(a.toUpperCase()) : I.all : I.getElementsByTagName(a);
      var b = [], c = 0, e;
      for (e = a.length; c < e; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function ma(a) {
      return E ? a.parentElement : a.parentNode;
    }
    function ha(a, b, c, e, h, q) {
      if (E) {
        var H = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var L = sb(2 > a ? Ha(b) : b);
        L = 2 > a ? L.indexOf(b) + a : L.length;
        b.insertAdjacentHTML(H, p(c, e, h));
        b = sb(b)[L];
        null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (V) {
        b = I.createElement(p(c, e));
      } else {
        b = q ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
        if (e) {
          for (H in e) {
            if ((c = e[H]) || 0 === c) {
              switch(H) {
                case "class":
                case "className":
                  w(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (L in c) {
                    a[L] = c[L];
                  }
                  break;
                default:
                  ub(b, H, c);
              }
            }
          }
        }
        k || null != h && y(b, h);
      }
      return b;
    }
    function y(a, b) {
      if (E) {
        return ha(2, a, "font", N, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function M(a, b) {
      9 > t ? a.className = b : a.setAttribute("class", b);
    }
    function Q(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var E = 5 > t;
    ea = K("html")[0];
    eb = K("head")[0];
    rb = K;
    Ob = function(a) {
      var b = [], c = 0, e, h = -1;
      if (9 > t || !I.getElementsByClassName) {
        var q = 6 > t ? I.all : I.getElementsByTagName("*");
      } else {
        var H = !0;
        q = I.getElementsByClassName(a);
      }
      for (e = q.length; c < e; ++c) {
        var L = q[c];
        if (H || (E || 1 === L.nodeType) && Q(L, a)) {
          b[++h] = L;
        }
      }
      return b;
    };
    Ha = ma;
    sb = function(a) {
      a = E ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    zb = function(a) {
      var b = !(7.03 < W && 7.2 > W) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, q; e;) {
        if (q = a[--e], b || 1 === q.nodeType) {
          E && "FONT" === q.tagName || (c[++h] = q);
        }
      }
      return c;
    };
    ra = function(a, b, c, e, h) {
      b = ha(2, a, b, c, e, h);
      E || (a.appendChild(b), k && null != e && y(b, e));
      return b;
    };
    Ia = function(a, b, c, e, h) {
      b = ha(0, a, b, c, e, h);
      E || (ma(a).insertBefore(b, a), k && null != e && y(b, e));
      return b;
    };
    Ba = function(a, b, c, e, h) {
      b = ha(1, a, b, c, e, h);
      var q;
      E || ((q = a.nextSibling) ? Ha(q).insertBefore(b, q) : Ha(a).appendChild(b), k && null != e && y(b, e));
      return b;
    };
    hb = y;
    Pb = function(a, b) {
      if (E) {
        return ha(0, a, "font", N, b);
      }
      var c = I.createTextNode("" + b);
      Ha(a).insertBefore(c, a);
      return c;
    };
    Aa = function(a) {
      E ? a.outerHTML = "" : Ha(a).removeChild(a);
    };
    var V = 9 > t, k = V;
    Ib = function(a) {
      return a.tagName.toUpperCase();
    };
    tb = function(a, b) {
      return a.getAttribute(b) || "";
    };
    ub = function(a, b, c) {
      a.setAttribute(b, c);
    };
    x = function(a, b) {
      a.removeAttribute(b);
    };
    w = M;
    P = Q;
    U = function(a, b) {
      var c;
      if (!Q(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        M(a, c + b);
      }
    };
    Ab = function(a, b) {
      if (Q(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        M(a, c.join(" "));
      }
    };
    Ja = function(a, b, c) {
      a.style[b] = c;
    };
    Ca = function(a, b) {
      var c = -1, e, h;
      if (5.5 > t) {
        if (b) {
          for (e = b.split(";"); h = e[++c];) {
            var q = h.split(":");
            a.style[q[0]] = h.substr(q[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > W || 1 > ca ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var sa, ta, db, va, La, na, Jb, vb, u, pa;
  (function() {
    function p() {
      return R ? A ? 2 : F ? 3 : 1 : 0;
    }
    function K(f) {
      ta(D, "load", K);
      K = N;
      ha(xa, f, !0);
      db = xa = N;
    }
    function ma(f, l) {
      na(function() {
        var B = k(f);
        l(B);
        B.addListener(l);
        return !0;
      });
    }
    function ha(f, l, B) {
      for (var n = 0; n < f.length; ++n) {
        !0 === f[n](l) && (f.splice(n, 1), --n);
      }
      B && (f.length = 0);
    }
    function y(f, l, B) {
      c && !b.length && z(M);
      b.push(f, l, B);
    }
    function M() {
      var f = b, l;
      for (b = []; l = f.shift();) {
        ha(l, f.shift(), f.shift());
      }
    }
    function Q(f) {
      var l = f || event;
      f = e[l.type];
      var B = -1, n, G;
      t ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : q && (l.u = l.stopPropagation, l.stopPropagation = function() {
        G = !0;
      });
      for (; n = f[++B];) {
        n.l === this ? (this.g = n.j, this.g(l), this.g = v, this.g = N) : 7.2 > W && this === I && n.l === D && (D.g = n.j, D.g(l), delete D.g);
      }
      if (t) {
        return l.preventDefault = l.stopPropagation = N, l.returnValue;
      }
      q && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (L = !0), G && !L && l.u(), l.u = l.stopPropagation = N);
    }
    function E() {
      var f = 9 === a.offsetWidth;
      vb !== f && y(pb, vb = f);
    }
    function V(f) {
      xa || ha(ia, f);
    }
    var k = D.matchMedia, a, b = [], c;
    xa.push(function() {
      ma = N;
      a = ra(Ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      db(function() {
        c = !0;
        b.length && z(M);
      });
    });
    sa = function(f, l, B, n) {
      if (H) {
        f.addEventListener(l, B, n ? cb ? n : n.capture : !1);
      } else {
        var G = {l:f, j:B};
        n = e[l];
        var O = "on" + l, ya, Da;
        if (n) {
          for (ya = n.length; Da = n[--ya];) {
            if (Da.l === f && Da.j === B) {
              return;
            }
          }
          e[l].push(G);
        } else {
          e[l] = n = [G], h || (l = f[O], "function" === typeof l && l !== Q && n.unshift({l:f, j:l}));
        }
        h ? f.attachEvent(O, Q) : f[O] = Q;
      }
    };
    ta = function(f, l, B, n) {
      if (H) {
        f.removeEventListener(l, B, n ? cb ? n : n.capture : !1);
      } else {
        n = e[l];
        l = "on" + l;
        var G, O, ya;
        if (n) {
          for (G = n.length; O = n[--G];) {
            O.l === f && (O.j === B ? n.splice(G, 1) : ya = !0);
          }
          ya || (h ? f.detachEvent(l, Q) : (f[l] = v, f[l] = null));
        }
      }
    };
    var e = {}, h = !1, q = 525.13 > Ga, H = !q && !Qa && D.addEventListener, L;
    q && ea.addEventListener("click", function(f) {
      if (L) {
        return L = !1, f.preventDefault(), !1;
      }
    });
    db = function(f) {
      xa.push(f);
    };
    va = function(f) {
      Y && Y.push(f);
    };
    var Y = [];
    if (419.3 >= Ga) {
      var Z = function() {
        if (Z) {
          var f = I.readyState;
          "loaded" === f || "complete" === f ? (Z = N, K()) : z(Z);
        }
      };
      z(Z);
    } else {
      sa(D, "load", K);
    }
    t || 0.9 <= ca && 1.8 > ca ? sa(D, "unload", function(f) {
      ha(Y, f, !0);
    }) : Y = N;
    na = function(f) {
      pb.push(f);
    };
    db(function() {
      E();
      Pa(E);
    });
    Jb = function(f) {
      Ra && Ra.push(f);
    };
    var aa = 60 > ca || mb, R, F, A;
    if (89 <= ca || 89 <= za || $a && 79 <= Eb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      pa = !0, ma("(forced-colors:active)", function(f) {
        R = f.matches;
        u = p();
        y(Ra, u);
      });
    } else if (10 <= t || Fa || $a && Eb) {
      pa = !0, ma("(-ms-high-contrast:black-on-white)", function(f) {
        R = F = f.matches;
        u !== p() && (u = p(), y(Ra, u));
      }), ma("(-ms-high-contrast:white-on-black)", function(f) {
        R = A = f.matches;
        u !== p() && (u = p(), y(Ra, u));
      }), ma("(-ms-high-contrast:active)", function(f) {
        R = f.matches;
        u !== p() && (u = p(), y(Ra, u));
      });
    } else if ($a && (t || ca && 0 <= r.conpare(S, "1.8.1") || mb)) {
      var C = function() {
        function f(n, G) {
          if (G && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var O = n.split("(")[1].split(",");
          return T(O[0]) + T(O[1]) + T(O[2]);
        }
        var l = I.defaultView;
        var B = l ? l.getComputedStyle(a, null) : a.currentStyle;
        l = (B && B.color || "").split(" ").join("");
        B = (B && B.backgroundColor || "").split(" ").join("");
        l && (R = "#123456" !== l && "rgb(18,52,86)" !== l, F = f(l) < f(B, !0), A = f(l) > f(B, !0), u !== p() && (u = p(), y(Ra, u, aa)));
      };
      na(function(f) {
        if (f) {
          return Ja(a, "color", "#123456"), Ja(a, "backgroundColor", "#123456"), aa ? (C(), Ra = N) : Pa(C), C = N, !0;
        }
      });
    } else {
      Ra = p = N;
    }
    La = function(f) {
      ia.push(f);
    };
    var ia = [], X = 0, oa = 1 > ca || 1.2 <= ca && 1.8 > ca || 7.2 >= W;
    oa ? Pa(function() {
      var f = D.scrollY || Ea.scrollTop;
      X !== f && (X = f, V());
    }) : sa(D, "scroll", V);
    va(function() {
      oa || ta(D, "scroll", V);
    });
  })();
  var la = 9 > t || 525 <= Ga && 530 > Ga || 2 > za, Na = 0, Wa, Sb, Tb;
  (function() {
    function p(k) {
      for (var a = ha.length, b; a;) {
        if (b = ha[--a], b.D === k) {
          return b;
        }
      }
    }
    function K() {
      var k = I.styleSheets, a = [], b = 0, c = -1, e;
      if (k) {
        for (e = k.length; b < e; ++b) {
          if (2 > za || $a && 526 > Ga) {
            var h = ma(k[b]);
            h.parentNode && (a[b] = h);
          } else {
            a[b] = ma(k[b]);
          }
        }
      } else {
        for (k = rb("*"), e = k.length; b < e; ++b) {
          h = k[b];
          var q = Ib(h);
          if ("STYLE" === q || "LINK" === q && "text/css" === tb(h, "type")) {
            a[++c] = h;
          }
        }
      }
      return a;
    }
    function ma(k) {
      return k.owningElement || k.ownerNode;
    }
    Wa = function(k, a) {
      var b = K(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var e = b[c - 1];
      b = b[c];
      if (Q || E) {
        var h = b ? Ia(b, "style") : e ? Ba(e, "style") : ra(eb, "style");
        E && hb(h, "");
        var q = h.styleSheet || h.sheet;
        k && ub(h, "media", k);
      } else if (y || M) {
        q = {C:k, B:c, G:!0};
      }
      if (q) {
        return ha.push({D:q, h:h, m:[]}), q;
      }
    };
    Sb = function(k) {
      k = p(k);
      var a = k.m, b = a.length, c;
      for (k.h && Aa(k.h); c = a[--b];) {
        c.i && Aa(c.i);
      }
      ha.splice(ha.indexOf(k), 1);
    };
    Tb = function(k, a, b, c) {
      var e = p(k), h = e.h;
      e = e.m;
      var q = "@import" === a, H = "@page" === a, L = "@font-face" === a, Y = e.length, Z = "", aa;
      if (k.imports) {
        var R = k.imports.length;
      } else {
        for (R = 0; R < Y && "@import" === e[R].A; ++R) {
        }
      }
      if (q) {
        c = 0 <= c && c < R ? c : R;
        var F = a + ' "' + b + '"';
      } else {
        c = R <= c && c < Y ? c : Y;
        for (F in b) {
          Z += ";" + F + ":" + b[F];
        }
        Z = Z.substr(1);
        F = a + "{" + Z + "}";
        6 <= t && L && (c = Y);
      }
      Y = {A:a, F:b, s:c, o:c};
      if (9 > t) {
        R = k.rules;
        var A = R.length;
        if (L) {
          a = I.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + F + "</style>", a = a.lastChild, (aa = h.nextSibling) ? Ha(h).insertBefore(a, aa) : Ha(h).appendChild(a), Y.i = a;
        } else {
          if (q ? k.addImport(b, c) : 5.5 <= t && H || k.addRule(a, Z, c), Y.o = c + (R.length - A - 1), 0 === R.length - A) {
            return -1;
          }
        }
      } else if (Q || E) {
        ($a && Ga || 28 > za) && q ? Y.i = Ba(h, "link", {href:b, rel:"stylesheet", type:"text/css"}) : la && L ? (a = Y.i = Ba(h, "style", {type:"text/css", media:k.media}), a.innerText = F) : k.insertRule(F, c);
      }
      e.splice(c, 0, Y);
      if (y || M) {
        h = p(k);
        aa = h.m;
        a = h.h;
        b = k.B;
        q = K();
        k = q[b - 1];
        b = q[b];
        q = [];
        L = H = -1;
        Z = "style";
        Y = {type:"text/css", media:h.C};
        for (var C; R = aa[++H];) {
          if (F = R.A, R = R.F, "@import" === F) {
            q[++L] = F + ' "' + R + '"';
          } else {
            q[++L] = F + "{";
            F = "";
            for (C in R) {
              F += ";" + C + ":" + R[C];
            }
            q[++L] = F.substr(1) + "}";
          }
        }
        q = q.join("");
        y && (q = "data:text/css;charset=utf-8;base64," + V(q), Y.rel = "stylesheet", Y.href = q, Z = "link", q = N);
        a ? (h.h = Ba(a, Z, Y, q), Aa(a)) : (a = b ? Ia(b, Z, Y, q) : k ? Ba(k, Z, Y, q) : ra(eb, Z, Y, q), h.h = a);
      }
      C = c;
      k = e.length;
      for (h = C; h < k; ++h) {
        aa = e[h], aa.i || (a = aa.o - aa.s, aa.s = C, aa.o = C + a, C += 1 + a);
      }
      return c;
    };
    var ha = [], y = 1 > ca || 8 <= W && 9 > W, M = 7.2 <= W && 8 > W, Q = !!t || !y && !M && function() {
      var k = ra(ea, "style"), a = !(!k.styleSheet && !k.sheet);
      Aa(k);
      return a;
    }(), E = !Q && Ga && !y && !M && function() {
      var k = ra(ea, "style");
      hb(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      Aa(k);
      return a;
    }();
    Na = y || M ? 1 : Q || E ? 2 : 0;
    var V;
    (function(k) {
      function a(c) {
        for (var e = b, h = "", q = 0, H; H = c.length;) {
          4 > H && (q = [0, 2, 1, 0][H]), H = c.charCodeAt(0) << 16 | (1 < H ? c.charCodeAt(1) : 0) << 8 | (2 < H ? c.charCodeAt(2) : 0), h += [e[H >>> 18], e[H >>> 12 & 63], 2 <= q ? "=" : e[H >>> 6 & 63], 1 <= q ? "=" : e[H & 63]].join(""), c = c.substr(3);
        }
        return h;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      k.btoa && (a = k.btoa);
      V = a;
    })(this);
  })();
  (function() {
    function p() {
      if (525 > Ga || ca && !lb || 2.2 > g(21) || g(25) || 10 > g(3) || wa(32) || wa(30) || wa(1) || wa(2) || wa(3)) {
        return !1;
      }
      if (la) {
        return !0;
      }
      if (2 === Na) {
        var y = Wa();
        var M = Tb(y, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        M = y.cssText || y.cssRules && y.cssRules[M] && y.cssRules[M].cssText || "";
        M = M.match("src") && M.match("@font-face");
        Sb(y);
      }
      p = N;
      return ha = !!M;
    }
    pb.splice(0, 0, function() {
      if (vb) {
        fb = 8 <= t || Fa || 9.5 <= W || lb || mb || 522 <= Ga || 3 <= Xa || Db || Rb ? 3 : 7.2 <= W ? 2 : 6 <= W || ca ? 1 : 0;
        if (!fb && !t && !Qa) {
          var y = ra(Ea, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          fb = 6 <= y.offsetWidth ? 2 : 0;
          Aa(y);
        }
        return !0;
      }
    });
    qb = function(y) {
      function M(V) {
        E = Lb(E);
        ja = V;
        Q.onload = Q.onerror = v;
        z(y, V);
      }
      if (ja !== N) {
        z(y, ja);
      } else if (8 > t) {
        z(y, !1);
      } else {
        var Q = new Image(), E = z(function() {
          E && M(!1);
        });
        Q.onerror = function() {
          M(!1);
        };
        Q.onload = function() {
          M(1 === Q.width * Q.height);
        };
        Q.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && db(function() {
      var y = ra(Ea, "div");
      Ca(y, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Fb = 1 < y.offsetHeight;
      Ca(y, "");
      Aa(y);
    });
    Oa = function(y, M) {
      function Q() {
        if (V || !k || E.complete) {
          var a = !!E.width;
          ob = ob || a;
          z(y, a);
          E.onerror = E.onload = v;
          E = y = N;
        } else {
          --k, z(Q);
        }
      }
      var E = new Image(), V, k = 99;
      E.onerror = function() {
        V = !0;
      };
      E.onload = function() {
        V = !0;
      };
      E.src = M;
      z(Q);
    };
    var K = 9 > t || 2 > za || 12 > W, ma = ["sans-serif", "serif"], ha;
    Gb = function(y, M, Q, E, V, k, a) {
      function b(X) {
        y(X);
        ia && !X && Sb(ia);
        y = F = A = C = ia = N;
      }
      function c() {
        I.fonts.load('1.6em "' + M + '"').then(function() {
          var X;
          (X = q(M)) ? z(b, X) : h(!0);
        }, function() {
          ja !== N ? H(ja) : qb(H);
        });
      }
      function e(X) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (aa = new Za() - 0, !1) : X < new Za() - aa;
      }
      function h(X) {
        var oa;
        X && (aa = new Za() - 0);
        (oa = q(M)) ? b(oa) : e(Z) ? R || K ? b(0) : ja !== N ? H(ja) : qb(H) : z(h);
      }
      function q(X) {
        var oa = 0, f = -1, l = 0;
        if (!C) {
          var B = -1;
          var n;
          F = ra(Ea, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (C = {}; n = ma[++B];) {
            Ja(F, "fontFamily", n), C[n] = F.offsetWidth;
          }
        }
        for (5 > t ? F || (F = ra(Ea, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Ea.appendChild(F); B = ma[++f];) {
          if (Ja(F, "fontFamily", '"' + X + '",' + B), F.offsetWidth !== C[B]) {
            oa = 1;
            break;
          }
        }
        !t && oa && V && (F.innerHTML = V, X = F.offsetWidth, F.innerHTML = k, l = X === F.offsetWidth ? 1 : 0, F.innerHTML = "mmmmmmmmmmlli");
        Aa(F);
        5 > t && (F = N);
        return oa + l;
      }
      function H(X) {
        X ? (R = !0, L(!0)) : b(0);
      }
      function L(X) {
        var oa;
        if (Q) {
          for (oa in X && (aa = new Za() - 0), Q) {
            q(oa) ? (A = ra(Ea, "div", {"aria-hidden":"true", className:E, id:E}), ia = Wa(), Tb(ia, "@import", Q[oa]), z(Y, !0)) : e(100) ? (delete Q[oa], z(L, !0)) : z(L);
            return;
          }
        }
        b(0);
      }
      function Y(X) {
        X && (aa = new Za() - 0);
        1 < A.offsetWidth ? (Aa(A), Z = 100, z(h, !0)) : e(Z) ? 528 > Ga ? (Aa(A), Z = 100, z(h, !0)) : (Aa(A), b(0)) : z(Y);
      }
      var Z = a || 5000, aa, R, F, A, C, ia;
      p || ha ? ha || p() ? !I.fonts || 603 > Ga ? h(!0) : c() : z(b, 0) : z(b, 0);
    };
  })();
  var Ma = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Ma(960), ")", "(", Ma(234), Ma(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Ma(9824), "\u2190", Ma(9829), Ma(9830), Ma(9827), Ma(956), "\u03a9", "\u2193", "\u2192", "%", Ma(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Ma(9619)], Yb = (9 === t || ca && 0 <= r.conpare(S, "1.8.1") || mb) && !pa, ib = [], jb, Sa, Kb = 7.2 > W ? function() {
    jb = !jb;
    for (var p = -1, K; K = ib[++p];) {
      -1 !== K.className.indexOf("pbAlp") ? Ja(K, "display", jb ? "" : "none") : (U(K, jb ? "pbChrCS" : "pbChr00"), Ab(K, jb ? "pbChr00" : "pbChrCS"));
    }
  } : Yb ? function() {
    jb = !jb;
    for (var p = -1, K; K = ib[++p];) {
      Ja(K, "opacity", jb ? 1 : 0);
    }
  } : N;
  var Ub = ba.startBlinkingIfCursor = function(p) {
    Kb ? P(p, "pbChrCS") && (Sa || !W && !u || (Sa = setInterval(Kb, 400)), -1 === ib.indexOf(p) && ib.push(p)) : ib = N;
  };
  ba.stopBlinkingIfCursor = function(p) {
    Kb && (p = ib.indexOf(p), 0 <= p && (ib.splice(p, 1), !ib.length && Sa && (clearInterval(Sa), Sa = 0)));
  };
  Yb && Jb(function(p) {
    p ? Sa || (Sa = setInterval(Kb, 400)) : Sa && (clearInterval(Sa), Sa = 0);
  });
  Kb && va(function() {
    Sa && clearInterval(Sa);
  });
  pa || Jb(function(p) {
    p ? (ub(ea, "forced-colors", 2 === p ? "lod" : 3 === p ? "dol" : "active"), (yb || 9 === t || 5.5 <= t && 9 > t && Fb) && U(ea, "jsCanRotate")) : (x(ea, "forced-colors"), Ab(ea, "jsCanRotate"));
  });
  (function() {
    function p(A) {
      (L = A) ? y() : ob ? ha(!0) : ob !== N ? y() : Oa(ha, Y);
    }
    function K() {
      K = N;
      Gb(p, "PB-100", {"PB-100_canTTF":Ya + "pbFont/ttf.css", "PB-100_canWOFF":Ya + "pbFont/woff.css", "PB-100_canEOT":Ya + "pbFont/eot.css", "PB-100_canSVG":Ya + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function ma(A) {
      this.focus();
      A.preventDefault();
      A.stopPropagation();
    }
    function ha(A) {
      A && U(Ea, "pbList-noWebFont");
      y();
    }
    function y() {
      for (p = Gb = N; H.length;) {
        M(H.shift(), H.shift());
      }
    }
    function M(A, C) {
      function ia(n) {
        n = sb(n);
        for (var G = -1, O; O = n[++G];) {
          switch(O.nodeType) {
            case 1:
              ia(O);
              break;
            case 3:
              O.data && oa(O.data) && f.push(O);
          }
        }
      }
      function X(n) {
        var G = n.children, O = 0, ya = G.length;
        if (ya) {
          for (; O < ya; ++O) {
            X(G[O]);
          }
        } else {
          (G = n.innerText) && oa(G) && f.push(n);
        }
      }
      function oa(n) {
        return n.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], l;
      if (p) {
        -1 === H.indexOf(A) && (H.push(A, C), Z && K && K());
      } else {
        var B = H.indexOf(A);
        0 <= B && H.splice(B, 2);
        for (5 > t ? X(A) : ia(A); l = f.shift();) {
          B = 5 > t ? l.innerText : l.data, 2 !== L && (B = B.split(b).join(k)), C ? 5 > t ? l.innerText = B : l.data = B : Q(B.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(V).split("&amp;").join("&"), l);
        }
      }
    }
    function Q(A, C) {
      function ia(ka, fa) {
        for (var ab = ""; fa;) {
          fa & 1 && (ab += ka), fa >>= 1, ka += ka;
        }
        return ab;
      }
      function X(ka, fa, ab) {
        for (var Vb, $b = -1, Wb, Xb; Vb = fa[++$b];) {
          for (; 0 <= (Wb = ka.indexOf(Vb));) {
            Xb = Vb.length, ka = ka.substr(0, Wb) + ia(ab, Xb) + ka.substr(Wb + Xb);
          }
        }
        return ka;
      }
      function oa(ka) {
        var fa = T(ka), ab = "" + fa;
        return 0 < fa && fa === fa | 0 && (fa = ka.indexOf(ab) + ab.length, fa <= ka.length) ? fa : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), l = 5 > t || 1 === C.nodeType, B = [], n = "", G, O = -1, ya, Da, kb;
      if (l) {
        if (R) {
          var Qb = C.style.visibility;
          Ja(C, "visibility", "hidden");
        }
        C.innerHTML = "";
      }
      if (F) {
        var Bb = C;
        C = I.createDocumentFragment();
      }
      if (function(ka) {
        var fa = ka.indexOf("P");
        if (-1 === fa) {
          return !1;
        }
        fa = T(ka.charAt(fa + 1));
        return 0 <= fa && 9 >= fa;
      }(A)) {
        n = ia("+", A.length);
      } else {
        0 <= (G = oa(A)) && (n = ia("|", G), O = G, --O);
        for (; G = A.charAt(++O);) {
          G === V || ya ? (n += "~", G === V && (ya = !ya)) : n += G;
        }
        n = X(n, q, "^");
        n = X(n, e, "{");
        n = X(n, h, "}");
      }
      O = 0;
      for (ya = A.length; O < ya; ++O) {
        G = A.charAt(O);
        var J = G === c;
        var Ta = " " === G;
        G = J ? " " : G;
        var da = n.charAt(O);
        var Ua = (Da = bb) && J;
        var bb = "|" === da;
        da = f["+|~{}^".indexOf(da) + 1];
        "\n" !== G ? (L || !ob ? (2 === L && A.substr(O, 2) === b && (G = b, ++O), da = Ta && "str" === da ? "pbList-strsp" : J ? "" : !Ta && da ? "pbList-" + da : "") : (J = wb.indexOf(G), J = -1 === J ? "" : wb.indexOf(G).toString(16).toUpperCase(), J = (J = 1 === J.length ? "0" + J : J) ? "pbChr" + J : "", da = Ta && "str" === da ? "pbList-strsp" : Ta || !J ? "" : da ? (J ? J + " " : "") + "pbList-" + da : J), J = N, Ua ? (G = 6 <= t && 8 > t ? " " : c, da = "") : bb && (ca && !lb || 9.5 > W) ? 
        (bb && !Da && (kb = 4 - (T(A.substr(O)) + "").length), 7.5 > W ? J = aa ? "position:relative;top:-4px;left:" + 12 * kb + "px" : {position:"relative", top:"-4px", left:12 * kb + "px"} : J = aa ? "position:relative;left:" + 12 * kb + "px" : {position:"relative", left:12 * kb + "px"}) : Ta && 7.5 > W && (da = "pbList-strsp"), aa ? B.push("<font" + (da ? ' class="' + da + '"' : "") + (J ? ' style="' + J + '"' : "") + ">" + G + "</font>") : l || F ? ra(C, "font", {"class":da, style:J}, G) : Ia(C, 
        "font", {"class":da, style:J}, G)) : (Da = bb = !1, aa ? B.push(G) : l || F ? hb(C, G) : Pb(C, G));
      }
      if (l) {
        aa ? C.innerHTML = B.join("") : F && Bb.appendChild(C), R && Ja(C, "visibility", Qb);
      } else {
        if (aa) {
          f = I.createElement("font");
          for (f.innerHTML = B.join(""); B = f.firstChild;) {
            C.parentNode.insertBefore(B, C);
          }
          Aa(C);
        } else {
          F ? Bb.parentNode.replaceChild(C, Bb) : Aa(C);
        }
      }
    }
    na(function(A) {
      if (A) {
        A = Ob("pbChrCS");
        for (var C = 0, ia = A.length; C < ia; ++C) {
          Ub(A[C]);
        }
        return !0;
      }
    });
    var E = [];
    na(function(A) {
      function C(J) {
        var Ta = tb(J, "pbTip"), da = Ta.charAt(0), Ua = "_" === da;
        Ta = Ua ? Ta.charAt(2) : da;
        Ua = Ua ? "Btm" : "";
        da = tb(J, "title");
        if (!l) {
          x(J, "pbTip");
          x(J, "title");
          U(J, "pbTipPos" + Ta.toUpperCase());
          var bb = ra(J, "div", {className:"pbTip" + Ua, style:{width:da.length + X + "em"}}, da);
        }
        ra(bb || J, "div");
      }
      function ia(J, Ta) {
        var da = tb(J, "pbGhst"), Ua = J.className, bb = Ua.split("pbCsr")[1] || "", ka = Ua.split("pbAlp")[1] || "";
        if ("CS" === da) {
          var fa = "_";
        } else {
          fa = da, 3 === fa.length && (fa = fa.substr(0, 2)), fa = wb[parseInt(fa, 16)] || "~";
        }
        var ab;
        bb = bb.split(" ")[0];
        if (ka = T(ka.split(" ")[0])) {
          oa && (Ua = Ua.split("pbChr")[1].split(" ")[0], Ja(J, "backgroundPosition", Cb(Ua, 2, kb) + "px " + -24 * (10 - ka) + "px")), !Ta && f && Ia(J, "a").appendChild(J);
        }
        da && (ka = 10 - ka, oa && (ab = {backgroundPosition:Cb(da, 2, kb) + "px " + -24 * (10 - ka) + "px"}), x(J, "pbGhst"), G = Ia(J, "b", {className:"pbChr" + da + " pbCsr" + bb + " pbAlp" + ka, style:ab}, fa), Ub(G));
        Ub(J);
      }
      if (A) {
        var X = 6 > t ? 2 : 0, oa = 7.2 > W || 0.9 > ca || Qa, f = 1.1 === ca;
        A = rb("SAMP");
        var l = 8 === t, B = fb, n, G, O, ya, Da;
        Fb && U(Ea, "pbLCD-AX");
        if (A.length) {
          for (O = -1; n = A[++O];) {
            if (P(Ha(n), "pbLCD")) {
              var kb = P(n, "PB-120") || P(n, "FX-795P");
              var Qb = zb(n);
              for (n = Qb.length; Da = Qb[--n];) {
                switch(Ib(Da)) {
                  case "A":
                    (2 > B || l) && C(Da);
                    if (2 > B) {
                      var Bb = zb(Da);
                      for (ya = Bb.length; ya;) {
                        ia(Bb[--ya], !0);
                      }
                    }
                    Db ? ub(Da, "href", "javascript:void(0)") : (sa(Da, "click", ma), E.push(Da));
                    break;
                  case "B":
                    2 > B && ia(Da, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    va(function() {
      for (var A; A = E.shift();) {
        ta(A, "click", ma);
      }
    });
    6 === t && (new Ka("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var V = wb[7], k = wb[30], a = wb[113], b = Ma(8337) + Ma(8331), c = Ma(160);
    Ma(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), q = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + wb[31]).split(""), H = [], L, Y, Z;
    na(function(A) {
      if (A) {
        Y = 1 > Ya + ca ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        A = rb("*");
        for (var C = -1, ia; ia = A[++C];) {
          P(ia, "pbList") ? M(ia) : P(ia, "pbFont") && M(ia, !0);
        }
        H.length && K();
        return !0;
      }
    });
    var aa = !1, R = 8 > W, F = !aa && !R && !(6 > t) && I.createDocumentFragment && !!Ea.replaceChild;
    ba.prettify = M;
  })();
  var Zb = I.scripts || rb("script");
  var Ya = Zb[Zb.length - 1].src.split("/");
  --Ya.length;
  (Ya = Ya.join("/")) && (Ya += "/");
  6.1 > Xa && La(gb);
  va(Mb);
  6.1 > Xa && La(Hb);
  va(Nb);
  10 > t && (11 !== nb || 5 !== t) || (9 > W || 1 > ca || !Qa && !D.addEventListener ? I.write('<link href="' + Ya + xb + '" rel="stylesheet"' + (8 > W ? "" : ' media="screen,handheld,projection,print"') + ">") : db(function() {
    ra(eb, "link", {href:Ya + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

