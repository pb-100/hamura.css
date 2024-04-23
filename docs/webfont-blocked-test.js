/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Function.prototype.apply||(Function.prototype.apply=function(_x,_y){var f=this,x=_x!=null?_x:{},y=_y||[],j=y.length,i=0,r,a,u;x.__apply=f;if(!x.__apply)a=x.constructor.prototype.__apply=f;switch(j){case 0:r=x.__apply();break;case 1:r=x.__apply(y[0]);break;case 2:r=x.__apply(y[0],y[1]);break;case 3:r=x.__apply(y[0],y[1],y[2]);break;case 4:r=x.__apply(y[0],y[1],y[2],y[3]);break;case 5:r=x.__apply(y[0],y[1],y[2],y[3],y[4]);break;case 6:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5]);break;case 7:r=x.__apply(y[0],
y[1],y[2],y[3],y[4],y[5],y[6]);break;case 8:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7]);break;case 9:r=x.__apply(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]);break;default:r=[];for(;i<j;++i)r[i]="y["+i+"]";r=eval("x.__apply("+r.join(",")+")")}a?delete x.constructor.prototype.__apply:x.__apply=u;return r});
Function.prototype.call||(Function.prototype.call=function(){for(var b=arguments,c=[],a=1,d=b.length;a<d;++a)c[a-1]=b[a];return this.apply(b[0],c)});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
var q, tb;
ua = [];
ua.conpare = function(ab, A) {
  var B = 0, qa, I, Wa = (ab + "").split("."), jb = (A + "").split("."), Ra = Wa.length, Ca, k;
  for (qa = jb.length; "0" === Wa[Ra - 1];) {
    --Ra;
  }
  for (; "0" === jb[qa - 1];) {
    --qa;
  }
  for (I = Ra < qa ? Ra : qa; B < I; ++B) {
    Ca = Wa[B] - 0;
    k = jb[B] - 0;
    if (Ca !== k) {
      return Ca > k ? 1 : -1;
    }
  }
  return Ra > qa ? 1 : Ra === qa ? 0 : -1;
};
(function(ab, A, B, qa, I, Wa, jb, Ra) {
  function Ca(F, ra) {
    var ka = Wa(F.split(ra)[1]);
    return 0 <= ka ? ka : 0;
  }
  function k(F, ra) {
    return 0 <= F.indexOf(ra);
  }
  function Pb(F) {
    return k(F, "Linux armv") || k(F, "Linux aarch") || k(F, "Linux i686") || k(F, "Linux x86_64");
  }
  function kb(F, ra) {
    for (var ka in ra) {
      if (ka === F) {
        return !0;
      }
    }
  }
  function n(F, ra) {
    var ka = "", Sa = -1, Da;
    if (F = F.split(ra)[1]) {
      for (; Da = F.charCodeAt(++Sa);) {
        if (48 <= Da && 57 >= Da || 46 === Da) {
          ka += F.charAt(Sa);
        } else {
          break;
        }
      }
      for (Sa = ka.length; Sa;) {
        if (46 === ka.charCodeAt(--Sa)) {
          ka = ka.substr(0, Sa);
        } else {
          break;
        }
      }
    }
    return ka;
  }
  function K(F) {
    for (var ra = arguments, ka = 1, Sa = ra[0], Da; ka < ra.length; ++ka) {
      0 > za(Sa, Da = ra[ka]) && (Sa = Da);
    }
    return Sa;
  }
  function W(F) {
    return F === F + "" ? F : F === F - 0 ? "" + F : F.min && F.max ? F.min + "~" + F.max : F.min ? F.min + "~" : "~" + F.max;
  }
  var za = ab.conpare, c = qa.userAgent, ma = qa.appVersion, Ta = Wa(ma) || 0, L = qa.platform, Oa = B.documentElement, wb = Oa && Oa.style, na = B.documentMode, p = I.width, Xa = I.height, lb, z, T, Ua, fb, oa, Ea, Ib, xa, xb, Ia, yb, Yb, Qb, Jb, pa, zb, Ja, Ab, Bb, gb, Ka, cb, Zb, Pa, mb, db, Cb, Rb, Kb, Sb, nb, X, Db, ob, Ya, Za, sb, Tb, Lb, Ub, hb, Mb, u, r, N, U, Eb, Aa, Ga, La, Ha, eb, Ma, Na, va, pb, Fb;
  I = A.HTMLAudioElement;
  lb = A.performance;
  z = A.Int8Array;
  T = A.ontouchstart !== Ra;
  Ua = n(ma, "Version/") || n(c, "Version/");
  fb = A.operamini;
  oa = !fb && A.opera;
  Ea = oa && ("function" === typeof oa.version ? oa.version() : K(n(c, "Opera "), Ua, Ta));
  Ib = A.opr;
  xa = !oa && (B.all || na);
  na = xa && (na ? na : A.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : A.attachEvent ? 5 : 4);
  Oa = !xa && Oa.msContentZoomFactor;
  xb = !Oa && (A.chrome || A.chromium);
  Ia = !xa && function() {
    for (var F in wb) {
      if (0 === F.indexOf("Moz")) {
        return !0;
      }
    }
  }();
  yb = k(c, "UCWEB");
  Yb = yb && n(c, " U2/");
  Qb = yb && n(c, "; wds ");
  Jb = n(c.split("_").join("."), "; iPh OS ");
  pa = n(c, "; Adr ");
  zb = k(ma, "YJApp-ANDROID");
  Ja = k(L, "Android") || Ia && k(ma, "Android") || zb;
  pa = n(L, "Android ") || n(ma, "Android ") || n(c, "Android ") || pa;
  Ab = k(L, "Linux");
  Bb = "MacIntel" === L && qa.standalone !== Ra;
  gb = Ia && n(c, "Goanna/");
  Ka = !gb && Ia && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; "));
  cb = n(c, "Firefox/");
  n(c, "Opera/");
  Zb = A.FNRBrowser;
  Pa = Ca(c, "AppleWebKit/");
  mb = n(c, "Chrome/");
  db = n(ma, "Iron/");
  Cb = n(c, "OPR/");
  Rb = n(ma, "KHTML/");
  Kb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  Sb = n(c, "Silk/");
  nb = Ca(c, "SamsungBrowser/");
  X = !nb && function() {
    for (var F = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ra, ka = F.length; ra = F[--ka];) {
      if (k(c, ra)) {
        return 2 > Wa(Ua) ? Ua : 0.9;
      }
    }
    F = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ka = F.length; ra = F[--ka];) {
      if (k(c, ra)) {
        return Ua;
      }
    }
  }();
  Db = xb && 534.3 >= Pa;
  ob = Pb(L);
  Ya = ob && !k(c, L) && Pb(c);
  T = T && (Pa || Ia) && Ya || !pa && zb;
  zb = !!A.ReactNativeWebView;
  ob = ob && function() {
    for (var F in A) {
      if (0 === F.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  Za = (Ya = A.puffinDevice) && Ya.clientInfo;
  sb = (Ya = Za && "iOS" === Za.os && Za.osVersion) && Za.model;
  Za = !na && B.registerElement;
  Tb = !na && B.execCommand;
  Lb = A.webkitCancelAnimationFrame;
  Ub = Ab && Za && "11.0.696.34" === mb;
  hb = A._firefoxTV_playbackStateObserverJava;
  Mb = Ca(c, "diordnA ");
  if ("Nitro" === L) {
    u = 1;
    r = 8.5;
    N = 9;
    U = r;
  } else if ("Nintendo DSi" === L) {
    u = 2, r = Ea, N = 9, U = r;
  } else if ("New Nintendo 3DS" === L || k(c, "iPhone OS 6_0") && 320 === p && 240 === Xa) {
    u = 4, r = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === L) {
    u = 3, r = Ua, Pa = 535;
  } else if (!L && k(ma, "Nintendo Switch;")) {
    u = 7, r = n(ma, "NintendoBrowser/");
  } else if (A.wiiu) {
    u = 6, r = n(ma, "NintendoBrowser/"), N = 16, U = n(ma, "AppleWebKit/") || (Lb ? 536 : 534), r || (r = Lb ? 4 : 2, k(ma, "Macintosh;") || k(ma, "Windows NT") && k(ma, "Touch"));
  } else if (oa && oa.wiiremote) {
    u = 5, r = n(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === L) {
    u = 9, r = n(ma, L + " ");
  } else if ("PSP" === L) {
    u = 8;
    r = n(c, "(PlayStation Portable); ");
    Eb = 3.2;
  } else if ("PlayStation 5" === L) {
    u = 12, r = n(ma, L + "/");
  } else if ("PlayStation 4" === L) {
    u = 11, r = n(ma, L + "/");
  } else if ("PlayStation 3" === L) {
    u = 10, r = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 "), 0 > za(r, "4.10") && (N = 27, U = r);
  } else if (k(c, "Xbox One")) {
    u = 14, r = 1;
  } else if (k(c, "Xbox")) {
    u = 13, r = 1;
  } else if (2 === Ta && k(c, "Sony/COM2/")) {
    u = 17;
    r = 2;
    Eb = 3.4;
    Aa = !0;
  } else if (0 === L.indexOf("iP") || Jb || Ya || Bb) {
    if (Ya) {
      switch(r = Ya, sb.substr(0, 4)) {
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
          eb = !0;
      }
    } else {
      Jb ? r = Jb : (r = n(ma.split("_").join("."), "OS "), kb("isSecureContext", A), kb("enableWebGL", A), kb("sameOrigin", A));
      if (!r || Zb) {
        r = A.PointerEvent ? 13 : A.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : A.WebAssembly ? 11.2 : A.HTMLMeterElement ? 10.3 : A.Proxy ? 10.2 : A.HTMLPictureElement ? 9.3 : jb.isNaN ? 9.2 : A.SharedWorker ? lb && lb.now ? 8 : 8.4 : Tb ? 7.1 : A.webkitURL ? 6.1 : A.Worker ? 5.1 : z ? 4.3 : I ? 4.1 : 3.2;
      }
      Ma = p === 1.5 * Xa || 1.5 * p === Xa;
      0 === L.indexOf("iPhone") ? (Ga = 0, La = !0) : 0 === L.indexOf("iPad") || Bb ? (Ga = 1, Ha = !0) : 0 === L.indexOf("iPod") && (Ga = 2, eb = !0);
    }
    N = !Ya && (qa.standalone || (Ha || 12 > r) && kb("webkitFullscreenEnabled", B) || 11 <= r && 13 > r && qa.mediaDevices) ? 17 : 18;
    u = 24;
    U = r;
  } else if (k(c, "Kobo")) {
    u = 18, N = 22, U = 2.2, Ja = !0;
  } else if (k(c, "EBRD")) {
    u = 19, N = 22, U = 2.2;
  } else if (B = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    u = 29, r = B;
  } else if (A.onmoztimechange !== Ra) {
    u = 30, r = 18.1 > Ka ? "1.0.1" : 19 > Ka ? 1.1 : 27 > Ka ? 1.2 : 29 > Ka ? 1.3 : 31 > Ka ? 1.4 : 33 > Ka ? 2 : 35 > Ka ? 2.1 : 38 > Ka ? 2.2 : 45 > Ka ? 2.5 : 2.6, k(c, "Mobile") ? La = !0 : k(c, "Tablet") ? Ha = !0 : k(c, "TV");
  } else if (A.palmGetResource) {
    u = 32, r = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (La = !0);
  } else if (B = n(c, "Tizen ")) {
    u = 33, r = B, N = 25, U = nb, La = !0;
  } else if (B = n(c, "Windows Phone ") || n(ma, "Windows Phone OS ") || Qb) {
    u = 23, r = B, La = !0;
  } else if (Oa && "ARM" === L) {
    u = 23, r = 10, La = !0;
  } else if (xa && k(ma, "ZuneWP")) {
    u = 23, r = 11 === na ? 8.1 : 10 === na ? 8 : 9 === na ? 7.5 : 7 === na ? 7 : "?", La = !0;
  } else if (k(c, "FOMA;")) {
    u = 16, La = !0;
  } else if (k(c, "SoftBank;")) {
    u = 16, La = !0;
  } else if (k(c, "KFMUWI")) {
    Na = !0;
    r = 6.3;
    va = Ha = !0;
  } else if (k(c, "KFKAWI")) {
    Na = !0, r = 6, va = Ha = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    Na = !0, r = 5, va = Ha = !0;
  } else if (k(c, "KFGIWI")) {
    Na = !0, r = 5, va = Ha = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    Na = !0, r = 5 <= Wa(pa) ? 5 : 4, va = Ha = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    Na = !0, r = 3, va = Ha = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    Na = !0, r = 2, va = Ha = !0;
  } else if (k(c, "Kindle Fire")) {
    Na = !0, r = 1, va = Ha = !0;
  } else if (B = n(c, "Kindle/")) {
    u = 20, r = B, N = 22, U = 2.2;
  } else if (hb) {
    Na = !0, r = pa || Mb, va = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    Na = !0, r = pa, va = !0;
  } else if (k(c, "MeeGo")) {
    u = 34;
  } else if (k(c, "Maemo")) {
    u = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Kb) {
    u = 22, Aa = !0;
  } else if ("WinCE" === L) {
    u = 21, Aa = !0;
  } else if (0 === L.indexOf("Win")) {
    u = "Win16" === L ? 37 : "Win32" === L ? 38 : "Win64" === L ? 39 : 0, r = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === L.indexOf("Mac")) {
    u = "Mac68K" === L ? 41 : "MacPowerPC" === L || "MacPPC" === L ? 40 : "MacIntel" === L ? 42 : 0;
    if (B = n(c.split("_").join("."), "Mac OS X ")) {
      r = B;
    }
    pb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    u = 36, r = Ua, La = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    u = 44;
  } else if (k(c, "FreeBSD")) {
    u = 45;
  } else if (k(c, "OpenBSD")) {
    u = 46;
  } else if (k(c, "NetBSD")) {
    u = 47;
  } else if (Ja && Ia) {
    k(c, "Android 4.4;") ? Ma = {min:2.3} : 4 <= Wa(pa) ? Ma = pa : Ma = {min:2.2}, r = Ma;
  } else if (Ja && oa) {
    pa ? Ma = pa : Ma = {min:1.6}, r = Ma, k(c, "Tablet") ? Ha = !0 : La = !0;
  } else if (pa) {
    r = pa, Ja = !0;
  } else if (Ab && T || zb || ob) {
    Fb = !0;
    nb ? Ma = {min:4.4} : xb && !Db || Ib || Cb ? Ma = {min:4} : (Ma = pa = wb.touchAction !== Ra ? {min:5} : Za ? 4.4 : z ? qa.connection ? A.searchBoxJavaBridge_ || xb ? jb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Pa ? 3 : 533 <= Pa ? I ? 2.3 : 2.2 : 530 <= Pa ? 2 : 1.5, X && (N = 25, U = X));
    r = Ma;
    Ja = !0;
  } else {
    Ub ? (r = {min:5}, Fb = Ja = !0) : Ab && (k(c, "Ubuntu") ? u = 48 : (B = n(c, "Mint/")) ? (u = 49, r = B) : (B = n(c, "Fedora/")) ? (u = 50, r = B) : u = k(c, "Gentoo") ? 51 : 52);
  }
  Na || Ja && Fb && Sb ? u = 28 : Ja && (u = u || 27);
  N || (va = va || Ja, oa ? (N = va || Aa || La || Ha ? 9 : 8, U = Ea) : xa ? (Ma = Ca(ma, "Trident/") + 4, N = Aa || La || Ha || eb ? 3 : pb && 5 <= na ? 7 : 2, U = na) : Oa ? (N = 23 === u ? 6 : 5, U = n(ma, "Edge/")) : gb ? (N = 13, U = gb) : Ia ? (N = va ? 12 : 11, U = Ka || cb) : nb ? (N = 25, U = nb) : (B = Eb || n(c, "NetFront/")) ? (N = 19, U = B) : (B = n(c, "iCab")) ? (N = 20, U = B) : (B = K(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || fb && Ua) ? (N = 10, U = B, u || (k(c, "iPhone") ? 
  Ga = 0 : k(c, "iPad") ? Ga = 1 : k(c, "iPod") && (Ga = 2), Ga && (u = 24))) : yb ? (N = 26, U = Yb) : Rb ? (N = 15, U = Ta) : Ja && Db ? (N = 22, U = pa) : xb || Ib || Cb ? (N = va ? 23 : 21, U = mb || db) : Ja && Za ? (N = 24, U = 5 > Wa(pa) ? pa : mb) : Ja && (Ua || Fb) ? (N = 22, U = pa) : mb ? (N = va ? 23 : 21, U = mb) : Pa && (N = 16, U = Pa));
  u && (ab[2] = u, r && (ab[3] = W(r)));
  N && (ab[0] = N, U && (ab[1] = W(U)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(ab, A, B, qa, I, Wa, jb, Ra, Ca, k, Pb, kb, n, K) {
  function W(h) {
    if (A[0] === h) {
      return na === na + "" ? Ca(na) : na;
    }
  }
  function za(h) {
    var v = A[3];
    if (A[2] === h) {
      return v === v + "" ? Ca(v) : v;
    }
  }
  function c(h) {
    var v = c.i || (c.i = {}), V = v[h], da, Z;
    if (V) {
      return V;
    }
    V = h.split("-");
    da = V.length;
    if (2 > da) {
      return h;
    }
    for (; 1 < da;) {
      Z = V[--da];
      V[da] = Z.charAt(0).toUpperCase() + Z.substr(1);
    }
    return v[h] = V.join("");
  }
  function ma(h, v, V) {
    h + "" === h && ("a" === h.charAt(2) && (V = !0, h = h.substr(0, 2)), h = "CS" === h ? 7.2 > z ? 117 : .9 > T || 9 > p || 9 > z || Xa ? 1 : 132 : parseInt(h, 16));
    V && (50 === h && (h = 128), 102 < h && 108 > h && (h += 24));
    return (h - 1) * -(6 * (v || 2));
  }
  var Ta = I.body, L = Ta.style, Oa, wb, na = A[1], p = W(2) || W(3), Xa = W(7), lb = W(5) || W(6), z = W(8) || W(9), T = W(11) || W(12), Ua = T && 0 <= A.conpare(na, "1.9.1"), fb = W(13), oa = W(16), Ea = W(17) || W(18), Ib = W(10) || W(26), xa = W(21) || W(23), xb = W(24), Ia = W(22), yb = W(25), Yb = xa || xb || Ia || yb, Qb = xa && Ca(Wa.userAgent.split("Edg/")[1]), Jb = Ca(Wa.appVersion.split("Trident/")[1]) + 4, pa = za(37) || za(38) || za(39), zb = za(40) || za(41) || za(42) || za(43), Ja = 
  .9 > T, Ab = (Xa ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 7.2 > z ? "opr70" : 8 > z ? "opr72" : 9.5 > z ? "opr" + (z | 0) : T && !Ua ? 1.4 <= T ? "gck19" : 1.3 <= T ? "gck13" : 1 <= T ? "gck12" : Ja ? .8 <= T ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Bb, gb, Ka, cb, Zb, Pa, mb, db, Cb, Rb, Kb, Sb, nb, X, Db, ob, Ya, Za, sb, Tb, Lb, Ub, hb, Mb, u, r, N, U, Eb, Aa, Ga, La, Ha, eb, Ma, Na, va, pb, Fb, F, ra, ka, Sa, Da, hc, Gb, $b, Hb, Nb, ub, ac, Vb, 
  Ba, Wb, Xb, ib, bc, nc, ic, jc, cc, kc, oc, pc, qc, lc, qb, rb, bb, Ob, dc, mc, $a;
  za(1) || za(2) || za(3) || za(4) || za(8) || za(9);
  cb = 8 > p || 7.2 > z ? !1 : K;
  Zb = L.transform !== K ? "transform" : L["-o-transform"] !== K ? "-o-transform" : L["-ms-transform"] !== K ? "-ms-transform" : L.MozTransform !== K ? "-moz-transform" : L["-webkit-transform"] !== K ? "-webkit-transform" : "";
  Pa = [];
  mb = [];
  db = [];
  nb = 525 > oa || 3.1 > Ea || 2.2 > Ia || 10 > z || T && !Ua || W(26) || 10 > W(3) || za(34) || za(32) || za(3);
  Ya = [];
  Za = [];
  hb = Ra.now || function() {
    return +new Ra();
  };
  (function() {
    function h() {
      for (var w, O = 0, aa = hb(); O < ea.length;) {
        aa < ea[0].t ? ++O : (w = ea.splice(O, 1)[0], w.f(w.p));
      }
      P = ea.length ? k(h, D) : 0;
    }
    function v() {
      for (var w, O = 0; O < Z.length; ++O) {
        w = Z[O], w.f();
      }
    }
    function V() {
      la && (la = n(la));
    }
    function da() {
      P && (P = Pb(P));
    }
    q = function(w) {
      Ya.push(w);
    };
    tb = function(w) {
      Za.push(w);
    };
    ob = function(w) {
      Z.length || (la = kb(v, sa));
      Z.push({f:w, g:++Fa});
      return Fa;
    };
    sb = function() {
      la && (V(), la = kb(v, sa));
    };
    Tb = V;
    var Z = [], sa = 500, Fa = 0, la, ea, D, ba, P;
    if (5 > p || Xa) {
      B._wdb_onlooptimer = v, v = "_wdb_onlooptimer()";
    }
    X = function(w, O, aa) {
      ea.length || (P = k(h, D));
      ea.push({f:w, p:O, g:++ba, t:hb() + (D < aa ? aa : D)});
      return ba;
    };
    Db = function(w) {
      for (var O = ea.length, aa; aa = ea[--O];) {
        if (aa.g === w) {
          ea.splice(O, 1);
          break;
        }
      }
      return 0;
    };
    Lb = function() {
      P && (da(), P = k(h, D));
    };
    Ub = da;
    ea = [];
    D = Ea | 0 || 530 <= oa && 534 > oa ? 64 : 16;
    ba = 0;
    q("[core] TIMER_INTERVAL:" + D);
    if (5 > p || Xa) {
      B._wdb_ontimer = h, h = "_wdb_ontimer()";
    }
  })();
  (function() {
    function h(b, a, d) {
      var l = ["<", b], t = 1, G, M, Q;
      if (a) {
        for (G in a) {
          Q = a[G];
          if (null != Q && "" !== Q) {
            if ("style" === G) {
              l[++t] = ' style="';
              for (M in Q) {
                for (var e = ++t, f, g = [], m = M.split(""), x = m.length; x;) {
                  f = m[--x], "A" <= f && "Z" >= f && (f = "-" + f.toLowerCase()), g[x] = f;
                }
                l[e] = g.join("") + ":" + Q[M] + ";";
              }
              l[++t] = '"';
            } else {
              "className" === G && (G = "class"), l[++t] = " " + G + '="' + Q + '"';
            }
          }
        }
      }
      l[++t] = ">";
      null != d && (ca && "FONT" !== b ? l[++t] = "<FONT>" + v(d) + "</FONT>" : l[++t] = v(d));
      l[++t] = "</" + b + ">";
      return l.join("");
    }
    function v(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function V(b) {
      var a = "*" === b;
      b = ca ? a ? I.all : I.all.tags(b.toUpperCase()) : 6 > p && a ? I.all : I.getElementsByTagName(b);
      a = [];
      for (var d = 0, l = b.length; d < l; ++d) {
        a[d] = b[d];
      }
      return a;
    }
    function da(b) {
      return ca ? b.parentElement : b.parentNode;
    }
    function Z(b, a, d, l, t, G) {
      var M, Q;
      if (ca) {
        M = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        Q = U(2 > b ? N(a) : a);
        Q = 2 > b ? Q.indexOf(a) + b : Q.length;
        a.insertAdjacentHTML(M, h(d, l, t));
        a = U(a)[Q];
        null != t && ("FONT" === d ? a.nodeType = 3 : (a.nodeType = 1, a.children[0].nodeType = 3));
      } else if (fa) {
        a = I.createElement(h(d, l));
      } else {
        a = G ? I.createElementNS("http://www.w3.org/2000/svg", d) : I.createElement(d);
        if (l) {
          for (M in l) {
            if ((b = l[M]) || 0 === b) {
              switch(M) {
                case "class":
                case "className":
                  F(a, b);
                  break;
                case "style":
                  G = a.style;
                  for (Q in b) {
                    G[Q] = b[Q];
                  }
                  break;
                default:
                  va(a, M, b);
              }
            }
          }
          !z || "a" !== d && "A" !== d || !l.href || l.tabindex || va(a, "tabindex", "-0", !0);
        }
        Qa || null != t && Fa(a, t);
      }
      return a;
    }
    function sa(b, a) {
      var d;
      if (ca) {
        return Z(2, b, "FONT", K, a);
      }
      d = I.createTextNode("" + a);
      b.appendChild(d);
      return d;
    }
    function Fa(b, a) {
      z ? (b.firstChild && (b.innerHTML = ""), sa(b, a)) : b.textContent = a;
    }
    function la(b) {
      return "A" === ea(b) && w(b, "href", !0);
    }
    function ea(b) {
      return b.tagName.toUpperCase();
    }
    function D(b, a, d) {
      if (8 > z || 5.5 > p) {
        a = c(a);
      }
      b = b.getAttribute(a);
      return !d && z && "tabindex" === a ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    }
    function ba(b, a, d, l) {
      if (!l && z) {
        if ("tabindex" === a) {
          if ("-1" === d) {
            P(b, a, !0);
            return;
          }
          !d && la(b) && (d = "-0");
        } else {
          "href" === a && "-0" !== D(b, "tabindex", !0) && "A" === ea(b) && ba(b, "tabindex", "-0", !0);
        }
      }
      if (8 > z || 5.5 > p) {
        a = c(a);
      }
      b.setAttribute(a, d);
    }
    function P(b, a, d) {
      if (!d && z) {
        if ("tabindex" === a) {
          "-0" !== D(b, a, !0) && la(b) && ba(b, a, "-0", !0);
          return;
        }
        "href" === a && "-0" === D(b, "tabindex", !0) && P(b, "tabindex", !0);
      }
      if (8 > z || 5.5 > p) {
        a = c(a);
      }
      b.removeAttribute(a);
    }
    function w(b, a, d) {
      if (!d && z && "tabindex" === a && la(b)) {
        return "-0" !== D(b, a, !0);
      }
      if (8 > z || 5.5 > p) {
        a = c(a);
      }
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    }
    function O(b, a) {
      9 > p ? b.className = a : b.setAttribute("class", a);
    }
    function aa(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    function ta(b, a, d) {
      if (8 > z || 5.5 > p) {
        a = c(a);
      }
      b.style[a] = d;
    }
    var ca = 5 > p, fa, Qa;
    Oa = V("html")[0];
    wb = V("head")[0];
    Mb = function(b) {
      return B[b] || I[b] || I.getElementById(b);
    };
    u = V;
    r = function(b) {
      var a = [], d = 0, l, t = -1, G, M, Q;
      if (9 > p || !I.getElementsByClassName) {
        G = 6 > p ? I.all : I.getElementsByTagName("*");
      } else {
        M = !0;
        G = I.getElementsByClassName(b);
      }
      for (l = G.length; d < l; ++d) {
        Q = G[d];
        if (M || (ca || 1 === Q.nodeType) && aa(Q, b)) {
          a[++t] = Q;
        }
      }
      return a;
    };
    N = da;
    U = function(b) {
      b = ca ? b.children : b.childNodes;
      for (var a = [], d = b.length; d;) {
        a[--d] = b[d];
      }
      return a;
    };
    Eb = function(b) {
      var a = !(7.03 < z && 7.2 > z) && b.children;
      b = a ? a : b.childNodes;
      for (var d = [], l = b.length, t = -1, G; l;) {
        if (G = b[--l], ca) {
          3 !== G.nodeType && (d[++t] = G);
        } else {
          if (a || 1 === G.nodeType) {
            d[++t] = G;
          }
        }
      }
      return d;
    };
    Aa = function(b, a, d, l, t) {
      a = Z(2, b, a, d, l, t);
      ca || (b.appendChild(a), Qa && null != l && (5.5 > p ? sa(a, l) : Fa(a, l)));
      return a;
    };
    Ga = function(b, a, d, l, t) {
      a = Z(0, b, a, d, l, t);
      ca || (da(b).insertBefore(a, b), Qa && null != l && (5.5 > p ? sa(a, l) : Fa(a, l)));
      return a;
    };
    La = sa;
    Ha = function(b, a) {
      var d;
      if (ca) {
        return Z(0, b, "FONT", K, a);
      }
      d = I.createTextNode("" + a);
      N(b).insertBefore(d, b);
      return d;
    };
    eb = function(b) {
      if (N(b)) {
        if (ca) {
          b.outerHTML = "";
        } else {
          return 5.5 > p && 1 === b.nodeType && (b.style.filter = ""), N(b).removeChild(b), b;
        }
      } else {
        q("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    fa = 9 > p;
    Qa = fa;
    Ma = ea;
    Na = D;
    va = ba;
    pb = P;
    Fb = w;
    F = O;
    ra = aa;
    ka = function(b, a) {
      var d;
      if (!aa(b, a)) {
        if (d = b.className) {
          d += " ";
        }
        O(b, d + a);
      }
    };
    Sa = function(b, a) {
      var d;
      if (aa(b, a)) {
        d = b.className.split(" ");
        d.splice(d.indexOf(a), 1);
        O(b, d.join(" "));
      }
    };
    Da = ta;
    hc = function(b, a) {
      var d = -1, l, t, G;
      if (5.5 > p || 7.1 > z) {
        if (p) {
          if (5.5 > p) {
            l = "";
            t = b.style.cssText.split(";");
            G = -1;
            for (var M, Q; M = t[++G];) {
              Q = M.split(":")[0], l += ";" + Q.toLowerCase() + ":" + M.substr(Q.length + 1);
            }
            l = l.substr(1);
          } else {
            l = b.style.cssText;
          }
          if (l) {
            for (l = l.split(";"); t = l[++d];) {
              ta(b, t.split(":")[0], "");
            }
            d = -1;
          }
        } else {
          b.setAttribute("style", "");
        }
        if (a) {
          for (l = a.split(";"); t = l[++d];) {
            G = t.split(":")[0], ta(b, G, t.substr(G.length + 1));
          }
        }
      } else {
        9 > z || 1 > T ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
  })();
  (function() {
    function h() {
      return t ? M ? 2 : G ? 3 : 1 : 0;
    }
    function v(e) {
      $b(B, "load", v);
      v = K;
      da(Pa, e, !0);
      Pa = K;
    }
    function V(e, f) {
      ub(function() {
        var g = D(e);
        f(g);
        g.addListener(f);
        return !0;
      });
    }
    function da(e, f, g) {
      for (var m = 0; m < e.length; ++m) {
        !0 === e[m](f) && (e.splice(m, 1), --m);
      }
      g && (e.length = 0);
    }
    function Z(e, f, g) {
      Pa || P.length || X(sa);
      P.push(e, f, g);
    }
    function sa() {
      var e = P, f;
      for (P = []; f = e.shift();) {
        da(f, e.shift(), e.shift());
      }
    }
    function Fa(e, f, g, m) {
      var x, J, R;
      if (ca) {
        e.removeEventListener(f, g, m ? w ? m : m.capture || !0 === m : !1);
      } else {
        m = O[f];
        x = "on" + f;
        if (m) {
          if (fa) {
            Qa.push(e, f, g);
          } else {
            f = 0;
            for (J = m.length; f < J; f += 2) {
              m[f] === e && (m[f + 1] === g ? m.splice(f, 1) : R = !0);
            }
            R || (aa ? e.detachEvent(x, la) : p ? (e[x] = qa, e[x] = null) : delete e[x]);
          }
        }
      }
    }
    function la(e) {
      var f = e || event, g = f.type, m, x, J, R, wa;
      e = O[g];
      g = "on" + g;
      m = 0;
      x = e.length;
      ++fa;
      5 > p ? f = {type:event.type, target:event.srcElement, preventDefault:j, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : p ? (f.target = f.srcElement, f.preventDefault = function() {
        f.returnValue = !1;
      }, f.stopPropagation = function() {
        f.cancelBubble = !0;
      }) : ta && (f.h = f.stopPropagation, f.stopPropagation = function() {
        J = !0;
      });
      for (; m < x; m += 2) {
        R = e[m];
        if (R === this) {
          wa = e[m + 1];
          5.5 > p ? (R[g] = wa, R[g](f), R[g] = la) : wa.call(R, f);
        } else {
          7.2 > z && this === I && R === B && e[m + 1].call(R, f);
        }
      }
      if (p) {
        return f.preventDefault = f.stopPropagation = qa, f.preventDefault = f.stopPropagation = K, f.returnValue;
      }
      ta && (f.defaultPrevented && "click" === f.type && "A" === f.target.tagName && f.target.getAttribute("href") && (b = !0), J && !b && f.h(), f.h = f.stopPropagation = K);
      --fa;
      if (0 === fa) {
        for (e = Qa; e.length;) {
          Fa(e.shift(), e.shift(), e.shift());
        }
      }
      function j() {
        event.returnValue = !1;
      }
      j = !1;
    }
    function ea() {
      var e = 9 === ba.offsetWidth;
      Vb !== e && (Z(mb, Vb = e), q("p_cssAvailability:" + Vb));
    }
    var D = B.matchMedia, ba, P = [], w, O, aa, ta, ca, fa, Qa, b, a, d, l, t, G, M, Q;
    Pa.push(function() {
      V = K;
      ba = Aa(Ta, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Hb(function() {
        P.length && X(sa);
      });
    });
    Gb = function(e, f, g, m) {
      var x, J;
      if (ca) {
        e.addEventListener(f, g, m ? w ? m : m.capture || !0 === m : !1);
      } else {
        m = O[f];
        x = "on" + f;
        if (m) {
          f = 0;
          for (J = m.length; f < J; f += 2) {
            if (m[f] === e && m[f + 1] === g) {
              return;
            }
          }
          m.push(e, g);
        } else {
          m = O[f] = [e, g];
        }
        aa ? e.attachEvent(x, la) : (g = e[x], g !== la && "function" === typeof g && m.unshift(e, g), e[x] = la);
      }
    };
    $b = Fa;
    w = !p && !Xa && (new jb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
    O = {};
    aa = !1;
    ta = 525.13 > oa;
    ca = !ta && !Xa && B.addEventListener;
    fa = 0;
    Qa = [];
    ta && Oa.addEventListener("click", function(e) {
      if (b) {
        return b = !1, e.preventDefault(), !1;
      }
    });
    Hb = function(e) {
      Pa ? Pa.push(e) : alert("Load event has already been dispatched!");
    };
    Nb = function(e) {
      d && d.push(e);
    };
    if (419.3 >= oa) {
      a = function() {
        var e;
        if (a) {
          e = I.readyState;
          "loaded" === e || "complete" === e ? (a = K, v()) : X(a);
        }
      };
      X(a);
    } else {
      Gb(B, "load", v), Ja && X(function() {
        v && v();
      }, 999);
    }
    if (p || !Ja && 1.8 > T) {
      Gb(B, "unload", function(e) {
        da(d, e, !0);
      });
      d = [];
    }
    ub = function(e) {
      mb.push(e);
    };
    Hb(function() {
      ea();
      ob(ea);
    });
    ac = function(e) {
      db && db.push(e);
    };
    l = 60 > T || fb;
    if (89 <= T || 89 <= xa || pa && 79 <= Qb || D && (D("(forced-colors:none)").matches || D("(forced-colors:active)").matches)) {
      Wb = !0, V("(forced-colors:active)", function(e) {
        t = e.matches;
        Ba = h();
        Z(db, Ba);
        q("(forced-colors:active):" + Ba);
      });
    } else if (10 <= p || lb || pa && Qb) {
      Wb = !0, V("(-ms-high-contrast:black-on-white)", function(e) {
        t = G = e.matches;
        Ba !== h() && (Ba = h(), Z(db, Ba), q("(-ms-high-contrast:black-on-white):" + Ba));
      }), V("(-ms-high-contrast:white-on-black)", function(e) {
        t = M = e.matches;
        Ba !== h() && (Ba = h(), Z(db, Ba), q("(-ms-high-contrast:white-on-black):" + Ba));
      }), V("(-ms-high-contrast:active)", function(e) {
        t = e.matches;
        Ba !== h() && (Ba = h(), Z(db, Ba), q("(-ms-high-contrast:active):" + Ba));
      });
    } else if (pa && (p || T && 0 <= A.conpare(na, "1.8.1") || fb)) {
      Q = function() {
        function e(m, x) {
          var J;
          if (x && "transparent" === m) {
            return 382.5;
          }
          if ("#" === m.charAt(0)) {
            return parseInt("0x" + m.substr(1, 2), 16) + parseInt("0x" + m.substr(3, 2), 16) + parseInt("0x" + m.substr(5, 2), 16);
          }
          J = m.split("(")[1].split(",");
          return Ca(J[0]) + Ca(J[1]) + Ca(J[2]);
        }
        var f = I.defaultView, g;
        g = f ? f.getComputedStyle(ba, null) : ba.currentStyle;
        f = (g && g.color || "").split(" ").join("");
        g = (g && g.backgroundColor || "").split(" ").join("");
        f && (t = "#123456" !== f && "rgb(18,52,86)" !== f, G = e(f) < e(g, !0), M = e(f) > e(g, !0), Ba !== h() && (Ba = h(), q("(forced-colors-fallback):" + Ba), Z(db, Ba, l)));
      };
      ub(function(e) {
        if (e) {
          return Da(ba, "color", "#123456"), Da(ba, "backgroundColor", "#123456"), l ? (Q(), db = K) : ob(Q), Q = K, !0;
        }
      });
    } else {
      db = h = K;
    }
  })();
  (function() {
    function h(y) {
      switch(y) {
        case 1:
          return Qa;
        case 2:
          return !!b;
        case 3:
          return !!a;
        case 4:
          return !!d;
        case 5:
          return t;
        case 6:
          return l && !P;
      }
      return !1;
    }
    function v(y) {
      G(y);
      Va && !y && eb(Va);
      G = M = Q = e = f = g = m = wa = H = Va = ha = K;
    }
    function V(y) {
      var Y = '1.6em "' + y + '"';
      q("[webFontTest] testByNativeFontLoaderAPI start.");
      I.fonts.load(Y).then(function(C) {
        q("[webFontTest] fonts.check() : " + I.fonts.check(Y, "i") + ", fonts.length : " + C.length);
        (C = Fa(M)) ? X(v, C) : (q("[webFontTest] mesureWebFont() : false"), Z(!0));
      }, function(C) {
        q("[webFontTest] fonts.load() rejected! " + C);
        cb !== K ? la(cb) : Cb(la);
      });
    }
    function da(y) {
      return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (R = hb(), !1) : y < hb() - R;
    }
    function Z(y) {
      y && (q("[webFontTest] testWebFont start."), R = hb());
      (y = Fa(M, x)) ? (q("[webFontTest] testWebFont mesurement success : " + y), v(y)) : da(x) ? (q("[webFontTest] testWebFont timeout!"), wa ? ea() : ba ? v(0) : cb !== K ? la(cb) : Cb(la)) : X(Z);
    }
    function sa() {
      return Aa(Ta, 5 > p ? "div" : "span", {"aria-hidden":"true", className:Q}, ta);
    }
    function Fa(y, Y) {
      var C = 0, E = -1, ia = [], ya, ja, S;
      if (!ha) {
        ya = -1;
        H = sa();
        for (ha = []; ja = fa[++ya];) {
          Da(H, "fontFamily", ja), ha[ya] = H.offsetWidth;
        }
        q("[webFontTest] default width " + ha.join(", "));
      }
      for (5 > p ? H || (H = sa()) : N(H) || Ta.appendChild(H); ya = fa[++E];) {
        Da(H, "fontFamily", '"' + y + '",' + ya);
        S = H.offsetWidth;
        ca ? ia[E] = S : (ia[E] = S, S !== ha[E] && (C = 1));
      }
      if (ca && S === ia[0] && S === ia[1]) {
        for (q("[webFontTest] Hit... : width=" + S), C = 1, E = -1; 0 <= (S = ha[++E]);) {
          if (S === ia[0] && S === ia[1] && S === ia[2]) {
            q("[webFontTest] Failed! : font[" + E + "]=" + fa[E]);
            C = 0;
            break;
          }
        }
      }
      !p && C && g && (H.textContent = g, S = H.offsetWidth, H.textContent = m, C = S === H.offsetWidth ? 2 : 1, H.textContent = ta);
      H = eb(H);
      Y && (C || da(Y)) && q("[webFontTest] " + y + " " + ia.join(", "));
      return C;
    }
    function la(y) {
      q("[webFontTest] onTestDataURIComplete : " + y);
      y ? (wa = !0, x = aa, q("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), M = M.replace(w, ""), ea()) : v(0);
    }
    function ea() {
      var y, Y;
      if (e) {
        for (; e.length;) {
          y = e.shift();
          Y = e.shift();
          if (h(y)) {
            q("[webFontTest] maybe can use! " + Y);
            Va = Sb(Y, D, f, Va, J);
            return;
          }
        }
      }
      v(0);
    }
    function D(y) {
      y ? Z(!0) : ea();
    }
    mb.splice(0, 0, function() {
      var y;
      if (Vb) {
        Ka = 8 <= p || lb || 9.5 <= z || Ua || fb || 522 <= oa || 3 <= Ea || Ib || Yb ? 3 : 7.2 <= z ? 2 : 6 <= z || T ? 1 : 0;
        if (!Ka && !p && !Xa) {
          y = Aa(Ta, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ka = 6 <= y.offsetWidth ? 2 : 0;
          eb(y);
        }
        q("p_cssGeneratedContentGrade:" + Ka);
        return !0;
      }
    });
    Cb = !1 === cb ? function(y) {
      X(y, !1);
    } : function(y) {
      var C, E;
      function Y(ia) {
        E && (E = Db(E), cb = ia, C.onload = C.onerror = qa, X(y, ia));
      }
      if (cb !== K) {
        q("[dataURITest] already done : " + cb), X(y, cb);
      } else {
        q("[dataURITest] start!");
        C = new Image();
        E = X(Y, !1, 99);
        C.onerror = function() {
          q("[dataURITest] no DATA URI!");
          Y(!1);
        };
        C.onload = function() {
          q("[dataURITest] DATA URI:" + (1 === C.width * C.height));
          Y(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > p && Hb(function() {
      var y = Aa(Ta, "div");
      hc(y, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Bb = 1 < y.offsetHeight;
      eb(y);
    });
    Rb = function(y, Y) {
      function C() {
        var ja;
        if (ia || !ya || E.complete) {
          q("[imageTest] timer -> img.complete. img.width=" + E.width);
          ja = !!E.width;
          gb = gb || ja;
          X(y, ja);
          E.onerror = E.onload = qa;
          E = y = K;
        } else {
          --ya, X(C);
        }
      }
      var E = new Image(), ia, ya = 99;
      q("[imageTest] start.");
      E.onerror = function() {
        q("[imageTest] error!");
        ia = !0;
      };
      E.onload = function() {
        q("[imageTest] onload.");
        ia = !0;
      };
      E.src = Y;
      X(C);
    };
    Kb = function(y, Y, C, E, ia, ya, ja, S) {
      G = y;
      M = Y;
      Q = C;
      e = E;
      f = ia;
      g = ya;
      m = ja;
      x = J = S || O;
      M = w + M;
      q("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      q("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!nb);
      W(10) ? X(v, 1) : nb ? X(v, 0) : !I.fonts || 603 > oa || 11 > Ea ? (q("[webFontTest] No native font loader."), Z(!0)) : (q("[webFontTest] Use Native font loader."), V(M));
    };
    var ba = 9 > p, P = 6 > xa || z || 530 > oa || 5 > Ea || za(10), w = "bad_" + hb() + "_", O = 5E3, aa = 500, ta = "mmmmmmmmmmlliiiiiiiii", ca = 9 <= xa && 18 > xa || 3 > Ia || 7 > Ea || oa && 0 >= A.conpare(na, "536.11"), fa = ["monospace", "sans-serif", "serif"], Qa, b, a, d, l, t, G, M, Q, e, f, g, m, x, J, R, wa, H, Va, ha;
    nb || (ca && xa && q("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + xa), ca && Ea && q("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ea), ca && oa && q("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + oa), ca && Ia && q("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Ia));
    Qa = 14 <= lb || 36 <= xa || 39 <= T || 3 <= fb || 602 <= oa && 0 <= A.conpare("10.12", zb) || 10 <= Ea;
    b = 6 <= xa || T && 0 <= A.conpare(na, "1.9.2") || fb || 533 <= oa || 5 <= Ea || 4.4 <= Ia || 11.5 <= z || lb || 9 <= W(2) || 10 <= W(3);
    a = 2 <= xa || Ua || fb || 525 <= oa || 4 <= Ea || 2.2 <= Ia || 10.1 <= z || lb || 9 <= W(2) || 10 <= W(3);
    d = a;
    l = 5.1 <= pa && 5.2 >= pa && 40 > xa || 6 <= pa && 6.1 > pa && 51 > xa || 37 > xa || 525 <= oa || 3.1 <= Ea || 3 <= Ia || 11.5 <= z;
    t = 4 <= W(2) || 10 <= W(3);
  })();
  (function() {
    Sb = function(D, ba, P, w, O) {
      var aa, ta, ca;
      if (v) {
        q("[CSS Loader] UNSUPPORTED"), X(ba, !1);
      } else {
        if (w) {
          if (xa && w.href) {
            ta = w.cloneNode();
            w.parentNode.insertBefore(ta, w);
            eb(w);
          } else {
            ta = w;
          }
        } else {
          ta = Aa(wb, "link", {type:"text/css", rel:"stylesheet"});
        }
        if (!Fa) {
          (aa = Mb(P)) ? pb(aa, "id") : aa = Aa(Ta, "div", {"aria-hidden":"true", className:P});
          ca = aa.offsetWidth;
          q("[CSS Loader] widthBeforeCSSLoaded = " + ca);
          va(aa, "id", P);
        }
        la(ta, D, ba, aa, ca, O || h);
        return ta;
      }
    };
    var h = 5E3, v = T && 0 > A.conpare(na, "0.9.1"), V = 11 <= p || lb || 9 <= z && 9.5 > z, da = 11 > p, Z = 7.2 <= z && 7.5 > z, sa = 9 > T && !v || 19 > xa || 4.3 > Ia || 2 > yb || 536 > oa || 6 > Ea || 7 <= z && 9 > z && !Z, Fa = !v && !V && !da && !Z && !sa, la = Fa ? function(D, ba, P) {
      q("[CSS Loader] onload + onerror");
      D.onload = j;
      D.onerror = function() {
        D.onload = D.onerror = null;
        X(P, !1);
      };
      D.href = ba;
      function j() {
        D.onload = D.onerror = null;
        X(P, !0);
      }
      j = !1;
    } : V ? function(D, ba, P, w, O) {
      q("[CSS Loader] onload + mesure");
      D.onload = j;
      D.href = ba;
      function j() {
        X(P, ea(w, O));
        D.onload = null;
        w = K;
      }
      j = !1;
    } : da ? function(D, ba, P, w, O) {
      q("[CSS Loader] onreadystatechange + onerror");
      D.onreadystatechange = j;
      D.href = ba;
      function j() {
        if ("loaded" === D.readyState || "complete" === D.readyState) {
          X(P, ea(w, O)), w = K, D.onreadystatechange = qa;
        }
      }
      j = !1;
    } : sa || Z ? function(D, ba, P, w, O, aa) {
      function ta() {
        fa && (Qa = Db(Qa), q("[CSS Loader] onComplete"), b = hb() + 999, X(ca, 0, 99), sa ? fa.onerror = null : fa.removeEventListener("load", ta, !1), fa = K);
      }
      function ca() {
        ea(w, O) ? (X(P, !0), w = P = K) : hb() < b ? X(ca, 0, 99) : (X(P, !1), w = P = K);
      }
      var fa = new Image(), Qa = X(ta, 0, aa), b;
      sa ? (q("[CSS Loader] img.onerror + mesure"), fa.onerror = ta) : (q('[CSS Loader] img.addEventListener("load") + mesure'), fa.addEventListener("load", ta, !1));
      fa.src = D.href = ba;
    } : K, ea = !Fa && !v && function(D, ba) {
      q("[CSS Loader] elmTest.offsetWidth = " + D.offsetWidth);
      return D.offsetWidth !== ba;
    };
  })();
  Xb = String.fromCharCode;
  ib = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
  "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Xb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"];
  bc = ib[7];
  nc = ib[113];
  ic = Xb(160);
  Xb(8194);
  jc = ib[31];
  cc = ib[30];
  kc = ib[63];
  oc = ib[125];
  pc = ib[126];
  qc = Xb(59648);
  lc = (9 === p || T && 0 <= A.conpare(na, "1.8.1") || fb) && !Wb;
  qb = [];
  Ob = 7.2 > z ? function() {
    rb = !rb;
    for (var h = -1, v; v = qb[++h];) {
      -1 !== v.className.indexOf("pbAlp") ? Da(v, "display", rb ? "" : "none") : (ka(v, rb ? "pbChrCS" : "pbChr00"), Sa(v, rb ? "pbChr00" : "pbChrCS"));
    }
  } : lc ? function() {
    rb = !rb;
    for (var h = -1, v; v = qb[++h];) {
      Da(v, "opacity", rb ? 1 : 0);
    }
  } : K;
  dc = ab.startBlinkingIfCursor = function(h) {
    Ob ? ra(h, "pbChrCS") && (bb || !z && !Ba || (bb = kb(Ob, 400)), -1 === qb.indexOf(h) && qb.push(h)) : qb = K;
  };
  ab.stopBlinkingIfCursor = function(h) {
    Ob && (h = qb.indexOf(h), 0 <= h && (qb.splice(h, 1), !qb.length && bb && (n(bb), bb = 0)));
  };
  lc && ac(function(h) {
    h ? bb || (bb = kb(Ob, 400)) : bb && (n(bb), bb = 0);
  });
  Ob && Nb(function() {
    bb && n(bb);
  });
  Wb || ac(function(h) {
    h ? (va(Oa, "forced-colors", 2 === h ? "lod" : 3 === h ? "dol" : "active"), (Zb || 9 === p || 5.5 <= p && 9 > p && Bb) && ka(Oa, "jsCanRotate")) : (pb(Oa, "forced-colors"), Sa(Oa, "jsCanRotate"));
  });
  (function() {
    function h() {
      var a, d;
      h = K;
      w.length ? (sa(a = w.shift(), w.shift(), w.shift(), w.shift()), (d = w.shift()) && X(d, a)) : q("[pbList] complete.");
    }
    function v(a) {
      a ? (q("[pbList] Fallback start!"), ka(Ta, "pbList-noWebFont")) : q("[pbList] image disabled!");
      h();
    }
    function V(a) {
      O = a;
      q("[pbList] WebFont test result : " + !!a);
      a ? h() : gb ? v(!0) : gb !== K ? h() : (q("[pbList] Need imageTest " + aa), Rb(v, aa));
      q("window.offscreenBuffering = " + B.offscreenBuffering);
      V = Kb = v = K;
    }
    function da() {
      da = K;
      Kb(V, "PB-100", "js-myIconFont-testRendering", [1, $a + "pbFont/woff2.css", 2, $a + "pbFont/woff.css", 3, $a + "pbFont/ttf.css", 5, $a + "pbFont/eot.css", 6, $a + "pbFont/svg.css"], "js-myIconFont-testCssReady", "\u208b\u2081", kc);
    }
    function Z(a) {
      this.focus();
      a.preventDefault();
      a.stopPropagation();
    }
    function sa(a, d, l, t) {
      function G(m, x) {
        for (var J = U(m), R = -1, wa; wa = J[++R];) {
          switch(wa.nodeType) {
            case 1:
              G(wa, x);
              break;
            case 3:
              wa.data && Q(wa.data) && x.push(wa);
          }
        }
      }
      function M(m, x) {
        var J = m.children, R = 0, wa = J.length;
        if (wa) {
          for (; R < wa; ++R) {
            M(J[R], x);
          }
        } else {
          (J = m.innerText) && Q(J) && x.push(m);
        }
      }
      function Q(m) {
        return m.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var e = [], f, g;
      if (h) {
        -1 === w.indexOf(a) && (w.push(a, d, l, h, t), ta && da && da());
      } else {
        g = w.indexOf(a);
        0 <= g && w.splice(g, 5);
        for (5 > p ? M(a, e) : G(a, e); f = e.shift();) {
          g = 5 > p ? f.innerText : f.data, 2 !== O ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join(cc)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join(cc)), O && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(kc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(qc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(oc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(pc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(jc)), !d || !l && gb ? Fa(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(nc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(bc).split("&amp;").join("&"), f, d, l) : 5 > p ? f.innerText = g : f.data = g;
        }
        t && X(t, a);
      }
    }
    function Fa(a, d, l, t) {
      function G(ja, S) {
        for (var vb = ""; S;) {
          S & 1 && (vb += ja), S >>= 1, ja += ja;
        }
        return vb;
      }
      function M(ja, S, vb) {
        for (var ec, rc = -1, fc, gc; ec = S[++rc];) {
          for (; 0 <= (fc = ja.indexOf(ec));) {
            gc = ec.length, ja = ja.substr(0, fc) + G(vb, gc) + ja.substr(fc + gc);
          }
        }
        return ja;
      }
      function Q(ja) {
        var S = Ca(ja), vb = "" + S;
        return 0 < S && S === S | 0 && (S = ja.indexOf(vb) + vb.length, S <= ja.length) ? S : 0;
      }
      var e = " area line str cmd fnc syb".split(" "), f = 5 > p || 1 === d.nodeType, g = [], m = "", x, J = -1, R, wa, H, Va, ha, y, Y, C, E, ia, ya;
      if (f) {
        if (Qa) {
          ha = d.style.visibility;
          Da(d, "visibility", "hidden");
        }
        d.innerHTML = "";
      }
      if (b) {
        y = d;
        d = I.createDocumentFragment();
      }
      if (function(ja) {
        var S = ja.indexOf("P");
        if (-1 === S) {
          return !1;
        }
        S = Ca(ja.charAt(S + 1));
        return 0 <= S && 9 >= S;
      }(a)) {
        m = G("+", a.length);
      } else {
        0 <= (x = Q(a)) && (m = G("|", x), J = x, --J);
        for (; x = a.charAt(++J);) {
          x === bc || R ? (m += "~", x === bc && (R = !R)) : m += x;
        }
        m = M(m, P, "^");
        m = M(m, D, "{");
        m = M(m, ba, "}");
      }
      J = 0;
      for (R = a.length; J < R; ++J) {
        x = a.charAt(J);
        Y = x === ic;
        C = " " === x;
        x = Y ? " " : x;
        E = m.charAt(J);
        ia = (wa = ya) && Y;
        ya = "|" === E;
        E = e["+|~{}^".indexOf(E) + 1];
        if ("\n" !== x) {
          if (O || !gb || t) {
            if (2 === O) {
              if ("\u1d47/\u1d04" === a.substr(J, 3)) {
                x = "\u1d47/\u1d04", J += 2;
              } else {
                switch(a.substr(J, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    x = a.substr(J, 2), ++J;
                }
              }
            }
            l || (H = C && "str" === E ? "pbList-strsp" : Y ? "" : !C && E ? "pbList-" + E : "");
          } else {
            H = ib.indexOf(x), H = -1 === H ? "" : ib.indexOf(x).toString(16).toUpperCase(), H = (H = 1 === H.length ? "0" + H : H) ? "pbChr" + H : "", H = l ? H || "" : C && "str" === E ? "pbList-strsp" : C || !H ? "" : E ? (H ? H + " " : "") + "pbList-" + E : H;
          }
          E = K;
          ia ? (x = 6 <= p && 8 > p ? " " : ic, H = "") : ya && (T && !Ua || 9.5 > z) ? (ya && !wa && (Va = 4 - (Ca(a.substr(J)) + "").length), 7.5 > z ? E = fa ? "position:relative;top:-4px;left:" + 12 * Va + "px" : {position:"relative", top:"-4px", left:12 * Va + "px"} : E = fa ? "position:relative;left:" + 12 * Va + "px" : {position:"relative", left:12 * Va + "px"}) : C && 7.5 > z && (H = "pbList-strsp");
          fa ? g.push("<font" + (H ? ' class="' + H + '"' : "") + (E ? ' style="' + E + '"' : "") + ">" + x + "</font>") : f || b ? Aa(d, "font", {"class":H, style:E}, x) : Ga(d, "font", {"class":H, style:E}, x);
        } else {
          wa = ya = !1, fa ? g.push(x) : f || b ? La(d, x) : Ha(d, x);
        }
      }
      if (f) {
        fa ? d.innerHTML = g.join("") : b && y.appendChild(d), Qa && Da(d, "visibility", ha);
      } else {
        if (fa) {
          a = I.createElement("font");
          for (a.innerHTML = g.join(""); g = a.firstChild;) {
            d.parentNode.insertBefore(g, d);
          }
          eb(d);
        } else {
          b ? y.parentNode.replaceChild(d, y) : eb(d);
        }
      }
    }
    1.9 > T && ub(function(a) {
      if (a) {
        a = u("*");
        for (var d = 0, l = a.length, t; d < l; ++d) {
          t = a[d], "B" !== Ma(t) && -1 !== (" " + t.className).toLowerCase().indexOf(" pbchr") && (Fb(t, "title") || va(t, "title", t.textContent), t.textContent = " ");
        }
        return !0;
      }
    });
    ub(function(a) {
      if (a) {
        a = r("pbChrCS");
        for (var d = 0, l = a.length; d < l; ++d) {
          dc(a[d]);
        }
        return !0;
      }
    });
    var la = [], ea = T && 0 > A.conpare(na, "0.9.9"), D, ba, P, w, O, aa, ta, ca, fa, Qa, b;
    ub(function(a) {
      var t, G, M, Q, e, f, g, m, x, J, R, wa, H, Va;
      function d(ha) {
        var y = Na(ha, "pbTip"), Y, C;
        if (y) {
          Y = y.charAt(0);
          C = "_" === Y;
          y = (C ? y.charAt(2) : Y).toUpperCase().charCodeAt(0) - 65;
          e ? Aa(ha, "div", {style:{left:7 * y + 3 + "px"}}) : (Y = Na(ha, "title"), pb(ha, "pbTip"), pb(ha, "title"), C = Aa(ha, "div", {className:"pbTip" + (C ? "Btm" : ""), style:{width:Y.length + t + "em", left:7 * y - (ea ? 0 : 5) + "px"}}, Y), C = Aa(C, "div"), .9 <= T && ea && Da(C, "left", "2px"));
        }
        Q && 0 <= ha.className.indexOf("pbColor") && Aa(ha, "u");
      }
      function l(ha, y) {
        var Y = Na(ha, "pbGhst"), C = ha.className, E = C.split("pbCsr")[1] || "", ia = C.split("pbAlp")[1] || "", ya, ja;
        if ("CS" === Y) {
          ya = "_";
        } else {
          ya = Y, 3 === ya.length && (ya = ya.substr(0, 2)), ya = ib[parseInt(ya, 16)] || "~";
        }
        E = E.split(" ")[0];
        if (ia = Ca(ia.split(" ")[0])) {
          G && (C = C.split("pbChr")[1].split(" ")[0], Da(ha, "backgroundPosition", ma(C, 2, wa) + "px " + -24 * (10 - ia) + "px")), !y && M && Ga(ha, "a").appendChild(ha);
        }
        Y && (ia = 10 - ia, G && (ja = {backgroundPosition:ma(Y, 2, wa) + "px " + -24 * (10 - ia) + "px"}), pb(ha, "pbGhst"), m = Ga(ha, "b", {className:"pbChr" + Y + " pbCsr" + E + " pbAlp" + ia, style:ja}, ya), dc(m));
        dc(ha);
      }
      if (a) {
        t = 6 > p ? 2 : 0;
        G = 7.2 > z || .9 > T || Xa;
        M = 1.1 === T;
        Q = 1.4 > T;
        a = u("SAMP");
        e = 8 === p;
        f = Ka;
        Bb && ka(Ta, "pbLCD-AX");
        if (a.length) {
          for (x = -1; g = a[++x];) {
            if (ra(N(g), "pbLCD")) {
              wa = ra(g, "PB-120") || ra(g, "FX-795P");
              H = Eb(g);
              for (g = H.length; R = H[--g];) {
                switch(Ma(R)) {
                  case "A":
                    (2 > f || e) && d(R);
                    if (2 > f) {
                      Va = Eb(R);
                      for (J = Va.length; J;) {
                        l(Va[--J], !0);
                      }
                    }
                    Ib ? va(R, "href", "javascript:void(0)") : (Gb(R, "click", Z), la.push(R));
                    break;
                  case "B":
                    2 > f && l(R, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Nb(function() {
      for (var a; a = la.shift();) {
        $b(a, "click", Z);
      }
    });
    6 === p && (new jb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(I);
    D = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" ");
    ba = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" ");
    P = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + cc + jc).split("");
    w = [];
    if (.9 <= T && 0 >= A.conpare(na, "0.9.1")) {
      ka(Oa, "pbLCD-gecko09To091");
      ca = !0;
    }
    ub(function(a) {
      if (a) {
        aa = $a + "pbFont/x3mask" + (ca ? ".gecko0.9.1.gif" : ".png");
        a = u("*");
        for (var d = -1, l, t; l = a[++d];) {
          ra(l, "pbList") ? (t = Na(l, "pbskip"), sa(l, 0 <= t.indexOf("prettify"), 0 <= t.indexOf("fallback:img"))) : ra(l, "pbFont") && sa(l, !0, !0);
        }
        w.length && (q("[pbList] " + w.length / 5 + " elements found. WebFont test start."), da());
        return !0;
      }
    });
    fa = !1;
    Qa = 8 > z;
    b = !fa && !Qa && !(6 > p) && I.createDocumentFragment && !!Ta.replaceChild;
    ab.prettify = sa;
    ab.fixLiga = function(a, d) {
      sa(a, !0, !0, d);
    };
  })();
  mc = I.scripts || u("script");
  $a = mc[mc.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  q("[p_assetUrl] " + $a);
  Hb(function() {
    var h;
    (h = Mb("logger")) || alert("#logger not found!");
    h ? (q = j, tb = function(v) {
      Aa(h, "DIV", {style:{color:"red"}}, v);
    }, B.onerror = function(v, V, da) {
      tb(v + ", " + V + ", " + da);
      return !0;
    }) : B.console ? (q = console.log, tb = console.error) : z ? (q = qa, tb = opera.postError) : q = tb = qa;
    for (; Ya.length;) {
      q(Ya.shift());
    }
    for (; Za.length;) {
      tb(Za.shift());
    }
    Ya = Za = K;
    function j(v) {
      Aa(h, "DIV", K, v);
    }
    j = !1;
  });
  6.1 > Ea && Gb(B, "scroll", sb);
  Nb(Tb);
  6.1 > Ea && Gb(B, "scroll", Lb);
  Nb(Ub);
  10 > p && (11 !== Jb || 5 !== p) || (9 > z || 1 > T || !Xa && !B.addEventListener ? I.write('<link href="' + $a + Ab + '" rel="stylesheet"' + (8 > z ? "" : ' media="screen,handheld,projection,print"') + ">") : Hb(function() {
    Aa(wb, "link", {href:$a + "" + Ab, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

