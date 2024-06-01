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
ua.conpare = function(Ua, y) {
  var C = 0, ra, G, Ra = (Ua + "").split("."), gb = (y + "").split("."), La = Ra.length, ya, k;
  for (ra = gb.length; "0" === Ra[La - 1];) {
    --La;
  }
  for (; "0" === gb[ra - 1];) {
    --ra;
  }
  for (G = La < ra ? La : ra; C < G; ++C) {
    ya = Ra[C] - 0;
    k = gb[C] - 0;
    if (ya !== k) {
      return ya > k ? 1 : -1;
    }
  }
  return La > ra ? 1 : La === ra ? 0 : -1;
};
(function(Ua, y, C, ra, G, Ra, gb, La) {
  function ya(A, sa) {
    var U = Ra(A.split(sa)[1]);
    return 0 <= U ? U : 0;
  }
  function k(A, sa) {
    return 0 <= A.indexOf(sa);
  }
  function Kb(A) {
    return k(A, "Linux armv") || k(A, "Linux aarch") || k(A, "Linux i686") || k(A, "Linux x86_64");
  }
  function hb(A, sa) {
    for (var U in sa) {
      if (U === A) {
        return !0;
      }
    }
  }
  function p(A, sa) {
    var U = "", Sa = -1, Ma;
    if (A = A.split(sa)[1]) {
      for (; Ma = A.charCodeAt(++Sa);) {
        if (48 <= Ma && 57 >= Ma || 46 === Ma) {
          U += A.charAt(Sa);
        } else {
          break;
        }
      }
      for (Sa = U.length; Sa;) {
        if (46 === U.charCodeAt(--Sa)) {
          U = U.substr(0, Sa);
        } else {
          break;
        }
      }
    }
    return U;
  }
  function J(A) {
    for (var sa = arguments, U = 1, Sa = sa[0], Ma; U < sa.length; ++U) {
      0 > ta(Sa, Ma = sa[U]) && (Sa = Ma);
    }
    return Sa;
  }
  function S(A) {
    return A === A + "" ? A : A === A - 0 ? "" + A : A.min && A.max ? A.min + "~" + A.max : A.min ? A.min + "~" : "~" + A.max;
  }
  var ta = Ua.conpare, c = ra.userAgent, ha = ra.appVersion, Na = Ra(ha) || 0, H = ra.platform, Ga = C.documentElement, wb = Ga && Ga.style, ia = C.documentMode, r = G.width, Ta = G.height, ib, z, P, Oa, cb, qa, Ea, Fb, va, xb, Pa, yb, Ub, Lb, Gb, ja, zb, Ha, Ab, Bb, Za, Ia, db, Vb, Qa, jb, $a, Cb, Mb, Hb, Nb, pb, V, Db, lb, ab, bb, qb, Ob, eb, Pb, rb, Qb, u, q, R, F, sb, tb, Ja, ea, Ba, mb, wa, Da, Ca, Rb, Va;
  G = y.HTMLAudioElement;
  ib = y.performance;
  z = y.Int8Array;
  P = y.ontouchstart !== La;
  Oa = p(ha, "Version/") || p(c, "Version/");
  cb = y.operamini;
  qa = !cb && y.opera;
  Ea = qa && ("function" === typeof qa.version ? qa.version() : J(p(c, "Opera "), Oa, Na));
  Fb = y.opr;
  va = !qa && (C.all || ia);
  ia = va && (ia ? ia : y.XMLHttpRequest ? C.getElementsByTagName ? 7 : 4 : C.compatMode ? 6 : (0).toFixed ? 5.5 : y.attachEvent ? 5 : 4);
  Ga = !va && Ga.msContentZoomFactor;
  xb = !Ga && (y.chrome || y.chromium);
  Pa = !va && function() {
    for (var A in wb) {
      if (0 === A.indexOf("Moz")) {
        return !0;
      }
    }
  }();
  yb = k(c, "UCWEB");
  Ub = yb && p(c, " U2/");
  Lb = yb && p(c, "; wds ");
  Gb = p(c.split("_").join("."), "; iPh OS ");
  ja = p(c, "; Adr ");
  zb = k(ha, "YJApp-ANDROID");
  Ha = k(H, "Android") || Pa && k(ha, "Android") || zb;
  ja = p(H, "Android ") || p(ha, "Android ") || p(c, "Android ") || ja;
  Ab = k(H, "Linux");
  Bb = "MacIntel" === H && ra.standalone !== La;
  Za = Pa && p(c, "Goanna/");
  Ia = !Za && Pa && (p(c, "rv:") || p(c.substr(c.indexOf(") Gecko/") - 11), "; "));
  db = p(c, "Firefox/");
  p(c, "Opera/");
  Vb = y.FNRBrowser;
  Qa = ya(c, "AppleWebKit/");
  jb = p(c, "Chrome/");
  $a = p(ha, "Iron/");
  Cb = p(c, "OPR/");
  Mb = p(ha, "KHTML/");
  Hb = p(c.toLowerCase(), "iris");
  p(c, "FxiOS/");
  p(c, "CriOS/");
  p(c, "EdgiOS/");
  Nb = p(c, "Silk/");
  pb = ya(c, "SamsungBrowser/");
  V = !pb && function() {
    for (var A = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    sa, U = A.length; sa = A[--U];) {
      if (k(c, sa)) {
        return 2 > Ra(Oa) ? Oa : 0.9;
      }
    }
    A = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (U = A.length; sa = A[--U];) {
      if (k(c, sa)) {
        return Oa;
      }
    }
  }();
  Db = xb && 534.3 >= Qa;
  lb = Kb(H);
  ab = lb && !k(c, H) && Kb(c);
  P = P && (Qa || Pa) && ab || !ja && zb;
  zb = !!y.ReactNativeWebView;
  lb = lb && function() {
    for (var A in y) {
      if (0 === A.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  bb = (ab = y.puffinDevice) && ab.clientInfo;
  qb = (ab = bb && "iOS" === bb.os && bb.osVersion) && bb.model;
  bb = !ia && C.registerElement;
  Ob = !ia && C.execCommand;
  eb = y.webkitCancelAnimationFrame;
  Pb = Ab && bb && "11.0.696.34" === jb;
  rb = y._firefoxTV_playbackStateObserverJava;
  Qb = ya(c, "diordnA ");
  if ("Nitro" === H) {
    u = 1;
    q = 8.5;
    R = 9;
    F = q;
  } else if ("Nintendo DSi" === H) {
    u = 2, q = Ea, R = 9, F = q;
  } else if ("New Nintendo 3DS" === H || k(c, "iPhone OS 6_0") && 320 === r && 240 === Ta) {
    u = 4, q = p(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === H) {
    u = 3, q = Oa, Qa = 535;
  } else if (!H && k(ha, "Nintendo Switch;")) {
    u = 7, q = p(ha, "NintendoBrowser/");
  } else if (y.wiiu) {
    u = 6, q = p(ha, "NintendoBrowser/"), R = 16, F = p(ha, "AppleWebKit/") || (eb ? 536 : 534), q || (q = eb ? 4 : 2, k(ha, "Macintosh;") || k(ha, "Windows NT") && k(ha, "Touch"));
  } else if (qa && qa.wiiremote) {
    u = 5, q = p(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === H) {
    u = 9, q = p(ha, H + " ");
  } else if ("PSP" === H) {
    u = 8;
    q = p(c, "(PlayStation Portable); ");
    sb = 3.2;
  } else if ("PlayStation 5" === H) {
    u = 12, q = p(ha, H + "/");
  } else if ("PlayStation 4" === H) {
    u = 11, q = p(ha, H + "/");
  } else if ("PlayStation 3" === H) {
    u = 10, q = p(c, "PLAYSTATION 3; ") || p(c, "PLAYSTATION 3 "), 0 > ta(q, "4.10") && (R = 27, F = q);
  } else if (k(c, "Xbox One")) {
    u = 14, q = 1;
  } else if (k(c, "Xbox")) {
    u = 13, q = 1;
  } else if (2 === Na && k(c, "Sony/COM2/")) {
    u = 17;
    q = 2;
    sb = 3.4;
    tb = !0;
  } else if (0 === H.indexOf("iP") || Gb || ab || Bb) {
    if (ab) {
      switch(q = ab, qb.substr(0, 4)) {
        case "iPho":
          Ja = 0;
          p(qb, Ja);
          ea = !0;
          break;
        case "iPad":
          Ja = 1;
          p(qb, Ja);
          Ba = !0;
          break;
        case "iPod":
          Ja = 2;
          p(qb, Ja);
          mb = !0;
      }
    } else {
      Gb ? q = Gb : (q = p(ha.split("_").join("."), "OS "), hb("isSecureContext", y), hb("enableWebGL", y), hb("sameOrigin", y));
      if (!q || Vb) {
        q = y.PointerEvent ? 13 : y.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ra.sendBeacon ? 11.3 : y.WebAssembly ? 11.2 : y.HTMLMeterElement ? 10.3 : y.Proxy ? 10.2 : y.HTMLPictureElement ? 9.3 : gb.isNaN ? 9.2 : y.SharedWorker ? ib && ib.now ? 8 : 8.4 : Ob ? 7.1 : y.webkitURL ? 6.1 : y.Worker ? 5.1 : z ? 4.3 : G ? 4.1 : 3.2;
      }
      wa = r === 1.5 * Ta || 1.5 * r === Ta;
      0 === H.indexOf("iPhone") ? (Ja = 0, ea = !0) : 0 === H.indexOf("iPad") || Bb ? (Ja = 1, Ba = !0) : 0 === H.indexOf("iPod") && (Ja = 2, mb = !0);
    }
    R = !ab && (ra.standalone || (Ba || 12 > q) && hb("webkitFullscreenEnabled", C) || 11 <= q && 13 > q && ra.mediaDevices) ? 17 : 18;
    u = 24;
    F = q;
  } else if (k(c, "Kobo")) {
    u = 18, R = 22, F = 2.2, Ha = !0;
  } else if (k(c, "EBRD")) {
    u = 19, R = 22, F = 2.2;
  } else if (C = p(c, "CrOS x86_64 ") || p(c, "CrOS aarch64 ") || p(c, "CrOS i686 ") || p(c, "CrOS armv7l ")) {
    u = 29, q = C;
  } else if (y.onmoztimechange !== La) {
    u = 30, q = 18.1 > Ia ? "1.0.1" : 19 > Ia ? 1.1 : 27 > Ia ? 1.2 : 29 > Ia ? 1.3 : 31 > Ia ? 1.4 : 33 > Ia ? 2 : 35 > Ia ? 2.1 : 38 > Ia ? 2.2 : 45 > Ia ? 2.5 : 2.6, k(c, "Mobile") ? ea = !0 : k(c, "Tablet") ? Ba = !0 : k(c, "TV");
  } else if (y.palmGetResource) {
    u = 32, q = p(c, "webOS/") || p(c, "WEBOS") || p(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (ea = !0);
  } else if (C = p(c, "Tizen ")) {
    u = 33, q = C, R = 25, F = pb, ea = !0;
  } else if (C = p(c, "Windows Phone ") || p(ha, "Windows Phone OS ") || Lb) {
    u = 23, q = C, ea = !0;
  } else if (Ga && "ARM" === H) {
    u = 23, q = 10, ea = !0;
  } else if (va && k(ha, "ZuneWP")) {
    u = 23, q = 11 === ia ? 8.1 : 10 === ia ? 8 : 9 === ia ? 7.5 : 7 === ia ? 7 : "?", ea = !0;
  } else if (k(c, "FOMA;")) {
    u = 16, ea = !0;
  } else if (k(c, "SoftBank;")) {
    u = 16, ea = !0;
  } else if (k(c, "KFMUWI")) {
    Da = !0;
    q = 6.3;
    Ca = Ba = !0;
  } else if (k(c, "KFKAWI")) {
    Da = !0, q = 6, Ca = Ba = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    Da = !0, q = 5, Ca = Ba = !0;
  } else if (k(c, "KFGIWI")) {
    Da = !0, q = 5, Ca = Ba = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    Da = !0, q = 5 <= Ra(ja) ? 5 : 4, Ca = Ba = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    Da = !0, q = 3, Ca = Ba = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    Da = !0, q = 2, Ca = Ba = !0;
  } else if (k(c, "Kindle Fire")) {
    Da = !0, q = 1, Ca = Ba = !0;
  } else if (C = p(c, "Kindle/")) {
    u = 20, q = C, R = 22, F = 2.2;
  } else if (rb) {
    Da = !0, q = ja || Qb, Ca = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    Da = !0, q = ja, Ca = !0;
  } else if (k(c, "MeeGo")) {
    u = 34;
  } else if (k(c, "Maemo")) {
    u = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Hb) {
    u = 22, tb = !0;
  } else if ("WinCE" === H) {
    u = 21, tb = !0;
  } else if (0 === H.indexOf("Win")) {
    u = "Win16" === H ? 37 : "Win32" === H ? 38 : "Win64" === H ? 39 : 0, q = p(c, "Windows NT ") || p(c, "Windows ");
  } else if (0 === H.indexOf("Mac")) {
    u = "Mac68K" === H ? 41 : "MacPowerPC" === H || "MacPPC" === H ? 40 : "MacIntel" === H ? 42 : 0;
    if (C = p(c.split("_").join("."), "Mac OS X ")) {
      q = C;
    }
    Rb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    u = 36, q = Oa, ea = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    u = 44;
  } else if (k(c, "FreeBSD")) {
    u = 45;
  } else if (k(c, "OpenBSD")) {
    u = 46;
  } else if (k(c, "NetBSD")) {
    u = 47;
  } else if (Ha && Pa) {
    k(c, "Android 4.4;") ? wa = {min:2.3} : 4 <= Ra(ja) ? wa = ja : wa = {min:2.2}, q = wa;
  } else if (Ha && qa) {
    ja ? wa = ja : wa = {min:1.6}, q = wa, k(c, "Tablet") ? Ba = !0 : ea = !0;
  } else if (ja) {
    q = ja, Ha = !0;
  } else if (Ab && P || zb || lb) {
    Va = !0;
    pb ? wa = {min:4.4} : xb && !Db || Fb || Cb ? wa = {min:4} : (wa = ja = wb.touchAction !== La ? {min:5} : bb ? 4.4 : z ? ra.connection ? y.searchBoxJavaBridge_ || xb ? gb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Qa ? 3 : 533 <= Qa ? G ? 2.3 : 2.2 : 530 <= Qa ? 2 : 1.5, V && (R = 25, F = V));
    q = wa;
    Ha = !0;
  } else {
    Pb ? (q = {min:5}, Va = Ha = !0) : Ab && (k(c, "Ubuntu") ? u = 48 : (C = p(c, "Mint/")) ? (u = 49, q = C) : (C = p(c, "Fedora/")) ? (u = 50, q = C) : u = k(c, "Gentoo") ? 51 : 52);
  }
  Da || Ha && Va && Nb ? u = 28 : Ha && (u = u || 27);
  R || (Ca = Ca || Ha, qa ? (R = Ca || tb || ea || Ba ? 9 : 8, F = Ea) : va ? (wa = ya(ha, "Trident/") + 4, R = tb || ea || Ba || mb ? 3 : Rb && 5 <= ia ? 7 : 2, F = ia) : Ga ? (R = 23 === u ? 6 : 5, F = p(ha, "Edge/")) : Za ? (R = 13, F = Za) : Pa ? (R = Ca ? 12 : 11, F = Ia || db) : pb ? (R = 25, F = pb) : (C = sb || p(c, "NetFront/")) ? (R = 19, F = C) : (C = p(c, "iCab")) ? (R = 20, F = C) : (C = J(p(c, "Opera Mini/"), p(c, "Opera Mobi/")) || cb && Oa) ? (R = 10, F = C, u || (k(c, "iPhone") ? 
  Ja = 0 : k(c, "iPad") ? Ja = 1 : k(c, "iPod") && (Ja = 2), Ja && (u = 24))) : yb ? (R = 26, F = Ub) : Mb ? (R = 15, F = Na) : Ha && Db ? (R = 22, F = ja) : xb || Fb || Cb ? (R = Ca ? 23 : 21, F = jb || $a) : Ha && bb ? (R = 24, F = 5 > Ra(ja) ? ja : jb) : Ha && (Oa || Va) ? (R = 22, F = ja) : jb ? (R = Ca ? 23 : 21, F = jb) : Qa && (R = 16, F = Qa));
  u && (Ua[2] = u, q && (Ua[3] = S(q)));
  R && (Ua[0] = R, F && (Ua[1] = S(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Ua, y, C, ra, G, Ra, gb, La, ya, k, Kb, hb, p, J) {
  function S(l) {
    if (y[0] === l) {
      return ia === ia + "" ? ya(ia) : ia;
    }
  }
  function ta(l) {
    var B = y[3];
    if (y[2] === l) {
      return B === B + "" ? ya(B) : B;
    }
  }
  function c(l) {
    var B = c.i || (c.i = {}), W = B[l], da, aa;
    if (W) {
      return W;
    }
    W = l.split("-");
    da = W.length;
    if (2 > da) {
      return l;
    }
    for (; 1 < da;) {
      aa = W[--da];
      W[da] = aa.charAt(0).toUpperCase() + aa.substr(1);
    }
    return B[l] = W.join("");
  }
  function ha(l, B, W) {
    l + "" === l && ("a" === l.charAt(2) && (W = !0, l = l.substr(0, 2)), l = "CS" === l ? 7.2 > z ? 117 : .9 > P || 9 > r || 9 > z || Ta ? 1 : 132 : parseInt(l, 16));
    W && (50 === l && (l = 128), 102 < l && 108 > l && (l += 24));
    return (l - 1) * -(6 * (B || 2));
  }
  var Na = G.body, H = Na.style, Ga, wb, ia = y[1], r = S(2) || S(3), Ta = S(7), ib = S(5) || S(6), z = S(8) || S(9), P = S(11) || S(12), Oa = P && 0 <= y.conpare(ia, "1.9.1"), cb = S(13), qa = S(16), Ea = S(17) || S(18), Fb = S(10) || S(26), va = S(21) || S(23), xb = S(24), Pa = S(22), yb = S(25), Ub = va || xb || Pa || yb, Lb = va && ya(Ra.userAgent.split("Edg/")[1]), Gb = ya(Ra.appVersion.split("Trident/")[1]) + 4, ja = ta(37) || ta(38) || ta(39), zb = ta(40) || ta(41) || ta(42) || ta(43), Ha = 
  .9 > P, Ab = (Ta ? "ie5mac" : 5.5 > r ? "ie5win" : 6 > r ? "ie55" : 10 > r ? "ie" + (r | 0) : 7.2 > z ? "opr70" : 8 > z ? "opr72" : 9.5 > z ? "opr" + (z | 0) : P && !Oa ? 1.4 <= P ? "gck19" : 1.3 <= P ? "gck13" : 1 <= P ? "gck12" : Ha ? .8 <= P ? "gck08" : "gck07" : "gck09" : "modern") + ".css", Bb, Za, Ia, db, Vb, Qa, jb, $a, Cb, Mb, Hb, Nb, pb, V, Db, lb, ab, bb, qb, Ob, eb, Pb, rb, Qb, u, q, R, F, sb, tb, Ja, ea, Ba, mb, wa, Da, Ca, Rb, Va, A, sa, U, Sa, Ma, Wb, Eb, Ib, ub, Xb, Yb, Ka, Sb, Tb, 
  fb, Zb, ic, jc, ec, $b, fc, kc, lc, mc, gc, nb, ob, Wa, Jb, ac, hc, Xa;
  ta(1) || ta(2) || ta(3) || ta(4) || ta(8) || ta(9);
  db = 8 > r || 7.2 > z ? !1 : J;
  Vb = H.transform !== J ? "transform" : H["-o-transform"] !== J ? "-o-transform" : H["-ms-transform"] !== J ? "-ms-transform" : H.MozTransform !== J ? "-moz-transform" : H["-webkit-transform"] !== J ? "-webkit-transform" : "";
  Qa = [];
  jb = [];
  $a = [];
  pb = 525 > qa || 3.1 > Ea || 2.2 > Pa || 10 > z || P && !Oa || S(26) || 10 > S(3) || ta(34) || ta(32) || ta(3);
  eb = La.now || function() {
    return +new La();
  };
  (function() {
    function l() {
      for (var w, I = 0, X = eb(); I < ka.length;) {
        X < ka[0].t ? ++I : (w = ka.splice(I, 1)[0], w.f(w.p));
      }
      L = ka.length ? k(l, E) : 0;
    }
    function B() {
      for (var w, I = 0; I < aa.length; ++I) {
        w = aa[I], w.f();
      }
    }
    function W() {
      la && (la = p(la));
    }
    function da() {
      L && (L = Kb(L));
    }
    lb = function(w) {
      aa.length || (la = hb(B, na));
      aa.push({f:w, g:++xa});
      return xa;
    };
    ab = function() {
      la && (W(), la = hb(B, na));
    };
    bb = W;
    var aa = [], na = 500, xa = 0, la, ka, E, Y, L;
    if (5 > r || Ta) {
      C._wdb_onlooptimer = B, B = "_wdb_onlooptimer()";
    }
    V = function(w, I, X) {
      ka.length || (L = k(l, E));
      ka.push({f:w, p:I, g:++Y, t:eb() + (E < X ? X : E)});
      return Y;
    };
    Db = function(w) {
      for (var I = ka.length, X; X = ka[--I];) {
        if (X.g === w) {
          ka.splice(I, 1);
          break;
        }
      }
      return 0;
    };
    qb = function() {
      L && (da(), L = k(l, E));
    };
    Ob = da;
    ka = [];
    E = Ea | 0 || 530 <= qa && 534 > qa ? 64 : 16;
    Y = 0;
    if (5 > r || Ta) {
      C._wdb_ontimer = l, l = "_wdb_ontimer()";
    }
  })();
  (function() {
    function l(b, a, d) {
      var h = ["<", b], t = 1, D, T, M;
      if (a) {
        for (D in a) {
          M = a[D];
          if (null != M && "" !== M) {
            if ("style" === D) {
              h[++t] = ' style="';
              for (T in M) {
                for (var f = ++t, e, g = [], m = T.split(""), x = m.length; x;) {
                  e = m[--x], "A" <= e && "Z" >= e && (e = "-" + e.toLowerCase()), g[x] = e;
                }
                h[f] = g.join("") + ":" + M[T] + ";";
              }
              h[++t] = '"';
            } else {
              "className" === D && (D = "class"), h[++t] = " " + D + '="' + M + '"';
            }
          }
        }
      }
      h[++t] = ">";
      null != d && (oa && "FONT" !== b ? h[++t] = "<FONT>" + B(d) + "</FONT>" : h[++t] = B(d));
      h[++t] = "</" + b + ">";
      return h.join("");
    }
    function B(b) {
      return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function W(b) {
      var a = "*" === b;
      b = oa ? a ? G.all : G.all.tags(b.toUpperCase()) : 6 > r && a ? G.all : G.getElementsByTagName(b);
      a = [];
      for (var d = 0, h = b.length; d < h; ++d) {
        a[d] = b[d];
      }
      return a;
    }
    function da(b) {
      return oa ? b.parentElement : b.parentNode;
    }
    function aa(b, a, d, h, t, D) {
      var T, M;
      if (oa) {
        T = 0 === b ? "beforebegin" : 1 === b ? "afterend" : "beforeend";
        M = q(2 > b ? u(a) : a);
        M = 2 > b ? M.indexOf(a) + b : M.length;
        a.insertAdjacentHTML(T, l(d, h, t));
        a = q(a)[M];
        null != t && ("FONT" === d ? a.nodeType = 3 : (a.nodeType = 1, a.children[0].nodeType = 3));
      } else if (ma) {
        a = G.createElement(l(d, h));
      } else {
        a = D ? G.createElementNS("http://www.w3.org/2000/svg", d) : G.createElement(d);
        if (h) {
          for (T in h) {
            if ((b = h[T]) || 0 === b) {
              switch(T) {
                case "class":
                case "className":
                  Rb(a, b);
                  break;
                case "style":
                  D = a.style;
                  for (M in b) {
                    D[M] = b[M];
                  }
                  break;
                default:
                  wa(a, T, b);
              }
            }
          }
          !z || "a" !== d && "A" !== d || !h.href || h.tabindex || wa(a, "tabindex", "-0", !0);
        }
        Fa || null != t && xa(a, t);
      }
      return a;
    }
    function na(b, a) {
      var d;
      if (oa) {
        return aa(2, b, "FONT", J, a);
      }
      d = G.createTextNode("" + a);
      b.appendChild(d);
      return d;
    }
    function xa(b, a) {
      z ? (b.firstChild && (b.innerHTML = ""), na(b, a)) : b.textContent = a;
    }
    function la(b) {
      return "A" === ka(b) && w(b, "href", !0);
    }
    function ka(b) {
      return b.tagName.toUpperCase();
    }
    function E(b, a, d) {
      if (8 > z || 5.5 > r) {
        a = c(a);
      }
      b = b.getAttribute(a);
      return !d && z && "tabindex" === a ? "-0" === b ? "" : "" === b ? "-1" : b : b || "";
    }
    function Y(b, a, d, h) {
      if (!h && z) {
        if ("tabindex" === a) {
          if ("-1" === d) {
            L(b, a, !0);
            return;
          }
          !d && la(b) && (d = "-0");
        } else {
          "href" === a && "-0" !== E(b, "tabindex", !0) && "A" === ka(b) && Y(b, "tabindex", "-0", !0);
        }
      }
      if (8 > z || 5.5 > r) {
        a = c(a);
      }
      b.setAttribute(a, d);
    }
    function L(b, a, d) {
      if (!d && z) {
        if ("tabindex" === a) {
          "-0" !== E(b, a, !0) && la(b) && Y(b, a, "-0", !0);
          return;
        }
        "href" === a && "-0" === E(b, "tabindex", !0) && L(b, "tabindex", !0);
      }
      if (8 > z || 5.5 > r) {
        a = c(a);
      }
      b.removeAttribute(a);
    }
    function w(b, a, d) {
      if (!d && z && "tabindex" === a && la(b)) {
        return "-0" !== E(b, a, !0);
      }
      if (8 > z || 5.5 > r) {
        a = c(a);
      }
      return b.hasAttribute ? b.hasAttribute(a) : null != b.getAttribute(a);
    }
    function I(b, a) {
      9 > r ? b.className = a : b.setAttribute("class", a);
    }
    function X(b, a) {
      return -1 !== (" " + b.className + " ").indexOf(" " + a + " ");
    }
    function pa(b, a, d) {
      if (8 > z || 5.5 > r) {
        a = c(a);
      }
      b.style[a] = d;
    }
    var oa = 5 > r, ma, Fa;
    Ga = W("html")[0];
    wb = W("head")[0];
    Pb = function(b) {
      return C[b] || G[b] || G.getElementById(b);
    };
    rb = W;
    Qb = function(b) {
      var a = [], d = 0, h, t = -1, D, T, M;
      if (9 > r || !G.getElementsByClassName) {
        D = 6 > r ? G.all : G.getElementsByTagName("*");
      } else {
        T = !0;
        D = G.getElementsByClassName(b);
      }
      for (h = D.length; d < h; ++d) {
        M = D[d];
        if (T || (oa || 1 === M.nodeType) && X(M, b)) {
          a[++t] = M;
        }
      }
      return a;
    };
    u = da;
    q = function(b) {
      b = oa ? b.children : b.childNodes;
      for (var a = [], d = b.length; d;) {
        a[--d] = b[d];
      }
      return a;
    };
    R = function(b) {
      var a = !(7.03 < z && 7.2 > z) && b.children;
      b = a ? a : b.childNodes;
      for (var d = [], h = b.length, t = -1, D; h;) {
        if (D = b[--h], oa) {
          3 !== D.nodeType && (d[++t] = D);
        } else {
          if (a || 1 === D.nodeType) {
            d[++t] = D;
          }
        }
      }
      return d;
    };
    F = function(b, a, d, h, t) {
      a = aa(2, b, a, d, h, t);
      oa || (b.appendChild(a), Fa && null != h && (9 > r ? na(a, h) : xa(a, h)));
      return a;
    };
    sb = function(b, a, d, h, t) {
      a = aa(0, b, a, d, h, t);
      oa || (da(b).insertBefore(a, b), Fa && null != h && (9 > r ? na(a, h) : xa(a, h)));
      return a;
    };
    tb = na;
    Ja = function(b, a) {
      var d;
      if (oa) {
        return aa(0, b, "FONT", J, a);
      }
      d = G.createTextNode("" + a);
      u(b).insertBefore(d, b);
      return d;
    };
    ea = function(b) {
      if (oa) {
        b.outerHTML = "";
      } else {
        return 5.5 > r && 1 === b.nodeType && (b.style.filter = ""), u(b).removeChild(b), b;
      }
    };
    ma = 9 > r;
    Fa = ma;
    Ba = ka;
    mb = E;
    wa = Y;
    Da = L;
    Ca = w;
    Rb = I;
    Va = X;
    A = function(b, a) {
      var d;
      if (!X(b, a)) {
        if (d = b.className) {
          d += " ";
        }
        I(b, d + a);
      }
    };
    sa = function(b, a) {
      var d;
      if (X(b, a)) {
        d = b.className.split(" ");
        d.splice(d.indexOf(a), 1);
        I(b, d.join(" "));
      }
    };
    U = pa;
    Sa = function(b, a) {
      var d = -1, h, t, D;
      if (5.5 > r || 7.1 > z) {
        if (r) {
          if (5.5 > r) {
            h = "";
            t = b.style.cssText.split(";");
            D = -1;
            for (var T, M; T = t[++D];) {
              M = T.split(":")[0], h += ";" + M.toLowerCase() + ":" + T.substr(M.length + 1);
            }
            h = h.substr(1);
          } else {
            h = b.style.cssText;
          }
          if (h) {
            for (h = h.split(";"); t = h[++d];) {
              pa(b, t.split(":")[0], "");
            }
            d = -1;
          }
        } else {
          b.setAttribute("style", "");
        }
        if (a) {
          for (h = a.split(";"); t = h[++d];) {
            D = t.split(":")[0], pa(b, D, t.substr(D.length + 1));
          }
        }
      } else {
        9 > z || 1 > P ? a ? b.setAttribute("style", a) : b.removeAttribute("style") : b.style.cssText = a;
      }
    };
  })();
  (function() {
    function l() {
      return t ? T ? 2 : D ? 3 : 1 : 0;
    }
    function B(f) {
      Wb(C, "load", B);
      B = J;
      da(Qa, f, !0);
      Eb = Qa = J;
    }
    function W(f, e) {
      ub(function() {
        var g = E(f);
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
    function aa(f, e, g) {
      Qa || L.length || V(na);
      L.push(f, e, g);
    }
    function na() {
      var f = L, e;
      for (L = []; e = f.shift();) {
        da(e, f.shift(), f.shift());
      }
    }
    function xa(f, e, g, m) {
      var x, v, N;
      if (oa) {
        f.removeEventListener(e, g, m ? w ? m : m.capture || !0 === m : !1);
      } else {
        m = I[e];
        x = "on" + e;
        if (m) {
          if (ma) {
            Fa.push(f, e, g);
          } else {
            e = 0;
            for (v = m.length; e < v; e += 2) {
              m[e] === f && (m[e + 1] === g ? m.splice(e, 1) : N = !0);
            }
            N || (X ? f.detachEvent(x, la) : r ? (f[x] = ra, f[x] = null) : delete f[x]);
          }
        }
      }
    }
    function la(f) {
      var e = f || event, g = e.type, m, x, v, N, fa;
      f = I[g];
      g = "on" + g;
      m = 0;
      x = f.length;
      ++ma;
      5 > r ? e = {type:event.type, target:event.srcElement, preventDefault:j, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : r ? (e.target = e.srcElement, e.preventDefault = function() {
        e.returnValue = !1;
      }, e.stopPropagation = function() {
        e.cancelBubble = !0;
      }) : pa && (e.h = e.stopPropagation, e.stopPropagation = function() {
        v = !0;
      });
      for (; m < x; m += 2) {
        N = f[m];
        if (N === this) {
          fa = f[m + 1];
          5.5 > r ? (N[g] = fa, N[g](e), N[g] = la) : fa.call(N, e);
        } else {
          7.2 > z && this === G && N === C && f[m + 1].call(N, e);
        }
      }
      if (r) {
        return e.preventDefault = e.stopPropagation = ra, e.preventDefault = e.stopPropagation = J, e.returnValue;
      }
      pa && (e.defaultPrevented && "click" === e.type && "A" === e.target.tagName && e.target.getAttribute("href") && (b = !0), v && !b && e.h(), e.h = e.stopPropagation = J);
      --ma;
      if (0 === ma) {
        for (f = Fa; f.length;) {
          xa(f.shift(), f.shift(), f.shift());
        }
      }
      function j() {
        event.returnValue = !1;
      }
      j = !1;
    }
    function ka() {
      var f = 9 === Y.offsetWidth;
      Yb !== f && aa(jb, Yb = f);
    }
    var E = C.matchMedia, Y, L = [], w, I, X, pa, oa, ma, Fa, b, a, d, h, t, D, T, M;
    Qa.push(function() {
      W = J;
      Y = F(Na, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Eb(function() {
        L.length && V(na);
      });
    });
    Ma = function(f, e, g, m) {
      var x, v;
      if (oa) {
        f.addEventListener(e, g, m ? w ? m : m.capture || !0 === m : !1);
      } else {
        m = I[e];
        x = "on" + e;
        if (m) {
          e = 0;
          for (v = m.length; e < v; e += 2) {
            if (m[e] === f && m[e + 1] === g) {
              return;
            }
          }
          m.push(f, g);
        } else {
          m = I[e] = [f, g];
        }
        X ? f.attachEvent(x, la) : (g = f[x], g !== la && "function" === typeof g && m.unshift(f, g), f[x] = la);
      }
    };
    Wb = xa;
    w = !r && !Ta && (new gb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
    I = {};
    X = !1;
    pa = 525.13 > qa;
    oa = !pa && !Ta && C.addEventListener;
    ma = 0;
    Fa = [];
    pa && Ga.addEventListener("click", function(f) {
      if (b) {
        return b = !1, f.preventDefault(), !1;
      }
    });
    Eb = function(f) {
      Qa.push(f);
    };
    Ib = function(f) {
      d && d.push(f);
    };
    if (419.3 >= qa) {
      a = function() {
        var f;
        if (a) {
          f = G.readyState;
          "loaded" === f || "complete" === f ? (a = J, B()) : V(a);
        }
      };
      V(a);
    } else {
      Ma(C, "load", B);
    }
    if (r || !Ha && 1.8 > P) {
      Ma(C, "unload", function(f) {
        da(d, f, !0);
      });
      d = [];
    }
    ub = function(f) {
      jb.push(f);
    };
    Eb(function() {
      ka();
      lb(ka);
    });
    Xb = function(f) {
      $a && $a.push(f);
    };
    h = 60 > P || cb;
    if (89 <= P || 89 <= va || ja && 79 <= Lb || E && (E("(forced-colors:none)").matches || E("(forced-colors:active)").matches)) {
      Sb = !0, W("(forced-colors:active)", function(f) {
        t = f.matches;
        Ka = l();
        aa($a, Ka);
      });
    } else if (10 <= r || ib || ja && Lb) {
      Sb = !0, W("(-ms-high-contrast:black-on-white)", function(f) {
        t = D = f.matches;
        Ka !== l() && (Ka = l(), aa($a, Ka));
      }), W("(-ms-high-contrast:white-on-black)", function(f) {
        t = T = f.matches;
        Ka !== l() && (Ka = l(), aa($a, Ka));
      }), W("(-ms-high-contrast:active)", function(f) {
        t = f.matches;
        Ka !== l() && (Ka = l(), aa($a, Ka));
      });
    } else if (ja && (r || P && 0 <= y.conpare(ia, "1.8.1") || cb)) {
      M = function() {
        function f(m, x) {
          var v;
          if (x && "transparent" === m) {
            return 382.5;
          }
          if ("#" === m.charAt(0)) {
            return parseInt("0x" + m.substr(1, 2), 16) + parseInt("0x" + m.substr(3, 2), 16) + parseInt("0x" + m.substr(5, 2), 16);
          }
          v = m.split("(")[1].split(",");
          return ya(v[0]) + ya(v[1]) + ya(v[2]);
        }
        var e = G.defaultView, g;
        g = e ? e.getComputedStyle(Y, null) : Y.currentStyle;
        e = (g && g.color || "").split(" ").join("");
        g = (g && g.backgroundColor || "").split(" ").join("");
        e && (t = "#123456" !== e && "rgb(18,52,86)" !== e, D = f(e) < f(g, !0), T = f(e) > f(g, !0), Ka !== l() && (Ka = l(), aa($a, Ka, h)));
      };
      ub(function(f) {
        if (f) {
          return U(Y, "color", "#123456"), U(Y, "backgroundColor", "#123456"), h ? (M(), $a = J) : lb(M), M = J, !0;
        }
      });
    } else {
      $a = l = J;
    }
  })();
  (function() {
    function l(n) {
      switch(n) {
        case 1:
          return oa;
        case 2:
          return !!ma;
        case 3:
          return !!Fa;
        case 4:
          return !!b;
        case 5:
          return d;
        case 6:
          return a && !Y;
      }
      return !1;
    }
    function B(n) {
      h(n);
      N && !n && ea(N);
      h = t = D = T = M = f = x = v = N = fa = J;
    }
    function W(n) {
      G.fonts.load('1.6em "' + n + '"').then(function() {
        var ba;
        (ba = na(t)) ? V(B, ba) : da(!0);
      }, function() {
        db !== J ? xa(db) : Cb(xa);
      });
    }
    function da(n) {
      n && (m = eb());
      (n = na(t, e)) ? B(n) : (n = e, G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (m = eb(), n = !1) : n = n < eb() - m, n ? x ? la() : E ? B(0) : db !== J ? xa(db) : Cb(xa) : V(da));
    }
    function aa() {
      return F(Na, 5 > r ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":15 > P ? '"liga=1"' : '"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, I);
    }
    function na(n) {
      var ba = 0, K = -1, Q = (X || !1) && [], O, ca, Z;
      if (!fa) {
        O = -1;
        v = aa();
        for (fa = []; ca = pa[++O];) {
          U(v, "fontFamily", ca), fa[O] = v.offsetWidth;
        }
      }
      for (5 > r ? v || (v = aa()) : u(v) || Na.appendChild(v); O = pa[++K];) {
        U(v, "fontFamily", '"' + n + '",' + O);
        Z = v.offsetWidth;
        if (X) {
          Q[K] = Z;
        } else {
          if (Z !== fa[K]) {
            ba = 9 > r ? Z ? 1 : 0 : 1;
            break;
          }
        }
      }
      if (X && Z === Q[0] && Z === Q[1]) {
        for (ba = 1, K = -1; 0 <= (Z = fa[++K]);) {
          if (Z === Q[0] && Z === Q[1] && Z === Q[2]) {
            ba = 0;
            break;
          }
        }
      }
      !r && ba && M && (v.textContent = M, Z = v.offsetWidth, v.textContent = f, ba = Z === v.offsetWidth ? 2 : 1, v.textContent = I);
      v = ea(v);
      return ba;
    }
    function xa(n) {
      n ? (x = !0, e = w, la()) : B(0);
    }
    function la() {
      var n, ba;
      if (D) {
        for (; D.length;) {
          n = D.shift();
          ba = D.shift();
          if (l(n)) {
            N = Nb(ba, ka, T, N, g);
            return;
          }
        }
      }
      B(0);
    }
    function ka(n) {
      n ? da(!0) : la();
    }
    jb.splice(0, 0, function() {
      var n;
      if (Yb) {
        Ia = 8 <= r || ib || 9.5 <= z || Oa || cb || 522 <= qa || 3 <= Ea || Fb || Ub ? 3 : 7.2 <= z ? 2 : 6 <= z || P ? 1 : 0;
        if (!Ia && !r && !Ta) {
          n = F(Na, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ia = 6 <= n.offsetWidth ? 2 : 0;
          ea(n);
        }
        return !0;
      }
    });
    Cb = !1 === db ? function(n) {
      V(n, !1);
    } : function(n) {
      var K, Q;
      function ba(O) {
        Q && (Q = Db(Q), db = O, K.onload = K.onerror = ra, V(n, O));
      }
      if (db !== J) {
        V(n, db);
      } else {
        K = new Image();
        Q = V(ba, !1, 99);
        K.onerror = function() {
          ba(!1);
        };
        K.onload = function() {
          ba(1 === K.width * K.height);
        };
        K.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > r && Eb(function() {
      var n = F(Na, "div");
      Sa(n, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Bb = 1 < n.offsetHeight;
      ea(n);
    });
    Mb = function(n, ba) {
      function K() {
        var Z;
        if (O || !ca || Q.complete) {
          Z = !!Q.width;
          Za = Za || Z;
          V(n, Z);
          Q.onerror = Q.onload = ra;
          Q = n = J;
        } else {
          --ca, V(K);
        }
      }
      var Q = new Image(), O, ca = 99;
      Q.onerror = function() {
        O = !0;
      };
      Q.onload = function() {
        O = !0;
      };
      Q.src = ba;
      V(K);
    };
    Hb = function(n, ba, K, Q, O, ca, Z) {
      h = n;
      t = ba;
      D = K;
      T = Q;
      M = O;
      f = ca;
      e = g = Z || L;
      S(10) ? V(B, 1) : pb ? V(B, 0) : !G.fonts || 603 > qa || 11 > Ea ? da(!0) : W(t);
    };
    var E = 9 > r, Y = 6 > va || z || 530 > qa || 5 > Ea || ta(10), L = 5E3, w = 500, I = "mmmmmmmmmmlliiiiiiiii", X = 9 <= va && 18 > va || 3 > Pa || 7 > Ea || qa && 0 >= y.conpare(ia, "536.11"), pa = ["monospace", "sans-serif", "serif"], oa = 14 <= ib || 36 <= va || 39 <= P || 3 <= cb || 602 <= qa && 0 <= y.conpare("10.12", zb) || 10 <= Ea, ma = 6 <= va || P && 0 <= y.conpare(ia, "1.9.2") || cb || 533 <= qa || 5 <= Ea || 4.4 <= Pa || 11.5 <= z || ib || 9 <= S(2) || 10 <= S(3), Fa = 2 <= va || Oa || 
    cb || 525 <= qa || 4 <= Ea || 2.2 <= Pa || 10.1 <= z || ib || 9 <= S(2) || 10 <= S(3), b = Fa, a = 5.1 <= ja && 5.2 >= ja && 40 > va || 6 <= ja && 6.1 > ja && 51 > va || 37 > va || 525 <= qa || 3.1 <= Ea || 3 <= Pa || 11.5 <= z, d = 4 <= S(2) || 10 <= S(3), h, t, D, T, M, f, e, g, m, x, v, N, fa;
  })();
  (function() {
    Nb = function(E, Y, L, w, I) {
      var X, pa, oa;
      if (B) {
        V(Y, !1);
      } else {
        if (w) {
          if (va && w.href) {
            pa = w.cloneNode();
            w.parentNode.insertBefore(pa, w);
            ea(w);
          } else {
            pa = w;
          }
        } else {
          pa = F(wb, "link", {type:"text/css", rel:"stylesheet"});
        }
        if (!xa) {
          (X = Pb(L)) ? Da(X, "id") : X = F(Na, "div", {"aria-hidden":"true", className:L});
          oa = X.offsetWidth;
          wa(X, "id", L);
        }
        la(pa, E, Y, X, oa, I || l);
        return pa;
      }
    };
    var l = 5E3, B = P && 0 > y.conpare(ia, "0.9.1"), W = 11 <= r || ib || 9 <= z && 9.5 > z, da = 11 > r, aa = 7.2 <= z && 7.5 > z, na = 9 > P && !B || 19 > va || 4.3 > Pa || 2 > yb || 536 > qa || 6 > Ea || 7 <= z && 9 > z && !aa, xa = !B && !W && !da && !aa && !na, la = xa ? function(E, Y, L) {
      E.onload = j;
      E.onerror = function() {
        E.onload = E.onerror = null;
        V(L, !1);
      };
      E.href = Y;
      function j() {
        E.onload = E.onerror = null;
        V(L, !0);
      }
      j = !1;
    } : W ? function(E, Y, L, w, I) {
      E.onload = function() {
        V(L, ka(w, I));
        ea(w);
        E.onload = null;
        w = J;
      };
      E.href = Y;
    } : da ? function(E, Y, L, w, I) {
      E.onreadystatechange = function() {
        if ("loaded" === E.readyState || "complete" === E.readyState) {
          V(L, ka(w, I)), ea(w), w = J, E.onreadystatechange = ra;
        }
      };
      E.href = Y;
    } : na || aa ? function(E, Y, L, w, I, X) {
      function pa() {
        ma && (Fa = Db(Fa), b = eb() + 999, V(oa, 0, 99), na ? ma.onerror = null : ma.removeEventListener("load", pa, !1), ma = J);
      }
      function oa() {
        ka(w, I) ? (ea(w), V(L, !0), w = L = J) : eb() < b ? V(oa, 0, 99) : (ea(w), V(L, !1), w = L = J);
      }
      var ma = new Image(), Fa = V(pa, 0, X), b;
      na ? ma.onerror = pa : ma.addEventListener("load", pa, !1);
      ma.src = E.href = Y;
    } : J, ka = !xa && !B && function(E, Y) {
      return E.offsetWidth !== Y;
    };
  })();
  Tb = String.fromCharCode;
  fb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
  "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Tb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"];
  Zb = fb[7];
  ic = fb[113];
  jc = Tb(160);
  Tb(8194);
  ec = fb[31];
  $b = fb[30];
  fc = fb[63];
  kc = fb[125];
  lc = fb[126];
  mc = Tb(59648);
  gc = (9 === r || P && 0 <= y.conpare(ia, "1.8.1") || cb) && !Sb;
  nb = [];
  Jb = 7.2 > z ? function() {
    ob = !ob;
    for (var l = -1, B; B = nb[++l];) {
      -1 !== B.className.indexOf("pbAlp") ? U(B, "display", ob ? "" : "none") : (A(B, ob ? "pbChrCS" : "pbChr00"), sa(B, ob ? "pbChr00" : "pbChrCS"));
    }
  } : gc ? function() {
    ob = !ob;
    for (var l = -1, B; B = nb[++l];) {
      U(B, "opacity", ob ? 1 : 0);
    }
  } : J;
  ac = Ua.startBlinkingIfCursor = function(l) {
    Jb ? Va(l, "pbChrCS") && (Wa || !z && !Ka || (Wa = hb(Jb, 400)), -1 === nb.indexOf(l) && nb.push(l)) : nb = J;
  };
  Ua.stopBlinkingIfCursor = function(l) {
    Jb && (l = nb.indexOf(l), 0 <= l && (nb.splice(l, 1), !nb.length && Wa && (p(Wa), Wa = 0)));
  };
  gc && Xb(function(l) {
    l ? Wa || (Wa = hb(Jb, 400)) : Wa && (p(Wa), Wa = 0);
  });
  Jb && Ib(function() {
    Wa && p(Wa);
  });
  Sb || Xb(function(l) {
    l ? (wa(Ga, "forced-colors", 2 === l ? "lod" : 3 === l ? "dol" : "active"), (Vb || 9 === r || 5.5 <= r && 9 > r && Bb) && A(Ga, "jsCanRotate")) : (Da(Ga, "forced-colors"), sa(Ga, "jsCanRotate"));
  });
  (function() {
    function l() {
      var a, d;
      l = J;
      w.length && (na(a = w.shift(), w.shift(), w.shift(), w.shift()), (d = w.shift()) && V(d, a));
    }
    function B(a) {
      a && A(Na, "pbList-noWebFont");
      l();
    }
    function W(a) {
      (I = a) ? l() : Za ? B(!0) : Za !== J ? l() : Mb(B, X);
      W = Hb = B = J;
    }
    function da() {
      da = J;
      Hb(W, "PB-100", [1, Xa + "pbFont/woff2.css", 2, Xa + "pbFont/woff.css", 3, Xa + "pbFont/ttf.css", 5, Xa + "pbFont/eot.css", 6, Xa + "pbFont/svg.css"], "js-myIconFont-testCssReady", "\u208b\u2081", fc);
    }
    function aa(a) {
      this.focus();
      a.preventDefault();
      a.stopPropagation();
    }
    function na(a, d, h, t) {
      function D(m, x) {
        for (var v = q(m), N = -1, fa; fa = v[++N];) {
          switch(fa.nodeType) {
            case 1:
              D(fa, x);
              break;
            case 3:
              fa.data && M(fa.data) && x.push(fa);
          }
        }
      }
      function T(m, x) {
        var v = m.children, N = 0, fa = v.length;
        if (fa) {
          for (; N < fa; ++N) {
            T(v[N], x);
          }
        } else {
          (v = m.innerText) && M(v) && x.push(m);
        }
      }
      function M(m) {
        return m.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var f = [], e, g;
      if (l) {
        -1 === w.indexOf(a) && (w.push(a, d, h, l, t), pa && da && da());
      } else {
        g = w.indexOf(a);
        0 <= g && w.splice(g, 5);
        I || !Za || h || Va(a, "pbList") && A(a.firstChild, "pbList-fallback-img");
        for (5 > r ? T(a, f) : D(a, f); e = f.shift();) {
          g = 5 > r ? e.innerText : e.data, 2 !== I ? (0 <= g.indexOf("\u2091\u208b") && (g = g.split("\u2091\u208b").join($b)), 0 <= g.indexOf("\u1d07\u207b") && (g = g.split("\u1d07\u207b").join($b)), I && (0 <= g.indexOf("\u208b\u2081") && (g = g.split("\u208b\u2081").join(fc)), 0 <= g.indexOf("\u1d47/\u1d04") && (g = g.split("\u1d47/\u1d04").join(mc)), 0 <= g.indexOf("\u1d47/") && (g = g.split("\u1d47/").join(kc)), 0 <= g.indexOf("/\u1d04") && (g = g.split("/\u1d04").join(lc)))) : 0 <= g.indexOf("\u2091\u208b") && 
          (g = g.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= g.indexOf("\u2091") && (g = g.split("\u2091").join(ec)), !d || !h && Za ? xa(g.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(ic).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Zb).split("&amp;").join("&"), e, d, h) : 5 > r ? e.innerText = g : e.data = g;
        }
        t && V(t, a);
      }
    }
    function xa(a, d, h, t) {
      function D(za, Aa) {
        for (var vb = ""; Aa;) {
          Aa & 1 && (vb += za), Aa >>= 1, za += za;
        }
        return vb;
      }
      function T(za, Aa, vb) {
        for (var bc, nc = -1, cc, dc; bc = Aa[++nc];) {
          for (; 0 <= (cc = za.indexOf(bc));) {
            dc = bc.length, za = za.substr(0, cc) + D(vb, dc) + za.substr(cc + dc);
          }
        }
        return za;
      }
      function M(za) {
        var Aa = ya(za), vb = "" + Aa;
        return 0 < Aa && Aa === Aa | 0 && (Aa = za.indexOf(vb) + vb.length, Aa <= za.length) ? Aa : 0;
      }
      var f = " area line str cmd fnc syb".split(" "), e = 5 > r || 1 === d.nodeType, g = [], m = "", x, v = -1, N, fa, n, ba, K, Q, O, ca, Z, kb, Ya;
      if (e) {
        if (Fa) {
          K = d.style.visibility;
          U(d, "visibility", "hidden");
        }
        d.innerHTML = "";
      }
      if (b) {
        Q = d;
        d = G.createDocumentFragment();
      }
      if (function(za) {
        var Aa = za.indexOf("P");
        if (-1 === Aa) {
          return !1;
        }
        Aa = ya(za.charAt(Aa + 1));
        return 0 <= Aa && 9 >= Aa;
      }(a)) {
        m = D("+", a.length);
      } else {
        0 <= (x = M(a)) && (m = D("|", x), v = x, --v);
        for (; x = a.charAt(++v);) {
          x === Zb || N ? (m += "~", x === Zb && (N = !N)) : m += x;
        }
        m = T(m, L, "^");
        m = T(m, E, "{");
        m = T(m, Y, "}");
      }
      v = 0;
      for (N = a.length; v < N; ++v) {
        x = a.charAt(v);
        O = x === jc;
        ca = " " === x;
        x = O ? " " : x;
        Z = m.charAt(v);
        kb = (fa = Ya) && (O || ca);
        Ya = "|" === Z;
        Z = f["+|~{}^".indexOf(Z) + 1];
        if ("\n" !== x) {
          if (I || !Za || t) {
            if (2 === I) {
              if ("\u1d47/\u1d04" === a.substr(v, 3)) {
                x = "\u1d47/\u1d04", v += 2;
              } else {
                switch(a.substr(v, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    x = a.substr(v, 2), ++v;
                }
              }
            }
            h || (n = ca && "str" === Z ? "pbList-strsp" : O ? "" : !ca && Z ? "pbList-" + Z : "");
          } else {
            n = fb.indexOf(x), n = -1 === n ? "" : fb.indexOf(x).toString(16).toUpperCase(), n = (n = 1 === n.length ? "0" + n : n) ? "pbChr" + n : "", n = h ? O || ca ? "" : n || "" : ca && "str" === Z ? "pbList-strsp" : ca || !n ? "" : Z ? (n ? n + " " : "") + "pbList-" + Z : n;
          }
          O = J;
          kb ? (x = " ", n = "") : Ya && (P && !Oa || 9.5 > z) ? (Ya && !fa && (ba = 4 - (ya(a.substr(v)) + "").length), 7.5 > z ? O = ma ? "position:relative;top:-4px;left:" + 12 * ba + "px" : {position:"relative", top:"-4px", left:12 * ba + "px"} : O = ma ? "position:relative;left:" + 12 * ba + "px" : {position:"relative", left:12 * ba + "px"}) : ca && 7.5 > z && (n = "pbList-strsp");
          ma ? g.push("<font" + (n ? ' class="' + n + '"' : "") + (O ? ' style="' + O + '"' : "") + ">" + x + "</font>") : e || b ? F(d, "font", {"class":n, style:O}, x) : sb(d, "font", {"class":n, style:O}, x);
        } else {
          fa = Ya = !1, ma ? g.push(x) : e || b ? tb(d, x) : Ja(d, x);
        }
      }
      if (e) {
        ma ? d.innerHTML = g.join("") : b && Q.appendChild(d), Fa && U(d, "visibility", K);
      } else {
        if (ma) {
          a = G.createElement("font");
          for (a.innerHTML = g.join(""); g = a.firstChild;) {
            d.parentNode.insertBefore(g, d);
          }
          ea(d);
        } else {
          b ? Q.parentNode.replaceChild(d, Q) : ea(d);
        }
      }
    }
    1.9 > P && ub(function(a) {
      if (a) {
        a = rb("*");
        for (var d = 0, h = a.length, t; d < h; ++d) {
          t = a[d], "B" !== Ba(t) && -1 !== (" " + t.className).toLowerCase().indexOf(" pbchr") && (Ca(t, "title") || wa(t, "title", t.textContent), t.textContent = " ");
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
    var la = [], ka = P && 0 > y.conpare(ia, "0.9.9"), E, Y, L, w, I, X, pa, oa, ma, Fa, b;
    ub(function(a) {
      var t, D, T, M, f, e, g, m, x, v, N, fa, n, ba;
      function d(K) {
        var Q = mb(K, "pbTip"), O, ca;
        if (Q) {
          O = Q.charAt(0);
          ca = "_" === O;
          Q = (ca ? Q.charAt(2) : O).toUpperCase().charCodeAt(0) - 65;
          f ? F(K, "div", {style:{left:7 * Q + 3 + "px"}}) : (O = mb(K, "title"), Da(K, "pbTip"), Da(K, "title"), ca = F(K, "div", {className:"pbTip" + (ca ? "Btm" : ""), style:{width:O.length + t + "em", left:7 * Q - (ka ? 0 : 5) + "px"}}, O), ca = F(ca, "div"), .9 <= P && ka && U(ca, "left", "2px"));
        }
        M && 0 <= K.className.indexOf("pbColor") && F(K, "u");
      }
      function h(K, Q) {
        var O = mb(K, "pbGhst"), ca = K.className, Z = ca.split("pbCsr")[1] || "", kb = ca.split("pbAlp")[1] || "", Ya, za;
        if ("CS" === O) {
          Ya = "_";
        } else {
          Ya = O, 3 === Ya.length && (Ya = Ya.substr(0, 2)), Ya = fb[parseInt(Ya, 16)] || "~";
        }
        Z = Z.split(" ")[0];
        if (kb = ya(kb.split(" ")[0])) {
          D && (ca = ca.split("pbChr")[1].split(" ")[0], U(K, "backgroundPosition", ha(ca, 2, fa) + "px " + -24 * (10 - kb) + "px")), !Q && T && sb(K, "a").appendChild(K);
        }
        O && (kb = 10 - kb, D && (za = {backgroundPosition:ha(O, 2, fa) + "px " + -24 * (10 - kb) + "px"}), Da(K, "pbGhst"), m = sb(K, "b", {className:"pbChr" + O + " pbCsr" + Z + " pbAlp" + kb, style:za}, Ya), ac(m));
        ac(K);
      }
      if (a) {
        t = 6 > r ? 2 : 0;
        D = 7.2 > z || .9 > P || Ta;
        T = 1.1 === P;
        M = 1.4 > P;
        a = rb("SAMP");
        f = 8 === r;
        e = Ia;
        Bb && A(Na, "pbLCD-AX");
        if (a.length) {
          for (x = -1; g = a[++x];) {
            if (Va(u(g), "pbLCD")) {
              fa = Va(g, "PB-120") || Va(g, "FX-795P");
              n = R(g);
              for (g = n.length; N = n[--g];) {
                switch(Ba(N)) {
                  case "A":
                    (2 > e || f) && d(N);
                    if (2 > e) {
                      ba = R(N);
                      for (v = ba.length; v;) {
                        h(ba[--v], !0);
                      }
                    }
                    Fb ? wa(N, "href", "javascript:void(0)") : (Ma(N, "click", aa), la.push(N));
                    break;
                  case "B":
                    2 > e && h(N, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Ib(function() {
      for (var a; a = la.shift();) {
        Wb(a, "click", aa);
      }
    });
    6 === r && (new gb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(G);
    E = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" ");
    Y = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" ");
    L = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + $b + ec).split("");
    w = [];
    if (.9 <= P && 0 >= y.conpare(ia, "0.9.1")) {
      A(Ga, "pbLCD-gecko09To091");
      oa = !0;
    }
    ub(function(a) {
      var d, h, t;
      if (a) {
        a = rb("*");
        d = -1;
        for (X = Xa + "pbFont/x3mask" + (oa ? ".gecko0.9.1.gif" : ".png"); h = a[++d];) {
          if (Va(h, "pbList")) {
            t = mb(h, "pbskip");
            na(h, 0 <= t.indexOf("prettify"), 0 <= t.indexOf("fallback:img"));
          } else {
            Va(h, "pbFont") && na(h, !0, !0);
          }
        }
        w.length && da();
        return !0;
      }
    });
    ma = !1;
    Fa = 8 > z;
    b = !ma && !Fa && !(6 > r) && G.createDocumentFragment && !!Na.replaceChild;
    Ua.prettify = na;
    Ua.fixLiga = function(a, d) {
      na(a, !0, !0, d);
    };
  })();
  hc = G.scripts || rb("script");
  Xa = hc[hc.length - 1].src.split("/");
  --Xa.length;
  (Xa = Xa.join("/")) && (Xa += "/");
  6.1 > Ea && Ma(C, "scroll", ab);
  Ib(bb);
  6.1 > Ea && Ma(C, "scroll", qb);
  Ib(Ob);
  10 > r && (11 !== Gb || 5 !== r) || (9 > z || 1 > P || !Ta && !C.addEventListener ? G.write('<link href="' + Xa + Ab + '" rel="stylesheet"' + (8 > z ? "" : ' media="screen,handheld,projection,print"') + ">") : Eb(function() {
    F(wb, "link", {href:Xa + "" + Ab, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

