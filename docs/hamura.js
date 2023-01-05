/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Ua, w) {
  var P = 0, ia, z, La = (Ua + "").split("."), cb = (w + "").split("."), sa = La.length;
  for (ia = cb.length; "0" === La[sa - 1];) {
    --sa;
  }
  for (; "0" === cb[ia - 1];) {
    --ia;
  }
  for (z = sa < ia ? sa : ia; P < z; ++P) {
    var ta = La[P] - 0, h = cb[P] - 0;
    if (ta !== h) {
      return ta > h ? 1 : -1;
    }
  }
  return sa > ia ? 1 : sa === ia ? 0 : -1;
};
(function(Ua, w, P, ia, z, La, cb, sa) {
  function ta(v, Y, Z) {
    Z = La(v.split(Y)[1]);
    return 0 <= Z ? Z : 0;
  }
  function h(v, Y) {
    return 0 <= v.indexOf(Y);
  }
  function Mb(v) {
    return h(v, "Linux armv") || h(v, "Linux aarch") || h(v, "Linux i686") || h(v, "Linux x86_64");
  }
  function db(v, Y) {
    for (var Z in Y) {
      if (Z === v) {
        return !0;
      }
    }
  }
  function m(v, Y) {
    var Z = "", Ha = -1, ea;
    if (v = v.split(Y)[1]) {
      for (; ea = v.charCodeAt(++Ha);) {
        if (48 <= ea && 57 >= ea || 46 === ea) {
          Z += v.charAt(Ha);
        } else {
          break;
        }
      }
      for (Ha = Z.length; Ha;) {
        if (46 === Z.charCodeAt(--Ha)) {
          Z = Z.substr(0, Ha);
        } else {
          break;
        }
      }
    }
    return Z;
  }
  function D(v) {
    for (var Y = arguments, Z = 1, Ha = Y[0], ea; Z < Y.length; ++Z) {
      0 > va(Ha, ea = Y[Z]) && (Ha = ea);
    }
    return Ha;
  }
  function Q(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var va = Ua.conpare, d = ia.userAgent, M = ia.appVersion, eb = La(M) || 0, E = ia.platform, Va = P.documentElement, Qa = Va && Va.style, l = P.documentMode, Ma = z.width;
  z = z.height;
  var Ab = w.HTMLAudioElement, x = w.performance, N = w.Int8Array, fb = w.ontouchstart !== sa, Ra = m(M, "Version/") || m(d, "Version/"), $a = w.operamini, Na = !$a && w.opera, Nb = Na && (Na.version && "function" === typeof Na.version ? Na.version() : D(m(d, "Opera "), Ra, eb)), pb = w.opr, qb = !Na && (P.all || l);
  l = qb && (l ? l : w.XMLHttpRequest ? P.getElementsByTagName ? 7 : 4 : P.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  Va = !qb && Va.msContentZoomFactor;
  var rb = !Va && (w.chrome || w.chromium), hb = !qb && function() {
    for (var v in Qa) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Bb = h(d, "UCWEB"), Ob = Bb && m(d, " U2/"), Vb = Bb && m(d, "; wds "), sb = m(d.split("_").join("."), "; iPh OS "), pa = m(d, "; Adr "), ib = h(M, "YJApp-ANDROID"), za = h(E, "Android") || hb && h(M, "Android") || ib;
  pa = m(E, "Android ") || m(M, "Android ") || m(d, "Android ") || pa;
  var jb = h(E, "Linux"), Sa = "MacIntel" === E && ia.standalone !== sa, Cb = hb && m(d, "Goanna/"), Da = !Cb && hb && (m(d, "rv:") || m(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Db = m(d, "Firefox/"), y = m(d, "Opera/"), Eb = w.FNRBrowser, Wa = ta(d, "AppleWebKit/"), gb = m(d, "Chrome/"), aa = m(M, "Iron/"), Fb = m(d, "OPR/"), Gb = m(M, "KHTML/"), Pb = m(d.toLowerCase(), "iris");
  m(d, "FxiOS/");
  m(d, "CriOS/");
  m(d, "EdgiOS/");
  var Qb = m(d, "Silk/"), kb = ta(d, "SamsungBrowser/"), Hb = !kb && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    Y, Z = v.length; Y = v[--Z];) {
      if (h(d, Y)) {
        return 2 > La(Ra) ? Ra : 0.9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (Z = v.length; Y = v[--Z];) {
      if (h(d, Y)) {
        return Ra;
      }
    }
  }(), Ib = rb && 534.3 >= Wa, ab = Mb(E), Xa = ab && !h(d, E) && Mb(d);
  fb = fb && (Wa || hb) && Xa || !pa && ib;
  ib = !!w.ReactNativeWebView;
  ab = ab && function() {
    for (var v in w) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ea = (Xa = w.puffinDevice) && Xa.clientInfo;
  Ea = (Xa = Ea && "iOS" === Ea.os && Ea.osVersion) && Ea.model;
  var lb = !l && P.registerElement, Jb = !l && P.execCommand, Ba = w.webkitCancelAnimationFrame, wb = jb && lb && "11.0.696.34" === gb, Rb = w._firefoxTV_playbackStateObserverJava, Sb = ta(d, "diordnA ");
  if ("Nitro" === E) {
    var p = 1;
  } else if ("Nintendo DSi" === E) {
    p = 2;
    var q = y;
  } else if ("New Nintendo 3DS" === E || h(d, "iPhone OS 6_0") && 320 === Ma && 240 === z) {
    p = 4, q = m(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === E) {
    p = 3, q = m(d, "Version/"), Wa = 535;
  } else if ("Nintendo Swicth" === E) {
    p = 7, q = m(M, "NintendoBrowser/");
  } else if (w.wiiu) {
    p = 6;
    q = m(M, "NintendoBrowser/");
    var I = 15, H = m(M, "AppleWebKit/") || (Ba ? 536 : 534);
    q || (q = Ba ? 4 : 2, h(M, "Macintosh;") || h(M, "Windows NT") && h(M, "Touch"));
  } else if (Na && Na.wiiremote) {
    p = 5, q = m(d, "Wii; U; ; ");
  } else if (y = m(d, "PlayStation Vita ")) {
    p = 10, q = y;
  } else if (y = m(d, "(PlayStation Portable); ")) {
    p = 8;
    q = y;
    var mb = 3.3;
  } else if (y = m(d, "PLAYSTATION 3; ") || m(d, "PLAYSTATION 3 ")) {
    p = 11, q = y, 0 > va("4.10", y) && (I = 26, H = y);
  } else if (h(d, "Xbox One")) {
    p = 15, q = 1;
  } else if (h(d, "Xbox")) {
    p = 14, q = 1;
  } else if (2 === eb && h(d, "Sony/COM2/")) {
    p = 17;
    q = 2;
    mb = 3.4;
    var tb = !0;
  } else if (0 === E.indexOf("iP") || sb || Xa || Sa) {
    if (Xa) {
      switch(q = Xa, Ea.substr(0, 4)) {
        case "iPho":
          var Fa = 0;
          m(Ea, Fa);
          var ma = !0;
          break;
        case "iPad":
          Fa = 1;
          m(Ea, Fa);
          var na = !0;
          break;
        case "iPod":
          Fa = 2;
          m(Ea, Fa);
          var xb = !0;
      }
    } else {
      sb ? q = sb : (q = m(M.split("_").join("."), "OS "), db("isSecureContext", w), db("enableWebGL", w), db("sameOrigin", w));
      if (!q || Eb) {
        q = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : cb.isNaN ? 9.2 : w.SharedWorker ? x && x.now ? 8 : 8.4 : Jb ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : N ? 4.3 : Ab ? 4.1 : 3.2;
      }
      var ba = Ma === 1.5 * z || 1.5 * Ma === z;
      0 === E.indexOf("iPhone") ? (Fa = 0, ma = !0) : 0 === E.indexOf("iPad") || Sa ? (Fa = 1, na = !0) : 0 === E.indexOf("iPod") && (Fa = 2, xb = !0);
    }
    I = !Xa && (ia.standalone || (na || 12 > q) && db("webkitFullscreenEnabled", P) || 11 <= q && 13 > q && ia.mediaDevices) ? 16 : 17;
    p = 24;
    H = q;
  } else if (h(d, "Kobo")) {
    p = 18, I = 21, H = 2.2, za = !0;
  } else if (h(d, "EBRD")) {
    p = 19, I = 21, H = 2.2;
  } else if (y = m(d, "CrOS x86_64 ") || m(d, "CrOS aarch64 ") || m(d, "CrOS i686 ") || m(d, "CrOS armv7l ")) {
    p = 28, q = y;
  } else if (w.onmoztimechange !== sa) {
    p = 29, q = 18.1 > Da ? "1.0.1" : 19 > Da ? 1.1 : 27 > Da ? 1.2 : 29 > Da ? 1.3 : 31 > Da ? 1.4 : 33 > Da ? 2 : 35 > Da ? 2.1 : 38 > Da ? 2.2 : 45 > Da ? 2.5 : 2.6, h(d, "Mobile") ? ma = !0 : h(d, "Tablet") ? na = !0 : h(d, "TV");
  } else if (w.palmGetResource) {
    p = 30, q = m(d, "webOS/") || m(d, "WEBOS") || m(d, "hpwOS/"), h(d, "webOS.TV") || h(d, "/SmartTV") || (ma = !0);
  } else if (y = m(d, "Tizen ")) {
    p = 31, q = y, I = 24, H = kb, ma = !0;
  } else if (y = m(d, "Windows Phone ") || m(M, "Windows Phone OS ") || Vb) {
    p = 23, q = y, ma = !0;
  } else if (Va && "ARM" === E) {
    p = 23, q = 10, ma = !0;
  } else if (qb && h(M, "ZuneWP")) {
    p = 23, q = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", ma = !0;
  } else if (h(d, "FOMA;")) {
    p = 16, ma = !0;
  } else if (h(d, "SoftBank;")) {
    p = 16, ma = !0;
  } else if (h(d, "KFMUWI")) {
    var Ia = !0;
    q = 6.3;
    var ja = na = !0;
  } else if (h(d, "KFKAWI")) {
    Ia = !0, q = 6, ja = na = !0;
  } else if (h(d, "KFSUWI") || h(d, "KFAUWI") || h(d, "KFDOWI")) {
    Ia = !0, q = 5, ja = na = !0;
  } else if (h(d, "KFGIWI")) {
    Ia = !0, q = 5, ja = na = !0;
  } else if (h(d, "KFARWI") || h(d, "KFSAWA") || h(d, "KFSAWI")) {
    Ia = !0, q = 5 <= La(pa) ? 5 : 4, ja = na = !0;
  } else if (h(d, "KFSOWI") || h(d, "KFTHWA") || h(d, "KFTHWI") || h(d, "KFAPWA") || h(d, "KFAPWI")) {
    Ia = !0, q = 3, ja = na = !0;
  } else if (h(d, "KFOT") || h(d, "KFTT") || h(d, "KFJWA") || h(d, "KFJWI")) {
    Ia = !0, q = 2, ja = na = !0;
  } else if (h(d, "Kindle Fire")) {
    Ia = !0, q = 1, ja = na = !0;
  } else if (y = m(d, "Kindle/")) {
    p = 20, q = y, I = 21, H = 2.2;
  } else if (Rb) {
    Ia = !0, q = pa || Sb, ja = !0;
  } else if (h(d, "AmazonWebAppPlatform") || h(d, "; AFT")) {
    Ia = !0, q = pa, ja = !0;
  } else if (h(d, "MeeGo")) {
    p = 32;
  } else if (h(d, "Maemo")) {
    p = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Pb) {
    p = 22, tb = !0;
  } else if ("WinCE" === E) {
    p = 21, tb = !0;
  } else if (0 === E.indexOf("Win")) {
    p = "Win16" === E ? 35 : "Win32" === E ? 36 : "Win64" === E ? 37 : 0, q = m(d, "Windows NT ") || m(d, "Windows ");
  } else if (0 === E.indexOf("Mac")) {
    p = "Mac68K" === E ? 39 : "MacPowerPC" === E || "MacPPC" === E ? 38 : "MacIntel" === E ? 40 : 0;
    if (y = m(d.split("_").join("."), "Mac OS X ")) {
      q = y;
    }
    var Kb = !0;
  } else if (h(d, "BlackBerry") || h(d, "BB10")) {
    p = 34, q = Ra, ma = !0;
  } else if (h(d, "SunOS") || h(d, "Sun Solaris")) {
    p = 42;
  } else if (h(d, "FreeBSD")) {
    p = 43;
  } else if (h(d, "OpenBSD")) {
    p = 44;
  } else if (h(d, "NetBSD")) {
    p = 45;
  } else if (za && hb) {
    h(d, "Android 4.4;") ? ba = {min:2.3} : 4 <= La(pa) ? ba = pa : ba = {min:2.2}, q = ba;
  } else if (za && Na) {
    pa ? ba = pa : ba = {min:1.6}, q = ba, h(d, "Tablet") ? na = !0 : ma = !0;
  } else if (pa) {
    q = pa, za = !0;
  } else if (jb && fb || ib || ab) {
    var bb = !0;
    kb ? ba = {min:4.4} : rb && !Ib || pb || Fb ? ba = {min:4} : (ba = pa = Qa.touchAction !== sa ? {min:5} : lb ? 4.4 : N ? ia.connection ? w.searchBoxJavaBridge_ || rb ? cb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Wa ? 3 : 533 <= Wa ? Ab ? 2.3 : 2.2 : 530 <= Wa ? 2 : 1.5, Hb && (I = 24, H = Hb));
    q = ba;
    za = !0;
  } else {
    wb ? (q = {min:5}, bb = za = !0) : jb && (h(d, "Ubuntu") ? p = 46 : (y = m(d, "Mint/")) ? (p = 47, q = y) : (y = m(d, "Fedora/")) ? (p = 48, q = y) : p = h(d, "Gentoo") ? 49 : 50);
  }
  Ia || za && bb && Qb ? p = 27 : za && (p = p || 26);
  I || (ja = ja || za, Na ? (I = ja || tb || ma || na ? 9 : 8, H = Nb) : qb ? (ba = ta(M, "Trident/") + 4, I = tb || ma || na || xb ? 3 : Kb && 5 <= l ? 7 : 2, H = l) : Va ? (I = 23 === p ? 6 : 5, H = m(M, "Edge/")) : Cb ? (I = 13, H = Cb) : hb ? (I = ja ? 12 : 11, H = Da || Db) : kb ? (I = 24, H = kb) : (y = mb || m(d, "NetFront/")) ? (I = 18, H = y) : (y = m(d, "iCab")) ? (I = 19, H = y) : (y = D(m(d, "Opera Mini/"), m(d, "Opera Mobi/")) || $a && Ra) ? (I = 10, H = y, p || (h(d, "iPhone") ? Fa = 
  0 : h(d, "iPad") ? Fa = 1 : h(d, "iPod") && (Fa = 2), Fa && (p = 24))) : Bb ? (I = 25, H = Ob) : Gb ? (I = 14, H = eb) : za && Ib ? (I = 21, H = pa) : rb || pb || Fb ? (I = ja ? 22 : 20, H = gb || aa) : za && lb ? (I = 23, H = 5 > La(pa) ? pa : gb) : za && (Ra || bb) ? (I = 21, H = pa) : gb ? (I = ja ? 22 : 20, H = gb) : Wa && (I = 15, H = Wa));
  p && (Ua[2] = p, q && (Ua[3] = Q(q)));
  I && (Ua[0] = I, H && (Ua[1] = Q(H)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ua, w, P, ia, z, La, cb, sa, ta, h, Mb, db, m, D) {
  function Q(k) {
    if (w[0] === k) {
      return Qa === Qa + "" ? ta(Qa) : Qa;
    }
  }
  function va(k) {
    var C = w[3];
    if (w[2] === k) {
      return C === C + "" ? ta(C) : C;
    }
  }
  function d(k, C, ca) {
    k + "" === k && ("a" === k.charAt(2) && (ca = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > x ? 117 : .9 > N || 9 > l || 9 > x || Ma ? 1 : 132 : parseInt(k, 16));
    ca && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (C || 2));
  }
  var M = z.body, eb = M.style, E, Va, Qa = w[1], l = Q(2) || Q(3), Ma = Q(7), Ab = Q(5) || Q(6), x = Q(8) || Q(9), N = Q(11) || Q(12), fb = N && 0 <= w.conpare(Qa, "1.9.1"), Ra = Q(13), $a = Q(15), Na = Q(16) || Q(17), Nb = Q(10) || Q(25), pb = Q(20) || Q(22), qb = Q(23), rb = Q(21), hb = Q(24), Bb = pb || qb || rb || hb, Ob = pb && ta(La.userAgent.split("Edg/")[1]), Vb = ta(La.appVersion.split("Trident/")[1]) + 4, sb = va(35) || va(36) || va(37), pa = (Ma ? "ie5mac" : 5.5 > l ? "ie5win" : 6 > l ? 
  "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : N && !fb ? 1.4 <= N ? "gck19" : 1.3 <= N ? "gck13" : 1 <= N ? "gck12" : .9 <= N ? "gck09" : .8 <= N ? "gck08" : "gck07" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var ib, za, jb, Sa = 8 > l || 7.2 > x ? !1 : D, Cb = eb.transform !== D ? "transform" : eb["-o-transform"] !== D ? "-o-transform" : eb["-ms-transform"] !== D ? "-ms-transform" : eb.MozTransform !== D ? "-moz-transform" : eb["-webkit-transform"] !== D ? "-webkit-transform" : "", Da = [], Db = [], y = [], Eb, Wa, gb;
  525 > $a || 10 > x || N && !fb || 2.2 > rb || Q(25) || 10 > Q(3) || va(32) || va(30) || va(3);
  var aa, Fb, Gb, Pb, Qb, kb, Hb, Ib = sa.now || function() {
    return +new sa();
  };
  (function() {
    function k() {
      for (var K, a = 0, b = Ib(); a < da.length;) {
        b < da[0].t ? ++a : (K = da.splice(a, 1)[0], K.f(K.p));
      }
      wa = da.length ? h(k, fa) : 0;
    }
    function C() {
      for (var K, a = 0; a < ka.length; ++a) {
        K = ka[a], K.f();
      }
    }
    function ca() {
      xa && (xa = m(xa));
    }
    function ya() {
      wa && (wa = Mb(wa));
    }
    Gb = function(K) {
      ka.length || (xa = db(C, qa));
      ka.push({f:K, l:++Aa});
      return Aa;
    };
    Pb = function() {
      xa && (ca(), xa = db(C, qa));
    };
    Qb = ca;
    var ka = [], qa = 500, Aa = 0, xa;
    if (5 > l || Ma) {
      P._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    aa = function(K, a, b) {
      da.length || (wa = h(k, fa));
      da.push({f:K, p:a, l:++W, t:Ib() + (fa < b ? b : fa)});
      return W;
    };
    Fb = function(K) {
      for (var a = da.length, b; b = da[--a];) {
        if (b.l === K) {
          da.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    kb = function() {
      wa && (ya(), wa = h(k, fa));
    };
    Hb = ya;
    var da = [], fa = 16, W = 0, wa;
    if (5 > l || Ma) {
      P._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var ab, Xa, Ea, lb, Jb, Ba, wb, Rb, Sb, p, q, I, H, mb, tb, Fa, ma, na, xb, ba, Ia;
  (function() {
    function k(a, b, g) {
      var r = ["<", a], t = 1, B, oa;
      if (b) {
        for (B in b) {
          var J = b[B];
          if (null != J && "" !== J) {
            if ("style" === B) {
              r[++t] = ' style="';
              for (oa in J) {
                for (var Oa = ++t, la, R = [], f = oa.split(""), c = f.length; c;) {
                  la = f[--c], "A" <= la && "Z" >= la && (la = "-" + la.toLowerCase()), R[c] = la;
                }
                r[Oa] = R.join("") + ":" + J[oa] + ";";
              }
              r[++t] = '"';
            } else {
              "className" === B && (B = "class"), r[++t] = " " + B + '="' + J + '"';
            }
          }
        }
      }
      r[++t] = ">";
      null != g && (W && "font" !== a ? r[++t] = "<FONT>" + C(g) + "</FONT>" : r[++t] = C(g));
      r[++t] = "</" + a + ">";
      return r.join("");
    }
    function C(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function ca(a) {
      var b = a.split("-"), g = b.length;
      if (2 > g) {
        return a;
      }
      for (; 1 < g;) {
        a = b[--g], b[g] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function ya(a) {
      a = "*" === a && 6 > l ? "*" !== a ? z.all.tags(a.toUpperCase()) : z.all : z.getElementsByTagName(a);
      for (var b = [], g = 0, r = a.length; g < r; ++g) {
        b[g] = a[g];
      }
      return b;
    }
    function ka(a) {
      return W ? a.parentElement : a.parentNode;
    }
    function qa(a, b, g, r, t, B) {
      if (W) {
        var oa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var J = lb(2 > a ? Ea(b) : b);
        J = 2 > a ? J.indexOf(b) + a : J.length;
        b.insertAdjacentHTML(oa, k(g, r, t));
        b = lb(b)[J];
        null != t && ("font" === g ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (wa) {
        b = z.createElement(k(g, r));
      } else {
        b = B ? z.createElementNS("http://www.w3.org/2000/svg", g) : z.createElement(g);
        if (r) {
          for (oa in r) {
            if ((a = r[oa]) || 0 === a) {
              switch(oa) {
                case "class":
                case "className":
                  Fa(b, a);
                  break;
                case "style":
                  B = b.style;
                  for (J in a) {
                    B[J] = a[J];
                  }
                  break;
                default:
                  H(b, oa, a);
              }
            }
          }
          !x || "a" !== g && "A" !== g || !r.href || r["tag-index"] || r.tagIndex || H(b, "tagIndex", "-0");
        }
        K || null != t && Aa(b, t);
      }
      return b;
    }
    function Aa(a, b) {
      if (W) {
        return qa(2, a, "font", D, b);
      }
      var g = z.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function xa(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function da(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function fa(a, b, g) {
      if (8 > x || 5.5 > l) {
        b = ca(b);
      }
      a.style[b] = g;
    }
    var W = 5 > l;
    E = ya("html")[0];
    Va = ya("head")[0];
    ab = ya;
    Xa = function(a) {
      var b = [], g = 0, r, t = -1;
      if (9 > l || !z.getElementsByClassName) {
        var B = 6 > l ? z.all : z.getElementsByTagName("*");
      } else {
        var oa = !0;
        B = z.getElementsByClassName(a);
      }
      for (r = B.length; g < r; ++g) {
        var J = B[g];
        if (oa || (W || 1 === J.nodeType) && da(J, a)) {
          b[++t] = J;
        }
      }
      return b;
    };
    Ea = ka;
    lb = function(a) {
      a = W ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Jb = function(a) {
      var b = !(7.03 < x && 7.2 > x) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], r = a.length, t = -1, B; r;) {
        if (B = a[--r], b || 1 === B.nodeType) {
          W && "FONT" === B.tagName || (g[++t] = B);
        }
      }
      return g;
    };
    Ba = function(a, b, g, r, t) {
      b = qa(2, a, b, g, r, t);
      W || (a.appendChild(b), K && null != r && Aa(b, r));
      return b;
    };
    wb = function(a, b, g, r, t) {
      b = qa(0, a, b, g, r, t);
      W || (ka(a).insertBefore(b, a), K && null != r && Aa(b, r));
      return b;
    };
    Rb = Aa;
    Sb = function(a, b) {
      if (W) {
        return qa(0, a, "font", D, b);
      }
      var g = z.createTextNode("" + b);
      Ea(a).insertBefore(g, a);
      return g;
    };
    p = function(a) {
      W ? a.outerHTML = "" : Ea(a).removeChild(a);
    };
    var wa = 9 > l, K = wa;
    q = function(a) {
      return a.tagName.toUpperCase();
    };
    I = function(a, b) {
      if (8 > x || 5.5 > l) {
        b = ca(b);
      }
      var g = a.getAttribute(b);
      return x && "tabIndex" === b ? "-0" === g ? "" : "" === g ? "-1" : g : g || "";
    };
    H = function(a, b, g) {
      if (x && "tab-index" === b) {
        "-1" === g ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", g);
      } else {
        if (8 > x || 5.5 > l) {
          b = ca(b);
        }
        a.setAttribute(b, g);
      }
    };
    mb = function(a, b) {
      if (x && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > x || 5.5 > l) {
          b = ca(b);
        }
        a.removeAttribute(b);
      }
    };
    tb = function(a, b) {
      if (x && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > x || 5.5 > l) {
        b = ca(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Fa = xa;
    ma = da;
    na = function(a, b) {
      var g;
      if (!da(a, b)) {
        if (g = a.className) {
          g += " ";
        }
        xa(a, g + b);
      }
    };
    xb = function(a, b) {
      if (da(a, b)) {
        var g = a.className.split(" ");
        g.splice(g.indexOf(b), 1);
        xa(a, g.join(" "));
      }
    };
    ba = fa;
    Ia = function(a, b) {
      var g, r = -1, t;
      if (5.5 > l) {
        if (g = 5.5 > l ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (g = g.split(";"); t = g[++r];) {
            fa(a, t.split(":")[0], "");
          }
        }
        if (b) {
          for (r = -1, g = b.split(";"); t = g[++r];) {
            var B = t.split(":")[0];
            fa(a, B, t.substr(B.length + 1));
          }
        }
      } else if (7.1 > x) {
        if (a.setAttribute("style", ""), b) {
          for (g = b.split(";"); t = g[++r];) {
            t = t.split(":"), fa(a, t[0], t[1]);
          }
        }
      } else {
        9 > x || 1 > N ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ja, Kb, bb, v, Y, Z, Ha, ea, Tb;
  (function() {
    function k() {
      return J ? la ? 2 : Oa ? 3 : 1 : 0;
    }
    function C(f) {
      Kb(P, "load", C);
      C = D;
      ya(Da, f, !0);
      bb = Da = D;
    }
    function ca(f, c) {
      Y(function() {
        var n = da(f);
        c(n);
        n.addListener(c);
        return !0;
      });
    }
    function ya(f, c, n) {
      for (var e = 0; e < f.length; ++e) {
        !0 === f[e](c) && (f.splice(e, 1), --e);
      }
      n && (f.length = 0);
    }
    function ka(f, c, n) {
      Da || W.length || aa(qa);
      W.push(f, c, n);
    }
    function qa() {
      var f = W, c;
      for (W = []; c = f.shift();) {
        ya(c, f.shift(), f.shift());
      }
    }
    function Aa(f) {
      var c = f || event;
      f = K[c.type];
      var n = -1, e, u;
      l ? (c.target = c.srcElement, c.preventDefault = o, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : b && (c.j = c.stopPropagation, c.stopPropagation = function() {
        u = !0;
      });
      for (; e = f[++n];) {
        e.i === this ? (this.g = e.h, l && (c.currentTarget = this), this.g(c), l ? (this.g = ia, this.g = D) : delete this.g) : 7.2 > x && this === z && e.i === P && (P.g = e.h, P.g(c), delete P.g);
      }
      if (l) {
        return c.preventDefault = c.stopPropagation = ia, c.preventDefault = c.stopPropagation = D, c.returnValue;
      }
      b && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (r = !0), u && !r && c.j(), c.j = c.stopPropagation = D);
      function o() {
        c.returnValue = !1;
      }
      o = !1;
    }
    function xa() {
      var f = 9 === fa.offsetWidth;
      Ha !== f && ka(Db, Ha = f);
    }
    var da = P.matchMedia, fa, W = [];
    Da.push(function() {
      ca = D;
      fa = Ba(M, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      bb(function() {
        W.length && aa(qa);
      });
    });
    ja = function(f, c, n, e) {
      if (g) {
        f.addEventListener(c, n, e ? wa ? e : e.capture || !0 === e : !1);
      } else {
        var u = {i:f, h:n};
        e = K[c];
        var F = "on" + c, G, L;
        if (e) {
          for (G = e.length; L = e[--G];) {
            if (L.i === f && L.h === n) {
              return;
            }
          }
          K[c].push(u);
        } else {
          K[c] = e = [u], a || (c = f[F], "function" === typeof c && c !== Aa && e.unshift({i:f, h:c}));
        }
        a ? f.attachEvent(F, Aa) : f[F] = Aa;
      }
    };
    Kb = function(f, c, n, e) {
      if (g) {
        f.removeEventListener(c, n, e ? wa ? e : e.capture || !0 === e : !1);
      } else {
        e = K[c];
        c = "on" + c;
        var u, F, G;
        if (e) {
          for (u = e.length; F = e[--u];) {
            F.i === f && (F.h === n ? e.splice(u, 1) : G = !0);
          }
          G || (a ? f.detachEvent(c, Aa) : l ? (f[c] = ia, f[c] = null) : delete f[c]);
        }
      }
    };
    var wa = !l && !Ma && (new cb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), K = {}, a = !1, b = 525.13 > $a, g = !b && !Ma && P.addEventListener, r;
    b && E.addEventListener("click", function(f) {
      if (r) {
        return r = !1, f.preventDefault(), !1;
      }
    });
    bb = function(f) {
      Da.push(f);
    };
    v = function(f) {
      t && t.push(f);
    };
    var t = [];
    if (419.3 >= $a) {
      var B = function() {
        if (B) {
          var f = z.readyState;
          "loaded" === f || "complete" === f ? (B = D, C()) : aa(B);
        }
      };
      aa(B);
    } else {
      ja(P, "load", C);
    }
    l || .9 <= N && 1.8 > N ? ja(P, "unload", function(f) {
      ya(t, f, !0);
    }) : t = D;
    Y = function(f) {
      Db.push(f);
    };
    bb(function() {
      xa();
      Gb(xa);
    });
    Z = function(f) {
      y && y.push(f);
    };
    var oa = 60 > N || Ra, J, Oa, la;
    if (89 <= N || 89 <= pb || sb && 79 <= Ob || da && (da("(forced-colors:none)").matches || da("(forced-colors:active)").matches)) {
      Tb = !0, ca("(forced-colors:active)", function(f) {
        J = f.matches;
        ea = k();
        ka(y, ea);
      });
    } else if (10 <= l || Ab || sb && Ob) {
      Tb = !0, ca("(-ms-high-contrast:black-on-white)", function(f) {
        J = Oa = f.matches;
        ea !== k() && (ea = k(), ka(y, ea));
      }), ca("(-ms-high-contrast:white-on-black)", function(f) {
        J = la = f.matches;
        ea !== k() && (ea = k(), ka(y, ea));
      }), ca("(-ms-high-contrast:active)", function(f) {
        J = f.matches;
        ea !== k() && (ea = k(), ka(y, ea));
      });
    } else if (sb && (l || N && 0 <= w.conpare(Qa, "1.8.1") || Ra)) {
      var R = function() {
        function f(e, u) {
          if (u && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var F = e.split("(")[1].split(",");
          return ta(F[0]) + ta(F[1]) + ta(F[2]);
        }
        var c = z.defaultView;
        var n = c ? c.getComputedStyle(fa, null) : fa.currentStyle;
        c = (n && n.color || "").split(" ").join("");
        n = (n && n.backgroundColor || "").split(" ").join("");
        c && (J = "#123456" !== c && "rgb(18,52,86)" !== c, Oa = f(c) < f(n, !0), la = f(c) > f(n, !0), ea !== k() && (ea = k(), ka(y, ea, oa)));
      };
      Y(function(f) {
        if (f) {
          return ba(fa, "color", "#123456"), ba(fa, "backgroundColor", "#123456"), oa ? (R(), y = D) : Gb(R), R = D, !0;
        }
      });
    } else {
      y = k = D;
    }
  })();
  (function() {
    function k(e) {
      b(e);
      c && !e && p(c);
      b = g = r = t = B = oa = la = R = f = n = c = D;
    }
    function C(e) {
      z.fonts.load('1.6em "' + e + '"').then(function() {
        var u;
        (u = ka(g)) ? aa(k, u) : ya(!0);
      }, function() {
        Sa !== D ? qa(Sa) : Eb(qa);
      });
    }
    function ca(e) {
      return z.hidden || z.msHidden || z.mozHidden || z.webkitHidden ? (Oa = new sa() - 0, !1) : e < new sa() - Oa;
    }
    function ya(e) {
      var u;
      e && (Oa = new sa() - 0);
      (u = ka(g)) ? k(u) : ca(J) ? la || fa ? k(0) : Sa !== D ? qa(Sa) : Eb(qa) : aa(ya);
    }
    function ka(e) {
      var u = 0, F = -1, G = 0;
      if (!n) {
        var L = -1;
        var S;
        R = Ba(M, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, K);
        for (n = {}; S = a[++L];) {
          ba(R, "fontFamily", S), n[S] = R.offsetWidth;
        }
      }
      for (5 > l ? R || (R = Ba(M, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, K)) : M.appendChild(R); L = a[++F];) {
        if (ba(R, "fontFamily", '"' + e + '",' + L), R.offsetWidth !== n[L]) {
          u = 1;
          break;
        }
      }
      !l && u && B && (R.innerHTML = B, e = R.offsetWidth, R.innerHTML = oa, G = e === R.offsetWidth ? 1 : 0, R.innerHTML = K);
      p(R);
      5 > l && (R = D);
      return u + G;
    }
    function qa(e) {
      e ? (la = !0, Aa(!0)) : k(0);
    }
    function Aa(e) {
      var u;
      if (r) {
        for (u in e && (Oa = new sa() - 0), r) {
          ka(u) ? (f = Ba(M, "div", {"aria-hidden":"true", className:t, id:t}), c = Ba(Va, "link", {type:"text/css", rel:"stylesheet", href:r[u]}), aa(xa, !0)) : ca(wa) ? (delete r[u], aa(Aa, !0)) : aa(Aa);
          return;
        }
      }
      k(0);
    }
    function xa(e) {
      e && (Oa = new sa() - 0);
      1 < f.offsetWidth ? (p(f), J = wa, aa(ya, !0)) : ca(J) ? 528 > $a ? (p(f), J = wa, aa(ya, !0)) : (p(f), k(0)) : aa(xa);
    }
    Db.splice(0, 0, function() {
      if (Ha) {
        jb = 8 <= l || Ab || 9.5 <= x || fb || Ra || 522 <= $a || 3 <= Na || Nb || Bb ? 3 : 7.2 <= x ? 2 : 6 <= x || N ? 1 : 0;
        if (!jb && !l && !Ma) {
          var e = Ba(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          jb = 6 <= e.offsetWidth ? 2 : 0;
          p(e);
        }
        return !0;
      }
    });
    Eb = !1 === Sa ? function(e) {
      aa(e, Sa);
    } : function(e) {
      function u(L) {
        G = Fb(G);
        Sa = L;
        F.onload = F.onerror = ia;
        aa(e, L);
      }
      if (Sa !== D) {
        aa(e, Sa);
      } else if (8 > l) {
        aa(e, !1);
      } else {
        var F = new Image(), G = aa(function() {
          G && u(!1);
        });
        F.onerror = function() {
          u(!1);
        };
        F.onload = function() {
          u(1 === F.width * F.height);
        };
        F.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > l && bb(function() {
      var e = Ba(M, "div");
      Ia(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ib = 1 < e.offsetHeight;
      Ia(e, "");
      p(e);
    });
    Wa = function(e, u) {
      function F() {
        if (L || !S || G.complete) {
          var O = !!G.width;
          za = za || O;
          aa(e, O);
          G.onerror = G.onload = ia;
          G = e = D;
        } else {
          --S, aa(F);
        }
      }
      var G = new Image(), L, S = 99;
      G.onerror = function() {
        L = !0;
      };
      G.onload = function() {
        L = !0;
      };
      G.src = u;
      aa(F);
    };
    gb = function(e, u, F, G, L, S, O) {
      b = e;
      g = u;
      r = F;
      t = G;
      B = L;
      oa = S;
      J = O || W;
      da ? aa(k, 0) : !z.fonts || 603 > $a ? ya(!0) : C(g);
    };
    var da = 525 > $a || 10 > x || N && !fb || 2.2 > Q(21) || Q(25) || 10 > Q(3) || va(32) || va(30) || va(3), fa = 9 > l || 2 > pb || 12 > x, W = 5E3, wa = 100, K = "mmmmmmmmmmlli", a = ["sans-serif", "serif"], b, g, r, t, B, oa, J, Oa, la, R, f, c, n;
  })();
  var Ja = String.fromCharCode, ub = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Ja(960), ")", "(", Ja(234), Ja(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Ja(9824), "\u2190", Ja(9829), Ja(9830), Ja(9827), Ja(956), "\u03a9", "\u2193", "\u2192", "%", Ja(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Ja(9619)], Zb = (9 === l || N && 0 <= w.conpare(Qa, "1.8.1") || Ra) && !Tb, nb = [], ob, Ta, Lb = 7.2 > x ? function() {
    ob = !ob;
    for (var k = -1, C; C = nb[++k];) {
      -1 !== C.className.indexOf("pbAlp") ? ba(C, "display", ob ? "" : "none") : (na(C, ob ? "pbChrCS" : "pbChr00"), xb(C, ob ? "pbChr00" : "pbChrCS"));
    }
  } : Zb ? function() {
    ob = !ob;
    for (var k = -1, C; C = nb[++k];) {
      ba(C, "opacity", ob ? 1 : 0);
    }
  } : D;
  var Wb = Ua.startBlinkingIfCursor = function(k) {
    Lb ? ma(k, "pbChrCS") && (Ta || !x && !ea || (Ta = db(Lb, 400)), -1 === nb.indexOf(k) && nb.push(k)) : nb = D;
  };
  Ua.stopBlinkingIfCursor = function(k) {
    Lb && (k = nb.indexOf(k), 0 <= k && (nb.splice(k, 1), !nb.length && Ta && (m(Ta), Ta = 0)));
  };
  Zb && Z(function(k) {
    k ? Ta || (Ta = db(Lb, 400)) : Ta && (m(Ta), Ta = 0);
  });
  Lb && v(function() {
    Ta && m(Ta);
  });
  Tb || Z(function(k) {
    k ? (H(E, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (Cb || 9 === l || 5.5 <= l && 9 > l && ib) && na(E, "jsCanRotate")) : (mb(E, "forced-colors"), xb(E, "jsCanRotate"));
  });
  (function() {
    function k(c) {
      (B = c) ? ka() : za ? ya(!0) : za !== D ? ka() : Wa(ya, oa);
    }
    function C() {
      C = D;
      gb(k, "PB-100", {"PB-100_canTTF":Ya + "pbFont/ttf.css", "PB-100_canWOFF":Ya + "pbFont/woff.css", "PB-100_canEOT":Ya + "pbFont/eot.css", "PB-100_canSVG":Ya + "pbFont/svg.css"}, "pbFont-testCssReady", K, "i", 5E3);
    }
    function ca(c) {
      this.focus();
      c.preventDefault();
      c.stopPropagation();
    }
    function ya(c) {
      c && na(M, "pbList-noWebFont");
      ka();
    }
    function ka() {
      for (k = gb = D; t.length;) {
        qa(t.shift(), t.shift());
      }
    }
    function qa(c, n) {
      function e(O) {
        O = lb(O);
        for (var A = -1, X; X = O[++A];) {
          switch(X.nodeType) {
            case 1:
              e(X);
              break;
            case 3:
              X.data && F(X.data) && G.push(X);
          }
        }
      }
      function u(O) {
        var A = O.children, X = 0, Za = A.length;
        if (Za) {
          for (; X < Za; ++X) {
            u(A[X]);
          }
        } else {
          (A = O.innerText) && F(A) && G.push(O);
        }
      }
      function F(O) {
        return O.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var G = [], L;
      if (k) {
        -1 === t.indexOf(c) && (t.push(c, n), J && C && C());
      } else {
        var S = t.indexOf(c);
        0 <= S && t.splice(S, 2);
        for (5 > l ? u(c) : e(c); L = G.shift();) {
          S = 5 > l ? L.innerText : L.data, 2 !== B && (S = S.split(K).join(W)), n ? 5 > l ? L.innerText = S : L.data = S : Aa(S.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(wa).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fa).split("&amp;").join("&"), L);
        }
      }
    }
    function Aa(c, n) {
      function e(ra, T) {
        for (var Ga = ""; T;) {
          T & 1 && (Ga += ra), T >>= 1, ra += ra;
        }
        return Ga;
      }
      function u(ra, T, Ga) {
        for (var yb, ac = -1, Xb, Yb; yb = T[++ac];) {
          for (; 0 <= (Xb = ra.indexOf(yb));) {
            Yb = yb.length, ra = ra.substr(0, Xb) + e(Ga, Yb) + ra.substr(Xb + Yb);
          }
        }
        return ra;
      }
      function F(ra) {
        var T = ta(ra), Ga = "" + T;
        return 0 < T && T === T | 0 && (T = ra.indexOf(Ga) + Ga.length, T <= ra.length) ? T : 0;
      }
      var G = " area line str cmd fnc syb".split(" "), L = 5 > l || 1 === n.nodeType, S = [], O = "", A, X = -1, Za, vb, Ka;
      if (L) {
        if (R) {
          var Ub = n.style.visibility;
          ba(n, "visibility", "hidden");
        }
        n.innerHTML = "";
      }
      if (f) {
        var zb = n;
        n = z.createDocumentFragment();
      }
      if (function(ra) {
        var T = ra.indexOf("P");
        if (-1 === T) {
          return !1;
        }
        T = ta(ra.charAt(T + 1));
        return 0 <= T && 9 >= T;
      }(c)) {
        O = e("+", c.length);
      } else {
        0 <= (A = F(c)) && (O = e("|", A), X = A, --X);
        for (; A = c.charAt(++X);) {
          A === fa || Za ? (O += "~", A === fa && (Za = !Za)) : O += A;
        }
        O = u(O, r, "^");
        O = u(O, b, "{");
        O = u(O, g, "}");
      }
      X = 0;
      for (Za = c.length; X < Za; ++X) {
        A = c.charAt(X);
        var U = A === a;
        var ha = " " === A;
        A = U ? " " : A;
        var V = O.charAt(X);
        var Pa = (vb = Ca) && U;
        var Ca = "|" === V;
        V = G["+|~{}^".indexOf(V) + 1];
        "\n" !== A ? (B || !za ? (2 === B && c.substr(X, 2) === K && (A = K, ++X), V = ha && "str" === V ? "pbList-strsp" : U ? "" : !ha && V ? "pbList-" + V : "") : (U = ub.indexOf(A), U = -1 === U ? "" : ub.indexOf(A).toString(16).toUpperCase(), U = (U = 1 === U.length ? "0" + U : U) ? "pbChr" + U : "", V = ha && "str" === V ? "pbList-strsp" : ha || !U ? "" : V ? (U ? U + " " : "") + "pbList-" + V : U), U = D, Pa ? (A = 6 <= l && 8 > l ? " " : a, V = "") : Ca && (N && !fb || 9.5 > x) ? (Ca && !vb && 
        (Ka = 4 - (ta(c.substr(X)) + "").length), 7.5 > x ? U = la ? "position:relative;top:-4px;left:" + 12 * Ka + "px" : {position:"relative", top:"-4px", left:12 * Ka + "px"} : U = la ? "position:relative;left:" + 12 * Ka + "px" : {position:"relative", left:12 * Ka + "px"}) : ha && 7.5 > x && (V = "pbList-strsp"), la ? S.push("<font" + (V ? ' class="' + V + '"' : "") + (U ? ' style="' + U + '"' : "") + ">" + A + "</font>") : L || f ? Ba(n, "font", {"class":V, style:U}, A) : wb(n, "font", {"class":V, 
        style:U}, A)) : (vb = Ca = !1, la ? S.push(A) : L || f ? Rb(n, A) : Sb(n, A));
      }
      if (L) {
        la ? n.innerHTML = S.join("") : f && zb.appendChild(n), R && ba(n, "visibility", Ub);
      } else {
        if (la) {
          G = z.createElement("font");
          for (G.innerHTML = S.join(""); S = G.firstChild;) {
            n.parentNode.insertBefore(S, n);
          }
          p(n);
        } else {
          f ? zb.parentNode.replaceChild(n, zb) : p(n);
        }
      }
    }
    1.9 > N && Y(function(c) {
      if (c) {
        c = ab("*");
        for (var n = 0, e = c.length, u; n < e; ++n) {
          u = c[n], "B" !== q(u) && -1 !== (" " + u.className).toLowerCase().indexOf(" pbchr") && (tb(u, "title") || H(u, "title", u.textContent), u.textContent = " ");
        }
        return !0;
      }
    });
    Y(function(c) {
      if (c) {
        c = Xa("pbChrCS");
        for (var n = 0, e = c.length; n < e; ++n) {
          Wb(c[n]);
        }
        return !0;
      }
    });
    var xa = [], da = N && 0 > w.conpare(Qa, "0.9.9");
    Y(function(c) {
      function n(ha) {
        var V = I(ha, "pbTip");
        if (V) {
          var Pa = V.charAt(0);
          var Ca = "_" === Pa;
          V = (Ca ? V.charAt(2) : Pa).toUpperCase().charCodeAt(0) - 65;
          S ? Ba(ha, "div", {style:{left:7 * V + 3 + "px"}}) : (Pa = I(ha, "title"), mb(ha, "pbTip"), mb(ha, "title"), Ca = Ba(ha, "div", {className:"pbTip" + (Ca ? "Btm" : ""), style:{width:Pa.length + u + "em", left:7 * V - (da ? 0 : 5) + "px"}}, Pa), Ca = Ba(Ca, "div"), .9 <= N && da && ba(Ca, "left", "2px"));
        }
        L && 0 <= ha.className.indexOf("pbColor") && Ba(ha, "u");
      }
      function e(ha, V) {
        var Pa = I(ha, "pbGhst"), Ca = ha.className, ra = Ca.split("pbCsr")[1] || "", T = Ca.split("pbAlp")[1] || "";
        if ("CS" === Pa) {
          var Ga = "_";
        } else {
          Ga = Pa, 3 === Ga.length && (Ga = Ga.substr(0, 2)), Ga = ub[parseInt(Ga, 16)] || "~";
        }
        var yb;
        ra = ra.split(" ")[0];
        if (T = ta(T.split(" ")[0])) {
          F && (Ca = Ca.split("pbChr")[1].split(" ")[0], ba(ha, "backgroundPosition", d(Ca, 2, Ub) + "px " + -24 * (10 - T) + "px")), !V && G && wb(ha, "a").appendChild(ha);
        }
        Pa && (T = 10 - T, F && (yb = {backgroundPosition:d(Pa, 2, Ub) + "px " + -24 * (10 - T) + "px"}), mb(ha, "pbGhst"), X = wb(ha, "b", {className:"pbChr" + Pa + " pbCsr" + ra + " pbAlp" + T, style:yb}, Ga), Wb(X));
        Wb(ha);
      }
      if (c) {
        var u = 6 > l ? 2 : 0, F = 7.2 > x || .9 > N || Ma, G = 1.1 === N, L = 1.4 > N;
        c = ab("SAMP");
        var S = 8 === l, O = jb, A, X, Za, vb, Ka;
        ib && na(M, "pbLCD-AX");
        if (c.length) {
          for (Za = -1; A = c[++Za];) {
            if (ma(Ea(A), "pbLCD")) {
              var Ub = ma(A, "PB-120") || ma(A, "FX-795P");
              var zb = Jb(A);
              for (A = zb.length; Ka = zb[--A];) {
                switch(q(Ka)) {
                  case "A":
                    (2 > O || S) && n(Ka);
                    if (2 > O) {
                      var U = Jb(Ka);
                      for (vb = U.length; vb;) {
                        e(U[--vb], !0);
                      }
                    }
                    Nb ? H(Ka, "href", "javascript:void(0)") : (ja(Ka, "click", ca), xa.push(Ka));
                    break;
                  case "B":
                    2 > O && e(Ka, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    v(function() {
      for (var c; c = xa.shift();) {
        Kb(c, "click", ca);
      }
    });
    6 === l && (new cb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(z);
    var fa = ub[7], W = ub[30], wa = ub[113], K = Ja(8337) + Ja(8331), a = Ja(160);
    Ja(8194);
    var b = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), g = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), r = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + W + ub[31]).split(""), t = [], B, oa, J;
    if (.9 <= N && 0 >= w.conpare(Qa, "0.9.1")) {
      na(E, "pbLCD-gecko09To091");
      var Oa = !0;
    }
    Y(function(c) {
      if (c) {
        oa = Ya + "pbFont/x3mask" + (Oa ? ".gecko0.9.1.gif" : ".png");
        c = ab("*");
        for (var n = -1, e; e = c[++n];) {
          ma(e, "pbList") ? qa(e) : ma(e, "pbFont") && qa(e, !0);
        }
        t.length && C();
        return !0;
      }
    });
    var la = !1, R = 8 > x, f = !la && !R && !(6 > l) && z.createDocumentFragment && !!M.replaceChild;
    Ua.prettify = qa;
  })();
  var $b = z.scripts || ab("script");
  var Ya = $b[$b.length - 1].src.split("/");
  --Ya.length;
  (Ya = Ya.join("/")) && (Ya += "/");
  6.1 > Na && ja(P, "scroll", Pb);
  v(Qb);
  6.1 > Na && ja(P, "scroll", kb);
  v(Hb);
  10 > l && (11 !== Vb || 5 !== l) || (9 > x || 1 > N || !Ma && !P.addEventListener ? z.write('<link href="' + Ya + pa + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : bb(function() {
    Ba(Va, "link", {href:Ya + "" + pa, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

