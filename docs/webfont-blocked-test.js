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
  function V(F) {
    return F === F + "" ? F : F === F - 0 ? "" + F : F.min && F.max ? F.min + "~" + F.max : F.min ? F.min + "~" : "~" + F.max;
  }
  var wa = ab.conpare, c = qa.userAgent, ma = qa.appVersion, Ua = Wa(ma) || 0, K = qa.platform, Pa = C.documentElement, wb = Pa && Pa.style, na = C.documentMode, p = I.width, Xa = I.height, lb, A, S, Va, gb, oa, Ea, Ib, va, xb, Ia, yb, Yb, Qb, Jb, pa, zb, Ja, Ab, Bb, cb, Ka, db, Zb, Qa, mb, eb, Cb, Rb, Kb, Sb, nb, W, Db, ob, Ya, Za, sb, Tb, Lb, Ub, hb, Mb, v, r, O, T, Eb, xa, Ga, La, Ha, fb, Ma, Na, ta, pb, Fb;
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
  W = !nb && function() {
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
    r = 8.5;
    O = 9;
    T = r;
  } else if ("Nintendo DSi" === K) {
    v = 2, r = Ea, O = 9, T = r;
  } else if ("New Nintendo 3DS" === K || l(c, "iPhone OS 6_0") && 320 === p && 240 === Xa) {
    v = 4, r = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === K) {
    v = 3, r = Va, Qa = 535;
  } else if (!K && l(ma, "Nintendo Switch;")) {
    v = 7, r = n(ma, "NintendoBrowser/");
  } else if (B.wiiu) {
    v = 6, r = n(ma, "NintendoBrowser/"), O = 16, T = n(ma, "AppleWebKit/") || (Lb ? 536 : 534), r || (r = Lb ? 4 : 2, l(ma, "Macintosh;") || l(ma, "Windows NT") && l(ma, "Touch"));
  } else if (oa && oa.wiiremote) {
    v = 5, r = n(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === K) {
    v = 9, r = n(ma, K + " ");
  } else if ("PSP" === K) {
    v = 8;
    r = n(c, "(PlayStation Portable); ");
    Eb = 3.2;
  } else if ("PlayStation 5" === K) {
    v = 12, r = n(ma, K + "/");
  } else if ("PlayStation 4" === K) {
    v = 11, r = n(ma, K + "/");
  } else if ("PlayStation 3" === K) {
    v = 10, r = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 "), 0 > wa(r, "4.10") && (O = 27, T = r);
  } else if (l(c, "Xbox One")) {
    v = 14, r = 1;
  } else if (l(c, "Xbox")) {
    v = 13, r = 1;
  } else if (2 === Ua && l(c, "Sony/COM2/")) {
    v = 17;
    r = 2;
    Eb = 3.4;
    xa = !0;
  } else if (0 === K.indexOf("iP") || Jb || Ya || Bb) {
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
          fb = !0;
      }
    } else {
      Jb ? r = Jb : (r = n(ma.split("_").join("."), "OS "), kb("isSecureContext", B), kb("enableWebGL", B), kb("sameOrigin", B));
      if (!r || Zb) {
        r = B.PointerEvent ? 13 : B.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : B.WebAssembly ? 11.2 : B.HTMLMeterElement ? 10.3 : B.Proxy ? 10.2 : B.HTMLPictureElement ? 9.3 : jb.isNaN ? 9.2 : B.SharedWorker ? lb && lb.now ? 8 : 8.4 : Tb ? 7.1 : B.webkitURL ? 6.1 : B.Worker ? 5.1 : A ? 4.3 : I ? 4.1 : 3.2;
      }
      Ma = p === 1.5 * Xa || 1.5 * p === Xa;
      0 === K.indexOf("iPhone") ? (Ga = 0, La = !0) : 0 === K.indexOf("iPad") || Bb ? (Ga = 1, Ha = !0) : 0 === K.indexOf("iPod") && (Ga = 2, fb = !0);
    }
    O = !Ya && (qa.standalone || (Ha || 12 > r) && kb("webkitFullscreenEnabled", C) || 11 <= r && 13 > r && qa.mediaDevices) ? 17 : 18;
    v = 24;
    T = r;
  } else if (l(c, "Kobo")) {
    v = 18, O = 22, T = 2.2, Ja = !0;
  } else if (l(c, "EBRD")) {
    v = 19, O = 22, T = 2.2;
  } else if (C = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    v = 29, r = C;
  } else if (B.onmoztimechange !== Sa) {
    v = 30, r = 18.1 > Ka ? "1.0.1" : 19 > Ka ? 1.1 : 27 > Ka ? 1.2 : 29 > Ka ? 1.3 : 31 > Ka ? 1.4 : 33 > Ka ? 2 : 35 > Ka ? 2.1 : 38 > Ka ? 2.2 : 45 > Ka ? 2.5 : 2.6, l(c, "Mobile") ? La = !0 : l(c, "Tablet") ? Ha = !0 : l(c, "TV");
  } else if (B.palmGetResource) {
    v = 32, r = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), l(c, "webOS.TV") || l(c, "/SmartTV") || (La = !0);
  } else if (C = n(c, "Tizen ")) {
    v = 33, r = C, O = 25, T = nb, La = !0;
  } else if (C = n(c, "Windows Phone ") || n(ma, "Windows Phone OS ") || Qb) {
    v = 23, r = C, La = !0;
  } else if (Pa && "ARM" === K) {
    v = 23, r = 10, La = !0;
  } else if (va && l(ma, "ZuneWP")) {
    v = 23, r = 11 === na ? 8.1 : 10 === na ? 8 : 9 === na ? 7.5 : 7 === na ? 7 : "?", La = !0;
  } else if (l(c, "FOMA;")) {
    v = 16, La = !0;
  } else if (l(c, "SoftBank;")) {
    v = 16, La = !0;
  } else if (l(c, "KFMUWI")) {
    Na = !0;
    r = 6.3;
    ta = Ha = !0;
  } else if (l(c, "KFKAWI")) {
    Na = !0, r = 6, ta = Ha = !0;
  } else if (l(c, "KFSUWI") || l(c, "KFAUWI") || l(c, "KFDOWI")) {
    Na = !0, r = 5, ta = Ha = !0;
  } else if (l(c, "KFGIWI")) {
    Na = !0, r = 5, ta = Ha = !0;
  } else if (l(c, "KFARWI") || l(c, "KFSAWA") || l(c, "KFSAWI")) {
    Na = !0, r = 5 <= Wa(pa) ? 5 : 4, ta = Ha = !0;
  } else if (l(c, "KFSOWI") || l(c, "KFTHWA") || l(c, "KFTHWI") || l(c, "KFAPWA") || l(c, "KFAPWI")) {
    Na = !0, r = 3, ta = Ha = !0;
  } else if (l(c, "KFOT") || l(c, "KFTT") || l(c, "KFJWA") || l(c, "KFJWI")) {
    Na = !0, r = 2, ta = Ha = !0;
  } else if (l(c, "Kindle Fire")) {
    Na = !0, r = 1, ta = Ha = !0;
  } else if (C = n(c, "Kindle/")) {
    v = 20, r = C, O = 22, T = 2.2;
  } else if (hb) {
    Na = !0, r = pa || Mb, ta = !0;
  } else if (l(c, "AmazonWebAppPlatform") || l(c, "; AFT")) {
    Na = !0, r = pa, ta = !0;
  } else if (l(c, "MeeGo")) {
    v = 34;
  } else if (l(c, "Maemo")) {
    v = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Kb) {
    v = 22, xa = !0;
  } else if ("WinCE" === K) {
    v = 21, xa = !0;
  } else if (0 === K.indexOf("Win")) {
    v = "Win16" === K ? 37 : "Win32" === K ? 38 : "Win64" === K ? 39 : 0, r = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === K.indexOf("Mac")) {
    v = "Mac68K" === K ? 41 : "MacPowerPC" === K || "MacPPC" === K ? 40 : "MacIntel" === K ? 42 : 0;
    if (C = n(c.split("_").join("."), "Mac OS X ")) {
      r = C;
    }
    pb = !0;
  } else if (l(c, "BlackBerry") || l(c, "BB10")) {
    v = 36, r = Va, La = !0;
  } else if (l(c, "SunOS") || l(c, "Sun Solaris")) {
    v = 44;
  } else if (l(c, "FreeBSD")) {
    v = 45;
  } else if (l(c, "OpenBSD")) {
    v = 46;
  } else if (l(c, "NetBSD")) {
    v = 47;
  } else if (Ja && Ia) {
    l(c, "Android 4.4;") ? Ma = {min:2.3} : 4 <= Wa(pa) ? Ma = pa : Ma = {min:2.2}, r = Ma;
  } else if (Ja && oa) {
    pa ? Ma = pa : Ma = {min:1.6}, r = Ma, l(c, "Tablet") ? Ha = !0 : La = !0;
  } else if (pa) {
    r = pa, Ja = !0;
  } else if (Ab && S || zb || ob) {
    Fb = !0;
    nb ? Ma = {min:4.4} : xb && !Db || Ib || Cb ? Ma = {min:4} : (Ma = pa = wb.touchAction !== Sa ? {min:5} : Za ? 4.4 : A ? qa.connection ? B.searchBoxJavaBridge_ || xb ? jb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Qa ? 3 : 533 <= Qa ? I ? 2.3 : 2.2 : 530 <= Qa ? 2 : 1.5, W && (O = 25, T = W));
    r = Ma;
    Ja = !0;
  } else {
    Ub ? (r = {min:5}, Fb = Ja = !0) : Ab && (l(c, "Ubuntu") ? v = 48 : (C = n(c, "Mint/")) ? (v = 49, r = C) : (C = n(c, "Fedora/")) ? (v = 50, r = C) : v = l(c, "Gentoo") ? 51 : 52);
  }
  Na || Ja && Fb && Sb ? v = 28 : Ja && (v = v || 27);
  O || (ta = ta || Ja, oa ? (O = ta || xa || La || Ha ? 9 : 8, T = Ea) : va ? (Ma = Aa(ma, "Trident/") + 4, O = xa || La || Ha || fb ? 3 : pb && 5 <= na ? 7 : 2, T = na) : Pa ? (O = 23 === v ? 6 : 5, T = n(ma, "Edge/")) : cb ? (O = 13, T = cb) : Ia ? (O = ta ? 12 : 11, T = Ka || db) : nb ? (O = 25, T = nb) : (C = Eb || n(c, "NetFront/")) ? (O = 19, T = C) : (C = n(c, "iCab")) ? (O = 20, T = C) : (C = J(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || gb && Va) ? (O = 10, T = C, v || (l(c, "iPhone") ? 
  Ga = 0 : l(c, "iPad") ? Ga = 1 : l(c, "iPod") && (Ga = 2), Ga && (v = 24))) : yb ? (O = 26, T = Yb) : Rb ? (O = 15, T = Ua) : Ja && Db ? (O = 22, T = pa) : xb || Ib || Cb ? (O = ta ? 23 : 21, T = mb || eb) : Ja && Za ? (O = 24, T = 5 > Wa(pa) ? pa : mb) : Ja && (Va || Fb) ? (O = 22, T = pa) : mb ? (O = ta ? 23 : 21, T = mb) : Qa && (O = 16, T = Qa));
  v && (ab[2] = v, r && (ab[3] = V(r)));
  O && (ab[0] = O, T && (ab[1] = V(T)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(ab, B, C, qa, I, Wa, jb, Sa, Aa, l, Pb, kb, n, J) {
  function V(h) {
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
  var Ua = I.body, K = Ua.style, Pa, wb, na = B[1], p = V(2) || V(3), Xa = V(7), lb = V(5) || V(6), A = V(8) || V(9), S = V(11) || V(12), Va = S && 0 <= B.conpare(na, "1.9.1"), gb = V(13), oa = V(16), Ea = V(17) || V(18), Ib = V(10) || V(26), va = V(21) || V(23), xb = V(24), Ia = V(22), yb = V(25), Yb = va || xb || Ia || yb, Qb = va && Aa(Wa.userAgent.split("Edg/")[1]), Jb = Aa(Wa.appVersion.split("Trident/")[1]) + 4, pa = wa(37) || wa(38) || wa(39), zb = wa(40) || wa(41) || wa(42) || wa(43), Ja = 
  .9 > S, Ab = (Xa ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 7.2 > A ? "opr70" : 8 > A ? "opr72" : 9.5 > A ? "opr" + (A | 0) : S && !Va ? 1.4 <= S ? "gck19" : 1.3 <= S ? "gck13" : 1 <= S ? "gck12" : Ja ? .8 <= S ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Bb, cb, Ka, db, Zb, Qa, mb, eb, Cb, Rb, Kb, Sb, nb, W, Db, ob, Ya, Za, sb, Tb, Lb, Ub, hb, Mb, v, r, O, T, Eb, xa, Ga, La, Ha, fb, Ma, Na, ta, pb, Fb, F, la, fa, Ta, Ba, hc, Gb, $b, Hb, Nb, ub, ac, Vb, 
  ya, Wb, Xb, ib, bc, nc, ic, jc, cc, kc, oc, pc, qc, lc, qb, rb, bb, Ob, dc, mc, $a;
  wa(1) || wa(2) || wa(3) || wa(4) || wa(8) || wa(9);
  db = 8 > p || 7.2 > A ? !1 : J;
  Zb = K.transform !== J ? "transform" : K["-o-transform"] !== J ? "-o-transform" : K["-ms-transform"] !== J ? "-ms-transform" : K.MozTransform !== J ? "-moz-transform" : K["-webkit-transform"] !== J ? "-webkit-transform" : "";
  Qa = [];
  mb = [];
  eb = [];
  nb = 525 > oa || 3.1 > Ea || 2.2 > Ia || 10 > A || S && !Va || V(26) || 10 > V(3) || wa(34) || wa(32) || wa(3);
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
      P = ia.length ? l(h, D) : 0;
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
      P && (P = Pb(P));
    }
    q = function(x) {
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
    var Y = [], ra = 500, Fa = 0, ka, ia, D, ca, P;
    if (5 > p || Xa) {
      C._wdb_onlooptimer = w, w = "_wdb_onlooptimer()";
    }
    W = function(x, M, ba) {
      ia.length || (P = l(h, D));
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
      P && (ha(), P = l(h, D));
    };
    Ub = ha;
    ia = [];
    D = Ea | 0 || 530 <= oa && 534 > oa ? 64 : 16;
    ca = 0;
    q("[core] TIMER_INTERVAL:" + D);
    if (5 > p || Xa) {
      C._wdb_ontimer = h, h = "_wdb_ontimer()";
    }
  })();
  (function() {
    function h(b, a, d) {
      var k = ["<", b], u = 1, G, N, L;
      if (a) {
        for (G in a) {
          L = a[G];
          if (null != L && "" !== L) {
            if ("style" === G) {
              k[++u] = ' style="';
              for (N in L) {
                for (var f = ++u, e, g = [], m = N.split(""), y = m.length; y;) {
                  e = m[--y], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), g[y] = e;
                }
                k[f] = g.join("") + ":" + L[N] + ";";
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
      var N, L;
      if (da) {
        N = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        L = T(2 > b ? O(a) : a);
        L = 2 > b ? L.indexOf(a) + b : L.length;
        a.insertAdjacentHTML(N, h(d, k, u));
        a = T(a)[L];
        null != u && ("FONT" === d ? a.nodeType = 3 : (a.nodeType = 1, a.children[0].nodeType = 3));
      } else if (ja) {
        a = I.createElement(h(d, k));
      } else {
        a = G ? I.createElementNS("http://www.w3.org/2000/svg", d) : I.createElement(d);
        if (k) {
          for (N in k) {
            if ((b = k[N]) || 0 === b) {
              switch(N) {
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
                  ta(a, N, b);
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
            P(b, a, !0);
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
    function P(b, a, d) {
      if (!d && A) {
        if ("tabindex" === a) {
          "-0" !== D(b, a, !0) && ka(b) && ca(b, a, "-0", !0);
          return;
        }
        "href" === a && "-0" === D(b, "tabindex", !0) && P(b, "tabindex", !0);
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
    r = function(b) {
      var a = [], d = 0, k, u = -1, G, N, L;
      if (9 > p || !I.getElementsByClassName) {
        G = 6 > p ? I.all : I.getElementsByTagName("*");
      } else {
        N = !0;
        G = I.getElementsByClassName(b);
      }
      for (k = G.length; d < k; ++d) {
        L = G[d];
        if (N || (da || 1 === L.nodeType) && ba(L, b)) {
          a[++u] = L;
        }
      }
      return a;
    };
    O = ha;
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
      da || (b.appendChild(a), Ra && null != k && (5.5 > p ? ra(a, k) : Fa(a, k)));
      return a;
    };
    Ga = function(b, a, d, k, u) {
      a = Y(0, b, a, d, k, u);
      da || (ha(b).insertBefore(a, b), Ra && null != k && (5.5 > p ? ra(a, k) : Fa(a, k)));
      return a;
    };
    La = ra;
    Ha = function(b, a) {
      var d;
      if (da) {
        return Y(0, b, "FONT", J, a);
      }
      d = I.createTextNode("" + a);
      O(b).insertBefore(d, b);
      return d;
    };
    fb = function(b) {
      if (O(b)) {
        if (da) {
          b.outerHTML = "";
        } else {
          return 5.5 > p && 1 === b.nodeType && (b.style.filter = ""), O(b).removeChild(b), b;
        }
      } else {
        q("[DOM] p_DOM_remove(), No parentNode!");
      }
    };
    ja = 9 > p;
    Ra = ja;
    Ma = ia;
    Na = D;
    ta = ca;
    pb = P;
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
            for (var N, L; N = u[++G];) {
              L = N.split(":")[0], k += ";" + L.toLowerCase() + ":" + N.substr(L.length + 1);
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
      return u ? N ? 2 : G ? 3 : 1 : 0;
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
      Qa || P.length || W(ra);
      P.push(f, e, g);
    }
    function ra() {
      var f = P, e;
      for (P = []; e = f.shift();) {
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
      var e = f || event, g = e.type, m, y, H, R, Q;
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
          Q = f[m + 1];
          5.5 > p ? (R[g] = Q, R[g](e), R[g] = ka) : Q.call(R, e);
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
      Vb !== f && (Y(mb, Vb = f), q("p_cssAvailability:" + Vb));
    }
    var D = C.matchMedia, ca, P = [], x, M, ba, sa, da, ja, Ra, b, a, d, k, u, G, N, L;
    Qa.push(function() {
      U = J;
      ca = xa(Ua, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Hb(function() {
        P.length && W(ra);
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
          "loaded" === f || "complete" === f ? (a = J, w()) : W(a);
        }
      };
      W(a);
    } else {
      Gb(C, "load", w), Ja && W(function() {
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
        q("(forced-colors:active):" + ya);
      });
    } else if (10 <= p || lb || pa && Qb) {
      Wb = !0, U("(-ms-high-contrast:black-on-white)", function(f) {
        u = G = f.matches;
        ya !== h() && (ya = h(), Y(eb, ya), q("(-ms-high-contrast:black-on-white):" + ya));
      }), U("(-ms-high-contrast:white-on-black)", function(f) {
        u = N = f.matches;
        ya !== h() && (ya = h(), Y(eb, ya), q("(-ms-high-contrast:white-on-black):" + ya));
      }), U("(-ms-high-contrast:active)", function(f) {
        u = f.matches;
        ya !== h() && (ya = h(), Y(eb, ya), q("(-ms-high-contrast:active):" + ya));
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
        e && (u = "#123456" !== e && "rgb(18,52,86)" !== e, G = f(e) < f(g, !0), N = f(e) > f(g, !0), ya !== h() && (ya = h(), q("(forced-colors-fallback):" + ya), Y(eb, ya, k)));
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
          return k && !P;
      }
      return !1;
    }
    function w(t) {
      G(t);
      Z && !t && fb(Z);
      G = N = L = f = e = g = R = Q = Z = Oa = J;
    }
    function U(t) {
      var ea = '1.6em "' + t + '"';
      q("[webFontTest] testByNativeFontLoaderAPI start.");
      I.fonts.load(ea).then(function(z) {
        q("[webFontTest] fonts.check() : " + I.fonts.check(ea, "i") + ", fonts.length : " + z.length);
        (z = Fa(N)) ? W(w, z) : (q("[webFontTest] mesureWebFont() : false"), Y(!0));
      }, function(z) {
        q("[webFontTest] fonts.load() rejected! " + z);
        db !== J ? ka(db) : Cb(ka);
      });
    }
    function ha(t) {
      return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (H = hb(), !1) : t < hb() - H;
    }
    function Y(t) {
      t && (q("[webFontTest] testWebFont start."), H = hb());
      (t = Fa(N, m)) ? (q("[webFontTest] testWebFont mesurement success : " + t), w(t)) : ha(m) ? (q("[webFontTest] testWebFont timeout!"), R ? ia() : ca ? w(0) : db !== J ? ka(db) : Cb(ka)) : W(Y);
    }
    function ra() {
      return xa(Ua, 5 > p ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":15 > S ? '"liga=1"' : '"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, sa);
    }
    function Fa(t, ea) {
      var z = 0, E = -1, aa = [], Ca, za, X;
      if (!Oa) {
        Ca = -1;
        Q = ra();
        for (Oa = []; za = ja[++Ca];) {
          Ba(Q, "fontFamily", za), Oa[Ca] = Q.offsetWidth;
        }
        q("[webFontTest] default width " + Oa.join(", "));
      }
      for (5 > p ? Q || (Q = ra()) : O(Q) || Ua.appendChild(Q); Ca = ja[++E];) {
        Ba(Q, "fontFamily", '"' + t + '",' + Ca);
        X = Q.offsetWidth;
        da ? aa[E] = X : (aa[E] = X, X !== Oa[E] && (z = 1));
      }
      if (da && X === aa[0] && X === aa[1]) {
        for (q("[webFontTest] Hit... : width=" + X), z = 1, E = -1; 0 <= (X = Oa[++E]);) {
          if (X === aa[0] && X === aa[1] && X === aa[2]) {
            q("[webFontTest] Failed! : font[" + E + "]=" + ja[E]);
            z = 0;
            break;
          }
        }
      }
      !p && z && e && (Q.textContent = e, X = Q.offsetWidth, Q.textContent = g, z = X === Q.offsetWidth ? 2 : 1, Q.textContent = sa);
      Q = fb(Q);
      ea && (z || ha(ea)) && q("[webFontTest] " + t + " " + aa.join(", "));
      return z;
    }
    function ka(t) {
      q("[webFontTest] onTestDataURIComplete : " + t);
      t ? (R = !0, m = ba, q("[webFontTest] webFontTest_repeatToTestDataURIedCSSWebFont start!"), N = N.replace(x, ""), ia()) : w(0);
    }
    function ia() {
      var t, ea;
      if (L) {
        for (; L.length;) {
          t = L.shift();
          ea = L.shift();
          if (h(t)) {
            q("[webFontTest] maybe can use! " + ea);
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
        q("p_cssGeneratedContentGrade:" + Ka);
        return !0;
      }
    });
    Cb = !1 === db ? function(t) {
      W(t, !1);
    } : function(t) {
      var z, E;
      function ea(aa) {
        E && (E = Db(E), db = aa, z.onload = z.onerror = qa, W(t, aa));
      }
      if (db !== J) {
        q("[dataURITest] already done : " + db), W(t, db);
      } else {
        q("[dataURITest] start!");
        z = new Image();
        E = W(ea, !1, 99);
        z.onerror = function() {
          q("[dataURITest] no DATA URI!");
          ea(!1);
        };
        z.onload = function() {
          q("[dataURITest] DATA URI:" + (1 === z.width * z.height));
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
          q("[imageTest] timer -> img.complete. img.width=" + E.width);
          za = !!E.width;
          cb = cb || za;
          W(t, za);
          E.onerror = E.onload = qa;
          E = t = J;
        } else {
          --Ca, W(z);
        }
      }
      var E = new Image(), aa, Ca = 99;
      q("[imageTest] start.");
      E.onerror = function() {
        q("[imageTest] error!");
        aa = !0;
      };
      E.onload = function() {
        q("[imageTest] onload.");
        aa = !0;
      };
      E.src = ea;
      W(z);
    };
    Kb = function(t, ea, z, E, aa, Ca, za) {
      G = t;
      N = ea;
      L = z;
      f = E;
      e = aa;
      g = Ca;
      m = y = za || M;
      N = x + N;
      q("[webFontTest] WEBFONT_DEBUG_MODE : 1");
      q("[webFontTest] UNAVAILABLE_DUE_TO_BLOCKLIST : " + !!nb);
      V(10) ? W(w, 1) : nb ? W(w, 0) : !I.fonts || 603 > oa || 11 > Ea ? (q("[webFontTest] No native font loader."), Y(!0)) : (q("[webFontTest] Use Native font loader."), U(N));
    };
    var ca = 9 > p, P = 6 > va || A || 530 > oa || 5 > Ea || wa(10), x = "bad_" + hb() + "_", M = 5E3, ba = 500, sa = "mmmmmmmmmmlliiiiiiiii", da = 9 <= va && 18 > va || 3 > Ia || 7 > Ea || oa && 0 >= B.conpare(na, "536.11"), ja = ["monospace", "sans-serif", "serif"], Ra, b, a, d, k, u, G, N, L, f, e, g, m, y, H, R, Q, Z, Oa;
    nb || (da && va && q("[webFontTest] hasWebKitFallbackBug : p_Chromium=" + va), da && Ea && q("[webFontTest] hasWebKitFallbackBug : p_SafariMobile=" + Ea), da && oa && q("[webFontTest] hasWebKitFallbackBug : p_WebKit=" + oa), da && Ia && q("[webFontTest] hasWebKitFallbackBug : p_AOSP=" + Ia));
    Ra = 14 <= lb || 36 <= va || 39 <= S || 3 <= gb || 602 <= oa && 0 <= B.conpare("10.12", zb) || 10 <= Ea;
    b = 6 <= va || S && 0 <= B.conpare(na, "1.9.2") || gb || 533 <= oa || 5 <= Ea || 4.4 <= Ia || 11.5 <= A || lb || 9 <= V(2) || 10 <= V(3);
    a = 2 <= va || Va || gb || 525 <= oa || 4 <= Ea || 2.2 <= Ia || 10.1 <= A || lb || 9 <= V(2) || 10 <= V(3);
    d = a;
    k = 5.1 <= pa && 5.2 >= pa && 40 > va || 6 <= pa && 6.1 > pa && 51 > va || 37 > va || 525 <= oa || 3.1 <= Ea || 3 <= Ia || 11.5 <= A;
    u = 4 <= V(2) || 10 <= V(3);
  })();
  (function() {
    Sb = function(D, ca, P, x, M) {
      var ba, sa, da;
      if (w) {
        q("[CSS Loader] UNSUPPORTED"), W(ca, !1);
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
          (ba = Mb(P)) ? pb(ba, "id") : ba = xa(Ua, "div", {"aria-hidden":"true", className:P});
          da = ba.offsetWidth;
          q("[CSS Loader] widthBeforeCSSLoaded = " + da);
          ta(ba, "id", P);
        }
        ka(sa, D, ca, ba, da, M || h);
        return sa;
      }
    };
    var h = 5E3, w = S && 0 > B.conpare(na, "0.9.1"), U = 11 <= p || lb || 9 <= A && 9.5 > A, ha = 11 > p, Y = 7.2 <= A && 7.5 > A, ra = 9 > S && !w || 19 > va || 4.3 > Ia || 2 > yb || 536 > oa || 6 > Ea || 7 <= A && 9 > A && !Y, Fa = !w && !U && !ha && !Y && !ra, ka = Fa ? function(D, ca, P) {
      q("[CSS Loader] onload + onerror");
      D.onload = j;
      D.onerror = function() {
        D.onload = D.onerror = null;
        W(P, !1);
      };
      D.href = ca;
      function j() {
        D.onload = D.onerror = null;
        W(P, !0);
      }
      j = !1;
    } : U ? function(D, ca, P, x, M) {
      q("[CSS Loader] onload + mesure");
      D.onload = j;
      D.href = ca;
      function j() {
        W(P, ia(x, M));
        D.onload = null;
        x = J;
      }
      j = !1;
    } : ha ? function(D, ca, P, x, M) {
      q("[CSS Loader] onreadystatechange + onerror");
      D.onreadystatechange = j;
      D.href = ca;
      function j() {
        if ("loaded" === D.readyState || "complete" === D.readyState) {
          W(P, ia(x, M)), x = J, D.onreadystatechange = qa;
        }
      }
      j = !1;
    } : ra || Y ? function(D, ca, P, x, M, ba) {
      function sa() {
        ja && (Ra = Db(Ra), q("[CSS Loader] onComplete"), b = hb() + 999, W(da, 0, 99), ra ? ja.onerror = null : ja.removeEventListener("load", sa, !1), ja = J);
      }
      function da() {
        ia(x, M) ? (W(P, !0), x = P = J) : hb() < b ? W(da, 0, 99) : (W(P, !1), x = P = J);
      }
      var ja = new Image(), Ra = W(sa, 0, ba), b;
      ra ? (q("[CSS Loader] img.onerror + mesure"), ja.onerror = sa) : (q('[CSS Loader] img.addEventListener("load") + mesure'), ja.addEventListener("load", sa, !1));
      ja.src = D.href = ca;
    } : J, ia = !Fa && !w && function(D, ca) {
      q("[CSS Loader] elmTest.offsetWidth = " + D.offsetWidth);
      return D.offsetWidth !== ca;
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
  lc = (9 === p || S && 0 <= B.conpare(na, "1.8.1") || gb) && !Wb;
  qb = [];
  Ob = 7.2 > A ? function() {
    rb = !rb;
    for (var h = -1, w; w = qb[++h];) {
      -1 !== w.className.indexOf("pbAlp") ? Ba(w, "display", rb ? "" : "none") : (fa(w, rb ? "pbChrCS" : "pbChr00"), Ta(w, rb ? "pbChr00" : "pbChrCS"));
    }
  } : lc ? function() {
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
  lc && ac(function(h) {
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
      x.length ? (ra(a = x.shift(), x.shift(), x.shift(), x.shift()), (d = x.shift()) && W(d, a)) : q("[pbList] complete.");
    }
    function w(a) {
      a ? (q("[pbList] Fallback start!"), fa(Ua, "pbList-noWebFont")) : q("[pbList] image disabled!");
      h();
    }
    function U(a) {
      M = a;
      q("[pbList] WebFont test result : " + !!a);
      a ? h() : cb ? w(!0) : cb !== J ? h() : (q("[pbList] Need imageTest " + ba), Rb(w, ba));
      q("window.offscreenBuffering = " + C.offscreenBuffering);
      U = Kb = w = J;
    }
    function ha() {
      ha = J;
      Kb(U, "PB-100", [1, $a + "pbFont/woff2.css", 2, $a + "pbFont/woff.css", 3, $a + "pbFont/ttf.css", 5, $a + "pbFont/eot.css", 6, $a + "pbFont/svg.css"], "js-myIconFont-testCssReady", "\u208b\u2081", kc);
    }
    function Y(a) {
      this.focus();
      a.preventDefault();
      a.stopPropagation();
    }
    function ra(a, d, k, u) {
      function G(m, y) {
        for (var H = T(m), R = -1, Q; Q = H[++R];) {
          switch(Q.nodeType) {
            case 1:
              G(Q, y);
              break;
            case 3:
              Q.data && L(Q.data) && y.push(Q);
          }
        }
      }
      function N(m, y) {
        var H = m.children, R = 0, Q = H.length;
        if (Q) {
          for (; R < Q; ++R) {
            N(H[R], y);
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
        for (5 > p ? N(a, f) : G(a, f); e = f.shift();) {
          g = 5 > p ? e.innerText : e.data, 2 !== M ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join(cc)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join(cc)), M && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(kc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(qc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(oc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(pc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(jc)), !d || !k && cb ? Fa(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(nc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(bc).split("&amp;").join("&"), e, d, k) : 5 > p ? e.innerText = g : e.data = g;
        }
        u && W(u, a);
      }
    }
    function Fa(a, d, k, u) {
      function G(X, Da) {
        for (var vb = ""; Da;) {
          Da & 1 && (vb += X), Da >>= 1, X += X;
        }
        return vb;
      }
      function N(X, Da, vb) {
        for (var ec, rc = -1, fc, gc; ec = Da[++rc];) {
          for (; 0 <= (fc = X.indexOf(ec));) {
            gc = ec.length, X = X.substr(0, fc) + G(vb, gc) + X.substr(fc + gc);
          }
        }
        return X;
      }
      function L(X) {
        var Da = Aa(X), vb = "" + Da;
        return 0 < Da && Da === Da | 0 && (Da = X.indexOf(vb) + vb.length, Da <= X.length) ? Da : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), e = 5 > p || 1 === d.nodeType, g = [], m = "", y, H = -1, R, Q, Z, Oa, t, ea, z, E, aa, Ca, za;
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
      if (function(X) {
        var Da = X.indexOf("P");
        if (-1 === Da) {
          return !1;
        }
        Da = Aa(X.charAt(Da + 1));
        return 0 <= Da && 9 >= Da;
      }(a)) {
        m = G("+", a.length);
      } else {
        0 <= (y = L(a)) && (m = G("|", y), H = y, --H);
        for (; y = a.charAt(++H);) {
          y === bc || R ? (m += "~", y === bc && (R = !R)) : m += y;
        }
        m = N(m, P, "^");
        m = N(m, D, "{");
        m = N(m, ca, "}");
      }
      H = 0;
      for (R = a.length; H < R; ++H) {
        y = a.charAt(H);
        z = y === ic;
        E = " " === y;
        y = z ? " " : y;
        aa = m.charAt(H);
        Ca = (Q = za) && z;
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
          Ca ? (y = 6 <= p && 8 > p ? " " : ic, Z = "") : za && (S && !Va || 9.5 > A) ? (za && !Q && (Oa = 4 - (Aa(a.substr(H)) + "").length), 7.5 > A ? z = ja ? "position:relative;top:-4px;left:" + 12 * Oa + "px" : {position:"relative", top:"-4px", left:12 * Oa + "px"} : z = ja ? "position:relative;left:" + 12 * Oa + "px" : {position:"relative", left:12 * Oa + "px"}) : E && 7.5 > A && (Z = "pbList-strsp");
          ja ? g.push("<font" + (Z ? ' class="' + Z + '"' : "") + (z ? ' style="' + z + '"' : "") + ">" + y + "</font>") : e || b ? xa(d, "font", {"class":Z, style:z}, y) : Ga(d, "font", {"class":Z, style:z}, y);
        } else {
          Q = za = !1, ja ? g.push(y) : e || b ? La(d, y) : Ha(d, y);
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
        a = r("pbChrCS");
        for (var d = 0, k = a.length; d < k; ++d) {
          dc(a[d]);
        }
        return !0;
      }
    });
    var ka = [], ia = S && 0 > B.conpare(na, "0.9.9"), D, ca, P, x, M, ba, sa, da, ja, Ra, b;
    ub(function(a) {
      var u, G, N, L, f, e, g, m, y, H, R, Q, Z, Oa;
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
        var z = Na(t, "pbGhst"), E = t.className, aa = E.split("pbCsr")[1] || "", Ca = E.split("pbAlp")[1] || "", za, X;
        if ("CS" === z) {
          za = "_";
        } else {
          za = z, 3 === za.length && (za = za.substr(0, 2)), za = ib[parseInt(za, 16)] || "~";
        }
        aa = aa.split(" ")[0];
        if (Ca = Aa(Ca.split(" ")[0])) {
          G && (E = E.split("pbChr")[1].split(" ")[0], Ba(t, "backgroundPosition", ma(E, 2, Q) + "px " + -24 * (10 - Ca) + "px")), !ea && N && Ga(t, "a").appendChild(t);
        }
        z && (Ca = 10 - Ca, G && (X = {backgroundPosition:ma(z, 2, Q) + "px " + -24 * (10 - Ca) + "px"}), pb(t, "pbGhst"), m = Ga(t, "b", {className:"pbChr" + z + " pbCsr" + aa + " pbAlp" + Ca, style:X}, za), dc(m));
        dc(t);
      }
      if (a) {
        u = 6 > p ? 2 : 0;
        G = 7.2 > A || .9 > S || Xa;
        N = 1.1 === S;
        L = 1.4 > S;
        a = v("SAMP");
        f = 8 === p;
        e = Ka;
        Bb && fa(Ua, "pbLCD-AX");
        if (a.length) {
          for (y = -1; g = a[++y];) {
            if (la(O(g), "pbLCD")) {
              Q = la(g, "PB-120") || la(g, "FX-795P");
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
    P = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + cc + jc).split("");
    x = [];
    if (.9 <= S && 0 >= B.conpare(na, "0.9.1")) {
      fa(Pa, "pbLCD-gecko09To091");
      da = !0;
    }
    ub(function(a) {
      if (a) {
        ba = $a + "pbFont/x3mask" + (da ? ".gecko0.9.1.gif" : ".png");
        a = v("*");
        for (var d = -1, k, u; k = a[++d];) {
          la(k, "pbList") ? (u = Na(k, "pbskip"), ra(k, 0 <= u.indexOf("prettify"), 0 <= u.indexOf("fallback:img"))) : la(k, "pbFont") && ra(k, !0, !0);
        }
        x.length && (q("[pbList] " + x.length / 5 + " elements found. WebFont test start."), ha());
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
  mc = I.scripts || v("script");
  $a = mc[mc.length - 1].src.split("/");
  --$a.length;
  ($a = $a.join("/")) && ($a += "/");
  q("[p_assetUrl] " + $a);
  Hb(function() {
    var h;
    (h = Mb("logger")) || alert("#logger not found!");
    h ? (q = j, tb = function(w) {
      xa(h, "DIV", {style:{color:"red"}}, w);
    }, C.onerror = function(w, U, ha) {
      tb(w + ", " + U + ", " + ha);
      return !0;
    }) : C.console ? (q = console.log, tb = console.error) : A ? (q = qa, tb = opera.postError) : q = tb = qa;
    for (; Ya.length;) {
      q(Ya.shift());
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

