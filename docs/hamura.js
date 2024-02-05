/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Xa, y) {
  var W = 0, ia, F, Pa = (Xa + "").split("."), cb = (y + "").split("."), La = Pa.length;
  for (ia = cb.length; "0" === Pa[La - 1];) {
    --La;
  }
  for (; "0" === cb[ia - 1];) {
    --ia;
  }
  for (F = La < ia ? La : ia; W < F; ++W) {
    var wa = Pa[W] - 0, h = cb[W] - 0;
    if (wa !== h) {
      return wa > h ? 1 : -1;
    }
  }
  return La > ia ? 1 : La === ia ? 0 : -1;
};
(function(Xa, y, W, ia, F, Pa, cb, La) {
  function wa(u, xa, ba) {
    ba = Pa(u.split(xa)[1]);
    return 0 <= ba ? ba : 0;
  }
  function h(u, xa) {
    return 0 <= u.indexOf(xa);
  }
  function Ib(u) {
    return h(u, "Linux armv") || h(u, "Linux aarch") || h(u, "Linux i686") || h(u, "Linux x86_64");
  }
  function db(u, xa) {
    for (var ba in xa) {
      if (ba === u) {
        return !0;
      }
    }
  }
  function p(u, xa) {
    var ba = "", Ma = -1, Na;
    if (u = u.split(xa)[1]) {
      for (; Na = u.charCodeAt(++Ma);) {
        if (48 <= Na && 57 >= Na || 46 === Na) {
          ba += u.charAt(Ma);
        } else {
          break;
        }
      }
      for (Ma = ba.length; Ma;) {
        if (46 === ba.charCodeAt(--Ma)) {
          ba = ba.substr(0, Ma);
        } else {
          break;
        }
      }
    }
    return ba;
  }
  function J(u) {
    for (var xa = arguments, ba = 1, Ma = xa[0], Na; ba < xa.length; ++ba) {
      0 > qa(Ma, Na = xa[ba]) && (Ma = Na);
    }
    return Ma;
  }
  function R(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var qa = Xa.conpare, c = ia.userAgent, S = ia.appVersion, eb = Pa(S) || 0, K = ia.platform, Ya = W.documentElement, Fa = Ya && Ya.style, l = W.documentMode, Qa = F.width;
  F = F.height;
  var fb = y.HTMLAudioElement, z = y.performance, T = y.Int8Array, gb = y.ontouchstart !== La, Ra = p(S, "Version/") || p(c, "Version/"), Ga = y.operamini, ja = !Ga && y.opera, Jb = ja && (ja.version && "function" === typeof ja.version ? ja.version() : J(p(c, "Opera "), Ra, eb)), Ca = y.opr, rb = !ja && (W.all || l);
  l = rb && (l ? l : y.XMLHttpRequest ? W.getElementsByTagName ? 7 : 4 : W.compatMode ? 6 : (0).toFixed ? 5.5 : y.attachEvent ? 5 : 4);
  Ya = !rb && Ya.msContentZoomFactor;
  var Ta = !Ya && (y.chrome || y.chromium), hb = !rb && function() {
    for (var u in Fa) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Cb = h(c, "UCWEB"), Kb = Cb && p(c, " U2/"), Rb = Cb && p(c, "; wds "), Za = p(c.split("_").join("."), "; iPh OS "), sa = p(c, "; Adr "), sb = h(S, "YJApp-ANDROID"), Ha = h(K, "Android") || hb && h(S, "Android") || sb;
  sa = p(K, "Android ") || p(S, "Android ") || p(c, "Android ") || sa;
  var tb = h(K, "Linux"), lb = "MacIntel" === K && ia.standalone !== La, mb = hb && p(c, "Goanna/"), ya = !mb && hb && (p(c, "rv:") || p(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Sb = p(c, "Firefox/"), X = p(c, "Opera/"), Db = y.FNRBrowser, za = wa(c, "AppleWebKit/"), ib = p(c, "Chrome/"), Lb = p(S, "Iron/"), yb = p(c, "OPR/"), Mb = p(S, "KHTML/"), Tb = p(c.toLowerCase(), "iris");
  p(c, "FxiOS/");
  p(c, "CriOS/");
  p(c, "EdgiOS/");
  var aa = p(c, "Silk/"), jb = wa(c, "SamsungBrowser/"), zb = !jb && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    xa, ba = u.length; xa = u[--ba];) {
      if (h(c, xa)) {
        return 2 > Pa(Ra) ? Ra : 0.9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ba = u.length; xa = u[--ba];) {
      if (h(c, xa)) {
        return Ra;
      }
    }
  }(), Eb = Ta && 534.3 >= za, ub = Ib(K), $a = ub && !h(c, K) && Ib(c);
  gb = gb && (za || hb) && $a || !sa && sb;
  sb = !!y.ReactNativeWebView;
  ub = ub && function() {
    for (var u in y) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ua = ($a = y.puffinDevice) && $a.clientInfo;
  Ua = ($a = Ua && "iOS" === Ua.os && Ua.osVersion) && Ua.model;
  var ab = !l && W.registerElement, Nb = !l && W.execCommand, nb = y.webkitCancelAnimationFrame, Ob = tb && ab && "11.0.696.34" === ib, vb = y._firefoxTV_playbackStateObserverJava, Ab = wa(c, "diordnA ");
  if ("Nitro" === K) {
    var t = 1;
  } else if ("Nintendo DSi" === K) {
    t = 2;
    var m = X;
  } else if ("New Nintendo 3DS" === K || h(c, "iPhone OS 6_0") && 320 === Qa && 240 === F) {
    t = 4, m = p(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === K) {
    t = 3, m = Ra, za = 535;
  } else if (!K && h(S, "Nintendo Switch;")) {
    t = 7, m = p(S, "NintendoBrowser/");
  } else if (y.wiiu) {
    t = 6;
    m = p(S, "NintendoBrowser/");
    var U = 15, Y = p(S, "AppleWebKit/") || (nb ? 536 : 534);
    m || (m = nb ? 4 : 2, h(S, "Macintosh;") || h(S, "Windows NT") && h(S, "Touch"));
  } else if (ja && ja.wiiremote) {
    t = 5, m = p(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === K) {
    t = 10, m = p(c, K + " ");
  } else if (X = p(c, "(PlayStation Portable); ")) {
    t = 8;
    m = X;
    var Fb = 3.3;
  } else if ("PlayStation 4" === K) {
    t = 12, m = p(S, K + "/");
  } else if ("PlayStation 3" === K) {
    t = 11, m = p(c, "PLAYSTATION 3; ") || p(c, "PLAYSTATION 3 "), 0 > qa(m, "4.10") && (U = 26, Y = m);
  } else if (h(c, "Xbox One")) {
    t = 15, m = 1;
  } else if (h(c, "Xbox")) {
    t = 14, m = 1;
  } else if (2 === eb && h(c, "Sony/COM2/")) {
    t = 17;
    m = 2;
    Fb = 3.4;
    var Da = !0;
  } else if (0 === K.indexOf("iP") || Za || $a || lb) {
    if ($a) {
      switch(m = $a, Ua.substr(0, 4)) {
        case "iPho":
          var Ea = 0;
          p(Ua, Ea);
          var Aa = !0;
          break;
        case "iPad":
          Ea = 1;
          p(Ua, Ea);
          var na = !0;
          break;
        case "iPod":
          Ea = 2;
          p(Ua, Ea);
          var kb = !0;
      }
    } else {
      Za ? m = Za : (m = p(S.split("_").join("."), "OS "), db("isSecureContext", y), db("enableWebGL", y), db("sameOrigin", y));
      if (!m || Db) {
        m = y.PointerEvent ? 13 : y.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : y.WebAssembly ? 11.2 : y.HTMLMeterElement ? 10.3 : y.Proxy ? 10.2 : y.HTMLPictureElement ? 9.3 : cb.isNaN ? 9.2 : y.SharedWorker ? z && z.now ? 8 : 8.4 : Nb ? 7.1 : y.webkitURL ? 6.1 : y.Worker ? 5.1 : T ? 4.3 : fb ? 4.1 : 3.2;
      }
      var Ia = Qa === 1.5 * F || 1.5 * Qa === F;
      0 === K.indexOf("iPhone") ? (Ea = 0, Aa = !0) : 0 === K.indexOf("iPad") || lb ? (Ea = 1, na = !0) : 0 === K.indexOf("iPod") && (Ea = 2, kb = !0);
    }
    U = !$a && (ia.standalone || (na || 12 > m) && db("webkitFullscreenEnabled", W) || 11 <= m && 13 > m && ia.mediaDevices) ? 16 : 17;
    t = 24;
    Y = m;
  } else if (h(c, "Kobo")) {
    t = 18, U = 21, Y = 2.2, Ha = !0;
  } else if (h(c, "EBRD")) {
    t = 19, U = 21, Y = 2.2;
  } else if (X = p(c, "CrOS x86_64 ") || p(c, "CrOS aarch64 ") || p(c, "CrOS i686 ") || p(c, "CrOS armv7l ")) {
    t = 28, m = X;
  } else if (y.onmoztimechange !== La) {
    t = 29, m = 18.1 > ya ? "1.0.1" : 19 > ya ? 1.1 : 27 > ya ? 1.2 : 29 > ya ? 1.3 : 31 > ya ? 1.4 : 33 > ya ? 2 : 35 > ya ? 2.1 : 38 > ya ? 2.2 : 45 > ya ? 2.5 : 2.6, h(c, "Mobile") ? Aa = !0 : h(c, "Tablet") ? na = !0 : h(c, "TV");
  } else if (y.palmGetResource) {
    t = 30, m = p(c, "webOS/") || p(c, "WEBOS") || p(c, "hpwOS/"), h(c, "webOS.TV") || h(c, "/SmartTV") || (Aa = !0);
  } else if (X = p(c, "Tizen ")) {
    t = 31, m = X, U = 24, Y = jb, Aa = !0;
  } else if (X = p(c, "Windows Phone ") || p(S, "Windows Phone OS ") || Rb) {
    t = 23, m = X, Aa = !0;
  } else if (Ya && "ARM" === K) {
    t = 23, m = 10, Aa = !0;
  } else if (rb && h(S, "ZuneWP")) {
    t = 23, m = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", Aa = !0;
  } else if (h(c, "FOMA;")) {
    t = 16, Aa = !0;
  } else if (h(c, "SoftBank;")) {
    t = 16, Aa = !0;
  } else if (h(c, "KFMUWI")) {
    var Sa = !0;
    m = 6.3;
    var ka = na = !0;
  } else if (h(c, "KFKAWI")) {
    Sa = !0, m = 6, ka = na = !0;
  } else if (h(c, "KFSUWI") || h(c, "KFAUWI") || h(c, "KFDOWI")) {
    Sa = !0, m = 5, ka = na = !0;
  } else if (h(c, "KFGIWI")) {
    Sa = !0, m = 5, ka = na = !0;
  } else if (h(c, "KFARWI") || h(c, "KFSAWA") || h(c, "KFSAWI")) {
    Sa = !0, m = 5 <= Pa(sa) ? 5 : 4, ka = na = !0;
  } else if (h(c, "KFSOWI") || h(c, "KFTHWA") || h(c, "KFTHWI") || h(c, "KFAPWA") || h(c, "KFAPWI")) {
    Sa = !0, m = 3, ka = na = !0;
  } else if (h(c, "KFOT") || h(c, "KFTT") || h(c, "KFJWA") || h(c, "KFJWI")) {
    Sa = !0, m = 2, ka = na = !0;
  } else if (h(c, "Kindle Fire")) {
    Sa = !0, m = 1, ka = na = !0;
  } else if (X = p(c, "Kindle/")) {
    t = 20, m = X, U = 21, Y = 2.2;
  } else if (vb) {
    Sa = !0, m = sa || Ab, ka = !0;
  } else if (h(c, "AmazonWebAppPlatform") || h(c, "; AFT")) {
    Sa = !0, m = sa, ka = !0;
  } else if (h(c, "MeeGo")) {
    t = 32;
  } else if (h(c, "Maemo")) {
    t = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || Tb) {
    t = 22, Da = !0;
  } else if ("WinCE" === K) {
    t = 21, Da = !0;
  } else if (0 === K.indexOf("Win")) {
    t = "Win16" === K ? 35 : "Win32" === K ? 36 : "Win64" === K ? 37 : 0, m = p(c, "Windows NT ") || p(c, "Windows ");
  } else if (0 === K.indexOf("Mac")) {
    t = "Mac68K" === K ? 39 : "MacPowerPC" === K || "MacPPC" === K ? 38 : "MacIntel" === K ? 40 : 0;
    if (X = p(c.split("_").join("."), "Mac OS X ")) {
      m = X;
    }
    var ob = !0;
  } else if (h(c, "BlackBerry") || h(c, "BB10")) {
    t = 34, m = Ra, Aa = !0;
  } else if (h(c, "SunOS") || h(c, "Sun Solaris")) {
    t = 42;
  } else if (h(c, "FreeBSD")) {
    t = 43;
  } else if (h(c, "OpenBSD")) {
    t = 44;
  } else if (h(c, "NetBSD")) {
    t = 45;
  } else if (Ha && hb) {
    h(c, "Android 4.4;") ? Ia = {min:2.3} : 4 <= Pa(sa) ? Ia = sa : Ia = {min:2.2}, m = Ia;
  } else if (Ha && ja) {
    sa ? Ia = sa : Ia = {min:1.6}, m = Ia, h(c, "Tablet") ? na = !0 : Aa = !0;
  } else if (sa) {
    m = sa, Ha = !0;
  } else if (tb && gb || sb || ub) {
    var wb = !0;
    jb ? Ia = {min:4.4} : Ta && !Eb || Ca || yb ? Ia = {min:4} : (Ia = sa = Fa.touchAction !== La ? {min:5} : ab ? 4.4 : T ? ia.connection ? y.searchBoxJavaBridge_ || Ta ? cb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= za ? 3 : 533 <= za ? fb ? 2.3 : 2.2 : 530 <= za ? 2 : 1.5, zb && (U = 24, Y = zb));
    m = Ia;
    Ha = !0;
  } else {
    Ob ? (m = {min:5}, wb = Ha = !0) : tb && (h(c, "Ubuntu") ? t = 46 : (X = p(c, "Mint/")) ? (t = 47, m = X) : (X = p(c, "Fedora/")) ? (t = 48, m = X) : t = h(c, "Gentoo") ? 49 : 50);
  }
  Sa || Ha && wb && aa ? t = 27 : Ha && (t = t || 26);
  U || (ka = ka || Ha, ja ? (U = ka || Da || Aa || na ? 9 : 8, Y = Jb) : rb ? (Ia = wa(S, "Trident/") + 4, U = Da || Aa || na || kb ? 3 : ob && 5 <= l ? 7 : 2, Y = l) : Ya ? (U = 23 === t ? 6 : 5, Y = p(S, "Edge/")) : mb ? (U = 13, Y = mb) : hb ? (U = ka ? 12 : 11, Y = ya || Sb) : jb ? (U = 24, Y = jb) : (X = Fb || p(c, "NetFront/")) ? (U = 18, Y = X) : (X = p(c, "iCab")) ? (U = 19, Y = X) : (X = J(p(c, "Opera Mini/"), p(c, "Opera Mobi/")) || Ga && Ra) ? (U = 10, Y = X, t || (h(c, "iPhone") ? Ea = 
  0 : h(c, "iPad") ? Ea = 1 : h(c, "iPod") && (Ea = 2), Ea && (t = 24))) : Cb ? (U = 25, Y = Kb) : Mb ? (U = 14, Y = eb) : Ha && Eb ? (U = 21, Y = sa) : Ta || Ca || yb ? (U = ka ? 22 : 20, Y = ib || Lb) : Ha && ab ? (U = 23, Y = 5 > Pa(sa) ? sa : ib) : Ha && (Ra || wb) ? (U = 21, Y = sa) : ib ? (U = ka ? 22 : 20, Y = ib) : za && (U = 15, Y = za));
  t && (Xa[2] = t, m && (Xa[3] = R(m)));
  U && (Xa[0] = U, Y && (Xa[1] = R(Y)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Xa, y, W, ia, F, Pa, cb, La, wa, h, Ib, db, p, J) {
  function R(n) {
    if (y[0] === n) {
      return Fa === Fa + "" ? wa(Fa) : Fa;
    }
  }
  function qa(n) {
    var D = y[3];
    if (y[2] === n) {
      return D === D + "" ? wa(D) : D;
    }
  }
  function c(n, D, ea) {
    n + "" === n && ("a" === n.charAt(2) && (ea = !0, n = n.substr(0, 2)), n = "CS" === n ? 7.2 > z ? 117 : .9 > T || 9 > l || 9 > z || Qa ? 1 : 132 : parseInt(n, 16));
    ea && (50 === n && (n = 128), 102 < n && 108 > n && (n += 24));
    return (n - 1) * -(6 * (D || 2));
  }
  var S = F.body, eb = S.style, K, Ya, Fa = y[1], l = R(2) || R(3), Qa = R(7), fb = R(5) || R(6), z = R(8) || R(9), T = R(11) || R(12), gb = T && 0 <= y.conpare(Fa, "1.9.1"), Ra = R(13), Ga = R(15), ja = R(16) || R(17), Jb = R(10) || R(25), Ca = R(20) || R(22), rb = R(23), Ta = R(21), hb = R(24), Cb = Ca || rb || Ta || hb, Kb = Ca && wa(Pa.userAgent.split("Edg/")[1]), Rb = wa(Pa.appVersion.split("Trident/")[1]) + 4, Za = qa(35) || qa(36) || qa(37), sa = qa(38) || qa(39) || qa(40) || qa(41), sb = 
  .9 > T, Ha = (Qa ? "ie5mac" : 5.5 > l ? "ie5win" : 6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > z ? "opr70" : 8 > z ? "opr72" : 9.5 > z ? "opr" + (z | 0) : T && !gb ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : sb ? .8 <= T ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  qa(1) || qa(2) || qa(3) || qa(4) || qa(8) || qa(9) || qa(10);
  var tb, lb, mb, ya = 8 > l || 7.2 > z ? !1 : J, Sb = eb.transform !== J ? "transform" : eb["-o-transform"] !== J ? "-o-transform" : eb["-ms-transform"] !== J ? "-ms-transform" : eb.MozTransform !== J ? "-moz-transform" : eb["-webkit-transform"] !== J ? "-webkit-transform" : "", X = [], Db = [], za = [], ib, Lb, yb, Mb, Tb = 525 > Ga || 3.1 > ja || 2.2 > Ta || 10 > z || T && !gb || R(25) || 10 > R(3) || qa(32) || qa(30) || qa(3), aa, jb, zb, Eb, ub, $a, Ua, ab = La.now || function() {
    return +new La();
  };
  (function() {
    function n() {
      for (var A, a = 0, b = ab(); a < B.length;) {
        b < B[0].t ? ++a : (A = B.splice(a, 1)[0], A.f(A.p));
      }
      M = B.length ? h(n, O) : 0;
    }
    function D() {
      for (var A, a = 0; a < da.length; ++a) {
        A = da[a], A.f();
      }
    }
    function ea() {
      la && (la = p(la));
    }
    function oa() {
      M && (M = Ib(M));
    }
    zb = function(A) {
      da.length || (la = db(D, ma));
      da.push({f:A, l:++ta});
      return ta;
    };
    Eb = function() {
      la && (ea(), la = db(D, ma));
    };
    ub = ea;
    var da = [], ma = 500, ta = 0, la;
    if (5 > l || Qa) {
      W._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    aa = function(A, a, b) {
      B.length || (M = h(n, O));
      B.push({f:A, p:a, l:++G, t:ab() + (O < b ? b : O)});
      return G;
    };
    jb = function(A) {
      for (var a = B.length, b; b = B[--a];) {
        if (b.l === A) {
          B.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    $a = function() {
      M && (oa(), M = h(n, O));
    };
    Ua = oa;
    var B = [], O = ja | 0 ? 64 : 16, G = 0, M;
    if (5 > l || Qa) {
      W._wdb_ontimer = n, n = "_wdb_ontimer()";
    }
  })();
  var Nb, nb, Ob, vb, Ab, t, m, U, Y, Fb, Da, Ea, Aa, na, kb, Ia, Sa, ka, ob, wb, u, xa;
  (function() {
    function n(a, b, d) {
      var v = ["<", a], w = 1, Q, pa;
      if (b) {
        for (Q in b) {
          var k = b[Q];
          if (null != k && "" !== k) {
            if ("style" === Q) {
              v[++w] = ' style="';
              for (pa in k) {
                for (var E = ++w, N, V = [], g = pa.split(""), f = g.length; f;) {
                  N = g[--f], "A" <= N && "Z" >= N && (N = "-" + N.toLowerCase()), V[f] = N;
                }
                v[E] = V.join("") + ":" + k[pa] + ";";
              }
              v[++w] = '"';
            } else {
              "className" === Q && (Q = "class"), v[++w] = " " + Q + '="' + k + '"';
            }
          }
        }
      }
      v[++w] = ">";
      null != d && (G && "font" !== a ? v[++w] = "<font>" + D(d) + "</font>" : v[++w] = D(d));
      v[++w] = "</" + a + ">";
      return v.join("");
    }
    function D(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function ea(a) {
      var b = a.split("-"), d = b.length;
      if (2 > d) {
        return a;
      }
      for (; 1 < d;) {
        a = b[--d], b[d] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function oa(a) {
      var b = "*" === a;
      a = G ? b ? F.all : F.all.tags(a.toUpperCase()) : 6 > l && b ? F.all : F.getElementsByTagName(a);
      b = [];
      for (var d = 0, v = a.length; d < v; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function da(a) {
      return G ? a.parentElement : a.parentNode;
    }
    function ma(a, b, d, v, w, Q) {
      if (G) {
        var pa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var k = Ab(2 > a ? vb(b) : b);
        k = 2 > a ? k.indexOf(b) + a : k.length;
        b.insertAdjacentHTML(pa, n(d, v, w));
        b = Ab(b)[k];
        null != w && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (M) {
        b = F.createElement(n(d, v));
      } else {
        b = Q ? F.createElementNS("http://www.w3.org/2000/svg", d) : F.createElement(d);
        if (v) {
          for (pa in v) {
            if ((a = v[pa]) || 0 === a) {
              switch(pa) {
                case "class":
                case "className":
                  Sa(b, a);
                  break;
                case "style":
                  Q = b.style;
                  for (k in a) {
                    Q[k] = a[k];
                  }
                  break;
                default:
                  na(b, pa, a);
              }
            }
          }
          !z || "a" !== d && "A" !== d || !v.href || v["tag-index"] || v.tagIndex || na(b, "tagIndex", "-0");
        }
        A || null != w && ta(b, w);
      }
      return b;
    }
    function ta(a, b) {
      if (G) {
        return ma(2, a, "font", J, b);
      }
      var d = F.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function la(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function B(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function O(a, b, d) {
      if (8 > z || 5.5 > l) {
        b = ea(b);
      }
      a.style[b] = d;
    }
    var G = 5 > l;
    K = oa("html")[0];
    Ya = oa("head")[0];
    Nb = function(a) {
      return W[a] || F[a] || F.getElementById(a);
    };
    nb = oa;
    Ob = function(a) {
      var b = [], d = 0, v, w = -1;
      if (9 > l || !F.getElementsByClassName) {
        var Q = 6 > l ? F.all : F.getElementsByTagName("*");
      } else {
        var pa = !0;
        Q = F.getElementsByClassName(a);
      }
      for (v = Q.length; d < v; ++d) {
        var k = Q[d];
        if (pa || (G || 1 === k.nodeType) && B(k, a)) {
          b[++w] = k;
        }
      }
      return b;
    };
    vb = da;
    Ab = function(a) {
      a = G ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    t = function(a) {
      var b = !(7.03 < z && 7.2 > z) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], v = a.length, w = -1, Q; v;) {
        if (Q = a[--v], b || 1 === Q.nodeType) {
          G && "FONT" === Q.tagName || (d[++w] = Q);
        }
      }
      return d;
    };
    m = function(a, b, d, v, w) {
      b = ma(2, a, b, d, v, w);
      G || (a.appendChild(b), A && null != v && ta(b, v));
      return b;
    };
    U = function(a, b, d, v, w) {
      b = ma(0, a, b, d, v, w);
      G || (da(a).insertBefore(b, a), A && null != v && ta(b, v));
      return b;
    };
    Y = ta;
    Fb = function(a, b) {
      if (G) {
        return ma(0, a, "font", J, b);
      }
      var d = F.createTextNode("" + b);
      vb(a).insertBefore(d, a);
      return d;
    };
    Da = function(a) {
      G ? a.outerHTML = "" : (5.5 > l && (a.style.filter = ""), vb(a).removeChild(a));
    };
    var M = 9 > l, A = M;
    Ea = function(a) {
      return a.tagName.toUpperCase();
    };
    Aa = function(a, b) {
      if (8 > z || 5.5 > l) {
        b = ea(b);
      }
      var d = a.getAttribute(b);
      return z && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    na = function(a, b, d) {
      if (z && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > z || 5.5 > l) {
          b = ea(b);
        }
        a.setAttribute(b, d);
      }
    };
    kb = function(a, b) {
      if (z && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > z || 5.5 > l) {
          b = ea(b);
        }
        a.removeAttribute(b);
      }
    };
    Ia = function(a, b) {
      if (z && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > z || 5.5 > l) {
        b = ea(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Sa = la;
    ka = B;
    ob = function(a, b) {
      var d;
      if (!B(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        la(a, d + b);
      }
    };
    wb = function(a, b) {
      if (B(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        la(a, d.join(" "));
      }
    };
    u = O;
    xa = function(a, b) {
      var d, v = -1, w;
      if (5.5 > l) {
        if (d = 5.5 > l ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); w = d[++v];) {
            O(a, w.split(":")[0], "");
          }
        }
        if (b) {
          for (v = -1, d = b.split(";"); w = d[++v];) {
            var Q = w.split(":")[0];
            O(a, Q, w.substr(Q.length + 1));
          }
        }
      } else if (7.1 > z) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); w = d[++v];) {
            w = w.split(":"), O(a, w[0], w[1]);
          }
        }
      } else {
        9 > z || 1 > T ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ba, Ma, Na, Gb, xb, Ub, Vb, Ja, Pb;
  (function() {
    function n() {
      return k ? N ? 2 : E ? 3 : 1 : 0;
    }
    function D(g) {
      Ma(W, "load", D);
      D = J;
      oa(X, g, !0);
      Na = X = J;
    }
    function ea(g, f) {
      xb(function() {
        var H = B(g);
        f(H);
        H.addListener(f);
        return !0;
      });
    }
    function oa(g, f, H) {
      for (var e = 0; e < g.length; ++e) {
        !0 === g[e](f) && (g.splice(e, 1), --e);
      }
      H && (g.length = 0);
    }
    function da(g, f, H) {
      X || G.length || aa(ma);
      G.push(g, f, H);
    }
    function ma() {
      var g = G, f;
      for (G = []; f = g.shift();) {
        oa(f, g.shift(), g.shift());
      }
    }
    function ta(g) {
      var f = g || event;
      g = A[f.type];
      var H = -1, e, I;
      5 > l ? f = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : l ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : b && (f.j = f.stopPropagation, f.stopPropagation = function() {
        I = !0;
      });
      for (; e = g[++H];) {
        e.i === this ? (this.g = e.h, l && (f.currentTarget = this), this.g(f), l ? (this.g = ia, this.g = J) : delete this.g) : 7.2 > z && this === F && e.i === W && (W.g = e.h, W.g(f), delete W.g);
      }
      if (l) {
        return f.preventDefault = f.stopPropagation = ia, f.preventDefault = f.stopPropagation = J, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (v = !0), I && !v && f.j(), f.j = f.stopPropagation = J);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function la() {
      var g = 9 === O.offsetWidth;
      Vb !== g && da(Db, Vb = g);
    }
    var B = W.matchMedia, O, G = [];
    X.push(function() {
      ea = J;
      O = m(S, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Na(function() {
        G.length && aa(ma);
      });
    });
    ba = function(g, f, H, e) {
      if (d) {
        g.addEventListener(f, H, e ? M ? e : e.capture || !0 === e : !1);
      } else {
        var I = {i:g, h:H};
        e = A[f];
        var q = "on" + f, x, ra;
        if (e) {
          for (x = e.length; ra = e[--x];) {
            if (ra.i === g && ra.h === H) {
              return;
            }
          }
          A[f].push(I);
        } else {
          A[f] = e = [I], a || (f = g[q], "function" === typeof f && f !== ta && e.unshift({i:g, h:f}));
        }
        a ? g.attachEvent(q, ta) : g[q] = ta;
      }
    };
    Ma = function(g, f, H, e) {
      if (d) {
        g.removeEventListener(f, H, e ? M ? e : e.capture || !0 === e : !1);
      } else {
        e = A[f];
        f = "on" + f;
        var I, q, x;
        if (e) {
          for (I = e.length; q = e[--I];) {
            q.i === g && (q.h === H ? e.splice(I, 1) : x = !0);
          }
          x || (a ? g.detachEvent(f, ta) : l ? (g[f] = ia, g[f] = null) : delete g[f]);
        }
      }
    };
    var M = !l && !Qa && (new cb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), A = {}, a = !1, b = 525.13 > Ga, d = !b && !Qa && W.addEventListener, v;
    b && K.addEventListener("click", function(g) {
      if (v) {
        return v = !1, g.preventDefault(), !1;
      }
    });
    Na = function(g) {
      X.push(g);
    };
    Gb = function(g) {
      w && w.push(g);
    };
    var w = [];
    if (419.3 >= Ga) {
      var Q = function() {
        if (Q) {
          var g = F.readyState;
          "loaded" === g || "complete" === g ? (Q = J, D()) : aa(Q);
        }
      };
      aa(Q);
    } else {
      ba(W, "load", D);
    }
    l || !sb && 1.8 > T ? ba(W, "unload", function(g) {
      oa(w, g, !0);
    }) : w = J;
    xb = function(g) {
      Db.push(g);
    };
    Na(function() {
      la();
      zb(la);
    });
    Ub = function(g) {
      za && za.push(g);
    };
    var pa = 60 > T || Ra, k, E, N;
    if (89 <= T || 89 <= Ca || Za && 79 <= Kb || B && (B("(forced-colors:none)").matches || B("(forced-colors:active)").matches)) {
      Pb = !0, ea("(forced-colors:active)", function(g) {
        k = g.matches;
        Ja = n();
        da(za, Ja);
      });
    } else if (10 <= l || fb || Za && Kb) {
      Pb = !0, ea("(-ms-high-contrast:black-on-white)", function(g) {
        k = E = g.matches;
        Ja !== n() && (Ja = n(), da(za, Ja));
      }), ea("(-ms-high-contrast:white-on-black)", function(g) {
        k = N = g.matches;
        Ja !== n() && (Ja = n(), da(za, Ja));
      }), ea("(-ms-high-contrast:active)", function(g) {
        k = g.matches;
        Ja !== n() && (Ja = n(), da(za, Ja));
      });
    } else if (Za && (l || T && 0 <= y.conpare(Fa, "1.8.1") || Ra)) {
      var V = function() {
        function g(e, I) {
          if (I && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var q = e.split("(")[1].split(",");
          return wa(q[0]) + wa(q[1]) + wa(q[2]);
        }
        var f = F.defaultView;
        var H = f ? f.getComputedStyle(O, null) : O.currentStyle;
        f = (H && H.color || "").split(" ").join("");
        H = (H && H.backgroundColor || "").split(" ").join("");
        f && (k = "#123456" !== f && "rgb(18,52,86)" !== f, E = g(f) < g(H, !0), N = g(f) > g(H, !0), Ja !== n() && (Ja = n(), da(za, Ja, pa)));
      };
      xb(function(g) {
        if (g) {
          return u(O, "color", "#123456"), u(O, "backgroundColor", "#123456"), pa ? (V(), za = J) : zb(V), V = J, !0;
        }
      });
    } else {
      za = n = J;
    }
  })();
  (function() {
    function n(r) {
      switch(r) {
        case 1:
          return d;
        case 2:
          return !!v;
        case 3:
          return !!w;
        case 4:
          return !!Q;
        case 5:
          return k;
        case 6:
          return pa && !O;
      }
      return !1;
    }
    function D(r) {
      E(r);
      ra && !r && Da(ra);
      E = N = V = g = f = H = q = x = ra = Oa = J;
    }
    function ea(r) {
      F.fonts.load('1.6em "' + r + '"').then(function() {
        var ha;
        (ha = da(N)) ? aa(D, ha) : oa(!0);
      }, function() {
        ya !== J ? ma(ya) : ib(ma);
      });
    }
    function oa(r) {
      r && (I = ab());
      (r = da(N, e)) ? D(r) : (r = e, F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (I = ab(), r = !1) : r = r < ab() - I, r ? q ? ta() : B ? D(0) : ya !== J ? ma(ya) : ib(ma) : aa(oa));
    }
    function da(r) {
      var ha = 0, fa = -1, C = (a || !1) && [];
      if (!Oa) {
        var L = -1;
        var P;
        x = m(S, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, A);
        for (Oa = []; P = b[++L];) {
          u(x, "fontFamily", P), Oa[L] = x.offsetWidth;
        }
      }
      for (5 > l ? x || (x = m(S, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, A)) : S.appendChild(x); L = b[++fa];) {
        u(x, "fontFamily", '"' + r + '",' + L);
        var Z = x.offsetWidth;
        if (a) {
          C[fa] = Z;
        } else {
          if (Z !== Oa[fa]) {
            ha = 1;
            break;
          }
        }
      }
      if (a && Z === C[0] && Z === C[1]) {
        for (ha = 1, fa = -1; 0 <= (Z = Oa[++fa]);) {
          if (Z === C[0] && Z === C[1] && Z === C[2]) {
            ha = 0;
            break;
          }
        }
      }
      !l && ha && f && (x.textContent = f, Z = x.offsetWidth, x.textContent = H, ha = Z === x.offsetWidth ? 2 : 1, x.textContent = A);
      Da(x);
      5 > l && (x = J);
      return ha;
    }
    function ma(r) {
      r ? (q = !0, e = M, ta()) : D(0);
    }
    function ta() {
      if (V) {
        for (; V.length;) {
          var r = V.shift(), ha = V.shift();
          if (n(r)) {
            ra = Mb(ha, la, g, ra);
            return;
          }
        }
      }
      D(0);
    }
    function la(r) {
      r ? oa(!0) : ta();
    }
    Db.splice(0, 0, function() {
      if (Vb) {
        mb = 8 <= l || fb || 9.5 <= z || gb || Ra || 522 <= Ga || 3 <= ja || Jb || Cb ? 3 : 7.2 <= z ? 2 : 6 <= z || T ? 1 : 0;
        if (!mb && !l && !Qa) {
          var r = m(S, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          mb = 6 <= r.offsetWidth ? 2 : 0;
          Da(r);
        }
        return !0;
      }
    });
    ib = !1 === ya ? function(r) {
      aa(r, !1);
    } : function(r) {
      function ha(L) {
        C && (C = jb(C), ya = L, fa.onload = fa.onerror = ia, aa(r, L));
      }
      if (ya !== J) {
        aa(r, ya);
      } else {
        var fa = new Image(), C = aa(ha, !1, 999);
        fa.onerror = function() {
          ha(!1);
        };
        fa.onload = function() {
          ha(1 === fa.width * fa.height);
        };
        fa.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > l && Na(function() {
      var r = m(S, "div");
      xa(r, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      tb = 1 < r.offsetHeight;
      Da(r);
    });
    Lb = function(r, ha) {
      function fa() {
        if (L || !P || C.complete) {
          var Z = !!C.width;
          lb = lb || Z;
          aa(r, Z);
          C.onerror = C.onload = ia;
          C = r = J;
        } else {
          --P, aa(fa);
        }
      }
      var C = new Image(), L, P = 99;
      C.onerror = function() {
        L = !0;
      };
      C.onload = function() {
        L = !0;
      };
      C.src = ha;
      aa(fa);
    };
    yb = function(r, ha, fa, C, L, P, Z) {
      E = r;
      N = ha;
      V = fa;
      g = C;
      f = L;
      H = P;
      e = Z || G;
      R(10) ? aa(D, 1) : Tb ? aa(D, 0) : !F.fonts || 603 > Ga || 11 > ja ? oa(!0) : ea(N);
    };
    var B = 9 > l, O = 6 > Ca || z || 530 > Ga || 5 > ja || qa(11), G = 5E3, M = 500, A = "mmmmmmmmmmlliiiiiiiii", a = 9 <= Ca && 18 > Ca || 3 > Ta || 7 > ja || Ga && 0 >= y.conpare(Fa, "536.11"), b = ["monospace", "sans-serif", "serif"], d = 14 <= fb || 36 <= Ca || 39 <= T || 602 <= Ga && sa && 0 <= y.conpare("10.12", sa) || 10 <= ja, v = 6 <= Ca || T && 0 <= y.conpare(Fa, "1.9.2") || 533 <= Ga || 5 <= ja || 4.4 <= Ta || 11.5 <= z || fb || 9 <= R(2) || 10 <= R(3), w = 2 <= Ca || gb || 525 <= Ga || 
    4 <= ja || 2.2 <= Ta || 10.1 <= z || fb || 9 <= R(2) || 10 <= R(3), Q = w, pa = 5.1 <= Za && 5.2 >= Za && 40 > Ca || 6 <= Za && 6.1 > Za && 51 > Ca || 37 > Ca || 525 <= Ga || 3.1 <= ja || 3 <= Ta || 11.5 <= z, k = 4 <= R(2) || 10 <= R(3), E, N, V, g, f, H, e, I, q, x, ra, Oa;
  })();
  (function() {
    Mb = function(B, O, G, M) {
      M = M || m(Ya, "link", {type:"text/css", rel:"stylesheet"});
      var A;
      if (la) {
        (A = Nb(G)) ? kb(A, "id") : A = m(S, "div", {"aria-hidden":"true", className:G});
        var a = A.offsetWidth;
        na(A, "id", G);
      }
      ta(M, B, O, A, a);
      return M;
    };
    var n = T && 0 > y.conpare(Fa, "0.9.1"), D = 11 <= l || fb || 9 <= z && 9.5 > z, ea = 11 > l, oa = 7.2 <= z && 7.5 > z, da = 9 > T && !n || 19 > Ca || 4.3 > Ta || 2 > hb || 536 > Ga || 6 > ja || 7 <= z && 9 > z && !oa, ma = !n && !D && !ea && !oa && !da, ta = ma ? function(B, O, G) {
      B.onload = o;
      B.onerror = function() {
        B.onload = B.onerror = null;
        aa(G, !1);
      };
      B.href = O;
      function o() {
        B.onload = B.onerror = null;
        aa(G, !0);
      }
      o = !1;
    } : D ? function(B, O, G, M, A) {
      B.onload = function() {
        aa(G, la(M, A));
        Da(M);
        B.onload = null;
        M = J;
      };
      B.href = O;
    } : ea ? function(B, O, G, M, A) {
      B.onreadystatechange = function() {
        "complete" === B.readyState && (aa(G, la(M, A)), Da(M), M = J, B.m = ia);
      };
      B.href = O;
    } : da || oa ? function(B, O, G, M, A) {
      function a() {
        d && (v = jb(v), w = ab() + 999, aa(b, 0, 99), da ? d.onerror = null : d.removeEventListener("load", a, !1), d = J);
      }
      function b() {
        la(M, A) ? (Da(M), M = J, aa(G, !0)) : ab() < w ? aa(b, 0, 99) : (Da(M), M = J, aa(G, !1));
      }
      var d = new Image(), v = aa(a, 0, 5E3), w;
      da ? d.onerror = a : d.addEventListener("load", a, !1);
      d.src = B.href = O;
    } : function(B, O, G) {
      aa(G, !1);
    }, la = !ma && !n && function(B, O) {
      return B.offsetWidth !== O;
    };
  })();
  var Qb = String.fromCharCode, bb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Qb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Wb = bb[7], fc = bb[113], ac = Qb(160);
  Qb(8194);
  var bc = bb[31], Xb = bb[30], cc = bb[63], gc = bb[125], hc = bb[126], ic = Qb(59648), dc = (9 === l || T && 0 <= y.conpare(Fa, "1.8.1") || Ra) && !Pb, pb = [], qb, Va, Hb = 7.2 > z ? function() {
    qb = !qb;
    for (var n = -1, D; D = pb[++n];) {
      -1 !== D.className.indexOf("pbAlp") ? u(D, "display", qb ? "" : "none") : (ob(D, qb ? "pbChrCS" : "pbChr00"), wb(D, qb ? "pbChr00" : "pbChrCS"));
    }
  } : dc ? function() {
    qb = !qb;
    for (var n = -1, D; D = pb[++n];) {
      u(D, "opacity", qb ? 1 : 0);
    }
  } : J;
  var Yb = Xa.startBlinkingIfCursor = function(n) {
    Hb ? ka(n, "pbChrCS") && (Va || !z && !Ja || (Va = db(Hb, 400)), -1 === pb.indexOf(n) && pb.push(n)) : pb = J;
  };
  Xa.stopBlinkingIfCursor = function(n) {
    Hb && (n = pb.indexOf(n), 0 <= n && (pb.splice(n, 1), !pb.length && Va && (p(Va), Va = 0)));
  };
  dc && Ub(function(n) {
    n ? Va || (Va = db(Hb, 400)) : Va && (p(Va), Va = 0);
  });
  Hb && Gb(function() {
    Va && p(Va);
  });
  Pb || Ub(function(n) {
    n ? (na(K, "forced-colors", 2 === n ? "lod" : 3 === n ? "dol" : "active"), (Sb || 9 === l || 5.5 <= l && 9 > l && tb) && ob(K, "jsCanRotate")) : (kb(K, "forced-colors"), wb(K, "jsCanRotate"));
  });
  (function() {
    function n(k) {
      (a = k) ? da() : lb ? oa(!0) : lb !== J ? da() : Lb(oa, b);
    }
    function D() {
      D = J;
      yb(n, "PB-100", [1, Wa + "pbFont/woff2.css", 2, Wa + "pbFont/woff.css", 4, Wa + "pbFont/otf.css", 3, Wa + "pbFont/ttf.css", 6, Wa + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", cc);
    }
    function ea(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function oa(k) {
      k && ob(S, "pbList-noWebFont");
      da();
    }
    function da() {
      for (n = yb = J; A.length;) {
        ma(A.shift(), A.shift());
      }
    }
    function ma(k, E) {
      function N(I) {
        I = Ab(I);
        for (var q = -1, x; x = I[++q];) {
          switch(x.nodeType) {
            case 1:
              N(x);
              break;
            case 3:
              x.data && g(x.data) && f.push(x);
          }
        }
      }
      function V(I) {
        var q = I.children, x = 0, ra = q.length;
        if (ra) {
          for (; x < ra; ++x) {
            V(q[x]);
          }
        } else {
          (q = I.innerText) && g(q) && f.push(I);
        }
      }
      function g(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], H;
      if (n) {
        -1 === A.indexOf(k) && (A.push(k, E), d && D && D());
      } else {
        var e = A.indexOf(k);
        0 <= e && A.splice(e, 2);
        for (5 > l ? V(k) : N(k); H = f.shift();) {
          e = 5 > l ? H.innerText : H.data, 2 !== a ? (0 <= e.indexOf("\u2091\u208b") && (e = e.split("\u2091\u208b").join(Xb)), 0 <= e.indexOf("\u1d07\u207b") && (e = e.split("\u1d07\u207b").join(Xb)), a && (0 <= e.indexOf("\u208b\u2081") && (e = e.split("\u208b\u2081").join(cc)), 0 <= e.indexOf("\u1d47/\u1d04") && (e = e.split("\u1d47/\u1d04").join(ic)), 0 <= e.indexOf("\u1d47/") && (e = e.split("\u1d47/").join(gc)), 0 <= e.indexOf("/\u1d04") && (e = e.split("/\u1d04").join(hc)))) : 0 <= e.indexOf("\u2091\u208b") && 
          (e = e.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= e.indexOf("\u2091") && (e = e.split("\u2091").join(bc)), E ? 5 > l ? H.innerText = e : H.data = e : ta(e.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(fc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Wb).split("&amp;").join("&"), H);
        }
      }
    }
    function ta(k, E) {
      function N(va, ca) {
        for (var Ka = ""; ca;) {
          ca & 1 && (Ka += va), ca >>= 1, va += va;
        }
        return Ka;
      }
      function V(va, ca, Ka) {
        for (var Bb, jc = -1, Zb, $b; Bb = ca[++jc];) {
          for (; 0 <= (Zb = va.indexOf(Bb));) {
            $b = Bb.length, va = va.substr(0, Zb) + N(Ka, $b) + va.substr(Zb + $b);
          }
        }
        return va;
      }
      function g(va) {
        var ca = wa(va), Ka = "" + ca;
        return 0 < ca && ca === ca | 0 && (ca = va.indexOf(Ka) + Ka.length, ca <= va.length) ? ca : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), H = 5 > l || 1 === E.nodeType, e = [], I = "", q, x = -1, ra, Oa, r;
      if (H) {
        if (Q) {
          var ha = E.style.visibility;
          u(E, "visibility", "hidden");
        }
        E.innerHTML = "";
      }
      if (pa) {
        var fa = E;
        E = F.createDocumentFragment();
      }
      if (function(va) {
        var ca = va.indexOf("P");
        if (-1 === ca) {
          return !1;
        }
        ca = wa(va.charAt(ca + 1));
        return 0 <= ca && 9 >= ca;
      }(k)) {
        I = N("+", k.length);
      } else {
        0 <= (q = g(k)) && (I = N("|", q), x = q, --x);
        for (; q = k.charAt(++x);) {
          q === Wb || ra ? (I += "~", q === Wb && (ra = !ra)) : I += q;
        }
        I = V(I, M, "^");
        I = V(I, O, "{");
        I = V(I, G, "}");
      }
      x = 0;
      for (ra = k.length; x < ra; ++x) {
        q = k.charAt(x);
        var C = q === ac;
        var L = " " === q;
        q = C ? " " : q;
        var P = I.charAt(x);
        var Z = (Oa = Ba) && C;
        var Ba = "|" === P;
        P = f["+|~{}^".indexOf(P) + 1];
        if ("\n" !== q) {
          if (a || !lb) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === k.substr(x, 3)) {
                q = "\u1d47/\u1d04", x += 2;
              } else {
                switch(k.substr(x, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    q = k.substr(x, 2), ++x;
                }
              }
            }
            P = L && "str" === P ? "pbList-strsp" : C ? "" : !L && P ? "pbList-" + P : "";
          } else {
            C = bb.indexOf(q), C = -1 === C ? "" : bb.indexOf(q).toString(16).toUpperCase(), C = (C = 1 === C.length ? "0" + C : C) ? "pbChr" + C : "", P = L && "str" === P ? "pbList-strsp" : L || !C ? "" : P ? (C ? C + " " : "") + "pbList-" + P : C;
          }
          C = J;
          Z ? (q = 6 <= l && 8 > l ? " " : ac, P = "") : Ba && (T && !gb || 9.5 > z) ? (Ba && !Oa && (r = 4 - (wa(k.substr(x)) + "").length), 7.5 > z ? C = w ? "position:relative;top:-4px;left:" + 12 * r + "px" : {position:"relative", top:"-4px", left:12 * r + "px"} : C = w ? "position:relative;left:" + 12 * r + "px" : {position:"relative", left:12 * r + "px"}) : L && 7.5 > z && (P = "pbList-strsp");
          w ? e.push("<font" + (P ? ' class="' + P + '"' : "") + (C ? ' style="' + C + '"' : "") + ">" + q + "</font>") : H || pa ? m(E, "font", {"class":P, style:C}, q) : U(E, "font", {"class":P, style:C}, q);
        } else {
          Oa = Ba = !1, w ? e.push(q) : H || pa ? Y(E, q) : Fb(E, q);
        }
      }
      if (H) {
        w ? E.innerHTML = e.join("") : pa && fa.appendChild(E), Q && u(E, "visibility", ha);
      } else {
        if (w) {
          f = F.createElement("font");
          for (f.innerHTML = e.join(""); e = f.firstChild;) {
            E.parentNode.insertBefore(e, E);
          }
          Da(E);
        } else {
          pa ? fa.parentNode.replaceChild(E, fa) : Da(E);
        }
      }
    }
    1.9 > T && xb(function(k) {
      if (k) {
        k = nb("*");
        for (var E = 0, N = k.length, V; E < N; ++E) {
          V = k[E], "B" !== Ea(V) && -1 !== (" " + V.className).toLowerCase().indexOf(" pbchr") && (Ia(V, "title") || na(V, "title", V.textContent), V.textContent = " ");
        }
        return !0;
      }
    });
    xb(function(k) {
      if (k) {
        k = Ob("pbChrCS");
        for (var E = 0, N = k.length; E < N; ++E) {
          Yb(k[E]);
        }
        return !0;
      }
    });
    var la = [], B = T && 0 > y.conpare(Fa, "0.9.9");
    xb(function(k) {
      function E(L) {
        var P = Aa(L, "pbTip");
        if (P) {
          var Z = P.charAt(0);
          var Ba = "_" === Z;
          P = (Ba ? P.charAt(2) : Z).toUpperCase().charCodeAt(0) - 65;
          e ? m(L, "div", {style:{left:7 * P + 3 + "px"}}) : (Z = Aa(L, "title"), kb(L, "pbTip"), kb(L, "title"), Ba = m(L, "div", {className:"pbTip" + (Ba ? "Btm" : ""), style:{width:Z.length + V + "em", left:7 * P - (B ? 0 : 5) + "px"}}, Z), Ba = m(Ba, "div"), .9 <= T && B && u(Ba, "left", "2px"));
        }
        H && 0 <= L.className.indexOf("pbColor") && m(L, "u");
      }
      function N(L, P) {
        var Z = Aa(L, "pbGhst"), Ba = L.className, va = Ba.split("pbCsr")[1] || "", ca = Ba.split("pbAlp")[1] || "";
        if ("CS" === Z) {
          var Ka = "_";
        } else {
          Ka = Z, 3 === Ka.length && (Ka = Ka.substr(0, 2)), Ka = bb[parseInt(Ka, 16)] || "~";
        }
        var Bb;
        va = va.split(" ")[0];
        if (ca = wa(ca.split(" ")[0])) {
          g && (Ba = Ba.split("pbChr")[1].split(" ")[0], u(L, "backgroundPosition", c(Ba, 2, ha) + "px " + -24 * (10 - ca) + "px")), !P && f && U(L, "a").appendChild(L);
        }
        Z && (ca = 10 - ca, g && (Bb = {backgroundPosition:c(Z, 2, ha) + "px " + -24 * (10 - ca) + "px"}), kb(L, "pbGhst"), x = U(L, "b", {className:"pbChr" + Z + " pbCsr" + va + " pbAlp" + ca, style:Bb}, Ka), Yb(x));
        Yb(L);
      }
      if (k) {
        var V = 6 > l ? 2 : 0, g = 7.2 > z || .9 > T || Qa, f = 1.1 === T, H = 1.4 > T;
        k = nb("SAMP");
        var e = 8 === l, I = mb, q, x, ra, Oa, r;
        tb && ob(S, "pbLCD-AX");
        if (k.length) {
          for (ra = -1; q = k[++ra];) {
            if (ka(vb(q), "pbLCD")) {
              var ha = ka(q, "PB-120") || ka(q, "FX-795P");
              var fa = t(q);
              for (q = fa.length; r = fa[--q];) {
                switch(Ea(r)) {
                  case "A":
                    (2 > I || e) && E(r);
                    if (2 > I) {
                      var C = t(r);
                      for (Oa = C.length; Oa;) {
                        N(C[--Oa], !0);
                      }
                    }
                    Jb ? na(r, "href", "javascript:void(0)") : (ba(r, "click", ea), la.push(r));
                    break;
                  case "B":
                    2 > I && N(r, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Gb(function() {
      for (var k; k = la.shift();) {
        Ma(k, "click", ea);
      }
    });
    6 === l && (new cb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var O = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), G = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), M = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Xb + bc).split(""), A = [], a, b, d;
    if (.9 <= T && 0 >= y.conpare(Fa, "0.9.1")) {
      ob(K, "pbLCD-gecko09To091");
      var v = !0;
    }
    xb(function(k) {
      if (k) {
        b = Wa + "pbFont/x3mask" + (v ? ".gecko0.9.1.gif" : ".png");
        k = nb("*");
        for (var E = -1, N; N = k[++E];) {
          ka(N, "pbList") ? ma(N) : ka(N, "pbFont") && ma(N, !0);
        }
        A.length && D();
        return !0;
      }
    });
    var w = !1, Q = 8 > z, pa = !w && !Q && !(6 > l) && F.createDocumentFragment && !!S.replaceChild;
    Xa.prettify = ma;
  })();
  var ec = F.scripts || nb("script");
  var Wa = ec[ec.length - 1].src.split("/");
  --Wa.length;
  (Wa = Wa.join("/")) && (Wa += "/");
  6.1 > ja && ba(W, "scroll", Eb);
  Gb(ub);
  6.1 > ja && ba(W, "scroll", $a);
  Gb(Ua);
  10 > l && (11 !== Rb || 5 !== l) || (9 > z || 1 > T || !Qa && !W.addEventListener ? F.write('<link href="' + Wa + Ha + '" rel="stylesheet"' + (8 > z ? "" : ' media="screen,handheld,projection,print"') + ">") : Na(function() {
    m(Ya, "link", {href:Wa + "" + Ha, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

