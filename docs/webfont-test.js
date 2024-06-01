/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Function.prototype.apply||(Function.prototype.apply=function(_x,_y){var f=this,x=_x!=null?_x:{},y=_y||[],j=y.length,i=0,r,a,u;x.__apply=f;if(!x.__apply)a=x.constructor.prototype.__apply=f;switch(j){case 0:r=x.__apply();break;case 1:r=x.__apply(y[0]);break;case 2:r=x.__apply(y[0],y[1]);break;case 3:r=x.__apply(y[0],y[1],y[2]);break;case 4:r=x.__apply(y[0],y[1],y[2],y[3]);break;case 5:r=x.__apply(y[0],y[1],y[2],y[3],y[4]);break;case 6:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5]);break;case 7:r=x.__apply(y[0],
y[1],y[2],y[3],y[4],y[5],y[6]);break;case 8:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);break;case 9:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);break;default:r=[];for(;i<j;++i)r[i]="y["+i+"]";r=eval("x.__apply("+r.join(",")+")")}a?delete x.constructor.prototype.__apply:x.__apply=u;return r});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var r, tb;
ua = [];
ua.conpare = function(ab, B) {
  var C = 0, qa, I, Wa = (ab + "").split("."), jb = (B + "").split("."), Sa = Wa.length, Aa, l;
  for (qa = jb.length; "0" === Wa[Sa - 1];) {
    --Sa;
  }
  for (; "0" === jb[qa - 1];) {
    --qa;
  }
  for (I = Sa < qa ? Sa : qa; C < I; ++C) {
    Aa = Wa[C] - 0;
    l = jb[C] - 0;
    if (Aa !== l) {
      return Aa > l ? 1 : -1;
    }
  }
  return Sa > qa ? 1 : Sa === qa ? 0 : -1;
};
(function(ab, B, C, qa, I, Wa, jb, Sa) {
  function Aa(F, la) {
    var fa = Wa(F.split(la)[1]);
    return 0 <= fa ? fa : 0;
  }
  function l(F, la) {
    return 0 <= F.indexOf(la);
  }
  function Pb(F) {
    return l(F, "Linux armv") || l(F, "Linux aarch") || l(F, "Linux i686") || l(F, "Linux x86_64");
  }
  function kb(F, la) {
    for (var fa in la) {
      if (fa === F) {
        return !0;
      }
    }
  }
  function n(F, la) {
    var fa = "", Ta = -1, Ba;
    if (F = F.split(la)[1]) {
      for (; Ba = F.charCodeAt(++Ta);) {
        if (48 <= Ba && 57 >= Ba || 46 === Ba) {
          fa += F.charAt(Ta);
        } else {
          break;
        }
      }
      for (Ta = fa.length; Ta;) {
        if (46 === fa.charCodeAt(--Ta)) {
          fa = fa.substr(0, Ta);
        } else {
          break;
        }
      }
    }
    return fa;
  }
  function J(F) {
    for (var la = arguments, fa = 1, Ta = la[0], Ba; fa < la.length; ++fa) {
      0 > wa(Ta, Ba = la[fa]) && (Ta = Ba);
    }
    return Ta;
  }
  function W(F) {
    return F === F + "" ? F : F === F - 0 ? "" + F : F.min && F.max ? F.min + "~" + F.max : F.min ? F.min + "~" : "~" + F.max;
  }
  var wa = ab.conpare, c = qa.userAgent, ma = qa.appVersion, Ua = Wa(ma) || 0, K = qa.platform, Pa = C.documentElement, wb = Pa && Pa.style, na = C.documentMode, p = I.width, Xa = I.height, lb, A, S, Va, gb, oa, Ea, Ib, va, xb, Ia, yb, Yb, Qb, Jb, pa, zb, Ja, Ab, Bb, cb, Ka, db, Zb, Qa, mb, eb, Cb, Rb, Kb, Sb, nb, X, Db, ob, Ya, Za, sb, Tb, Lb, Ub, hb, Mb, v, q, N, T, Eb, xa, Ga, La, Ha, fb, Ma, Na, ta, pb, Fb;
  I = B.HTMLAudioElement;
  lb = B.performance;
  A = B.Int8Array;
  S = B.ontouchstart !== Sa;
  Va = n(ma, "Version/") || n(c, "Version/");
  gb = B.operamini;
  oa = !gb && B.opera;
  Ea = oa && ("function" === typeof oa.version ? oa.version() : J(n(c, "Opera "), Va, Ua));
  Ib = B.opr;
  va = !oa && (C.all || na);
  na = va && (na ? na : B.XMLHttpRequest ? C.getElementsByTagName ? 7 : 4 : C.compatMode ? 6 : (0).toFixed ? 5.5 : B.attachEvent ? 5 : 4);
  Pa = !va && Pa.msContentZoomFactor;
  xb = !Pa && (B.chrome || B.chromium);
  Ia = !va && function() {
    for (var F in wb) {
      if (0 === F.indexOf("Moz")) {
        return !0;
      }
    }
  }();
  yb = l(c, "UCWEB");
  Yb = yb && n(c, " U2/");
  Qb = yb && n(c, "; wds ");
  Jb = n(c.split("_").join("."), "; iPh OS ");
  pa = n(c, "; Adr ");
  zb = l(ma, "YJApp-ANDROID");
  Ja = l(K, "Android") || Ia && l(ma, "Android") || zb;
  pa = n(K, "Android ") || n(ma, "Android ") || n(c, "Android ") || pa;
  Ab = l(K, "Linux");
  Bb = "MacIntel" === K && qa.standalone !== Sa;
  cb = Ia && n(c, "Goanna/");
  Ka = !cb && Ia && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; "));
  db = n(c, "Firefox/");
  n(c, "Opera/");
  Zb = B.FNRBrowser;
  Qa = Aa(c, "AppleWebKit/");
  mb = n(c, "Chrome/");
  eb = n(ma, "Iron/");
  Cb = n(c, "OPR/");
  Rb = n(ma, "KHTML/");
  Kb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  Sb = n(c, "Silk/");
  nb = Aa(c, "SamsungBrowser/");
  X = !nb && function() {
    for (var F = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    la, fa = F.length; la = F[--fa];) {
      if (l(c, la)) {
        return 2 > Wa(Va) ? Va : 0.9;
      }
    }
    F = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (fa = F.length; la = F[--fa];) {
      if (l(c, la)) {
        return Va;
      }
    }
  }();
  Db = xb && 534.3 >= Qa;
  ob = Pb(K);
  Ya = ob && !l(c, K) && Pb(c);
  S = S && (Qa || Ia) && Ya || !pa && zb;
  zb = !!B.ReactNativeWebView;
  ob = ob && function() {
    for (var F in B) {
      if (0 === F.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  Za = (Ya = B.puffinDevice) && Ya.clientInfo;
  sb = (Ya = Za && "iOS" === Za.os && Za.osVersion) && Za.model;
  Za = !na && C.registerElement;
  Tb = !na && C.execCommand;
  Lb = B.webkitCancelAnimationFrame;
  Ub = Ab && Za && "11.0.696.34" === mb;
  hb = B._firefoxTV_playbackStateObserverJava;
  Mb = Aa(c, "diordnA ");
  if ("Nitro" === K) {
    v = 1;
    q = 8.5;
    N = 9;
    T = q;
  } else if ("Nintendo DSi" === K) {
    v = 2, q = Ea, N = 9, T = q;
  } else if ("New Nintendo 3DS" === K || l(c, "iPhone OS 6_0") && 320 === p && 240 === Xa) {
    v = 4, q = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === K) {
    v = 3, q = Va, Qa = 535;
  } else if (!K && l(ma, "Nintendo Switch;")) {
    v = 7, q = n(ma, "NintendoBrowser/");
  } else if (B.wiiu) {
    v = 6, q = n(ma, "NintendoBrowser/"), N = 16, T = n(ma, "AppleWebKit/") || (Lb ? 536 : 534), q || (q = Lb ? 4 : 2, l(ma, "Macintosh;") || l(ma, "Windows NT") && l(ma, "Touch"));
  } else if (oa && oa.wiiremote) {
    v = 5, q = n(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === K) {
    v = 9, q = n(ma, K + " ");
  } else if ("PSP" === K) {
    v = 8;
    q = n(c, "(PlayStation Portable); ");
    Eb = 3.2;
  } else if ("PlayStation 5" === K) {
    v = 12, q = n(ma, K + "/");
  } else if ("PlayStation 4" === K) {
    v = 11, q = n(ma, K + "/");
  } else if ("PlayStation 3" === K) {
    v = 10, q = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 "), 0 > wa(q, "4.10") && (N = 27, T = q);
  } else if (l(c, "Xbox One")) {
    v = 14, q = 1;
  } else if (l(c, "Xbox")) {
    v = 13, q = 1;
  } else if (2 === Ua && l(c, "Sony/COM2/")) {
    v = 17;
    q = 2;
    Eb = 3.4;
    xa = !0;
  } else if (0 === K.indexOf("iP") || Jb || Ya || Bb) {
    if (Ya) {
      switch(q = Ya, sb.substr(0, 4)) {
        case "iPho":
          Ga = 0;
          n(sb, Ga);
          La = !0;
          break;
        case "iPad":
          Ga = 1;
          n(sb, Ga);
          Ha = !0;
          break;
        case "iPod":
          Ga = 2;
          n(sb, Ga);
          fb = !0;
      }
    } else {
      Jb ? q = Jb : (q = n(ma.split("_").join("."), "OS "), kb("isSecureContext", B), kb("enableWebGL", B), kb("sameOrigin", B));
      if (!q || Zb) {
        q = B.PointerEvent ? 13 : B.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : B.WebAssembly ? 11.2 : B.HTMLMeterElement ? 10.3 : B.Proxy ? 10.2 : B.HTMLPictureElement ? 9.3 : jb.isNaN ? 9.2 : B.SharedWorker ? lb && lb.now ? 8 : 8.4 : Tb ? 7.1 : B.webkitURL ? 6.1 : B.Worker ? 5.1 : A ? 4.3 : I ? 4.1 : 3.2;
      }
      Ma = p === 1.5 * Xa || 1.5 * p === Xa;
      0 === K.indexOf("iPhone") ? (Ga = 0, La = !0) : 0 === K.indexOf("iPad") || Bb ? (Ga = 1, Ha = !0) : 0 === K.indexOf("iPod") && (Ga = 2, fb = !0);
    }
    N = !Ya && (qa.standalone || (Ha || 12 > q) && kb("webkitFullscreenEnabled", C) || 11 <= q && 13 > q && qa.mediaDevices) ? 17 : 18;
    v = 24;
    T = q;
  } else if (l(c, "Kobo")) {
    v = 18, N = 22, T = 2.2, Ja = !0;
  } else if (l(c, "EBRD")) {
    v = 19, N = 22, T = 2.2;
  } else if (C = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    v = 29, q = C;
  } else if (B.onmoztimechange !== Sa) {
    v = 30, q = 18.1 > Ka ? "1.0.1" : 19 > Ka ? 1.1 : 27 > Ka ? 1.2 : 29 > Ka ? 1.3 : 31 > Ka ? 1.4 : 33 > Ka ? 2 : 35 > Ka ? 2.1 : 38 > Ka ? 2.2 : 45 > Ka ? 2.5 : 2.6, l(c, "Mobile") ? La = !0 : l(c, "Tablet") ? Ha = !0 : l(c, "TV");
  } else if (B.palmGetResource) {
    v = 32, q = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), l(c, "webOS.TV") || l(c, "/SmartTV") || (La = !0);
  } else if (C = n(c, "Tizen ")) {
    v = 33, q = C, N = 25, T = nb, La = !0;
  } else if (C = n(c, "Windows Phone ") || n(ma, "Windows Phone OS ") || Qb) {
    v = 23, q = C, La = !0;
  } else if (Pa && "ARM" === K) {
    v = 23, q = 10, La = !0;
  } else if (va && l(ma, "ZuneWP")) {
    v = 23, q = 11 === na ? 8.1 : 10 === na ? 8 : 9 === na ? 7.5 : 7 === na ? 7 : "?", La = !0;
  } else if (l(c, "FOMA;")) {
    v = 16, La = !0;
  } else if (l(c, "SoftBank;")) {
    v = 16, La = !0;
  } else if (l(c, "KFMUWI")) {
    Na = !0;
    q = 6.3;
    ta = Ha = !0;
  } else if (l(c, "KFKAWI")) {
    Na = !0, q = 6, ta = Ha = !0;
  } else if (l(c, "KFSUWI") || l(c, "KFAUWI") || l(c, "KFDOWI")) {
    Na = !0, q = 5, ta = Ha = !0;
  } else if (l(c, "KFGIWI")) {
    Na = !0, q = 5, ta = Ha = !0;
  } else if (l(c, "KFARWI") || l(c, "KFSAWA") || l(c, "KFSAWI")) {
    Na = !0, q = 5 <= Wa(pa) ? 5 : 4, ta = Ha = !0;
  } else if (l(c, "KFSOWI") || l(c, "KFTHWA") || l(c, "KFTHWI") || l(c, "KFAPWA") || l(c, "KFAPWI")) {
    Na = !0, q = 3, ta = Ha = !0;
  } else if (l(c, "KFOT") || l(c, "KFTT") || l(c, "KFJWA") || l(c, "KFJWI")) {
    Na = !0, q = 2, ta = Ha = !0;
  } else if (l(c, "Kindle Fire")) {
    Na = !0, q = 1, ta = Ha = !0;
  } else if (C = n(c, "Kindle/")) {
    v = 20, q = C, N = 22, T = 2.2;
  } else if (hb) {
    Na = !0, q = pa || Mb, ta = !0;
  } else if (l(c, "AmazonWebAppPlatform") || l(c, "; AFT")) {
    Na = !0, q = pa, ta = !0;
  } else if (l(c, "MeeGo")) {
    v = 34;
  } else if (l(c, "Maemo")) {
    v = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Kb) {
    v = 22, xa = !0;
  } else if ("WinCE" === K) {
    v = 21, xa = !0;
  } else if (0 === K.indexOf("Win")) {
    v = "Win16" === K ? 37 : "Win32" === K ? 38 : "Win64" === K ? 39 : 0, q = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === K.indexOf("Mac")) {
    v = "Mac68K" === K ? 41 : "MacPowerPC" === K || "MacPPC" === K ? 40 : "MacIntel" === K ? 42 : 0;
    if (C = n(c.split("_").join("."), "Mac OS X ")) {
      q = C;
    }
    pb = !0;
  } else if (l(c, "BlackBerry") || l(c, "BB10")) {
    v = 36, q = Va, La = !0;
  } else if (l(c, "SunOS") || l(c, "Sun Solaris")) {
    v = 44;
  } else if (l(c, "FreeBSD")) {
    v = 45;
  } else if (l(c, "OpenBSD")) {
    v = 46;
  } else if (l(c, "NetBSD")) {
    v = 47;
  } else if (Ja && Ia) {
    l(c, "Android 4.4;") ? Ma = {min:2.3} : 4 <= Wa(pa) ? Ma = pa : Ma = {min:2.2}, q = Ma;
  } else if (Ja && oa) {
    pa ? Ma = pa : Ma = {min:1.6}, q = Ma, l(c, "Tablet") ? Ha = !0 : La = !0;
  } else if (pa) {
    q = pa, Ja = !0;
  } else if (Ab && S || zb || ob) {
    Fb = !0;
    nb ? Ma = {min:4.4} : xb && !Db || Ib || Cb ? Ma = {min:4} : (Ma = pa = wb.touchAction !== Sa ? {min:5} : Za ? 4.4 : A ? qa.connection ? B.searchBoxJavaBridge_ || xb ? jb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Qa ? 3 : 533 <= Qa ? I ? 2.3 : 2.2 : 530 <= Qa ? 2 : 1.5, X && (N = 25, T = X));
    q = Ma;
    Ja = !0;
  } else {
    Ub ? (q = {min:5}, Fb = Ja = !0) : Ab && (l(c, "Ubuntu") ? v = 48 : (C = n(c, "Mint/")) ? (v = 49, q = C) : (C = n(c, "Fedora/")) ? (v = 50, q = C) : v = l(c, "Gentoo") ? 51 : 52);
  }
  Na || Ja && Fb && Sb ? v = 28 : Ja && (v = v || 27);
  N || (ta = ta || Ja, oa ? (N = ta || xa || La || Ha ? 9 : 8, T = Ea) : va ? (Ma = Aa(ma, "Trident/") + 4, N = xa || La || Ha || fb ? 3 : pb && 5 <= na ? 7 : 2, T = na) : Pa ? (N = 23 === v ? 6 : 5, T = n(ma, "Edge/")) : cb ? (N = 13, T = cb) : Ia ? (N = ta ? 12 : 11, T = Ka || db) : nb ? (N = 25, T = nb) : (C = Eb || n(c, "NetFront/")) ? (N = 19, T = C) : (C = n(c, "iCab")) ? (N = 20, T = C) : (C = J(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || gb && Va) ? (N = 10, T = C, v || (l(c, "iPhone") ? 
  Ga = 0 : l(c, "iPad") ? Ga = 1 : l(c, "iPod") && (Ga = 2), Ga && (v = 24))) : yb ? (N = 26, T = Yb) : Rb ? (N = 15, T = Ua) : Ja && Db ? (N = 22, T = pa) : xb || Ib || Cb ? (N = ta ? 23 : 21, T = mb || eb) : Ja && Za ? (N = 24, T = 5 > Wa(pa) ? pa : mb) : Ja && (Va || Fb) ? (N = 22, T = pa) : mb ? (N = ta ? 23 : 21, T = mb) : Qa && (N = 16, T = Qa));
  v && (ab[2] = v, q && (ab[3] = W(q)));
  N && (ab[0] = N, T && (ab[1] = W(T)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(ab, B, C, qa, I, Wa, jb, Sa, Aa, l, Pb, kb, n, J) {
  function W(h) {
    if (B[0] === h) {
      return na === na + "" ? Aa(na) : na;
    }
  }
  function wa(h) {
    var w = B[3];
    if (B[2] === h) {
      return w === w + "" ? Aa(w) : w;
    }
  }
  function c(h) {
    var w = c.i || (c.i = {}), U = w[h], ha, Y;
    if (U) {
      return U;
    }
    U = h.split("-");
    ha = U.length;
    if (2 > ha) {
      return h;
    }
    for (; 1 < ha;) {
      Y = U[--ha];
      U[ha] = Y.charAt(0).toUpperCase() + Y.substr(1);
    }
    return w[h] = U.join("");
  }
  function ma(h, w, U) {
    h + "" === h && ("a" === h.charAt(2) && (U = !0, h = h.substr(0, 2)), h = "CS" === h ? 7.2 > A ? 117 : .9 > S || 9 > p || 9 > A || Xa ? 1 : 132 : parseInt(h, 16));
    U && (50 === h && (h = 128), 102 < h && 108 > h && (h += 24));
    return (h - 1) * -(6 * (w || 2));
  }
  var Ua = I.body, K = Ua.style, Pa, wb, na = B[1], p = W(2) || W(3), Xa = W(7), lb = W(5) || W(6), A = W(8) || W(9), S = W(11) || W(12), Va = S && 0 <= B.conpare(na, "1.9.1"), gb = W(13), oa = W(16), Ea = W(17) || W(18), Ib = W(10) || W(26), va = W(21) || W(23), xb = W(24), Ia = W(22), yb = W(25), Yb = va || xb || Ia || yb, Qb = va && Aa(Wa.userAgent.split("Edg/")[1]), Jb = Aa(Wa.appVersion.split("Trident/")[1]) + 4, pa = wa(37) || wa(38) || wa(39), zb = wa(40) || wa(41) || wa(42) || wa(43), Ja = 
  .9 > S, Ab = (Xa ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : S && !Va ? 1.4 <= S ? "gck19" : 1.3 <= S ? "gck13" : 1 <= S ? "gck12" : Ja ? .8 <= S ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Bb, cb, Ka, db, Zb, Qa, mb, eb, Cb, Rb, Kb, Sb, nb, X, Db, ob, Ya, Za, sb, Tb, Lb, Ub, hb, Mb, v, q, N, T, Eb, xa, Ga, La, Ha, fb, Ma, Na, ta, pb, Fb, F, la, fa, Ta, Ba, hc, Gb, $b, Hb, Nb, ub, ac, Vb, 
  ya, Wb, Xb, ib, bc, mc, nc, ic, cc, jc, oc, pc, qc, kc, qb, rb, bb, Ob, dc, lc, $a;
  wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9);
  db = 8 > p || 7.2 > A ? !1 : J;
  Zb = K.transform !== J ? "transform" : K["-o-transform"] !== J ? "-o-transform" : K["-ms-transform"] !== J ? "-ms-transform" : K.MozTransform !== J ? "-moz-transform" : K["-webkit-transform"] !== J ? "-webkit-transform" : "";
  Qa = [];
  mb = [];
  eb = [];
  nb = 525 > oa || 3.1 > Ea || 2.2 > Ia || 10 > A || S && !Va || W(26) || 10 > W(3) || wa(34) || wa(32) || wa(3);
  Ya = [];
  Za = [];
  hb = Sa.now || function() {
    return +new Sa();
  };
  (function() {
    function h() {
      for (var x, M = 0, ba = hb(); M < ia.length;) {
        ba < ia[0].t ? ++M : (x = ia.splice(M, 1)[0], x.f(x.p));
      }
      O = ia.length ? l(h, D) : 0;
    }
    function w() {
      for (var x, M = 0; M < Y.length; ++M) {
        x = Y[M], x.f();
      }
    }
    function U() {
      ka && (ka = n(ka));
    }
    function ha() {
      O && (O = Pb(O));
    }
    r = function(x) {
      Ya.push(x);
    };
    tb = function(x) {
      Za.push(x);
    };
    ob = function(x) {
      Y.length || (ka = kb(w, ra));
      Y.push({f:x, g:++Fa});
      return Fa;
    };
    sb = function() {
      ka && (U(), ka = kb(w, ra));
    };
    Tb = U;
    var Y = [], ra = 500, Fa = 0, ka, ia, D, ca, O;
    if (5 > p || Xa) {
      C._wdb_onlooptimer = w, w = "_wdb_onlooptimer()";
    }
    X = function(x, M, ba) {
      ia.length || (O = l(h, D));
      ia.push({f:x, p:M, g:++ca, t:hb() + (D < ba ? ba : D)});
      return ca;
    };
    Db = function(x) {
      for (var M = ia.length, ba; ba = ia[--M];) {
        if (ba.g === x) {
          ia.splice(M, 1);
          break;
        }
      }
      return 0;
    };
    Lb = function() {
      O && (ha(), O = l(h, D));
    };
    Ub = ha;
    ia = [];
    D = Ea | 0 || 530 <= oa && 534 > oa ? 64 : 16;
    ca = 0;
    r("[core] TIMER_INTERVAL:" + D);
    if (5 > p || Xa) {
      C._wdb_ontimer = h, h = "_wdb_ontimer()";
    }
  })();
  (function() {
    function h(b, a, d) {
      var k = ["<", b], u = 1, G, Q, L;
      if (a) {
        for (G in a) {
          L = a[G];
          if (null != L && "" !== L) {
            if ("style" === G) {
              k[++u] = ' style="';
              for (Q in L) {
                for (var f = ++u, e, g = [], m = Q.split(""), y = m.length; y;) {
                  e = m[--y], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), g[y] = e;
                }
                k[f] = g.join("") + ":" + L[Q] + ";";
              }
              k[++u] = '"';
            } else {
              "className" === G && (G = "class"), k[++u] = " " + G + '="' + L + '"';
            }
          }
        }
      }
      k[++u] = ">";
      null != d && (da && "FONT" !== b ? k[++u] = "<FONT>" + w(d) + "</FONT>" : k[++u] = w(d));
      k[++u] = "</" + b + ">";
      return k.join("");
    }
    function w(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function U(b) {
      var a = "*" === b;
      b = da ? a ? I.all : I.all.tags(b.toUpperCase()) : 6 > p && a ? I.all : I.getElementsByTagName(b);
      a = [];
      for (var d = 0, k = b.length; d < k; ++d) {
        a[d] = b[d];
      }
      return a;
    }
    function ha(b) {
      return da ? b.parentElement : b.parentNode;
    }
    function Y(b, a, d, k, u, G) {
      var Q, L;
      if (da) {
        Q = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        L = T(2 > b ? N(a) : a);
        L = 2 > b ? L.indexOf(a) + b : L.length;
        a.insertAdjacentHTML(Q, h(d, k, u));
        a = T(a)[L];
        null != u && ("FONT" === d ? a.nodeType = 3 : (a.nodeType = 1, a.children[0].nodeType = 3));
      } else if (ja) {
        a = I.createElement(h(d, k));
      } else {
        a = G ? I.createElementNS("http://www.w3.org/2000/svg", d) : I.createElement(d);
        if (k) {
          for (Q in k) {
            if ((b = k[Q]) || 0 === b) {
              switch(Q) {
                case "class":
                case "className":
                  F(a, b);
                  break;
                case "style":
                  G = a.style;
                  for (L in b) {
                    G[L] = b[L];
                  }
                  break;
                default:
                  ta(a, Q, b);
              }
            }
          }
          !A || "a" !== d && "A" !== d || !k.href || k.tabindex || ta(a, "tabindex", "-0", !0);
        }
        Ra || null != u && Fa(a, u);
      }
      return a;
    }
    function ra(b, a) {
      var d;
      if (da) {
        return Y(2, b, "FONT", J, a);
      }
      d = I.createTextNode("" + a);
      b.appendChild(d);
      return d;
    }
    function Fa(b, a) {
      A ? (b.firstChild && (b.innerHTML = ""), ra(b, a)) : b.textContent = a;
    }
    function ka(b) {
      return "A" === ia(b) && x(b, "href", !0);
    }
    function ia(b) {
      return b.tagName.toUpperCase();
    }
    function D(b, a, d) {
      if (8 > A || 5.5 > p) {
        a = c(a);
      }
      b = b.getAttribute(a);
      return !d && A && "tabindex" === a ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    }
    function ca(b, a, d, k) {
      if (!k && A) {
        if ("tabindex" === a) {
          if ("-1" === d) {
            O(b, a, !0);
            return;
          }
          !d && ka(b) && (d = "-0");
        } else {
          "href" === a && "-0" !== D(b, "tabindex", !0) && "A" === ia(b) && ca(b, "tabindex", "-0", !0);
        }
      }
      if (8 > A || 5.5 > p) {
        a = c(a);
      }
      b.setAttribute(a, d);
    }
    function O(b, a, d) {
      if (!d && A) {
        if ("tabindex" === a) {
          "-0" !== D(b, a, !0) && ka(b) && ca(b, a, "-0", !0);
          return;
        }
        "href" === a && "-0" === D(b, "tabindex", !0) && O(b, "tabindex", !0);
      }
      if (8 > A || 5.5 > p) {
        a = c(a);
      }
      b.removeAttribute(a);
    }
    function x(b, a, d) {
      if (!d && A && "tabindex" === a && ka(b)) {
        return "-0" !== D(b, a, !0);
      }
      if (8 > A || 5.5 > p) {
        a = c(a);
      }
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    }
    function M(b, a) {
      9 > p ? b.className = a : b.setAttribute("class", a);
    }
    function ba(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    function sa(b, a, d) {
      if (8 > A || 5.5 > p) {
        a = c(a);
      }
      b.style[a] = d;
    }
    var da = 5 > p, ja, Ra;
    Pa = U("html")[0];
    wb = U("head")[0];
    Mb = function(b) {
      return C[b] || I[b] || I.getElementById(b);
    };
    v = U;
    q = function(b) {
      var a = [], d = 0, k, u = -1, G, Q, L;
      if (9 > p || !I.getElementsByClassName) {
        G = 6 > p ? I.all : I.getElementsByTagName("*");
      } else {
        Q = !0;
        G = I.getElementsByClassName(b);
      }
      for (k = G.length; d < k; ++d) {
        L = G[d];
        if (Q || (da || 1 === L.nodeType) && ba(L, b)) {
          a[++u] = L;
        }
      }
      return a;
    };
    N = ha;
    T = function(b) {
      b = da ? b.children : b.childNodes;
      for (var a = [], d = b.length; d;) {
        a[--d] = b[d];
      }
      return a;
    };
    Eb = function(b) {
      var a = !(7.03 < A && 7.2 > A) && b.children;
      b = a ? a : b.childNodes;
      for (var d = [], k = b.length, u = -1, G; k;) {
        if (G = b[--k], da) {
          3 !== G.nodeType && (d[++u] = G);
        } else {
          if (a || 1 === G.nodeType) {
            d[++u] = G;
          }
        }
      }
      return d;
    };
    xa = function(b, a, d, k, u) {
      a = Y(2, b, a, d, k, u);
      da || (b.appendChild(a), Ra && null != k && (9 > p ? ra(a, k) : Fa(a, k)));
      return a;
    };
    Ga = function(b, a, d, k, u) {
      a = Y(0, b, a, d, k, u);
      da || (ha(b).insertBefore(a, b), Ra && null != k && (9 > p ? ra(a, k) : Fa(a, k)));
      return a;
    };
    La = ra;
    Ha = function(b, a) {
      var d;
      if (da) {
        return Y(0, b, "FONT", J, a);
      }
      d = I.createTextNode("" + a);
      N(b).insertBefore(d, b);
      return d;
    };
    fb = function(b) {
      if (N(b)) {
        if (da) {
          b.outerHTML = "";
        } else {
          return 5.5 > p && 1 === b.nodeType && (b.style.filter = ""), N(b).removeChild(b), b;
        }
      } else {
        r("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    ja = 9 > p;
    Ra = ja;
    Ma = ia;
    Na = D;
    ta = ca;
    pb = O;
    Fb = x;
    F = M;
    la = ba;
    fa = function(b, a) {
      var d;
      if (!ba(b, a)) {
        if (d = b.className) {
          d += " ";
        }
        M(b, d + a);
      }
    };
    Ta = function(b, a) {
      var d;
      if (ba(b, a)) {
        d = b.className.split(" ");
        d.splice(d.indexOf(a), 1);
        M(b, d.join(" "));
      }
    };
    Ba = sa;
    hc = function(b, a) {
      var d = -1, k, u, G;
      if (5.5 > p || 7.1 > A) {
        if (p) {
          if (5.5 > p) {
            k = "";
            u = b.style.cssText.split(";");
            G = -1;
            for (var Q, L; Q = u[++G];) {
              L = Q.split(":")[0], k += ";" + L.toLowerCase() + ":" + Q.substr(L.length + 1);
            }
            k = k.substr(1);
          } else {
            k = b.style.cssText;
          }
          if (k) {
            for (k = k.split(";"); u = k[++d];) {
              sa(b, u.split(":")[0], "");
            }
            d = -1;
          }
        } else {
          b.setAttribute("style", "");
        }
        if (a) {
          for (k = a.split(";"); u = k[++d];) {
            G = u.split(":")[0], sa(b, G, u.substr(G.length + 1));
          }
        }
      } else {
        9 > A || 1 > S ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
  })();
  (function() {
    function h() {
      return u ? Q ? 2 : G ? 3 : 1 : 0;
    }
    function w(f) {
      $b(C, "load", w);
      w = J;
      ha(Qa, f, !0);
      Qa = J;
    }
    function U(f, e) {
      ub(function() {
        var g = D(f);
        e(g);
        g.addListener(e);
        return !0;
      });
    }
    function ha(f, e, g) {
      for (var m = 0; m < f.length; ++m) {
        !0 === f[m](e) && (f.splice(m, 1), --m);
      }
      g && (f.length = 0);
    }
    function Y(f, e, g) {
      Qa || O.length || X(ra);
      O.push(f, e, g);
    }
    function ra() {
      var f = O, e;
      for (O = []; e = f.shift();) {
        ha(e, f.shift(), f.shift());
      }
    }
    function Fa(f, e, g, m) {
      var y, H, R;
      if (da) {
        f.removeEventListener(e, g, m ? x ? m : m.capture || !0 === m : !1);
      } else {
        m = M[e];
        y = "on" + e;
        if (m) {
          if (ja) {
            Ra.push(f, e, g);
          } else {
            e = 0;
            for (H = m.length; e < H; e += 2) {
              m[e] === f && (m[e + 1] === g ? m.splice(e, 1) : R = !0);
            }
            R || (ba ? f.detachEvent(y, ka) : p ? (f[y] = qa, f[y] = null) : delete f[y]);
          }
        }
      }
    }
    function ka(f) {
      var e = f || event, g = e.type, m, y, H, R, P;
      f = M[g];
      g = "on" + g;
      m = 0;
      y = f.length;
      ++ja;
      5 > p ? e = {type:event.type, target:event.srcElement, preventDefault:j, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : p ? (e.target = e.srcElement, e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : sa && (e.h = e.stopPropagation, e.stopPropagation = function() {
        H = !0;
      });
      for (; m < y; m += 2) {
        R = f[m];
        if (R === this) {
          P = f[m + 1];
          5.5 > p ? (R[g] = P, R[g](e), R[g] = ka) : P.call(R, e);
        } else {
          7.2 > A && this === I && R === C && f[m + 1].call(R, e);
        }
      }
      if (p) {
        return e.preventDefault = e.stopPropagation = qa, e.preventDefault = e.stopPropagation = J, e.returnValue;
      }
      sa && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && e.target.getAttribute("href") && (b = !0), H && !b && e.h(), e.h = e.stopPropagation = J);
      --ja;
      if (0 === ja) {
        for (f = Ra; f.length;) {
          Fa(f.shift(), f.shift(), f.shift());
        }
      }
      function j() {
        event.returnValue = !1;
      }
      j = !1;
    }
    function ia() {
      var f = 9 === ca.offsetWidth;
      Vb !== f && (Y(mb, Vb = f), r("p_cssAvailability:" + Vb));
    }
    var D = C.matchMedia, ca, O = [], x, M, ba, sa, da, ja, Ra, b, a, d, k, u, G, Q, L;
    Qa.push(function() {
      U = J;
      ca = xa(Ua, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Hb(function() {
        O.length && X(ra);
      });
    });
    Gb = function(f, e, g, m) {
      var y, H;
      if (da) {
        f.addEventListener(e, g, m ? x ? m : m.capture || !0 === m : !1);
      } else {
        m = M[e];
        y = "on" + e;
        if (m) {
          e = 0;
          for (H = m.length; e < H; e += 2) {
            if (m[e] === f && m[e + 1] === g) {
              return;
            }
          }
          m.push(f, g);
        } else {
          m = M[e] = [f, g];
        }
        ba ? f.attachEvent(y, ka) : (g = f[y], g !== ka && "function" === typeof g && m.unshift(f, g), f[y] = ka);
      }
    };
    $b = Fa;
    x = !p && !Xa && (new jb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
    M = {};
    ba = !1;
    sa = 525.13 > oa;
    da = !sa && !Xa && C.addEventListener;
    ja = 0;
    Ra = [];
    sa && Pa.addEventListener("click", function(f) {
      if (b) {
        return b = !1, f.preventDefault(), !1;
      }
    });
    Hb = function(f) {
      Qa ? Qa.push(f) : alert("Load event has already been dispatched!");
    };
    Nb = function(f) {
      d && d.push(f);
    };
    if (419.3 >= oa) {
      a = function() {
        var f;
        if (a) {
          f = I.readyState;
          "loaded" === f || "complete" === f ? (a = J, w()) : X(a);
        }
      };
      X(a);
    } else {
      Gb(C, "load", w), Ja && X(function() {
        w && w();
      }, 999);
    }
    if (p || !Ja && 1.8 > S) {
      Gb(C, "unload", function(f) {
        ha(d, f, !0);
      });
      d = [];
    }
    ub = function(f) {
      mb.push(f);
    };
    Hb(function() {
      ia();
      ob(ia);
    });
    ac = function(f) {
      eb && eb.push(f);
    };
    k = 60 > S || gb;
    if (89 <= S || 89 <= va || pa && 79 <= Qb || D && (D("(forced-colors:none)").matches || D("(forced-colors:active)").matches)) {
      Wb = !0, U("(forced-colors:active)", function(f) {
        u = f.matches;
        ya = h();
        Y(eb, ya);
        r("(forced-colors:active):" + ya);
      });
    } else if (10 <= p || lb || pa && Qb) {
      Wb = !0, U("(-ms-high-contrast:black-on-white)", function(f) {
        u = G = f.matches;
        ya !== h() && (ya = h(), Y(eb, ya), r("(-ms-high-contrast:black-on-white):" + ya));
      }), U("(-ms-high-contrast:white-on-black)", function(f) {
        u = Q = f.matches;
        ya !== h() && (ya = h(), Y(eb, ya), r("(-ms-high-contrast:white-on-black):" + ya));
      }), U("(-ms-high-contrast:active)", function(f) {
        u = f.matches;
        ya !== h() && (ya = h(), Y(eb, ya), r("(-ms-high-contrast:active):" + ya));
      });
    } else if (pa && (p || S && 0 <= B.conpare(na, "1.8.1") || gb)) {
      L = function() {
        function f(m, y) {
          var H;
          if (y && "transparent" === m) {
            return 382.5;
          }
          if ("#" === m.charAt(0)) {
            return parseInt("0x" + m.substr(1, 2), 16) + parseInt("0x" + m.substr(3, 2), 16) + parseInt("0x" + m.substr(5, 2), 16);
          }
          H = m.split("(")[1].split(",");
          return Aa(H[0]) + Aa(H[1]) + Aa(H[2]);
        }
        var e = I.defaultView, g;
        g = e ? e.getComputedStyle(ca, null) : ca.currentStyle;
        e = (g && g.color || "").split(" ").join("");
        g = (g && g.backgroundColor || "").split(" ").join("");
        e && (u = "#123456" !== e && "rgb(18,52,86)" !== e, G = f(e) < f(g, !0), Q = f(e) > f(g, !0), ya !== h() && (ya = h(), r("(forced-colors-fallback):" + ya), Y(eb, ya, k)));
      };
      ub(function(f) {
        if (f) {
          return Ba(ca, "color", "#123456"), Ba(ca, "backgroundColor", "#123456"), k ? (L(), eb = J) : ob(L), L = J, !0;
        }
      });
    } else {
      eb = h = J;
    }
  })();
  (function() {
    function h(t) {
      switch(t) {
        case 1:
          return Ra;
        case 2:
          return !!b;
        case 3:
          return !!a;
        case 4:
          return !!d;
        case 5:
          return u;
        case 6:
          return k && !O;
      }
      return !1;
    }
    function w(t) {
      G(t);
      Z && !t && fb(Z);
      G = Q = L = f = e = g = R = P = Z = Oa = J;
    }
    function U(t) {
      var ea = '1.6em "' + t + '"';
      r("[webFontTest] testByNativeFontLoaderAPI start.");
      I.fonts.load(ea).then(function(z) {
        r("[webFontTest] fonts.check() : " + I.fonts.check(ea, "i") + ", fonts.length : " + z.length);
        (z = Fa(Q)) ? X(w, z) : (r("[webFontTest] mesureWebFont() : false"), Y(!0));
      }, function(z) {
        r("[webFontTest] fonts.load() rejected! " + z);
        db !== J ? ka(db) : Cb(ka);
      });
    }
    function ha(t) {
      return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (H = hb(), !1) : t < hb() - H;
    }
    function Y(t) {
      t && (r("[webFontTest] testWebFont start."), H = hb());
      (t = Fa(Q, m)) ? (r("[webFontTest] testWebFont mesurement success : " + t), w(t)) : ha(m) ? (r("[webFontTest] testWebFont timeout!"), R ? ia() : ca ? w(0) : db !== J ? ka(db) : Cb(ka)) : X(Y);
    }
    function ra() {
      return xa(Ua, 5 > p ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":15 > S ? '"liga=1"' : '"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, sa);
    }
    function Fa(t, ea) {
      var z = 0, E = -1, aa = [], Ca, za, V;
      if (!Oa) {
        Ca = -1;
        P = ra();
        for (Oa = []; za = ja[++Ca];) {
          Ba(P, "fontFamily", za), Oa[Ca] = P.offsetWidth;
        }
        r("[webFontTest] default width " + Oa.join(", "));
      }
      for (5 > p ? P || (P = ra()) : N(P) || Ua.appendChild(P); Ca = ja[++E];) {
        Ba(P, "fontFamily", '"' + t + '",' + Ca);
        V = P.offsetWidth;
        da ? aa[E] = V : (aa[E] = V, V !== Oa[E] && (z = 9 > p ? V ? 1 : 0 : 1));
      }
      if (da && V === aa[0] && V === aa[1]) {
        for (r("[webFontTest] Hit... : width=" + V), z = 1, E = -1; 0 <= (V = Oa[++E]);) {
          if (V === aa[0] && V === aa[1] && V === aa[2]) {
            r("[webFontTest] Failed! : font[" + E + "]=" + ja[E]);
            z = 0;
            break;
          }
        }
      }
      !p && z && e && (P.textContent = e, V = P.offsetWidth, P.textContent = g, z = V === P.offsetWidth ? 2 : 1, P.textContent = sa);
      P = fb(P);
      ea && (z || ha(ea)) && r("[webFontTest] " + t + " " + aa.join(", "));
      return z;
    }
    function ka(t) {
      r("[webFontTest] onTestDataURIComplete : " + t);
      t ? (R = !0, m = ba, r("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), Q = Q.replace(x, ""), ia()) : w(0);
    }
    function ia() {
      var t, ea;
      if (L) {
        for (; L.length;) {
          t = L.shift();
          ea = L.shift();
          if (h(t)) {
            r("[webFontTest] maybe can use! " + ea);
            Z = Sb(ea, D, f, Z, y);
            return;
          }
        }
      }
      w(0);
    }
    function D(t) {
      t ? Y(!0) : ia();
    }
    mb.splice(0, 0, function() {
      var t;
      if (Vb) {
        Ka = 8 <= p || lb || 9.5 <= A || Va || gb || 522 <= oa || 3 <= Ea || Ib || Yb ? 3 : 7.2 <= A ? 2 : 6 <= A || S ? 1 : 0;
        if (!Ka && !p && !Xa) {
          t = xa(Ua, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ka = 6 <= t.offsetWidth ? 2 : 0;
          fb(t);
        }
        r("p_cssGeneratedContentGrade:" + Ka);
        return !0;
      }
    });
    Cb = !1 === db ? function(t) {
      X(t, !1);
    } : function(t) {
      var z, E;
      function ea(aa) {
        E && (E = Db(E), db = aa, z.onload = z.onerror = qa, X(t, aa));
      }
      if (db !== J) {
        r("[dataURITest] already done : " + db), X(t, db);
      } else {
        r("[dataURITest] start!");
        z = new Image();
        E = X(ea, !1, 99);
        z.onerror = function() {
          r("[dataURITest] no DATA URI!");
          ea(!1);
        };
        z.onload = function() {
          r("[dataURITest] DATA URI:" + (1 === z.width * z.height));
          ea(1 === z.width * z.height);
        };
        z.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > p && Hb(function() {
      var t = xa(Ua, "div");
      hc(t, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Bb = 1 < t.offsetHeight;
      fb(t);
    });
    Rb = function(t, ea) {
      function z() {
        var za;
        if (aa || !Ca || E.complete) {
          r("[imageTest] timer -> img.complete. img.width=" + E.width);
          za = !!E.width;
          cb = cb || za;
          X(t, za);
          E.onerror = E.onload = qa;
          E = t = J;
        } else {
          --Ca, X(z);
        }
      }
      var E = new Image(), aa, Ca = 99;
      r("[imageTest] start.");
      E.onerror = function() {
        r("[imageTest] error!");
        aa = !0;
      };
      E.onload = function() {
        r("[imageTest] onload.");
        aa = !0;
      };
      E.src = ea;
      X(z);
    };
    Kb = function(t, ea, z, E, aa, Ca, za) {
      G = t;
      Q = ea;
      L = z;
      f = E;
      e = aa;
      g = Ca;
      m = y = za || M;
      r("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!nb);
      W(10) ? X(w, 1) : nb ? X(w, 0) : !I.fonts || 603 > oa || 11 > Ea ? (r("[webFontTest] No native font loader."), Y(!0)) : (r("[webFontTest] Use Native font loader."), U(Q));
    };
    var ca = 9 > p, O = 6 > va || A || 530 > oa || 5 > Ea || wa(10), x = "bad_" + hb() + "_", M = 5E3, ba = 500, sa = "mmmmmmmmmmlliiiiiiiii", da = 9 <= va && 18 > va || 3 > Ia || 7 > Ea || oa && 0 >= B.conpare(na, "536.11"), ja = ["monospace", "sans-serif", "serif"], Ra, b, a, d, k, u, G, Q, L, f, e, g, m, y, H, R, P, Z, Oa;
    nb || (da && va && r("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + va), da && Ea && r("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ea), da && oa && r("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + oa), da && Ia && r("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Ia));
    Ra = 14 <= lb || 36 <= va || 39 <= S || 3 <= gb || 602 <= oa && 0 <= B.conpare("10.12", zb) || 10 <= Ea;
    b = 6 <= va || S && 0 <= B.conpare(na, "1.9.2") || gb || 533 <= oa || 5 <= Ea || 4.4 <= Ia || 11.5 <= A || lb || 9 <= W(2) || 10 <= W(3);
    a = 2 <= va || Va || gb || 525 <= oa || 4 <= Ea || 2.2 <= Ia || 10.1 <= A || lb || 9 <= W(2) || 10 <= W(3);
    d = a;
    k = 5.1 <= pa && 5.2 >= pa && 40 > va || 6 <= pa && 6.1 > pa && 51 > va || 37 > va || 525 <= oa || 3.1 <= Ea || 3 <= Ia || 11.5 <= A;
    u = 4 <= W(2) || 10 <= W(3);
  })();
  (function() {
    Sb = function(D, ca, O, x, M) {
      var ba, sa, da;
      if (w) {
        r("[CSS Loader] UNSUPPORTED"), X(ca, !1);
      } else {
        if (x) {
          if (va && x.href) {
            sa = x.cloneNode();
            x.parentNode.insertBefore(sa, x);
            fb(x);
          } else {
            sa = x;
          }
        } else {
          sa = xa(wb, "link", {type:"text/css", rel:"stylesheet"});
        }
        if (!Fa) {
          (ba = Mb(O)) ? pb(ba, "id") : ba = xa(Ua, "div", {"aria-hidden":"true", className:O});
          da = ba.offsetWidth;
          r("[CSS Loader] widthBeforeCSSLoaded = " + da);
          ta(ba, "id", O);
        }
        ka(sa, D, ca, ba, da, M || h);
        return sa;
      }
    };
    var h = 5E3, w = S && 0 > B.conpare(na, "0.9.1"), U = 11 <= p || lb || 9 <= A && 9.5 > A, ha = 11 > p, Y = 7.2 <= A && 7.5 > A, ra = 9 > S && !w || 19 > va || 4.3 > Ia || 2 > yb || 536 > oa || 6 > Ea || 7 <= A && 9 > A && !Y, Fa = !w && !U && !ha && !Y && !ra, ka = Fa ? function(D, ca, O) {
      r("[CSS Loader] onload + onerror");
      D.onload = j;
      D.onerror = function() {
        D.onload = D.onerror = null;
        X(O, !1);
      };
      D.href = ca;
      function j() {
        D.onload = D.onerror = null;
        X(O, !0);
      }
      j = !1;
    } : U ? function(D, ca, O, x, M) {
      r("[CSS Loader] onload + mesure");
      D.onload = j;
      D.href = ca;
      function j() {
        X(O, ia(x, M));
        D.onload = null;
        x = J;
      }
      j = !1;
    } : ha ? function(D, ca, O, x, M) {
      r("[CSS Loader] onreadystatechange + onerror");
      D.onreadystatechange = j;
      D.href = ca;
      function j() {
        if ("loaded" === D.readyState || "complete" === D.readyState) {
          X(O, ia(x, M)), x = J, D.onreadystatechange = qa;
        }
      }
      j = !1;
    } : ra || Y ? function(D, ca, O, x, M, ba) {
      function sa() {
        ja && (Ra = Db(Ra), r("[CSS Loader] onComplete"), b = hb() + 999, X(da, 0, 99), ra ? ja.onerror = null : ja.removeEventListener("load", sa, !1), ja = J);
      }
      function da() {
        ia(x, M) ? (X(O, !0), x = O = J) : hb() < b ? X(da, 0, 99) : (X(O, !1), x = O = J);
      }
      var ja = new Image(), Ra = X(sa, 0, ba), b;
      ra ? (r("[CSS Loader] img.onerror + mesure"), ja.onerror = sa) : (r('[CSS Loader] img.addEventListener("load") + mesure'), ja.addEventListener("load", sa, !1));
      ja.src = D.href = ca;
    } : J, ia = !Fa && !w && function(D, ca) {
      r("[CSS Loader] elmTest.offsetWidth = " + D.offsetWidth);
      return D.offsetWidth !== ca;
    };
  })();
  Xb = String.fromCharCode;
  ib = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
  "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Xb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"];
  bc = ib[7];
  mc = ib[113];
  nc = Xb(160);
  Xb(8194);
  ic = ib[31];
  cc = ib[30];
  jc = ib[63];
  oc = ib[125];
  pc = ib[126];
  qc = Xb(59648);
  kc = (9 === p || S && 0 <= B.conpare(na, "1.8.1") || gb) && !Wb;
  qb = [];
  Ob = 7.2 > A ? function() {
    rb = !rb;
    for (var h = -1, w; w = qb[++h];) {
      -1 !== w.className.indexOf("pbAlp") ? Ba(w, "display", rb ? "" : "none") : (fa(w, rb ? "pbChrCS" : "pbChr00"), Ta(w, rb ? "pbChr00" : "pbChrCS"));
    }
  } : kc ? function() {
    rb = !rb;
    for (var h = -1, w; w = qb[++h];) {
      Ba(w, "opacity", rb ? 1 : 0);
    }
  } : J;
  dc = ab.startBlinkingIfCursor = function(h) {
    Ob ? la(h, "pbChrCS") && (bb || !A && !ya || (bb = kb(Ob, 400)), -1 === qb.indexOf(h) && qb.push(h)) : qb = J;
  };
  ab.stopBlinkingIfCursor = function(h) {
    Ob && (h = qb.indexOf(h), 0 <= h && (qb.splice(h, 1), !qb.length && bb && (n(bb), bb = 0)));
  };
  kc && ac(function(h) {
    h ? bb || (bb = kb(Ob, 400)) : bb && (n(bb), bb = 0);
  });
  Ob && Nb(function() {
    bb && n(bb);
  });
  Wb || ac(function(h) {
    h ? (ta(Pa, "forced-colors", 2 === h ? "lod" : 3 === h ? "dol" : "active"), (Zb || 9 === p || 5.5 <= p && 9 > p && Bb) && fa(Pa, "jsCanRotate")) : (pb(Pa, "forced-colors"), Ta(Pa, "jsCanRotate"));
  });
  (function() {
    function h() {
      var a, d;
      h = J;
      x.length ? (ra(a = x.shift(), x.shift(), x.shift(), x.shift()), (d = x.shift()) && X(d, a)) : r("[pbList] complete.");
    }
    function w(a) {
      a ? (r("[pbList] Fallback start!"), fa(Ua, "pbList-noWebFont")) : r("[pbList] image disabled!");
      h();
    }
    function U(a) {
      M = a;
      r("[pbList] WebFont test result : " + !!a);
      a ? h() : cb ? w(!0) : cb !== J ? h() : (r("[pbList] Need imageTest " + ba), Rb(w, ba));
      r("window.offscreenBuffering = " + C.offscreenBuffering);
      U = Kb = w = J;
    }
    function ha() {
      ha = J;
      Kb(U, "PB-100", [1, $a + "pbFont/woff2.css", 2, $a + "pbFont/woff.css", 3, $a + "pbFont/ttf.css", 5, $a + "pbFont/eot.css", 6, $a + "pbFont/svg.css"], "js-myIconFont-testCssReady", "\u208b\u2081", jc);
    }
    function Y(a) {
      this.focus();
      a.preventDefault();
      a.stopPropagation();
    }
    function ra(a, d, k, u) {
      function G(m, y) {
        for (var H = T(m), R = -1, P; P = H[++R];) {
          switch(P.nodeType) {
            case 1:
              G(P, y);
              break;
            case 3:
              P.data && L(P.data) && y.push(P);
          }
        }
      }
      function Q(m, y) {
        var H = m.children, R = 0, P = H.length;
        if (P) {
          for (; R < P; ++R) {
            Q(H[R], y);
          }
        } else {
          (H = m.innerText) && L(H) && y.push(m);
        }
      }
      function L(m) {
        return m.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], e, g;
      if (h) {
        -1 === x.indexOf(a) && (x.push(a, d, k, h, u), sa && ha && ha());
      } else {
        g = x.indexOf(a);
        0 <= g && x.splice(g, 5);
        M || !cb || k || la(a, "pbList") && fa(a.firstChild, "pbList-fallback-img");
        for (5 > p ? Q(a, f) : G(a, f); e = f.shift();) {
          g = 5 > p ? e.innerText : e.data, 2 !== M ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join(cc)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join(cc)), M && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(jc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(qc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(oc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(pc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(ic)), !d || !k && cb ? Fa(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(mc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(bc).split("&amp;").join("&"), e, d, k) : 5 > p ? e.innerText = g : e.data = g;
        }
        u && X(u, a);
      }
    }
    function Fa(a, d, k, u) {
      function G(V, Da) {
        for (var vb = ""; Da;) {
          Da & 1 && (vb += V), Da >>= 1, V += V;
        }
        return vb;
      }
      function Q(V, Da, vb) {
        for (var ec, rc = -1, fc, gc; ec = Da[++rc];) {
          for (; 0 <= (fc = V.indexOf(ec));) {
            gc = ec.length, V = V.substr(0, fc) + G(vb, gc) + V.substr(fc + gc);
          }
        }
        return V;
      }
      function L(V) {
        var Da = Aa(V), vb = "" + Da;
        return 0 < Da && Da === Da | 0 && (Da = V.indexOf(vb) + vb.length, Da <= V.length) ? Da : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), e = 5 > p || 1 === d.nodeType, g = [], m = "", y, H = -1, R, P, Z, Oa, t, ea, z, E, aa, Ca, za;
      if (e) {
        if (Ra) {
          t = d.style.visibility;
          Ba(d, "visibility", "hidden");
        }
        d.innerHTML = "";
      }
      if (b) {
        ea = d;
        d = I.createDocumentFragment();
      }
      if (function(V) {
        var Da = V.indexOf("P");
        if (-1 === Da) {
          return !1;
        }
        Da = Aa(V.charAt(Da + 1));
        return 0 <= Da && 9 >= Da;
      }(a)) {
        m = G("+", a.length);
      } else {
        0 <= (y = L(a)) && (m = G("|", y), H = y, --H);
        for (; y = a.charAt(++H);) {
          y === bc || R ? (m += "~", y === bc && (R = !R)) : m += y;
        }
        m = Q(m, O, "^");
        m = Q(m, D, "{");
        m = Q(m, ca, "}");
      }
      H = 0;
      for (R = a.length; H < R; ++H) {
        y = a.charAt(H);
        z = y === nc;
        E = " " === y;
        y = z ? " " : y;
        aa = m.charAt(H);
        Ca = (P = za) && (z || E);
        za = "|" === aa;
        aa = f["+|~{}^".indexOf(aa) + 1];
        if ("\n" !== y) {
          if (M || !cb || u) {
            if (2 === M) {
              if ("\u1d47/\u1d04" === a.substr(H, 3)) {
                y = "\u1d47/\u1d04", H += 2;
              } else {
                switch(a.substr(H, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    y = a.substr(H, 2), ++H;
                }
              }
            }
            k || (Z = E && "str" === aa ? "pbList-strsp" : z ? "" : !E && aa ? "pbList-" + aa : "");
          } else {
            Z = ib.indexOf(y), Z = -1 === Z ? "" : ib.indexOf(y).toString(16).toUpperCase(), Z = (Z = 1 === Z.length ? "0" + Z : Z) ? "pbChr" + Z : "", Z = k ? z || E ? "" : Z || "" : E && "str" === aa ? "pbList-strsp" : E || !Z ? "" : aa ? (Z ? Z + " " : "") + "pbList-" + aa : Z;
          }
          z = J;
          Ca ? (y = " ", Z = "") : za && (S && !Va || 9.5 > A) ? (za && !P && (Oa = 4 - (Aa(a.substr(H)) + "").length), 7.5 > A ? z = ja ? "position:relative;top:-4px;left:" + 12 * Oa + "px" : {position:"relative", top:"-4px", left:12 * Oa + "px"} : z = ja ? "position:relative;left:" + 12 * Oa + "px" : {position:"relative", left:12 * Oa + "px"}) : E && 7.5 > A && (Z = "pbList-strsp");
          ja ? g.push("<font" + (Z ? ' class="' + Z + '"' : "") + (z ? ' style="' + z + '"' : "") + ">" + y + "</font>") : e || b ? xa(d, "font", {"class":Z, style:z}, y) : Ga(d, "font", {"class":Z, style:z}, y);
        } else {
          P = za = !1, ja ? g.push(y) : e || b ? La(d, y) : Ha(d, y);
        }
      }
      if (e) {
        ja ? d.innerHTML = g.join("") : b && ea.appendChild(d), Ra && Ba(d, "visibility", t);
      } else {
        if (ja) {
          a = I.createElement("font");
          for (a.innerHTML = g.join(""); g = a.firstChild;) {
            d.parentNode.insertBefore(g, d);
          }
          fb(d);
        } else {
          b ? ea.parentNode.replaceChild(d, ea) : fb(d);
        }
      }
    }
    1.9 > S && ub(function(a) {
      if (a) {
        a = v("*");
        for (var d = 0, k = a.length, u; d < k; ++d) {
          u = a[d], "B" !== Ma(u) && -1 !== (" " + u.className).toLowerCase().indexOf(" pbchr") && (Fb(u, "title") || ta(u, "title", u.textContent), u.textContent = " ");
        }
        return !0;
      }
    });
    ub(function(a) {
      if (a) {
        a = q("pbChrCS");
        for (var d = 0, k = a.length; d < k; ++d) {
          dc(a[d]);
        }
        return !0;
      }
    });
    var ka = [], ia = S && 0 > B.conpare(na, "0.9.9"), D, ca, O, x, M, ba, sa, da, ja, Ra, b;
    ub(function(a) {
      var u, G, Q, L, f, e, g, m, y, H, R, P, Z, Oa;
      function d(t) {
        var ea = Na(t, "pbTip"), z, E;
        if (ea) {
          z = ea.charAt(0);
          E = "_" === z;
          ea = (E ? ea.charAt(2) : z).toUpperCase().charCodeAt(0) - 65;
          f ? xa(t, "div", {style:{left:7 * ea + 3 + "px"}}) : (z = Na(t, "title"), pb(t, "pbTip"), pb(t, "title"), E = xa(t, "div", {className:"pbTip" + (E ? "Btm" : ""), style:{width:z.length + u + "em", left:7 * ea - (ia ? 0 : 5) + "px"}}, z), E = xa(E, "div"), .9 <= S && ia && Ba(E, "left", "2px"));
        }
        L && 0 <= t.className.indexOf("pbColor") && xa(t, "u");
      }
      function k(t, ea) {
        var z = Na(t, "pbGhst"), E = t.className, aa = E.split("pbCsr")[1] || "", Ca = E.split("pbAlp")[1] || "", za, V;
        if ("CS" === z) {
          za = "_";
        } else {
          za = z, 3 === za.length && (za = za.substr(0, 2)), za = ib[parseInt(za, 16)] || "~";
        }
        aa = aa.split(" ")[0];
        if (Ca = Aa(Ca.split(" ")[0])) {
          G && (E = E.split("pbChr")[1].split(" ")[0], Ba(t, "backgroundPosition", ma(E, 2, P) + "px " + -24 * (10 - Ca) + "px")), !ea && Q && Ga(t, "a").appendChild(t);
        }
        z && (Ca = 10 - Ca, G && (V = {backgroundPosition:ma(z, 2, P) + "px " + -24 * (10 - Ca) + "px"}), pb(t, "pbGhst"), m = Ga(t, "b", {className:"pbChr" + z + " pbCsr" + aa + " pbAlp" + Ca, style:V}, za), dc(m));
        dc(t);
      }
      if (a) {
        u = 6 > p ? 2 : 0;
        G = 7.2 > A || .9 > S || Xa;
        Q = 1.1 === S;
        L = 1.4 > S;
        a = v("SAMP");
        f = 8 === p;
        e = Ka;
        Bb && fa(Ua, "pbLCD-AX");
        if (a.length) {
          for (y = -1; g = a[++y];) {
            if (la(N(g), "pbLCD")) {
              P = la(g, "PB-120") || la(g, "FX-795P");
              Z = Eb(g);
              for (g = Z.length; R = Z[--g];) {
                switch(Ma(R)) {
                  case "A":
                    (2 > e || f) && d(R);
                    if (2 > e) {
                      Oa = Eb(R);
                      for (H = Oa.length; H;) {
                        k(Oa[--H], !0);
                      }
                    }
                    Ib ? ta(R, "href", "javascript:void(0)") : (Gb(R, "click", Y), ka.push(R));
                    break;
                  case "B":
                    2 > e && k(R, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Nb(function() {
      for (var a; a = ka.shift();) {
        $b(a, "click", Y);
      }
    });
    6 === p && (new jb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    D = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" ");
    ca = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" ");
    O = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + cc + ic).split("");
    x = [];
    if (.9 <= S && 0 >= B.conpare(na, "0.9.1")) {
      fa(Pa, "pbLCD-gecko09To091");
      da = !0;
    }
    ub(function(a) {
      var d, k, u;
      if (a) {
        a = v("*");
        d = -1;
        for (ba = $a + "pbFont/x3mask" + (da ? ".gecko0.9.1.gif" : ".png"); k = a[++d];) {
          if (la(k, "pbList")) {
            u = Na(k, "pbskip");
            ra(k, 0 <= u.indexOf("prettify"), 0 <= u.indexOf("fallback:img"));
          } else {
            la(k, "pbFont") && ra(k, !0, !0);
          }
        }
        x.length && (r("[pbList] " + x.length / 5 + " elements found. WebFont test start."), ha());
        return !0;
      }
    });
    ja = !1;
    Ra = 8 > A;
    b = !ja && !Ra && !(6 > p) && I.createDocumentFragment && !!Ua.replaceChild;
    ab.prettify = ra;
    ab.fixLiga = function(a, d) {
      ra(a, !0, !0, d);
    };
  })();
  lc = I.scripts || v("script");
  $a = lc[lc.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  r("[p_assetUrl] " + $a);
  Hb(function() {
    var h;
    (h = Mb("logger")) || alert("#logger not found!");
    h ? (r = j, tb = function(w) {
      xa(h, "DIV", {style:{color:"red"}}, w);
    }, C.onerror = function(w, U, ha) {
      tb(w + ", " + U + ", " + ha);
      return !0;
    }) : C.console ? (r = console.log, tb = console.error) : A ? (r = qa, tb = opera.postError) : r = tb = qa;
    for (; Ya.length;) {
      r(Ya.shift());
    }
    for (; Za.length;) {
      tb(Za.shift());
    }
    Ya = Za = J;
    function j(w) {
      xa(h, "DIV", J, w);
    }
    j = !1;
  });
  6.1 > Ea && Gb(C, "scroll", sb);
  Nb(Tb);
  6.1 > Ea && Gb(C, "scroll", Lb);
  Nb(Ub);
  10 > p && (11 !== Jb || 5 !== p) || (9 > A || 1 > S || !Xa && !C.addEventListener ? I.write('<link href="' + $a + Ab + '" rel="stylesheet"' + (8 > A ? "" : ' media="screen,handheld,projection,print"') + ">") : Hb(function() {
    xa(wb, "link", {href:$a + "" + Ab, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

