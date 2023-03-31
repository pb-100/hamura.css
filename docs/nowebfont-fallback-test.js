/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var v;
ua = [];
ua.conpare = function(Za, w) {
  var L = 0, aa, A, La = (Za + "").split("."), fb = (w + "").split("."), na = La.length;
  for (aa = fb.length; "0" === La[na - 1];) {
    --na;
  }
  for (; "0" === fb[aa - 1];) {
    --aa;
  }
  for (A = na < aa ? na : aa; L < A; ++L) {
    var ta = La[L] - 0, h = fb[L] - 0;
    if (ta !== h) {
      return ta > h ? 1 : -1;
    }
  }
  return na > aa ? 1 : na === aa ? 0 : -1;
};
(function(Za, w, L, aa, A, La, fb, na) {
  function ta(x, ea, ba) {
    ba = La(x.split(ea)[1]);
    return 0 <= ba ? ba : 0;
  }
  function h(x, ea) {
    return 0 <= x.indexOf(ea);
  }
  function Tb(x) {
    return h(x, "Linux armv") || h(x, "Linux aarch") || h(x, "Linux i686") || h(x, "Linux x86_64");
  }
  function gb(x, ea) {
    for (var ba in ea) {
      if (ba === x) {
        return !0;
      }
    }
  }
  function p(x, ea) {
    var ba = "", za = -1, Ma;
    if (x = x.split(ea)[1]) {
      for (; Ma = x.charCodeAt(++za);) {
        if (48 <= Ma && 57 >= Ma || 46 === Ma) {
          ba += x.charAt(za);
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
  function F(x) {
    for (var ea = arguments, ba = 1, za = ea[0], Ma; ba < ea.length; ++ba) {
      0 > va(za, Ma = ea[ba]) && (za = Ma);
    }
    return za;
  }
  function S(x) {
    return x === x + "" ? x : x === x - 0 ? "" + x : x.min && x.max ? x.min + "~" + x.max : x.min ? x.min + "~" : "~" + x.max;
  }
  var va = Za.conpare, d = aa.userAgent, N = aa.appVersion, hb = La(N) || 0, I = aa.platform, $a = L.documentElement, Sa = $a && $a.style, k = L.documentMode, Na = A.width;
  A = A.height;
  var Ib = w.HTMLAudioElement, B = w.performance, Q = w.Int8Array, ib = w.ontouchstart !== na, Ta = p(N, "Version/") || p(d, "Version/"), db = w.operamini, Ha = !db && w.opera, Ub = Ha && (Ha.version && "function" === typeof Ha.version ? Ha.version() : F(p(d, "Opera "), Ta, hb)), sb = w.opr, tb = !Ha && (L.all || k);
  k = tb && (k ? k : w.XMLHttpRequest ? L.getElementsByTagName ? 7 : 4 : L.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  $a = !tb && $a.msContentZoomFactor;
  var ub = !$a && (w.chrome || w.chromium), kb = !tb && function() {
    for (var x in Sa) {
      if (0 === x.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Jb = h(d, "UCWEB"), Vb = Jb && p(d, " U2/"), $b = Jb && p(d, "; wds "), vb = p(d.split("_").join("."), "; iPh OS "), la = p(d, "; Adr "), wb = h(N, "YJApp-ANDROID"), Da = h(I, "Android") || kb && h(N, "Android") || wb;
  la = p(I, "Android ") || p(N, "Android ") || p(d, "Android ") || la;
  var jb = h(I, "Linux"), lb = "MacIntel" === I && aa.standalone !== na, Oa = kb && p(d, "Goanna/"), Ua = !Oa && kb && (p(d, "rv:") || p(d.substr(d.indexOf(") Gecko/") - 11), "; ")), mb = p(d, "Firefox/"), K = p(d, "Opera/"), ab = w.FNRBrowser, Va = ta(d, "AppleWebKit/"), nb = p(d, "Chrome/"), Kb = p(N, "Iron/"), Y = p(d, "OPR/"), Wb = p(N, "KHTML/"), Lb = p(d.toLowerCase(), "iris");
  p(d, "FxiOS/");
  p(d, "CriOS/");
  p(d, "EdgiOS/");
  var Db = p(d, "Silk/"), eb = ta(d, "SamsungBrowser/"), Mb = !eb && function() {
    for (var x = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ea, ba = x.length; ea = x[--ba];) {
      if (h(d, ea)) {
        return 2 > La(Ta) ? Ta : 0.9;
      }
    }
    x = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ba = x.length; ea = x[--ba];) {
      if (h(d, ea)) {
        return Ta;
      }
    }
  }(), Nb = ub && 534.3 >= Va, xb = Tb(I), bb = xb && !h(d, I) && Tb(d);
  ib = ib && (Va || kb) && bb || !la && wb;
  wb = !!w.ReactNativeWebView;
  xb = xb && function() {
    for (var x in w) {
      if (0 === x.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Wa = (bb = w.puffinDevice) && bb.clientInfo;
  Wa = (bb = Wa && "iOS" === Wa.os && Wa.osVersion) && Wa.model;
  var Eb = !k && L.registerElement, yb = !k && L.execCommand, Ob = w.webkitCancelAnimationFrame, ob = jb && Eb && "11.0.696.34" === nb, Fb = w._firefoxTV_playbackStateObserverJava, Pb = ta(d, "diordnA ");
  if ("Nitro" === I) {
    var m = 1;
  } else if ("Nintendo DSi" === I) {
    m = 2;
    var r = K;
  } else if ("New Nintendo 3DS" === I || h(d, "iPhone OS 6_0") && 320 === Na && 240 === A) {
    m = 4, r = p(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === I) {
    m = 3, r = p(d, "Version/"), Va = 535;
  } else if ("Nintendo Swicth" === I) {
    m = 7, r = p(N, "NintendoBrowser/");
  } else if (w.wiiu) {
    m = 6;
    r = p(N, "NintendoBrowser/");
    var O = 15, R = p(N, "AppleWebKit/") || (Ob ? 536 : 534);
    r || (r = Ob ? 4 : 2, h(N, "Macintosh;") || h(N, "Windows NT") && h(N, "Touch"));
  } else if (Ha && Ha.wiiremote) {
    m = 5, r = p(d, "Wii; U; ; ");
  } else if (K = p(d, "PlayStation Vita ")) {
    m = 10, r = K;
  } else if (K = p(d, "(PlayStation Portable); ")) {
    m = 8;
    r = K;
    var Pa = 3.3;
  } else if (K = p(d, "PLAYSTATION 3; ") || p(d, "PLAYSTATION 3 ")) {
    m = 11, r = K, 0 > va("4.10", K) && (O = 26, R = K);
  } else if (h(d, "Xbox One")) {
    m = 15, r = 1;
  } else if (h(d, "Xbox")) {
    m = 14, r = 1;
  } else if (2 === hb && h(d, "Sony/COM2/")) {
    m = 17;
    r = 2;
    Pa = 3.4;
    var pb = !0;
  } else if (0 === I.indexOf("iP") || vb || bb || lb) {
    if (bb) {
      switch(r = bb, Wa.substr(0, 4)) {
        case "iPho":
          var Aa = 0;
          p(Wa, Aa);
          var oa = !0;
          break;
        case "iPad":
          Aa = 1;
          p(Wa, Aa);
          var pa = !0;
          break;
        case "iPod":
          Aa = 2;
          p(Wa, Aa);
          var Qb = !0;
      }
    } else {
      vb ? r = vb : (r = p(N.split("_").join("."), "OS "), gb("isSecureContext", w), gb("enableWebGL", w), gb("sameOrigin", w));
      if (!r || ab) {
        r = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : aa.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : fb.isNaN ? 9.2 : w.SharedWorker ? B && B.now ? 8 : 8.4 : yb ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : Q ? 4.3 : Ib ? 4.1 : 3.2;
      }
      var Ea = Na === 1.5 * A || 1.5 * Na === A;
      0 === I.indexOf("iPhone") ? (Aa = 0, oa = !0) : 0 === I.indexOf("iPad") || lb ? (Aa = 1, pa = !0) : 0 === I.indexOf("iPod") && (Aa = 2, Qb = !0);
    }
    O = !bb && (aa.standalone || (pa || 12 > r) && gb("webkitFullscreenEnabled", L) || 11 <= r && 13 > r && aa.mediaDevices) ? 16 : 17;
    m = 24;
    R = r;
  } else if (h(d, "Kobo")) {
    m = 18, O = 21, R = 2.2, Da = !0;
  } else if (h(d, "EBRD")) {
    m = 19, O = 21, R = 2.2;
  } else if (K = p(d, "CrOS x86_64 ") || p(d, "CrOS aarch64 ") || p(d, "CrOS i686 ") || p(d, "CrOS armv7l ")) {
    m = 28, r = K;
  } else if (w.onmoztimechange !== na) {
    m = 29, r = 18.1 > Ua ? "1.0.1" : 19 > Ua ? 1.1 : 27 > Ua ? 1.2 : 29 > Ua ? 1.3 : 31 > Ua ? 1.4 : 33 > Ua ? 2 : 35 > Ua ? 2.1 : 38 > Ua ? 2.2 : 45 > Ua ? 2.5 : 2.6, h(d, "Mobile") ? oa = !0 : h(d, "Tablet") ? pa = !0 : h(d, "TV");
  } else if (w.palmGetResource) {
    m = 30, r = p(d, "webOS/") || p(d, "WEBOS") || p(d, "hpwOS/"), h(d, "webOS.TV") || h(d, "/SmartTV") || (oa = !0);
  } else if (K = p(d, "Tizen ")) {
    m = 31, r = K, O = 24, R = eb, oa = !0;
  } else if (K = p(d, "Windows Phone ") || p(N, "Windows Phone OS ") || $b) {
    m = 23, r = K, oa = !0;
  } else if ($a && "ARM" === I) {
    m = 23, r = 10, oa = !0;
  } else if (tb && h(N, "ZuneWP")) {
    m = 23, r = 11 === k ? 8.1 : 10 === k ? 8 : 9 === k ? 7.5 : 7 === k ? 7 : "?", oa = !0;
  } else if (h(d, "FOMA;")) {
    m = 16, oa = !0;
  } else if (h(d, "SoftBank;")) {
    m = 16, oa = !0;
  } else if (h(d, "KFMUWI")) {
    var xa = !0;
    r = 6.3;
    var ja = pa = !0;
  } else if (h(d, "KFKAWI")) {
    xa = !0, r = 6, ja = pa = !0;
  } else if (h(d, "KFSUWI") || h(d, "KFAUWI") || h(d, "KFDOWI")) {
    xa = !0, r = 5, ja = pa = !0;
  } else if (h(d, "KFGIWI")) {
    xa = !0, r = 5, ja = pa = !0;
  } else if (h(d, "KFARWI") || h(d, "KFSAWA") || h(d, "KFSAWI")) {
    xa = !0, r = 5 <= La(la) ? 5 : 4, ja = pa = !0;
  } else if (h(d, "KFSOWI") || h(d, "KFTHWA") || h(d, "KFTHWI") || h(d, "KFAPWA") || h(d, "KFAPWI")) {
    xa = !0, r = 3, ja = pa = !0;
  } else if (h(d, "KFOT") || h(d, "KFTT") || h(d, "KFJWA") || h(d, "KFJWI")) {
    xa = !0, r = 2, ja = pa = !0;
  } else if (h(d, "Kindle Fire")) {
    xa = !0, r = 1, ja = pa = !0;
  } else if (K = p(d, "Kindle/")) {
    m = 20, r = K, O = 21, R = 2.2;
  } else if (Fb) {
    xa = !0, r = la || Pb, ja = !0;
  } else if (h(d, "AmazonWebAppPlatform") || h(d, "; AFT")) {
    xa = !0, r = la, ja = !0;
  } else if (h(d, "MeeGo")) {
    m = 32;
  } else if (h(d, "Maemo")) {
    m = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Lb) {
    m = 22, pb = !0;
  } else if ("WinCE" === I) {
    m = 21, pb = !0;
  } else if (0 === I.indexOf("Win")) {
    m = "Win16" === I ? 35 : "Win32" === I ? 36 : "Win64" === I ? 37 : 0, r = p(d, "Windows NT ") || p(d, "Windows ");
  } else if (0 === I.indexOf("Mac")) {
    m = "Mac68K" === I ? 39 : "MacPowerPC" === I || "MacPPC" === I ? 38 : "MacIntel" === I ? 40 : 0;
    if (K = p(d.split("_").join("."), "Mac OS X ")) {
      r = K;
    }
    var Rb = !0;
  } else if (h(d, "BlackBerry") || h(d, "BB10")) {
    m = 34, r = Ta, oa = !0;
  } else if (h(d, "SunOS") || h(d, "Sun Solaris")) {
    m = 42;
  } else if (h(d, "FreeBSD")) {
    m = 43;
  } else if (h(d, "OpenBSD")) {
    m = 44;
  } else if (h(d, "NetBSD")) {
    m = 45;
  } else if (Da && kb) {
    h(d, "Android 4.4;") ? Ea = {min:2.3} : 4 <= La(la) ? Ea = la : Ea = {min:2.2}, r = Ea;
  } else if (Da && Ha) {
    la ? Ea = la : Ea = {min:1.6}, r = Ea, h(d, "Tablet") ? pa = !0 : oa = !0;
  } else if (la) {
    r = la, Da = !0;
  } else if (jb && ib || wb || xb) {
    var Fa = !0;
    eb ? Ea = {min:4.4} : ub && !Nb || sb || Y ? Ea = {min:4} : (Ea = la = Sa.touchAction !== na ? {min:5} : Eb ? 4.4 : Q ? aa.connection ? w.searchBoxJavaBridge_ || ub ? fb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Va ? 3 : 533 <= Va ? Ib ? 2.3 : 2.2 : 530 <= Va ? 2 : 1.5, Mb && (O = 24, R = Mb));
    r = Ea;
    Da = !0;
  } else {
    ob ? (r = {min:5}, Fa = Da = !0) : jb && (h(d, "Ubuntu") ? m = 46 : (K = p(d, "Mint/")) ? (m = 47, r = K) : (K = p(d, "Fedora/")) ? (m = 48, r = K) : m = h(d, "Gentoo") ? 49 : 50);
  }
  xa || Da && Fa && Db ? m = 27 : Da && (m = m || 26);
  O || (ja = ja || Da, Ha ? (O = ja || pb || oa || pa ? 9 : 8, R = Ub) : tb ? (Ea = ta(N, "Trident/") + 4, O = pb || oa || pa || Qb ? 3 : Rb && 5 <= k ? 7 : 2, R = k) : $a ? (O = 23 === m ? 6 : 5, R = p(N, "Edge/")) : Oa ? (O = 13, R = Oa) : kb ? (O = ja ? 12 : 11, R = Ua || mb) : eb ? (O = 24, R = eb) : (K = Pa || p(d, "NetFront/")) ? (O = 18, R = K) : (K = p(d, "iCab")) ? (O = 19, R = K) : (K = F(p(d, "Opera Mini/"), p(d, "Opera Mobi/")) || db && Ta) ? (O = 10, R = K, m || (h(d, "iPhone") ? Aa = 
  0 : h(d, "iPad") ? Aa = 1 : h(d, "iPod") && (Aa = 2), Aa && (m = 24))) : Jb ? (O = 25, R = Vb) : Wb ? (O = 14, R = hb) : Da && Nb ? (O = 21, R = la) : ub || sb || Y ? (O = ja ? 22 : 20, R = nb || Kb) : Da && Eb ? (O = 23, R = 5 > La(la) ? la : nb) : Da && (Ta || Fa) ? (O = 21, R = la) : nb ? (O = ja ? 22 : 20, R = nb) : Va && (O = 15, R = Va));
  m && (Za[2] = m, r && (Za[3] = S(r)));
  O && (Za[0] = O, R && (Za[1] = S(R)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var zb;
(function(Za, w, L, aa, A, La, fb, na, ta, h, Tb, gb, p, F) {
  function S(g) {
    if (w[0] === g) {
      return Sa === Sa + "" ? ta(Sa) : Sa;
    }
  }
  function va(g) {
    var y = w[3];
    if (w[2] === g) {
      return y === y + "" ? ta(y) : y;
    }
  }
  function d(g, y, U) {
    g + "" === g && ("a" === g.charAt(2) && (U = !0, g = g.substr(0, 2)), g = "CS" === g ? 7.2 > B ? 117 : .9 > Q || 9 > k || 9 > B || Na ? 1 : 132 : parseInt(g, 16));
    U && (50 === g && (g = 128), 102 < g && 108 > g && (g += 24));
    return (g - 1) * -(6 * (y || 2));
  }
  var N = A.body, hb = N.style, I, $a, Sa = w[1], k = S(2) || S(3), Na = S(7), Ib = S(5) || S(6), B = S(8) || S(9), Q = S(11) || S(12), ib = Q && 0 <= w.conpare(Sa, "1.9.1"), Ta = S(13), db = S(15), Ha = S(16) || S(17), Ub = S(10) || S(25), sb = S(20) || S(22), tb = S(23), ub = S(21), kb = S(24), Jb = sb || tb || ub || kb, Vb = sb && ta(La.userAgent.split("Edg/")[1]), $b = ta(La.appVersion.split("Trident/")[1]) + 4, vb = va(35) || va(36) || va(37), la = .9 > Q, wb = (Na ? "ie5mac" : 5.5 > k ? "ie5win" : 
  6 > k ? "ie55" : 10 > k ? "ie" + (k | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : Q && !ib ? 1.4 <= Q ? "gck19" : 1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : la ? .8 <= Q ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var Da, jb, lb, Oa = 8 > k || 7.2 > B ? !1 : F, Ua = hb.transform !== F ? "transform" : hb["-o-transform"] !== F ? "-o-transform" : hb["-ms-transform"] !== F ? "-ms-transform" : hb.MozTransform !== F ? "-moz-transform" : hb["-webkit-transform"] !== F ? "-webkit-transform" : "", mb = [], K = [], ab = [], Va, nb, Kb;
  525 > db || 3.2 > Ha || 2.2 > ub || 10 > B || Q && !ib || S(25) || 10 > S(3) || va(32) || va(30) || va(3);
  var Y, Wb, Lb, Db = [], eb = [], Mb, Nb, xb, bb, Wa = na.now || function() {
    return +new na();
  };
  (function() {
    function g() {
      for (var H, a = 0, c = Wa(); a < ca.length;) {
        c < ca[0].t ? ++a : (H = ca.splice(a, 1)[0], H.f(H.p));
      }
      Ba = ca.length ? h(g, fa) : 0;
    }
    function y() {
      for (var H, a = 0; a < ka.length; ++a) {
        H = ka[a], H.f();
      }
    }
    function U() {
      wa && (wa = p(wa));
    }
    function ma() {
      Ba && (Ba = Tb(Ba));
    }
    v = function(H) {
      Db.push(H);
    };
    zb = function(H) {
      eb.push(H);
    };
    Lb = function(H) {
      ka.length || (wa = gb(y, qa));
      ka.push({f:H, l:++ya});
      return ya;
    };
    Mb = function() {
      wa && (U(), wa = gb(y, qa));
    };
    Nb = U;
    var ka = [], qa = 500, ya = 0, wa;
    if (5 > k || Na) {
      L._wdb_onlooptimer = y, y = "_wdb_onlooptimer()";
    }
    Y = function(H, a, c) {
      ca.length || (Ba = h(g, fa));
      ca.push({f:H, p:a, l:++V, t:Wa() + (fa < c ? c : fa)});
      return V;
    };
    Wb = function(H) {
      for (var a = ca.length, c; c = ca[--a];) {
        if (c.l === H) {
          ca.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    xb = function() {
      Ba && (ma(), Ba = h(g, fa));
    };
    bb = ma;
    var ca = [], fa = 16, V = 0, Ba;
    if (5 > k || Na) {
      L._wdb_ontimer = g, g = "_wdb_ontimer()";
    }
  })();
  var Eb, yb, Ob, ob, Fb, Pb, m, r, O, R, Pa, pb, Aa, oa, pa, Qb, Ea, xa, ja, Rb, Fa, x;
  (function() {
    function g(a, c, f) {
      var t = ["<", a], u = 1, E, ha;
      if (c) {
        for (E in c) {
          var P = c[E];
          if (null != P && "" !== P) {
            if ("style" === E) {
              t[++u] = ' style="';
              for (ha in P) {
                for (var Qa = ++u, da, Ia = [], e = ha.split(""), b = e.length; b;) {
                  da = e[--b], "A" <= da && "Z" >= da && (da = "-" + da.toLowerCase()), Ia[b] = da;
                }
                t[Qa] = Ia.join("") + ":" + P[ha] + ";";
              }
              t[++u] = '"';
            } else {
              "className" === E && (E = "class"), t[++u] = " " + E + '="' + P + '"';
            }
          }
        }
      }
      t[++u] = ">";
      null != f && (V && "font" !== a ? t[++u] = "<font>" + y(f) + "</font>" : t[++u] = y(f));
      t[++u] = "</" + a + ">";
      return t.join("");
    }
    function y(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function U(a) {
      var c = a.split("-"), f = c.length;
      if (2 > f) {
        return a;
      }
      for (; 1 < f;) {
        a = c[--f], c[f] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return c.join("");
    }
    function ma(a) {
      var c = "*" === a;
      a = V ? c ? A.all : A.all.tags(a.toUpperCase()) : 6 > k && c ? A.all : A.getElementsByTagName(a);
      c = [];
      for (var f = 0, t = a.length; f < t; ++f) {
        c[f] = a[f];
      }
      return c;
    }
    function ka(a) {
      return V ? a.parentElement : a.parentNode;
    }
    function qa(a, c, f, t, u, E) {
      if (V) {
        var ha = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var P = Fb(2 > a ? ob(c) : c);
        P = 2 > a ? P.indexOf(c) + a : P.length;
        c.insertAdjacentHTML(ha, g(f, t, u));
        c = Fb(c)[P];
        null != u && ("font" === f ? c.nodeType = 3 : c.children[0].nodeType = 3);
      } else if (Ba) {
        c = A.createElement(g(f, t));
      } else {
        c = E ? A.createElementNS("http://www.w3.org/2000/svg", f) : A.createElement(f);
        if (t) {
          for (ha in t) {
            if ((a = t[ha]) || 0 === a) {
              switch(ha) {
                case "class":
                case "className":
                  Ea(c, a);
                  break;
                case "style":
                  E = c.style;
                  for (P in a) {
                    E[P] = a[P];
                  }
                  break;
                default:
                  oa(c, ha, a);
              }
            }
          }
          !B || "a" !== f && "A" !== f || !t.href || t["tag-index"] || t.tagIndex || oa(c, "tagIndex", "-0");
        }
        H || null != u && ya(c, u);
      }
      return c;
    }
    function ya(a, c) {
      if (V) {
        return qa(2, a, "font", F, c);
      }
      var f = A.createTextNode("" + c);
      a.appendChild(f);
      return f;
    }
    function wa(a, c) {
      9 > k ? a.className = c : a.setAttribute("class", c);
    }
    function ca(a, c) {
      return -1 !== (" " + a.className + " ").indexOf(" " + c + " ");
    }
    function fa(a, c, f) {
      if (8 > B || 5.5 > k) {
        c = U(c);
      }
      a.style[c] = f;
    }
    var V = 5 > k;
    I = ma("html")[0];
    $a = ma("head")[0];
    Eb = function(a) {
      return L[a] || A[a] || A.getElementById(a);
    };
    yb = ma;
    Ob = function(a) {
      var c = [], f = 0, t, u = -1;
      if (9 > k || !A.getElementsByClassName) {
        var E = 6 > k ? A.all : A.getElementsByTagName("*");
      } else {
        var ha = !0;
        E = A.getElementsByClassName(a);
      }
      for (t = E.length; f < t; ++f) {
        var P = E[f];
        if (ha || (V || 1 === P.nodeType) && ca(P, a)) {
          c[++u] = P;
        }
      }
      return c;
    };
    ob = ka;
    Fb = function(a) {
      a = V ? a.children : a.childNodes;
      for (var c = [], f = a.length; f;) {
        c[--f] = a[f];
      }
      return c;
    };
    Pb = function(a) {
      var c = !(7.03 < B && 7.2 > B) && a.children;
      a = c ? c : a.childNodes;
      for (var f = [], t = a.length, u = -1, E; t;) {
        if (E = a[--t], c || 1 === E.nodeType) {
          V && "FONT" === E.tagName || (f[++u] = E);
        }
      }
      return f;
    };
    m = function(a, c, f, t, u) {
      c = qa(2, a, c, f, t, u);
      V || (a.appendChild(c), H && null != t && ya(c, t));
      return c;
    };
    r = function(a, c, f, t, u) {
      c = qa(0, a, c, f, t, u);
      V || (ka(a).insertBefore(c, a), H && null != t && ya(c, t));
      return c;
    };
    O = ya;
    R = function(a, c) {
      if (V) {
        return qa(0, a, "font", F, c);
      }
      var f = A.createTextNode("" + c);
      ob(a).insertBefore(f, a);
      return f;
    };
    Pa = function(a) {
      ob(a) ? V ? a.outerHTML = "" : (5.5 > k && (a.style.filter = ""), ob(a).removeChild(a)) : v("[DOM] p_DOM_remove(), No parentNode!");
    };
    var Ba = 9 > k, H = Ba;
    pb = function(a) {
      return a.tagName.toUpperCase();
    };
    Aa = function(a, c) {
      if (8 > B || 5.5 > k) {
        c = U(c);
      }
      var f = a.getAttribute(c);
      return B && "tabIndex" === c ? "-0" === f ? "" : "" === f ? "-1" : f : f || "";
    };
    oa = function(a, c, f) {
      if (B && "tab-index" === c) {
        "-1" === f ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", f);
      } else {
        if (8 > B || 5.5 > k) {
          c = U(c);
        }
        a.setAttribute(c, f);
      }
    };
    pa = function(a, c) {
      if (B && "tab-index" === c) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > B || 5.5 > k) {
          c = U(c);
        }
        a.removeAttribute(c);
      }
    };
    Qb = function(a, c) {
      if (B && "tab-index" === c) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > B || 5.5 > k) {
        c = U(c);
      }
      return a.hasAttribute ? a.hasAttribute(c) : null != a.getAttribute(c);
    };
    Ea = wa;
    xa = ca;
    ja = function(a, c) {
      var f;
      if (!ca(a, c)) {
        if (f = a.className) {
          f += " ";
        }
        wa(a, f + c);
      }
    };
    Rb = function(a, c) {
      if (ca(a, c)) {
        var f = a.className.split(" ");
        f.splice(f.indexOf(c), 1);
        wa(a, f.join(" "));
      }
    };
    Fa = fa;
    x = function(a, c) {
      var f, t = -1, u;
      if (5.5 > k) {
        if (f = 5.5 > k ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (f = f.split(";"); u = f[++t];) {
            fa(a, u.split(":")[0], "");
          }
        }
        if (c) {
          for (t = -1, f = c.split(";"); u = f[++t];) {
            var E = u.split(":")[0];
            fa(a, E, u.substr(E.length + 1));
          }
        }
      } else if (7.1 > B) {
        if (a.setAttribute("style", ""), c) {
          for (f = c.split(";"); u = f[++t];) {
            u = u.split(":"), fa(a, u[0], u[1]);
          }
        }
      } else {
        9 > B || 1 > Q ? c ? a.setAttribute("style", c) : a.removeAttribute("style") : a.style.cssText = c;
      }
    };
  })();
  var ea, ba, za, Ma, Ab, ac, Xb, ra, Yb;
  (function() {
    function g() {
      return P ? da ? 2 : Qa ? 3 : 1 : 0;
    }
    function y(e) {
      ba(L, "load", y);
      y = F;
      ma(mb, e, !0);
      mb = F;
    }
    function U(e, b) {
      Ab(function() {
        var q = ca(e);
        b(q);
        q.addListener(b);
        return !0;
      });
    }
    function ma(e, b, q) {
      for (var n = 0; n < e.length; ++n) {
        !0 === e[n](b) && (e.splice(n, 1), --n);
      }
      q && (e.length = 0);
    }
    function ka(e, b, q) {
      mb || V.length || Y(qa);
      V.push(e, b, q);
    }
    function qa() {
      var e = V, b;
      for (V = []; b = e.shift();) {
        ma(b, e.shift(), e.shift());
      }
    }
    function ya(e) {
      var b = e || event;
      e = H[b.type];
      var q = -1, n, l;
      5 > k ? b = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : k ? (b.target = b.srcElement, b.preventDefault = function() {
        b.returnValue = !1;
      }, b.stopPropagation = function() {
        b.cancelBubble = !0;
      }) : c && (b.j = b.stopPropagation, b.stopPropagation = function() {
        l = !0;
      });
      for (; n = e[++q];) {
        n.i === this ? (this.g = n.h, k && (b.currentTarget = this), this.g(b), k ? (this.g = aa, this.g = F) : delete this.g) : 7.2 > B && this === A && n.i === L && (L.g = n.h, L.g(b), delete L.g);
      }
      if (k) {
        return b.preventDefault = b.stopPropagation = aa, b.preventDefault = b.stopPropagation = F, b.returnValue;
      }
      c && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (t = !0), l && !t && b.j(), b.j = b.stopPropagation = F);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function wa() {
      var e = 9 === fa.offsetWidth;
      Xb !== e && (ka(K, Xb = e), v("p_cssAvailability:" + Xb));
    }
    var ca = L.matchMedia, fa, V = [];
    mb.push(function() {
      U = F;
      fa = m(N, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      za(function() {
        V.length && Y(qa);
      });
    });
    ea = function(e, b, q, n) {
      if (f) {
        e.addEventListener(b, q, n ? Ba ? n : n.capture || !0 === n : !1);
      } else {
        var l = {i:e, h:q};
        n = H[b];
        var C = "on" + b, D, G;
        if (n) {
          for (D = n.length; G = n[--D];) {
            if (G.i === e && G.h === q) {
              return;
            }
          }
          H[b].push(l);
        } else {
          H[b] = n = [l], a || (b = e[C], "function" === typeof b && b !== ya && n.unshift({i:e, h:b}));
        }
        a ? e.attachEvent(C, ya) : e[C] = ya;
      }
    };
    ba = function(e, b, q, n) {
      if (f) {
        e.removeEventListener(b, q, n ? Ba ? n : n.capture || !0 === n : !1);
      } else {
        n = H[b];
        b = "on" + b;
        var l, C, D;
        if (n) {
          for (l = n.length; C = n[--l];) {
            C.i === e && (C.h === q ? n.splice(l, 1) : D = !0);
          }
          D || (a ? e.detachEvent(b, ya) : k ? (e[b] = aa, e[b] = null) : delete e[b]);
        }
      }
    };
    var Ba = !k && !Na && (new fb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), H = {}, a = !1, c = 525.13 > db, f = !c && !Na && L.addEventListener, t;
    c && I.addEventListener("click", function(e) {
      if (t) {
        return t = !1, e.preventDefault(), !1;
      }
    });
    za = function(e) {
      mb ? mb.push(e) : alert("Load event has already been dispatched!");
    };
    Ma = function(e) {
      u && u.push(e);
    };
    var u = [];
    if (419.3 >= db) {
      var E = function() {
        if (E) {
          var e = A.readyState;
          "loaded" === e || "complete" === e ? (E = F, y()) : Y(E);
        }
      };
      Y(E);
    } else {
      ea(L, "load", y), la && Y(function() {
        y && y();
      }, 999);
    }
    k || !la && 1.8 > Q ? ea(L, "unload", function(e) {
      ma(u, e, !0);
    }) : u = F;
    Ab = function(e) {
      K.push(e);
    };
    za(function() {
      wa();
      Lb(wa);
    });
    ac = function(e) {
      ab && ab.push(e);
    };
    var ha = 60 > Q || Ta, P, Qa, da;
    if (89 <= Q || 89 <= sb || vb && 79 <= Vb || ca && (ca("(forced-colors:none)").matches || ca("(forced-colors:active)").matches)) {
      Yb = !0, U("(forced-colors:active)", function(e) {
        P = e.matches;
        ra = g();
        ka(ab, ra);
        v("(forced-colors:active):" + ra);
      });
    } else if (10 <= k || Ib || vb && Vb) {
      Yb = !0, U("(-ms-high-contrast:black-on-white)", function(e) {
        P = Qa = e.matches;
        ra !== g() && (ra = g(), ka(ab, ra), v("(-ms-high-contrast:black-on-white):" + ra));
      }), U("(-ms-high-contrast:white-on-black)", function(e) {
        P = da = e.matches;
        ra !== g() && (ra = g(), ka(ab, ra), v("(-ms-high-contrast:white-on-black):" + ra));
      }), U("(-ms-high-contrast:active)", function(e) {
        P = e.matches;
        ra !== g() && (ra = g(), ka(ab, ra), v("(-ms-high-contrast:active):" + ra));
      });
    } else if (vb && (k || Q && 0 <= w.conpare(Sa, "1.8.1") || Ta)) {
      var Ia = function() {
        function e(n, l) {
          if (l && "transparent" === n) {
            return 382.5;
          }
          if ("#" === n.charAt(0)) {
            return parseInt("0x" + n.substr(1, 2), 16) + parseInt("0x" + n.substr(3, 2), 16) + parseInt("0x" + n.substr(5, 2), 16);
          }
          var C = n.split("(")[1].split(",");
          return ta(C[0]) + ta(C[1]) + ta(C[2]);
        }
        var b = A.defaultView;
        var q = b ? b.getComputedStyle(fa, null) : fa.currentStyle;
        b = (q && q.color || "").split(" ").join("");
        q = (q && q.backgroundColor || "").split(" ").join("");
        b && (P = "#123456" !== b && "rgb(18,52,86)" !== b, Qa = e(b) < e(q, !0), da = e(b) > e(q, !0), ra !== g() && (ra = g(), v("(forced-colors-fallback):" + ra), ka(ab, ra, ha)));
      };
      Ab(function(e) {
        if (e) {
          return Fa(fa, "color", "#123456"), Fa(fa, "backgroundColor", "#123456"), ha ? (Ia(), ab = F) : Lb(Ia), Ia = F, !0;
        }
      });
    } else {
      ab = g = F;
    }
  })();
  (function() {
    function g(l) {
      f(l);
      q && !l && Pa(q);
      f = t = u = E = ha = P = Ia = e = b = n = q = F;
    }
    function y(l) {
      var C = '1.6em "' + l + '"';
      v("[webFontTest] testByNativeFontLoaderAPI start.");
      A.fonts.load(C).then(function(D) {
        v("[webFontTest] fonts.check() : " + A.fonts.check(C, "i") + ", fonts.length : " + D.length);
        (D = ka(t)) ? Y(g, D) : (v("[webFontTest] mesureWebFont() : false"), ma(!0));
      }, function(D) {
        v("[webFontTest] fonts.load() rejected! " + D);
        Oa !== F ? qa(Oa) : Va(qa);
      });
    }
    function U(l) {
      return A.hidden || A.msHidden || A.mozHidden || A.webkitHidden ? (da = new na() - 0, !1) : l < new na() - da;
    }
    function ma(l) {
      l && (v("[webFontTest] testWebFont start."), da = new na() - 0);
      (l = ka(t)) ? (v("[webFontTest] testWebFont mesurement success : " + l), g(l)) : U(Qa) ? (v("[webFontTest] testWebFont timeout!"), Ia || fa ? g(0) : Oa !== F ? qa(Oa) : Va(qa)) : Y(ma);
    }
    function ka(l) {
      var C = 0, D = -1, G = 0;
      if (!n) {
        var M = -1;
        var J;
        e = m(N, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, a);
        for (n = {}; J = c[++M];) {
          Fa(e, "fontFamily", J), n[J] = e.offsetWidth;
        }
      }
      for (5 > k ? e || (e = m(N, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, a)) : N.appendChild(e); M = c[++D];) {
        if (Fa(e, "fontFamily", '"' + l + '",' + M), e.offsetWidth !== n[M]) {
          C = 1;
          break;
        }
      }
      !k && C && ha && (e.innerHTML = ha, l = e.offsetWidth, e.innerHTML = P, G = l === e.offsetWidth ? 1 : 0, e.innerHTML = a);
      Pa(e);
      5 > k && (e = F);
      return C + G;
    }
    function qa(l) {
      v("[webFontTest] onTestDataURIComplete : " + l);
      l ? (Ia = !0, ya(!0)) : g(0);
    }
    function ya(l) {
      var C;
      if (u) {
        for (C in l && (da = new na() - 0), u) {
          ka(C) ? (v("[webFontTest] success! " + C), b = m(N, "div", {"aria-hidden":"true", className:E, id:E}), q = m($a, "link", {type:"text/css", rel:"stylesheet", href:u[C]}), Y(wa, !0)) : U(H) ? (v("[webFontTest] timeout! " + C), delete u[C], Y(ya, !0)) : Y(ya);
          return;
        }
      }
      g(0);
    }
    function wa(l) {
      l && (v("[webFontTest] testImportedCssReady start!"), v("[webFontTest] targetWebFontName : " + t), da = new na() - 0);
      1 < b.offsetWidth ? (v("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + b.offsetWidth), Pa(b), Qa = H, Y(ma, !0)) : U(Qa) ? 528 > db ? (v("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + b.offsetWidth), Pa(b), Qa = H, Y(ma, !0)) : (v("[webFontTest] testImportedCssReady timeout!"), Pa(b), g(0)) : Y(wa);
    }
    K.splice(0, 0, function() {
      if (Xb) {
        lb = 8 <= k || Ib || 9.5 <= B || ib || Ta || 522 <= db || 3 <= Ha || Ub || Jb ? 3 : 7.2 <= B ? 2 : 6 <= B || Q ? 1 : 0;
        if (!lb && !k && !Na) {
          var l = m(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          lb = 6 <= l.offsetWidth ? 2 : 0;
          Pa(l);
        }
        v("p_cssGeneratedContentGrade:" + lb);
        return !0;
      }
    });
    Va = !1 === Oa ? function(l) {
      Y(l, !1);
    } : function(l) {
      function C(M) {
        G = Wb(G);
        Oa = M;
        D.onload = D.onerror = aa;
        Y(l, M);
      }
      if (Oa !== F) {
        v("[dataURITest] already done : " + Oa), Y(l, Oa);
      } else {
        v("[dataURITest] start!");
        var D = new Image(), G = Y(function() {
          G && C(!1);
        });
        D.onerror = function() {
          v("[dataURITest] no DATA URI!");
          C(!1);
        };
        D.onload = function() {
          v("[dataURITest] DATA URI:" + (1 === D.width * D.height));
          C(1 === D.width * D.height);
        };
        D.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > k && za(function() {
      var l = m(N, "div");
      x(l, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Da = 1 < l.offsetHeight;
      Pa(l);
    });
    nb = function(l, C) {
      function D() {
        if (M || !J || G.complete) {
          v("[imageTest] timer -> img.complete. img.width=" + G.width);
          var z = !!G.width;
          jb = jb || z;
          Y(l, z);
          G.onerror = G.onload = aa;
          G = l = F;
        } else {
          --J, Y(D);
        }
      }
      var G = new Image(), M, J = 99;
      v("[imageTest] start.");
      G.onerror = function() {
        v("[imageTest] error!");
        M = !0;
      };
      G.onload = function() {
        v("[imageTest] onload.");
        M = !0;
      };
      G.src = C;
      Y(D);
    };
    Kb = function(l, C, D, G, M, J, z) {
      f = l;
      t = C;
      u = D;
      E = G;
      ha = M;
      P = J;
      Qa = z || Ba;
      t = V + t;
      v("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      ca ? (v("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : false"), Y(g, 0)) : (v("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : true"), !A.fonts || 603 > db ? (v("[webFontTest] No native font loader."), ma(!0)) : (v("[webFontTest] Use Native font loader."), y(t)));
    };
    var ca = 525 > db || 10 > B || Q && !ib || 2.2 > S(21) || S(25) || 10 > S(3) || va(32) || va(30) || va(3), fa = 9 > k || 2 > sb || 12 > B, V = "bad_" + (new na() - 0) + "_", Ba = 5E3, H = 100, a = "mmmmmmmmmmlli", c = ["sans-serif", "serif"], f, t, u, E, ha, P, Qa, da, Ia, e, b, q, n;
  })();
  var Ja = String.fromCharCode, Bb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Ja(960), ")", "(", Ja(234), Ja(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Ja(9824), "\u2190", Ja(9829), Ja(9830), Ja(9827), Ja(956), "\u03a9", "\u2193", "\u2192", "%", Ja(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Ja(9619)], ec = (9 === k || Q && 0 <= w.conpare(Sa, "1.8.1") || Ta) && !Yb, qb = [], rb, Xa, Sb = 7.2 > B ? function() {
    rb = !rb;
    for (var g = -1, y; y = qb[++g];) {
      -1 !== y.className.indexOf("pbAlp") ? Fa(y, "display", rb ? "" : "none") : (ja(y, rb ? "pbChrCS" : "pbChr00"), Rb(y, rb ? "pbChr00" : "pbChrCS"));
    }
  } : ec ? function() {
    rb = !rb;
    for (var g = -1, y; y = qb[++g];) {
      Fa(y, "opacity", rb ? 1 : 0);
    }
  } : F;
  var bc = Za.startBlinkingIfCursor = function(g) {
    Sb ? xa(g, "pbChrCS") && (Xa || !B && !ra || (Xa = gb(Sb, 400)), -1 === qb.indexOf(g) && qb.push(g)) : qb = F;
  };
  Za.stopBlinkingIfCursor = function(g) {
    Sb && (g = qb.indexOf(g), 0 <= g && (qb.splice(g, 1), !qb.length && Xa && (p(Xa), Xa = 0)));
  };
  ec && ac(function(g) {
    g ? Xa || (Xa = gb(Sb, 400)) : Xa && (p(Xa), Xa = 0);
  });
  Sb && Ma(function() {
    Xa && p(Xa);
  });
  Yb || ac(function(g) {
    g ? (oa(I, "forced-colors", 2 === g ? "lod" : 3 === g ? "dol" : "active"), (Ua || 9 === k || 5.5 <= k && 9 > k && Da) && ja(I, "jsCanRotate")) : (pa(I, "forced-colors"), Rb(I, "jsCanRotate"));
  });
  (function() {
    function g(b) {
      E = b;
      v("[pbList] WebFont test result : " + !!b);
      b ? ka() : jb ? ma(!0) : jb !== F ? ka() : (v("[pbList] Need imageTest " + ha), nb(ma, ha));
      v("window.offscreenBuffering = " + L.offscreenBuffering);
    }
    function y() {
      y = F;
      Kb(g, "PB-100", {"PB-100_canTTF":Ya + "pbFont/ttf.css", "PB-100_canWOFF":Ya + "pbFont/woff.css", "PB-100_canEOT":Ya + "pbFont/eot.css", "PB-100_canSVG":Ya + "pbFont/svg.css"}, "pbFont-testCssReady", H, "i", 5E3);
    }
    function U(b) {
      this.focus();
      b.preventDefault();
      b.stopPropagation();
    }
    function ma(b) {
      b ? (v("[pbList] Fallback start!"), ja(N, "pbList-noWebFont")) : v("[pbList] image disabled!");
      ka();
    }
    function ka() {
      for (g = Kb = F; u.length;) {
        qa(u.shift(), u.shift());
      }
      v("[pbList] complete.");
    }
    function qa(b, q) {
      function n(J) {
        J = Fb(J);
        for (var z = -1, Z; Z = J[++z];) {
          switch(Z.nodeType) {
            case 1:
              n(Z);
              break;
            case 3:
              Z.data && C(Z.data) && D.push(Z);
          }
        }
      }
      function l(J) {
        var z = J.children, Z = 0, cb = z.length;
        if (cb) {
          for (; Z < cb; ++Z) {
            l(z[Z]);
          }
        } else {
          (z = J.innerText) && C(z) && D.push(J);
        }
      }
      function C(J) {
        return J.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var D = [], G;
      if (g) {
        -1 === u.indexOf(b) && (u.push(b, q), P && y && y());
      } else {
        var M = u.indexOf(b);
        0 <= M && u.splice(M, 2);
        for (5 > k ? l(b) : n(b); G = D.shift();) {
          M = 5 > k ? G.innerText : G.data, 2 !== E && (M = M.split(H).join(V)), q ? 5 > k ? G.innerText = M : G.data = M : ya(M.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(Ba).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fa).split("&amp;").join("&"), G);
        }
      }
    }
    function ya(b, q) {
      function n(sa, T) {
        for (var Ga = ""; T;) {
          T & 1 && (Ga += sa), T >>= 1, sa += sa;
        }
        return Ga;
      }
      function l(sa, T, Ga) {
        for (var Gb, gc = -1, cc, dc; Gb = T[++gc];) {
          for (; 0 <= (cc = sa.indexOf(Gb));) {
            dc = Gb.length, sa = sa.substr(0, cc) + n(Ga, dc) + sa.substr(cc + dc);
          }
        }
        return sa;
      }
      function C(sa) {
        var T = ta(sa), Ga = "" + T;
        return 0 < T && T === T | 0 && (T = sa.indexOf(Ga) + Ga.length, T <= sa.length) ? T : 0;
      }
      var D = " area line str cmd fnc syb".split(" "), G = 5 > k || 1 === q.nodeType, M = [], J = "", z, Z = -1, cb, Cb, Ka;
      if (G) {
        if (Ia) {
          var Zb = q.style.visibility;
          Fa(q, "visibility", "hidden");
        }
        q.innerHTML = "";
      }
      if (e) {
        var Hb = q;
        q = A.createDocumentFragment();
      }
      if (function(sa) {
        var T = sa.indexOf("P");
        if (-1 === T) {
          return !1;
        }
        T = ta(sa.charAt(T + 1));
        return 0 <= T && 9 >= T;
      }(b)) {
        J = n("+", b.length);
      } else {
        0 <= (z = C(b)) && (J = n("|", z), Z = z, --Z);
        for (; z = b.charAt(++Z);) {
          z === fa || cb ? (J += "~", z === fa && (cb = !cb)) : J += z;
        }
        J = l(J, t, "^");
        J = l(J, c, "{");
        J = l(J, f, "}");
      }
      Z = 0;
      for (cb = b.length; Z < cb; ++Z) {
        z = b.charAt(Z);
        var W = z === a;
        var ia = " " === z;
        z = W ? " " : z;
        var X = J.charAt(Z);
        var Ra = (Cb = Ca) && W;
        var Ca = "|" === X;
        X = D["+|~{}^".indexOf(X) + 1];
        "\n" !== z ? (E || !jb ? (2 === E && b.substr(Z, 2) === H && (z = H, ++Z), X = ia && "str" === X ? "pbList-strsp" : W ? "" : !ia && X ? "pbList-" + X : "") : (W = Bb.indexOf(z), W = -1 === W ? "" : Bb.indexOf(z).toString(16).toUpperCase(), W = (W = 1 === W.length ? "0" + W : W) ? "pbChr" + W : "", X = ia && "str" === X ? "pbList-strsp" : ia || !W ? "" : X ? (W ? W + " " : "") + "pbList-" + X : W), W = F, Ra ? (z = 6 <= k && 8 > k ? " " : a, X = "") : Ca && (Q && !ib || 9.5 > B) ? (Ca && !Cb && 
        (Ka = 4 - (ta(b.substr(Z)) + "").length), 7.5 > B ? W = da ? "position:relative;top:-4px;left:" + 12 * Ka + "px" : {position:"relative", top:"-4px", left:12 * Ka + "px"} : W = da ? "position:relative;left:" + 12 * Ka + "px" : {position:"relative", left:12 * Ka + "px"}) : ia && 7.5 > B && (X = "pbList-strsp"), da ? M.push("<font" + (X ? ' class="' + X + '"' : "") + (W ? ' style="' + W + '"' : "") + ">" + z + "</font>") : G || e ? m(q, "font", {"class":X, style:W}, z) : r(q, "font", {"class":X, 
        style:W}, z)) : (Cb = Ca = !1, da ? M.push(z) : G || e ? O(q, z) : R(q, z));
      }
      if (G) {
        da ? q.innerHTML = M.join("") : e && Hb.appendChild(q), Ia && Fa(q, "visibility", Zb);
      } else {
        if (da) {
          D = A.createElement("font");
          for (D.innerHTML = M.join(""); M = D.firstChild;) {
            q.parentNode.insertBefore(M, q);
          }
          Pa(q);
        } else {
          e ? Hb.parentNode.replaceChild(q, Hb) : Pa(q);
        }
      }
    }
    1.9 > Q && Ab(function(b) {
      if (b) {
        b = yb("*");
        for (var q = 0, n = b.length, l; q < n; ++q) {
          l = b[q], "B" !== pb(l) && -1 !== (" " + l.className).toLowerCase().indexOf(" pbchr") && (Qb(l, "title") || oa(l, "title", l.textContent), l.textContent = " ");
        }
        return !0;
      }
    });
    Ab(function(b) {
      if (b) {
        b = Ob("pbChrCS");
        for (var q = 0, n = b.length; q < n; ++q) {
          bc(b[q]);
        }
        return !0;
      }
    });
    var wa = [], ca = Q && 0 > w.conpare(Sa, "0.9.9");
    Ab(function(b) {
      function q(ia) {
        var X = Aa(ia, "pbTip");
        if (X) {
          var Ra = X.charAt(0);
          var Ca = "_" === Ra;
          X = (Ca ? X.charAt(2) : Ra).toUpperCase().charCodeAt(0) - 65;
          M ? m(ia, "div", {style:{left:7 * X + 3 + "px"}}) : (Ra = Aa(ia, "title"), pa(ia, "pbTip"), pa(ia, "title"), Ca = m(ia, "div", {className:"pbTip" + (Ca ? "Btm" : ""), style:{width:Ra.length + l + "em", left:7 * X - (ca ? 0 : 5) + "px"}}, Ra), Ca = m(Ca, "div"), .9 <= Q && ca && Fa(Ca, "left", "2px"));
        }
        G && 0 <= ia.className.indexOf("pbColor") && m(ia, "u");
      }
      function n(ia, X) {
        var Ra = Aa(ia, "pbGhst"), Ca = ia.className, sa = Ca.split("pbCsr")[1] || "", T = Ca.split("pbAlp")[1] || "";
        if ("CS" === Ra) {
          var Ga = "_";
        } else {
          Ga = Ra, 3 === Ga.length && (Ga = Ga.substr(0, 2)), Ga = Bb[parseInt(Ga, 16)] || "~";
        }
        var Gb;
        sa = sa.split(" ")[0];
        if (T = ta(T.split(" ")[0])) {
          C && (Ca = Ca.split("pbChr")[1].split(" ")[0], Fa(ia, "backgroundPosition", d(Ca, 2, Zb) + "px " + -24 * (10 - T) + "px")), !X && D && r(ia, "a").appendChild(ia);
        }
        Ra && (T = 10 - T, C && (Gb = {backgroundPosition:d(Ra, 2, Zb) + "px " + -24 * (10 - T) + "px"}), pa(ia, "pbGhst"), Z = r(ia, "b", {className:"pbChr" + Ra + " pbCsr" + sa + " pbAlp" + T, style:Gb}, Ga), bc(Z));
        bc(ia);
      }
      if (b) {
        var l = 6 > k ? 2 : 0, C = 7.2 > B || .9 > Q || Na, D = 1.1 === Q, G = 1.4 > Q;
        b = yb("SAMP");
        var M = 8 === k, J = lb, z, Z, cb, Cb, Ka;
        Da && ja(N, "pbLCD-AX");
        if (b.length) {
          for (cb = -1; z = b[++cb];) {
            if (xa(ob(z), "pbLCD")) {
              var Zb = xa(z, "PB-120") || xa(z, "FX-795P");
              var Hb = Pb(z);
              for (z = Hb.length; Ka = Hb[--z];) {
                switch(pb(Ka)) {
                  case "A":
                    (2 > J || M) && q(Ka);
                    if (2 > J) {
                      var W = Pb(Ka);
                      for (Cb = W.length; Cb;) {
                        n(W[--Cb], !0);
                      }
                    }
                    Ub ? oa(Ka, "href", "javascript:void(0)") : (ea(Ka, "click", U), wa.push(Ka));
                    break;
                  case "B":
                    2 > J && n(Ka, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ma(function() {
      for (var b; b = wa.shift();) {
        ba(b, "click", U);
      }
    });
    6 === k && (new fb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(A);
    var fa = Bb[7], V = Bb[30], Ba = Bb[113], H = Ja(8337) + Ja(8331), a = Ja(160);
    Ja(8194);
    var c = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), f = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), t = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + V + Bb[31]).split(""), u = [], E, ha, P;
    if (.9 <= Q && 0 >= w.conpare(Sa, "0.9.1")) {
      ja(I, "pbLCD-gecko09To091");
      var Qa = !0;
    }
    Ab(function(b) {
      if (b) {
        ha = Ya + "pbFont/x3mask" + (Qa ? ".gecko0.9.1.gif" : ".png");
        b = yb("*");
        for (var q = -1, n; n = b[++q];) {
          xa(n, "pbList") ? qa(n) : xa(n, "pbFont") && qa(n, !0);
        }
        u.length && (v("[pbList] " + u.length / 2 + " elements found. WebFont test start."), y());
        return !0;
      }
    });
    var da = !1, Ia = 8 > B, e = !da && !Ia && !(6 > k) && A.createDocumentFragment && !!N.replaceChild;
    Za.prettify = qa;
  })();
  var fc = A.scripts || yb("script");
  var Ya = fc[fc.length - 1].src.split("/");
  --Ya.length;
  (Ya = Ya.join("/")) && (Ya += "/");
  v("[p_assetUrl] " + Ya);
  za(function() {
    var g;
    (g = Eb("logger")) || alert("#logger not found!");
    g ? (v = o, zb = function(y) {
      m(g, "DIV", {style:{color:"red"}}, y);
    }, L.onerror = function(y, U, ma) {
      zb(y + ", " + U + ", " + ma);
      return !0;
    }) : L.console ? (v = console.log, zb = console.error) : B ? (v = aa, zb = opera.postError) : v = zb = aa;
    for (; Db.length;) {
      v(Db.shift());
    }
    for (; eb.length;) {
      zb(eb.shift());
    }
    Db = eb = F;
    function o(y) {
      m(g, "DIV", F, y);
    }
    o = !1;
  });
  6.1 > Ha && ea(L, "scroll", Mb);
  Ma(Nb);
  6.1 > Ha && ea(L, "scroll", xb);
  Ma(bb);
  10 > k && (11 !== $b || 5 !== k) || (9 > B || 1 > Q || !Na && !L.addEventListener ? A.write('<link href="' + Ya + wb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : za(function() {
    m($a, "link", {href:Ya + "" + wb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

