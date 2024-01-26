/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var p;
ua = [];
ua.conpare = function(Wa, A) {
  var T = 0, ja, H, Oa = (Wa + "").split("."), db = (A + "").split("."), Ma = Oa.length;
  for (ja = db.length; "0" === Oa[Ma - 1];) {
    --Ma;
  }
  for (; "0" === db[ja - 1];) {
    --ja;
  }
  for (H = Ma < ja ? Ma : ja; T < H; ++T) {
    var Aa = Oa[T] - 0, k = db[T] - 0;
    if (Aa !== k) {
      return Aa > k ? 1 : -1;
    }
  }
  return Ma > ja ? 1 : Ma === ja ? 0 : -1;
};
(function(Wa, A, T, ja, H, Oa, db, Ma) {
  function Aa(D, sa, U) {
    U = Oa(D.split(sa)[1]);
    return 0 <= U ? U : 0;
  }
  function k(D, sa) {
    return 0 <= D.indexOf(sa);
  }
  function Lb(D) {
    return k(D, "Linux armv") || k(D, "Linux aarch") || k(D, "Linux i686") || k(D, "Linux x86_64");
  }
  function eb(D, sa) {
    for (var U in sa) {
      if (U === D) {
        return !0;
      }
    }
  }
  function n(D, sa) {
    var U = "", Pa = -1, Na;
    if (D = D.split(sa)[1]) {
      for (; Na = D.charCodeAt(++Pa);) {
        if (48 <= Na && 57 >= Na || 46 === Na) {
          U += D.charAt(Pa);
        } else {
          break;
        }
      }
      for (Pa = U.length; Pa;) {
        if (46 === U.charCodeAt(--Pa)) {
          U = U.substr(0, Pa);
        } else {
          break;
        }
      }
    }
    return U;
  }
  function I(D) {
    for (var sa = arguments, U = 1, Pa = sa[0], Na; U < sa.length; ++U) {
      0 > ta(Pa, Na = sa[U]) && (Pa = Na);
    }
    return Pa;
  }
  function V(D) {
    return D === D + "" ? D : D === D - 0 ? "" + D : D.min && D.max ? D.min + "~" + D.max : D.min ? D.min + "~" : "~" + D.max;
  }
  var ta = Wa.conpare, c = ja.userAgent, ba = ja.appVersion, fb = Oa(ba) || 0, R = ja.platform, Xa = T.documentElement, Ia = Xa && Xa.style, m = T.documentMode, Qa = H.width;
  H = H.height;
  var gb = A.HTMLAudioElement, B = A.performance, W = A.Int8Array, hb = A.ontouchstart !== Ma, Sa = n(ba, "Version/") || n(c, "Version/"), Fa = A.operamini, ka = !Fa && A.opera, Mb = ka && (ka.version && "function" === typeof ka.version ? ka.version() : I(n(c, "Opera "), Sa, fb)), Ga = A.opr, rb = !ka && (T.all || m);
  m = rb && (m ? m : A.XMLHttpRequest ? T.getElementsByTagName ? 7 : 4 : T.compatMode ? 6 : (0).toFixed ? 5.5 : A.attachEvent ? 5 : 4);
  Xa = !rb && Xa.msContentZoomFactor;
  var Ya = !Xa && (A.chrome || A.chromium), ib = !rb && function() {
    for (var D in Ia) {
      if (0 === D.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Fb = k(c, "UCWEB"), Nb = Fb && n(c, " U2/"), Wb = Fb && n(c, "; wds "), Za = n(c.split("_").join("."), "; iPh OS "), va = n(c, "; Adr "), nb = k(ba, "YJApp-ANDROID"), Ja = k(R, "Android") || ib && k(ba, "Android") || nb;
  va = n(R, "Android ") || n(ba, "Android ") || n(c, "Android ") || va;
  var sb = k(R, "Linux"), ob = "MacIntel" === R && ja.standalone !== Ma, jb = ib && n(c, "Goanna/"), wa = !jb && ib && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Xb = n(c, "Firefox/"), P = n(c, "Opera/"), Gb = A.FNRBrowser, Ca = Aa(c, "AppleWebKit/"), kb = n(c, "Chrome/"), Ob = n(ba, "Iron/"), Ab = n(c, "OPR/"), Pb = n(ba, "KHTML/"), Hb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var ca = n(c, "Silk/"), lb = Aa(c, "SamsungBrowser/"), Bb = !lb && function() {
    for (var D = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    sa, U = D.length; sa = D[--U];) {
      if (k(c, sa)) {
        return 2 > Oa(Sa) ? Sa : 0.9;
      }
    }
    D = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (U = D.length; sa = D[--U];) {
      if (k(c, sa)) {
        return Sa;
      }
    }
  }(), tb = Ya && 534.3 >= Ca, mb = Lb(R), $a = mb && !k(c, R) && Lb(c);
  hb = hb && (Ca || ib) && $a || !va && nb;
  nb = !!A.ReactNativeWebView;
  mb = mb && function() {
    for (var D in A) {
      if (0 === D.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ta = ($a = A.puffinDevice) && $a.clientInfo;
  Ta = ($a = Ta && "iOS" === Ta.os && Ta.osVersion) && Ta.model;
  var Cb = !m && T.registerElement, Qb = !m && T.execCommand, ab = A.webkitCancelAnimationFrame, Ib = sb && Cb && "11.0.696.34" === kb, ub = A._firefoxTV_playbackStateObserverJava, Rb = Aa(c, "diordnA ");
  if ("Nitro" === R) {
    var t = 1;
  } else if ("Nintendo DSi" === R) {
    t = 2;
    var q = P;
  } else if ("New Nintendo 3DS" === R || k(c, "iPhone OS 6_0") && 320 === Qa && 240 === H) {
    t = 4, q = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === R) {
    t = 3, q = n(c, "Version/"), Ca = 535;
  } else if ("Nintendo Swicth" === R) {
    t = 7, q = n(ba, "NintendoBrowser/");
  } else if (A.wiiu) {
    t = 6;
    q = n(ba, "NintendoBrowser/");
    var Z = 15, F = n(ba, "AppleWebKit/") || (ab ? 536 : 534);
    q || (q = ab ? 4 : 2, k(ba, "Macintosh;") || k(ba, "Windows NT") && k(ba, "Touch"));
  } else if (ka && ka.wiiremote) {
    t = 5, q = n(c, "Wii; U; ; ");
  } else if (P = n(c, "PlayStation Vita ")) {
    t = 10, q = P;
  } else if (P = n(c, "(PlayStation Portable); ")) {
    t = 8;
    q = P;
    var vb = 3.3;
  } else if (P = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 ")) {
    t = 11, q = P, 0 > ta("4.10", P) && (Z = 26, F = P);
  } else if (k(c, "Xbox One")) {
    t = 15, q = 1;
  } else if (k(c, "Xbox")) {
    t = 14, q = 1;
  } else if (2 === fb && k(c, "Sony/COM2/")) {
    t = 17;
    q = 2;
    vb = 3.4;
    var wb = !0;
  } else if (0 === R.indexOf("iP") || Za || $a || ob) {
    if ($a) {
      switch(q = $a, Ta.substr(0, 4)) {
        case "iPho":
          var Ka = 0;
          n(Ta, Ka);
          var pa = !0;
          break;
        case "iPad":
          Ka = 1;
          n(Ta, Ka);
          var Da = !0;
          break;
        case "iPod":
          Ka = 2;
          n(Ta, Ka);
          var xb = !0;
      }
    } else {
      Za ? q = Za : (q = n(ba.split("_").join("."), "OS "), eb("isSecureContext", A), eb("enableWebGL", A), eb("sameOrigin", A));
      if (!q || Gb) {
        q = A.PointerEvent ? 13 : A.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ja.sendBeacon ? 11.3 : A.WebAssembly ? 11.2 : A.HTMLMeterElement ? 10.3 : A.Proxy ? 10.2 : A.HTMLPictureElement ? 9.3 : db.isNaN ? 9.2 : A.SharedWorker ? B && B.now ? 8 : 8.4 : Qb ? 7.1 : A.webkitURL ? 6.1 : A.Worker ? 5.1 : W ? 4.3 : gb ? 4.1 : 3.2;
      }
      var xa = Qa === 1.5 * H || 1.5 * Qa === H;
      0 === R.indexOf("iPhone") ? (Ka = 0, pa = !0) : 0 === R.indexOf("iPad") || ob ? (Ka = 1, Da = !0) : 0 === R.indexOf("iPod") && (Ka = 2, xb = !0);
    }
    Z = !$a && (ja.standalone || (Da || 12 > q) && eb("webkitFullscreenEnabled", T) || 11 <= q && 13 > q && ja.mediaDevices) ? 16 : 17;
    t = 24;
    F = q;
  } else if (k(c, "Kobo")) {
    t = 18, Z = 21, F = 2.2, Ja = !0;
  } else if (k(c, "EBRD")) {
    t = 19, Z = 21, F = 2.2;
  } else if (P = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    t = 28, q = P;
  } else if (A.onmoztimechange !== Ma) {
    t = 29, q = 18.1 > wa ? "1.0.1" : 19 > wa ? 1.1 : 27 > wa ? 1.2 : 29 > wa ? 1.3 : 31 > wa ? 1.4 : 33 > wa ? 2 : 35 > wa ? 2.1 : 38 > wa ? 2.2 : 45 > wa ? 2.5 : 2.6, k(c, "Mobile") ? pa = !0 : k(c, "Tablet") ? Da = !0 : k(c, "TV");
  } else if (A.palmGetResource) {
    t = 30, q = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (pa = !0);
  } else if (P = n(c, "Tizen ")) {
    t = 31, q = P, Z = 24, F = lb, pa = !0;
  } else if (P = n(c, "Windows Phone ") || n(ba, "Windows Phone OS ") || Wb) {
    t = 23, q = P, pa = !0;
  } else if (Xa && "ARM" === R) {
    t = 23, q = 10, pa = !0;
  } else if (rb && k(ba, "ZuneWP")) {
    t = 23, q = 11 === m ? 8.1 : 10 === m ? 8 : 9 === m ? 7.5 : 7 === m ? 7 : "?", pa = !0;
  } else if (k(c, "FOMA;")) {
    t = 16, pa = !0;
  } else if (k(c, "SoftBank;")) {
    t = 16, pa = !0;
  } else if (k(c, "KFMUWI")) {
    var Ha = !0;
    q = 6.3;
    var Ea = Da = !0;
  } else if (k(c, "KFKAWI")) {
    Ha = !0, q = 6, Ea = Da = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    Ha = !0, q = 5, Ea = Da = !0;
  } else if (k(c, "KFGIWI")) {
    Ha = !0, q = 5, Ea = Da = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    Ha = !0, q = 5 <= Oa(va) ? 5 : 4, Ea = Da = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    Ha = !0, q = 3, Ea = Da = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    Ha = !0, q = 2, Ea = Da = !0;
  } else if (k(c, "Kindle Fire")) {
    Ha = !0, q = 1, Ea = Da = !0;
  } else if (P = n(c, "Kindle/")) {
    t = 20, q = P, Z = 21, F = 2.2;
  } else if (ub) {
    Ha = !0, q = va || Rb, Ea = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    Ha = !0, q = va, Ea = !0;
  } else if (k(c, "MeeGo")) {
    t = 32;
  } else if (k(c, "Maemo")) {
    t = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || Hb) {
    t = 22, wb = !0;
  } else if ("WinCE" === R) {
    t = 21, wb = !0;
  } else if (0 === R.indexOf("Win")) {
    t = "Win16" === R ? 35 : "Win32" === R ? 36 : "Win64" === R ? 37 : 0, q = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === R.indexOf("Mac")) {
    t = "Mac68K" === R ? 39 : "MacPowerPC" === R || "MacPPC" === R ? 38 : "MacIntel" === R ? 40 : 0;
    if (P = n(c.split("_").join("."), "Mac OS X ")) {
      q = P;
    }
    var Sb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    t = 34, q = Sa, pa = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    t = 42;
  } else if (k(c, "FreeBSD")) {
    t = 43;
  } else if (k(c, "OpenBSD")) {
    t = 44;
  } else if (k(c, "NetBSD")) {
    t = 45;
  } else if (Ja && ib) {
    k(c, "Android 4.4;") ? xa = {min:2.3} : 4 <= Oa(va) ? xa = va : xa = {min:2.2}, q = xa;
  } else if (Ja && ka) {
    va ? xa = va : xa = {min:1.6}, q = xa, k(c, "Tablet") ? Da = !0 : pa = !0;
  } else if (va) {
    q = va, Ja = !0;
  } else if (sb && hb || nb || mb) {
    var bb = !0;
    lb ? xa = {min:4.4} : Ya && !tb || Ga || Ab ? xa = {min:4} : (xa = va = Ia.touchAction !== Ma ? {min:5} : Cb ? 4.4 : W ? ja.connection ? A.searchBoxJavaBridge_ || Ya ? db.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ca ? 3 : 533 <= Ca ? gb ? 2.3 : 2.2 : 530 <= Ca ? 2 : 1.5, Bb && (Z = 24, F = Bb));
    q = xa;
    Ja = !0;
  } else {
    Ib ? (q = {min:5}, bb = Ja = !0) : sb && (k(c, "Ubuntu") ? t = 46 : (P = n(c, "Mint/")) ? (t = 47, q = P) : (P = n(c, "Fedora/")) ? (t = 48, q = P) : t = k(c, "Gentoo") ? 49 : 50);
  }
  Ha || Ja && bb && ca ? t = 27 : Ja && (t = t || 26);
  Z || (Ea = Ea || Ja, ka ? (Z = Ea || wb || pa || Da ? 9 : 8, F = Mb) : rb ? (xa = Aa(ba, "Trident/") + 4, Z = wb || pa || Da || xb ? 3 : Sb && 5 <= m ? 7 : 2, F = m) : Xa ? (Z = 23 === t ? 6 : 5, F = n(ba, "Edge/")) : jb ? (Z = 13, F = jb) : ib ? (Z = Ea ? 12 : 11, F = wa || Xb) : lb ? (Z = 24, F = lb) : (P = vb || n(c, "NetFront/")) ? (Z = 18, F = P) : (P = n(c, "iCab")) ? (Z = 19, F = P) : (P = I(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || Fa && Sa) ? (Z = 10, F = P, t || (k(c, "iPhone") ? Ka = 
  0 : k(c, "iPad") ? Ka = 1 : k(c, "iPod") && (Ka = 2), Ka && (t = 24))) : Fb ? (Z = 25, F = Nb) : Pb ? (Z = 14, F = fb) : Ja && tb ? (Z = 21, F = va) : Ya || Ga || Ab ? (Z = Ea ? 22 : 20, F = kb || Ob) : Ja && Cb ? (Z = 23, F = 5 > Oa(va) ? va : kb) : Ja && (Sa || bb) ? (Z = 21, F = va) : kb ? (Z = Ea ? 22 : 20, F = kb) : Ca && (Z = 15, F = Ca));
  t && (Wa[2] = t, q && (Wa[3] = V(q)));
  Z && (Wa[0] = Z, F && (Wa[1] = V(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var yb;
(function(Wa, A, T, ja, H, Oa, db, Ma, Aa, k, Lb, eb, n, I) {
  function V(l) {
    if (A[0] === l) {
      return Ia === Ia + "" ? Aa(Ia) : Ia;
    }
  }
  function ta(l) {
    var v = A[3];
    if (A[2] === l) {
      return v === v + "" ? Aa(v) : v;
    }
  }
  function c(l, v, fa) {
    l + "" === l && ("a" === l.charAt(2) && (fa = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > B ? 117 : .9 > W || 9 > m || 9 > B || Qa ? 1 : 132 : parseInt(l, 16));
    fa && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (v || 2));
  }
  var ba = H.body, fb = ba.style, R, Xa, Ia = A[1], m = V(2) || V(3), Qa = V(7), gb = V(5) || V(6), B = V(8) || V(9), W = V(11) || V(12), hb = W && 0 <= A.conpare(Ia, "1.9.1"), Sa = V(13), Fa = V(15), ka = V(16) || V(17), Mb = V(10) || V(25), Ga = V(20) || V(22), rb = V(23), Ya = V(21), ib = V(24), Fb = Ga || rb || Ya || ib, Nb = Ga && Aa(Oa.userAgent.split("Edg/")[1]), Wb = Aa(Oa.appVersion.split("Trident/")[1]) + 4, Za = ta(35) || ta(36) || ta(37), va = ta(38) || ta(39) || ta(40) || ta(41), nb = 
  .9 > W, Ja = (Qa ? "ie5mac" : 5.5 > m ? "ie5win" : 6 > m ? "ie55" : 10 > m ? "ie" + (m | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : W && !hb ? 1.4 <= W ? "gck19" : 1.3 <= W ? "gck13" : 1 <= W ? "gck12" : nb ? .8 <= W ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  ta(1) || ta(2) || ta(3) || ta(4) || ta(8) || ta(9) || ta(10);
  var sb, ob, jb, wa = 8 > m || 7.2 > B ? !1 : I, Xb = fb.transform !== I ? "transform" : fb["-o-transform"] !== I ? "-o-transform" : fb["-ms-transform"] !== I ? "-ms-transform" : fb.MozTransform !== I ? "-moz-transform" : fb["-webkit-transform"] !== I ? "-webkit-transform" : "", P = [], Gb = [], Ca = [], kb, Ob, Ab, Pb, Hb = 525 > Fa || 3.1 > ka || 2.2 > Ya || 10 > B || W && !hb || V(25) || 10 > V(3) || ta(32) || ta(30) || ta(3), ca, lb, Bb, tb = [], mb = [], $a, Ta, Cb, Qb, ab = Ma.now || function() {
    return +new Ma();
  };
  (function() {
    function l() {
      for (var x, a = 0, b = ab(); a < C.length;) {
        b < C[0].t ? ++a : (x = C.splice(a, 1)[0], x.f(x.p));
      }
      X = C.length ? k(l, Q) : 0;
    }
    function v() {
      for (var x, a = 0; a < da.length; ++a) {
        x = da[a], x.f();
      }
    }
    function fa() {
      la && (la = n(la));
    }
    function oa() {
      X && (X = Lb(X));
    }
    p = function(x) {
      tb.push(x);
    };
    yb = function(x) {
      mb.push(x);
    };
    Bb = function(x) {
      da.length || (la = eb(v, qa));
      da.push({f:x, l:++ra});
      return ra;
    };
    $a = function() {
      la && (fa(), la = eb(v, qa));
    };
    Ta = fa;
    var da = [], qa = 500, ra = 0, la;
    if (5 > m || Qa) {
      T._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    ca = function(x, a, b) {
      C.length || (X = k(l, Q));
      C.push({f:x, p:a, l:++J, t:ab() + (Q < b ? b : Q)});
      return J;
    };
    lb = function(x) {
      for (var a = C.length, b; b = C[--a];) {
        if (b.l === x) {
          C.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Cb = function() {
      X && (oa(), X = k(l, Q));
    };
    Qb = oa;
    var C = [], Q = ka | 0 ? 64 : 16, J = 0, X;
    p("[core] TIMER_INTERVAL:" + Q);
    if (5 > m || Qa) {
      T._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var Ib, ub, Rb, t, q, Z, F, vb, wb, Ka, pa, Da, xb, xa, Ha, Ea, Sb, bb, D, sa, U, Pa;
  (function() {
    function l(a, b, d) {
      var u = ["<", a], z = 1, S, na;
      if (b) {
        for (S in b) {
          var h = b[S];
          if (null != h && "" !== h) {
            if ("style" === S) {
              u[++z] = ' style="';
              for (na in h) {
                for (var K = ++z, Y, ha = [], e = na.split(""), f = e.length; f;) {
                  Y = e[--f], "A" <= Y && "Z" >= Y && (Y = "-" + Y.toLowerCase()), ha[f] = Y;
                }
                u[K] = ha.join("") + ":" + h[na] + ";";
              }
              u[++z] = '"';
            } else {
              "className" === S && (S = "class"), u[++z] = " " + S + '="' + h + '"';
            }
          }
        }
      }
      u[++z] = ">";
      null != d && (J && "font" !== a ? u[++z] = "<font>" + v(d) + "</font>" : u[++z] = v(d));
      u[++z] = "</" + a + ">";
      return u.join("");
    }
    function v(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function fa(a) {
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
      a = J ? b ? H.all : H.all.tags(a.toUpperCase()) : 6 > m && b ? H.all : H.getElementsByTagName(a);
      b = [];
      for (var d = 0, u = a.length; d < u; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function da(a) {
      return J ? a.parentElement : a.parentNode;
    }
    function qa(a, b, d, u, z, S) {
      if (J) {
        var na = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var h = q(2 > a ? t(b) : b);
        h = 2 > a ? h.indexOf(b) + a : h.length;
        b.insertAdjacentHTML(na, l(d, u, z));
        b = q(b)[h];
        null != z && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (X) {
        b = H.createElement(l(d, u));
      } else {
        b = S ? H.createElementNS("http://www.w3.org/2000/svg", d) : H.createElement(d);
        if (u) {
          for (na in u) {
            if ((a = u[na]) || 0 === a) {
              switch(na) {
                case "class":
                case "className":
                  Sb(b, a);
                  break;
                case "style":
                  S = b.style;
                  for (h in a) {
                    S[h] = a[h];
                  }
                  break;
                default:
                  xa(b, na, a);
              }
            }
          }
          !B || "a" !== d && "A" !== d || !u.href || u["tag-index"] || u.tagIndex || xa(b, "tagIndex", "-0");
        }
        x || null != z && ra(b, z);
      }
      return b;
    }
    function ra(a, b) {
      if (J) {
        return qa(2, a, "font", I, b);
      }
      var d = H.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function la(a, b) {
      9 > m ? a.className = b : a.setAttribute("class", b);
    }
    function C(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function Q(a, b, d) {
      if (8 > B || 5.5 > m) {
        b = fa(b);
      }
      a.style[b] = d;
    }
    var J = 5 > m;
    R = oa("html")[0];
    Xa = oa("head")[0];
    Ib = function(a) {
      return T[a] || H[a] || H.getElementById(a);
    };
    ub = oa;
    Rb = function(a) {
      var b = [], d = 0, u, z = -1;
      if (9 > m || !H.getElementsByClassName) {
        var S = 6 > m ? H.all : H.getElementsByTagName("*");
      } else {
        var na = !0;
        S = H.getElementsByClassName(a);
      }
      for (u = S.length; d < u; ++d) {
        var h = S[d];
        if (na || (J || 1 === h.nodeType) && C(h, a)) {
          b[++z] = h;
        }
      }
      return b;
    };
    t = da;
    q = function(a) {
      a = J ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    Z = function(a) {
      var b = !(7.03 < B && 7.2 > B) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], u = a.length, z = -1, S; u;) {
        if (S = a[--u], b || 1 === S.nodeType) {
          J && "FONT" === S.tagName || (d[++z] = S);
        }
      }
      return d;
    };
    F = function(a, b, d, u, z) {
      b = qa(2, a, b, d, u, z);
      J || (a.appendChild(b), x && null != u && ra(b, u));
      return b;
    };
    vb = function(a, b, d, u, z) {
      b = qa(0, a, b, d, u, z);
      J || (da(a).insertBefore(b, a), x && null != u && ra(b, u));
      return b;
    };
    wb = ra;
    Ka = function(a, b) {
      if (J) {
        return qa(0, a, "font", I, b);
      }
      var d = H.createTextNode("" + b);
      t(a).insertBefore(d, a);
      return d;
    };
    pa = function(a) {
      t(a) ? J ? a.outerHTML = "" : (5.5 > m && (a.style.filter = ""), t(a).removeChild(a)) : p("[DOM] p_DOM_remove(), No parentNode!");
    };
    var X = 9 > m, x = X;
    Da = function(a) {
      return a.tagName.toUpperCase();
    };
    xb = function(a, b) {
      if (8 > B || 5.5 > m) {
        b = fa(b);
      }
      var d = a.getAttribute(b);
      return B && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    xa = function(a, b, d) {
      if (B && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > B || 5.5 > m) {
          b = fa(b);
        }
        a.setAttribute(b, d);
      }
    };
    Ha = function(a, b) {
      if (B && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > B || 5.5 > m) {
          b = fa(b);
        }
        a.removeAttribute(b);
      }
    };
    Ea = function(a, b) {
      if (B && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > B || 5.5 > m) {
        b = fa(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Sb = la;
    bb = C;
    D = function(a, b) {
      var d;
      if (!C(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        la(a, d + b);
      }
    };
    sa = function(a, b) {
      if (C(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        la(a, d.join(" "));
      }
    };
    U = Q;
    Pa = function(a, b) {
      var d, u = -1, z;
      if (5.5 > m) {
        if (d = 5.5 > m ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); z = d[++u];) {
            Q(a, z.split(":")[0], "");
          }
        }
        if (b) {
          for (u = -1, d = b.split(";"); z = d[++u];) {
            var S = z.split(":")[0];
            Q(a, S, z.substr(S.length + 1));
          }
        }
      } else if (7.1 > B) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); z = d[++u];) {
            z = z.split(":"), Q(a, z[0], z[1]);
          }
        }
      } else {
        9 > B || 1 > W ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var Na, Yb, Db, Jb, zb, Zb, Tb, ya, Ub;
  (function() {
    function l() {
      return h ? Y ? 2 : K ? 3 : 1 : 0;
    }
    function v(e) {
      Yb(T, "load", v);
      v = I;
      oa(P, e, !0);
      P = I;
    }
    function fa(e, f) {
      zb(function() {
        var L = C(e);
        f(L);
        L.addListener(f);
        return !0;
      });
    }
    function oa(e, f, L) {
      for (var g = 0; g < e.length; ++g) {
        !0 === e[g](f) && (e.splice(g, 1), --g);
      }
      L && (e.length = 0);
    }
    function da(e, f, L) {
      P || J.length || ca(qa);
      J.push(e, f, L);
    }
    function qa() {
      var e = J, f;
      for (J = []; f = e.shift();) {
        oa(f, e.shift(), e.shift());
      }
    }
    function ra(e) {
      var f = e || event;
      e = x[f.type];
      var L = -1, g, M;
      5 > m ? f = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : m ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : b && (f.j = f.stopPropagation, f.stopPropagation = function() {
        M = !0;
      });
      for (; g = e[++L];) {
        g.i === this ? (this.g = g.h, m && (f.currentTarget = this), this.g(f), m ? (this.g = ja, this.g = I) : delete this.g) : 7.2 > B && this === H && g.i === T && (T.g = g.h, T.g(f), delete T.g);
      }
      if (m) {
        return f.preventDefault = f.stopPropagation = ja, f.preventDefault = f.stopPropagation = I, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (u = !0), M && !u && f.j(), f.j = f.stopPropagation = I);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function la() {
      var e = 9 === Q.offsetWidth;
      Tb !== e && (da(Gb, Tb = e), p("p_cssAvailability:" + Tb));
    }
    var C = T.matchMedia, Q, J = [];
    P.push(function() {
      fa = I;
      Q = F(ba, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Db(function() {
        J.length && ca(qa);
      });
    });
    Na = function(e, f, L, g) {
      if (d) {
        e.addEventListener(f, L, g ? X ? g : g.capture || !0 === g : !1);
      } else {
        var M = {i:e, h:L};
        g = x[f];
        var r = "on" + f, O, Ba;
        if (g) {
          for (O = g.length; Ba = g[--O];) {
            if (Ba.i === e && Ba.h === L) {
              return;
            }
          }
          x[f].push(M);
        } else {
          x[f] = g = [M], a || (f = e[r], "function" === typeof f && f !== ra && g.unshift({i:e, h:f}));
        }
        a ? e.attachEvent(r, ra) : e[r] = ra;
      }
    };
    Yb = function(e, f, L, g) {
      if (d) {
        e.removeEventListener(f, L, g ? X ? g : g.capture || !0 === g : !1);
      } else {
        g = x[f];
        f = "on" + f;
        var M, r, O;
        if (g) {
          for (M = g.length; r = g[--M];) {
            r.i === e && (r.h === L ? g.splice(M, 1) : O = !0);
          }
          O || (a ? e.detachEvent(f, ra) : m ? (e[f] = ja, e[f] = null) : delete e[f]);
        }
      }
    };
    var X = !m && !Qa && (new db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), x = {}, a = !1, b = 525.13 > Fa, d = !b && !Qa && T.addEventListener, u;
    b && R.addEventListener("click", function(e) {
      if (u) {
        return u = !1, e.preventDefault(), !1;
      }
    });
    Db = function(e) {
      P ? P.push(e) : alert("Load event has already been dispatched!");
    };
    Jb = function(e) {
      z && z.push(e);
    };
    var z = [];
    if (419.3 >= Fa) {
      var S = function() {
        if (S) {
          var e = H.readyState;
          "loaded" === e || "complete" === e ? (S = I, v()) : ca(S);
        }
      };
      ca(S);
    } else {
      Na(T, "load", v), nb && ca(function() {
        v && v();
      }, 999);
    }
    m || !nb && 1.8 > W ? Na(T, "unload", function(e) {
      oa(z, e, !0);
    }) : z = I;
    zb = function(e) {
      Gb.push(e);
    };
    Db(function() {
      la();
      Bb(la);
    });
    Zb = function(e) {
      Ca && Ca.push(e);
    };
    var na = 60 > W || Sa, h, K, Y;
    if (89 <= W || 89 <= Ga || Za && 79 <= Nb || C && (C("(forced-colors:none)").matches || C("(forced-colors:active)").matches)) {
      Ub = !0, fa("(forced-colors:active)", function(e) {
        h = e.matches;
        ya = l();
        da(Ca, ya);
        p("(forced-colors:active):" + ya);
      });
    } else if (10 <= m || gb || Za && Nb) {
      Ub = !0, fa("(-ms-high-contrast:black-on-white)", function(e) {
        h = K = e.matches;
        ya !== l() && (ya = l(), da(Ca, ya), p("(-ms-high-contrast:black-on-white):" + ya));
      }), fa("(-ms-high-contrast:white-on-black)", function(e) {
        h = Y = e.matches;
        ya !== l() && (ya = l(), da(Ca, ya), p("(-ms-high-contrast:white-on-black):" + ya));
      }), fa("(-ms-high-contrast:active)", function(e) {
        h = e.matches;
        ya !== l() && (ya = l(), da(Ca, ya), p("(-ms-high-contrast:active):" + ya));
      });
    } else if (Za && (m || W && 0 <= A.conpare(Ia, "1.8.1") || Sa)) {
      var ha = function() {
        function e(g, M) {
          if (M && "transparent" === g) {
            return 382.5;
          }
          if ("#" === g.charAt(0)) {
            return parseInt("0x" + g.substr(1, 2), 16) + parseInt("0x" + g.substr(3, 2), 16) + parseInt("0x" + g.substr(5, 2), 16);
          }
          var r = g.split("(")[1].split(",");
          return Aa(r[0]) + Aa(r[1]) + Aa(r[2]);
        }
        var f = H.defaultView;
        var L = f ? f.getComputedStyle(Q, null) : Q.currentStyle;
        f = (L && L.color || "").split(" ").join("");
        L = (L && L.backgroundColor || "").split(" ").join("");
        f && (h = "#123456" !== f && "rgb(18,52,86)" !== f, K = e(f) < e(L, !0), Y = e(f) > e(L, !0), ya !== l() && (ya = l(), p("(forced-colors-fallback):" + ya), da(Ca, ya, na)));
      };
      zb(function(e) {
        if (e) {
          return U(Q, "color", "#123456"), U(Q, "backgroundColor", "#123456"), na ? (ha(), Ca = I) : Bb(ha), ha = I, !0;
        }
      });
    } else {
      Ca = l = I;
    }
  })();
  (function() {
    function l(E) {
      switch(E) {
        case 1:
          return z;
        case 2:
          return !!S;
        case 3:
          return !!na;
        case 4:
          return !!h;
        case 5:
          return Y;
        case 6:
          return K && !J;
      }
      return !1;
    }
    function v(E) {
      ha(E);
      za && !E && pa(za);
      ha = e = f = L = g = M = Ba = ma = za = Ua = I;
    }
    function fa(E) {
      var G = '1.6em "' + E + '"';
      p("[webFontTest] testByNativeFontLoaderAPI start.");
      H.fonts.load(G).then(function(w) {
        p("[webFontTest] fonts.check() : " + H.fonts.check(G, "i") + ", fonts.length : " + w.length);
        (w = qa(e)) ? ca(v, w) : (p("[webFontTest] mesureWebFont() : false"), da(!0));
      }, function(w) {
        p("[webFontTest] fonts.load() rejected! " + w);
        wa !== I ? ra(wa) : kb(ra);
      });
    }
    function oa(E) {
      return H.hidden || H.msHidden || H.mozHidden || H.webkitHidden ? (O = ab(), !1) : E < ab() - O;
    }
    function da(E) {
      E && (p("[webFontTest] testWebFont start."), O = ab());
      (E = qa(e, r)) ? (p("[webFontTest] testWebFont mesurement success : " + E), v(E)) : oa(r) ? (p("[webFontTest] testWebFont timeout!"), Ba ? la() : Q ? v(0) : wa !== I ? ra(wa) : kb(ra)) : ca(da);
    }
    function qa(E, G) {
      var w = 0, y = -1, aa = [];
      if (!Ua) {
        var ia = -1;
        var ea;
        ma = F(ba, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, b);
        for (Ua = []; ea = u[++ia];) {
          U(ma, "fontFamily", ea), Ua[ia] = ma.offsetWidth;
        }
        p("[webFontTest] default width " + Ua.join(", "));
      }
      for (5 > m ? ma || (ma = F(ba, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, b)) : ba.appendChild(ma); ia = u[++y];) {
        U(ma, "fontFamily", '"' + E + '",' + ia);
        var N = ma.offsetWidth;
        d ? aa[y] = N : (aa[y] = N, N !== Ua[y] && (w = 1));
      }
      if (d && N === aa[0] && N === aa[1]) {
        for (p("[webFontTest] Hit... : width=" + N), w = 1, y = -1; 0 <= (N = Ua[++y]);) {
          if (N === aa[0] && N === aa[1] && N === aa[2]) {
            p("[webFontTest] Failed! : font[" + y + "]=" + u[y]);
            w = 0;
            break;
          }
        }
      }
      !m && w && g && (ma.textContent = g, N = ma.offsetWidth, ma.textContent = M, w = N === ma.offsetWidth ? 2 : 1, ma.textContent = b);
      pa(ma);
      5 > m && (ma = I);
      G && (w || oa(G)) && p("[webFontTest] " + E + " " + aa.join(", "));
      return w;
    }
    function ra(E) {
      p("[webFontTest] onTestDataURIComplete : " + E);
      E ? (Ba = !0, r = a, p("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), la()) : v(0);
    }
    function la() {
      if (f) {
        for (; f.length;) {
          var E = f.shift(), G = f.shift();
          if (l(E)) {
            p("[webFontTest] maybe can use! " + G);
            za = Pb(G, C, L, za);
            return;
          }
        }
      }
      v(0);
    }
    function C(E) {
      E ? da(!0) : la();
    }
    Gb.splice(0, 0, function() {
      if (Tb) {
        jb = 8 <= m || gb || 9.5 <= B || hb || Sa || 522 <= Fa || 3 <= ka || Mb || Fb ? 3 : 7.2 <= B ? 2 : 6 <= B || W ? 1 : 0;
        if (!jb && !m && !Qa) {
          var E = F(ba, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          jb = 6 <= E.offsetWidth ? 2 : 0;
          pa(E);
        }
        p("p_cssGeneratedContentGrade:" + jb);
        return !0;
      }
    });
    kb = !1 === wa ? function(E) {
      ca(E, !1);
    } : function(E) {
      function G(aa) {
        y && (y = lb(y), wa = aa, w.onload = w.onerror = ja, ca(E, aa));
      }
      if (wa !== I) {
        p("[dataURITest] already done : " + wa), ca(E, wa);
      } else {
        p("[dataURITest] start!");
        var w = new Image(), y = ca(G, !1, 999);
        w.onerror = function() {
          p("[dataURITest] no DATA URI!");
          G(!1);
        };
        w.onload = function() {
          p("[dataURITest] DATA URI:" + (1 === w.width * w.height));
          G(1 === w.width * w.height);
        };
        w.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > m && Db(function() {
      var E = F(ba, "div");
      Pa(E, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sb = 1 < E.offsetHeight;
      pa(E);
    });
    Ob = function(E, G) {
      function w() {
        if (aa || !ia || y.complete) {
          p("[imageTest] timer -> img.complete. img.width=" + y.width);
          var ea = !!y.width;
          ob = ob || ea;
          ca(E, ea);
          y.onerror = y.onload = ja;
          y = E = I;
        } else {
          --ia, ca(w);
        }
      }
      var y = new Image(), aa, ia = 99;
      p("[imageTest] start.");
      y.onerror = function() {
        p("[imageTest] error!");
        aa = !0;
      };
      y.onload = function() {
        p("[imageTest] onload.");
        aa = !0;
      };
      y.src = G;
      ca(w);
    };
    Ab = function(E, G, w, y, aa, ia, ea) {
      ha = E;
      e = G;
      f = w;
      L = y;
      g = aa;
      M = ia;
      r = ea || x;
      e = X + e;
      p("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      p("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!Hb);
      V(10) ? ca(v, 1) : Hb ? ca(v, 0) : !H.fonts || 603 > Fa || 11 > ka ? (p("[webFontTest] No native font loader."), da(!0)) : (p("[webFontTest] Use Native font loader."), fa(e));
    };
    var Q = 9 > m, J = 6 > Ga || B || 530 > Fa || 5 > ka, X = "bad_" + ab() + "_", x = 5E3, a = 500, b = "mmmmmmmmmmlliiiiiiiii", d = 21 > Ga || 7 > ka || Fa && 0 >= A.conpare(Ia, "536.11"), u = ["monospace", "sans-serif", "serif"];
    Hb || (d && Ga && p("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Ga), d && ka && p("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + ka), d && Fa && p("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + Fa));
    var z = 14 <= gb || 36 <= Ga || 39 <= W || 602 <= Fa && va && 0 <= A.conpare("10.12", va) || 10 <= ka, S = 6 <= Ga || W && 0 <= A.conpare(Ia, "1.9.2") || 533 <= Fa || 5 <= ka || 4.4 <= Ya || 11.5 <= B || gb || 9 <= V(2) || 10 <= V(3), na = 2 <= Ga || hb || 525 <= Fa || 4 <= ka || 2.2 <= Ya || 10.1 <= B || gb || 9 <= V(2) || 10 <= V(3), h = na, K = 5.1 <= Za && 5.2 >= Za && 40 > Ga || 6 <= Za && 6.1 > Za && 51 > Ga || 37 > Ga || 525 <= Fa || 3.1 <= ka || 3 <= Ya || 11.5 <= B, Y = 4 <= V(2) || 
    10 <= V(3), ha, e, f, L, g, M, r, O, Ba, ma, za, Ua;
  })();
  (function() {
    Pb = function(C, Q, J, X) {
      X = X || F(Xa, "link", {type:"text/css", rel:"stylesheet"});
      var x;
      if (la) {
        (x = Ib(J)) ? Ha(x, "id") : x = F(ba, "div", {"aria-hidden":"true", className:J});
        var a = x.offsetWidth;
        p("[CSS Loader] widthBeforeCSSLoaded = " + a);
        xa(x, "id", J);
      }
      ra(X, C, Q, x, a);
      return X;
    };
    var l = W && 0 > A.conpare(Ia, "0.9.1"), v = 11 <= m || gb || 9 <= B && 9.5 > B, fa = 11 > m, oa = 7.2 <= B && 7.5 > B, da = 9 > W && !l || 19 > Ga || 4.3 > Ya || 2 > ib || 536 > Fa || 6 > ka || 7 <= B && 9 > B && !oa, qa = !l && !v && !fa && !oa && !da, ra = qa ? function(C, Q, J) {
      p("[CSS Loader] onload + onerror");
      C.onload = o;
      C.onerror = function() {
        C.onload = C.onerror = null;
        ca(J, !1);
      };
      C.href = Q;
      function o() {
        C.onload = C.onerror = null;
        ca(J, !0);
      }
      o = !1;
    } : v ? function(C, Q, J, X, x) {
      p("[CSS Loader] onload + mesure");
      C.onload = o;
      C.href = Q;
      function o() {
        ca(J, la(X, x));
        C.onload = null;
        X = I;
      }
      o = !1;
    } : fa ? function(C, Q, J, X, x) {
      p("[CSS Loader] onreadystatechange + onerror");
      C.onreadystatechange = o;
      C.href = Q;
      function o() {
        "complete" === C.readyState && (ca(J, la(X, x)), X = I, C.m = ja);
      }
      o = !1;
    } : da || oa ? function(C, Q, J, X, x) {
      function a() {
        d && (u = lb(u), p("[CSS Loader] onComplete"), z = ab() + 999, ca(b, 0, 99), da ? d.onerror = null : d.removeEventListener("load", a, !1), d = I);
      }
      function b() {
        la(X, x) ? (X = I, ca(J, !0)) : ab() < z ? ca(b, 0, 99) : (X = I, ca(J, !1));
      }
      var d = new Image(), u = ca(a, 0, 5E3), z;
      da ? (p("[CSS Loader] img.onerror + mesure"), d.onerror = a) : (p('[CSS Loader] img.addEventListener("load") + mesure'), d.addEventListener("load", a, !1));
      d.src = C.href = Q;
    } : function(C, Q, J) {
      p("[CSS Loader] UNSUPPORTED");
      ca(J, !1);
    }, la = !qa && !l && function(C, Q) {
      p("[CSS Loader] elmTest.offsetWidth = " + C.offsetWidth);
      return C.offsetWidth !== Q;
    };
  })();
  var Vb = String.fromCharCode, cb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Vb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], $b = cb[7], jc = cb[113], ec = Vb(160);
  Vb(8194);
  var fc = cb[31], ac = cb[30], gc = cb[63], kc = cb[125], lc = cb[126], mc = Vb(59648), hc = (9 === m || W && 0 <= A.conpare(Ia, "1.8.1") || Sa) && !Ub, pb = [], qb, Va, Kb = 7.2 > B ? function() {
    qb = !qb;
    for (var l = -1, v; v = pb[++l];) {
      -1 !== v.className.indexOf("pbAlp") ? U(v, "display", qb ? "" : "none") : (D(v, qb ? "pbChrCS" : "pbChr00"), sa(v, qb ? "pbChr00" : "pbChrCS"));
    }
  } : hc ? function() {
    qb = !qb;
    for (var l = -1, v; v = pb[++l];) {
      U(v, "opacity", qb ? 1 : 0);
    }
  } : I;
  var bc = Wa.startBlinkingIfCursor = function(l) {
    Kb ? bb(l, "pbChrCS") && (Va || !B && !ya || (Va = eb(Kb, 400)), -1 === pb.indexOf(l) && pb.push(l)) : pb = I;
  };
  Wa.stopBlinkingIfCursor = function(l) {
    Kb && (l = pb.indexOf(l), 0 <= l && (pb.splice(l, 1), !pb.length && Va && (n(Va), Va = 0)));
  };
  hc && Zb(function(l) {
    l ? Va || (Va = eb(Kb, 400)) : Va && (n(Va), Va = 0);
  });
  Kb && Jb(function() {
    Va && n(Va);
  });
  Ub || Zb(function(l) {
    l ? (xa(R, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Xb || 9 === m || 5.5 <= m && 9 > m && sb) && D(R, "jsCanRotate")) : (Ha(R, "forced-colors"), sa(R, "jsCanRotate"));
  });
  (function() {
    function l(h) {
      a = h;
      p("[pbList] WebFont test result : " + !!h);
      h ? da() : ob ? oa(!0) : ob !== I ? da() : (p("[pbList] Need imageTest " + b), Ob(oa, b));
      p("window.offscreenBuffering = " + T.offscreenBuffering);
    }
    function v() {
      v = I;
      Ab(l, "PB-100", [1, Ra + "pbFont/woff2.css", 2, Ra + "pbFont/woff.css", 4, Ra + "pbFont/otf.css", 3, Ra + "pbFont/ttf.css", 6, Ra + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", gc);
    }
    function fa(h) {
      this.focus();
      h.preventDefault();
      h.stopPropagation();
    }
    function oa(h) {
      h ? (p("[pbList] Fallback start!"), D(ba, "pbList-noWebFont")) : p("[pbList] image disabled!");
      da();
    }
    function da() {
      for (l = Ab = I; x.length;) {
        qa(x.shift(), x.shift());
      }
      p("[pbList] complete.");
    }
    function qa(h, K) {
      function Y(M) {
        M = q(M);
        for (var r = -1, O; O = M[++r];) {
          switch(O.nodeType) {
            case 1:
              Y(O);
              break;
            case 3:
              O.data && e(O.data) && f.push(O);
          }
        }
      }
      function ha(M) {
        var r = M.children, O = 0, Ba = r.length;
        if (Ba) {
          for (; O < Ba; ++O) {
            ha(r[O]);
          }
        } else {
          (r = M.innerText) && e(r) && f.push(M);
        }
      }
      function e(M) {
        return M.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], L;
      if (l) {
        -1 === x.indexOf(h) && (x.push(h, K), d && v && v());
      } else {
        var g = x.indexOf(h);
        0 <= g && x.splice(g, 2);
        for (5 > m ? ha(h) : Y(h); L = f.shift();) {
          g = 5 > m ? L.innerText : L.data, 2 !== a ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join(ac)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join(ac)), a && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(gc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(mc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(kc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(lc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(fc)), K ? 5 > m ? L.innerText = g : L.data = g : ra(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(jc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join($b).split("&amp;").join("&"), L);
        }
      }
    }
    function ra(h, K) {
      function Y(ea, N) {
        for (var La = ""; N;) {
          N & 1 && (La += ea), N >>= 1, ea += ea;
        }
        return La;
      }
      function ha(ea, N, La) {
        for (var Eb, nc = -1, cc, dc; Eb = N[++nc];) {
          for (; 0 <= (cc = ea.indexOf(Eb));) {
            dc = Eb.length, ea = ea.substr(0, cc) + Y(La, dc) + ea.substr(cc + dc);
          }
        }
        return ea;
      }
      function e(ea) {
        var N = Aa(ea), La = "" + N;
        return 0 < N && N === N | 0 && (N = ea.indexOf(La) + La.length, N <= ea.length) ? N : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), L = 5 > m || 1 === K.nodeType, g = [], M = "", r, O = -1, Ba, ma, za;
      if (L) {
        if (S) {
          var Ua = K.style.visibility;
          U(K, "visibility", "hidden");
        }
        K.innerHTML = "";
      }
      if (na) {
        var E = K;
        K = H.createDocumentFragment();
      }
      if (function(ea) {
        var N = ea.indexOf("P");
        if (-1 === N) {
          return !1;
        }
        N = Aa(ea.charAt(N + 1));
        return 0 <= N && 9 >= N;
      }(h)) {
        M = Y("+", h.length);
      } else {
        0 <= (r = e(h)) && (M = Y("|", r), O = r, --O);
        for (; r = h.charAt(++O);) {
          r === $b || Ba ? (M += "~", r === $b && (Ba = !Ba)) : M += r;
        }
        M = ha(M, X, "^");
        M = ha(M, Q, "{");
        M = ha(M, J, "}");
      }
      O = 0;
      for (Ba = h.length; O < Ba; ++O) {
        r = h.charAt(O);
        var G = r === ec;
        var w = " " === r;
        r = G ? " " : r;
        var y = M.charAt(O);
        var aa = (ma = ia) && G;
        var ia = "|" === y;
        y = f["+|~{}^".indexOf(y) + 1];
        if ("\n" !== r) {
          if (a || !ob) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === h.substr(O, 3)) {
                r = "\u1d47/\u1d04", O += 2;
              } else {
                switch(h.substr(O, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    r = h.substr(O, 2), ++O;
                }
              }
            }
            y = w && "str" === y ? "pbList-strsp" : G ? "" : !w && y ? "pbList-" + y : "";
          } else {
            G = cb.indexOf(r), G = -1 === G ? "" : cb.indexOf(r).toString(16).toUpperCase(), G = (G = 1 === G.length ? "0" + G : G) ? "pbChr" + G : "", y = w && "str" === y ? "pbList-strsp" : w || !G ? "" : y ? (G ? G + " " : "") + "pbList-" + y : G;
          }
          G = I;
          aa ? (r = 6 <= m && 8 > m ? " " : ec, y = "") : ia && (W && !hb || 9.5 > B) ? (ia && !ma && (za = 4 - (Aa(h.substr(O)) + "").length), 7.5 > B ? G = z ? "position:relative;top:-4px;left:" + 12 * za + "px" : {position:"relative", top:"-4px", left:12 * za + "px"} : G = z ? "position:relative;left:" + 12 * za + "px" : {position:"relative", left:12 * za + "px"}) : w && 7.5 > B && (y = "pbList-strsp");
          z ? g.push("<font" + (y ? ' class="' + y + '"' : "") + (G ? ' style="' + G + '"' : "") + ">" + r + "</font>") : L || na ? F(K, "font", {"class":y, style:G}, r) : vb(K, "font", {"class":y, style:G}, r);
        } else {
          ma = ia = !1, z ? g.push(r) : L || na ? wb(K, r) : Ka(K, r);
        }
      }
      if (L) {
        z ? K.innerHTML = g.join("") : na && E.appendChild(K), S && U(K, "visibility", Ua);
      } else {
        if (z) {
          f = H.createElement("font");
          for (f.innerHTML = g.join(""); g = f.firstChild;) {
            K.parentNode.insertBefore(g, K);
          }
          pa(K);
        } else {
          na ? E.parentNode.replaceChild(K, E) : pa(K);
        }
      }
    }
    1.9 > W && zb(function(h) {
      if (h) {
        h = ub("*");
        for (var K = 0, Y = h.length, ha; K < Y; ++K) {
          ha = h[K], "B" !== Da(ha) && -1 !== (" " + ha.className).toLowerCase().indexOf(" pbchr") && (Ea(ha, "title") || xa(ha, "title", ha.textContent), ha.textContent = " ");
        }
        return !0;
      }
    });
    zb(function(h) {
      if (h) {
        h = Rb("pbChrCS");
        for (var K = 0, Y = h.length; K < Y; ++K) {
          bc(h[K]);
        }
        return !0;
      }
    });
    var la = [], C = W && 0 > A.conpare(Ia, "0.9.9");
    zb(function(h) {
      function K(w) {
        var y = xb(w, "pbTip");
        if (y) {
          var aa = y.charAt(0);
          var ia = "_" === aa;
          y = (ia ? y.charAt(2) : aa).toUpperCase().charCodeAt(0) - 65;
          g ? F(w, "div", {style:{left:7 * y + 3 + "px"}}) : (aa = xb(w, "title"), Ha(w, "pbTip"), Ha(w, "title"), ia = F(w, "div", {className:"pbTip" + (ia ? "Btm" : ""), style:{width:aa.length + ha + "em", left:7 * y - (C ? 0 : 5) + "px"}}, aa), ia = F(ia, "div"), .9 <= W && C && U(ia, "left", "2px"));
        }
        L && 0 <= w.className.indexOf("pbColor") && F(w, "u");
      }
      function Y(w, y) {
        var aa = xb(w, "pbGhst"), ia = w.className, ea = ia.split("pbCsr")[1] || "", N = ia.split("pbAlp")[1] || "";
        if ("CS" === aa) {
          var La = "_";
        } else {
          La = aa, 3 === La.length && (La = La.substr(0, 2)), La = cb[parseInt(La, 16)] || "~";
        }
        var Eb;
        ea = ea.split(" ")[0];
        if (N = Aa(N.split(" ")[0])) {
          e && (ia = ia.split("pbChr")[1].split(" ")[0], U(w, "backgroundPosition", c(ia, 2, Ua) + "px " + -24 * (10 - N) + "px")), !y && f && vb(w, "a").appendChild(w);
        }
        aa && (N = 10 - N, e && (Eb = {backgroundPosition:c(aa, 2, Ua) + "px " + -24 * (10 - N) + "px"}), Ha(w, "pbGhst"), O = vb(w, "b", {className:"pbChr" + aa + " pbCsr" + ea + " pbAlp" + N, style:Eb}, La), bc(O));
        bc(w);
      }
      if (h) {
        var ha = 6 > m ? 2 : 0, e = 7.2 > B || .9 > W || Qa, f = 1.1 === W, L = 1.4 > W;
        h = ub("SAMP");
        var g = 8 === m, M = jb, r, O, Ba, ma, za;
        sb && D(ba, "pbLCD-AX");
        if (h.length) {
          for (Ba = -1; r = h[++Ba];) {
            if (bb(t(r), "pbLCD")) {
              var Ua = bb(r, "PB-120") || bb(r, "FX-795P");
              var E = Z(r);
              for (r = E.length; za = E[--r];) {
                switch(Da(za)) {
                  case "A":
                    (2 > M || g) && K(za);
                    if (2 > M) {
                      var G = Z(za);
                      for (ma = G.length; ma;) {
                        Y(G[--ma], !0);
                      }
                    }
                    Mb ? xa(za, "href", "javascript:void(0)") : (Na(za, "click", fa), la.push(za));
                    break;
                  case "B":
                    2 > M && Y(za, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Jb(function() {
      for (var h; h = la.shift();) {
        Yb(h, "click", fa);
      }
    });
    6 === m && (new db("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(H);
    var Q = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), J = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), X = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + ac + fc).split(""), x = [], a, b, d;
    if (.9 <= W && 0 >= A.conpare(Ia, "0.9.1")) {
      D(R, "pbLCD-gecko09To091");
      var u = !0;
    }
    zb(function(h) {
      if (h) {
        b = Ra + "pbFont/x3mask" + (u ? ".gecko0.9.1.gif" : ".png");
        h = ub("*");
        for (var K = -1, Y; Y = h[++K];) {
          bb(Y, "pbList") ? qa(Y) : bb(Y, "pbFont") && qa(Y, !0);
        }
        x.length && (p("[pbList] " + x.length / 2 + " elements found. WebFont test start."), v());
        return !0;
      }
    });
    var z = !1, S = 8 > B, na = !z && !S && !(6 > m) && H.createDocumentFragment && !!ba.replaceChild;
    Wa.prettify = qa;
  })();
  var ic = H.scripts || ub("script");
  var Ra = ic[ic.length - 1].src.split("/");
  --Ra.length;
  (Ra = Ra.join("/")) && (Ra += "/");
  p("[p_assetUrl] " + Ra);
  Db(function() {
    var l;
    (l = Ib("logger")) || alert("#logger not found!");
    l ? (p = o, yb = function(v) {
      F(l, "DIV", {style:{color:"red"}}, v);
    }, T.onerror = function(v, fa, oa) {
      yb(v + ", " + fa + ", " + oa);
      return !0;
    }) : T.console ? (p = console.log, yb = console.error) : B ? (p = ja, yb = opera.postError) : p = yb = ja;
    for (; tb.length;) {
      p(tb.shift());
    }
    for (; mb.length;) {
      yb(mb.shift());
    }
    tb = mb = I;
    function o(v) {
      F(l, "DIV", I, v);
    }
    o = !1;
  });
  6.1 > ka && Na(T, "scroll", $a);
  Jb(Ta);
  6.1 > ka && Na(T, "scroll", Cb);
  Jb(Qb);
  10 > m && (11 !== Wb || 5 !== m) || (9 > B || 1 > W || !Qa && !T.addEventListener ? H.write('<link href="' + Ra + Ja + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : Db(function() {
    F(Xa, "link", {href:Ra + "" + Ja, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

