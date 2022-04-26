PB100={};ua = [];
ua.conpare = function(ba, r) {
  var E = 0, v, I, ra = (ba + "").split("."), S = (r + "").split("."), Ma = ra.length;
  for (v = S.length; "0" === ra[Ma - 1];) {
    --Ma;
  }
  for (; "0" === S[v - 1];) {
    --v;
  }
  for (I = Ma < v ? Ma : v; E < I; ++E) {
    var Xa = ra[E] - 0, m = S[E] - 0;
    if (Xa !== m) {
      return Xa > m ? 1 : -1;
    }
  }
  return Ma > v ? 1 : Ma === v ? 0 : -1;
};
(function(ba, r, E, v, I, ra, S, Ma) {
  function Xa(u, pa, la) {
    la = ra(u.split(pa)[1]);
    return 0 <= la ? la : 0;
  }
  function m(u, pa) {
    return 0 <= u.indexOf(pa);
  }
  function bb(u) {
    return m(u, "Linux armv") || m(u, "Linux aarch") || m(u, "Linux i686") || m(u, "Linux x86_64");
  }
  function M(u, pa) {
    for (var la in pa) {
      if (la === u) {
        return !0;
      }
    }
  }
  function g(u, pa) {
    var la = "", Ra = -1, Ya;
    if (u = u.split(pa)[1]) {
      for (; Ya = u.charCodeAt(++Ra);) {
        if (48 <= Ya && 57 >= Ya || 46 === Ya) {
          la += u.charAt(Ra);
        } else {
          break;
        }
      }
      for (Ra = la.length; Ra;) {
        if (46 === la.charCodeAt(--Ra)) {
          la = la.substr(0, Ra);
        } else {
          break;
        }
      }
    }
    return la;
  }
  function xa(u) {
    for (var pa = arguments, la = 1, Ra = pa[0], Ya; la < pa.length; ++la) {
      0 > Fa(Ra, Ya = pa[la]) && (Ra = Ya);
    }
    return Ra;
  }
  function Db(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var Fa = ba.conpare, d = v.userAgent, ca = v.appVersion, fb = ra(ca) || 0, R = v.platform, t = E.documentElement, Ua = t && t.style, Ga = E.documentMode, V = I.width;
  I = I.height;
  var X = r.HTMLAudioElement, lb = r.performance, mb = r.Int8Array, Ha = r.ontouchstart !== Ma, Za = g(ca, "Version/") || g(d, "Version/"), Eb = r.operamini, za = !Eb && r.opera, Sb = za && (za.version && "function" === typeof za.version ? za.version() : xa(g(d, "Opera "), Za, fb)), Fb = r.opr, nb = !za && (E.all || Ga);
  Ga = nb && (Ga ? Ga : r.XMLHttpRequest ? E.getElementsByTagName ? 7 : 4 : E.compatMode ? 6 : (0).toFixed ? 5.5 : r.attachEvent ? 5 : 4);
  t = !nb && t.msContentZoomFactor;
  var cb = !t && (r.chrome || r.chromium), db = !nb && function() {
    for (var u in Ua) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), xb = m(d, "UCWEB"), Gb = xb && g(d, " U2/"), ob = xb && g(d, "; wds "), gb = g(d.split("_").join("."), "; iPh OS "), ia = g(d, "; Adr "), yb = m(ca, "YJApp-ANDROID"), ya = m(R, "Android") || db && m(ca, "Android") || yb;
  ia = g(R, "Android ") || g(ca, "Android ") || g(d, "Android ") || ia;
  var pb = m(R, "Linux"), Va = "MacIntel" === R && v.standalone !== Ma, qb = db && g(d, "Goanna/"), Sa = !qb && db && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Hb = g(d, "Firefox/"), z = g(d, "Opera/"), Mb = r.FNRBrowser, Ta = Xa(d, "AppleWebKit/"), hb = g(d, "Chrome/"), Nb = g(ca, "Iron/"), Ib = g(d, "OPR/"), Ob = g(ca, "KHTML/"), rb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var Pb = g(d, "Silk/"), Ia = Xa(d, "SamsungBrowser/"), sb = !Ia && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    pa, la = u.length; pa = u[--la];) {
      if (m(d, pa)) {
        return 2 > ra(Za) ? Za : 0.9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (la = u.length; pa = u[--la];) {
      if (m(d, pa)) {
        return Za;
      }
    }
  }(), zb = cb && 534.3 >= Ta, qa = bb(R), Ja = qa && !m(d, R) && bb(d);
  Ha = Ha && (Ta || db) && Ja || !ia && yb;
  yb = !!r.ReactNativeWebView;
  qa = qa && function() {
    for (var u in r) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ca = (Ja = r.puffinDevice) && Ja.clientInfo;
  Ca = (Ja = Ca && "iOS" === Ca.os && Ca.osVersion) && Ca.model;
  var ib = !Ga && E.registerElement, Qb = !Ga && E.execCommand, Aa = r.webkitCancelAnimationFrame, Jb = pb && ib && "11.0.696.34" === hb, tb = r._firefoxTV_playbackStateObserverJava, ub = Xa(d, "diordnA ");
  if ("Nitro" === R) {
    var x = 1;
  } else if ("Nintendo DSi" === R) {
    x = 2;
    var w = z;
  } else if ("New Nintendo 3DS" === R || m(d, "iPhone OS 6_0") && 320 === V && 240 === I) {
    x = 4, w = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    x = 3, w = g(d, "Version/"), Ta = 535;
  } else if ("Nintendo Swicth" === R) {
    x = 7, w = g(ca, "NintendoBrowser/");
  } else if (r.wiiu) {
    x = 6;
    w = g(ca, "NintendoBrowser/");
    var O = 15, T = g(ca, "AppleWebKit/") || (Aa ? 536 : 534);
    w || (w = Aa ? 4 : 2, m(ca, "Macintosh;") || m(ca, "Windows NT") && m(ca, "Touch"));
  } else if (za && za.wiiremote) {
    x = 5, w = g(d, "Wii; U; ; ");
  } else if (z = g(d, "PlayStation Vita ")) {
    x = 10, w = z;
  } else if (z = g(d, "(PlayStation Portable); ")) {
    x = 8;
    w = z;
    var Ab = 3.3;
  } else if (z = g(d, "PLAYSTATION 3; ") || g(d, "PLAYSTATION 3 ")) {
    x = 11, w = z, 0 > Fa("4.10", z) && (O = 26, T = z);
  } else if (m(d, "Xbox One")) {
    x = 15, w = 1;
  } else if (m(d, "Xbox")) {
    x = 14, w = 1;
  } else if (2 === fb && m(d, "Sony/COM2/")) {
    x = 17;
    w = 2;
    Ab = 3.4;
    var Ka = !0;
  } else if (0 === R.indexOf("iP") || gb || Ja || Va) {
    if (Ja) {
      switch(w = Ja, Ca.substr(0, 4)) {
        case "iPho":
          var Da = 0;
          g(Ca, Da);
          var ta = !0;
          break;
        case "iPad":
          Da = 1;
          g(Ca, Da);
          var va = !0;
          break;
        case "iPod":
          Da = 2;
          g(Ca, Da);
          var eb = !0;
      }
    } else {
      gb ? w = gb : (w = g(ca.split("_").join("."), "OS "), M("isSecureContext", r), M("enableWebGL", r), M("sameOrigin", r));
      if (!w || Mb) {
        w = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : v.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : S.isNaN ? 9.2 : r.SharedWorker ? lb && lb.now ? 8.0 : 8.4 : Qb ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : mb ? 4.3 : X ? 4.1 : 3.2;
      }
      var wa = V === 1.5 * I || 1.5 * V === I;
      0 === R.indexOf("iPhone") ? (Da = 0, ta = !0) : 0 === R.indexOf("iPad") || Va ? (Da = 1, va = !0) : 0 === R.indexOf("iPod") && (Da = 2, eb = !0);
    }
    O = !Ja && (v.standalone || (va || 12 > w) && M("webkitFullscreenEnabled", E) || 11 <= w && 13 > w && v.mediaDevices) ? 16 : 17;
    x = 24;
    T = w;
  } else if (m(d, "Kobo")) {
    x = 18, O = 21, T = 2.2, ya = !0;
  } else if (m(d, "EBRD")) {
    x = 19, O = 21, T = 2.2;
  } else if (z = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    x = 28, w = z;
  } else if (r.onmoztimechange !== Ma) {
    x = 29, w = 18.1 > Sa ? "1.0.1" : 19 > Sa ? 1.1 : 27 > Sa ? 1.2 : 29 > Sa ? 1.3 : 31 > Sa ? 1.4 : 33 > Sa ? 2.0 : 35 > Sa ? 2.1 : 38 > Sa ? 2.2 : 45 > Sa ? 2.5 : 2.6, m(d, "Mobile") ? ta = !0 : m(d, "Tablet") ? va = !0 : m(d, "TV");
  } else if (r.palmGetResource) {
    x = 30, w = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (ta = !0);
  } else if (z = g(d, "Tizen ")) {
    x = 31, w = z, O = 24, T = Ia, ta = !0;
  } else if (z = g(d, "Windows Phone ") || g(ca, "Windows Phone OS ") || ob) {
    x = 23, w = z, ta = !0;
  } else if (t && "ARM" === R) {
    x = 23, w = 10, ta = !0;
  } else if (nb && m(ca, "ZuneWP")) {
    x = 23, w = 11 === Ga ? 8.1 : 10 === Ga ? 8 : 9 === Ga ? 7.5 : 7 === Ga ? 7 : "?", ta = !0;
  } else if (m(d, "FOMA;")) {
    x = 16, ta = !0;
  } else if (m(d, "SoftBank;")) {
    x = 16, ta = !0;
  } else if (m(d, "KFMUWI")) {
    var Na = !0;
    w = 6.3;
    var na = va = !0;
  } else if (m(d, "KFKAWI")) {
    Na = !0, w = 6, na = va = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    Na = !0, w = 5, na = va = !0;
  } else if (m(d, "KFGIWI")) {
    Na = !0, w = 5, na = va = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    Na = !0, w = 5 <= ra(ia) ? 5 : 4, na = va = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    Na = !0, w = 3, na = va = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    Na = !0, w = 2, na = va = !0;
  } else if (m(d, "Kindle Fire")) {
    Na = !0, w = 1, na = va = !0;
  } else if (z = g(d, "Kindle/")) {
    x = 20, w = z, O = 21, T = 2.2;
  } else if (tb) {
    Na = !0, w = ia || ub, na = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    Na = !0, w = ia, na = !0;
  } else if (m(d, "MeeGo")) {
    x = 32;
  } else if (m(d, "Maemo")) {
    x = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || rb) {
    x = 22, Ka = !0;
  } else if ("WinCE" === R) {
    x = 21, Ka = !0;
  } else if (0 === R.indexOf("Win")) {
    x = "Win16" === R ? 35 : "Win32" === R ? 36 : "Win64" === R ? 37 : 0, w = g(d, "Windows NT ") || g(d, "Windows ");
  } else if (0 === R.indexOf("Mac")) {
    x = "Mac68K" === R ? 39 : "MacPowerPC" === R || "MacPPC" === R ? 38 : "MacIntel" === R ? 40 : 0;
    if (z = g(d.split("_").join("."), "Mac OS X ")) {
      w = z;
    }
    var Kb = !0;
  } else if (m(d, "BlackBerry") || m(d, "BB10")) {
    x = 34, w = Za, ta = !0;
  } else if (m(d, "SunOS") || m(d, "Sun Solaris")) {
    x = 42;
  } else if (m(d, "FreeBSD")) {
    x = 43;
  } else if (m(d, "OpenBSD")) {
    x = 44;
  } else if (m(d, "NetBSD")) {
    x = 45;
  } else if (ya && db) {
    m(d, "Android 4.4;") ? wa = {min:2.3} : 4 <= ra(ia) ? wa = ia : wa = {min:2.2}, w = wa;
  } else if (ya && za) {
    ia ? wa = ia : wa = {min:1.6}, w = wa, m(d, "Tablet") ? va = !0 : ta = !0;
  } else if (ia) {
    w = ia, ya = !0;
  } else if (pb && Ha || yb || qa) {
    var vb = !0;
    Ia ? wa = {min:4.4} : cb && !zb || Fb || Ib ? wa = {min:4} : (wa = ia = Ua.touchAction !== Ma ? {min:5} : ib ? 4.4 : mb ? v.connection ? r.searchBoxJavaBridge_ || cb ? S.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ta ? 3 : 533 <= Ta ? X ? 2.3 : 2.2 : 530 <= Ta ? 2.0 : 1.5, sb && (O = 24, T = sb));
    w = wa;
    ya = !0;
  } else {
    Jb ? (w = {min:5}, vb = ya = !0) : pb && (m(d, "Ubuntu") ? x = 46 : (z = g(d, "Mint/")) ? (x = 47, w = z) : (z = g(d, "Fedora/")) ? (x = 48, w = z) : x = m(d, "Gentoo") ? 49 : 50);
  }
  Na || ya && vb && Pb ? x = 27 : ya && (x = x || 26);
  O || (na = na || ya, za ? (O = na || Ka || ta || va ? 9 : 8, T = Sb) : nb ? (wa = Xa(ca, "Trident/") + 4, O = Ka || ta || va || eb ? 3 : Kb && 5 <= Ga ? 7 : 2, T = Ga) : t ? (O = 23 === x ? 6 : 5, T = g(ca, "Edge/")) : qb ? (O = 13, T = qb) : db ? (O = na ? 12 : 11, T = Sa || Hb) : Ia ? (O = 24, T = Ia) : (z = Ab || g(d, "NetFront/")) ? (O = 18, T = z) : (z = g(d, "iCab")) ? (O = 19, T = z) : (z = xa(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Eb && Za) ? (O = 10, T = z, x || (m(d, "iPhone") ? 
  Da = 0 : m(d, "iPad") ? Da = 1 : m(d, "iPod") && (Da = 2), Da && (x = 24))) : xb ? (O = 25, T = Gb) : Ob ? (O = 14, T = fb) : ya && zb ? (O = 21, T = ia) : cb || Fb || Ib ? (O = na ? 22 : 20, T = hb || Nb) : ya && ib ? (O = 23, T = 5 > ra(ia) ? ia : hb) : ya && (Za || vb) ? (O = 21, T = ia) : hb ? (O = na ? 22 : 20, T = hb) : Ta && (O = 15, T = Ta));
  x && (ba[2] = x, w && (ba[3] = Db(w)));
  O && (ba[0] = O, T && (ba[1] = Db(T)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var ba = this[this.length - 1];
  --this.length;
  return ba;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var ba = arguments, r = 0, E = ba.length, v = this.length; r < E; ++r) {
    this[v + r] = ba[r];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var ba = this[0], r = 1, E = this.length; r < E; ++r) {
    this[r - 1] = this[r];
  }
  --this.length;
  return ba;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var ba = arguments, r = ba.length, E = this.length += r - 1, v = E; v >= r; --v) {
    this[v] = this[v - r];
  }
  for (v = 0; v < r; ++v) {
    this[v] = ba[v];
  }
  return E;
});
Array.prototype.splice || (Array.prototype.splice = function(ba, r) {
  var E = arguments, v = E.length - 2 - r, I = this.slice(ba, ba + r), ra;
  if (0 < v) {
    var S = this.length - 1;
    for (ra = ba + r; S >= ra; --S) {
      this[S + v] = this[S];
    }
  } else if (0 > v) {
    S = ba + r;
    for (ra = this.length; S < ra; ++S) {
      this[S + v] = this[S];
    }
    this.length += v;
  }
  S = 2;
  for (ra = E.length; S < ra; ++S) {
    this[S - 2 + ba] = E[S];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(ba, r) {
  var E = this.length >>> 0;
  if (0 === E) {
    return -1;
  }
  if (r) {
    var v = r || 0;
    v = -Infinity === v ? 0 : (0 > v ? -v : v) | 0;
    if (E <= v) {
      return -1;
    }
  }
  for (v = 0 <= v ? v : 0 < E + v ? E + v : 0; v < E; ++v) {
    if (this[v] === ba) {
      return v;
    }
  }
  return -1;
});
(function(ba, r, E, v, I, ra, S, Ma, Xa, m, bb, M) {
  function g(n) {
    if (r[0] === n) {
      return R === R + "" ? S(R) : R;
    }
  }
  function xa(n) {
    var J = r[3];
    if (r[2] === n) {
      return J === J + "" ? S(J) : J;
    }
  }
  function Db(n, J, ma) {
    n + "" === n && ("a" === n.charAt(2) && (ma = !0, n = n.substr(0, 2)), n = "CS" === n ? 7.2 > V ? 117 : 0.9 > X || 9 > t || 9 > V || Ua ? 1 : 132 : parseInt(n, 16));
    ma && (50 === n && (n = 128), 102 < n && 108 > n && (n += 24));
    return (n - 1) * -(6 * (J || 2));
  }
  var Fa = I.body, d = Fa.style, ca, fb, R = r[1], t = g(2) || g(3), Ua = g(7), Ga = g(5) || g(6), V = g(8) || g(9), X = g(11) || g(12), lb = X && 0 <= r.conpare(R, "1.9.1"), mb = g(13), Ha = g(15), Za = g(16) || g(17), Eb = g(10) || g(25), za = g(20) || g(22), Sb = za || g(23) || g(21) || g(24), Fb = za && S(ra.userAgent.split("Edg/")[1]), nb = S(ra.appVersion.split("Trident/")[1]) + 4, cb = xa(35) || xa(36) || xa(37), db = !t && !Ua && (new Ma('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  xb = (Ua ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > V ? "opr70" : 8 > V ? "opr72" : 9.5 > V ? "opr" + (V | 0) : X && !lb ? 1.4 <= X ? "gck19" : 1.3 <= X ? "gck13" : 1 <= X ? "gck12" : 0.9 <= X ? "gck09" : 0.8 <= X ? "gck08" : "gck07" : "modern") + ".css";
  xa(1) || xa(2) || xa(3) || xa(4) || xa(8) || xa(9) || xa(10);
  var Gb, ob, gb, ia, yb = d.transform !== M ? "transform" : d["-o-transform"] !== M ? "-o-transform" : d["-ms-transform"] !== M ? "-ms-transform" : d.MozTransform !== M ? "-moz-transform" : d["-webkit-transform"] !== M ? "-webkit-transform" : "", ya = [], pb = [], Va = [], qb, Sa, Hb, z, Mb, Ta, hb, Nb, Ib, Ob;
  (function() {
    function n() {
      for (var c, e = 0, h = new bb() - 0; e < U.length;) {
        h < U[0].t ? ++e : (c = U.splice(e, 1)[0], c.f(c.p));
      }
      b = U.length ? Xa(n, k) : 0;
    }
    function J() {
      for (var c, e = 0; e < y.length; ++e) {
        c = y[e], c.f();
      }
    }
    function ma() {
      F && (F = clearInterval(F));
    }
    function ea() {
      b && (b = m(b));
    }
    Ta = function(c) {
      y.length || (F = setInterval(J, L));
      y.push({f:c, v:++P});
      return P;
    };
    hb = function() {
      F && (ma(), F = setInterval(J, L));
    };
    Nb = ma;
    var y = [], L = 500, P = 0, F;
    if (5 > t || Ua) {
      E._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
    }
    z = function(c, e, h) {
      U.length || (b = Xa(n, k));
      U.push({f:c, p:e, v:++a, t:new bb() - 0 + (k < h ? h : k)});
      return a;
    };
    Mb = function(c) {
      for (var e = U.length, h; h = U[--e];) {
        if (h.v === c) {
          U.splice(e, 1);
          break;
        }
      }
      return 0;
    };
    Ib = function() {
      b && (ea(), b = Xa(n, k));
    };
    Ob = ea;
    var U = [], k = 16, a = 0, b;
    if (5 > t || Ua) {
      E._wdb_ontimer = n, n = "_wdb_ontimer()";
    }
  })();
  var rb, Pb, Ia, sb, zb, qa, Ja, Ca, ib, Qb, Aa, Jb, tb, ub, x, w, O, T, Ab, Ka, Da;
  (function() {
    function n(a, b, c) {
      var e = ["<", a], h = 1, p, H;
      if (b) {
        for (p in b) {
          var K = b[p];
          if (null != K && "" !== K) {
            if ("style" === p) {
              e[++h] = ' style="';
              for (H in K) {
                for (var Y = ++h, Z, aa = [], Q = H.split(""), G = Q.length; G;) {
                  Z = Q[--G], "A" <= Z && "Z" >= Z && (Z = "-" + Z.toLowerCase()), aa[G] = Z;
                }
                e[Y] = aa.join("") + ":" + K[H] + ";";
              }
              e[++h] = '"';
            } else {
              "className" === p && (p = "class"), e[++h] = " " + p + '="' + K + '"';
            }
          }
        }
      }
      e[++h] = ">";
      null != c && (F && "font" !== a ? e[++h] = "<FONT>" + c + "</FONT>" : e[++h] = c);
      e[++h] = "</" + a + ">";
      return e.join("");
    }
    function J(a) {
      a = "*" === a && 6 > t ? "*" !== a ? I.all.tags(a.toUpperCase()) : I.all : I.getElementsByTagName(a);
      var b = [], c = 0, e;
      for (e = a.length; c < e; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function ma(a) {
      return F ? a.parentElement : a.parentNode;
    }
    function ea(a, b, c, e, h, p) {
      if (F) {
        var H = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = sb(2 > a ? Ia(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(H, n(c, e, h));
        b = sb(b)[K];
        null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (U) {
        b = I.createElement(n(c, e));
      } else {
        b = p ? I.createElementNS("http://www.w3.org/2000/svg", c) : I.createElement(c);
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
                  for (K in c) {
                    a[K] = c[K];
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
      if (F) {
        return ea(2, a, "font", M, b);
      }
      var c = I.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function L(a, b) {
      9 > t ? a.className = b : a.setAttribute("class", b);
    }
    function P(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var F = 5 > t;
    ca = J("html")[0];
    fb = J("head")[0];
    rb = J;
    Pb = function(a) {
      var b = [], c = 0, e, h = -1;
      if (9 > t || !I.getElementsByClassName) {
        var p = 6 > t ? I.all : I.getElementsByTagName("*");
      } else {
        var H = !0;
        p = I.getElementsByClassName(a);
      }
      for (e = p.length; c < e; ++c) {
        var K = p[c];
        if (H || (F || 1 === K.nodeType) && P(K, a)) {
          b[++h] = K;
        }
      }
      return b;
    };
    Ia = ma;
    sb = function(a) {
      a = F ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    zb = function(a) {
      var b = !(7.03 < V && 7.2 > V) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, p; e;) {
        if (p = a[--e], b || 1 === p.nodeType) {
          F && "FONT" === p.tagName || (c[++h] = p);
        }
      }
      return c;
    };
    qa = function(a, b, c, e, h) {
      b = ea(2, a, b, c, e, h);
      F || (a.appendChild(b), k && null != e && y(b, e));
      return b;
    };
    Ja = function(a, b, c, e, h) {
      b = ea(0, a, b, c, e, h);
      F || (ma(a).insertBefore(b, a), k && null != e && y(b, e));
      return b;
    };
    Ca = function(a, b, c, e, h) {
      b = ea(1, a, b, c, e, h);
      var p;
      F || ((p = a.nextSibling) ? Ia(p).insertBefore(b, p) : Ia(a).appendChild(b), k && null != e && y(b, e));
      return b;
    };
    ib = y;
    Qb = function(a, b) {
      if (F) {
        return ea(0, a, "font", M, b);
      }
      var c = I.createTextNode("" + b);
      Ia(a).insertBefore(c, a);
      return c;
    };
    Aa = function(a) {
      F ? a.outerHTML = "" : Ia(a).removeChild(a);
    };
    var U = 9 > t, k = U;
    Jb = function(a) {
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
    w = L;
    O = P;
    T = function(a, b) {
      var c;
      if (!P(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        L(a, c + b);
      }
    };
    Ab = function(a, b) {
      if (P(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        L(a, c.join(" "));
      }
    };
    Ka = function(a, b, c) {
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
        9 > V || 1 > X ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ta, va, eb, wa, Na, na, Kb, vb, u, pa;
  (function() {
    function n() {
      return Q ? A ? 2 : G ? 3 : 1 : 0;
    }
    function J(f) {
      va(E, "load", J);
      J = M;
      ea(ya, f, !0);
      eb = ya = M;
    }
    function ma(f, l) {
      na(function() {
        var D = k(f);
        l(D);
        D.addListener(l);
        return !0;
      });
    }
    function ea(f, l, D) {
      for (var q = 0; q < f.length; ++q) {
        !0 === f[q](l) && (f.splice(q, 1), --q);
      }
      D && (f.length = 0);
    }
    function y(f, l, D) {
      c && !b.length && z(L);
      b.push(f, l, D);
    }
    function L() {
      var f = b, l;
      for (b = []; l = f.shift();) {
        ea(l, f.shift(), f.shift());
      }
    }
    function P(f) {
      var l = f || event;
      f = e[l.type];
      var D = -1, q, B;
      t ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : p && (l.u = l.stopPropagation, l.stopPropagation = function() {
        B = !0;
      });
      for (; q = f[++D];) {
        q.l === this ? (this.g = q.j, this.g(l), this.g = v, this.g = M) : 7.2 > V && this === I && q.l === E && (E.g = q.j, E.g(l), delete E.g);
      }
      if (t) {
        return l.preventDefault = l.stopPropagation = M, l.returnValue;
      }
      p && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (K = !0), B && !K && l.u(), l.u = l.stopPropagation = M);
    }
    function F() {
      var f = 9 === a.offsetWidth;
      vb !== f && y(pb, vb = f);
    }
    function U(f) {
      ya || ea(fa, f);
    }
    var k = E.matchMedia, a, b = [], c;
    ya.push(function() {
      ma = M;
      a = qa(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        c = !0;
        b.length && z(L);
      });
    });
    ta = function(f, l, D, q) {
      if (H) {
        f.addEventListener(l, D, q ? db ? q : q.capture : !1);
      } else {
        var B = {l:f, j:D};
        q = e[l];
        var N = "on" + l, Ba, $a;
        if (q) {
          for (Ba = q.length; $a = q[--Ba];) {
            if ($a.l === f && $a.j === D) {
              return;
            }
          }
          e[l].push(B);
        } else {
          e[l] = q = [B], h || (l = f[N], "function" === typeof l && l !== P && q.unshift({l:f, j:l}));
        }
        h ? f.attachEvent(N, P) : f[N] = P;
      }
    };
    va = function(f, l, D, q) {
      if (H) {
        f.removeEventListener(l, D, q ? db ? q : q.capture : !1);
      } else {
        q = e[l];
        l = "on" + l;
        var B, N, Ba;
        if (q) {
          for (B = q.length; N = q[--B];) {
            N.l === f && (N.j === D ? q.splice(B, 1) : Ba = !0);
          }
          Ba || (h ? f.detachEvent(l, P) : (f[l] = v, f[l] = null));
        }
      }
    };
    var e = {}, h = !1, p = 525.13 > Ha, H = !p && !Ua && E.addEventListener, K;
    p && ca.addEventListener("click", function(f) {
      if (K) {
        return K = !1, f.preventDefault(), !1;
      }
    });
    eb = function(f) {
      ya.push(f);
    };
    wa = function(f) {
      Y && Y.push(f);
    };
    var Y = [];
    if (419.3 >= Ha) {
      var Z = function() {
        if (Z) {
          var f = I.readyState;
          "loaded" === f || "complete" === f ? (Z = M, J()) : z(Z);
        }
      };
      z(Z);
    } else {
      ta(E, "load", J);
    }
    t || 0.9 <= X && 1.8 > X ? ta(E, "unload", function(f) {
      ea(Y, f, !0);
    }) : Y = M;
    na = function(f) {
      pb.push(f);
    };
    eb(function() {
      F();
      Ta(F);
    });
    Kb = function(f) {
      Va && Va.push(f);
    };
    var aa = 60 > X || mb, Q, G, A;
    if (89 <= X || 89 <= za || cb && 79 <= Fb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      pa = !0, ma("(forced-colors:active)", function(f) {
        Q = f.matches;
        u = n();
        y(Va, u);
      });
    } else if (10 <= t || Ga || cb && Fb) {
      pa = !0, ma("(-ms-high-contrast:black-on-white)", function(f) {
        Q = G = f.matches;
        u !== n() && (u = n(), y(Va, u));
      }), ma("(-ms-high-contrast:white-on-black)", function(f) {
        Q = A = f.matches;
        u !== n() && (u = n(), y(Va, u));
      }), ma("(-ms-high-contrast:active)", function(f) {
        Q = f.matches;
        u !== n() && (u = n(), y(Va, u));
      });
    } else if (cb && (t || X && 0 <= r.conpare(R, "1.8.1") || mb)) {
      var C = function() {
        function f(q, B) {
          if (B && "transparent" === q) {
            return 382.5;
          }
          if ("#" === q.charAt(0)) {
            return parseInt("0x" + q.substr(1, 2), 16) + parseInt("0x" + q.substr(3, 2), 16) + parseInt("0x" + q.substr(5, 2), 16);
          }
          var N = q.split("(")[1].split(",");
          return S(N[0]) + S(N[1]) + S(N[2]);
        }
        var l = I.defaultView;
        var D = l ? l.getComputedStyle(a, null) : a.currentStyle;
        l = (D && D.color || "").split(" ").join("");
        D = (D && D.backgroundColor || "").split(" ").join("");
        l && (Q = "#123456" !== l && "rgb(18,52,86)" !== l, G = f(l) < f(D, !0), A = f(l) > f(D, !0), u !== n() && (u = n(), y(Va, u, aa)));
      };
      na(function(f) {
        if (f) {
          return Ka(a, "color", "#123456"), Ka(a, "backgroundColor", "#123456"), aa ? (C(), Va = M) : Ta(C), C = M, !0;
        }
      });
    } else {
      Va = n = M;
    }
    Na = function(f) {
      fa.push(f);
    };
    var fa = [], W = 0, oa = 1 > X || 1.2 <= X && 1.8 > X || 7.2 >= V;
    oa ? Ta(function() {
      var f = E.scrollY || Fa.scrollTop;
      W !== f && (W = f, U());
    }) : ta(E, "scroll", U);
    wa(function() {
      oa || va(E, "scroll", U);
    });
  })();
  var la = 9 > t || 525 <= Ha && 530 > Ha || 2 > za, Ra = 0, Ya, Tb, Ub;
  (function() {
    function n(k) {
      for (var a = ea.length, b; a;) {
        if (b = ea[--a], b.D === k) {
          return b;
        }
      }
    }
    function J() {
      var k = I.styleSheets, a = [], b = 0, c = -1, e;
      if (k) {
        for (e = k.length; b < e; ++b) {
          if (2 > za || cb && 526 > Ha) {
            var h = ma(k[b]);
            h.parentNode && (a[b] = h);
          } else {
            a[b] = ma(k[b]);
          }
        }
      } else {
        for (k = rb("*"), e = k.length; b < e; ++b) {
          h = k[b];
          var p = Jb(h);
          if ("STYLE" === p || "LINK" === p && "text/css" === tb(h, "type")) {
            a[++c] = h;
          }
        }
      }
      return a;
    }
    function ma(k) {
      return k.owningElement || k.ownerNode;
    }
    Ya = function(k, a) {
      var b = J(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var e = b[c - 1];
      b = b[c];
      if (P || F) {
        var h = b ? Ja(b, "style") : e ? Ca(e, "style") : qa(fb, "style");
        F && ib(h, "");
        var p = h.styleSheet || h.sheet;
        k && ub(h, "media", k);
      } else if (y || L) {
        p = {C:k, B:c, G:!0};
      }
      if (p) {
        return ea.push({D:p, h:h, m:[]}), p;
      }
    };
    Tb = function(k) {
      k = n(k);
      var a = k.m, b = a.length, c;
      for (k.h && Aa(k.h); c = a[--b];) {
        c.i && Aa(c.i);
      }
      ea.splice(ea.indexOf(k), 1);
    };
    Ub = function(k, a, b, c) {
      var e = n(k), h = e.h;
      e = e.m;
      var p = "@import" === a, H = "@page" === a, K = "@font-face" === a, Y = e.length, Z = "", aa;
      if (k.imports) {
        var Q = k.imports.length;
      } else {
        for (Q = 0; Q < Y && "@import" === e[Q].A; ++Q) {
        }
      }
      if (p) {
        c = 0 <= c && c < Q ? c : Q;
        var G = a + ' "' + b + '"';
      } else {
        c = Q <= c && c < Y ? c : Y;
        for (G in b) {
          Z += ";" + G + ":" + b[G];
        }
        Z = Z.substr(1);
        G = a + "{" + Z + "}";
        6 <= t && K && (c = Y);
      }
      Y = {A:a, F:b, s:c, o:c};
      if (9 > t) {
        Q = k.rules;
        var A = Q.length;
        if (K) {
          a = I.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + G + "</style>", a = a.lastChild, (aa = h.nextSibling) ? Ia(h).insertBefore(a, aa) : Ia(h).appendChild(a), Y.i = a;
        } else {
          if (p ? k.addImport(b, c) : 5.5 <= t && H || k.addRule(a, Z, c), Y.o = c + (Q.length - A - 1), 0 === Q.length - A) {
            return -1;
          }
        }
      } else if (P || F) {
        (cb && Ha || 28 > za) && p ? Y.i = Ca(h, "link", {href:b, rel:"stylesheet", type:"text/css"}) : la && K ? (a = Y.i = Ca(h, "style", {type:"text/css", media:k.media}), a.innerText = G) : k.insertRule(G, c);
      }
      e.splice(c, 0, Y);
      if (y || L) {
        h = n(k);
        aa = h.m;
        a = h.h;
        b = k.B;
        p = J();
        k = p[b - 1];
        b = p[b];
        p = [];
        K = H = -1;
        Z = "style";
        Y = {type:"text/css", media:h.C};
        for (var C; Q = aa[++H];) {
          if (G = Q.A, Q = Q.F, "@import" === G) {
            p[++K] = G + ' "' + Q + '"';
          } else {
            p[++K] = G + "{";
            G = "";
            for (C in Q) {
              G += ";" + C + ":" + Q[C];
            }
            p[++K] = G.substr(1) + "}";
          }
        }
        p = p.join("");
        y && (p = "data:text/css;charset=utf-8;base64," + U(p), Y.rel = "stylesheet", Y.href = p, Z = "link", p = M);
        a ? (h.h = Ca(a, Z, Y, p), Aa(a)) : (a = b ? Ja(b, Z, Y, p) : k ? Ca(k, Z, Y, p) : qa(fb, Z, Y, p), h.h = a);
      }
      C = c;
      k = e.length;
      for (h = C; h < k; ++h) {
        aa = e[h], aa.i || (a = aa.o - aa.s, aa.s = C, aa.o = C + a, C += 1 + a);
      }
      return c;
    };
    var ea = [], y = 1 > X || 8 <= V && 9 > V, L = 7.2 <= V && 8 > V, P = !!t || !y && !L && function() {
      var k = qa(ca, "style"), a = !(!k.styleSheet && !k.sheet);
      Aa(k);
      return a;
    }(), F = !P && Ha && !y && !L && function() {
      var k = qa(ca, "style");
      ib(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      Aa(k);
      return a;
    }();
    Ra = y || L ? 1 : P || F ? 2 : 0;
    var U;
    (function(k) {
      function a(c) {
        for (var e = b, h = "", p = 0, H; H = c.length;) {
          4 > H && (p = [0, 2, 1, 0][H]), H = c.charCodeAt(0) << 16 | (1 < H ? c.charCodeAt(1) : 0) << 8 | (2 < H ? c.charCodeAt(2) : 0), h += [e[H >>> 18], e[H >>> 12 & 63], 2 <= p ? "=" : e[H >>> 6 & 63], 1 <= p ? "=" : e[H & 63]].join(""), c = c.substr(3);
        }
        return h;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      k.btoa && (a = k.btoa);
      U = a;
    })(this);
  })();
  (function() {
    function n() {
      if (525 > Ha || X && !lb || 2.2 > g(21) || g(25) || 10 > g(3) || xa(32) || xa(30) || xa(1) || xa(2) || xa(3)) {
        return !1;
      }
      if (la) {
        return !0;
      }
      if (2 === Ra) {
        var y = Ya();
        var L = Ub(y, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        L = y.cssText || y.cssRules && y.cssRules[L] && y.cssRules[L].cssText || "";
        L = L.match("src") && L.match("@font-face");
        Tb(y);
      }
      n = M;
      return ea = !!L;
    }
    pb.splice(0, 0, function() {
      if (vb) {
        gb = 8 <= t || Ga || 9.5 <= V || lb || mb || 522 <= Ha || 3 <= Za || Eb || Sb ? 3 : 7.2 <= V ? 2 : 6 <= V || X ? 1 : 0;
        if (!gb && !t && !Ua) {
          var y = qa(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          gb = 6 <= y.offsetWidth ? 2 : 0;
          Aa(y);
        }
        return !0;
      }
    });
    qb = function(y) {
      function L(U) {
        F = Mb(F);
        ia = U;
        P.onload = P.onerror = v;
        z(y, U);
      }
      if (ia !== M) {
        z(y, ia);
      } else if (8 > t) {
        z(y, !1);
      } else {
        var P = new Image(), F = z(function() {
          F && L(!1);
        });
        P.onerror = function() {
          L(!1);
        };
        P.onload = function() {
          L(1 === P.width * P.height);
        };
        P.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && eb(function() {
      var y = qa(Fa, "div");
      Da(y, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Gb = 1 < y.offsetHeight;
      Da(y, "");
      Aa(y);
    });
    Sa = function(y, L) {
      function P() {
        if (U || !k || F.complete) {
          var a = !!F.width;
          ob = ob || a;
          z(y, a);
          F.onerror = F.onload = v;
          F = y = M;
        } else {
          --k, z(P);
        }
      }
      var F = new Image(), U, k = 99;
      F.onerror = function() {
        U = !0;
      };
      F.onload = function() {
        U = !0;
      };
      F.src = L;
      z(P);
    };
    var J = 9 > t || 2 > za || 12 > V, ma = ["sans-serif", "serif"], ea;
    Hb = function(y, L, P, F, U, k, a) {
      function b(W) {
        y(W);
        fa && !W && Tb(fa);
        y = G = A = C = fa = M;
      }
      function c() {
        I.fonts.load('1.6em "' + L + '"').then(function() {
          var W;
          (W = p(L)) ? z(b, W) : h(!0);
        }, function() {
          ia !== M ? H(ia) : qb(H);
        });
      }
      function e(W) {
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (aa = new bb() - 0, !1) : W < new bb() - aa;
      }
      function h(W) {
        var oa;
        W && (aa = new bb() - 0);
        (oa = p(L)) ? b(oa) : e(Z) ? Q || J ? b(0) : ia !== M ? H(ia) : qb(H) : z(h);
      }
      function p(W) {
        var oa = 0, f = -1, l = 0;
        if (!C) {
          var D = -1;
          var q;
          G = qa(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (C = {}; q = ma[++D];) {
            Ka(G, "fontFamily", q), C[q] = G.offsetWidth;
          }
        }
        for (5 > t ? G || (G = qa(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Fa.appendChild(G); D = ma[++f];) {
          if (Ka(G, "fontFamily", '"' + W + '",' + D), G.offsetWidth !== C[D]) {
            oa = 1;
            break;
          }
        }
        !t && oa && U && (G.innerHTML = U, W = G.offsetWidth, G.innerHTML = k, l = W === G.offsetWidth ? 1 : 0, G.innerHTML = "mmmmmmmmmmlli");
        Aa(G);
        5 > t && (G = M);
        return oa + l;
      }
      function H(W) {
        W ? (Q = !0, K(!0)) : b(0);
      }
      function K(W) {
        var oa;
        if (P) {
          for (oa in W && (aa = new bb() - 0), P) {
            p(oa) ? (A = qa(Fa, "div", {"aria-hidden":"true", className:F, id:F}), fa = Ya(), Ub(fa, "@import", P[oa]), z(Y, !0)) : e(100) ? (delete P[oa], z(K, !0)) : z(K);
            return;
          }
        }
        b(0);
      }
      function Y(W) {
        W && (aa = new bb() - 0);
        1 < A.offsetWidth ? (Aa(A), Z = 100, z(h, !0)) : e(Z) ? 528 > Ha ? (Aa(A), Z = 100, z(h, !0)) : (Aa(A), b(0)) : z(Y);
      }
      var Z = a || 5000, aa, Q, G, A, C, fa;
      n || ea ? ea || n() ? !I.fonts || 603 > Ha ? h(!0) : c() : z(b, 0) : z(b, 0);
    };
  })();
  var Oa = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Oa(960), ")", "(", Oa(234), Oa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Oa(9824), "\u2190", Oa(9829), Oa(9830), Oa(9827), Oa(956), "\u03a9", "\u2193", "\u2192", "%", Oa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Oa(9619)], Yb = (9 === t || X && 0 <= r.conpare(R, "1.8.1") || mb) && !pa, jb = [], kb, Wa, Lb = 7.2 > V ? function() {
    kb = !kb;
    for (var n = -1, J; J = jb[++n];) {
      -1 !== J.className.indexOf("pbAlp") ? Ka(J, "display", kb ? "" : "none") : (T(J, kb ? "pbChrCS" : "pbChr00"), Ab(J, kb ? "pbChr00" : "pbChrCS"));
    }
  } : Yb ? function() {
    kb = !kb;
    for (var n = -1, J; J = jb[++n];) {
      Ka(J, "opacity", kb ? 1 : 0);
    }
  } : M;
  var Vb = ba.startBlinkingIfCursor = function(n) {
    Lb ? O(n, "pbChrCS") && (Wa || !V && !u || (Wa = setInterval(Lb, 400)), -1 === jb.indexOf(n) && jb.push(n)) : jb = M;
  };
  ba.stopBlinkingIfCursor = function(n) {
    Lb && (n = jb.indexOf(n), 0 <= n && (jb.splice(n, 1), !jb.length && Wa && (clearInterval(Wa), Wa = 0)));
  };
  Yb && Kb(function(n) {
    n ? Wa || (Wa = setInterval(Lb, 400)) : Wa && (clearInterval(Wa), Wa = 0);
  });
  Lb && wa(function() {
    Wa && clearInterval(Wa);
  });
  pa || Kb(function(n) {
    n ? (ub(ca, "forced-colors", 2 === n ? "lod" : 3 === n ? "dol" : "active"), (yb || 9 === t || 5.5 <= t && 9 > t && Gb) && T(ca, "jsCanRotate")) : (x(ca, "forced-colors"), Ab(ca, "jsCanRotate"));
  });
  (function() {
    function n(A) {
      (K = A) ? y() : ob ? ea(!0) : ob !== M ? y() : Sa(ea, Y);
    }
    function J() {
      J = M;
      Hb(n, "PB-100", {"PB-100_canTTF":ab + "pbFont/ttf.css", "PB-100_canWOFF":ab + "pbFont/woff.css", "PB-100_canEOT":ab + "pbFont/eot.css", "PB-100_canSVG":ab + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function ma(A) {
      this.focus();
      A.preventDefault();
      A.stopPropagation();
    }
    function ea(A) {
      A && T(Fa, "pbList-noWebFont");
      y();
    }
    function y() {
      for (n = Hb = M; H.length;) {
        L(H.shift(), H.shift());
      }
    }
    function L(A, C) {
      function fa(q) {
        q = sb(q);
        for (var B = -1, N; N = q[++B];) {
          switch(N.nodeType) {
            case 1:
              fa(N);
              break;
            case 3:
              N.data && oa(N.data) && f.push(N);
          }
        }
      }
      function W(q) {
        var B = q.children, N = 0, Ba = B.length;
        if (Ba) {
          for (; N < Ba; ++N) {
            W(B[N]);
          }
        } else {
          (B = q.innerText) && oa(B) && f.push(q);
        }
      }
      function oa(q) {
        return q.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], l;
      if (n) {
        -1 === H.indexOf(A) && (H.push(A, C), Z && J && J());
      } else {
        var D = H.indexOf(A);
        0 <= D && H.splice(D, 2);
        for (5 > t ? W(A) : fa(A); l = f.shift();) {
          D = 5 > t ? l.innerText : l.data, 2 !== K && (D = D.split(b).join(k)), C ? 5 > t ? l.innerText = D : l.data = D : P(D.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(U).split("&amp;").join("&"), l);
        }
      }
    }
    function P(A, C) {
      function fa(sa, da) {
        for (var La = ""; da;) {
          da & 1 && (La += sa), da >>= 1, sa += sa;
        }
        return La;
      }
      function W(sa, da, La) {
        for (var Bb, $b = -1, Wb, Xb; Bb = da[++$b];) {
          for (; 0 <= (Wb = sa.indexOf(Bb));) {
            Xb = Bb.length, sa = sa.substr(0, Wb) + fa(La, Xb) + sa.substr(Wb + Xb);
          }
        }
        return sa;
      }
      function oa(sa) {
        var da = S(sa), La = "" + da;
        return 0 < da && da === da | 0 && (da = sa.indexOf(La) + La.length, da <= sa.length) ? da : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), l = 5 > t || 1 === C.nodeType, D = [], q = "", B, N = -1, Ba, $a, Pa;
      if (l) {
        if (Q) {
          var Rb = C.style.visibility;
          Ka(C, "visibility", "hidden");
        }
        C.innerHTML = "";
      }
      if (G) {
        var Cb = C;
        C = I.createDocumentFragment();
      }
      if (function(sa) {
        var da = sa.indexOf("P");
        if (-1 === da) {
          return !1;
        }
        da = S(sa.charAt(da + 1));
        return 0 <= da && 9 >= da;
      }(A)) {
        q = fa("+", A.length);
      } else {
        0 <= (B = oa(A)) && (q = fa("|", B), N = B, --N);
        for (; B = A.charAt(++N);) {
          B === U || Ba ? (q += "~", B === U && (Ba = !Ba)) : q += B;
        }
        q = W(q, p, "^");
        q = W(q, e, "{");
        q = W(q, h, "}");
      }
      N = 0;
      for (Ba = A.length; N < Ba; ++N) {
        B = A.charAt(N);
        var ha = B === c;
        var ka = " " === B;
        B = ha ? " " : B;
        var ja = q.charAt(N);
        var Qa = ($a = Ea) && ha;
        var Ea = "|" === ja;
        ja = f["+|~{}^".indexOf(ja) + 1];
        "\n" !== B ? (K || !ob ? (2 === K && A.substr(N, 2) === b && (B = b, ++N), ja = ka && "str" === ja ? "pbList-strsp" : ha ? "" : !ka && ja ? "pbList-" + ja : "") : (ha = wb.indexOf(B), ha = -1 === ha ? "" : wb.indexOf(B).toString(16).toUpperCase(), ha = (ha = 1 === ha.length ? "0" + ha : ha) ? "pbChr" + ha : "", ja = ka && "str" === ja ? "pbList-strsp" : ka || !ha ? "" : ja ? (ha ? ha + " " : "") + "pbList-" + ja : ha), ha = M, Qa ? (B = 6 <= t && 8 > t ? " " : c, ja = "") : Ea && (X && !lb || 
        9.5 > V) ? (Ea && !$a && (Pa = 4 - (S(A.substr(N)) + "").length), 7.5 > V ? ha = aa ? "position:relative;top:-4px;left:" + 12 * Pa + "px" : {position:"relative", top:"-4px", left:12 * Pa + "px"} : ha = aa ? "position:relative;left:" + 12 * Pa + "px" : {position:"relative", left:12 * Pa + "px"}) : ka && 7.5 > V && (ja = "pbList-strsp"), aa ? D.push("<font" + (ja ? ' class="' + ja + '"' : "") + (ha ? ' style="' + ha + '"' : "") + ">" + B + "</font>") : l || G ? qa(C, "font", {"class":ja, style:ha}, 
        B) : Ja(C, "font", {"class":ja, style:ha}, B)) : ($a = Ea = !1, aa ? D.push(B) : l || G ? ib(C, B) : Qb(C, B));
      }
      if (l) {
        aa ? C.innerHTML = D.join("") : G && Cb.appendChild(C), Q && Ka(C, "visibility", Rb);
      } else {
        if (aa) {
          f = I.createElement("font");
          for (f.innerHTML = D.join(""); D = f.firstChild;) {
            C.parentNode.insertBefore(D, C);
          }
          Aa(C);
        } else {
          G ? Cb.parentNode.replaceChild(C, Cb) : Aa(C);
        }
      }
    }
    na(function(A) {
      if (A) {
        A = Pb("pbChrCS");
        for (var C = 0, fa = A.length; C < fa; ++C) {
          Vb(A[C]);
        }
        return !0;
      }
    });
    var F = [];
    na(function(A) {
      function C(ka) {
        var ja = tb(ka, "pbTip"), Qa;
        if (ja) {
          if (!D) {
            var Ea = ja.charAt(0);
            ja = (Qa = "_" === Ea) ? ja.charAt(2) : Ea;
            Qa = Qa ? "Btm" : "";
            Ea = tb(ka, "title");
            x(ka, "pbTip");
            x(ka, "title");
            T(ka, "pbTipPos" + ja.toUpperCase());
            Qa = qa(ka, "div", {className:"pbTip" + Qa, style:{width:Ea.length + W + "em"}}, Ea);
          }
          qa(Qa || ka, "div");
        }
        l && 0 <= ka.className.indexOf("pbColor") && qa(ka, "u");
      }
      function fa(ka, ja) {
        var Qa = tb(ka, "pbGhst"), Ea = ka.className, sa = Ea.split("pbCsr")[1] || "", da = Ea.split("pbAlp")[1] || "";
        if ("CS" === Qa) {
          var La = "_";
        } else {
          La = Qa, 3 === La.length && (La = La.substr(0, 2)), La = wb[parseInt(La, 16)] || "~";
        }
        var Bb;
        sa = sa.split(" ")[0];
        if (da = S(da.split(" ")[0])) {
          oa && (Ea = Ea.split("pbChr")[1].split(" ")[0], Ka(ka, "backgroundPosition", Db(Ea, 2, Rb) + "px " + -24 * (10 - da) + "px")), !ja && f && Ja(ka, "a").appendChild(ka);
        }
        Qa && (da = 10 - da, oa && (Bb = {backgroundPosition:Db(Qa, 2, Rb) + "px " + -24 * (10 - da) + "px"}), x(ka, "pbGhst"), N = Ja(ka, "b", {className:"pbChr" + Qa + " pbCsr" + sa + " pbAlp" + da, style:Bb}, La), Vb(N));
        Vb(ka);
      }
      if (A) {
        var W = 6 > t ? 2 : 0, oa = 7.2 > V || 0.9 > X || Ua, f = 1.1 === X, l = 1.4 > X;
        A = rb("SAMP");
        var D = 8 === t, q = gb, B, N, Ba, $a, Pa;
        Gb && T(Fa, "pbLCD-AX");
        if (A.length) {
          for (Ba = -1; B = A[++Ba];) {
            if (O(Ia(B), "pbLCD")) {
              var Rb = O(B, "PB-120") || O(B, "FX-795P");
              var Cb = zb(B);
              for (B = Cb.length; Pa = Cb[--B];) {
                switch(Jb(Pa)) {
                  case "A":
                    (2 > q || D) && C(Pa);
                    if (2 > q) {
                      var ha = zb(Pa);
                      for ($a = ha.length; $a;) {
                        fa(ha[--$a], !0);
                      }
                    }
                    Eb ? ub(Pa, "href", "javascript:void(0)") : (ta(Pa, "click", ma), F.push(Pa));
                    break;
                  case "B":
                    2 > q && fa(Pa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    wa(function() {
      for (var A; A = F.shift();) {
        va(A, "click", ma);
      }
    });
    6 === t && (new Ma("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var U = wb[7], k = wb[30], a = wb[113], b = Oa(8337) + Oa(8331), c = Oa(160);
    Oa(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), p = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + wb[31]).split(""), H = [], K, Y, Z;
    na(function(A) {
      if (A) {
        Y = 1 > ab + X ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        A = rb("*");
        for (var C = -1, fa; fa = A[++C];) {
          O(fa, "pbList") ? L(fa) : O(fa, "pbFont") && L(fa, !0);
        }
        H.length && J();
        return !0;
      }
    });
    var aa = !1, Q = 8 > V, G = !aa && !Q && !(6 > t) && I.createDocumentFragment && !!Fa.replaceChild;
    ba.prettify = L;
  })();
  var Zb = I.scripts || rb("script");
  var ab = Zb[Zb.length - 1].src.split("/");
  --ab.length;
  (ab = ab.join("/")) && (ab += "/");
  6.1 > Za && Na(hb);
  wa(Nb);
  6.1 > Za && Na(Ib);
  wa(Ob);
  10 > t && (11 !== nb || 5 !== t) || (9 > V || 1 > X || !Ua && !E.addEventListener ? I.write('<link href="' + ab + xb + '" rel="stylesheet"' + (8 > V ? "" : ' media="screen,handheld,projection,print"') + ">") : eb(function() {
    qa(fb, "link", {href:ab + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

