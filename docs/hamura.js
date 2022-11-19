/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Ta, v) {
  var Q = 0, ea, z, za = (Ta + "").split("."), qa = (v + "").split("."), Ea = za.length;
  for (ea = qa.length; "0" === za[Ea - 1];) {
    --Ea;
  }
  for (; "0" === qa[ea - 1];) {
    --ea;
  }
  for (z = Ea < ea ? Ea : ea; Q < z; ++Q) {
    var Ua = za[Q] - 0, h = qa[Q] - 0;
    if (Ua !== h) {
      return Ua > h ? 1 : -1;
    }
  }
  return Ea > ea ? 1 : Ea === ea ? 0 : -1;
};
(function(Ta, v, Q, ea, z, za, qa, Ea) {
  function Ua(u, X, P) {
    P = za(u.split(X)[1]);
    return 0 <= P ? P : 0;
  }
  function h(u, X) {
    return 0 <= u.indexOf(X);
  }
  function ab(u) {
    return h(u, "Linux armv") || h(u, "Linux aarch") || h(u, "Linux i686") || h(u, "Linux x86_64");
  }
  function B(u, X) {
    for (var P in X) {
      if (P === u) {
        return !0;
      }
    }
  }
  function f(u, X) {
    var P = "", ba = -1, Ma;
    if (u = u.split(X)[1]) {
      for (; Ma = u.charCodeAt(++ba);) {
        if (48 <= Ma && 57 >= Ma || 46 === Ma) {
          P += u.charAt(ba);
        } else {
          break;
        }
      }
      for (ba = P.length; ba;) {
        if (46 === P.charCodeAt(--ba)) {
          P = P.substr(0, ba);
        } else {
          break;
        }
      }
    }
    return P;
  }
  function va(u) {
    for (var X = arguments, P = 1, ba = X[0], Ma; P < X.length; ++P) {
      0 > Fa(ba, Ma = X[P]) && (ba = Ma);
    }
    return ba;
  }
  function Db(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var Fa = Ta.conpare, a = ea.userAgent, T = ea.appVersion, jb = za(T) || 0, E = ea.platform, t = Q.documentElement, Qa = t && t.style, Aa = Q.documentMode, O = z.width;
  z = z.height;
  var U = v.HTMLAudioElement, kb = v.performance, lb = v.Int8Array, bb = v.ontouchstart !== Ea, Va = f(T, "Version/") || f(a, "Version/"), Eb = v.operamini, Ga = !Eb && v.opera, Nb = Ga && (Ga.version && "function" === typeof Ga.version ? Ga.version() : va(f(a, "Opera "), Va, jb)), Fb = v.opr, eb = !Ga && (Q.all || Aa);
  Aa = eb && (Aa ? Aa : v.XMLHttpRequest ? Q.getElementsByTagName ? 7 : 4 : Q.compatMode ? 6 : (0).toFixed ? 5.5 : v.attachEvent ? 5 : 4);
  t = !eb && t.msContentZoomFactor;
  var mb = !t && (v.chrome || v.chromium), fb = !eb && function() {
    for (var u in Qa) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), nb = h(a, "UCWEB"), ob = nb && f(a, " U2/"), tb = nb && f(a, "; wds "), Na = f(a.split("_").join("."), "; iPh OS "), na = f(a, "; Adr "), cb = h(T, "YJApp-ANDROID"), wa = h(E, "Android") || fb && h(T, "Android") || cb;
  na = f(E, "Android ") || f(T, "Android ") || f(a, "Android ") || na;
  var Oa = h(E, "Linux"), ub = "MacIntel" === E && ea.standalone !== Ea, vb = fb && f(a, "Goanna/"), Ha = !vb && fb && (f(a, "rv:") || f(a.substr(a.indexOf(") Gecko/") - 11), "; ")), Z = f(a, "Firefox/"), H = f(a, "Opera/"), Gb = v.FNRBrowser, Wa = Ua(a, "AppleWebKit/"), ib = f(a, "Chrome/"), Ib = f(T, "Iron/"), Hb = f(a, "OPR/"), wb = f(T, "KHTML/"), Jb = f(a.toLowerCase(), "iris");
  f(a, "FxiOS/");
  f(a, "CriOS/");
  f(a, "EdgiOS/");
  var pb = f(a, "Silk/"), db = Ua(a, "SamsungBrowser/"), xb = !db && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    X, P = u.length; X = u[--P];) {
      if (h(a, X)) {
        return 2 > za(Va) ? Va : 0.9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (P = u.length; X = u[--P];) {
      if (h(a, X)) {
        return Va;
      }
    }
  }(), ta = mb && 534.3 >= Wa, gb = ab(E), Xa = gb && !h(a, E) && ab(a);
  bb = bb && (Wa || fb) && Xa || !na && cb;
  cb = !!v.ReactNativeWebView;
  gb = gb && function() {
    for (var u in v) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ra = (Xa = v.puffinDevice) && Xa.clientInfo;
  Ra = (Xa = Ra && "iOS" === Ra.os && Ra.osVersion) && Ra.model;
  var Ia = !Aa && Q.registerElement, Kb = !Aa && Q.execCommand, qb = v.webkitCancelAnimationFrame, yb = Oa && Ia && "11.0.696.34" === ib, rb = v._firefoxTV_playbackStateObserverJava, Lb = Ua(a, "diordnA ");
  if ("Nitro" === E) {
    var r = 1;
  } else if ("Nintendo DSi" === E) {
    r = 2;
    var n = H;
  } else if ("New Nintendo 3DS" === E || h(a, "iPhone OS 6_0") && 320 === O && 240 === z) {
    r = 4, n = f(a, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === E) {
    r = 3, n = f(a, "Version/"), Wa = 535;
  } else if ("Nintendo Swicth" === E) {
    r = 7, n = f(T, "NintendoBrowser/");
  } else if (v.wiiu) {
    r = 6;
    n = f(T, "NintendoBrowser/");
    var L = 15, A = f(T, "AppleWebKit/") || (qb ? 536 : 534);
    n || (n = qb ? 4 : 2, h(T, "Macintosh;") || h(T, "Windows NT") && h(T, "Touch"));
  } else if (Ga && Ga.wiiremote) {
    r = 5, n = f(a, "Wii; U; ; ");
  } else if (H = f(a, "PlayStation Vita ")) {
    r = 10, n = H;
  } else if (H = f(a, "(PlayStation Portable); ")) {
    r = 8;
    n = H;
    var zb = 3.3;
  } else if (H = f(a, "PLAYSTATION 3; ") || f(a, "PLAYSTATION 3 ")) {
    r = 11, n = H, 0 > Fa("4.10", H) && (L = 26, A = H);
  } else if (h(a, "Xbox One")) {
    r = 15, n = 1;
  } else if (h(a, "Xbox")) {
    r = 14, n = 1;
  } else if (2 === jb && h(a, "Sony/COM2/")) {
    r = 17;
    n = 2;
    zb = 3.4;
    var Ya = !0;
  } else if (0 === E.indexOf("iP") || Na || Xa || ub) {
    if (Xa) {
      switch(n = Xa, Ra.substr(0, 4)) {
        case "iPho":
          var xa = 0;
          f(Ra, xa);
          var ia = !0;
          break;
        case "iPad":
          xa = 1;
          f(Ra, xa);
          var ja = !0;
          break;
        case "iPod":
          xa = 2;
          f(Ra, xa);
          var hb = !0;
      }
    } else {
      Na ? n = Na : (n = f(T.split("_").join("."), "OS "), B("isSecureContext", v), B("enableWebGL", v), B("sameOrigin", v));
      if (!n || Gb) {
        n = v.PointerEvent ? 13 : v.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ea.sendBeacon ? 11.3 : v.WebAssembly ? 11.2 : v.HTMLMeterElement ? 10.3 : v.Proxy ? 10.2 : v.HTMLPictureElement ? 9.3 : qa.isNaN ? 9.2 : v.SharedWorker ? kb && kb.now ? 8 : 8.4 : Kb ? 7.1 : v.webkitURL ? 6.1 : v.Worker ? 5.1 : lb ? 4.3 : U ? 4.1 : 3.2;
      }
      var ya = O === 1.5 * z || 1.5 * O === z;
      0 === E.indexOf("iPhone") ? (xa = 0, ia = !0) : 0 === E.indexOf("iPad") || ub ? (xa = 1, ja = !0) : 0 === E.indexOf("iPod") && (xa = 2, hb = !0);
    }
    L = !Xa && (ea.standalone || (ja || 12 > n) && B("webkitFullscreenEnabled", Q) || 11 <= n && 13 > n && ea.mediaDevices) ? 16 : 17;
    r = 24;
    A = n;
  } else if (h(a, "Kobo")) {
    r = 18, L = 21, A = 2.2, wa = !0;
  } else if (h(a, "EBRD")) {
    r = 19, L = 21, A = 2.2;
  } else if (H = f(a, "CrOS x86_64 ") || f(a, "CrOS aarch64 ") || f(a, "CrOS i686 ") || f(a, "CrOS armv7l ")) {
    r = 28, n = H;
  } else if (v.onmoztimechange !== Ea) {
    r = 29, n = 18.1 > Ha ? "1.0.1" : 19 > Ha ? 1.1 : 27 > Ha ? 1.2 : 29 > Ha ? 1.3 : 31 > Ha ? 1.4 : 33 > Ha ? 2 : 35 > Ha ? 2.1 : 38 > Ha ? 2.2 : 45 > Ha ? 2.5 : 2.6, h(a, "Mobile") ? ia = !0 : h(a, "Tablet") ? ja = !0 : h(a, "TV");
  } else if (v.palmGetResource) {
    r = 30, n = f(a, "webOS/") || f(a, "WEBOS") || f(a, "hpwOS/"), h(a, "webOS.TV") || h(a, "/SmartTV") || (ia = !0);
  } else if (H = f(a, "Tizen ")) {
    r = 31, n = H, L = 24, A = db, ia = !0;
  } else if (H = f(a, "Windows Phone ") || f(T, "Windows Phone OS ") || tb) {
    r = 23, n = H, ia = !0;
  } else if (t && "ARM" === E) {
    r = 23, n = 10, ia = !0;
  } else if (eb && h(T, "ZuneWP")) {
    r = 23, n = 11 === Aa ? 8.1 : 10 === Aa ? 8 : 9 === Aa ? 7.5 : 7 === Aa ? 7 : "?", ia = !0;
  } else if (h(a, "FOMA;")) {
    r = 16, ia = !0;
  } else if (h(a, "SoftBank;")) {
    r = 16, ia = !0;
  } else if (h(a, "KFMUWI")) {
    var Ja = !0;
    n = 6.3;
    var M = ja = !0;
  } else if (h(a, "KFKAWI")) {
    Ja = !0, n = 6, M = ja = !0;
  } else if (h(a, "KFSUWI") || h(a, "KFAUWI") || h(a, "KFDOWI")) {
    Ja = !0, n = 5, M = ja = !0;
  } else if (h(a, "KFGIWI")) {
    Ja = !0, n = 5, M = ja = !0;
  } else if (h(a, "KFARWI") || h(a, "KFSAWA") || h(a, "KFSAWI")) {
    Ja = !0, n = 5 <= za(na) ? 5 : 4, M = ja = !0;
  } else if (h(a, "KFSOWI") || h(a, "KFTHWA") || h(a, "KFTHWI") || h(a, "KFAPWA") || h(a, "KFAPWI")) {
    Ja = !0, n = 3, M = ja = !0;
  } else if (h(a, "KFOT") || h(a, "KFTT") || h(a, "KFJWA") || h(a, "KFJWI")) {
    Ja = !0, n = 2, M = ja = !0;
  } else if (h(a, "Kindle Fire")) {
    Ja = !0, n = 1, M = ja = !0;
  } else if (H = f(a, "Kindle/")) {
    r = 20, n = H, L = 21, A = 2.2;
  } else if (rb) {
    Ja = !0, n = na || Lb, M = !0;
  } else if (h(a, "AmazonWebAppPlatform") || h(a, "; AFT")) {
    Ja = !0, n = na, M = !0;
  } else if (h(a, "MeeGo")) {
    r = 32;
  } else if (h(a, "Maemo")) {
    r = 33;
  } else if (0 === a.indexOf("Windows Mobile;") || Jb) {
    r = 22, Ya = !0;
  } else if ("WinCE" === E) {
    r = 21, Ya = !0;
  } else if (0 === E.indexOf("Win")) {
    r = "Win16" === E ? 35 : "Win32" === E ? 36 : "Win64" === E ? 37 : 0, n = f(a, "Windows NT ") || f(a, "Windows ");
  } else if (0 === E.indexOf("Mac")) {
    r = "Mac68K" === E ? 39 : "MacPowerPC" === E || "MacPPC" === E ? 38 : "MacIntel" === E ? 40 : 0;
    if (H = f(a.split("_").join("."), "Mac OS X ")) {
      n = H;
    }
    var Ab = !0;
  } else if (h(a, "BlackBerry") || h(a, "BB10")) {
    r = 34, n = Va, ia = !0;
  } else if (h(a, "SunOS") || h(a, "Sun Solaris")) {
    r = 42;
  } else if (h(a, "FreeBSD")) {
    r = 43;
  } else if (h(a, "OpenBSD")) {
    r = 44;
  } else if (h(a, "NetBSD")) {
    r = 45;
  } else if (wa && fb) {
    h(a, "Android 4.4;") ? ya = {min:2.3} : 4 <= za(na) ? ya = na : ya = {min:2.2}, n = ya;
  } else if (wa && Ga) {
    na ? ya = na : ya = {min:1.6}, n = ya, h(a, "Tablet") ? ja = !0 : ia = !0;
  } else if (na) {
    n = na, wa = !0;
  } else if (Oa && bb || cb || gb) {
    var ra = !0;
    db ? ya = {min:4.4} : mb && !ta || Fb || Hb ? ya = {min:4} : (ya = na = Qa.touchAction !== Ea ? {min:5} : Ia ? 4.4 : lb ? ea.connection ? v.searchBoxJavaBridge_ || mb ? qa.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Wa ? 3 : 533 <= Wa ? U ? 2.3 : 2.2 : 530 <= Wa ? 2 : 1.5, xb && (L = 24, A = xb));
    n = ya;
    wa = !0;
  } else {
    yb ? (n = {min:5}, ra = wa = !0) : Oa && (h(a, "Ubuntu") ? r = 46 : (H = f(a, "Mint/")) ? (r = 47, n = H) : (H = f(a, "Fedora/")) ? (r = 48, n = H) : r = h(a, "Gentoo") ? 49 : 50);
  }
  Ja || wa && ra && pb ? r = 27 : wa && (r = r || 26);
  L || (M = M || wa, Ga ? (L = M || Ya || ia || ja ? 9 : 8, A = Nb) : eb ? (ya = Ua(T, "Trident/") + 4, L = Ya || ia || ja || hb ? 3 : Ab && 5 <= Aa ? 7 : 2, A = Aa) : t ? (L = 23 === r ? 6 : 5, A = f(T, "Edge/")) : vb ? (L = 13, A = vb) : fb ? (L = M ? 12 : 11, A = Ha || Z) : db ? (L = 24, A = db) : (H = zb || f(a, "NetFront/")) ? (L = 18, A = H) : (H = f(a, "iCab")) ? (L = 19, A = H) : (H = va(f(a, "Opera Mini/"), f(a, "Opera Mobi/")) || Eb && Va) ? (L = 10, A = H, r || (h(a, "iPhone") ? xa = 0 : 
  h(a, "iPad") ? xa = 1 : h(a, "iPod") && (xa = 2), xa && (r = 24))) : nb ? (L = 25, A = ob) : wb ? (L = 14, A = jb) : wa && ta ? (L = 21, A = na) : mb || Fb || Hb ? (L = M ? 22 : 20, A = ib || Ib) : wa && Ia ? (L = 23, A = 5 > za(na) ? na : ib) : wa && (Va || ra) ? (L = 21, A = na) : ib ? (L = M ? 22 : 20, A = ib) : Wa && (L = 15, A = Wa));
  r && (Ta[2] = r, n && (Ta[3] = Db(n)));
  L && (Ta[0] = L, A && (Ta[1] = Db(A)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ta, v, Q, ea, z, za, qa, Ea, Ua, h, ab, B) {
  function f(k) {
    if (v[0] === k) {
      return E === E + "" ? qa(E) : E;
    }
  }
  function va(k) {
    var C = v[3];
    if (v[2] === k) {
      return C === C + "" ? qa(C) : C;
    }
  }
  function Db(k, C, fa) {
    k + "" === k && ("a" === k.charAt(2) && (fa = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > O ? 117 : .9 > U || 9 > t || 9 > O || Qa ? 1 : 132 : parseInt(k, 16));
    fa && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (C || 2));
  }
  var Fa = z.body, a = Fa.style, T, jb, E = v[1], t = f(2) || f(3), Qa = f(7), Aa = f(5) || f(6), O = f(8) || f(9), U = f(11) || f(12), kb = U && 0 <= v.conpare(E, "1.9.1"), lb = f(13), bb = f(15), Va = f(16) || f(17), Eb = f(10) || f(25), Ga = f(20) || f(22), Nb = Ga || f(23) || f(21) || f(24), Fb = Ga && qa(za.userAgent.split("Edg/")[1]);
  za = qa(za.appVersion.split("Trident/")[1]) + 4;
  var eb = va(35) || va(36) || va(37), mb = !t && !Qa && (new Ea('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), fb = (Qa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : 7.2 > O ? "opr70" : 8 > O ? "opr72" : 9.5 > O ? "opr" + (O | 0) : U && !kb ? 1.4 <= U ? "gck19" : 1.3 <= U ? "gck13" : 1 <= U ? "gck12" : .9 <= U ? "gck09" : .8 <= U ? "gck08" : "gck07" : "modern") + 
  ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9) || va(10);
  var nb, ob, tb, Na = 8 > t || 7.2 > O ? !1 : B, na = a.transform !== B ? "transform" : a["-o-transform"] !== B ? "-o-transform" : a["-ms-transform"] !== B ? "-ms-transform" : a.MozTransform !== B ? "-moz-transform" : a["-webkit-transform"] !== B ? "-webkit-transform" : "", cb = [], wa = [], Oa = [], ub, vb, Ha, Z, H, Gb, Wa, ib, Ib, Hb;
  (function() {
    function k() {
      for (var g, m = 0, w = +new ab(); m < ca.length;) {
        w < ca[0].t ? ++m : (g = ca.splice(m, 1)[0], g.f(g.p));
      }
      b = ca.length ? Ua(k, ha) : 0;
    }
    function C() {
      for (var g, m = 0; m < aa.length; ++m) {
        g = aa[m], g.f();
      }
    }
    function fa() {
      R && (R = clearInterval(R));
    }
    function ka() {
      b && (b = h(b));
    }
    Gb = function(g) {
      aa.length || (R = setInterval(C, oa));
      aa.push({f:g, l:++sa});
      return sa;
    };
    Wa = function() {
      R && (fa(), R = setInterval(C, oa));
    };
    ib = fa;
    var aa = [], oa = 500, sa = 0, R;
    if (5 > t || Qa) {
      Q._wdb_onlooptimer = C, C = "_wdb_onlooptimer()";
    }
    Z = function(g, m, w) {
      ca.length || (b = Ua(k, ha));
      ca.push({f:g, p:m, l:++d, t:+new ab() + (ha < w ? w : ha)});
      return d;
    };
    H = function(g) {
      for (var m = ca.length, w; w = ca[--m];) {
        if (w.l === g) {
          ca.splice(m, 1);
          break;
        }
      }
      return 0;
    };
    Ib = function() {
      b && (ka(), b = Ua(k, ha));
    };
    Hb = ka;
    var ca = [], ha = 16, d = 0, b;
    if (5 > t || Qa) {
      Q._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var wb, Jb, pb, db, xb, ta, gb, Xa, Ra, Ia, Kb, qb, yb, rb, Lb, r, n, L, A, zb;
  (function() {
    function k(d, b, g) {
      var m = ["<", d], w = 1, D, I;
      if (b) {
        for (D in b) {
          var J = b[D];
          if (null != J && "" !== J) {
            if ("style" === D) {
              m[++w] = ' style="';
              for (I in J) {
                for (var Sa = ++w, pa, Ka = [], la = I.split(""), Ba = la.length; Ba;) {
                  pa = la[--Ba], "A" <= pa && "Z" >= pa && (pa = "-" + pa.toLowerCase()), Ka[Ba] = pa;
                }
                m[Sa] = Ka.join("") + ":" + J[I] + ";";
              }
              m[++w] = '"';
            } else {
              "className" === D && (D = "class"), m[++w] = " " + D + '="' + J + '"';
            }
          }
        }
      }
      m[++w] = ">";
      null != g && (R && "font" !== d ? m[++w] = "<FONT>" + g + "</FONT>" : m[++w] = g);
      m[++w] = "</" + d + ">";
      return m.join("");
    }
    function C(d) {
      d = "*" === d && 6 > t ? "*" !== d ? z.all.tags(d.toUpperCase()) : z.all : z.getElementsByTagName(d);
      var b = [], g = 0, m;
      for (m = d.length; g < m; ++g) {
        b[g] = d[g];
      }
      return b;
    }
    function fa(d) {
      return R ? d.parentElement : d.parentNode;
    }
    function ka(d, b, g, m, w, D) {
      if (R) {
        var I = 0 === d ? "beforebegin" : 1 === d ? "afterend" : "beforeend";
        var J = db(2 > d ? pb(b) : b);
        J = 2 > d ? J.indexOf(b) + d : J.length;
        b.insertAdjacentHTML(I, k(g, m, w));
        b = db(b)[J];
        null != w && ("font" === g ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (ca) {
        b = z.createElement(k(g, m));
      } else {
        b = D ? z.createElementNS("http://www.w3.org/2000/svg", g) : z.createElement(g);
        if (m) {
          for (I in m) {
            if ((g = m[I]) || 0 === g) {
              switch(I) {
                case "class":
                case "className":
                  Lb(b, g);
                  break;
                case "style":
                  d = b.style;
                  for (J in g) {
                    d[J] = g[J];
                  }
                  break;
                default:
                  yb(b, I, g);
              }
            }
          }
        }
        ha || null != w && aa(b, w);
      }
      return b;
    }
    function aa(d, b) {
      if (R) {
        return ka(2, d, "font", B, b);
      }
      var g = z.createTextNode("" + b);
      d.appendChild(g);
      return g;
    }
    function oa(d, b) {
      9 > t ? d.className = b : d.setAttribute("class", b);
    }
    function sa(d, b) {
      return -1 !== (" " + d.className + " ").indexOf(" " + b + " ");
    }
    var R = 5 > t;
    T = C("html")[0];
    jb = C("head")[0];
    wb = C;
    Jb = function(d) {
      var b = [], g = 0, m, w = -1;
      if (9 > t || !z.getElementsByClassName) {
        var D = 6 > t ? z.all : z.getElementsByTagName("*");
      } else {
        var I = !0;
        D = z.getElementsByClassName(d);
      }
      for (m = D.length; g < m; ++g) {
        var J = D[g];
        if (I || (R || 1 === J.nodeType) && sa(J, d)) {
          b[++w] = J;
        }
      }
      return b;
    };
    pb = fa;
    db = function(d) {
      d = R ? d.children : d.childNodes;
      for (var b = [], g = d.length; g;) {
        b[--g] = d[g];
      }
      return b;
    };
    xb = function(d) {
      var b = !(7.03 < O && 7.2 > O) && d.children;
      d = b ? b : d.childNodes;
      for (var g = [], m = d.length, w = -1, D; m;) {
        if (D = d[--m], b || 1 === D.nodeType) {
          R && "FONT" === D.tagName || (g[++w] = D);
        }
      }
      return g;
    };
    ta = function(d, b, g, m, w) {
      b = ka(2, d, b, g, m, w);
      R || (d.appendChild(b), ha && null != m && aa(b, m));
      return b;
    };
    gb = function(d, b, g, m, w) {
      b = ka(0, d, b, g, m, w);
      R || (fa(d).insertBefore(b, d), ha && null != m && aa(b, m));
      return b;
    };
    Xa = aa;
    Ra = function(d, b) {
      if (R) {
        return ka(0, d, "font", B, b);
      }
      var g = z.createTextNode("" + b);
      pb(d).insertBefore(g, d);
      return g;
    };
    Ia = function(d) {
      R ? d.outerHTML = "" : pb(d).removeChild(d);
    };
    var ca = 9 > t, ha = ca;
    Kb = function(d) {
      return d.tagName.toUpperCase();
    };
    qb = function(d, b) {
      return d.getAttribute(b) || "";
    };
    yb = function(d, b, g) {
      d.setAttribute(b, g);
    };
    rb = function(d, b) {
      d.removeAttribute(b);
    };
    Lb = oa;
    r = sa;
    n = function(d, b) {
      var g;
      if (!sa(d, b)) {
        if (g = d.className) {
          b = " " + b;
        }
        oa(d, g + b);
      }
    };
    L = function(d, b) {
      if (sa(d, b)) {
        var g = d.className.split(" ");
        g.splice(g.indexOf(b), 1);
        oa(d, g.join(" "));
      }
    };
    A = function(d, b, g) {
      d.style[b] = g;
    };
    zb = function(d, b) {
      var g = -1, m, w;
      if (5.5 > t) {
        if (d.setAttribute("style", ""), b) {
          for (m = b.split(";"); w = m[++g];) {
            var D = w.split(":");
            d.style[D[0]] = w.substr(D[0].length + 1);
          }
        }
      } else if (7.1 > O) {
        if (d.setAttribute("style", ""), b) {
          for (m = b.split(";"); w = m[++g];) {
            D = w.split(":"), d.style[D[0]] = D[1];
          }
        }
      } else {
        9 > O || 1 > U ? b ? d.setAttribute("style", b) : d.removeAttribute("style") : d.style.cssText = b;
      }
    };
  })();
  var Ya, xa, ia, ja, hb, ya, Ja, M, Ab;
  (function() {
    function k() {
      return pa ? la ? 2 : Ka ? 3 : 1 : 0;
    }
    function C(e) {
      xa(Q, "load", C);
      C = B;
      ka(cb, e, !0);
      ia = cb = B;
    }
    function fa(e, c) {
      hb(function() {
        var p = ca(e);
        c(p);
        p.addListener(c);
        return !0;
      });
    }
    function ka(e, c, p) {
      for (var l = 0; l < e.length; ++l) {
        !0 === e[l](c) && (e.splice(l, 1), --l);
      }
      p && (e.length = 0);
    }
    function aa(e, c, p) {
      cb || d.length || Z(oa);
      d.push(e, c, p);
    }
    function oa() {
      var e = d, c;
      for (d = []; c = e.shift();) {
        ka(c, e.shift(), e.shift());
      }
    }
    function sa(e) {
      var c = e || event;
      e = b[c.type];
      var p = -1, l, q;
      t ? (c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : m && (c.j = c.stopPropagation, c.stopPropagation = function() {
        q = !0;
      });
      for (; l = e[++p];) {
        l.i === this ? (this.g = l.h, this.g(c), this.g = ea, this.g = B) : 7.2 > O && this === z && l.i === Q && (Q.g = l.h, Q.g(c), delete Q.g);
      }
      if (t) {
        return c.preventDefault = c.stopPropagation = B, c.returnValue;
      }
      m && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (D = !0), q && !D && c.j(), c.j = c.stopPropagation = B);
    }
    function R() {
      var e = 9 === ha.offsetWidth;
      Ja !== e && aa(wa, Ja = e);
    }
    var ca = Q.matchMedia, ha, d = [];
    cb.push(function() {
      fa = B;
      ha = ta(Fa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      ia(function() {
        d.length && Z(oa);
      });
    });
    Ya = function(e, c, p, l) {
      if (w) {
        e.addEventListener(c, p, l ? mb ? l : l.capture : !1);
      } else {
        var q = {i:e, h:p};
        l = b[c];
        var y = "on" + c, N, F;
        if (l) {
          for (N = l.length; F = l[--N];) {
            if (F.i === e && F.h === p) {
              return;
            }
          }
          b[c].push(q);
        } else {
          b[c] = l = [q], g || (c = e[y], "function" === typeof c && c !== sa && l.unshift({i:e, h:c}));
        }
        g ? e.attachEvent(y, sa) : e[y] = sa;
      }
    };
    xa = function(e, c, p, l) {
      if (w) {
        e.removeEventListener(c, p, l ? mb ? l : l.capture : !1);
      } else {
        l = b[c];
        c = "on" + c;
        var q, y, N;
        if (l) {
          for (q = l.length; y = l[--q];) {
            y.i === e && (y.h === p ? l.splice(q, 1) : N = !0);
          }
          N || (g ? e.detachEvent(c, sa) : (e[c] = ea, e[c] = null));
        }
      }
    };
    var b = {}, g = !1, m = 525.13 > bb, w = !m && !Qa && Q.addEventListener, D;
    m && T.addEventListener("click", function(e) {
      if (D) {
        return D = !1, e.preventDefault(), !1;
      }
    });
    ia = function(e) {
      cb.push(e);
    };
    ja = function(e) {
      I && I.push(e);
    };
    var I = [];
    if (419.3 >= bb) {
      var J = function() {
        if (J) {
          var e = z.readyState;
          "loaded" === e || "complete" === e ? (J = B, C()) : Z(J);
        }
      };
      Z(J);
    } else {
      Ya(Q, "load", C);
    }
    t || .9 <= U && 1.8 > U ? Ya(Q, "unload", function(e) {
      ka(I, e, !0);
    }) : I = B;
    hb = function(e) {
      wa.push(e);
    };
    ia(function() {
      R();
      Gb(R);
    });
    ya = function(e) {
      Oa && Oa.push(e);
    };
    var Sa = 60 > U || lb, pa, Ka, la;
    if (89 <= U || 89 <= Ga || eb && 79 <= Fb || ca && (ca("(forced-colors:none)").matches || ca("(forced-colors:active)").matches)) {
      Ab = !0, fa("(forced-colors:active)", function(e) {
        pa = e.matches;
        M = k();
        aa(Oa, M);
      });
    } else if (10 <= t || Aa || eb && Fb) {
      Ab = !0, fa("(-ms-high-contrast:black-on-white)", function(e) {
        pa = Ka = e.matches;
        M !== k() && (M = k(), aa(Oa, M));
      }), fa("(-ms-high-contrast:white-on-black)", function(e) {
        pa = la = e.matches;
        M !== k() && (M = k(), aa(Oa, M));
      }), fa("(-ms-high-contrast:active)", function(e) {
        pa = e.matches;
        M !== k() && (M = k(), aa(Oa, M));
      });
    } else if (eb && (t || U && 0 <= v.conpare(E, "1.8.1") || lb)) {
      var Ba = function() {
        function e(l, q) {
          if (q && "transparent" === l) {
            return 382.5;
          }
          if ("#" === l.charAt(0)) {
            return parseInt("0x" + l.substr(1, 2), 16) + parseInt("0x" + l.substr(3, 2), 16) + parseInt("0x" + l.substr(5, 2), 16);
          }
          var y = l.split("(")[1].split(",");
          return qa(y[0]) + qa(y[1]) + qa(y[2]);
        }
        var c = z.defaultView;
        var p = c ? c.getComputedStyle(ha, null) : ha.currentStyle;
        c = (p && p.color || "").split(" ").join("");
        p = (p && p.backgroundColor || "").split(" ").join("");
        c && (pa = "#123456" !== c && "rgb(18,52,86)" !== c, Ka = e(c) < e(p, !0), la = e(c) > e(p, !0), M !== k() && (M = k(), aa(Oa, M, Sa)));
      };
      hb(function(e) {
        if (e) {
          return A(ha, "color", "#123456"), A(ha, "backgroundColor", "#123456"), Sa ? (Ba(), Oa = B) : Gb(Ba), Ba = B, !0;
        }
      });
    } else {
      Oa = k = B;
    }
  })();
  (function() {
    function k(q) {
      w(q);
      p && !q && Ia(p);
      w = D = I = J = Sa = pa = Ba = e = c = l = p = B;
    }
    function C(q) {
      z.fonts.load('1.6em "' + q + '"').then(function() {
        var y;
        (y = aa(D)) ? Z(k, y) : ka(!0);
      }, function() {
        Na !== B ? oa(Na) : ub(oa);
      });
    }
    function fa(q) {
      return z.hidden || z.msHidden || z.mozHidden || z.webkitHidden ? (la = new ab() - 0, !1) : q < new ab() - la;
    }
    function ka(q) {
      var y;
      q && (la = new ab() - 0);
      (y = aa(D)) ? k(y) : fa(Ka) ? Ba || ha ? k(0) : Na !== B ? oa(Na) : ub(oa) : Z(ka);
    }
    function aa(q) {
      var y = 0, N = -1, F = 0;
      if (!l) {
        var K = -1;
        var G;
        e = ta(Fa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, g);
        for (l = {}; G = m[++K];) {
          A(e, "fontFamily", G), l[G] = e.offsetWidth;
        }
      }
      for (5 > t ? e || (e = ta(Fa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, g)) : Fa.appendChild(e); K = m[++N];) {
        if (A(e, "fontFamily", '"' + q + '",' + K), e.offsetWidth !== l[K]) {
          y = 1;
          break;
        }
      }
      !t && y && Sa && (e.innerHTML = Sa, q = e.offsetWidth, e.innerHTML = pa, F = q === e.offsetWidth ? 1 : 0, e.innerHTML = g);
      Ia(e);
      5 > t && (e = B);
      return y + F;
    }
    function oa(q) {
      q ? (Ba = !0, sa(!0)) : k(0);
    }
    function sa(q) {
      var y;
      if (I) {
        for (y in q && (la = new ab() - 0), I) {
          aa(y) ? (c = ta(Fa, "div", {"aria-hidden":"true", className:J, id:J}), p = ta(jb, "link", {type:"text/css", rel:"stylesheet", href:I[y]}), Z(R, !0)) : fa(b) ? (delete I[y], Z(sa, !0)) : Z(sa);
          return;
        }
      }
      k(0);
    }
    function R(q) {
      q && (la = new ab() - 0);
      1 < c.offsetWidth ? (Ia(c), Ka = b, Z(ka, !0)) : fa(Ka) ? 528 > bb ? (Ia(c), Ka = b, Z(ka, !0)) : (Ia(c), k(0)) : Z(R);
    }
    wa.splice(0, 0, function() {
      if (Ja) {
        tb = 8 <= t || Aa || 9.5 <= O || kb || lb || 522 <= bb || 3 <= Va || Eb || Nb ? 3 : 7.2 <= O ? 2 : 6 <= O || U ? 1 : 0;
        if (!tb && !t && !Qa) {
          var q = ta(Fa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          tb = 6 <= q.offsetWidth ? 2 : 0;
          Ia(q);
        }
        return !0;
      }
    });
    ub = !1 === Na ? function(q) {
      Z(q, Na);
    } : function(q) {
      function y(K) {
        F = H(F);
        Na = K;
        N.onload = N.onerror = ea;
        Z(q, K);
      }
      if (Na !== B) {
        Z(q, Na);
      } else if (8 > t) {
        Z(q, !1);
      } else {
        var N = new Image(), F = Z(function() {
          F && y(!1);
        });
        N.onerror = function() {
          y(!1);
        };
        N.onload = function() {
          y(1 === N.width * N.height);
        };
        N.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > t && ia(function() {
      var q = ta(Fa, "div");
      zb(q, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      nb = 1 < q.offsetHeight;
      zb(q, "");
      Ia(q);
    });
    vb = function(q, y) {
      function N() {
        if (K || !G || F.complete) {
          var x = !!F.width;
          ob = ob || x;
          Z(q, x);
          F.onerror = F.onload = ea;
          F = q = B;
        } else {
          --G, Z(N);
        }
      }
      var F = new Image(), K, G = 99;
      F.onerror = function() {
        K = !0;
      };
      F.onload = function() {
        K = !0;
      };
      F.src = y;
      Z(N);
    };
    Ha = function(q, y, N, F, K, G, x) {
      w = q;
      D = y;
      I = N;
      J = F;
      Sa = K;
      pa = G;
      Ka = x || d;
      ca ? Z(k, 0) : !z.fonts || 603 > bb ? ka(!0) : C(D);
    };
    var ca = 525 > bb || 10 > O || U && !kb || 2.2 > f(21) || f(25) || 10 > f(3) || va(32) || va(30) || va(3), ha = 9 > t || 2 > Ga || 12 > O, d = 5E3, b = 100, g = "mmmmmmmmmmlli", m = ["sans-serif", "serif"], w, D, I, J, Sa, pa, Ka, la, Ba, e, c, p, l;
  })();
  var ra = String.fromCharCode, u = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ra(960), ")", "(", ra(234), ra(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", ra(9824), "\u2190", ra(9829), ra(9830), ra(9827), ra(956), "\u03a9", "\u2193", "\u2192", "%", ra(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", ra(9619)];
  a = (9 === t || U && 0 <= v.conpare(E, "1.8.1") || lb) && !Ab;
  var X = [], P, ba, Ma = 7.2 > O ? function() {
    P = !P;
    for (var k = -1, C; C = X[++k];) {
      -1 !== C.className.indexOf("pbAlp") ? A(C, "display", P ? "" : "none") : (n(C, P ? "pbChrCS" : "pbChr00"), L(C, P ? "pbChr00" : "pbChrCS"));
    }
  } : a ? function() {
    P = !P;
    for (var k = -1, C; C = X[++k];) {
      A(C, "opacity", P ? 1 : 0);
    }
  } : B;
  var Ob = Ta.startBlinkingIfCursor = function(k) {
    Ma ? r(k, "pbChrCS") && (ba || !O && !M || (ba = setInterval(Ma, 400)), -1 === X.indexOf(k) && X.push(k)) : X = B;
  };
  Ta.stopBlinkingIfCursor = function(k) {
    Ma && (k = X.indexOf(k), 0 <= k && (X.splice(k, 1), !X.length && ba && (clearInterval(ba), ba = 0)));
  };
  a && ya(function(k) {
    k ? ba || (ba = setInterval(Ma, 400)) : ba && (clearInterval(ba), ba = 0);
  });
  Ma && ja(function() {
    ba && clearInterval(ba);
  });
  Ab || ya(function(k) {
    k ? (yb(T, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (na || 9 === t || 5.5 <= t && 9 > t && nb) && n(T, "jsCanRotate")) : (rb(T, "forced-colors"), L(T, "jsCanRotate"));
  });
  (function() {
    function k(c) {
      (J = c) ? aa() : ob ? ka(!0) : ob !== B ? aa() : vb(ka, Sa);
    }
    function C() {
      C = B;
      Ha(k, "PB-100", {"PB-100_canTTF":Za + "pbFont/ttf.css", "PB-100_canWOFF":Za + "pbFont/woff.css", "PB-100_canEOT":Za + "pbFont/eot.css", "PB-100_canSVG":Za + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5E3);
    }
    function fa(c) {
      this.focus();
      c.preventDefault();
      c.stopPropagation();
    }
    function ka(c) {
      c && n(Fa, "pbList-noWebFont");
      aa();
    }
    function aa() {
      for (k = Ha = B; I.length;) {
        oa(I.shift(), I.shift());
      }
    }
    function oa(c, p) {
      function l(G) {
        G = db(G);
        for (var x = -1, Y; Y = G[++x];) {
          switch(Y.nodeType) {
            case 1:
              l(Y);
              break;
            case 3:
              Y.data && y(Y.data) && N.push(Y);
          }
        }
      }
      function q(G) {
        var x = G.children, Y = 0, $a = x.length;
        if ($a) {
          for (; Y < $a; ++Y) {
            q(x[Y]);
          }
        } else {
          (x = G.innerText) && y(x) && N.push(G);
        }
      }
      function y(G) {
        return G.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var N = [], F;
      if (k) {
        -1 === I.indexOf(c) && (I.push(c, p), pa && C && C());
      } else {
        var K = I.indexOf(c);
        0 <= K && I.splice(K, 2);
        for (5 > t ? q(c) : l(c); F = N.shift();) {
          K = 5 > t ? F.innerText : F.data, 2 !== J && (K = K.split(b).join(ha)), p ? 5 > t ? F.innerText = K : F.data = K : sa(K.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(d).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(ca).split("&amp;").join("&"), F);
        }
      }
    }
    function sa(c, p) {
      function l(ma, S) {
        for (var Ca = ""; S;) {
          S & 1 && (Ca += ma), S >>= 1, ma += ma;
        }
        return Ca;
      }
      function q(ma, S, Ca) {
        for (var Bb, Rb = -1, Pb, Qb; Bb = S[++Rb];) {
          for (; 0 <= (Pb = ma.indexOf(Bb));) {
            Qb = Bb.length, ma = ma.substr(0, Pb) + l(Ca, Qb) + ma.substr(Pb + Qb);
          }
        }
        return ma;
      }
      function y(ma) {
        var S = qa(ma), Ca = "" + S;
        return 0 < S && S === S | 0 && (S = ma.indexOf(Ca) + Ca.length, S <= ma.length) ? S : 0;
      }
      var N = " area line str cmd fnc syb".split(" "), F = 5 > t || 1 === p.nodeType, K = [], G = "", x, Y = -1, $a, sb, La;
      if (F) {
        if (Ba) {
          var Mb = p.style.visibility;
          A(p, "visibility", "hidden");
        }
        p.innerHTML = "";
      }
      if (e) {
        var Cb = p;
        p = z.createDocumentFragment();
      }
      if (function(ma) {
        var S = ma.indexOf("P");
        if (-1 === S) {
          return !1;
        }
        S = qa(ma.charAt(S + 1));
        return 0 <= S && 9 >= S;
      }(c)) {
        G = l("+", c.length);
      } else {
        0 <= (x = y(c)) && (G = l("|", x), Y = x, --Y);
        for (; x = c.charAt(++Y);) {
          x === ca || $a ? (G += "~", x === ca && ($a = !$a)) : G += x;
        }
        G = q(G, D, "^");
        G = q(G, m, "{");
        G = q(G, w, "}");
      }
      Y = 0;
      for ($a = c.length; Y < $a; ++Y) {
        x = c.charAt(Y);
        var V = x === g;
        var da = " " === x;
        x = V ? " " : x;
        var W = G.charAt(Y);
        var Pa = (sb = Da) && V;
        var Da = "|" === W;
        W = N["+|~{}^".indexOf(W) + 1];
        "\n" !== x ? (J || !ob ? (2 === J && c.substr(Y, 2) === b && (x = b, ++Y), W = da && "str" === W ? "pbList-strsp" : V ? "" : !da && W ? "pbList-" + W : "") : (V = u.indexOf(x), V = -1 === V ? "" : u.indexOf(x).toString(16).toUpperCase(), V = (V = 1 === V.length ? "0" + V : V) ? "pbChr" + V : "", W = da && "str" === W ? "pbList-strsp" : da || !V ? "" : W ? (V ? V + " " : "") + "pbList-" + W : V), V = B, Pa ? (x = 6 <= t && 8 > t ? " " : g, W = "") : Da && (U && !kb || 9.5 > O) ? (Da && !sb && 
        (La = 4 - (qa(c.substr(Y)) + "").length), 7.5 > O ? V = la ? "position:relative;top:-4px;left:" + 12 * La + "px" : {position:"relative", top:"-4px", left:12 * La + "px"} : V = la ? "position:relative;left:" + 12 * La + "px" : {position:"relative", left:12 * La + "px"}) : da && 7.5 > O && (W = "pbList-strsp"), la ? K.push("<font" + (W ? ' class="' + W + '"' : "") + (V ? ' style="' + V + '"' : "") + ">" + x + "</font>") : F || e ? ta(p, "font", {"class":W, style:V}, x) : gb(p, "font", {"class":W, 
        style:V}, x)) : (sb = Da = !1, la ? K.push(x) : F || e ? Xa(p, x) : Ra(p, x));
      }
      if (F) {
        la ? p.innerHTML = K.join("") : e && Cb.appendChild(p), Ba && A(p, "visibility", Mb);
      } else {
        if (la) {
          N = z.createElement("font");
          for (N.innerHTML = K.join(""); K = N.firstChild;) {
            p.parentNode.insertBefore(K, p);
          }
          Ia(p);
        } else {
          e ? Cb.parentNode.replaceChild(p, Cb) : Ia(p);
        }
      }
    }
    hb(function(c) {
      if (c) {
        c = Jb("pbChrCS");
        for (var p = 0, l = c.length; p < l; ++p) {
          Ob(c[p]);
        }
        return !0;
      }
    });
    var R = [];
    hb(function(c) {
      function p(da) {
        var W = qb(da, "pbTip");
        if (W) {
          var Pa = W.charAt(0);
          var Da = "_" === Pa;
          W = (Da ? W.charAt(2) : Pa).toUpperCase().charCodeAt(0) - 65;
          K ? ta(da, "div", {style:{left:7 * W + 3 + "px"}}) : (Pa = qb(da, "title"), rb(da, "pbTip"), rb(da, "title"), Da = ta(da, "div", {className:"pbTip" + (Da ? "Btm" : ""), style:{width:Pa.length + q + "em", left:7 * W - 5 + "px"}}, Pa), ta(Da, "div"));
        }
        F && 0 <= da.className.indexOf("pbColor") && ta(da, "u");
      }
      function l(da, W) {
        var Pa = qb(da, "pbGhst"), Da = da.className, ma = Da.split("pbCsr")[1] || "", S = Da.split("pbAlp")[1] || "";
        if ("CS" === Pa) {
          var Ca = "_";
        } else {
          Ca = Pa, 3 === Ca.length && (Ca = Ca.substr(0, 2)), Ca = u[parseInt(Ca, 16)] || "~";
        }
        var Bb;
        ma = ma.split(" ")[0];
        if (S = qa(S.split(" ")[0])) {
          y && (Da = Da.split("pbChr")[1].split(" ")[0], A(da, "backgroundPosition", Db(Da, 2, Mb) + "px " + -24 * (10 - S) + "px")), !W && N && gb(da, "a").appendChild(da);
        }
        Pa && (S = 10 - S, y && (Bb = {backgroundPosition:Db(Pa, 2, Mb) + "px " + -24 * (10 - S) + "px"}), rb(da, "pbGhst"), Y = gb(da, "b", {className:"pbChr" + Pa + " pbCsr" + ma + " pbAlp" + S, style:Bb}, Ca), Ob(Y));
        Ob(da);
      }
      if (c) {
        var q = 6 > t ? 2 : 0, y = 7.2 > O || .9 > U || Qa, N = 1.1 === U, F = 1.4 > U;
        c = wb("SAMP");
        var K = 8 === t, G = tb, x, Y, $a, sb, La;
        nb && n(Fa, "pbLCD-AX");
        if (c.length) {
          for ($a = -1; x = c[++$a];) {
            if (r(pb(x), "pbLCD")) {
              var Mb = r(x, "PB-120") || r(x, "FX-795P");
              var Cb = xb(x);
              for (x = Cb.length; La = Cb[--x];) {
                switch(Kb(La)) {
                  case "A":
                    (2 > G || K) && p(La);
                    if (2 > G) {
                      var V = xb(La);
                      for (sb = V.length; sb;) {
                        l(V[--sb], !0);
                      }
                    }
                    Eb ? yb(La, "href", "javascript:void(0)") : (Ya(La, "click", fa), R.push(La));
                    break;
                  case "B":
                    2 > G && l(La, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    ja(function() {
      for (var c; c = R.shift();) {
        xa(c, "click", fa);
      }
    });
    6 === t && (new Ea("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(z);
    var ca = u[7], ha = u[30], d = u[113], b = ra(8337) + ra(8331), g = ra(160);
    ra(8194);
    var m = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), w = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), D = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + ha + u[31]).split(""), I = [], J, Sa, pa;
    if (.9 <= U && 0 >= v.conpare(E, "0.9.1")) {
      n(T, "pbLCD-gecko09To091");
      var Ka = !0;
    }
    hb(function(c) {
      if (c) {
        Sa = Za + "pbFont/x3mask" + (Ka ? ".gecko0.9.1.gif" : ".png");
        c = wb("*");
        for (var p = -1, l; l = c[++p];) {
          r(l, "pbList") ? oa(l) : r(l, "pbFont") && oa(l, !0);
        }
        I.length && C();
        return !0;
      }
    });
    var la = !1, Ba = 8 > O, e = !la && !Ba && !(6 > t) && z.createDocumentFragment && !!Fa.replaceChild;
    Ta.prettify = oa;
  })();
  a = z.scripts || wb("script");
  var Za = a[a.length - 1].src.split("/");
  --Za.length;
  (Za = Za.join("/")) && (Za += "/");
  6.1 > Va && Ya(Q, "scroll", Wa);
  ja(ib);
  6.1 > Va && Ya(Q, "scroll", Ib);
  ja(Hb);
  10 > t && (11 !== za || 5 !== t) || (9 > O || 1 > U || !Qa && !Q.addEventListener ? z.write('<link href="' + Za + fb + '" rel="stylesheet"' + (8 > O ? "" : ' media="screen,handheld,projection,print"') + ">") : ia(function() {
    ta(jb, "link", {href:Za + "" + fb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

