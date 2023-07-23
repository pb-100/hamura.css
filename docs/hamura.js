/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Ya, x) {
  var X = 0, ia, F, Oa = (Ya + "").split("."), db = (x + "").split("."), La = Oa.length;
  for (ia = db.length; "0" === Oa[La - 1];) {
    --La;
  }
  for (; "0" === db[ia - 1];) {
    --ia;
  }
  for (F = La < ia ? La : ia; X < F; ++X) {
    var xa = Oa[X] - 0, h = db[X] - 0;
    if (xa !== h) {
      return xa > h ? 1 : -1;
    }
  }
  return La > ia ? 1 : La === ia ? 0 : -1;
};
(function(Ya, x, X, ia, F, Oa, db, La) {
  function xa(D, ja, fa) {
    fa = Oa(D.split(ja)[1]);
    return 0 <= fa ? fa : 0;
  }
  function h(D, ja) {
    return 0 <= D.indexOf(ja);
  }
  function Mb(D) {
    return h(D, "Linux armv") || h(D, "Linux aarch") || h(D, "Linux i686") || h(D, "Linux x86_64");
  }
  function eb(D, ja) {
    for (var fa in ja) {
      if (fa === D) {
        return !0;
      }
    }
  }
  function n(D, ja) {
    var fa = "", za = -1, Pa;
    if (D = D.split(ja)[1]) {
      for (; Pa = D.charCodeAt(++za);) {
        if (48 <= Pa && 57 >= Pa || 46 === Pa) {
          fa += D.charAt(za);
        } else {
          break;
        }
      }
      for (za = fa.length; za;) {
        if (46 === fa.charCodeAt(--za)) {
          fa = fa.substr(0, za);
        } else {
          break;
        }
      }
    }
    return fa;
  }
  function M(D) {
    for (var ja = arguments, fa = 1, za = ja[0], Pa; fa < ja.length; ++fa) {
      0 > Da(za, Pa = ja[fa]) && (za = Pa);
    }
    return za;
  }
  function S(D) {
    return D === D + "" ? D : D === D - 0 ? "" + D : D.min && D.max ? D.min + "~" + D.max : D.min ? D.min + "~" : "~" + D.max;
  }
  var Da = Ya.conpare, c = ia.userAgent, U = ia.appVersion, fb = Oa(U) || 0, N = ia.platform, Za = X.documentElement, Fa = Za && Za.style, l = X.documentMode, Qa = F.width;
  F = F.height;
  var gb = x.HTMLAudioElement, y = x.performance, T = x.Int8Array, hb = x.ontouchstart !== La, Sa = n(U, "Version/") || n(c, "Version/"), Ga = x.operamini, ma = !Ga && x.opera, Nb = ma && (ma.version && "function" === typeof ma.version ? ma.version() : M(n(c, "Opera "), Sa, fb)), Ra = x.opr, pb = !ma && (X.all || l);
  l = pb && (l ? l : x.XMLHttpRequest ? X.getElementsByTagName ? 7 : 4 : X.compatMode ? 6 : (0).toFixed ? 5.5 : x.attachEvent ? 5 : 4);
  Za = !pb && Za.msContentZoomFactor;
  var $a = !Za && (x.chrome || x.chromium), ib = !pb && function() {
    for (var D in Fa) {
      if (0 === D.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Bb = h(c, "UCWEB"), Ob = Bb && n(c, " U2/"), Sb = Bb && n(c, "; wds "), qb = n(c.split("_").join("."), "; iPh OS "), ta = n(c, "; Adr "), rb = h(U, "YJApp-ANDROID"), Ea = h(N, "Android") || ib && h(U, "Android") || rb;
  ta = n(N, "Android ") || n(U, "Android ") || n(c, "Android ") || ta;
  var jb = h(N, "Linux"), sb = "MacIntel" === N && ia.standalone !== La, Ta = ib && n(c, "Goanna/"), Ua = !Ta && ib && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), tb = n(c, "Firefox/"), Q = n(c, "Opera/"), ab = x.FNRBrowser, Va = xa(c, "AppleWebKit/"), lb = n(c, "Chrome/"), Cb = n(U, "Iron/"), Db = n(c, "OPR/"), Tb = n(U, "KHTML/"), aa = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var Eb = n(c, "Silk/"), kb = xa(c, "SamsungBrowser/"), Fb = !kb && function() {
    for (var D = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ja, fa = D.length; ja = D[--fa];) {
      if (h(c, ja)) {
        return 2 > Oa(Sa) ? Sa : 0.9;
      }
    }
    D = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (fa = D.length; ja = D[--fa];) {
      if (h(c, ja)) {
        return Sa;
      }
    }
  }(), Gb = $a && 534.3 >= Va, ub = Mb(N), bb = ub && !h(c, N) && Mb(c);
  hb = hb && (Va || ib) && bb || !ta && rb;
  rb = !!x.ReactNativeWebView;
  ub = ub && function() {
    for (var D in x) {
      if (0 === D.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Aa = (bb = x.puffinDevice) && bb.clientInfo;
  Aa = (bb = Aa && "iOS" === Aa.os && Aa.osVersion) && Aa.model;
  var yb = !l && X.registerElement, vb = !l && X.execCommand, Hb = x.webkitCancelAnimationFrame, wb = jb && yb && "11.0.696.34" === lb, zb = x._firefoxTV_playbackStateObserverJava, Ib = xa(c, "diordnA ");
  if ("Nitro" === N) {
    var p = 1;
  } else if ("Nintendo DSi" === N) {
    p = 2;
    var q = Q;
  } else if ("New Nintendo 3DS" === N || h(c, "iPhone OS 6_0") && 320 === Qa && 240 === F) {
    p = 4, q = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === N) {
    p = 3, q = n(c, "Version/"), Va = 535;
  } else if ("Nintendo Swicth" === N) {
    p = 7, q = n(U, "NintendoBrowser/");
  } else if (x.wiiu) {
    p = 6;
    q = n(U, "NintendoBrowser/");
    var V = 15, Y = n(U, "AppleWebKit/") || (Hb ? 536 : 534);
    q || (q = Hb ? 4 : 2, h(U, "Macintosh;") || h(U, "Windows NT") && h(U, "Touch"));
  } else if (ma && ma.wiiremote) {
    p = 5, q = n(c, "Wii; U; ; ");
  } else if (Q = n(c, "PlayStation Vita ")) {
    p = 10, q = Q;
  } else if (Q = n(c, "(PlayStation Portable); ")) {
    p = 8;
    q = Q;
    var Ma = 3.3;
  } else if (Q = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 ")) {
    p = 11, q = Q, 0 > Da("4.10", Q) && (V = 26, Y = Q);
  } else if (h(c, "Xbox One")) {
    p = 15, q = 1;
  } else if (h(c, "Xbox")) {
    p = 14, q = 1;
  } else if (2 === fb && h(c, "Sony/COM2/")) {
    p = 17;
    q = 2;
    Ma = 3.4;
    var mb = !0;
  } else if (0 === N.indexOf("iP") || qb || bb || sb) {
    if (bb) {
      switch(q = bb, Aa.substr(0, 4)) {
        case "iPho":
          var Ba = 0;
          n(Aa, Ba);
          var qa = !0;
          break;
        case "iPad":
          Ba = 1;
          n(Aa, Ba);
          var ra = !0;
          break;
        case "iPod":
          Ba = 2;
          n(Aa, Ba);
          var Jb = !0;
      }
    } else {
      qb ? q = qb : (q = n(U.split("_").join("."), "OS "), eb("isSecureContext", x), eb("enableWebGL", x), eb("sameOrigin", x));
      if (!q || ab) {
        q = x.PointerEvent ? 13 : x.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : x.WebAssembly ? 11.2 : x.HTMLMeterElement ? 10.3 : x.Proxy ? 10.2 : x.HTMLPictureElement ? 9.3 : db.isNaN ? 9.2 : x.SharedWorker ? y && y.now ? 8 : 8.4 : vb ? 7.1 : x.webkitURL ? 6.1 : x.Worker ? 5.1 : T ? 4.3 : gb ? 4.1 : 3.2;
      }
      var Ha = Qa === 1.5 * F || 1.5 * Qa === F;
      0 === N.indexOf("iPhone") ? (Ba = 0, qa = !0) : 0 === N.indexOf("iPad") || sb ? (Ba = 1, ra = !0) : 0 === N.indexOf("iPod") && (Ba = 2, Jb = !0);
    }
    V = !bb && (ia.standalone || (ra || 12 > q) && eb("webkitFullscreenEnabled", X) || 11 <= q && 13 > q && ia.mediaDevices) ? 16 : 17;
    p = 24;
    Y = q;
  } else if (h(c, "Kobo")) {
    p = 18, V = 21, Y = 2.2, Ea = !0;
  } else if (h(c, "EBRD")) {
    p = 19, V = 21, Y = 2.2;
  } else if (Q = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    p = 28, q = Q;
  } else if (x.onmoztimechange !== La) {
    p = 29, q = 18.1 > Ua ? "1.0.1" : 19 > Ua ? 1.1 : 27 > Ua ? 1.2 : 29 > Ua ? 1.3 : 31 > Ua ? 1.4 : 33 > Ua ? 2 : 35 > Ua ? 2.1 : 38 > Ua ? 2.2 : 45 > Ua ? 2.5 : 2.6, h(c, "Mobile") ? qa = !0 : h(c, "Tablet") ? ra = !0 : h(c, "TV");
  } else if (x.palmGetResource) {
    p = 30, q = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), h(c, "webOS.TV") || h(c, "/SmartTV") || (qa = !0);
  } else if (Q = n(c, "Tizen ")) {
    p = 31, q = Q, V = 24, Y = kb, qa = !0;
  } else if (Q = n(c, "Windows Phone ") || n(U, "Windows Phone OS ") || Sb) {
    p = 23, q = Q, qa = !0;
  } else if (Za && "ARM" === N) {
    p = 23, q = 10, qa = !0;
  } else if (pb && h(U, "ZuneWP")) {
    p = 23, q = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", qa = !0;
  } else if (h(c, "FOMA;")) {
    p = 16, qa = !0;
  } else if (h(c, "SoftBank;")) {
    p = 16, qa = !0;
  } else if (h(c, "KFMUWI")) {
    var ya = !0;
    q = 6.3;
    var na = ra = !0;
  } else if (h(c, "KFKAWI")) {
    ya = !0, q = 6, na = ra = !0;
  } else if (h(c, "KFSUWI") || h(c, "KFAUWI") || h(c, "KFDOWI")) {
    ya = !0, q = 5, na = ra = !0;
  } else if (h(c, "KFGIWI")) {
    ya = !0, q = 5, na = ra = !0;
  } else if (h(c, "KFARWI") || h(c, "KFSAWA") || h(c, "KFSAWI")) {
    ya = !0, q = 5 <= Oa(ta) ? 5 : 4, na = ra = !0;
  } else if (h(c, "KFSOWI") || h(c, "KFTHWA") || h(c, "KFTHWI") || h(c, "KFAPWA") || h(c, "KFAPWI")) {
    ya = !0, q = 3, na = ra = !0;
  } else if (h(c, "KFOT") || h(c, "KFTT") || h(c, "KFJWA") || h(c, "KFJWI")) {
    ya = !0, q = 2, na = ra = !0;
  } else if (h(c, "Kindle Fire")) {
    ya = !0, q = 1, na = ra = !0;
  } else if (Q = n(c, "Kindle/")) {
    p = 20, q = Q, V = 21, Y = 2.2;
  } else if (zb) {
    ya = !0, q = ta || Ib, na = !0;
  } else if (h(c, "AmazonWebAppPlatform") || h(c, "; AFT")) {
    ya = !0, q = ta, na = !0;
  } else if (h(c, "MeeGo")) {
    p = 32;
  } else if (h(c, "Maemo")) {
    p = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || aa) {
    p = 22, mb = !0;
  } else if ("WinCE" === N) {
    p = 21, mb = !0;
  } else if (0 === N.indexOf("Win")) {
    p = "Win16" === N ? 35 : "Win32" === N ? 36 : "Win64" === N ? 37 : 0, q = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === N.indexOf("Mac")) {
    p = "Mac68K" === N ? 39 : "MacPowerPC" === N || "MacPPC" === N ? 38 : "MacIntel" === N ? 40 : 0;
    if (Q = n(c.split("_").join("."), "Mac OS X ")) {
      q = Q;
    }
    var Kb = !0;
  } else if (h(c, "BlackBerry") || h(c, "BB10")) {
    p = 34, q = Sa, qa = !0;
  } else if (h(c, "SunOS") || h(c, "Sun Solaris")) {
    p = 42;
  } else if (h(c, "FreeBSD")) {
    p = 43;
  } else if (h(c, "OpenBSD")) {
    p = 44;
  } else if (h(c, "NetBSD")) {
    p = 45;
  } else if (Ea && ib) {
    h(c, "Android 4.4;") ? Ha = {min:2.3} : 4 <= Oa(ta) ? Ha = ta : Ha = {min:2.2}, q = Ha;
  } else if (Ea && ma) {
    ta ? Ha = ta : Ha = {min:1.6}, q = Ha, h(c, "Tablet") ? ra = !0 : qa = !0;
  } else if (ta) {
    q = ta, Ea = !0;
  } else if (jb && hb || rb || ub) {
    var Ia = !0;
    kb ? Ha = {min:4.4} : $a && !Gb || Ra || Db ? Ha = {min:4} : (Ha = ta = Fa.touchAction !== La ? {min:5} : yb ? 4.4 : T ? ia.connection ? x.searchBoxJavaBridge_ || $a ? db.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Va ? 3 : 533 <= Va ? gb ? 2.3 : 2.2 : 530 <= Va ? 2 : 1.5, Fb && (V = 24, Y = Fb));
    q = Ha;
    Ea = !0;
  } else {
    wb ? (q = {min:5}, Ia = Ea = !0) : jb && (h(c, "Ubuntu") ? p = 46 : (Q = n(c, "Mint/")) ? (p = 47, q = Q) : (Q = n(c, "Fedora/")) ? (p = 48, q = Q) : p = h(c, "Gentoo") ? 49 : 50);
  }
  ya || Ea && Ia && Eb ? p = 27 : Ea && (p = p || 26);
  V || (na = na || Ea, ma ? (V = na || mb || qa || ra ? 9 : 8, Y = Nb) : pb ? (Ha = xa(U, "Trident/") + 4, V = mb || qa || ra || Jb ? 3 : Kb && 5 <= l ? 7 : 2, Y = l) : Za ? (V = 23 === p ? 6 : 5, Y = n(U, "Edge/")) : Ta ? (V = 13, Y = Ta) : ib ? (V = na ? 12 : 11, Y = Ua || tb) : kb ? (V = 24, Y = kb) : (Q = Ma || n(c, "NetFront/")) ? (V = 18, Y = Q) : (Q = n(c, "iCab")) ? (V = 19, Y = Q) : (Q = M(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || Ga && Sa) ? (V = 10, Y = Q, p || (h(c, "iPhone") ? Ba = 
  0 : h(c, "iPad") ? Ba = 1 : h(c, "iPod") && (Ba = 2), Ba && (p = 24))) : Bb ? (V = 25, Y = Ob) : Tb ? (V = 14, Y = fb) : Ea && Gb ? (V = 21, Y = ta) : $a || Ra || Db ? (V = na ? 22 : 20, Y = lb || Cb) : Ea && yb ? (V = 23, Y = 5 > Oa(ta) ? ta : lb) : Ea && (Sa || Ia) ? (V = 21, Y = ta) : lb ? (V = na ? 22 : 20, Y = lb) : Va && (V = 15, Y = Va));
  p && (Ya[2] = p, q && (Ya[3] = S(q)));
  V && (Ya[0] = V, Y && (Ya[1] = S(Y)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ya, x, X, ia, F, Oa, db, La, xa, h, Mb, eb, n, M) {
  function S(m) {
    if (x[0] === m) {
      return Fa === Fa + "" ? xa(Fa) : Fa;
    }
  }
  function Da(m) {
    var C = x[3];
    if (x[2] === m) {
      return C === C + "" ? xa(C) : C;
    }
  }
  function c(m, C, da) {
    m + "" === m && ("a" === m.charAt(2) && (da = !0, m = m.substr(0, 2)), m = "CS" === m ? 7.2 > y ? 117 : .9 > T || 9 > l || 9 > y || Qa ? 1 : 132 : parseInt(m, 16));
    da && (50 === m && (m = 128), 102 < m && 108 > m && (m += 24));
    return (m - 1) * -(6 * (C || 2));
  }
  var U = F.body, fb = U.style, N, Za, Fa = x[1], l = S(2) || S(3), Qa = S(7), gb = S(5) || S(6), y = S(8) || S(9), T = S(11) || S(12), hb = T && 0 <= x.conpare(Fa, "1.9.1"), Sa = S(13), Ga = S(15), ma = S(16) || S(17), Nb = S(10) || S(25), Ra = S(20) || S(22), pb = S(23), $a = S(21), ib = S(24), Bb = Ra || pb || $a || ib, Ob = Ra && xa(Oa.userAgent.split("Edg/")[1]), Sb = xa(Oa.appVersion.split("Trident/")[1]) + 4, qb = Da(35) || Da(36) || Da(37), ta = .9 > T, rb = (Qa ? "ie5mac" : 5.5 > l ? "ie5win" : 
  6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > y ? "opr70" : 8 > y ? "opr72" : 9.5 > y ? "opr" + (y | 0) : T && !hb ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : ta ? .8 <= T ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  Da(1) || Da(2) || Da(3) || Da(4) || Da(8) || Da(9) || Da(10);
  var Ea, jb, sb, Ta = 8 > l || 7.2 > y ? !1 : M, Ua = fb.transform !== M ? "transform" : fb["-o-transform"] !== M ? "-o-transform" : fb["-ms-transform"] !== M ? "-ms-transform" : fb.MozTransform !== M ? "-moz-transform" : fb["-webkit-transform"] !== M ? "-webkit-transform" : "", tb = [], Q = [], ab = [], Va, lb, Cb, Db, Tb = 525 > Ga || 3.2 > ma || 2.2 > $a || 10 > y || T && !hb || S(25) || 10 > S(3) || Da(32) || Da(30) || Da(3), aa, Eb, kb, Fb, Gb, ub, bb, Aa = La.now || function() {
    return +new La();
  };
  (function() {
    function m() {
      for (var z, a = 0, b = Aa(); a < A.length;) {
        b < A[0].t ? ++a : (z = A.splice(a, 1)[0], z.f(z.p));
      }
      K = A.length ? h(m, O) : 0;
    }
    function C() {
      for (var z, a = 0; a < ca.length; ++a) {
        z = ca[a], z.f();
      }
    }
    function da() {
      ka && (ka = n(ka));
    }
    function oa() {
      K && (K = Mb(K));
    }
    kb = function(z) {
      ca.length || (ka = eb(C, la));
      ca.push({f:z, l:++va});
      return va;
    };
    Fb = function() {
      ka && (da(), ka = eb(C, la));
    };
    Gb = da;
    var ca = [], la = 500, va = 0, ka;
    if (5 > l || Qa) {
      X._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    aa = function(z, a, b) {
      A.length || (K = h(m, O));
      A.push({f:z, p:a, l:++G, t:Aa() + (O < b ? b : O)});
      return G;
    };
    Eb = function(z) {
      for (var a = A.length, b; b = A[--a];) {
        if (b.l === z) {
          A.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    ub = function() {
      K && (oa(), K = h(m, O));
    };
    bb = oa;
    var A = [], O = 16, G = 0, K;
    if (5 > l || Qa) {
      X._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var yb, vb, Hb, wb, zb, Ib, p, q, V, Y, Ma, mb, Ba, qa, ra, Jb, Ha, ya, na, Kb, Ia, D;
  (function() {
    function m(a, b, d) {
      var u = ["<", a], v = 1, R, pa;
      if (b) {
        for (R in b) {
          var k = b[R];
          if (null != k && "" !== k) {
            if ("style" === R) {
              u[++v] = ' style="';
              for (pa in k) {
                for (var E = ++v, L, W = [], g = pa.split(""), f = g.length; f;) {
                  L = g[--f], "A" <= L && "Z" >= L && (L = "-" + L.toLowerCase()), W[f] = L;
                }
                u[E] = W.join("") + ":" + k[pa] + ";";
              }
              u[++v] = '"';
            } else {
              "className" === R && (R = "class"), u[++v] = " " + R + '="' + k + '"';
            }
          }
        }
      }
      u[++v] = ">";
      null != d && (G && "font" !== a ? u[++v] = "<font>" + C(d) + "</font>" : u[++v] = C(d));
      u[++v] = "</" + a + ">";
      return u.join("");
    }
    function C(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function da(a) {
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
      for (var d = 0, u = a.length; d < u; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function ca(a) {
      return G ? a.parentElement : a.parentNode;
    }
    function la(a, b, d, u, v, R) {
      if (G) {
        var pa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var k = zb(2 > a ? wb(b) : b);
        k = 2 > a ? k.indexOf(b) + a : k.length;
        b.insertAdjacentHTML(pa, m(d, u, v));
        b = zb(b)[k];
        null != v && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (K) {
        b = F.createElement(m(d, u));
      } else {
        b = R ? F.createElementNS("http://www.w3.org/2000/svg", d) : F.createElement(d);
        if (u) {
          for (pa in u) {
            if ((a = u[pa]) || 0 === a) {
              switch(pa) {
                case "class":
                case "className":
                  Ha(b, a);
                  break;
                case "style":
                  R = b.style;
                  for (k in a) {
                    R[k] = a[k];
                  }
                  break;
                default:
                  qa(b, pa, a);
              }
            }
          }
          !y || "a" !== d && "A" !== d || !u.href || u["tag-index"] || u.tagIndex || qa(b, "tagIndex", "-0");
        }
        z || null != v && va(b, v);
      }
      return b;
    }
    function va(a, b) {
      if (G) {
        return la(2, a, "font", M, b);
      }
      var d = F.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function ka(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function A(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function O(a, b, d) {
      if (8 > y || 5.5 > l) {
        b = da(b);
      }
      a.style[b] = d;
    }
    var G = 5 > l;
    N = oa("html")[0];
    Za = oa("head")[0];
    yb = function(a) {
      return X[a] || F[a] || F.getElementById(a);
    };
    vb = oa;
    Hb = function(a) {
      var b = [], d = 0, u, v = -1;
      if (9 > l || !F.getElementsByClassName) {
        var R = 6 > l ? F.all : F.getElementsByTagName("*");
      } else {
        var pa = !0;
        R = F.getElementsByClassName(a);
      }
      for (u = R.length; d < u; ++d) {
        var k = R[d];
        if (pa || (G || 1 === k.nodeType) && A(k, a)) {
          b[++v] = k;
        }
      }
      return b;
    };
    wb = ca;
    zb = function(a) {
      a = G ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    Ib = function(a) {
      var b = !(7.03 < y && 7.2 > y) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], u = a.length, v = -1, R; u;) {
        if (R = a[--u], b || 1 === R.nodeType) {
          G && "FONT" === R.tagName || (d[++v] = R);
        }
      }
      return d;
    };
    p = function(a, b, d, u, v) {
      b = la(2, a, b, d, u, v);
      G || (a.appendChild(b), z && null != u && va(b, u));
      return b;
    };
    q = function(a, b, d, u, v) {
      b = la(0, a, b, d, u, v);
      G || (ca(a).insertBefore(b, a), z && null != u && va(b, u));
      return b;
    };
    V = va;
    Y = function(a, b) {
      if (G) {
        return la(0, a, "font", M, b);
      }
      var d = F.createTextNode("" + b);
      wb(a).insertBefore(d, a);
      return d;
    };
    Ma = function(a) {
      G ? a.outerHTML = "" : (5.5 > l && (a.style.filter = ""), wb(a).removeChild(a));
    };
    var K = 9 > l, z = K;
    mb = function(a) {
      return a.tagName.toUpperCase();
    };
    Ba = function(a, b) {
      if (8 > y || 5.5 > l) {
        b = da(b);
      }
      var d = a.getAttribute(b);
      return y && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    qa = function(a, b, d) {
      if (y && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > y || 5.5 > l) {
          b = da(b);
        }
        a.setAttribute(b, d);
      }
    };
    ra = function(a, b) {
      if (y && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > y || 5.5 > l) {
          b = da(b);
        }
        a.removeAttribute(b);
      }
    };
    Jb = function(a, b) {
      if (y && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > y || 5.5 > l) {
        b = da(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ha = ka;
    ya = A;
    na = function(a, b) {
      var d;
      if (!A(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        ka(a, d + b);
      }
    };
    Kb = function(a, b) {
      if (A(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        ka(a, d.join(" "));
      }
    };
    Ia = O;
    D = function(a, b) {
      var d, u = -1, v;
      if (5.5 > l) {
        if (d = 5.5 > l ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); v = d[++u];) {
            O(a, v.split(":")[0], "");
          }
        }
        if (b) {
          for (u = -1, d = b.split(";"); v = d[++u];) {
            var R = v.split(":")[0];
            O(a, R, v.substr(R.length + 1));
          }
        }
      } else if (7.1 > y) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); v = d[++u];) {
            v = v.split(":"), O(a, v[0], v[1]);
          }
        }
      } else {
        9 > y || 1 > T ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ja, fa, za, Pa, xb, Ub, Vb, Ja, Pb;
  (function() {
    function m() {
      return k ? L ? 2 : E ? 3 : 1 : 0;
    }
    function C(g) {
      fa(X, "load", C);
      C = M;
      oa(tb, g, !0);
      za = tb = M;
    }
    function da(g, f) {
      xb(function() {
        var H = A(g);
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
    function ca(g, f, H) {
      tb || G.length || aa(la);
      G.push(g, f, H);
    }
    function la() {
      var g = G, f;
      for (G = []; f = g.shift();) {
        oa(f, g.shift(), g.shift());
      }
    }
    function va(g) {
      var f = g || event;
      g = z[f.type];
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
        e.i === this ? (this.g = e.h, l && (f.currentTarget = this), this.g(f), l ? (this.g = ia, this.g = M) : delete this.g) : 7.2 > y && this === F && e.i === X && (X.g = e.h, X.g(f), delete X.g);
      }
      if (l) {
        return f.preventDefault = f.stopPropagation = ia, f.preventDefault = f.stopPropagation = M, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (u = !0), I && !u && f.j(), f.j = f.stopPropagation = M);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function ka() {
      var g = 9 === O.offsetWidth;
      Vb !== g && ca(Q, Vb = g);
    }
    var A = X.matchMedia, O, G = [];
    tb.push(function() {
      da = M;
      O = p(U, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        G.length && aa(la);
      });
    });
    ja = function(g, f, H, e) {
      if (d) {
        g.addEventListener(f, H, e ? K ? e : e.capture || !0 === e : !1);
      } else {
        var I = {i:g, h:H};
        e = z[f];
        var r = "on" + f, w, sa;
        if (e) {
          for (w = e.length; sa = e[--w];) {
            if (sa.i === g && sa.h === H) {
              return;
            }
          }
          z[f].push(I);
        } else {
          z[f] = e = [I], a || (f = g[r], "function" === typeof f && f !== va && e.unshift({i:g, h:f}));
        }
        a ? g.attachEvent(r, va) : g[r] = va;
      }
    };
    fa = function(g, f, H, e) {
      if (d) {
        g.removeEventListener(f, H, e ? K ? e : e.capture || !0 === e : !1);
      } else {
        e = z[f];
        f = "on" + f;
        var I, r, w;
        if (e) {
          for (I = e.length; r = e[--I];) {
            r.i === g && (r.h === H ? e.splice(I, 1) : w = !0);
          }
          w || (a ? g.detachEvent(f, va) : l ? (g[f] = ia, g[f] = null) : delete g[f]);
        }
      }
    };
    var K = !l && !Qa && (new db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), z = {}, a = !1, b = 525.13 > Ga, d = !b && !Qa && X.addEventListener, u;
    b && N.addEventListener("click", function(g) {
      if (u) {
        return u = !1, g.preventDefault(), !1;
      }
    });
    za = function(g) {
      tb.push(g);
    };
    Pa = function(g) {
      v && v.push(g);
    };
    var v = [];
    if (419.3 >= Ga) {
      var R = function() {
        if (R) {
          var g = F.readyState;
          "loaded" === g || "complete" === g ? (R = M, C()) : aa(R);
        }
      };
      aa(R);
    } else {
      ja(X, "load", C);
    }
    l || !ta && 1.8 > T ? ja(X, "unload", function(g) {
      oa(v, g, !0);
    }) : v = M;
    xb = function(g) {
      Q.push(g);
    };
    za(function() {
      ka();
      kb(ka);
    });
    Ub = function(g) {
      ab && ab.push(g);
    };
    var pa = 60 > T || Sa, k, E, L;
    if (89 <= T || 89 <= Ra || qb && 79 <= Ob || A && (A("(forced-colors:none)").matches || A("(forced-colors:active)").matches)) {
      Pb = !0, da("(forced-colors:active)", function(g) {
        k = g.matches;
        Ja = m();
        ca(ab, Ja);
      });
    } else if (10 <= l || gb || qb && Ob) {
      Pb = !0, da("(-ms-high-contrast:black-on-white)", function(g) {
        k = E = g.matches;
        Ja !== m() && (Ja = m(), ca(ab, Ja));
      }), da("(-ms-high-contrast:white-on-black)", function(g) {
        k = L = g.matches;
        Ja !== m() && (Ja = m(), ca(ab, Ja));
      }), da("(-ms-high-contrast:active)", function(g) {
        k = g.matches;
        Ja !== m() && (Ja = m(), ca(ab, Ja));
      });
    } else if (qb && (l || T && 0 <= x.conpare(Fa, "1.8.1") || Sa)) {
      var W = function() {
        function g(e, I) {
          if (I && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var r = e.split("(")[1].split(",");
          return xa(r[0]) + xa(r[1]) + xa(r[2]);
        }
        var f = F.defaultView;
        var H = f ? f.getComputedStyle(O, null) : O.currentStyle;
        f = (H && H.color || "").split(" ").join("");
        H = (H && H.backgroundColor || "").split(" ").join("");
        f && (k = "#123456" !== f && "rgb(18,52,86)" !== f, E = g(f) < g(H, !0), L = g(f) > g(H, !0), Ja !== m() && (Ja = m(), ca(ab, Ja, pa)));
      };
      xb(function(g) {
        if (g) {
          return Ia(O, "color", "#123456"), Ia(O, "backgroundColor", "#123456"), pa ? (W(), ab = M) : kb(W), W = M, !0;
        }
      });
    } else {
      ab = m = M;
    }
  })();
  (function() {
    function m(t) {
      switch(t) {
        case 1:
          return d;
        case 2:
          return !!u;
        case 3:
          return !!v;
        case 4:
          return !!R;
        case 5:
          return k;
        case 6:
          return pa && !O;
      }
      return !1;
    }
    function C(t) {
      E(t);
      sa && !t && Ma(sa);
      E = L = W = g = f = H = r = w = sa = Na = M;
    }
    function da(t) {
      F.fonts.load('1.6em "' + t + '"').then(function() {
        var ha;
        (ha = ca(L)) ? aa(C, ha) : oa(!0);
      }, function() {
        Ta !== M ? la(Ta) : Va(la);
      });
    }
    function oa(t) {
      t && (I = Aa());
      (t = ca(L, e)) ? C(t) : (t = e, F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (I = Aa(), t = !1) : t = t < Aa() - I, t ? r ? va() : A ? C(0) : Ta !== M ? la(Ta) : Va(la) : aa(oa));
    }
    function ca(t) {
      var ha = 0, ea = -1, B = (a || !1) && [];
      if (!Na) {
        var J = -1;
        var P;
        w = p(U, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, z);
        for (Na = []; P = b[++J];) {
          Ia(w, "fontFamily", P), Na[J] = w.offsetWidth;
        }
      }
      for (5 > l ? w || (w = p(U, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, z)) : U.appendChild(w); J = b[++ea];) {
        Ia(w, "fontFamily", '"' + t + '",' + J);
        var Z = w.offsetWidth;
        a ? B[ea] = Z : Z !== Na[ea] && (ha = 1);
      }
      if (a && Z === B[0] && Z === B[1]) {
        for (ha = 1, ea = -1; 0 <= (Z = Na[++ea]);) {
          if (Z === B[0] && Z === B[1] && Z === B[2]) {
            ha = 0;
            break;
          }
        }
      }
      !l && ha && f && (w.textContent = f, Z = w.offsetWidth, w.textContent = H, ha = Z === w.offsetWidth ? 2 : 1, w.textContent = z);
      Ma(w);
      5 > l && (w = M);
      return ha;
    }
    function la(t) {
      t ? (r = !0, e = K, va()) : C(0);
    }
    function va() {
      if (W) {
        for (; W.length;) {
          var t = W.shift(), ha = W.shift();
          if (m(t)) {
            sa = Db(ha, ka, g, sa);
            return;
          }
        }
      }
      C(0);
    }
    function ka(t) {
      t ? oa(!0) : va();
    }
    Q.splice(0, 0, function() {
      if (Vb) {
        sb = 8 <= l || gb || 9.5 <= y || hb || Sa || 522 <= Ga || 3 <= ma || Nb || Bb ? 3 : 7.2 <= y ? 2 : 6 <= y || T ? 1 : 0;
        if (!sb && !l && !Qa) {
          var t = p(U, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          sb = 6 <= t.offsetWidth ? 2 : 0;
          Ma(t);
        }
        return !0;
      }
    });
    Va = !1 === Ta ? function(t) {
      aa(t, !1);
    } : function(t) {
      function ha(J) {
        B && (B = Eb(B), Ta = J, ea.onload = ea.onerror = ia, aa(t, J));
      }
      if (Ta !== M) {
        aa(t, Ta);
      } else {
        var ea = new Image(), B = aa(ha, !1, 999);
        ea.onerror = function() {
          ha(!1);
        };
        ea.onload = function() {
          ha(1 === ea.width * ea.height);
        };
        ea.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > l && za(function() {
      var t = p(U, "div");
      D(t, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Ea = 1 < t.offsetHeight;
      Ma(t);
    });
    lb = function(t, ha) {
      function ea() {
        if (J || !P || B.complete) {
          var Z = !!B.width;
          jb = jb || Z;
          aa(t, Z);
          B.onerror = B.onload = ia;
          B = t = M;
        } else {
          --P, aa(ea);
        }
      }
      var B = new Image(), J, P = 99;
      B.onerror = function() {
        J = !0;
      };
      B.onload = function() {
        J = !0;
      };
      B.src = ha;
      aa(ea);
    };
    Cb = function(t, ha, ea, B, J, P, Z) {
      E = t;
      L = ha;
      W = ea;
      g = B;
      f = J;
      H = P;
      e = Z || G;
      S(10) ? aa(C, 1) : Tb ? aa(C, 0) : !F.fonts || 603 > Ga || 11 > ma ? oa(!0) : da(L);
    };
    var A = 9 > l, O = 6 > Ra || y || 530 > Ga || 4 > ma, G = 5E3, K = 500, z = "mmmmmmmmmmlliiiiiiiii", a = 21 > Ra || 7 > ma || Ga && 0 >= x.conpare(Fa, "536.11"), b = ["monospace", "sans-serif", "serif"], d = 14 <= gb || 36 <= Ra || 39 <= T || 602 <= Ga || 10 <= ma, u = 6 <= Ra || T && 0 <= x.conpare(Fa, "1.9.2") || 525 <= Ga || 3.2 <= ma || 4.4 <= $a || 11.1 <= y || gb || 9 <= S(2) || 10 <= S(3), v = 2 <= Ra || hb || 525 <= Ga || 3.2 <= ma || 2.2 <= $a || 10 <= y || gb || 9 <= S(2) || 10 <= S(3), 
    R = v, pa = 525 <= Ga || 3.2 <= ma || 38 > Ra || 3 <= $a || 11.5 <= y, k = 4 <= S(2) || 10 <= S(3), E, L, W, g, f, H, e, I, r, w, sa, Na;
  })();
  (function() {
    Db = function(A, O, G, K) {
      K = K || p(Za, "link", {type:"text/css", rel:"stylesheet"});
      var z;
      if (ka) {
        (z = yb(G)) ? ra(z, "id") : z = p(U, "div", {"aria-hidden":"true", className:G});
        var a = z.offsetWidth;
        qa(z, "id", G);
      }
      va(K, A, O, z, a);
      return K;
    };
    var m = T && 0 > x.conpare(Fa, "0.9.1"), C = 11 <= l || gb || 9 <= y && 9.5 > y, da = 11 > l, oa = 7.2 <= y && 7.5 > y, ca = 9 > T && !m || 19 > Ra || 4.3 > $a || 2 > ib || 536 > Ga || 6 > ma || 7 <= y && 9 > y && !oa, la = !m && !C && !da && !oa && !ca, va = la ? function(A, O, G) {
      A.onload = o;
      A.onerror = function() {
        A.onload = A.onerror = null;
        aa(G, !1);
      };
      A.href = O;
      function o() {
        A.onload = A.onerror = null;
        aa(G, !0);
      }
      o = !1;
    } : C ? function(A, O, G, K, z) {
      A.onload = function() {
        aa(G, ka(K, z));
        Ma(K);
        A.onload = K = null;
      };
      A.href = O;
    } : da ? function(A, O, G, K, z) {
      A.onreadystatechange = function() {
        "complete" === A.readyState && (aa(G, ka(K, z)), Ma(K), K = null, A.m = ia);
      };
      A.href = O;
    } : ca || oa ? function(A, O, G, K, z) {
      function a() {
        d && (u = Eb(u), v = Aa() + 999, aa(b, 0, 99), ca ? d.onerror = null : d.removeEventListener("load", a, !1), d = null);
      }
      function b() {
        ka(K, z) ? (Ma(K), K = null, aa(G, !0)) : Aa() < v ? aa(b, 0, 99) : (Ma(K), K = null, aa(G, !1));
      }
      var d = new Image(), u = aa(a, 0, 5E3), v;
      ca ? d.onerror = a : d.addEventListener("load", a, !1);
      d.src = A.href = O;
    } : function(A, O, G) {
      aa(G, !1);
    }, ka = !la && !m && function(A, O) {
      return A.offsetWidth !== O;
    };
  })();
  var Qb = String.fromCharCode, cb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Qb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Wb = cb[7], dc = cb[113], $b = Qb(160);
  Qb(8194);
  var ac = cb[31], Rb = cb[30], ec = cb[63], fc = cb[125], gc = cb[126], hc = Qb(59648), bc = (9 === l || T && 0 <= x.conpare(Fa, "1.8.1") || Sa) && !Pb, nb = [], ob, Wa, Lb = 7.2 > y ? function() {
    ob = !ob;
    for (var m = -1, C; C = nb[++m];) {
      -1 !== C.className.indexOf("pbAlp") ? Ia(C, "display", ob ? "" : "none") : (na(C, ob ? "pbChrCS" : "pbChr00"), Kb(C, ob ? "pbChr00" : "pbChrCS"));
    }
  } : bc ? function() {
    ob = !ob;
    for (var m = -1, C; C = nb[++m];) {
      Ia(C, "opacity", ob ? 1 : 0);
    }
  } : M;
  var Xb = Ya.startBlinkingIfCursor = function(m) {
    Lb ? ya(m, "pbChrCS") && (Wa || !y && !Ja || (Wa = eb(Lb, 400)), -1 === nb.indexOf(m) && nb.push(m)) : nb = M;
  };
  Ya.stopBlinkingIfCursor = function(m) {
    Lb && (m = nb.indexOf(m), 0 <= m && (nb.splice(m, 1), !nb.length && Wa && (n(Wa), Wa = 0)));
  };
  bc && Ub(function(m) {
    m ? Wa || (Wa = eb(Lb, 400)) : Wa && (n(Wa), Wa = 0);
  });
  Lb && Pa(function() {
    Wa && n(Wa);
  });
  Pb || Ub(function(m) {
    m ? (qa(N, "forced-colors", 2 === m ? "lod" : 3 === m ? "dol" : "active"), (Ua || 9 === l || 5.5 <= l && 9 > l && Ea) && na(N, "jsCanRotate")) : (ra(N, "forced-colors"), Kb(N, "jsCanRotate"));
  });
  (function() {
    function m(k) {
      (a = k) ? ca() : jb ? oa(!0) : jb !== M ? ca() : lb(oa, b);
    }
    function C() {
      C = M;
      Cb(m, "PB-100", [1, Xa + "pbFont/woff2.css", 2, Xa + "pbFont/woff.css", 4, Xa + "pbFont/otf.css", 3, Xa + "pbFont/ttf.css", 6, Xa + "pbFont/svg.css"], "pbFont-testCssReady", "\u1d07\u207b", "i");
    }
    function da(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function oa(k) {
      k && na(U, "pbList-noWebFont");
      ca();
    }
    function ca() {
      for (m = Cb = M; z.length;) {
        la(z.shift(), z.shift());
      }
    }
    function la(k, E) {
      function L(I) {
        I = zb(I);
        for (var r = -1, w; w = I[++r];) {
          switch(w.nodeType) {
            case 1:
              L(w);
              break;
            case 3:
              w.data && g(w.data) && f.push(w);
          }
        }
      }
      function W(I) {
        var r = I.children, w = 0, sa = r.length;
        if (sa) {
          for (; w < sa; ++w) {
            W(r[w]);
          }
        } else {
          (r = I.innerText) && g(r) && f.push(I);
        }
      }
      function g(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], H;
      if (m) {
        -1 === z.indexOf(k) && (z.push(k, E), d && C && C());
      } else {
        var e = z.indexOf(k);
        0 <= e && z.splice(e, 2);
        for (5 > l ? W(k) : L(k); H = f.shift();) {
          e = 5 > l ? H.innerText : H.data, 2 !== a && (0 <= e.indexOf("\u2091\u208b") && (e = e.split("\u2091\u208b").join(Rb)), 0 <= e.indexOf("\u1d07\u207b") && (e = e.split("\u1d07\u207b").join(Rb)), a && (0 <= e.indexOf("\u208b\u2081") && (e = e.split("\u208b\u2081").join(ec)), 0 <= e.indexOf("\u1d47/\u1d04") && (e = e.split("\u1d47/\u1d04").join(hc)), 0 <= e.indexOf("\u1d47/") && (e = e.split("\u1d47/").join(fc)), 0 <= e.indexOf("/\u1d04") && (e = e.split("/\u1d04").join(gc)))), 0 <= e.indexOf("\u2091") && 
          (e = e.split("\u2091").join(ac)), 0 <= e.indexOf("\u00ea") && (e = e.split("\u00ea").join(Rb)), E ? 5 > l ? H.innerText = e : H.data = e : va(e.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(dc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Wb).split("&amp;").join("&"), H);
        }
      }
    }
    function va(k, E) {
      function L(wa, ba) {
        for (var Ka = ""; ba;) {
          ba & 1 && (Ka += wa), ba >>= 1, wa += wa;
        }
        return Ka;
      }
      function W(wa, ba, Ka) {
        for (var Ab, ic = -1, Yb, Zb; Ab = ba[++ic];) {
          for (; 0 <= (Yb = wa.indexOf(Ab));) {
            Zb = Ab.length, wa = wa.substr(0, Yb) + L(Ka, Zb) + wa.substr(Yb + Zb);
          }
        }
        return wa;
      }
      function g(wa) {
        var ba = xa(wa), Ka = "" + ba;
        return 0 < ba && ba === ba | 0 && (ba = wa.indexOf(Ka) + Ka.length, ba <= wa.length) ? ba : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), H = 5 > l || 1 === E.nodeType, e = [], I = "", r, w = -1, sa, Na, t;
      if (H) {
        if (R) {
          var ha = E.style.visibility;
          Ia(E, "visibility", "hidden");
        }
        E.innerHTML = "";
      }
      if (pa) {
        var ea = E;
        E = F.createDocumentFragment();
      }
      if (function(wa) {
        var ba = wa.indexOf("P");
        if (-1 === ba) {
          return !1;
        }
        ba = xa(wa.charAt(ba + 1));
        return 0 <= ba && 9 >= ba;
      }(k)) {
        I = L("+", k.length);
      } else {
        0 <= (r = g(k)) && (I = L("|", r), w = r, --w);
        for (; r = k.charAt(++w);) {
          r === Wb || sa ? (I += "~", r === Wb && (sa = !sa)) : I += r;
        }
        I = W(I, K, "^");
        I = W(I, O, "{");
        I = W(I, G, "}");
      }
      w = 0;
      for (sa = k.length; w < sa; ++w) {
        r = k.charAt(w);
        var B = r === $b;
        var J = " " === r;
        r = B ? " " : r;
        var P = I.charAt(w);
        var Z = (Na = Ca) && B;
        var Ca = "|" === P;
        P = f["+|~{}^".indexOf(P) + 1];
        if ("\n" !== r) {
          if (a || !jb) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === k.substr(w, 3)) {
                r = "\u1d47/\u1d04", w += 2;
              } else {
                switch(k.substr(w, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    r = k.substr(w, 2), ++w;
                }
              }
            }
            P = J && "str" === P ? "pbList-strsp" : B ? "" : !J && P ? "pbList-" + P : "";
          } else {
            B = cb.indexOf(r), B = -1 === B ? "" : cb.indexOf(r).toString(16).toUpperCase(), B = (B = 1 === B.length ? "0" + B : B) ? "pbChr" + B : "", P = J && "str" === P ? "pbList-strsp" : J || !B ? "" : P ? (B ? B + " " : "") + "pbList-" + P : B;
          }
          B = M;
          Z ? (r = 6 <= l && 8 > l ? " " : $b, P = "") : Ca && (T && !hb || 9.5 > y) ? (Ca && !Na && (t = 4 - (xa(k.substr(w)) + "").length), 7.5 > y ? B = v ? "position:relative;top:-4px;left:" + 12 * t + "px" : {position:"relative", top:"-4px", left:12 * t + "px"} : B = v ? "position:relative;left:" + 12 * t + "px" : {position:"relative", left:12 * t + "px"}) : J && 7.5 > y && (P = "pbList-strsp");
          v ? e.push("<font" + (P ? ' class="' + P + '"' : "") + (B ? ' style="' + B + '"' : "") + ">" + r + "</font>") : H || pa ? p(E, "font", {"class":P, style:B}, r) : q(E, "font", {"class":P, style:B}, r);
        } else {
          Na = Ca = !1, v ? e.push(r) : H || pa ? V(E, r) : Y(E, r);
        }
      }
      if (H) {
        v ? E.innerHTML = e.join("") : pa && ea.appendChild(E), R && Ia(E, "visibility", ha);
      } else {
        if (v) {
          f = F.createElement("font");
          for (f.innerHTML = e.join(""); e = f.firstChild;) {
            E.parentNode.insertBefore(e, E);
          }
          Ma(E);
        } else {
          pa ? ea.parentNode.replaceChild(E, ea) : Ma(E);
        }
      }
    }
    1.9 > T && xb(function(k) {
      if (k) {
        k = vb("*");
        for (var E = 0, L = k.length, W; E < L; ++E) {
          W = k[E], "B" !== mb(W) && -1 !== (" " + W.className).toLowerCase().indexOf(" pbchr") && (Jb(W, "title") || qa(W, "title", W.textContent), W.textContent = " ");
        }
        return !0;
      }
    });
    xb(function(k) {
      if (k) {
        k = Hb("pbChrCS");
        for (var E = 0, L = k.length; E < L; ++E) {
          Xb(k[E]);
        }
        return !0;
      }
    });
    var ka = [], A = T && 0 > x.conpare(Fa, "0.9.9");
    xb(function(k) {
      function E(J) {
        var P = Ba(J, "pbTip");
        if (P) {
          var Z = P.charAt(0);
          var Ca = "_" === Z;
          P = (Ca ? P.charAt(2) : Z).toUpperCase().charCodeAt(0) - 65;
          e ? p(J, "div", {style:{left:7 * P + 3 + "px"}}) : (Z = Ba(J, "title"), ra(J, "pbTip"), ra(J, "title"), Ca = p(J, "div", {className:"pbTip" + (Ca ? "Btm" : ""), style:{width:Z.length + W + "em", left:7 * P - (A ? 0 : 5) + "px"}}, Z), Ca = p(Ca, "div"), .9 <= T && A && Ia(Ca, "left", "2px"));
        }
        H && 0 <= J.className.indexOf("pbColor") && p(J, "u");
      }
      function L(J, P) {
        var Z = Ba(J, "pbGhst"), Ca = J.className, wa = Ca.split("pbCsr")[1] || "", ba = Ca.split("pbAlp")[1] || "";
        if ("CS" === Z) {
          var Ka = "_";
        } else {
          Ka = Z, 3 === Ka.length && (Ka = Ka.substr(0, 2)), Ka = cb[parseInt(Ka, 16)] || "~";
        }
        var Ab;
        wa = wa.split(" ")[0];
        if (ba = xa(ba.split(" ")[0])) {
          g && (Ca = Ca.split("pbChr")[1].split(" ")[0], Ia(J, "backgroundPosition", c(Ca, 2, ha) + "px " + -24 * (10 - ba) + "px")), !P && f && q(J, "a").appendChild(J);
        }
        Z && (ba = 10 - ba, g && (Ab = {backgroundPosition:c(Z, 2, ha) + "px " + -24 * (10 - ba) + "px"}), ra(J, "pbGhst"), w = q(J, "b", {className:"pbChr" + Z + " pbCsr" + wa + " pbAlp" + ba, style:Ab}, Ka), Xb(w));
        Xb(J);
      }
      if (k) {
        var W = 6 > l ? 2 : 0, g = 7.2 > y || .9 > T || Qa, f = 1.1 === T, H = 1.4 > T;
        k = vb("SAMP");
        var e = 8 === l, I = sb, r, w, sa, Na, t;
        Ea && na(U, "pbLCD-AX");
        if (k.length) {
          for (sa = -1; r = k[++sa];) {
            if (ya(wb(r), "pbLCD")) {
              var ha = ya(r, "PB-120") || ya(r, "FX-795P");
              var ea = Ib(r);
              for (r = ea.length; t = ea[--r];) {
                switch(mb(t)) {
                  case "A":
                    (2 > I || e) && E(t);
                    if (2 > I) {
                      var B = Ib(t);
                      for (Na = B.length; Na;) {
                        L(B[--Na], !0);
                      }
                    }
                    Nb ? qa(t, "href", "javascript:void(0)") : (ja(t, "click", da), ka.push(t));
                    break;
                  case "B":
                    2 > I && L(t, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Pa(function() {
      for (var k; k = ka.shift();) {
        fa(k, "click", da);
      }
    });
    6 === l && (new db("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var O = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), G = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), K = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Rb + ac).split(""), z = [], a, b, d;
    if (.9 <= T && 0 >= x.conpare(Fa, "0.9.1")) {
      na(N, "pbLCD-gecko09To091");
      var u = !0;
    }
    xb(function(k) {
      if (k) {
        b = Xa + "pbFont/x3mask" + (u ? ".gecko0.9.1.gif" : ".png");
        k = vb("*");
        for (var E = -1, L; L = k[++E];) {
          ya(L, "pbList") ? la(L) : ya(L, "pbFont") && la(L, !0);
        }
        z.length && C();
        return !0;
      }
    });
    var v = !1, R = 8 > y, pa = !v && !R && !(6 > l) && F.createDocumentFragment && !!U.replaceChild;
    Ya.prettify = la;
  })();
  var cc = F.scripts || vb("script");
  var Xa = cc[cc.length - 1].src.split("/");
  --Xa.length;
  (Xa = Xa.join("/")) && (Xa += "/");
  6.1 > ma && ja(X, "scroll", Fb);
  Pa(Gb);
  6.1 > ma && ja(X, "scroll", ub);
  Pa(bb);
  10 > l && (11 !== Sb || 5 !== l) || (9 > y || 1 > T || !Qa && !X.addEventListener ? F.write('<link href="' + Xa + rb + '" rel="stylesheet"' + (8 > y ? "" : ' media="screen,handheld,projection,print"') + ">") : za(function() {
    p(Za, "link", {href:Xa + "" + rb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

