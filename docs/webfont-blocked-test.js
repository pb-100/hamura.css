/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var x;
ua = [];
ua.conpare = function(Va, y) {
  var M = 0, aa, C, Ia = (Va + "").split("."), bb = (y + "").split("."), na = Ia.length;
  for (aa = bb.length; "0" === Ia[na - 1];) {
    --na;
  }
  for (; "0" === bb[aa - 1];) {
    --aa;
  }
  for (C = na < aa ? na : aa; M < C; ++M) {
    var ta = Ia[M] - 0, m = bb[M] - 0;
    if (ta !== m) {
      return ta > m ? 1 : -1;
    }
  }
  return na > aa ? 1 : na === aa ? 0 : -1;
};
(function(Va, y, M, aa, C, Ia, bb, na) {
  function ta(A, da, ba) {
    ba = Ia(A.split(da)[1]);
    return 0 <= ba ? ba : 0;
  }
  function m(A, da) {
    return 0 <= A.indexOf(da);
  }
  function Ob(A) {
    return m(A, "Linux armv") || m(A, "Linux aarch") || m(A, "Linux i686") || m(A, "Linux x86_64");
  }
  function cb(A, da) {
    for (var ba in da) {
      if (ba === A) {
        return !0;
      }
    }
  }
  function r(A, da) {
    var ba = "", za = -1, Ja;
    if (A = A.split(da)[1]) {
      for (; Ja = A.charCodeAt(++za);) {
        if (48 <= Ja && 57 >= Ja || 46 === Ja) {
          ba += A.charAt(za);
        } else {
          break;
        }
      }
      for (za = ba.length; za;) {
        if (46 === ba.charCodeAt(--za)) {
          ba = ba.substr(0, za);
        } else {
          break;
        }
      }
    }
    return ba;
  }
  function G(A) {
    for (var da = arguments, ba = 1, za = da[0], Ja; ba < da.length; ++ba) {
      0 > va(za, Ja = da[ba]) && (za = Ja);
    }
    return za;
  }
  function R(A) {
    return A === A + "" ? A : A === A - 0 ? "" + A : A.min && A.max ? A.min + "~" + A.max : A.min ? A.min + "~" : "~" + A.max;
  }
  var va = Va.conpare, c = aa.userAgent, N = aa.appVersion, db = Ia(N) || 0, J = aa.platform, Wa = M.documentElement, Oa = Wa && Wa.style, p = M.documentMode, Ka = C.width;
  C = C.height;
  var Db = y.HTMLAudioElement, E = y.performance, P = y.Int8Array, eb = y.ontouchstart !== na, Pa = r(N, "Version/") || r(c, "Version/"), Za = y.operamini, Ha = !Za && y.opera, Pb = Ha && (Ha.version && "function" === typeof Ha.version ? Ha.version() : G(r(c, "Opera "), Pa, db)), pb = y.opr, qb = !Ha && (M.all || p);
  p = qb && (p ? p : y.XMLHttpRequest ? M.getElementsByTagName ? 7 : 4 : M.compatMode ? 6 : (0).toFixed ? 5.5 : y.attachEvent ? 5 : 4);
  Wa = !qb && Wa.msContentZoomFactor;
  var rb = !Wa && (y.chrome || y.chromium), hb = !qb && function() {
    for (var A in Oa) {
      if (0 === A.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Eb = m(c, "UCWEB"), Qb = Eb && r(c, " U2/"), Wb = Eb && r(c, "; wds "), sb = r(c.split("_").join("."), "; iPh OS "), ja = r(c, "; Adr "), tb = m(N, "YJApp-ANDROID"), Da = m(J, "Android") || hb && m(N, "Android") || tb;
  ja = r(J, "Android ") || r(N, "Android ") || r(c, "Android ") || ja;
  var fb = m(J, "Linux"), ib = "MacIntel" === J && aa.standalone !== na, La = hb && r(c, "Goanna/"), Qa = !La && hb && (r(c, "rv:") || r(c.substr(c.indexOf(") Gecko/") - 11), "; ")), jb = r(c, "Firefox/"), L = r(c, "Opera/"), Xa = y.FNRBrowser, Ra = ta(c, "AppleWebKit/"), kb = r(c, "Chrome/"), Fb = r(N, "Iron/"), Y = r(c, "OPR/"), Rb = r(N, "KHTML/"), Gb = r(c.toLowerCase(), "iris");
  r(c, "FxiOS/");
  r(c, "CriOS/");
  r(c, "EdgiOS/");
  var yb = r(c, "Silk/"), $a = ta(c, "SamsungBrowser/"), Hb = !$a && function() {
    for (var A = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    da, ba = A.length; da = A[--ba];) {
      if (m(c, da)) {
        return 2 > Ia(Pa) ? Pa : 0.9;
      }
    }
    A = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ba = A.length; da = A[--ba];) {
      if (m(c, da)) {
        return Pa;
      }
    }
  }(), Ib = rb && 534.3 >= Ra, ub = Ob(J), Ya = ub && !m(c, J) && Ob(c);
  eb = eb && (Ra || hb) && Ya || !ja && tb;
  tb = !!y.ReactNativeWebView;
  ub = ub && function() {
    for (var A in y) {
      if (0 === A.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Sa = (Ya = y.puffinDevice) && Ya.clientInfo;
  Sa = (Ya = Sa && "iOS" === Sa.os && Sa.osVersion) && Sa.model;
  var zb = !p && M.registerElement, vb = !p && M.execCommand, Jb = y.webkitCancelAnimationFrame, lb = fb && zb && "11.0.696.34" === kb, Ab = y._firefoxTV_playbackStateObserverJava, Kb = ta(c, "diordnA ");
  if ("Nitro" === J) {
    var q = 1;
  } else if ("Nintendo DSi" === J) {
    q = 2;
    var t = L;
  } else if ("New Nintendo 3DS" === J || m(c, "iPhone OS 6_0") && 320 === Ka && 240 === C) {
    q = 4, t = r(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === J) {
    q = 3, t = r(c, "Version/"), Ra = 535;
  } else if ("Nintendo Swicth" === J) {
    q = 7, t = r(N, "NintendoBrowser/");
  } else if (y.wiiu) {
    q = 6;
    t = r(N, "NintendoBrowser/");
    var O = 15, Q = r(N, "AppleWebKit/") || (Jb ? 536 : 534);
    t || (t = Jb ? 4 : 2, m(N, "Macintosh;") || m(N, "Windows NT") && m(N, "Touch"));
  } else if (Ha && Ha.wiiremote) {
    q = 5, t = r(c, "Wii; U; ; ");
  } else if (L = r(c, "PlayStation Vita ")) {
    q = 10, t = L;
  } else if (L = r(c, "(PlayStation Portable); ")) {
    q = 8;
    t = L;
    var Ma = 3.3;
  } else if (L = r(c, "PLAYSTATION 3; ") || r(c, "PLAYSTATION 3 ")) {
    q = 11, t = L, 0 > va("4.10", L) && (O = 26, Q = L);
  } else if (m(c, "Xbox One")) {
    q = 15, t = 1;
  } else if (m(c, "Xbox")) {
    q = 14, t = 1;
  } else if (2 === db && m(c, "Sony/COM2/")) {
    q = 17;
    t = 2;
    Ma = 3.4;
    var mb = !0;
  } else if (0 === J.indexOf("iP") || sb || Ya || ib) {
    if (Ya) {
      switch(t = Ya, Sa.substr(0, 4)) {
        case "iPho":
          var Aa = 0;
          r(Sa, Aa);
          var oa = !0;
          break;
        case "iPad":
          Aa = 1;
          r(Sa, Aa);
          var pa = !0;
          break;
        case "iPod":
          Aa = 2;
          r(Sa, Aa);
          var Lb = !0;
      }
    } else {
      sb ? t = sb : (t = r(N.split("_").join("."), "OS "), cb("isSecureContext", y), cb("enableWebGL", y), cb("sameOrigin", y));
      if (!t || Xa) {
        t = y.PointerEvent ? 13 : y.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : aa.sendBeacon ? 11.3 : y.WebAssembly ? 11.2 : y.HTMLMeterElement ? 10.3 : y.Proxy ? 10.2 : y.HTMLPictureElement ? 9.3 : bb.isNaN ? 9.2 : y.SharedWorker ? E && E.now ? 8 : 8.4 : vb ? 7.1 : y.webkitURL ? 6.1 : y.Worker ? 5.1 : P ? 4.3 : Db ? 4.1 : 3.2;
      }
      var Ea = Ka === 1.5 * C || 1.5 * Ka === C;
      0 === J.indexOf("iPhone") ? (Aa = 0, oa = !0) : 0 === J.indexOf("iPad") || ib ? (Aa = 1, pa = !0) : 0 === J.indexOf("iPod") && (Aa = 2, Lb = !0);
    }
    O = !Ya && (aa.standalone || (pa || 12 > t) && cb("webkitFullscreenEnabled", M) || 11 <= t && 13 > t && aa.mediaDevices) ? 16 : 17;
    q = 24;
    Q = t;
  } else if (m(c, "Kobo")) {
    q = 18, O = 21, Q = 2.2, Da = !0;
  } else if (m(c, "EBRD")) {
    q = 19, O = 21, Q = 2.2;
  } else if (L = r(c, "CrOS x86_64 ") || r(c, "CrOS aarch64 ") || r(c, "CrOS i686 ") || r(c, "CrOS armv7l ")) {
    q = 28, t = L;
  } else if (y.onmoztimechange !== na) {
    q = 29, t = 18.1 > Qa ? "1.0.1" : 19 > Qa ? 1.1 : 27 > Qa ? 1.2 : 29 > Qa ? 1.3 : 31 > Qa ? 1.4 : 33 > Qa ? 2 : 35 > Qa ? 2.1 : 38 > Qa ? 2.2 : 45 > Qa ? 2.5 : 2.6, m(c, "Mobile") ? oa = !0 : m(c, "Tablet") ? pa = !0 : m(c, "TV");
  } else if (y.palmGetResource) {
    q = 30, t = r(c, "webOS/") || r(c, "WEBOS") || r(c, "hpwOS/"), m(c, "webOS.TV") || m(c, "/SmartTV") || (oa = !0);
  } else if (L = r(c, "Tizen ")) {
    q = 31, t = L, O = 24, Q = $a, oa = !0;
  } else if (L = r(c, "Windows Phone ") || r(N, "Windows Phone OS ") || Wb) {
    q = 23, t = L, oa = !0;
  } else if (Wa && "ARM" === J) {
    q = 23, t = 10, oa = !0;
  } else if (qb && m(N, "ZuneWP")) {
    q = 23, t = 11 === p ? 8.1 : 10 === p ? 8 : 9 === p ? 7.5 : 7 === p ? 7 : "?", oa = !0;
  } else if (m(c, "FOMA;")) {
    q = 16, oa = !0;
  } else if (m(c, "SoftBank;")) {
    q = 16, oa = !0;
  } else if (m(c, "KFMUWI")) {
    var xa = !0;
    t = 6.3;
    var ha = pa = !0;
  } else if (m(c, "KFKAWI")) {
    xa = !0, t = 6, ha = pa = !0;
  } else if (m(c, "KFSUWI") || m(c, "KFAUWI") || m(c, "KFDOWI")) {
    xa = !0, t = 5, ha = pa = !0;
  } else if (m(c, "KFGIWI")) {
    xa = !0, t = 5, ha = pa = !0;
  } else if (m(c, "KFARWI") || m(c, "KFSAWA") || m(c, "KFSAWI")) {
    xa = !0, t = 5 <= Ia(ja) ? 5 : 4, ha = pa = !0;
  } else if (m(c, "KFSOWI") || m(c, "KFTHWA") || m(c, "KFTHWI") || m(c, "KFAPWA") || m(c, "KFAPWI")) {
    xa = !0, t = 3, ha = pa = !0;
  } else if (m(c, "KFOT") || m(c, "KFTT") || m(c, "KFJWA") || m(c, "KFJWI")) {
    xa = !0, t = 2, ha = pa = !0;
  } else if (m(c, "Kindle Fire")) {
    xa = !0, t = 1, ha = pa = !0;
  } else if (L = r(c, "Kindle/")) {
    q = 20, t = L, O = 21, Q = 2.2;
  } else if (Ab) {
    xa = !0, t = ja || Kb, ha = !0;
  } else if (m(c, "AmazonWebAppPlatform") || m(c, "; AFT")) {
    xa = !0, t = ja, ha = !0;
  } else if (m(c, "MeeGo")) {
    q = 32;
  } else if (m(c, "Maemo")) {
    q = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || Gb) {
    q = 22, mb = !0;
  } else if ("WinCE" === J) {
    q = 21, mb = !0;
  } else if (0 === J.indexOf("Win")) {
    q = "Win16" === J ? 35 : "Win32" === J ? 36 : "Win64" === J ? 37 : 0, t = r(c, "Windows NT ") || r(c, "Windows ");
  } else if (0 === J.indexOf("Mac")) {
    q = "Mac68K" === J ? 39 : "MacPowerPC" === J || "MacPPC" === J ? 38 : "MacIntel" === J ? 40 : 0;
    if (L = r(c.split("_").join("."), "Mac OS X ")) {
      t = L;
    }
    var Mb = !0;
  } else if (m(c, "BlackBerry") || m(c, "BB10")) {
    q = 34, t = Pa, oa = !0;
  } else if (m(c, "SunOS") || m(c, "Sun Solaris")) {
    q = 42;
  } else if (m(c, "FreeBSD")) {
    q = 43;
  } else if (m(c, "OpenBSD")) {
    q = 44;
  } else if (m(c, "NetBSD")) {
    q = 45;
  } else if (Da && hb) {
    m(c, "Android 4.4;") ? Ea = {min:2.3} : 4 <= Ia(ja) ? Ea = ja : Ea = {min:2.2}, t = Ea;
  } else if (Da && Ha) {
    ja ? Ea = ja : Ea = {min:1.6}, t = Ea, m(c, "Tablet") ? pa = !0 : oa = !0;
  } else if (ja) {
    t = ja, Da = !0;
  } else if (fb && eb || tb || ub) {
    var Fa = !0;
    $a ? Ea = {min:4.4} : rb && !Ib || pb || Y ? Ea = {min:4} : (Ea = ja = Oa.touchAction !== na ? {min:5} : zb ? 4.4 : P ? aa.connection ? y.searchBoxJavaBridge_ || rb ? bb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ra ? 3 : 533 <= Ra ? Db ? 2.3 : 2.2 : 530 <= Ra ? 2 : 1.5, Hb && (O = 24, Q = Hb));
    t = Ea;
    Da = !0;
  } else {
    lb ? (t = {min:5}, Fa = Da = !0) : fb && (m(c, "Ubuntu") ? q = 46 : (L = r(c, "Mint/")) ? (q = 47, t = L) : (L = r(c, "Fedora/")) ? (q = 48, t = L) : q = m(c, "Gentoo") ? 49 : 50);
  }
  xa || Da && Fa && yb ? q = 27 : Da && (q = q || 26);
  O || (ha = ha || Da, Ha ? (O = ha || mb || oa || pa ? 9 : 8, Q = Pb) : qb ? (Ea = ta(N, "Trident/") + 4, O = mb || oa || pa || Lb ? 3 : Mb && 5 <= p ? 7 : 2, Q = p) : Wa ? (O = 23 === q ? 6 : 5, Q = r(N, "Edge/")) : La ? (O = 13, Q = La) : hb ? (O = ha ? 12 : 11, Q = Qa || jb) : $a ? (O = 24, Q = $a) : (L = Ma || r(c, "NetFront/")) ? (O = 18, Q = L) : (L = r(c, "iCab")) ? (O = 19, Q = L) : (L = G(r(c, "Opera Mini/"), r(c, "Opera Mobi/")) || Za && Pa) ? (O = 10, Q = L, q || (m(c, "iPhone") ? Aa = 
  0 : m(c, "iPad") ? Aa = 1 : m(c, "iPod") && (Aa = 2), Aa && (q = 24))) : Eb ? (O = 25, Q = Qb) : Rb ? (O = 14, Q = db) : Da && Ib ? (O = 21, Q = ja) : rb || pb || Y ? (O = ha ? 22 : 20, Q = kb || Fb) : Da && zb ? (O = 23, Q = 5 > Ia(ja) ? ja : kb) : Da && (Pa || Fa) ? (O = 21, Q = ja) : kb ? (O = ha ? 22 : 20, Q = kb) : Ra && (O = 15, Q = Ra));
  q && (Va[2] = q, t && (Va[3] = R(t)));
  O && (Va[0] = O, Q && (Va[1] = R(Q)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var wb;
(function(Va, y, M, aa, C, Ia, bb, na, ta, m, Ob, cb, r, G) {
  function R(l) {
    if (y[0] === l) {
      return Oa === Oa + "" ? ta(Oa) : Oa;
    }
  }
  function va(l) {
    var B = y[3];
    if (y[2] === l) {
      return B === B + "" ? ta(B) : B;
    }
  }
  function c(l, B, U) {
    l + "" === l && ("a" === l.charAt(2) && (U = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > E ? 117 : .9 > P || 9 > p || 9 > E || Ka ? 1 : 132 : parseInt(l, 16));
    U && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (B || 2));
  }
  var N = C.body, db = N.style, J, Wa, Oa = y[1], p = R(2) || R(3), Ka = R(7), Db = R(5) || R(6), E = R(8) || R(9), P = R(11) || R(12), eb = P && 0 <= y.conpare(Oa, "1.9.1"), Pa = R(13), Za = R(15), Ha = R(16) || R(17), Pb = R(10) || R(25), pb = R(20) || R(22), qb = R(23), rb = R(21), hb = R(24), Eb = pb || qb || rb || hb, Qb = pb && ta(Ia.userAgent.split("Edg/")[1]), Wb = ta(Ia.appVersion.split("Trident/")[1]) + 4, sb = va(35) || va(36) || va(37), ja = .9 > P, tb = (Ka ? "ie5mac" : 5.5 > p ? "ie5win" : 
  6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 7.2 > E ? "opr70" : 8 > E ? "opr72" : 9.5 > E ? "opr" + (E | 0) : P && !eb ? 1.4 <= P ? "gck19" : 1.3 <= P ? "gck13" : 1 <= P ? "gck12" : ja ? .8 <= P ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var Da, fb, ib, La = 8 > p || 7.2 > E ? !1 : G, Qa = db.transform !== G ? "transform" : db["-o-transform"] !== G ? "-o-transform" : db["-ms-transform"] !== G ? "-ms-transform" : db.MozTransform !== G ? "-moz-transform" : db["-webkit-transform"] !== G ? "-webkit-transform" : "", jb = [], L = [], Xa = [], Ra, kb, Fb;
  525 > Za || 3.2 > Ha || 2.2 > rb || 10 > E || P && !eb || R(25) || 10 > R(3) || va(32) || va(30) || va(3);
  var Y, Rb, Gb, yb = [], $a = [], Hb, Ib, ub, Ya, Sa = na.now || function() {
    return +new na();
  };
  (function() {
    function l() {
      for (var F, a = 0, b = Sa(); a < ca.length;) {
        b < ca[0].t ? ++a : (F = ca.splice(a, 1)[0], F.f(F.p));
      }
      Ba = ca.length ? m(l, ka) : 0;
    }
    function B() {
      for (var F, a = 0; a < ia.length; ++a) {
        F = ia[a], F.f();
      }
    }
    function U() {
      wa && (wa = r(wa));
    }
    function la() {
      Ba && (Ba = Ob(Ba));
    }
    x = function(F) {
      yb.push(F);
    };
    wb = function(F) {
      $a.push(F);
    };
    Gb = function(F) {
      ia.length || (wa = cb(B, qa));
      ia.push({f:F, l:++ya});
      return ya;
    };
    Hb = function() {
      wa && (U(), wa = cb(B, qa));
    };
    Ib = U;
    var ia = [], qa = 500, ya = 0, wa;
    if (5 > p || Ka) {
      M._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    Y = function(F, a, b) {
      ca.length || (Ba = m(l, ka));
      ca.push({f:F, p:a, l:++V, t:Sa() + (ka < b ? b : ka)});
      return V;
    };
    Rb = function(F) {
      for (var a = ca.length, b; b = ca[--a];) {
        if (b.l === F) {
          ca.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    ub = function() {
      Ba && (la(), Ba = m(l, ka));
    };
    Ya = la;
    var ca = [], ka = 16, V = 0, Ba;
    if (5 > p || Ka) {
      M._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var zb, vb, Jb, lb, Ab, Kb, q, t, O, Q, Ma, mb, Aa, oa, pa, Lb, Ea, xa, ha, Mb, Fa, A;
  (function() {
    function l(a, b, g) {
      var u = ["<", a], w = 1, H, Z;
      if (b) {
        for (H in b) {
          var k = b[H];
          if (null != k && "" !== k) {
            if ("style" === H) {
              u[++w] = ' style="';
              for (Z in k) {
                for (var z = ++w, I, S = [], d = Z.split(""), e = d.length; e;) {
                  I = d[--e], "A" <= I && "Z" >= I && (I = "-" + I.toLowerCase()), S[e] = I;
                }
                u[z] = S.join("") + ":" + k[Z] + ";";
              }
              u[++w] = '"';
            } else {
              "className" === H && (H = "class"), u[++w] = " " + H + '="' + k + '"';
            }
          }
        }
      }
      u[++w] = ">";
      null != g && (V && "font" !== a ? u[++w] = "<font>" + B(g) + "</font>" : u[++w] = B(g));
      u[++w] = "</" + a + ">";
      return u.join("");
    }
    function B(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function U(a) {
      var b = a.split("-"), g = b.length;
      if (2 > g) {
        return a;
      }
      for (; 1 < g;) {
        a = b[--g], b[g] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function la(a) {
      var b = "*" === a;
      a = V ? b ? C.all : C.all.tags(a.toUpperCase()) : 6 > p && b ? C.all : C.getElementsByTagName(a);
      b = [];
      for (var g = 0, u = a.length; g < u; ++g) {
        b[g] = a[g];
      }
      return b;
    }
    function ia(a) {
      return V ? a.parentElement : a.parentNode;
    }
    function qa(a, b, g, u, w, H) {
      if (V) {
        var Z = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var k = Ab(2 > a ? lb(b) : b);
        k = 2 > a ? k.indexOf(b) + a : k.length;
        b.insertAdjacentHTML(Z, l(g, u, w));
        b = Ab(b)[k];
        null != w && ("font" === g ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (Ba) {
        b = C.createElement(l(g, u));
      } else {
        b = H ? C.createElementNS("http://www.w3.org/2000/svg", g) : C.createElement(g);
        if (u) {
          for (Z in u) {
            if ((a = u[Z]) || 0 === a) {
              switch(Z) {
                case "class":
                case "className":
                  Ea(b, a);
                  break;
                case "style":
                  H = b.style;
                  for (k in a) {
                    H[k] = a[k];
                  }
                  break;
                default:
                  oa(b, Z, a);
              }
            }
          }
          !E || "a" !== g && "A" !== g || !u.href || u["tag-index"] || u.tagIndex || oa(b, "tagIndex", "-0");
        }
        F || null != w && ya(b, w);
      }
      return b;
    }
    function ya(a, b) {
      if (V) {
        return qa(2, a, "font", G, b);
      }
      var g = C.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function wa(a, b) {
      9 > p ? a.className = b : a.setAttribute("class", b);
    }
    function ca(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ka(a, b, g) {
      if (8 > E || 5.5 > p) {
        b = U(b);
      }
      a.style[b] = g;
    }
    var V = 5 > p;
    J = la("html")[0];
    Wa = la("head")[0];
    zb = function(a) {
      return M[a] || C[a] || C.getElementById(a);
    };
    vb = la;
    Jb = function(a) {
      var b = [], g = 0, u, w = -1;
      if (9 > p || !C.getElementsByClassName) {
        var H = 6 > p ? C.all : C.getElementsByTagName("*");
      } else {
        var Z = !0;
        H = C.getElementsByClassName(a);
      }
      for (u = H.length; g < u; ++g) {
        var k = H[g];
        if (Z || (V || 1 === k.nodeType) && ca(k, a)) {
          b[++w] = k;
        }
      }
      return b;
    };
    lb = ia;
    Ab = function(a) {
      a = V ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Kb = function(a) {
      var b = !(7.03 < E && 7.2 > E) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], u = a.length, w = -1, H; u;) {
        if (H = a[--u], b || 1 === H.nodeType) {
          V && "FONT" === H.tagName || (g[++w] = H);
        }
      }
      return g;
    };
    q = function(a, b, g, u, w) {
      b = qa(2, a, b, g, u, w);
      V || (a.appendChild(b), F && null != u && ya(b, u));
      return b;
    };
    t = function(a, b, g, u, w) {
      b = qa(0, a, b, g, u, w);
      V || (ia(a).insertBefore(b, a), F && null != u && ya(b, u));
      return b;
    };
    O = ya;
    Q = function(a, b) {
      if (V) {
        return qa(0, a, "font", G, b);
      }
      var g = C.createTextNode("" + b);
      lb(a).insertBefore(g, a);
      return g;
    };
    Ma = function(a) {
      lb(a) ? V ? a.outerHTML = "" : (5.5 > p && (a.style.filter = ""), lb(a).removeChild(a)) : x("[DOM] p_DOM_remove(), No parentNode!");
    };
    var Ba = 9 > p, F = Ba;
    mb = function(a) {
      return a.tagName.toUpperCase();
    };
    Aa = function(a, b) {
      if (8 > E || 5.5 > p) {
        b = U(b);
      }
      var g = a.getAttribute(b);
      return E && "tabIndex" === b ? "-0" === g ? "" : "" === g ? "-1" : g : g || "";
    };
    oa = function(a, b, g) {
      if (E && "tab-index" === b) {
        "-1" === g ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", g);
      } else {
        if (8 > E || 5.5 > p) {
          b = U(b);
        }
        a.setAttribute(b, g);
      }
    };
    pa = function(a, b) {
      if (E && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > E || 5.5 > p) {
          b = U(b);
        }
        a.removeAttribute(b);
      }
    };
    Lb = function(a, b) {
      if (E && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > E || 5.5 > p) {
        b = U(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ea = wa;
    xa = ca;
    ha = function(a, b) {
      var g;
      if (!ca(a, b)) {
        if (g = a.className) {
          g += " ";
        }
        wa(a, g + b);
      }
    };
    Mb = function(a, b) {
      if (ca(a, b)) {
        var g = a.className.split(" ");
        g.splice(g.indexOf(b), 1);
        wa(a, g.join(" "));
      }
    };
    Fa = ka;
    A = function(a, b) {
      var g, u = -1, w;
      if (5.5 > p) {
        if (g = 5.5 > p ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (g = g.split(";"); w = g[++u];) {
            ka(a, w.split(":")[0], "");
          }
        }
        if (b) {
          for (u = -1, g = b.split(";"); w = g[++u];) {
            var H = w.split(":")[0];
            ka(a, H, w.substr(H.length + 1));
          }
        }
      } else if (7.1 > E) {
        if (a.setAttribute("style", ""), b) {
          for (g = b.split(";"); w = g[++u];) {
            w = w.split(":"), ka(a, w[0], w[1]);
          }
        }
      } else {
        9 > E || 1 > P ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var da, ba, za, Ja, xb, Xb, Sb, ra, Tb;
  (function() {
    function l() {
      return k ? I ? 2 : z ? 3 : 1 : 0;
    }
    function B(d) {
      ba(M, "load", B);
      B = G;
      la(jb, d, !0);
      jb = G;
    }
    function U(d, e) {
      xb(function() {
        var D = ca(d);
        e(D);
        D.addListener(e);
        return !0;
      });
    }
    function la(d, e, D) {
      for (var f = 0; f < d.length; ++f) {
        !0 === d[f](e) && (d.splice(f, 1), --f);
      }
      D && (d.length = 0);
    }
    function ia(d, e, D) {
      jb || V.length || Y(qa);
      V.push(d, e, D);
    }
    function qa() {
      var d = V, e;
      for (V = []; e = d.shift();) {
        la(e, d.shift(), d.shift());
      }
    }
    function ya(d) {
      var e = d || event;
      d = F[e.type];
      var D = -1, f, h;
      5 > p ? e = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : p ? (e.target = e.srcElement, e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : b && (e.j = e.stopPropagation, e.stopPropagation = function() {
        h = !0;
      });
      for (; f = d[++D];) {
        f.i === this ? (this.g = f.h, p && (e.currentTarget = this), this.g(e), p ? (this.g = aa, this.g = G) : delete this.g) : 7.2 > E && this === C && f.i === M && (M.g = f.h, M.g(e), delete M.g);
      }
      if (p) {
        return e.preventDefault = e.stopPropagation = aa, e.preventDefault = e.stopPropagation = G, e.returnValue;
      }
      b && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && (u = !0), h && !u && e.j(), e.j = e.stopPropagation = G);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function wa() {
      var d = 9 === ka.offsetWidth;
      Sb !== d && (ia(L, Sb = d), x("p_cssAvailability:" + Sb));
    }
    var ca = M.matchMedia, ka, V = [];
    jb.push(function() {
      U = G;
      ka = q(N, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        V.length && Y(qa);
      });
    });
    da = function(d, e, D, f) {
      if (g) {
        d.addEventListener(e, D, f ? Ba ? f : f.capture || !0 === f : !1);
      } else {
        var h = {i:d, h:D};
        f = F[e];
        var n = "on" + e, v, K;
        if (f) {
          for (v = f.length; K = f[--v];) {
            if (K.i === d && K.h === D) {
              return;
            }
          }
          F[e].push(h);
        } else {
          F[e] = f = [h], a || (e = d[n], "function" === typeof e && e !== ya && f.unshift({i:d, h:e}));
        }
        a ? d.attachEvent(n, ya) : d[n] = ya;
      }
    };
    ba = function(d, e, D, f) {
      if (g) {
        d.removeEventListener(e, D, f ? Ba ? f : f.capture || !0 === f : !1);
      } else {
        f = F[e];
        e = "on" + e;
        var h, n, v;
        if (f) {
          for (h = f.length; n = f[--h];) {
            n.i === d && (n.h === D ? f.splice(h, 1) : v = !0);
          }
          v || (a ? d.detachEvent(e, ya) : p ? (d[e] = aa, d[e] = null) : delete d[e]);
        }
      }
    };
    var Ba = !p && !Ka && (new bb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), F = {}, a = !1, b = 525.13 > Za, g = !b && !Ka && M.addEventListener, u;
    b && J.addEventListener("click", function(d) {
      if (u) {
        return u = !1, d.preventDefault(), !1;
      }
    });
    za = function(d) {
      jb ? jb.push(d) : alert("Load event has already been dispatched!");
    };
    Ja = function(d) {
      w && w.push(d);
    };
    var w = [];
    if (419.3 >= Za) {
      var H = function() {
        if (H) {
          var d = C.readyState;
          "loaded" === d || "complete" === d ? (H = G, B()) : Y(H);
        }
      };
      Y(H);
    } else {
      da(M, "load", B), ja && Y(function() {
        B && B();
      }, 999);
    }
    p || !ja && 1.8 > P ? da(M, "unload", function(d) {
      la(w, d, !0);
    }) : w = G;
    xb = function(d) {
      L.push(d);
    };
    za(function() {
      wa();
      Gb(wa);
    });
    Xb = function(d) {
      Xa && Xa.push(d);
    };
    var Z = 60 > P || Pa, k, z, I;
    if (89 <= P || 89 <= pb || sb && 79 <= Qb || ca && (ca("(forced-colors:none)").matches || ca("(forced-colors:active)").matches)) {
      Tb = !0, U("(forced-colors:active)", function(d) {
        k = d.matches;
        ra = l();
        ia(Xa, ra);
        x("(forced-colors:active):" + ra);
      });
    } else if (10 <= p || Db || sb && Qb) {
      Tb = !0, U("(-ms-high-contrast:black-on-white)", function(d) {
        k = z = d.matches;
        ra !== l() && (ra = l(), ia(Xa, ra), x("(-ms-high-contrast:black-on-white):" + ra));
      }), U("(-ms-high-contrast:white-on-black)", function(d) {
        k = I = d.matches;
        ra !== l() && (ra = l(), ia(Xa, ra), x("(-ms-high-contrast:white-on-black):" + ra));
      }), U("(-ms-high-contrast:active)", function(d) {
        k = d.matches;
        ra !== l() && (ra = l(), ia(Xa, ra), x("(-ms-high-contrast:active):" + ra));
      });
    } else if (sb && (p || P && 0 <= y.conpare(Oa, "1.8.1") || Pa)) {
      var S = function() {
        function d(f, h) {
          if (h && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var n = f.split("(")[1].split(",");
          return ta(n[0]) + ta(n[1]) + ta(n[2]);
        }
        var e = C.defaultView;
        var D = e ? e.getComputedStyle(ka, null) : ka.currentStyle;
        e = (D && D.color || "").split(" ").join("");
        D = (D && D.backgroundColor || "").split(" ").join("");
        e && (k = "#123456" !== e && "rgb(18,52,86)" !== e, z = d(e) < d(D, !0), I = d(e) > d(D, !0), ra !== l() && (ra = l(), x("(forced-colors-fallback):" + ra), ia(Xa, ra, Z)));
      };
      xb(function(d) {
        if (d) {
          return Fa(ka, "color", "#123456"), Fa(ka, "backgroundColor", "#123456"), Z ? (S(), Xa = G) : Gb(S), S = G, !0;
        }
      });
    } else {
      Xa = l = G;
    }
  })();
  (function() {
    function l(h) {
      g(h);
      D && !h && Ma(D);
      g = u = w = H = Z = k = S = d = e = f = D = G;
    }
    function B(h) {
      var n = '1.6em "' + h + '"';
      x("[webFontTest] testByNativeFontLoaderAPI start.");
      C.fonts.load(n).then(function(v) {
        x("[webFontTest] fonts.check() : " + C.fonts.check(n, "i") + ", fonts.length : " + v.length);
        (v = ia(u)) ? Y(l, v) : (x("[webFontTest] mesureWebFont() : false"), la(!0));
      }, function(v) {
        x("[webFontTest] fonts.load() rejected! " + v);
        La !== G ? qa(La) : Ra(qa);
      });
    }
    function U(h) {
      return C.hidden || C.msHidden || C.mozHidden || C.webkitHidden ? (I = new na() - 0, !1) : h < new na() - I;
    }
    function la(h) {
      h && (x("[webFontTest] testWebFont start."), I = new na() - 0);
      (h = ia(u)) ? (x("[webFontTest] testWebFont mesurement success : " + h), l(h)) : U(z) ? (x("[webFontTest] testWebFont timeout!"), S || ka ? l(0) : La !== G ? qa(La) : Ra(qa)) : Y(la);
    }
    function ia(h) {
      var n = 0, v = -1, K = 0;
      if (!f) {
        var ma = -1;
        var ea;
        d = q(N, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, a);
        for (f = {}; ea = b[++ma];) {
          Fa(d, "fontFamily", ea), f[ea] = d.offsetWidth;
        }
      }
      for (5 > p ? d || (d = q(N, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, a)) : N.appendChild(d); ma = b[++v];) {
        if (Fa(d, "fontFamily", '"' + h + '",' + ma), d.offsetWidth !== f[ma]) {
          n = 1;
          break;
        }
      }
      !p && n && Z && (d.innerHTML = Z, h = d.offsetWidth, d.innerHTML = k, K = h === d.offsetWidth ? 1 : 0, d.innerHTML = a);
      Ma(d);
      5 > p && (d = G);
      return n + K;
    }
    function qa(h) {
      x("[webFontTest] onTestDataURIComplete : " + h);
      h ? (S = !0, ya(!0)) : l(0);
    }
    function ya(h) {
      var n;
      if (w) {
        for (n in h && (I = new na() - 0), w) {
          ia(n) ? (x("[webFontTest] success! " + n), e = q(N, "div", {"aria-hidden":"true", className:H, id:H}), D = q(Wa, "link", {type:"text/css", rel:"stylesheet", href:w[n]}), Y(wa, !0)) : U(F) ? (x("[webFontTest] timeout! " + n), delete w[n], Y(ya, !0)) : Y(ya);
          return;
        }
      }
      l(0);
    }
    function wa(h) {
      h && (x("[webFontTest] testImportedCssReady start!"), u = u.replace(V, ""), x("[webFontTest] targetWebFontName : " + u), I = new na() - 0);
      1 < e.offsetWidth ? (x("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + e.offsetWidth), Ma(e), z = F, Y(la, !0)) : U(z) ? 528 > Za ? (x("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + e.offsetWidth), Ma(e), z = F, Y(la, !0)) : (x("[webFontTest] testImportedCssReady timeout!"), Ma(e), l(0)) : Y(wa);
    }
    L.splice(0, 0, function() {
      if (Sb) {
        ib = 8 <= p || Db || 9.5 <= E || eb || Pa || 522 <= Za || 3 <= Ha || Pb || Eb ? 3 : 7.2 <= E ? 2 : 6 <= E || P ? 1 : 0;
        if (!ib && !p && !Ka) {
          var h = q(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          ib = 6 <= h.offsetWidth ? 2 : 0;
          Ma(h);
        }
        x("p_cssGeneratedContentGrade:" + ib);
        return !0;
      }
    });
    Ra = !1 === La ? function(h) {
      Y(h, !1);
    } : function(h) {
      function n(ma) {
        K = Rb(K);
        La = ma;
        v.onload = v.onerror = aa;
        Y(h, ma);
      }
      if (La !== G) {
        x("[dataURITest] already done : " + La), Y(h, La);
      } else {
        x("[dataURITest] start!");
        var v = new Image(), K = Y(function() {
          K && n(!1);
        });
        v.onerror = function() {
          x("[dataURITest] no DATA URI!");
          n(!1);
        };
        v.onload = function() {
          x("[dataURITest] DATA URI:" + (1 === v.width * v.height));
          n(1 === v.width * v.height);
        };
        v.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > p && za(function() {
      var h = q(N, "div");
      A(h, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Da = 1 < h.offsetHeight;
      Ma(h);
    });
    kb = function(h, n) {
      function v() {
        if (ma || !ea || K.complete) {
          x("[imageTest] timer -> img.complete. img.width=" + K.width);
          var gb = !!K.width;
          fb = fb || gb;
          Y(h, gb);
          K.onerror = K.onload = aa;
          K = h = G;
        } else {
          --ea, Y(v);
        }
      }
      var K = new Image(), ma, ea = 99;
      x("[imageTest] start.");
      K.onerror = function() {
        x("[imageTest] error!");
        ma = !0;
      };
      K.onload = function() {
        x("[imageTest] onload.");
        ma = !0;
      };
      K.src = n;
      Y(v);
    };
    Fb = function(h, n, v, K, ma, ea, gb) {
      g = h;
      u = n;
      w = v;
      H = K;
      Z = ma;
      k = ea;
      z = gb || Ba;
      u = V + u;
      x("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      ca ? (x("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : false"), Y(l, 0)) : (x("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : true"), !C.fonts || 603 > Za ? (x("[webFontTest] No native font loader."), la(!0)) : (x("[webFontTest] Use Native font loader."), B(u)));
    };
    var ca = 525 > Za || 10 > E || P && !eb || 2.2 > R(21) || R(25) || 10 > R(3) || va(32) || va(30) || va(3), ka = 9 > p || 2 > pb || 12 > E, V = "bad_" + (new na() - 0) + "_", Ba = 5E3, F = 100, a = "mmmmmmmmmmlli", b = ["sans-serif", "serif"], g, u, w, H, Z, k, z, I, S, d, e, D, f;
  })();
  var Ub = String.fromCharCode, ab = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Ub(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Yb = ab[7], fc = ab[113], bc = Ub(160);
  Ub(8194);
  var cc = ab[31], Vb = ab[30], gc = ab[63], hc = ab[125], ic = ab[126], jc = Ub(59648), dc = (9 === p || P && 0 <= y.conpare(Oa, "1.8.1") || Pa) && !Tb, nb = [], ob, Ta, Nb = 7.2 > E ? function() {
    ob = !ob;
    for (var l = -1, B; B = nb[++l];) {
      -1 !== B.className.indexOf("pbAlp") ? Fa(B, "display", ob ? "" : "none") : (ha(B, ob ? "pbChrCS" : "pbChr00"), Mb(B, ob ? "pbChr00" : "pbChrCS"));
    }
  } : dc ? function() {
    ob = !ob;
    for (var l = -1, B; B = nb[++l];) {
      Fa(B, "opacity", ob ? 1 : 0);
    }
  } : G;
  var Zb = Va.startBlinkingIfCursor = function(l) {
    Nb ? xa(l, "pbChrCS") && (Ta || !E && !ra || (Ta = cb(Nb, 400)), -1 === nb.indexOf(l) && nb.push(l)) : nb = G;
  };
  Va.stopBlinkingIfCursor = function(l) {
    Nb && (l = nb.indexOf(l), 0 <= l && (nb.splice(l, 1), !nb.length && Ta && (r(Ta), Ta = 0)));
  };
  dc && Xb(function(l) {
    l ? Ta || (Ta = cb(Nb, 400)) : Ta && (r(Ta), Ta = 0);
  });
  Nb && Ja(function() {
    Ta && r(Ta);
  });
  Tb || Xb(function(l) {
    l ? (oa(J, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Qa || 9 === p || 5.5 <= p && 9 > p && Da) && ha(J, "jsCanRotate")) : (pa(J, "forced-colors"), Mb(J, "jsCanRotate"));
  });
  (function() {
    function l(k) {
      a = k;
      x("[pbList] WebFont test result : " + !!k);
      k ? ia() : fb ? la(!0) : fb !== G ? ia() : (x("[pbList] Need imageTest " + b), kb(la, b));
      x("window.offscreenBuffering = " + M.offscreenBuffering);
    }
    function B() {
      B = G;
      Fb(l, "PB-100", {"PB-100_canTTF":Ua + "pbFont/ttf.css", "PB-100_canWOFF":Ua + "pbFont/woff.css", "PB-100_canEOT":Ua + "pbFont/eot.css", "PB-100_canSVG":Ua + "pbFont/svg.css"}, "pbFont-testCssReady", "\u1d07\u207b", "i", 5E3);
    }
    function U(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function la(k) {
      k ? (x("[pbList] Fallback start!"), ha(N, "pbList-noWebFont")) : x("[pbList] image disabled!");
      ia();
    }
    function ia() {
      for (l = Fb = G; F.length;) {
        qa(F.shift(), F.shift());
      }
      x("[pbList] complete.");
    }
    function qa(k, z) {
      function I(h) {
        h = Ab(h);
        for (var n = -1, v; v = h[++n];) {
          switch(v.nodeType) {
            case 1:
              I(v);
              break;
            case 3:
              v.data && d(v.data) && e.push(v);
          }
        }
      }
      function S(h) {
        var n = h.children, v = 0, K = n.length;
        if (K) {
          for (; v < K; ++v) {
            S(n[v]);
          }
        } else {
          (n = h.innerText) && d(n) && e.push(h);
        }
      }
      function d(h) {
        return h.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var e = [], D;
      if (l) {
        -1 === F.indexOf(k) && (F.push(k, z), g && B && B());
      } else {
        var f = F.indexOf(k);
        0 <= f && F.splice(f, 2);
        for (5 > p ? S(k) : I(k); D = e.shift();) {
          f = 5 > p ? D.innerText : D.data, 2 !== a && (0 <= f.indexOf("\u2091\u208b") && (f = f.split("\u2091\u208b").join(Vb)), 0 <= f.indexOf("\u1d07\u207b") && (f = f.split("\u1d07\u207b").join(Vb)), a && (0 <= f.indexOf("\u208b\u2081") && (f = f.split("\u208b\u2081").join(gc)), 0 <= f.indexOf("\u1d47/\u1d04") && (f = f.split("\u1d47/\u1d04").join(jc)), 0 <= f.indexOf("\u1d47/") && (f = f.split("\u1d47/").join(hc)), 0 <= f.indexOf("/\u1d04") && (f = f.split("/\u1d04").join(ic)))), 0 <= f.indexOf("\u2091") && 
          (f = f.split("\u2091").join(cc)), 0 <= f.indexOf("\u00ea") && (f = f.split("\u00ea").join(Vb)), z ? 5 > p ? D.innerText = f : D.data = f : ya(f.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(fc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Yb).split("&amp;").join("&"), D);
        }
      }
    }
    function ya(k, z) {
      function I(sa, T) {
        for (var Ga = ""; T;) {
          T & 1 && (Ga += sa), T >>= 1, sa += sa;
        }
        return Ga;
      }
      function S(sa, T, Ga) {
        for (var Bb, kc = -1, $b, ac; Bb = T[++kc];) {
          for (; 0 <= ($b = sa.indexOf(Bb));) {
            ac = Bb.length, sa = sa.substr(0, $b) + I(Ga, ac) + sa.substr($b + ac);
          }
        }
        return sa;
      }
      function d(sa) {
        var T = ta(sa), Ga = "" + T;
        return 0 < T && T === T | 0 && (T = sa.indexOf(Ga) + Ga.length, T <= sa.length) ? T : 0;
      }
      var e = " area line str cmd fnc syb".split(" "), D = 5 > p || 1 === z.nodeType, f = [], h = "", n, v = -1, K, ma, ea;
      if (D) {
        if (H) {
          var gb = z.style.visibility;
          Fa(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (Z) {
        var Cb = z;
        z = C.createDocumentFragment();
      }
      if (function(sa) {
        var T = sa.indexOf("P");
        if (-1 === T) {
          return !1;
        }
        T = ta(sa.charAt(T + 1));
        return 0 <= T && 9 >= T;
      }(k)) {
        h = I("+", k.length);
      } else {
        0 <= (n = d(k)) && (h = I("|", n), v = n, --v);
        for (; n = k.charAt(++v);) {
          n === Yb || K ? (h += "~", n === Yb && (K = !K)) : h += n;
        }
        h = S(h, Ba, "^");
        h = S(h, ka, "{");
        h = S(h, V, "}");
      }
      v = 0;
      for (K = k.length; v < K; ++v) {
        n = k.charAt(v);
        var W = n === bc;
        var fa = " " === n;
        n = W ? " " : n;
        var X = h.charAt(v);
        var Na = (ma = Ca) && W;
        var Ca = "|" === X;
        X = e["+|~{}^".indexOf(X) + 1];
        if ("\n" !== n) {
          if (a || !fb) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === k.substr(v, 3)) {
                n = "\u1d47/\u1d04", v += 2;
              } else {
                switch(k.substr(v, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    n = k.substr(v, 2), ++v;
                }
              }
            }
            X = fa && "str" === X ? "pbList-strsp" : W ? "" : !fa && X ? "pbList-" + X : "";
          } else {
            W = ab.indexOf(n), W = -1 === W ? "" : ab.indexOf(n).toString(16).toUpperCase(), W = (W = 1 === W.length ? "0" + W : W) ? "pbChr" + W : "", X = fa && "str" === X ? "pbList-strsp" : fa || !W ? "" : X ? (W ? W + " " : "") + "pbList-" + X : W;
          }
          W = G;
          Na ? (n = 6 <= p && 8 > p ? " " : bc, X = "") : Ca && (P && !eb || 9.5 > E) ? (Ca && !ma && (ea = 4 - (ta(k.substr(v)) + "").length), 7.5 > E ? W = w ? "position:relative;top:-4px;left:" + 12 * ea + "px" : {position:"relative", top:"-4px", left:12 * ea + "px"} : W = w ? "position:relative;left:" + 12 * ea + "px" : {position:"relative", left:12 * ea + "px"}) : fa && 7.5 > E && (X = "pbList-strsp");
          w ? f.push("<font" + (X ? ' class="' + X + '"' : "") + (W ? ' style="' + W + '"' : "") + ">" + n + "</font>") : D || Z ? q(z, "font", {"class":X, style:W}, n) : t(z, "font", {"class":X, style:W}, n);
        } else {
          ma = Ca = !1, w ? f.push(n) : D || Z ? O(z, n) : Q(z, n);
        }
      }
      if (D) {
        w ? z.innerHTML = f.join("") : Z && Cb.appendChild(z), H && Fa(z, "visibility", gb);
      } else {
        if (w) {
          e = C.createElement("font");
          for (e.innerHTML = f.join(""); f = e.firstChild;) {
            z.parentNode.insertBefore(f, z);
          }
          Ma(z);
        } else {
          Z ? Cb.parentNode.replaceChild(z, Cb) : Ma(z);
        }
      }
    }
    1.9 > P && xb(function(k) {
      if (k) {
        k = vb("*");
        for (var z = 0, I = k.length, S; z < I; ++z) {
          S = k[z], "B" !== mb(S) && -1 !== (" " + S.className).toLowerCase().indexOf(" pbchr") && (Lb(S, "title") || oa(S, "title", S.textContent), S.textContent = " ");
        }
        return !0;
      }
    });
    xb(function(k) {
      if (k) {
        k = Jb("pbChrCS");
        for (var z = 0, I = k.length; z < I; ++z) {
          Zb(k[z]);
        }
        return !0;
      }
    });
    var wa = [], ca = P && 0 > y.conpare(Oa, "0.9.9");
    xb(function(k) {
      function z(fa) {
        var X = Aa(fa, "pbTip");
        if (X) {
          var Na = X.charAt(0);
          var Ca = "_" === Na;
          X = (Ca ? X.charAt(2) : Na).toUpperCase().charCodeAt(0) - 65;
          f ? q(fa, "div", {style:{left:7 * X + 3 + "px"}}) : (Na = Aa(fa, "title"), pa(fa, "pbTip"), pa(fa, "title"), Ca = q(fa, "div", {className:"pbTip" + (Ca ? "Btm" : ""), style:{width:Na.length + S + "em", left:7 * X - (ca ? 0 : 5) + "px"}}, Na), Ca = q(Ca, "div"), .9 <= P && ca && Fa(Ca, "left", "2px"));
        }
        D && 0 <= fa.className.indexOf("pbColor") && q(fa, "u");
      }
      function I(fa, X) {
        var Na = Aa(fa, "pbGhst"), Ca = fa.className, sa = Ca.split("pbCsr")[1] || "", T = Ca.split("pbAlp")[1] || "";
        if ("CS" === Na) {
          var Ga = "_";
        } else {
          Ga = Na, 3 === Ga.length && (Ga = Ga.substr(0, 2)), Ga = ab[parseInt(Ga, 16)] || "~";
        }
        var Bb;
        sa = sa.split(" ")[0];
        if (T = ta(T.split(" ")[0])) {
          d && (Ca = Ca.split("pbChr")[1].split(" ")[0], Fa(fa, "backgroundPosition", c(Ca, 2, gb) + "px " + -24 * (10 - T) + "px")), !X && e && t(fa, "a").appendChild(fa);
        }
        Na && (T = 10 - T, d && (Bb = {backgroundPosition:c(Na, 2, gb) + "px " + -24 * (10 - T) + "px"}), pa(fa, "pbGhst"), v = t(fa, "b", {className:"pbChr" + Na + " pbCsr" + sa + " pbAlp" + T, style:Bb}, Ga), Zb(v));
        Zb(fa);
      }
      if (k) {
        var S = 6 > p ? 2 : 0, d = 7.2 > E || .9 > P || Ka, e = 1.1 === P, D = 1.4 > P;
        k = vb("SAMP");
        var f = 8 === p, h = ib, n, v, K, ma, ea;
        Da && ha(N, "pbLCD-AX");
        if (k.length) {
          for (K = -1; n = k[++K];) {
            if (xa(lb(n), "pbLCD")) {
              var gb = xa(n, "PB-120") || xa(n, "FX-795P");
              var Cb = Kb(n);
              for (n = Cb.length; ea = Cb[--n];) {
                switch(mb(ea)) {
                  case "A":
                    (2 > h || f) && z(ea);
                    if (2 > h) {
                      var W = Kb(ea);
                      for (ma = W.length; ma;) {
                        I(W[--ma], !0);
                      }
                    }
                    Pb ? oa(ea, "href", "javascript:void(0)") : (da(ea, "click", U), wa.push(ea));
                    break;
                  case "B":
                    2 > h && I(ea, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ja(function() {
      for (var k; k = wa.shift();) {
        ba(k, "click", U);
      }
    });
    6 === p && (new bb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(C);
    var ka = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), V = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Ba = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Vb + cc).split(""), F = [], a, b, g;
    if (.9 <= P && 0 >= y.conpare(Oa, "0.9.1")) {
      ha(J, "pbLCD-gecko09To091");
      var u = !0;
    }
    xb(function(k) {
      if (k) {
        b = Ua + "pbFont/x3mask" + (u ? ".gecko0.9.1.gif" : ".png");
        k = vb("*");
        for (var z = -1, I; I = k[++z];) {
          xa(I, "pbList") ? qa(I) : xa(I, "pbFont") && qa(I, !0);
        }
        F.length && (x("[pbList] " + F.length / 2 + " elements found. WebFont test start."), B());
        return !0;
      }
    });
    var w = !1, H = 8 > E, Z = !w && !H && !(6 > p) && C.createDocumentFragment && !!N.replaceChild;
    Va.prettify = qa;
  })();
  var ec = C.scripts || vb("script");
  var Ua = ec[ec.length - 1].src.split("/");
  --Ua.length;
  (Ua = Ua.join("/")) && (Ua += "/");
  x("[p_assetUrl] " + Ua);
  za(function() {
    var l;
    (l = zb("logger")) || alert("#logger not found!");
    l ? (x = o, wb = function(B) {
      q(l, "DIV", {style:{color:"red"}}, B);
    }, M.onerror = function(B, U, la) {
      wb(B + ", " + U + ", " + la);
      return !0;
    }) : M.console ? (x = console.log, wb = console.error) : E ? (x = aa, wb = opera.postError) : x = wb = aa;
    for (; yb.length;) {
      x(yb.shift());
    }
    for (; $a.length;) {
      wb($a.shift());
    }
    yb = $a = G;
    function o(B) {
      q(l, "DIV", G, B);
    }
    o = !1;
  });
  6.1 > Ha && da(M, "scroll", Hb);
  Ja(Ib);
  6.1 > Ha && da(M, "scroll", ub);
  Ja(Ya);
  10 > p && (11 !== Wb || 5 !== p) || (9 > E || 1 > P || !Ka && !M.addEventListener ? C.write('<link href="' + Ua + tb + '" rel="stylesheet"' + (8 > E ? "" : ' media="screen,handheld,projection,print"') + ">") : za(function() {
    q(Wa, "link", {href:Ua + "" + tb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

