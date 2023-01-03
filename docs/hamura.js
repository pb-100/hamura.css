/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Ua, w) {
  var P = 0, ha, y, Da = (Ua + "").split("."), wa = (w + "").split("."), Ga = Da.length;
  for (ha = wa.length; "0" === Da[Ga - 1];) {
    --Ga;
  }
  for (; "0" === wa[ha - 1];) {
    --ha;
  }
  for (y = Ga < ha ? Ga : ha; P < y; ++P) {
    var Va = Da[P] - 0, k = wa[P] - 0;
    if (Va !== k) {
      return Va > k ? 1 : -1;
    }
  }
  return Ga > ha ? 1 : Ga === ha ? 0 : -1;
};
(function(Ua, w, P, ha, y, Da, wa, Ga) {
  function Va(p, la, D) {
    D = Da(p.split(la)[1]);
    return 0 <= D ? D : 0;
  }
  function k(p, la) {
    return 0 <= p.indexOf(la);
  }
  function ab(p) {
    return k(p, "Linux armv") || k(p, "Linux aarch") || k(p, "Linux i686") || k(p, "Linux x86_64");
  }
  function B(p, la) {
    for (var D in la) {
      if (D === p) {
        return !0;
      }
    }
  }
  function f(p, la) {
    var D = "", xa = -1, Ba;
    if (p = p.split(la)[1]) {
      for (; Ba = p.charCodeAt(++xa);) {
        if (48 <= Ba && 57 >= Ba || 46 === Ba) {
          D += p.charAt(xa);
        } else {
          break;
        }
      }
      for (xa = D.length; xa;) {
        if (46 === D.charCodeAt(--xa)) {
          D = D.substr(0, xa);
        } else {
          break;
        }
      }
    }
    return D;
  }
  function qa(p) {
    for (var la = arguments, D = 1, xa = la[0], Ba; D < la.length; ++D) {
      0 > Ha(xa, Ba = la[D]) && (xa = Ba);
    }
    return xa;
  }
  function Cb(p) {
    return p === p + "" ? p : p === p - 0 ? "" + p : p.min && p.max ? p.min + "~" + p.max : p.min ? p.min + "~" : "~" + p.max;
  }
  var Ha = Ua.conpare, c = ha.userAgent, T = ha.appVersion, nb = Da(T) || 0, C = ha.platform, n = P.documentElement, Sa = n && n.style, Ea = P.documentMode, x = y.width;
  y = y.height;
  var M = w.HTMLAudioElement, gb = w.performance, ob = w.Int8Array, Wa = w.ontouchstart !== Ga, Xa = f(T, "Version/") || f(c, "Version/"), Db = w.operamini, Ia = !Db && w.opera, Rb = Ia && (Ia.version && "function" === typeof Ia.version ? Ia.version() : qa(f(c, "Opera "), Xa, nb)), Eb = w.opr, pb = !Ia && (P.all || Ea);
  Ea = pb && (Ea ? Ea : w.XMLHttpRequest ? P.getElementsByTagName ? 7 : 4 : P.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  n = !pb && n.msContentZoomFactor;
  var vb = !n && (w.chrome || w.chromium), bb = !pb && function() {
    for (var p in Sa) {
      if (0 === p.indexOf("Moz")) {
        return !0;
      }
    }
  }(), qb = k(c, "UCWEB"), Kb = qb && f(c, " U2/"), Fb = qb && f(c, "; wds "), cb = f(c.split("_").join("."), "; iPh OS "), ia = f(c, "; Adr "), Ja = k(T, "YJApp-ANDROID"), Ka = k(C, "Android") || bb && k(T, "Android") || Ja;
  ia = f(C, "Android ") || f(T, "Android ") || f(c, "Android ") || ia;
  var db = k(C, "Linux"), wb = "MacIntel" === C && ha.standalone !== Ga, Oa = bb && f(c, "Goanna/"), La = !Oa && bb && (f(c, "rv:") || f(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Lb = f(c, "Firefox/"), I = f(c, "Opera/"), Y = w.FNRBrowser, Ya = Va(c, "AppleWebKit/"), eb = f(c, "Chrome/"), Mb = f(T, "Iron/"), Gb = f(c, "OPR/"), Nb = f(T, "KHTML/"), Ob = f(c.toLowerCase(), "iris");
  f(c, "FxiOS/");
  f(c, "CriOS/");
  f(c, "EdgiOS/");
  var rb = f(c, "Silk/"), hb = Va(c, "SamsungBrowser/"), ib = !hb && function() {
    for (var p = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    la, D = p.length; la = p[--D];) {
      if (k(c, la)) {
        return 2 > Da(Xa) ? Xa : 0.9;
      }
    }
    p = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (D = p.length; la = p[--D];) {
      if (k(c, la)) {
        return Xa;
      }
    }
  }(), sb = vb && 534.3 >= Ya, jb = ab(C), ca = jb && !k(c, C) && ab(c);
  Wa = Wa && (Ya || bb) && ca || !ia && Ja;
  Ja = !!w.ReactNativeWebView;
  jb = jb && function() {
    for (var p in w) {
      if (0 === p.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ma = (ca = w.puffinDevice) && ca.clientInfo;
  Ma = (ca = Ma && "iOS" === Ma.os && Ma.osVersion) && Ma.model;
  var xb = !Ea && P.registerElement, Pb = !Ea && P.execCommand, Pa = w.webkitCancelAnimationFrame, Hb = db && xb && "11.0.696.34" === eb, yb = w._firefoxTV_playbackStateObserverJava, kb = Va(c, "diordnA ");
  if ("Nitro" === C) {
    var r = 1;
  } else if ("Nintendo DSi" === C) {
    r = 2;
    var q = I;
  } else if ("New Nintendo 3DS" === C || k(c, "iPhone OS 6_0") && 320 === x && 240 === y) {
    r = 4, q = f(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === C) {
    r = 3, q = f(c, "Version/"), Ya = 535;
  } else if ("Nintendo Swicth" === C) {
    r = 7, q = f(T, "NintendoBrowser/");
  } else if (w.wiiu) {
    r = 6;
    q = f(T, "NintendoBrowser/");
    var N = 15, F = f(T, "AppleWebKit/") || (Pa ? 536 : 534);
    q || (q = Pa ? 4 : 2, k(T, "Macintosh;") || k(T, "Windows NT") && k(T, "Touch"));
  } else if (Ia && Ia.wiiremote) {
    r = 5, q = f(c, "Wii; U; ; ");
  } else if (I = f(c, "PlayStation Vita ")) {
    r = 10, q = I;
  } else if (I = f(c, "(PlayStation Portable); ")) {
    r = 8;
    q = I;
    var fb = 3.3;
  } else if (I = f(c, "PLAYSTATION 3; ") || f(c, "PLAYSTATION 3 ")) {
    r = 11, q = I, 0 > Ha("4.10", I) && (N = 26, F = I);
  } else if (k(c, "Xbox One")) {
    r = 15, q = 1;
  } else if (k(c, "Xbox")) {
    r = 14, q = 1;
  } else if (2 === nb && k(c, "Sony/COM2/")) {
    r = 17;
    q = 2;
    fb = 3.4;
    var lb = !0;
  } else if (0 === C.indexOf("iP") || cb || ca || wb) {
    if (ca) {
      switch(q = ca, Ma.substr(0, 4)) {
        case "iPho":
          var Z = 0;
          f(Ma, Z);
          var za = !0;
          break;
        case "iPad":
          Z = 1;
          f(Ma, Z);
          var ma = !0;
          break;
        case "iPod":
          Z = 2;
          f(Ma, Z);
          var zb = !0;
      }
    } else {
      cb ? q = cb : (q = f(T.split("_").join("."), "OS "), B("isSecureContext", w), B("enableWebGL", w), B("sameOrigin", w));
      if (!q || Y) {
        q = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : wa.isNaN ? 9.2 : w.SharedWorker ? gb && gb.now ? 8 : 8.4 : Pb ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : ob ? 4.3 : M ? 4.1 : 3.2;
      }
      var ra = x === 1.5 * y || 1.5 * x === y;
      0 === C.indexOf("iPhone") ? (Z = 0, za = !0) : 0 === C.indexOf("iPad") || wb ? (Z = 1, ma = !0) : 0 === C.indexOf("iPod") && (Z = 2, zb = !0);
    }
    N = !ca && (ha.standalone || (ma || 12 > q) && B("webkitFullscreenEnabled", P) || 11 <= q && 13 > q && ha.mediaDevices) ? 16 : 17;
    r = 24;
    F = q;
  } else if (k(c, "Kobo")) {
    r = 18, N = 21, F = 2.2, Ka = !0;
  } else if (k(c, "EBRD")) {
    r = 19, N = 21, F = 2.2;
  } else if (I = f(c, "CrOS x86_64 ") || f(c, "CrOS aarch64 ") || f(c, "CrOS i686 ") || f(c, "CrOS armv7l ")) {
    r = 28, q = I;
  } else if (w.onmoztimechange !== Ga) {
    r = 29, q = 18.1 > La ? "1.0.1" : 19 > La ? 1.1 : 27 > La ? 1.2 : 29 > La ? 1.3 : 31 > La ? 1.4 : 33 > La ? 2 : 35 > La ? 2.1 : 38 > La ? 2.2 : 45 > La ? 2.5 : 2.6, k(c, "Mobile") ? za = !0 : k(c, "Tablet") ? ma = !0 : k(c, "TV");
  } else if (w.palmGetResource) {
    r = 30, q = f(c, "webOS/") || f(c, "WEBOS") || f(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (za = !0);
  } else if (I = f(c, "Tizen ")) {
    r = 31, q = I, N = 24, F = hb, za = !0;
  } else if (I = f(c, "Windows Phone ") || f(T, "Windows Phone OS ") || Fb) {
    r = 23, q = I, za = !0;
  } else if (n && "ARM" === C) {
    r = 23, q = 10, za = !0;
  } else if (pb && k(T, "ZuneWP")) {
    r = 23, q = 11 === Ea ? 8.1 : 10 === Ea ? 8 : 9 === Ea ? 7.5 : 7 === Ea ? 7 : "?", za = !0;
  } else if (k(c, "FOMA;")) {
    r = 16, za = !0;
  } else if (k(c, "SoftBank;")) {
    r = 16, za = !0;
  } else if (k(c, "KFMUWI")) {
    var Ca = !0;
    q = 6.3;
    var da = ma = !0;
  } else if (k(c, "KFKAWI")) {
    Ca = !0, q = 6, da = ma = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    Ca = !0, q = 5, da = ma = !0;
  } else if (k(c, "KFGIWI")) {
    Ca = !0, q = 5, da = ma = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    Ca = !0, q = 5 <= Da(ia) ? 5 : 4, da = ma = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    Ca = !0, q = 3, da = ma = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    Ca = !0, q = 2, da = ma = !0;
  } else if (k(c, "Kindle Fire")) {
    Ca = !0, q = 1, da = ma = !0;
  } else if (I = f(c, "Kindle/")) {
    r = 20, q = I, N = 21, F = 2.2;
  } else if (yb) {
    Ca = !0, q = ia || kb, da = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    Ca = !0, q = ia, da = !0;
  } else if (k(c, "MeeGo")) {
    r = 32;
  } else if (k(c, "Maemo")) {
    r = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || Ob) {
    r = 22, lb = !0;
  } else if ("WinCE" === C) {
    r = 21, lb = !0;
  } else if (0 === C.indexOf("Win")) {
    r = "Win16" === C ? 35 : "Win32" === C ? 36 : "Win64" === C ? 37 : 0, q = f(c, "Windows NT ") || f(c, "Windows ");
  } else if (0 === C.indexOf("Mac")) {
    r = "Mac68K" === C ? 39 : "MacPowerPC" === C || "MacPPC" === C ? 38 : "MacIntel" === C ? 40 : 0;
    if (I = f(c.split("_").join("."), "Mac OS X ")) {
      q = I;
    }
    var Ib = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    r = 34, q = Xa, za = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    r = 42;
  } else if (k(c, "FreeBSD")) {
    r = 43;
  } else if (k(c, "OpenBSD")) {
    r = 44;
  } else if (k(c, "NetBSD")) {
    r = 45;
  } else if (Ka && bb) {
    k(c, "Android 4.4;") ? ra = {min:2.3} : 4 <= Da(ia) ? ra = ia : ra = {min:2.2}, q = ra;
  } else if (Ka && Ia) {
    ia ? ra = ia : ra = {min:1.6}, q = ra, k(c, "Tablet") ? ma = !0 : za = !0;
  } else if (ia) {
    q = ia, Ka = !0;
  } else if (db && Wa || Ja || jb) {
    var tb = !0;
    hb ? ra = {min:4.4} : vb && !sb || Eb || Gb ? ra = {min:4} : (ra = ia = Sa.touchAction !== Ga ? {min:5} : xb ? 4.4 : ob ? ha.connection ? w.searchBoxJavaBridge_ || vb ? wa.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ya ? 3 : 533 <= Ya ? M ? 2.3 : 2.2 : 530 <= Ya ? 2 : 1.5, ib && (N = 24, F = ib));
    q = ra;
    Ka = !0;
  } else {
    Hb ? (q = {min:5}, tb = Ka = !0) : db && (k(c, "Ubuntu") ? r = 46 : (I = f(c, "Mint/")) ? (r = 47, q = I) : (I = f(c, "Fedora/")) ? (r = 48, q = I) : r = k(c, "Gentoo") ? 49 : 50);
  }
  Ca || Ka && tb && rb ? r = 27 : Ka && (r = r || 26);
  N || (da = da || Ka, Ia ? (N = da || lb || za || ma ? 9 : 8, F = Rb) : pb ? (ra = Va(T, "Trident/") + 4, N = lb || za || ma || zb ? 3 : Ib && 5 <= Ea ? 7 : 2, F = Ea) : n ? (N = 23 === r ? 6 : 5, F = f(T, "Edge/")) : Oa ? (N = 13, F = Oa) : bb ? (N = da ? 12 : 11, F = La || Lb) : hb ? (N = 24, F = hb) : (I = fb || f(c, "NetFront/")) ? (N = 18, F = I) : (I = f(c, "iCab")) ? (N = 19, F = I) : (I = qa(f(c, "Opera Mini/"), f(c, "Opera Mobi/")) || Db && Xa) ? (N = 10, F = I, r || (k(c, "iPhone") ? Z = 
  0 : k(c, "iPad") ? Z = 1 : k(c, "iPod") && (Z = 2), Z && (r = 24))) : qb ? (N = 25, F = Kb) : Nb ? (N = 14, F = nb) : Ka && sb ? (N = 21, F = ia) : vb || Eb || Gb ? (N = da ? 22 : 20, F = eb || Mb) : Ka && xb ? (N = 23, F = 5 > Da(ia) ? ia : eb) : Ka && (Xa || tb) ? (N = 21, F = ia) : eb ? (N = da ? 22 : 20, F = eb) : Ya && (N = 15, F = Ya));
  r && (Ua[2] = r, q && (Ua[3] = Cb(q)));
  N && (Ua[0] = N, F && (Ua[1] = Cb(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ua, w, P, ha, y, Da, wa, Ga, Va, k, ab, B) {
  function f(l) {
    if (w[0] === l) {
      return C === C + "" ? wa(C) : C;
    }
  }
  function qa(l) {
    var E = w[3];
    if (w[2] === l) {
      return E === E + "" ? wa(E) : E;
    }
  }
  function Cb(l, E, aa) {
    l + "" === l && ("a" === l.charAt(2) && (aa = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > x ? 117 : .9 > M || 9 > n || 9 > x || Sa ? 1 : 132 : parseInt(l, 16));
    aa && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (E || 2));
  }
  var Ha = y.body, c = Ha.style, T, nb, C = w[1], n = f(2) || f(3), Sa = f(7), Ea = f(5) || f(6), x = f(8) || f(9), M = f(11) || f(12), gb = M && 0 <= w.conpare(C, "1.9.1"), ob = f(13), Wa = f(15), Xa = f(16) || f(17), Db = f(10) || f(25), Ia = f(20) || f(22), Rb = f(23), Eb = f(21), pb = f(24), vb = Ia || Rb || Eb || pb, bb = Ia && wa(Da.userAgent.split("Edg/")[1]);
  Da = wa(Da.appVersion.split("Trident/")[1]) + 4;
  var qb = qa(35) || qa(36) || qa(37), Kb = (Sa ? "ie5mac" : 5.5 > n ? "ie5win" : 6 > n ? "ie55" : 10 > n ? "ie" + (n | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : M && !gb ? 1.4 <= M ? "gck19" : 1.3 <= M ? "gck13" : 1 <= M ? "gck12" : .9 <= M ? "gck09" : .8 <= M ? "gck08" : "gck07" : "modern") + ".css";
  qa(1) || qa(2) || qa(3) || qa(4) || qa(8) || qa(9) || qa(10);
  var Fb, cb, ia, Ja = 8 > n || 7.2 > x ? !1 : B, Ka = c.transform !== B ? "transform" : c["-o-transform"] !== B ? "-o-transform" : c["-ms-transform"] !== B ? "-ms-transform" : c.MozTransform !== B ? "-moz-transform" : c["-webkit-transform"] !== B ? "-webkit-transform" : "", db = [], wb = [], Oa = [], La, Lb, I;
  525 > Wa || 10 > x || M && !gb || 2.2 > Eb || f(25) || 10 > f(3) || qa(32) || qa(30) || qa(3);
  var Y, Ya, eb, Mb, Gb, Nb, Ob;
  (function() {
    function l() {
      for (var K, a = 0, b = +new ab(); a < ba.length;) {
        b < ba[0].t ? ++a : (K = ba.splice(a, 1)[0], K.f(K.p));
      }
      sa = ba.length ? Va(l, ea) : 0;
    }
    function E() {
      for (var K, a = 0; a < ja.length; ++a) {
        K = ja[a], K.f();
      }
    }
    function aa() {
      ta && (ta = clearInterval(ta));
    }
    function va() {
      sa && (sa = k(sa));
    }
    eb = function(K) {
      ja.length || (ta = setInterval(E, oa));
      ja.push({f:K, l:++ya});
      return ya;
    };
    Mb = function() {
      ta && (aa(), ta = setInterval(E, oa));
    };
    Gb = aa;
    var ja = [], oa = 500, ya = 0, ta;
    if (5 > n || Sa) {
      P._wdb_onlooptimer = E, E = "_wdb_onlooptimer()";
    }
    Y = function(K, a, b) {
      ba.length || (sa = Va(l, ea));
      ba.push({f:K, p:a, l:++W, t:+new ab() + (ea < b ? b : ea)});
      return W;
    };
    Ya = function(K) {
      for (var a = ba.length, b; b = ba[--a];) {
        if (b.l === K) {
          ba.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Nb = function() {
      sa && (va(), sa = Va(l, ea));
    };
    Ob = va;
    var ba = [], ea = 16, W = 0, sa;
    if (5 > n || Sa) {
      P._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var rb, hb, ib, sb, jb, ca, Ma, xb, Pb, Pa, Hb, yb, kb, r, q, N, F, fb, lb, Z, za;
  (function() {
    function l(a, b, h) {
      var t = ["<", a], u = 1, A, na;
      if (b) {
        for (A in b) {
          var J = b[A];
          if (null != J && "" !== J) {
            if ("style" === A) {
              t[++u] = ' style="';
              for (na in J) {
                for (var Qa = ++u, ka, Q = [], g = na.split(""), d = g.length; d;) {
                  ka = g[--d], "A" <= ka && "Z" >= ka && (ka = "-" + ka.toLowerCase()), Q[d] = ka;
                }
                t[Qa] = Q.join("") + ":" + J[na] + ";";
              }
              t[++u] = '"';
            } else {
              "className" === A && (A = "class"), t[++u] = " " + A + '="' + J + '"';
            }
          }
        }
      }
      t[++u] = ">";
      null != h && (W && "font" !== a ? t[++u] = "<FONT>" + E(h) + "</FONT>" : t[++u] = E(h));
      t[++u] = "</" + a + ">";
      return t.join("");
    }
    function E(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function aa(a) {
      var b = a.split("-"), h = b.length;
      if (2 > h) {
        return a;
      }
      for (; 1 < h;) {
        a = b[--h], b[h] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function va(a) {
      a = "*" === a && 6 > n ? "*" !== a ? y.all.tags(a.toUpperCase()) : y.all : y.getElementsByTagName(a);
      for (var b = [], h = 0, t = a.length; h < t; ++h) {
        b[h] = a[h];
      }
      return b;
    }
    function ja(a) {
      return W ? a.parentElement : a.parentNode;
    }
    function oa(a, b, h, t, u, A) {
      if (W) {
        var na = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var J = sb(2 > a ? ib(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(na, l(h, t, u));
        b = sb(b)[J];
        null != u && ("font" === h ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (sa) {
        b = y.createElement(l(h, t));
      } else {
        b = A ? y.createElementNS("http://www.w3.org/2000/svg", h) : y.createElement(h);
        if (t) {
          for (na in t) {
            if ((a = t[na]) || 0 === a) {
              switch(na) {
                case "class":
                case "className":
                  N(b, a);
                  break;
                case "style":
                  A = b.style;
                  for (J in a) {
                    A[J] = a[J];
                  }
                  break;
                default:
                  kb(b, na, a);
              }
            }
          }
          !x || "a" !== h && "A" !== h || !t.href || t["tag-index"] || t.tagIndex || kb(b, "tagIndex", "-0");
        }
        K || null != u && ya(b, u);
      }
      return b;
    }
    function ya(a, b) {
      if (W) {
        return oa(2, a, "font", B, b);
      }
      var h = y.createTextNode("" + b);
      a.appendChild(h);
      return h;
    }
    function ta(a, b) {
      9 > n ? a.className = b : a.setAttribute("class", b);
    }
    function ba(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ea(a, b, h) {
      if (8 > x || 5.5 > n) {
        b = aa(b);
      }
      a.style[b] = h;
    }
    var W = 5 > n;
    T = va("html")[0];
    nb = va("head")[0];
    rb = va;
    hb = function(a) {
      var b = [], h = 0, t, u = -1;
      if (9 > n || !y.getElementsByClassName) {
        var A = 6 > n ? y.all : y.getElementsByTagName("*");
      } else {
        var na = !0;
        A = y.getElementsByClassName(a);
      }
      for (t = A.length; h < t; ++h) {
        var J = A[h];
        if (na || (W || 1 === J.nodeType) && ba(J, a)) {
          b[++u] = J;
        }
      }
      return b;
    };
    ib = ja;
    sb = function(a) {
      a = W ? a.children : a.childNodes;
      for (var b = [], h = a.length; h;) {
        b[--h] = a[h];
      }
      return b;
    };
    jb = function(a) {
      var b = !(7.03 < x && 7.2 > x) && a.children;
      a = b ? b : a.childNodes;
      for (var h = [], t = a.length, u = -1, A; t;) {
        if (A = a[--t], b || 1 === A.nodeType) {
          W && "FONT" === A.tagName || (h[++u] = A);
        }
      }
      return h;
    };
    ca = function(a, b, h, t, u) {
      b = oa(2, a, b, h, t, u);
      W || (a.appendChild(b), K && null != t && ya(b, t));
      return b;
    };
    Ma = function(a, b, h, t, u) {
      b = oa(0, a, b, h, t, u);
      W || (ja(a).insertBefore(b, a), K && null != t && ya(b, t));
      return b;
    };
    xb = ya;
    Pb = function(a, b) {
      if (W) {
        return oa(0, a, "font", B, b);
      }
      var h = y.createTextNode("" + b);
      ib(a).insertBefore(h, a);
      return h;
    };
    Pa = function(a) {
      W ? a.outerHTML = "" : ib(a).removeChild(a);
    };
    var sa = 9 > n, K = sa;
    Hb = function(a) {
      return a.tagName.toUpperCase();
    };
    yb = function(a, b) {
      if (8 > x || 5.5 > n) {
        b = aa(b);
      }
      var h = a.getAttribute(b);
      return x && "tabIndex" === b ? "-0" === h ? "" : "" === h ? "-1" : h : h || "";
    };
    kb = function(a, b, h) {
      if (x && "tab-index" === b) {
        "-1" === h ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", h);
      } else {
        if (8 > x || 5.5 > n) {
          b = aa(b);
        }
        a.setAttribute(b, h);
      }
    };
    r = function(a, b) {
      if (x && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > x || 5.5 > n) {
          b = aa(b);
        }
        a.removeAttribute(b);
      }
    };
    q = function(a, b) {
      if (x && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > x || 5.5 > n) {
        b = aa(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    N = ta;
    F = ba;
    fb = function(a, b) {
      var h;
      if (!ba(a, b)) {
        if (h = a.className) {
          h += " ";
        }
        ta(a, h + b);
      }
    };
    lb = function(a, b) {
      if (ba(a, b)) {
        var h = a.className.split(" ");
        h.splice(h.indexOf(b), 1);
        ta(a, h.join(" "));
      }
    };
    Z = ea;
    za = function(a, b) {
      var h, t = -1, u;
      if (5.5 > n) {
        if (h = 5.5 > n ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (h = h.split(";"); u = h[++t];) {
            ea(a, u.split(":")[0], "");
          }
        }
        if (b) {
          for (t = -1, h = b.split(";"); u = h[++t];) {
            var A = u.split(":")[0];
            ea(a, A, u.substr(A.length + 1));
          }
        }
      } else if (7.1 > x) {
        if (a.setAttribute("style", ""), b) {
          for (h = b.split(";"); u = h[++t];) {
            u = u.split(":"), ea(a, u[0], u[1]);
          }
        }
      } else {
        9 > x || 1 > M ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ma, zb, ra, Ca, da, Ib, tb, p, la;
  (function() {
    function l() {
      return J ? ka ? 2 : Qa ? 3 : 1 : 0;
    }
    function E(g) {
      zb(P, "load", E);
      E = B;
      va(db, g, !0);
      ra = db = B;
    }
    function aa(g, d) {
      da(function() {
        var m = ba(g);
        d(m);
        m.addListener(d);
        return !0;
      });
    }
    function va(g, d, m) {
      for (var e = 0; e < g.length; ++e) {
        !0 === g[e](d) && (g.splice(e, 1), --e);
      }
      m && (g.length = 0);
    }
    function ja(g, d, m) {
      db || W.length || Y(oa);
      W.push(g, d, m);
    }
    function oa() {
      var g = W, d;
      for (W = []; d = g.shift();) {
        va(d, g.shift(), g.shift());
      }
    }
    function ya(g) {
      var d = g || event;
      g = K[d.type];
      var m = -1, e, v;
      n ? (d.target = d.srcElement, d.preventDefault = o, d.stopPropagation = function() {
        d.cancelBubble = !0;
      }) : b && (d.j = d.stopPropagation, d.stopPropagation = function() {
        v = !0;
      });
      for (; e = g[++m];) {
        e.i === this ? (this.g = e.h, n && (d.currentTarget = this), this.g(d), n ? (this.g = ha, this.g = B) : delete this.g) : 7.2 > x && this === y && e.i === P && (P.g = e.h, P.g(d), delete P.g);
      }
      if (n) {
        return d.preventDefault = d.stopPropagation = ha, d.preventDefault = d.stopPropagation = B, d.returnValue;
      }
      b && (d.defaultPrevented && "click" === d.type && "A" === d.target.tagName && (t = !0), v && !t && d.j(), d.j = d.stopPropagation = B);
      function o() {
        d.returnValue = !1;
      }
      o = !1;
    }
    function ta() {
      var g = 9 === ea.offsetWidth;
      tb !== g && ja(wb, tb = g);
    }
    var ba = P.matchMedia, ea, W = [];
    db.push(function() {
      aa = B;
      ea = ca(Ha, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ra(function() {
        W.length && Y(oa);
      });
    });
    ma = function(g, d, m, e) {
      if (h) {
        g.addEventListener(d, m, e ? sa ? e : e.capture || !0 === e : !1);
      } else {
        var v = {i:g, h:m};
        e = K[d];
        var G = "on" + d, H, L;
        if (e) {
          for (H = e.length; L = e[--H];) {
            if (L.i === g && L.h === m) {
              return;
            }
          }
          K[d].push(v);
        } else {
          K[d] = e = [v], a || (d = g[G], "function" === typeof d && d !== ya && e.unshift({i:g, h:d}));
        }
        a ? g.attachEvent(G, ya) : g[G] = ya;
      }
    };
    zb = function(g, d, m, e) {
      if (h) {
        g.removeEventListener(d, m, e ? sa ? e : e.capture || !0 === e : !1);
      } else {
        e = K[d];
        d = "on" + d;
        var v, G, H;
        if (e) {
          for (v = e.length; G = e[--v];) {
            G.i === g && (G.h === m ? e.splice(v, 1) : H = !0);
          }
          H || (a ? g.detachEvent(d, ya) : n ? (g[d] = ha, g[d] = null) : delete g[d]);
        }
      }
    };
    var sa = !n && !Sa && (new Ga('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), K = {}, a = !1, b = 525.13 > Wa, h = !b && !Sa && P.addEventListener, t;
    b && T.addEventListener("click", function(g) {
      if (t) {
        return t = !1, g.preventDefault(), !1;
      }
    });
    ra = function(g) {
      db.push(g);
    };
    Ca = function(g) {
      u && u.push(g);
    };
    var u = [];
    if (419.3 >= Wa) {
      var A = function() {
        if (A) {
          var g = y.readyState;
          "loaded" === g || "complete" === g ? (A = B, E()) : Y(A);
        }
      };
      Y(A);
    } else {
      ma(P, "load", E);
    }
    n || .9 <= M && 1.8 > M ? ma(P, "unload", function(g) {
      va(u, g, !0);
    }) : u = B;
    da = function(g) {
      wb.push(g);
    };
    ra(function() {
      ta();
      eb(ta);
    });
    Ib = function(g) {
      Oa && Oa.push(g);
    };
    var na = 60 > M || ob, J, Qa, ka;
    if (89 <= M || 89 <= Ia || qb && 79 <= bb || ba && (ba("(forced-colors:none)").matches || ba("(forced-colors:active)").matches)) {
      la = !0, aa("(forced-colors:active)", function(g) {
        J = g.matches;
        p = l();
        ja(Oa, p);
      });
    } else if (10 <= n || Ea || qb && bb) {
      la = !0, aa("(-ms-high-contrast:black-on-white)", function(g) {
        J = Qa = g.matches;
        p !== l() && (p = l(), ja(Oa, p));
      }), aa("(-ms-high-contrast:white-on-black)", function(g) {
        J = ka = g.matches;
        p !== l() && (p = l(), ja(Oa, p));
      }), aa("(-ms-high-contrast:active)", function(g) {
        J = g.matches;
        p !== l() && (p = l(), ja(Oa, p));
      });
    } else if (qb && (n || M && 0 <= w.conpare(C, "1.8.1") || ob)) {
      var Q = function() {
        function g(e, v) {
          if (v && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var G = e.split("(")[1].split(",");
          return wa(G[0]) + wa(G[1]) + wa(G[2]);
        }
        var d = y.defaultView;
        var m = d ? d.getComputedStyle(ea, null) : ea.currentStyle;
        d = (m && m.color || "").split(" ").join("");
        m = (m && m.backgroundColor || "").split(" ").join("");
        d && (J = "#123456" !== d && "rgb(18,52,86)" !== d, Qa = g(d) < g(m, !0), ka = g(d) > g(m, !0), p !== l() && (p = l(), ja(Oa, p, na)));
      };
      da(function(g) {
        if (g) {
          return Z(ea, "color", "#123456"), Z(ea, "backgroundColor", "#123456"), na ? (Q(), Oa = B) : eb(Q), Q = B, !0;
        }
      });
    } else {
      Oa = l = B;
    }
  })();
  (function() {
    function l(e) {
      b(e);
      d && !e && Pa(d);
      b = h = t = u = A = na = ka = Q = g = m = d = B;
    }
    function E(e) {
      y.fonts.load('1.6em "' + e + '"').then(function() {
        var v;
        (v = ja(h)) ? Y(l, v) : va(!0);
      }, function() {
        Ja !== B ? oa(Ja) : La(oa);
      });
    }
    function aa(e) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (Qa = new ab() - 0, !1) : e < new ab() - Qa;
    }
    function va(e) {
      var v;
      e && (Qa = new ab() - 0);
      (v = ja(h)) ? l(v) : aa(J) ? ka || ea ? l(0) : Ja !== B ? oa(Ja) : La(oa) : Y(va);
    }
    function ja(e) {
      var v = 0, G = -1, H = 0;
      if (!m) {
        var L = -1;
        var R;
        Q = ca(Ha, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, K);
        for (m = {}; R = a[++L];) {
          Z(Q, "fontFamily", R), m[R] = Q.offsetWidth;
        }
      }
      for (5 > n ? Q || (Q = ca(Ha, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, K)) : Ha.appendChild(Q); L = a[++G];) {
        if (Z(Q, "fontFamily", '"' + e + '",' + L), Q.offsetWidth !== m[L]) {
          v = 1;
          break;
        }
      }
      !n && v && A && (Q.innerHTML = A, e = Q.offsetWidth, Q.innerHTML = na, H = e === Q.offsetWidth ? 1 : 0, Q.innerHTML = K);
      Pa(Q);
      5 > n && (Q = B);
      return v + H;
    }
    function oa(e) {
      e ? (ka = !0, ya(!0)) : l(0);
    }
    function ya(e) {
      var v;
      if (t) {
        for (v in e && (Qa = new ab() - 0), t) {
          ja(v) ? (g = ca(Ha, "div", {"aria-hidden":"true", className:u, id:u}), d = ca(nb, "link", {type:"text/css", rel:"stylesheet", href:t[v]}), Y(ta, !0)) : aa(sa) ? (delete t[v], Y(ya, !0)) : Y(ya);
          return;
        }
      }
      l(0);
    }
    function ta(e) {
      e && (Qa = new ab() - 0);
      1 < g.offsetWidth ? (Pa(g), J = sa, Y(va, !0)) : aa(J) ? 528 > Wa ? (Pa(g), J = sa, Y(va, !0)) : (Pa(g), l(0)) : Y(ta);
    }
    wb.splice(0, 0, function() {
      if (tb) {
        ia = 8 <= n || Ea || 9.5 <= x || gb || ob || 522 <= Wa || 3 <= Xa || Db || vb ? 3 : 7.2 <= x ? 2 : 6 <= x || M ? 1 : 0;
        if (!ia && !n && !Sa) {
          var e = ca(Ha, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          ia = 6 <= e.offsetWidth ? 2 : 0;
          Pa(e);
        }
        return !0;
      }
    });
    La = !1 === Ja ? function(e) {
      Y(e, Ja);
    } : function(e) {
      function v(L) {
        H = Ya(H);
        Ja = L;
        G.onload = G.onerror = ha;
        Y(e, L);
      }
      if (Ja !== B) {
        Y(e, Ja);
      } else if (8 > n) {
        Y(e, !1);
      } else {
        var G = new Image(), H = Y(function() {
          H && v(!1);
        });
        G.onerror = function() {
          v(!1);
        };
        G.onload = function() {
          v(1 === G.width * G.height);
        };
        G.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > n && ra(function() {
      var e = ca(Ha, "div");
      za(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Fb = 1 < e.offsetHeight;
      za(e, "");
      Pa(e);
    });
    Lb = function(e, v) {
      function G() {
        if (L || !R || H.complete) {
          var O = !!H.width;
          cb = cb || O;
          Y(e, O);
          H.onerror = H.onload = ha;
          H = e = B;
        } else {
          --R, Y(G);
        }
      }
      var H = new Image(), L, R = 99;
      H.onerror = function() {
        L = !0;
      };
      H.onload = function() {
        L = !0;
      };
      H.src = v;
      Y(G);
    };
    I = function(e, v, G, H, L, R, O) {
      b = e;
      h = v;
      t = G;
      u = H;
      A = L;
      na = R;
      J = O || W;
      ba ? Y(l, 0) : !y.fonts || 603 > Wa ? va(!0) : E(h);
    };
    var ba = 525 > Wa || 10 > x || M && !gb || 2.2 > f(21) || f(25) || 10 > f(3) || qa(32) || qa(30) || qa(3), ea = 9 > n || 2 > Ia || 12 > x, W = 5E3, sa = 100, K = "mmmmmmmmmmlli", a = ["sans-serif", "serif"], b, h, t, u, A, na, J, Qa, ka, Q, g, d, m;
  })();
  var D = String.fromCharCode, xa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", D(960), ")", "(", D(234), D(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", D(9824), "\u2190", D(9829), D(9830), D(9827), D(956), "\u03a9", "\u2193", "\u2192", "%", D(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", D(9619)];
  c = (9 === n || M && 0 <= w.conpare(C, "1.8.1") || ob) && !la;
  var Ba = [], mb, Ta, Jb = 7.2 > x ? function() {
    mb = !mb;
    for (var l = -1, E; E = Ba[++l];) {
      -1 !== E.className.indexOf("pbAlp") ? Z(E, "display", mb ? "" : "none") : (fb(E, mb ? "pbChrCS" : "pbChr00"), lb(E, mb ? "pbChr00" : "pbChrCS"));
    }
  } : c ? function() {
    mb = !mb;
    for (var l = -1, E; E = Ba[++l];) {
      Z(E, "opacity", mb ? 1 : 0);
    }
  } : B;
  var Sb = Ua.startBlinkingIfCursor = function(l) {
    Jb ? F(l, "pbChrCS") && (Ta || !x && !p || (Ta = setInterval(Jb, 400)), -1 === Ba.indexOf(l) && Ba.push(l)) : Ba = B;
  };
  Ua.stopBlinkingIfCursor = function(l) {
    Jb && (l = Ba.indexOf(l), 0 <= l && (Ba.splice(l, 1), !Ba.length && Ta && (clearInterval(Ta), Ta = 0)));
  };
  c && Ib(function(l) {
    l ? Ta || (Ta = setInterval(Jb, 400)) : Ta && (clearInterval(Ta), Ta = 0);
  });
  Jb && Ca(function() {
    Ta && clearInterval(Ta);
  });
  la || Ib(function(l) {
    l ? (kb(T, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Ka || 9 === n || 5.5 <= n && 9 > n && Fb) && fb(T, "jsCanRotate")) : (r(T, "forced-colors"), lb(T, "jsCanRotate"));
  });
  (function() {
    function l(d) {
      (A = d) ? ja() : cb ? va(!0) : cb !== B ? ja() : Lb(va, na);
    }
    function E() {
      E = B;
      I(l, "PB-100", {"PB-100_canTTF":Za + "pbFont/ttf.css", "PB-100_canWOFF":Za + "pbFont/woff.css", "PB-100_canEOT":Za + "pbFont/eot.css", "PB-100_canSVG":Za + "pbFont/svg.css"}, "pbFont-testCssReady", K, "i", 5E3);
    }
    function aa(d) {
      this.focus();
      d.preventDefault();
      d.stopPropagation();
    }
    function va(d) {
      d && fb(Ha, "pbList-noWebFont");
      ja();
    }
    function ja() {
      for (l = I = B; u.length;) {
        oa(u.shift(), u.shift());
      }
    }
    function oa(d, m) {
      function e(O) {
        O = sb(O);
        for (var z = -1, X; X = O[++z];) {
          switch(X.nodeType) {
            case 1:
              e(X);
              break;
            case 3:
              X.data && G(X.data) && H.push(X);
          }
        }
      }
      function v(O) {
        var z = O.children, X = 0, $a = z.length;
        if ($a) {
          for (; X < $a; ++X) {
            v(z[X]);
          }
        } else {
          (z = O.innerText) && G(z) && H.push(O);
        }
      }
      function G(O) {
        return O.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var H = [], L;
      if (l) {
        -1 === u.indexOf(d) && (u.push(d, m), J && E && E());
      } else {
        var R = u.indexOf(d);
        0 <= R && u.splice(R, 2);
        for (5 > n ? v(d) : e(d); L = H.shift();) {
          R = 5 > n ? L.innerText : L.data, 2 !== A && (R = R.split(K).join(W)), m ? 5 > n ? L.innerText = R : L.data = R : ya(R.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(sa).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(ea).split("&amp;").join("&"), L);
        }
      }
    }
    function ya(d, m) {
      function e(pa, S) {
        for (var Fa = ""; S;) {
          S & 1 && (Fa += pa), S >>= 1, pa += pa;
        }
        return Fa;
      }
      function v(pa, S, Fa) {
        for (var Ab, Vb = -1, Tb, Ub; Ab = S[++Vb];) {
          for (; 0 <= (Tb = pa.indexOf(Ab));) {
            Ub = Ab.length, pa = pa.substr(0, Tb) + e(Fa, Ub) + pa.substr(Tb + Ub);
          }
        }
        return pa;
      }
      function G(pa) {
        var S = wa(pa), Fa = "" + S;
        return 0 < S && S === S | 0 && (S = pa.indexOf(Fa) + Fa.length, S <= pa.length) ? S : 0;
      }
      var H = " area line str cmd fnc syb".split(" "), L = 5 > n || 1 === m.nodeType, R = [], O = "", z, X = -1, $a, ub, Na;
      if (L) {
        if (Q) {
          var Qb = m.style.visibility;
          Z(m, "visibility", "hidden");
        }
        m.innerHTML = "";
      }
      if (g) {
        var Bb = m;
        m = y.createDocumentFragment();
      }
      if (function(pa) {
        var S = pa.indexOf("P");
        if (-1 === S) {
          return !1;
        }
        S = wa(pa.charAt(S + 1));
        return 0 <= S && 9 >= S;
      }(d)) {
        O = e("+", d.length);
      } else {
        0 <= (z = G(d)) && (O = e("|", z), X = z, --X);
        for (; z = d.charAt(++X);) {
          z === ea || $a ? (O += "~", z === ea && ($a = !$a)) : O += z;
        }
        O = v(O, t, "^");
        O = v(O, b, "{");
        O = v(O, h, "}");
      }
      X = 0;
      for ($a = d.length; X < $a; ++X) {
        z = d.charAt(X);
        var U = z === a;
        var fa = " " === z;
        z = U ? " " : z;
        var V = O.charAt(X);
        var Ra = (ub = Aa) && U;
        var Aa = "|" === V;
        V = H["+|~{}^".indexOf(V) + 1];
        "\n" !== z ? (A || !cb ? (2 === A && d.substr(X, 2) === K && (z = K, ++X), V = fa && "str" === V ? "pbList-strsp" : U ? "" : !fa && V ? "pbList-" + V : "") : (U = xa.indexOf(z), U = -1 === U ? "" : xa.indexOf(z).toString(16).toUpperCase(), U = (U = 1 === U.length ? "0" + U : U) ? "pbChr" + U : "", V = fa && "str" === V ? "pbList-strsp" : fa || !U ? "" : V ? (U ? U + " " : "") + "pbList-" + V : U), U = B, Ra ? (z = 6 <= n && 8 > n ? " " : a, V = "") : Aa && (M && !gb || 9.5 > x) ? (Aa && !ub && 
        (Na = 4 - (wa(d.substr(X)) + "").length), 7.5 > x ? U = ka ? "position:relative;top:-4px;left:" + 12 * Na + "px" : {position:"relative", top:"-4px", left:12 * Na + "px"} : U = ka ? "position:relative;left:" + 12 * Na + "px" : {position:"relative", left:12 * Na + "px"}) : fa && 7.5 > x && (V = "pbList-strsp"), ka ? R.push("<font" + (V ? ' class="' + V + '"' : "") + (U ? ' style="' + U + '"' : "") + ">" + z + "</font>") : L || g ? ca(m, "font", {"class":V, style:U}, z) : Ma(m, "font", {"class":V, 
        style:U}, z)) : (ub = Aa = !1, ka ? R.push(z) : L || g ? xb(m, z) : Pb(m, z));
      }
      if (L) {
        ka ? m.innerHTML = R.join("") : g && Bb.appendChild(m), Q && Z(m, "visibility", Qb);
      } else {
        if (ka) {
          H = y.createElement("font");
          for (H.innerHTML = R.join(""); R = H.firstChild;) {
            m.parentNode.insertBefore(R, m);
          }
          Pa(m);
        } else {
          g ? Bb.parentNode.replaceChild(m, Bb) : Pa(m);
        }
      }
    }
    1.9 > M && da(function(d) {
      if (d) {
        d = rb("*");
        for (var m = 0, e = d.length, v; m < e; ++m) {
          v = d[m], "B" !== Hb(v) && -1 !== (" " + v.className).toLowerCase().indexOf(" pbchr") && (q(v, "title") || kb(v, "title", v.textContent), v.textContent = " ");
        }
        return !0;
      }
    });
    da(function(d) {
      if (d) {
        d = hb("pbChrCS");
        for (var m = 0, e = d.length; m < e; ++m) {
          Sb(d[m]);
        }
        return !0;
      }
    });
    var ta = [], ba = M && 0 > w.conpare(C, "0.9.9");
    da(function(d) {
      function m(fa) {
        var V = yb(fa, "pbTip");
        if (V) {
          var Ra = V.charAt(0);
          var Aa = "_" === Ra;
          V = (Aa ? V.charAt(2) : Ra).toUpperCase().charCodeAt(0) - 65;
          R ? ca(fa, "div", {style:{left:7 * V + 3 + "px"}}) : (Ra = yb(fa, "title"), r(fa, "pbTip"), r(fa, "title"), Aa = ca(fa, "div", {className:"pbTip" + (Aa ? "Btm" : ""), style:{width:Ra.length + v + "em", left:7 * V - (ba ? 0 : 5) + "px"}}, Ra), Aa = ca(Aa, "div"), .9 <= M && ba && Z(Aa, "left", "2px"));
        }
        L && 0 <= fa.className.indexOf("pbColor") && ca(fa, "u");
      }
      function e(fa, V) {
        var Ra = yb(fa, "pbGhst"), Aa = fa.className, pa = Aa.split("pbCsr")[1] || "", S = Aa.split("pbAlp")[1] || "";
        if ("CS" === Ra) {
          var Fa = "_";
        } else {
          Fa = Ra, 3 === Fa.length && (Fa = Fa.substr(0, 2)), Fa = xa[parseInt(Fa, 16)] || "~";
        }
        var Ab;
        pa = pa.split(" ")[0];
        if (S = wa(S.split(" ")[0])) {
          G && (Aa = Aa.split("pbChr")[1].split(" ")[0], Z(fa, "backgroundPosition", Cb(Aa, 2, Qb) + "px " + -24 * (10 - S) + "px")), !V && H && Ma(fa, "a").appendChild(fa);
        }
        Ra && (S = 10 - S, G && (Ab = {backgroundPosition:Cb(Ra, 2, Qb) + "px " + -24 * (10 - S) + "px"}), r(fa, "pbGhst"), X = Ma(fa, "b", {className:"pbChr" + Ra + " pbCsr" + pa + " pbAlp" + S, style:Ab}, Fa), Sb(X));
        Sb(fa);
      }
      if (d) {
        var v = 6 > n ? 2 : 0, G = 7.2 > x || .9 > M || Sa, H = 1.1 === M, L = 1.4 > M;
        d = rb("SAMP");
        var R = 8 === n, O = ia, z, X, $a, ub, Na;
        Fb && fb(Ha, "pbLCD-AX");
        if (d.length) {
          for ($a = -1; z = d[++$a];) {
            if (F(ib(z), "pbLCD")) {
              var Qb = F(z, "PB-120") || F(z, "FX-795P");
              var Bb = jb(z);
              for (z = Bb.length; Na = Bb[--z];) {
                switch(Hb(Na)) {
                  case "A":
                    (2 > O || R) && m(Na);
                    if (2 > O) {
                      var U = jb(Na);
                      for (ub = U.length; ub;) {
                        e(U[--ub], !0);
                      }
                    }
                    Db ? kb(Na, "href", "javascript:void(0)") : (ma(Na, "click", aa), ta.push(Na));
                    break;
                  case "B":
                    2 > O && e(Na, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ca(function() {
      for (var d; d = ta.shift();) {
        zb(d, "click", aa);
      }
    });
    6 === n && (new Ga("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
    var ea = xa[7], W = xa[30], sa = xa[113], K = D(8337) + D(8331), a = D(160);
    D(8194);
    var b = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), h = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), t = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + W + xa[31]).split(""), u = [], A, na, J;
    if (.9 <= M && 0 >= w.conpare(C, "0.9.1")) {
      fb(T, "pbLCD-gecko09To091");
      var Qa = !0;
    }
    da(function(d) {
      if (d) {
        na = Za + "pbFont/x3mask" + (Qa ? ".gecko0.9.1.gif" : ".png");
        d = rb("*");
        for (var m = -1, e; e = d[++m];) {
          F(e, "pbList") ? oa(e) : F(e, "pbFont") && oa(e, !0);
        }
        u.length && E();
        return !0;
      }
    });
    var ka = !1, Q = 8 > x, g = !ka && !Q && !(6 > n) && y.createDocumentFragment && !!Ha.replaceChild;
    Ua.prettify = oa;
  })();
  c = y.scripts || rb("script");
  var Za = c[c.length - 1].src.split("/");
  --Za.length;
  (Za = Za.join("/")) && (Za += "/");
  6.1 > Xa && ma(P, "scroll", Mb);
  Ca(Gb);
  6.1 > Xa && ma(P, "scroll", Nb);
  Ca(Ob);
  10 > n && (11 !== Da || 5 !== n) || (9 > x || 1 > M || !Sa && !P.addEventListener ? y.write('<link href="' + Za + Kb + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : ra(function() {
    ca(nb, "link", {href:Za + "" + Kb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

