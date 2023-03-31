/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Wa, w) {
  var P = 0, ea, y, La = (Wa + "").split("."), db = (w + "").split("."), pa = La.length;
  for (ea = db.length; "0" === La[pa - 1];) {
    --pa;
  }
  for (; "0" === db[ea - 1];) {
    --ea;
  }
  for (y = pa < ea ? pa : ea; P < y; ++P) {
    var qa = La[P] - 0, h = db[P] - 0;
    if (qa !== h) {
      return qa > h ? 1 : -1;
    }
  }
  return pa > ea ? 1 : pa === ea ? 0 : -1;
};
(function(Wa, w, P, ea, y, La, db, pa) {
  function qa(v, fa, Q) {
    Q = La(v.split(fa)[1]);
    return 0 <= Q ? Q : 0;
  }
  function h(v, fa) {
    return 0 <= v.indexOf(fa);
  }
  function Ob(v) {
    return h(v, "Linux armv") || h(v, "Linux aarch") || h(v, "Linux i686") || h(v, "Linux x86_64");
  }
  function eb(v, fa) {
    for (var Q in fa) {
      if (Q === v) {
        return !0;
      }
    }
  }
  function m(v, fa) {
    var Q = "", Ga = -1, Xa;
    if (v = v.split(fa)[1]) {
      for (; Xa = v.charCodeAt(++Ga);) {
        if (48 <= Xa && 57 >= Xa || 46 === Xa) {
          Q += v.charAt(Ga);
        } else {
          break;
        }
      }
      for (Ga = Q.length; Ga;) {
        if (46 === Q.charCodeAt(--Ga)) {
          Q = Q.substr(0, Ga);
        } else {
          break;
        }
      }
    }
    return Q;
  }
  function C(v) {
    for (var fa = arguments, Q = 1, Ga = fa[0], Xa; Q < fa.length; ++Q) {
      0 > ra(Ga, Xa = fa[Q]) && (Ga = Xa);
    }
    return Ga;
  }
  function R(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var ra = Wa.conpare, d = ea.userAgent, M = ea.appVersion, fb = La(M) || 0, D = ea.platform, Ya = P.documentElement, Pa = Ya && Ya.style, l = P.documentMode, Ma = y.width;
  y = y.height;
  var Hb = w.HTMLAudioElement, x = w.performance, O = w.Int8Array, gb = w.ontouchstart !== pa, Qa = m(M, "Version/") || m(d, "Version/"), bb = w.operamini, Ha = !bb && w.opera, Pb = Ha && (Ha.version && "function" === typeof Ha.version ? Ha.version() : C(m(d, "Opera "), Qa, fb)), rb = w.opr, sb = !Ha && (P.all || l);
  l = sb && (l ? l : w.XMLHttpRequest ? P.getElementsByTagName ? 7 : 4 : P.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  Ya = !sb && Ya.msContentZoomFactor;
  var tb = !Ya && (w.chrome || w.chromium), lb = !sb && function() {
    for (var v in Pa) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Ib = h(d, "UCWEB"), Qb = Ib && m(d, " U2/"), Wb = Ib && m(d, "; wds "), ub = m(d.split("_").join("."), "; iPh OS "), ma = m(d, "; Adr "), vb = h(M, "YJApp-ANDROID"), za = h(D, "Android") || lb && h(M, "Android") || vb;
  ma = m(D, "Android ") || m(M, "Android ") || m(d, "Android ") || ma;
  var hb = h(D, "Linux"), wb = "MacIntel" === D && ea.standalone !== pa, Ra = lb && m(d, "Goanna/"), Sa = !Ra && lb && (m(d, "rv:") || m(d.substr(d.indexOf(") Gecko/") - 11), "; ")), xb = m(d, "Firefox/"), G = m(d, "Opera/"), Za = w.FNRBrowser, Ta = qa(d, "AppleWebKit/"), mb = m(d, "Chrome/"), Jb = m(M, "Iron/"), Z = m(d, "OPR/"), Rb = m(M, "KHTML/"), Kb = m(d.toLowerCase(), "iris");
  m(d, "FxiOS/");
  m(d, "CriOS/");
  m(d, "EdgiOS/");
  var Sb = m(d, "Silk/"), nb = qa(d, "SamsungBrowser/"), Lb = !nb && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    fa, Q = v.length; fa = v[--Q];) {
      if (h(d, fa)) {
        return 2 > La(Qa) ? Qa : 0.9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (Q = v.length; fa = v[--Q];) {
      if (h(d, fa)) {
        return Qa;
      }
    }
  }(), Mb = tb && 534.3 >= Ta, yb = Ob(D), Ia = yb && !h(d, D) && Ob(d);
  gb = gb && (Ta || lb) && Ia || !ma && vb;
  vb = !!w.ReactNativeWebView;
  yb = yb && function() {
    for (var v in w) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ua = (Ia = w.puffinDevice) && Ia.clientInfo;
  Ua = (Ia = Ua && "iOS" === Ua.os && Ua.osVersion) && Ua.model;
  var ib = !l && P.registerElement, Cb = !l && P.execCommand, Db = w.webkitCancelAnimationFrame, Aa = hb && ib && "11.0.696.34" === mb, Eb = w._firefoxTV_playbackStateObserverJava, Tb = qa(d, "diordnA ");
  if ("Nitro" === D) {
    var r = 1;
  } else if ("Nintendo DSi" === D) {
    r = 2;
    var n = G;
  } else if ("New Nintendo 3DS" === D || h(d, "iPhone OS 6_0") && 320 === Ma && 240 === y) {
    r = 4, n = m(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === D) {
    r = 3, n = m(d, "Version/"), Ta = 535;
  } else if ("Nintendo Swicth" === D) {
    r = 7, n = m(M, "NintendoBrowser/");
  } else if (w.wiiu) {
    r = 6;
    n = m(M, "NintendoBrowser/");
    var I = 15, J = m(M, "AppleWebKit/") || (Db ? 536 : 534);
    n || (n = Db ? 4 : 2, h(M, "Macintosh;") || h(M, "Windows NT") && h(M, "Touch"));
  } else if (Ha && Ha.wiiremote) {
    r = 5, n = m(d, "Wii; U; ; ");
  } else if (G = m(d, "PlayStation Vita ")) {
    r = 10, n = G;
  } else if (G = m(d, "(PlayStation Portable); ")) {
    r = 8;
    n = G;
    var jb = 3.3;
  } else if (G = m(d, "PLAYSTATION 3; ") || m(d, "PLAYSTATION 3 ")) {
    r = 11, n = G, 0 > ra("4.10", G) && (I = 26, J = G);
  } else if (h(d, "Xbox One")) {
    r = 15, n = 1;
  } else if (h(d, "Xbox")) {
    r = 14, n = 1;
  } else if (2 === fb && h(d, "Sony/COM2/")) {
    r = 17;
    n = 2;
    jb = 3.4;
    var cb = !0;
  } else if (0 === D.indexOf("iP") || ub || Ia || wb) {
    if (Ia) {
      switch(n = Ia, Ua.substr(0, 4)) {
        case "iPho":
          var Da = 0;
          m(Ua, Da);
          var Ba = !0;
          break;
        case "iPad":
          Da = 1;
          m(Ua, Da);
          var ha = !0;
          break;
        case "iPod":
          Da = 2;
          m(Ua, Da);
          var kb = !0;
      }
    } else {
      ub ? n = ub : (n = m(M.split("_").join("."), "OS "), eb("isSecureContext", w), eb("enableWebGL", w), eb("sameOrigin", w));
      if (!n || Za) {
        n = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ea.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : db.isNaN ? 9.2 : w.SharedWorker ? x && x.now ? 8 : 8.4 : Cb ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : O ? 4.3 : Hb ? 4.1 : 3.2;
      }
      var Ca = Ma === 1.5 * y || 1.5 * Ma === y;
      0 === D.indexOf("iPhone") ? (Da = 0, Ba = !0) : 0 === D.indexOf("iPad") || wb ? (Da = 1, ha = !0) : 0 === D.indexOf("iPod") && (Da = 2, kb = !0);
    }
    I = !Ia && (ea.standalone || (ha || 12 > n) && eb("webkitFullscreenEnabled", P) || 11 <= n && 13 > n && ea.mediaDevices) ? 16 : 17;
    r = 24;
    J = n;
  } else if (h(d, "Kobo")) {
    r = 18, I = 21, J = 2.2, za = !0;
  } else if (h(d, "EBRD")) {
    r = 19, I = 21, J = 2.2;
  } else if (G = m(d, "CrOS x86_64 ") || m(d, "CrOS aarch64 ") || m(d, "CrOS i686 ") || m(d, "CrOS armv7l ")) {
    r = 28, n = G;
  } else if (w.onmoztimechange !== pa) {
    r = 29, n = 18.1 > Sa ? "1.0.1" : 19 > Sa ? 1.1 : 27 > Sa ? 1.2 : 29 > Sa ? 1.3 : 31 > Sa ? 1.4 : 33 > Sa ? 2 : 35 > Sa ? 2.1 : 38 > Sa ? 2.2 : 45 > Sa ? 2.5 : 2.6, h(d, "Mobile") ? Ba = !0 : h(d, "Tablet") ? ha = !0 : h(d, "TV");
  } else if (w.palmGetResource) {
    r = 30, n = m(d, "webOS/") || m(d, "WEBOS") || m(d, "hpwOS/"), h(d, "webOS.TV") || h(d, "/SmartTV") || (Ba = !0);
  } else if (G = m(d, "Tizen ")) {
    r = 31, n = G, I = 24, J = nb, Ba = !0;
  } else if (G = m(d, "Windows Phone ") || m(M, "Windows Phone OS ") || Wb) {
    r = 23, n = G, Ba = !0;
  } else if (Ya && "ARM" === D) {
    r = 23, n = 10, Ba = !0;
  } else if (sb && h(M, "ZuneWP")) {
    r = 23, n = 11 === l ? 8.1 : 10 === l ? 8 : 9 === l ? 7.5 : 7 === l ? 7 : "?", Ba = !0;
  } else if (h(d, "FOMA;")) {
    r = 16, Ba = !0;
  } else if (h(d, "SoftBank;")) {
    r = 16, Ba = !0;
  } else if (h(d, "KFMUWI")) {
    var ia = !0;
    n = 6.3;
    var wa = ha = !0;
  } else if (h(d, "KFKAWI")) {
    ia = !0, n = 6, wa = ha = !0;
  } else if (h(d, "KFSUWI") || h(d, "KFAUWI") || h(d, "KFDOWI")) {
    ia = !0, n = 5, wa = ha = !0;
  } else if (h(d, "KFGIWI")) {
    ia = !0, n = 5, wa = ha = !0;
  } else if (h(d, "KFARWI") || h(d, "KFSAWA") || h(d, "KFSAWI")) {
    ia = !0, n = 5 <= La(ma) ? 5 : 4, wa = ha = !0;
  } else if (h(d, "KFSOWI") || h(d, "KFTHWA") || h(d, "KFTHWI") || h(d, "KFAPWA") || h(d, "KFAPWI")) {
    ia = !0, n = 3, wa = ha = !0;
  } else if (h(d, "KFOT") || h(d, "KFTT") || h(d, "KFJWA") || h(d, "KFJWI")) {
    ia = !0, n = 2, wa = ha = !0;
  } else if (h(d, "Kindle Fire")) {
    ia = !0, n = 1, wa = ha = !0;
  } else if (G = m(d, "Kindle/")) {
    r = 20, n = G, I = 21, J = 2.2;
  } else if (Eb) {
    ia = !0, n = ma || Tb, wa = !0;
  } else if (h(d, "AmazonWebAppPlatform") || h(d, "; AFT")) {
    ia = !0, n = ma, wa = !0;
  } else if (h(d, "MeeGo")) {
    r = 32;
  } else if (h(d, "Maemo")) {
    r = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Kb) {
    r = 22, cb = !0;
  } else if ("WinCE" === D) {
    r = 21, cb = !0;
  } else if (0 === D.indexOf("Win")) {
    r = "Win16" === D ? 35 : "Win32" === D ? 36 : "Win64" === D ? 37 : 0, n = m(d, "Windows NT ") || m(d, "Windows ");
  } else if (0 === D.indexOf("Mac")) {
    r = "Mac68K" === D ? 39 : "MacPowerPC" === D || "MacPPC" === D ? 38 : "MacIntel" === D ? 40 : 0;
    if (G = m(d.split("_").join("."), "Mac OS X ")) {
      n = G;
    }
    var ob = !0;
  } else if (h(d, "BlackBerry") || h(d, "BB10")) {
    r = 34, n = Qa, Ba = !0;
  } else if (h(d, "SunOS") || h(d, "Sun Solaris")) {
    r = 42;
  } else if (h(d, "FreeBSD")) {
    r = 43;
  } else if (h(d, "OpenBSD")) {
    r = 44;
  } else if (h(d, "NetBSD")) {
    r = 45;
  } else if (za && lb) {
    h(d, "Android 4.4;") ? Ca = {min:2.3} : 4 <= La(ma) ? Ca = ma : Ca = {min:2.2}, n = Ca;
  } else if (za && Ha) {
    ma ? Ca = ma : Ca = {min:1.6}, n = Ca, h(d, "Tablet") ? ha = !0 : Ba = !0;
  } else if (ma) {
    n = ma, za = !0;
  } else if (hb && gb || vb || yb) {
    var zb = !0;
    nb ? Ca = {min:4.4} : tb && !Mb || rb || Z ? Ca = {min:4} : (Ca = ma = Pa.touchAction !== pa ? {min:5} : ib ? 4.4 : O ? ea.connection ? w.searchBoxJavaBridge_ || tb ? db.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ta ? 3 : 533 <= Ta ? Hb ? 2.3 : 2.2 : 530 <= Ta ? 2 : 1.5, Lb && (I = 24, J = Lb));
    n = Ca;
    za = !0;
  } else {
    Aa ? (n = {min:5}, zb = za = !0) : hb && (h(d, "Ubuntu") ? r = 46 : (G = m(d, "Mint/")) ? (r = 47, n = G) : (G = m(d, "Fedora/")) ? (r = 48, n = G) : r = h(d, "Gentoo") ? 49 : 50);
  }
  ia || za && zb && Sb ? r = 27 : za && (r = r || 26);
  I || (wa = wa || za, Ha ? (I = wa || cb || Ba || ha ? 9 : 8, J = Pb) : sb ? (Ca = qa(M, "Trident/") + 4, I = cb || Ba || ha || kb ? 3 : ob && 5 <= l ? 7 : 2, J = l) : Ya ? (I = 23 === r ? 6 : 5, J = m(M, "Edge/")) : Ra ? (I = 13, J = Ra) : lb ? (I = wa ? 12 : 11, J = Sa || xb) : nb ? (I = 24, J = nb) : (G = jb || m(d, "NetFront/")) ? (I = 18, J = G) : (G = m(d, "iCab")) ? (I = 19, J = G) : (G = C(m(d, "Opera Mini/"), m(d, "Opera Mobi/")) || bb && Qa) ? (I = 10, J = G, r || (h(d, "iPhone") ? Da = 
  0 : h(d, "iPad") ? Da = 1 : h(d, "iPod") && (Da = 2), Da && (r = 24))) : Ib ? (I = 25, J = Qb) : Rb ? (I = 14, J = fb) : za && Mb ? (I = 21, J = ma) : tb || rb || Z ? (I = wa ? 22 : 20, J = mb || Jb) : za && ib ? (I = 23, J = 5 > La(ma) ? ma : mb) : za && (Qa || zb) ? (I = 21, J = ma) : mb ? (I = wa ? 22 : 20, J = mb) : Ta && (I = 15, J = Ta));
  r && (Wa[2] = r, n && (Wa[3] = R(n)));
  I && (Wa[0] = I, J && (Wa[1] = R(J)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Wa, w, P, ea, y, La, db, pa, qa, h, Ob, eb, m, C) {
  function R(k) {
    if (w[0] === k) {
      return Pa === Pa + "" ? qa(Pa) : Pa;
    }
  }
  function ra(k) {
    var B = w[3];
    if (w[2] === k) {
      return B === B + "" ? qa(B) : B;
    }
  }
  function d(k, B, aa) {
    k + "" === k && ("a" === k.charAt(2) && (aa = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > x ? 117 : .9 > O || 9 > l || 9 > x || Ma ? 1 : 132 : parseInt(k, 16));
    aa && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (B || 2));
  }
  var M = y.body, fb = M.style, D, Ya, Pa = w[1], l = R(2) || R(3), Ma = R(7), Hb = R(5) || R(6), x = R(8) || R(9), O = R(11) || R(12), gb = O && 0 <= w.conpare(Pa, "1.9.1"), Qa = R(13), bb = R(15), Ha = R(16) || R(17), Pb = R(10) || R(25), rb = R(20) || R(22), sb = R(23), tb = R(21), lb = R(24), Ib = rb || sb || tb || lb, Qb = rb && qa(La.userAgent.split("Edg/")[1]), Wb = qa(La.appVersion.split("Trident/")[1]) + 4, ub = ra(35) || ra(36) || ra(37), ma = .9 > O, vb = (Ma ? "ie5mac" : 5.5 > l ? "ie5win" : 
  6 > l ? "ie55" : 10 > l ? "ie" + (l | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : O && !gb ? 1.4 <= O ? "gck19" : 1.3 <= O ? "gck13" : 1 <= O ? "gck12" : ma ? .8 <= O ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  ra(1) || ra(2) || ra(3) || ra(4) || ra(8) || ra(9) || ra(10);
  var za, hb, wb, Ra = 8 > l || 7.2 > x ? !1 : C, Sa = fb.transform !== C ? "transform" : fb["-o-transform"] !== C ? "-o-transform" : fb["-ms-transform"] !== C ? "-ms-transform" : fb.MozTransform !== C ? "-moz-transform" : fb["-webkit-transform"] !== C ? "-webkit-transform" : "", xb = [], G = [], Za = [], Ta, mb, Jb;
  525 > bb || 3.2 > Ha || 2.2 > tb || 10 > x || O && !gb || R(25) || 10 > R(3) || ra(32) || ra(30) || ra(3);
  var Z, Rb, Kb, Sb, nb, Lb, Mb, yb = pa.now || function() {
    return +new pa();
  };
  (function() {
    function k() {
      for (var K, a = 0, b = yb(); a < ba.length;) {
        b < ba[0].t ? ++a : (K = ba.splice(a, 1)[0], K.f(K.p));
      }
      sa = ba.length ? h(k, ca) : 0;
    }
    function B() {
      for (var K, a = 0; a < ja.length; ++a) {
        K = ja[a], K.f();
      }
    }
    function aa() {
      ta && (ta = m(ta));
    }
    function va() {
      sa && (sa = Ob(sa));
    }
    Kb = function(K) {
      ja.length || (ta = eb(B, na));
      ja.push({f:K, l:++xa});
      return xa;
    };
    Sb = function() {
      ta && (aa(), ta = eb(B, na));
    };
    nb = aa;
    var ja = [], na = 500, xa = 0, ta;
    if (5 > l || Ma) {
      P._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    Z = function(K, a, b) {
      ba.length || (sa = h(k, ca));
      ba.push({f:K, p:a, l:++V, t:yb() + (ca < b ? b : ca)});
      return V;
    };
    Rb = function(K) {
      for (var a = ba.length, b; b = ba[--a];) {
        if (b.l === K) {
          ba.splice(a, 1);
          break;
        }
      }
      return 0;
    };
    Lb = function() {
      sa && (va(), sa = h(k, ca));
    };
    Mb = va;
    var ba = [], ca = 16, V = 0, sa;
    if (5 > l || Ma) {
      P._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var Ia, Ua, ib, Cb, Db, Aa, Eb, Tb, r, n, I, J, jb, cb, Da, Ba, ha, kb, Ca, ia, wa;
  (function() {
    function k(a, b, g) {
      var q = ["<", a], t = 1, A, la;
      if (b) {
        for (A in b) {
          var H = b[A];
          if (null != H && "" !== H) {
            if ("style" === A) {
              q[++t] = ' style="';
              for (la in H) {
                for (var Na = ++t, ka, S = [], f = la.split(""), c = f.length; c;) {
                  ka = f[--c], "A" <= ka && "Z" >= ka && (ka = "-" + ka.toLowerCase()), S[c] = ka;
                }
                q[Na] = S.join("") + ":" + H[la] + ";";
              }
              q[++t] = '"';
            } else {
              "className" === A && (A = "class"), q[++t] = " " + A + '="' + H + '"';
            }
          }
        }
      }
      q[++t] = ">";
      null != g && (V && "font" !== a ? q[++t] = "<font>" + B(g) + "</font>" : q[++t] = B(g));
      q[++t] = "</" + a + ">";
      return q.join("");
    }
    function B(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function aa(a) {
      var b = a.split("-"), g = b.length;
      if (2 > g) {
        return a;
      }
      for (; 1 < g;) {
        a = b[--g], b[g] = a.charAt(0).toUpperCase() + a.substr(1);
      }
      return b.join("");
    }
    function va(a) {
      var b = "*" === a;
      a = V ? b ? y.all : y.all.tags(a.toUpperCase()) : 6 > l && b ? y.all : y.getElementsByTagName(a);
      b = [];
      for (var g = 0, q = a.length; g < q; ++g) {
        b[g] = a[g];
      }
      return b;
    }
    function ja(a) {
      return V ? a.parentElement : a.parentNode;
    }
    function na(a, b, g, q, t, A) {
      if (V) {
        var la = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var H = Cb(2 > a ? ib(b) : b);
        H = 2 > a ? H.indexOf(b) + a : H.length;
        b.insertAdjacentHTML(la, k(g, q, t));
        b = Cb(b)[H];
        null != t && ("font" === g ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (sa) {
        b = y.createElement(k(g, q));
      } else {
        b = A ? y.createElementNS("http://www.w3.org/2000/svg", g) : y.createElement(g);
        if (q) {
          for (la in q) {
            if ((a = q[la]) || 0 === a) {
              switch(la) {
                case "class":
                case "className":
                  Ba(b, a);
                  break;
                case "style":
                  A = b.style;
                  for (H in a) {
                    A[H] = a[H];
                  }
                  break;
                default:
                  jb(b, la, a);
              }
            }
          }
          !x || "a" !== g && "A" !== g || !q.href || q["tag-index"] || q.tagIndex || jb(b, "tagIndex", "-0");
        }
        K || null != t && xa(b, t);
      }
      return b;
    }
    function xa(a, b) {
      if (V) {
        return na(2, a, "font", C, b);
      }
      var g = y.createTextNode("" + b);
      a.appendChild(g);
      return g;
    }
    function ta(a, b) {
      9 > l ? a.className = b : a.setAttribute("class", b);
    }
    function ba(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function ca(a, b, g) {
      if (8 > x || 5.5 > l) {
        b = aa(b);
      }
      a.style[b] = g;
    }
    var V = 5 > l;
    D = va("html")[0];
    Ya = va("head")[0];
    Ia = va;
    Ua = function(a) {
      var b = [], g = 0, q, t = -1;
      if (9 > l || !y.getElementsByClassName) {
        var A = 6 > l ? y.all : y.getElementsByTagName("*");
      } else {
        var la = !0;
        A = y.getElementsByClassName(a);
      }
      for (q = A.length; g < q; ++g) {
        var H = A[g];
        if (la || (V || 1 === H.nodeType) && ba(H, a)) {
          b[++t] = H;
        }
      }
      return b;
    };
    ib = ja;
    Cb = function(a) {
      a = V ? a.children : a.childNodes;
      for (var b = [], g = a.length; g;) {
        b[--g] = a[g];
      }
      return b;
    };
    Db = function(a) {
      var b = !(7.03 < x && 7.2 > x) && a.children;
      a = b ? b : a.childNodes;
      for (var g = [], q = a.length, t = -1, A; q;) {
        if (A = a[--q], b || 1 === A.nodeType) {
          V && "FONT" === A.tagName || (g[++t] = A);
        }
      }
      return g;
    };
    Aa = function(a, b, g, q, t) {
      b = na(2, a, b, g, q, t);
      V || (a.appendChild(b), K && null != q && xa(b, q));
      return b;
    };
    Eb = function(a, b, g, q, t) {
      b = na(0, a, b, g, q, t);
      V || (ja(a).insertBefore(b, a), K && null != q && xa(b, q));
      return b;
    };
    Tb = xa;
    r = function(a, b) {
      if (V) {
        return na(0, a, "font", C, b);
      }
      var g = y.createTextNode("" + b);
      ib(a).insertBefore(g, a);
      return g;
    };
    n = function(a) {
      V ? a.outerHTML = "" : (5.5 > l && (a.style.filter = ""), ib(a).removeChild(a));
    };
    var sa = 9 > l, K = sa;
    I = function(a) {
      return a.tagName.toUpperCase();
    };
    J = function(a, b) {
      if (8 > x || 5.5 > l) {
        b = aa(b);
      }
      var g = a.getAttribute(b);
      return x && "tabIndex" === b ? "-0" === g ? "" : "" === g ? "-1" : g : g || "";
    };
    jb = function(a, b, g) {
      if (x && "tab-index" === b) {
        "-1" === g ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", g);
      } else {
        if (8 > x || 5.5 > l) {
          b = aa(b);
        }
        a.setAttribute(b, g);
      }
    };
    cb = function(a, b) {
      if (x && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > x || 5.5 > l) {
          b = aa(b);
        }
        a.removeAttribute(b);
      }
    };
    Da = function(a, b) {
      if (x && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > x || 5.5 > l) {
        b = aa(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Ba = ta;
    ha = ba;
    kb = function(a, b) {
      var g;
      if (!ba(a, b)) {
        if (g = a.className) {
          g += " ";
        }
        ta(a, g + b);
      }
    };
    Ca = function(a, b) {
      if (ba(a, b)) {
        var g = a.className.split(" ");
        g.splice(g.indexOf(b), 1);
        ta(a, g.join(" "));
      }
    };
    ia = ca;
    wa = function(a, b) {
      var g, q = -1, t;
      if (5.5 > l) {
        if (g = 5.5 > l ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (g = g.split(";"); t = g[++q];) {
            ca(a, t.split(":")[0], "");
          }
        }
        if (b) {
          for (q = -1, g = b.split(";"); t = g[++q];) {
            var A = t.split(":")[0];
            ca(a, A, t.substr(A.length + 1));
          }
        }
      } else if (7.1 > x) {
        if (a.setAttribute("style", ""), b) {
          for (g = b.split(";"); t = g[++q];) {
            t = t.split(":"), ca(a, t[0], t[1]);
          }
        }
      } else {
        9 > x || 1 > O ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var ob, zb, v, fa, Q, Ga, Xa, Ea, Ub;
  (function() {
    function k() {
      return H ? ka ? 2 : Na ? 3 : 1 : 0;
    }
    function B(f) {
      zb(P, "load", B);
      B = C;
      va(xb, f, !0);
      v = xb = C;
    }
    function aa(f, c) {
      Q(function() {
        var p = ba(f);
        c(p);
        p.addListener(c);
        return !0;
      });
    }
    function va(f, c, p) {
      for (var e = 0; e < f.length; ++e) {
        !0 === f[e](c) && (f.splice(e, 1), --e);
      }
      p && (f.length = 0);
    }
    function ja(f, c, p) {
      xb || V.length || Z(na);
      V.push(f, c, p);
    }
    function na() {
      var f = V, c;
      for (V = []; c = f.shift();) {
        va(c, f.shift(), f.shift());
      }
    }
    function xa(f) {
      var c = f || event;
      f = K[c.type];
      var p = -1, e, u;
      5 > l ? c = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : l ? (c.target = c.srcElement, c.preventDefault = function() {
        c.returnValue = !1;
      }, c.stopPropagation = function() {
        c.cancelBubble = !0;
      }) : b && (c.j = c.stopPropagation, c.stopPropagation = function() {
        u = !0;
      });
      for (; e = f[++p];) {
        e.i === this ? (this.g = e.h, l && (c.currentTarget = this), this.g(c), l ? (this.g = ea, this.g = C) : delete this.g) : 7.2 > x && this === y && e.i === P && (P.g = e.h, P.g(c), delete P.g);
      }
      if (l) {
        return c.preventDefault = c.stopPropagation = ea, c.preventDefault = c.stopPropagation = C, c.returnValue;
      }
      b && (c.defaultPrevented && "click" === c.type && "A" === c.target.tagName && (q = !0), u && !q && c.j(), c.j = c.stopPropagation = C);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function ta() {
      var f = 9 === ca.offsetWidth;
      Xa !== f && ja(G, Xa = f);
    }
    var ba = P.matchMedia, ca, V = [];
    xb.push(function() {
      aa = C;
      ca = Aa(M, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      v(function() {
        V.length && Z(na);
      });
    });
    ob = function(f, c, p, e) {
      if (g) {
        f.addEventListener(c, p, e ? sa ? e : e.capture || !0 === e : !1);
      } else {
        var u = {i:f, h:p};
        e = K[c];
        var E = "on" + c, F, L;
        if (e) {
          for (F = e.length; L = e[--F];) {
            if (L.i === f && L.h === p) {
              return;
            }
          }
          K[c].push(u);
        } else {
          K[c] = e = [u], a || (c = f[E], "function" === typeof c && c !== xa && e.unshift({i:f, h:c}));
        }
        a ? f.attachEvent(E, xa) : f[E] = xa;
      }
    };
    zb = function(f, c, p, e) {
      if (g) {
        f.removeEventListener(c, p, e ? sa ? e : e.capture || !0 === e : !1);
      } else {
        e = K[c];
        c = "on" + c;
        var u, E, F;
        if (e) {
          for (u = e.length; E = e[--u];) {
            E.i === f && (E.h === p ? e.splice(u, 1) : F = !0);
          }
          F || (a ? f.detachEvent(c, xa) : l ? (f[c] = ea, f[c] = null) : delete f[c]);
        }
      }
    };
    var sa = !l && !Ma && (new db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), K = {}, a = !1, b = 525.13 > bb, g = !b && !Ma && P.addEventListener, q;
    b && D.addEventListener("click", function(f) {
      if (q) {
        return q = !1, f.preventDefault(), !1;
      }
    });
    v = function(f) {
      xb.push(f);
    };
    fa = function(f) {
      t && t.push(f);
    };
    var t = [];
    if (419.3 >= bb) {
      var A = function() {
        if (A) {
          var f = y.readyState;
          "loaded" === f || "complete" === f ? (A = C, B()) : Z(A);
        }
      };
      Z(A);
    } else {
      ob(P, "load", B);
    }
    l || !ma && 1.8 > O ? ob(P, "unload", function(f) {
      va(t, f, !0);
    }) : t = C;
    Q = function(f) {
      G.push(f);
    };
    v(function() {
      ta();
      Kb(ta);
    });
    Ga = function(f) {
      Za && Za.push(f);
    };
    var la = 60 > O || Qa, H, Na, ka;
    if (89 <= O || 89 <= rb || ub && 79 <= Qb || ba && (ba("(forced-colors:none)").matches || ba("(forced-colors:active)").matches)) {
      Ub = !0, aa("(forced-colors:active)", function(f) {
        H = f.matches;
        Ea = k();
        ja(Za, Ea);
      });
    } else if (10 <= l || Hb || ub && Qb) {
      Ub = !0, aa("(-ms-high-contrast:black-on-white)", function(f) {
        H = Na = f.matches;
        Ea !== k() && (Ea = k(), ja(Za, Ea));
      }), aa("(-ms-high-contrast:white-on-black)", function(f) {
        H = ka = f.matches;
        Ea !== k() && (Ea = k(), ja(Za, Ea));
      }), aa("(-ms-high-contrast:active)", function(f) {
        H = f.matches;
        Ea !== k() && (Ea = k(), ja(Za, Ea));
      });
    } else if (ub && (l || O && 0 <= w.conpare(Pa, "1.8.1") || Qa)) {
      var S = function() {
        function f(e, u) {
          if (u && "transparent" === e) {
            return 382.5;
          }
          if ("#" === e.charAt(0)) {
            return parseInt("0x" + e.substr(1, 2), 16) + parseInt("0x" + e.substr(3, 2), 16) + parseInt("0x" + e.substr(5, 2), 16);
          }
          var E = e.split("(")[1].split(",");
          return qa(E[0]) + qa(E[1]) + qa(E[2]);
        }
        var c = y.defaultView;
        var p = c ? c.getComputedStyle(ca, null) : ca.currentStyle;
        c = (p && p.color || "").split(" ").join("");
        p = (p && p.backgroundColor || "").split(" ").join("");
        c && (H = "#123456" !== c && "rgb(18,52,86)" !== c, Na = f(c) < f(p, !0), ka = f(c) > f(p, !0), Ea !== k() && (Ea = k(), ja(Za, Ea, la)));
      };
      Q(function(f) {
        if (f) {
          return ia(ca, "color", "#123456"), ia(ca, "backgroundColor", "#123456"), la ? (S(), Za = C) : Kb(S), S = C, !0;
        }
      });
    } else {
      Za = k = C;
    }
  })();
  (function() {
    function k(e) {
      b(e);
      c && !e && n(c);
      b = g = q = t = A = la = ka = S = f = p = c = C;
    }
    function B(e) {
      y.fonts.load('1.6em "' + e + '"').then(function() {
        var u;
        (u = ja(g)) ? Z(k, u) : va(!0);
      }, function() {
        Ra !== C ? na(Ra) : Ta(na);
      });
    }
    function aa(e) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (Na = new pa() - 0, !1) : e < new pa() - Na;
    }
    function va(e) {
      var u;
      e && (Na = new pa() - 0);
      (u = ja(g)) ? k(u) : aa(H) ? ka || ca ? k(0) : Ra !== C ? na(Ra) : Ta(na) : Z(va);
    }
    function ja(e) {
      var u = 0, E = -1, F = 0;
      if (!p) {
        var L = -1;
        var T;
        S = Aa(M, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, K);
        for (p = {}; T = a[++L];) {
          ia(S, "fontFamily", T), p[T] = S.offsetWidth;
        }
      }
      for (5 > l ? S || (S = Aa(M, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, K)) : M.appendChild(S); L = a[++E];) {
        if (ia(S, "fontFamily", '"' + e + '",' + L), S.offsetWidth !== p[L]) {
          u = 1;
          break;
        }
      }
      !l && u && A && (S.innerHTML = A, e = S.offsetWidth, S.innerHTML = la, F = e === S.offsetWidth ? 1 : 0, S.innerHTML = K);
      n(S);
      5 > l && (S = C);
      return u + F;
    }
    function na(e) {
      e ? (ka = !0, xa(!0)) : k(0);
    }
    function xa(e) {
      var u;
      if (q) {
        for (u in e && (Na = new pa() - 0), q) {
          ja(u) ? (f = Aa(M, "div", {"aria-hidden":"true", className:t, id:t}), c = Aa(Ya, "link", {type:"text/css", rel:"stylesheet", href:q[u]}), Z(ta, !0)) : aa(sa) ? (delete q[u], Z(xa, !0)) : Z(xa);
          return;
        }
      }
      k(0);
    }
    function ta(e) {
      e && (Na = new pa() - 0);
      1 < f.offsetWidth ? (n(f), H = sa, Z(va, !0)) : aa(H) ? 528 > bb ? (n(f), H = sa, Z(va, !0)) : (n(f), k(0)) : Z(ta);
    }
    G.splice(0, 0, function() {
      if (Xa) {
        wb = 8 <= l || Hb || 9.5 <= x || gb || Qa || 522 <= bb || 3 <= Ha || Pb || Ib ? 3 : 7.2 <= x ? 2 : 6 <= x || O ? 1 : 0;
        if (!wb && !l && !Ma) {
          var e = Aa(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          wb = 6 <= e.offsetWidth ? 2 : 0;
          n(e);
        }
        return !0;
      }
    });
    Ta = !1 === Ra ? function(e) {
      Z(e, !1);
    } : function(e) {
      function u(L) {
        F = Rb(F);
        Ra = L;
        E.onload = E.onerror = ea;
        Z(e, L);
      }
      if (Ra !== C) {
        Z(e, Ra);
      } else {
        var E = new Image(), F = Z(function() {
          F && u(!1);
        });
        E.onerror = function() {
          u(!1);
        };
        E.onload = function() {
          u(1 === E.width * E.height);
        };
        E.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > l && v(function() {
      var e = Aa(M, "div");
      wa(e, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      za = 1 < e.offsetHeight;
      n(e);
    });
    mb = function(e, u) {
      function E() {
        if (L || !T || F.complete) {
          var N = !!F.width;
          hb = hb || N;
          Z(e, N);
          F.onerror = F.onload = ea;
          F = e = C;
        } else {
          --T, Z(E);
        }
      }
      var F = new Image(), L, T = 99;
      F.onerror = function() {
        L = !0;
      };
      F.onload = function() {
        L = !0;
      };
      F.src = u;
      Z(E);
    };
    Jb = function(e, u, E, F, L, T, N) {
      b = e;
      g = u;
      q = E;
      t = F;
      A = L;
      la = T;
      H = N || V;
      ba ? Z(k, 0) : !y.fonts || 603 > bb ? va(!0) : B(g);
    };
    var ba = 525 > bb || 10 > x || O && !gb || 2.2 > R(21) || R(25) || 10 > R(3) || ra(32) || ra(30) || ra(3), ca = 9 > l || 2 > rb || 12 > x, V = 5E3, sa = 100, K = "mmmmmmmmmmlli", a = ["sans-serif", "serif"], b, g, q, t, A, la, H, Na, ka, S, f, c, p;
  })();
  var Ja = String.fromCharCode, Ab = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Ja(960), ")", "(", Ja(234), Ja(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Ja(9824), "\u2190", Ja(9829), Ja(9830), Ja(9827), Ja(956), "\u03a9", "\u2193", "\u2192", "%", Ja(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Ja(9619)], $b = (9 === l || O && 0 <= w.conpare(Pa, "1.8.1") || Qa) && !Ub, pb = [], qb, Va, Nb = 7.2 > x ? function() {
    qb = !qb;
    for (var k = -1, B; B = pb[++k];) {
      -1 !== B.className.indexOf("pbAlp") ? ia(B, "display", qb ? "" : "none") : (kb(B, qb ? "pbChrCS" : "pbChr00"), Ca(B, qb ? "pbChr00" : "pbChrCS"));
    }
  } : $b ? function() {
    qb = !qb;
    for (var k = -1, B; B = pb[++k];) {
      ia(B, "opacity", qb ? 1 : 0);
    }
  } : C;
  var Xb = Wa.startBlinkingIfCursor = function(k) {
    Nb ? ha(k, "pbChrCS") && (Va || !x && !Ea || (Va = eb(Nb, 400)), -1 === pb.indexOf(k) && pb.push(k)) : pb = C;
  };
  Wa.stopBlinkingIfCursor = function(k) {
    Nb && (k = pb.indexOf(k), 0 <= k && (pb.splice(k, 1), !pb.length && Va && (m(Va), Va = 0)));
  };
  $b && Ga(function(k) {
    k ? Va || (Va = eb(Nb, 400)) : Va && (m(Va), Va = 0);
  });
  Nb && fa(function() {
    Va && m(Va);
  });
  Ub || Ga(function(k) {
    k ? (jb(D, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (Sa || 9 === l || 5.5 <= l && 9 > l && za) && kb(D, "jsCanRotate")) : (cb(D, "forced-colors"), Ca(D, "jsCanRotate"));
  });
  (function() {
    function k(c) {
      (A = c) ? ja() : hb ? va(!0) : hb !== C ? ja() : mb(va, la);
    }
    function B() {
      B = C;
      Jb(k, "PB-100", {"PB-100_canTTF":$a + "pbFont/ttf.css", "PB-100_canWOFF":$a + "pbFont/woff.css", "PB-100_canEOT":$a + "pbFont/eot.css", "PB-100_canSVG":$a + "pbFont/svg.css"}, "pbFont-testCssReady", K, "i", 5E3);
    }
    function aa(c) {
      this.focus();
      c.preventDefault();
      c.stopPropagation();
    }
    function va(c) {
      c && kb(M, "pbList-noWebFont");
      ja();
    }
    function ja() {
      for (k = Jb = C; t.length;) {
        na(t.shift(), t.shift());
      }
    }
    function na(c, p) {
      function e(N) {
        N = Cb(N);
        for (var z = -1, Y; Y = N[++z];) {
          switch(Y.nodeType) {
            case 1:
              e(Y);
              break;
            case 3:
              Y.data && E(Y.data) && F.push(Y);
          }
        }
      }
      function u(N) {
        var z = N.children, Y = 0, ab = z.length;
        if (ab) {
          for (; Y < ab; ++Y) {
            u(z[Y]);
          }
        } else {
          (z = N.innerText) && E(z) && F.push(N);
        }
      }
      function E(N) {
        return N.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var F = [], L;
      if (k) {
        -1 === t.indexOf(c) && (t.push(c, p), H && B && B());
      } else {
        var T = t.indexOf(c);
        0 <= T && t.splice(T, 2);
        for (5 > l ? u(c) : e(c); L = F.shift();) {
          T = 5 > l ? L.innerText : L.data, 2 !== A && (T = T.split(K).join(V)), p ? 5 > l ? L.innerText = T : L.data = T : xa(T.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(sa).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(ca).split("&amp;").join("&"), L);
        }
      }
    }
    function xa(c, p) {
      function e(oa, U) {
        for (var Fa = ""; U;) {
          U & 1 && (Fa += oa), U >>= 1, oa += oa;
        }
        return Fa;
      }
      function u(oa, U, Fa) {
        for (var Fb, bc = -1, Yb, Zb; Fb = U[++bc];) {
          for (; 0 <= (Yb = oa.indexOf(Fb));) {
            Zb = Fb.length, oa = oa.substr(0, Yb) + e(Fa, Zb) + oa.substr(Yb + Zb);
          }
        }
        return oa;
      }
      function E(oa) {
        var U = qa(oa), Fa = "" + U;
        return 0 < U && U === U | 0 && (U = oa.indexOf(Fa) + Fa.length, U <= oa.length) ? U : 0;
      }
      var F = " area line str cmd fnc syb".split(" "), L = 5 > l || 1 === p.nodeType, T = [], N = "", z, Y = -1, ab, Bb, Ka;
      if (L) {
        if (S) {
          var Vb = p.style.visibility;
          ia(p, "visibility", "hidden");
        }
        p.innerHTML = "";
      }
      if (f) {
        var Gb = p;
        p = y.createDocumentFragment();
      }
      if (function(oa) {
        var U = oa.indexOf("P");
        if (-1 === U) {
          return !1;
        }
        U = qa(oa.charAt(U + 1));
        return 0 <= U && 9 >= U;
      }(c)) {
        N = e("+", c.length);
      } else {
        0 <= (z = E(c)) && (N = e("|", z), Y = z, --Y);
        for (; z = c.charAt(++Y);) {
          z === ca || ab ? (N += "~", z === ca && (ab = !ab)) : N += z;
        }
        N = u(N, q, "^");
        N = u(N, b, "{");
        N = u(N, g, "}");
      }
      Y = 0;
      for (ab = c.length; Y < ab; ++Y) {
        z = c.charAt(Y);
        var W = z === a;
        var da = " " === z;
        z = W ? " " : z;
        var X = N.charAt(Y);
        var Oa = (Bb = ya) && W;
        var ya = "|" === X;
        X = F["+|~{}^".indexOf(X) + 1];
        "\n" !== z ? (A || !hb ? (2 === A && c.substr(Y, 2) === K && (z = K, ++Y), X = da && "str" === X ? "pbList-strsp" : W ? "" : !da && X ? "pbList-" + X : "") : (W = Ab.indexOf(z), W = -1 === W ? "" : Ab.indexOf(z).toString(16).toUpperCase(), W = (W = 1 === W.length ? "0" + W : W) ? "pbChr" + W : "", X = da && "str" === X ? "pbList-strsp" : da || !W ? "" : X ? (W ? W + " " : "") + "pbList-" + X : W), W = C, Oa ? (z = 6 <= l && 8 > l ? " " : a, X = "") : ya && (O && !gb || 9.5 > x) ? (ya && !Bb && 
        (Ka = 4 - (qa(c.substr(Y)) + "").length), 7.5 > x ? W = ka ? "position:relative;top:-4px;left:" + 12 * Ka + "px" : {position:"relative", top:"-4px", left:12 * Ka + "px"} : W = ka ? "position:relative;left:" + 12 * Ka + "px" : {position:"relative", left:12 * Ka + "px"}) : da && 7.5 > x && (X = "pbList-strsp"), ka ? T.push("<font" + (X ? ' class="' + X + '"' : "") + (W ? ' style="' + W + '"' : "") + ">" + z + "</font>") : L || f ? Aa(p, "font", {"class":X, style:W}, z) : Eb(p, "font", {"class":X, 
        style:W}, z)) : (Bb = ya = !1, ka ? T.push(z) : L || f ? Tb(p, z) : r(p, z));
      }
      if (L) {
        ka ? p.innerHTML = T.join("") : f && Gb.appendChild(p), S && ia(p, "visibility", Vb);
      } else {
        if (ka) {
          F = y.createElement("font");
          for (F.innerHTML = T.join(""); T = F.firstChild;) {
            p.parentNode.insertBefore(T, p);
          }
          n(p);
        } else {
          f ? Gb.parentNode.replaceChild(p, Gb) : n(p);
        }
      }
    }
    1.9 > O && Q(function(c) {
      if (c) {
        c = Ia("*");
        for (var p = 0, e = c.length, u; p < e; ++p) {
          u = c[p], "B" !== I(u) && -1 !== (" " + u.className).toLowerCase().indexOf(" pbchr") && (Da(u, "title") || jb(u, "title", u.textContent), u.textContent = " ");
        }
        return !0;
      }
    });
    Q(function(c) {
      if (c) {
        c = Ua("pbChrCS");
        for (var p = 0, e = c.length; p < e; ++p) {
          Xb(c[p]);
        }
        return !0;
      }
    });
    var ta = [], ba = O && 0 > w.conpare(Pa, "0.9.9");
    Q(function(c) {
      function p(da) {
        var X = J(da, "pbTip");
        if (X) {
          var Oa = X.charAt(0);
          var ya = "_" === Oa;
          X = (ya ? X.charAt(2) : Oa).toUpperCase().charCodeAt(0) - 65;
          T ? Aa(da, "div", {style:{left:7 * X + 3 + "px"}}) : (Oa = J(da, "title"), cb(da, "pbTip"), cb(da, "title"), ya = Aa(da, "div", {className:"pbTip" + (ya ? "Btm" : ""), style:{width:Oa.length + u + "em", left:7 * X - (ba ? 0 : 5) + "px"}}, Oa), ya = Aa(ya, "div"), .9 <= O && ba && ia(ya, "left", "2px"));
        }
        L && 0 <= da.className.indexOf("pbColor") && Aa(da, "u");
      }
      function e(da, X) {
        var Oa = J(da, "pbGhst"), ya = da.className, oa = ya.split("pbCsr")[1] || "", U = ya.split("pbAlp")[1] || "";
        if ("CS" === Oa) {
          var Fa = "_";
        } else {
          Fa = Oa, 3 === Fa.length && (Fa = Fa.substr(0, 2)), Fa = Ab[parseInt(Fa, 16)] || "~";
        }
        var Fb;
        oa = oa.split(" ")[0];
        if (U = qa(U.split(" ")[0])) {
          E && (ya = ya.split("pbChr")[1].split(" ")[0], ia(da, "backgroundPosition", d(ya, 2, Vb) + "px " + -24 * (10 - U) + "px")), !X && F && Eb(da, "a").appendChild(da);
        }
        Oa && (U = 10 - U, E && (Fb = {backgroundPosition:d(Oa, 2, Vb) + "px " + -24 * (10 - U) + "px"}), cb(da, "pbGhst"), Y = Eb(da, "b", {className:"pbChr" + Oa + " pbCsr" + oa + " pbAlp" + U, style:Fb}, Fa), Xb(Y));
        Xb(da);
      }
      if (c) {
        var u = 6 > l ? 2 : 0, E = 7.2 > x || .9 > O || Ma, F = 1.1 === O, L = 1.4 > O;
        c = Ia("SAMP");
        var T = 8 === l, N = wb, z, Y, ab, Bb, Ka;
        za && kb(M, "pbLCD-AX");
        if (c.length) {
          for (ab = -1; z = c[++ab];) {
            if (ha(ib(z), "pbLCD")) {
              var Vb = ha(z, "PB-120") || ha(z, "FX-795P");
              var Gb = Db(z);
              for (z = Gb.length; Ka = Gb[--z];) {
                switch(I(Ka)) {
                  case "A":
                    (2 > N || T) && p(Ka);
                    if (2 > N) {
                      var W = Db(Ka);
                      for (Bb = W.length; Bb;) {
                        e(W[--Bb], !0);
                      }
                    }
                    Pb ? jb(Ka, "href", "javascript:void(0)") : (ob(Ka, "click", aa), ta.push(Ka));
                    break;
                  case "B":
                    2 > N && e(Ka, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    fa(function() {
      for (var c; c = ta.shift();) {
        zb(c, "click", aa);
      }
    });
    6 === l && (new db("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
    var ca = Ab[7], V = Ab[30], sa = Ab[113], K = Ja(8337) + Ja(8331), a = Ja(160);
    Ja(8194);
    var b = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), g = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), q = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + V + Ab[31]).split(""), t = [], A, la, H;
    if (.9 <= O && 0 >= w.conpare(Pa, "0.9.1")) {
      kb(D, "pbLCD-gecko09To091");
      var Na = !0;
    }
    Q(function(c) {
      if (c) {
        la = $a + "pbFont/x3mask" + (Na ? ".gecko0.9.1.gif" : ".png");
        c = Ia("*");
        for (var p = -1, e; e = c[++p];) {
          ha(e, "pbList") ? na(e) : ha(e, "pbFont") && na(e, !0);
        }
        t.length && B();
        return !0;
      }
    });
    var ka = !1, S = 8 > x, f = !ka && !S && !(6 > l) && y.createDocumentFragment && !!M.replaceChild;
    Wa.prettify = na;
  })();
  var ac = y.scripts || Ia("script");
  var $a = ac[ac.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  6.1 > Ha && ob(P, "scroll", Sb);
  fa(nb);
  6.1 > Ha && ob(P, "scroll", Lb);
  fa(Mb);
  10 > l && (11 !== Wb || 5 !== l) || (9 > x || 1 > O || !Ma && !P.addEventListener ? y.write('<link href="' + $a + vb + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : v(function() {
    Aa(Ya, "link", {href:$a + "" + vb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

