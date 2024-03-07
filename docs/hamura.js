/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Xa, w) {
  var X = 0, ja, G, Pa = (Xa + "").split("."), cb = (w + "").split("."), Ma = Pa.length;
  for (ja = cb.length; "0" === Pa[Ma - 1];) {
    --Ma;
  }
  for (; "0" === cb[ja - 1];) {
    --ja;
  }
  for (G = Ma < ja ? Ma : ja; X < G; ++X) {
    var xa = Pa[X] - 0, h = cb[X] - 0;
    if (xa !== h) {
      return xa > h ? 1 : -1;
    }
  }
  return Ma > ja ? 1 : Ma === ja ? 0 : -1;
};
(function(Xa, w, X, ja, G, Pa, cb, Ma) {
  function xa(t, ya, ca) {
    ca = Pa(t.split(ya)[1]);
    return 0 <= ca ? ca : 0;
  }
  function h(t, ya) {
    return 0 <= t.indexOf(ya);
  }
  function Ib(t) {
    return h(t, "Linux armv") || h(t, "Linux aarch") || h(t, "Linux i686") || h(t, "Linux x86_64");
  }
  function db(t, ya) {
    for (var ca in ya) {
      if (ca === t) {
        return !0;
      }
    }
  }
  function p(t, ya) {
    var ca = "", Na = -1, Oa;
    if (t = t.split(ya)[1]) {
      for (; Oa = t.charCodeAt(++Na);) {
        if (48 <= Oa && 57 >= Oa || 46 === Oa) {
          ca += t.charAt(Na);
        } else {
          break;
        }
      }
      for (Na = ca.length; Na;) {
        if (46 === ca.charCodeAt(--Na)) {
          ca = ca.substr(0, Na);
        } else {
          break;
        }
      }
    }
    return ca;
  }
  function L(t) {
    for (var ya = arguments, ca = 1, Na = ya[0], Oa; ca < ya.length; ++ca) {
      0 > ta(Na, Oa = ya[ca]) && (Na = Oa);
    }
    return Na;
  }
  function T(t) {
    return t === t + "" ? t : t === t - 0 ? "" + t : t.min && t.max ? t.min + "~" + t.max : t.min ? t.min + "~" : "~" + t.max;
  }
  var ta = Xa.conpare, c = ja.userAgent, U = ja.appVersion, eb = Pa(U) || 0, K = ja.platform, Ya = X.documentElement, Ga = Ya && Ya.style, l = X.documentMode, Qa = G.width;
  G = G.height;
  var fb = w.HTMLAudioElement, x = w.performance, V = w.Int8Array, gb = w.ontouchstart !== Ma, Ca = p(U, "Version/") || p(c, "Version/"), Ha = w.operamini, ka = !Ha && w.opera, Jb = ka && (ka.version && "function" === typeof ka.version ? ka.version() : L(p(c, "Opera "), Ca, eb)), Da = w.opr, sb = !ka && (X.all || l);
  l = sb && (l ? l : w.XMLHttpRequest ? X.getElementsByTagName ? 7 : 4 : X.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  Ya = !sb && Ya.msContentZoomFactor;
  var Ta = !Ya && (w.chrome || w.chromium), hb = !sb && function() {
    for (var t in Ga) {
      if (0 === t.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Cb = h(c, "UCWEB"), Kb = Cb && p(c, " U2/"), Rb = Cb && p(c, "; wds "), Za = p(c.split("_").join("."), "; iPh OS "), va = p(c, "; Adr "), tb = h(U, "YJApp-ANDROID"), Ia = h(K, "Android") || hb && h(U, "Android") || tb;
  va = p(K, "Android ") || p(U, "Android ") || p(c, "Android ") || va;
  var ub = h(K, "Linux"), lb = "MacIntel" === K && ja.standalone !== Ma, mb = hb && p(c, "Goanna/"), za = !mb && hb && (p(c, "rv:") || p(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Sb = p(c, "Firefox/"), Y = p(c, "Opera/"), Db = w.FNRBrowser, Aa = xa(c, "AppleWebKit/"), ib = p(c, "Chrome/"), Lb = p(U, "Iron/"), yb = p(c, "OPR/"), Mb = p(U, "KHTML/"), Tb = p(c.toLowerCase(), "iris");
  p(c, "FxiOS/");
  p(c, "CriOS/");
  p(c, "EdgiOS/");
  var ba = p(c, "Silk/"), jb = xa(c, "SamsungBrowser/"), zb = !jb && function() {
    for (var t = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ya, ca = t.length; ya = t[--ca];) {
      if (h(c, ya)) {
        return 2 > Pa(Ca) ? Ca : 0.9;
      }
    }
    t = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ca = t.length; ya = t[--ca];) {
      if (h(c, ya)) {
        return Ca;
      }
    }
  }(), Eb = Ta && 534.3 >= Aa, vb = Ib(K), $a = vb && !h(c, K) && Ib(c);
  gb = gb && (Aa || hb) && $a || !va && tb;
  tb = !!w.ReactNativeWebView;
  vb = vb && function() {
    for (var t in w) {
      if (0 === t.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ua = ($a = w.puffinDevice) && $a.clientInfo;
  Ua = ($a = Ua && "iOS" === Ua.os && Ua.osVersion) && Ua.model;
  var ab = !l && X.registerElement, Nb = !l && X.execCommand, nb = w.webkitCancelAnimationFrame, Ob = ub && ab && "11.0.696.34" === ib, ob = w._firefoxTV_playbackStateObserverJava, Ab = xa(c, "diordnA ");
  if ("Nitro" === K) {
    var r = 1;
  } else if ("Nintendo DSi" === K) {
    r = 2;
    var m = Y;
  } else if ("New Nintendo 3DS" === K || h(c, "iPhone OS 6_0") && 320 === Qa && 240 === G) {
    r = 4, m = p(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === K) {
    r = 3, m = Ca, Aa = 535;
  } else if (!K && h(U, "Nintendo Switch;")) {
    r = 7, m = p(U, "NintendoBrowser/");
  } else if (w.wiiu) {
    r = 6;
    m = p(U, "NintendoBrowser/");
    var W = 15, Z = p(U, "AppleWebKit/") || (nb ? 536 : 534);
    m || (m = nb ? 4 : 2, h(U, "Macintosh;") || h(U, "Windows NT") && h(U, "Touch"));
  } else if (ka && ka.wiiremote) {
    r = 5, m = p(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === K) {
    r = 10, m = p(U, K + " ");
  } else if (Y = p(c, "(PlayStation Portable); ")) {
    r = 8;
    m = Y;
    var Fb = 3.3;
  } else if ("PlayStation 4" === K) {
    r = 12, m = p(U, K + "/");
  } else if ("PlayStation 3" === K) {
    r = 11, m = p(c, "PLAYSTATION 3; ") || p(c, "PLAYSTATION 3 "), 0 > ta(m, "4.10") && (W = 26, Z = m);
  } else if (h(c, "Xbox One")) {
    r = 15, m = 1;
  } else if (h(c, "Xbox")) {
    r = 14, m = 1;
  } else if (2 === eb && h(c, "Sony/COM2/")) {
    r = 17;
    m = 2;
    Fb = 3.4;
    var Ea = !0;
  } else if (0 === K.indexOf("iP") || Za || $a || lb) {
    if ($a) {
      switch(m = $a, Ua.substr(0, 4)) {
        case "iPho":
          var Fa = 0;
          p(Ua, Fa);
          var Ba = !0;
          break;
        case "iPad":
          Fa = 1;
          p(Ua, Fa);
          var ma = !0;
          break;
        case "iPod":
          Fa = 2;
          p(Ua, Fa);
          var kb = !0;
      }
    } else {
      Za ? m = Za : (m = p(U.split("_").join("."), "OS "), db("isSecureContext", w), db("enableWebGL", w), db("sameOrigin", w));
      if (!m || Db) {
        m = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ja.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : cb.isNaN ? 9.2 : w.SharedWorker ? x && x.now ? 8 : 8.4 : Nb ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : V ? 4.3 : fb ? 4.1 : 3.2;
      }
      var Ja = Qa === 1.5 * G || 1.5 * Qa === G;
      0 === K.indexOf("iPhone") ? (Fa = 0, Ba = !0) : 0 === K.indexOf("iPad") || lb ? (Fa = 1, ma = !0) : 0 === K.indexOf("iPod") && (Fa = 2, kb = !0);
    }
    W = !$a && (ja.standalone || (ma || 12 > m) && db("webkitFullscreenEnabled", X) || 11 <= m && 13 > m && ja.mediaDevices) ? 16 : 17;
    r = 24;
    Z = m;
  } else if (h(c, "Kobo")) {
    r = 18, W = 21, Z = 2.2, Ia = !0;
  } else if (h(c, "EBRD")) {
    r = 19, W = 21, Z = 2.2;
  } else if (Y = p(c, "CrOS x86_64 ") || p(c, "CrOS aarch64 ") || p(c, "CrOS i686 ") || p(c, "CrOS armv7l ")) {
    r = 28, m = Y;
  } else if (w.onmoztimechange !== Ma) {
    r = 29, m = 18.1 > za ? "1.0.1" : 19 > za ? 1.1 : 27 > za ? 1.2 : 29 > za ? 1.3 : 31 > za ? 1.4 : 33 > za ? 2 : 35 > za ? 2.1 : 38 > za ? 2.2 : 45 > za ? 2.5 : 2.6, h(c, "Mobile") ? Ba = !0 : h(c, "Tablet") ? ma = !0 : h(c, "TV");
  } else if (w.palmGetResource) {
    r = 30, m = p(c, "webOS/") || p(c, "WEBOS") || p(c, "hpwOS/"), h(c, "webOS.TV") || h(c, "/SmartTV") || (Ba = !0);
  } else if (Y = p(c, "Tizen ")) {
    r = 31, m = Y, W = 24, Z = jb, Ba = !0;
  } else if (Y = p(c, "Windows Phone ") || p(U, "Windows Phone OS ") || Rb) {
    r = 23, m = Y, Ba = !0;
  } else if (Ya && "ARM" === K) {
    r = 23, m = 10, Ba = !0;
  } else if (sb && h(U, "ZuneWP")) {
    r = 23, m = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", Ba = !0;
  } else if (h(c, "FOMA;")) {
    r = 16, Ba = !0;
  } else if (h(c, "SoftBank;")) {
    r = 16, Ba = !0;
  } else if (h(c, "KFMUWI")) {
    var Ra = !0;
    m = 6.3;
    var la = ma = !0;
  } else if (h(c, "KFKAWI")) {
    Ra = !0, m = 6, la = ma = !0;
  } else if (h(c, "KFSUWI") || h(c, "KFAUWI") || h(c, "KFDOWI")) {
    Ra = !0, m = 5, la = ma = !0;
  } else if (h(c, "KFGIWI")) {
    Ra = !0, m = 5, la = ma = !0;
  } else if (h(c, "KFARWI") || h(c, "KFSAWA") || h(c, "KFSAWI")) {
    Ra = !0, m = 5 <= Pa(va) ? 5 : 4, la = ma = !0;
  } else if (h(c, "KFSOWI") || h(c, "KFTHWA") || h(c, "KFTHWI") || h(c, "KFAPWA") || h(c, "KFAPWI")) {
    Ra = !0, m = 3, la = ma = !0;
  } else if (h(c, "KFOT") || h(c, "KFTT") || h(c, "KFJWA") || h(c, "KFJWI")) {
    Ra = !0, m = 2, la = ma = !0;
  } else if (h(c, "Kindle Fire")) {
    Ra = !0, m = 1, la = ma = !0;
  } else if (Y = p(c, "Kindle/")) {
    r = 20, m = Y, W = 21, Z = 2.2;
  } else if (ob) {
    Ra = !0, m = va || Ab, la = !0;
  } else if (h(c, "AmazonWebAppPlatform") || h(c, "; AFT")) {
    Ra = !0, m = va, la = !0;
  } else if (h(c, "MeeGo")) {
    r = 32;
  } else if (h(c, "Maemo")) {
    r = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || Tb) {
    r = 22, Ea = !0;
  } else if ("WinCE" === K) {
    r = 21, Ea = !0;
  } else if (0 === K.indexOf("Win")) {
    r = "Win16" === K ? 35 : "Win32" === K ? 36 : "Win64" === K ? 37 : 0, m = p(c, "Windows NT ") || p(c, "Windows ");
  } else if (0 === K.indexOf("Mac")) {
    r = "Mac68K" === K ? 39 : "MacPowerPC" === K || "MacPPC" === K ? 38 : "MacIntel" === K ? 40 : 0;
    if (Y = p(c.split("_").join("."), "Mac OS X ")) {
      m = Y;
    }
    var pb = !0;
  } else if (h(c, "BlackBerry") || h(c, "BB10")) {
    r = 34, m = Ca, Ba = !0;
  } else if (h(c, "SunOS") || h(c, "Sun Solaris")) {
    r = 42;
  } else if (h(c, "FreeBSD")) {
    r = 43;
  } else if (h(c, "OpenBSD")) {
    r = 44;
  } else if (h(c, "NetBSD")) {
    r = 45;
  } else if (Ia && hb) {
    h(c, "Android 4.4;") ? Ja = {min:2.3} : 4 <= Pa(va) ? Ja = va : Ja = {min:2.2}, m = Ja;
  } else if (Ia && ka) {
    va ? Ja = va : Ja = {min:1.6}, m = Ja, h(c, "Tablet") ? ma = !0 : Ba = !0;
  } else if (va) {
    m = va, Ia = !0;
  } else if (ub && gb || tb || vb) {
    var wb = !0;
    jb ? Ja = {min:4.4} : Ta && !Eb || Da || yb ? Ja = {min:4} : (Ja = va = Ga.touchAction !== Ma ? {min:5} : ab ? 4.4 : V ? ja.connection ? w.searchBoxJavaBridge_ || Ta ? cb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Aa ? 3 : 533 <= Aa ? fb ? 2.3 : 2.2 : 530 <= Aa ? 2 : 1.5, zb && (W = 24, Z = zb));
    m = Ja;
    Ia = !0;
  } else {
    Ob ? (m = {min:5}, wb = Ia = !0) : ub && (h(c, "Ubuntu") ? r = 46 : (Y = p(c, "Mint/")) ? (r = 47, m = Y) : (Y = p(c, "Fedora/")) ? (r = 48, m = Y) : r = h(c, "Gentoo") ? 49 : 50);
  }
  Ra || Ia && wb && ba ? r = 27 : Ia && (r = r || 26);
  W || (la = la || Ia, ka ? (W = la || Ea || Ba || ma ? 9 : 8, Z = Jb) : sb ? (Ja = xa(U, "Trident/") + 4, W = Ea || Ba || ma || kb ? 3 : pb && 5 <= l ? 7 : 2, Z = l) : Ya ? (W = 23 === r ? 6 : 5, Z = p(U, "Edge/")) : mb ? (W = 13, Z = mb) : hb ? (W = la ? 12 : 11, Z = za || Sb) : jb ? (W = 24, Z = jb) : (Y = Fb || p(c, "NetFront/")) ? (W = 18, Z = Y) : (Y = p(c, "iCab")) ? (W = 19, Z = Y) : (Y = L(p(c, "Opera Mini/"), p(c, "Opera Mobi/")) || Ha && Ca) ? (W = 10, Z = Y, r || (h(c, "iPhone") ? Fa = 
  0 : h(c, "iPad") ? Fa = 1 : h(c, "iPod") && (Fa = 2), Fa && (r = 24))) : Cb ? (W = 25, Z = Kb) : Mb ? (W = 14, Z = eb) : Ia && Eb ? (W = 21, Z = va) : Ta || Da || yb ? (W = la ? 22 : 20, Z = ib || Lb) : Ia && ab ? (W = 23, Z = 5 > Pa(va) ? va : ib) : Ia && (Ca || wb) ? (W = 21, Z = va) : ib ? (W = la ? 22 : 20, Z = ib) : Aa && (W = 15, Z = Aa));
  r && (Xa[2] = r, m && (Xa[3] = T(m)));
  W && (Xa[0] = W, Z && (Xa[1] = T(Z)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Xa, w, X, ja, G, Pa, cb, Ma, xa, h, Ib, db, p, L) {
  function T(n) {
    if (w[0] === n) {
      return Ga === Ga + "" ? xa(Ga) : Ga;
    }
  }
  function ta(n) {
    var D = w[3];
    if (w[2] === n) {
      return D === D + "" ? xa(D) : D;
    }
  }
  function c(n, D, ha) {
    n + "" === n && ("a" === n.charAt(2) && (ha = !0, n = n.substr(0, 2)), n = "CS" === n ? 7.2 > x ? 117 : .9 > V || 9 > l || 9 > x || Qa ? 1 : 132 : parseInt(n, 16));
    ha && (50 === n && (n = 128), 102 < n && 108 > n && (n += 24));
    return (n - 1) * -(6 * (D || 2));
  }
  var U = G.body, eb = U.style, K, Ya, Ga = w[1], l = T(2) || T(3), Qa = T(7), fb = T(5) || T(6), x = T(8) || T(9), V = T(11) || T(12), gb = V && 0 <= w.conpare(Ga, "1.9.1"), Ca = T(13), Ha = T(15), ka = T(16) || T(17), Jb = T(10) || T(25), Da = T(20) || T(22), sb = T(23), Ta = T(21), hb = T(24), Cb = Da || sb || Ta || hb, Kb = Da && xa(Pa.userAgent.split("Edg/")[1]), Rb = xa(Pa.appVersion.split("Trident/")[1]) + 4, Za = ta(35) || ta(36) || ta(37), va = ta(38) || ta(39) || ta(40) || ta(41), tb = 
  .9 > V, Ia = (Qa ? "ie5mac" : 5.5 > l ? "ie5win" : 6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : V && !gb ? 1.4 <= V ? "gck19" : 1.3 <= V ? "gck13" : 1 <= V ? "gck12" : tb ? .8 <= V ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  ta(1) || ta(2) || ta(3) || ta(4) || ta(8) || ta(10);
  var ub, lb, mb, za = 8 > l || 7.2 > x ? !1 : L, Sb = eb.transform !== L ? "transform" : eb["-o-transform"] !== L ? "-o-transform" : eb["-ms-transform"] !== L ? "-ms-transform" : eb.MozTransform !== L ? "-moz-transform" : eb["-webkit-transform"] !== L ? "-webkit-transform" : "", Y = [], Db = [], Aa = [], ib, Lb, yb, Mb, Tb = 525 > Ha || 3.1 > ka || 2.2 > Ta || 10 > x || V && !gb || T(25) || 10 > T(3) || ta(32) || ta(30) || ta(3), ba, jb, zb, Eb, vb, $a, Ua, ab = Ma.now || function() {
    return +new Ma();
  };
  (function() {
    function n() {
      for (var z, a = 0, b = ab(); a < y.length;) {
        b < y[0].t ? ++a : (z = y.splice(a, 1)[0], z.f(z.p));
      }
      N = y.length ? h(n, O) : 0;
    }
    function D() {
      for (var z, a = 0; a < ea.length; ++a) {
        z = ea[a], z.f();
      }
    }
    function ha() {
      ia && (ia = p(ia));
    }
    function na() {
      N && (N = Ib(N));
    }
    zb = function(z) {
      ea.length || (ia = db(D, pa));
      ea.push({f:z, l:++qa});
      return qa;
    };
    Eb = function() {
      ia && (ha(), ia = db(D, pa));
    };
    vb = ha;
    var ea = [], pa = 500, qa = 0, ia;
    if (5 > l || Qa) {
      X._wdb_onlooptimer = D, D = "_wdb_onlooptimer()";
    }
    ba = function(z, a, b) {
      y.length || (N = h(n, O));
      y.push({f:z, p:a, l:++H, t:ab() + (O < b ? b : O)});
      return H;
    };
    jb = function(z) {
      for (var a = y.length, b; b = y[--a];) {
        if (b.l === z) {
          y.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    $a = function() {
      N && (na(), N = h(n, O));
    };
    Ua = na;
    var y = [], O = ka | 0 ? 64 : 16, H = 0, N;
    if (5 > l || Qa) {
      X._wdb_ontimer = n, n = "_wdb_ontimer()";
    }
  })();
  var Nb, nb, Ob, ob, Ab, r, m, W, Z, Fb, Ea, Fa, Ba, ma, kb, Ja, Ra, la, pb, wb, t, ya;
  (function() {
    function n(a, b, d) {
      var u = ["<", a], v = 1, P, oa;
      if (b) {
        for (P in b) {
          var k = b[P];
          if (null != k && "" !== k) {
            if ("style" === P) {
              u[++v] = ' style="';
              for (oa in k) {
                for (var I = ++v, Q, aa = [], e = oa.split(""), g = e.length; g;) {
                  Q = e[--g], "A" <= Q && "Z" >= Q && (Q = "-" + Q.toLowerCase()), aa[g] = Q;
                }
                u[I] = aa.join("") + ":" + k[oa] + ";";
              }
              u[++v] = '"';
            } else {
              "className" === P && (P = "class"), u[++v] = " " + P + '="' + k + '"';
            }
          }
        }
      }
      u[++v] = ">";
      null != d && (H && "font" !== a ? u[++v] = "<font>" + D(d) + "</font>" : u[++v] = D(d));
      u[++v] = "</" + a + ">";
      return u.join("");
    }
    function D(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function ha(a) {
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
      a = H ? b ? G.all : G.all.tags(a.toUpperCase()) : 6 > l && b ? G.all : G.getElementsByTagName(a);
      b = [];
      for (var d = 0, u = a.length; d < u; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function ea(a) {
      return H ? a.parentElement : a.parentNode;
    }
    function pa(a, b, d, u, v, P) {
      if (H) {
        var oa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var k = Ab(2 > a ? ob(b) : b);
        k = 2 > a ? k.indexOf(b) + a : k.length;
        b.insertAdjacentHTML(oa, n(d, u, v));
        b = Ab(b)[k];
        null != v && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (N) {
        b = G.createElement(n(d, u));
      } else {
        b = P ? G.createElementNS("http://www.w3.org/2000/svg", d) : G.createElement(d);
        if (u) {
          for (oa in u) {
            if ((a = u[oa]) || 0 === a) {
              switch(oa) {
                case "class":
                case "className":
                  Ra(b, a);
                  break;
                case "style":
                  P = b.style;
                  for (k in a) {
                    P[k] = a[k];
                  }
                  break;
                default:
                  ma(b, oa, a);
              }
            }
          }
          !x || "a" !== d && "A" !== d || !u.href || u["tag-index"] || u.tagIndex || ma(b, "tagIndex", "-0");
        }
        z || null != v && qa(b, v);
      }
      return b;
    }
    function qa(a, b) {
      if (H) {
        return pa(2, a, "font", L, b);
      }
      var d = G.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function ia(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function y(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function O(a, b, d) {
      if (8 > x || 5.5 > l) {
        b = ha(b);
      }
      a.style[b] = d;
    }
    var H = 5 > l;
    K = na("html")[0];
    Ya = na("head")[0];
    Nb = function(a) {
      return X[a] || G[a] || G.getElementById(a);
    };
    nb = na;
    Ob = function(a) {
      var b = [], d = 0, u, v = -1;
      if (9 > l || !G.getElementsByClassName) {
        var P = 6 > l ? G.all : G.getElementsByTagName("*");
      } else {
        var oa = !0;
        P = G.getElementsByClassName(a);
      }
      for (u = P.length; d < u; ++d) {
        var k = P[d];
        if (oa || (H || 1 === k.nodeType) && y(k, a)) {
          b[++v] = k;
        }
      }
      return b;
    };
    ob = ea;
    Ab = function(a) {
      a = H ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    r = function(a) {
      var b = !(7.03 < x && 7.2 > x) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], u = a.length, v = -1, P; u;) {
        if (P = a[--u], b || 1 === P.nodeType) {
          H && "FONT" === P.tagName || (d[++v] = P);
        }
      }
      return d;
    };
    m = function(a, b, d, u, v) {
      b = pa(2, a, b, d, u, v);
      H || (a.appendChild(b), z && null != u && qa(b, u));
      return b;
    };
    W = function(a, b, d, u, v) {
      b = pa(0, a, b, d, u, v);
      H || (ea(a).insertBefore(b, a), z && null != u && qa(b, u));
      return b;
    };
    Z = qa;
    Fb = function(a, b) {
      if (H) {
        return pa(0, a, "font", L, b);
      }
      var d = G.createTextNode("" + b);
      ob(a).insertBefore(d, a);
      return d;
    };
    Ea = function(a) {
      if (H) {
        a.outerHTML = "";
      } else {
        return 5.5 > l && (a.style.filter = ""), ob(a).removeChild(a), a;
      }
    };
    var N = 9 > l, z = N;
    Fa = function(a) {
      return a.tagName.toUpperCase();
    };
    Ba = function(a, b) {
      if (8 > x || 5.5 > l) {
        b = ha(b);
      }
      var d = a.getAttribute(b);
      return x && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    ma = function(a, b, d) {
      if (x && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > x || 5.5 > l) {
          b = ha(b);
        }
        a.setAttribute(b, d);
      }
    };
    kb = function(a, b) {
      if (x && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > x || 5.5 > l) {
          b = ha(b);
        }
        a.removeAttribute(b);
      }
    };
    Ja = function(a, b) {
      if (x && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > x || 5.5 > l) {
        b = ha(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ra = ia;
    la = y;
    pb = function(a, b) {
      var d;
      if (!y(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        ia(a, d + b);
      }
    };
    wb = function(a, b) {
      if (y(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        ia(a, d.join(" "));
      }
    };
    t = O;
    ya = function(a, b) {
      var d, u = -1, v;
      if (5.5 > l) {
        if (d = 5.5 > l ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); v = d[++u];) {
            O(a, v.split(":")[0], "");
          }
        }
        if (b) {
          for (u = -1, d = b.split(";"); v = d[++u];) {
            var P = v.split(":")[0];
            O(a, P, v.substr(P.length + 1));
          }
        }
      } else if (7.1 > x) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); v = d[++u];) {
            v = v.split(":"), O(a, v[0], v[1]);
          }
        }
      } else {
        9 > x || 1 > V ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ca, Na, Oa, Gb, xb, Ub, Vb, Ka, Pb;
  (function() {
    function n() {
      return k ? Q ? 2 : I ? 3 : 1 : 0;
    }
    function D(e) {
      Na(X, "load", D);
      D = L;
      na(Y, e, !0);
      Oa = Y = L;
    }
    function ha(e, g) {
      xb(function() {
        var E = y(e);
        g(E);
        E.addListener(g);
        return !0;
      });
    }
    function na(e, g, E) {
      for (var f = 0; f < e.length; ++f) {
        !0 === e[f](g) && (e.splice(f, 1), --f);
      }
      E && (e.length = 0);
    }
    function ea(e, g, E) {
      Y || H.length || ba(pa);
      H.push(e, g, E);
    }
    function pa() {
      var e = H, g;
      for (H = []; g = e.shift();) {
        na(g, e.shift(), e.shift());
      }
    }
    function qa(e) {
      var g = e || event;
      e = z[g.type];
      var E = -1, f, F;
      5 > l ? g = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : l ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : b && (g.j = g.stopPropagation, g.stopPropagation = function() {
        F = !0;
      });
      for (; f = e[++E];) {
        f.i === this ? (this.g = f.h, l && (g.currentTarget = this), this.g(g), l ? (this.g = ja, this.g = L) : delete this.g) : 7.2 > x && this === G && f.i === X && (X.g = f.h, X.g(g), delete X.g);
      }
      if (l) {
        return g.preventDefault = g.stopPropagation = ja, g.preventDefault = g.stopPropagation = L, g.returnValue;
      }
      b && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (u = !0), F && !u && g.j(), g.j = g.stopPropagation = L);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function ia() {
      var e = 9 === O.offsetWidth;
      Vb !== e && ea(Db, Vb = e);
    }
    var y = X.matchMedia, O, H = [];
    Y.push(function() {
      ha = L;
      O = m(U, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Oa(function() {
        H.length && ba(pa);
      });
    });
    ca = function(e, g, E, f) {
      if (d) {
        e.addEventListener(g, E, f ? N ? f : f.capture || !0 === f : !1);
      } else {
        var F = {i:e, h:E};
        f = z[g];
        var q = "on" + g, M, R;
        if (f) {
          for (M = f.length; R = f[--M];) {
            if (R.i === e && R.h === E) {
              return;
            }
          }
          z[g].push(F);
        } else {
          z[g] = f = [F], a || (g = e[q], "function" === typeof g && g !== qa && f.unshift({i:e, h:g}));
        }
        a ? e.attachEvent(q, qa) : e[q] = qa;
      }
    };
    Na = function(e, g, E, f) {
      if (d) {
        e.removeEventListener(g, E, f ? N ? f : f.capture || !0 === f : !1);
      } else {
        f = z[g];
        g = "on" + g;
        var F, q, M;
        if (f) {
          for (F = f.length; q = f[--F];) {
            q.i === e && (q.h === E ? f.splice(F, 1) : M = !0);
          }
          M || (a ? e.detachEvent(g, qa) : l ? (e[g] = ja, e[g] = null) : delete e[g]);
        }
      }
    };
    var N = !l && !Qa && (new cb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), z = {}, a = !1, b = 525.13 > Ha, d = !b && !Qa && X.addEventListener, u;
    b && K.addEventListener("click", function(e) {
      if (u) {
        return u = !1, e.preventDefault(), !1;
      }
    });
    Oa = function(e) {
      Y.push(e);
    };
    Gb = function(e) {
      v && v.push(e);
    };
    var v = [];
    if (419.3 >= Ha) {
      var P = function() {
        if (P) {
          var e = G.readyState;
          "loaded" === e || "complete" === e ? (P = L, D()) : ba(P);
        }
      };
      ba(P);
    } else {
      ca(X, "load", D);
    }
    l || !tb && 1.8 > V ? ca(X, "unload", function(e) {
      na(v, e, !0);
    }) : v = L;
    xb = function(e) {
      Db.push(e);
    };
    Oa(function() {
      ia();
      zb(ia);
    });
    Ub = function(e) {
      Aa && Aa.push(e);
    };
    var oa = 60 > V || Ca, k, I, Q;
    if (89 <= V || 89 <= Da || Za && 79 <= Kb || y && (y("(forced-colors:none)").matches || y("(forced-colors:active)").matches)) {
      Pb = !0, ha("(forced-colors:active)", function(e) {
        k = e.matches;
        Ka = n();
        ea(Aa, Ka);
      });
    } else if (10 <= l || fb || Za && Kb) {
      Pb = !0, ha("(-ms-high-contrast:black-on-white)", function(e) {
        k = I = e.matches;
        Ka !== n() && (Ka = n(), ea(Aa, Ka));
      }), ha("(-ms-high-contrast:white-on-black)", function(e) {
        k = Q = e.matches;
        Ka !== n() && (Ka = n(), ea(Aa, Ka));
      }), ha("(-ms-high-contrast:active)", function(e) {
        k = e.matches;
        Ka !== n() && (Ka = n(), ea(Aa, Ka));
      });
    } else if (Za && (l || V && 0 <= w.conpare(Ga, "1.8.1") || Ca)) {
      var aa = function() {
        function e(f, F) {
          if (F && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var q = f.split("(")[1].split(",");
          return xa(q[0]) + xa(q[1]) + xa(q[2]);
        }
        var g = G.defaultView;
        var E = g ? g.getComputedStyle(O, null) : O.currentStyle;
        g = (E && E.color || "").split(" ").join("");
        E = (E && E.backgroundColor || "").split(" ").join("");
        g && (k = "#123456" !== g && "rgb(18,52,86)" !== g, I = e(g) < e(E, !0), Q = e(g) > e(E, !0), Ka !== n() && (Ka = n(), ea(Aa, Ka, oa)));
      };
      xb(function(e) {
        if (e) {
          return t(O, "color", "#123456"), t(O, "backgroundColor", "#123456"), oa ? (aa(), Aa = L) : zb(aa), aa = L, !0;
        }
      });
    } else {
      Aa = n = L;
    }
  })();
  (function() {
    function n(A) {
      switch(A) {
        case 1:
          return u;
        case 2:
          return !!v;
        case 3:
          return !!P;
        case 4:
          return !!oa;
        case 5:
          return I;
        case 6:
          return k && !H;
      }
      return !1;
    }
    function D(A) {
      Q(A);
      Sa && !A && Ea(Sa);
      Q = aa = e = g = E = f = M = R = Sa = ra = L;
    }
    function ha(A) {
      G.fonts.load('1.6em "' + A + '"').then(function() {
        var fa;
        (fa = pa(aa)) ? ba(D, fa) : na(!0);
      }, function() {
        za !== L ? qa(za) : ib(qa);
      });
    }
    function na(A) {
      A && (q = ab());
      (A = pa(aa, F)) ? D(A) : (A = F, G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (q = ab(), A = !1) : A = A < ab() - q, A ? M ? ia() : O ? D(0) : za !== L ? qa(za) : ib(qa) : ba(na));
    }
    function ea() {
      return m(U, 5 > l ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, a);
    }
    function pa(A) {
      var fa = 0, B = -1, C = (b || !1) && [];
      if (!ra) {
        var J = -1;
        var sa;
        R = ea();
        for (ra = []; sa = d[++J];) {
          t(R, "fontFamily", sa), ra[J] = R.offsetWidth;
        }
      }
      for (5 > l ? R || (R = ea()) : ob(R) || U.appendChild(R); J = d[++B];) {
        t(R, "fontFamily", '"' + A + '",' + J);
        var S = R.offsetWidth;
        if (b) {
          C[B] = S;
        } else {
          if (S !== ra[B]) {
            fa = 1;
            break;
          }
        }
      }
      if (b && S === C[0] && S === C[1]) {
        for (fa = 1, B = -1; 0 <= (S = ra[++B]);) {
          if (S === C[0] && S === C[1] && S === C[2]) {
            fa = 0;
            break;
          }
        }
      }
      !l && fa && E && (R.textContent = E, S = R.offsetWidth, R.textContent = f, fa = S === R.offsetWidth ? 2 : 1, R.textContent = a);
      R = Ea(R);
      return fa;
    }
    function qa(A) {
      A ? (M = !0, F = z, ia()) : D(0);
    }
    function ia() {
      if (e) {
        for (; e.length;) {
          var A = e.shift(), fa = e.shift();
          if (n(A)) {
            Sa = Mb(fa, y, g, Sa);
            return;
          }
        }
      }
      D(0);
    }
    function y(A) {
      A ? na(!0) : ia();
    }
    Db.splice(0, 0, function() {
      if (Vb) {
        mb = 8 <= l || fb || 9.5 <= x || gb || Ca || 522 <= Ha || 3 <= ka || Jb || Cb ? 3 : 7.2 <= x ? 2 : 6 <= x || V ? 1 : 0;
        if (!mb && !l && !Qa) {
          var A = m(U, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          mb = 6 <= A.offsetWidth ? 2 : 0;
          Ea(A);
        }
        return !0;
      }
    });
    ib = !1 === za ? function(A) {
      ba(A, !1);
    } : function(A) {
      function fa(J) {
        C && (C = jb(C), za = J, B.onload = B.onerror = ja, ba(A, J));
      }
      if (za !== L) {
        ba(A, za);
      } else {
        var B = new Image(), C = ba(fa, !1, 999);
        B.onerror = function() {
          fa(!1);
        };
        B.onload = function() {
          fa(1 === B.width * B.height);
        };
        B.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > l && Oa(function() {
      var A = m(U, "div");
      ya(A, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      ub = 1 < A.offsetHeight;
      Ea(A);
    });
    Lb = function(A, fa) {
      function B() {
        if (J || !sa || C.complete) {
          var S = !!C.width;
          lb = lb || S;
          ba(A, S);
          C.onerror = C.onload = ja;
          C = A = L;
        } else {
          --sa, ba(B);
        }
      }
      var C = new Image(), J, sa = 99;
      C.onerror = function() {
        J = !0;
      };
      C.onload = function() {
        J = !0;
      };
      C.src = fa;
      ba(B);
    };
    yb = function(A, fa, B, C, J, sa, S) {
      Q = A;
      aa = fa;
      e = B;
      g = C;
      E = J;
      f = sa;
      F = S || N;
      T(10) ? ba(D, 1) : Tb ? ba(D, 0) : !G.fonts || 603 > Ha || 11 > ka ? na(!0) : ha(aa);
    };
    var O = 9 > l, H = 6 > Da || x || 530 > Ha || 5 > ka || ta(11), N = 5E3, z = 500, a = "mmmmmmmmmmlliiiiiiiii", b = 9 <= Da && 18 > Da || 3 > Ta || 7 > ka || Ha && 0 >= w.conpare(Ga, "536.11"), d = ["monospace", "sans-serif", "serif"], u = 14 <= fb || 36 <= Da || 39 <= V || 3 <= Ca || 602 <= Ha && va && 0 <= w.conpare("10.12", va) || 10 <= ka, v = 6 <= Da || V && 0 <= w.conpare(Ga, "1.9.2") || Ca || 533 <= Ha || 5 <= ka || 4.4 <= Ta || 11.5 <= x || fb || 9 <= T(2) || 10 <= T(3), P = 2 <= Da || 
    gb || Ca || 525 <= Ha || 4 <= ka || 2.2 <= Ta || 10.1 <= x || fb || 9 <= T(2) || 10 <= T(3), oa = P, k = 5.1 <= Za && 5.2 >= Za && 40 > Da || 6 <= Za && 6.1 > Za && 51 > Da || 37 > Da || 525 <= Ha || 3.1 <= ka || 3 <= Ta || 11.5 <= x, I = 4 <= T(2) || 10 <= T(3), Q, aa, e, g, E, f, F, q, M, R, Sa, ra;
  })();
  (function() {
    Mb = function(y, O, H, N) {
      N = N || m(Ya, "link", {type:"text/css", rel:"stylesheet"});
      var z;
      if (ia) {
        (z = Nb(H)) ? kb(z, "id") : z = m(U, "div", {"aria-hidden":"true", className:H});
        var a = z.offsetWidth;
        ma(z, "id", H);
      }
      qa(N, y, O, z, a);
      return N;
    };
    var n = V && 0 > w.conpare(Ga, "0.9.1"), D = 11 <= l || fb || 9 <= x && 9.5 > x, ha = 11 > l, na = 7.2 <= x && 7.5 > x, ea = 9 > V && !n || 19 > Da || 4.3 > Ta || 2 > hb || 536 > Ha || 6 > ka || 7 <= x && 9 > x && !na, pa = !n && !D && !ha && !na && !ea, qa = pa ? function(y, O, H) {
      y.onload = o;
      y.onerror = function() {
        y.onload = y.onerror = null;
        ba(H, !1);
      };
      y.href = O;
      function o() {
        y.onload = y.onerror = null;
        ba(H, !0);
      }
      o = !1;
    } : D ? function(y, O, H, N, z) {
      y.onload = function() {
        ba(H, ia(N, z));
        Ea(N);
        y.onload = null;
        N = L;
      };
      y.href = O;
    } : ha ? function(y, O, H, N, z) {
      y.onreadystatechange = function() {
        "complete" === y.readyState && (ba(H, ia(N, z)), Ea(N), N = L, y.m = ja);
      };
      y.href = O;
    } : ea || na ? function(y, O, H, N, z) {
      function a() {
        d && (u = jb(u), v = ab() + 999, ba(b, 0, 99), ea ? d.onerror = null : d.removeEventListener("load", a, !1), d = L);
      }
      function b() {
        ia(N, z) ? (Ea(N), N = L, ba(H, !0)) : ab() < v ? ba(b, 0, 99) : (Ea(N), N = L, ba(H, !1));
      }
      var d = new Image(), u = ba(a, 0, 5E3), v;
      ea ? d.onerror = a : d.addEventListener("load", a, !1);
      d.src = y.href = O;
    } : function(y, O, H) {
      ba(H, !1);
    }, ia = !pa && !n && function(y, O) {
      return y.offsetWidth !== O;
    };
  })();
  var Qb = String.fromCharCode, bb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Qb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Wb = bb[7], fc = bb[113], ac = Qb(160);
  Qb(8194);
  var bc = bb[31], Xb = bb[30], cc = bb[63], gc = bb[125], hc = bb[126], ic = Qb(59648), dc = (9 === l || V && 0 <= w.conpare(Ga, "1.8.1") || Ca) && !Pb, qb = [], rb, Va, Hb = 7.2 > x ? function() {
    rb = !rb;
    for (var n = -1, D; D = qb[++n];) {
      -1 !== D.className.indexOf("pbAlp") ? t(D, "display", rb ? "" : "none") : (pb(D, rb ? "pbChrCS" : "pbChr00"), wb(D, rb ? "pbChr00" : "pbChrCS"));
    }
  } : dc ? function() {
    rb = !rb;
    for (var n = -1, D; D = qb[++n];) {
      t(D, "opacity", rb ? 1 : 0);
    }
  } : L;
  var Yb = Xa.startBlinkingIfCursor = function(n) {
    Hb ? la(n, "pbChrCS") && (Va || !x && !Ka || (Va = db(Hb, 400)), -1 === qb.indexOf(n) && qb.push(n)) : qb = L;
  };
  Xa.stopBlinkingIfCursor = function(n) {
    Hb && (n = qb.indexOf(n), 0 <= n && (qb.splice(n, 1), !qb.length && Va && (p(Va), Va = 0)));
  };
  dc && Ub(function(n) {
    n ? Va || (Va = db(Hb, 400)) : Va && (p(Va), Va = 0);
  });
  Hb && Gb(function() {
    Va && p(Va);
  });
  Pb || Ub(function(n) {
    n ? (ma(K, "forced-colors", 2 === n ? "lod" : 3 === n ? "dol" : "active"), (Sb || 9 === l || 5.5 <= l && 9 > l && ub) && pb(K, "jsCanRotate")) : (kb(K, "forced-colors"), wb(K, "jsCanRotate"));
  });
  (function() {
    function n(k) {
      (a = k) ? ea() : lb ? na(!0) : lb !== L ? ea() : Lb(na, b);
    }
    function D() {
      D = L;
      yb(n, "PB-100", [1, Wa + "pbFont/woff2.css", 2, Wa + "pbFont/woff.css", 3, Wa + "pbFont/ttf.css", 5, Wa + "pbFont/eot.css", 6, Wa + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", cc);
    }
    function ha(k) {
      this.focus();
      k.preventDefault();
      k.stopPropagation();
    }
    function na(k) {
      k && pb(U, "pbList-noWebFont");
      ea();
    }
    function ea() {
      for (n = yb = L; z.length;) {
        pa(z.shift(), z.shift());
      }
    }
    function pa(k, I) {
      function Q(F) {
        F = Ab(F);
        for (var q = -1, M; M = F[++q];) {
          switch(M.nodeType) {
            case 1:
              Q(M);
              break;
            case 3:
              M.data && e(M.data) && g.push(M);
          }
        }
      }
      function aa(F) {
        var q = F.children, M = 0, R = q.length;
        if (R) {
          for (; M < R; ++M) {
            aa(q[M]);
          }
        } else {
          (q = F.innerText) && e(q) && g.push(F);
        }
      }
      function e(F) {
        return F.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var g = [], E;
      if (n) {
        -1 === z.indexOf(k) && (z.push(k, I), d && D && D());
      } else {
        var f = z.indexOf(k);
        0 <= f && z.splice(f, 2);
        for (5 > l ? aa(k) : Q(k); E = g.shift();) {
          f = 5 > l ? E.innerText : E.data, 2 !== a ? (0 <= f.indexOf("\u2091\u208b") && (f = f.split("\u2091\u208b").join(Xb)), 0 <= f.indexOf("\u1d07\u207b") && (f = f.split("\u1d07\u207b").join(Xb)), a && (0 <= f.indexOf("\u208b\u2081") && (f = f.split("\u208b\u2081").join(cc)), 0 <= f.indexOf("\u1d47/\u1d04") && (f = f.split("\u1d47/\u1d04").join(ic)), 0 <= f.indexOf("\u1d47/") && (f = f.split("\u1d47/").join(gc)), 0 <= f.indexOf("/\u1d04") && (f = f.split("/\u1d04").join(hc)))) : 0 <= f.indexOf("\u2091\u208b") && 
          (f = f.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= f.indexOf("\u2091") && (f = f.split("\u2091").join(bc)), I ? 5 > l ? E.innerText = f : E.data = f : qa(f.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(fc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Wb).split("&amp;").join("&"), E);
        }
      }
    }
    function qa(k, I) {
      function Q(wa, da) {
        for (var La = ""; da;) {
          da & 1 && (La += wa), da >>= 1, wa += wa;
        }
        return La;
      }
      function aa(wa, da, La) {
        for (var Bb, jc = -1, Zb, $b; Bb = da[++jc];) {
          for (; 0 <= (Zb = wa.indexOf(Bb));) {
            $b = Bb.length, wa = wa.substr(0, Zb) + Q(La, $b) + wa.substr(Zb + $b);
          }
        }
        return wa;
      }
      function e(wa) {
        var da = xa(wa), La = "" + da;
        return 0 < da && da === da | 0 && (da = wa.indexOf(La) + La.length, da <= wa.length) ? da : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), E = 5 > l || 1 === I.nodeType, f = [], F = "", q, M = -1, R, Sa, ra;
      if (E) {
        if (P) {
          var A = I.style.visibility;
          t(I, "visibility", "hidden");
        }
        I.innerHTML = "";
      }
      if (oa) {
        var fa = I;
        I = G.createDocumentFragment();
      }
      if (function(wa) {
        var da = wa.indexOf("P");
        if (-1 === da) {
          return !1;
        }
        da = xa(wa.charAt(da + 1));
        return 0 <= da && 9 >= da;
      }(k)) {
        F = Q("+", k.length);
      } else {
        0 <= (q = e(k)) && (F = Q("|", q), M = q, --M);
        for (; q = k.charAt(++M);) {
          q === Wb || R ? (F += "~", q === Wb && (R = !R)) : F += q;
        }
        F = aa(F, N, "^");
        F = aa(F, O, "{");
        F = aa(F, H, "}");
      }
      M = 0;
      for (R = k.length; M < R; ++M) {
        q = k.charAt(M);
        var B = q === ac;
        var C = " " === q;
        q = B ? " " : q;
        var J = F.charAt(M);
        var sa = (Sa = S) && B;
        var S = "|" === J;
        J = g["+|~{}^".indexOf(J) + 1];
        if ("\n" !== q) {
          if (a || !lb) {
            if (2 === a) {
              if ("\u1d47/\u1d04" === k.substr(M, 3)) {
                q = "\u1d47/\u1d04", M += 2;
              } else {
                switch(k.substr(M, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    q = k.substr(M, 2), ++M;
                }
              }
            }
            J = C && "str" === J ? "pbList-strsp" : B ? "" : !C && J ? "pbList-" + J : "";
          } else {
            B = bb.indexOf(q), B = -1 === B ? "" : bb.indexOf(q).toString(16).toUpperCase(), B = (B = 1 === B.length ? "0" + B : B) ? "pbChr" + B : "", J = C && "str" === J ? "pbList-strsp" : C || !B ? "" : J ? (B ? B + " " : "") + "pbList-" + J : B;
          }
          B = L;
          sa ? (q = 6 <= l && 8 > l ? " " : ac, J = "") : S && (V && !gb || 9.5 > x) ? (S && !Sa && (ra = 4 - (xa(k.substr(M)) + "").length), 7.5 > x ? B = v ? "position:relative;top:-4px;left:" + 12 * ra + "px" : {position:"relative", top:"-4px", left:12 * ra + "px"} : B = v ? "position:relative;left:" + 12 * ra + "px" : {position:"relative", left:12 * ra + "px"}) : C && 7.5 > x && (J = "pbList-strsp");
          v ? f.push("<font" + (J ? ' class="' + J + '"' : "") + (B ? ' style="' + B + '"' : "") + ">" + q + "</font>") : E || oa ? m(I, "font", {"class":J, style:B}, q) : W(I, "font", {"class":J, style:B}, q);
        } else {
          Sa = S = !1, v ? f.push(q) : E || oa ? Z(I, q) : Fb(I, q);
        }
      }
      if (E) {
        v ? I.innerHTML = f.join("") : oa && fa.appendChild(I), P && t(I, "visibility", A);
      } else {
        if (v) {
          g = G.createElement("font");
          for (g.innerHTML = f.join(""); f = g.firstChild;) {
            I.parentNode.insertBefore(f, I);
          }
          Ea(I);
        } else {
          oa ? fa.parentNode.replaceChild(I, fa) : Ea(I);
        }
      }
    }
    1.9 > V && xb(function(k) {
      if (k) {
        k = nb("*");
        for (var I = 0, Q = k.length, aa; I < Q; ++I) {
          aa = k[I], "B" !== Fa(aa) && -1 !== (" " + aa.className).toLowerCase().indexOf(" pbchr") && (Ja(aa, "title") || ma(aa, "title", aa.textContent), aa.textContent = " ");
        }
        return !0;
      }
    });
    xb(function(k) {
      if (k) {
        k = Ob("pbChrCS");
        for (var I = 0, Q = k.length; I < Q; ++I) {
          Yb(k[I]);
        }
        return !0;
      }
    });
    var ia = [], y = V && 0 > w.conpare(Ga, "0.9.9");
    xb(function(k) {
      function I(C) {
        var J = Ba(C, "pbTip");
        if (J) {
          var sa = J.charAt(0);
          var S = "_" === sa;
          J = (S ? J.charAt(2) : sa).toUpperCase().charCodeAt(0) - 65;
          f ? m(C, "div", {style:{left:7 * J + 3 + "px"}}) : (sa = Ba(C, "title"), kb(C, "pbTip"), kb(C, "title"), S = m(C, "div", {className:"pbTip" + (S ? "Btm" : ""), style:{width:sa.length + aa + "em", left:7 * J - (y ? 0 : 5) + "px"}}, sa), S = m(S, "div"), .9 <= V && y && t(S, "left", "2px"));
        }
        E && 0 <= C.className.indexOf("pbColor") && m(C, "u");
      }
      function Q(C, J) {
        var sa = Ba(C, "pbGhst"), S = C.className, wa = S.split("pbCsr")[1] || "", da = S.split("pbAlp")[1] || "";
        if ("CS" === sa) {
          var La = "_";
        } else {
          La = sa, 3 === La.length && (La = La.substr(0, 2)), La = bb[parseInt(La, 16)] || "~";
        }
        var Bb;
        wa = wa.split(" ")[0];
        if (da = xa(da.split(" ")[0])) {
          e && (S = S.split("pbChr")[1].split(" ")[0], t(C, "backgroundPosition", c(S, 2, A) + "px " + -24 * (10 - da) + "px")), !J && g && W(C, "a").appendChild(C);
        }
        sa && (da = 10 - da, e && (Bb = {backgroundPosition:c(sa, 2, A) + "px " + -24 * (10 - da) + "px"}), kb(C, "pbGhst"), M = W(C, "b", {className:"pbChr" + sa + " pbCsr" + wa + " pbAlp" + da, style:Bb}, La), Yb(M));
        Yb(C);
      }
      if (k) {
        var aa = 6 > l ? 2 : 0, e = 7.2 > x || .9 > V || Qa, g = 1.1 === V, E = 1.4 > V;
        k = nb("SAMP");
        var f = 8 === l, F = mb, q, M, R, Sa, ra;
        ub && pb(U, "pbLCD-AX");
        if (k.length) {
          for (R = -1; q = k[++R];) {
            if (la(ob(q), "pbLCD")) {
              var A = la(q, "PB-120") || la(q, "FX-795P");
              var fa = r(q);
              for (q = fa.length; ra = fa[--q];) {
                switch(Fa(ra)) {
                  case "A":
                    (2 > F || f) && I(ra);
                    if (2 > F) {
                      var B = r(ra);
                      for (Sa = B.length; Sa;) {
                        Q(B[--Sa], !0);
                      }
                    }
                    Jb ? ma(ra, "href", "javascript:void(0)") : (ca(ra, "click", ha), ia.push(ra));
                    break;
                  case "B":
                    2 > F && Q(ra, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Gb(function() {
      for (var k; k = ia.shift();) {
        Na(k, "click", ha);
      }
    });
    6 === l && (new cb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(G);
    var O = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), H = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), N = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Xb + bc).split(""), z = [], a, b, d;
    if (.9 <= V && 0 >= w.conpare(Ga, "0.9.1")) {
      pb(K, "pbLCD-gecko09To091");
      var u = !0;
    }
    xb(function(k) {
      if (k) {
        b = Wa + "pbFont/x3mask" + (u ? ".gecko0.9.1.gif" : ".png");
        k = nb("*");
        for (var I = -1, Q; Q = k[++I];) {
          la(Q, "pbList") ? pa(Q) : la(Q, "pbFont") && pa(Q, !0);
        }
        z.length && D();
        return !0;
      }
    });
    var v = !1, P = 8 > x, oa = !v && !P && !(6 > l) && G.createDocumentFragment && !!U.replaceChild;
    Xa.prettify = pa;
  })();
  var ec = G.scripts || nb("script");
  var Wa = ec[ec.length - 1].src.split("/");
  --Wa.length;
  (Wa = Wa.join("/")) && (Wa += "/");
  6.1 > ka && ca(X, "scroll", Eb);
  Gb(vb);
  6.1 > ka && ca(X, "scroll", $a);
  Gb(Ua);
  10 > l && (11 !== Rb || 5 !== l) || (9 > x || 1 > V || !Qa && !X.addEventListener ? G.write('<link href="' + Wa + Ia + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : Oa(function() {
    m(Ya, "link", {href:Wa + "" + Ia, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

