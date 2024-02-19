/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Ua, x) {
  var y = 0, ia, L, Ma = (Ua + "").split("."), db = (x + "").split("."), Ka = Ma.length;
  for (ia = db.length; "0" === Ma[Ka - 1];) {
    --Ka;
  }
  for (; "0" === db[ia - 1];) {
    --ia;
  }
  for (L = Ka < ia ? Ka : ia; y < L; ++y) {
    var va = Ma[y] - 0, h = db[y] - 0;
    if (va !== h) {
      return va > h ? 1 : -1;
    }
  }
  return Ka > ia ? 1 : Ka === ia ? 0 : -1;
};
(function(Ua, x, y, ia, L, Ma, db, Ka) {
  function va(D, aa) {
    var la = Ma(D.split(aa)[1]);
    return 0 <= la ? la : 0;
  }
  function h(D, aa) {
    return 0 <= D.indexOf(aa);
  }
  function Lb(D) {
    return h(D, "Linux armv") || h(D, "Linux aarch") || h(D, "Linux i686") || h(D, "Linux x86_64");
  }
  function eb(D, aa) {
    for (var la in aa) {
      if (la === D) {
        return !0;
      }
    }
  }
  function n(D, aa) {
    var la = "", Aa = -1, Va;
    if (D = D.split(aa)[1]) {
      for (; Va = D.charCodeAt(++Aa);) {
        if (48 <= Va && 57 >= Va || 46 === Va) {
          la += D.charAt(Aa);
        } else {
          break;
        }
      }
      for (Aa = la.length; Aa;) {
        if (46 === la.charCodeAt(--Aa)) {
          la = la.substr(0, Aa);
        } else {
          break;
        }
      }
    }
    return la;
  }
  function M(D) {
    for (var aa = arguments, la = 1, Aa = aa[0], Va; la < aa.length; ++la) {
      0 > qa(Aa, Va = aa[la]) && (Aa = Va);
    }
    return Aa;
  }
  function V(D) {
    return D === D + "" ? D : D === D - 0 ? "" + D : D.min && D.max ? D.min + "~" + D.max : D.min ? D.min + "~" : "~" + D.max;
  }
  var qa = Ua.conpare, c = ia.userAgent, Q = ia.appVersion, fb = Ma(Q) || 0, H = ia.platform, Wa = y.documentElement, Ea = Wa && Wa.style, l = y.documentMode, Na = L.width, $a = L.height;
  L = x.HTMLAudioElement;
  var z = x.performance, W = x.Int8Array, gb = x.ontouchstart !== Ka, Oa = n(Q, "Version/") || n(c, "Version/"), Fa = x.operamini, ma = !Fa && x.opera, Cb = ma && ("function" === typeof ma.version ? ma.version() : M(n(c, "Opera "), Oa, fb)), Da = x.opr, ob = !ma && (y.all || l);
  l = ob && (l ? l : x.XMLHttpRequest ? y.getElementsByTagName ? 7 : 4 : y.compatMode ? 6 : (0).toFixed ? 5.5 : x.attachEvent ? 5 : 4);
  Wa = !ob && Wa.msContentZoomFactor;
  var Qa = !Wa && (x.chrome || x.chromium), hb = !ob && function() {
    for (var D in Ea) {
      if (0 === D.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Db = h(c, "UCWEB"), Mb = Db && n(c, " U2/"), Rb = Db && n(c, "; wds "), Xa = n(c.split("_").join("."), "; iPh OS "), ra = n(c, "; Adr "), pb = h(Q, "YJApp-ANDROID"), Ga = h(H, "Android") || hb && h(Q, "Android") || pb;
  ra = n(H, "Android ") || n(Q, "Android ") || n(c, "Android ") || ra;
  var qb = h(H, "Linux"), kb = "MacIntel" === H && ia.standalone !== Ka, lb = hb && n(c, "Goanna/"), wa = !lb && hb && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Sb = n(c, "Firefox/");
  n(c, "Opera/");
  var rb = x.FNRBrowser, Ra = va(c, "AppleWebKit/"), Ha = n(c, "Chrome/"), Eb = n(Q, "Iron/"), Fb = n(c, "OPR/"), Gb = n(Q, "KHTML/"), Nb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var Tb = n(c, "Silk/"), X = va(c, "SamsungBrowser/"), yb = !X && function() {
    for (var D = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    aa, la = D.length; aa = D[--la];) {
      if (h(c, aa)) {
        return 2 > Ma(Oa) ? Oa : 0.9;
      }
    }
    D = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (la = D.length; aa = D[--la];) {
      if (h(c, aa)) {
        return Oa;
      }
    }
  }(), zb = Qa && 534.3 >= Ra, sb = Lb(H), Ya = sb && !h(c, H) && Lb(c);
  gb = gb && (Ra || hb) && Ya || !ra && pb;
  pb = !!x.ReactNativeWebView;
  sb = sb && function() {
    for (var D in x) {
      if (0 === D.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Za = (Ya = x.puffinDevice) && Ya.clientInfo, tb = (Ya = Za && "iOS" === Za.os && Za.osVersion) && Za.model;
  Za = !l && y.registerElement;
  var ib = !l && y.execCommand, Hb = x.webkitCancelAnimationFrame, ub = qb && Za && "11.0.696.34" === Ha, Ob = x._firefoxTV_playbackStateObserverJava, vb = va(c, "diordnA ");
  if ("Nitro" === H) {
    var q = 1, p = 8.5, E = 9, T = p;
  } else if ("Nintendo DSi" === H) {
    q = 2, p = Cb, E = 9, T = p;
  } else if ("New Nintendo 3DS" === H || h(c, "iPhone OS 6_0") && 320 === Na && 240 === $a) {
    q = 4, p = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === H) {
    q = 3, p = Oa, Ra = 535;
  } else if (!H && h(Q, "Nintendo Switch;")) {
    q = 7, p = n(Q, "NintendoBrowser/");
  } else if (x.wiiu) {
    q = 6, p = n(Q, "NintendoBrowser/"), E = 16, T = n(Q, "AppleWebKit/") || (Hb ? 536 : 534), p || (p = Hb ? 4 : 2, h(Q, "Macintosh;") || h(Q, "Windows NT") && h(Q, "Touch"));
  } else if (ma && ma.wiiremote) {
    q = 5, p = n(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === H) {
    q = 9, p = n(Q, H + " ");
  } else if ("PSP" === H) {
    q = 8;
    p = n(c, "(PlayStation Portable); ");
    var Ib = 3.2;
  } else if ("PlayStation 5" === H) {
    q = 12, p = n(Q, H + "/");
  } else if ("PlayStation 4" === H) {
    q = 11, p = n(Q, H + "/");
  } else if ("PlayStation 3" === H) {
    q = 10, p = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 "), 0 > qa(p, "4.10") && (E = 27, T = p);
  } else if (h(c, "Xbox One")) {
    q = 14, p = 1;
  } else if (h(c, "Xbox")) {
    q = 13, p = 1;
  } else if (2 === fb && h(c, "Sony/COM2/")) {
    q = 17;
    p = 2;
    Ib = 3.4;
    var wb = !0;
  } else if (0 === H.indexOf("iP") || Xa || Ya || kb) {
    if (Ya) {
      switch(p = Ya, tb.substr(0, 4)) {
        case "iPho":
          var fa = 0;
          n(tb, fa);
          var Ba = !0;
          break;
        case "iPad":
          fa = 1;
          n(tb, fa);
          var xa = !0;
          break;
        case "iPod":
          fa = 2;
          n(tb, fa);
          var ab = !0;
      }
    } else {
      Xa ? p = Xa : (p = n(Q.split("_").join("."), "OS "), eb("isSecureContext", x), eb("enableWebGL", x), eb("sameOrigin", x));
      if (!p || rb) {
        p = x.PointerEvent ? 13 : x.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : x.WebAssembly ? 11.2 : x.HTMLMeterElement ? 10.3 : x.Proxy ? 10.2 : x.HTMLPictureElement ? 9.3 : db.isNaN ? 9.2 : x.SharedWorker ? z && z.now ? 8 : 8.4 : ib ? 7.1 : x.webkitURL ? 6.1 : x.Worker ? 5.1 : W ? 4.3 : L ? 4.1 : 3.2;
      }
      var ya = Na === 1.5 * $a || 1.5 * Na === $a;
      0 === H.indexOf("iPhone") ? (fa = 0, Ba = !0) : 0 === H.indexOf("iPad") || kb ? (fa = 1, xa = !0) : 0 === H.indexOf("iPod") && (fa = 2, ab = !0);
    }
    E = !Ya && (ia.standalone || (xa || 12 > p) && eb("webkitFullscreenEnabled", y) || 11 <= p && 13 > p && ia.mediaDevices) ? 17 : 18;
    q = 24;
    T = p;
  } else if (h(c, "Kobo")) {
    q = 18, E = 22, T = 2.2, Ga = !0;
  } else if (h(c, "EBRD")) {
    q = 19, E = 22, T = 2.2;
  } else if (y = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    q = 29, p = y;
  } else if (x.onmoztimechange !== Ka) {
    q = 30, p = 18.1 > wa ? "1.0.1" : 19 > wa ? 1.1 : 27 > wa ? 1.2 : 29 > wa ? 1.3 : 31 > wa ? 1.4 : 33 > wa ? 2 : 35 > wa ? 2.1 : 38 > wa ? 2.2 : 45 > wa ? 2.5 : 2.6, h(c, "Mobile") ? Ba = !0 : h(c, "Tablet") ? xa = !0 : h(c, "TV");
  } else if (x.palmGetResource) {
    q = 32, p = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), h(c, "webOS.TV") || h(c, "/SmartTV") || (Ba = !0);
  } else if (y = n(c, "Tizen ")) {
    q = 33, p = y, E = 25, T = X, Ba = !0;
  } else if (y = n(c, "Windows Phone ") || n(Q, "Windows Phone OS ") || Rb) {
    q = 23, p = y, Ba = !0;
  } else if (Wa && "ARM" === H) {
    q = 23, p = 10, Ba = !0;
  } else if (ob && h(Q, "ZuneWP")) {
    q = 23, p = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", Ba = !0;
  } else if (h(c, "FOMA;")) {
    q = 16, Ba = !0;
  } else if (h(c, "SoftBank;")) {
    q = 16, Ba = !0;
  } else if (h(c, "KFMUWI")) {
    var Pa = !0;
    p = 6.3;
    var za = xa = !0;
  } else if (h(c, "KFKAWI")) {
    Pa = !0, p = 6, za = xa = !0;
  } else if (h(c, "KFSUWI") || h(c, "KFAUWI") || h(c, "KFDOWI")) {
    Pa = !0, p = 5, za = xa = !0;
  } else if (h(c, "KFGIWI")) {
    Pa = !0, p = 5, za = xa = !0;
  } else if (h(c, "KFARWI") || h(c, "KFSAWA") || h(c, "KFSAWI")) {
    Pa = !0, p = 5 <= Ma(ra) ? 5 : 4, za = xa = !0;
  } else if (h(c, "KFSOWI") || h(c, "KFTHWA") || h(c, "KFTHWI") || h(c, "KFAPWA") || h(c, "KFAPWI")) {
    Pa = !0, p = 3, za = xa = !0;
  } else if (h(c, "KFOT") || h(c, "KFTT") || h(c, "KFJWA") || h(c, "KFJWI")) {
    Pa = !0, p = 2, za = xa = !0;
  } else if (h(c, "Kindle Fire")) {
    Pa = !0, p = 1, za = xa = !0;
  } else if (y = n(c, "Kindle/")) {
    q = 20, p = y, E = 22, T = 2.2;
  } else if (Ob) {
    Pa = !0, p = ra || vb, za = !0;
  } else if (h(c, "AmazonWebAppPlatform") || h(c, "; AFT")) {
    Pa = !0, p = ra, za = !0;
  } else if (h(c, "MeeGo")) {
    q = 34;
  } else if (h(c, "Maemo")) {
    q = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Nb) {
    q = 22, wb = !0;
  } else if ("WinCE" === H) {
    q = 21, wb = !0;
  } else if (0 === H.indexOf("Win")) {
    q = "Win16" === H ? 37 : "Win32" === H ? 38 : "Win64" === H ? 39 : 0, p = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === H.indexOf("Mac")) {
    q = "Mac68K" === H ? 41 : "MacPowerPC" === H || "MacPPC" === H ? 40 : "MacIntel" === H ? 42 : 0;
    if (y = n(c.split("_").join("."), "Mac OS X ")) {
      p = y;
    }
    var jb = !0;
  } else if (h(c, "BlackBerry") || h(c, "BB10")) {
    q = 36, p = Oa, Ba = !0;
  } else if (h(c, "SunOS") || h(c, "Sun Solaris")) {
    q = 44;
  } else if (h(c, "FreeBSD")) {
    q = 45;
  } else if (h(c, "OpenBSD")) {
    q = 46;
  } else if (h(c, "NetBSD")) {
    q = 47;
  } else if (Ga && hb) {
    h(c, "Android 4.4;") ? ya = {min:2.3} : 4 <= Ma(ra) ? ya = ra : ya = {min:2.2}, p = ya;
  } else if (Ga && ma) {
    ra ? ya = ra : ya = {min:1.6}, p = ya, h(c, "Tablet") ? xa = !0 : Ba = !0;
  } else if (ra) {
    p = ra, Ga = !0;
  } else if (qb && gb || pb || sb) {
    var bb = !0;
    X ? ya = {min:4.4} : Qa && !zb || Da || Fb ? ya = {min:4} : (ya = ra = Ea.touchAction !== Ka ? {min:5} : Za ? 4.4 : W ? ia.connection ? x.searchBoxJavaBridge_ || Qa ? db.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ra ? 3 : 533 <= Ra ? L ? 2.3 : 2.2 : 530 <= Ra ? 2 : 1.5, yb && (E = 25, T = yb));
    p = ya;
    Ga = !0;
  } else {
    ub ? (p = {min:5}, bb = Ga = !0) : qb && (h(c, "Ubuntu") ? q = 48 : (y = n(c, "Mint/")) ? (q = 49, p = y) : (y = n(c, "Fedora/")) ? (q = 50, p = y) : q = h(c, "Gentoo") ? 51 : 52);
  }
  Pa || Ga && bb && Tb ? q = 28 : Ga && (q = q || 27);
  E || (za = za || Ga, ma ? (E = za || wb || Ba || xa ? 9 : 8, T = Cb) : ob ? (ya = va(Q, "Trident/") + 4, E = wb || Ba || xa || ab ? 3 : jb && 5 <= l ? 7 : 2, T = l) : Wa ? (E = 23 === q ? 6 : 5, T = n(Q, "Edge/")) : lb ? (E = 13, T = lb) : hb ? (E = za ? 12 : 11, T = wa || Sb) : X ? (E = 25, T = X) : (y = Ib || n(c, "NetFront/")) ? (E = 19, T = y) : (y = n(c, "iCab")) ? (E = 20, T = y) : (y = M(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || Fa && Oa) ? (E = 10, T = y, q || (h(c, "iPhone") ? fa = 
  0 : h(c, "iPad") ? fa = 1 : h(c, "iPod") && (fa = 2), fa && (q = 24))) : Db ? (E = 26, T = Mb) : Gb ? (E = 15, T = fb) : Ga && zb ? (E = 22, T = ra) : Qa || Da || Fb ? (E = za ? 23 : 21, T = Ha || Eb) : Ga && Za ? (E = 24, T = 5 > Ma(ra) ? ra : Ha) : Ga && (Oa || bb) ? (E = 22, T = ra) : Ha ? (E = za ? 23 : 21, T = Ha) : Ra && (E = 16, T = Ra));
  q && (Ua[2] = q, p && (Ua[3] = V(p)));
  E && (Ua[0] = E, T && (Ua[1] = V(T)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ua, x, y, ia, L, Ma, db, Ka, va, h, Lb, eb, n, M) {
  function V(m) {
    if (x[0] === m) {
      return Ea === Ea + "" ? va(Ea) : Ea;
    }
  }
  function qa(m) {
    var F = x[3];
    if (x[2] === m) {
      return F === F + "" ? va(F) : F;
    }
  }
  function c(m, F, da) {
    m + "" === m && ("a" === m.charAt(2) && (da = !0, m = m.substr(0, 2)), m = "CS" === m ? 7.2 > z ? 117 : .9 > W || 9 > l || 9 > z || Na ? 1 : 132 : parseInt(m, 16));
    da && (50 === m && (m = 128), 102 < m && 108 > m && (m += 24));
    return (m - 1) * -(6 * (F || 2));
  }
  var Q = L.body, fb = Q.style, H, Wa, Ea = x[1], l = V(2) || V(3), Na = V(7), $a = V(5) || V(6), z = V(8) || V(9), W = V(11) || V(12), gb = W && 0 <= x.conpare(Ea, "1.9.1"), Oa = V(13), Fa = V(16), ma = V(17) || V(18), Cb = V(10) || V(26), Da = V(21) || V(23), ob = V(24), Qa = V(22), hb = V(25), Db = Da || ob || Qa || hb, Mb = Da && va(Ma.userAgent.split("Edg/")[1]), Rb = va(Ma.appVersion.split("Trident/")[1]) + 4, Xa = qa(37) || qa(38) || qa(39), ra = qa(40) || qa(41) || qa(42) || qa(43), pb = 
  .9 > W, Ga = (Na ? "ie5mac" : 5.5 > l ? "ie5win" : 6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > z ? "opr70" : 8 > z ? "opr72" : 9.5 > z ? "opr" + (z | 0) : W && !gb ? 1.4 <= W ? "gck19" : 1.3 <= W ? "gck13" : 1 <= W ? "gck12" : pb ? .8 <= W ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  qa(1) || qa(2) || qa(3) || qa(4) || qa(8) || qa(9);
  var qb, kb, lb, wa = 8 > l || 7.2 > z ? !1 : M, Sb = fb.transform !== M ? "transform" : fb["-o-transform"] !== M ? "-o-transform" : fb["-ms-transform"] !== M ? "-ms-transform" : fb.MozTransform !== M ? "-moz-transform" : fb["-webkit-transform"] !== M ? "-webkit-transform" : "", rb = [], Ra = [], Ha = [], Eb, Fb, Gb, Nb, Tb = 525 > Fa || 3.1 > ma || 2.2 > Qa || 10 > z || W && !gb || V(26) || 10 > V(3) || qa(34) || qa(32) || qa(3), X, yb, zb, sb, Ya, Za, tb, ib = Ka.now || function() {
    return +new Ka();
  };
  (function() {
    function m() {
      for (var A, a = 0, b = ib(); a < B.length;) {
        b < B[0].t ? ++a : (A = B.splice(a, 1)[0], A.f(A.p));
      }
      O = B.length ? h(m, R) : 0;
    }
    function F() {
      for (var A, a = 0; a < ca.length; ++a) {
        A = ca[a], A.f();
      }
    }
    function da() {
      ja && (ja = n(ja));
    }
    function na() {
      O && (O = Lb(O));
    }
    zb = function(A) {
      ca.length || (ja = eb(F, ka));
      ca.push({f:A, l:++sa});
      return sa;
    };
    sb = function() {
      ja && (da(), ja = eb(F, ka));
    };
    Ya = da;
    var ca = [], ka = 500, sa = 0, ja;
    if (5 > l || Na) {
      y._wdb_onlooptimer = F, F = "_wdb_onlooptimer()";
    }
    X = function(A, a, b) {
      B.length || (O = h(m, R));
      B.push({f:A, p:a, l:++I, t:ib() + (R < b ? b : R)});
      return I;
    };
    yb = function(A) {
      for (var a = B.length, b; b = B[--a];) {
        if (b.l === A) {
          B.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Za = function() {
      O && (na(), O = h(m, R));
    };
    tb = na;
    var B = [], R = ma | 0 ? 64 : 16, I = 0, O;
    if (5 > l || Na) {
      y._wdb_ontimer = m, m = "_wdb_ontimer()";
    }
  })();
  var Hb, ub, Ob, vb, q, p, E, T, Ib, wb, fa, Ba, xa, ab, ya, Pa, za, jb, bb, D, aa, la;
  (function() {
    function m(a, b, d) {
      var u = ["<", a], v = 1, U, oa;
      if (b) {
        for (U in b) {
          var k = b[U];
          if (null != k && "" !== k) {
            if ("style" === U) {
              u[++v] = ' style="';
              for (oa in k) {
                for (var G = ++v, P, Y = [], g = oa.split(""), f = g.length; f;) {
                  P = g[--f], "A" <= P && "Z" >= P && (P = "-" + P.toLowerCase()), Y[f] = P;
                }
                u[G] = Y.join("") + ":" + k[oa] + ";";
              }
              u[++v] = '"';
            } else {
              "className" === U && (U = "class"), u[++v] = " " + U + '="' + k + '"';
            }
          }
        }
      }
      u[++v] = ">";
      null != d && (I && "font" !== a ? u[++v] = "<font>" + F(d) + "</font>" : u[++v] = F(d));
      u[++v] = "</" + a + ">";
      return u.join("");
    }
    function F(a) {
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
    function na(a) {
      var b = "*" === a;
      a = I ? b ? L.all : L.all.tags(a.toUpperCase()) : 6 > l && b ? L.all : L.getElementsByTagName(a);
      b = [];
      for (var d = 0, u = a.length; d < u; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function ca(a) {
      return I ? a.parentElement : a.parentNode;
    }
    function ka(a, b, d, u, v, U) {
      if (I) {
        var oa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var k = q(2 > a ? vb(b) : b);
        k = 2 > a ? k.indexOf(b) + a : k.length;
        b.insertAdjacentHTML(oa, m(d, u, v));
        b = q(b)[k];
        null != v && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (O) {
        b = L.createElement(m(d, u));
      } else {
        b = U ? L.createElementNS("http://www.w3.org/2000/svg", d) : L.createElement(d);
        if (u) {
          for (oa in u) {
            if ((a = u[oa]) || 0 === a) {
              switch(oa) {
                case "class":
                case "className":
                  za(b, a);
                  break;
                case "style":
                  U = b.style;
                  for (k in a) {
                    U[k] = a[k];
                  }
                  break;
                default:
                  ab(b, oa, a);
              }
            }
          }
          !z || "a" !== d && "A" !== d || !u.href || u["tag-index"] || u.tagIndex || ab(b, "tagIndex", "-0");
        }
        A || null != v && sa(b, v);
      }
      return b;
    }
    function sa(a, b) {
      if (I) {
        return ka(2, a, "font", M, b);
      }
      var d = L.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function ja(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function B(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function R(a, b, d) {
      if (8 > z || 5.5 > l) {
        b = da(b);
      }
      a.style[b] = d;
    }
    var I = 5 > l;
    H = na("html")[0];
    Wa = na("head")[0];
    Hb = function(a) {
      return y[a] || L[a] || L.getElementById(a);
    };
    ub = na;
    Ob = function(a) {
      var b = [], d = 0, u, v = -1;
      if (9 > l || !L.getElementsByClassName) {
        var U = 6 > l ? L.all : L.getElementsByTagName("*");
      } else {
        var oa = !0;
        U = L.getElementsByClassName(a);
      }
      for (u = U.length; d < u; ++d) {
        var k = U[d];
        if (oa || (I || 1 === k.nodeType) && B(k, a)) {
          b[++v] = k;
        }
      }
      return b;
    };
    vb = ca;
    q = function(a) {
      a = I ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    p = function(a) {
      var b = !(7.03 < z && 7.2 > z) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], u = a.length, v = -1, U; u;) {
        if (U = a[--u], b || 1 === U.nodeType) {
          I && "FONT" === U.tagName || (d[++v] = U);
        }
      }
      return d;
    };
    E = function(a, b, d, u, v) {
      b = ka(2, a, b, d, u, v);
      I || (a.appendChild(b), A && null != u && sa(b, u));
      return b;
    };
    T = function(a, b, d, u, v) {
      b = ka(0, a, b, d, u, v);
      I || (ca(a).insertBefore(b, a), A && null != u && sa(b, u));
      return b;
    };
    Ib = sa;
    wb = function(a, b) {
      if (I) {
        return ka(0, a, "font", M, b);
      }
      var d = L.createTextNode("" + b);
      vb(a).insertBefore(d, a);
      return d;
    };
    fa = function(a) {
      I ? a.outerHTML = "" : (5.5 > l && (a.style.filter = ""), vb(a).removeChild(a));
    };
    var O = 9 > l, A = O;
    Ba = function(a) {
      return a.tagName.toUpperCase();
    };
    xa = function(a, b) {
      if (8 > z || 5.5 > l) {
        b = da(b);
      }
      var d = a.getAttribute(b);
      return z && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    ab = function(a, b, d) {
      if (z && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > z || 5.5 > l) {
          b = da(b);
        }
        a.setAttribute(b, d);
      }
    };
    ya = function(a, b) {
      if (z && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > z || 5.5 > l) {
          b = da(b);
        }
        a.removeAttribute(b);
      }
    };
    Pa = function(a, b) {
      if (z && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > z || 5.5 > l) {
        b = da(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    za = ja;
    jb = B;
    bb = function(a, b) {
      var d;
      if (!B(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        ja(a, d + b);
      }
    };
    D = function(a, b) {
      if (B(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        ja(a, d.join(" "));
      }
    };
    aa = R;
    la = function(a, b) {
      var d, u = -1, v;
      if (5.5 > l) {
        if (d = 5.5 > l ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); v = d[++u];) {
            R(a, v.split(":")[0], "");
          }
        }
        if (b) {
          for (u = -1, d = b.split(";"); v = d[++u];) {
            var U = v.split(":")[0];
            R(a, U, v.substr(U.length + 1));
          }
        }
      } else if (7.1 > z) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); v = d[++u];) {
            v = v.split(":"), R(a, v[0], v[1]);
          }
        }
      } else {
        9 > z || 1 > W ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var Aa, Va, Ab, Jb, xb, Ub, Vb, Ia, Pb;
  (function() {
    function m() {
      return k ? P ? 2 : G ? 3 : 1 : 0;
    }
    function F(g) {
      Va(y, "load", F);
      F = M;
      na(rb, g, !0);
      Ab = rb = M;
    }
    function da(g, f) {
      xb(function() {
        var J = B(g);
        f(J);
        J.addListener(f);
        return !0;
      });
    }
    function na(g, f, J) {
      for (var e = 0; e < g.length; ++e) {
        !0 === g[e](f) && (g.splice(e, 1), --e);
      }
      J && (g.length = 0);
    }
    function ca(g, f, J) {
      rb || I.length || X(ka);
      I.push(g, f, J);
    }
    function ka() {
      var g = I, f;
      for (I = []; f = g.shift();) {
        na(f, g.shift(), g.shift());
      }
    }
    function sa(g) {
      var f = g || event;
      g = A[f.type];
      var J = -1, e, K;
      5 > l ? f = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : l ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : b && (f.j = f.stopPropagation, f.stopPropagation = function() {
        K = !0;
      });
      for (; e = g[++J];) {
        e.i === this ? (this.g = e.h, l && (f.currentTarget = this), this.g(f), l ? (this.g = ia, this.g = M) : delete this.g) : 7.2 > z && this === L && e.i === y && (y.g = e.h, y.g(f), delete y.g);
      }
      if (l) {
        return f.preventDefault = f.stopPropagation = ia, f.preventDefault = f.stopPropagation = M, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (u = !0), K && !u && f.j(), f.j = f.stopPropagation = M);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function ja() {
      var g = 9 === R.offsetWidth;
      Vb !== g && ca(Ra, Vb = g);
    }
    var B = y.matchMedia, R, I = [];
    rb.push(function() {
      da = M;
      R = E(Q, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Ab(function() {
        I.length && X(ka);
      });
    });
    Aa = function(g, f, J, e) {
      if (d) {
        g.addEventListener(f, J, e ? O ? e : e.capture || !0 === e : !1);
      } else {
        var K = {i:g, h:J};
        e = A[f];
        var r = "on" + f, w, pa;
        if (e) {
          for (w = e.length; pa = e[--w];) {
            if (pa.i === g && pa.h === J) {
              return;
            }
          }
          A[f].push(K);
        } else {
          A[f] = e = [K], a || (f = g[r], "function" === typeof f && f !== sa && e.unshift({i:g, h:f}));
        }
        a ? g.attachEvent(r, sa) : g[r] = sa;
      }
    };
    Va = function(g, f, J, e) {
      if (d) {
        g.removeEventListener(f, J, e ? O ? e : e.capture || !0 === e : !1);
      } else {
        e = A[f];
        f = "on" + f;
        var K, r, w;
        if (e) {
          for (K = e.length; r = e[--K];) {
            r.i === g && (r.h === J ? e.splice(K, 1) : w = !0);
          }
          w || (a ? g.detachEvent(f, sa) : l ? (g[f] = ia, g[f] = null) : delete g[f]);
        }
      }
    };
    var O = !l && !Na && (new db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), A = {}, a = !1, b = 525.13 > Fa, d = !b && !Na && y.addEventListener, u;
    b && H.addEventListener("click", function(g) {
      if (u) {
        return u = !1, g.preventDefault(), !1;
      }
    });
    Ab = function(g) {
      rb.push(g);
    };
    Jb = function(g) {
      v && v.push(g);
    };
    var v = [];
    if (419.3 >= Fa) {
      var U = function() {
        if (U) {
          var g = L.readyState;
          "loaded" === g || "complete" === g ? (U = M, F()) : X(U);
        }
      };
      X(U);
    } else {
      Aa(y, "load", F);
    }
    l || !pb && 1.8 > W ? Aa(y, "unload", function(g) {
      na(v, g, !0);
    }) : v = M;
    xb = function(g) {
      Ra.push(g);
    };
    Ab(function() {
      ja();
      zb(ja);
    });
    Ub = function(g) {
      Ha && Ha.push(g);
    };
    var oa = 60 > W || Oa, k, G, P;
    if (89 <= W || 89 <= Da || Xa && 79 <= Mb || B && (B("(forced-colors:none)").matches || B("(forced-colors:active)").matches)) {
      Pb = !0, da("(forced-colors:active)", function(g) {
        k = g.matches;
        Ia = m();
        ca(Ha, Ia);
      });
    } else if (10 <= l || $a || Xa && Mb) {
      Pb = !0, da("(-ms-high-contrast:black-on-white)", function(g) {
        k = G = g.matches;
        Ia !== m() && (Ia = m(), ca(Ha, Ia));
      }), da("(-ms-high-contrast:white-on-black)", function(g) {
        k = P = g.matches;
        Ia !== m() && (Ia = m(), ca(Ha, Ia));
      }), da("(-ms-high-contrast:active)", function(g) {
        k = g.matches;
        Ia !== m() && (Ia = m(), ca(Ha, Ia));
      });
    } else if (Xa && (l || W && 0 <= x.conpare(Ea, "1.8.1") || Oa)) {
      var Y = function() {
        function g(e, K) {
          if (K && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var r = e.split("(")[1].split(",");
          return va(r[0]) + va(r[1]) + va(r[2]);
        }
        var f = L.defaultView;
        var J = f ? f.getComputedStyle(R, null) : R.currentStyle;
        f = (J && J.color || "").split(" ").join("");
        J = (J && J.backgroundColor || "").split(" ").join("");
        f && (k = "#123456" !== f && "rgb(18,52,86)" !== f, G = g(f) < g(J, !0), P = g(f) > g(J, !0), Ia !== m() && (Ia = m(), ca(Ha, Ia, oa)));
      };
      xb(function(g) {
        if (g) {
          return aa(R, "color", "#123456"), aa(R, "backgroundColor", "#123456"), oa ? (Y(), Ha = M) : zb(Y), Y = M, !0;
        }
      });
    } else {
      Ha = m = M;
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
          return !!U;
        case 5:
          return k;
        case 6:
          return oa && !R;
      }
      return !1;
    }
    function F(t) {
      G(t);
      pa && !t && fa(pa);
      G = P = Y = g = f = J = r = w = pa = La = M;
    }
    function da(t) {
      L.fonts.load('1.6em "' + t + '"').then(function() {
        var ha;
        (ha = ca(P)) ? X(F, ha) : na(!0);
      }, function() {
        wa !== M ? ka(wa) : Eb(ka);
      });
    }
    function na(t) {
      t && (K = ib());
      (t = ca(P, e)) ? F(t) : (t = e, L.hidden || L.msHidden || L.mozHidden || L.webkitHidden ? (K = ib(), t = !1) : t = t < ib() - K, t ? r ? sa() : B ? F(0) : wa !== M ? ka(wa) : Eb(ka) : X(na));
    }
    function ca(t) {
      var ha = 0, ea = -1, C = (a || !1) && [];
      if (!La) {
        var N = -1;
        var S;
        w = E(Q, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, A);
        for (La = []; S = b[++N];) {
          aa(w, "fontFamily", S), La[N] = w.offsetWidth;
        }
      }
      for (5 > l ? w || (w = E(Q, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, A)) : Q.appendChild(w); N = b[++ea];) {
        aa(w, "fontFamily", '"' + t + '",' + N);
        var Z = w.offsetWidth;
        if (a) {
          C[ea] = Z;
        } else {
          if (Z !== La[ea]) {
            ha = 1;
            break;
          }
        }
      }
      if (a && Z === C[0] && Z === C[1]) {
        for (ha = 1, ea = -1; 0 <= (Z = La[++ea]);) {
          if (Z === C[0] && Z === C[1] && Z === C[2]) {
            ha = 0;
            break;
          }
        }
      }
      !l && ha && f && (w.textContent = f, Z = w.offsetWidth, w.textContent = J, ha = Z === w.offsetWidth ? 2 : 1, w.textContent = A);
      fa(w);
      5 > l && (w = M);
      return ha;
    }
    function ka(t) {
      t ? (r = !0, e = O, sa()) : F(0);
    }
    function sa() {
      if (Y) {
        for (; Y.length;) {
          var t = Y.shift(), ha = Y.shift();
          if (m(t)) {
            pa = Nb(ha, ja, g, pa);
            return;
          }
        }
      }
      F(0);
    }
    function ja(t) {
      t ? na(!0) : sa();
    }
    Ra.splice(0, 0, function() {
      if (Vb) {
        lb = 8 <= l || $a || 9.5 <= z || gb || Oa || 522 <= Fa || 3 <= ma || Cb || Db ? 3 : 7.2 <= z ? 2 : 6 <= z || W ? 1 : 0;
        if (!lb && !l && !Na) {
          var t = E(Q, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          lb = 6 <= t.offsetWidth ? 2 : 0;
          fa(t);
        }
        return !0;
      }
    });
    Eb = !1 === wa ? function(t) {
      X(t, !1);
    } : function(t) {
      function ha(N) {
        C && (C = yb(C), wa = N, ea.onload = ea.onerror = ia, X(t, N));
      }
      if (wa !== M) {
        X(t, wa);
      } else {
        var ea = new Image(), C = X(ha, !1, 999);
        ea.onerror = function() {
          ha(!1);
        };
        ea.onload = function() {
          ha(1 === ea.width * ea.height);
        };
        ea.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > l && Ab(function() {
      var t = E(Q, "div");
      la(t, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      qb = 1 < t.offsetHeight;
      fa(t);
    });
    Fb = function(t, ha) {
      function ea() {
        if (N || !S || C.complete) {
          var Z = !!C.width;
          kb = kb || Z;
          X(t, Z);
          C.onerror = C.onload = ia;
          C = t = M;
        } else {
          --S, X(ea);
        }
      }
      var C = new Image(), N, S = 99;
      C.onerror = function() {
        N = !0;
      };
      C.onload = function() {
        N = !0;
      };
      C.src = ha;
      X(ea);
    };
    Gb = function(t, ha, ea, C, N, S, Z) {
      G = t;
      P = ha;
      Y = ea;
      g = C;
      f = N;
      J = S;
      e = Z || I;
      V(10) ? X(F, 1) : Tb ? X(F, 0) : !L.fonts || 603 > Fa || 11 > ma ? na(!0) : da(P);
    };
    var B = 9 > l, R = 6 > Da || z || 530 > Fa || 5 > ma || qa(10), I = 5E3, O = 500, A = "mmmmmmmmmmlliiiiiiiii", a = 9 <= Da && 18 > Da || 3 > Qa || 7 > ma || Fa && 0 >= x.conpare(Ea, "536.11"), b = ["monospace", "sans-serif", "serif"], d = 14 <= $a || 36 <= Da || 39 <= W || 602 <= Fa && ra && 0 <= x.conpare("10.12", ra) || 10 <= ma, u = 6 <= Da || W && 0 <= x.conpare(Ea, "1.9.2") || 533 <= Fa || 5 <= ma || 4.4 <= Qa || 11.5 <= z || $a || 9 <= V(2) || 10 <= V(3), v = 2 <= Da || gb || 525 <= Fa || 
    4 <= ma || 2.2 <= Qa || 10.1 <= z || $a || 9 <= V(2) || 10 <= V(3), U = v, oa = 5.1 <= Xa && 5.2 >= Xa && 40 > Da || 6 <= Xa && 6.1 > Xa && 51 > Da || 37 > Da || 525 <= Fa || 3.1 <= ma || 3 <= Qa || 11.5 <= z, k = 4 <= V(2) || 10 <= V(3), G, P, Y, g, f, J, e, K, r, w, pa, La;
  })();
  (function() {
    Nb = function(B, R, I, O) {
      O = O || E(Wa, "link", {type:"text/css", rel:"stylesheet"});
      var A;
      if (ja) {
        (A = Hb(I)) ? ya(A, "id") : A = E(Q, "div", {"aria-hidden":"true", className:I});
        var a = A.offsetWidth;
        ab(A, "id", I);
      }
      sa(O, B, R, A, a);
      return O;
    };
    var m = W && 0 > x.conpare(Ea, "0.9.1"), F = 11 <= l || $a || 9 <= z && 9.5 > z, da = 11 > l, na = 7.2 <= z && 7.5 > z, ca = 9 > W && !m || 19 > Da || 4.3 > Qa || 2 > hb || 536 > Fa || 6 > ma || 7 <= z && 9 > z && !na, ka = !m && !F && !da && !na && !ca, sa = ka ? function(B, R, I) {
      B.onload = o;
      B.onerror = function() {
        B.onload = B.onerror = null;
        X(I, !1);
      };
      B.href = R;
      function o() {
        B.onload = B.onerror = null;
        X(I, !0);
      }
      o = !1;
    } : F ? function(B, R, I, O, A) {
      B.onload = function() {
        X(I, ja(O, A));
        fa(O);
        B.onload = null;
        O = M;
      };
      B.href = R;
    } : da ? function(B, R, I, O, A) {
      B.onreadystatechange = function() {
        "complete" === B.readyState && (X(I, ja(O, A)), fa(O), O = M, B.m = ia);
      };
      B.href = R;
    } : ca || na ? function(B, R, I, O, A) {
      function a() {
        d && (u = yb(u), v = ib() + 999, X(b, 0, 99), ca ? d.onerror = null : d.removeEventListener("load", a, !1), d = M);
      }
      function b() {
        ja(O, A) ? (fa(O), O = M, X(I, !0)) : ib() < v ? X(b, 0, 99) : (fa(O), O = M, X(I, !1));
      }
      var d = new Image(), u = X(a, 0, 5E3), v;
      ca ? d.onerror = a : d.addEventListener("load", a, !1);
      d.src = B.href = R;
    } : function(B, R, I) {
      X(I, !1);
    }, ja = !ka && !m && function(B, R) {
      return B.offsetWidth !== R;
    };
  })();
  var Qb = String.fromCharCode, cb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Qb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Wb = cb[7], fc = cb[113], ac = Qb(160);
  Qb(8194);
  var bc = cb[31], Xb = cb[30], cc = cb[63], gc = cb[125], hc = cb[126], ic = Qb(59648), dc = (9 === l || W && 0 <= x.conpare(Ea, "1.8.1") || Oa) && !Pb, mb = [], nb, Sa, Kb = 7.2 > z ? function() {
    nb = !nb;
    for (var m = -1, F; F = mb[++m];) {
      -1 !== F.className.indexOf("pbAlp") ? aa(F, "display", nb ? "" : "none") : (bb(F, nb ? "pbChrCS" : "pbChr00"), D(F, nb ? "pbChr00" : "pbChrCS"));
    }
  } : dc ? function() {
    nb = !nb;
    for (var m = -1, F; F = mb[++m];) {
      aa(F, "opacity", nb ? 1 : 0);
    }
  } : M;
  var Yb = Ua.startBlinkingIfCursor = function(m) {
    Kb ? jb(m, "pbChrCS") && (Sa || !z && !Ia || (Sa = eb(Kb, 400)), -1 === mb.indexOf(m) && mb.push(m)) : mb = M;
  };
  Ua.stopBlinkingIfCursor = function(m) {
    Kb && (m = mb.indexOf(m), 0 <= m && (mb.splice(m, 1), !mb.length && Sa && (n(Sa), Sa = 0)));
  };
  dc && Ub(function(m) {
    m ? Sa || (Sa = eb(Kb, 400)) : Sa && (n(Sa), Sa = 0);
  });
  Kb && Jb(function() {
    Sa && n(Sa);
  });
  Pb || Ub(function(m) {
    m ? (ab(H, "forced-colors", 2 === m ? "lod" : 3 === m ? "dol" : "active"), (Sb || 9 === l || 5.5 <= l && 9 > l && qb) && bb(H, "jsCanRotate")) : (ya(H, "forced-colors"), D(H, "jsCanRotate"));
  });
  (function() {
    function m(k) {
      (a = k) ? ca() : kb ? na(!0) : kb !== M ? ca() : Fb(na, b);
    }
    function F() {
      F = M;
      Gb(m, "PB-100", [1, Ta + "pbFont/woff2.css", 2, Ta + "pbFont/woff.css", 4, Ta + "pbFont/otf.css", 3, Ta + "pbFont/ttf.css", 6, Ta + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", cc);
    }
    function da(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function na(k) {
      k && bb(Q, "pbList-noWebFont");
      ca();
    }
    function ca() {
      for (m = Gb = M; A.length;) {
        ka(A.shift(), A.shift());
      }
    }
    function ka(k, G) {
      function P(K) {
        K = q(K);
        for (var r = -1, w; w = K[++r];) {
          switch(w.nodeType) {
            case 1:
              P(w);
              break;
            case 3:
              w.data && g(w.data) && f.push(w);
          }
        }
      }
      function Y(K) {
        var r = K.children, w = 0, pa = r.length;
        if (pa) {
          for (; w < pa; ++w) {
            Y(r[w]);
          }
        } else {
          (r = K.innerText) && g(r) && f.push(K);
        }
      }
      function g(K) {
        return K.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], J;
      if (m) {
        -1 === A.indexOf(k) && (A.push(k, G), d && F && F());
      } else {
        var e = A.indexOf(k);
        0 <= e && A.splice(e, 2);
        for (5 > l ? Y(k) : P(k); J = f.shift();) {
          e = 5 > l ? J.innerText : J.data, 2 !== a ? (0 <= e.indexOf("\u2091\u208b") && (e = e.split("\u2091\u208b").join(Xb)), 0 <= e.indexOf("\u1d07\u207b") && (e = e.split("\u1d07\u207b").join(Xb)), a && (0 <= e.indexOf("\u208b\u2081") && (e = e.split("\u208b\u2081").join(cc)), 0 <= e.indexOf("\u1d47/\u1d04") && (e = e.split("\u1d47/\u1d04").join(ic)), 0 <= e.indexOf("\u1d47/") && (e = e.split("\u1d47/").join(gc)), 0 <= e.indexOf("/\u1d04") && (e = e.split("/\u1d04").join(hc)))) : 0 <= e.indexOf("\u2091\u208b") && 
          (e = e.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= e.indexOf("\u2091") && (e = e.split("\u2091").join(bc)), G ? 5 > l ? J.innerText = e : J.data = e : sa(e.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(fc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Wb).split("&amp;").join("&"), J);
        }
      }
    }
    function sa(k, G) {
      function P(ta, ba) {
        for (var Ja = ""; ba;) {
          ba & 1 && (Ja += ta), ba >>= 1, ta += ta;
        }
        return Ja;
      }
      function Y(ta, ba, Ja) {
        for (var Bb, jc = -1, Zb, $b; Bb = ba[++jc];) {
          for (; 0 <= (Zb = ta.indexOf(Bb));) {
            $b = Bb.length, ta = ta.substr(0, Zb) + P(Ja, $b) + ta.substr(Zb + $b);
          }
        }
        return ta;
      }
      function g(ta) {
        var ba = va(ta), Ja = "" + ba;
        return 0 < ba && ba === ba | 0 && (ba = ta.indexOf(Ja) + Ja.length, ba <= ta.length) ? ba : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), J = 5 > l || 1 === G.nodeType, e = [], K = "", r, w = -1, pa, La, t;
      if (J) {
        if (U) {
          var ha = G.style.visibility;
          aa(G, "visibility", "hidden");
        }
        G.innerHTML = "";
      }
      if (oa) {
        var ea = G;
        G = L.createDocumentFragment();
      }
      if (function(ta) {
        var ba = ta.indexOf("P");
        if (-1 === ba) {
          return !1;
        }
        ba = va(ta.charAt(ba + 1));
        return 0 <= ba && 9 >= ba;
      }(k)) {
        K = P("+", k.length);
      } else {
        0 <= (r = g(k)) && (K = P("|", r), w = r, --w);
        for (; r = k.charAt(++w);) {
          r === Wb || pa ? (K += "~", r === Wb && (pa = !pa)) : K += r;
        }
        K = Y(K, O, "^");
        K = Y(K, R, "{");
        K = Y(K, I, "}");
      }
      w = 0;
      for (pa = k.length; w < pa; ++w) {
        r = k.charAt(w);
        var C = r === ac;
        var N = " " === r;
        r = C ? " " : r;
        var S = K.charAt(w);
        var Z = (La = Ca) && C;
        var Ca = "|" === S;
        S = f["+|~{}^".indexOf(S) + 1];
        if ("\n" !== r) {
          if (a || !kb) {
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
            S = N && "str" === S ? "pbList-strsp" : C ? "" : !N && S ? "pbList-" + S : "";
          } else {
            C = cb.indexOf(r), C = -1 === C ? "" : cb.indexOf(r).toString(16).toUpperCase(), C = (C = 1 === C.length ? "0" + C : C) ? "pbChr" + C : "", S = N && "str" === S ? "pbList-strsp" : N || !C ? "" : S ? (C ? C + " " : "") + "pbList-" + S : C;
          }
          C = M;
          Z ? (r = 6 <= l && 8 > l ? " " : ac, S = "") : Ca && (W && !gb || 9.5 > z) ? (Ca && !La && (t = 4 - (va(k.substr(w)) + "").length), 7.5 > z ? C = v ? "position:relative;top:-4px;left:" + 12 * t + "px" : {position:"relative", top:"-4px", left:12 * t + "px"} : C = v ? "position:relative;left:" + 12 * t + "px" : {position:"relative", left:12 * t + "px"}) : N && 7.5 > z && (S = "pbList-strsp");
          v ? e.push("<font" + (S ? ' class="' + S + '"' : "") + (C ? ' style="' + C + '"' : "") + ">" + r + "</font>") : J || oa ? E(G, "font", {"class":S, style:C}, r) : T(G, "font", {"class":S, style:C}, r);
        } else {
          La = Ca = !1, v ? e.push(r) : J || oa ? Ib(G, r) : wb(G, r);
        }
      }
      if (J) {
        v ? G.innerHTML = e.join("") : oa && ea.appendChild(G), U && aa(G, "visibility", ha);
      } else {
        if (v) {
          f = L.createElement("font");
          for (f.innerHTML = e.join(""); e = f.firstChild;) {
            G.parentNode.insertBefore(e, G);
          }
          fa(G);
        } else {
          oa ? ea.parentNode.replaceChild(G, ea) : fa(G);
        }
      }
    }
    1.9 > W && xb(function(k) {
      if (k) {
        k = ub("*");
        for (var G = 0, P = k.length, Y; G < P; ++G) {
          Y = k[G], "B" !== Ba(Y) && -1 !== (" " + Y.className).toLowerCase().indexOf(" pbchr") && (Pa(Y, "title") || ab(Y, "title", Y.textContent), Y.textContent = " ");
        }
        return !0;
      }
    });
    xb(function(k) {
      if (k) {
        k = Ob("pbChrCS");
        for (var G = 0, P = k.length; G < P; ++G) {
          Yb(k[G]);
        }
        return !0;
      }
    });
    var ja = [], B = W && 0 > x.conpare(Ea, "0.9.9");
    xb(function(k) {
      function G(N) {
        var S = xa(N, "pbTip");
        if (S) {
          var Z = S.charAt(0);
          var Ca = "_" === Z;
          S = (Ca ? S.charAt(2) : Z).toUpperCase().charCodeAt(0) - 65;
          e ? E(N, "div", {style:{left:7 * S + 3 + "px"}}) : (Z = xa(N, "title"), ya(N, "pbTip"), ya(N, "title"), Ca = E(N, "div", {className:"pbTip" + (Ca ? "Btm" : ""), style:{width:Z.length + Y + "em", left:7 * S - (B ? 0 : 5) + "px"}}, Z), Ca = E(Ca, "div"), .9 <= W && B && aa(Ca, "left", "2px"));
        }
        J && 0 <= N.className.indexOf("pbColor") && E(N, "u");
      }
      function P(N, S) {
        var Z = xa(N, "pbGhst"), Ca = N.className, ta = Ca.split("pbCsr")[1] || "", ba = Ca.split("pbAlp")[1] || "";
        if ("CS" === Z) {
          var Ja = "_";
        } else {
          Ja = Z, 3 === Ja.length && (Ja = Ja.substr(0, 2)), Ja = cb[parseInt(Ja, 16)] || "~";
        }
        var Bb;
        ta = ta.split(" ")[0];
        if (ba = va(ba.split(" ")[0])) {
          g && (Ca = Ca.split("pbChr")[1].split(" ")[0], aa(N, "backgroundPosition", c(Ca, 2, ha) + "px " + -24 * (10 - ba) + "px")), !S && f && T(N, "a").appendChild(N);
        }
        Z && (ba = 10 - ba, g && (Bb = {backgroundPosition:c(Z, 2, ha) + "px " + -24 * (10 - ba) + "px"}), ya(N, "pbGhst"), w = T(N, "b", {className:"pbChr" + Z + " pbCsr" + ta + " pbAlp" + ba, style:Bb}, Ja), Yb(w));
        Yb(N);
      }
      if (k) {
        var Y = 6 > l ? 2 : 0, g = 7.2 > z || .9 > W || Na, f = 1.1 === W, J = 1.4 > W;
        k = ub("SAMP");
        var e = 8 === l, K = lb, r, w, pa, La, t;
        qb && bb(Q, "pbLCD-AX");
        if (k.length) {
          for (pa = -1; r = k[++pa];) {
            if (jb(vb(r), "pbLCD")) {
              var ha = jb(r, "PB-120") || jb(r, "FX-795P");
              var ea = p(r);
              for (r = ea.length; t = ea[--r];) {
                switch(Ba(t)) {
                  case "A":
                    (2 > K || e) && G(t);
                    if (2 > K) {
                      var C = p(t);
                      for (La = C.length; La;) {
                        P(C[--La], !0);
                      }
                    }
                    Cb ? ab(t, "href", "javascript:void(0)") : (Aa(t, "click", da), ja.push(t));
                    break;
                  case "B":
                    2 > K && P(t, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Jb(function() {
      for (var k; k = ja.shift();) {
        Va(k, "click", da);
      }
    });
    6 === l && (new db("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(L);
    var R = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), I = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), O = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Xb + bc).split(""), A = [], a, b, d;
    if (.9 <= W && 0 >= x.conpare(Ea, "0.9.1")) {
      bb(H, "pbLCD-gecko09To091");
      var u = !0;
    }
    xb(function(k) {
      if (k) {
        b = Ta + "pbFont/x3mask" + (u ? ".gecko0.9.1.gif" : ".png");
        k = ub("*");
        for (var G = -1, P; P = k[++G];) {
          jb(P, "pbList") ? ka(P) : jb(P, "pbFont") && ka(P, !0);
        }
        A.length && F();
        return !0;
      }
    });
    var v = !1, U = 8 > z, oa = !v && !U && !(6 > l) && L.createDocumentFragment && !!Q.replaceChild;
    Ua.prettify = ka;
  })();
  var ec = L.scripts || ub("script");
  var Ta = ec[ec.length - 1].src.split("/");
  --Ta.length;
  (Ta = Ta.join("/")) && (Ta += "/");
  6.1 > ma && Aa(y, "scroll", sb);
  Jb(Ya);
  6.1 > ma && Aa(y, "scroll", Za);
  Jb(tb);
  10 > l && (11 !== Rb || 5 !== l) || (9 > z || 1 > W || !Na && !y.addEventListener ? L.write('<link href="' + Ta + Ga + '" rel="stylesheet"' + (8 > z ? "" : ' media="screen,handheld,projection,print"') + ">") : Ab(function() {
    E(Wa, "link", {href:Ta + "" + Ga, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

