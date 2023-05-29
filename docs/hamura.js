/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Sa, y) {
  var Q = 0, ca, D, Ia = (Sa + "").split("."), $a = (y + "").split("."), ma = Ia.length;
  for (ca = $a.length; "0" === Ia[ma - 1];) {
    --ma;
  }
  for (; "0" === $a[ca - 1];) {
    --ca;
  }
  for (D = ma < ca ? ma : ca; Q < D; ++Q) {
    var na = Ia[Q] - 0, k = $a[Q] - 0;
    if (na !== k) {
      return na > k ? 1 : -1;
    }
  }
  return ma > ca ? 1 : ma === ca ? 0 : -1;
};
(function(Sa, y, Q, ca, D, Ia, $a, ma) {
  function na(x, da, R) {
    R = Ia(x.split(da)[1]);
    return 0 <= R ? R : 0;
  }
  function k(x, da) {
    return 0 <= x.indexOf(da);
  }
  function Ib(x) {
    return k(x, "Linux armv") || k(x, "Linux aarch") || k(x, "Linux i686") || k(x, "Linux x86_64");
  }
  function ab(x, da) {
    for (var R in da) {
      if (R === x) {
        return !0;
      }
    }
  }
  function p(x, da) {
    var R = "", Fa = -1, Ta;
    if (x = x.split(da)[1]) {
      for (; Ta = x.charCodeAt(++Fa);) {
        if (48 <= Ta && 57 >= Ta || 46 === Ta) {
          R += x.charAt(Fa);
        } else {
          break;
        }
      }
      for (Fa = R.length; Fa;) {
        if (46 === R.charCodeAt(--Fa)) {
          R = R.substr(0, Fa);
        } else {
          break;
        }
      }
    }
    return R;
  }
  function H(x) {
    for (var da = arguments, R = 1, Fa = da[0], Ta; R < da.length; ++R) {
      0 > oa(Fa, Ta = da[R]) && (Fa = Ta);
    }
    return Fa;
  }
  function S(x) {
    return x === x + "" ? x : x === x - 0 ? "" + x : x.min && x.max ? x.min + "~" + x.max : x.min ? x.min + "~" : "~" + x.max;
  }
  var oa = Sa.conpare, d = ca.userAgent, N = ca.appVersion, bb = Ia(N) || 0, I = ca.platform, Ua = Q.documentElement, La = Ua && Ua.style, m = Q.documentMode, Ja = D.width;
  D = D.height;
  var Bb = y.HTMLAudioElement, B = y.performance, O = y.Int8Array, cb = y.ontouchstart !== ma, Ma = p(N, "Version/") || p(d, "Version/"), Xa = y.operamini, Ga = !Xa && y.opera, Jb = Ga && (Ga.version && "function" === typeof Ga.version ? Ga.version() : H(p(d, "Opera "), Ma, bb)), nb = y.opr, ob = !Ga && (Q.all || m);
  m = ob && (m ? m : y.XMLHttpRequest ? Q.getElementsByTagName ? 7 : 4 : Q.compatMode ? 6 : (0).toFixed ? 5.5 : y.attachEvent ? 5 : 4);
  Ua = !ob && Ua.msContentZoomFactor;
  var pb = !Ua && (y.chrome || y.chromium), hb = !ob && function() {
    for (var x in La) {
      if (0 === x.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Cb = k(d, "UCWEB"), Kb = Cb && p(d, " U2/"), Sb = Cb && p(d, "; wds "), qb = p(d.split("_").join("."), "; iPh OS "), ja = p(d, "; Adr "), rb = k(N, "YJApp-ANDROID"), xa = k(I, "Android") || hb && k(N, "Android") || rb;
  ja = p(I, "Android ") || p(N, "Android ") || p(d, "Android ") || ja;
  var db = k(I, "Linux"), sb = "MacIntel" === I && ca.standalone !== ma, Na = hb && p(d, "Goanna/"), Oa = !Na && hb && (p(d, "rv:") || p(d.substr(d.indexOf(") Gecko/") - 11), "; ")), tb = p(d, "Firefox/"), K = p(d, "Opera/"), Va = y.FNRBrowser, Pa = na(d, "AppleWebKit/"), ib = p(d, "Chrome/"), Db = p(N, "Iron/"), X = p(d, "OPR/"), Lb = p(N, "KHTML/"), Eb = p(d.toLowerCase(), "iris");
  p(d, "FxiOS/");
  p(d, "CriOS/");
  p(d, "EdgiOS/");
  var Mb = p(d, "Silk/"), jb = na(d, "SamsungBrowser/"), Fb = !jb && function() {
    for (var x = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    da, R = x.length; da = x[--R];) {
      if (k(d, da)) {
        return 2 > Ia(Ma) ? Ma : 0.9;
      }
    }
    x = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (R = x.length; da = x[--R];) {
      if (k(d, da)) {
        return Ma;
      }
    }
  }(), Gb = pb && 534.3 >= Pa, ub = Ib(I), Ha = ub && !k(d, I) && Ib(d);
  cb = cb && (Pa || hb) && Ha || !ja && rb;
  rb = !!y.ReactNativeWebView;
  ub = ub && function() {
    for (var x in y) {
      if (0 === x.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Qa = (Ha = y.puffinDevice) && Ha.clientInfo;
  Qa = (Ha = Qa && "iOS" === Qa.os && Qa.osVersion) && Qa.model;
  var eb = !m && Q.registerElement, wb = !m && Q.execCommand, xb = y.webkitCancelAnimationFrame, ya = db && eb && "11.0.696.34" === ib, yb = y._firefoxTV_playbackStateObserverJava, Nb = na(d, "diordnA ");
  if ("Nitro" === I) {
    var v = 1;
  } else if ("Nintendo DSi" === I) {
    v = 2;
    var q = K;
  } else if ("New Nintendo 3DS" === I || k(d, "iPhone OS 6_0") && 320 === Ja && 240 === D) {
    v = 4, q = p(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === I) {
    v = 3, q = p(d, "Version/"), Pa = 535;
  } else if ("Nintendo Swicth" === I) {
    v = 7, q = p(N, "NintendoBrowser/");
  } else if (y.wiiu) {
    v = 6;
    q = p(N, "NintendoBrowser/");
    var L = 15, M = p(N, "AppleWebKit/") || (xb ? 536 : 534);
    q || (q = xb ? 4 : 2, k(N, "Macintosh;") || k(N, "Windows NT") && k(N, "Touch"));
  } else if (Ga && Ga.wiiremote) {
    v = 5, q = p(d, "Wii; U; ; ");
  } else if (K = p(d, "PlayStation Vita ")) {
    v = 10, q = K;
  } else if (K = p(d, "(PlayStation Portable); ")) {
    v = 8;
    q = K;
    var fb = 3.3;
  } else if (K = p(d, "PLAYSTATION 3; ") || p(d, "PLAYSTATION 3 ")) {
    v = 11, q = K, 0 > oa("4.10", K) && (L = 26, M = K);
  } else if (k(d, "Xbox One")) {
    v = 15, q = 1;
  } else if (k(d, "Xbox")) {
    v = 14, q = 1;
  } else if (2 === bb && k(d, "Sony/COM2/")) {
    v = 17;
    q = 2;
    fb = 3.4;
    var Ya = !0;
  } else if (0 === I.indexOf("iP") || qb || Ha || sb) {
    if (Ha) {
      switch(q = Ha, Qa.substr(0, 4)) {
        case "iPho":
          var Ca = 0;
          p(Qa, Ca);
          var za = !0;
          break;
        case "iPad":
          Ca = 1;
          p(Qa, Ca);
          var ea = !0;
          break;
        case "iPod":
          Ca = 2;
          p(Qa, Ca);
          var gb = !0;
      }
    } else {
      qb ? q = qb : (q = p(N.split("_").join("."), "OS "), ab("isSecureContext", y), ab("enableWebGL", y), ab("sameOrigin", y));
      if (!q || Va) {
        q = y.PointerEvent ? 13 : y.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ca.sendBeacon ? 11.3 : y.WebAssembly ? 11.2 : y.HTMLMeterElement ? 10.3 : y.Proxy ? 10.2 : y.HTMLPictureElement ? 9.3 : $a.isNaN ? 9.2 : y.SharedWorker ? B && B.now ? 8 : 8.4 : wb ? 7.1 : y.webkitURL ? 6.1 : y.Worker ? 5.1 : O ? 4.3 : Bb ? 4.1 : 3.2;
      }
      var Aa = Ja === 1.5 * D || 1.5 * Ja === D;
      0 === I.indexOf("iPhone") ? (Ca = 0, za = !0) : 0 === I.indexOf("iPad") || sb ? (Ca = 1, ea = !0) : 0 === I.indexOf("iPod") && (Ca = 2, gb = !0);
    }
    L = !Ha && (ca.standalone || (ea || 12 > q) && ab("webkitFullscreenEnabled", Q) || 11 <= q && 13 > q && ca.mediaDevices) ? 16 : 17;
    v = 24;
    M = q;
  } else if (k(d, "Kobo")) {
    v = 18, L = 21, M = 2.2, xa = !0;
  } else if (k(d, "EBRD")) {
    v = 19, L = 21, M = 2.2;
  } else if (K = p(d, "CrOS x86_64 ") || p(d, "CrOS aarch64 ") || p(d, "CrOS i686 ") || p(d, "CrOS armv7l ")) {
    v = 28, q = K;
  } else if (y.onmoztimechange !== ma) {
    v = 29, q = 18.1 > Oa ? "1.0.1" : 19 > Oa ? 1.1 : 27 > Oa ? 1.2 : 29 > Oa ? 1.3 : 31 > Oa ? 1.4 : 33 > Oa ? 2 : 35 > Oa ? 2.1 : 38 > Oa ? 2.2 : 45 > Oa ? 2.5 : 2.6, k(d, "Mobile") ? za = !0 : k(d, "Tablet") ? ea = !0 : k(d, "TV");
  } else if (y.palmGetResource) {
    v = 30, q = p(d, "webOS/") || p(d, "WEBOS") || p(d, "hpwOS/"), k(d, "webOS.TV") || k(d, "/SmartTV") || (za = !0);
  } else if (K = p(d, "Tizen ")) {
    v = 31, q = K, L = 24, M = jb, za = !0;
  } else if (K = p(d, "Windows Phone ") || p(N, "Windows Phone OS ") || Sb) {
    v = 23, q = K, za = !0;
  } else if (Ua && "ARM" === I) {
    v = 23, q = 10, za = !0;
  } else if (ob && k(N, "ZuneWP")) {
    v = 23, q = 11 === m ? 8.1 : 10 === m ? 8 : 9 === m ? 7.5 : 7 === m ? 7 : "?", za = !0;
  } else if (k(d, "FOMA;")) {
    v = 16, za = !0;
  } else if (k(d, "SoftBank;")) {
    v = 16, za = !0;
  } else if (k(d, "KFMUWI")) {
    var fa = !0;
    q = 6.3;
    var ta = ea = !0;
  } else if (k(d, "KFKAWI")) {
    fa = !0, q = 6, ta = ea = !0;
  } else if (k(d, "KFSUWI") || k(d, "KFAUWI") || k(d, "KFDOWI")) {
    fa = !0, q = 5, ta = ea = !0;
  } else if (k(d, "KFGIWI")) {
    fa = !0, q = 5, ta = ea = !0;
  } else if (k(d, "KFARWI") || k(d, "KFSAWA") || k(d, "KFSAWI")) {
    fa = !0, q = 5 <= Ia(ja) ? 5 : 4, ta = ea = !0;
  } else if (k(d, "KFSOWI") || k(d, "KFTHWA") || k(d, "KFTHWI") || k(d, "KFAPWA") || k(d, "KFAPWI")) {
    fa = !0, q = 3, ta = ea = !0;
  } else if (k(d, "KFOT") || k(d, "KFTT") || k(d, "KFJWA") || k(d, "KFJWI")) {
    fa = !0, q = 2, ta = ea = !0;
  } else if (k(d, "Kindle Fire")) {
    fa = !0, q = 1, ta = ea = !0;
  } else if (K = p(d, "Kindle/")) {
    v = 20, q = K, L = 21, M = 2.2;
  } else if (yb) {
    fa = !0, q = ja || Nb, ta = !0;
  } else if (k(d, "AmazonWebAppPlatform") || k(d, "; AFT")) {
    fa = !0, q = ja, ta = !0;
  } else if (k(d, "MeeGo")) {
    v = 32;
  } else if (k(d, "Maemo")) {
    v = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Eb) {
    v = 22, Ya = !0;
  } else if ("WinCE" === I) {
    v = 21, Ya = !0;
  } else if (0 === I.indexOf("Win")) {
    v = "Win16" === I ? 35 : "Win32" === I ? 36 : "Win64" === I ? 37 : 0, q = p(d, "Windows NT ") || p(d, "Windows ");
  } else if (0 === I.indexOf("Mac")) {
    v = "Mac68K" === I ? 39 : "MacPowerPC" === I || "MacPPC" === I ? 38 : "MacIntel" === I ? 40 : 0;
    if (K = p(d.split("_").join("."), "Mac OS X ")) {
      q = K;
    }
    var kb = !0;
  } else if (k(d, "BlackBerry") || k(d, "BB10")) {
    v = 34, q = Ma, za = !0;
  } else if (k(d, "SunOS") || k(d, "Sun Solaris")) {
    v = 42;
  } else if (k(d, "FreeBSD")) {
    v = 43;
  } else if (k(d, "OpenBSD")) {
    v = 44;
  } else if (k(d, "NetBSD")) {
    v = 45;
  } else if (xa && hb) {
    k(d, "Android 4.4;") ? Aa = {min:2.3} : 4 <= Ia(ja) ? Aa = ja : Aa = {min:2.2}, q = Aa;
  } else if (xa && Ga) {
    ja ? Aa = ja : Aa = {min:1.6}, q = Aa, k(d, "Tablet") ? ea = !0 : za = !0;
  } else if (ja) {
    q = ja, xa = !0;
  } else if (db && cb || rb || ub) {
    var vb = !0;
    jb ? Aa = {min:4.4} : pb && !Gb || nb || X ? Aa = {min:4} : (Aa = ja = La.touchAction !== ma ? {min:5} : eb ? 4.4 : O ? ca.connection ? y.searchBoxJavaBridge_ || pb ? $a.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Pa ? 3 : 533 <= Pa ? Bb ? 2.3 : 2.2 : 530 <= Pa ? 2 : 1.5, Fb && (L = 24, M = Fb));
    q = Aa;
    xa = !0;
  } else {
    ya ? (q = {min:5}, vb = xa = !0) : db && (k(d, "Ubuntu") ? v = 46 : (K = p(d, "Mint/")) ? (v = 47, q = K) : (K = p(d, "Fedora/")) ? (v = 48, q = K) : v = k(d, "Gentoo") ? 49 : 50);
  }
  fa || xa && vb && Mb ? v = 27 : xa && (v = v || 26);
  L || (ta = ta || xa, Ga ? (L = ta || Ya || za || ea ? 9 : 8, M = Jb) : ob ? (Aa = na(N, "Trident/") + 4, L = Ya || za || ea || gb ? 3 : kb && 5 <= m ? 7 : 2, M = m) : Ua ? (L = 23 === v ? 6 : 5, M = p(N, "Edge/")) : Na ? (L = 13, M = Na) : hb ? (L = ta ? 12 : 11, M = Oa || tb) : jb ? (L = 24, M = jb) : (K = fb || p(d, "NetFront/")) ? (L = 18, M = K) : (K = p(d, "iCab")) ? (L = 19, M = K) : (K = H(p(d, "Opera Mini/"), p(d, "Opera Mobi/")) || Xa && Ma) ? (L = 10, M = K, v || (k(d, "iPhone") ? Ca = 
  0 : k(d, "iPad") ? Ca = 1 : k(d, "iPod") && (Ca = 2), Ca && (v = 24))) : Cb ? (L = 25, M = Kb) : Lb ? (L = 14, M = bb) : xa && Gb ? (L = 21, M = ja) : pb || nb || X ? (L = ta ? 22 : 20, M = ib || Db) : xa && eb ? (L = 23, M = 5 > Ia(ja) ? ja : ib) : xa && (Ma || vb) ? (L = 21, M = ja) : ib ? (L = ta ? 22 : 20, M = ib) : Pa && (L = 15, M = Pa));
  v && (Sa[2] = v, q && (Sa[3] = S(q)));
  L && (Sa[0] = L, M && (Sa[1] = S(M)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Sa, y, Q, ca, D, Ia, $a, ma, na, k, Ib, ab, p, H) {
  function S(l) {
    if (y[0] === l) {
      return La === La + "" ? na(La) : La;
    }
  }
  function oa(l) {
    var F = y[3];
    if (y[2] === l) {
      return F === F + "" ? na(F) : F;
    }
  }
  function d(l, F, Y) {
    l + "" === l && ("a" === l.charAt(2) && (Y = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > B ? 117 : .9 > O || 9 > m || 9 > B || Ja ? 1 : 132 : parseInt(l, 16));
    Y && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (F || 2));
  }
  var N = D.body, bb = N.style, I, Ua, La = y[1], m = S(2) || S(3), Ja = S(7), Bb = S(5) || S(6), B = S(8) || S(9), O = S(11) || S(12), cb = O && 0 <= y.conpare(La, "1.9.1"), Ma = S(13), Xa = S(15), Ga = S(16) || S(17), Jb = S(10) || S(25), nb = S(20) || S(22), ob = S(23), pb = S(21), hb = S(24), Cb = nb || ob || pb || hb, Kb = nb && na(Ia.userAgent.split("Edg/")[1]), Sb = na(Ia.appVersion.split("Trident/")[1]) + 4, qb = oa(35) || oa(36) || oa(37), ja = .9 > O, rb = (Ja ? "ie5mac" : 5.5 > m ? "ie5win" : 
  6 > m ? "ie55" : 10 > m ? "ie" + (m | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : O && !cb ? 1.4 <= O ? "gck19" : 1.3 <= O ? "gck13" : 1 <= O ? "gck12" : ja ? .8 <= O ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  oa(1) || oa(2) || oa(3) || oa(4) || oa(8) || oa(9) || oa(10);
  var xa, db, sb, Na = 8 > m || 7.2 > B ? !1 : H, Oa = bb.transform !== H ? "transform" : bb["-o-transform"] !== H ? "-o-transform" : bb["-ms-transform"] !== H ? "-ms-transform" : bb.MozTransform !== H ? "-moz-transform" : bb["-webkit-transform"] !== H ? "-webkit-transform" : "", tb = [], K = [], Va = [], Pa, ib, Db;
  525 > Xa || 3.2 > Ga || 2.2 > pb || 10 > B || O && !cb || S(25) || 10 > S(3) || oa(32) || oa(30) || oa(3);
  var X, Lb, Eb, Mb, jb, Fb, Gb, ub = ma.now || function() {
    return +new ma();
  };
  (function() {
    function l() {
      for (var G, a = 0, b = ub(); a < Z.length;) {
        b < Z[0].t ? ++a : (G = Z.splice(a, 1)[0], G.f(G.p));
      }
      pa = Z.length ? k(l, ia) : 0;
    }
    function F() {
      for (var G, a = 0; a < ha.length; ++a) {
        G = ha[a], G.f();
      }
    }
    function Y() {
      qa && (qa = p(qa));
    }
    function ra() {
      pa && (pa = Ib(pa));
    }
    Eb = function(G) {
      ha.length || (qa = ab(F, ka));
      ha.push({f:G, l:++va});
      return va;
    };
    Mb = function() {
      qa && (Y(), qa = ab(F, ka));
    };
    jb = Y;
    var ha = [], ka = 500, va = 0, qa;
    if (5 > m || Ja) {
      Q._wdb_onlooptimer = F, F = "_wdb_onlooptimer()";
    }
    X = function(G, a, b) {
      Z.length || (pa = k(l, ia));
      Z.push({f:G, p:a, l:++W, t:ub() + (ia < b ? b : ia)});
      return W;
    };
    Lb = function(G) {
      for (var a = Z.length, b; b = Z[--a];) {
        if (b.l === G) {
          Z.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Fb = function() {
      pa && (ra(), pa = k(l, ia));
    };
    Gb = ra;
    var Z = [], ia = 16, W = 0, pa;
    if (5 > m || Ja) {
      Q._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var Ha, Qa, eb, wb, xb, ya, yb, Nb, v, q, L, M, fb, Ya, Ca, za, ea, gb, Aa, fa, ta;
  (function() {
    function l(a, b, g) {
      var t = ["<", a], w = 1, E, aa;
      if (b) {
        for (E in b) {
          var h = b[E];
          if (null != h && "" !== h) {
            if ("style" === E) {
              t[++w] = ' style="';
              for (aa in h) {
                for (var z = ++w, J, C = [], e = aa.split(""), f = e.length; f;) {
                  J = e[--f], "A" <= J && "Z" >= J && (J = "-" + J.toLowerCase()), C[f] = J;
                }
                t[z] = C.join("") + ":" + h[aa] + ";";
              }
              t[++w] = '"';
            } else {
              "className" === E && (E = "class"), t[++w] = " " + E + '="' + h + '"';
            }
          }
        }
      }
      t[++w] = ">";
      null != g && (W && "font" !== a ? t[++w] = "<font>" + F(g) + "</font>" : t[++w] = F(g));
      t[++w] = "</" + a + ">";
      return t.join("");
    }
    function F(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function Y(a) {
      var b = a.split("-"), g = b.length;
      if (2 > g) {
        return a;
      }
      for (; 1 < g;) {
        a = b[--g], b[g] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function ra(a) {
      var b = "*" === a;
      a = W ? b ? D.all : D.all.tags(a.toUpperCase()) : 6 > m && b ? D.all : D.getElementsByTagName(a);
      b = [];
      for (var g = 0, t = a.length; g < t; ++g) {
        b[g] = a[g];
      }
      return b;
    }
    function ha(a) {
      return W ? a.parentElement : a.parentNode;
    }
    function ka(a, b, g, t, w, E) {
      if (W) {
        var aa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var h = wb(2 > a ? eb(b) : b);
        h = 2 > a ? h.indexOf(b) + a : h.length;
        b.insertAdjacentHTML(aa, l(g, t, w));
        b = wb(b)[h];
        null != w && ("font" === g ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (pa) {
        b = D.createElement(l(g, t));
      } else {
        b = E ? D.createElementNS("http://www.w3.org/2000/svg", g) : D.createElement(g);
        if (t) {
          for (aa in t) {
            if ((a = t[aa]) || 0 === a) {
              switch(aa) {
                case "class":
                case "className":
                  za(b, a);
                  break;
                case "style":
                  E = b.style;
                  for (h in a) {
                    E[h] = a[h];
                  }
                  break;
                default:
                  fb(b, aa, a);
              }
            }
          }
          !B || "a" !== g && "A" !== g || !t.href || t["tag-index"] || t.tagIndex || fb(b, "tagIndex", "-0");
        }
        G || null != w && va(b, w);
      }
      return b;
    }
    function va(a, b) {
      if (W) {
        return ka(2, a, "font", H, b);
      }
      var g = D.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function qa(a, b) {
      9 > m ? a.className = b : a.setAttribute("class", b);
    }
    function Z(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ia(a, b, g) {
      if (8 > B || 5.5 > m) {
        b = Y(b);
      }
      a.style[b] = g;
    }
    var W = 5 > m;
    I = ra("html")[0];
    Ua = ra("head")[0];
    Ha = ra;
    Qa = function(a) {
      var b = [], g = 0, t, w = -1;
      if (9 > m || !D.getElementsByClassName) {
        var E = 6 > m ? D.all : D.getElementsByTagName("*");
      } else {
        var aa = !0;
        E = D.getElementsByClassName(a);
      }
      for (t = E.length; g < t; ++g) {
        var h = E[g];
        if (aa || (W || 1 === h.nodeType) && Z(h, a)) {
          b[++w] = h;
        }
      }
      return b;
    };
    eb = ha;
    wb = function(a) {
      a = W ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    xb = function(a) {
      var b = !(7.03 < B && 7.2 > B) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], t = a.length, w = -1, E; t;) {
        if (E = a[--t], b || 1 === E.nodeType) {
          W && "FONT" === E.tagName || (g[++w] = E);
        }
      }
      return g;
    };
    ya = function(a, b, g, t, w) {
      b = ka(2, a, b, g, t, w);
      W || (a.appendChild(b), G && null != t && va(b, t));
      return b;
    };
    yb = function(a, b, g, t, w) {
      b = ka(0, a, b, g, t, w);
      W || (ha(a).insertBefore(b, a), G && null != t && va(b, t));
      return b;
    };
    Nb = va;
    v = function(a, b) {
      if (W) {
        return ka(0, a, "font", H, b);
      }
      var g = D.createTextNode("" + b);
      eb(a).insertBefore(g, a);
      return g;
    };
    q = function(a) {
      W ? a.outerHTML = "" : (5.5 > m && (a.style.filter = ""), eb(a).removeChild(a));
    };
    var pa = 9 > m, G = pa;
    L = function(a) {
      return a.tagName.toUpperCase();
    };
    M = function(a, b) {
      if (8 > B || 5.5 > m) {
        b = Y(b);
      }
      var g = a.getAttribute(b);
      return B && "tabIndex" === b ? "-0" === g ? "" : "" === g ? "-1" : g : g || "";
    };
    fb = function(a, b, g) {
      if (B && "tab-index" === b) {
        "-1" === g ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", g);
      } else {
        if (8 > B || 5.5 > m) {
          b = Y(b);
        }
        a.setAttribute(b, g);
      }
    };
    Ya = function(a, b) {
      if (B && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > B || 5.5 > m) {
          b = Y(b);
        }
        a.removeAttribute(b);
      }
    };
    Ca = function(a, b) {
      if (B && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > B || 5.5 > m) {
        b = Y(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    za = qa;
    ea = Z;
    gb = function(a, b) {
      var g;
      if (!Z(a, b)) {
        if (g = a.className) {
          g += " ";
        }
        qa(a, g + b);
      }
    };
    Aa = function(a, b) {
      if (Z(a, b)) {
        var g = a.className.split(" ");
        g.splice(g.indexOf(b), 1);
        qa(a, g.join(" "));
      }
    };
    fa = ia;
    ta = function(a, b) {
      var g, t = -1, w;
      if (5.5 > m) {
        if (g = 5.5 > m ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (g = g.split(";"); w = g[++t];) {
            ia(a, w.split(":")[0], "");
          }
        }
        if (b) {
          for (t = -1, g = b.split(";"); w = g[++t];) {
            var E = w.split(":")[0];
            ia(a, E, w.substr(E.length + 1));
          }
        }
      } else if (7.1 > B) {
        if (a.setAttribute("style", ""), b) {
          for (g = b.split(";"); w = g[++t];) {
            w = w.split(":"), ia(a, w[0], w[1]);
          }
        }
      } else {
        9 > B || 1 > O ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var kb, vb, x, da, R, Fa, Ta, Da, Ob;
  (function() {
    function l() {
      return h ? J ? 2 : z ? 3 : 1 : 0;
    }
    function F(e) {
      vb(Q, "load", F);
      F = H;
      ra(tb, e, !0);
      x = tb = H;
    }
    function Y(e, f) {
      R(function() {
        var A = Z(e);
        f(A);
        A.addListener(f);
        return !0;
      });
    }
    function ra(e, f, A) {
      for (var c = 0; c < e.length; ++c) {
        !0 === e[c](f) && (e.splice(c, 1), --c);
      }
      A && (e.length = 0);
    }
    function ha(e, f, A) {
      tb || W.length || X(ka);
      W.push(e, f, A);
    }
    function ka() {
      var e = W, f;
      for (W = []; f = e.shift();) {
        ra(f, e.shift(), e.shift());
      }
    }
    function va(e) {
      var f = e || event;
      e = G[f.type];
      var A = -1, c, r;
      5 > m ? f = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : m ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : b && (f.j = f.stopPropagation, f.stopPropagation = function() {
        r = !0;
      });
      for (; c = e[++A];) {
        c.i === this ? (this.g = c.h, m && (f.currentTarget = this), this.g(f), m ? (this.g = ca, this.g = H) : delete this.g) : 7.2 > B && this === D && c.i === Q && (Q.g = c.h, Q.g(f), delete Q.g);
      }
      if (m) {
        return f.preventDefault = f.stopPropagation = ca, f.preventDefault = f.stopPropagation = H, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (t = !0), r && !t && f.j(), f.j = f.stopPropagation = H);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function qa() {
      var e = 9 === ia.offsetWidth;
      Ta !== e && ha(K, Ta = e);
    }
    var Z = Q.matchMedia, ia, W = [];
    tb.push(function() {
      Y = H;
      ia = ya(N, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      x(function() {
        W.length && X(ka);
      });
    });
    kb = function(e, f, A, c) {
      if (g) {
        e.addEventListener(f, A, c ? pa ? c : c.capture || !0 === c : !1);
      } else {
        var r = {i:e, h:A};
        c = G[f];
        var n = "on" + f, u, P;
        if (c) {
          for (u = c.length; P = c[--u];) {
            if (P.i === e && P.h === A) {
              return;
            }
          }
          G[f].push(r);
        } else {
          G[f] = c = [r], a || (f = e[n], "function" === typeof f && f !== va && c.unshift({i:e, h:f}));
        }
        a ? e.attachEvent(n, va) : e[n] = va;
      }
    };
    vb = function(e, f, A, c) {
      if (g) {
        e.removeEventListener(f, A, c ? pa ? c : c.capture || !0 === c : !1);
      } else {
        c = G[f];
        f = "on" + f;
        var r, n, u;
        if (c) {
          for (r = c.length; n = c[--r];) {
            n.i === e && (n.h === A ? c.splice(r, 1) : u = !0);
          }
          u || (a ? e.detachEvent(f, va) : m ? (e[f] = ca, e[f] = null) : delete e[f]);
        }
      }
    };
    var pa = !m && !Ja && (new $a('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), G = {}, a = !1, b = 525.13 > Xa, g = !b && !Ja && Q.addEventListener, t;
    b && I.addEventListener("click", function(e) {
      if (t) {
        return t = !1, e.preventDefault(), !1;
      }
    });
    x = function(e) {
      tb.push(e);
    };
    da = function(e) {
      w && w.push(e);
    };
    var w = [];
    if (419.3 >= Xa) {
      var E = function() {
        if (E) {
          var e = D.readyState;
          "loaded" === e || "complete" === e ? (E = H, F()) : X(E);
        }
      };
      X(E);
    } else {
      kb(Q, "load", F);
    }
    m || !ja && 1.8 > O ? kb(Q, "unload", function(e) {
      ra(w, e, !0);
    }) : w = H;
    R = function(e) {
      K.push(e);
    };
    x(function() {
      qa();
      Eb(qa);
    });
    Fa = function(e) {
      Va && Va.push(e);
    };
    var aa = 60 > O || Ma, h, z, J;
    if (89 <= O || 89 <= nb || qb && 79 <= Kb || Z && (Z("(forced-colors:none)").matches || Z("(forced-colors:active)").matches)) {
      Ob = !0, Y("(forced-colors:active)", function(e) {
        h = e.matches;
        Da = l();
        ha(Va, Da);
      });
    } else if (10 <= m || Bb || qb && Kb) {
      Ob = !0, Y("(-ms-high-contrast:black-on-white)", function(e) {
        h = z = e.matches;
        Da !== l() && (Da = l(), ha(Va, Da));
      }), Y("(-ms-high-contrast:white-on-black)", function(e) {
        h = J = e.matches;
        Da !== l() && (Da = l(), ha(Va, Da));
      }), Y("(-ms-high-contrast:active)", function(e) {
        h = e.matches;
        Da !== l() && (Da = l(), ha(Va, Da));
      });
    } else if (qb && (m || O && 0 <= y.conpare(La, "1.8.1") || Ma)) {
      var C = function() {
        function e(c, r) {
          if (r && "transparent" === c) {
            return 382.5;
          }
          if ("#" === c.charAt(0)) {
            return parseInt("0x" + c.substr(1, 2), 16) + parseInt("0x" + c.substr(3, 2), 16) + parseInt("0x" + c.substr(5, 2), 16);
          }
          var n = c.split("(")[1].split(",");
          return na(n[0]) + na(n[1]) + na(n[2]);
        }
        var f = D.defaultView;
        var A = f ? f.getComputedStyle(ia, null) : ia.currentStyle;
        f = (A && A.color || "").split(" ").join("");
        A = (A && A.backgroundColor || "").split(" ").join("");
        f && (h = "#123456" !== f && "rgb(18,52,86)" !== f, z = e(f) < e(A, !0), J = e(f) > e(A, !0), Da !== l() && (Da = l(), ha(Va, Da, aa)));
      };
      R(function(e) {
        if (e) {
          return fa(ia, "color", "#123456"), fa(ia, "backgroundColor", "#123456"), aa ? (C(), Va = H) : Eb(C), C = H, !0;
        }
      });
    } else {
      Va = l = H;
    }
  })();
  (function() {
    function l(c) {
      b(c);
      f && !c && q(f);
      b = g = t = w = E = aa = J = C = e = A = f = H;
    }
    function F(c) {
      D.fonts.load('1.6em "' + c + '"').then(function() {
        var r;
        (r = ha(g)) ? X(l, r) : ra(!0);
      }, function() {
        Na !== H ? ka(Na) : Pa(ka);
      });
    }
    function Y(c) {
      return D.hidden || D.msHidden || D.mozHidden || D.webkitHidden ? (z = new ma() - 0, !1) : c < new ma() - z;
    }
    function ra(c) {
      var r;
      c && (z = new ma() - 0);
      (r = ha(g)) ? l(r) : Y(h) ? J || ia ? l(0) : Na !== H ? ka(Na) : Pa(ka) : X(ra);
    }
    function ha(c) {
      var r = 0, n = -1, u = 0;
      if (!A) {
        var P = -1;
        var Ba;
        C = ya(N, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, G);
        for (A = {}; Ba = a[++P];) {
          fa(C, "fontFamily", Ba), A[Ba] = C.offsetWidth;
        }
      }
      for (5 > m ? C || (C = ya(N, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, G)) : N.appendChild(C); P = a[++n];) {
        if (fa(C, "fontFamily", '"' + c + '",' + P), C.offsetWidth !== A[P]) {
          r = 1;
          break;
        }
      }
      !m && r && E && (C.innerHTML = E, c = C.offsetWidth, C.innerHTML = aa, u = c === C.offsetWidth ? 1 : 0, C.innerHTML = G);
      q(C);
      5 > m && (C = H);
      return r + u;
    }
    function ka(c) {
      c ? (J = !0, va(!0)) : l(0);
    }
    function va(c) {
      var r;
      if (t) {
        for (r in c && (z = new ma() - 0), t) {
          ha(r) ? (e = ya(N, "div", {"aria-hidden":"true", className:w, id:w}), f = ya(Ua, "link", {type:"text/css", rel:"stylesheet", href:t[r]}), X(qa, !0)) : Y(pa) ? (delete t[r], X(va, !0)) : X(va);
          return;
        }
      }
      l(0);
    }
    function qa(c) {
      c && (z = new ma() - 0);
      1 < e.offsetWidth ? (q(e), h = pa, X(ra, !0)) : Y(h) ? 528 > Xa ? (q(e), h = pa, X(ra, !0)) : (q(e), l(0)) : X(qa);
    }
    K.splice(0, 0, function() {
      if (Ta) {
        sb = 8 <= m || Bb || 9.5 <= B || cb || Ma || 522 <= Xa || 3 <= Ga || Jb || Cb ? 3 : 7.2 <= B ? 2 : 6 <= B || O ? 1 : 0;
        if (!sb && !m && !Ja) {
          var c = ya(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          sb = 6 <= c.offsetWidth ? 2 : 0;
          q(c);
        }
        return !0;
      }
    });
    Pa = !1 === Na ? function(c) {
      X(c, !1);
    } : function(c) {
      function r(P) {
        u = Lb(u);
        Na = P;
        n.onload = n.onerror = ca;
        X(c, P);
      }
      if (Na !== H) {
        X(c, Na);
      } else {
        var n = new Image(), u = X(function() {
          u && r(!1);
        });
        n.onerror = function() {
          r(!1);
        };
        n.onload = function() {
          r(1 === n.width * n.height);
        };
        n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > m && x(function() {
      var c = ya(N, "div");
      ta(c, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      xa = 1 < c.offsetHeight;
      q(c);
    });
    ib = function(c, r) {
      function n() {
        if (P || !Ba || u.complete) {
          var sa = !!u.width;
          db = db || sa;
          X(c, sa);
          u.onerror = u.onload = ca;
          u = c = H;
        } else {
          --Ba, X(n);
        }
      }
      var u = new Image(), P, Ba = 99;
      u.onerror = function() {
        P = !0;
      };
      u.onload = function() {
        P = !0;
      };
      u.src = r;
      X(n);
    };
    Db = function(c, r, n, u, P, Ba, sa) {
      b = c;
      g = r;
      t = n;
      w = u;
      E = P;
      aa = Ba;
      h = sa || W;
      Z ? X(l, 0) : !D.fonts || 603 > Xa ? ra(!0) : F(g);
    };
    var Z = 525 > Xa || 10 > B || O && !cb || 2.2 > S(21) || S(25) || 10 > S(3) || oa(32) || oa(30) || oa(3), ia = 9 > m || 2 > nb || 12 > B, W = 5E3, pa = 100, G = "mmmmmmmmmmlli", a = ["sans-serif", "serif"], b, g, t, w, E, aa, h, z, J, C, e, f, A;
  })();
  var Pb = String.fromCharCode, Za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Pb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Tb = Za[7], ac = Za[113], Xb = Pb(160);
  Pb(8194);
  var Yb = Za[31], Qb = Za[30], bc = Za[63], cc = Za[125], dc = Za[126], ec = Pb(59648), Zb = (9 === m || O && 0 <= y.conpare(La, "1.8.1") || Ma) && !Ob, lb = [], mb, Ra, Hb = 7.2 > B ? function() {
    mb = !mb;
    for (var l = -1, F; F = lb[++l];) {
      -1 !== F.className.indexOf("pbAlp") ? fa(F, "display", mb ? "" : "none") : (gb(F, mb ? "pbChrCS" : "pbChr00"), Aa(F, mb ? "pbChr00" : "pbChrCS"));
    }
  } : Zb ? function() {
    mb = !mb;
    for (var l = -1, F; F = lb[++l];) {
      fa(F, "opacity", mb ? 1 : 0);
    }
  } : H;
  var Ub = Sa.startBlinkingIfCursor = function(l) {
    Hb ? ea(l, "pbChrCS") && (Ra || !B && !Da || (Ra = ab(Hb, 400)), -1 === lb.indexOf(l) && lb.push(l)) : lb = H;
  };
  Sa.stopBlinkingIfCursor = function(l) {
    Hb && (l = lb.indexOf(l), 0 <= l && (lb.splice(l, 1), !lb.length && Ra && (p(Ra), Ra = 0)));
  };
  Zb && Fa(function(l) {
    l ? Ra || (Ra = ab(Hb, 400)) : Ra && (p(Ra), Ra = 0);
  });
  Hb && da(function() {
    Ra && p(Ra);
  });
  Ob || Fa(function(l) {
    l ? (fb(I, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Oa || 9 === m || 5.5 <= m && 9 > m && xa) && gb(I, "jsCanRotate")) : (Ya(I, "forced-colors"), Aa(I, "jsCanRotate"));
  });
  (function() {
    function l(h) {
      (a = h) ? ha() : db ? ra(!0) : db !== H ? ha() : ib(ra, b);
    }
    function F() {
      F = H;
      Db(l, "PB-100", {"PB-100_canTTF":Wa + "pbFont/ttf.css", "PB-100_canWOFF":Wa + "pbFont/woff.css", "PB-100_canEOT":Wa + "pbFont/eot.css", "PB-100_canSVG":Wa + "pbFont/svg.css"}, "pbFont-testCssReady", "\u1d07\u207b", "i", 5E3);
    }
    function Y(h) {
      this.focus();
      h.preventDefault();
      h.stopPropagation();
    }
    function ra(h) {
      h && gb(N, "pbList-noWebFont");
      ha();
    }
    function ha() {
      for (l = Db = H; G.length;) {
        ka(G.shift(), G.shift());
      }
    }
    function ka(h, z) {
      function J(r) {
        r = wb(r);
        for (var n = -1, u; u = r[++n];) {
          switch(u.nodeType) {
            case 1:
              J(u);
              break;
            case 3:
              u.data && e(u.data) && f.push(u);
          }
        }
      }
      function C(r) {
        var n = r.children, u = 0, P = n.length;
        if (P) {
          for (; u < P; ++u) {
            C(n[u]);
          }
        } else {
          (n = r.innerText) && e(n) && f.push(r);
        }
      }
      function e(r) {
        return r.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], A;
      if (l) {
        -1 === G.indexOf(h) && (G.push(h, z), g && F && F());
      } else {
        var c = G.indexOf(h);
        0 <= c && G.splice(c, 2);
        for (5 > m ? C(h) : J(h); A = f.shift();) {
          c = 5 > m ? A.innerText : A.data, 2 !== a && (0 <= c.indexOf("\u2091\u208b") && (c = c.split("\u2091\u208b").join(Qb)), 0 <= c.indexOf("\u1d07\u207b") && (c = c.split("\u1d07\u207b").join(Qb)), a && (0 <= c.indexOf("\u208b\u2081") && (c = c.split("\u208b\u2081").join(bc)), 0 <= c.indexOf("\u1d47/\u1d04") && (c = c.split("\u1d47/\u1d04").join(ec)), 0 <= c.indexOf("\u1d47/") && (c = c.split("\u1d47/").join(cc)), 0 <= c.indexOf("/\u1d04") && (c = c.split("/\u1d04").join(dc)))), 0 <= c.indexOf("\u2091") && 
          (c = c.split("\u2091").join(Yb)), 0 <= c.indexOf("\u00ea") && (c = c.split("\u00ea").join(Qb)), z ? 5 > m ? A.innerText = c : A.data = c : va(c.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(ac).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Tb).split("&amp;").join("&"), A);
        }
      }
    }
    function va(h, z) {
      function J(la, T) {
        for (var Ea = ""; T;) {
          T & 1 && (Ea += la), T >>= 1, la += la;
        }
        return Ea;
      }
      function C(la, T, Ea) {
        for (var zb, fc = -1, Vb, Wb; zb = T[++fc];) {
          for (; 0 <= (Vb = la.indexOf(zb));) {
            Wb = zb.length, la = la.substr(0, Vb) + J(Ea, Wb) + la.substr(Vb + Wb);
          }
        }
        return la;
      }
      function e(la) {
        var T = na(la), Ea = "" + T;
        return 0 < T && T === T | 0 && (T = la.indexOf(Ea) + Ea.length, T <= la.length) ? T : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), A = 5 > m || 1 === z.nodeType, c = [], r = "", n, u = -1, P, Ba, sa;
      if (A) {
        if (E) {
          var Rb = z.style.visibility;
          fa(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (aa) {
        var Ab = z;
        z = D.createDocumentFragment();
      }
      if (function(la) {
        var T = la.indexOf("P");
        if (-1 === T) {
          return !1;
        }
        T = na(la.charAt(T + 1));
        return 0 <= T && 9 >= T;
      }(h)) {
        r = J("+", h.length);
      } else {
        0 <= (n = e(h)) && (r = J("|", n), u = n, --u);
        for (; n = h.charAt(++u);) {
          n === Tb || P ? (r += "~", n === Tb && (P = !P)) : r += n;
        }
        r = C(r, pa, "^");
        r = C(r, ia, "{");
        r = C(r, W, "}");
      }
      u = 0;
      for (P = h.length; u < P; ++u) {
        n = h.charAt(u);
        var U = n === Xb;
        var ba = " " === n;
        n = U ? " " : n;
        var V = r.charAt(u);
        var Ka = (Ba = wa) && U;
        var wa = "|" === V;
        V = f["+|~{}^".indexOf(V) + 1];
        if ("\n" !== n) {
          if (a || !db) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === h.substr(u, 3)) {
                n = "\u1d47/\u1d04", u += 2;
              } else {
                switch(h.substr(u, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    n = h.substr(u, 2), ++u;
                }
              }
            }
            V = ba && "str" === V ? "pbList-strsp" : U ? "" : !ba && V ? "pbList-" + V : "";
          } else {
            U = Za.indexOf(n), U = -1 === U ? "" : Za.indexOf(n).toString(16).toUpperCase(), U = (U = 1 === U.length ? "0" + U : U) ? "pbChr" + U : "", V = ba && "str" === V ? "pbList-strsp" : ba || !U ? "" : V ? (U ? U + " " : "") + "pbList-" + V : U;
          }
          U = H;
          Ka ? (n = 6 <= m && 8 > m ? " " : Xb, V = "") : wa && (O && !cb || 9.5 > B) ? (wa && !Ba && (sa = 4 - (na(h.substr(u)) + "").length), 7.5 > B ? U = w ? "position:relative;top:-4px;left:" + 12 * sa + "px" : {position:"relative", top:"-4px", left:12 * sa + "px"} : U = w ? "position:relative;left:" + 12 * sa + "px" : {position:"relative", left:12 * sa + "px"}) : ba && 7.5 > B && (V = "pbList-strsp");
          w ? c.push("<font" + (V ? ' class="' + V + '"' : "") + (U ? ' style="' + U + '"' : "") + ">" + n + "</font>") : A || aa ? ya(z, "font", {"class":V, style:U}, n) : yb(z, "font", {"class":V, style:U}, n);
        } else {
          Ba = wa = !1, w ? c.push(n) : A || aa ? Nb(z, n) : v(z, n);
        }
      }
      if (A) {
        w ? z.innerHTML = c.join("") : aa && Ab.appendChild(z), E && fa(z, "visibility", Rb);
      } else {
        if (w) {
          f = D.createElement("font");
          for (f.innerHTML = c.join(""); c = f.firstChild;) {
            z.parentNode.insertBefore(c, z);
          }
          q(z);
        } else {
          aa ? Ab.parentNode.replaceChild(z, Ab) : q(z);
        }
      }
    }
    1.9 > O && R(function(h) {
      if (h) {
        h = Ha("*");
        for (var z = 0, J = h.length, C; z < J; ++z) {
          C = h[z], "B" !== L(C) && -1 !== (" " + C.className).toLowerCase().indexOf(" pbchr") && (Ca(C, "title") || fb(C, "title", C.textContent), C.textContent = " ");
        }
        return !0;
      }
    });
    R(function(h) {
      if (h) {
        h = Qa("pbChrCS");
        for (var z = 0, J = h.length; z < J; ++z) {
          Ub(h[z]);
        }
        return !0;
      }
    });
    var qa = [], Z = O && 0 > y.conpare(La, "0.9.9");
    R(function(h) {
      function z(ba) {
        var V = M(ba, "pbTip");
        if (V) {
          var Ka = V.charAt(0);
          var wa = "_" === Ka;
          V = (wa ? V.charAt(2) : Ka).toUpperCase().charCodeAt(0) - 65;
          c ? ya(ba, "div", {style:{left:7 * V + 3 + "px"}}) : (Ka = M(ba, "title"), Ya(ba, "pbTip"), Ya(ba, "title"), wa = ya(ba, "div", {className:"pbTip" + (wa ? "Btm" : ""), style:{width:Ka.length + C + "em", left:7 * V - (Z ? 0 : 5) + "px"}}, Ka), wa = ya(wa, "div"), .9 <= O && Z && fa(wa, "left", "2px"));
        }
        A && 0 <= ba.className.indexOf("pbColor") && ya(ba, "u");
      }
      function J(ba, V) {
        var Ka = M(ba, "pbGhst"), wa = ba.className, la = wa.split("pbCsr")[1] || "", T = wa.split("pbAlp")[1] || "";
        if ("CS" === Ka) {
          var Ea = "_";
        } else {
          Ea = Ka, 3 === Ea.length && (Ea = Ea.substr(0, 2)), Ea = Za[parseInt(Ea, 16)] || "~";
        }
        var zb;
        la = la.split(" ")[0];
        if (T = na(T.split(" ")[0])) {
          e && (wa = wa.split("pbChr")[1].split(" ")[0], fa(ba, "backgroundPosition", d(wa, 2, Rb) + "px " + -24 * (10 - T) + "px")), !V && f && yb(ba, "a").appendChild(ba);
        }
        Ka && (T = 10 - T, e && (zb = {backgroundPosition:d(Ka, 2, Rb) + "px " + -24 * (10 - T) + "px"}), Ya(ba, "pbGhst"), u = yb(ba, "b", {className:"pbChr" + Ka + " pbCsr" + la + " pbAlp" + T, style:zb}, Ea), Ub(u));
        Ub(ba);
      }
      if (h) {
        var C = 6 > m ? 2 : 0, e = 7.2 > B || .9 > O || Ja, f = 1.1 === O, A = 1.4 > O;
        h = Ha("SAMP");
        var c = 8 === m, r = sb, n, u, P, Ba, sa;
        xa && gb(N, "pbLCD-AX");
        if (h.length) {
          for (P = -1; n = h[++P];) {
            if (ea(eb(n), "pbLCD")) {
              var Rb = ea(n, "PB-120") || ea(n, "FX-795P");
              var Ab = xb(n);
              for (n = Ab.length; sa = Ab[--n];) {
                switch(L(sa)) {
                  case "A":
                    (2 > r || c) && z(sa);
                    if (2 > r) {
                      var U = xb(sa);
                      for (Ba = U.length; Ba;) {
                        J(U[--Ba], !0);
                      }
                    }
                    Jb ? fb(sa, "href", "javascript:void(0)") : (kb(sa, "click", Y), qa.push(sa));
                    break;
                  case "B":
                    2 > r && J(sa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    da(function() {
      for (var h; h = qa.shift();) {
        vb(h, "click", Y);
      }
    });
    6 === m && (new $a("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(D);
    var ia = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), W = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), pa = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Qb + Yb).split(""), G = [], a, b, g;
    if (.9 <= O && 0 >= y.conpare(La, "0.9.1")) {
      gb(I, "pbLCD-gecko09To091");
      var t = !0;
    }
    R(function(h) {
      if (h) {
        b = Wa + "pbFont/x3mask" + (t ? ".gecko0.9.1.gif" : ".png");
        h = Ha("*");
        for (var z = -1, J; J = h[++z];) {
          ea(J, "pbList") ? ka(J) : ea(J, "pbFont") && ka(J, !0);
        }
        G.length && F();
        return !0;
      }
    });
    var w = !1, E = 8 > B, aa = !w && !E && !(6 > m) && D.createDocumentFragment && !!N.replaceChild;
    Sa.prettify = ka;
  })();
  var $b = D.scripts || Ha("script");
  var Wa = $b[$b.length - 1].src.split("/");
  --Wa.length;
  (Wa = Wa.join("/")) && (Wa += "/");
  6.1 > Ga && kb(Q, "scroll", Mb);
  da(jb);
  6.1 > Ga && kb(Q, "scroll", Fb);
  da(Gb);
  10 > m && (11 !== Sb || 5 !== m) || (9 > B || 1 > O || !Ja && !Q.addEventListener ? D.write('<link href="' + Wa + rb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : x(function() {
    ya(Ua, "link", {href:Wa + "" + rb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

