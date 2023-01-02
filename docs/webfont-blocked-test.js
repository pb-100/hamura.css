/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var u;
ua = [];
ua.conpare = function(Ya, w) {
  var N = 0, ba, A, Ba = (Ya + "").split("."), va = (w + "").split("."), Ha = Ba.length;
  for (ba = va.length; "0" === Ba[Ha - 1];) {
    --Ha;
  }
  for (; "0" === va[ba - 1];) {
    --ba;
  }
  for (A = Ha < ba ? Ha : ba; N < A; ++N) {
    var Za = Ba[N] - 0, k = va[N] - 0;
    if (Za !== k) {
      return Za > k ? 1 : -1;
    }
  }
  return Ha > ba ? 1 : Ha === ba ? 0 : -1;
};
(function(Ya, w, N, ba, A, Ba, va, Ha) {
  function Za(x, ma, B) {
    B = Ba(x.split(ma)[1]);
    return 0 <= B ? B : 0;
  }
  function k(x, ma) {
    return 0 <= x.indexOf(ma);
  }
  function $a(x) {
    return k(x, "Linux armv") || k(x, "Linux aarch") || k(x, "Linux i686") || k(x, "Linux x86_64");
  }
  function F(x, ma) {
    for (var B in ma) {
      if (B === x) {
        return !0;
      }
    }
  }
  function f(x, ma) {
    var B = "", Ca = -1, ja;
    if (x = x.split(ma)[1]) {
      for (; ja = x.charCodeAt(++Ca);) {
        if (48 <= ja && 57 >= ja || 46 === ja) {
          B += x.charAt(Ca);
        } else {
          break;
        }
      }
      for (Ca = B.length; Ca;) {
        if (46 === B.charCodeAt(--Ca)) {
          B = B.substr(0, Ca);
        } else {
          break;
        }
      }
    }
    return B;
  }
  function qa(x) {
    for (var ma = arguments, B = 1, Ca = ma[0], ja; B < ma.length; ++B) {
      0 > Ia(Ca, ja = ma[B]) && (Ca = ja);
    }
    return Ca;
  }
  function Gb(x) {
    return x === x + "" ? x : x === x - 0 ? "" + x : x.min && x.max ? x.min + "~" + x.max : x.min ? x.min + "~" : "~" + x.max;
  }
  var Ia = Ya.conpare, b = ba.userAgent, T = ba.appVersion, nb = Ba(T) || 0, H = ba.platform, n = N.documentElement, Ta = n && n.style, Da = N.documentMode, D = A.width;
  A = A.height;
  var Q = w.HTMLAudioElement, jb = w.performance, ob = w.Int8Array, ab = w.ontouchstart !== Ha, bb = f(T, "Version/") || f(b, "Version/"), Hb = w.operamini, Ja = !Hb && w.opera, Vb = Ja && (Ja.version && "function" === typeof Ja.version ? Ja.version() : qa(f(b, "Opera "), bb, nb)), Ib = w.opr, pb = !Ja && (N.all || Da);
  Da = pb && (Da ? Da : w.XMLHttpRequest ? N.getElementsByTagName ? 7 : 4 : N.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  n = !pb && n.msContentZoomFactor;
  var zb = !n && (w.chrome || w.chromium), gb = !pb && function() {
    for (var x in Ta) {
      if (0 === x.indexOf("Moz")) {
        return !0;
      }
    }
  }(), qb = k(b, "UCWEB"), Nb = qb && f(b, " U2/"), Jb = qb && f(b, "; wds "), hb = f(b.split("_").join("."), "; iPh OS "), ea = f(b, "; Adr "), Ea = k(T, "YJApp-ANDROID"), Ka = k(H, "Android") || gb && k(T, "Android") || Ea;
  ea = f(H, "Android ") || f(T, "Android ") || f(b, "Android ") || ea;
  var eb = k(H, "Linux"), Ab = "MacIntel" === H && ba.standalone !== Ha, Qa = gb && f(b, "Goanna/"), La = !Qa && gb && (f(b, "rv:") || f(b.substr(b.indexOf(") Gecko/") - 11), "; ")), Ob = f(b, "Firefox/"), L = f(b, "Opera/"), Y = w.FNRBrowser, cb = Za(b, "AppleWebKit/"), ib = f(b, "Chrome/"), Bb = f(T, "Iron/"), rb = f(b, "OPR/"), Pb = f(T, "KHTML/"), Qb = f(b.toLowerCase(), "iris");
  f(b, "FxiOS/");
  f(b, "CriOS/");
  f(b, "EdgiOS/");
  var Rb = f(b, "Silk/"), kb = Za(b, "SamsungBrowser/"), Kb = !kb && function() {
    for (var x = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ma, B = x.length; ma = x[--B];) {
      if (k(b, ma)) {
        return 2 > Ba(bb) ? bb : 0.9;
      }
    }
    x = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (B = x.length; ma = x[--B];) {
      if (k(b, ma)) {
        return bb;
      }
    }
  }(), sb = zb && 534.3 >= cb, tb = $a(H), Fa = tb && !k(b, H) && $a(b);
  ab = ab && (cb || gb) && Fa || !ea && Ea;
  Ea = !!w.ReactNativeWebView;
  tb = tb && function() {
    for (var x in w) {
      if (0 === x.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ma = (Fa = w.puffinDevice) && Fa.clientInfo;
  Ma = (Fa = Ma && "iOS" === Ma.os && Ma.osVersion) && Ma.model;
  var ub = !Da && N.registerElement, wa = !Da && N.execCommand, vb = w.webkitCancelAnimationFrame, Sb = eb && ub && "11.0.696.34" === ib, Tb = w._firefoxTV_playbackStateObserverJava, Ua = Za(b, "diordnA ");
  if ("Nitro" === H) {
    var v = 1;
  } else if ("Nintendo DSi" === H) {
    v = 2;
    var q = L;
  } else if ("New Nintendo 3DS" === H || k(b, "iPhone OS 6_0") && 320 === D && 240 === A) {
    v = 4, q = f(b, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === H) {
    v = 3, q = f(b, "Version/"), cb = 535;
  } else if ("Nintendo Swicth" === H) {
    v = 7, q = f(T, "NintendoBrowser/");
  } else if (w.wiiu) {
    v = 6;
    q = f(T, "NintendoBrowser/");
    var M = 15, O = f(T, "AppleWebKit/") || (vb ? 536 : 534);
    q || (q = vb ? 4 : 2, k(T, "Macintosh;") || k(T, "Windows NT") && k(T, "Touch"));
  } else if (Ja && Ja.wiiremote) {
    v = 5, q = f(b, "Wii; U; ; ");
  } else if (L = f(b, "PlayStation Vita ")) {
    v = 10, q = L;
  } else if (L = f(b, "(PlayStation Portable); ")) {
    v = 8;
    q = L;
    var Lb = 3.3;
  } else if (L = f(b, "PLAYSTATION 3; ") || f(b, "PLAYSTATION 3 ")) {
    v = 11, q = L, 0 > Ia("4.10", L) && (M = 26, O = L);
  } else if (k(b, "Xbox One")) {
    v = 15, q = 1;
  } else if (k(b, "Xbox")) {
    v = 14, q = 1;
  } else if (2 === nb && k(b, "Sony/COM2/")) {
    v = 17;
    q = 2;
    Lb = 3.4;
    var Va = !0;
  } else if (0 === H.indexOf("iP") || hb || Fa || Ab) {
    if (Fa) {
      switch(q = Fa, Ma.substr(0, 4)) {
        case "iPho":
          var ra = 0;
          f(Ma, ra);
          var ya = !0;
          break;
        case "iPad":
          ra = 1;
          f(Ma, ra);
          var U = !0;
          break;
        case "iPod":
          ra = 2;
          f(Ma, ra);
          var Cb = !0;
      }
    } else {
      hb ? q = hb : (q = f(T.split("_").join("."), "OS "), F("isSecureContext", w), F("enableWebGL", w), F("sameOrigin", w));
      if (!q || Y) {
        q = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ba.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : va.isNaN ? 9.2 : w.SharedWorker ? jb && jb.now ? 8 : 8.4 : wa ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : ob ? 4.3 : Q ? 4.1 : 3.2;
      }
      var sa = D === 1.5 * A || 1.5 * D === A;
      0 === H.indexOf("iPhone") ? (ra = 0, ya = !0) : 0 === H.indexOf("iPad") || Ab ? (ra = 1, U = !0) : 0 === H.indexOf("iPod") && (ra = 2, Cb = !0);
    }
    M = !Fa && (ba.standalone || (U || 12 > q) && F("webkitFullscreenEnabled", N) || 11 <= q && 13 > q && ba.mediaDevices) ? 16 : 17;
    v = 24;
    O = q;
  } else if (k(b, "Kobo")) {
    v = 18, M = 21, O = 2.2, Ka = !0;
  } else if (k(b, "EBRD")) {
    v = 19, M = 21, O = 2.2;
  } else if (L = f(b, "CrOS x86_64 ") || f(b, "CrOS aarch64 ") || f(b, "CrOS i686 ") || f(b, "CrOS armv7l ")) {
    v = 28, q = L;
  } else if (w.onmoztimechange !== Ha) {
    v = 29, q = 18.1 > La ? "1.0.1" : 19 > La ? 1.1 : 27 > La ? 1.2 : 29 > La ? 1.3 : 31 > La ? 1.4 : 33 > La ? 2 : 35 > La ? 2.1 : 38 > La ? 2.2 : 45 > La ? 2.5 : 2.6, k(b, "Mobile") ? ya = !0 : k(b, "Tablet") ? U = !0 : k(b, "TV");
  } else if (w.palmGetResource) {
    v = 30, q = f(b, "webOS/") || f(b, "WEBOS") || f(b, "hpwOS/"), k(b, "webOS.TV") || k(b, "/SmartTV") || (ya = !0);
  } else if (L = f(b, "Tizen ")) {
    v = 31, q = L, M = 24, O = kb, ya = !0;
  } else if (L = f(b, "Windows Phone ") || f(T, "Windows Phone OS ") || Jb) {
    v = 23, q = L, ya = !0;
  } else if (n && "ARM" === H) {
    v = 23, q = 10, ya = !0;
  } else if (pb && k(T, "ZuneWP")) {
    v = 23, q = 11 === Da ? 8.1 : 10 === Da ? 8 : 9 === Da ? 7.5 : 7 === Da ? 7 : "?", ya = !0;
  } else if (k(b, "FOMA;")) {
    v = 16, ya = !0;
  } else if (k(b, "SoftBank;")) {
    v = 16, ya = !0;
  } else if (k(b, "KFMUWI")) {
    var Na = !0;
    q = 6.3;
    var ka = U = !0;
  } else if (k(b, "KFKAWI")) {
    Na = !0, q = 6, ka = U = !0;
  } else if (k(b, "KFSUWI") || k(b, "KFAUWI") || k(b, "KFDOWI")) {
    Na = !0, q = 5, ka = U = !0;
  } else if (k(b, "KFGIWI")) {
    Na = !0, q = 5, ka = U = !0;
  } else if (k(b, "KFARWI") || k(b, "KFSAWA") || k(b, "KFSAWI")) {
    Na = !0, q = 5 <= Ba(ea) ? 5 : 4, ka = U = !0;
  } else if (k(b, "KFSOWI") || k(b, "KFTHWA") || k(b, "KFTHWI") || k(b, "KFAPWA") || k(b, "KFAPWI")) {
    Na = !0, q = 3, ka = U = !0;
  } else if (k(b, "KFOT") || k(b, "KFTT") || k(b, "KFJWA") || k(b, "KFJWI")) {
    Na = !0, q = 2, ka = U = !0;
  } else if (k(b, "Kindle Fire")) {
    Na = !0, q = 1, ka = U = !0;
  } else if (L = f(b, "Kindle/")) {
    v = 20, q = L, M = 21, O = 2.2;
  } else if (Tb) {
    Na = !0, q = ea || Ua, ka = !0;
  } else if (k(b, "AmazonWebAppPlatform") || k(b, "; AFT")) {
    Na = !0, q = ea, ka = !0;
  } else if (k(b, "MeeGo")) {
    v = 32;
  } else if (k(b, "Maemo")) {
    v = 33;
  } else if (0 === b.indexOf("Windows Mobile;") || Qb) {
    v = 22, Va = !0;
  } else if ("WinCE" === H) {
    v = 21, Va = !0;
  } else if (0 === H.indexOf("Win")) {
    v = "Win16" === H ? 35 : "Win32" === H ? 36 : "Win64" === H ? 37 : 0, q = f(b, "Windows NT ") || f(b, "Windows ");
  } else if (0 === H.indexOf("Mac")) {
    v = "Mac68K" === H ? 39 : "MacPowerPC" === H || "MacPPC" === H ? 38 : "MacIntel" === H ? 40 : 0;
    if (L = f(b.split("_").join("."), "Mac OS X ")) {
      q = L;
    }
    var wb = !0;
  } else if (k(b, "BlackBerry") || k(b, "BB10")) {
    v = 34, q = bb, ya = !0;
  } else if (k(b, "SunOS") || k(b, "Sun Solaris")) {
    v = 42;
  } else if (k(b, "FreeBSD")) {
    v = 43;
  } else if (k(b, "OpenBSD")) {
    v = 44;
  } else if (k(b, "NetBSD")) {
    v = 45;
  } else if (Ka && gb) {
    k(b, "Android 4.4;") ? sa = {min:2.3} : 4 <= Ba(ea) ? sa = ea : sa = {min:2.2}, q = sa;
  } else if (Ka && Ja) {
    ea ? sa = ea : sa = {min:1.6}, q = sa, k(b, "Tablet") ? U = !0 : ya = !0;
  } else if (ea) {
    q = ea, Ka = !0;
  } else if (eb && ab || Ea || tb) {
    var fb = !0;
    kb ? sa = {min:4.4} : zb && !sb || Ib || rb ? sa = {min:4} : (sa = ea = Ta.touchAction !== Ha ? {min:5} : ub ? 4.4 : ob ? ba.connection ? w.searchBoxJavaBridge_ || zb ? va.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= cb ? 3 : 533 <= cb ? Q ? 2.3 : 2.2 : 530 <= cb ? 2 : 1.5, Kb && (M = 24, O = Kb));
    q = sa;
    Ka = !0;
  } else {
    Sb ? (q = {min:5}, fb = Ka = !0) : eb && (k(b, "Ubuntu") ? v = 46 : (L = f(b, "Mint/")) ? (v = 47, q = L) : (L = f(b, "Fedora/")) ? (v = 48, q = L) : v = k(b, "Gentoo") ? 49 : 50);
  }
  Na || Ka && fb && Rb ? v = 27 : Ka && (v = v || 26);
  M || (ka = ka || Ka, Ja ? (M = ka || Va || ya || U ? 9 : 8, O = Vb) : pb ? (sa = Za(T, "Trident/") + 4, M = Va || ya || U || Cb ? 3 : wb && 5 <= Da ? 7 : 2, O = Da) : n ? (M = 23 === v ? 6 : 5, O = f(T, "Edge/")) : Qa ? (M = 13, O = Qa) : gb ? (M = ka ? 12 : 11, O = La || Ob) : kb ? (M = 24, O = kb) : (L = Lb || f(b, "NetFront/")) ? (M = 18, O = L) : (L = f(b, "iCab")) ? (M = 19, O = L) : (L = qa(f(b, "Opera Mini/"), f(b, "Opera Mobi/")) || Hb && bb) ? (M = 10, O = L, v || (k(b, "iPhone") ? ra = 
  0 : k(b, "iPad") ? ra = 1 : k(b, "iPod") && (ra = 2), ra && (v = 24))) : qb ? (M = 25, O = Nb) : Pb ? (M = 14, O = nb) : Ka && sb ? (M = 21, O = ea) : zb || Ib || rb ? (M = ka ? 22 : 20, O = ib || Bb) : Ka && ub ? (M = 23, O = 5 > Ba(ea) ? ea : ib) : Ka && (bb || fb) ? (M = 21, O = ea) : ib ? (M = ka ? 22 : 20, O = ib) : cb && (M = 15, O = cb));
  v && (Ya[2] = v, q && (Ya[3] = Gb(q)));
  M && (Ya[0] = M, O && (Ya[1] = Gb(O)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var Db;
(function(Ya, w, N, ba, A, Ba, va, Ha, Za, k, $a, F) {
  function f(h) {
    if (w[0] === h) {
      return H === H + "" ? va(H) : H;
    }
  }
  function qa(h) {
    var y = w[3];
    if (w[2] === h) {
      return y === y + "" ? va(y) : y;
    }
  }
  function Gb(h, y, Z) {
    h + "" === h && ("a" === h.charAt(2) && (Z = !0, h = h.substr(0, 2)), h = "CS" === h ? 7.2 > D ? 117 : .9 > Q || 9 > n || 9 > D || Ta ? 1 : 132 : parseInt(h, 16));
    Z && (50 === h && (h = 128), 102 < h && 108 > h && (h += 24));
    return (h - 1) * -(6 * (y || 2));
  }
  var Ia = A.body, b = Ia.style, T, nb, H = w[1], n = f(2) || f(3), Ta = f(7), Da = f(5) || f(6), D = f(8) || f(9), Q = f(11) || f(12), jb = Q && 0 <= w.conpare(H, "1.9.1"), ob = f(13), ab = f(15), bb = f(16) || f(17), Hb = f(10) || f(25), Ja = f(20) || f(22), Vb = f(23), Ib = f(21), pb = f(24), zb = Ja || Vb || Ib || pb, gb = Ja && va(Ba.userAgent.split("Edg/")[1]);
  Ba = va(Ba.appVersion.split("Trident/")[1]) + 4;
  var qb = qa(35) || qa(36) || qa(37), Nb = (Ta ? "ie5mac" : 5.5 > n ? "ie5win" : 6 > n ? "ie55" : 10 > n ? "ie" + (n | 0) : 7.2 > D ? "opr70" : 8 > D ? "opr72" : 9.5 > D ? "opr" + (D | 0) : Q && !jb ? 1.4 <= Q ? "gck19" : 1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : .9 <= Q ? "gck09" : .8 <= Q ? "gck08" : "gck07" : "modern") + ".css";
  qa(1) || qa(2) || qa(3) || qa(4) || qa(8) || qa(9) || qa(10);
  var Jb, hb, ea, Ea = 8 > n || 7.2 > D ? !1 : F, Ka = b.transform !== F ? "transform" : b["-o-transform"] !== F ? "-o-transform" : b["-ms-transform"] !== F ? "-ms-transform" : b.MozTransform !== F ? "-moz-transform" : b["-webkit-transform"] !== F ? "-webkit-transform" : "", eb = [], Ab = [], Qa = [], La, Ob, L;
  525 > ab || 10 > D || Q && !jb || 2.2 > Ib || f(25) || 10 > f(3) || qa(32) || qa(30) || qa(3);
  var Y, cb, ib, Bb = [], rb = [], Pb, Qb, Rb, kb;
  (function() {
    function h() {
      for (var J, a = 0, d = +new $a(); a < ca.length;) {
        d < ca[0].t ? ++a : (J = ca.splice(a, 1)[0], J.f(J.p));
      }
      za = ca.length ? Za(h, fa) : 0;
    }
    function y() {
      for (var J, a = 0; a < la.length; ++a) {
        J = la[a], J.f();
      }
    }
    function Z() {
      ta && (ta = clearInterval(ta));
    }
    function na() {
      za && (za = k(za));
    }
    u = function(J) {
      Bb.push(J);
    };
    Db = function(J) {
      rb.push(J);
    };
    ib = function(J) {
      la.length || (ta = setInterval(y, oa));
      la.push({f:J, l:++xa});
      return xa;
    };
    Pb = function() {
      ta && (Z(), ta = setInterval(y, oa));
    };
    Qb = Z;
    var la = [], oa = 500, xa = 0, ta;
    if (5 > n || Ta) {
      N._wdb_onlooptimer = y, y = "_wdb_onlooptimer()";
    }
    Y = function(J, a, d) {
      ca.length || (za = Za(h, fa));
      ca.push({f:J, p:a, l:++V, t:+new $a() + (fa < d ? d : fa)});
      return V;
    };
    cb = function(J) {
      for (var a = ca.length, d; d = ca[--a];) {
        if (d.l === J) {
          ca.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Rb = function() {
      za && (na(), za = Za(h, fa));
    };
    kb = na;
    var ca = [], fa = 16, V = 0, za;
    if (5 > n || Ta) {
      N._wdb_ontimer = h, h = "_wdb_ontimer()";
    }
  })();
  var Kb, sb, tb, Fa, Ma, ub, wa, vb, Sb, Tb, Ua, v, q, M, O, Lb, Va, ra, ya, U, Cb;
  (function() {
    function h(a, d, g) {
      var r = ["<", a], t = 1, G, ha;
      if (d) {
        for (G in d) {
          var R = d[G];
          if (null != R && "" !== R) {
            if ("style" === G) {
              r[++t] = ' style="';
              for (ha in R) {
                for (var Ra = ++t, da, Oa = [], e = ha.split(""), c = e.length; c;) {
                  da = e[--c], "A" <= da && "Z" >= da && (da = "-" + da.toLowerCase()), Oa[c] = da;
                }
                r[Ra] = Oa.join("") + ":" + R[ha] + ";";
              }
              r[++t] = '"';
            } else {
              "className" === G && (G = "class"), r[++t] = " " + G + '="' + R + '"';
            }
          }
        }
      }
      r[++t] = ">";
      null != g && (V && "font" !== a ? r[++t] = "<FONT>" + y(g) + "</FONT>" : r[++t] = y(g));
      r[++t] = "</" + a + ">";
      return r.join("");
    }
    function y(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function Z(a) {
      var d = a.split("-"), g = d.length;
      if (2 > g) {
        return a;
      }
      for (; 1 < g;) {
        a = d[--g], d[g] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return d.join("");
    }
    function na(a) {
      a = "*" === a && 6 > n ? "*" !== a ? A.all.tags(a.toUpperCase()) : A.all : A.getElementsByTagName(a);
      for (var d = [], g = 0, r = a.length; g < r; ++g) {
        d[g] = a[g];
      }
      return d;
    }
    function la(a) {
      return V ? a.parentElement : a.parentNode;
    }
    function oa(a, d, g, r, t, G) {
      if (V) {
        var ha = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var R = Ma(2 > a ? Fa(d) : d);
        R = 2 > a ? R.indexOf(d) + a : R.length;
        d.insertAdjacentHTML(ha, h(g, r, t));
        d = Ma(d)[R];
        null != t && ("font" === g ? d.nodeType = 3 : d.children[0].nodeType = 3);
      } else if (za) {
        d = A.createElement(h(g, r));
      } else {
        d = G ? A.createElementNS("http://www.w3.org/2000/svg", g) : A.createElement(g);
        if (r) {
          for (ha in r) {
            if ((a = r[ha]) || 0 === a) {
              switch(ha) {
                case "class":
                case "className":
                  Lb(d, a);
                  break;
                case "style":
                  G = d.style;
                  for (R in a) {
                    G[R] = a[R];
                  }
                  break;
                default:
                  M(d, ha, a);
              }
            }
          }
          !D || "a" !== g && "A" !== g || !r.href || r["tag-index"] || r.tagIndex || M(d, "tagIndex", "-0");
        }
        J || null != t && xa(d, t);
      }
      return d;
    }
    function xa(a, d) {
      if (V) {
        return oa(2, a, "font", F, d);
      }
      var g = A.createTextNode("" + d);
      a.appendChild(g);
      return g;
    }
    function ta(a, d) {
      9 > n ? a.className = d : a.setAttribute("class", d);
    }
    function ca(a, d) {
      return -1 !== (" " + a.className + " ").indexOf(" " + d + " ");
    }
    function fa(a, d, g) {
      if (8 > D || 5.5 > n) {
        d = Z(d);
      }
      a.style[d] = g;
    }
    var V = 5 > n;
    T = na("html")[0];
    nb = na("head")[0];
    Kb = function(a) {
      return N[a] || A[a] || A.getElementById(a);
    };
    sb = na;
    tb = function(a) {
      var d = [], g = 0, r, t = -1;
      if (9 > n || !A.getElementsByClassName) {
        var G = 6 > n ? A.all : A.getElementsByTagName("*");
      } else {
        var ha = !0;
        G = A.getElementsByClassName(a);
      }
      for (r = G.length; g < r; ++g) {
        var R = G[g];
        if (ha || (V || 1 === R.nodeType) && ca(R, a)) {
          d[++t] = R;
        }
      }
      return d;
    };
    Fa = la;
    Ma = function(a) {
      a = V ? a.children : a.childNodes;
      for (var d = [], g = a.length; g;) {
        d[--g] = a[g];
      }
      return d;
    };
    ub = function(a) {
      var d = !(7.03 < D && 7.2 > D) && a.children;
      a = d ? d : a.childNodes;
      for (var g = [], r = a.length, t = -1, G; r;) {
        if (G = a[--r], d || 1 === G.nodeType) {
          V && "FONT" === G.tagName || (g[++t] = G);
        }
      }
      return g;
    };
    wa = function(a, d, g, r, t) {
      d = oa(2, a, d, g, r, t);
      V || (a.appendChild(d), J && null != r && xa(d, r));
      return d;
    };
    vb = function(a, d, g, r, t) {
      d = oa(0, a, d, g, r, t);
      V || (la(a).insertBefore(d, a), J && null != r && xa(d, r));
      return d;
    };
    Sb = xa;
    Tb = function(a, d) {
      if (V) {
        return oa(0, a, "font", F, d);
      }
      var g = A.createTextNode("" + d);
      Fa(a).insertBefore(g, a);
      return g;
    };
    Ua = function(a) {
      Fa(a) ? V ? a.outerHTML = "" : Fa(a).removeChild(a) : u("[DOM] p_DOM_remove(), No parentNode!");
    };
    var za = 9 > n, J = za;
    v = function(a) {
      return a.tagName.toUpperCase();
    };
    q = function(a, d) {
      if (8 > D || 5.5 > n) {
        d = Z(d);
      }
      var g = a.getAttribute(d);
      return D && "tabIndex" === d ? "-0" === g ? "" : "" === g ? "-1" : g : g || "";
    };
    M = function(a, d, g) {
      if (D && "tab-index" === d) {
        "-1" === g ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", g);
      } else {
        if (8 > D || 5.5 > n) {
          d = Z(d);
        }
        a.setAttribute(d, g);
      }
    };
    O = function(a, d) {
      if (D && "tab-index" === d) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > D || 5.5 > n) {
          d = Z(d);
        }
        a.removeAttribute(d);
      }
    };
    Lb = ta;
    Va = ca;
    ra = function(a, d) {
      var g;
      if (!ca(a, d)) {
        if (g = a.className) {
          g += " ";
        }
        ta(a, g + d);
      }
    };
    ya = function(a, d) {
      if (ca(a, d)) {
        var g = a.className.split(" ");
        g.splice(g.indexOf(d), 1);
        ta(a, g.join(" "));
      }
    };
    U = fa;
    Cb = function(a, d) {
      var g, r = -1, t;
      if (5.5 > n) {
        if (g = 5.5 > n ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (g = g.split(";"); t = g[++r];) {
            fa(a, t.split(":")[0], "");
          }
        }
        if (d) {
          for (r = -1, g = d.split(";"); t = g[++r];) {
            var G = t.split(":")[0];
            fa(a, G, t.substr(G.length + 1));
          }
        }
      } else if (7.1 > D) {
        if (a.setAttribute("style", ""), d) {
          for (g = d.split(";"); t = g[++r];) {
            t = t.split(":"), fa(a, t[0], t[1]);
          }
        }
      } else {
        9 > D || 1 > Q ? d ? a.setAttribute("style", d) : a.removeAttribute("style") : a.style.cssText = d;
      }
    };
  })();
  var sa, Na, ka, wb, fb, x, ma, B, Ca;
  (function() {
    function h() {
      return R ? da ? 2 : Ra ? 3 : 1 : 0;
    }
    function y(e) {
      Na(N, "load", y);
      y = F;
      na(eb, e, !0);
      eb = F;
    }
    function Z(e, c) {
      fb(function() {
        var p = ca(e);
        c(p);
        p.addListener(c);
        return !0;
      });
    }
    function na(e, c, p) {
      for (var l = 0; l < e.length; ++l) {
        !0 === e[l](c) && (e.splice(l, 1), --l);
      }
      p && (e.length = 0);
    }
    function la(e, c, p) {
      eb || V.length || Y(oa);
      V.push(e, c, p);
    }
    function oa() {
      var e = V, c;
      for (V = []; c = e.shift();) {
        na(c, e.shift(), e.shift());
      }
    }
    function xa(e) {
      var c = e || event;
      e = J[c.type];
      var p = -1, l, m;
      n ? (c.target = c.srcElement, c.preventDefault = o, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : d && (c.j = c.stopPropagation, c.stopPropagation = function() {
        m = !0;
      });
      for (; l = e[++p];) {
        l.i === this ? (this.g = l.h, n && (c.currentTarget = this), this.g(c), n ? (this.g = ba, this.g = F) : delete this.g) : 7.2 > D && this === A && l.i === N && (N.g = l.h, N.g(c), delete N.g);
      }
      if (n) {
        return c.preventDefault = c.stopPropagation = ba, c.preventDefault = c.stopPropagation = F, c.returnValue;
      }
      d && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (r = !0), m && !r && c.j(), c.j = c.stopPropagation = F);
      function o() {
        c.returnValue = !1;
      }
      o = !1;
    }
    function ta() {
      var e = 9 === fa.offsetWidth;
      ma !== e && (la(Ab, ma = e), u("p_cssAvailability:" + ma));
    }
    var ca = N.matchMedia, fa, V = [];
    eb.push(function() {
      Z = F;
      fa = wa(Ia, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ka(function() {
        V.length && Y(oa);
      });
    });
    sa = function(e, c, p, l) {
      if (g) {
        e.addEventListener(c, p, l ? za ? l : l.capture || !0 === l : !1);
      } else {
        var m = {i:e, h:p};
        l = J[c];
        var C = "on" + c, E, I;
        if (l) {
          for (E = l.length; I = l[--E];) {
            if (I.i === e && I.h === p) {
              return;
            }
          }
          J[c].push(m);
        } else {
          J[c] = l = [m], a || (c = e[C], "function" === typeof c && c !== xa && l.unshift({i:e, h:c}));
        }
        a ? e.attachEvent(C, xa) : e[C] = xa;
      }
    };
    Na = function(e, c, p, l) {
      if (g) {
        e.removeEventListener(c, p, l ? za ? l : l.capture || !0 === l : !1);
      } else {
        l = J[c];
        c = "on" + c;
        var m, C, E;
        if (l) {
          for (m = l.length; C = l[--m];) {
            C.i === e && (C.h === p ? l.splice(m, 1) : E = !0);
          }
          E || (a ? e.detachEvent(c, xa) : n ? (e[c] = ba, e[c] = null) : delete e[c]);
        }
      }
    };
    var za = !n && !Ta && (new Ha('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), J = {}, a = !1, d = 525.13 > ab, g = !d && !Ta && N.addEventListener, r;
    d && T.addEventListener("click", function(e) {
      if (r) {
        return r = !1, e.preventDefault(), !1;
      }
    });
    ka = function(e) {
      eb ? eb.push(e) : alert("Load event has already been dispatched!");
    };
    wb = function(e) {
      t && t.push(e);
    };
    var t = [];
    if (419.3 >= ab) {
      var G = function() {
        if (G) {
          var e = A.readyState;
          "loaded" === e || "complete" === e ? (G = F, y()) : Y(G);
        }
      };
      Y(G);
    } else {
      sa(N, "load", y), .9 > Q && Y(function() {
        y && y();
      }, 999);
    }
    n || .9 <= Q && 1.8 > Q ? sa(N, "unload", function(e) {
      na(t, e, !0);
    }) : t = F;
    fb = function(e) {
      Ab.push(e);
    };
    ka(function() {
      ta();
      ib(ta);
    });
    x = function(e) {
      Qa && Qa.push(e);
    };
    var ha = 60 > Q || ob, R, Ra, da;
    if (89 <= Q || 89 <= Ja || qb && 79 <= gb || ca && (ca("(forced-colors:none)").matches || ca("(forced-colors:active)").matches)) {
      Ca = !0, Z("(forced-colors:active)", function(e) {
        R = e.matches;
        B = h();
        la(Qa, B);
        u("(forced-colors:active):" + B);
      });
    } else if (10 <= n || Da || qb && gb) {
      Ca = !0, Z("(-ms-high-contrast:black-on-white)", function(e) {
        R = Ra = e.matches;
        B !== h() && (B = h(), la(Qa, B), u("(-ms-high-contrast:black-on-white):" + B));
      }), Z("(-ms-high-contrast:white-on-black)", function(e) {
        R = da = e.matches;
        B !== h() && (B = h(), la(Qa, B), u("(-ms-high-contrast:white-on-black):" + B));
      }), Z("(-ms-high-contrast:active)", function(e) {
        R = e.matches;
        B !== h() && (B = h(), la(Qa, B), u("(-ms-high-contrast:active):" + B));
      });
    } else if (qb && (n || Q && 0 <= w.conpare(H, "1.8.1") || ob)) {
      var Oa = function() {
        function e(l, m) {
          if (m && "transparent" === l) {
            return 382.5;
          }
          if ("#" === l.charAt(0)) {
            return parseInt("0x" + l.substr(1, 2), 16) + parseInt("0x" + l.substr(3, 2), 16) + parseInt("0x" + l.substr(5, 2), 16);
          }
          var C = l.split("(")[1].split(",");
          return va(C[0]) + va(C[1]) + va(C[2]);
        }
        var c = A.defaultView;
        var p = c ? c.getComputedStyle(fa, null) : fa.currentStyle;
        c = (p && p.color || "").split(" ").join("");
        p = (p && p.backgroundColor || "").split(" ").join("");
        c && (R = "#123456" !== c && "rgb(18,52,86)" !== c, Ra = e(c) < e(p, !0), da = e(c) > e(p, !0), B !== h() && (B = h(), u("(forced-colors-fallback):" + B), la(Qa, B, ha)));
      };
      fb(function(e) {
        if (e) {
          return U(fa, "color", "#123456"), U(fa, "backgroundColor", "#123456"), ha ? (Oa(), Qa = F) : ib(Oa), Oa = F, !0;
        }
      });
    } else {
      Qa = h = F;
    }
  })();
  (function() {
    function h(m) {
      g(m);
      p && !m && Ua(p);
      g = r = t = G = ha = R = Oa = e = c = l = p = F;
    }
    function y(m) {
      var C = '1.6em "' + m + '"';
      u("[webFontTest] testByNativeFontLoaderAPI start.");
      A.fonts.load(C).then(function(E) {
        u("[webFontTest] fonts.check() : " + A.fonts.check(C, "i") + ", fonts.length : " + E.length);
        (E = la(r)) ? Y(h, E) : (u("[webFontTest] mesureWebFont() : false"), na(!0));
      }, function(E) {
        u("[webFontTest] fonts.load() rejected! " + E);
        Ea !== F ? oa(Ea) : La(oa);
      });
    }
    function Z(m) {
      return A.hidden || A.msHidden || A.mozHidden || A.webkitHidden ? (da = new $a() - 0, !1) : m < new $a() - da;
    }
    function na(m) {
      m && (u("[webFontTest] testWebFont start."), da = new $a() - 0);
      (m = la(r)) ? (u("[webFontTest] testWebFont mesurement success : " + m), h(m)) : Z(Ra) ? (u("[webFontTest] testWebFont timeout!"), Oa || fa ? h(0) : Ea !== F ? oa(Ea) : La(oa)) : Y(na);
    }
    function la(m) {
      var C = 0, E = -1, I = 0;
      if (!l) {
        var P = -1;
        var K;
        e = wa(Ia, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, a);
        for (l = {}; K = d[++P];) {
          U(e, "fontFamily", K), l[K] = e.offsetWidth;
        }
      }
      for (5 > n ? e || (e = wa(Ia, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, a)) : Ia.appendChild(e); P = d[++E];) {
        if (U(e, "fontFamily", '"' + m + '",' + P), e.offsetWidth !== l[P]) {
          C = 1;
          break;
        }
      }
      !n && C && ha && (e.innerHTML = ha, m = e.offsetWidth, e.innerHTML = R, I = m === e.offsetWidth ? 1 : 0, e.innerHTML = a);
      Ua(e);
      5 > n && (e = F);
      return C + I;
    }
    function oa(m) {
      u("[webFontTest] onTestDataURIComplete : " + m);
      m ? (Oa = !0, xa(!0)) : h(0);
    }
    function xa(m) {
      var C;
      if (t) {
        for (C in m && (da = new $a() - 0), t) {
          la(C) ? (u("[webFontTest] success! " + C), c = wa(Ia, "div", {"aria-hidden":"true", className:G, id:G}), p = wa(nb, "link", {type:"text/css", rel:"stylesheet", href:t[C]}), Y(ta, !0)) : Z(J) ? (u("[webFontTest] timeout! " + C), delete t[C], Y(xa, !0)) : Y(xa);
          return;
        }
      }
      h(0);
    }
    function ta(m) {
      m && (u("[webFontTest] testImportedCssReady start!"), r = r.replace(V, ""), u("[webFontTest] targetWebFontName : " + r), da = new $a() - 0);
      1 < c.offsetWidth ? (u("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + c.offsetWidth), Ua(c), Ra = J, Y(na, !0)) : Z(Ra) ? 528 > ab ? (u("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + c.offsetWidth), Ua(c), Ra = J, Y(na, !0)) : (u("[webFontTest] testImportedCssReady timeout!"), Ua(c), h(0)) : Y(ta);
    }
    Ab.splice(0, 0, function() {
      if (ma) {
        ea = 8 <= n || Da || 9.5 <= D || jb || ob || 522 <= ab || 3 <= bb || Hb || zb ? 3 : 7.2 <= D ? 2 : 6 <= D || Q ? 1 : 0;
        if (!ea && !n && !Ta) {
          var m = wa(Ia, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          ea = 6 <= m.offsetWidth ? 2 : 0;
          Ua(m);
        }
        u("p_cssGeneratedContentGrade:" + ea);
        return !0;
      }
    });
    La = !1 === Ea ? function(m) {
      Y(m, Ea);
    } : function(m) {
      function C(P) {
        I = cb(I);
        Ea = P;
        E.onload = E.onerror = ba;
        Y(m, P);
      }
      if (Ea !== F) {
        u("[dataURITest] already done : " + Ea), Y(m, Ea);
      } else if (8 > n) {
        u("[dataURITest] trident < 8 : false"), Y(m, !1);
      } else {
        u("[dataURITest] start!");
        var E = new Image(), I = Y(function() {
          I && C(!1);
        });
        E.onerror = function() {
          u("[dataURITest] no DATA URI!");
          C(!1);
        };
        E.onload = function() {
          u("[dataURITest] DATA URI:" + (1 === E.width * E.height));
          C(1 === E.width * E.height);
        };
        E.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > n && ka(function() {
      var m = wa(Ia, "div");
      Cb(m, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Jb = 1 < m.offsetHeight;
      Cb(m, "");
      Ua(m);
    });
    Ob = function(m, C) {
      function E() {
        if (P || !K || I.complete) {
          u("[imageTest] timer -> img.complete. img.width=" + I.width);
          var z = !!I.width;
          hb = hb || z;
          Y(m, z);
          I.onerror = I.onload = ba;
          I = m = F;
        } else {
          --K, Y(E);
        }
      }
      var I = new Image(), P, K = 99;
      u("[imageTest] start.");
      I.onerror = function() {
        u("[imageTest] error!");
        P = !0;
      };
      I.onload = function() {
        u("[imageTest] onload.");
        P = !0;
      };
      I.src = C;
      Y(E);
    };
    L = function(m, C, E, I, P, K, z) {
      g = m;
      r = C;
      t = E;
      G = I;
      ha = P;
      R = K;
      Ra = z || za;
      r = V + r;
      u("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      ca ? (u("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : false"), Y(h, 0)) : (u("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : true"), !A.fonts || 603 > ab ? (u("[webFontTest] No native font loader."), na(!0)) : (u("[webFontTest] Use Native font loader."), y(r)));
    };
    var ca = 525 > ab || 10 > D || Q && !jb || 2.2 > f(21) || f(25) || 10 > f(3) || qa(32) || qa(30) || qa(3), fa = 9 > n || 2 > Ja || 12 > D, V = "bad_" + (new $a() - 0) + "_", za = 5E3, J = 100, a = "mmmmmmmmmmlli", d = ["sans-serif", "serif"], g, r, t, G, ha, R, Ra, da, Oa, e, c, p, l;
  })();
  var ja = String.fromCharCode, xb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ja(960), ")", "(", ja(234), ja(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", ja(9824), "\u2190", ja(9829), ja(9830), ja(9827), ja(956), "\u03a9", "\u2193", "\u2192", "%", ja(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", ja(9619)];
  b = (9 === n || Q && 0 <= w.conpare(H, "1.8.1") || ob) && !Ca;
  var lb = [], mb, Wa, Mb = 7.2 > D ? function() {
    mb = !mb;
    for (var h = -1, y; y = lb[++h];) {
      -1 !== y.className.indexOf("pbAlp") ? U(y, "display", mb ? "" : "none") : (ra(y, mb ? "pbChrCS" : "pbChr00"), ya(y, mb ? "pbChr00" : "pbChrCS"));
    }
  } : b ? function() {
    mb = !mb;
    for (var h = -1, y; y = lb[++h];) {
      U(y, "opacity", mb ? 1 : 0);
    }
  } : F;
  var Wb = Ya.startBlinkingIfCursor = function(h) {
    Mb ? Va(h, "pbChrCS") && (Wa || !D && !B || (Wa = setInterval(Mb, 400)), -1 === lb.indexOf(h) && lb.push(h)) : lb = F;
  };
  Ya.stopBlinkingIfCursor = function(h) {
    Mb && (h = lb.indexOf(h), 0 <= h && (lb.splice(h, 1), !lb.length && Wa && (clearInterval(Wa), Wa = 0)));
  };
  b && x(function(h) {
    h ? Wa || (Wa = setInterval(Mb, 400)) : Wa && (clearInterval(Wa), Wa = 0);
  });
  Mb && wb(function() {
    Wa && clearInterval(Wa);
  });
  Ca || x(function(h) {
    h ? (M(T, "forced-colors", 2 === h ? "lod" : 3 === h ? "dol" : "active"), (Ka || 9 === n || 5.5 <= n && 9 > n && Jb) && ra(T, "jsCanRotate")) : (O(T, "forced-colors"), ya(T, "jsCanRotate"));
  });
  (function() {
    function h(c) {
      G = c;
      u("[pbList] WebFont test result : " + !!c);
      c ? la() : hb ? na(!0) : hb !== F ? la() : (u("[pbList] Need imageTest " + ha), Ob(na, ha));
      u("window.offscreenBuffering = " + N.offscreenBuffering);
    }
    function y() {
      y = F;
      L(h, "PB-100", {"PB-100_canTTF":Xa + "pbFont/ttf.css", "PB-100_canWOFF":Xa + "pbFont/woff.css", "PB-100_canEOT":Xa + "pbFont/eot.css", "PB-100_canSVG":Xa + "pbFont/svg.css"}, "pbFont-testCssReady", J, "i", 5E3);
    }
    function Z(c) {
      this.focus();
      c.preventDefault();
      c.stopPropagation();
    }
    function na(c) {
      c ? (u("[pbList] Fallback start!"), ra(Ia, "pbList-noWebFont")) : u("[pbList] image disabled!");
      la();
    }
    function la() {
      for (h = L = F; t.length;) {
        oa(t.shift(), t.shift());
      }
      u("[pbList] complete.");
    }
    function oa(c, p) {
      function l(K) {
        K = Ma(K);
        for (var z = -1, aa; aa = K[++z];) {
          switch(aa.nodeType) {
            case 1:
              l(aa);
              break;
            case 3:
              aa.data && C(aa.data) && E.push(aa);
          }
        }
      }
      function m(K) {
        var z = K.children, aa = 0, db = z.length;
        if (db) {
          for (; aa < db; ++aa) {
            m(z[aa]);
          }
        } else {
          (z = K.innerText) && C(z) && E.push(K);
        }
      }
      function C(K) {
        return K.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var E = [], I;
      if (h) {
        -1 === t.indexOf(c) && (t.push(c, p), R && y && y());
      } else {
        var P = t.indexOf(c);
        0 <= P && t.splice(P, 2);
        for (5 > n ? m(c) : l(c); I = E.shift();) {
          P = 5 > n ? I.innerText : I.data, 2 !== G && (P = P.split(J).join(V)), p ? 5 > n ? I.innerText = P : I.data = P : xa(P.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(za).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fa).split("&amp;").join("&"), I);
        }
      }
    }
    function xa(c, p) {
      function l(pa, S) {
        for (var Ga = ""; S;) {
          S & 1 && (Ga += pa), S >>= 1, pa += pa;
        }
        return Ga;
      }
      function m(pa, S, Ga) {
        for (var Eb, Zb = -1, Xb, Yb; Eb = S[++Zb];) {
          for (; 0 <= (Xb = pa.indexOf(Eb));) {
            Yb = Eb.length, pa = pa.substr(0, Xb) + l(Ga, Yb) + pa.substr(Xb + Yb);
          }
        }
        return pa;
      }
      function C(pa) {
        var S = va(pa), Ga = "" + S;
        return 0 < S && S === S | 0 && (S = pa.indexOf(Ga) + Ga.length, S <= pa.length) ? S : 0;
      }
      var E = " area line str cmd fnc syb".split(" "), I = 5 > n || 1 === p.nodeType, P = [], K = "", z, aa = -1, db, yb, Pa;
      if (I) {
        if (Oa) {
          var Ub = p.style.visibility;
          U(p, "visibility", "hidden");
        }
        p.innerHTML = "";
      }
      if (e) {
        var Fb = p;
        p = A.createDocumentFragment();
      }
      if (function(pa) {
        var S = pa.indexOf("P");
        if (-1 === S) {
          return !1;
        }
        S = va(pa.charAt(S + 1));
        return 0 <= S && 9 >= S;
      }(c)) {
        K = l("+", c.length);
      } else {
        0 <= (z = C(c)) && (K = l("|", z), aa = z, --aa);
        for (; z = c.charAt(++aa);) {
          z === fa || db ? (K += "~", z === fa && (db = !db)) : K += z;
        }
        K = m(K, r, "^");
        K = m(K, d, "{");
        K = m(K, g, "}");
      }
      aa = 0;
      for (db = c.length; aa < db; ++aa) {
        z = c.charAt(aa);
        var W = z === a;
        var ia = " " === z;
        z = W ? " " : z;
        var X = K.charAt(aa);
        var Sa = (yb = Aa) && W;
        var Aa = "|" === X;
        X = E["+|~{}^".indexOf(X) + 1];
        "\n" !== z ? (G || !hb ? (2 === G && c.substr(aa, 2) === J && (z = J, ++aa), X = ia && "str" === X ? "pbList-strsp" : W ? "" : !ia && X ? "pbList-" + X : "") : (W = xb.indexOf(z), W = -1 === W ? "" : xb.indexOf(z).toString(16).toUpperCase(), W = (W = 1 === W.length ? "0" + W : W) ? "pbChr" + W : "", X = ia && "str" === X ? "pbList-strsp" : ia || !W ? "" : X ? (W ? W + " " : "") + "pbList-" + X : W), W = F, Sa ? (z = 6 <= n && 8 > n ? " " : a, X = "") : Aa && (Q && !jb || 9.5 > D) ? (Aa && 
        !yb && (Pa = 4 - (va(c.substr(aa)) + "").length), 7.5 > D ? W = da ? "position:relative;top:-4px;left:" + 12 * Pa + "px" : {position:"relative", top:"-4px", left:12 * Pa + "px"} : W = da ? "position:relative;left:" + 12 * Pa + "px" : {position:"relative", left:12 * Pa + "px"}) : ia && 7.5 > D && (X = "pbList-strsp"), da ? P.push("<font" + (X ? ' class="' + X + '"' : "") + (W ? ' style="' + W + '"' : "") + ">" + z + "</font>") : I || e ? wa(p, "font", {"class":X, style:W}, z) : vb(p, "font", 
        {"class":X, style:W}, z)) : (yb = Aa = !1, da ? P.push(z) : I || e ? Sb(p, z) : Tb(p, z));
      }
      if (I) {
        da ? p.innerHTML = P.join("") : e && Fb.appendChild(p), Oa && U(p, "visibility", Ub);
      } else {
        if (da) {
          E = A.createElement("font");
          for (E.innerHTML = P.join(""); P = E.firstChild;) {
            p.parentNode.insertBefore(P, p);
          }
          Ua(p);
        } else {
          e ? Fb.parentNode.replaceChild(p, Fb) : Ua(p);
        }
      }
    }
    fb(function(c) {
      if (c) {
        c = tb("pbChrCS");
        for (var p = 0, l = c.length; p < l; ++p) {
          Wb(c[p]);
        }
        return !0;
      }
    });
    var ta = [], ca = Q && 0 > w.conpare(H, "0.9.9");
    fb(function(c) {
      function p(ia) {
        var X = q(ia, "pbTip");
        if (X) {
          var Sa = X.charAt(0);
          var Aa = "_" === Sa;
          X = (Aa ? X.charAt(2) : Sa).toUpperCase().charCodeAt(0) - 65;
          P ? wa(ia, "div", {style:{left:7 * X + 3 + "px"}}) : (Sa = q(ia, "title"), O(ia, "pbTip"), O(ia, "title"), Aa = wa(ia, "div", {className:"pbTip" + (Aa ? "Btm" : ""), style:{width:Sa.length + m + "em", left:7 * X - (ca ? 0 : 5) + "px"}}, Sa), Aa = wa(Aa, "div"), .9 <= Q && ca && U(Aa, "left", "2px"));
        }
        I && 0 <= ia.className.indexOf("pbColor") && wa(ia, "u");
      }
      function l(ia, X) {
        var Sa = q(ia, "pbGhst"), Aa = ia.className, pa = Aa.split("pbCsr")[1] || "", S = Aa.split("pbAlp")[1] || "";
        if ("CS" === Sa) {
          var Ga = "_";
        } else {
          Ga = Sa, 3 === Ga.length && (Ga = Ga.substr(0, 2)), Ga = xb[parseInt(Ga, 16)] || "~";
        }
        var Eb;
        pa = pa.split(" ")[0];
        if (S = va(S.split(" ")[0])) {
          C && (Aa = Aa.split("pbChr")[1].split(" ")[0], U(ia, "backgroundPosition", Gb(Aa, 2, Ub) + "px " + -24 * (10 - S) + "px")), !X && E && vb(ia, "a").appendChild(ia);
        }
        Sa && (S = 10 - S, C && (Eb = {backgroundPosition:Gb(Sa, 2, Ub) + "px " + -24 * (10 - S) + "px"}), O(ia, "pbGhst"), aa = vb(ia, "b", {className:"pbChr" + Sa + " pbCsr" + pa + " pbAlp" + S, style:Eb}, Ga), Wb(aa));
        Wb(ia);
      }
      if (c) {
        var m = 6 > n ? 2 : 0, C = 7.2 > D || .9 > Q || Ta, E = 1.1 === Q, I = 1.4 > Q;
        c = sb("SAMP");
        var P = 8 === n, K = ea, z, aa, db, yb, Pa;
        Jb && ra(Ia, "pbLCD-AX");
        if (c.length) {
          for (db = -1; z = c[++db];) {
            if (Va(Fa(z), "pbLCD")) {
              var Ub = Va(z, "PB-120") || Va(z, "FX-795P");
              var Fb = ub(z);
              for (z = Fb.length; Pa = Fb[--z];) {
                switch(v(Pa)) {
                  case "A":
                    (2 > K || P) && p(Pa);
                    if (2 > K) {
                      var W = ub(Pa);
                      for (yb = W.length; yb;) {
                        l(W[--yb], !0);
                      }
                    }
                    Hb ? M(Pa, "href", "javascript:void(0)") : (sa(Pa, "click", Z), ta.push(Pa));
                    break;
                  case "B":
                    2 > K && l(Pa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    wb(function() {
      for (var c; c = ta.shift();) {
        Na(c, "click", Z);
      }
    });
    6 === n && (new Ha("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(A);
    var fa = xb[7], V = xb[30], za = xb[113], J = ja(8337) + ja(8331), a = ja(160);
    ja(8194);
    var d = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), g = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), r = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + V + xb[31]).split(""), t = [], G, ha, R;
    if (.9 <= Q && 0 >= w.conpare(H, "0.9.1")) {
      ra(T, "pbLCD-gecko09To091");
      var Ra = !0;
    }
    fb(function(c) {
      if (c) {
        ha = Xa + "pbFont/x3mask" + (Ra ? ".gecko0.9.1.gif" : ".png");
        c = sb("*");
        for (var p = -1, l; l = c[++p];) {
          Va(l, "pbList") ? oa(l) : Va(l, "pbFont") && oa(l, !0);
        }
        t.length && (u("[pbList] " + t.length / 2 + " elements found. WebFont test start."), y());
        return !0;
      }
    });
    var da = !1, Oa = 8 > D, e = !da && !Oa && !(6 > n) && A.createDocumentFragment && !!Ia.replaceChild;
    Ya.prettify = oa;
  })();
  b = A.scripts || sb("script");
  var Xa = b[b.length - 1].src.split("/");
  --Xa.length;
  (Xa = Xa.join("/")) && (Xa += "/");
  u("[p_assetUrl] " + Xa);
  ka(function() {
    var h;
    (h = Kb("logger")) || alert("#logger not found!");
    h ? (u = o, Db = function(y) {
      wa(h, "DIV", {style:{color:"red"}}, y);
    }, N.onerror = function(y, Z, na) {
      Db(y + ", " + Z + ", " + na);
      return !0;
    }) : N.console ? (u = console.log, Db = console.error) : D ? (u = ba, Db = opera.postError) : u = Db = ba;
    for (; Bb.length;) {
      u(Bb.shift());
    }
    for (; rb.length;) {
      u(rb.shift());
    }
    Bb = rb = F;
    function o(y) {
      wa(h, "DIV", F, y);
    }
    o = !1;
  });
  6.1 > bb && sa(N, "scroll", Pb);
  wb(Qb);
  6.1 > bb && sa(N, "scroll", Rb);
  wb(kb);
  10 > n && (11 !== Ba || 5 !== n) || (9 > D || 1 > Q || !Ta && !N.addEventListener ? A.write('<link href="' + Xa + Nb + '" rel="stylesheet"' + (8 > D ? "" : ' media="screen,handheld,projection,print"') + ">") : ka(function() {
    wa(nb, "link", {href:Xa + "" + Nb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

