/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Function.prototype.apply||(Function.prototype.apply=function(_x,_y){var f=this,x=_x!=null?_x:{},y=_y||[],j=y.length,i=0,r,a,u;x.__apply=f;if(!x.__apply)a=x.constructor.prototype.__apply=f;switch(j){case 0:r=x.__apply();break;case 1:r=x.__apply(y[0]);break;case 2:r=x.__apply(y[0],y[1]);break;case 3:r=x.__apply(y[0],y[1],y[2]);break;case 4:r=x.__apply(y[0],y[1],y[2],y[3]);break;case 5:r=x.__apply(y[0],y[1],y[2],y[3],y[4]);break;case 6:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5]);break;case 7:r=x.__apply(y[0],
y[1],y[2],y[3],y[4],y[5],y[6]);break;case 8:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);break;case 9:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);break;default:r=[];for(;i<j;++i)r[i]="y["+i+"]";r=eval("x.__apply("+r.join(",")+")")}a?delete x.constructor.prototype.__apply:x.__apply=u;return r});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Wa, w) {
  var C = 0, sa, H, Ta = (Wa + "").split("."), hb = (w + "").split("."), Ma = Ta.length;
  for (sa = hb.length; "0" === Ta[Ma - 1];) {
    --Ma;
  }
  for (; "0" === hb[sa - 1];) {
    --sa;
  }
  for (H = Ma < sa ? Ma : sa; C < H; ++C) {
    var za = Ta[C] - 0, k = hb[C] - 0;
    if (za !== k) {
      return za > k ? 1 : -1;
    }
  }
  return Ma > sa ? 1 : Ma === sa ? 0 : -1;
};
(function(Wa, w, C, sa, H, Ta, hb, Ma) {
  function za(B, ta) {
    var V = Ta(B.split(ta)[1]);
    return 0 <= V ? V : 0;
  }
  function k(B, ta) {
    return 0 <= B.indexOf(ta);
  }
  function Kb(B) {
    return k(B, "Linux armv") || k(B, "Linux aarch") || k(B, "Linux i686") || k(B, "Linux x86_64");
  }
  function ib(B, ta) {
    for (var V in ta) {
      if (V === B) {
        return !0;
      }
    }
  }
  function n(B, ta) {
    var V = "", Ua = -1, Na;
    if (B = B.split(ta)[1]) {
      for (; Na = B.charCodeAt(++Ua);) {
        if (48 <= Na && 57 >= Na || 46 === Na) {
          V += B.charAt(Ua);
        } else {
          break;
        }
      }
      for (Ua = V.length; Ua;) {
        if (46 === V.charCodeAt(--Ua)) {
          V = V.substr(0, Ua);
        } else {
          break;
        }
      }
    }
    return V;
  }
  function K(B) {
    for (var ta = arguments, V = 1, Ua = ta[0], Na; V < ta.length; ++V) {
      0 > va(Ua, Na = ta[V]) && (Ua = Na);
    }
    return Ua;
  }
  function S(B) {
    return B === B + "" ? B : B === B - 0 ? "" + B : B.min && B.max ? B.min + "~" + B.max : B.min ? B.min + "~" : "~" + B.max;
  }
  var va = Wa.conpare, c = sa.userAgent, fa = sa.appVersion, Oa = Ta(fa) || 0, I = sa.platform, Ha = C.documentElement, wb = Ha && Ha.style, ha = C.documentMode, q = H.width, Va = H.height;
  H = w.HTMLAudioElement;
  var jb = w.performance, x = w.Int8Array, Q = w.ontouchstart !== Ma, Pa = n(fa, "Version/") || n(c, "Version/"), cb = w.operamini, ra = !cb && w.opera, Fa = ra && ("function" === typeof ra.version ? ra.version() : K(n(c, "Opera "), Pa, Oa)), Fb = w.opr, wa = !ra && (C.all || ha);
  ha = wa && (ha ? ha : w.XMLHttpRequest ? C.getElementsByTagName ? 7 : 4 : C.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4);
  Ha = !wa && Ha.msContentZoomFactor;
  var xb = !Ha && (w.chrome || w.chromium), Qa = !wa && function() {
    for (var B in wb) {
      if (0 === B.indexOf("Moz")) {
        return !0;
      }
    }
  }(), yb = k(c, "UCWEB"), Ub = yb && n(c, " U2/"), Lb = yb && n(c, "; wds "), Gb = n(c.split("_").join("."), "; iPh OS "), ia = n(c, "; Adr "), zb = k(fa, "YJApp-ANDROID"), Ia = k(I, "Android") || Qa && k(fa, "Android") || zb;
  ia = n(I, "Android ") || n(fa, "Android ") || n(c, "Android ") || ia;
  var Ab = k(I, "Linux"), Bb = "MacIntel" === I && sa.standalone !== Ma, db = Qa && n(c, "Goanna/"), Ja = !db && Qa && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), eb = n(c, "Firefox/");
  n(c, "Opera/");
  var Vb = w.FNRBrowser, Ra = za(c, "AppleWebKit/"), kb = n(c, "Chrome/"), Za = n(fa, "Iron/"), Cb = n(c, "OPR/"), Mb = n(fa, "KHTML/"), Hb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var Nb = n(c, "Silk/"), pb = za(c, "SamsungBrowser/"), W = !pb && function() {
    for (var B = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ta, V = B.length; ta = B[--V];) {
      if (k(c, ta)) {
        return 2 > Ta(Pa) ? Pa : 0.9;
      }
    }
    B = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (V = B.length; ta = B[--V];) {
      if (k(c, ta)) {
        return Pa;
      }
    }
  }(), Db = xb && 534.3 >= Ra, lb = Kb(I), $a = lb && !k(c, I) && Kb(c);
  Q = Q && (Ra || Qa) && $a || !ia && zb;
  zb = !!w.ReactNativeWebView;
  lb = lb && function() {
    for (var B in w) {
      if (0 === B.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ab = ($a = w.puffinDevice) && $a.clientInfo, qb = ($a = ab && "iOS" === ab.os && ab.osVersion) && ab.model;
  ab = !ha && C.registerElement;
  var Ob = !ha && C.execCommand, fb = w.webkitCancelAnimationFrame, Pb = Ab && ab && "11.0.696.34" === kb, rb = w._firefoxTV_playbackStateObserverJava, Qb = za(c, "diordnA ");
  if ("Nitro" === I) {
    var t = 1, p = 8.5, R = 9, F = p;
  } else if ("Nintendo DSi" === I) {
    t = 2, p = Fa, R = 9, F = p;
  } else if ("New Nintendo 3DS" === I || k(c, "iPhone OS 6_0") && 320 === q && 240 === Va) {
    t = 4, p = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === I) {
    t = 3, p = Pa, Ra = 535;
  } else if (!I && k(fa, "Nintendo Switch;")) {
    t = 7, p = n(fa, "NintendoBrowser/");
  } else if (w.wiiu) {
    t = 6, p = n(fa, "NintendoBrowser/"), R = 16, F = n(fa, "AppleWebKit/") || (fb ? 536 : 534), p || (p = fb ? 4 : 2, k(fa, "Macintosh;") || k(fa, "Windows NT") && k(fa, "Touch"));
  } else if (ra && ra.wiiremote) {
    t = 5, p = n(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === I) {
    t = 9, p = n(fa, I + " ");
  } else if ("PSP" === I) {
    t = 8;
    p = n(c, "(PlayStation Portable); ");
    var sb = 3.2;
  } else if ("PlayStation 5" === I) {
    t = 12, p = n(fa, I + "/");
  } else if ("PlayStation 4" === I) {
    t = 11, p = n(fa, I + "/");
  } else if ("PlayStation 3" === I) {
    t = 10, p = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 "), 0 > va(p, "4.10") && (R = 27, F = p);
  } else if (k(c, "Xbox One")) {
    t = 14, p = 1;
  } else if (k(c, "Xbox")) {
    t = 13, p = 1;
  } else if (2 === Oa && k(c, "Sony/COM2/")) {
    t = 17;
    p = 2;
    sb = 3.4;
    var tb = !0;
  } else if (0 === I.indexOf("iP") || Gb || $a || Bb) {
    if ($a) {
      switch(p = $a, qb.substr(0, 4)) {
        case "iPho":
          var Ka = 0;
          n(qb, Ka);
          var ea = !0;
          break;
        case "iPad":
          Ka = 1;
          n(qb, Ka);
          var Ca = !0;
          break;
        case "iPod":
          Ka = 2;
          n(qb, Ka);
          var mb = !0;
      }
    } else {
      Gb ? p = Gb : (p = n(fa.split("_").join("."), "OS "), ib("isSecureContext", w), ib("enableWebGL", w), ib("sameOrigin", w));
      if (!p || Vb) {
        p = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : sa.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : hb.isNaN ? 9.2 : w.SharedWorker ? jb && jb.now ? 8 : 8.4 : Ob ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : x ? 4.3 : H ? 4.1 : 3.2;
      }
      var xa = q === 1.5 * Va || 1.5 * q === Va;
      0 === I.indexOf("iPhone") ? (Ka = 0, ea = !0) : 0 === I.indexOf("iPad") || Bb ? (Ka = 1, Ca = !0) : 0 === I.indexOf("iPod") && (Ka = 2, mb = !0);
    }
    R = !$a && (sa.standalone || (Ca || 12 > p) && ib("webkitFullscreenEnabled", C) || 11 <= p && 13 > p && sa.mediaDevices) ? 17 : 18;
    t = 24;
    F = p;
  } else if (k(c, "Kobo")) {
    t = 18, R = 22, F = 2.2, Ia = !0;
  } else if (k(c, "EBRD")) {
    t = 19, R = 22, F = 2.2;
  } else if (C = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    t = 29, p = C;
  } else if (w.onmoztimechange !== Ma) {
    t = 30, p = 18.1 > Ja ? "1.0.1" : 19 > Ja ? 1.1 : 27 > Ja ? 1.2 : 29 > Ja ? 1.3 : 31 > Ja ? 1.4 : 33 > Ja ? 2 : 35 > Ja ? 2.1 : 38 > Ja ? 2.2 : 45 > Ja ? 2.5 : 2.6, k(c, "Mobile") ? ea = !0 : k(c, "Tablet") ? Ca = !0 : k(c, "TV");
  } else if (w.palmGetResource) {
    t = 32, p = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (ea = !0);
  } else if (C = n(c, "Tizen ")) {
    t = 33, p = C, R = 25, F = pb, ea = !0;
  } else if (C = n(c, "Windows Phone ") || n(fa, "Windows Phone OS ") || Lb) {
    t = 23, p = C, ea = !0;
  } else if (Ha && "ARM" === I) {
    t = 23, p = 10, ea = !0;
  } else if (wa && k(fa, "ZuneWP")) {
    t = 23, p = 11 === ha ? 8.1 : 10 === ha ? 8 : 9 === ha ? 7.5 : 7 === ha ? 7 : "?", ea = !0;
  } else if (k(c, "FOMA;")) {
    t = 16, ea = !0;
  } else if (k(c, "SoftBank;")) {
    t = 16, ea = !0;
  } else if (k(c, "KFMUWI")) {
    var Ea = !0;
    p = 6.3;
    var Da = Ca = !0;
  } else if (k(c, "KFKAWI")) {
    Ea = !0, p = 6, Da = Ca = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    Ea = !0, p = 5, Da = Ca = !0;
  } else if (k(c, "KFGIWI")) {
    Ea = !0, p = 5, Da = Ca = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    Ea = !0, p = 5 <= Ta(ia) ? 5 : 4, Da = Ca = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    Ea = !0, p = 3, Da = Ca = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    Ea = !0, p = 2, Da = Ca = !0;
  } else if (k(c, "Kindle Fire")) {
    Ea = !0, p = 1, Da = Ca = !0;
  } else if (C = n(c, "Kindle/")) {
    t = 20, p = C, R = 22, F = 2.2;
  } else if (rb) {
    Ea = !0, p = ia || Qb, Da = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    Ea = !0, p = ia, Da = !0;
  } else if (k(c, "MeeGo")) {
    t = 34;
  } else if (k(c, "Maemo")) {
    t = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Hb) {
    t = 22, tb = !0;
  } else if ("WinCE" === I) {
    t = 21, tb = !0;
  } else if (0 === I.indexOf("Win")) {
    t = "Win16" === I ? 37 : "Win32" === I ? 38 : "Win64" === I ? 39 : 0, p = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === I.indexOf("Mac")) {
    t = "Mac68K" === I ? 41 : "MacPowerPC" === I || "MacPPC" === I ? 40 : "MacIntel" === I ? 42 : 0;
    if (C = n(c.split("_").join("."), "Mac OS X ")) {
      p = C;
    }
    var Rb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    t = 36, p = Pa, ea = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    t = 44;
  } else if (k(c, "FreeBSD")) {
    t = 45;
  } else if (k(c, "OpenBSD")) {
    t = 46;
  } else if (k(c, "NetBSD")) {
    t = 47;
  } else if (Ia && Qa) {
    k(c, "Android 4.4;") ? xa = {min:2.3} : 4 <= Ta(ia) ? xa = ia : xa = {min:2.2}, p = xa;
  } else if (Ia && ra) {
    ia ? xa = ia : xa = {min:1.6}, p = xa, k(c, "Tablet") ? Ca = !0 : ea = !0;
  } else if (ia) {
    p = ia, Ia = !0;
  } else if (Ab && Q || zb || lb) {
    var bb = !0;
    pb ? xa = {min:4.4} : xb && !Db || Fb || Cb ? xa = {min:4} : (xa = ia = wb.touchAction !== Ma ? {min:5} : ab ? 4.4 : x ? sa.connection ? w.searchBoxJavaBridge_ || xb ? hb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Ra ? 3 : 533 <= Ra ? H ? 2.3 : 2.2 : 530 <= Ra ? 2 : 1.5, W && (R = 25, F = W));
    p = xa;
    Ia = !0;
  } else {
    Pb ? (p = {min:5}, bb = Ia = !0) : Ab && (k(c, "Ubuntu") ? t = 48 : (C = n(c, "Mint/")) ? (t = 49, p = C) : (C = n(c, "Fedora/")) ? (t = 50, p = C) : t = k(c, "Gentoo") ? 51 : 52);
  }
  Ea || Ia && bb && Nb ? t = 28 : Ia && (t = t || 27);
  R || (Da = Da || Ia, ra ? (R = Da || tb || ea || Ca ? 9 : 8, F = Fa) : wa ? (xa = za(fa, "Trident/") + 4, R = tb || ea || Ca || mb ? 3 : Rb && 5 <= ha ? 7 : 2, F = ha) : Ha ? (R = 23 === t ? 6 : 5, F = n(fa, "Edge/")) : db ? (R = 13, F = db) : Qa ? (R = Da ? 12 : 11, F = Ja || eb) : pb ? (R = 25, F = pb) : (C = sb || n(c, "NetFront/")) ? (R = 19, F = C) : (C = n(c, "iCab")) ? (R = 20, F = C) : (C = K(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || cb && Pa) ? (R = 10, F = C, t || (k(c, "iPhone") ? 
  Ka = 0 : k(c, "iPad") ? Ka = 1 : k(c, "iPod") && (Ka = 2), Ka && (t = 24))) : yb ? (R = 26, F = Ub) : Mb ? (R = 15, F = Oa) : Ia && Db ? (R = 22, F = ia) : xb || Fb || Cb ? (R = Da ? 23 : 21, F = kb || Za) : Ia && ab ? (R = 24, F = 5 > Ta(ia) ? ia : kb) : Ia && (Pa || bb) ? (R = 22, F = ia) : kb ? (R = Da ? 23 : 21, F = kb) : Ra && (R = 16, F = Ra));
  t && (Wa[2] = t, p && (Wa[3] = S(p)));
  R && (Wa[0] = R, F && (Wa[1] = S(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Wa, w, C, sa, H, Ta, hb, Ma, za, k, Kb, ib, n, K) {
  function S(l) {
    if (w[0] === l) {
      return ha === ha + "" ? za(ha) : ha;
    }
  }
  function va(l) {
    var A = w[3];
    if (w[2] === l) {
      return A === A + "" ? za(A) : A;
    }
  }
  function c(l) {
    var A = c.i || (c.i = {}), X = A[l];
    if (X) {
      return X;
    }
    X = l.split("-");
    var da = X.length;
    if (2 > da) {
      return l;
    }
    for (; 1 < da;) {
      var ba = X[--da];
      X[da] = ba.charAt(0).toUpperCase() + ba.substr(1);
    }
    return A[l] = X.join("");
  }
  function fa(l, A, X) {
    l + "" === l && ("a" === l.charAt(2) && (X = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > x ? 117 : .9 > Q || 9 > q || 9 > x || Va ? 1 : 132 : parseInt(l, 16));
    X && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (A || 2));
  }
  var Oa = H.body, I = Oa.style, Ha, wb, ha = w[1], q = S(2) || S(3), Va = S(7), jb = S(5) || S(6), x = S(8) || S(9), Q = S(11) || S(12), Pa = Q && 0 <= w.conpare(ha, "1.9.1"), cb = S(13), ra = S(16), Fa = S(17) || S(18), Fb = S(10) || S(26), wa = S(21) || S(23), xb = S(24), Qa = S(22), yb = S(25), Ub = wa || xb || Qa || yb, Lb = wa && za(Ta.userAgent.split("Edg/")[1]), Gb = za(Ta.appVersion.split("Trident/")[1]) + 4, ia = va(37) || va(38) || va(39), zb = va(40) || va(41) || va(42) || va(43), Ia = 
  .9 > Q, Ab = (Va ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : Q && !Pa ? 1.4 <= Q ? "gck19" : 1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : Ia ? .8 <= Q ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  va(1) || va(2) || va(3) || va(4) || va(8) || va(9);
  var Bb, db, Ja, eb = 8 > q || 7.2 > x ? !1 : K, Vb = I.transform !== K ? "transform" : I["-o-transform"] !== K ? "-o-transform" : I["-ms-transform"] !== K ? "-ms-transform" : I.MozTransform !== K ? "-moz-transform" : I["-webkit-transform"] !== K ? "-webkit-transform" : "", Ra = [], kb = [], Za = [], Cb, Mb, Hb, Nb, pb = 525 > ra || 3.1 > Fa || 2.2 > Qa || 10 > x || Q && !Pa || S(26) || 10 > S(3) || va(34) || va(32) || va(3), W, Db, lb, $a, ab, qb, Ob, fb = Ma.now || function() {
    return +new Ma();
  };
  (function() {
    function l() {
      for (var u, L = 0, Y = fb(); L < ja.length;) {
        Y < ja[0].t ? ++L : (u = ja.splice(L, 1)[0], u.f(u.p));
      }
      M = ja.length ? k(l, D) : 0;
    }
    function A() {
      for (var u, L = 0; L < ba.length; ++L) {
        u = ba[L], u.f();
      }
    }
    function X() {
      ka && (ka = n(ka));
    }
    function da() {
      M && (M = Kb(M));
    }
    lb = function(u) {
      ba.length || (ka = ib(A, oa));
      ba.push({f:u, g:++ya});
      return ya;
    };
    $a = function() {
      ka && (X(), ka = ib(A, oa));
    };
    ab = X;
    var ba = [], oa = 500, ya = 0, ka;
    if (5 > q || Va) {
      C._wdb_onlooptimer = A, A = "_wdb_onlooptimer()";
    }
    W = function(u, L, Y) {
      ja.length || (M = k(l, D));
      ja.push({f:u, p:L, g:++aa, t:fb() + (D < Y ? Y : D)});
      return aa;
    };
    Db = function(u) {
      for (var L = ja.length, Y; Y = ja[--L];) {
        if (Y.g === u) {
          ja.splice(L, 1);
          break;
        }
      }
      return 0;
    };
    qb = function() {
      M && (da(), M = k(l, D));
    };
    Ob = da;
    var ja = [], D = Fa | 0 || 530 <= ra && 534 > ra ? 64 : 16, aa = 0, M;
    if (5 > q || Va) {
      C._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  var Pb, rb, Qb, t, p, R, F, sb, tb, Ka, ea, Ca, mb, xa, Ea, Da, Rb, bb, B, ta, V, Ua;
  (function() {
    function l(b, a, d) {
      var h = ["<", b], r = 1, E, P;
      if (a) {
        for (E in a) {
          var O = a[E];
          if (null != O && "" !== O) {
            if ("style" === E) {
              h[++r] = ' style="';
              for (P in O) {
                for (var f = ++r, e, g = [], m = P.split(""), v = m.length; v;) {
                  e = m[--v], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), g[v] = e;
                }
                h[f] = g.join("") + ":" + O[P] + ";";
              }
              h[++r] = '"';
            } else {
              "className" === E && (E = "class"), h[++r] = " " + E + '="' + O + '"';
            }
          }
        }
      }
      h[++r] = ">";
      null != d && (pa && "FONT" !== b ? h[++r] = "<FONT>" + A(d) + "</FONT>" : h[++r] = A(d));
      h[++r] = "</" + b + ">";
      return h.join("");
    }
    function A(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function X(b) {
      var a = "*" === b;
      b = pa ? a ? H.all : H.all.tags(b.toUpperCase()) : 6 > q && a ? H.all : H.getElementsByTagName(b);
      a = [];
      for (var d = 0, h = b.length; d < h; ++d) {
        a[d] = b[d];
      }
      return a;
    }
    function da(b) {
      return pa ? b.parentElement : b.parentNode;
    }
    function ba(b, a, d, h, r, E) {
      if (pa) {
        var P = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        var O = p(2 > b ? t(a) : a);
        O = 2 > b ? O.indexOf(a) + b : O.length;
        a.insertAdjacentHTML(P, l(d, h, r));
        a = p(a)[O];
        null != r && ("FONT" === d ? a.nodeType = 3 : (a.nodeType = 1, a.children[0].nodeType = 3));
      } else if (la) {
        a = H.createElement(l(d, h));
      } else {
        a = E ? H.createElementNS("http://www.w3.org/2000/svg", d) : H.createElement(d);
        if (h) {
          for (P in h) {
            if ((b = h[P]) || 0 === b) {
              switch(P) {
                case "class":
                case "className":
                  Rb(a, b);
                  break;
                case "style":
                  E = a.style;
                  for (O in b) {
                    E[O] = b[O];
                  }
                  break;
                default:
                  xa(a, P, b);
              }
            }
          }
          !x || "a" !== d && "A" !== d || !h.href || h.tabindex || xa(a, "tabindex", "-0", !0);
        }
        Ga || null != r && ya(a, r);
      }
      return a;
    }
    function oa(b, a) {
      if (pa) {
        return ba(2, b, "FONT", K, a);
      }
      var d = H.createTextNode("" + a);
      b.appendChild(d);
      return d;
    }
    function ya(b, a) {
      x ? (b.firstChild && (b.innerHTML = ""), oa(b, a)) : b.textContent = a;
    }
    function ka(b) {
      return "A" === ja(b) && u(b, "href", !0);
    }
    function ja(b) {
      return b.tagName.toUpperCase();
    }
    function D(b, a, d) {
      if (8 > x || 5.5 > q) {
        a = c(a);
      }
      b = b.getAttribute(a);
      return !d && x && "tabindex" === a ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    }
    function aa(b, a, d, h) {
      if (!h && x) {
        if ("tabindex" === a) {
          if ("-1" === d) {
            M(b, a, !0);
            return;
          }
          !d && ka(b) && (d = "-0");
        } else {
          "href" === a && "-0" !== D(b, "tabindex", !0) && "A" === ja(b) && aa(b, "tabindex", "-0", !0);
        }
      }
      if (8 > x || 5.5 > q) {
        a = c(a);
      }
      b.setAttribute(a, d);
    }
    function M(b, a, d) {
      if (!d && x) {
        if ("tabindex" === a) {
          "-0" !== D(b, a, !0) && ka(b) && aa(b, a, "-0", !0);
          return;
        }
        "href" === a && "-0" === D(b, "tabindex", !0) && M(b, "tabindex", !0);
      }
      if (8 > x || 5.5 > q) {
        a = c(a);
      }
      b.removeAttribute(a);
    }
    function u(b, a, d) {
      if (!d && x && "tabindex" === a && ka(b)) {
        return "-0" !== D(b, a, !0);
      }
      if (8 > x || 5.5 > q) {
        a = c(a);
      }
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    }
    function L(b, a) {
      9 > q ? b.className = a : b.setAttribute("class", a);
    }
    function Y(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    function qa(b, a, d) {
      if (8 > x || 5.5 > q) {
        a = c(a);
      }
      b.style[a] = d;
    }
    var pa = 5 > q;
    Ha = X("html")[0];
    wb = X("head")[0];
    Pb = function(b) {
      return C[b] || H[b] || H.getElementById(b);
    };
    rb = X;
    Qb = function(b) {
      var a = [], d = 0, h, r = -1;
      if (9 > q || !H.getElementsByClassName) {
        var E = 6 > q ? H.all : H.getElementsByTagName("*");
      } else {
        var P = !0;
        E = H.getElementsByClassName(b);
      }
      for (h = E.length; d < h; ++d) {
        var O = E[d];
        if (P || (pa || 1 === O.nodeType) && Y(O, b)) {
          a[++r] = O;
        }
      }
      return a;
    };
    t = da;
    p = function(b) {
      b = pa ? b.children : b.childNodes;
      for (var a = [], d = b.length; d;) {
        a[--d] = b[d];
      }
      return a;
    };
    R = function(b) {
      var a = !(7.03 < x && 7.2 > x) && b.children;
      b = a ? a : b.childNodes;
      for (var d = [], h = b.length, r = -1, E; h;) {
        if (E = b[--h], pa) {
          3 !== E.nodeType && (d[++r] = E);
        } else {
          if (a || 1 === E.nodeType) {
            d[++r] = E;
          }
        }
      }
      return d;
    };
    F = function(b, a, d, h, r) {
      a = ba(2, b, a, d, h, r);
      pa || (b.appendChild(a), Ga && null != h && (5.5 > q ? oa(a, h) : ya(a, h)));
      return a;
    };
    sb = function(b, a, d, h, r) {
      a = ba(0, b, a, d, h, r);
      pa || (da(b).insertBefore(a, b), Ga && null != h && (5.5 > q ? oa(a, h) : ya(a, h)));
      return a;
    };
    tb = oa;
    Ka = function(b, a) {
      if (pa) {
        return ba(0, b, "FONT", K, a);
      }
      var d = H.createTextNode("" + a);
      t(b).insertBefore(d, b);
      return d;
    };
    ea = function(b) {
      if (pa) {
        b.outerHTML = "";
      } else {
        return 5.5 > q && 1 === b.nodeType && (b.style.filter = ""), t(b).removeChild(b), b;
      }
    };
    var la = 9 > q, Ga = la;
    Ca = ja;
    mb = D;
    xa = aa;
    Ea = M;
    Da = u;
    Rb = L;
    bb = Y;
    B = function(b, a) {
      var d;
      if (!Y(b, a)) {
        if (d = b.className) {
          d += " ";
        }
        L(b, d + a);
      }
    };
    ta = function(b, a) {
      if (Y(b, a)) {
        var d = b.className.split(" ");
        d.splice(d.indexOf(a), 1);
        L(b, d.join(" "));
      }
    };
    V = qa;
    Ua = function(b, a) {
      var d = -1;
      if (5.5 > q || 7.1 > x) {
        if (q) {
          if (5.5 > q) {
            var h = "";
            var r = b.style.cssText.split(";");
            var E = -1;
            for (var P, O; P = r[++E];) {
              O = P.split(":")[0], h += ";" + O.toLowerCase() + ":" + P.substr(O.length + 1);
            }
            h = h.substr(1);
          } else {
            h = b.style.cssText;
          }
          if (h) {
            for (h = h.split(";"); r = h[++d];) {
              qa(b, r.split(":")[0], "");
            }
            d = -1;
          }
        } else {
          b.setAttribute("style", "");
        }
        if (a) {
          for (h = a.split(";"); r = h[++d];) {
            E = r.split(":")[0], qa(b, E, r.substr(E.length + 1));
          }
        }
      } else {
        9 > x || 1 > Q ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
  })();
  var Na, Wb, Eb, Ib, ub, Xb, Yb, La, Sb;
  (function() {
    function l() {
      return r ? P ? 2 : E ? 3 : 1 : 0;
    }
    function A(f) {
      Wb(C, "load", A);
      A = K;
      da(Ra, f, !0);
      Eb = Ra = K;
    }
    function X(f, e) {
      ub(function() {
        var g = D(f);
        e(g);
        g.addListener(e);
        return !0;
      });
    }
    function da(f, e, g) {
      for (var m = 0; m < f.length; ++m) {
        !0 === f[m](e) && (f.splice(m, 1), --m);
      }
      g && (f.length = 0);
    }
    function ba(f, e, g) {
      Ra || M.length || W(oa);
      M.push(f, e, g);
    }
    function oa() {
      var f = M, e;
      for (M = []; e = f.shift();) {
        da(e, f.shift(), f.shift());
      }
    }
    function ya(f, e, g, m) {
      if (pa) {
        f.removeEventListener(e, g, m ? u ? m : m.capture || !0 === m : !1);
      } else {
        m = L[e];
        var v = "on" + e, G, y;
        if (m) {
          if (la) {
            Ga.push(f, e, g);
          } else {
            e = 0;
            for (G = m.length; e < G; e += 2) {
              m[e] === f && (m[e + 1] === g ? m.splice(e, 1) : y = !0);
            }
            y || (Y ? f.detachEvent(v, ka) : q ? (f[v] = sa, f[v] = null) : delete f[v]);
          }
        }
      }
    }
    function ka(f) {
      var e = f || event, g = e.type;
      f = L[g];
      g = "on" + g;
      var m = 0, v = f.length, G;
      ++la;
      5 > q ? e = {type:event.type, target:event.srcElement, preventDefault:j, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : q ? (e.target = e.srcElement, e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : qa && (e.h = e.stopPropagation, e.stopPropagation = function() {
        G = !0;
      });
      for (; m < v; m += 2) {
        var y = f[m];
        if (y === this) {
          var ma = f[m + 1];
          5.5 > q ? (y[g] = ma, y[g](e), y[g] = ka) : ma.call(y, e);
        } else {
          7.2 > x && this === H && y === C && f[m + 1].call(y, e);
        }
      }
      if (q) {
        return e.preventDefault = e.stopPropagation = sa, e.preventDefault = e.stopPropagation = K, e.returnValue;
      }
      qa && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && e.target.getAttribute("href") && (b = !0), G && !b && e.h(), e.h = e.stopPropagation = K);
      --la;
      if (0 === la) {
        for (f = Ga; f.length;) {
          ya(f.shift(), f.shift(), f.shift());
        }
      }
      function j() {
        event.returnValue = !1;
      }
      j = !1;
    }
    function ja() {
      var f = 9 === aa.offsetWidth;
      Yb !== f && ba(kb, Yb = f);
    }
    var D = C.matchMedia, aa, M = [];
    Ra.push(function() {
      X = K;
      aa = F(Oa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Eb(function() {
        M.length && W(oa);
      });
    });
    Na = function(f, e, g, m) {
      if (pa) {
        f.addEventListener(e, g, m ? u ? m : m.capture || !0 === m : !1);
      } else {
        m = L[e];
        var v = "on" + e, G;
        if (m) {
          e = 0;
          for (G = m.length; e < G; e += 2) {
            if (m[e] === f && m[e + 1] === g) {
              return;
            }
          }
          m.push(f, g);
        } else {
          m = L[e] = [f, g];
        }
        Y ? f.attachEvent(v, ka) : (g = f[v], g !== ka && "function" === typeof g && m.unshift(f, g), f[v] = ka);
      }
    };
    Wb = ya;
    var u = !q && !Va && (new hb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), L = {}, Y = !1, qa = 525.13 > ra, pa = !qa && !Va && C.addEventListener, la = 0, Ga = [], b;
    qa && Ha.addEventListener("click", function(f) {
      if (b) {
        return b = !1, f.preventDefault(), !1;
      }
    });
    Eb = function(f) {
      Ra.push(f);
    };
    Ib = function(f) {
      d && d.push(f);
    };
    if (419.3 >= ra) {
      var a = function() {
        if (a) {
          var f = H.readyState;
          "loaded" === f || "complete" === f ? (a = K, A()) : W(a);
        }
      };
      W(a);
    } else {
      Na(C, "load", A);
    }
    if (q || !Ia && 1.8 > Q) {
      Na(C, "unload", function(f) {
        da(d, f, !0);
      });
      var d = [];
    }
    ub = function(f) {
      kb.push(f);
    };
    Eb(function() {
      ja();
      lb(ja);
    });
    Xb = function(f) {
      Za && Za.push(f);
    };
    var h = 60 > Q || cb, r, E, P;
    if (89 <= Q || 89 <= wa || ia && 79 <= Lb || D && (D("(forced-colors:none)").matches || D("(forced-colors:active)").matches)) {
      Sb = !0, X("(forced-colors:active)", function(f) {
        r = f.matches;
        La = l();
        ba(Za, La);
      });
    } else if (10 <= q || jb || ia && Lb) {
      Sb = !0, X("(-ms-high-contrast:black-on-white)", function(f) {
        r = E = f.matches;
        La !== l() && (La = l(), ba(Za, La));
      }), X("(-ms-high-contrast:white-on-black)", function(f) {
        r = P = f.matches;
        La !== l() && (La = l(), ba(Za, La));
      }), X("(-ms-high-contrast:active)", function(f) {
        r = f.matches;
        La !== l() && (La = l(), ba(Za, La));
      });
    } else if (ia && (q || Q && 0 <= w.conpare(ha, "1.8.1") || cb)) {
      var O = function() {
        function f(m, v) {
          if (v && "transparent" === m) {
            return 382.5;
          }
          if ("#" === m.charAt(0)) {
            return parseInt("0x" + m.substr(1, 2), 16) + parseInt("0x" + m.substr(3, 2), 16) + parseInt("0x" + m.substr(5, 2), 16);
          }
          var G = m.split("(")[1].split(",");
          return za(G[0]) + za(G[1]) + za(G[2]);
        }
        var e = H.defaultView;
        var g = e ? e.getComputedStyle(aa, null) : aa.currentStyle;
        e = (g && g.color || "").split(" ").join("");
        g = (g && g.backgroundColor || "").split(" ").join("");
        e && (r = "#123456" !== e && "rgb(18,52,86)" !== e, E = f(e) < f(g, !0), P = f(e) > f(g, !0), La !== l() && (La = l(), ba(Za, La, h)));
      };
      ub(function(f) {
        if (f) {
          return V(aa, "color", "#123456"), V(aa, "backgroundColor", "#123456"), h ? (O(), Za = K) : lb(O), O = K, !0;
        }
      });
    } else {
      Za = l = K;
    }
  })();
  (function() {
    function l(z) {
      switch(z) {
        case 1:
          return pa;
        case 2:
          return !!la;
        case 3:
          return !!Ga;
        case 4:
          return !!b;
        case 5:
          return d;
        case 6:
          return a && !aa;
      }
      return !1;
    }
    function A(z) {
      h(z);
      ma && !z && ea(ma);
      h = r = E = P = O = f = e = G = y = ma = T = K;
    }
    function X(z) {
      H.fonts.load('1.6em "' + z + '"').then(function() {
        var J;
        (J = oa(r)) ? W(A, J) : da(!0);
      }, function() {
        eb !== K ? ya(eb) : Cb(ya);
      });
    }
    function da(z) {
      z && (v = fb());
      (z = oa(r, g)) ? A(z) : (z = g, H.hidden || H.msHidden || H.mozHidden || H.webkitHidden ? (v = fb(), z = !1) : z = z < fb() - v, z ? G ? ka() : D ? A(0) : eb !== K ? ya(eb) : Cb(ya) : W(da));
    }
    function ba() {
      return F(Oa, 5 > q ? "div" : "span", {"aria-hidden":"true", className:E}, L);
    }
    function oa(z) {
      var J = 0, Z = -1, N = (Y || !1) && [];
      if (!T) {
        var U = -1;
        var ca;
        y = ba();
        for (T = []; ca = qa[++U];) {
          V(y, "fontFamily", ca), T[U] = y.offsetWidth;
        }
      }
      for (5 > q ? y || (y = ba()) : t(y) || Oa.appendChild(y); U = qa[++Z];) {
        V(y, "fontFamily", '"' + z + '",' + U);
        var na = y.offsetWidth;
        if (Y) {
          N[Z] = na;
        } else {
          if (na !== T[Z]) {
            J = 1;
            break;
          }
        }
      }
      if (Y && na === N[0] && na === N[1]) {
        for (J = 1, Z = -1; 0 <= (na = T[++Z]);) {
          if (na === N[0] && na === N[1] && na === N[2]) {
            J = 0;
            break;
          }
        }
      }
      !q && J && f && (y.textContent = f, na = y.offsetWidth, y.textContent = e, J = na === y.offsetWidth ? 2 : 1, y.textContent = L);
      y = ea(y);
      return J;
    }
    function ya(z) {
      z ? (G = !0, g = u, ka()) : A(0);
    }
    function ka() {
      if (P) {
        for (; P.length;) {
          var z = P.shift(), J = P.shift();
          if (l(z)) {
            ma = Nb(J, ja, O, ma, m);
            return;
          }
        }
      }
      A(0);
    }
    function ja(z) {
      z ? da(!0) : ka();
    }
    kb.splice(0, 0, function() {
      if (Yb) {
        Ja = 8 <= q || jb || 9.5 <= x || Pa || cb || 522 <= ra || 3 <= Fa || Fb || Ub ? 3 : 7.2 <= x ? 2 : 6 <= x || Q ? 1 : 0;
        if (!Ja && !q && !Va) {
          var z = F(Oa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ja = 6 <= z.offsetWidth ? 2 : 0;
          ea(z);
        }
        return !0;
      }
    });
    Cb = !1 === eb ? function(z) {
      W(z, !1);
    } : function(z) {
      function J(U) {
        N && (N = Db(N), eb = U, Z.onload = Z.onerror = sa, W(z, U));
      }
      if (eb !== K) {
        W(z, eb);
      } else {
        var Z = new Image(), N = W(J, !1, 99);
        Z.onerror = function() {
          J(!1);
        };
        Z.onload = function() {
          J(1 === Z.width * Z.height);
        };
        Z.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > q && Eb(function() {
      var z = F(Oa, "div");
      Ua(z, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Bb = 1 < z.offsetHeight;
      ea(z);
    });
    Mb = function(z, J) {
      function Z() {
        if (U || !ca || N.complete) {
          var na = !!N.width;
          db = db || na;
          W(z, na);
          N.onerror = N.onload = sa;
          N = z = K;
        } else {
          --ca, W(Z);
        }
      }
      var N = new Image(), U, ca = 99;
      N.onerror = function() {
        U = !0;
      };
      N.onload = function() {
        U = !0;
      };
      N.src = J;
      W(Z);
    };
    Hb = function(z, J, Z, N, U, ca, na, Sa) {
      h = z;
      r = J;
      E = Z;
      P = N;
      O = U;
      f = ca;
      e = na;
      g = m = Sa || M;
      S(10) ? W(A, 1) : pb ? W(A, 0) : !H.fonts || 603 > ra || 11 > Fa ? da(!0) : X(r);
    };
    var D = 9 > q, aa = 6 > wa || x || 530 > ra || 5 > Fa || va(10), M = 5E3, u = 500, L = "mmmmmmmmmmlliiiiiiiii", Y = 9 <= wa && 18 > wa || 3 > Qa || 7 > Fa || ra && 0 >= w.conpare(ha, "536.11"), qa = ["monospace", "sans-serif", "serif"], pa = 14 <= jb || 36 <= wa || 39 <= Q || 3 <= cb || 602 <= ra && 0 <= w.conpare("10.12", zb) || 10 <= Fa, la = 6 <= wa || Q && 0 <= w.conpare(ha, "1.9.2") || cb || 533 <= ra || 5 <= Fa || 4.4 <= Qa || 11.5 <= x || jb || 9 <= S(2) || 10 <= S(3), Ga = 2 <= wa || 
    Pa || cb || 525 <= ra || 4 <= Fa || 2.2 <= Qa || 10.1 <= x || jb || 9 <= S(2) || 10 <= S(3), b = Ga, a = 5.1 <= ia && 5.2 >= ia && 40 > wa || 6 <= ia && 6.1 > ia && 51 > wa || 37 > wa || 525 <= ra || 3.1 <= Fa || 3 <= Qa || 11.5 <= x, d = 4 <= S(2) || 10 <= S(3), h, r, E, P, O, f, e, g, m, v, G, y, ma, T;
  })();
  (function() {
    Nb = function(D, aa, M, u, L) {
      if (A) {
        W(aa, !1);
      } else {
        var Y;
        if (u) {
          if (wa && u.href) {
            var qa = u.cloneNode();
            u.parentNode.insertBefore(qa, u);
            ea(u);
          } else {
            qa = u;
          }
        } else {
          qa = F(wb, "link", {type:"text/css", rel:"stylesheet"});
        }
        if (!ya) {
          (Y = Pb(M)) ? Ea(Y, "id") : Y = F(Oa, "div", {"aria-hidden":"true", className:M});
          var pa = Y.offsetWidth;
          xa(Y, "id", M);
        }
        ka(qa, D, aa, Y, pa, L || l);
        return qa;
      }
    };
    var l = 5E3, A = Q && 0 > w.conpare(ha, "0.9.1"), X = 11 <= q || jb || 9 <= x && 9.5 > x, da = 11 > q, ba = 7.2 <= x && 7.5 > x, oa = 9 > Q && !A || 19 > wa || 4.3 > Qa || 2 > yb || 536 > ra || 6 > Fa || 7 <= x && 9 > x && !ba, ya = !A && !X && !da && !ba && !oa, ka = ya ? function(D, aa, M) {
      D.onload = j;
      D.onerror = function() {
        D.onload = D.onerror = null;
        W(M, !1);
      };
      D.href = aa;
      function j() {
        D.onload = D.onerror = null;
        W(M, !0);
      }
      j = !1;
    } : X ? function(D, aa, M, u, L) {
      D.onload = function() {
        W(M, ja(u, L));
        ea(u);
        D.onload = null;
        u = K;
      };
      D.href = aa;
    } : da ? function(D, aa, M, u, L) {
      D.onreadystatechange = function() {
        if ("loaded" === D.readyState || "complete" === D.readyState) {
          W(M, ja(u, L)), ea(u), u = K, D.onreadystatechange = sa;
        }
      };
      D.href = aa;
    } : oa || ba ? function(D, aa, M, u, L, Y) {
      function qa() {
        la && (Ga = Db(Ga), b = fb() + 999, W(pa, 0, 99), oa ? la.onerror = null : la.removeEventListener("load", qa, !1), la = K);
      }
      function pa() {
        ja(u, L) ? (ea(u), W(M, !0), u = M = K) : fb() < b ? W(pa, 0, 99) : (ea(u), W(M, !1), u = M = K);
      }
      var la = new Image(), Ga = W(qa, 0, Y), b;
      oa ? la.onerror = qa : la.addEventListener("load", qa, !1);
      la.src = D.href = aa;
    } : K, ja = !ya && !A && function(D, aa) {
      return D.offsetWidth !== aa;
    };
  })();
  var Tb = String.fromCharCode, gb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Tb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Zb = gb[7], jc = gb[113], ec = Tb(160);
  Tb(8194);
  var fc = gb[31], $b = gb[30], gc = gb[63], kc = gb[125], lc = gb[126], mc = Tb(59648), hc = (9 === q || Q && 0 <= w.conpare(ha, "1.8.1") || cb) && !Sb, nb = [], ob, Xa, Jb = 7.2 > x ? function() {
    ob = !ob;
    for (var l = -1, A; A = nb[++l];) {
      -1 !== A.className.indexOf("pbAlp") ? V(A, "display", ob ? "" : "none") : (B(A, ob ? "pbChrCS" : "pbChr00"), ta(A, ob ? "pbChr00" : "pbChrCS"));
    }
  } : hc ? function() {
    ob = !ob;
    for (var l = -1, A; A = nb[++l];) {
      V(A, "opacity", ob ? 1 : 0);
    }
  } : K;
  var ac = Wa.startBlinkingIfCursor = function(l) {
    Jb ? bb(l, "pbChrCS") && (Xa || !x && !La || (Xa = ib(Jb, 400)), -1 === nb.indexOf(l) && nb.push(l)) : nb = K;
  };
  Wa.stopBlinkingIfCursor = function(l) {
    Jb && (l = nb.indexOf(l), 0 <= l && (nb.splice(l, 1), !nb.length && Xa && (n(Xa), Xa = 0)));
  };
  hc && Xb(function(l) {
    l ? Xa || (Xa = ib(Jb, 400)) : Xa && (n(Xa), Xa = 0);
  });
  Jb && Ib(function() {
    Xa && n(Xa);
  });
  Sb || Xb(function(l) {
    l ? (xa(Ha, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Vb || 9 === q || 5.5 <= q && 9 > q && Bb) && B(Ha, "jsCanRotate")) : (Ea(Ha, "forced-colors"), ta(Ha, "jsCanRotate"));
  });
  (function() {
    function l() {
      var a, d;
      l = K;
      u.length && (oa(a = u.shift(), u.shift(), u.shift(), u.shift()), (d = u.shift()) && W(d, a));
    }
    function A(a) {
      a && B(Oa, "pbList-noWebFont");
      l();
    }
    function X(a) {
      (L = a) ? l() : db ? A(!0) : db !== K ? l() : Mb(A, Y);
      X = Hb = A = K;
    }
    function da() {
      da = K;
      Hb(X, "PB-100", "js-myIconFont-testRendering", [1, Ya + "pbFont/woff2.css", 2, Ya + "pbFont/woff.css", 3, Ya + "pbFont/ttf.css", 5, Ya + "pbFont/eot.css", 6, Ya + "pbFont/svg.css"], "js-myIconFont-testCssReady", "\u208b\u2081", gc);
    }
    function ba(a) {
      this.focus();
      a.preventDefault();
      a.stopPropagation();
    }
    function oa(a, d, h, r) {
      function E(m, v) {
        for (var G = p(m), y = -1, ma; ma = G[++y];) {
          switch(ma.nodeType) {
            case 1:
              E(ma, v);
              break;
            case 3:
              ma.data && O(ma.data) && v.push(ma);
          }
        }
      }
      function P(m, v) {
        var G = m.children, y = 0, ma = G.length;
        if (ma) {
          for (; y < ma; ++y) {
            P(G[y], v);
          }
        } else {
          (G = m.innerText) && O(G) && v.push(m);
        }
      }
      function O(m) {
        return m.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], e;
      if (l) {
        -1 === u.indexOf(a) && (u.push(a, d, h, l, r), qa && da && da());
      } else {
        var g = u.indexOf(a);
        0 <= g && u.splice(g, 5);
        for (5 > q ? P(a, f) : E(a, f); e = f.shift();) {
          g = 5 > q ? e.innerText : e.data, 2 !== L ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join($b)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join($b)), L && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(gc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(mc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(kc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(lc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(fc)), !d || !h && db ? ya(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(jc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Zb).split("&amp;").join("&"), e, d, h) : 5 > q ? e.innerText = g : e.data = g;
        }
        r && W(r, a);
      }
    }
    function ya(a, d, h, r) {
      function E(Aa, Ba) {
        for (var vb = ""; Ba;) {
          Ba & 1 && (vb += Aa), Ba >>= 1, Aa += Aa;
        }
        return vb;
      }
      function P(Aa, Ba, vb) {
        for (var bc, nc = -1, cc, dc; bc = Ba[++nc];) {
          for (; 0 <= (cc = Aa.indexOf(bc));) {
            dc = bc.length, Aa = Aa.substr(0, cc) + E(vb, dc) + Aa.substr(cc + dc);
          }
        }
        return Aa;
      }
      function O(Aa) {
        var Ba = za(Aa), vb = "" + Ba;
        return 0 < Ba && Ba === Ba | 0 && (Ba = Aa.indexOf(vb) + vb.length, Ba <= Aa.length) ? Ba : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), e = 5 > q || 1 === d.nodeType, g = [], m = "", v, G = -1, y, ma, T, z;
      if (e) {
        if (Ga) {
          var J = d.style.visibility;
          V(d, "visibility", "hidden");
        }
        d.innerHTML = "";
      }
      if (b) {
        var Z = d;
        d = H.createDocumentFragment();
      }
      if (function(Aa) {
        var Ba = Aa.indexOf("P");
        if (-1 === Ba) {
          return !1;
        }
        Ba = za(Aa.charAt(Ba + 1));
        return 0 <= Ba && 9 >= Ba;
      }(a)) {
        m = E("+", a.length);
      } else {
        0 <= (v = O(a)) && (m = E("|", v), G = v, --G);
        for (; v = a.charAt(++G);) {
          v === Zb || y ? (m += "~", v === Zb && (y = !y)) : m += v;
        }
        m = P(m, M, "^");
        m = P(m, D, "{");
        m = P(m, aa, "}");
      }
      G = 0;
      for (y = a.length; G < y; ++G) {
        v = a.charAt(G);
        var N = v === ec;
        var U = " " === v;
        v = N ? " " : v;
        var ca = m.charAt(G);
        var na = (ma = Sa) && N;
        var Sa = "|" === ca;
        ca = f["+|~{}^".indexOf(ca) + 1];
        if ("\n" !== v) {
          if (L || !db || r) {
            if (2 === L) {
              if ("\u1d47/\u1d04" === a.substr(G, 3)) {
                v = "\u1d47/\u1d04", G += 2;
              } else {
                switch(a.substr(G, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    v = a.substr(G, 2), ++G;
                }
              }
            }
            h || (T = U && "str" === ca ? "pbList-strsp" : N ? "" : !U && ca ? "pbList-" + ca : "");
          } else {
            T = gb.indexOf(v), T = -1 === T ? "" : gb.indexOf(v).toString(16).toUpperCase(), T = (T = 1 === T.length ? "0" + T : T) ? "pbChr" + T : "", T = h ? T || "" : U && "str" === ca ? "pbList-strsp" : U || !T ? "" : ca ? (T ? T + " " : "") + "pbList-" + ca : T;
          }
          ca = K;
          na ? (v = 6 <= q && 8 > q ? " " : ec, T = "") : Sa && (Q && !Pa || 9.5 > x) ? (Sa && !ma && (z = 4 - (za(a.substr(G)) + "").length), 7.5 > x ? ca = la ? "position:relative;top:-4px;left:" + 12 * z + "px" : {position:"relative", top:"-4px", left:12 * z + "px"} : ca = la ? "position:relative;left:" + 12 * z + "px" : {position:"relative", left:12 * z + "px"}) : U && 7.5 > x && (T = "pbList-strsp");
          la ? g.push("<font" + (T ? ' class="' + T + '"' : "") + (ca ? ' style="' + ca + '"' : "") + ">" + v + "</font>") : e || b ? F(d, "font", {"class":T, style:ca}, v) : sb(d, "font", {"class":T, style:ca}, v);
        } else {
          ma = Sa = !1, la ? g.push(v) : e || b ? tb(d, v) : Ka(d, v);
        }
      }
      if (e) {
        la ? d.innerHTML = g.join("") : b && Z.appendChild(d), Ga && V(d, "visibility", J);
      } else {
        if (la) {
          a = H.createElement("font");
          for (a.innerHTML = g.join(""); g = a.firstChild;) {
            d.parentNode.insertBefore(g, d);
          }
          ea(d);
        } else {
          b ? Z.parentNode.replaceChild(d, Z) : ea(d);
        }
      }
    }
    1.9 > Q && ub(function(a) {
      if (a) {
        a = rb("*");
        for (var d = 0, h = a.length, r; d < h; ++d) {
          r = a[d], "B" !== Ca(r) && -1 !== (" " + r.className).toLowerCase().indexOf(" pbchr") && (Da(r, "title") || xa(r, "title", r.textContent), r.textContent = " ");
        }
        return !0;
      }
    });
    ub(function(a) {
      if (a) {
        a = Qb("pbChrCS");
        for (var d = 0, h = a.length; d < h; ++d) {
          ac(a[d]);
        }
        return !0;
      }
    });
    var ka = [], ja = Q && 0 > w.conpare(ha, "0.9.9");
    ub(function(a) {
      function d(J) {
        var Z = mb(J, "pbTip");
        if (Z) {
          var N = Z.charAt(0);
          var U = "_" === N;
          Z = (U ? Z.charAt(2) : N).toUpperCase().charCodeAt(0) - 65;
          f ? F(J, "div", {style:{left:7 * Z + 3 + "px"}}) : (N = mb(J, "title"), Ea(J, "pbTip"), Ea(J, "title"), U = F(J, "div", {className:"pbTip" + (U ? "Btm" : ""), style:{width:N.length + r + "em", left:7 * Z - (ja ? 0 : 5) + "px"}}, N), U = F(U, "div"), .9 <= Q && ja && V(U, "left", "2px"));
        }
        O && 0 <= J.className.indexOf("pbColor") && F(J, "u");
      }
      function h(J, Z) {
        var N = mb(J, "pbGhst"), U = J.className, ca = U.split("pbCsr")[1] || "", na = U.split("pbAlp")[1] || "";
        if ("CS" === N) {
          var Sa = "_";
        } else {
          Sa = N, 3 === Sa.length && (Sa = Sa.substr(0, 2)), Sa = gb[parseInt(Sa, 16)] || "~";
        }
        var Aa;
        ca = ca.split(" ")[0];
        if (na = za(na.split(" ")[0])) {
          E && (U = U.split("pbChr")[1].split(" ")[0], V(J, "backgroundPosition", fa(U, 2, ma) + "px " + -24 * (10 - na) + "px")), !Z && P && sb(J, "a").appendChild(J);
        }
        N && (na = 10 - na, E && (Aa = {backgroundPosition:fa(N, 2, ma) + "px " + -24 * (10 - na) + "px"}), Ea(J, "pbGhst"), m = sb(J, "b", {className:"pbChr" + N + " pbCsr" + ca + " pbAlp" + na, style:Aa}, Sa), ac(m));
        ac(J);
      }
      if (a) {
        var r = 6 > q ? 2 : 0, E = 7.2 > x || .9 > Q || Va, P = 1.1 === Q, O = 1.4 > Q;
        a = rb("SAMP");
        var f = 8 === q, e = Ja, g, m, v, G, y;
        Bb && B(Oa, "pbLCD-AX");
        if (a.length) {
          for (v = -1; g = a[++v];) {
            if (bb(t(g), "pbLCD")) {
              var ma = bb(g, "PB-120") || bb(g, "FX-795P");
              var T = R(g);
              for (g = T.length; y = T[--g];) {
                switch(Ca(y)) {
                  case "A":
                    (2 > e || f) && d(y);
                    if (2 > e) {
                      var z = R(y);
                      for (G = z.length; G;) {
                        h(z[--G], !0);
                      }
                    }
                    Fb ? xa(y, "href", "javascript:void(0)") : (Na(y, "click", ba), ka.push(y));
                    break;
                  case "B":
                    2 > e && h(y, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ib(function() {
      for (var a; a = ka.shift();) {
        Wb(a, "click", ba);
      }
    });
    6 === q && (new hb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(H);
    var D = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), aa = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), M = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + $b + fc).split(""), u = [], L, Y, qa;
    if (.9 <= Q && 0 >= w.conpare(ha, "0.9.1")) {
      B(Ha, "pbLCD-gecko09To091");
      var pa = !0;
    }
    ub(function(a) {
      if (a) {
        Y = Ya + "pbFont/x3mask" + (pa ? ".gecko0.9.1.gif" : ".png");
        a = rb("*");
        for (var d = -1, h, r; h = a[++d];) {
          bb(h, "pbList") ? (r = mb(h, "pbskip"), oa(h, 0 <= r.indexOf("prettify"), 0 <= r.indexOf("fallback:img"))) : bb(h, "pbFont") && oa(h, !0, !0);
        }
        u.length && da();
        return !0;
      }
    });
    var la = !1, Ga = 8 > x, b = !la && !Ga && !(6 > q) && H.createDocumentFragment && !!Oa.replaceChild;
    Wa.prettify = oa;
    Wa.fixLiga = function(a, d) {
      oa(a, !0, !0, d);
    };
  })();
  var ic = H.scripts || rb("script");
  var Ya = ic[ic.length - 1].src.split("/");
  --Ya.length;
  (Ya = Ya.join("/")) && (Ya += "/");
  6.1 > Fa && Na(C, "scroll", $a);
  Ib(ab);
  6.1 > Fa && Na(C, "scroll", qb);
  Ib(Ob);
  10 > q && (11 !== Gb || 5 !== q) || (9 > x || 1 > Q || !Va && !C.addEventListener ? H.write('<link href="' + Ya + Ab + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : Eb(function() {
    F(wb, "link", {href:Ya + "" + Ab, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

