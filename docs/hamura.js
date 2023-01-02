/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Wa, u) {
  var P = 0, fa, y, Fa = (Wa + "").split("."), wa = (u + "").split("."), Ia = Fa.length;
  for (fa = wa.length; "0" === Fa[Ia - 1];) {
    --Ia;
  }
  for (; "0" === wa[fa - 1];) {
    --fa;
  }
  for (y = Ia < fa ? Ia : fa; P < y; ++P) {
    var Xa = Fa[P] - 0, k = wa[P] - 0;
    if (Xa !== k) {
      return Xa > k ? 1 : -1;
    }
  }
  return Ia > fa ? 1 : Ia === fa ? 0 : -1;
};
(function(Wa, u, P, fa, y, Fa, wa, Ia) {
  function Xa(v, K, Q) {
    Q = Fa(v.split(K)[1]);
    return 0 <= Q ? Q : 0;
  }
  function k(v, K) {
    return 0 <= v.indexOf(K);
  }
  function cb(v) {
    return k(v, "Linux armv") || k(v, "Linux aarch") || k(v, "Linux i686") || k(v, "Linux x86_64");
  }
  function B(v, K) {
    for (var Q in K) {
      if (Q === v) {
        return !0;
      }
    }
  }
  function f(v, K) {
    var Q = "", oa = -1, Ca;
    if (v = v.split(K)[1]) {
      for (; Ca = v.charCodeAt(++oa);) {
        if (48 <= Ca && 57 >= Ca || 46 === Ca) {
          Q += v.charAt(oa);
        } else {
          break;
        }
      }
      for (oa = Q.length; oa;) {
        if (46 === Q.charCodeAt(--oa)) {
          Q = Q.substr(0, oa);
        } else {
          break;
        }
      }
    }
    return Q;
  }
  function pa(v) {
    for (var K = arguments, Q = 1, oa = K[0], Ca; Q < K.length; ++Q) {
      0 > Ja(oa, Ca = K[Q]) && (oa = Ca);
    }
    return oa;
  }
  function Bb(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var Ja = Wa.conpare, b = fa.userAgent, U = fa.appVersion, mb = Fa(U) || 0, C = fa.platform, m = P.documentElement, Ua = m && m.style, Ga = P.documentMode, x = y.width;
  y = y.height;
  var O = u.HTMLAudioElement, ib = u.performance, nb = u.Int8Array, Ya = u.ontouchstart !== Ia, Za = f(U, "Version/") || f(b, "Version/"), Cb = u.operamini, Ka = !Cb && u.opera, Qb = Ka && (Ka.version && "function" === typeof Ka.version ? Ka.version() : pa(f(b, "Opera "), Za, mb)), Db = u.opr, ob = !Ka && (P.all || Ga);
  Ga = ob && (Ga ? Ga : u.XMLHttpRequest ? P.getElementsByTagName ? 7 : 4 : P.compatMode ? 6 : (0).toFixed ? 5.5 : u.attachEvent ? 5 : 4);
  m = !ob && m.msContentZoomFactor;
  var tb = !m && (u.chrome || u.chromium), db = !ob && function() {
    for (var v in Ua) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), pb = k(b, "UCWEB"), Ib = pb && f(b, " U2/"), Eb = pb && f(b, "; wds "), eb = f(b.split("_").join("."), "; iPh OS "), ha = f(b, "; Adr "), La = k(U, "YJApp-ANDROID"), Ma = k(C, "Android") || db && k(U, "Android") || La;
  ha = f(C, "Android ") || f(U, "Android ") || f(b, "Android ") || ha;
  var fb = k(C, "Linux"), ub = "MacIntel" === C && fa.standalone !== Ia, Qa = db && f(b, "Goanna/"), Na = !Qa && db && (f(b, "rv:") || f(b.substr(b.indexOf(") Gecko/") - 11), "; ")), Jb = f(b, "Firefox/"), H = f(b, "Opera/"), Z = u.FNRBrowser, $a = Xa(b, "AppleWebKit/"), gb = f(b, "Chrome/"), Kb = f(U, "Iron/"), Fb = f(b, "OPR/"), Lb = f(U, "KHTML/"), Mb = f(b.toLowerCase(), "iris");
  f(b, "FxiOS/");
  f(b, "CriOS/");
  f(b, "EdgiOS/");
  var vb = f(b, "Silk/"), jb = Xa(b, "SamsungBrowser/"), kb = !jb && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    K, Q = v.length; K = v[--Q];) {
      if (k(b, K)) {
        return 2 > Fa(Za) ? Za : 0.9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (Q = v.length; K = v[--Q];) {
      if (k(b, K)) {
        return Za;
      }
    }
  }(), qb = tb && 534.3 >= $a, lb = cb(C), ba = lb && !k(b, C) && cb(b);
  Ya = Ya && ($a || db) && ba || !ha && La;
  La = !!u.ReactNativeWebView;
  lb = lb && function() {
    for (var v in u) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Oa = (ba = u.puffinDevice) && ba.clientInfo;
  Oa = (ba = Oa && "iOS" === Oa.os && Oa.osVersion) && Oa.model;
  var wb = !Ga && P.registerElement, Nb = !Ga && P.execCommand, Ra = u.webkitCancelAnimationFrame, Ob = fb && wb && "11.0.696.34" === gb, xb = u._firefoxTV_playbackStateObserverJava, rb = Xa(b, "diordnA ");
  if ("Nitro" === C) {
    var q = 1;
  } else if ("Nintendo DSi" === C) {
    q = 2;
    var p = H;
  } else if ("New Nintendo 3DS" === C || k(b, "iPhone OS 6_0") && 320 === x && 240 === y) {
    q = 4, p = f(b, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === C) {
    q = 3, p = f(b, "Version/"), $a = 535;
  } else if ("Nintendo Swicth" === C) {
    q = 7, p = f(U, "NintendoBrowser/");
  } else if (u.wiiu) {
    q = 6;
    p = f(U, "NintendoBrowser/");
    var D = 15, I = f(U, "AppleWebKit/") || (Ra ? 536 : 534);
    p || (p = Ra ? 4 : 2, k(U, "Macintosh;") || k(U, "Windows NT") && k(U, "Touch"));
  } else if (Ka && Ka.wiiremote) {
    q = 5, p = f(b, "Wii; U; ; ");
  } else if (H = f(b, "PlayStation Vita ")) {
    q = 10, p = H;
  } else if (H = f(b, "(PlayStation Portable); ")) {
    q = 8;
    p = H;
    var yb = 3.3;
  } else if (H = f(b, "PLAYSTATION 3; ") || f(b, "PLAYSTATION 3 ")) {
    q = 11, p = H, 0 > Ja("4.10", H) && (D = 26, I = H);
  } else if (k(b, "Xbox One")) {
    q = 15, p = 1;
  } else if (k(b, "Xbox")) {
    q = 14, p = 1;
  } else if (2 === mb && k(b, "Sony/COM2/")) {
    q = 17;
    p = 2;
    yb = 3.4;
    var Da = !0;
  } else if (0 === C.indexOf("iP") || eb || ba || ub) {
    if (ba) {
      switch(p = ba, Oa.substr(0, 4)) {
        case "iPho":
          var Ea = 0;
          f(Oa, Ea);
          var la = !0;
          break;
        case "iPad":
          Ea = 1;
          f(Oa, Ea);
          var xa = !0;
          break;
        case "iPod":
          Ea = 2;
          f(Oa, Ea);
          var hb = !0;
      }
    } else {
      eb ? p = eb : (p = f(U.split("_").join("."), "OS "), B("isSecureContext", u), B("enableWebGL", u), B("sameOrigin", u));
      if (!p || Z) {
        p = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : fa.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : wa.isNaN ? 9.2 : u.SharedWorker ? ib && ib.now ? 8 : 8.4 : Nb ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : nb ? 4.3 : O ? 4.1 : 3.2;
      }
      var ya = x === 1.5 * y || 1.5 * x === y;
      0 === C.indexOf("iPhone") ? (Ea = 0, la = !0) : 0 === C.indexOf("iPad") || ub ? (Ea = 1, xa = !0) : 0 === C.indexOf("iPod") && (Ea = 2, hb = !0);
    }
    D = !ba && (fa.standalone || (xa || 12 > p) && B("webkitFullscreenEnabled", P) || 11 <= p && 13 > p && fa.mediaDevices) ? 16 : 17;
    q = 24;
    I = p;
  } else if (k(b, "Kobo")) {
    q = 18, D = 21, I = 2.2, Ma = !0;
  } else if (k(b, "EBRD")) {
    q = 19, D = 21, I = 2.2;
  } else if (H = f(b, "CrOS x86_64 ") || f(b, "CrOS aarch64 ") || f(b, "CrOS i686 ") || f(b, "CrOS armv7l ")) {
    q = 28, p = H;
  } else if (u.onmoztimechange !== Ia) {
    q = 29, p = 18.1 > Na ? "1.0.1" : 19 > Na ? 1.1 : 27 > Na ? 1.2 : 29 > Na ? 1.3 : 31 > Na ? 1.4 : 33 > Na ? 2 : 35 > Na ? 2.1 : 38 > Na ? 2.2 : 45 > Na ? 2.5 : 2.6, k(b, "Mobile") ? la = !0 : k(b, "Tablet") ? xa = !0 : k(b, "TV");
  } else if (u.palmGetResource) {
    q = 30, p = f(b, "webOS/") || f(b, "WEBOS") || f(b, "hpwOS/"), k(b, "webOS.TV") || k(b, "/SmartTV") || (la = !0);
  } else if (H = f(b, "Tizen ")) {
    q = 31, p = H, D = 24, I = jb, la = !0;
  } else if (H = f(b, "Windows Phone ") || f(U, "Windows Phone OS ") || Eb) {
    q = 23, p = H, la = !0;
  } else if (m && "ARM" === C) {
    q = 23, p = 10, la = !0;
  } else if (ob && k(U, "ZuneWP")) {
    q = 23, p = 11 === Ga ? 8.1 : 10 === Ga ? 8 : 9 === Ga ? 7.5 : 7 === Ga ? 7 : "?", la = !0;
  } else if (k(b, "FOMA;")) {
    q = 16, la = !0;
  } else if (k(b, "SoftBank;")) {
    q = 16, la = !0;
  } else if (k(b, "KFMUWI")) {
    var Aa = !0;
    p = 6.3;
    var qa = xa = !0;
  } else if (k(b, "KFKAWI")) {
    Aa = !0, p = 6, qa = xa = !0;
  } else if (k(b, "KFSUWI") || k(b, "KFAUWI") || k(b, "KFDOWI")) {
    Aa = !0, p = 5, qa = xa = !0;
  } else if (k(b, "KFGIWI")) {
    Aa = !0, p = 5, qa = xa = !0;
  } else if (k(b, "KFARWI") || k(b, "KFSAWA") || k(b, "KFSAWI")) {
    Aa = !0, p = 5 <= Fa(ha) ? 5 : 4, qa = xa = !0;
  } else if (k(b, "KFSOWI") || k(b, "KFTHWA") || k(b, "KFTHWI") || k(b, "KFAPWA") || k(b, "KFAPWI")) {
    Aa = !0, p = 3, qa = xa = !0;
  } else if (k(b, "KFOT") || k(b, "KFTT") || k(b, "KFJWA") || k(b, "KFJWI")) {
    Aa = !0, p = 2, qa = xa = !0;
  } else if (k(b, "Kindle Fire")) {
    Aa = !0, p = 1, qa = xa = !0;
  } else if (H = f(b, "Kindle/")) {
    q = 20, p = H, D = 21, I = 2.2;
  } else if (xb) {
    Aa = !0, p = ha || rb, qa = !0;
  } else if (k(b, "AmazonWebAppPlatform") || k(b, "; AFT")) {
    Aa = !0, p = ha, qa = !0;
  } else if (k(b, "MeeGo")) {
    q = 32;
  } else if (k(b, "Maemo")) {
    q = 33;
  } else if (0 === b.indexOf("Windows Mobile;") || Mb) {
    q = 22, Da = !0;
  } else if ("WinCE" === C) {
    q = 21, Da = !0;
  } else if (0 === C.indexOf("Win")) {
    q = "Win16" === C ? 35 : "Win32" === C ? 36 : "Win64" === C ? 37 : 0, p = f(b, "Windows NT ") || f(b, "Windows ");
  } else if (0 === C.indexOf("Mac")) {
    q = "Mac68K" === C ? 39 : "MacPowerPC" === C || "MacPPC" === C ? 38 : "MacIntel" === C ? 40 : 0;
    if (H = f(b.split("_").join("."), "Mac OS X ")) {
      p = H;
    }
    var Gb = !0;
  } else if (k(b, "BlackBerry") || k(b, "BB10")) {
    q = 34, p = Za, la = !0;
  } else if (k(b, "SunOS") || k(b, "Sun Solaris")) {
    q = 42;
  } else if (k(b, "FreeBSD")) {
    q = 43;
  } else if (k(b, "OpenBSD")) {
    q = 44;
  } else if (k(b, "NetBSD")) {
    q = 45;
  } else if (Ma && db) {
    k(b, "Android 4.4;") ? ya = {min:2.3} : 4 <= Fa(ha) ? ya = ha : ya = {min:2.2}, p = ya;
  } else if (Ma && Ka) {
    ha ? ya = ha : ya = {min:1.6}, p = ya, k(b, "Tablet") ? xa = !0 : la = !0;
  } else if (ha) {
    p = ha, Ma = !0;
  } else if (fb && Ya || La || lb) {
    var ra = !0;
    jb ? ya = {min:4.4} : tb && !qb || Db || Fb ? ya = {min:4} : (ya = ha = Ua.touchAction !== Ia ? {min:5} : wb ? 4.4 : nb ? fa.connection ? u.searchBoxJavaBridge_ || tb ? wa.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= $a ? 3 : 533 <= $a ? O ? 2.3 : 2.2 : 530 <= $a ? 2 : 1.5, kb && (D = 24, I = kb));
    p = ya;
    Ma = !0;
  } else {
    Ob ? (p = {min:5}, ra = Ma = !0) : fb && (k(b, "Ubuntu") ? q = 46 : (H = f(b, "Mint/")) ? (q = 47, p = H) : (H = f(b, "Fedora/")) ? (q = 48, p = H) : q = k(b, "Gentoo") ? 49 : 50);
  }
  Aa || Ma && ra && vb ? q = 27 : Ma && (q = q || 26);
  D || (qa = qa || Ma, Ka ? (D = qa || Da || la || xa ? 9 : 8, I = Qb) : ob ? (ya = Xa(U, "Trident/") + 4, D = Da || la || xa || hb ? 3 : Gb && 5 <= Ga ? 7 : 2, I = Ga) : m ? (D = 23 === q ? 6 : 5, I = f(U, "Edge/")) : Qa ? (D = 13, I = Qa) : db ? (D = qa ? 12 : 11, I = Na || Jb) : jb ? (D = 24, I = jb) : (H = yb || f(b, "NetFront/")) ? (D = 18, I = H) : (H = f(b, "iCab")) ? (D = 19, I = H) : (H = pa(f(b, "Opera Mini/"), f(b, "Opera Mobi/")) || Cb && Za) ? (D = 10, I = H, q || (k(b, "iPhone") ? Ea = 
  0 : k(b, "iPad") ? Ea = 1 : k(b, "iPod") && (Ea = 2), Ea && (q = 24))) : pb ? (D = 25, I = Ib) : Lb ? (D = 14, I = mb) : Ma && qb ? (D = 21, I = ha) : tb || Db || Fb ? (D = qa ? 22 : 20, I = gb || Kb) : Ma && wb ? (D = 23, I = 5 > Fa(ha) ? ha : gb) : Ma && (Za || ra) ? (D = 21, I = ha) : gb ? (D = qa ? 22 : 20, I = gb) : $a && (D = 15, I = $a));
  q && (Wa[2] = q, p && (Wa[3] = Bb(p)));
  D && (Wa[0] = D, I && (Wa[1] = Bb(I)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Wa, u, P, fa, y, Fa, wa, Ia, Xa, k, cb, B) {
  function f(l) {
    if (u[0] === l) {
      return C === C + "" ? wa(C) : C;
    }
  }
  function pa(l) {
    var E = u[3];
    if (u[2] === l) {
      return E === E + "" ? wa(E) : E;
    }
  }
  function Bb(l, E, ca) {
    l + "" === l && ("a" === l.charAt(2) && (ca = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > x ? 117 : .9 > O || 9 > m || 9 > x || Ua ? 1 : 132 : parseInt(l, 16));
    ca && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (E || 2));
  }
  var Ja = y.body, b = Ja.style, U, mb, C = u[1], m = f(2) || f(3), Ua = f(7), Ga = f(5) || f(6), x = f(8) || f(9), O = f(11) || f(12), ib = O && 0 <= u.conpare(C, "1.9.1"), nb = f(13), Ya = f(15), Za = f(16) || f(17), Cb = f(10) || f(25), Ka = f(20) || f(22), Qb = f(23), Db = f(21), ob = f(24), tb = Ka || Qb || Db || ob, db = Ka && wa(Fa.userAgent.split("Edg/")[1]);
  Fa = wa(Fa.appVersion.split("Trident/")[1]) + 4;
  var pb = pa(35) || pa(36) || pa(37), Ib = (Ua ? "ie5mac" : 5.5 > m ? "ie5win" : 6 > m ? "ie55" : 10 > m ? "ie" + (m | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : O && !ib ? 1.4 <= O ? "gck19" : 1.3 <= O ? "gck13" : 1 <= O ? "gck12" : .9 <= O ? "gck09" : .8 <= O ? "gck08" : "gck07" : "modern") + ".css";
  pa(1) || pa(2) || pa(3) || pa(4) || pa(8) || pa(9) || pa(10);
  var Eb, eb, ha, La = 8 > m || 7.2 > x ? !1 : B, Ma = b.transform !== B ? "transform" : b["-o-transform"] !== B ? "-o-transform" : b["-ms-transform"] !== B ? "-ms-transform" : b.MozTransform !== B ? "-moz-transform" : b["-webkit-transform"] !== B ? "-webkit-transform" : "", fb = [], ub = [], Qa = [], Na, Jb, H;
  525 > Ya || 10 > x || O && !ib || 2.2 > Db || f(25) || 10 > f(3) || pa(32) || pa(30) || pa(3);
  var Z, $a, gb, Kb, Fb, Lb, Mb;
  (function() {
    function l() {
      for (var L, a = 0, c = +new cb(); a < aa.length;) {
        c < aa[0].t ? ++a : (L = aa.splice(a, 1)[0], L.f(L.p));
      }
      sa = aa.length ? Xa(l, da) : 0;
    }
    function E() {
      for (var L, a = 0; a < ia.length; ++a) {
        L = ia[a], L.f();
      }
    }
    function ca() {
      ta && (ta = clearInterval(ta));
    }
    function va() {
      sa && (sa = k(sa));
    }
    gb = function(L) {
      ia.length || (ta = setInterval(E, ma));
      ia.push({f:L, l:++za});
      return za;
    };
    Kb = function() {
      ta && (ca(), ta = setInterval(E, ma));
    };
    Fb = ca;
    var ia = [], ma = 500, za = 0, ta;
    if (5 > m || Ua) {
      P._wdb_onlooptimer = E, E = "_wdb_onlooptimer()";
    }
    Z = function(L, a, c) {
      aa.length || (sa = Xa(l, da));
      aa.push({f:L, p:a, l:++X, t:+new cb() + (da < c ? c : da)});
      return X;
    };
    $a = function(L) {
      for (var a = aa.length, c; c = aa[--a];) {
        if (c.l === L) {
          aa.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Lb = function() {
      sa && (va(), sa = Xa(l, da));
    };
    Mb = va;
    var aa = [], da = 16, X = 0, sa;
    if (5 > m || Ua) {
      P._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var vb, jb, kb, qb, lb, ba, Oa, wb, Nb, Ra, Ob, xb, rb, q, p, D, I, yb, Da, Ea;
  (function() {
    function l(a, c, h) {
      var r = ["<", a], t = 1, A, ka;
      if (c) {
        for (A in c) {
          var J = c[A];
          if (null != J && "" !== J) {
            if ("style" === A) {
              r[++t] = ' style="';
              for (ka in J) {
                for (var Sa = ++t, ja, R = [], g = ka.split(""), d = g.length; d;) {
                  ja = g[--d], "A" <= ja && "Z" >= ja && (ja = "-" + ja.toLowerCase()), R[d] = ja;
                }
                r[Sa] = R.join("") + ":" + J[ka] + ";";
              }
              r[++t] = '"';
            } else {
              "className" === A && (A = "class"), r[++t] = " " + A + '="' + J + '"';
            }
          }
        }
      }
      r[++t] = ">";
      null != h && (X && "font" !== a ? r[++t] = "<FONT>" + E(h) + "</FONT>" : r[++t] = E(h));
      r[++t] = "</" + a + ">";
      return r.join("");
    }
    function E(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function ca(a) {
      var c = a.split("-"), h = c.length;
      if (2 > h) {
        return a;
      }
      for (; 1 < h;) {
        a = c[--h], c[h] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return c.join("");
    }
    function va(a) {
      a = "*" === a && 6 > m ? "*" !== a ? y.all.tags(a.toUpperCase()) : y.all : y.getElementsByTagName(a);
      for (var c = [], h = 0, r = a.length; h < r; ++h) {
        c[h] = a[h];
      }
      return c;
    }
    function ia(a) {
      return X ? a.parentElement : a.parentNode;
    }
    function ma(a, c, h, r, t, A) {
      if (X) {
        var ka = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var J = qb(2 > a ? kb(c) : c);
        J = 2 > a ? J.indexOf(c) + a : J.length;
        c.insertAdjacentHTML(ka, l(h, r, t));
        c = qb(c)[J];
        null != t && ("font" === h ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (sa) {
        c = y.createElement(l(h, r));
      } else {
        c = A ? y.createElementNS("http://www.w3.org/2000/svg", h) : y.createElement(h);
        if (r) {
          for (ka in r) {
            if ((a = r[ka]) || 0 === a) {
              switch(ka) {
                case "class":
                case "className":
                  p(c, a);
                  break;
                case "style":
                  A = c.style;
                  for (J in a) {
                    A[J] = a[J];
                  }
                  break;
                default:
                  rb(c, ka, a);
              }
            }
          }
          !x || "a" !== h && "A" !== h || !r.href || r["tag-index"] || r.tagIndex || rb(c, "tagIndex", "-0");
        }
        L || null != t && za(c, t);
      }
      return c;
    }
    function za(a, c) {
      if (X) {
        return ma(2, a, "font", B, c);
      }
      var h = y.createTextNode("" + c);
      a.appendChild(h);
      return h;
    }
    function ta(a, c) {
      9 > m ? a.className = c : a.setAttribute("class", c);
    }
    function aa(a, c) {
      return -1 !== (" " + a.className + " ").indexOf(" " + c + " ");
    }
    function da(a, c, h) {
      if (8 > x || 5.5 > m) {
        c = ca(c);
      }
      a.style[c] = h;
    }
    var X = 5 > m;
    U = va("html")[0];
    mb = va("head")[0];
    vb = va;
    jb = function(a) {
      var c = [], h = 0, r, t = -1;
      if (9 > m || !y.getElementsByClassName) {
        var A = 6 > m ? y.all : y.getElementsByTagName("*");
      } else {
        var ka = !0;
        A = y.getElementsByClassName(a);
      }
      for (r = A.length; h < r; ++h) {
        var J = A[h];
        if (ka || (X || 1 === J.nodeType) && aa(J, a)) {
          c[++t] = J;
        }
      }
      return c;
    };
    kb = ia;
    qb = function(a) {
      a = X ? a.children : a.childNodes;
      for (var c = [], h = a.length; h;) {
        c[--h] = a[h];
      }
      return c;
    };
    lb = function(a) {
      var c = !(7.03 < x && 7.2 > x) && a.children;
      a = c ? c : a.childNodes;
      for (var h = [], r = a.length, t = -1, A; r;) {
        if (A = a[--r], c || 1 === A.nodeType) {
          X && "FONT" === A.tagName || (h[++t] = A);
        }
      }
      return h;
    };
    ba = function(a, c, h, r, t) {
      c = ma(2, a, c, h, r, t);
      X || (a.appendChild(c), L && null != r && za(c, r));
      return c;
    };
    Oa = function(a, c, h, r, t) {
      c = ma(0, a, c, h, r, t);
      X || (ia(a).insertBefore(c, a), L && null != r && za(c, r));
      return c;
    };
    wb = za;
    Nb = function(a, c) {
      if (X) {
        return ma(0, a, "font", B, c);
      }
      var h = y.createTextNode("" + c);
      kb(a).insertBefore(h, a);
      return h;
    };
    Ra = function(a) {
      X ? a.outerHTML = "" : kb(a).removeChild(a);
    };
    var sa = 9 > m, L = sa;
    Ob = function(a) {
      return a.tagName.toUpperCase();
    };
    xb = function(a, c) {
      if (8 > x || 5.5 > m) {
        c = ca(c);
      }
      var h = a.getAttribute(c);
      return x && "tabIndex" === c ? "-0" === h ? "" : "" === h ? "-1" : h : h || "";
    };
    rb = function(a, c, h) {
      if (x && "tab-index" === c) {
        "-1" === h ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", h);
      } else {
        if (8 > x || 5.5 > m) {
          c = ca(c);
        }
        a.setAttribute(c, h);
      }
    };
    q = function(a, c) {
      if (x && "tab-index" === c) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > x || 5.5 > m) {
          c = ca(c);
        }
        a.removeAttribute(c);
      }
    };
    p = ta;
    D = aa;
    I = function(a, c) {
      var h;
      if (!aa(a, c)) {
        if (h = a.className) {
          h += " ";
        }
        ta(a, h + c);
      }
    };
    yb = function(a, c) {
      if (aa(a, c)) {
        var h = a.className.split(" ");
        h.splice(h.indexOf(c), 1);
        ta(a, h.join(" "));
      }
    };
    Da = da;
    Ea = function(a, c) {
      var h, r = -1, t;
      if (5.5 > m) {
        if (h = 5.5 > m ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (h = h.split(";"); t = h[++r];) {
            da(a, t.split(":")[0], "");
          }
        }
        if (c) {
          for (r = -1, h = c.split(";"); t = h[++r];) {
            var A = t.split(":")[0];
            da(a, A, t.substr(A.length + 1));
          }
        }
      } else if (7.1 > x) {
        if (a.setAttribute("style", ""), c) {
          for (h = c.split(";"); t = h[++r];) {
            t = t.split(":"), da(a, t[0], t[1]);
          }
        }
      } else {
        9 > x || 1 > O ? c ? a.setAttribute("style", c) : a.removeAttribute("style") : a.style.cssText = c;
      }
    };
  })();
  var la, xa, hb, ya, Aa, qa, Gb, ra, v;
  (function() {
    function l() {
      return J ? ja ? 2 : Sa ? 3 : 1 : 0;
    }
    function E(g) {
      xa(P, "load", E);
      E = B;
      va(fb, g, !0);
      hb = fb = B;
    }
    function ca(g, d) {
      Aa(function() {
        var n = aa(g);
        d(n);
        n.addListener(d);
        return !0;
      });
    }
    function va(g, d, n) {
      for (var e = 0; e < g.length; ++e) {
        !0 === g[e](d) && (g.splice(e, 1), --e);
      }
      n && (g.length = 0);
    }
    function ia(g, d, n) {
      fb || X.length || Z(ma);
      X.push(g, d, n);
    }
    function ma() {
      var g = X, d;
      for (X = []; d = g.shift();) {
        va(d, g.shift(), g.shift());
      }
    }
    function za(g) {
      var d = g || event;
      g = L[d.type];
      var n = -1, e, w;
      m ? (d.target = d.srcElement, d.preventDefault = o, d.stopPropagation = function() {
        d.cancelBubble = !0;
      }) : c && (d.j = d.stopPropagation, d.stopPropagation = function() {
        w = !0;
      });
      for (; e = g[++n];) {
        e.i === this ? (this.g = e.h, m && (d.currentTarget = this), this.g(d), m ? (this.g = fa, this.g = B) : delete this.g) : 7.2 > x && this === y && e.i === P && (P.g = e.h, P.g(d), delete P.g);
      }
      if (m) {
        return d.preventDefault = d.stopPropagation = fa, d.preventDefault = d.stopPropagation = B, d.returnValue;
      }
      c && (d.defaultPrevented && "click" === d.type && "A" === d.target.tagName && (r = !0), w && !r && d.j(), d.j = d.stopPropagation = B);
      function o() {
        d.returnValue = !1;
      }
      o = !1;
    }
    function ta() {
      var g = 9 === da.offsetWidth;
      Gb !== g && ia(ub, Gb = g);
    }
    var aa = P.matchMedia, da, X = [];
    fb.push(function() {
      ca = B;
      da = ba(Ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      hb(function() {
        X.length && Z(ma);
      });
    });
    la = function(g, d, n, e) {
      if (h) {
        g.addEventListener(d, n, e ? sa ? e : e.capture || !0 === e : !1);
      } else {
        var w = {i:g, h:n};
        e = L[d];
        var F = "on" + d, G, M;
        if (e) {
          for (G = e.length; M = e[--G];) {
            if (M.i === g && M.h === n) {
              return;
            }
          }
          L[d].push(w);
        } else {
          L[d] = e = [w], a || (d = g[F], "function" === typeof d && d !== za && e.unshift({i:g, h:d}));
        }
        a ? g.attachEvent(F, za) : g[F] = za;
      }
    };
    xa = function(g, d, n, e) {
      if (h) {
        g.removeEventListener(d, n, e ? sa ? e : e.capture || !0 === e : !1);
      } else {
        e = L[d];
        d = "on" + d;
        var w, F, G;
        if (e) {
          for (w = e.length; F = e[--w];) {
            F.i === g && (F.h === n ? e.splice(w, 1) : G = !0);
          }
          G || (a ? g.detachEvent(d, za) : m ? (g[d] = fa, g[d] = null) : delete g[d]);
        }
      }
    };
    var sa = !m && !Ua && (new Ia('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), L = {}, a = !1, c = 525.13 > Ya, h = !c && !Ua && P.addEventListener, r;
    c && U.addEventListener("click", function(g) {
      if (r) {
        return r = !1, g.preventDefault(), !1;
      }
    });
    hb = function(g) {
      fb.push(g);
    };
    ya = function(g) {
      t && t.push(g);
    };
    var t = [];
    if (419.3 >= Ya) {
      var A = function() {
        if (A) {
          var g = y.readyState;
          "loaded" === g || "complete" === g ? (A = B, E()) : Z(A);
        }
      };
      Z(A);
    } else {
      la(P, "load", E);
    }
    m || .9 <= O && 1.8 > O ? la(P, "unload", function(g) {
      va(t, g, !0);
    }) : t = B;
    Aa = function(g) {
      ub.push(g);
    };
    hb(function() {
      ta();
      gb(ta);
    });
    qa = function(g) {
      Qa && Qa.push(g);
    };
    var ka = 60 > O || nb, J, Sa, ja;
    if (89 <= O || 89 <= Ka || pb && 79 <= db || aa && (aa("(forced-colors:none)").matches || aa("(forced-colors:active)").matches)) {
      v = !0, ca("(forced-colors:active)", function(g) {
        J = g.matches;
        ra = l();
        ia(Qa, ra);
      });
    } else if (10 <= m || Ga || pb && db) {
      v = !0, ca("(-ms-high-contrast:black-on-white)", function(g) {
        J = Sa = g.matches;
        ra !== l() && (ra = l(), ia(Qa, ra));
      }), ca("(-ms-high-contrast:white-on-black)", function(g) {
        J = ja = g.matches;
        ra !== l() && (ra = l(), ia(Qa, ra));
      }), ca("(-ms-high-contrast:active)", function(g) {
        J = g.matches;
        ra !== l() && (ra = l(), ia(Qa, ra));
      });
    } else if (pb && (m || O && 0 <= u.conpare(C, "1.8.1") || nb)) {
      var R = function() {
        function g(e, w) {
          if (w && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var F = e.split("(")[1].split(",");
          return wa(F[0]) + wa(F[1]) + wa(F[2]);
        }
        var d = y.defaultView;
        var n = d ? d.getComputedStyle(da, null) : da.currentStyle;
        d = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        d && (J = "#123456" !== d && "rgb(18,52,86)" !== d, Sa = g(d) < g(n, !0), ja = g(d) > g(n, !0), ra !== l() && (ra = l(), ia(Qa, ra, ka)));
      };
      Aa(function(g) {
        if (g) {
          return Da(da, "color", "#123456"), Da(da, "backgroundColor", "#123456"), ka ? (R(), Qa = B) : gb(R), R = B, !0;
        }
      });
    } else {
      Qa = l = B;
    }
  })();
  (function() {
    function l(e) {
      c(e);
      d && !e && Ra(d);
      c = h = r = t = A = ka = ja = R = g = n = d = B;
    }
    function E(e) {
      y.fonts.load('1.6em "' + e + '"').then(function() {
        var w;
        (w = ia(h)) ? Z(l, w) : va(!0);
      }, function() {
        La !== B ? ma(La) : Na(ma);
      });
    }
    function ca(e) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (Sa = new cb() - 0, !1) : e < new cb() - Sa;
    }
    function va(e) {
      var w;
      e && (Sa = new cb() - 0);
      (w = ia(h)) ? l(w) : ca(J) ? ja || da ? l(0) : La !== B ? ma(La) : Na(ma) : Z(va);
    }
    function ia(e) {
      var w = 0, F = -1, G = 0;
      if (!n) {
        var M = -1;
        var S;
        R = ba(Ja, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, L);
        for (n = {}; S = a[++M];) {
          Da(R, "fontFamily", S), n[S] = R.offsetWidth;
        }
      }
      for (5 > m ? R || (R = ba(Ja, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, L)) : Ja.appendChild(R); M = a[++F];) {
        if (Da(R, "fontFamily", '"' + e + '",' + M), R.offsetWidth !== n[M]) {
          w = 1;
          break;
        }
      }
      !m && w && A && (R.innerHTML = A, e = R.offsetWidth, R.innerHTML = ka, G = e === R.offsetWidth ? 1 : 0, R.innerHTML = L);
      Ra(R);
      5 > m && (R = B);
      return w + G;
    }
    function ma(e) {
      e ? (ja = !0, za(!0)) : l(0);
    }
    function za(e) {
      var w;
      if (r) {
        for (w in e && (Sa = new cb() - 0), r) {
          ia(w) ? (g = ba(Ja, "div", {"aria-hidden":"true", className:t, id:t}), d = ba(mb, "link", {type:"text/css", rel:"stylesheet", href:r[w]}), Z(ta, !0)) : ca(sa) ? (delete r[w], Z(za, !0)) : Z(za);
          return;
        }
      }
      l(0);
    }
    function ta(e) {
      e && (Sa = new cb() - 0);
      1 < g.offsetWidth ? (Ra(g), J = sa, Z(va, !0)) : ca(J) ? 528 > Ya ? (Ra(g), J = sa, Z(va, !0)) : (Ra(g), l(0)) : Z(ta);
    }
    ub.splice(0, 0, function() {
      if (Gb) {
        ha = 8 <= m || Ga || 9.5 <= x || ib || nb || 522 <= Ya || 3 <= Za || Cb || tb ? 3 : 7.2 <= x ? 2 : 6 <= x || O ? 1 : 0;
        if (!ha && !m && !Ua) {
          var e = ba(Ja, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          ha = 6 <= e.offsetWidth ? 2 : 0;
          Ra(e);
        }
        return !0;
      }
    });
    Na = !1 === La ? function(e) {
      Z(e, La);
    } : function(e) {
      function w(M) {
        G = $a(G);
        La = M;
        F.onload = F.onerror = fa;
        Z(e, M);
      }
      if (La !== B) {
        Z(e, La);
      } else if (8 > m) {
        Z(e, !1);
      } else {
        var F = new Image(), G = Z(function() {
          G && w(!1);
        });
        F.onerror = function() {
          w(!1);
        };
        F.onload = function() {
          w(1 === F.width * F.height);
        };
        F.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > m && hb(function() {
      var e = ba(Ja, "div");
      Ea(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Eb = 1 < e.offsetHeight;
      Ea(e, "");
      Ra(e);
    });
    Jb = function(e, w) {
      function F() {
        if (M || !S || G.complete) {
          var N = !!G.width;
          eb = eb || N;
          Z(e, N);
          G.onerror = G.onload = fa;
          G = e = B;
        } else {
          --S, Z(F);
        }
      }
      var G = new Image(), M, S = 99;
      G.onerror = function() {
        M = !0;
      };
      G.onload = function() {
        M = !0;
      };
      G.src = w;
      Z(F);
    };
    H = function(e, w, F, G, M, S, N) {
      c = e;
      h = w;
      r = F;
      t = G;
      A = M;
      ka = S;
      J = N || X;
      aa ? Z(l, 0) : !y.fonts || 603 > Ya ? va(!0) : E(h);
    };
    var aa = 525 > Ya || 10 > x || O && !ib || 2.2 > f(21) || f(25) || 10 > f(3) || pa(32) || pa(30) || pa(3), da = 9 > m || 2 > Ka || 12 > x, X = 5E3, sa = 100, L = "mmmmmmmmmmlli", a = ["sans-serif", "serif"], c, h, r, t, A, ka, J, Sa, ja, R, g, d, n;
  })();
  var K = String.fromCharCode, Q = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", K(960), ")", "(", K(234), K(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 
  "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", K(9824), "\u2190", K(9829), K(9830), K(9827), K(956), "\u03a9", "\u2193", "\u2192", "%", K(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", K(9619)];
  b = (9 === m || O && 0 <= u.conpare(C, "1.8.1") || nb) && !v;
  var oa = [], Ca, Va, Hb = 7.2 > x ? function() {
    Ca = !Ca;
    for (var l = -1, E; E = oa[++l];) {
      -1 !== E.className.indexOf("pbAlp") ? Da(E, "display", Ca ? "" : "none") : (I(E, Ca ? "pbChrCS" : "pbChr00"), yb(E, Ca ? "pbChr00" : "pbChrCS"));
    }
  } : b ? function() {
    Ca = !Ca;
    for (var l = -1, E; E = oa[++l];) {
      Da(E, "opacity", Ca ? 1 : 0);
    }
  } : B;
  var Rb = Wa.startBlinkingIfCursor = function(l) {
    Hb ? D(l, "pbChrCS") && (Va || !x && !ra || (Va = setInterval(Hb, 400)), -1 === oa.indexOf(l) && oa.push(l)) : oa = B;
  };
  Wa.stopBlinkingIfCursor = function(l) {
    Hb && (l = oa.indexOf(l), 0 <= l && (oa.splice(l, 1), !oa.length && Va && (clearInterval(Va), Va = 0)));
  };
  b && qa(function(l) {
    l ? Va || (Va = setInterval(Hb, 400)) : Va && (clearInterval(Va), Va = 0);
  });
  Hb && ya(function() {
    Va && clearInterval(Va);
  });
  v || qa(function(l) {
    l ? (rb(U, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Ma || 9 === m || 5.5 <= m && 9 > m && Eb) && I(U, "jsCanRotate")) : (q(U, "forced-colors"), yb(U, "jsCanRotate"));
  });
  (function() {
    function l(d) {
      (A = d) ? ia() : eb ? va(!0) : eb !== B ? ia() : Jb(va, ka);
    }
    function E() {
      E = B;
      H(l, "PB-100", {"PB-100_canTTF":ab + "pbFont/ttf.css", "PB-100_canWOFF":ab + "pbFont/woff.css", "PB-100_canEOT":ab + "pbFont/eot.css", "PB-100_canSVG":ab + "pbFont/svg.css"}, "pbFont-testCssReady", L, "i", 5E3);
    }
    function ca(d) {
      this.focus();
      d.preventDefault();
      d.stopPropagation();
    }
    function va(d) {
      d && I(Ja, "pbList-noWebFont");
      ia();
    }
    function ia() {
      for (l = H = B; t.length;) {
        ma(t.shift(), t.shift());
      }
    }
    function ma(d, n) {
      function e(N) {
        N = qb(N);
        for (var z = -1, Y; Y = N[++z];) {
          switch(Y.nodeType) {
            case 1:
              e(Y);
              break;
            case 3:
              Y.data && F(Y.data) && G.push(Y);
          }
        }
      }
      function w(N) {
        var z = N.children, Y = 0, bb = z.length;
        if (bb) {
          for (; Y < bb; ++Y) {
            w(z[Y]);
          }
        } else {
          (z = N.innerText) && F(z) && G.push(N);
        }
      }
      function F(N) {
        return N.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var G = [], M;
      if (l) {
        -1 === t.indexOf(d) && (t.push(d, n), J && E && E());
      } else {
        var S = t.indexOf(d);
        0 <= S && t.splice(S, 2);
        for (5 > m ? w(d) : e(d); M = G.shift();) {
          S = 5 > m ? M.innerText : M.data, 2 !== A && (S = S.split(L).join(X)), n ? 5 > m ? M.innerText = S : M.data = S : za(S.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(sa).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(da).split("&amp;").join("&"), M);
        }
      }
    }
    function za(d, n) {
      function e(na, T) {
        for (var Ha = ""; T;) {
          T & 1 && (Ha += na), T >>= 1, na += na;
        }
        return Ha;
      }
      function w(na, T, Ha) {
        for (var zb, Ub = -1, Sb, Tb; zb = T[++Ub];) {
          for (; 0 <= (Sb = na.indexOf(zb));) {
            Tb = zb.length, na = na.substr(0, Sb) + e(Ha, Tb) + na.substr(Sb + Tb);
          }
        }
        return na;
      }
      function F(na) {
        var T = wa(na), Ha = "" + T;
        return 0 < T && T === T | 0 && (T = na.indexOf(Ha) + Ha.length, T <= na.length) ? T : 0;
      }
      var G = " area line str cmd fnc syb".split(" "), M = 5 > m || 1 === n.nodeType, S = [], N = "", z, Y = -1, bb, sb, Pa;
      if (M) {
        if (R) {
          var Pb = n.style.visibility;
          Da(n, "visibility", "hidden");
        }
        n.innerHTML = "";
      }
      if (g) {
        var Ab = n;
        n = y.createDocumentFragment();
      }
      if (function(na) {
        var T = na.indexOf("P");
        if (-1 === T) {
          return !1;
        }
        T = wa(na.charAt(T + 1));
        return 0 <= T && 9 >= T;
      }(d)) {
        N = e("+", d.length);
      } else {
        0 <= (z = F(d)) && (N = e("|", z), Y = z, --Y);
        for (; z = d.charAt(++Y);) {
          z === da || bb ? (N += "~", z === da && (bb = !bb)) : N += z;
        }
        N = w(N, r, "^");
        N = w(N, c, "{");
        N = w(N, h, "}");
      }
      Y = 0;
      for (bb = d.length; Y < bb; ++Y) {
        z = d.charAt(Y);
        var V = z === a;
        var ea = " " === z;
        z = V ? " " : z;
        var W = N.charAt(Y);
        var Ta = (sb = Ba) && V;
        var Ba = "|" === W;
        W = G["+|~{}^".indexOf(W) + 1];
        "\n" !== z ? (A || !eb ? (2 === A && d.substr(Y, 2) === L && (z = L, ++Y), W = ea && "str" === W ? "pbList-strsp" : V ? "" : !ea && W ? "pbList-" + W : "") : (V = Q.indexOf(z), V = -1 === V ? "" : Q.indexOf(z).toString(16).toUpperCase(), V = (V = 1 === V.length ? "0" + V : V) ? "pbChr" + V : "", W = ea && "str" === W ? "pbList-strsp" : ea || !V ? "" : W ? (V ? V + " " : "") + "pbList-" + W : V), V = B, Ta ? (z = 6 <= m && 8 > m ? " " : a, W = "") : Ba && (O && !ib || 9.5 > x) ? (Ba && !sb && 
        (Pa = 4 - (wa(d.substr(Y)) + "").length), 7.5 > x ? V = ja ? "position:relative;top:-4px;left:" + 12 * Pa + "px" : {position:"relative", top:"-4px", left:12 * Pa + "px"} : V = ja ? "position:relative;left:" + 12 * Pa + "px" : {position:"relative", left:12 * Pa + "px"}) : ea && 7.5 > x && (W = "pbList-strsp"), ja ? S.push("<font" + (W ? ' class="' + W + '"' : "") + (V ? ' style="' + V + '"' : "") + ">" + z + "</font>") : M || g ? ba(n, "font", {"class":W, style:V}, z) : Oa(n, "font", {"class":W, 
        style:V}, z)) : (sb = Ba = !1, ja ? S.push(z) : M || g ? wb(n, z) : Nb(n, z));
      }
      if (M) {
        ja ? n.innerHTML = S.join("") : g && Ab.appendChild(n), R && Da(n, "visibility", Pb);
      } else {
        if (ja) {
          G = y.createElement("font");
          for (G.innerHTML = S.join(""); S = G.firstChild;) {
            n.parentNode.insertBefore(S, n);
          }
          Ra(n);
        } else {
          g ? Ab.parentNode.replaceChild(n, Ab) : Ra(n);
        }
      }
    }
    Aa(function(d) {
      if (d) {
        d = jb("pbChrCS");
        for (var n = 0, e = d.length; n < e; ++n) {
          Rb(d[n]);
        }
        return !0;
      }
    });
    var ta = [], aa = O && 0 > u.conpare(C, "0.9.9");
    Aa(function(d) {
      function n(ea) {
        var W = xb(ea, "pbTip");
        if (W) {
          var Ta = W.charAt(0);
          var Ba = "_" === Ta;
          W = (Ba ? W.charAt(2) : Ta).toUpperCase().charCodeAt(0) - 65;
          S ? ba(ea, "div", {style:{left:7 * W + 3 + "px"}}) : (Ta = xb(ea, "title"), q(ea, "pbTip"), q(ea, "title"), Ba = ba(ea, "div", {className:"pbTip" + (Ba ? "Btm" : ""), style:{width:Ta.length + w + "em", left:7 * W - (aa ? 0 : 5) + "px"}}, Ta), Ba = ba(Ba, "div"), .9 <= O && aa && Da(Ba, "left", "2px"));
        }
        M && 0 <= ea.className.indexOf("pbColor") && ba(ea, "u");
      }
      function e(ea, W) {
        var Ta = xb(ea, "pbGhst"), Ba = ea.className, na = Ba.split("pbCsr")[1] || "", T = Ba.split("pbAlp")[1] || "";
        if ("CS" === Ta) {
          var Ha = "_";
        } else {
          Ha = Ta, 3 === Ha.length && (Ha = Ha.substr(0, 2)), Ha = Q[parseInt(Ha, 16)] || "~";
        }
        var zb;
        na = na.split(" ")[0];
        if (T = wa(T.split(" ")[0])) {
          F && (Ba = Ba.split("pbChr")[1].split(" ")[0], Da(ea, "backgroundPosition", Bb(Ba, 2, Pb) + "px " + -24 * (10 - T) + "px")), !W && G && Oa(ea, "a").appendChild(ea);
        }
        Ta && (T = 10 - T, F && (zb = {backgroundPosition:Bb(Ta, 2, Pb) + "px " + -24 * (10 - T) + "px"}), q(ea, "pbGhst"), Y = Oa(ea, "b", {className:"pbChr" + Ta + " pbCsr" + na + " pbAlp" + T, style:zb}, Ha), Rb(Y));
        Rb(ea);
      }
      if (d) {
        var w = 6 > m ? 2 : 0, F = 7.2 > x || .9 > O || Ua, G = 1.1 === O, M = 1.4 > O;
        d = vb("SAMP");
        var S = 8 === m, N = ha, z, Y, bb, sb, Pa;
        Eb && I(Ja, "pbLCD-AX");
        if (d.length) {
          for (bb = -1; z = d[++bb];) {
            if (D(kb(z), "pbLCD")) {
              var Pb = D(z, "PB-120") || D(z, "FX-795P");
              var Ab = lb(z);
              for (z = Ab.length; Pa = Ab[--z];) {
                switch(Ob(Pa)) {
                  case "A":
                    (2 > N || S) && n(Pa);
                    if (2 > N) {
                      var V = lb(Pa);
                      for (sb = V.length; sb;) {
                        e(V[--sb], !0);
                      }
                    }
                    Cb ? rb(Pa, "href", "javascript:void(0)") : (la(Pa, "click", ca), ta.push(Pa));
                    break;
                  case "B":
                    2 > N && e(Pa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ya(function() {
      for (var d; d = ta.shift();) {
        xa(d, "click", ca);
      }
    });
    6 === m && (new Ia("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
    var da = Q[7], X = Q[30], sa = Q[113], L = K(8337) + K(8331), a = K(160);
    K(8194);
    var c = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), r = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + X + Q[31]).split(""), t = [], A, ka, J;
    if (.9 <= O && 0 >= u.conpare(C, "0.9.1")) {
      I(U, "pbLCD-gecko09To091");
      var Sa = !0;
    }
    Aa(function(d) {
      if (d) {
        ka = ab + "pbFont/x3mask" + (Sa ? ".gecko0.9.1.gif" : ".png");
        d = vb("*");
        for (var n = -1, e; e = d[++n];) {
          D(e, "pbList") ? ma(e) : D(e, "pbFont") && ma(e, !0);
        }
        t.length && E();
        return !0;
      }
    });
    var ja = !1, R = 8 > x, g = !ja && !R && !(6 > m) && y.createDocumentFragment && !!Ja.replaceChild;
    Wa.prettify = ma;
  })();
  b = y.scripts || vb("script");
  var ab = b[b.length - 1].src.split("/");
  --ab.length;
  (ab = ab.join("/")) && (ab += "/");
  6.1 > Za && la(P, "scroll", Kb);
  ya(Fb);
  6.1 > Za && la(P, "scroll", Lb);
  ya(Mb);
  10 > m && (11 !== Fa || 5 !== m) || (9 > x || 1 > O || !Ua && !P.addEventListener ? y.write('<link href="' + ab + Ib + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : hb(function() {
    ba(mb, "link", {href:ab + "" + Ib, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

