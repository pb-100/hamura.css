/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var q;
ua = [];
ua.conpare = function(Xa, B) {
  var v = 0, ha, I, Pa = (Xa + "").split("."), eb = (B + "").split("."), Na = Pa.length;
  for (ha = eb.length; "0" === Pa[Na - 1];) {
    --Na;
  }
  for (; "0" === eb[ha - 1];) {
    --ha;
  }
  for (I = Na < ha ? Na : ha; v < I; ++v) {
    var Aa = Pa[v] - 0, h = eb[v] - 0;
    if (Aa !== h) {
      return Aa > h ? 1 : -1;
    }
  }
  return Na > ha ? 1 : Na === ha ? 0 : -1;
};
(function(Xa, B, v, ha, I, Pa, eb, Na) {
  function Aa(E, la) {
    var ma = Pa(E.split(la)[1]);
    return 0 <= ma ? ma : 0;
  }
  function h(E, la) {
    return 0 <= E.indexOf(la);
  }
  function Ob(E) {
    return h(E, "Linux armv") || h(E, "Linux aarch") || h(E, "Linux i686") || h(E, "Linux x86_64");
  }
  function fb(E, la) {
    for (var ma in la) {
      if (ma === E) {
        return !0;
      }
    }
  }
  function p(E, la) {
    var ma = "", oa = -1, ab;
    if (E = E.split(la)[1]) {
      for (; ab = E.charCodeAt(++oa);) {
        if (48 <= ab && 57 >= ab || 46 === ab) {
          ma += E.charAt(oa);
        } else {
          break;
        }
      }
      for (oa = ma.length; oa;) {
        if (46 === ma.charCodeAt(--oa)) {
          ma = ma.substr(0, oa);
        } else {
          break;
        }
      }
    }
    return ma;
  }
  function J(E) {
    for (var la = arguments, ma = 1, oa = la[0], ab; ma < la.length; ++ma) {
      0 > va(oa, ab = la[ma]) && (oa = ab);
    }
    return oa;
  }
  function V(E) {
    return E === E + "" ? E : E === E - 0 ? "" + E : E.min && E.max ? E.min + "~" + E.max : E.min ? E.min + "~" : "~" + E.max;
  }
  var va = Xa.conpare, c = ha.userAgent, R = ha.appVersion, gb = Pa(R) || 0, H = ha.platform, Ya = v.documentElement, Ia = Ya && Ya.style, m = v.documentMode, Qa = I.width, bb = I.height;
  I = B.HTMLAudioElement;
  var C = B.performance, W = B.Int8Array, hb = B.ontouchstart !== Na, Ra = p(R, "Version/") || p(c, "Version/"), Fa = B.operamini, ja = !Fa && B.opera, Eb = ja && ("function" === typeof ja.version ? ja.version() : J(p(c, "Opera "), Ra, gb)), Da = B.opr, rb = !ja && (v.all || m);
  m = rb && (m ? m : B.XMLHttpRequest ? v.getElementsByTagName ? 7 : 4 : v.compatMode ? 6 : (0).toFixed ? 5.5 : B.attachEvent ? 5 : 4);
  Ya = !rb && Ya.msContentZoomFactor;
  var Oa = !Ya && (B.chrome || B.chromium), ib = !rb && function() {
    for (var E in Ia) {
      if (0 === E.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Fb = h(c, "UCWEB"), Pb = Fb && p(c, " U2/"), Wb = Fb && p(c, "; wds "), Za = p(c.split("_").join("."), "; iPh OS "), wa = p(c, "; Adr "), mb = h(R, "YJApp-ANDROID"), Ja = h(H, "Android") || ib && h(R, "Android") || mb;
  wa = p(H, "Android ") || p(R, "Android ") || p(c, "Android ") || wa;
  var sb = h(H, "Linux"), nb = "MacIntel" === H && ha.standalone !== Na, jb = ib && p(c, "Goanna/"), xa = !jb && ib && (p(c, "rv:") || p(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Xb = p(c, "Firefox/");
  p(c, "Opera/");
  var ob = B.FNRBrowser, Ua = Aa(c, "AppleWebKit/"), Ka = p(c, "Chrome/"), Gb = p(R, "Iron/"), Hb = p(c, "OPR/"), Ib = p(R, "KHTML/"), Qb = p(c.toLowerCase(), "iris");
  p(c, "FxiOS/");
  p(c, "CriOS/");
  p(c, "EdgiOS/");
  var Jb = p(c, "Silk/"), T = Aa(c, "SamsungBrowser/"), xb = !T && function() {
    for (var E = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    la, ma = E.length; la = E[--ma];) {
      if (h(c, la)) {
        return 2 > Pa(Ra) ? Ra : 0.9;
      }
    }
    E = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ma = E.length; la = E[--ma];) {
      if (h(c, la)) {
        return Ra;
      }
    }
  }(), yb = Oa && 534.3 >= Ua, kb = Ob(H), Sa = kb && !h(c, H) && Ob(c);
  hb = hb && (Ua || ib) && Sa || !wa && mb;
  mb = !!B.ReactNativeWebView;
  kb = kb && function() {
    for (var E in B) {
      if (0 === E.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var $a = (Sa = B.puffinDevice) && Sa.clientInfo, tb = (Sa = $a && "iOS" === $a.os && $a.osVersion) && $a.model;
  $a = !m && v.registerElement;
  var Rb = !m && v.execCommand, Kb = B.webkitCancelAnimationFrame, cb = sb && $a && "11.0.696.34" === Ka, Lb = B._firefoxTV_playbackStateObserverJava, ub = Aa(c, "diordnA ");
  if ("Nitro" === H) {
    var t = 1, n = 8.5, S = 9, X = n;
  } else if ("Nintendo DSi" === H) {
    t = 2, n = Eb, S = 9, X = n;
  } else if ("New Nintendo 3DS" === H || h(c, "iPhone OS 6_0") && 320 === Qa && 240 === bb) {
    t = 4, n = p(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === H) {
    t = 3, n = Ra, Ua = 535;
  } else if (!H && h(R, "Nintendo Switch;")) {
    t = 7, n = p(R, "NintendoBrowser/");
  } else if (B.wiiu) {
    t = 6, n = p(R, "NintendoBrowser/"), S = 16, X = p(R, "AppleWebKit/") || (Kb ? 536 : 534), n || (n = Kb ? 4 : 2, h(R, "Macintosh;") || h(R, "Windows NT") && h(R, "Touch"));
  } else if (ja && ja.wiiremote) {
    t = 5, n = p(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === H) {
    t = 9, n = p(R, H + " ");
  } else if ("PSP" === H) {
    t = 8;
    n = p(c, "(PlayStation Portable); ");
    var Ba = 3.2;
  } else if ("PlayStation 5" === H) {
    t = 12, n = p(R, H + "/");
  } else if ("PlayStation 4" === H) {
    t = 11, n = p(R, H + "/");
  } else if ("PlayStation 3" === H) {
    t = 10, n = p(c, "PLAYSTATION 3; ") || p(c, "PLAYSTATION 3 "), 0 > va(n, "4.10") && (S = 27, X = n);
  } else if (h(c, "Xbox One")) {
    t = 14, n = 1;
  } else if (h(c, "Xbox")) {
    t = 13, n = 1;
  } else if (2 === gb && h(c, "Sony/COM2/")) {
    t = 17;
    n = 2;
    Ba = 3.4;
    var lb = !0;
  } else if (0 === H.indexOf("iP") || Za || Sa || nb) {
    if (Sa) {
      switch(n = Sa, tb.substr(0, 4)) {
        case "iPho":
          var La = 0;
          p(tb, La);
          var Ha = !0;
          break;
        case "iPad":
          La = 1;
          p(tb, La);
          var pa = !0;
          break;
        case "iPod":
          La = 2;
          p(tb, La);
          var zb = !0;
      }
    } else {
      Za ? n = Za : (n = p(R.split("_").join("."), "OS "), fb("isSecureContext", B), fb("enableWebGL", B), fb("sameOrigin", B));
      if (!n || ob) {
        n = B.PointerEvent ? 13 : B.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : B.WebAssembly ? 11.2 : B.HTMLMeterElement ? 10.3 : B.Proxy ? 10.2 : B.HTMLPictureElement ? 9.3 : eb.isNaN ? 9.2 : B.SharedWorker ? C && C.now ? 8 : 8.4 : Rb ? 7.1 : B.webkitURL ? 6.1 : B.Worker ? 5.1 : W ? 4.3 : I ? 4.1 : 3.2;
      }
      var Ga = Qa === 1.5 * bb || 1.5 * Qa === bb;
      0 === H.indexOf("iPhone") ? (La = 0, Ha = !0) : 0 === H.indexOf("iPad") || nb ? (La = 1, pa = !0) : 0 === H.indexOf("iPod") && (La = 2, zb = !0);
    }
    S = !Sa && (ha.standalone || (pa || 12 > n) && fb("webkitFullscreenEnabled", v) || 11 <= n && 13 > n && ha.mediaDevices) ? 17 : 18;
    t = 24;
    X = n;
  } else if (h(c, "Kobo")) {
    t = 18, S = 22, X = 2.2, Ja = !0;
  } else if (h(c, "EBRD")) {
    t = 19, S = 22, X = 2.2;
  } else if (v = p(c, "CrOS x86_64 ") || p(c, "CrOS aarch64 ") || p(c, "CrOS i686 ") || p(c, "CrOS armv7l ")) {
    t = 29, n = v;
  } else if (B.onmoztimechange !== Na) {
    t = 30, n = 18.1 > xa ? "1.0.1" : 19 > xa ? 1.1 : 27 > xa ? 1.2 : 29 > xa ? 1.3 : 31 > xa ? 1.4 : 33 > xa ? 2 : 35 > xa ? 2.1 : 38 > xa ? 2.2 : 45 > xa ? 2.5 : 2.6, h(c, "Mobile") ? Ha = !0 : h(c, "Tablet") ? pa = !0 : h(c, "TV");
  } else if (B.palmGetResource) {
    t = 32, n = p(c, "webOS/") || p(c, "WEBOS") || p(c, "hpwOS/"), h(c, "webOS.TV") || h(c, "/SmartTV") || (Ha = !0);
  } else if (v = p(c, "Tizen ")) {
    t = 33, n = v, S = 25, X = T, Ha = !0;
  } else if (v = p(c, "Windows Phone ") || p(R, "Windows Phone OS ") || Wb) {
    t = 23, n = v, Ha = !0;
  } else if (Ya && "ARM" === H) {
    t = 23, n = 10, Ha = !0;
  } else if (rb && h(R, "ZuneWP")) {
    t = 23, n = 11 === m ? 8.1 : 10 === m ? 8 : 9 === m ? 7.5 : 7 === m ? 7 : "?", Ha = !0;
  } else if (h(c, "FOMA;")) {
    t = 16, Ha = !0;
  } else if (h(c, "SoftBank;")) {
    t = 16, Ha = !0;
  } else if (h(c, "KFMUWI")) {
    var Ea = !0;
    n = 6.3;
    var qa = pa = !0;
  } else if (h(c, "KFKAWI")) {
    Ea = !0, n = 6, qa = pa = !0;
  } else if (h(c, "KFSUWI") || h(c, "KFAUWI") || h(c, "KFDOWI")) {
    Ea = !0, n = 5, qa = pa = !0;
  } else if (h(c, "KFGIWI")) {
    Ea = !0, n = 5, qa = pa = !0;
  } else if (h(c, "KFARWI") || h(c, "KFSAWA") || h(c, "KFSAWI")) {
    Ea = !0, n = 5 <= Pa(wa) ? 5 : 4, qa = pa = !0;
  } else if (h(c, "KFSOWI") || h(c, "KFTHWA") || h(c, "KFTHWI") || h(c, "KFAPWA") || h(c, "KFAPWI")) {
    Ea = !0, n = 3, qa = pa = !0;
  } else if (h(c, "KFOT") || h(c, "KFTT") || h(c, "KFJWA") || h(c, "KFJWI")) {
    Ea = !0, n = 2, qa = pa = !0;
  } else if (h(c, "Kindle Fire")) {
    Ea = !0, n = 1, qa = pa = !0;
  } else if (v = p(c, "Kindle/")) {
    t = 20, n = v, S = 22, X = 2.2;
  } else if (Lb) {
    Ea = !0, n = wa || ub, qa = !0;
  } else if (h(c, "AmazonWebAppPlatform") || h(c, "; AFT")) {
    Ea = !0, n = wa, qa = !0;
  } else if (h(c, "MeeGo")) {
    t = 34;
  } else if (h(c, "Maemo")) {
    t = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Qb) {
    t = 22, lb = !0;
  } else if ("WinCE" === H) {
    t = 21, lb = !0;
  } else if (0 === H.indexOf("Win")) {
    t = "Win16" === H ? 37 : "Win32" === H ? 38 : "Win64" === H ? 39 : 0, n = p(c, "Windows NT ") || p(c, "Windows ");
  } else if (0 === H.indexOf("Mac")) {
    t = "Mac68K" === H ? 41 : "MacPowerPC" === H || "MacPPC" === H ? 40 : "MacIntel" === H ? 42 : 0;
    if (v = p(c.split("_").join("."), "Mac OS X ")) {
      n = v;
    }
    var Sb = !0;
  } else if (h(c, "BlackBerry") || h(c, "BB10")) {
    t = 36, n = Ra, Ha = !0;
  } else if (h(c, "SunOS") || h(c, "Sun Solaris")) {
    t = 44;
  } else if (h(c, "FreeBSD")) {
    t = 45;
  } else if (h(c, "OpenBSD")) {
    t = 46;
  } else if (h(c, "NetBSD")) {
    t = 47;
  } else if (Ja && ib) {
    h(c, "Android 4.4;") ? Ga = {min:2.3} : 4 <= Pa(wa) ? Ga = wa : Ga = {min:2.2}, n = Ga;
  } else if (Ja && ja) {
    wa ? Ga = wa : Ga = {min:1.6}, n = Ga, h(c, "Tablet") ? pa = !0 : Ha = !0;
  } else if (wa) {
    n = wa, Ja = !0;
  } else if (sb && hb || mb || kb) {
    var Ab = !0;
    T ? Ga = {min:4.4} : Oa && !yb || Da || Hb ? Ga = {min:4} : (Ga = wa = Ia.touchAction !== Na ? {min:5} : $a ? 4.4 : W ? ha.connection ? B.searchBoxJavaBridge_ || Oa ? eb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ua ? 3 : 533 <= Ua ? I ? 2.3 : 2.2 : 530 <= Ua ? 2 : 1.5, xb && (S = 25, X = xb));
    n = Ga;
    Ja = !0;
  } else {
    cb ? (n = {min:5}, Ab = Ja = !0) : sb && (h(c, "Ubuntu") ? t = 48 : (v = p(c, "Mint/")) ? (t = 49, n = v) : (v = p(c, "Fedora/")) ? (t = 50, n = v) : t = h(c, "Gentoo") ? 51 : 52);
  }
  Ea || Ja && Ab && Jb ? t = 28 : Ja && (t = t || 27);
  S || (qa = qa || Ja, ja ? (S = qa || lb || Ha || pa ? 9 : 8, X = Eb) : rb ? (Ga = Aa(R, "Trident/") + 4, S = lb || Ha || pa || zb ? 3 : Sb && 5 <= m ? 7 : 2, X = m) : Ya ? (S = 23 === t ? 6 : 5, X = p(R, "Edge/")) : jb ? (S = 13, X = jb) : ib ? (S = qa ? 12 : 11, X = xa || Xb) : T ? (S = 25, X = T) : (v = Ba || p(c, "NetFront/")) ? (S = 19, X = v) : (v = p(c, "iCab")) ? (S = 20, X = v) : (v = J(p(c, "Opera Mini/"), p(c, "Opera Mobi/")) || Fa && Ra) ? (S = 10, X = v, t || (h(c, "iPhone") ? La = 
  0 : h(c, "iPad") ? La = 1 : h(c, "iPod") && (La = 2), La && (t = 24))) : Fb ? (S = 26, X = Pb) : Ib ? (S = 15, X = gb) : Ja && yb ? (S = 22, X = wa) : Oa || Da || Hb ? (S = qa ? 23 : 21, X = Ka || Gb) : Ja && $a ? (S = 24, X = 5 > Pa(wa) ? wa : Ka) : Ja && (Ra || Ab) ? (S = 22, X = wa) : Ka ? (S = qa ? 23 : 21, X = Ka) : Ua && (S = 16, X = Ua));
  t && (Xa[2] = t, n && (Xa[3] = V(n)));
  S && (Xa[0] = S, X && (Xa[1] = V(X)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var vb;
(function(Xa, B, v, ha, I, Pa, eb, Na, Aa, h, Ob, fb, p, J) {
  function V(l) {
    if (B[0] === l) {
      return Ia === Ia + "" ? Aa(Ia) : Ia;
    }
  }
  function va(l) {
    var w = B[3];
    if (B[2] === l) {
      return w === w + "" ? Aa(w) : w;
    }
  }
  function c(l, w, da) {
    l + "" === l && ("a" === l.charAt(2) && (da = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > C ? 117 : .9 > W || 9 > m || 9 > C || Qa ? 1 : 132 : parseInt(l, 16));
    da && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (w || 2));
  }
  var R = I.body, gb = R.style, H, Ya, Ia = B[1], m = V(2) || V(3), Qa = V(7), bb = V(5) || V(6), C = V(8) || V(9), W = V(11) || V(12), hb = W && 0 <= B.conpare(Ia, "1.9.1"), Ra = V(13), Fa = V(16), ja = V(17) || V(18), Eb = V(10) || V(26), Da = V(21) || V(23), rb = V(24), Oa = V(22), ib = V(25), Fb = Da || rb || Oa || ib, Pb = Da && Aa(Pa.userAgent.split("Edg/")[1]), Wb = Aa(Pa.appVersion.split("Trident/")[1]) + 4, Za = va(37) || va(38) || va(39), wa = va(40) || va(41) || va(42) || va(43), mb = 
  .9 > W, Ja = (Qa ? "ie5mac" : 5.5 > m ? "ie5win" : 6 > m ? "ie55" : 10 > m ? "ie" + (m | 0) : 7.2 > C ? "opr70" : 8 > C ? "opr72" : 9.5 > C ? "opr" + (C | 0) : W && !hb ? 1.4 <= W ? "gck19" : 1.3 <= W ? "gck13" : 1 <= W ? "gck12" : mb ? .8 <= W ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9);
  var sb, nb, jb, xa = 8 > m || 7.2 > C ? !1 : J, Xb = gb.transform !== J ? "transform" : gb["-o-transform"] !== J ? "-o-transform" : gb["-ms-transform"] !== J ? "-ms-transform" : gb.MozTransform !== J ? "-moz-transform" : gb["-webkit-transform"] !== J ? "-webkit-transform" : "", ob = [], Ua = [], Ka = [], Gb, Hb, Ib, Qb, Jb = 525 > Fa || 3.1 > ja || 2.2 > Oa || 10 > C || W && !hb || V(26) || 10 > V(3) || va(34) || va(32) || va(3), T, xb, yb, kb = [], Sa = [], $a, tb, Rb, Kb, cb = Na.now || function() {
    return +new Na();
  };
  (function() {
    function l() {
      for (var y, a = 0, b = cb(); a < D.length;) {
        b < D[0].t ? ++a : (y = D.splice(a, 1)[0], y.f(y.p));
      }
      Y = D.length ? h(l, Q) : 0;
    }
    function w() {
      for (var y, a = 0; a < ba.length; ++a) {
        y = ba[a], y.f();
      }
    }
    function da() {
      ia && (ia = p(ia));
    }
    function ra() {
      Y && (Y = Ob(Y));
    }
    q = function(y) {
      kb.push(y);
    };
    vb = function(y) {
      Sa.push(y);
    };
    yb = function(y) {
      ba.length || (ia = fb(w, sa));
      ba.push({f:y, l:++ta});
      return ta;
    };
    $a = function() {
      ia && (da(), ia = fb(w, sa));
    };
    tb = da;
    var ba = [], sa = 500, ta = 0, ia;
    if (5 > m || Qa) {
      v._wdb_onlooptimer = w, w = "_wdb_onlooptimer()";
    }
    T = function(y, a, b) {
      D.length || (Y = h(l, Q));
      D.push({f:y, p:a, l:++K, t:cb() + (Q < b ? b : Q)});
      return K;
    };
    xb = function(y) {
      for (var a = D.length, b; b = D[--a];) {
        if (b.l === y) {
          D.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Rb = function() {
      Y && (ra(), Y = h(l, Q));
    };
    Kb = ra;
    var D = [], Q = ja | 0 ? 64 : 16, K = 0, Y;
    q("[core] TIMER_INTERVAL:" + Q);
    if (5 > m || Qa) {
      v._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var Lb, ub, t, n, S, X, Ba, lb, La, Ha, pa, zb, Ga, Ea, qa, Sb, Ab, E, la, ma, oa, ab;
  (function() {
    function l(a, b, d) {
      var u = ["<", a], A = 1, U, na;
      if (b) {
        for (U in b) {
          var k = b[U];
          if (null != k && "" !== k) {
            if ("style" === U) {
              u[++A] = ' style="';
              for (na in k) {
                for (var L = ++A, Z, ea = [], e = na.split(""), f = e.length; f;) {
                  Z = e[--f], "A" <= Z && "Z" >= Z && (Z = "-" + Z.toLowerCase()), ea[f] = Z;
                }
                u[L] = ea.join("") + ":" + k[na] + ";";
              }
              u[++A] = '"';
            } else {
              "className" === U && (U = "class"), u[++A] = " " + U + '="' + k + '"';
            }
          }
        }
      }
      u[++A] = ">";
      null != d && (K && "font" !== a ? u[++A] = "<font>" + w(d) + "</font>" : u[++A] = w(d));
      u[++A] = "</" + a + ">";
      return u.join("");
    }
    function w(a) {
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
    function ra(a) {
      var b = "*" === a;
      a = K ? b ? I.all : I.all.tags(a.toUpperCase()) : 6 > m && b ? I.all : I.getElementsByTagName(a);
      b = [];
      for (var d = 0, u = a.length; d < u; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function ba(a) {
      return K ? a.parentElement : a.parentNode;
    }
    function sa(a, b, d, u, A, U) {
      if (K) {
        var na = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var k = S(2 > a ? n(b) : b);
        k = 2 > a ? k.indexOf(b) + a : k.length;
        b.insertAdjacentHTML(na, l(d, u, A));
        b = S(b)[k];
        null != A && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (Y) {
        b = I.createElement(l(d, u));
      } else {
        b = U ? I.createElementNS("http://www.w3.org/2000/svg", d) : I.createElement(d);
        if (u) {
          for (na in u) {
            if ((a = u[na]) || 0 === a) {
              switch(na) {
                case "class":
                case "className":
                  Ab(b, a);
                  break;
                case "style":
                  U = b.style;
                  for (k in a) {
                    U[k] = a[k];
                  }
                  break;
                default:
                  Ea(b, na, a);
              }
            }
          }
          !C || "a" !== d && "A" !== d || !u.href || u["tag-index"] || u.tagIndex || Ea(b, "tagIndex", "-0");
        }
        y || null != A && ta(b, A);
      }
      return b;
    }
    function ta(a, b) {
      if (K) {
        return sa(2, a, "font", J, b);
      }
      var d = I.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function ia(a, b) {
      9 > m ? a.className = b : a.setAttribute("class", b);
    }
    function D(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function Q(a, b, d) {
      if (8 > C || 5.5 > m) {
        b = da(b);
      }
      a.style[b] = d;
    }
    var K = 5 > m;
    H = ra("html")[0];
    Ya = ra("head")[0];
    Lb = function(a) {
      return v[a] || I[a] || I.getElementById(a);
    };
    ub = ra;
    t = function(a) {
      var b = [], d = 0, u, A = -1;
      if (9 > m || !I.getElementsByClassName) {
        var U = 6 > m ? I.all : I.getElementsByTagName("*");
      } else {
        var na = !0;
        U = I.getElementsByClassName(a);
      }
      for (u = U.length; d < u; ++d) {
        var k = U[d];
        if (na || (K || 1 === k.nodeType) && D(k, a)) {
          b[++A] = k;
        }
      }
      return b;
    };
    n = ba;
    S = function(a) {
      a = K ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    X = function(a) {
      var b = !(7.03 < C && 7.2 > C) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], u = a.length, A = -1, U; u;) {
        if (U = a[--u], b || 1 === U.nodeType) {
          K && "FONT" === U.tagName || (d[++A] = U);
        }
      }
      return d;
    };
    Ba = function(a, b, d, u, A) {
      b = sa(2, a, b, d, u, A);
      K || (a.appendChild(b), y && null != u && ta(b, u));
      return b;
    };
    lb = function(a, b, d, u, A) {
      b = sa(0, a, b, d, u, A);
      K || (ba(a).insertBefore(b, a), y && null != u && ta(b, u));
      return b;
    };
    La = ta;
    Ha = function(a, b) {
      if (K) {
        return sa(0, a, "font", J, b);
      }
      var d = I.createTextNode("" + b);
      n(a).insertBefore(d, a);
      return d;
    };
    pa = function(a) {
      n(a) ? K ? a.outerHTML = "" : (5.5 > m && (a.style.filter = ""), n(a).removeChild(a)) : q("[DOM] p_DOM_remove(), No parentNode!");
    };
    var Y = 9 > m, y = Y;
    zb = function(a) {
      return a.tagName.toUpperCase();
    };
    Ga = function(a, b) {
      if (8 > C || 5.5 > m) {
        b = da(b);
      }
      var d = a.getAttribute(b);
      return C && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    Ea = function(a, b, d) {
      if (C && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > C || 5.5 > m) {
          b = da(b);
        }
        a.setAttribute(b, d);
      }
    };
    qa = function(a, b) {
      if (C && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > C || 5.5 > m) {
          b = da(b);
        }
        a.removeAttribute(b);
      }
    };
    Sb = function(a, b) {
      if (C && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > C || 5.5 > m) {
        b = da(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ab = ia;
    E = D;
    la = function(a, b) {
      var d;
      if (!D(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        ia(a, d + b);
      }
    };
    ma = function(a, b) {
      if (D(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        ia(a, d.join(" "));
      }
    };
    oa = Q;
    ab = function(a, b) {
      var d, u = -1, A;
      if (5.5 > m) {
        if (d = 5.5 > m ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); A = d[++u];) {
            Q(a, A.split(":")[0], "");
          }
        }
        if (b) {
          for (u = -1, d = b.split(";"); A = d[++u];) {
            var U = A.split(":")[0];
            Q(a, U, A.substr(U.length + 1));
          }
        }
      } else if (7.1 > C) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); A = d[++u];) {
            A = A.split(":"), Q(a, A[0], A[1]);
          }
        }
      } else {
        9 > C || 1 > W ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var Bb, Yb, Cb, Mb, wb, Zb, Tb, ya, Ub;
  (function() {
    function l() {
      return k ? Z ? 2 : L ? 3 : 1 : 0;
    }
    function w(e) {
      Yb(v, "load", w);
      w = J;
      ra(ob, e, !0);
      ob = J;
    }
    function da(e, f) {
      wb(function() {
        var M = D(e);
        f(M);
        M.addListener(f);
        return !0;
      });
    }
    function ra(e, f, M) {
      for (var g = 0; g < e.length; ++g) {
        !0 === e[g](f) && (e.splice(g, 1), --g);
      }
      M && (e.length = 0);
    }
    function ba(e, f, M) {
      ob || K.length || T(sa);
      K.push(e, f, M);
    }
    function sa() {
      var e = K, f;
      for (K = []; f = e.shift();) {
        ra(f, e.shift(), e.shift());
      }
    }
    function ta(e) {
      var f = e || event;
      e = y[f.type];
      var M = -1, g, N;
      5 > m ? f = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : m ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : b && (f.j = f.stopPropagation, f.stopPropagation = function() {
        N = !0;
      });
      for (; g = e[++M];) {
        g.i === this ? (this.g = g.h, m && (f.currentTarget = this), this.g(f), m ? (this.g = ha, this.g = J) : delete this.g) : 7.2 > C && this === I && g.i === v && (v.g = g.h, v.g(f), delete v.g);
      }
      if (m) {
        return f.preventDefault = f.stopPropagation = ha, f.preventDefault = f.stopPropagation = J, f.returnValue;
      }
      b && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && (u = !0), N && !u && f.j(), f.j = f.stopPropagation = J);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function ia() {
      var e = 9 === Q.offsetWidth;
      Tb !== e && (ba(Ua, Tb = e), q("p_cssAvailability:" + Tb));
    }
    var D = v.matchMedia, Q, K = [];
    ob.push(function() {
      da = J;
      Q = Ba(R, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Cb(function() {
        K.length && T(sa);
      });
    });
    Bb = function(e, f, M, g) {
      if (d) {
        e.addEventListener(f, M, g ? Y ? g : g.capture || !0 === g : !1);
      } else {
        var N = {i:e, h:M};
        g = y[f];
        var r = "on" + f, P, Ca;
        if (g) {
          for (P = g.length; Ca = g[--P];) {
            if (Ca.i === e && Ca.h === M) {
              return;
            }
          }
          y[f].push(N);
        } else {
          y[f] = g = [N], a || (f = e[r], "function" === typeof f && f !== ta && g.unshift({i:e, h:f}));
        }
        a ? e.attachEvent(r, ta) : e[r] = ta;
      }
    };
    Yb = function(e, f, M, g) {
      if (d) {
        e.removeEventListener(f, M, g ? Y ? g : g.capture || !0 === g : !1);
      } else {
        g = y[f];
        f = "on" + f;
        var N, r, P;
        if (g) {
          for (N = g.length; r = g[--N];) {
            r.i === e && (r.h === M ? g.splice(N, 1) : P = !0);
          }
          P || (a ? e.detachEvent(f, ta) : m ? (e[f] = ha, e[f] = null) : delete e[f]);
        }
      }
    };
    var Y = !m && !Qa && (new eb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), y = {}, a = !1, b = 525.13 > Fa, d = !b && !Qa && v.addEventListener, u;
    b && H.addEventListener("click", function(e) {
      if (u) {
        return u = !1, e.preventDefault(), !1;
      }
    });
    Cb = function(e) {
      ob ? ob.push(e) : alert("Load event has already been dispatched!");
    };
    Mb = function(e) {
      A && A.push(e);
    };
    var A = [];
    if (419.3 >= Fa) {
      var U = function() {
        if (U) {
          var e = I.readyState;
          "loaded" === e || "complete" === e ? (U = J, w()) : T(U);
        }
      };
      T(U);
    } else {
      Bb(v, "load", w), mb && T(function() {
        w && w();
      }, 999);
    }
    m || !mb && 1.8 > W ? Bb(v, "unload", function(e) {
      ra(A, e, !0);
    }) : A = J;
    wb = function(e) {
      Ua.push(e);
    };
    Cb(function() {
      ia();
      yb(ia);
    });
    Zb = function(e) {
      Ka && Ka.push(e);
    };
    var na = 60 > W || Ra, k, L, Z;
    if (89 <= W || 89 <= Da || Za && 79 <= Pb || D && (D("(forced-colors:none)").matches || D("(forced-colors:active)").matches)) {
      Ub = !0, da("(forced-colors:active)", function(e) {
        k = e.matches;
        ya = l();
        ba(Ka, ya);
        q("(forced-colors:active):" + ya);
      });
    } else if (10 <= m || bb || Za && Pb) {
      Ub = !0, da("(-ms-high-contrast:black-on-white)", function(e) {
        k = L = e.matches;
        ya !== l() && (ya = l(), ba(Ka, ya), q("(-ms-high-contrast:black-on-white):" + ya));
      }), da("(-ms-high-contrast:white-on-black)", function(e) {
        k = Z = e.matches;
        ya !== l() && (ya = l(), ba(Ka, ya), q("(-ms-high-contrast:white-on-black):" + ya));
      }), da("(-ms-high-contrast:active)", function(e) {
        k = e.matches;
        ya !== l() && (ya = l(), ba(Ka, ya), q("(-ms-high-contrast:active):" + ya));
      });
    } else if (Za && (m || W && 0 <= B.conpare(Ia, "1.8.1") || Ra)) {
      var ea = function() {
        function e(g, N) {
          if (N && "transparent" === g) {
            return 382.5;
          }
          if ("#" === g.charAt(0)) {
            return parseInt("0x" + g.substr(1, 2), 16) + parseInt("0x" + g.substr(3, 2), 16) + parseInt("0x" + g.substr(5, 2), 16);
          }
          var r = g.split("(")[1].split(",");
          return Aa(r[0]) + Aa(r[1]) + Aa(r[2]);
        }
        var f = I.defaultView;
        var M = f ? f.getComputedStyle(Q, null) : Q.currentStyle;
        f = (M && M.color || "").split(" ").join("");
        M = (M && M.backgroundColor || "").split(" ").join("");
        f && (k = "#123456" !== f && "rgb(18,52,86)" !== f, L = e(f) < e(M, !0), Z = e(f) > e(M, !0), ya !== l() && (ya = l(), q("(forced-colors-fallback):" + ya), ba(Ka, ya, na)));
      };
      wb(function(e) {
        if (e) {
          return oa(Q, "color", "#123456"), oa(Q, "backgroundColor", "#123456"), na ? (ea(), Ka = J) : yb(ea), ea = J, !0;
        }
      });
    } else {
      Ka = l = J;
    }
  })();
  (function() {
    function l(F) {
      switch(F) {
        case 1:
          return A;
        case 2:
          return !!U;
        case 3:
          return !!na;
        case 4:
          return !!k;
        case 5:
          return Z;
        case 6:
          return L && !K;
      }
      return !1;
    }
    function w(F) {
      ea(F);
      za && !F && pa(za);
      ea = e = f = M = g = N = Ca = ka = za = Va = J;
    }
    function da(F) {
      var G = '1.6em "' + F + '"';
      q("[webFontTest] testByNativeFontLoaderAPI start.");
      I.fonts.load(G).then(function(x) {
        q("[webFontTest] fonts.check() : " + I.fonts.check(G, "i") + ", fonts.length : " + x.length);
        (x = sa(e)) ? T(w, x) : (q("[webFontTest] mesureWebFont() : false"), ba(!0));
      }, function(x) {
        q("[webFontTest] fonts.load() rejected! " + x);
        xa !== J ? ta(xa) : Gb(ta);
      });
    }
    function ra(F) {
      return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (P = cb(), !1) : F < cb() - P;
    }
    function ba(F) {
      F && (q("[webFontTest] testWebFont start."), P = cb());
      (F = sa(e, r)) ? (q("[webFontTest] testWebFont mesurement success : " + F), w(F)) : ra(r) ? (q("[webFontTest] testWebFont timeout!"), Ca ? ia() : Q ? w(0) : xa !== J ? ta(xa) : Gb(ta)) : T(ba);
    }
    function sa(F, G) {
      var x = 0, z = -1, aa = [];
      if (!Va) {
        var fa = -1;
        var ca;
        ka = Ba(R, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, b);
        for (Va = []; ca = u[++fa];) {
          oa(ka, "fontFamily", ca), Va[fa] = ka.offsetWidth;
        }
        q("[webFontTest] default width " + Va.join(", "));
      }
      for (5 > m ? ka || (ka = Ba(R, "div", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, b)) : R.appendChild(ka); fa = u[++z];) {
        oa(ka, "fontFamily", '"' + F + '",' + fa);
        var O = ka.offsetWidth;
        d ? aa[z] = O : (aa[z] = O, O !== Va[z] && (x = 1));
      }
      if (d && O === aa[0] && O === aa[1]) {
        for (q("[webFontTest] Hit... : width=" + O), x = 1, z = -1; 0 <= (O = Va[++z]);) {
          if (O === aa[0] && O === aa[1] && O === aa[2]) {
            q("[webFontTest] Failed! : font[" + z + "]=" + u[z]);
            x = 0;
            break;
          }
        }
      }
      !m && x && g && (ka.textContent = g, O = ka.offsetWidth, ka.textContent = N, x = O === ka.offsetWidth ? 2 : 1, ka.textContent = b);
      pa(ka);
      5 > m && (ka = J);
      G && (x || ra(G)) && q("[webFontTest] " + F + " " + aa.join(", "));
      return x;
    }
    function ta(F) {
      q("[webFontTest] onTestDataURIComplete : " + F);
      F ? (Ca = !0, r = a, q("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), ia()) : w(0);
    }
    function ia() {
      if (f) {
        for (; f.length;) {
          var F = f.shift(), G = f.shift();
          if (l(F)) {
            q("[webFontTest] maybe can use! " + G);
            za = Qb(G, D, M, za);
            return;
          }
        }
      }
      w(0);
    }
    function D(F) {
      F ? ba(!0) : ia();
    }
    Ua.splice(0, 0, function() {
      if (Tb) {
        jb = 8 <= m || bb || 9.5 <= C || hb || Ra || 522 <= Fa || 3 <= ja || Eb || Fb ? 3 : 7.2 <= C ? 2 : 6 <= C || W ? 1 : 0;
        if (!jb && !m && !Qa) {
          var F = Ba(R, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          jb = 6 <= F.offsetWidth ? 2 : 0;
          pa(F);
        }
        q("p_cssGeneratedContentGrade:" + jb);
        return !0;
      }
    });
    Gb = !1 === xa ? function(F) {
      T(F, !1);
    } : function(F) {
      function G(aa) {
        z && (z = xb(z), xa = aa, x.onload = x.onerror = ha, T(F, aa));
      }
      if (xa !== J) {
        q("[dataURITest] already done : " + xa), T(F, xa);
      } else {
        q("[dataURITest] start!");
        var x = new Image(), z = T(G, !1, 999);
        x.onerror = function() {
          q("[dataURITest] no DATA URI!");
          G(!1);
        };
        x.onload = function() {
          q("[dataURITest] DATA URI:" + (1 === x.width * x.height));
          G(1 === x.width * x.height);
        };
        x.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > m && Cb(function() {
      var F = Ba(R, "div");
      ab(F, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      sb = 1 < F.offsetHeight;
      pa(F);
    });
    Hb = function(F, G) {
      function x() {
        if (aa || !fa || z.complete) {
          q("[imageTest] timer -> img.complete. img.width=" + z.width);
          var ca = !!z.width;
          nb = nb || ca;
          T(F, ca);
          z.onerror = z.onload = ha;
          z = F = J;
        } else {
          --fa, T(x);
        }
      }
      var z = new Image(), aa, fa = 99;
      q("[imageTest] start.");
      z.onerror = function() {
        q("[imageTest] error!");
        aa = !0;
      };
      z.onload = function() {
        q("[imageTest] onload.");
        aa = !0;
      };
      z.src = G;
      T(x);
    };
    Ib = function(F, G, x, z, aa, fa, ca) {
      ea = F;
      e = G;
      f = x;
      M = z;
      g = aa;
      N = fa;
      r = ca || y;
      e = Y + e;
      q("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      q("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!Jb);
      V(10) ? T(w, 1) : Jb ? T(w, 0) : !I.fonts || 603 > Fa || 11 > ja ? (q("[webFontTest] No native font loader."), ba(!0)) : (q("[webFontTest] Use Native font loader."), da(e));
    };
    var Q = 9 > m, K = 6 > Da || C || 530 > Fa || 5 > ja || va(10), Y = "bad_" + cb() + "_", y = 5E3, a = 500, b = "mmmmmmmmmmlliiiiiiiii", d = 9 <= Da && 18 > Da || 3 > Oa || 7 > ja || Fa && 0 >= B.conpare(Ia, "536.11"), u = ["monospace", "sans-serif", "serif"];
    Jb || (d && Da && q("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + Da), d && ja && q("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + ja), d && Fa && q("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + Fa), d && Oa && q("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Oa));
    var A = 14 <= bb || 36 <= Da || 39 <= W || 602 <= Fa && wa && 0 <= B.conpare("10.12", wa) || 10 <= ja, U = 6 <= Da || W && 0 <= B.conpare(Ia, "1.9.2") || 533 <= Fa || 5 <= ja || 4.4 <= Oa || 11.5 <= C || bb || 9 <= V(2) || 10 <= V(3), na = 2 <= Da || hb || 525 <= Fa || 4 <= ja || 2.2 <= Oa || 10.1 <= C || bb || 9 <= V(2) || 10 <= V(3), k = na, L = 5.1 <= Za && 5.2 >= Za && 40 > Da || 6 <= Za && 6.1 > Za && 51 > Da || 37 > Da || 525 <= Fa || 3.1 <= ja || 3 <= Oa || 11.5 <= C, Z = 4 <= V(2) || 
    10 <= V(3), ea, e, f, M, g, N, r, P, Ca, ka, za, Va;
  })();
  (function() {
    Qb = function(D, Q, K, Y) {
      Y = Y || Ba(Ya, "link", {type:"text/css", rel:"stylesheet"});
      var y;
      if (ia) {
        (y = Lb(K)) ? qa(y, "id") : y = Ba(R, "div", {"aria-hidden":"true", className:K});
        var a = y.offsetWidth;
        q("[CSS Loader] widthBeforeCSSLoaded = " + a);
        Ea(y, "id", K);
      }
      ta(Y, D, Q, y, a);
      return Y;
    };
    var l = W && 0 > B.conpare(Ia, "0.9.1"), w = 11 <= m || bb || 9 <= C && 9.5 > C, da = 11 > m, ra = 7.2 <= C && 7.5 > C, ba = 9 > W && !l || 19 > Da || 4.3 > Oa || 2 > ib || 536 > Fa || 6 > ja || 7 <= C && 9 > C && !ra, sa = !l && !w && !da && !ra && !ba, ta = sa ? function(D, Q, K) {
      q("[CSS Loader] onload + onerror");
      D.onload = o;
      D.onerror = function() {
        D.onload = D.onerror = null;
        T(K, !1);
      };
      D.href = Q;
      function o() {
        D.onload = D.onerror = null;
        T(K, !0);
      }
      o = !1;
    } : w ? function(D, Q, K, Y, y) {
      q("[CSS Loader] onload + mesure");
      D.onload = o;
      D.href = Q;
      function o() {
        T(K, ia(Y, y));
        D.onload = null;
        Y = J;
      }
      o = !1;
    } : da ? function(D, Q, K, Y, y) {
      q("[CSS Loader] onreadystatechange + onerror");
      D.onreadystatechange = o;
      D.href = Q;
      function o() {
        "complete" === D.readyState && (T(K, ia(Y, y)), Y = J, D.m = ha);
      }
      o = !1;
    } : ba || ra ? function(D, Q, K, Y, y) {
      function a() {
        d && (u = xb(u), q("[CSS Loader] onComplete"), A = cb() + 999, T(b, 0, 99), ba ? d.onerror = null : d.removeEventListener("load", a, !1), d = J);
      }
      function b() {
        ia(Y, y) ? (Y = J, T(K, !0)) : cb() < A ? T(b, 0, 99) : (Y = J, T(K, !1));
      }
      var d = new Image(), u = T(a, 0, 5E3), A;
      ba ? (q("[CSS Loader] img.onerror + mesure"), d.onerror = a) : (q('[CSS Loader] img.addEventListener("load") + mesure'), d.addEventListener("load", a, !1));
      d.src = D.href = Q;
    } : function(D, Q, K) {
      q("[CSS Loader] UNSUPPORTED");
      T(K, !1);
    }, ia = !sa && !l && function(D, Q) {
      q("[CSS Loader] elmTest.offsetWidth = " + D.offsetWidth);
      return D.offsetWidth !== Q;
    };
  })();
  var Vb = String.fromCharCode, db = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Vb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], $b = db[7], jc = db[113], ec = Vb(160);
  Vb(8194);
  var fc = db[31], ac = db[30], gc = db[63], kc = db[125], lc = db[126], mc = Vb(59648), hc = (9 === m || W && 0 <= B.conpare(Ia, "1.8.1") || Ra) && !Ub, pb = [], qb, Wa, Nb = 7.2 > C ? function() {
    qb = !qb;
    for (var l = -1, w; w = pb[++l];) {
      -1 !== w.className.indexOf("pbAlp") ? oa(w, "display", qb ? "" : "none") : (la(w, qb ? "pbChrCS" : "pbChr00"), ma(w, qb ? "pbChr00" : "pbChrCS"));
    }
  } : hc ? function() {
    qb = !qb;
    for (var l = -1, w; w = pb[++l];) {
      oa(w, "opacity", qb ? 1 : 0);
    }
  } : J;
  var bc = Xa.startBlinkingIfCursor = function(l) {
    Nb ? E(l, "pbChrCS") && (Wa || !C && !ya || (Wa = fb(Nb, 400)), -1 === pb.indexOf(l) && pb.push(l)) : pb = J;
  };
  Xa.stopBlinkingIfCursor = function(l) {
    Nb && (l = pb.indexOf(l), 0 <= l && (pb.splice(l, 1), !pb.length && Wa && (p(Wa), Wa = 0)));
  };
  hc && Zb(function(l) {
    l ? Wa || (Wa = fb(Nb, 400)) : Wa && (p(Wa), Wa = 0);
  });
  Nb && Mb(function() {
    Wa && p(Wa);
  });
  Ub || Zb(function(l) {
    l ? (Ea(H, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Xb || 9 === m || 5.5 <= m && 9 > m && sb) && la(H, "jsCanRotate")) : (qa(H, "forced-colors"), ma(H, "jsCanRotate"));
  });
  (function() {
    function l(k) {
      a = k;
      q("[pbList] WebFont test result : " + !!k);
      k ? ba() : nb ? ra(!0) : nb !== J ? ba() : (q("[pbList] Need imageTest " + b), Hb(ra, b));
      q("window.offscreenBuffering = " + v.offscreenBuffering);
    }
    function w() {
      w = J;
      Ib(l, "PB-100", [1, Ta + "pbFont/woff2.css", 2, Ta + "pbFont/woff.css", 4, Ta + "pbFont/otf.css", 3, Ta + "pbFont/ttf.css", 6, Ta + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", gc);
    }
    function da(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function ra(k) {
      k ? (q("[pbList] Fallback start!"), la(R, "pbList-noWebFont")) : q("[pbList] image disabled!");
      ba();
    }
    function ba() {
      for (l = Ib = J; y.length;) {
        sa(y.shift(), y.shift());
      }
      q("[pbList] complete.");
    }
    function sa(k, L) {
      function Z(N) {
        N = S(N);
        for (var r = -1, P; P = N[++r];) {
          switch(P.nodeType) {
            case 1:
              Z(P);
              break;
            case 3:
              P.data && e(P.data) && f.push(P);
          }
        }
      }
      function ea(N) {
        var r = N.children, P = 0, Ca = r.length;
        if (Ca) {
          for (; P < Ca; ++P) {
            ea(r[P]);
          }
        } else {
          (r = N.innerText) && e(r) && f.push(N);
        }
      }
      function e(N) {
        return N.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], M;
      if (l) {
        -1 === y.indexOf(k) && (y.push(k, L), d && w && w());
      } else {
        var g = y.indexOf(k);
        0 <= g && y.splice(g, 2);
        for (5 > m ? ea(k) : Z(k); M = f.shift();) {
          g = 5 > m ? M.innerText : M.data, 2 !== a ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join(ac)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join(ac)), a && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(gc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(mc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(kc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(lc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(fc)), L ? 5 > m ? M.innerText = g : M.data = g : ta(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(jc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join($b).split("&amp;").join("&"), M);
        }
      }
    }
    function ta(k, L) {
      function Z(ca, O) {
        for (var Ma = ""; O;) {
          O & 1 && (Ma += ca), O >>= 1, ca += ca;
        }
        return Ma;
      }
      function ea(ca, O, Ma) {
        for (var Db, nc = -1, cc, dc; Db = O[++nc];) {
          for (; 0 <= (cc = ca.indexOf(Db));) {
            dc = Db.length, ca = ca.substr(0, cc) + Z(Ma, dc) + ca.substr(cc + dc);
          }
        }
        return ca;
      }
      function e(ca) {
        var O = Aa(ca), Ma = "" + O;
        return 0 < O && O === O | 0 && (O = ca.indexOf(Ma) + Ma.length, O <= ca.length) ? O : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), M = 5 > m || 1 === L.nodeType, g = [], N = "", r, P = -1, Ca, ka, za;
      if (M) {
        if (U) {
          var Va = L.style.visibility;
          oa(L, "visibility", "hidden");
        }
        L.innerHTML = "";
      }
      if (na) {
        var F = L;
        L = I.createDocumentFragment();
      }
      if (function(ca) {
        var O = ca.indexOf("P");
        if (-1 === O) {
          return !1;
        }
        O = Aa(ca.charAt(O + 1));
        return 0 <= O && 9 >= O;
      }(k)) {
        N = Z("+", k.length);
      } else {
        0 <= (r = e(k)) && (N = Z("|", r), P = r, --P);
        for (; r = k.charAt(++P);) {
          r === $b || Ca ? (N += "~", r === $b && (Ca = !Ca)) : N += r;
        }
        N = ea(N, Y, "^");
        N = ea(N, Q, "{");
        N = ea(N, K, "}");
      }
      P = 0;
      for (Ca = k.length; P < Ca; ++P) {
        r = k.charAt(P);
        var G = r === ec;
        var x = " " === r;
        r = G ? " " : r;
        var z = N.charAt(P);
        var aa = (ka = fa) && G;
        var fa = "|" === z;
        z = f["+|~{}^".indexOf(z) + 1];
        if ("\n" !== r) {
          if (a || !nb) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === k.substr(P, 3)) {
                r = "\u1d47/\u1d04", P += 2;
              } else {
                switch(k.substr(P, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    r = k.substr(P, 2), ++P;
                }
              }
            }
            z = x && "str" === z ? "pbList-strsp" : G ? "" : !x && z ? "pbList-" + z : "";
          } else {
            G = db.indexOf(r), G = -1 === G ? "" : db.indexOf(r).toString(16).toUpperCase(), G = (G = 1 === G.length ? "0" + G : G) ? "pbChr" + G : "", z = x && "str" === z ? "pbList-strsp" : x || !G ? "" : z ? (G ? G + " " : "") + "pbList-" + z : G;
          }
          G = J;
          aa ? (r = 6 <= m && 8 > m ? " " : ec, z = "") : fa && (W && !hb || 9.5 > C) ? (fa && !ka && (za = 4 - (Aa(k.substr(P)) + "").length), 7.5 > C ? G = A ? "position:relative;top:-4px;left:" + 12 * za + "px" : {position:"relative", top:"-4px", left:12 * za + "px"} : G = A ? "position:relative;left:" + 12 * za + "px" : {position:"relative", left:12 * za + "px"}) : x && 7.5 > C && (z = "pbList-strsp");
          A ? g.push("<font" + (z ? ' class="' + z + '"' : "") + (G ? ' style="' + G + '"' : "") + ">" + r + "</font>") : M || na ? Ba(L, "font", {"class":z, style:G}, r) : lb(L, "font", {"class":z, style:G}, r);
        } else {
          ka = fa = !1, A ? g.push(r) : M || na ? La(L, r) : Ha(L, r);
        }
      }
      if (M) {
        A ? L.innerHTML = g.join("") : na && F.appendChild(L), U && oa(L, "visibility", Va);
      } else {
        if (A) {
          f = I.createElement("font");
          for (f.innerHTML = g.join(""); g = f.firstChild;) {
            L.parentNode.insertBefore(g, L);
          }
          pa(L);
        } else {
          na ? F.parentNode.replaceChild(L, F) : pa(L);
        }
      }
    }
    1.9 > W && wb(function(k) {
      if (k) {
        k = ub("*");
        for (var L = 0, Z = k.length, ea; L < Z; ++L) {
          ea = k[L], "B" !== zb(ea) && -1 !== (" " + ea.className).toLowerCase().indexOf(" pbchr") && (Sb(ea, "title") || Ea(ea, "title", ea.textContent), ea.textContent = " ");
        }
        return !0;
      }
    });
    wb(function(k) {
      if (k) {
        k = t("pbChrCS");
        for (var L = 0, Z = k.length; L < Z; ++L) {
          bc(k[L]);
        }
        return !0;
      }
    });
    var ia = [], D = W && 0 > B.conpare(Ia, "0.9.9");
    wb(function(k) {
      function L(x) {
        var z = Ga(x, "pbTip");
        if (z) {
          var aa = z.charAt(0);
          var fa = "_" === aa;
          z = (fa ? z.charAt(2) : aa).toUpperCase().charCodeAt(0) - 65;
          g ? Ba(x, "div", {style:{left:7 * z + 3 + "px"}}) : (aa = Ga(x, "title"), qa(x, "pbTip"), qa(x, "title"), fa = Ba(x, "div", {className:"pbTip" + (fa ? "Btm" : ""), style:{width:aa.length + ea + "em", left:7 * z - (D ? 0 : 5) + "px"}}, aa), fa = Ba(fa, "div"), .9 <= W && D && oa(fa, "left", "2px"));
        }
        M && 0 <= x.className.indexOf("pbColor") && Ba(x, "u");
      }
      function Z(x, z) {
        var aa = Ga(x, "pbGhst"), fa = x.className, ca = fa.split("pbCsr")[1] || "", O = fa.split("pbAlp")[1] || "";
        if ("CS" === aa) {
          var Ma = "_";
        } else {
          Ma = aa, 3 === Ma.length && (Ma = Ma.substr(0, 2)), Ma = db[parseInt(Ma, 16)] || "~";
        }
        var Db;
        ca = ca.split(" ")[0];
        if (O = Aa(O.split(" ")[0])) {
          e && (fa = fa.split("pbChr")[1].split(" ")[0], oa(x, "backgroundPosition", c(fa, 2, Va) + "px " + -24 * (10 - O) + "px")), !z && f && lb(x, "a").appendChild(x);
        }
        aa && (O = 10 - O, e && (Db = {backgroundPosition:c(aa, 2, Va) + "px " + -24 * (10 - O) + "px"}), qa(x, "pbGhst"), P = lb(x, "b", {className:"pbChr" + aa + " pbCsr" + ca + " pbAlp" + O, style:Db}, Ma), bc(P));
        bc(x);
      }
      if (k) {
        var ea = 6 > m ? 2 : 0, e = 7.2 > C || .9 > W || Qa, f = 1.1 === W, M = 1.4 > W;
        k = ub("SAMP");
        var g = 8 === m, N = jb, r, P, Ca, ka, za;
        sb && la(R, "pbLCD-AX");
        if (k.length) {
          for (Ca = -1; r = k[++Ca];) {
            if (E(n(r), "pbLCD")) {
              var Va = E(r, "PB-120") || E(r, "FX-795P");
              var F = X(r);
              for (r = F.length; za = F[--r];) {
                switch(zb(za)) {
                  case "A":
                    (2 > N || g) && L(za);
                    if (2 > N) {
                      var G = X(za);
                      for (ka = G.length; ka;) {
                        Z(G[--ka], !0);
                      }
                    }
                    Eb ? Ea(za, "href", "javascript:void(0)") : (Bb(za, "click", da), ia.push(za));
                    break;
                  case "B":
                    2 > N && Z(za, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Mb(function() {
      for (var k; k = ia.shift();) {
        Yb(k, "click", da);
      }
    });
    6 === m && (new eb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    var Q = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), K = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Y = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + ac + fc).split(""), y = [], a, b, d;
    if (.9 <= W && 0 >= B.conpare(Ia, "0.9.1")) {
      la(H, "pbLCD-gecko09To091");
      var u = !0;
    }
    wb(function(k) {
      if (k) {
        b = Ta + "pbFont/x3mask" + (u ? ".gecko0.9.1.gif" : ".png");
        k = ub("*");
        for (var L = -1, Z; Z = k[++L];) {
          E(Z, "pbList") ? sa(Z) : E(Z, "pbFont") && sa(Z, !0);
        }
        y.length && (q("[pbList] " + y.length / 2 + " elements found. WebFont test start."), w());
        return !0;
      }
    });
    var A = !1, U = 8 > C, na = !A && !U && !(6 > m) && I.createDocumentFragment && !!R.replaceChild;
    Xa.prettify = sa;
  })();
  var ic = I.scripts || ub("script");
  var Ta = ic[ic.length - 1].src.split("/");
  --Ta.length;
  (Ta = Ta.join("/")) && (Ta += "/");
  q("[p_assetUrl] " + Ta);
  Cb(function() {
    var l;
    (l = Lb("logger")) || alert("#logger not found!");
    l ? (q = o, vb = function(w) {
      Ba(l, "DIV", {style:{color:"red"}}, w);
    }, v.onerror = function(w, da, ra) {
      vb(w + ", " + da + ", " + ra);
      return !0;
    }) : v.console ? (q = console.log, vb = console.error) : C ? (q = ha, vb = opera.postError) : q = vb = ha;
    for (; kb.length;) {
      q(kb.shift());
    }
    for (; Sa.length;) {
      vb(Sa.shift());
    }
    kb = Sa = J;
    function o(w) {
      Ba(l, "DIV", J, w);
    }
    o = !1;
  });
  6.1 > ja && Bb(v, "scroll", $a);
  Mb(tb);
  6.1 > ja && Bb(v, "scroll", Rb);
  Mb(Kb);
  10 > m && (11 !== Wb || 5 !== m) || (9 > C || 1 > W || !Qa && !v.addEventListener ? I.write('<link href="' + Ta + Ja + '" rel="stylesheet"' + (8 > C ? "" : ' media="screen,handheld,projection,print"') + ">") : Cb(function() {
    Ba(Ya, "link", {href:Ta + "" + Ja, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

