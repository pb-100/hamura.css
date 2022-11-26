/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Ua, w) {
  var N = 0, ha, y, Ba = (Ua + "").split("."), ra = (w + "").split("."), Ea = Ba.length;
  for (ha = ra.length; "0" === Ba[Ea - 1];) {
    --Ea;
  }
  for (; "0" === ra[ha - 1];) {
    --ha;
  }
  for (y = Ea < ha ? Ea : ha; N < y; ++N) {
    var Va = Ba[N] - 0, h = ra[N] - 0;
    if (Va !== h) {
      return Va > h ? 1 : -1;
    }
  }
  return Ea > ha ? 1 : Ea === ha ? 0 : -1;
};
(function(Ua, w, N, ha, y, Ba, ra, Ea) {
  function Va(v, X, M) {
    M = Ba(v.split(X)[1]);
    return 0 <= M ? M : 0;
  }
  function h(v, X) {
    return 0 <= v.indexOf(X);
  }
  function bb(v) {
    return h(v, "Linux armv") || h(v, "Linux aarch") || h(v, "Linux i686") || h(v, "Linux x86_64");
  }
  function B(v, X) {
    for (var M in X) {
      if (M === v) {
        return !0;
      }
    }
  }
  function f(v, X) {
    var M = "", ca = -1, Oa;
    if (v = v.split(X)[1]) {
      for (; Oa = v.charCodeAt(++ca);) {
        if (48 <= Oa && 57 >= Oa || 46 === Oa) {
          M += v.charAt(ca);
        } else {
          break;
        }
      }
      for (ca = M.length; ca;) {
        if (46 === M.charCodeAt(--ca)) {
          M = M.substr(0, ca);
        } else {
          break;
        }
      }
    }
    return M;
  }
  function xa(v) {
    for (var X = arguments, M = 1, ca = X[0], Oa; M < X.length; ++M) {
      0 > Fa(ca, Oa = X[M]) && (ca = Oa);
    }
    return ca;
  }
  function Eb(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var Fa = Ua.conpare, a = ha.userAgent, U = ha.appVersion, kb = Ba(U) || 0, C = ha.platform, t = N.documentElement, Sa = t && t.style, Ca = N.documentMode, K = y.width;
  y = y.height;
  var O = w.HTMLAudioElement, lb = w.performance, mb = w.Int8Array, cb = w.ontouchstart !== Ea, Wa = f(U, "Version/") || f(a, "Version/"), Fb = w.operamini, Ga = !Fb && w.opera, Ob = Ga && (Ga.version && "function" === typeof Ga.version ? Ga.version() : xa(f(a, "Opera "), Wa, kb)), Gb = w.opr, fb = !Ga && (N.all || Ca);
  Ca = fb && (Ca ? Ca : w.XMLHttpRequest ? N.getElementsByTagName ? 7 : 4 : N.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  t = !fb && t.msContentZoomFactor;
  var nb = !t && (w.chrome || w.chromium), gb = !fb && function() {
    for (var v in Sa) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), ob = h(a, "UCWEB"), pb = ob && f(a, " U2/"), ub = ob && f(a, "; wds "), Pa = f(a.split("_").join("."), "; iPh OS "), oa = f(a, "; Adr "), db = h(U, "YJApp-ANDROID"), ya = h(C, "Android") || gb && h(U, "Android") || db;
  oa = f(C, "Android ") || f(U, "Android ") || f(a, "Android ") || oa;
  var Qa = h(C, "Linux"), vb = "MacIntel" === C && ha.standalone !== Ea, wb = gb && f(a, "Goanna/"), Ha = !wb && gb && (f(a, "rv:") || f(a.substr(a.indexOf(") Gecko/") - 11), "; ")), aa = f(a, "Firefox/"), G = f(a, "Opera/"), Hb = w.FNRBrowser, Xa = Va(a, "AppleWebKit/"), jb = f(a, "Chrome/"), Jb = f(U, "Iron/"), Ib = f(a, "OPR/"), xb = f(U, "KHTML/"), Kb = f(a.toLowerCase(), "iris");
  f(a, "FxiOS/");
  f(a, "CriOS/");
  f(a, "EdgiOS/");
  var qb = f(a, "Silk/"), eb = Va(a, "SamsungBrowser/"), yb = !eb && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    X, M = v.length; X = v[--M];) {
      if (h(a, X)) {
        return 2 > Ba(Wa) ? Wa : 0.9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (M = v.length; X = v[--M];) {
      if (h(a, X)) {
        return Wa;
      }
    }
  }(), va = nb && 534.3 >= Xa, hb = bb(C), Ya = hb && !h(a, C) && bb(a);
  cb = cb && (Xa || gb) && Ya || !oa && db;
  db = !!w.ReactNativeWebView;
  hb = hb && function() {
    for (var v in w) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ta = (Ya = w.puffinDevice) && Ya.clientInfo;
  Ta = (Ya = Ta && "iOS" === Ta.os && Ta.osVersion) && Ta.model;
  var Ia = !Ca && N.registerElement, Lb = !Ca && N.execCommand, rb = w.webkitCancelAnimationFrame, zb = Qa && Ia && "11.0.696.34" === jb, sb = w._firefoxTV_playbackStateObserverJava, Mb = Va(a, "diordnA ");
  if ("Nitro" === C) {
    var r = 1;
  } else if ("Nintendo DSi" === C) {
    r = 2;
    var q = G;
  } else if ("New Nintendo 3DS" === C || h(a, "iPhone OS 6_0") && 320 === K && 240 === y) {
    r = 4, q = f(a, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === C) {
    r = 3, q = f(a, "Version/"), Xa = 535;
  } else if ("Nintendo Swicth" === C) {
    r = 7, q = f(U, "NintendoBrowser/");
  } else if (w.wiiu) {
    r = 6;
    q = f(U, "NintendoBrowser/");
    var I = 15, z = f(U, "AppleWebKit/") || (rb ? 536 : 534);
    q || (q = rb ? 4 : 2, h(U, "Macintosh;") || h(U, "Windows NT") && h(U, "Touch"));
  } else if (Ga && Ga.wiiremote) {
    r = 5, q = f(a, "Wii; U; ; ");
  } else if (G = f(a, "PlayStation Vita ")) {
    r = 10, q = G;
  } else if (G = f(a, "(PlayStation Portable); ")) {
    r = 8;
    q = G;
    var Ab = 3.3;
  } else if (G = f(a, "PLAYSTATION 3; ") || f(a, "PLAYSTATION 3 ")) {
    r = 11, q = G, 0 > Fa("4.10", G) && (I = 26, z = G);
  } else if (h(a, "Xbox One")) {
    r = 15, q = 1;
  } else if (h(a, "Xbox")) {
    r = 14, q = 1;
  } else if (2 === kb && h(a, "Sony/COM2/")) {
    r = 17;
    q = 2;
    Ab = 3.4;
    var Za = !0;
  } else if (0 === C.indexOf("iP") || Pa || Ya || vb) {
    if (Ya) {
      switch(q = Ya, Ta.substr(0, 4)) {
        case "iPho":
          var za = 0;
          f(Ta, za);
          var ja = !0;
          break;
        case "iPad":
          za = 1;
          f(Ta, za);
          var ka = !0;
          break;
        case "iPod":
          za = 2;
          f(Ta, za);
          var ib = !0;
      }
    } else {
      Pa ? q = Pa : (q = f(U.split("_").join("."), "OS "), B("isSecureContext", w), B("enableWebGL", w), B("sameOrigin", w));
      if (!q || Hb) {
        q = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : ra.isNaN ? 9.2 : w.SharedWorker ? lb && lb.now ? 8 : 8.4 : Lb ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : mb ? 4.3 : O ? 4.1 : 3.2;
      }
      var Aa = K === 1.5 * y || 1.5 * K === y;
      0 === C.indexOf("iPhone") ? (za = 0, ja = !0) : 0 === C.indexOf("iPad") || vb ? (za = 1, ka = !0) : 0 === C.indexOf("iPod") && (za = 2, ib = !0);
    }
    I = !Ya && (ha.standalone || (ka || 12 > q) && B("webkitFullscreenEnabled", N) || 11 <= q && 13 > q && ha.mediaDevices) ? 16 : 17;
    r = 24;
    z = q;
  } else if (h(a, "Kobo")) {
    r = 18, I = 21, z = 2.2, ya = !0;
  } else if (h(a, "EBRD")) {
    r = 19, I = 21, z = 2.2;
  } else if (G = f(a, "CrOS x86_64 ") || f(a, "CrOS aarch64 ") || f(a, "CrOS i686 ") || f(a, "CrOS armv7l ")) {
    r = 28, q = G;
  } else if (w.onmoztimechange !== Ea) {
    r = 29, q = 18.1 > Ha ? "1.0.1" : 19 > Ha ? 1.1 : 27 > Ha ? 1.2 : 29 > Ha ? 1.3 : 31 > Ha ? 1.4 : 33 > Ha ? 2 : 35 > Ha ? 2.1 : 38 > Ha ? 2.2 : 45 > Ha ? 2.5 : 2.6, h(a, "Mobile") ? ja = !0 : h(a, "Tablet") ? ka = !0 : h(a, "TV");
  } else if (w.palmGetResource) {
    r = 30, q = f(a, "webOS/") || f(a, "WEBOS") || f(a, "hpwOS/"), h(a, "webOS.TV") || h(a, "/SmartTV") || (ja = !0);
  } else if (G = f(a, "Tizen ")) {
    r = 31, q = G, I = 24, z = eb, ja = !0;
  } else if (G = f(a, "Windows Phone ") || f(U, "Windows Phone OS ") || ub) {
    r = 23, q = G, ja = !0;
  } else if (t && "ARM" === C) {
    r = 23, q = 10, ja = !0;
  } else if (fb && h(U, "ZuneWP")) {
    r = 23, q = 11 === Ca ? 8.1 : 10 === Ca ? 8 : 9 === Ca ? 7.5 : 7 === Ca ? 7 : "?", ja = !0;
  } else if (h(a, "FOMA;")) {
    r = 16, ja = !0;
  } else if (h(a, "SoftBank;")) {
    r = 16, ja = !0;
  } else if (h(a, "KFMUWI")) {
    var Ja = !0;
    q = 6.3;
    var J = ka = !0;
  } else if (h(a, "KFKAWI")) {
    Ja = !0, q = 6, J = ka = !0;
  } else if (h(a, "KFSUWI") || h(a, "KFAUWI") || h(a, "KFDOWI")) {
    Ja = !0, q = 5, J = ka = !0;
  } else if (h(a, "KFGIWI")) {
    Ja = !0, q = 5, J = ka = !0;
  } else if (h(a, "KFARWI") || h(a, "KFSAWA") || h(a, "KFSAWI")) {
    Ja = !0, q = 5 <= Ba(oa) ? 5 : 4, J = ka = !0;
  } else if (h(a, "KFSOWI") || h(a, "KFTHWA") || h(a, "KFTHWI") || h(a, "KFAPWA") || h(a, "KFAPWI")) {
    Ja = !0, q = 3, J = ka = !0;
  } else if (h(a, "KFOT") || h(a, "KFTT") || h(a, "KFJWA") || h(a, "KFJWI")) {
    Ja = !0, q = 2, J = ka = !0;
  } else if (h(a, "Kindle Fire")) {
    Ja = !0, q = 1, J = ka = !0;
  } else if (G = f(a, "Kindle/")) {
    r = 20, q = G, I = 21, z = 2.2;
  } else if (sb) {
    Ja = !0, q = oa || Mb, J = !0;
  } else if (h(a, "AmazonWebAppPlatform") || h(a, "; AFT")) {
    Ja = !0, q = oa, J = !0;
  } else if (h(a, "MeeGo")) {
    r = 32;
  } else if (h(a, "Maemo")) {
    r = 33;
  } else if (0 === a.indexOf("Windows Mobile;") || Kb) {
    r = 22, Za = !0;
  } else if ("WinCE" === C) {
    r = 21, Za = !0;
  } else if (0 === C.indexOf("Win")) {
    r = "Win16" === C ? 35 : "Win32" === C ? 36 : "Win64" === C ? 37 : 0, q = f(a, "Windows NT ") || f(a, "Windows ");
  } else if (0 === C.indexOf("Mac")) {
    r = "Mac68K" === C ? 39 : "MacPowerPC" === C || "MacPPC" === C ? 38 : "MacIntel" === C ? 40 : 0;
    if (G = f(a.split("_").join("."), "Mac OS X ")) {
      q = G;
    }
    var Bb = !0;
  } else if (h(a, "BlackBerry") || h(a, "BB10")) {
    r = 34, q = Wa, ja = !0;
  } else if (h(a, "SunOS") || h(a, "Sun Solaris")) {
    r = 42;
  } else if (h(a, "FreeBSD")) {
    r = 43;
  } else if (h(a, "OpenBSD")) {
    r = 44;
  } else if (h(a, "NetBSD")) {
    r = 45;
  } else if (ya && gb) {
    h(a, "Android 4.4;") ? Aa = {min:2.3} : 4 <= Ba(oa) ? Aa = oa : Aa = {min:2.2}, q = Aa;
  } else if (ya && Ga) {
    oa ? Aa = oa : Aa = {min:1.6}, q = Aa, h(a, "Tablet") ? ka = !0 : ja = !0;
  } else if (oa) {
    q = oa, ya = !0;
  } else if (Qa && cb || db || hb) {
    var sa = !0;
    eb ? Aa = {min:4.4} : nb && !va || Gb || Ib ? Aa = {min:4} : (Aa = oa = Sa.touchAction !== Ea ? {min:5} : Ia ? 4.4 : mb ? ha.connection ? w.searchBoxJavaBridge_ || nb ? ra.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Xa ? 3 : 533 <= Xa ? O ? 2.3 : 2.2 : 530 <= Xa ? 2 : 1.5, yb && (I = 24, z = yb));
    q = Aa;
    ya = !0;
  } else {
    zb ? (q = {min:5}, sa = ya = !0) : Qa && (h(a, "Ubuntu") ? r = 46 : (G = f(a, "Mint/")) ? (r = 47, q = G) : (G = f(a, "Fedora/")) ? (r = 48, q = G) : r = h(a, "Gentoo") ? 49 : 50);
  }
  Ja || ya && sa && qb ? r = 27 : ya && (r = r || 26);
  I || (J = J || ya, Ga ? (I = J || Za || ja || ka ? 9 : 8, z = Ob) : fb ? (Aa = Va(U, "Trident/") + 4, I = Za || ja || ka || ib ? 3 : Bb && 5 <= Ca ? 7 : 2, z = Ca) : t ? (I = 23 === r ? 6 : 5, z = f(U, "Edge/")) : wb ? (I = 13, z = wb) : gb ? (I = J ? 12 : 11, z = Ha || aa) : eb ? (I = 24, z = eb) : (G = Ab || f(a, "NetFront/")) ? (I = 18, z = G) : (G = f(a, "iCab")) ? (I = 19, z = G) : (G = xa(f(a, "Opera Mini/"), f(a, "Opera Mobi/")) || Fb && Wa) ? (I = 10, z = G, r || (h(a, "iPhone") ? za = 
  0 : h(a, "iPad") ? za = 1 : h(a, "iPod") && (za = 2), za && (r = 24))) : ob ? (I = 25, z = pb) : xb ? (I = 14, z = kb) : ya && va ? (I = 21, z = oa) : nb || Gb || Ib ? (I = J ? 22 : 20, z = jb || Jb) : ya && Ia ? (I = 23, z = 5 > Ba(oa) ? oa : jb) : ya && (Wa || sa) ? (I = 21, z = oa) : jb ? (I = J ? 22 : 20, z = jb) : Xa && (I = 15, z = Xa));
  r && (Ua[2] = r, q && (Ua[3] = Eb(q)));
  I && (Ua[0] = I, z && (Ua[1] = Eb(z)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ua, w, N, ha, y, Ba, ra, Ea, Va, h, bb, B) {
  function f(k) {
    if (w[0] === k) {
      return C === C + "" ? ra(C) : C;
    }
  }
  function xa(k) {
    var D = w[3];
    if (w[2] === k) {
      return D === D + "" ? ra(D) : D;
    }
  }
  function Eb(k, D, ia) {
    k + "" === k && ("a" === k.charAt(2) && (ia = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > K ? 117 : .9 > O || 9 > t || 9 > K || Sa ? 1 : 132 : parseInt(k, 16));
    ia && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (D || 2));
  }
  var Fa = y.body, a = Fa.style, U, kb, C = w[1], t = f(2) || f(3), Sa = f(7), Ca = f(5) || f(6), K = f(8) || f(9), O = f(11) || f(12), lb = O && 0 <= w.conpare(C, "1.9.1"), mb = f(13), cb = f(15), Wa = f(16) || f(17), Fb = f(10) || f(25), Ga = f(20) || f(22), Ob = Ga || f(23) || f(21) || f(24), Gb = Ga && ra(Ba.userAgent.split("Edg/")[1]);
  Ba = ra(Ba.appVersion.split("Trident/")[1]) + 4;
  var fb = xa(35) || xa(36) || xa(37), nb = !t && !Sa && (new Ea('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), gb = (Sa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > K ? "opr70" : 8 > K ? "opr72" : 9.5 > K ? "opr" + (K | 0) : O && !lb ? 1.4 <= O ? "gck19" : 1.3 <= O ? "gck13" : 1 <= O ? "gck12" : .9 <= O ? "gck09" : .8 <= O ? "gck08" : "gck07" : "modern") + 
  ".css";
  xa(1) || xa(2) || xa(3) || xa(4) || xa(8) || xa(9) || xa(10);
  var ob, pb, ub, Pa = 8 > t || 7.2 > K ? !1 : B, oa = a.transform !== B ? "transform" : a["-o-transform"] !== B ? "-o-transform" : a["-ms-transform"] !== B ? "-ms-transform" : a.MozTransform !== B ? "-moz-transform" : a["-webkit-transform"] !== B ? "-webkit-transform" : "", db = [], ya = [], Qa = [], vb, wb, Ha, aa, G, Hb, Xa, jb, Jb, Ib;
  (function() {
    function k() {
      for (var d, p = 0, u = +new bb(); p < ea.length;) {
        u < ea[0].t ? ++p : (d = ea.splice(p, 1)[0], d.f(d.p));
      }
      c = ea.length ? Va(k, fa) : 0;
    }
    function D() {
      for (var d, p = 0; p < ba.length; ++p) {
        d = ba[p], d.f();
      }
    }
    function ia() {
      Q && (Q = clearInterval(Q));
    }
    function la() {
      c && (c = h(c));
    }
    Hb = function(d) {
      ba.length || (Q = setInterval(D, pa));
      ba.push({f:d, l:++ta});
      return ta;
    };
    Xa = function() {
      Q && (ia(), Q = setInterval(D, pa));
    };
    jb = ia;
    var ba = [], pa = 500, ta = 0, Q;
    if (5 > t || Sa) {
      N._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    aa = function(d, p, u) {
      ea.length || (c = Va(k, fa));
      ea.push({f:d, p:p, l:++b, t:+new bb() + (fa < u ? u : fa)});
      return b;
    };
    G = function(d) {
      for (var p = ea.length, u; u = ea[--p];) {
        if (u.l === d) {
          ea.splice(p, 1);
          break;
        }
      }
      return 0;
    };
    Jb = function() {
      c && (la(), c = Va(k, fa));
    };
    Ib = la;
    var ea = [], fa = 16, b = 0, c;
    if (5 > t || Sa) {
      N._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var xb, Kb, qb, eb, yb, va, hb, Ya, Ta, Ia, Lb, rb, zb, sb, Mb, r, q, I, z, Ab;
  (function() {
    function k(b, c, d) {
      var p = ["<", b], u = 1, F, Y;
      if (c) {
        for (F in c) {
          var E = c[F];
          if (null != E && "" !== E) {
            if ("style" === F) {
              p[++u] = ' style="';
              for (Y in E) {
                for (var Ka = ++u, ma, La = [], Ma = Y.split(""), qa = Ma.length; qa;) {
                  ma = Ma[--qa], "A" <= ma && "Z" >= ma && (ma = "-" + ma.toLowerCase()), La[qa] = ma;
                }
                p[Ka] = La.join("") + ":" + E[Y] + ";";
              }
              p[++u] = '"';
            } else {
              "className" === F && (F = "class"), p[++u] = " " + F + '="' + E + '"';
            }
          }
        }
      }
      p[++u] = ">";
      null != d && (Q && "font" !== b ? p[++u] = "<FONT>" + d + "</FONT>" : p[++u] = d);
      p[++u] = "</" + b + ">";
      return p.join("");
    }
    function D(b) {
      b = "*" === b && 6 > t ? "*" !== b ? y.all.tags(b.toUpperCase()) : y.all : y.getElementsByTagName(b);
      var c = [], d = 0, p;
      for (p = b.length; d < p; ++d) {
        c[d] = b[d];
      }
      return c;
    }
    function ia(b) {
      return Q ? b.parentElement : b.parentNode;
    }
    function la(b, c, d, p, u, F) {
      if (Q) {
        var Y = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var E = eb(2 > b ? qb(c) : c);
        E = 2 > b ? E.indexOf(c) + b : E.length;
        c.insertAdjacentHTML(Y, k(d, p, u));
        c = eb(c)[E];
        null != u && ("font" === d ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (ea) {
        c = y.createElement(k(d, p));
      } else {
        c = F ? y.createElementNS("http://www.w3.org/2000/svg", d) : y.createElement(d);
        if (p) {
          for (Y in p) {
            if ((d = p[Y]) || 0 === d) {
              switch(Y) {
                case "class":
                case "className":
                  Mb(c, d);
                  break;
                case "style":
                  b = c.style;
                  for (E in d) {
                    b[E] = d[E];
                  }
                  break;
                default:
                  zb(c, Y, d);
              }
            }
          }
        }
        fa || null != u && ba(c, u);
      }
      return c;
    }
    function ba(b, c) {
      if (Q) {
        return la(2, b, "font", B, c);
      }
      var d = y.createTextNode("" + c);
      b.appendChild(d);
      return d;
    }
    function pa(b, c) {
      9 > t ? b.className = c : b.setAttribute("class", c);
    }
    function ta(b, c) {
      return -1 !== (" " + b.className + " ").indexOf(" " + c + " ");
    }
    var Q = 5 > t;
    U = D("html")[0];
    kb = D("head")[0];
    xb = D;
    Kb = function(b) {
      var c = [], d = 0, p, u = -1;
      if (9 > t || !y.getElementsByClassName) {
        var F = 6 > t ? y.all : y.getElementsByTagName("*");
      } else {
        var Y = !0;
        F = y.getElementsByClassName(b);
      }
      for (p = F.length; d < p; ++d) {
        var E = F[d];
        if (Y || (Q || 1 === E.nodeType) && ta(E, b)) {
          c[++u] = E;
        }
      }
      return c;
    };
    qb = ia;
    eb = function(b) {
      b = Q ? b.children : b.childNodes;
      for (var c = [], d = b.length; d;) {
        c[--d] = b[d];
      }
      return c;
    };
    yb = function(b) {
      var c = !(7.03 < K && 7.2 > K) && b.children;
      b = c ? c : b.childNodes;
      for (var d = [], p = b.length, u = -1, F; p;) {
        if (F = b[--p], c || 1 === F.nodeType) {
          Q && "FONT" === F.tagName || (d[++u] = F);
        }
      }
      return d;
    };
    va = function(b, c, d, p, u) {
      c = la(2, b, c, d, p, u);
      Q || (b.appendChild(c), fa && null != p && ba(c, p));
      return c;
    };
    hb = function(b, c, d, p, u) {
      c = la(0, b, c, d, p, u);
      Q || (ia(b).insertBefore(c, b), fa && null != p && ba(c, p));
      return c;
    };
    Ya = ba;
    Ta = function(b, c) {
      if (Q) {
        return la(0, b, "font", B, c);
      }
      var d = y.createTextNode("" + c);
      qb(b).insertBefore(d, b);
      return d;
    };
    Ia = function(b) {
      Q ? b.outerHTML = "" : qb(b).removeChild(b);
    };
    var ea = 9 > t, fa = ea;
    Lb = function(b) {
      return b.tagName.toUpperCase();
    };
    rb = function(b, c) {
      return b.getAttribute(c) || "";
    };
    zb = function(b, c, d) {
      b.setAttribute(c, d);
    };
    sb = function(b, c) {
      b.removeAttribute(c);
    };
    Mb = pa;
    r = ta;
    q = function(b, c) {
      var d;
      if (!ta(b, c)) {
        if (d = b.className) {
          c = " " + c;
        }
        pa(b, d + c);
      }
    };
    I = function(b, c) {
      if (ta(b, c)) {
        var d = b.className.split(" ");
        d.splice(d.indexOf(c), 1);
        pa(b, d.join(" "));
      }
    };
    z = function(b, c, d) {
      b.style[c] = d;
    };
    Ab = function(b, c) {
      var d, p = -1, u;
      if (5.5 > t) {
        if (d = b.style.cssText) {
          for (d = d.toLowerCase().split(";"); u = d[++p];) {
            b.style[u.split(":")[0]] = "";
          }
        }
        if (c) {
          for (p = -1, d = c.split(";"); u = d[++p];) {
            var F = u.split(":")[0];
            b.style[F] = u.substr(F.length + 1);
          }
        }
      } else if (7.1 > K) {
        if (b.setAttribute("style", ""), c) {
          for (d = c.split(";"); u = d[++p];) {
            u = u.split(":"), b.style[u[0]] = u[1];
          }
        }
      } else {
        9 > K || 1 > O ? c ? b.setAttribute("style", c) : b.removeAttribute("style") : b.style.cssText = c;
      }
    };
  })();
  var Za, za, ja, ka, ib, Aa, Ja, J, Bb;
  (function() {
    function k() {
      return ma ? Ma ? 2 : La ? 3 : 1 : 0;
    }
    function D(e) {
      za(N, "load", D);
      D = B;
      la(db, e, !0);
      ja = db = B;
    }
    function ia(e, l) {
      ib(function() {
        var m = ea(e);
        l(m);
        m.addListener(l);
        return !0;
      });
    }
    function la(e, l, m) {
      for (var g = 0; g < e.length; ++g) {
        !0 === e[g](l) && (e.splice(g, 1), --g);
      }
      m && (e.length = 0);
    }
    function ba(e, l, m) {
      db || b.length || aa(pa);
      b.push(e, l, m);
    }
    function pa() {
      var e = b, l;
      for (b = []; l = e.shift();) {
        la(l, e.shift(), e.shift());
      }
    }
    function ta(e) {
      var l = e || event;
      e = c[l.type];
      var m = -1, g, n;
      t ? (l.preventDefault = function() {
        l.returnValue = !1;
      }, l.stopPropagation = function() {
        l.cancelBubble = !0;
      }) : p && (l.j = l.stopPropagation, l.stopPropagation = function() {
        n = !0;
      });
      for (; g = e[++m];) {
        g.i === this ? (this.g = g.h, this.g(l), this.g = ha, this.g = B) : 7.2 > K && this === y && g.i === N && (N.g = g.h, N.g(l), delete N.g);
      }
      if (t) {
        return l.preventDefault = l.stopPropagation = B, l.returnValue;
      }
      p && (l.defaultPrevented && "click" === l.type && "A" === l.target.tagName && (F = !0), n && !F && l.j(), l.j = l.stopPropagation = B);
    }
    function Q() {
      var e = 9 === fa.offsetWidth;
      Ja !== e && ba(ya, Ja = e);
    }
    var ea = N.matchMedia, fa, b = [];
    db.push(function() {
      ia = B;
      fa = va(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ja(function() {
        b.length && aa(pa);
      });
    });
    Za = function(e, l, m, g) {
      if (u) {
        e.addEventListener(l, m, g ? nb ? g : g.capture : !1);
      } else {
        var n = {i:e, h:m};
        g = c[l];
        var x = "on" + l, P, H;
        if (g) {
          for (P = g.length; H = g[--P];) {
            if (H.i === e && H.h === m) {
              return;
            }
          }
          c[l].push(n);
        } else {
          c[l] = g = [n], d || (l = e[x], "function" === typeof l && l !== ta && g.unshift({i:e, h:l}));
        }
        d ? e.attachEvent(x, ta) : e[x] = ta;
      }
    };
    za = function(e, l, m, g) {
      if (u) {
        e.removeEventListener(l, m, g ? nb ? g : g.capture : !1);
      } else {
        g = c[l];
        l = "on" + l;
        var n, x, P;
        if (g) {
          for (n = g.length; x = g[--n];) {
            x.i === e && (x.h === m ? g.splice(n, 1) : P = !0);
          }
          P || (d ? e.detachEvent(l, ta) : (e[l] = ha, e[l] = null));
        }
      }
    };
    var c = {}, d = !1, p = 525.13 > cb, u = !p && !Sa && N.addEventListener, F;
    p && U.addEventListener("click", function(e) {
      if (F) {
        return F = !1, e.preventDefault(), !1;
      }
    });
    ja = function(e) {
      db.push(e);
    };
    ka = function(e) {
      Y && Y.push(e);
    };
    var Y = [];
    if (419.3 >= cb) {
      var E = function() {
        if (E) {
          var e = y.readyState;
          "loaded" === e || "complete" === e ? (E = B, D()) : aa(E);
        }
      };
      aa(E);
    } else {
      Za(N, "load", D);
    }
    t || .9 <= O && 1.8 > O ? Za(N, "unload", function(e) {
      la(Y, e, !0);
    }) : Y = B;
    ib = function(e) {
      ya.push(e);
    };
    ja(function() {
      Q();
      Hb(Q);
    });
    Aa = function(e) {
      Qa && Qa.push(e);
    };
    var Ka = 60 > O || mb, ma, La, Ma;
    if (89 <= O || 89 <= Ga || fb && 79 <= Gb || ea && (ea("(forced-colors:none)").matches || ea("(forced-colors:active)").matches)) {
      Bb = !0, ia("(forced-colors:active)", function(e) {
        ma = e.matches;
        J = k();
        ba(Qa, J);
      });
    } else if (10 <= t || Ca || fb && Gb) {
      Bb = !0, ia("(-ms-high-contrast:black-on-white)", function(e) {
        ma = La = e.matches;
        J !== k() && (J = k(), ba(Qa, J));
      }), ia("(-ms-high-contrast:white-on-black)", function(e) {
        ma = Ma = e.matches;
        J !== k() && (J = k(), ba(Qa, J));
      }), ia("(-ms-high-contrast:active)", function(e) {
        ma = e.matches;
        J !== k() && (J = k(), ba(Qa, J));
      });
    } else if (fb && (t || O && 0 <= w.conpare(C, "1.8.1") || mb)) {
      var qa = function() {
        function e(g, n) {
          if (n && "transparent" === g) {
            return 382.5;
          }
          if ("#" === g.charAt(0)) {
            return parseInt("0x" + g.substr(1, 2), 16) + parseInt("0x" + g.substr(3, 2), 16) + parseInt("0x" + g.substr(5, 2), 16);
          }
          var x = g.split("(")[1].split(",");
          return ra(x[0]) + ra(x[1]) + ra(x[2]);
        }
        var l = y.defaultView;
        var m = l ? l.getComputedStyle(fa, null) : fa.currentStyle;
        l = (m && m.color || "").split(" ").join("");
        m = (m && m.backgroundColor || "").split(" ").join("");
        l && (ma = "#123456" !== l && "rgb(18,52,86)" !== l, La = e(l) < e(m, !0), Ma = e(l) > e(m, !0), J !== k() && (J = k(), ba(Qa, J, Ka)));
      };
      ib(function(e) {
        if (e) {
          return z(fa, "color", "#123456"), z(fa, "backgroundColor", "#123456"), Ka ? (qa(), Qa = B) : Hb(qa), qa = B, !0;
        }
      });
    } else {
      Qa = k = B;
    }
  })();
  (function() {
    function k(n) {
      u(n);
      m && !n && Ia(m);
      u = F = Y = E = Ka = ma = qa = e = l = g = m = B;
    }
    function D(n) {
      y.fonts.load('1.6em "' + n + '"').then(function() {
        var x;
        (x = ba(F)) ? aa(k, x) : la(!0);
      }, function() {
        Pa !== B ? pa(Pa) : vb(pa);
      });
    }
    function ia(n) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (Ma = new bb() - 0, !1) : n < new bb() - Ma;
    }
    function la(n) {
      var x;
      n && (Ma = new bb() - 0);
      (x = ba(F)) ? k(x) : ia(La) ? qa || fa ? k(0) : Pa !== B ? pa(Pa) : vb(pa) : aa(la);
    }
    function ba(n) {
      var x = 0, P = -1, H = 0;
      if (!g) {
        var R = -1;
        var S;
        e = va(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, d);
        for (g = {}; S = p[++R];) {
          z(e, "fontFamily", S), g[S] = e.offsetWidth;
        }
      }
      for (5 > t ? e || (e = va(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, d)) : Fa.appendChild(e); R = p[++P];) {
        if (z(e, "fontFamily", '"' + n + '",' + R), e.offsetWidth !== g[R]) {
          x = 1;
          break;
        }
      }
      !t && x && Ka && (e.innerHTML = Ka, n = e.offsetWidth, e.innerHTML = ma, H = n === e.offsetWidth ? 1 : 0, e.innerHTML = d);
      Ia(e);
      5 > t && (e = B);
      return x + H;
    }
    function pa(n) {
      n ? (qa = !0, ta(!0)) : k(0);
    }
    function ta(n) {
      var x;
      if (Y) {
        for (x in n && (Ma = new bb() - 0), Y) {
          ba(x) ? (l = va(Fa, "div", {"aria-hidden":"true", className:E, id:E}), m = va(kb, "link", {type:"text/css", rel:"stylesheet", href:Y[x]}), aa(Q, !0)) : ia(c) ? (delete Y[x], aa(ta, !0)) : aa(ta);
          return;
        }
      }
      k(0);
    }
    function Q(n) {
      n && (Ma = new bb() - 0);
      1 < l.offsetWidth ? (Ia(l), La = c, aa(la, !0)) : ia(La) ? 528 > cb ? (Ia(l), La = c, aa(la, !0)) : (Ia(l), k(0)) : aa(Q);
    }
    ya.splice(0, 0, function() {
      if (Ja) {
        ub = 8 <= t || Ca || 9.5 <= K || lb || mb || 522 <= cb || 3 <= Wa || Fb || Ob ? 3 : 7.2 <= K ? 2 : 6 <= K || O ? 1 : 0;
        if (!ub && !t && !Sa) {
          var n = va(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          ub = 6 <= n.offsetWidth ? 2 : 0;
          Ia(n);
        }
        return !0;
      }
    });
    vb = !1 === Pa ? function(n) {
      aa(n, Pa);
    } : function(n) {
      function x(R) {
        H = G(H);
        Pa = R;
        P.onload = P.onerror = ha;
        aa(n, R);
      }
      if (Pa !== B) {
        aa(n, Pa);
      } else if (8 > t) {
        aa(n, !1);
      } else {
        var P = new Image(), H = aa(function() {
          H && x(!1);
        });
        P.onerror = function() {
          x(!1);
        };
        P.onload = function() {
          x(1 === P.width * P.height);
        };
        P.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && ja(function() {
      var n = va(Fa, "div");
      Ab(n, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ob = 1 < n.offsetHeight;
      Ab(n, "");
      Ia(n);
    });
    wb = function(n, x) {
      function P() {
        if (R || !S || H.complete) {
          var L = !!H.width;
          pb = pb || L;
          aa(n, L);
          H.onerror = H.onload = ha;
          H = n = B;
        } else {
          --S, aa(P);
        }
      }
      var H = new Image(), R, S = 99;
      H.onerror = function() {
        R = !0;
      };
      H.onload = function() {
        R = !0;
      };
      H.src = x;
      aa(P);
    };
    Ha = function(n, x, P, H, R, S, L) {
      u = n;
      F = x;
      Y = P;
      E = H;
      Ka = R;
      ma = S;
      La = L || b;
      ea ? aa(k, 0) : !y.fonts || 603 > cb ? la(!0) : D(F);
    };
    var ea = 525 > cb || 10 > K || O && !lb || 2.2 > f(21) || f(25) || 10 > f(3) || xa(32) || xa(30) || xa(3), fa = 9 > t || 2 > Ga || 12 > K, b = 5E3, c = 100, d = "mmmmmmmmmmlli", p = ["sans-serif", "serif"], u, F, Y, E, Ka, ma, La, Ma, qa, e, l, m, g;
  })();
  var sa = String.fromCharCode, v = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", sa(960), ")", "(", sa(234), sa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", sa(9824), "\u2190", sa(9829), sa(9830), sa(9827), sa(956), "\u03a9", "\u2193", "\u2192", "%", sa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", sa(9619)];
  a = (9 === t || O && 0 <= w.conpare(C, "1.8.1") || mb) && !Bb;
  var X = [], M, ca, Oa = 7.2 > K ? function() {
    M = !M;
    for (var k = -1, D; D = X[++k];) {
      -1 !== D.className.indexOf("pbAlp") ? z(D, "display", M ? "" : "none") : (q(D, M ? "pbChrCS" : "pbChr00"), I(D, M ? "pbChr00" : "pbChrCS"));
    }
  } : a ? function() {
    M = !M;
    for (var k = -1, D; D = X[++k];) {
      z(D, "opacity", M ? 1 : 0);
    }
  } : B;
  var Pb = Ua.startBlinkingIfCursor = function(k) {
    Oa ? r(k, "pbChrCS") && (ca || !K && !J || (ca = setInterval(Oa, 400)), -1 === X.indexOf(k) && X.push(k)) : X = B;
  };
  Ua.stopBlinkingIfCursor = function(k) {
    Oa && (k = X.indexOf(k), 0 <= k && (X.splice(k, 1), !X.length && ca && (clearInterval(ca), ca = 0)));
  };
  a && Aa(function(k) {
    k ? ca || (ca = setInterval(Oa, 400)) : ca && (clearInterval(ca), ca = 0);
  });
  Oa && ka(function() {
    ca && clearInterval(ca);
  });
  Bb || Aa(function(k) {
    k ? (zb(U, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (oa || 9 === t || 5.5 <= t && 9 > t && ob) && q(U, "jsCanRotate")) : (sb(U, "forced-colors"), I(U, "jsCanRotate"));
  });
  (function() {
    function k(m) {
      (Ka = m) ? ba() : pb ? la(!0) : pb !== B ? ba() : wb(la, ma);
    }
    function D() {
      D = B;
      Ha(k, "PB-100", {"PB-100_canTTF":$a + "pbFont/ttf.css", "PB-100_canWOFF":$a + "pbFont/woff.css", "PB-100_canEOT":$a + "pbFont/eot.css", "PB-100_canSVG":$a + "pbFont/svg.css"}, "pbFont-testCssReady", d, "i", 5E3);
    }
    function ia(m) {
      this.focus();
      m.preventDefault();
      m.stopPropagation();
    }
    function la(m) {
      m && q(Fa, "pbList-noWebFont");
      ba();
    }
    function ba() {
      for (k = Ha = B; E.length;) {
        pa(E.shift(), E.shift());
      }
    }
    function pa(m, g) {
      function n(L) {
        L = eb(L);
        for (var A = -1, Z; Z = L[++A];) {
          switch(Z.nodeType) {
            case 1:
              n(Z);
              break;
            case 3:
              Z.data && P(Z.data) && H.push(Z);
          }
        }
      }
      function x(L) {
        var A = L.children, Z = 0, ab = A.length;
        if (ab) {
          for (; Z < ab; ++Z) {
            x(A[Z]);
          }
        } else {
          (A = L.innerText) && P(A) && H.push(L);
        }
      }
      function P(L) {
        return L.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var H = [], R;
      if (k) {
        -1 === E.indexOf(m) && (E.push(m, g), La && D && D());
      } else {
        var S = E.indexOf(m);
        0 <= S && E.splice(S, 2);
        for (5 > t ? x(m) : n(m); R = H.shift();) {
          S = 5 > t ? R.innerText : R.data, 2 !== Ka && (S = S.split(d).join(b)), g ? 5 > t ? R.innerText = S : R.data = S : ta(S.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(c).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fa).split("&amp;").join("&"), R);
        }
      }
    }
    function ta(m, g) {
      function n(na, T) {
        for (var Da = ""; T;) {
          T & 1 && (Da += na), T >>= 1, na += na;
        }
        return Da;
      }
      function x(na, T, Da) {
        for (var Cb, Sb = -1, Qb, Rb; Cb = T[++Sb];) {
          for (; 0 <= (Qb = na.indexOf(Cb));) {
            Rb = Cb.length, na = na.substr(0, Qb) + n(Da, Rb) + na.substr(Qb + Rb);
          }
        }
        return na;
      }
      function P(na) {
        var T = ra(na), Da = "" + T;
        return 0 < T && T === T | 0 && (T = na.indexOf(Da) + Da.length, T <= na.length) ? T : 0;
      }
      var H = " area line str cmd fnc syb".split(" "), R = 5 > t || 1 === g.nodeType, S = [], L = "", A, Z = -1, ab, tb, Na;
      if (R) {
        if (e) {
          var Nb = g.style.visibility;
          z(g, "visibility", "hidden");
        }
        g.innerHTML = "";
      }
      if (l) {
        var Db = g;
        g = y.createDocumentFragment();
      }
      if (function(na) {
        var T = na.indexOf("P");
        if (-1 === T) {
          return !1;
        }
        T = ra(na.charAt(T + 1));
        return 0 <= T && 9 >= T;
      }(m)) {
        L = n("+", m.length);
      } else {
        0 <= (A = P(m)) && (L = n("|", A), Z = A, --Z);
        for (; A = m.charAt(++Z);) {
          A === fa || ab ? (L += "~", A === fa && (ab = !ab)) : L += A;
        }
        L = x(L, Y, "^");
        L = x(L, u, "{");
        L = x(L, F, "}");
      }
      Z = 0;
      for (ab = m.length; Z < ab; ++Z) {
        A = m.charAt(Z);
        var V = A === p;
        var da = " " === A;
        A = V ? " " : A;
        var W = L.charAt(Z);
        var Ra = (tb = wa) && V;
        var wa = "|" === W;
        W = H["+|~{}^".indexOf(W) + 1];
        "\n" !== A ? (Ka || !pb ? (2 === Ka && m.substr(Z, 2) === d && (A = d, ++Z), W = da && "str" === W ? "pbList-strsp" : V ? "" : !da && W ? "pbList-" + W : "") : (V = v.indexOf(A), V = -1 === V ? "" : v.indexOf(A).toString(16).toUpperCase(), V = (V = 1 === V.length ? "0" + V : V) ? "pbChr" + V : "", W = da && "str" === W ? "pbList-strsp" : da || !V ? "" : W ? (V ? V + " " : "") + "pbList-" + W : V), V = B, Ra ? (A = 6 <= t && 8 > t ? " " : p, W = "") : wa && (O && !lb || 9.5 > K) ? (wa && !tb && 
        (Na = 4 - (ra(m.substr(Z)) + "").length), 7.5 > K ? V = qa ? "position:relative;top:-4px;left:" + 12 * Na + "px" : {position:"relative", top:"-4px", left:12 * Na + "px"} : V = qa ? "position:relative;left:" + 12 * Na + "px" : {position:"relative", left:12 * Na + "px"}) : da && 7.5 > K && (W = "pbList-strsp"), qa ? S.push("<font" + (W ? ' class="' + W + '"' : "") + (V ? ' style="' + V + '"' : "") + ">" + A + "</font>") : R || l ? va(g, "font", {"class":W, style:V}, A) : hb(g, "font", {"class":W, 
        style:V}, A)) : (tb = wa = !1, qa ? S.push(A) : R || l ? Ya(g, A) : Ta(g, A));
      }
      if (R) {
        qa ? g.innerHTML = S.join("") : l && Db.appendChild(g), e && z(g, "visibility", Nb);
      } else {
        if (qa) {
          H = y.createElement("font");
          for (H.innerHTML = S.join(""); S = H.firstChild;) {
            g.parentNode.insertBefore(S, g);
          }
          Ia(g);
        } else {
          l ? Db.parentNode.replaceChild(g, Db) : Ia(g);
        }
      }
    }
    ib(function(m) {
      if (m) {
        m = Kb("pbChrCS");
        for (var g = 0, n = m.length; g < n; ++g) {
          Pb(m[g]);
        }
        return !0;
      }
    });
    var Q = [], ea = O && 0 > w.conpare(C, "0.9.9");
    ib(function(m) {
      function g(da) {
        var W = rb(da, "pbTip");
        if (W) {
          var Ra = W.charAt(0);
          var wa = "_" === Ra;
          W = (wa ? W.charAt(2) : Ra).toUpperCase().charCodeAt(0) - 65;
          S ? va(da, "div", {style:{left:7 * W + 3 + "px"}}) : (Ra = rb(da, "title"), sb(da, "pbTip"), sb(da, "title"), wa = va(da, "div", {className:"pbTip" + (wa ? "Btm" : ""), style:{width:Ra.length + x + "em", left:7 * W - (ea ? 0 : 5) + "px"}}, Ra), wa = va(wa, "div"), .9 <= O && ea && z(wa, "left", "2px"));
        }
        R && 0 <= da.className.indexOf("pbColor") && va(da, "u");
      }
      function n(da, W) {
        var Ra = rb(da, "pbGhst"), wa = da.className, na = wa.split("pbCsr")[1] || "", T = wa.split("pbAlp")[1] || "";
        if ("CS" === Ra) {
          var Da = "_";
        } else {
          Da = Ra, 3 === Da.length && (Da = Da.substr(0, 2)), Da = v[parseInt(Da, 16)] || "~";
        }
        var Cb;
        na = na.split(" ")[0];
        if (T = ra(T.split(" ")[0])) {
          P && (wa = wa.split("pbChr")[1].split(" ")[0], z(da, "backgroundPosition", Eb(wa, 2, Nb) + "px " + -24 * (10 - T) + "px")), !W && H && hb(da, "a").appendChild(da);
        }
        Ra && (T = 10 - T, P && (Cb = {backgroundPosition:Eb(Ra, 2, Nb) + "px " + -24 * (10 - T) + "px"}), sb(da, "pbGhst"), Z = hb(da, "b", {className:"pbChr" + Ra + " pbCsr" + na + " pbAlp" + T, style:Cb}, Da), Pb(Z));
        Pb(da);
      }
      if (m) {
        var x = 6 > t ? 2 : 0, P = 7.2 > K || .9 > O || Sa, H = 1.1 === O, R = 1.4 > O;
        m = xb("SAMP");
        var S = 8 === t, L = ub, A, Z, ab, tb, Na;
        ob && q(Fa, "pbLCD-AX");
        if (m.length) {
          for (ab = -1; A = m[++ab];) {
            if (r(qb(A), "pbLCD")) {
              var Nb = r(A, "PB-120") || r(A, "FX-795P");
              var Db = yb(A);
              for (A = Db.length; Na = Db[--A];) {
                switch(Lb(Na)) {
                  case "A":
                    (2 > L || S) && g(Na);
                    if (2 > L) {
                      var V = yb(Na);
                      for (tb = V.length; tb;) {
                        n(V[--tb], !0);
                      }
                    }
                    Fb ? zb(Na, "href", "javascript:void(0)") : (Za(Na, "click", ia), Q.push(Na));
                    break;
                  case "B":
                    2 > L && n(Na, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ka(function() {
      for (var m; m = Q.shift();) {
        za(m, "click", ia);
      }
    });
    6 === t && (new Ea("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
    var fa = v[7], b = v[30], c = v[113], d = sa(8337) + sa(8331), p = sa(160);
    sa(8194);
    var u = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), F = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Y = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + b + v[31]).split(""), E = [], Ka, ma, La;
    if (.9 <= O && 0 >= w.conpare(C, "0.9.1")) {
      q(U, "pbLCD-gecko09To091");
      var Ma = !0;
    }
    ib(function(m) {
      if (m) {
        ma = $a + "pbFont/x3mask" + (Ma ? ".gecko0.9.1.gif" : ".png");
        m = xb("*");
        for (var g = -1, n; n = m[++g];) {
          r(n, "pbList") ? pa(n) : r(n, "pbFont") && pa(n, !0);
        }
        E.length && D();
        return !0;
      }
    });
    var qa = !1, e = 8 > K, l = !qa && !e && !(6 > t) && y.createDocumentFragment && !!Fa.replaceChild;
    Ua.prettify = pa;
  })();
  a = y.scripts || xb("script");
  var $a = a[a.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  6.1 > Wa && Za(N, "scroll", Xa);
  ka(jb);
  6.1 > Wa && Za(N, "scroll", Jb);
  ka(Ib);
  10 > t && (11 !== Ba || 5 !== t) || (9 > K || 1 > O || !Sa && !N.addEventListener ? y.write('<link href="' + $a + gb + '" rel="stylesheet"' + (8 > K ? "" : ' media="screen,handheld,projection,print"') + ">") : ja(function() {
    va(kb, "link", {href:$a + "" + gb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

