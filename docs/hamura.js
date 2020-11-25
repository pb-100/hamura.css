ua={};ua.conpare = function(t, g) {
  var y = 0, E;
  t = t.split(".");
  g = g.split(".");
  var F = t.length;
  var B = g.length;
  for (E = F < B ? F : B; y < E; ++y) {
    var R = t[y] - 0;
    var M = g[y] - 0;
    if (R !== M) {
      return R > M ? 1 : -1;
    }
  }
  return F > B ? 1 : F === B ? 0 : -1;
};
(function(t, g, y, E, F, B, R) {
  function M(f, q, n) {
    n = B(f.split(q)[1]);
    return 0 <= n ? n : 0;
  }
  function b(f, q) {
    return 0 <= f.indexOf(q);
  }
  function ma(f) {
    return b(f, "Linux armv") || b(f, "Linux aarch") || b(f, "Linux i686") || b(f, "Linux x86_64");
  }
  function V(f, q) {
    for (var n in q) {
      if (n === f) {
        return !0;
      }
    }
  }
  function c(f, q) {
    var n = "", I = -1, W;
    if (f = f.split(q)[1]) {
      for (; W = f.charCodeAt(++I);) {
        if (48 <= W && 57 >= W || 46 === W) {
          n += f.charAt(I);
        } else {
          break;
        }
      }
      for (I = n.length; I;) {
        if (46 === n.charCodeAt(--I)) {
          n = n.substr(0, I);
        } else {
          break;
        }
      }
    }
    return n;
  }
  function na() {
    for (var f = arguments, q = 1, n = f[0], I; q < f.length; ++q) {
      0 > oa(n, I = f[q]) && (n = I);
    }
    return n;
  }
  function pa(f) {
    return f === f + "" ? f : f === f - 0 ? "" + f : f.min && f.max ? f.min + "~" + f.max : f.min ? f.min + "~" : "~" + f.max;
  }
  function qa(f) {
    return f === f + "" ? B(f) : f;
  }
  var oa = t.conpare, a = E.userAgent, v = E.appVersion, ca = B(v) || 0, l = E.platform, N = y.documentElement, ra = N && N.style, w = y.documentMode, da = F.width;
  F = F.height;
  var sa = g.HTMLAudioElement, ta = g.performance, va = g.Int8Array, ea = void 0 !== g.ontouchstart, O = c(v, "Version/") || c(a, "Version/"), wa = g.operamini, P = !wa && g.opera, Fa = P && (P.version && "function" === typeof P.version ? P.version() : na(c(a, "Opera "), O, "" + ca)), xa = g.opr, S = !P && (y.all || w);
  w = S && (w ? w : g.XMLHttpRequest ? y.getElementsByTagName ? 7 : 4 : y.compatMode ? 6 : (0).toFixed ? 5.5 : g.attachEvent ? 5 : 4);
  N = !S && N.msContentZoomFactor;
  var X = !N && g.chrome, Q = !S && void 0 !== ra.MozAppearance, fa = b(a, "UCWEB"), Ga = fa && c(a, " U2/"), Ha = fa && c(a, "; wds "), ha = c(a.split("_").join("."), "; iPh OS "), p = c(a, "; Adr "), Y = b(v, "YJApp-ANDROID"), C = b(l, "Android") || Q && b(v, "Android") || Y;
  p = c(l, "Android ") || c(v, "Android ") || c(a, "Android ") || p;
  var ia = b(l, "Linux"), ya = "MacIntel" === l && void 0 !== E.standalone, ja = Q && c(a, "Goanna/"), G = !ja && Q && c(a, "rv:"), Ia = c(a, "Firefox/"), k = c(a, "Opera/"), Ja = g.FNRBrowser, J = M(a, "AppleWebKit/"), T = c(a, "Chrome/"), za = c(a, "OPR/"), Ka = c(v, "KHTML/"), La = c(a.toLowerCase(), "iris");
  c(a, "FxiOS/");
  c(a, "CriOS/");
  c(a, "EdgiOS/");
  var Ma = c(a, "Silk/"), U = M(a, "SamsungBrowser/"), Aa = !U && function() {
    for (var f = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    q, n = f.length; q = f[--n];) {
      if (b(a, q)) {
        return 2 > B(O) ? O : 0.9;
      }
    }
    f = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (n = f.length; q = f[--n];) {
      if (b(a, q)) {
        return O;
      }
    }
  }(), Ba = X && 534.3 >= J, Z = ma(l), L = Z && !b(a, l) && ma(a);
  ea = ea && (J || Q) && L || !p && Y;
  Y = !!g.ReactNativeWebView;
  Z = Z && function(f) {
    for (f in g) {
      if (0 === f.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var K = (L = g.puffinDevice) && L.clientInfo;
  K = (L = K && "iOS" === K.os && K.osVersion) && K.model;
  var ka = !w && y.registerElement, Na = !w && y.execCommand, Oa = ia && ka && "11.0.696.34" === T, Pa = g._firefoxTV_playbackStateObserverJava, Qa = M(a, "diordnA ");
  if ("Nitro" === l) {
    var d = "NDS";
  } else {
    if ("Nintendo DSi" === l) {
      d = "NDSi";
      var e = k;
    } else {
      if ("New Nintendo 3DS" === l || b(a, "iPhone OS 6_0") && 320 === da && 240 === F) {
        d = "New3DS", e = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === l) {
          d = "N3DS", e = c(a, "Version/"), J = 535;
        } else {
          if ("Nintendo Swicth" === l) {
            d = "Swicth", e = c(v, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === l) {
              d = "WiiU", e = c(v, "NintendoBrowser/"), J = c(v, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === l) {
                d = "Wii";
                e = c(a, "Wii; U; ; ");
                var r = d;
              } else {
                if (k = c(a, "PlayStation Vita ")) {
                  d = "PSVita", e = k, r = d;
                } else {
                  if (k = c(a, "(PlayStation Portable); ")) {
                    d = "PSP";
                    e = k;
                    var Ca = 3.3;
                    r = d;
                  } else {
                    if (k = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      if (d = "PS3", e = k, r = d, 0 > oa("4.10", k)) {
                        var h = "Sony";
                        var m = k;
                      }
                    } else {
                      if (b(a, "Xbox One")) {
                        d = "XboxOne", e = 1;
                      } else {
                        if (b(a, "Xbox")) {
                          d = "Xbox360", e = 1;
                        } else {
                          if (2 === ca && b(a, "Sony/COM2/")) {
                            d = "Mylo";
                            e = 2;
                            Ca = 3.4;
                            r = d;
                            var aa = !0;
                          } else {
                            if (0 === l.indexOf("iP") || ha || L || ya) {
                              if (L) {
                                switch(e = L, K.substr(0, 4)) {
                                  case "iPho":
                                    var D = "iPhone";
                                    c(K, D);
                                    var z = !0;
                                    break;
                                  case "iPad":
                                    D = "iPad";
                                    c(K, D);
                                    var x = !0;
                                    break;
                                  case "iPod":
                                    D = "iPod";
                                    c(K, D);
                                    var Da = !0;
                                }
                              } else {
                                ha ? e = ha : (e = c(v.split("_").join("."), "OS "), V("isSecureContext", g), V("enableWebGL", g), V("sameOrigin", g));
                                if (!e || Ja) {
                                  e = g.PointerEvent ? 13 : g.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : E.sendBeacon ? 11.3 : g.WebAssembly ? 11.2 : g.HTMLMeterElement ? 10.3 : g.Proxy ? 10.2 : g.HTMLPictureElement ? 9.3 : R.isNaN ? 9.2 : g.SharedWorker ? ta && ta.now ? 8.0 : 8.4 : Na ? 7.1 : g.webkitURL ? 6.1 : g.Worker ? 5.1 : va ? 4.3 : sa ? 4.1 : 3.2;
                                }
                                var A = da === 1.5 * F || 1.5 * da === F;
                                0 === l.indexOf("iPhone") ? (D = "iPhone", z = !0) : 0 === l.indexOf("iPad") || ya ? (D = "iPad", x = !0) : 0 === l.indexOf("iPod") && (D = "iPod", Da = !0);
                              }
                              !L && (E.standalone || (x || 12 > e) && V("webkitFullscreenEnabled", y) || 11 <= e && 13 > e && E.mediaDevices) ? (h = "SafariMobile", r = "Safari") : h = "iOSWebView";
                              d = "iOS";
                              m = e;
                            } else {
                              if (b(a, "Kobo")) {
                                d = "Kobo", h = "AOSP", m = 2.2, r = h, C = !0;
                              } else {
                                if (b(a, "EBRD")) {
                                  d = "SonyReader", h = "AOSP", m = 2.2, r = h;
                                } else {
                                  if (k = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    d = "ChromeOS", e = k;
                                  } else {
                                    if (void 0 !== g.onmoztimechange) {
                                      d = "FirefoxOS", e = 18.1 > G ? "1.0.1" : 19 > G ? 1.1 : 27 > G ? 1.2 : 29 > G ? 1.3 : 31 > G ? 1.4 : 33 > G ? 2.0 : 35 > G ? 2.1 : 38 > G ? 2.2 : 45 > G ? 2.5 : 2.6, b(a, "Mobile") ? z = !0 : b(a, "Tablet") ? x = !0 : b(a, "TV");
                                    } else {
                                      if (g.palmGetResource) {
                                        d = "webOS", e = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), r = d, b(a, "webOS.TV") || b(a, "/SmartTV") || (z = !0);
                                      } else {
                                        if (k = c(a, "Tizen ")) {
                                          d = "Tizen", e = k, h = r = "Samsung", m = U, z = !0;
                                        } else {
                                          if (k = c(a, "Windows Phone ") || c(v, "Windows Phone OS ") || Ha) {
                                            var ba = !0;
                                            e = k;
                                            z = !0;
                                          } else {
                                            if (N && "ARM" === l) {
                                              ba = !0, e = 10, z = !0;
                                            } else {
                                              if (S && b(v, "ZuneWP")) {
                                                ba = !0, e = 11 === w ? 8.1 : 10 === w ? 8 : 9 === w ? 7.5 : 7 === w ? 7 : "?", z = !0;
                                              } else {
                                                if (b(a, "FOMA;")) {
                                                  d = "FeaturePhone", z = !0;
                                                } else {
                                                  if (b(a, "SoftBank;")) {
                                                    d = "FeaturePhone", z = !0;
                                                  } else {
                                                    if (b(a, "KFMUWI")) {
                                                      var H = !0;
                                                      e = 6.3;
                                                      var u = x = !0;
                                                    } else {
                                                      if (b(a, "KFKAWI")) {
                                                        H = !0, e = 6, u = x = !0;
                                                      } else {
                                                        if (b(a, "KFSUWI") || b(a, "KFAUWI") || b(a, "KFDOWI")) {
                                                          H = !0, e = 5, u = x = !0;
                                                        } else {
                                                          if (b(a, "KFGIWI")) {
                                                            H = !0, e = 5, u = x = !0;
                                                          } else {
                                                            if (b(a, "KFARWI") || b(a, "KFSAWA") || b(a, "KFSAWI")) {
                                                              H = !0, e = 5 <= B(p) ? 5 : 4, u = x = !0;
                                                            } else {
                                                              if (b(a, "KFSOWI") || b(a, "KFTHWA") || b(a, "KFTHWI") || b(a, "KFAPWA") || b(a, "KFAPWI")) {
                                                                H = !0, e = 3, u = x = !0;
                                                              } else {
                                                                if (b(a, "KFOT") || b(a, "KFTT") || b(a, "KFJWA") || b(a, "KFJWI")) {
                                                                  H = !0, e = 2, u = x = !0;
                                                                } else {
                                                                  if (b(a, "Kindle Fire")) {
                                                                    H = !0, e = 1, u = x = !0;
                                                                  } else {
                                                                    if (k = c(a, "Kindle/")) {
                                                                      d = "Kindle", e = k, h = "AOSP", m = 2.2, r = h;
                                                                    } else {
                                                                      if (Pa) {
                                                                        H = !0, e = p || Qa, u = !0;
                                                                      } else {
                                                                        if (b(a, "AmazonWebAppPlatform") || b(a, "; AFT")) {
                                                                          H = !0, e = p, u = !0;
                                                                        } else {
                                                                          if (b(a, "MeeGo")) {
                                                                            d = "MeeGo";
                                                                          } else {
                                                                            if (b(a, "Maemo")) {
                                                                              d = "Maemo";
                                                                            } else {
                                                                              if (0 === a.indexOf("Windows Mobile;") || La) {
                                                                                d = "WindowsMobile", aa = !0;
                                                                              } else {
                                                                                if ("WinCE" === l) {
                                                                                  d = l, aa = !0;
                                                                                } else {
                                                                                  if ("Win16" === l || "Win32" === l || "Win64" === l) {
                                                                                    d = l, e = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                  } else {
                                                                                    if (0 === l.indexOf("Mac")) {
                                                                                      d = "MacPowerPC" === l ? "MacPPC" : l;
                                                                                      if (k = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                        e = k;
                                                                                      }
                                                                                      var Ea = !0;
                                                                                    } else {
                                                                                      if (b(a, "BlackBerry") || b(a, "BB10")) {
                                                                                        d = "BlackBerry", e = O, z = !0;
                                                                                      } else {
                                                                                        if (b(a, "SunOS") || b(a, "Sun Solaris")) {
                                                                                          d = "SunOS";
                                                                                        } else {
                                                                                          if (b(a, "FreeBSD")) {
                                                                                            d = "FreeBSD";
                                                                                          } else {
                                                                                            if (b(a, "OpenBSD")) {
                                                                                              d = "OpenBSD";
                                                                                            } else {
                                                                                              if (b(a, "NetBSD")) {
                                                                                                d = "NetBSD";
                                                                                              } else {
                                                                                                if (C && Q) {
                                                                                                  b(a, "Android 4.4;") ? A = {min:2.3} : 4 <= B(p) ? A = p : A = {min:2.2}, e = A;
                                                                                                } else {
                                                                                                  if (C && P) {
                                                                                                    p ? A = p : A = {min:1.6}, e = A, b(a, "Tablet") ? x = !0 : z = !0;
                                                                                                  } else {
                                                                                                    if (p) {
                                                                                                      e = p, C = !0;
                                                                                                    } else {
                                                                                                      if (ia && ea || Y || Z) {
                                                                                                        var la = !0;
                                                                                                        U ? A = {min:4.4} : X && !Ba || xa || za ? A = {min:4} : (A = p = void 0 !== ra.touchAction ? {min:5} : ka ? 4.4 : va ? E.connection ? g.searchBoxJavaBridge_ || X ? R.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= J ? 3 : 533 <= J ? sa ? 2.3 : 2.2 : 530 <= J ? 2.0 : 1.5, Aa && (h = "Samsung", m = Aa));
                                                                                                        e = A;
                                                                                                        C = !0;
                                                                                                      } else {
                                                                                                        Oa ? (e = {min:5}, la = C = !0) : ia && (b(a, "Ubuntu") ? d = "Ubuntu" : (k = c(a, "Mint/")) ? (d = "Mint", e = k) : (k = c(a, "Fedora/")) ? (d = "Fedora", e = k) : d = b(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  H || C && la && Ma ? d = "FireOS" : C && (d = d || "Android");
  ba && (d = "WindowsPhone");
  h || (u = u || C, P ? (h = u || aa || z || x ? "PrestoMobile" : "Presto", m = Fa) : S ? ((A = M(v, "Trident/") + 4) && A !== w && (r = "IEHost"), 10 <= w && 6.2 <= e && 7 > e && 0 === Ra && Sa + 1 !== Ta && (r = "ModernIE"), aa || z || x || Da ? h = "TridentMobile" : Ea && 5 <= w ? (h = "Tasman", r = "MacIE") : (h = "Trident", Ea && (r = "MacIE")), m = w) : N ? (h = ba ? "EdgeMobile" : "EdgeHTML", m = c(v, "Edge/")) : ja ? (h = "Goanna", m = ja) : Q ? (h = u ? "Fennec" : "Gecko", m = G || Ia) : 
  U ? (h = "Samsung", m = U) : (k = Ca || c(a, "NetFront/")) ? (h = "NetFront", m = k) : (k = c(a, "iCab")) ? (h = "iCab", m = k) : (k = na(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || wa && O) ? (h = "OperaMini", m = k, d || (b(a, "iPhone") ? D = "iPhone" : b(a, "iPad") ? D = "iPad" : b(a, "iPod") && (D = "iPod"), D && (d = "iOS"))) : fa ? (h = "UCWEB", m = Ga) : Ka ? (h = "KHTML", m = ca) : C && Ba ? (h = "AOSP", m = p) : X || xa || za ? (h = u ? "ChromiumMobile" : "Chromium", m = T) : C && ka ? 
  (h = "ChromeWebView", m = 5 > B(p) ? p : T) : C && (O || la) ? (h = "AOSP", m = p) : T ? (h = u ? "ChromiumMobile" : "Chromium", m = T) : J && (h = "WebKit", m = J));
  d && (t.PLATFORM = d, e ? (t.PLATFORM_VERSION = pa(e), t[d] = qa(e)) : t[d] = !0);
  h && (t.ENGINE = h, m ? (t.ENGINE_VERSION = pa(m), t[h] = qa(m)) : t[h] = !0, r || (r = h));
  t = {};
  var Ra, Sa, Ta;
})(ua, window, document, navigator, screen, parseFloat, Number);


PB100 = {};
(function(Pb, v, U, Qb, E, jb, mc, ha, nc, kb, oc, La, Rb, V, pc) {
  function R(a) {
    return void 0 !== a;
  }
  function ta() {
    for (var a, b = 0; b < va.length; ++b) {
      a = va[b], a.f();
    }
  }
  function Sb() {
    ba && (lb(), ba = setInterval(ta, mb));
  }
  function lb() {
    ba && (ba = clearInterval(ba));
  }
  function ia() {
    for (var a, b = 0, c = new V - 0; b < O.length;) {
      c < O[0].t ? ++b : (a = O.splice(b, 1)[0], a.f(a.p));
    }
    W = O.length ? La(ia, ja) : 0;
  }
  function Tb() {
    W && (nb(), W = La(ia, ja));
  }
  function nb() {
    W && (W = Rb(W));
  }
  function X(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function ca(a, b) {
    ob && !ka.length && y(pb);
    ka.push(a, b);
  }
  function pb() {
    var a = ka, b;
    for (ka = []; b = a.shift();) {
      X(b, a.shift());
    }
  }
  function Ma(a) {
    var b;
    Na && (b = Na(a));
    X(wa, a);
    onload = la;
    wa = Ma = Na = onload = null;
    return b;
  }
  function qb() {
    var a = 9 === da.offsetWidth;
    Oa !== a && ca(rb, Oa = a);
  }
  function xa() {
    return Pa = ma ? Qa ? 2 : Ra ? 3 : 1 : 0;
  }
  function na(a) {
    var b = b || E;
    return Ub ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Y(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function sb(a) {
    var b = a.children, c = 0, d, e;
    if (!b) {
      for (b = [], a = a.childNodes, d = a.length; c < d; ++c) {
        1 === (e = a[c]).nodeType && (b[b.length] = e);
      }
    }
    return b;
  }
  function Sa(a, b) {
    var c = E.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function H(a, b, c, d, e) {
    function m(A, w) {
      for (var x in w) {
        switch(x) {
          case "class":
          case "className":
            P(A, w[x]);
            break;
          default:
            A.setAttribute(x, w[x]);
        }
      }
    }
    function k(A, w) {
      var x = A.style, r;
      for (r in w) {
        x[r] = w[r];
      }
    }
    if ("style" === b) {
      var l = !0;
      b = Sa("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      b = Sa(b);
    }
    ya ? (2 === ya && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    ya = 0;
    c && m(b, c);
    d && k(b, d);
    e && !l && b.appendChild(E.createTextNode(e));
    return b;
  }
  function ea(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function P(a, b) {
    var c;
    if (!ea(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function za(a) {
    if (ea(C, a)) {
      var b = C.className.split(" ");
      b.splice(b.indexOf(a), 1);
      C.className = b.join(" ");
    }
  }
  function tb(a) {
    8 <= L && 9 > L ? H(Aa, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + ub(a)}) : (a = H(Aa, "style", {type:"text/css", media:"all"}, 0, a), Ta = a.sheet || a.styleSheet);
  }
  function fa(a) {
    for (var b = Ta, c, d, e = "", m; a.length;) {
      c = a.shift(), d = a.shift(), m = c + "{" + d + "}", b ? b.addRule ? b.addRule(c, d) : b.insertRule && b.insertRule(m, b.cssRules.length) : e += m;
    }
    e && tb(e);
  }
  function vb(a) {
    function b(e) {
      d = Ua(d);
      Va = e;
      c.onload = c.onerror = la;
      y(a, e);
    }
    if (R(Va)) {
      y(a, Va);
    } else {
      if (8 > p) {
        y(a, !1);
      } else {
        var c = new Image, d = y(function() {
          d && b(!1);
        });
        c.onerror = function() {
          b(!1);
        };
        c.onload = function() {
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function wb(a, b, c, d, e, m, k) {
    function l() {
      E.fonts.load('1.6em "' + b + '"').then(function() {
        r(b) ? y(a, B) : w(!0);
      }, function() {
        vb(Q);
      });
    }
    function A(h) {
      return E.hidden || E.msHidden || E.mozHidden || E.webkitHidden ? (I = new V - 0, !1) : h < new V - I;
    }
    function w(h) {
      h && (I = new V - 0);
      r(b) ? a(B) : A(M) ? J ? a(0) : 9 > p ? y(a, 0) : vb(Q) : y(w);
    }
    function x() {
      var h = -1, n;
      x = null;
      g = ["sans-serif", "serif"];
      t = H(C, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (u = {}; n = g[++h];) {
        t.style.fontFamily = n, u[n] = t.offsetWidth;
      }
    }
    function r(h) {
      var n = 0, z = -1, Wa, xb = 0;
      x && x();
      for (C.appendChild(t); Wa = g[++z];) {
        if (t.style.fontFamily = '"' + h + '",' + Wa, t.offsetWidth !== u[Wa]) {
          n = 1;
          break;
        }
      }
      n && e && (t.innerHTML = e, h = t.offsetWidth, t.innerHTML = m, xb = h === t.offsetWidth ? 1 : 0, t.innerHTML = "mmmmmmmmmmlli");
      Y(t);
      return B = n + xb;
    }
    function Q(h) {
      (J = h) ? D(!0) : a(0);
    }
    function D(h) {
      h && (I = new V - 0);
      for (n in c) {
        if (r(n)) {
          f = H(C, "div", {"aria-hidden":"true", className:d, id:d});
          h = c[n];
          var n = Ta, z = yb.all || 0;
          n ? n.addImport ? n.addImport(h, z) : n.insertRule && n.insertRule('@import "' + h + '"', z) : tb('@import "' + h + '"');
          yb.all = ++z;
          y(F, !0);
        } else {
          A(100) ? (delete c[n], y(D, !0)) : y(D);
        }
        return;
      }
      a(0);
    }
    function F(h) {
      h && (I = new V - 0);
      1 < f.offsetWidth ? (Y(f), M = 100, y(w, !0)) : A(M) ? (Y(f), a(0)) : y(F);
    }
    var M = k || 5E3, I, J, t, f, g, u, B;
    (function() {
      var h;
      if (v.MeeGo || 2.2 > v.AOSP || v.WebOS || v.UCWEB || 10 > v.TridentMobile || v.NDS || v.NDSi || v.N3DS) {
        return !1;
      }
      if (6 > p) {
        return !0;
      }
      var n = H(Aa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), z = (z = n.sheet || n.styleSheet) ? (h = 10 <= p ? z.cssRules : z.rules || z.cssRules) && (h = h[0]) ? h.cssText : z.cssText || "" : "";
      h = 0 < z.indexOf("src") && 0 === z.indexOf("@font-face");
      Y(n);
      return h;
    })() ? !E.fonts || 603 > Xa ? w(!0) : l() : y(a, 0);
  }
  function zb() {
    Ya = !Ya;
    for (var a = -1, b; b = Ba[++a];) {
      b.style.visibility = Ya ? "" : "hidden";
    }
  }
  function Vb(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Za = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Ca() {
    Ca = null;
    Wb($a, "PB-100", {"PB-100_canTTF":q + "pbFont/ttf.css", "PB-100_canWOFF":q + "pbFont/woff.css", "PB-100_canEOT":q + "pbFont/eot.css", "PB-100_canSVG":q + "pbFont/svg.css"}, "pbFont-testCssReady", Da, "i", 5E3);
  }
  function $a(a) {
    (Ea = a) || Ab ? ab() : oa ? Bb(!0) : R(oa) ? ab() : Xb(Bb, bb);
  }
  function Bb(a) {
    a && (P(C, "pbList-noWebFont"), 9.5 > L || (2 === K ? fa([".pbList font:after", "content:url(" + bb + ")"]) : fa([".pbList font", "background-image:url(" + bb + ")"])));
    ab();
  }
  function ab() {
    for ($a = wb = null; S.length;) {
      Fa(S.shift(), S.shift());
    }
  }
  function Fa(a, b) {
    function c(m) {
      m = m.childNodes;
      for (var k = -1, l; l = m[++k];) {
        switch(l.nodeType) {
          case 1:
            c(l);
            break;
          case 3:
            l.data && l.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && d.push(l);
        }
      }
    }
    var d = [];
    if ($a) {
      -1 === S.indexOf(a) && (S.push(a, b), cb && Ca && Ca());
    } else {
      var e = S.indexOf(a);
      0 <= e && S.splice(e, 2);
      for (c(a); a = d.shift();) {
        e = a.data, 2 !== Ea && (e = e.split(Da).join(Cb)), b ? a.data = e : Yb(e.split("\r").join("").split("&yen;").join(Zb).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(db).split("&amp;").join("&"), a);
      }
    }
  }
  function Yb(a, b) {
    function c(f, g) {
      for (var u = ""; g;) {
        g & 1 && (u += f), g >>= 1, f += f;
      }
      return u;
    }
    function d(f, g, u) {
      for (var B, h = -1, n, z; B = g[++h];) {
        for (; 0 <= (n = f.indexOf(B));) {
          z = B.length, f = f.substr(0, n) + c(u, z) + f.substr(n + z);
        }
      }
      return f;
    }
    function e(f) {
      var g = ha(f), u = "" + g;
      return 0 < g && g === g | 0 && (g = f.indexOf(u) + u.length, g <= f.length) ? g : 0;
    }
    var m = " area line str cmd fnc syb".split(" "), k = [], l = "", A, w = -1, x, r;
    if (function(f) {
      var g = f.indexOf("P");
      if (-1 === g) {
        return !1;
      }
      g = ha(f.charAt(g + 1));
      return 0 <= g && 9 >= g;
    }(a)) {
      l = c("+", a.length);
    } else {
      for (0 <= (A = e(a)) && (l = c("|", A), w = A, --w); r = a.charAt(++w);) {
        r === db || x ? (l += "~", r === db && (x = !x)) : l += r;
      }
      l = d(l, $b, "^");
      l = d(l, ac, "{");
      l = d(l, bc, "}");
    }
    w = 0;
    for (x = a.length; w < x; ++w) {
      r = a.charAt(w);
      var Q = r === Ga, D = " " === r;
      r = Q ? " " : r;
      var F = l.charAt(w), M = I, I = "|" === F;
      F = m["+|~{}^".indexOf(F) + 1];
      var J = "";
      if ("\n" !== r) {
        if (Ea || !oa || Ab) {
          8 > p && D && (r = w === x - 1 ? Ga : cc), 2 === Ea && a.substr(w, 2) === Da && (r = Da, ++w), D = D && "str" === F ? ' class="pbList-strsp"' : Q ? "" : !D && F ? ' class="pbList-' + F + '"' : "";
        } else {
          var t = Z.indexOf(r);
          t = -1 === t ? "" : Z.indexOf(r).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          D = D && "str" === F ? ' class="pbList-strsp"' : D || !t ? "" : F ? ' class="' + (t ? t + " " : "") + "pbList-" + F + '"' : ' class="' + t + '"';
        }
        M && Q ? r = Ga : I && !M && 9.5 > L && 4 > A && (J = c("<font>" + Ga + "</font>", 4 - A));
        k.push(J + "<font" + D + ">" + r + "</font>");
      } else {
        M = I = !1, k.push(r);
      }
    }
    k = k.join("");
    if (1 === b.nodeType) {
      b.innerHTML = k;
    } else {
      for (m = Sa("font", k); k = m.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(k, b);
      }
      Y(b);
    }
  }
  var la = Qb, pa = [], Ub = !!E.getElementsByTagName, C = E.body, T = C.style, p = v.Trident || v.TridentMobile, Ha = v.Tasman, Db = v.EdgeHTML || v.EdgeMobile, L = v.Presto || v.PrestoMobile, qa = v.Gecko, dc = qa && 0 <= v.conpare(v.ENGINE_VERSION, "1.9.1"), Ia = v.Goanna, Xa = v.WebKit, eb = v.SafariMobile || v.iOSWebView, ec = v.OperaMini && v.UCWEB, fb = v.Win32 || v.Win64, fc = ha(jb.userAgent.split("Edg/")[1]), Eb = ha(jb.appVersion.split("Trident/")[1]) + 4;
  p || Ha || (new kb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Fb = E.scripts || na("script"), gc = (Ha ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : "modern") + ".css", wa = [], Oa, Pa = 0, gb, oa, K, hc = R(T.transform) ? "transform" : R(T["-o-transform"]) ? "-o-transform" : R(T["-ms-transform"]) ? "-ms-transform" : R(T["-moz-transform"]) ? "-moz-transform" : R(T["-webkit-transform"]) ? "-webkit-transform" : "";
  var q = Fb[Fb.length - 1].src.split("/");
  --q.length;
  (q = q.join("/")) && (q += "/");
  var N = Array.prototype;
  N.pop || (N.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  N.push || (N.push = function() {
    for (var a = arguments, b = 0, c = a.length, d = this.length; b < c; ++b) {
      this[d + b] = a[b];
    }
    return this.length;
  });
  N.shift || (N.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  N.splice || (N.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, e = this.slice(a, a + b), m;
    if (0 < d) {
      var k = this.length - 1;
      for (m = a + b; k >= m; --k) {
        this[k + d] = this[k];
      }
    } else {
      if (0 > d) {
        k = a + b;
        for (m = this.length; k < m; ++k) {
          this[k + d] = this[k];
        }
        this.length += d;
      }
    }
    k = 2;
    for (m = c.length; k < m; ++k) {
      this[k - 2 + a] = c[k];
    }
    return e;
  });
  N.indexOf || (N.indexOf = function(a, b) {
    var c = this.length >>> 0;
    if (0 === c) {
      return -1;
    }
    if (b) {
      var d = b || 0;
      d = -Infinity === d ? 0 : (0 > d ? -d : d) | 0;
      if (c <= d) {
        return -1;
      }
    }
    for (d = 0 <= d ? d : 0 < c + d ? c + d : 0; d < c; ++d) {
      if (this[d] === a) {
        return d;
      }
    }
    return -1;
  });
  var Hb = function(a) {
    va.length || (ba = setInterval(ta, mb));
    va.push({f:a, g:++Gb});
    return Gb;
  };
  var va = [], mb = 999, Gb = 0, ba;
  if (5 > p || Ha) {
    U._wdb_onlooptimer = ta, ta = "_wdb_onlooptimer()";
  }
  pa.push(function() {
    6.1 > eb && Ib(Sb);
    Ja(lb);
  });
  var y = function(a, b, c) {
    O.length || (W = La(ia, ja));
    O.push({f:a, p:b, g:++Jb, t:new V - 0 + (ja < c ? c : ja)});
    return Jb;
  };
  var Ua = function(a) {
    for (var b = O.length, c; c = O[--b];) {
      if (c.g === a) {
        O.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var O = [], ja = 64, Jb = 0, W;
  if (5 > p || Ha) {
    U._wdb_ontimer = ia, ia = "_wdb_ontimer()";
  }
  pa.push(function() {
    6.1 > eb && Ib(Tb);
    Ja(nb);
  });
  var aa = U.matchMedia, ka = [], ob, da;
  wa.push(function() {
    da = H(C, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    ra(function() {
      ob = !0;
      ka.length && y(pb);
    });
  });
  var ra = function(a) {
    wa.push(a);
  };
  var Ja = function(a) {
    Kb.push(a);
  };
  var Kb = [], Na = U.onload, Lb = U.onunload;
  onload = Ma;
  onunload = function(a) {
    var b;
    Lb && (b = Lb(a));
    X(Kb, a);
    onunload = la;
    return b;
  };
  var Mb = function(a) {
    rb.push(a);
  };
  var rb = [];
  ra(function() {
    qb();
    Hb(qb);
  });
  var ic = function(a) {
    sa.push(a);
  };
  var sa = [], ma, Ra, Qa;
  if (10 <= p || Db || fb && fc) {
    aa("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      ma = Ra = a.matches;
      ca(sa, xa());
    }), aa("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      ma = Qa = a.matches;
      ca(sa, xa());
    }), aa("(-ms-high-contrast:active)").addListener(function(a) {
      ma = a.matches;
      ca(sa, xa());
    });
  } else {
    if (10 > p || fb && (44 <= qa || Ia)) {
      var Ka = function() {
        function a(e) {
          return "#ffffff" === e || "rgb(255,255,255)" === e;
        }
        var b = E.defaultView, c = Pa, d = b ? b.getComputedStyle(da, null) : da.currentStyle;
        b = (d && d.color || "").split(" ").join("");
        d = (d && d.backgroundColor || "").split(" ").join("");
        if (b) {
          return ma = "#123456" !== b && "rgb(18,52,86)" !== b, Ra = ("#000000" === b || "rgb(0,0,0)" === b) && a(d), Qa = a(b) && ("#000000" === d || "rgb(0,0,0)" === d), c !== xa() && ca(sa, Pa), !0;
        }
      };
      ra(function() {
        da.style.color = "#123456";
        da.style.backgroundColor = "#123456";
        60 > qa || Ia ? Ka() : Ka() && Hb(Ka, 1E3);
        Ka = null;
      });
    }
  }
  var jc = [];
  aa && aa("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    ca(jc, a.matches);
  });
  var hb = [];
  U.onbeforeprint ? (onbeforeprint = function() {
    X(hb, !0);
  }, onafterprint = function() {
    X(hb, !1);
  }, Ja(function() {
    onbeforeprint = onafterprint = la;
  })) : aa && aa("print").addListener(function(a) {
    X(hb, a.matches);
  });
  var Ib = function(a) {
    Nb.push(a);
  };
  var Nb = [], ib = U.onscroll;
  onscroll = function(a) {
    var b;
    ib && (b = ib(a));
    Ma || X(Nb);
    return b;
  };
  Ja(function() {
    onscroll = ib = la;
  });
  var kc = na("html")[0];
  var Aa = na("head")[0];
  var ya, ub;
  (function(a) {
    function b(d) {
      for (var e = c, m = "", k = 0, l; l = d.length;) {
        4 > l && (k = [0, 2, 1, 0][l]), l = d.charCodeAt(0) << 16 | (1 < l ? d.charCodeAt(1) : 0) << 8 | (2 < l ? d.charCodeAt(2) : 0), m += [e[l >>> 18], e[l >>> 12 & 63], 2 <= k ? "=" : e[l >>> 6 & 63], 1 <= k ? "=" : e[l & 63]].join(""), d = d.substr(3);
      }
      return m;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    ub = b;
  })(this);
  var Ta = void 0;
  var yb = {};
  ra(function() {
    if (Oa) {
      if (!R(K) && (K = Ia || 8 <= p || Db || dc || 7.2 <= L || 522 <= Xa || 3 <= eb ? 2 : 6 <= L || qa ? 1 : 0, !K)) {
        var a = H(C, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        K = 6 <= a.offsetWidth ? 2 : 0;
        Y(a);
      }
    } else {
      K = void 0;
    }
  });
  var Va;
  9 > p && ra(function(a) {
    a = H(C, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gb = 1 < a.offsetHeight;
    a.style.cssText = "";
    Y(a);
  });
  var Xb = function(a, b) {
    function c() {
      m || (d.complete ? (m = !0, y(a, !!d.width)) : --k ? e = y(c) : (m = !0, e = y(a, !1)));
    }
    var d = new Image, e, m, k = 99;
    d.onerror = function() {
      (!p || 11 === p || 11 === Eb) && d.width || m || (m = !0, e && Ua(e), e = y(a, !1));
    };
    d.onload = function() {
      m = !0;
      e && Ua(e);
      !L || d.complete || d.width ? (oa = !0, y(a, !0)) : e = y(a, !1);
    };
    d.src = b;
    8 > L && d.complete && d.width ? (oa = !0, y(a, !0)) : m || (e = y(c));
  };
  var Wb = wb;
  for (11 === Eb && 5.5 > p && H(Aa, "link", {href:q + gc, rel:"stylesheet", type:"text/css"}); pa.length;) {
    pa.shift()();
  }
  pa = null;
  var G = String.fromCharCode, Z = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", G(960), ")", "(", G(234), G(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 
  "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", G(9824), "\u2190", G(9829), G(9830), G(9827), G(956), "\u03a9", "\u2193", "\u2192", "%", G(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", G(9619)], lc = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150, -160, -170, -180, -190, -200, -210, -220, -230, -240, -250, -260, -270, -280, -290, -300, -310, -320, -330, -340, -350, -360, -370, -380, -390, 
  -400, -410, -420, -430, -440, -450, -460, -470, -480, -490, -500, -510, -520, -530, -540, -550, -570, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 0, 0, 280, 290, 300, 310, 141, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, -17, 540, -262, 560, 570, 580, 590];
  (10 > p || fb && (44 <= qa || Ia)) && ic(function(a) {
    za("jsHcm");
    za("jsHcmWob");
    za("jsHcmBow");
    if (a) {
      switch((hc || 9 === p || 5.5 <= p && 9 > p && gb) && P(C, "jsCanRotate"), a) {
        case 1:
          P(C, "jsHcm");
          break;
        case 2:
          P(C, "jsHcmWob");
          break;
        case 3:
          P(C, "jsHcmBow");
      }
    } else {
      za("jsCanRotate");
    }
  });
  var Ba = [], Ya, Za, Ob;
  Mb(function(a) {
    function b(f) {
      var g = f.getAttribute("pbtip") || "", u = g.charAt(0), B = "_" === u;
      g = B ? g.charAt(2) : u;
      u = B ? "Btm" : "";
      var h = f.getAttribute("title") || "";
      l || (f.removeAttribute("pbtip"), f.removeAttribute("title"), P(f, "pbTipPos" + g.toUpperCase()), H(f, "div", {className:"pbTip" + u}, {width:h.length + m + "em"}, h));
      H(f, "div", {className:"pbTail" + u});
      w && B && (f.focus(), f.blur());
    }
    function c(f) {
      F || k || ea(f, "pbChrCS") && Ba.push(f);
    }
    function d(f) {
      var g = f.getAttribute("pbGhst") || "", u = f.className, B = u.split("pbCsr")[1] || "", h = u.split("pbAlp")[1] || "";
      if ("CS" === g) {
        var n = "_";
      } else {
        n = g, 3 === n.length && (n = n.substr(0, 2)), n = Z[parseInt(n, 16)] || "~";
      }
      f.removeAttribute("pbGhst");
      B = B.split(" ")[0];
      h = h.split(" ")[0];
      var z = 10 - ha(h);
      2 > K && h ? (u = u.split("pbChr")[1], u = u.split(" ")[0], e(f, u, h, f.innerHTML), g && e(f, g, z, n), f.style.backgroundImage = "none") : g ? (g = {className:"pbChr" + g + " pbAlp" + z + " pbCsr" + B}, ya = 1, r = H(f, "b", g, 0, n), c(f), c(r)) : c(f);
    }
    function e(f, g, u, B) {
      g = parseInt(g, 16);
      var h = lc[g];
      f = H(f, "img", {title:B, src:"" + q + "pbLCD/x3_a" + u + "0.png"}, 0 === g ? {x:0, y:0} : {left:(0 > h ? 0 : -14) + "px", top:3 * -Math.abs(h) + "px"});
      "CS" === B && Ba.push(f);
    }
    if (a && !Ob) {
      Ob = !0;
      var m = 6 > p ? 1 : 0;
      a = na("SAMP");
      var k = 9 > p, l = 8 === p, A = 9 > L, w = 5 <= p && 6 > p, x, r, Q, D;
      gb && P(C, "pbLCD-AX");
      if (a.length) {
        2 > K && P(C, "pbLCD-bgiFallback");
        var F = void 0 !== T.opacity || void 0 !== T["-moz-opacity"] || void 0 !== T["-khtml-opacity"], M = !F && !k;
        A = 2 > K || A || l || M;
        for (Q = -1; x = a[++Q];) {
          if (ea(x.parentElement || x.parentNode, "pbLCD")) {
            var I = sb(x);
            for (x = I.length; x;) {
              var J = I[--x];
              switch(J.tagName.toUpperCase()) {
                case "A":
                  if (A) {
                    (2 > K || l) && b(J);
                    var t = sb(J);
                    for (D = t.length; D;) {
                      l || d(t[--D]);
                    }
                  }
                  ec ? J.setAttribute("href", "javascript:void(0)") : J.onclick = Vb;
                  break;
                case "B":
                  A && d(J);
              }
            }
          }
        }
        Ba.length ? (setInterval(zb, 500), 2 === K ? fa([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : fa([".pbChrCS", "background-position:0 -51px"])) : zb = null;
        M && (2 === K ? fa([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + q + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + q + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + q + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + q + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + q + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + q + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        q + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + q + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + q + "pbLCD/x3_a90.png)"]) : fa([".pbAlp1", "background-image:url(" + q + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + q + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + q + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + q + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + q + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        q + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + q + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + q + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + q + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Xa && (kc.onclick = function(a) {
    if (Za) {
      return Za = !1, a.preventDefault(), !1;
    }
  });
  6 === p && (new kb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(E);
  var db = Z[7], Cb = Z[30], Zb = Z[113], Da = G(8337) + G(8331), Ga = G(160), cc = G(8194), ac = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), bc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), $b = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Cb + Z[31]).split(""), S = [], 
  Ea, bb = q + "pbFont/" + (9 > p ? "x3mask_ie.png" : "x3mask.png"), Ab = 8 > L && !0, cb;
  Mb(function(a) {
    if (a && !cb) {
      var b = E.all || na("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        ea(c, "pbList") ? Fa(c) : ea(c, "pbFont") && Fa(c, !0);
      }
      S.length && Ca();
      cb = !0;
    }
  });
  Pb.prettify = Fa;
})(PB100, ua, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

