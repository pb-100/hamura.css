/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var n;
ua = [];
ua.conpare = function(Ya, A) {
  var y = 0, ia, J, Sa = (Ya + "").split("."), gb = (A + "").split("."), Na = Sa.length;
  for (ia = gb.length; "0" === Sa[Na - 1];) {
    --Na;
  }
  for (; "0" === gb[ia - 1];) {
    --ia;
  }
  for (J = Na < ia ? Na : ia; y < J; ++y) {
    var ya = Sa[y] - 0, k = gb[y] - 0;
    if (ya !== k) {
      return ya > k ? 1 : -1;
    }
  }
  return Na > ia ? 1 : Na === ia ? 0 : -1;
};
(function(Ya, A, y, ia, J, Sa, gb, Na) {
  function ya(F, na) {
    var ha = Sa(F.split(na)[1]);
    return 0 <= ha ? ha : 0;
  }
  function k(F, na) {
    return 0 <= F.indexOf(na);
  }
  function Nb(F) {
    return k(F, "Linux armv") || k(F, "Linux aarch") || k(F, "Linux i686") || k(F, "Linux x86_64");
  }
  function hb(F, na) {
    for (var ha in na) {
      if (ha === F) {
        return !0;
      }
    }
  }
  function m(F, na) {
    var ha = "", Oa = -1, za;
    if (F = F.split(na)[1]) {
      for (; za = F.charCodeAt(++Oa);) {
        if (48 <= za && 57 >= za || 46 === za) {
          ha += F.charAt(Oa);
        } else {
          break;
        }
      }
      for (Oa = ha.length; Oa;) {
        if (46 === ha.charCodeAt(--Oa)) {
          ha = ha.substr(0, Oa);
        } else {
          break;
        }
      }
    }
    return ha;
  }
  function K(F) {
    for (var na = arguments, ha = 1, Oa = na[0], za; ha < na.length; ++ha) {
      0 > va(Oa, za = na[ha]) && (Oa = za);
    }
    return Oa;
  }
  function V(F) {
    return F === F + "" ? F : F === F - 0 ? "" + F : F.min && F.max ? F.min + "~" + F.max : F.min ? F.min + "~" : "~" + F.max;
  }
  var va = Ya.conpare, c = ia.userAgent, ja = ia.appVersion, Pa = Sa(ja) || 0, L = ia.platform, Ka = y.documentElement, ub = Ka && Ka.style, ka = y.documentMode, q = J.width, Ta = J.height;
  J = A.HTMLAudioElement;
  var ib = A.performance, B = A.Int8Array, S = A.ontouchstart !== Na, Qa = m(ja, "Version/") || m(c, "Version/"), bb = A.operamini, oa = !bb && A.opera, Ba = oa && ("function" === typeof oa.version ? oa.version() : K(m(c, "Opera "), Qa, Pa)), Gb = A.opr, ra = !oa && (y.all || ka);
  ka = ra && (ka ? ka : A.XMLHttpRequest ? y.getElementsByTagName ? 7 : 4 : y.compatMode ? 6 : (0).toFixed ? 5.5 : A.attachEvent ? 5 : 4);
  Ka = !ra && Ka.msContentZoomFactor;
  var vb = !Ka && (A.chrome || A.chromium), Fa = !ra && function() {
    for (var F in ub) {
      if (0 === F.indexOf("Moz")) {
        return !0;
      }
    }
  }(), wb = k(c, "UCWEB"), Wb = wb && m(c, " U2/"), Ob = wb && m(c, "; wds "), Hb = m(c.split("_").join("."), "; iPh OS "), la = m(c, "; Adr "), qb = k(ja, "YJApp-ANDROID"), Ga = k(L, "Android") || Fa && k(ja, "Android") || qb;
  la = m(L, "Android ") || m(ja, "Android ") || m(c, "Android ") || la;
  var xb = k(L, "Linux"), yb = "MacIntel" === L && ia.standalone !== Na, jb = Fa && m(c, "Goanna/"), Ha = !jb && Fa && (m(c, "rv:") || m(c.substr(c.indexOf(") Gecko/") - 11), "; ")), Za = m(c, "Firefox/");
  m(c, "Opera/");
  var Xb = A.FNRBrowser, La = ya(c, "AppleWebKit/"), kb = m(c, "Chrome/"), $a = m(ja, "Iron/"), zb = m(c, "OPR/"), Pb = m(ja, "KHTML/"), Ib = m(c.toLowerCase(), "iris");
  m(c, "FxiOS/");
  m(c, "CriOS/");
  m(c, "EdgiOS/");
  var Qb = m(c, "Silk/"), lb = ya(c, "SamsungBrowser/"), Y = !lb && function() {
    for (var F = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    na, ha = F.length; na = F[--ha];) {
      if (k(c, na)) {
        return 2 > Sa(Qa) ? Qa : 0.9;
      }
    }
    F = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ha = F.length; na = F[--ha];) {
      if (k(c, na)) {
        return Qa;
      }
    }
  }(), Ab = vb && 534.3 >= La, mb = Nb(L), Ua = mb && !k(c, L) && Nb(c);
  S = S && (La || Fa) && Ua || !la && qb;
  qb = !!A.ReactNativeWebView;
  mb = mb && function() {
    for (var F in A) {
      if (0 === F.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Va = (Ua = A.puffinDevice) && Ua.clientInfo, rb = (Ua = Va && "iOS" === Va.os && Va.osVersion) && Va.model;
  Va = !ka && y.registerElement;
  var Rb = !ka && y.execCommand, Jb = A.webkitCancelAnimationFrame, Sb = xb && Va && "11.0.696.34" === kb, cb = A._firefoxTV_playbackStateObserverJava, Kb = ya(c, "diordnA ");
  if ("Nitro" === L) {
    var u = 1, p = 8.5, P = 9, T = p;
  } else if ("Nintendo DSi" === L) {
    u = 2, p = Ba, P = 9, T = p;
  } else if ("New Nintendo 3DS" === L || k(c, "iPhone OS 6_0") && 320 === q && 240 === Ta) {
    u = 4, p = m(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === L) {
    u = 3, p = Qa, La = 535;
  } else if (!L && k(ja, "Nintendo Switch;")) {
    u = 7, p = m(ja, "NintendoBrowser/");
  } else if (A.wiiu) {
    u = 6, p = m(ja, "NintendoBrowser/"), P = 16, T = m(ja, "AppleWebKit/") || (Jb ? 536 : 534), p || (p = Jb ? 4 : 2, k(ja, "Macintosh;") || k(ja, "Windows NT") && k(ja, "Touch"));
  } else if (oa && oa.wiiremote) {
    u = 5, p = m(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === L) {
    u = 9, p = m(ja, L + " ");
  } else if ("PSP" === L) {
    u = 8;
    p = m(c, "(PlayStation Portable); ");
    var Bb = 3.2;
  } else if ("PlayStation 5" === L) {
    u = 12, p = m(ja, L + "/");
  } else if ("PlayStation 4" === L) {
    u = 11, p = m(ja, L + "/");
  } else if ("PlayStation 3" === L) {
    u = 10, p = m(c, "PLAYSTATION 3; ") || m(c, "PLAYSTATION 3 "), 0 > va(p, "4.10") && (P = 27, T = p);
  } else if (k(c, "Xbox One")) {
    u = 14, p = 1;
  } else if (k(c, "Xbox")) {
    u = 13, p = 1;
  } else if (2 === Pa && k(c, "Sony/COM2/")) {
    u = 17;
    p = 2;
    Bb = 3.4;
    var wa = !0;
  } else if (0 === L.indexOf("iP") || Hb || Ua || yb) {
    if (Ua) {
      switch(p = Ua, rb.substr(0, 4)) {
        case "iPho":
          var Da = 0;
          m(rb, Da);
          var Ia = !0;
          break;
        case "iPad":
          Da = 1;
          m(rb, Da);
          var Ea = !0;
          break;
        case "iPod":
          Da = 2;
          m(rb, Da);
          var db = !0;
      }
    } else {
      Hb ? p = Hb : (p = m(ja.split("_").join("."), "OS "), hb("isSecureContext", A), hb("enableWebGL", A), hb("sameOrigin", A));
      if (!p || Xb) {
        p = A.PointerEvent ? 13 : A.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : A.WebAssembly ? 11.2 : A.HTMLMeterElement ? 10.3 : A.Proxy ? 10.2 : A.HTMLPictureElement ? 9.3 : gb.isNaN ? 9.2 : A.SharedWorker ? ib && ib.now ? 8 : 8.4 : Rb ? 7.1 : A.webkitURL ? 6.1 : A.Worker ? 5.1 : B ? 4.3 : J ? 4.1 : 3.2;
      }
      var Ja = q === 1.5 * Ta || 1.5 * q === Ta;
      0 === L.indexOf("iPhone") ? (Da = 0, Ia = !0) : 0 === L.indexOf("iPad") || yb ? (Da = 1, Ea = !0) : 0 === L.indexOf("iPod") && (Da = 2, db = !0);
    }
    P = !Ua && (ia.standalone || (Ea || 12 > p) && hb("webkitFullscreenEnabled", y) || 11 <= p && 13 > p && ia.mediaDevices) ? 17 : 18;
    u = 24;
    T = p;
  } else if (k(c, "Kobo")) {
    u = 18, P = 22, T = 2.2, Ga = !0;
  } else if (k(c, "EBRD")) {
    u = 19, P = 22, T = 2.2;
  } else if (y = m(c, "CrOS x86_64 ") || m(c, "CrOS aarch64 ") || m(c, "CrOS i686 ") || m(c, "CrOS armv7l ")) {
    u = 29, p = y;
  } else if (A.onmoztimechange !== Na) {
    u = 30, p = 18.1 > Ha ? "1.0.1" : 19 > Ha ? 1.1 : 27 > Ha ? 1.2 : 29 > Ha ? 1.3 : 31 > Ha ? 1.4 : 33 > Ha ? 2 : 35 > Ha ? 2.1 : 38 > Ha ? 2.2 : 45 > Ha ? 2.5 : 2.6, k(c, "Mobile") ? Ia = !0 : k(c, "Tablet") ? Ea = !0 : k(c, "TV");
  } else if (A.palmGetResource) {
    u = 32, p = m(c, "webOS/") || m(c, "WEBOS") || m(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (Ia = !0);
  } else if (y = m(c, "Tizen ")) {
    u = 33, p = y, P = 25, T = lb, Ia = !0;
  } else if (y = m(c, "Windows Phone ") || m(ja, "Windows Phone OS ") || Ob) {
    u = 23, p = y, Ia = !0;
  } else if (Ka && "ARM" === L) {
    u = 23, p = 10, Ia = !0;
  } else if (ra && k(ja, "ZuneWP")) {
    u = 23, p = 11 === ka ? 8.1 : 10 === ka ? 8 : 9 === ka ? 7.5 : 7 === ka ? 7 : "?", Ia = !0;
  } else if (k(c, "FOMA;")) {
    u = 16, Ia = !0;
  } else if (k(c, "SoftBank;")) {
    u = 16, Ia = !0;
  } else if (k(c, "KFMUWI")) {
    var Ma = !0;
    p = 6.3;
    var pa = Ea = !0;
  } else if (k(c, "KFKAWI")) {
    Ma = !0, p = 6, pa = Ea = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    Ma = !0, p = 5, pa = Ea = !0;
  } else if (k(c, "KFGIWI")) {
    Ma = !0, p = 5, pa = Ea = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    Ma = !0, p = 5 <= Sa(la) ? 5 : 4, pa = Ea = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    Ma = !0, p = 3, pa = Ea = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    Ma = !0, p = 2, pa = Ea = !0;
  } else if (k(c, "Kindle Fire")) {
    Ma = !0, p = 1, pa = Ea = !0;
  } else if (y = m(c, "Kindle/")) {
    u = 20, p = y, P = 22, T = 2.2;
  } else if (cb) {
    Ma = !0, p = la || Kb, pa = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    Ma = !0, p = la, pa = !0;
  } else if (k(c, "MeeGo")) {
    u = 34;
  } else if (k(c, "Maemo")) {
    u = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Ib) {
    u = 22, wa = !0;
  } else if ("WinCE" === L) {
    u = 21, wa = !0;
  } else if (0 === L.indexOf("Win")) {
    u = "Win16" === L ? 37 : "Win32" === L ? 38 : "Win64" === L ? 39 : 0, p = m(c, "Windows NT ") || m(c, "Windows ");
  } else if (0 === L.indexOf("Mac")) {
    u = "Mac68K" === L ? 41 : "MacPowerPC" === L || "MacPPC" === L ? 40 : "MacIntel" === L ? 42 : 0;
    if (y = m(c.split("_").join("."), "Mac OS X ")) {
      p = y;
    }
    var nb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    u = 36, p = Qa, Ia = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    u = 44;
  } else if (k(c, "FreeBSD")) {
    u = 45;
  } else if (k(c, "OpenBSD")) {
    u = 46;
  } else if (k(c, "NetBSD")) {
    u = 47;
  } else if (Ga && Fa) {
    k(c, "Android 4.4;") ? Ja = {min:2.3} : 4 <= Sa(la) ? Ja = la : Ja = {min:2.2}, p = Ja;
  } else if (Ga && oa) {
    la ? Ja = la : Ja = {min:1.6}, p = Ja, k(c, "Tablet") ? Ea = !0 : Ia = !0;
  } else if (la) {
    p = la, Ga = !0;
  } else if (xb && S || qb || mb) {
    var Cb = !0;
    lb ? Ja = {min:4.4} : vb && !Ab || Gb || zb ? Ja = {min:4} : (Ja = la = ub.touchAction !== Na ? {min:5} : Va ? 4.4 : B ? ia.connection ? A.searchBoxJavaBridge_ || vb ? gb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= La ? 3 : 533 <= La ? J ? 2.3 : 2.2 : 530 <= La ? 2 : 1.5, Y && (P = 25, T = Y));
    p = Ja;
    Ga = !0;
  } else {
    Sb ? (p = {min:5}, Cb = Ga = !0) : xb && (k(c, "Ubuntu") ? u = 48 : (y = m(c, "Mint/")) ? (u = 49, p = y) : (y = m(c, "Fedora/")) ? (u = 50, p = y) : u = k(c, "Gentoo") ? 51 : 52);
  }
  Ma || Ga && Cb && Qb ? u = 28 : Ga && (u = u || 27);
  P || (pa = pa || Ga, oa ? (P = pa || wa || Ia || Ea ? 9 : 8, T = Ba) : ra ? (Ja = ya(ja, "Trident/") + 4, P = wa || Ia || Ea || db ? 3 : nb && 5 <= ka ? 7 : 2, T = ka) : Ka ? (P = 23 === u ? 6 : 5, T = m(ja, "Edge/")) : jb ? (P = 13, T = jb) : Fa ? (P = pa ? 12 : 11, T = Ha || Za) : lb ? (P = 25, T = lb) : (y = Bb || m(c, "NetFront/")) ? (P = 19, T = y) : (y = m(c, "iCab")) ? (P = 20, T = y) : (y = K(m(c, "Opera Mini/"), m(c, "Opera Mobi/")) || bb && Qa) ? (P = 10, T = y, u || (k(c, "iPhone") ? 
  Da = 0 : k(c, "iPad") ? Da = 1 : k(c, "iPod") && (Da = 2), Da && (u = 24))) : wb ? (P = 26, T = Wb) : Pb ? (P = 15, T = Pa) : Ga && Ab ? (P = 22, T = la) : vb || Gb || zb ? (P = pa ? 23 : 21, T = kb || $a) : Ga && Va ? (P = 24, T = 5 > Sa(la) ? la : kb) : Ga && (Qa || Cb) ? (P = 22, T = la) : kb ? (P = pa ? 23 : 21, T = kb) : La && (P = 16, T = La));
  u && (Ya[2] = u, p && (Ya[3] = V(p)));
  P && (Ya[0] = P, T && (Ya[1] = V(T)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var sb;
(function(Ya, A, y, ia, J, Sa, gb, Na, ya, k, Nb, hb, m, K) {
  function V(h) {
    if (A[0] === h) {
      return ka === ka + "" ? ya(ka) : ka;
    }
  }
  function va(h) {
    var t = A[3];
    if (A[2] === h) {
      return t === t + "" ? ya(t) : t;
    }
  }
  function c(h) {
    var t = h.split("-"), Z = t.length;
    if (2 > Z) {
      return h;
    }
    for (; 1 < Z;) {
      h = t[--Z], t[Z] = h.charAt(0).toUpperCase() + h.substr(1);
    }
    return t.join("");
  }
  function ja(h, t, Z) {
    h + "" === h && ("a" === h.charAt(2) && (Z = !0, h = h.substr(0, 2)), h = "CS" === h ? 7.2 > B ? 117 : .9 > S || 9 > q || 9 > B || Ta ? 1 : 132 : parseInt(h, 16));
    Z && (50 === h && (h = 128), 102 < h && 108 > h && (h += 24));
    return (h - 1) * -(6 * (t || 2));
  }
  var Pa = J.body, L = Pa.style, Ka, ub, ka = A[1], q = V(2) || V(3), Ta = V(7), ib = V(5) || V(6), B = V(8) || V(9), S = V(11) || V(12), Qa = S && 0 <= A.conpare(ka, "1.9.1"), bb = V(13), oa = V(16), Ba = V(17) || V(18), Gb = V(10) || V(26), ra = V(21) || V(23), vb = V(24), Fa = V(22), wb = V(25), Wb = ra || vb || Fa || wb, Ob = ra && ya(Sa.userAgent.split("Edg/")[1]), Hb = ya(Sa.appVersion.split("Trident/")[1]) + 4, la = va(37) || va(38) || va(39), qb = va(40) || va(41) || va(42) || va(43), Ga = 
  .9 > S, xb = (Ta ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 7.2 > B ? "opr70" : 8 > B ? "opr72" : 9.5 > B ? "opr" + (B | 0) : S && !Qa ? 1.4 <= S ? "gck19" : 1.3 <= S ? "gck13" : 1 <= S ? "gck12" : Ga ? .8 <= S ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9);
  var yb, jb, Ha, Za = 8 > q || 7.2 > B ? !1 : K, Xb = L.transform !== K ? "transform" : L["-o-transform"] !== K ? "-o-transform" : L["-ms-transform"] !== K ? "-ms-transform" : L.MozTransform !== K ? "-moz-transform" : L["-webkit-transform"] !== K ? "-webkit-transform" : "", La = [], kb = [], $a = [], zb, Pb, Ib, Qb, lb = 525 > oa || 3.1 > Ba || 2.2 > Fa || 10 > B || S && !Qa || V(26) || 10 > V(3) || va(34) || va(32) || va(3), Y, Ab, mb, Ua = [], Va = [], rb, Rb, Jb, Sb, cb = Na.now || function() {
    return +new Na();
  };
  (function() {
    function h() {
      for (var a, b = 0, d = cb(); b < z.length;) {
        d < z[0].t ? ++b : (a = z.splice(b, 1)[0], a.f(a.p));
      }
      U = z.length ? k(h, G) : 0;
    }
    function t() {
      for (var a, b = 0; b < aa.length; ++b) {
        a = aa[b], a.f();
      }
    }
    function Z() {
      fa && (fa = m(fa));
    }
    function sa() {
      U && (U = Nb(U));
    }
    n = function(a) {
      Ua.push(a);
    };
    sb = function(a) {
      Va.push(a);
    };
    mb = function(a) {
      aa.length || (fa = hb(t, ta));
      aa.push({f:a, l:++Ca});
      return Ca;
    };
    rb = function() {
      fa && (Z(), fa = hb(t, ta));
    };
    Rb = Z;
    var aa = [], ta = 500, Ca = 0, fa;
    if (5 > q || Ta) {
      y._wdb_onlooptimer = t, t = "_wdb_onlooptimer()";
    }
    Y = function(a, b, d) {
      z.length || (U = k(h, G));
      z.push({f:a, p:b, l:++X, t:cb() + (G < d ? d : G)});
      return X;
    };
    Ab = function(a) {
      for (var b = z.length, d; d = z[--b];) {
        if (d.l === a) {
          z.splice(b, 1);
          break;
        }
      }
      return 0;
    };
    Jb = function() {
      U && (sa(), U = k(h, G));
    };
    Sb = sa;
    var z = [], G = Ba | 0 ? 64 : 16, X = 0, U;
    n("[core] TIMER_INTERVAL:" + G);
    if (5 > q || Ta) {
      y._wdb_ontimer = h, h = "_wdb_ontimer()";
    }
  })();
  var Kb, u, p, P, T, Bb, wa, Da, Ia, Ea, db, Ja, Ma, pa, nb, Cb, F, na, ha, Oa, za, ec;
  (function() {
    function h(a, b, d) {
      var v = ["<", a], C = 1, H, qa;
      if (b) {
        for (H in b) {
          var ca = b[H];
          if (null != ca && "" !== ca) {
            if ("style" === H) {
              v[++C] = ' style="';
              for (qa in ca) {
                for (var r = ++C, D, da = [], ma = qa.split(""), f = ma.length; f;) {
                  D = ma[--f], "A" <= D && "Z" >= D && (D = "-" + D.toLowerCase()), da[f] = D;
                }
                v[r] = da.join("") + ":" + ca[qa] + ";";
              }
              v[++C] = '"';
            } else {
              "className" === H && (H = "class"), v[++C] = " " + H + '="' + ca + '"';
            }
          }
        }
      }
      v[++C] = ">";
      null != d && (G && "font" !== a ? v[++C] = "<font>" + t(d) + "</font>" : v[++C] = t(d));
      v[++C] = "</" + a + ">";
      return v.join("");
    }
    function t(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function Z(a) {
      var b = "*" === a;
      a = G ? b ? J.all : J.all.tags(a.toUpperCase()) : 6 > q && b ? J.all : J.getElementsByTagName(a);
      b = [];
      for (var d = 0, v = a.length; d < v; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function sa(a) {
      return G ? a.parentElement : a.parentNode;
    }
    function aa(a, b, d, v, C, H) {
      if (G) {
        var qa = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var ca = T(2 > a ? P(b) : b);
        ca = 2 > a ? ca.indexOf(b) + a : ca.length;
        b.insertAdjacentHTML(qa, h(d, v, C));
        b = T(b)[ca];
        null != C && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (X) {
        b = J.createElement(h(d, v));
      } else {
        b = H ? J.createElementNS("http://www.w3.org/2000/svg", d) : J.createElement(d);
        if (v) {
          for (qa in v) {
            if ((a = v[qa]) || 0 === a) {
              switch(qa) {
                case "class":
                case "className":
                  F(b, a);
                  break;
                case "style":
                  H = b.style;
                  for (ca in a) {
                    H[ca] = a[ca];
                  }
                  break;
                default:
                  pa(b, qa, a);
              }
            }
          }
          !B || "a" !== d && "A" !== d || !v.href || v["tag-index"] || v.tagIndex || pa(b, "tagIndex", "-0");
        }
        U || null != C && ta(b, C);
      }
      return b;
    }
    function ta(a, b) {
      if (G) {
        return aa(2, a, "font", K, b);
      }
      var d = J.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function Ca(a, b) {
      9 > q ? a.className = b : a.setAttribute("class", b);
    }
    function fa(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function z(a, b, d) {
      if (8 > B || 5.5 > q) {
        b = c(b);
      }
      a.style[b] = d;
    }
    var G = 5 > q;
    Ka = Z("html")[0];
    ub = Z("head")[0];
    Kb = function(a) {
      return y[a] || J[a] || J.getElementById(a);
    };
    u = Z;
    p = function(a) {
      var b = [], d = 0, v, C = -1;
      if (9 > q || !J.getElementsByClassName) {
        var H = 6 > q ? J.all : J.getElementsByTagName("*");
      } else {
        var qa = !0;
        H = J.getElementsByClassName(a);
      }
      for (v = H.length; d < v; ++d) {
        var ca = H[d];
        if (qa || (G || 1 === ca.nodeType) && fa(ca, a)) {
          b[++C] = ca;
        }
      }
      return b;
    };
    P = sa;
    T = function(a) {
      a = G ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    Bb = function(a) {
      var b = !(7.03 < B && 7.2 > B) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], v = a.length, C = -1, H; v;) {
        if (H = a[--v], b || 1 === H.nodeType) {
          G && "FONT" === H.tagName || (d[++C] = H);
        }
      }
      return d;
    };
    wa = function(a, b, d, v, C) {
      b = aa(2, a, b, d, v, C);
      G || (a.appendChild(b), U && null != v && ta(b, v));
      return b;
    };
    Da = function(a, b, d, v, C) {
      b = aa(0, a, b, d, v, C);
      G || (sa(a).insertBefore(b, a), U && null != v && ta(b, v));
      return b;
    };
    Ia = ta;
    Ea = function(a, b) {
      if (G) {
        return aa(0, a, "font", K, b);
      }
      var d = J.createTextNode("" + b);
      P(a).insertBefore(d, a);
      return d;
    };
    db = function(a) {
      if (P(a)) {
        if (G) {
          a.outerHTML = "";
        } else {
          return 5.5 > q && (a.style.filter = ""), P(a).removeChild(a), a;
        }
      } else {
        n("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    var X = 9 > q, U = X;
    Ja = function(a) {
      return a.tagName.toUpperCase();
    };
    Ma = function(a, b) {
      if (8 > B || 5.5 > q) {
        b = c(b);
      }
      var d = a.getAttribute(b);
      return B && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    pa = function(a, b, d) {
      if (B && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > B || 5.5 > q) {
          b = c(b);
        }
        a.setAttribute(b, d);
      }
    };
    nb = function(a, b) {
      if (B && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > B || 5.5 > q) {
          b = c(b);
        }
        a.removeAttribute(b);
      }
    };
    Cb = function(a, b) {
      if (B && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > B || 5.5 > q) {
        b = c(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    F = Ca;
    na = fa;
    ha = function(a, b) {
      var d;
      if (!fa(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        Ca(a, d + b);
      }
    };
    Oa = function(a, b) {
      if (fa(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        Ca(a, d.join(" "));
      }
    };
    za = z;
    ec = function(a, b) {
      var d, v = -1, C;
      if (5.5 > q) {
        if (d = 5.5 > q ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); C = d[++v];) {
            z(a, C.split(":")[0], "");
          }
        }
        if (b) {
          for (v = -1, d = b.split(";"); C = d[++v];) {
            var H = C.split(":")[0];
            z(a, H, C.substr(H.length + 1));
          }
        }
      } else if (7.1 > B) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); C = d[++v];) {
            C = C.split(":"), z(a, C[0], C[1]);
          }
        }
      } else {
        9 > B || 1 > S ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var Db, Yb, Eb, Lb, tb, Zb, Tb, xa, Ub;
  (function() {
    function h() {
      return r ? da ? 2 : D ? 3 : 1 : 0;
    }
    function t(f) {
      Yb(y, "load", t);
      t = K;
      sa(La, f, !0);
      La = K;
    }
    function Z(f, g) {
      tb(function() {
        var E = z(f);
        g(E);
        E.addListener(g);
        return !0;
      });
    }
    function sa(f, g, E) {
      for (var e = 0; e < f.length; ++e) {
        !0 === f[e](g) && (f.splice(e, 1), --e);
      }
      E && (f.length = 0);
    }
    function aa(f, g, E) {
      La || X.length || Y(ta);
      X.push(f, g, E);
    }
    function ta() {
      var f = X, g;
      for (X = []; g = f.shift();) {
        sa(g, f.shift(), f.shift());
      }
    }
    function Ca(f) {
      var g = f || event;
      f = a[g.type];
      var E = -1, e, I;
      5 > q ? g = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : q ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : d && (g.j = g.stopPropagation, g.stopPropagation = function() {
        I = !0;
      });
      for (; e = f[++E];) {
        e.i === this ? (this.g = e.h, q && (g.currentTarget = this), this.g(g), q ? (this.g = ia, this.g = K) : delete this.g) : 7.2 > B && this === J && e.i === y && (y.g = e.h, y.g(g), delete y.g);
      }
      if (q) {
        return g.preventDefault = g.stopPropagation = ia, g.preventDefault = g.stopPropagation = K, g.returnValue;
      }
      d && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (C = !0), I && !C && g.j(), g.j = g.stopPropagation = K);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function fa() {
      var f = 9 === G.offsetWidth;
      Tb !== f && (aa(kb, Tb = f), n("p_cssAvailability:" + Tb));
    }
    var z = y.matchMedia, G, X = [];
    La.push(function() {
      Z = K;
      G = wa(Pa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Eb(function() {
        X.length && Y(ta);
      });
    });
    Db = function(f, g, E, e) {
      if (v) {
        f.addEventListener(g, E, e ? U ? e : e.capture || !0 === e : !1);
      } else {
        var I = {i:f, h:E};
        e = a[g];
        var w = "on" + g, N, Aa;
        if (e) {
          for (N = e.length; Aa = e[--N];) {
            if (Aa.i === f && Aa.h === E) {
              return;
            }
          }
          a[g].push(I);
        } else {
          a[g] = e = [I], b || (g = f[w], "function" === typeof g && g !== Ca && e.unshift({i:f, h:g}));
        }
        b ? f.attachEvent(w, Ca) : f[w] = Ca;
      }
    };
    Yb = function(f, g, E, e) {
      if (v) {
        f.removeEventListener(g, E, e ? U ? e : e.capture || !0 === e : !1);
      } else {
        e = a[g];
        g = "on" + g;
        var I, w, N;
        if (e) {
          for (I = e.length; w = e[--I];) {
            w.i === f && (w.h === E ? e.splice(I, 1) : N = !0);
          }
          N || (b ? f.detachEvent(g, Ca) : q ? (f[g] = ia, f[g] = null) : delete f[g]);
        }
      }
    };
    var U = !q && !Ta && (new gb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), a = {}, b = !1, d = 525.13 > oa, v = !d && !Ta && y.addEventListener, C;
    d && Ka.addEventListener("click", function(f) {
      if (C) {
        return C = !1, f.preventDefault(), !1;
      }
    });
    Eb = function(f) {
      La ? La.push(f) : alert("Load event has already been dispatched!");
    };
    Lb = function(f) {
      H && H.push(f);
    };
    var H = [];
    if (419.3 >= oa) {
      var qa = function() {
        if (qa) {
          var f = J.readyState;
          "loaded" === f || "complete" === f ? (qa = K, t()) : Y(qa);
        }
      };
      Y(qa);
    } else {
      Db(y, "load", t), Ga && Y(function() {
        t && t();
      }, 999);
    }
    q || !Ga && 1.8 > S ? Db(y, "unload", function(f) {
      sa(H, f, !0);
    }) : H = K;
    tb = function(f) {
      kb.push(f);
    };
    Eb(function() {
      fa();
      mb(fa);
    });
    Zb = function(f) {
      $a && $a.push(f);
    };
    var ca = 60 > S || bb, r, D, da;
    if (89 <= S || 89 <= ra || la && 79 <= Ob || z && (z("(forced-colors:none)").matches || z("(forced-colors:active)").matches)) {
      Ub = !0, Z("(forced-colors:active)", function(f) {
        r = f.matches;
        xa = h();
        aa($a, xa);
        n("(forced-colors:active):" + xa);
      });
    } else if (10 <= q || ib || la && Ob) {
      Ub = !0, Z("(-ms-high-contrast:black-on-white)", function(f) {
        r = D = f.matches;
        xa !== h() && (xa = h(), aa($a, xa), n("(-ms-high-contrast:black-on-white):" + xa));
      }), Z("(-ms-high-contrast:white-on-black)", function(f) {
        r = da = f.matches;
        xa !== h() && (xa = h(), aa($a, xa), n("(-ms-high-contrast:white-on-black):" + xa));
      }), Z("(-ms-high-contrast:active)", function(f) {
        r = f.matches;
        xa !== h() && (xa = h(), aa($a, xa), n("(-ms-high-contrast:active):" + xa));
      });
    } else if (la && (q || S && 0 <= A.conpare(ka, "1.8.1") || bb)) {
      var ma = function() {
        function f(e, I) {
          if (I && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var w = e.split("(")[1].split(",");
          return ya(w[0]) + ya(w[1]) + ya(w[2]);
        }
        var g = J.defaultView;
        var E = g ? g.getComputedStyle(G, null) : G.currentStyle;
        g = (E && E.color || "").split(" ").join("");
        E = (E && E.backgroundColor || "").split(" ").join("");
        g && (r = "#123456" !== g && "rgb(18,52,86)" !== g, D = f(g) < f(E, !0), da = f(g) > f(E, !0), xa !== h() && (xa = h(), n("(forced-colors-fallback):" + xa), aa($a, xa, ca)));
      };
      tb(function(f) {
        if (f) {
          return za(G, "color", "#123456"), za(G, "backgroundColor", "#123456"), ca ? (ma(), $a = K) : mb(ma), ma = K, !0;
        }
      });
    } else {
      $a = h = K;
    }
  })();
  (function() {
    function h(l) {
      switch(l) {
        case 1:
          return qa;
        case 2:
          return !!ca;
        case 3:
          return !!r;
        case 4:
          return !!D;
        case 5:
          return ma;
        case 6:
          return da && !U;
      }
      return !1;
    }
    function t(l) {
      f(l);
      eb && !l && db(eb);
      f = g = E = e = I = w = ab = W = eb = Ra = K;
    }
    function Z(l) {
      var M = '1.6em "' + l + '"';
      n("[webFontTest] testByNativeFontLoaderAPI start.");
      J.fonts.load(M).then(function(x) {
        n("[webFontTest] fonts.check() : " + J.fonts.check(M, "i") + ", fonts.length : " + x.length);
        (x = Ca(g)) ? Y(t, x) : (n("[webFontTest] mesureWebFont() : false"), aa(!0));
      }, function(x) {
        n("[webFontTest] fonts.load() rejected! " + x);
        Za !== K ? fa(Za) : zb(fa);
      });
    }
    function sa(l) {
      return J.hidden || J.msHidden || J.mozHidden || J.webkitHidden ? (Aa = cb(), !1) : l < cb() - Aa;
    }
    function aa(l) {
      l && (n("[webFontTest] testWebFont start."), Aa = cb());
      (l = Ca(g, N)) ? (n("[webFontTest] testWebFont mesurement success : " + l), t(l)) : sa(N) ? (n("[webFontTest] testWebFont timeout!"), ab ? z() : X ? t(0) : Za !== K ? fa(Za) : zb(fa)) : Y(aa);
    }
    function ta() {
      return wa(Pa, 5 > q ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, v);
    }
    function Ca(l, M) {
      var x = 0, O = -1, Q = [];
      if (!Ra) {
        var ba = -1;
        var R;
        W = ta();
        for (Ra = []; R = H[++ba];) {
          za(W, "fontFamily", R), Ra[ba] = W.offsetWidth;
        }
        n("[webFontTest] default width " + Ra.join(", "));
      }
      for (5 > q ? W || (W = ta()) : P(W) || Pa.appendChild(W); ba = H[++O];) {
        za(W, "fontFamily", '"' + l + '",' + ba);
        var ea = W.offsetWidth;
        C ? Q[O] = ea : (Q[O] = ea, ea !== Ra[O] && (x = 1));
      }
      if (C && ea === Q[0] && ea === Q[1]) {
        for (n("[webFontTest] Hit... : width=" + ea), x = 1, O = -1; 0 <= (ea = Ra[++O]);) {
          if (ea === Q[0] && ea === Q[1] && ea === Q[2]) {
            n("[webFontTest] Failed! : font[" + O + "]=" + H[O]);
            x = 0;
            break;
          }
        }
      }
      !q && x && I && (W.textContent = I, ea = W.offsetWidth, W.textContent = w, x = ea === W.offsetWidth ? 2 : 1, W.textContent = v);
      W = db(W);
      M && (x || sa(M)) && n("[webFontTest] " + l + " " + Q.join(", "));
      return x;
    }
    function fa(l) {
      n("[webFontTest] onTestDataURIComplete : " + l);
      l ? (ab = !0, N = d, n("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), z()) : t(0);
    }
    function z() {
      if (E) {
        for (; E.length;) {
          var l = E.shift(), M = E.shift();
          if (h(l)) {
            n("[webFontTest] maybe can use! " + M);
            eb = Qb(M, G, e, eb);
            return;
          }
        }
      }
      t(0);
    }
    function G(l) {
      l ? aa(!0) : z();
    }
    kb.splice(0, 0, function() {
      if (Tb) {
        Ha = 8 <= q || ib || 9.5 <= B || Qa || bb || 522 <= oa || 3 <= Ba || Gb || Wb ? 3 : 7.2 <= B ? 2 : 6 <= B || S ? 1 : 0;
        if (!Ha && !q && !Ta) {
          var l = wa(Pa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ha = 6 <= l.offsetWidth ? 2 : 0;
          db(l);
        }
        n("p_cssGeneratedContentGrade:" + Ha);
        return !0;
      }
    });
    zb = !1 === Za ? function(l) {
      Y(l, !1);
    } : function(l) {
      function M(Q) {
        O && (O = Ab(O), Za = Q, x.onload = x.onerror = ia, Y(l, Q));
      }
      if (Za !== K) {
        n("[dataURITest] already done : " + Za), Y(l, Za);
      } else {
        n("[dataURITest] start!");
        var x = new Image(), O = Y(M, !1, 999);
        x.onerror = function() {
          n("[dataURITest] no DATA URI!");
          M(!1);
        };
        x.onload = function() {
          n("[dataURITest] DATA URI:" + (1 === x.width * x.height));
          M(1 === x.width * x.height);
        };
        x.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > q && Eb(function() {
      var l = wa(Pa, "div");
      ec(l, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      yb = 1 < l.offsetHeight;
      db(l);
    });
    Pb = function(l, M) {
      function x() {
        if (Q || !ba || O.complete) {
          n("[imageTest] timer -> img.complete. img.width=" + O.width);
          var R = !!O.width;
          jb = jb || R;
          Y(l, R);
          O.onerror = O.onload = ia;
          O = l = K;
        } else {
          --ba, Y(x);
        }
      }
      var O = new Image(), Q, ba = 99;
      n("[imageTest] start.");
      O.onerror = function() {
        n("[imageTest] error!");
        Q = !0;
      };
      O.onload = function() {
        n("[imageTest] onload.");
        Q = !0;
      };
      O.src = M;
      Y(x);
    };
    Ib = function(l, M, x, O, Q, ba, R) {
      f = l;
      g = M;
      E = x;
      e = O;
      I = Q;
      w = ba;
      N = R || b;
      g = a + g;
      n("[webFontTest] WEBFONT_DEBUG_MODE : 2");
      n("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!lb);
      V(10) ? Y(t, 1) : lb ? Y(t, 0) : !J.fonts || 603 > oa || 11 > Ba ? (n("[webFontTest] No native font loader."), aa(!0)) : (n("[webFontTest] Use Native font loader."), Z(g));
    };
    var X = 9 > q, U = 6 > ra || B || 530 > oa || 5 > Ba || va(10), a = "bad_" + cb() + "_", b = 5E3, d = 500, v = "mmmmmmmmmmlliiiiiiiii", C = 9 <= ra && 18 > ra || 3 > Fa || 7 > Ba || oa && 0 >= A.conpare(ka, "536.11"), H = ["monospace", "sans-serif", "serif"];
    lb || (C && ra && n("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + ra), C && Ba && n("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ba), C && oa && n("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + oa), C && Fa && n("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Fa));
    var qa = 14 <= ib || 36 <= ra || 39 <= S || 3 <= bb || 602 <= oa && qb && 0 <= A.conpare("10.12", qb) || 10 <= Ba, ca = 6 <= ra || S && 0 <= A.conpare(ka, "1.9.2") || bb || 533 <= oa || 5 <= Ba || 4.4 <= Fa || 11.5 <= B || ib || 9 <= V(2) || 10 <= V(3), r = 2 <= ra || Qa || bb || 525 <= oa || 4 <= Ba || 2.2 <= Fa || 10.1 <= B || ib || 9 <= V(2) || 10 <= V(3), D = r, da = 5.1 <= la && 5.2 >= la && 40 > ra || 6 <= la && 6.1 > la && 51 > ra || 37 > ra || 525 <= oa || 3.1 <= Ba || 3 <= Fa || 11.5 <= 
    B, ma = 4 <= V(2) || 10 <= V(3), f, g, E, e, I, w, N, Aa, ab, W, eb, Ra;
  })();
  (function() {
    Qb = function(z, G, X, U) {
      U = U || wa(ub, "link", {type:"text/css", rel:"stylesheet"});
      var a;
      if (fa) {
        (a = Kb(X)) ? nb(a, "id") : a = wa(Pa, "div", {"aria-hidden":"true", className:X});
        var b = a.offsetWidth;
        n("[CSS Loader] widthBeforeCSSLoaded = " + b);
        pa(a, "id", X);
      }
      Ca(U, z, G, a, b);
      return U;
    };
    var h = S && 0 > A.conpare(ka, "0.9.1"), t = 11 <= q || ib || 9 <= B && 9.5 > B, Z = 11 > q, sa = 7.2 <= B && 7.5 > B, aa = 9 > S && !h || 19 > ra || 4.3 > Fa || 2 > wb || 536 > oa || 6 > Ba || 7 <= B && 9 > B && !sa, ta = !h && !t && !Z && !sa && !aa, Ca = ta ? function(z, G, X) {
      n("[CSS Loader] onload + onerror");
      z.onload = o;
      z.onerror = function() {
        z.onload = z.onerror = null;
        Y(X, !1);
      };
      z.href = G;
      function o() {
        z.onload = z.onerror = null;
        Y(X, !0);
      }
      o = !1;
    } : t ? function(z, G, X, U, a) {
      n("[CSS Loader] onload + mesure");
      z.onload = o;
      z.href = G;
      function o() {
        Y(X, fa(U, a));
        z.onload = null;
        U = K;
      }
      o = !1;
    } : Z ? function(z, G, X, U, a) {
      n("[CSS Loader] onreadystatechange + onerror");
      z.onreadystatechange = o;
      z.href = G;
      function o() {
        "complete" === z.readyState && (Y(X, fa(U, a)), U = K, z.m = ia);
      }
      o = !1;
    } : aa || sa ? function(z, G, X, U, a) {
      function b() {
        v && (C = Ab(C), n("[CSS Loader] onComplete"), H = cb() + 999, Y(d, 0, 99), aa ? v.onerror = null : v.removeEventListener("load", b, !1), v = K);
      }
      function d() {
        fa(U, a) ? (U = K, Y(X, !0)) : cb() < H ? Y(d, 0, 99) : (U = K, Y(X, !1));
      }
      var v = new Image(), C = Y(b, 0, 5E3), H;
      aa ? (n("[CSS Loader] img.onerror + mesure"), v.onerror = b) : (n('[CSS Loader] img.addEventListener("load") + mesure'), v.addEventListener("load", b, !1));
      v.src = z.href = G;
    } : function(z, G, X) {
      n("[CSS Loader] UNSUPPORTED");
      Y(X, !1);
    }, fa = !ta && !h && function(z, G) {
      n("[CSS Loader] elmTest.offsetWidth = " + z.offsetWidth);
      return z.offsetWidth !== G;
    };
  })();
  var Vb = String.fromCharCode, fb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Vb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], $b = fb[7], kc = fb[113], fc = Vb(160);
  Vb(8194);
  var gc = fb[31], ac = fb[30], hc = fb[63], lc = fb[125], mc = fb[126], nc = Vb(59648), ic = (9 === q || S && 0 <= A.conpare(ka, "1.8.1") || bb) && !Ub, ob = [], pb, Xa, Mb = 7.2 > B ? function() {
    pb = !pb;
    for (var h = -1, t; t = ob[++h];) {
      -1 !== t.className.indexOf("pbAlp") ? za(t, "display", pb ? "" : "none") : (ha(t, pb ? "pbChrCS" : "pbChr00"), Oa(t, pb ? "pbChr00" : "pbChrCS"));
    }
  } : ic ? function() {
    pb = !pb;
    for (var h = -1, t; t = ob[++h];) {
      za(t, "opacity", pb ? 1 : 0);
    }
  } : K;
  var bc = Ya.startBlinkingIfCursor = function(h) {
    Mb ? na(h, "pbChrCS") && (Xa || !B && !xa || (Xa = hb(Mb, 400)), -1 === ob.indexOf(h) && ob.push(h)) : ob = K;
  };
  Ya.stopBlinkingIfCursor = function(h) {
    Mb && (h = ob.indexOf(h), 0 <= h && (ob.splice(h, 1), !ob.length && Xa && (m(Xa), Xa = 0)));
  };
  ic && Zb(function(h) {
    h ? Xa || (Xa = hb(Mb, 400)) : Xa && (m(Xa), Xa = 0);
  });
  Mb && Lb(function() {
    Xa && m(Xa);
  });
  Ub || Zb(function(h) {
    h ? (pa(Ka, "forced-colors", 2 === h ? "lod" : 3 === h ? "dol" : "active"), (Xb || 9 === q || 5.5 <= q && 9 > q && yb) && ha(Ka, "jsCanRotate")) : (nb(Ka, "forced-colors"), Oa(Ka, "jsCanRotate"));
  });
  (function() {
    function h(r) {
      b = r;
      n("[pbList] WebFont test result : " + !!r);
      r ? aa() : jb ? sa(!0) : jb !== K ? aa() : (n("[pbList] Need imageTest " + d), Pb(sa, d));
      n("window.offscreenBuffering = " + y.offscreenBuffering);
    }
    function t() {
      t = K;
      Ib(h, "PB-100", [1, Wa + "pbFont/woff2.css", 2, Wa + "pbFont/woff.css", 3, Wa + "pbFont/ttf.css", 5, Wa + "pbFont/eot.css", 6, Wa + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", hc);
    }
    function Z(r) {
      this.focus();
      r.preventDefault();
      r.stopPropagation();
    }
    function sa(r) {
      r ? (n("[pbList] Fallback start!"), ha(Pa, "pbList-noWebFont")) : n("[pbList] image disabled!");
      aa();
    }
    function aa() {
      for (h = Ib = K; a.length;) {
        ta(a.shift(), a.shift());
      }
      n("[pbList] complete.");
    }
    function ta(r, D) {
      function da(I) {
        I = T(I);
        for (var w = -1, N; N = I[++w];) {
          switch(N.nodeType) {
            case 1:
              da(N);
              break;
            case 3:
              N.data && f(N.data) && g.push(N);
          }
        }
      }
      function ma(I) {
        var w = I.children, N = 0, Aa = w.length;
        if (Aa) {
          for (; N < Aa; ++N) {
            ma(w[N]);
          }
        } else {
          (w = I.innerText) && f(w) && g.push(I);
        }
      }
      function f(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var g = [], E;
      if (h) {
        -1 === a.indexOf(r) && (a.push(r, D), v && t && t());
      } else {
        var e = a.indexOf(r);
        0 <= e && a.splice(e, 2);
        for (5 > q ? ma(r) : da(r); E = g.shift();) {
          e = 5 > q ? E.innerText : E.data, 2 !== b ? (0 <= e.indexOf("\u2091\u208b") && (e = e.split("\u2091\u208b").join(ac)), 0 <= e.indexOf("\u1d07\u207b") && (e = e.split("\u1d07\u207b").join(ac)), b && (0 <= e.indexOf("\u208b\u2081") && (e = e.split("\u208b\u2081").join(hc)), 0 <= e.indexOf("\u1d47/\u1d04") && (e = e.split("\u1d47/\u1d04").join(nc)), 0 <= e.indexOf("\u1d47/") && (e = e.split("\u1d47/").join(lc)), 0 <= e.indexOf("/\u1d04") && (e = e.split("/\u1d04").join(mc)))) : 0 <= e.indexOf("\u2091\u208b") && 
          (e = e.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= e.indexOf("\u2091") && (e = e.split("\u2091").join(gc)), D ? 5 > q ? E.innerText = e : E.data = e : Ca(e.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(kc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join($b).split("&amp;").join("&"), E);
        }
      }
    }
    function Ca(r, D) {
      function da(ba, R) {
        for (var ea = ""; R;) {
          R & 1 && (ea += ba), R >>= 1, ba += ba;
        }
        return ea;
      }
      function ma(ba, R, ea) {
        for (var Fb, oc = -1, cc, dc; Fb = R[++oc];) {
          for (; 0 <= (cc = ba.indexOf(Fb));) {
            dc = Fb.length, ba = ba.substr(0, cc) + da(ea, dc) + ba.substr(cc + dc);
          }
        }
        return ba;
      }
      function f(ba) {
        var R = ya(ba), ea = "" + R;
        return 0 < R && R === R | 0 && (R = ba.indexOf(ea) + ea.length, R <= ba.length) ? R : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), E = 5 > q || 1 === D.nodeType, e = [], I = "", w, N = -1, Aa, ab, W;
      if (E) {
        if (qa) {
          var eb = D.style.visibility;
          za(D, "visibility", "hidden");
        }
        D.innerHTML = "";
      }
      if (ca) {
        var Ra = D;
        D = J.createDocumentFragment();
      }
      if (function(ba) {
        var R = ba.indexOf("P");
        if (-1 === R) {
          return !1;
        }
        R = ya(ba.charAt(R + 1));
        return 0 <= R && 9 >= R;
      }(r)) {
        I = da("+", r.length);
      } else {
        0 <= (w = f(r)) && (I = da("|", w), N = w, --N);
        for (; w = r.charAt(++N);) {
          w === $b || Aa ? (I += "~", w === $b && (Aa = !Aa)) : I += w;
        }
        I = ma(I, U, "^");
        I = ma(I, G, "{");
        I = ma(I, X, "}");
      }
      N = 0;
      for (Aa = r.length; N < Aa; ++N) {
        w = r.charAt(N);
        var l = w === fc;
        var M = " " === w;
        w = l ? " " : w;
        var x = I.charAt(N);
        var O = (ab = Q) && l;
        var Q = "|" === x;
        x = g["+|~{}^".indexOf(x) + 1];
        if ("\n" !== w) {
          if (b || !jb) {
            if (2 === b) {
              if ("\u1d47/\u1d04" === r.substr(N, 3)) {
                w = "\u1d47/\u1d04", N += 2;
              } else {
                switch(r.substr(N, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    w = r.substr(N, 2), ++N;
                }
              }
            }
            x = M && "str" === x ? "pbList-strsp" : l ? "" : !M && x ? "pbList-" + x : "";
          } else {
            l = fb.indexOf(w), l = -1 === l ? "" : fb.indexOf(w).toString(16).toUpperCase(), l = (l = 1 === l.length ? "0" + l : l) ? "pbChr" + l : "", x = M && "str" === x ? "pbList-strsp" : M || !l ? "" : x ? (l ? l + " " : "") + "pbList-" + x : l;
          }
          l = K;
          O ? (w = 6 <= q && 8 > q ? " " : fc, x = "") : Q && (S && !Qa || 9.5 > B) ? (Q && !ab && (W = 4 - (ya(r.substr(N)) + "").length), 7.5 > B ? l = H ? "position:relative;top:-4px;left:" + 12 * W + "px" : {position:"relative", top:"-4px", left:12 * W + "px"} : l = H ? "position:relative;left:" + 12 * W + "px" : {position:"relative", left:12 * W + "px"}) : M && 7.5 > B && (x = "pbList-strsp");
          H ? e.push("<font" + (x ? ' class="' + x + '"' : "") + (l ? ' style="' + l + '"' : "") + ">" + w + "</font>") : E || ca ? wa(D, "font", {"class":x, style:l}, w) : Da(D, "font", {"class":x, style:l}, w);
        } else {
          ab = Q = !1, H ? e.push(w) : E || ca ? Ia(D, w) : Ea(D, w);
        }
      }
      if (E) {
        H ? D.innerHTML = e.join("") : ca && Ra.appendChild(D), qa && za(D, "visibility", eb);
      } else {
        if (H) {
          g = J.createElement("font");
          for (g.innerHTML = e.join(""); e = g.firstChild;) {
            D.parentNode.insertBefore(e, D);
          }
          db(D);
        } else {
          ca ? Ra.parentNode.replaceChild(D, Ra) : db(D);
        }
      }
    }
    1.9 > S && tb(function(r) {
      if (r) {
        r = u("*");
        for (var D = 0, da = r.length, ma; D < da; ++D) {
          ma = r[D], "B" !== Ja(ma) && -1 !== (" " + ma.className).toLowerCase().indexOf(" pbchr") && (Cb(ma, "title") || pa(ma, "title", ma.textContent), ma.textContent = " ");
        }
        return !0;
      }
    });
    tb(function(r) {
      if (r) {
        r = p("pbChrCS");
        for (var D = 0, da = r.length; D < da; ++D) {
          bc(r[D]);
        }
        return !0;
      }
    });
    var fa = [], z = S && 0 > A.conpare(ka, "0.9.9");
    tb(function(r) {
      function D(M) {
        var x = Ma(M, "pbTip");
        if (x) {
          var O = x.charAt(0);
          var Q = "_" === O;
          x = (Q ? x.charAt(2) : O).toUpperCase().charCodeAt(0) - 65;
          e ? wa(M, "div", {style:{left:7 * x + 3 + "px"}}) : (O = Ma(M, "title"), nb(M, "pbTip"), nb(M, "title"), Q = wa(M, "div", {className:"pbTip" + (Q ? "Btm" : ""), style:{width:O.length + ma + "em", left:7 * x - (z ? 0 : 5) + "px"}}, O), Q = wa(Q, "div"), .9 <= S && z && za(Q, "left", "2px"));
        }
        E && 0 <= M.className.indexOf("pbColor") && wa(M, "u");
      }
      function da(M, x) {
        var O = Ma(M, "pbGhst"), Q = M.className, ba = Q.split("pbCsr")[1] || "", R = Q.split("pbAlp")[1] || "";
        if ("CS" === O) {
          var ea = "_";
        } else {
          ea = O, 3 === ea.length && (ea = ea.substr(0, 2)), ea = fb[parseInt(ea, 16)] || "~";
        }
        var Fb;
        ba = ba.split(" ")[0];
        if (R = ya(R.split(" ")[0])) {
          f && (Q = Q.split("pbChr")[1].split(" ")[0], za(M, "backgroundPosition", ja(Q, 2, eb) + "px " + -24 * (10 - R) + "px")), !x && g && Da(M, "a").appendChild(M);
        }
        O && (R = 10 - R, f && (Fb = {backgroundPosition:ja(O, 2, eb) + "px " + -24 * (10 - R) + "px"}), nb(M, "pbGhst"), N = Da(M, "b", {className:"pbChr" + O + " pbCsr" + ba + " pbAlp" + R, style:Fb}, ea), bc(N));
        bc(M);
      }
      if (r) {
        var ma = 6 > q ? 2 : 0, f = 7.2 > B || .9 > S || Ta, g = 1.1 === S, E = 1.4 > S;
        r = u("SAMP");
        var e = 8 === q, I = Ha, w, N, Aa, ab, W;
        yb && ha(Pa, "pbLCD-AX");
        if (r.length) {
          for (Aa = -1; w = r[++Aa];) {
            if (na(P(w), "pbLCD")) {
              var eb = na(w, "PB-120") || na(w, "FX-795P");
              var Ra = Bb(w);
              for (w = Ra.length; W = Ra[--w];) {
                switch(Ja(W)) {
                  case "A":
                    (2 > I || e) && D(W);
                    if (2 > I) {
                      var l = Bb(W);
                      for (ab = l.length; ab;) {
                        da(l[--ab], !0);
                      }
                    }
                    Gb ? pa(W, "href", "javascript:void(0)") : (Db(W, "click", Z), fa.push(W));
                    break;
                  case "B":
                    2 > I && da(W, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Lb(function() {
      for (var r; r = fa.shift();) {
        Yb(r, "click", Z);
      }
    });
    6 === q && (new gb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(J);
    var G = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), X = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), U = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + ac + gc).split(""), a = [], b, d, v;
    if (.9 <= S && 0 >= A.conpare(ka, "0.9.1")) {
      ha(Ka, "pbLCD-gecko09To091");
      var C = !0;
    }
    tb(function(r) {
      if (r) {
        d = Wa + "pbFont/x3mask" + (C ? ".gecko0.9.1.gif" : ".png");
        r = u("*");
        for (var D = -1, da; da = r[++D];) {
          na(da, "pbList") ? ta(da) : na(da, "pbFont") && ta(da, !0);
        }
        a.length && (n("[pbList] " + a.length / 2 + " elements found. WebFont test start."), t());
        return !0;
      }
    });
    var H = !1, qa = 8 > B, ca = !H && !qa && !(6 > q) && J.createDocumentFragment && !!Pa.replaceChild;
    Ya.prettify = ta;
  })();
  var jc = J.scripts || u("script");
  var Wa = jc[jc.length - 1].src.split("/");
  --Wa.length;
  (Wa = Wa.join("/")) && (Wa += "/");
  n("[p_assetUrl] " + Wa);
  Eb(function() {
    var h;
    (h = Kb("logger")) || alert("#logger not found!");
    h ? (n = o, sb = function(t) {
      wa(h, "DIV", {style:{color:"red"}}, t);
    }, y.onerror = function(t, Z, sa) {
      sb(t + ", " + Z + ", " + sa);
      return !0;
    }) : y.console ? (n = console.log, sb = console.error) : B ? (n = ia, sb = opera.postError) : n = sb = ia;
    for (; Ua.length;) {
      n(Ua.shift());
    }
    for (; Va.length;) {
      sb(Va.shift());
    }
    Ua = Va = K;
    function o(t) {
      wa(h, "DIV", K, t);
    }
    o = !1;
  });
  6.1 > Ba && Db(y, "scroll", rb);
  Lb(Rb);
  6.1 > Ba && Db(y, "scroll", Jb);
  Lb(Sb);
  10 > q && (11 !== Hb || 5 !== q) || (9 > B || 1 > S || !Ta && !y.addEventListener ? J.write('<link href="' + Wa + xb + '" rel="stylesheet"' + (8 > B ? "" : ' media="screen,handheld,projection,print"') + ">") : Eb(function() {
    wa(ub, "link", {href:Wa + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

