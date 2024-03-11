/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
PB100 = {};
ua = [];
ua.conpare = function(Wa, u) {
  var v = 0, la, J, Qa = (Wa + "").split("."), eb = (u + "").split("."), Ka = Qa.length;
  for (la = eb.length; "0" === Qa[Ka - 1];) {
    --Ka;
  }
  for (; "0" === eb[la - 1];) {
    --la;
  }
  for (J = Ka < la ? Ka : la; v < J; ++v) {
    var ya = Qa[v] - 0, h = eb[v] - 0;
    if (ya !== h) {
      return ya > h ? 1 : -1;
    }
  }
  return Ka > la ? 1 : Ka === la ? 0 : -1;
};
(function(Wa, u, v, la, J, Qa, eb, Ka) {
  function ya(z, sa) {
    var V = Qa(z.split(sa)[1]);
    return 0 <= V ? V : 0;
  }
  function h(z, sa) {
    return 0 <= z.indexOf(sa);
  }
  function Ib(z) {
    return h(z, "Linux armv") || h(z, "Linux aarch") || h(z, "Linux i686") || h(z, "Linux x86_64");
  }
  function fb(z, sa) {
    for (var V in sa) {
      if (V === z) {
        return !0;
      }
    }
  }
  function l(z, sa) {
    var V = "", Ra = -1, La;
    if (z = z.split(sa)[1]) {
      for (; La = z.charCodeAt(++Ra);) {
        if (48 <= La && 57 >= La || 46 === La) {
          V += z.charAt(Ra);
        } else {
          break;
        }
      }
      for (Ra = V.length; Ra;) {
        if (46 === V.charCodeAt(--Ra)) {
          V = V.substr(0, Ra);
        } else {
          break;
        }
      }
    }
    return V;
  }
  function N(z) {
    for (var sa = arguments, V = 1, Ra = sa[0], La; V < sa.length; ++V) {
      0 > ta(Ra, La = sa[V]) && (Ra = La);
    }
    return Ra;
  }
  function U(z) {
    return z === z + "" ? z : z === z - 0 ? "" + z : z.min && z.max ? z.min + "~" + z.max : z.min ? z.min + "~" : "~" + z.max;
  }
  var ta = Wa.conpare, c = la.userAgent, ha = la.appVersion, Ma = Qa(ha) || 0, K = la.platform, Ea = v.documentElement, ub = Ea && Ea.style, ia = v.documentMode, n = J.width, Sa = J.height;
  J = u.HTMLAudioElement;
  var gb = u.performance, x = u.Int8Array, Q = u.ontouchstart !== Ka, Na = l(ha, "Version/") || l(c, "Version/"), ab = u.operamini, na = !ab && u.opera, Da = na && ("function" === typeof na.version ? na.version() : N(l(c, "Opera "), Na, Ma)), Db = u.opr, za = !na && (v.all || ia);
  ia = za && (ia ? ia : u.XMLHttpRequest ? v.getElementsByTagName ? 7 : 4 : v.compatMode ? 6 : (0).toFixed ? 5.5 : u.attachEvent ? 5 : 4);
  Ea = !za && Ea.msContentZoomFactor;
  var vb = !Ea && (u.chrome || u.chromium), Oa = !za && function() {
    for (var z in ub) {
      if (0 === z.indexOf("Moz")) {
        return !0;
      }
    }
  }(), wb = h(c, "UCWEB"), Sb = wb && l(c, " U2/"), Jb = wb && l(c, "; wds "), Eb = l(c.split("_").join("."), "; iPh OS "), ja = l(c, "; Adr "), mb = h(ha, "YJApp-ANDROID"), Fa = h(K, "Android") || Oa && h(ha, "Android") || mb;
  ja = l(K, "Android ") || l(ha, "Android ") || l(c, "Android ") || ja;
  var xb = h(K, "Linux"), yb = "MacIntel" === K && la.standalone !== Ka, hb = Oa && l(c, "Goanna/"), Ga = !hb && Oa && (l(c, "rv:") || l(c.substr(c.indexOf(") Gecko/") - 11), "; ")), bb = l(c, "Firefox/");
  l(c, "Opera/");
  var Tb = u.FNRBrowser, Pa = ya(c, "AppleWebKit/"), ib = l(c, "Chrome/"), Xa = l(ha, "Iron/"), zb = l(c, "OPR/"), Kb = l(ha, "KHTML/"), Fb = l(c.toLowerCase(), "iris");
  l(c, "FxiOS/");
  l(c, "CriOS/");
  l(c, "EdgiOS/");
  var Lb = l(c, "Silk/"), nb = ya(c, "SamsungBrowser/"), Y = !nb && function() {
    for (var z = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    sa, V = z.length; sa = z[--V];) {
      if (h(c, sa)) {
        return 2 > Qa(Na) ? Na : 0.9;
      }
    }
    z = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (V = z.length; sa = z[--V];) {
      if (h(c, sa)) {
        return Na;
      }
    }
  }(), Ab = vb && 534.3 >= Pa, jb = Ib(K), Ya = jb && !h(c, K) && Ib(c);
  Q = Q && (Pa || Oa) && Ya || !ja && mb;
  mb = !!u.ReactNativeWebView;
  jb = jb && function() {
    for (var z in u) {
      if (0 === z.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Za = (Ya = u.puffinDevice) && Ya.clientInfo, ob = (Ya = Za && "iOS" === Za.os && Za.osVersion) && Za.model;
  Za = !ia && v.registerElement;
  var Mb = !ia && v.execCommand, cb = u.webkitCancelAnimationFrame, Nb = xb && Za && "11.0.696.34" === ib, pb = u._firefoxTV_playbackStateObserverJava, Ob = ya(c, "diordnA ");
  if ("Nitro" === K) {
    var p = 1, m = 8.5, R = 9, F = m;
  } else if ("Nintendo DSi" === K) {
    p = 2, m = Da, R = 9, F = m;
  } else if ("New Nintendo 3DS" === K || h(c, "iPhone OS 6_0") && 320 === n && 240 === Sa) {
    p = 4, m = l(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === K) {
    p = 3, m = Na, Pa = 535;
  } else if (!K && h(ha, "Nintendo Switch;")) {
    p = 7, m = l(ha, "NintendoBrowser/");
  } else if (u.wiiu) {
    p = 6, m = l(ha, "NintendoBrowser/"), R = 16, F = l(ha, "AppleWebKit/") || (cb ? 536 : 534), m || (m = cb ? 4 : 2, h(ha, "Macintosh;") || h(ha, "Windows NT") && h(ha, "Touch"));
  } else if (na && na.wiiremote) {
    p = 5, m = l(c, "Wii; U; ; ");
  } else if ("PlayStation Vita" === K) {
    p = 9, m = l(ha, K + " ");
  } else if ("PSP" === K) {
    p = 8;
    m = l(c, "(PlayStation Portable); ");
    var qb = 3.2;
  } else if ("PlayStation 5" === K) {
    p = 12, m = l(ha, K + "/");
  } else if ("PlayStation 4" === K) {
    p = 11, m = l(ha, K + "/");
  } else if ("PlayStation 3" === K) {
    p = 10, m = l(c, "PLAYSTATION 3; ") || l(c, "PLAYSTATION 3 "), 0 > ta(m, "4.10") && (R = 27, F = m);
  } else if (h(c, "Xbox One")) {
    p = 14, m = 1;
  } else if (h(c, "Xbox")) {
    p = 13, m = 1;
  } else if (2 === Ma && h(c, "Sony/COM2/")) {
    p = 17;
    m = 2;
    qb = 3.4;
    var rb = !0;
  } else if (0 === K.indexOf("iP") || Eb || Ya || yb) {
    if (Ya) {
      switch(m = Ya, ob.substr(0, 4)) {
        case "iPho":
          var Ha = 0;
          l(ob, Ha);
          var ka = !0;
          break;
        case "iPad":
          Ha = 1;
          l(ob, Ha);
          var Aa = !0;
          break;
        case "iPod":
          Ha = 2;
          l(ob, Ha);
          var sb = !0;
      }
    } else {
      Eb ? m = Eb : (m = l(ha.split("_").join("."), "OS "), fb("isSecureContext", u), fb("enableWebGL", u), fb("sameOrigin", u));
      if (!m || Tb) {
        m = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : la.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : eb.isNaN ? 9.2 : u.SharedWorker ? gb && gb.now ? 8 : 8.4 : Mb ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : x ? 4.3 : J ? 4.1 : 3.2;
      }
      var va = n === 1.5 * Sa || 1.5 * n === Sa;
      0 === K.indexOf("iPhone") ? (Ha = 0, ka = !0) : 0 === K.indexOf("iPad") || yb ? (Ha = 1, Aa = !0) : 0 === K.indexOf("iPod") && (Ha = 2, sb = !0);
    }
    R = !Ya && (la.standalone || (Aa || 12 > m) && fb("webkitFullscreenEnabled", v) || 11 <= m && 13 > m && la.mediaDevices) ? 17 : 18;
    p = 24;
    F = m;
  } else if (h(c, "Kobo")) {
    p = 18, R = 22, F = 2.2, Fa = !0;
  } else if (h(c, "EBRD")) {
    p = 19, R = 22, F = 2.2;
  } else if (v = l(c, "CrOS x86_64 ") || l(c, "CrOS aarch64 ") || l(c, "CrOS i686 ") || l(c, "CrOS armv7l ")) {
    p = 29, m = v;
  } else if (u.onmoztimechange !== Ka) {
    p = 30, m = 18.1 > Ga ? "1.0.1" : 19 > Ga ? 1.1 : 27 > Ga ? 1.2 : 29 > Ga ? 1.3 : 31 > Ga ? 1.4 : 33 > Ga ? 2 : 35 > Ga ? 2.1 : 38 > Ga ? 2.2 : 45 > Ga ? 2.5 : 2.6, h(c, "Mobile") ? ka = !0 : h(c, "Tablet") ? Aa = !0 : h(c, "TV");
  } else if (u.palmGetResource) {
    p = 32, m = l(c, "webOS/") || l(c, "WEBOS") || l(c, "hpwOS/"), h(c, "webOS.TV") || h(c, "/SmartTV") || (ka = !0);
  } else if (v = l(c, "Tizen ")) {
    p = 33, m = v, R = 25, F = nb, ka = !0;
  } else if (v = l(c, "Windows Phone ") || l(ha, "Windows Phone OS ") || Jb) {
    p = 23, m = v, ka = !0;
  } else if (Ea && "ARM" === K) {
    p = 23, m = 10, ka = !0;
  } else if (za && h(ha, "ZuneWP")) {
    p = 23, m = 11 === ia ? 8.1 : 10 === ia ? 8 : 9 === ia ? 7.5 : 7 === ia ? 7 : "?", ka = !0;
  } else if (h(c, "FOMA;")) {
    p = 16, ka = !0;
  } else if (h(c, "SoftBank;")) {
    p = 16, ka = !0;
  } else if (h(c, "KFMUWI")) {
    var Ca = !0;
    m = 6.3;
    var Ba = Aa = !0;
  } else if (h(c, "KFKAWI")) {
    Ca = !0, m = 6, Ba = Aa = !0;
  } else if (h(c, "KFSUWI") || h(c, "KFAUWI") || h(c, "KFDOWI")) {
    Ca = !0, m = 5, Ba = Aa = !0;
  } else if (h(c, "KFGIWI")) {
    Ca = !0, m = 5, Ba = Aa = !0;
  } else if (h(c, "KFARWI") || h(c, "KFSAWA") || h(c, "KFSAWI")) {
    Ca = !0, m = 5 <= Qa(ja) ? 5 : 4, Ba = Aa = !0;
  } else if (h(c, "KFSOWI") || h(c, "KFTHWA") || h(c, "KFTHWI") || h(c, "KFAPWA") || h(c, "KFAPWI")) {
    Ca = !0, m = 3, Ba = Aa = !0;
  } else if (h(c, "KFOT") || h(c, "KFTT") || h(c, "KFJWA") || h(c, "KFJWI")) {
    Ca = !0, m = 2, Ba = Aa = !0;
  } else if (h(c, "Kindle Fire")) {
    Ca = !0, m = 1, Ba = Aa = !0;
  } else if (v = l(c, "Kindle/")) {
    p = 20, m = v, R = 22, F = 2.2;
  } else if (pb) {
    Ca = !0, m = ja || Ob, Ba = !0;
  } else if (h(c, "AmazonWebAppPlatform") || h(c, "; AFT")) {
    Ca = !0, m = ja, Ba = !0;
  } else if (h(c, "MeeGo")) {
    p = 34;
  } else if (h(c, "Maemo")) {
    p = 35;
  } else if (0 === c.indexOf("Windows Mobile;") || Fb) {
    p = 22, rb = !0;
  } else if ("WinCE" === K) {
    p = 21, rb = !0;
  } else if (0 === K.indexOf("Win")) {
    p = "Win16" === K ? 37 : "Win32" === K ? 38 : "Win64" === K ? 39 : 0, m = l(c, "Windows NT ") || l(c, "Windows ");
  } else if (0 === K.indexOf("Mac")) {
    p = "Mac68K" === K ? 41 : "MacPowerPC" === K || "MacPPC" === K ? 40 : "MacIntel" === K ? 42 : 0;
    if (v = l(c.split("_").join("."), "Mac OS X ")) {
      m = v;
    }
    var Pb = !0;
  } else if (h(c, "BlackBerry") || h(c, "BB10")) {
    p = 36, m = Na, ka = !0;
  } else if (h(c, "SunOS") || h(c, "Sun Solaris")) {
    p = 44;
  } else if (h(c, "FreeBSD")) {
    p = 45;
  } else if (h(c, "OpenBSD")) {
    p = 46;
  } else if (h(c, "NetBSD")) {
    p = 47;
  } else if (Fa && Oa) {
    h(c, "Android 4.4;") ? va = {min:2.3} : 4 <= Qa(ja) ? va = ja : va = {min:2.2}, m = va;
  } else if (Fa && na) {
    ja ? va = ja : va = {min:1.6}, m = va, h(c, "Tablet") ? Aa = !0 : ka = !0;
  } else if (ja) {
    m = ja, Fa = !0;
  } else if (xb && Q || mb || jb) {
    var $a = !0;
    nb ? va = {min:4.4} : vb && !Ab || Db || zb ? va = {min:4} : (va = ja = ub.touchAction !== Ka ? {min:5} : Za ? 4.4 : x ? la.connection ? u.searchBoxJavaBridge_ || vb ? eb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= Pa ? 3 : 533 <= Pa ? J ? 2.3 : 2.2 : 530 <= Pa ? 2 : 1.5, Y && (R = 25, F = Y));
    m = va;
    Fa = !0;
  } else {
    Nb ? (m = {min:5}, $a = Fa = !0) : xb && (h(c, "Ubuntu") ? p = 48 : (v = l(c, "Mint/")) ? (p = 49, m = v) : (v = l(c, "Fedora/")) ? (p = 50, m = v) : p = h(c, "Gentoo") ? 51 : 52);
  }
  Ca || Fa && $a && Lb ? p = 28 : Fa && (p = p || 27);
  R || (Ba = Ba || Fa, na ? (R = Ba || rb || ka || Aa ? 9 : 8, F = Da) : za ? (va = ya(ha, "Trident/") + 4, R = rb || ka || Aa || sb ? 3 : Pb && 5 <= ia ? 7 : 2, F = ia) : Ea ? (R = 23 === p ? 6 : 5, F = l(ha, "Edge/")) : hb ? (R = 13, F = hb) : Oa ? (R = Ba ? 12 : 11, F = Ga || bb) : nb ? (R = 25, F = nb) : (v = qb || l(c, "NetFront/")) ? (R = 19, F = v) : (v = l(c, "iCab")) ? (R = 20, F = v) : (v = N(l(c, "Opera Mini/"), l(c, "Opera Mobi/")) || ab && Na) ? (R = 10, F = v, p || (h(c, "iPhone") ? 
  Ha = 0 : h(c, "iPad") ? Ha = 1 : h(c, "iPod") && (Ha = 2), Ha && (p = 24))) : wb ? (R = 26, F = Sb) : Kb ? (R = 15, F = Ma) : Fa && Ab ? (R = 22, F = ja) : vb || Db || zb ? (R = Ba ? 23 : 21, F = ib || Xa) : Fa && Za ? (R = 24, F = 5 > Qa(ja) ? ja : ib) : Fa && (Na || $a) ? (R = 22, F = ja) : ib ? (R = Ba ? 23 : 21, F = ib) : Pa && (R = 16, F = Pa));
  p && (Wa[2] = p, m && (Wa[3] = U(m)));
  R && (Wa[0] = R, F && (Wa[1] = U(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(Wa, u, v, la, J, Qa, eb, Ka, ya, h, Ib, fb, l, N) {
  function U(k) {
    if (u[0] === k) {
      return ia === ia + "" ? ya(ia) : ia;
    }
  }
  function ta(k) {
    var w = u[3];
    if (u[2] === k) {
      return w === w + "" ? ya(w) : w;
    }
  }
  function c(k) {
    var w = k.split("-"), aa = w.length;
    if (2 > aa) {
      return k;
    }
    for (; 1 < aa;) {
      k = w[--aa], w[aa] = k.charAt(0).toUpperCase() + k.substr(1);
    }
    return w.join("");
  }
  function ha(k, w, aa) {
    k + "" === k && ("a" === k.charAt(2) && (aa = !0, k = k.substr(0, 2)), k = "CS" === k ? 7.2 > x ? 117 : .9 > Q || 9 > n || 9 > x || Sa ? 1 : 132 : parseInt(k, 16));
    aa && (50 === k && (k = 128), 102 < k && 108 > k && (k += 24));
    return (k - 1) * -(6 * (w || 2));
  }
  var Ma = J.body, K = Ma.style, Ea, ub, ia = u[1], n = U(2) || U(3), Sa = U(7), gb = U(5) || U(6), x = U(8) || U(9), Q = U(11) || U(12), Na = Q && 0 <= u.conpare(ia, "1.9.1"), ab = U(13), na = U(16), Da = U(17) || U(18), Db = U(10) || U(26), za = U(21) || U(23), vb = U(24), Oa = U(22), wb = U(25), Sb = za || vb || Oa || wb, Jb = za && ya(Qa.userAgent.split("Edg/")[1]), Eb = ya(Qa.appVersion.split("Trident/")[1]) + 4, ja = ta(37) || ta(38) || ta(39), mb = ta(40) || ta(41) || ta(42) || ta(43), Fa = 
  .9 > Q, xb = (Sa ? "ie5mac" : 5.5 > n ? "ie5win" : 6 > n ? "ie55" : 10 > n ? "ie" + (n | 0) : 7.2 > x ? "opr70" : 8 > x ? "opr72" : 9.5 > x ? "opr" + (x | 0) : Q && !Na ? 1.4 <= Q ? "gck19" : 1.3 <= Q ? "gck13" : 1 <= Q ? "gck12" : Fa ? .8 <= Q ? "gck08" : "gck07" : "gck09" : "modern") + ".css";
  ta(1) || ta(2) || ta(3) || ta(4) || ta(8) || ta(9);
  var yb, hb, Ga, bb = 8 > n || 7.2 > x ? !1 : N, Tb = K.transform !== N ? "transform" : K["-o-transform"] !== N ? "-o-transform" : K["-ms-transform"] !== N ? "-ms-transform" : K.MozTransform !== N ? "-moz-transform" : K["-webkit-transform"] !== N ? "-webkit-transform" : "", Pa = [], ib = [], Xa = [], zb, Kb, Fb, Lb, nb = 525 > na || 3.1 > Da || 2.2 > Oa || 10 > x || Q && !Na || U(26) || 10 > U(3) || ta(34) || ta(32) || ta(3), Y, Ab, jb, Ya, Za, ob, Mb, cb = Ka.now || function() {
    return +new Ka();
  };
  (function() {
    function k() {
      for (var a, b = 0, d = cb(); b < y.length;) {
        d < y[0].t ? ++b : (a = y.splice(b, 1)[0], a.f(a.p));
      }
      P = y.length ? h(k, G) : 0;
    }
    function w() {
      for (var a, b = 0; b < ba.length; ++b) {
        a = ba[b], a.f();
      }
    }
    function aa() {
      ea && (ea = l(ea));
    }
    function oa() {
      P && (P = Ib(P));
    }
    jb = function(a) {
      ba.length || (ea = fb(w, pa));
      ba.push({f:a, l:++wa});
      return wa;
    };
    Ya = function() {
      ea && (aa(), ea = fb(w, pa));
    };
    Za = aa;
    var ba = [], pa = 500, wa = 0, ea;
    if (5 > n || Sa) {
      v._wdb_onlooptimer = w, w = "_wdb_onlooptimer()";
    }
    Y = function(a, b, d) {
      y.length || (P = h(k, G));
      y.push({f:a, p:b, l:++W, t:cb() + (G < d ? d : G)});
      return W;
    };
    Ab = function(a) {
      for (var b = y.length, d; d = y[--b];) {
        if (d.l === a) {
          y.splice(b, 1);
          break;
        }
      }
      return 0;
    };
    ob = function() {
      P && (oa(), P = h(k, G));
    };
    Mb = oa;
    var y = [], G = Da | 0 ? 64 : 16, W = 0, P;
    if (5 > n || Sa) {
      v._wdb_ontimer = k, k = "_wdb_ontimer()";
    }
  })();
  var Nb, pb, Ob, p, m, R, F, qb, rb, Ha, ka, Aa, sb, va, Ca, Ba, Pb, $a, z, sa, V, Ra;
  (function() {
    function k(a, b, d) {
      var r = ["<", a], E = 1, L, ma;
      if (b) {
        for (L in b) {
          var ca = b[L];
          if (null != ca && "" !== ca) {
            if ("style" === L) {
              r[++E] = ' style="';
              for (ma in ca) {
                for (var q = ++E, A, X = [], Z = ma.split(""), e = Z.length; e;) {
                  A = Z[--e], "A" <= A && "Z" >= A && (A = "-" + A.toLowerCase()), X[e] = A;
                }
                r[q] = X.join("") + ":" + ca[ma] + ";";
              }
              r[++E] = '"';
            } else {
              "className" === L && (L = "class"), r[++E] = " " + L + '="' + ca + '"';
            }
          }
        }
      }
      r[++E] = ">";
      null != d && (G && "font" !== a ? r[++E] = "<font>" + w(d) + "</font>" : r[++E] = w(d));
      r[++E] = "</" + a + ">";
      return r.join("");
    }
    function w(a) {
      return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    }
    function aa(a) {
      var b = "*" === a;
      a = G ? b ? J.all : J.all.tags(a.toUpperCase()) : 6 > n && b ? J.all : J.getElementsByTagName(a);
      b = [];
      for (var d = 0, r = a.length; d < r; ++d) {
        b[d] = a[d];
      }
      return b;
    }
    function oa(a) {
      return G ? a.parentElement : a.parentNode;
    }
    function ba(a, b, d, r, E, L) {
      if (G) {
        var ma = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var ca = m(2 > a ? p(b) : b);
        ca = 2 > a ? ca.indexOf(b) + a : ca.length;
        b.insertAdjacentHTML(ma, k(d, r, E));
        b = m(b)[ca];
        null != E && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (W) {
        b = J.createElement(k(d, r));
      } else {
        b = L ? J.createElementNS("http://www.w3.org/2000/svg", d) : J.createElement(d);
        if (r) {
          for (ma in r) {
            if ((a = r[ma]) || 0 === a) {
              switch(ma) {
                case "class":
                case "className":
                  Pb(b, a);
                  break;
                case "style":
                  L = b.style;
                  for (ca in a) {
                    L[ca] = a[ca];
                  }
                  break;
                default:
                  va(b, ma, a);
              }
            }
          }
          !x || "a" !== d && "A" !== d || !r.href || r["tag-index"] || r.tagIndex || va(b, "tagIndex", "-0");
        }
        P || null != E && pa(b, E);
      }
      return b;
    }
    function pa(a, b) {
      if (G) {
        return ba(2, a, "font", N, b);
      }
      var d = J.createTextNode("" + b);
      a.appendChild(d);
      return d;
    }
    function wa(a, b) {
      9 > n ? a.className = b : a.setAttribute("class", b);
    }
    function ea(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    function y(a, b, d) {
      if (8 > x || 5.5 > n) {
        b = c(b);
      }
      a.style[b] = d;
    }
    var G = 5 > n;
    Ea = aa("html")[0];
    ub = aa("head")[0];
    Nb = function(a) {
      return v[a] || J[a] || J.getElementById(a);
    };
    pb = aa;
    Ob = function(a) {
      var b = [], d = 0, r, E = -1;
      if (9 > n || !J.getElementsByClassName) {
        var L = 6 > n ? J.all : J.getElementsByTagName("*");
      } else {
        var ma = !0;
        L = J.getElementsByClassName(a);
      }
      for (r = L.length; d < r; ++d) {
        var ca = L[d];
        if (ma || (G || 1 === ca.nodeType) && ea(ca, a)) {
          b[++E] = ca;
        }
      }
      return b;
    };
    p = oa;
    m = function(a) {
      a = G ? a.children : a.childNodes;
      for (var b = [], d = a.length; d;) {
        b[--d] = a[d];
      }
      return b;
    };
    R = function(a) {
      var b = !(7.03 < x && 7.2 > x) && a.children;
      a = b ? b : a.childNodes;
      for (var d = [], r = a.length, E = -1, L; r;) {
        if (L = a[--r], b || 1 === L.nodeType) {
          G && "FONT" === L.tagName || (d[++E] = L);
        }
      }
      return d;
    };
    F = function(a, b, d, r, E) {
      b = ba(2, a, b, d, r, E);
      G || (a.appendChild(b), P && null != r && pa(b, r));
      return b;
    };
    qb = function(a, b, d, r, E) {
      b = ba(0, a, b, d, r, E);
      G || (oa(a).insertBefore(b, a), P && null != r && pa(b, r));
      return b;
    };
    rb = pa;
    Ha = function(a, b) {
      if (G) {
        return ba(0, a, "font", N, b);
      }
      var d = J.createTextNode("" + b);
      p(a).insertBefore(d, a);
      return d;
    };
    ka = function(a) {
      if (G) {
        a.outerHTML = "";
      } else {
        return 5.5 > n && (a.style.filter = ""), p(a).removeChild(a), a;
      }
    };
    var W = 9 > n, P = W;
    Aa = function(a) {
      return a.tagName.toUpperCase();
    };
    sb = function(a, b) {
      if (8 > x || 5.5 > n) {
        b = c(b);
      }
      var d = a.getAttribute(b);
      return x && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
    };
    va = function(a, b, d) {
      if (x && "tab-index" === b) {
        "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
      } else {
        if (8 > x || 5.5 > n) {
          b = c(b);
        }
        a.setAttribute(b, d);
      }
    };
    Ca = function(a, b) {
      if (x && "tab-index" === b) {
        "-0" !== a.getAttribute("tabIndex") && a.setAttribute("tabIndex", "-0");
      } else {
        if (8 > x || 5.5 > n) {
          b = c(b);
        }
        a.removeAttribute(b);
      }
    };
    Ba = function(a, b) {
      if (x && "tab-index" === b) {
        return "-0" !== a.getAttribute("tabIndex");
      }
      if (8 > x || 5.5 > n) {
        b = c(b);
      }
      return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
    };
    Pb = wa;
    $a = ea;
    z = function(a, b) {
      var d;
      if (!ea(a, b)) {
        if (d = a.className) {
          d += " ";
        }
        wa(a, d + b);
      }
    };
    sa = function(a, b) {
      if (ea(a, b)) {
        var d = a.className.split(" ");
        d.splice(d.indexOf(b), 1);
        wa(a, d.join(" "));
      }
    };
    V = y;
    Ra = function(a, b) {
      var d, r = -1, E;
      if (5.5 > n) {
        if (d = 5.5 > n ? a.style.cssText.toLowerCase() : a.style.cssText) {
          for (d = d.split(";"); E = d[++r];) {
            y(a, E.split(":")[0], "");
          }
        }
        if (b) {
          for (r = -1, d = b.split(";"); E = d[++r];) {
            var L = E.split(":")[0];
            y(a, L, E.substr(L.length + 1));
          }
        }
      } else if (7.1 > x) {
        if (a.setAttribute("style", ""), b) {
          for (d = b.split(";"); E = d[++r];) {
            E = E.split(":"), y(a, E[0], E[1]);
          }
        }
      } else {
        9 > x || 1 > Q ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var La, Ub, Bb, Gb, tb, Vb, Wb, Ia, Qb;
  (function() {
    function k() {
      return q ? X ? 2 : A ? 3 : 1 : 0;
    }
    function w(e) {
      Ub(v, "load", w);
      w = N;
      oa(Pa, e, !0);
      Bb = Pa = N;
    }
    function aa(e, g) {
      tb(function() {
        var H = y(e);
        g(H);
        H.addListener(g);
        return !0;
      });
    }
    function oa(e, g, H) {
      for (var f = 0; f < e.length; ++f) {
        !0 === e[f](g) && (e.splice(f, 1), --f);
      }
      H && (e.length = 0);
    }
    function ba(e, g, H) {
      Pa || W.length || Y(pa);
      W.push(e, g, H);
    }
    function pa() {
      var e = W, g;
      for (W = []; g = e.shift();) {
        oa(g, e.shift(), e.shift());
      }
    }
    function wa(e) {
      var g = e || event;
      e = a[g.type];
      var H = -1, f, I;
      5 > n ? g = {type:event.type, target:event.srcElement, preventDefault:o, stopPropagation:function() {
        event.cancelBubble = !0;
      }} : n ? (g.target = g.srcElement, g.preventDefault = function() {
        g.returnValue = !1;
      }, g.stopPropagation = function() {
        g.cancelBubble = !0;
      }) : d && (g.j = g.stopPropagation, g.stopPropagation = function() {
        I = !0;
      });
      for (; f = e[++H];) {
        f.i === this ? (this.g = f.h, n && (g.currentTarget = this), this.g(g), n ? (this.g = la, this.g = N) : delete this.g) : 7.2 > x && this === J && f.i === v && (v.g = f.h, v.g(g), delete v.g);
      }
      if (n) {
        return g.preventDefault = g.stopPropagation = la, g.preventDefault = g.stopPropagation = N, g.returnValue;
      }
      d && (g.defaultPrevented && "click" === g.type && "A" === g.target.tagName && (E = !0), I && !E && g.j(), g.j = g.stopPropagation = N);
      function o() {
        event.returnValue = !1;
      }
      o = !1;
    }
    function ea() {
      var e = 9 === G.offsetWidth;
      Wb !== e && ba(ib, Wb = e);
    }
    var y = v.matchMedia, G, W = [];
    Pa.push(function() {
      aa = N;
      G = F(Ma, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      Bb(function() {
        W.length && Y(pa);
      });
    });
    La = function(e, g, H, f) {
      if (r) {
        e.addEventListener(g, H, f ? P ? f : f.capture || !0 === f : !1);
      } else {
        var I = {i:e, h:H};
        f = a[g];
        var t = "on" + g, O, S;
        if (f) {
          for (O = f.length; S = f[--O];) {
            if (S.i === e && S.h === H) {
              return;
            }
          }
          a[g].push(I);
        } else {
          a[g] = f = [I], b || (g = e[t], "function" === typeof g && g !== wa && f.unshift({i:e, h:g}));
        }
        b ? e.attachEvent(t, wa) : e[t] = wa;
      }
    };
    Ub = function(e, g, H, f) {
      if (r) {
        e.removeEventListener(g, H, f ? P ? f : f.capture || !0 === f : !1);
      } else {
        f = a[g];
        g = "on" + g;
        var I, t, O;
        if (f) {
          for (I = f.length; t = f[--I];) {
            t.i === e && (t.h === H ? f.splice(I, 1) : O = !0);
          }
          O || (b ? e.detachEvent(g, wa) : n ? (e[g] = la, e[g] = null) : delete e[g]);
        }
      }
    };
    var P = !n && !Sa && (new eb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), a = {}, b = !1, d = 525.13 > na, r = !d && !Sa && v.addEventListener, E;
    d && Ea.addEventListener("click", function(e) {
      if (E) {
        return E = !1, e.preventDefault(), !1;
      }
    });
    Bb = function(e) {
      Pa.push(e);
    };
    Gb = function(e) {
      L && L.push(e);
    };
    var L = [];
    if (419.3 >= na) {
      var ma = function() {
        if (ma) {
          var e = J.readyState;
          "loaded" === e || "complete" === e ? (ma = N, w()) : Y(ma);
        }
      };
      Y(ma);
    } else {
      La(v, "load", w);
    }
    n || !Fa && 1.8 > Q ? La(v, "unload", function(e) {
      oa(L, e, !0);
    }) : L = N;
    tb = function(e) {
      ib.push(e);
    };
    Bb(function() {
      ea();
      jb(ea);
    });
    Vb = function(e) {
      Xa && Xa.push(e);
    };
    var ca = 60 > Q || ab, q, A, X;
    if (89 <= Q || 89 <= za || ja && 79 <= Jb || y && (y("(forced-colors:none)").matches || y("(forced-colors:active)").matches)) {
      Qb = !0, aa("(forced-colors:active)", function(e) {
        q = e.matches;
        Ia = k();
        ba(Xa, Ia);
      });
    } else if (10 <= n || gb || ja && Jb) {
      Qb = !0, aa("(-ms-high-contrast:black-on-white)", function(e) {
        q = A = e.matches;
        Ia !== k() && (Ia = k(), ba(Xa, Ia));
      }), aa("(-ms-high-contrast:white-on-black)", function(e) {
        q = X = e.matches;
        Ia !== k() && (Ia = k(), ba(Xa, Ia));
      }), aa("(-ms-high-contrast:active)", function(e) {
        q = e.matches;
        Ia !== k() && (Ia = k(), ba(Xa, Ia));
      });
    } else if (ja && (n || Q && 0 <= u.conpare(ia, "1.8.1") || ab)) {
      var Z = function() {
        function e(f, I) {
          if (I && "transparent" === f) {
            return 382.5;
          }
          if ("#" === f.charAt(0)) {
            return parseInt("0x" + f.substr(1, 2), 16) + parseInt("0x" + f.substr(3, 2), 16) + parseInt("0x" + f.substr(5, 2), 16);
          }
          var t = f.split("(")[1].split(",");
          return ya(t[0]) + ya(t[1]) + ya(t[2]);
        }
        var g = J.defaultView;
        var H = g ? g.getComputedStyle(G, null) : G.currentStyle;
        g = (H && H.color || "").split(" ").join("");
        H = (H && H.backgroundColor || "").split(" ").join("");
        g && (q = "#123456" !== g && "rgb(18,52,86)" !== g, A = e(g) < e(H, !0), X = e(g) > e(H, !0), Ia !== k() && (Ia = k(), ba(Xa, Ia, ca)));
      };
      tb(function(e) {
        if (e) {
          return V(G, "color", "#123456"), V(G, "backgroundColor", "#123456"), ca ? (Z(), Xa = N) : jb(Z), Z = N, !0;
        }
      });
    } else {
      Xa = k = N;
    }
  })();
  (function() {
    function k(B) {
      switch(B) {
        case 1:
          return E;
        case 2:
          return !!L;
        case 3:
          return !!ma;
        case 4:
          return !!ca;
        case 5:
          return A;
        case 6:
          return q && !W;
      }
      return !1;
    }
    function w(B) {
      X(B);
      Ta && !B && ka(Ta);
      X = Z = e = g = H = f = O = S = Ta = qa = N;
    }
    function aa(B) {
      J.fonts.load('1.6em "' + B + '"').then(function() {
        var fa;
        (fa = pa(Z)) ? Y(w, fa) : oa(!0);
      }, function() {
        bb !== N ? wa(bb) : zb(wa);
      });
    }
    function oa(B) {
      B && (t = cb());
      (B = pa(Z, I)) ? w(B) : (B = I, J.hidden || J.msHidden || J.mozHidden || J.webkitHidden ? (t = cb(), B = !1) : B = B < cb() - t, B ? O ? ea() : G ? w(0) : bb !== N ? wa(bb) : zb(wa) : Y(oa));
    }
    function ba() {
      return F(Ma, 5 > n ? "div" : "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px", "-webkit-font-feature-settings":'"liga"', "-moz-font-feature-settings":'"liga=1"', "-moz-font-feature-settings":'"liga"', "-ms-font-feature-settings":'"liga" 1', "-o-font-feature-settings":'"liga"', "font-feature-settings":'"liga"'}}, b);
    }
    function pa(B) {
      var fa = 0, C = -1, D = (d || !1) && [];
      if (!qa) {
        var M = -1;
        var ra;
        S = ba();
        for (qa = []; ra = r[++M];) {
          V(S, "fontFamily", ra), qa[M] = S.offsetWidth;
        }
      }
      for (5 > n ? S || (S = ba()) : p(S) || Ma.appendChild(S); M = r[++C];) {
        V(S, "fontFamily", '"' + B + '",' + M);
        var T = S.offsetWidth;
        if (d) {
          D[C] = T;
        } else {
          if (T !== qa[C]) {
            fa = 1;
            break;
          }
        }
      }
      if (d && T === D[0] && T === D[1]) {
        for (fa = 1, C = -1; 0 <= (T = qa[++C]);) {
          if (T === D[0] && T === D[1] && T === D[2]) {
            fa = 0;
            break;
          }
        }
      }
      !n && fa && H && (S.textContent = H, T = S.offsetWidth, S.textContent = f, fa = T === S.offsetWidth ? 2 : 1, S.textContent = b);
      S = ka(S);
      return fa;
    }
    function wa(B) {
      B ? (O = !0, I = a, ea()) : w(0);
    }
    function ea() {
      if (e) {
        for (; e.length;) {
          var B = e.shift(), fa = e.shift();
          if (k(B)) {
            Ta = Lb(fa, y, g, Ta);
            return;
          }
        }
      }
      w(0);
    }
    function y(B) {
      B ? oa(!0) : ea();
    }
    ib.splice(0, 0, function() {
      if (Wb) {
        Ga = 8 <= n || gb || 9.5 <= x || Na || ab || 522 <= na || 3 <= Da || Db || Sb ? 3 : 7.2 <= x ? 2 : 6 <= x || Q ? 1 : 0;
        if (!Ga && !n && !Sa) {
          var B = F(Ma, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          Ga = 6 <= B.offsetWidth ? 2 : 0;
          ka(B);
        }
        return !0;
      }
    });
    zb = !1 === bb ? function(B) {
      Y(B, !1);
    } : function(B) {
      function fa(M) {
        D && (D = Ab(D), bb = M, C.onload = C.onerror = la, Y(B, M));
      }
      if (bb !== N) {
        Y(B, bb);
      } else {
        var C = new Image(), D = Y(fa, !1, 999);
        C.onerror = function() {
          fa(!1);
        };
        C.onload = function() {
          fa(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    9 > n && Bb(function() {
      var B = F(Ma, "div");
      Ra(B, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      yb = 1 < B.offsetHeight;
      ka(B);
    });
    Kb = function(B, fa) {
      function C() {
        if (M || !ra || D.complete) {
          var T = !!D.width;
          hb = hb || T;
          Y(B, T);
          D.onerror = D.onload = la;
          D = B = N;
        } else {
          --ra, Y(C);
        }
      }
      var D = new Image(), M, ra = 99;
      D.onerror = function() {
        M = !0;
      };
      D.onload = function() {
        M = !0;
      };
      D.src = fa;
      Y(C);
    };
    Fb = function(B, fa, C, D, M, ra, T) {
      X = B;
      Z = fa;
      e = C;
      g = D;
      H = M;
      f = ra;
      I = T || P;
      U(10) ? Y(w, 1) : nb ? Y(w, 0) : !J.fonts || 603 > na || 11 > Da ? oa(!0) : aa(Z);
    };
    var G = 9 > n, W = 6 > za || x || 530 > na || 5 > Da || ta(10), P = 5E3, a = 500, b = "mmmmmmmmmmlliiiiiiiii", d = 9 <= za && 18 > za || 3 > Oa || 7 > Da || na && 0 >= u.conpare(ia, "536.11"), r = ["monospace", "sans-serif", "serif"], E = 14 <= gb || 36 <= za || 39 <= Q || 3 <= ab || 602 <= na && mb && 0 <= u.conpare("10.12", mb) || 10 <= Da, L = 6 <= za || Q && 0 <= u.conpare(ia, "1.9.2") || ab || 533 <= na || 5 <= Da || 4.4 <= Oa || 11.5 <= x || gb || 9 <= U(2) || 10 <= U(3), ma = 2 <= za || 
    Na || ab || 525 <= na || 4 <= Da || 2.2 <= Oa || 10.1 <= x || gb || 9 <= U(2) || 10 <= U(3), ca = ma, q = 5.1 <= ja && 5.2 >= ja && 40 > za || 6 <= ja && 6.1 > ja && 51 > za || 37 > za || 525 <= na || 3.1 <= Da || 3 <= Oa || 11.5 <= x, A = 4 <= U(2) || 10 <= U(3), X, Z, e, g, H, f, I, t, O, S, Ta, qa;
  })();
  (function() {
    Lb = function(y, G, W, P) {
      P = P || F(ub, "link", {type:"text/css", rel:"stylesheet"});
      var a;
      if (ea) {
        (a = Nb(W)) ? Ca(a, "id") : a = F(Ma, "div", {"aria-hidden":"true", className:W});
        var b = a.offsetWidth;
        va(a, "id", W);
      }
      wa(P, y, G, a, b);
      return P;
    };
    var k = Q && 0 > u.conpare(ia, "0.9.1"), w = 11 <= n || gb || 9 <= x && 9.5 > x, aa = 11 > n, oa = 7.2 <= x && 7.5 > x, ba = 9 > Q && !k || 19 > za || 4.3 > Oa || 2 > wb || 536 > na || 6 > Da || 7 <= x && 9 > x && !oa, pa = !k && !w && !aa && !oa && !ba, wa = pa ? function(y, G, W) {
      y.onload = o;
      y.onerror = function() {
        y.onload = y.onerror = null;
        Y(W, !1);
      };
      y.href = G;
      function o() {
        y.onload = y.onerror = null;
        Y(W, !0);
      }
      o = !1;
    } : w ? function(y, G, W, P, a) {
      y.onload = function() {
        Y(W, ea(P, a));
        ka(P);
        y.onload = null;
        P = N;
      };
      y.href = G;
    } : aa ? function(y, G, W, P, a) {
      y.onreadystatechange = function() {
        "complete" === y.readyState && (Y(W, ea(P, a)), ka(P), P = N, y.m = la);
      };
      y.href = G;
    } : ba || oa ? function(y, G, W, P, a) {
      function b() {
        r && (E = Ab(E), L = cb() + 999, Y(d, 0, 99), ba ? r.onerror = null : r.removeEventListener("load", b, !1), r = N);
      }
      function d() {
        ea(P, a) ? (ka(P), P = N, Y(W, !0)) : cb() < L ? Y(d, 0, 99) : (ka(P), P = N, Y(W, !1));
      }
      var r = new Image(), E = Y(b, 0, 5E3), L;
      ba ? r.onerror = b : r.addEventListener("load", b, !1);
      r.src = y.href = G;
    } : function(y, G, W) {
      Y(W, !1);
    }, ea = !pa && !k && function(y, G) {
      return y.offsetWidth !== G;
    };
  })();
  var Rb = String.fromCharCode, db = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "\u03c0", ")", "(", "\u0112", "\u1d07", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "\u1d05", "\u029f", "\u03b3", "\u21d4", "\u03c3", "\u2528", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\u201c", "\u201d", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", "\u2660", "\u2190", "\u2665", "\u2666", "\u2663", "\u03bc", "\u03a9", "\u2193", "\u2192", "%", Rb(165), "\u25a1", "[", "&", "_", "'", "\u30fb", "]", "\u25a0", "\\", "\u2593", "\u2571", "\u044b", "\u0107"], Xb = db[7], gc = db[113], bc = Rb(160);
  Rb(8194);
  var cc = db[31], Yb = db[30], dc = db[63], hc = db[125], ic = db[126], jc = Rb(59648), ec = (9 === n || Q && 0 <= u.conpare(ia, "1.8.1") || ab) && !Qb, kb = [], lb, Ua, Hb = 7.2 > x ? function() {
    lb = !lb;
    for (var k = -1, w; w = kb[++k];) {
      -1 !== w.className.indexOf("pbAlp") ? V(w, "display", lb ? "" : "none") : (z(w, lb ? "pbChrCS" : "pbChr00"), sa(w, lb ? "pbChr00" : "pbChrCS"));
    }
  } : ec ? function() {
    lb = !lb;
    for (var k = -1, w; w = kb[++k];) {
      V(w, "opacity", lb ? 1 : 0);
    }
  } : N;
  var Zb = Wa.startBlinkingIfCursor = function(k) {
    Hb ? $a(k, "pbChrCS") && (Ua || !x && !Ia || (Ua = fb(Hb, 400)), -1 === kb.indexOf(k) && kb.push(k)) : kb = N;
  };
  Wa.stopBlinkingIfCursor = function(k) {
    Hb && (k = kb.indexOf(k), 0 <= k && (kb.splice(k, 1), !kb.length && Ua && (l(Ua), Ua = 0)));
  };
  ec && Vb(function(k) {
    k ? Ua || (Ua = fb(Hb, 400)) : Ua && (l(Ua), Ua = 0);
  });
  Hb && Gb(function() {
    Ua && l(Ua);
  });
  Qb || Vb(function(k) {
    k ? (va(Ea, "forced-colors", 2 === k ? "lod" : 3 === k ? "dol" : "active"), (Tb || 9 === n || 5.5 <= n && 9 > n && yb) && z(Ea, "jsCanRotate")) : (Ca(Ea, "forced-colors"), sa(Ea, "jsCanRotate"));
  });
  (function() {
    function k(q) {
      (b = q) ? ba() : hb ? oa(!0) : hb !== N ? ba() : Kb(oa, d);
    }
    function w() {
      w = N;
      Fb(k, "PB-100", [1, Va + "pbFont/woff2.css", 2, Va + "pbFont/woff.css", 3, Va + "pbFont/ttf.css", 5, Va + "pbFont/eot.css", 6, Va + "pbFont/svg.css"], "pbFont-testCssReady", "\u208b\u2081", dc);
    }
    function aa(q) {
      this.focus();
      q.preventDefault();
      q.stopPropagation();
    }
    function oa(q) {
      q && z(Ma, "pbList-noWebFont");
      ba();
    }
    function ba() {
      for (k = Fb = N; a.length;) {
        pa(a.shift(), a.shift());
      }
    }
    function pa(q, A) {
      function X(I) {
        I = m(I);
        for (var t = -1, O; O = I[++t];) {
          switch(O.nodeType) {
            case 1:
              X(O);
              break;
            case 3:
              O.data && e(O.data) && g.push(O);
          }
        }
      }
      function Z(I) {
        var t = I.children, O = 0, S = t.length;
        if (S) {
          for (; O < S; ++O) {
            Z(t[O]);
          }
        } else {
          (t = I.innerText) && e(t) && g.push(I);
        }
      }
      function e(I) {
        return I.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var g = [], H;
      if (k) {
        -1 === a.indexOf(q) && (a.push(q, A), r && w && w());
      } else {
        var f = a.indexOf(q);
        0 <= f && a.splice(f, 2);
        for (5 > n ? Z(q) : X(q); H = g.shift();) {
          f = 5 > n ? H.innerText : H.data, 2 !== b ? (0 <= f.indexOf("\u2091\u208b") && (f = f.split("\u2091\u208b").join(Yb)), 0 <= f.indexOf("\u1d07\u207b") && (f = f.split("\u1d07\u207b").join(Yb)), b && (0 <= f.indexOf("\u208b\u2081") && (f = f.split("\u208b\u2081").join(dc)), 0 <= f.indexOf("\u1d47/\u1d04") && (f = f.split("\u1d47/\u1d04").join(jc)), 0 <= f.indexOf("\u1d47/") && (f = f.split("\u1d47/").join(hc)), 0 <= f.indexOf("/\u1d04") && (f = f.split("/\u1d04").join(ic)))) : 0 <= f.indexOf("\u2091\u208b") && 
          (f = f.split("\u2091\u208b").join("\u1d07\u207b")), 0 <= f.indexOf("\u2091") && (f = f.split("\u2091").join(cc)), A ? 5 > n ? H.innerText = f : H.data = f : wa(f.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(gc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Xb).split("&amp;").join("&"), H);
        }
      }
    }
    function wa(q, A) {
      function X(xa, da) {
        for (var Ja = ""; da;) {
          da & 1 && (Ja += xa), da >>= 1, xa += xa;
        }
        return Ja;
      }
      function Z(xa, da, Ja) {
        for (var Cb, kc = -1, $b, ac; Cb = da[++kc];) {
          for (; 0 <= ($b = xa.indexOf(Cb));) {
            ac = Cb.length, xa = xa.substr(0, $b) + X(Ja, ac) + xa.substr($b + ac);
          }
        }
        return xa;
      }
      function e(xa) {
        var da = ya(xa), Ja = "" + da;
        return 0 < da && da === da | 0 && (da = xa.indexOf(Ja) + Ja.length, da <= xa.length) ? da : 0;
      }
      var g = " area line str cmd fnc syb".split(" "), H = 5 > n || 1 === A.nodeType, f = [], I = "", t, O = -1, S, Ta, qa;
      if (H) {
        if (ma) {
          var B = A.style.visibility;
          V(A, "visibility", "hidden");
        }
        A.innerHTML = "";
      }
      if (ca) {
        var fa = A;
        A = J.createDocumentFragment();
      }
      if (function(xa) {
        var da = xa.indexOf("P");
        if (-1 === da) {
          return !1;
        }
        da = ya(xa.charAt(da + 1));
        return 0 <= da && 9 >= da;
      }(q)) {
        I = X("+", q.length);
      } else {
        0 <= (t = e(q)) && (I = X("|", t), O = t, --O);
        for (; t = q.charAt(++O);) {
          t === Xb || S ? (I += "~", t === Xb && (S = !S)) : I += t;
        }
        I = Z(I, P, "^");
        I = Z(I, G, "{");
        I = Z(I, W, "}");
      }
      O = 0;
      for (S = q.length; O < S; ++O) {
        t = q.charAt(O);
        var C = t === bc;
        var D = " " === t;
        t = C ? " " : t;
        var M = I.charAt(O);
        var ra = (Ta = T) && C;
        var T = "|" === M;
        M = g["+|~{}^".indexOf(M) + 1];
        if ("\n" !== t) {
          if (b || !hb) {
            if (2 === b) {
              if ("\u1d47/\u1d04" === q.substr(O, 3)) {
                t = "\u1d47/\u1d04", O += 2;
              } else {
                switch(q.substr(O, 2)) {
                  case "\u1d07\u207b":
                  case "\u208b\u2081":
                  case "\u1d47/":
                  case "/\u1d04":
                    t = q.substr(O, 2), ++O;
                }
              }
            }
            M = D && "str" === M ? "pbList-strsp" : C ? "" : !D && M ? "pbList-" + M : "";
          } else {
            C = db.indexOf(t), C = -1 === C ? "" : db.indexOf(t).toString(16).toUpperCase(), C = (C = 1 === C.length ? "0" + C : C) ? "pbChr" + C : "", M = D && "str" === M ? "pbList-strsp" : D || !C ? "" : M ? (C ? C + " " : "") + "pbList-" + M : C;
          }
          C = N;
          ra ? (t = 6 <= n && 8 > n ? " " : bc, M = "") : T && (Q && !Na || 9.5 > x) ? (T && !Ta && (qa = 4 - (ya(q.substr(O)) + "").length), 7.5 > x ? C = L ? "position:relative;top:-4px;left:" + 12 * qa + "px" : {position:"relative", top:"-4px", left:12 * qa + "px"} : C = L ? "position:relative;left:" + 12 * qa + "px" : {position:"relative", left:12 * qa + "px"}) : D && 7.5 > x && (M = "pbList-strsp");
          L ? f.push("<font" + (M ? ' class="' + M + '"' : "") + (C ? ' style="' + C + '"' : "") + ">" + t + "</font>") : H || ca ? F(A, "font", {"class":M, style:C}, t) : qb(A, "font", {"class":M, style:C}, t);
        } else {
          Ta = T = !1, L ? f.push(t) : H || ca ? rb(A, t) : Ha(A, t);
        }
      }
      if (H) {
        L ? A.innerHTML = f.join("") : ca && fa.appendChild(A), ma && V(A, "visibility", B);
      } else {
        if (L) {
          g = J.createElement("font");
          for (g.innerHTML = f.join(""); f = g.firstChild;) {
            A.parentNode.insertBefore(f, A);
          }
          ka(A);
        } else {
          ca ? fa.parentNode.replaceChild(A, fa) : ka(A);
        }
      }
    }
    1.9 > Q && tb(function(q) {
      if (q) {
        q = pb("*");
        for (var A = 0, X = q.length, Z; A < X; ++A) {
          Z = q[A], "B" !== Aa(Z) && -1 !== (" " + Z.className).toLowerCase().indexOf(" pbchr") && (Ba(Z, "title") || va(Z, "title", Z.textContent), Z.textContent = " ");
        }
        return !0;
      }
    });
    tb(function(q) {
      if (q) {
        q = Ob("pbChrCS");
        for (var A = 0, X = q.length; A < X; ++A) {
          Zb(q[A]);
        }
        return !0;
      }
    });
    var ea = [], y = Q && 0 > u.conpare(ia, "0.9.9");
    tb(function(q) {
      function A(D) {
        var M = sb(D, "pbTip");
        if (M) {
          var ra = M.charAt(0);
          var T = "_" === ra;
          M = (T ? M.charAt(2) : ra).toUpperCase().charCodeAt(0) - 65;
          f ? F(D, "div", {style:{left:7 * M + 3 + "px"}}) : (ra = sb(D, "title"), Ca(D, "pbTip"), Ca(D, "title"), T = F(D, "div", {className:"pbTip" + (T ? "Btm" : ""), style:{width:ra.length + Z + "em", left:7 * M - (y ? 0 : 5) + "px"}}, ra), T = F(T, "div"), .9 <= Q && y && V(T, "left", "2px"));
        }
        H && 0 <= D.className.indexOf("pbColor") && F(D, "u");
      }
      function X(D, M) {
        var ra = sb(D, "pbGhst"), T = D.className, xa = T.split("pbCsr")[1] || "", da = T.split("pbAlp")[1] || "";
        if ("CS" === ra) {
          var Ja = "_";
        } else {
          Ja = ra, 3 === Ja.length && (Ja = Ja.substr(0, 2)), Ja = db[parseInt(Ja, 16)] || "~";
        }
        var Cb;
        xa = xa.split(" ")[0];
        if (da = ya(da.split(" ")[0])) {
          e && (T = T.split("pbChr")[1].split(" ")[0], V(D, "backgroundPosition", ha(T, 2, B) + "px " + -24 * (10 - da) + "px")), !M && g && qb(D, "a").appendChild(D);
        }
        ra && (da = 10 - da, e && (Cb = {backgroundPosition:ha(ra, 2, B) + "px " + -24 * (10 - da) + "px"}), Ca(D, "pbGhst"), O = qb(D, "b", {className:"pbChr" + ra + " pbCsr" + xa + " pbAlp" + da, style:Cb}, Ja), Zb(O));
        Zb(D);
      }
      if (q) {
        var Z = 6 > n ? 2 : 0, e = 7.2 > x || .9 > Q || Sa, g = 1.1 === Q, H = 1.4 > Q;
        q = pb("SAMP");
        var f = 8 === n, I = Ga, t, O, S, Ta, qa;
        yb && z(Ma, "pbLCD-AX");
        if (q.length) {
          for (S = -1; t = q[++S];) {
            if ($a(p(t), "pbLCD")) {
              var B = $a(t, "PB-120") || $a(t, "FX-795P");
              var fa = R(t);
              for (t = fa.length; qa = fa[--t];) {
                switch(Aa(qa)) {
                  case "A":
                    (2 > I || f) && A(qa);
                    if (2 > I) {
                      var C = R(qa);
                      for (Ta = C.length; Ta;) {
                        X(C[--Ta], !0);
                      }
                    }
                    Db ? va(qa, "href", "javascript:void(0)") : (La(qa, "click", aa), ea.push(qa));
                    break;
                  case "B":
                    2 > I && X(qa, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    Gb(function() {
      for (var q; q = ea.shift();) {
        Ub(q, "click", aa);
      }
    });
    6 === n && (new eb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(J);
    var G = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), W = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), P = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Yb + cc).split(""), a = [], b, d, r;
    if (.9 <= Q && 0 >= u.conpare(ia, "0.9.1")) {
      z(Ea, "pbLCD-gecko09To091");
      var E = !0;
    }
    tb(function(q) {
      if (q) {
        d = Va + "pbFont/x3mask" + (E ? ".gecko0.9.1.gif" : ".png");
        q = pb("*");
        for (var A = -1, X; X = q[++A];) {
          $a(X, "pbList") ? pa(X) : $a(X, "pbFont") && pa(X, !0);
        }
        a.length && w();
        return !0;
      }
    });
    var L = !1, ma = 8 > x, ca = !L && !ma && !(6 > n) && J.createDocumentFragment && !!Ma.replaceChild;
    Wa.prettify = pa;
  })();
  var fc = J.scripts || pb("script");
  var Va = fc[fc.length - 1].src.split("/");
  --Va.length;
  (Va = Va.join("/")) && (Va += "/");
  6.1 > Da && La(v, "scroll", Ya);
  Gb(Za);
  6.1 > Da && La(v, "scroll", ob);
  Gb(Mb);
  10 > n && (11 !== Eb || 5 !== n) || (9 > x || 1 > Q || !Sa && !v.addEventListener ? J.write('<link href="' + Va + xb + '" rel="stylesheet"' + (8 > x ? "" : ' media="screen,handheld,projection,print"') + ">") : Bb(function() {
    F(ub, "link", {href:Va + "" + xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, Function, Date, parseFloat, setTimeout, clearTimeout, setInterval, clearInterval, void 0);

