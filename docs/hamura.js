PB100={};ua = [];
ua.conpare = function(aa, r) {
  var D = 0, v, I, ra = (aa + "").split("."), S = (r + "").split("."), La = ra.length;
  for (v = S.length; "0" === ra[La - 1];) {
    --La;
  }
  for (; "0" === S[v - 1];) {
    --v;
  }
  for (I = La < v ? La : v; D < I; ++D) {
    var Xa = ra[D] - 0, m = S[D] - 0;
    if (Xa !== m) {
      return Xa > m ? 1 : -1;
    }
  }
  return La > v ? 1 : La === v ? 0 : -1;
};
(function(aa, r, D, v, I, ra, S, La) {
  function Xa(u, qa, la) {
    la = ra(u.split(qa)[1]);
    return 0 <= la ? la : 0;
  }
  function m(u, qa) {
    return 0 <= u.indexOf(qa);
  }
  function bb(u) {
    return m(u, "Linux armv") || m(u, "Linux aarch") || m(u, "Linux i686") || m(u, "Linux x86_64");
  }
  function M(u, qa) {
    for (var la in qa) {
      if (la === u) {
        return !0;
      }
    }
  }
  function g(u, qa) {
    var la = "", Qa = -1, Ya;
    if (u = u.split(qa)[1]) {
      for (; Ya = u.charCodeAt(++Qa);) {
        if (48 <= Ya && 57 >= Ya || 46 === Ya) {
          la += u.charAt(Qa);
        } else {
          break;
        }
      }
      for (Qa = la.length; Qa;) {
        if (46 === la.charCodeAt(--Qa)) {
          la = la.substr(0, Qa);
        } else {
          break;
        }
      }
    }
    return la;
  }
  function xa(u) {
    for (var qa = arguments, la = 1, Qa = qa[0], Ya; la < qa.length; ++la) {
      0 > Ea(Qa, Ya = qa[la]) && (Qa = Ya);
    }
    return Qa;
  }
  function Db(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var Ea = aa.conpare, d = v.userAgent, ca = v.appVersion, fb = ra(ca) || 0, R = v.platform, t = D.documentElement, Ua = t && t.style, Fa = D.documentMode, V = I.width;
  I = I.height;
  var ba = r.HTMLAudioElement, lb = r.performance, mb = r.Int8Array, Ga = r.ontouchstart !== La, Za = g(ca, "Version/") || g(d, "Version/"), Eb = r.operamini, za = !Eb && r.opera, Sb = za && (za.version && "function" === typeof za.version ? za.version() : xa(g(d, "Opera "), Za, fb)), Fb = r.opr, nb = !za && (D.all || Fa);
  Fa = nb && (Fa ? Fa : r.XMLHttpRequest ? D.getElementsByTagName ? 7 : 4 : D.compatMode ? 6 : (0).toFixed ? 5.5 : r.attachEvent ? 5 : 4);
  t = !nb && t.msContentZoomFactor;
  var cb = !t && (r.chrome || r.chromium), db = !nb && function() {
    for (var u in Ua) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), xb = m(d, "UCWEB"), Gb = xb && g(d, " U2/"), ob = xb && g(d, "; wds "), gb = g(d.split("_").join("."), "; iPh OS "), ia = g(d, "; Adr "), yb = m(ca, "YJApp-ANDROID"), ya = m(R, "Android") || db && m(ca, "Android") || yb;
  ia = g(R, "Android ") || g(ca, "Android ") || g(d, "Android ") || ia;
  var pb = m(R, "Linux"), Va = "MacIntel" === R && v.standalone !== La, qb = db && g(d, "Goanna/"), Ra = !qb && db && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Hb = g(d, "Firefox/"), z = g(d, "Opera/"), Mb = r.FNRBrowser, Sa = Xa(d, "AppleWebKit/"), hb = g(d, "Chrome/"), Nb = g(ca, "Iron/"), Ib = g(d, "OPR/"), Ob = g(ca, "KHTML/"), rb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var Pb = g(d, "Silk/"), Ha = Xa(d, "SamsungBrowser/"), sb = !Ha && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    qa, la = u.length; qa = u[--la];) {
      if (m(d, qa)) {
        return 2 > ra(Za) ? Za : 0.9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (la = u.length; qa = u[--la];) {
      if (m(d, qa)) {
        return Za;
      }
    }
  }(), zb = cb && 534.3 >= Sa, sa = bb(R), Ia = sa && !m(d, R) && bb(d);
  Ga = Ga && (Sa || db) && Ia || !ia && yb;
  yb = !!r.ReactNativeWebView;
  sa = sa && function() {
    for (var u in r) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ca = (Ia = r.puffinDevice) && Ia.clientInfo;
  Ca = (Ia = Ca && "iOS" === Ca.os && Ca.osVersion) && Ca.model;
  var ib = !Fa && D.registerElement, Qb = !Fa && D.execCommand, Aa = r.webkitCancelAnimationFrame, Jb = pb && ib && "11.0.696.34" === hb, tb = r._firefoxTV_playbackStateObserverJava, ub = Xa(d, "diordnA ");
  if ("Nitro" === R) {
    var x = 1;
  } else if ("Nintendo DSi" === R) {
    x = 2;
    var w = z;
  } else if ("New Nintendo 3DS" === R || m(d, "iPhone OS 6_0") && 320 === V && 240 === I) {
    x = 4, w = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    x = 3, w = g(d, "Version/"), Sa = 535;
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
    x = 11, w = z, 0 > Ea("4.10", z) && (O = 26, T = z);
  } else if (m(d, "Xbox One")) {
    x = 15, w = 1;
  } else if (m(d, "Xbox")) {
    x = 14, w = 1;
  } else if (2 === fb && m(d, "Sony/COM2/")) {
    x = 17;
    w = 2;
    Ab = 3.4;
    var Ja = !0;
  } else if (0 === R.indexOf("iP") || gb || Ia || Va) {
    if (Ia) {
      switch(w = Ia, Ca.substr(0, 4)) {
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
        w = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : v.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : S.isNaN ? 9.2 : r.SharedWorker ? lb && lb.now ? 8.0 : 8.4 : Qb ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : mb ? 4.3 : ba ? 4.1 : 3.2;
      }
      var wa = V === 1.5 * I || 1.5 * V === I;
      0 === R.indexOf("iPhone") ? (Da = 0, ta = !0) : 0 === R.indexOf("iPad") || Va ? (Da = 1, va = !0) : 0 === R.indexOf("iPod") && (Da = 2, eb = !0);
    }
    O = !Ia && (v.standalone || (va || 12 > w) && M("webkitFullscreenEnabled", D) || 11 <= w && 13 > w && v.mediaDevices) ? 16 : 17;
    x = 24;
    T = w;
  } else if (m(d, "Kobo")) {
    x = 18, O = 21, T = 2.2, ya = !0;
  } else if (m(d, "EBRD")) {
    x = 19, O = 21, T = 2.2;
  } else if (z = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    x = 28, w = z;
  } else if (r.onmoztimechange !== La) {
    x = 29, w = 18.1 > Ra ? "1.0.1" : 19 > Ra ? 1.1 : 27 > Ra ? 1.2 : 29 > Ra ? 1.3 : 31 > Ra ? 1.4 : 33 > Ra ? 2.0 : 35 > Ra ? 2.1 : 38 > Ra ? 2.2 : 45 > Ra ? 2.5 : 2.6, m(d, "Mobile") ? ta = !0 : m(d, "Tablet") ? va = !0 : m(d, "TV");
  } else if (r.palmGetResource) {
    x = 30, w = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (ta = !0);
  } else if (z = g(d, "Tizen ")) {
    x = 31, w = z, O = 24, T = Ha, ta = !0;
  } else if (z = g(d, "Windows Phone ") || g(ca, "Windows Phone OS ") || ob) {
    x = 23, w = z, ta = !0;
  } else if (t && "ARM" === R) {
    x = 23, w = 10, ta = !0;
  } else if (nb && m(ca, "ZuneWP")) {
    x = 23, w = 11 === Fa ? 8.1 : 10 === Fa ? 8 : 9 === Fa ? 7.5 : 7 === Fa ? 7 : "?", ta = !0;
  } else if (m(d, "FOMA;")) {
    x = 16, ta = !0;
  } else if (m(d, "SoftBank;")) {
    x = 16, ta = !0;
  } else if (m(d, "KFMUWI")) {
    var Ma = !0;
    w = 6.3;
    var oa = va = !0;
  } else if (m(d, "KFKAWI")) {
    Ma = !0, w = 6, oa = va = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    Ma = !0, w = 5, oa = va = !0;
  } else if (m(d, "KFGIWI")) {
    Ma = !0, w = 5, oa = va = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    Ma = !0, w = 5 <= ra(ia) ? 5 : 4, oa = va = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    Ma = !0, w = 3, oa = va = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    Ma = !0, w = 2, oa = va = !0;
  } else if (m(d, "Kindle Fire")) {
    Ma = !0, w = 1, oa = va = !0;
  } else if (z = g(d, "Kindle/")) {
    x = 20, w = z, O = 21, T = 2.2;
  } else if (tb) {
    Ma = !0, w = ia || ub, oa = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    Ma = !0, w = ia, oa = !0;
  } else if (m(d, "MeeGo")) {
    x = 32;
  } else if (m(d, "Maemo")) {
    x = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || rb) {
    x = 22, Ja = !0;
  } else if ("WinCE" === R) {
    x = 21, Ja = !0;
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
  } else if (pb && Ga || yb || sa) {
    var vb = !0;
    Ha ? wa = {min:4.4} : cb && !zb || Fb || Ib ? wa = {min:4} : (wa = ia = Ua.touchAction !== La ? {min:5} : ib ? 4.4 : mb ? v.connection ? r.searchBoxJavaBridge_ || cb ? S.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Sa ? 3 : 533 <= Sa ? ba ? 2.3 : 2.2 : 530 <= Sa ? 2.0 : 1.5, sb && (O = 24, T = sb));
    w = wa;
    ya = !0;
  } else {
    Jb ? (w = {min:5}, vb = ya = !0) : pb && (m(d, "Ubuntu") ? x = 46 : (z = g(d, "Mint/")) ? (x = 47, w = z) : (z = g(d, "Fedora/")) ? (x = 48, w = z) : x = m(d, "Gentoo") ? 49 : 50);
  }
  Ma || ya && vb && Pb ? x = 27 : ya && (x = x || 26);
  O || (oa = oa || ya, za ? (O = oa || Ja || ta || va ? 9 : 8, T = Sb) : nb ? (wa = Xa(ca, "Trident/") + 4, O = Ja || ta || va || eb ? 3 : Kb && 5 <= Fa ? 7 : 2, T = Fa) : t ? (O = 23 === x ? 6 : 5, T = g(ca, "Edge/")) : qb ? (O = 13, T = qb) : db ? (O = oa ? 12 : 11, T = Ra || Hb) : Ha ? (O = 24, T = Ha) : (z = Ab || g(d, "NetFront/")) ? (O = 18, T = z) : (z = g(d, "iCab")) ? (O = 19, T = z) : (z = xa(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Eb && Za) ? (O = 10, T = z, x || (m(d, "iPhone") ? 
  Da = 0 : m(d, "iPad") ? Da = 1 : m(d, "iPod") && (Da = 2), Da && (x = 24))) : xb ? (O = 25, T = Gb) : Ob ? (O = 14, T = fb) : ya && zb ? (O = 21, T = ia) : cb || Fb || Ib ? (O = oa ? 22 : 20, T = hb || Nb) : ya && ib ? (O = 23, T = 5 > ra(ia) ? ia : hb) : ya && (Za || vb) ? (O = 21, T = ia) : hb ? (O = oa ? 22 : 20, T = hb) : Sa && (O = 15, T = Sa));
  x && (aa[2] = x, w && (aa[3] = Db(w)));
  O && (aa[0] = O, T && (aa[1] = Db(T)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var aa = this[this.length - 1];
  --this.length;
  return aa;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var aa = arguments, r = 0, D = aa.length, v = this.length; r < D; ++r) {
    this[v + r] = aa[r];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var aa = this[0], r = 1, D = this.length; r < D; ++r) {
    this[r - 1] = this[r];
  }
  --this.length;
  return aa;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var aa = arguments, r = aa.length, D = this.length += r - 1, v = D; v >= r; --v) {
    this[v] = this[v - r];
  }
  for (v = 0; v < r; ++v) {
    this[v] = aa[v];
  }
  return D;
});
Array.prototype.splice || (Array.prototype.splice = function(aa, r) {
  var D = arguments, v = D.length - 2 - r, I = this.slice(aa, aa + r), ra;
  if (0 < v) {
    var S = this.length - 1;
    for (ra = aa + r; S >= ra; --S) {
      this[S + v] = this[S];
    }
  } else if (0 > v) {
    S = aa + r;
    for (ra = this.length; S < ra; ++S) {
      this[S + v] = this[S];
    }
    this.length += v;
  }
  S = 2;
  for (ra = D.length; S < ra; ++S) {
    this[S - 2 + aa] = D[S];
  }
  return I;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(aa, r) {
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
    if (this[v] === aa) {
      return v;
    }
  }
  return -1;
});
(function(aa, r, D, v, I, ra, S, La, Xa, m, bb, M) {
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
    n + "" === n && ("a" === n.charAt(2) && (ma = !0, n = n.substr(0, 2)), n = "CS" === n ? 7.2 > V ? 117 : 0.9 > ba || 9 > t || 9 > V || Ua ? 1 : 132 : parseInt(n, 16));
    ma && (50 === n && (n = 128), 102 < n && 108 > n && (n += 24));
    return (n - 1) * -(6 * (J || 2));
  }
  var Ea = I.body, d = Ea.style, ca, fb, R = r[1], t = g(2) || g(3), Ua = g(7), Fa = g(5) || g(6), V = g(8) || g(9), ba = g(11) || g(12), lb = ba && 0 <= r.conpare(R, "1.9.1"), mb = g(13), Ga = g(15), Za = g(16) || g(17), Eb = g(10) || g(25), za = g(20) || g(22), Sb = za || g(23) || g(21) || g(24), Fb = za && S(ra.userAgent.split("Edg/")[1]), nb = S(ra.appVersion.split("Trident/")[1]) + 4, cb = xa(35) || xa(36) || xa(37), db = !t && !Ua && (new La('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  xb = (Ua ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > V ? "opr70" : 8 > V ? "opr72" : 9.5 > V ? "opr" + (V | 0) : ba && !lb ? 1.4 <= ba ? "gck19" : 1.3 <= ba ? "gck13" : 1 <= ba ? "gck12" : 0.9 <= ba ? "gck09" : 0.8 <= ba ? "gck08" : "gck07" : "modern") + ".css";
  xa(1) || xa(2) || xa(3) || xa(4) || xa(8) || xa(9) || xa(10);
  var Gb, ob, gb, ia, yb = d.transform !== M ? "transform" : d["-o-transform"] !== M ? "-o-transform" : d["-ms-transform"] !== M ? "-ms-transform" : d.MozTransform !== M ? "-moz-transform" : d["-webkit-transform"] !== M ? "-webkit-transform" : "", ya = [], pb = [], Va = [], qb, Ra, Hb, z, Mb, Sa, hb, Nb, Ib, Ob;
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
      E && (E = clearInterval(E));
    }
    function ea() {
      b && (b = m(b));
    }
    Sa = function(c) {
      y.length || (E = setInterval(J, L));
      y.push({f:c, v:++P});
      return P;
    };
    hb = function() {
      E && (ma(), E = setInterval(J, L));
    };
    Nb = ma;
    var y = [], L = 500, P = 0, E;
    if (5 > t || Ua) {
      D._wdb_onlooptimer = J, J = "_wdb_onlooptimer()";
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
      D._wdb_ontimer = n, n = "_wdb_ontimer()";
    }
  })();
  var rb, Pb, Ha, sb, zb, sa, Ia, Ca, ib, Qb, Aa, Jb, tb, ub, x, w, O, T, Ab, Ja, Da;
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
                for (var X = ++h, Y, Z = [], Q = H.split(""), G = Q.length; G;) {
                  Y = Q[--G], "A" <= Y && "Z" >= Y && (Y = "-" + Y.toLowerCase()), Z[G] = Y;
                }
                e[X] = Z.join("") + ":" + K[H] + ";";
              }
              e[++h] = '"';
            } else {
              "className" === p && (p = "class"), e[++h] = " " + p + '="' + K + '"';
            }
          }
        }
      }
      e[++h] = ">";
      null != c && (E && "font" !== a ? e[++h] = "<FONT>" + c + "</FONT>" : e[++h] = c);
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
      return E ? a.parentElement : a.parentNode;
    }
    function ea(a, b, c, e, h, p) {
      if (E) {
        var H = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = sb(2 > a ? Ha(b) : b);
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
      if (E) {
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
    var E = 5 > t;
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
        if (H || (E || 1 === K.nodeType) && P(K, a)) {
          b[++h] = K;
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
      var b = !(7.03 < V && 7.2 > V) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], e = a.length, h = -1, p; e;) {
        if (p = a[--e], b || 1 === p.nodeType) {
          E && "FONT" === p.tagName || (c[++h] = p);
        }
      }
      return c;
    };
    sa = function(a, b, c, e, h) {
      b = ea(2, a, b, c, e, h);
      E || (a.appendChild(b), k && null != e && y(b, e));
      return b;
    };
    Ia = function(a, b, c, e, h) {
      b = ea(0, a, b, c, e, h);
      E || (ma(a).insertBefore(b, a), k && null != e && y(b, e));
      return b;
    };
    Ca = function(a, b, c, e, h) {
      b = ea(1, a, b, c, e, h);
      var p;
      E || ((p = a.nextSibling) ? Ha(p).insertBefore(b, p) : Ha(a).appendChild(b), k && null != e && y(b, e));
      return b;
    };
    ib = y;
    Qb = function(a, b) {
      if (E) {
        return ea(0, a, "font", M, b);
      }
      var c = I.createTextNode("" + b);
      Ha(a).insertBefore(c, a);
      return c;
    };
    Aa = function(a) {
      E ? a.outerHTML = "" : Ha(a).removeChild(a);
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
        9 > V || 1 > ba ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ta, va, eb, wa, Ma, oa, Kb, vb, u, qa;
  (function() {
    function n() {
      return Q ? A ? 2 : G ? 3 : 1 : 0;
    }
    function J(f) {
      va(D, "load", J);
      J = M;
      ea(ya, f, !0);
      eb = ya = M;
    }
    function ma(f, l) {
      oa(function() {
        var F = k(f);
        l(F);
        F.addListener(l);
        return !0;
      });
    }
    function ea(f, l, F) {
      for (var q = 0; q < f.length; ++q) {
        !0 === f[q](l) && (f.splice(q, 1), --q);
      }
      F && (f.length = 0);
    }
    function y(f, l, F) {
      c && !b.length && z(L);
      b.push(f, l, F);
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
      var F = -1, q, B;
      t ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : p && (l.u = l.stopPropagation, l.stopPropagation = function() {
        B = !0;
      });
      for (; q = f[++F];) {
        q.l === this ? (this.g = q.j, this.g(l), this.g = v, this.g = M) : 7.2 > V && this === I && q.l === D && (D.g = q.j, D.g(l), delete D.g);
      }
      if (t) {
        return l.preventDefault = l.stopPropagation = M, l.returnValue;
      }
      p && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (K = !0), B && !K && l.u(), l.u = l.stopPropagation = M);
    }
    function E() {
      var f = 9 === a.offsetWidth;
      vb !== f && y(pb, vb = f);
    }
    function U(f) {
      ya || ea(fa, f);
    }
    var k = D.matchMedia, a, b = [], c;
    ya.push(function() {
      ma = M;
      a = sa(Ea, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      eb(function() {
        c = !0;
        b.length && z(L);
      });
    });
    ta = function(f, l, F, q) {
      if (H) {
        f.addEventListener(l, F, q ? db ? q : q.capture : !1);
      } else {
        var B = {l:f, j:F};
        q = e[l];
        var N = "on" + l, Ba, $a;
        if (q) {
          for (Ba = q.length; $a = q[--Ba];) {
            if ($a.l === f && $a.j === F) {
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
    va = function(f, l, F, q) {
      if (H) {
        f.removeEventListener(l, F, q ? db ? q : q.capture : !1);
      } else {
        q = e[l];
        l = "on" + l;
        var B, N, Ba;
        if (q) {
          for (B = q.length; N = q[--B];) {
            N.l === f && (N.j === F ? q.splice(B, 1) : Ba = !0);
          }
          Ba || (h ? f.detachEvent(l, P) : (f[l] = v, f[l] = null));
        }
      }
    };
    var e = {}, h = !1, p = 525.13 > Ga, H = !p && !Ua && D.addEventListener, K;
    p && ca.addEventListener("click", function(f) {
      if (K) {
        return K = !1, f.preventDefault(), !1;
      }
    });
    eb = function(f) {
      ya.push(f);
    };
    wa = function(f) {
      X && X.push(f);
    };
    var X = [];
    if (419.3 >= Ga) {
      var Y = function() {
        if (Y) {
          var f = I.readyState;
          "loaded" === f || "complete" === f ? (Y = M, J()) : z(Y);
        }
      };
      z(Y);
    } else {
      ta(D, "load", J);
    }
    t || 0.9 <= ba && 1.8 > ba ? ta(D, "unload", function(f) {
      ea(X, f, !0);
    }) : X = M;
    oa = function(f) {
      pb.push(f);
    };
    eb(function() {
      E();
      Sa(E);
    });
    Kb = function(f) {
      Va && Va.push(f);
    };
    var Z = 60 > ba || mb, Q, G, A;
    if (89 <= ba || 89 <= za || cb && 79 <= Fb || k && (k("(forced-colors:none)").matches || k("(forced-colors:active)").matches)) {
      qa = !0, ma("(forced-colors:active)", function(f) {
        Q = f.matches;
        u = n();
        y(Va, u);
      });
    } else if (10 <= t || Fa || cb && Fb) {
      qa = !0, ma("(-ms-high-contrast:black-on-white)", function(f) {
        Q = G = f.matches;
        u !== n() && (u = n(), y(Va, u));
      }), ma("(-ms-high-contrast:white-on-black)", function(f) {
        Q = A = f.matches;
        u !== n() && (u = n(), y(Va, u));
      }), ma("(-ms-high-contrast:active)", function(f) {
        Q = f.matches;
        u !== n() && (u = n(), y(Va, u));
      });
    } else if (cb && (t || ba && 0 <= r.conpare(R, "1.8.1") || mb)) {
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
        var F = l ? l.getComputedStyle(a, null) : a.currentStyle;
        l = (F && F.color || "").split(" ").join("");
        F = (F && F.backgroundColor || "").split(" ").join("");
        l && (Q = "#123456" !== l && "rgb(18,52,86)" !== l, G = f(l) < f(F, !0), A = f(l) > f(F, !0), u !== n() && (u = n(), y(Va, u, Z)));
      };
      oa(function(f) {
        if (f) {
          return Ja(a, "color", "#123456"), Ja(a, "backgroundColor", "#123456"), Z ? (C(), Va = M) : Sa(C), C = M, !0;
        }
      });
    } else {
      Va = n = M;
    }
    Ma = function(f) {
      fa.push(f);
    };
    var fa = [], W = 0, pa = 1 > ba || 1.2 <= ba && 1.8 > ba || 7.2 >= V;
    pa ? Sa(function() {
      var f = D.scrollY || Ea.scrollTop;
      W !== f && (W = f, U());
    }) : ta(D, "scroll", U);
    wa(function() {
      pa || va(D, "scroll", U);
    });
  })();
  var la = 9 > t || 525 <= Ga && 530 > Ga || 2 > za, Qa = 0, Ya, Tb, Ub;
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
          if (2 > za || cb && 526 > Ga) {
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
      if (P || E) {
        var h = b ? Ia(b, "style") : e ? Ca(e, "style") : sa(fb, "style");
        E && ib(h, "");
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
      var p = "@import" === a, H = "@page" === a, K = "@font-face" === a, X = e.length, Y = "", Z;
      if (k.imports) {
        var Q = k.imports.length;
      } else {
        for (Q = 0; Q < X && "@import" === e[Q].A; ++Q) {
        }
      }
      if (p) {
        c = 0 <= c && c < Q ? c : Q;
        var G = a + ' "' + b + '"';
      } else {
        c = Q <= c && c < X ? c : X;
        for (G in b) {
          Y += ";" + G + ":" + b[G];
        }
        Y = Y.substr(1);
        G = a + "{" + Y + "}";
        6 <= t && K && (c = X);
      }
      X = {A:a, F:b, s:c, o:c};
      if (9 > t) {
        Q = k.rules;
        var A = Q.length;
        if (K) {
          a = I.createElement("div"), a.innerHTML = '_<style type="text/css"' + (k.media ? ' media="' + k.media + '"' : "") + ">" + G + "</style>", a = a.lastChild, (Z = h.nextSibling) ? Ha(h).insertBefore(a, Z) : Ha(h).appendChild(a), X.i = a;
        } else {
          if (p ? k.addImport(b, c) : 5.5 <= t && H || k.addRule(a, Y, c), X.o = c + (Q.length - A - 1), 0 === Q.length - A) {
            return -1;
          }
        }
      } else if (P || E) {
        (cb && Ga || 28 > za) && p ? X.i = Ca(h, "link", {href:b, rel:"stylesheet", type:"text/css"}) : la && K ? (a = X.i = Ca(h, "style", {type:"text/css", media:k.media}), a.innerText = G) : k.insertRule(G, c);
      }
      e.splice(c, 0, X);
      if (y || L) {
        h = n(k);
        Z = h.m;
        a = h.h;
        b = k.B;
        p = J();
        k = p[b - 1];
        b = p[b];
        p = [];
        K = H = -1;
        Y = "style";
        X = {type:"text/css", media:h.C};
        for (var C; Q = Z[++H];) {
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
        y && (p = "data:text/css;charset=utf-8;base64," + U(p), X.rel = "stylesheet", X.href = p, Y = "link", p = M);
        a ? (h.h = Ca(a, Y, X, p), Aa(a)) : (a = b ? Ia(b, Y, X, p) : k ? Ca(k, Y, X, p) : sa(fb, Y, X, p), h.h = a);
      }
      C = c;
      k = e.length;
      for (h = C; h < k; ++h) {
        Z = e[h], Z.i || (a = Z.o - Z.s, Z.s = C, Z.o = C + a, C += 1 + a);
      }
      return c;
    };
    var ea = [], y = 1 > ba || 8 <= V && 9 > V, L = 7.2 <= V && 8 > V, P = !!t || !y && !L && function() {
      var k = sa(ca, "style"), a = !(!k.styleSheet && !k.sheet);
      Aa(k);
      return a;
    }(), E = !P && Ga && !y && !L && function() {
      var k = sa(ca, "style");
      ib(k, "");
      var a = !(!k.styleSheet && !k.sheet);
      Aa(k);
      return a;
    }();
    Qa = y || L ? 1 : P || E ? 2 : 0;
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
      if (525 > Ga || ba && !lb || 2.2 > g(21) || g(25) || 10 > g(3) || xa(32) || xa(30) || xa(1) || xa(2) || xa(3)) {
        return !1;
      }
      if (la) {
        return !0;
      }
      if (2 === Qa) {
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
        gb = 8 <= t || Fa || 9.5 <= V || lb || mb || 522 <= Ga || 3 <= Za || Eb || Sb ? 3 : 7.2 <= V ? 2 : 6 <= V || ba ? 1 : 0;
        if (!gb && !t && !Ua) {
          var y = sa(Ea, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          gb = 6 <= y.offsetWidth ? 2 : 0;
          Aa(y);
        }
        return !0;
      }
    });
    qb = function(y) {
      function L(U) {
        E = Mb(E);
        ia = U;
        P.onload = P.onerror = v;
        z(y, U);
      }
      if (ia !== M) {
        z(y, ia);
      } else if (8 > t) {
        z(y, !1);
      } else {
        var P = new Image(), E = z(function() {
          E && L(!1);
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
      var y = sa(Ea, "div");
      Da(y, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Gb = 1 < y.offsetHeight;
      Da(y, "");
      Aa(y);
    });
    Ra = function(y, L) {
      function P() {
        if (U || !k || E.complete) {
          var a = !!E.width;
          ob = ob || a;
          z(y, a);
          E.onerror = E.onload = v;
          E = y = M;
        } else {
          --k, z(P);
        }
      }
      var E = new Image(), U, k = 99;
      E.onerror = function() {
        U = !0;
      };
      E.onload = function() {
        U = !0;
      };
      E.src = L;
      z(P);
    };
    var J = 9 > t || 2 > za || 12 > V, ma = ["sans-serif", "serif"], ea;
    Hb = function(y, L, P, E, U, k, a) {
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
        return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (Z = new bb() - 0, !1) : W < new bb() - Z;
      }
      function h(W) {
        var pa;
        W && (Z = new bb() - 0);
        (pa = p(L)) ? b(pa) : e(Y) ? Q || J ? b(0) : ia !== M ? H(ia) : qb(H) : z(h);
      }
      function p(W) {
        var pa = 0, f = -1, l = 0;
        if (!C) {
          var F = -1;
          var q;
          G = sa(Ea, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (C = {}; q = ma[++F];) {
            Ja(G, "fontFamily", q), C[q] = G.offsetWidth;
          }
        }
        for (5 > t ? G || (G = sa(Ea, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Ea.appendChild(G); F = ma[++f];) {
          if (Ja(G, "fontFamily", '"' + W + '",' + F), G.offsetWidth !== C[F]) {
            pa = 1;
            break;
          }
        }
        !t && pa && U && (G.innerHTML = U, W = G.offsetWidth, G.innerHTML = k, l = W === G.offsetWidth ? 1 : 0, G.innerHTML = "mmmmmmmmmmlli");
        Aa(G);
        5 > t && (G = M);
        return pa + l;
      }
      function H(W) {
        W ? (Q = !0, K(!0)) : b(0);
      }
      function K(W) {
        var pa;
        if (P) {
          for (pa in W && (Z = new bb() - 0), P) {
            p(pa) ? (A = sa(Ea, "div", {"aria-hidden":"true", className:E, id:E}), fa = Ya(), Ub(fa, "@import", P[pa]), z(X, !0)) : e(100) ? (delete P[pa], z(K, !0)) : z(K);
            return;
          }
        }
        b(0);
      }
      function X(W) {
        W && (Z = new bb() - 0);
        1 < A.offsetWidth ? (Aa(A), Y = 100, z(h, !0)) : e(Y) ? 528 > Ga ? (Aa(A), Y = 100, z(h, !0)) : (Aa(A), b(0)) : z(X);
      }
      var Y = a || 5000, Z, Q, G, A, C, fa;
      n || ea ? ea || n() ? !I.fonts || 603 > Ga ? h(!0) : c() : z(b, 0) : z(b, 0);
    };
  })();
  var Na = String.fromCharCode, wb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Na(960), ")", "(", Na(234), Na(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Na(9824), "\u2190", Na(9829), Na(9830), Na(9827), Na(956), "\u03a9", "\u2193", "\u2192", "%", Na(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Na(9619)], Yb = (9 === t || ba && 0 <= r.conpare(R, "1.8.1") || mb) && !qa, jb = [], kb, Wa, Lb = 7.2 > V ? function() {
    kb = !kb;
    for (var n = -1, J; J = jb[++n];) {
      -1 !== J.className.indexOf("pbAlp") ? Ja(J, "display", kb ? "" : "none") : (T(J, kb ? "pbChrCS" : "pbChr00"), Ab(J, kb ? "pbChr00" : "pbChrCS"));
    }
  } : Yb ? function() {
    kb = !kb;
    for (var n = -1, J; J = jb[++n];) {
      Ja(J, "opacity", kb ? 1 : 0);
    }
  } : M;
  var Vb = aa.startBlinkingIfCursor = function(n) {
    Lb ? O(n, "pbChrCS") && (Wa || !V && !u || (Wa = setInterval(Lb, 400)), -1 === jb.indexOf(n) && jb.push(n)) : jb = M;
  };
  aa.stopBlinkingIfCursor = function(n) {
    Lb && (n = jb.indexOf(n), 0 <= n && (jb.splice(n, 1), !jb.length && Wa && (clearInterval(Wa), Wa = 0)));
  };
  Yb && Kb(function(n) {
    n ? Wa || (Wa = setInterval(Lb, 400)) : Wa && (clearInterval(Wa), Wa = 0);
  });
  Lb && wa(function() {
    Wa && clearInterval(Wa);
  });
  qa || Kb(function(n) {
    n ? (ub(ca, "forced-colors", 2 === n ? "lod" : 3 === n ? "dol" : "active"), (yb || 9 === t || 5.5 <= t && 9 > t && Gb) && T(ca, "jsCanRotate")) : (x(ca, "forced-colors"), Ab(ca, "jsCanRotate"));
  });
  (function() {
    function n(A) {
      (K = A) ? y() : ob ? ea(!0) : ob !== M ? y() : Ra(ea, X);
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
      A && T(Ea, "pbList-noWebFont");
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
              N.data && pa(N.data) && f.push(N);
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
          (B = q.innerText) && pa(B) && f.push(q);
        }
      }
      function pa(q) {
        return q.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], l;
      if (n) {
        -1 === H.indexOf(A) && (H.push(A, C), Y && J && J());
      } else {
        var F = H.indexOf(A);
        0 <= F && H.splice(F, 2);
        for (5 > t ? W(A) : fa(A); l = f.shift();) {
          F = 5 > t ? l.innerText : l.data, 2 !== K && (F = F.split(b).join(k)), C ? 5 > t ? l.innerText = F : l.data = F : P(F.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(U).split("&amp;").join("&"), l);
        }
      }
    }
    function P(A, C) {
      function fa(na, da) {
        for (var Ka = ""; da;) {
          da & 1 && (Ka += na), da >>= 1, na += na;
        }
        return Ka;
      }
      function W(na, da, Ka) {
        for (var Bb, $b = -1, Wb, Xb; Bb = da[++$b];) {
          for (; 0 <= (Wb = na.indexOf(Bb));) {
            Xb = Bb.length, na = na.substr(0, Wb) + fa(Ka, Xb) + na.substr(Wb + Xb);
          }
        }
        return na;
      }
      function pa(na) {
        var da = S(na), Ka = "" + da;
        return 0 < da && da === da | 0 && (da = na.indexOf(Ka) + Ka.length, da <= na.length) ? da : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), l = 5 > t || 1 === C.nodeType, F = [], q = "", B, N = -1, Ba, $a, Oa;
      if (l) {
        if (Q) {
          var Rb = C.style.visibility;
          Ja(C, "visibility", "hidden");
        }
        C.innerHTML = "";
      }
      if (G) {
        var Cb = C;
        C = I.createDocumentFragment();
      }
      if (function(na) {
        var da = na.indexOf("P");
        if (-1 === da) {
          return !1;
        }
        da = S(na.charAt(da + 1));
        return 0 <= da && 9 >= da;
      }(A)) {
        q = fa("+", A.length);
      } else {
        0 <= (B = pa(A)) && (q = fa("|", B), N = B, --N);
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
        var ja = " " === B;
        B = ha ? " " : B;
        var ka = q.charAt(N);
        var Ta = ($a = Pa) && ha;
        var Pa = "|" === ka;
        ka = f["+|~{}^".indexOf(ka) + 1];
        "\n" !== B ? (K || !ob ? (2 === K && A.substr(N, 2) === b && (B = b, ++N), ka = ja && "str" === ka ? "pbList-strsp" : ha ? "" : !ja && ka ? "pbList-" + ka : "") : (ha = wb.indexOf(B), ha = -1 === ha ? "" : wb.indexOf(B).toString(16).toUpperCase(), ha = (ha = 1 === ha.length ? "0" + ha : ha) ? "pbChr" + ha : "", ka = ja && "str" === ka ? "pbList-strsp" : ja || !ha ? "" : ka ? (ha ? ha + " " : "") + "pbList-" + ka : ha), ha = M, Ta ? (B = 6 <= t && 8 > t ? " " : c, ka = "") : Pa && (ba && !lb || 
        9.5 > V) ? (Pa && !$a && (Oa = 4 - (S(A.substr(N)) + "").length), 7.5 > V ? ha = Z ? "position:relative;top:-4px;left:" + 12 * Oa + "px" : {position:"relative", top:"-4px", left:12 * Oa + "px"} : ha = Z ? "position:relative;left:" + 12 * Oa + "px" : {position:"relative", left:12 * Oa + "px"}) : ja && 7.5 > V && (ka = "pbList-strsp"), Z ? F.push("<font" + (ka ? ' class="' + ka + '"' : "") + (ha ? ' style="' + ha + '"' : "") + ">" + B + "</font>") : l || G ? sa(C, "font", {"class":ka, style:ha}, 
        B) : Ia(C, "font", {"class":ka, style:ha}, B)) : ($a = Pa = !1, Z ? F.push(B) : l || G ? ib(C, B) : Qb(C, B));
      }
      if (l) {
        Z ? C.innerHTML = F.join("") : G && Cb.appendChild(C), Q && Ja(C, "visibility", Rb);
      } else {
        if (Z) {
          f = I.createElement("font");
          for (f.innerHTML = F.join(""); F = f.firstChild;) {
            C.parentNode.insertBefore(F, C);
          }
          Aa(C);
        } else {
          G ? Cb.parentNode.replaceChild(C, Cb) : Aa(C);
        }
      }
    }
    oa(function(A) {
      if (A) {
        A = Pb("pbChrCS");
        for (var C = 0, fa = A.length; C < fa; ++C) {
          Vb(A[C]);
        }
        return !0;
      }
    });
    var E = [];
    oa(function(A) {
      function C(ja) {
        var ka = tb(ja, "pbTip"), Ta = ka.charAt(0), Pa = "_" === Ta;
        ka = Pa ? ka.charAt(2) : Ta;
        Ta = Pa ? "Btm" : "";
        var na = tb(ja, "title");
        l || (x(ja, "pbTip"), x(ja, "title"), T(ja, "pbTipPos" + ka.toUpperCase()), sa(ja, "div", {className:"pbTip" + Ta, style:{width:na.length + W + "em"}}, na));
        sa(ja, "div", {className:"pbTail" + Ta});
        F && Pa && (ja.focus(), ja.blur());
      }
      function fa(ja, ka) {
        var Ta = tb(ja, "pbGhst"), Pa = ja.className, na = Pa.split("pbCsr")[1] || "", da = Pa.split("pbAlp")[1] || "";
        if ("CS" === Ta) {
          var Ka = "_";
        } else {
          Ka = Ta, 3 === Ka.length && (Ka = Ka.substr(0, 2)), Ka = wb[parseInt(Ka, 16)] || "~";
        }
        var Bb;
        na = na.split(" ")[0];
        if (da = S(da.split(" ")[0])) {
          pa && (Pa = Pa.split("pbChr")[1].split(" ")[0], Ja(ja, "backgroundPosition", Db(Pa, 2, Rb) + "px " + -24 * (10 - da) + "px")), !ka && f && Ia(ja, "a").appendChild(ja);
        }
        Ta && (da = 10 - da, pa && (Bb = {backgroundPosition:Db(Ta, 2, Rb) + "px " + -24 * (10 - da) + "px"}), x(ja, "pbGhst"), N = Ia(ja, "b", {className:"pbChr" + Ta + " pbCsr" + na + " pbAlp" + da, style:Bb}, Ka), Vb(N));
        Vb(ja);
      }
      if (A) {
        var W = 6 > t ? 2 : 0, pa = 7.2 > V || 0.9 > ba || Ua, f = 1.1 === ba;
        A = rb("SAMP");
        var l = 8 === t, F = 5 <= t && 6 > t, q = gb, B, N, Ba, $a, Oa;
        Gb && T(Ea, "pbLCD-AX");
        if (A.length) {
          for (Ba = -1; B = A[++Ba];) {
            if (O(Ha(B), "pbLCD")) {
              var Rb = O(B, "PB-120") || O(B, "FX-795P");
              var Cb = zb(B);
              for (B = Cb.length; Oa = Cb[--B];) {
                switch(Jb(Oa)) {
                  case "A":
                    (2 > q || l) && C(Oa);
                    if (2 > q) {
                      var ha = zb(Oa);
                      for ($a = ha.length; $a;) {
                        fa(ha[--$a], !0);
                      }
                    }
                    Eb ? ub(Oa, "href", "javascript:void(0)") : (ta(Oa, "click", ma), E.push(Oa));
                    break;
                  case "B":
                    2 > q && fa(Oa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    wa(function() {
      for (var A; A = E.shift();) {
        va(A, "click", ma);
      }
    });
    6 === t && (new La("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var U = wb[7], k = wb[30], a = wb[113], b = Na(8337) + Na(8331), c = Na(160);
    Na(8194);
    var e = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), p = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + k + wb[31]).split(""), H = [], K, X, Y;
    oa(function(A) {
      if (A) {
        X = 1 > ab + ba ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        A = rb("*");
        for (var C = -1, fa; fa = A[++C];) {
          O(fa, "pbList") ? L(fa) : O(fa, "pbFont") && L(fa, !0);
        }
        H.length && J();
        return !0;
      }
    });
    var Z = !1, Q = 8 > V, G = !Z && !Q && !(6 > t) && I.createDocumentFragment && !!Ea.replaceChild;
    aa.prettify = L;
  })();
  var Zb = I.scripts || rb("script");
  var ab = Zb[Zb.length - 1].src.split("/");
  --ab.length;
  (ab = ab.join("/")) && (ab += "/");
  6.1 > Za && Ma(hb);
  wa(Nb);
  6.1 > Za && Ma(Ib);
  wa(Ob);
  10 > t && (11 !== nb || 5 !== t) || (9 > V || 1 > ba || !Ua && !D.addEventListener ? I.write('<link href="' + ab + xb + '" rel="stylesheet"' + (8 > V ? "" : ' media="screen,handheld,projection,print"') + ">") : eb(function() {
    sa(fb, "link", {href:ab + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

