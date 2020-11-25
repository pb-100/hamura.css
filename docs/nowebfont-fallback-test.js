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
(function(Sb, w, P, Tb, D, mb, qc, ka, rc, nb, sc, Oa, Ub, U, tc) {
  function g() {
  }
  function V(a) {
    return void 0 !== a;
  }
  function va() {
    for (var a, b = 0; b < wa.length; ++b) {
      a = wa[b], a.f();
    }
  }
  function Vb() {
    ca && (ob(), ca = setInterval(va, pb));
  }
  function ob() {
    ca && (ca = clearInterval(ca));
  }
  function la() {
    for (var a, b = 0, c = new U - 0; b < Q.length;) {
      c < Q[0].t ? ++b : (a = Q.splice(b, 1)[0], a.f(a.p));
    }
    X = Q.length ? Oa(la, ma) : 0;
  }
  function Wb() {
    X && (qb(), X = Oa(la, ma));
  }
  function qb() {
    X && (X = Ub(X));
  }
  function Y(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function da(a, b) {
    rb && !na.length && z(sb);
    na.push(a, b);
  }
  function sb() {
    var a = na, b;
    for (na = []; b = a.shift();) {
      Y(b, a.shift());
    }
  }
  function Pa(a) {
    var b;
    Qa && (b = Qa(a));
    Y(xa, a);
    onload = oa;
    xa = Pa = Qa = onload = null;
    return b;
  }
  function tb() {
    var a = 9 === ea.offsetWidth;
    Ra !== a && da(ub, Ra = a);
  }
  function ya() {
    return Sa = pa ? Ta ? 2 : Ua ? 3 : 1 : 0;
  }
  function qa(a) {
    var b = b || D;
    return Xb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Z(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function vb(a) {
    var b = a.children, c = 0, d, e;
    if (!b) {
      for (b = [], a = a.childNodes, d = a.length; c < d; ++c) {
        1 === (e = a[c]).nodeType && (b[b.length] = e);
      }
    }
    return b;
  }
  function Va(a, b) {
    var c = D.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function H(a, b, c, d, e) {
    function p(B, x) {
      for (var y in x) {
        switch(y) {
          case "class":
          case "className":
            R(B, x[y]);
            break;
          default:
            B.setAttribute(y, x[y]);
        }
      }
    }
    function n(B, x) {
      var y = B.style, t;
      for (t in x) {
        y[t] = x[t];
      }
    }
    if ("style" === b) {
      var l = !0;
      b = Va("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      b = Va(b);
    }
    za ? (2 === za && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    za = 0;
    c && p(b, c);
    d && n(b, d);
    e && !l && b.appendChild(D.createTextNode(e));
    return b;
  }
  function fa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function R(a, b) {
    var c;
    if (!fa(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function Aa(a) {
    if (fa(E, a)) {
      var b = E.className.split(" ");
      b.splice(b.indexOf(a), 1);
      E.className = b.join(" ");
    }
  }
  function wb(a) {
    8 <= M && 9 > M ? H(Ba, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + xb(a)}) : (a = H(Ba, "style", {type:"text/css", media:"all"}, 0, a), Wa = a.sheet || a.styleSheet);
  }
  function ha(a) {
    for (var b = Wa, c, d, e = "", p; a.length;) {
      c = a.shift(), d = a.shift(), p = c + "{" + d + "}", b ? b.addRule ? b.addRule(c, d) : b.insertRule && b.insertRule(p, b.cssRules.length) : e += p;
    }
    e && wb(e);
  }
  function yb(a) {
    function b(e) {
      d = Xa(d);
      Ca = e;
      c.onload = c.onerror = oa;
      z(a, e);
    }
    if (V(Ca)) {
      g("[dataUriTest] already done : " + Ca), z(a, Ca);
    } else {
      if (8 > q) {
        g("[dataUriTest] trident < 8 : false"), z(a, !1);
      } else {
        g("[dataUriTest] start!");
        var c = new Image, d = z(function() {
          d && b(!1);
        });
        c.onerror = function() {
          g("[dataUriTest] no DATA URI!");
          b(!1);
        };
        c.onload = function() {
          g("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function zb(a, b, c, d, e, p, n) {
    function l() {
      var h = '1.6em "' + b + '"';
      g("[webFontTest] testByNativeFontLoaderAPI start.");
      D.fonts.load(h).then(function(m) {
        g("[webFontTest] fonts.check() : " + D.fonts.check(h, "i") + ", fonts.length : " + m.length);
        t(b) ? z(a, C) : (g("[webFontTest] mesureWebFont() : false"), x(!0));
      }, function(m) {
        g("[webFontTest] fonts.load() rejected! " + m);
        yb(S);
      });
    }
    function B(h) {
      return D.hidden || D.msHidden || D.mozHidden || D.webkitHidden ? (J = new U - 0, !1) : h < new U - J;
    }
    function x(h) {
      h && (g("[webFontTest] testWebFont start."), J = new U - 0);
      t(b) ? (g("[webFontTest] testWebFont mesurement success : " + C), a(C)) : B(N) ? (g("[webFontTest] testWebFont timeout!"), K ? a(0) : 9 > q ? z(a, 0) : yb(S)) : z(x);
    }
    function y() {
      var h = -1, m;
      y = null;
      k = ["sans-serif", "serif"];
      u = H(E, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (v = {}; m = k[++h];) {
        u.style.fontFamily = m, v[m] = u.offsetWidth;
      }
    }
    function t(h) {
      var m = 0, A = -1, Ya, Ab = 0;
      y && y();
      for (E.appendChild(u); Ya = k[++A];) {
        if (u.style.fontFamily = '"' + h + '",' + Ya, u.offsetWidth !== v[Ya]) {
          m = 1;
          break;
        }
      }
      m && e && (u.innerHTML = e, h = u.offsetWidth, u.innerHTML = p, Ab = h === u.offsetWidth ? 1 : 0, u.innerHTML = "mmmmmmmmmmlli");
      Z(u);
      return C = m + Ab;
    }
    function S(h) {
      g("[webFontTest] testDataUriComplete : " + h);
      (K = h) ? F(!0) : a(0);
    }
    function F(h) {
      h && (J = new U - 0);
      for (m in c) {
        if (t(m)) {
          g("[webFontTest] success! " + m);
          f = H(E, "div", {"aria-hidden":"true", className:d, id:d});
          h = c[m];
          var m = Wa, A = Bb.all || 0;
          m ? m.addImport ? m.addImport(h, A) : m.insertRule && m.insertRule('@import "' + h + '"', A) : wb('@import "' + h + '"');
          Bb.all = ++A;
          z(G, !0);
        } else {
          B(100) ? (g("[webFontTest] timeout! " + m), delete c[m], z(F, !0)) : z(F);
        }
        return;
      }
      a(0);
    }
    function G(h) {
      h && (g("[webFontTest] testImportedCssReady start!"), g("[webFontTest] targetWebFontName : " + b), J = new U - 0);
      1 < f.offsetWidth ? (g("[webFontTest] testImportedCssReady ended."), Z(f), N = 100, z(x, !0)) : B(N) ? (g("[webFontTest] testImportedCssReady timeout!"), Z(f), a(0)) : z(G);
    }
    var N = n || 5E3, J, K, u, f, k, v, C;
    b = Yb + b;
    g("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var h;
      if (w.MeeGo || 2.2 > w.AOSP || w.WebOS || w.UCWEB || 10 > w.TridentMobile || w.NDS || w.NDSi || w.N3DS) {
        return !1;
      }
      if (6 > q) {
        return !0;
      }
      var m = H(Ba, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), A = (A = m.sheet || m.styleSheet) ? (h = 10 <= q ? A.cssRules : A.rules || A.cssRules) && (h = h[0]) ? h.cssText : A.cssText || "" : "";
      h = 0 < A.indexOf("src") && 0 === A.indexOf("@font-face");
      Z(m);
      return h;
    })() ? (g("[webFontTest] maybeCanWebFont() : true"), !D.fonts || 603 > Za ? (g("[webFontTest] No native font loader."), x(!0)) : (g("[webFontTest] Use Native font loader."), l())) : (g("[webFontTest] maybeCanWebFont() : false"), z(a, 0));
  }
  function Cb() {
    $a = !$a;
    for (var a = -1, b; b = Da[++a];) {
      b.style.visibility = $a ? "" : "hidden";
    }
  }
  function Zb(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), ab = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Ea() {
    Ea = null;
    $b(bb, "PB-100", {"PB-100_canTTF":r + "pbFont/ttf.css", "PB-100_canWOFF":r + "pbFont/woff.css", "PB-100_canEOT":r + "pbFont/eot.css", "PB-100_canSVG":r + "pbFont/svg.css"}, "pbFont-testCssReady", Fa, "i", 5E3);
  }
  function bb(a) {
    Ga = a;
    g("[pbList] WebFont test result : " + !!a);
    a || Db ? cb() : ra ? Eb(!0) : V(ra) ? cb() : (g("[pbList] Need imageTest " + Ha), ac(Eb, Ha));
  }
  function Eb(a) {
    a ? (g("[pbList] Fallback start!"), R(E, "pbList-noWebFont"), 9.5 > M || (2 === L ? ha([".pbList font:after", "content:url(" + Ha + ")"]) : ha([".pbList font", "background-image:url(" + Ha + ")"]))) : g("[pbList] image disabled!");
    cb();
  }
  function cb() {
    for (bb = zb = null; T.length;) {
      Ia(T.shift(), T.shift());
    }
    g("[pbList] complete.");
  }
  function Ia(a, b) {
    function c(p) {
      p = p.childNodes;
      for (var n = -1, l; l = p[++n];) {
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
    if (bb) {
      -1 === T.indexOf(a) && (T.push(a, b), db && Ea && Ea());
    } else {
      var e = T.indexOf(a);
      0 <= e && T.splice(e, 2);
      for (c(a); a = d.shift();) {
        e = a.data, 2 !== Ga && (e = e.split(Fa).join(Fb)), b ? a.data = e : bc(e.split("\r").join("").split("&yen;").join(cc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(eb).split("&amp;").join("&"), a);
      }
    }
  }
  function bc(a, b) {
    function c(f, k) {
      for (var v = ""; k;) {
        k & 1 && (v += f), k >>= 1, f += f;
      }
      return v;
    }
    function d(f, k, v) {
      for (var C, h = -1, m, A; C = k[++h];) {
        for (; 0 <= (m = f.indexOf(C));) {
          A = C.length, f = f.substr(0, m) + c(v, A) + f.substr(m + A);
        }
      }
      return f;
    }
    function e(f) {
      var k = ka(f), v = "" + k;
      return 0 < k && k === k | 0 && (k = f.indexOf(v) + v.length, k <= f.length) ? k : 0;
    }
    var p = " area line str cmd fnc syb".split(" "), n = [], l = "", B, x = -1, y, t;
    if (function(f) {
      var k = f.indexOf("P");
      if (-1 === k) {
        return !1;
      }
      k = ka(f.charAt(k + 1));
      return 0 <= k && 9 >= k;
    }(a)) {
      l = c("+", a.length);
    } else {
      for (0 <= (B = e(a)) && (l = c("|", B), x = B, --x); t = a.charAt(++x);) {
        t === eb || y ? (l += "~", t === eb && (y = !y)) : l += t;
      }
      l = d(l, dc, "^");
      l = d(l, ec, "{");
      l = d(l, fc, "}");
    }
    x = 0;
    for (y = a.length; x < y; ++x) {
      t = a.charAt(x);
      var S = t === Ja, F = " " === t;
      t = S ? " " : t;
      var G = l.charAt(x), N = J, J = "|" === G;
      G = p["+|~{}^".indexOf(G) + 1];
      var K = "";
      if ("\n" !== t) {
        if (Ga || !ra || Db) {
          8 > q && F && (t = x === y - 1 ? Ja : gc), 2 === Ga && a.substr(x, 2) === Fa && (t = Fa, ++x), F = F && "str" === G ? ' class="pbList-strsp"' : S ? "" : !F && G ? ' class="pbList-' + G + '"' : "";
        } else {
          var u = aa.indexOf(t);
          u = -1 === u ? "" : aa.indexOf(t).toString(16).toUpperCase();
          u = (u = 1 === u.length ? "0" + u : u) ? "pbChr" + u : "";
          F = F && "str" === G ? ' class="pbList-strsp"' : F || !u ? "" : G ? ' class="' + (u ? u + " " : "") + "pbList-" + G + '"' : ' class="' + u + '"';
        }
        N && S ? t = Ja : J && !N && 9.5 > M && 4 > B && (K = c("<font>" + Ja + "</font>", 4 - B));
        n.push(K + "<font" + F + ">" + t + "</font>");
      } else {
        N = J = !1, n.push(t);
      }
    }
    n = n.join("");
    if (1 === b.nodeType) {
      b.innerHTML = n;
    } else {
      for (p = Va("font", n); n = p.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(n, b);
      }
      Z(b);
    }
  }
  var oa = Tb, ia = [], Xb = !!D.getElementsByTagName, E = D.body, W = E.style, q = w.Trident || w.TridentMobile, Ka = w.Tasman, Gb = w.EdgeHTML || w.EdgeMobile, M = w.Presto || w.PrestoMobile, sa = w.Gecko, hc = sa && 0 <= w.conpare(w.ENGINE_VERSION, "1.9.1"), La = w.Goanna, Za = w.WebKit, fb = w.SafariMobile || w.iOSWebView, ic = w.OperaMini && w.UCWEB, gb = w.Win32 || w.Win64, jc = ka(mb.userAgent.split("Edg/")[1]), Hb = ka(mb.appVersion.split("Trident/")[1]) + 4;
  q || Ka || (new nb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Ib = D.scripts || qa("script"), kc = (Ka ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : "modern") + ".css", xa = [], Ra, Sa = 0, hb, ra, L, lc = V(W.transform) ? "transform" : V(W["-o-transform"]) ? "-o-transform" : V(W["-ms-transform"]) ? "-ms-transform" : V(W["-moz-transform"]) ? "-moz-transform" : V(W["-webkit-transform"]) ? "-webkit-transform" : "";
  var r = Ib[Ib.length - 1].src.split("/");
  --r.length;
  (r = r.join("/")) && (r += "/");
  var O = Array.prototype;
  O.pop || (O.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  O.push || (O.push = function() {
    for (var a = arguments, b = 0, c = a.length, d = this.length; b < c; ++b) {
      this[d + b] = a[b];
    }
    return this.length;
  });
  O.shift || (O.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  O.splice || (O.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, e = this.slice(a, a + b), p;
    if (0 < d) {
      var n = this.length - 1;
      for (p = a + b; n >= p; --n) {
        this[n + d] = this[n];
      }
    } else {
      if (0 > d) {
        n = a + b;
        for (p = this.length; n < p; ++n) {
          this[n + d] = this[n];
        }
        this.length += d;
      }
    }
    n = 2;
    for (p = c.length; n < p; ++n) {
      this[n - 2 + a] = c[n];
    }
    return e;
  });
  O.indexOf || (O.indexOf = function(a, b) {
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
  var ib, jb = [];
  ia.push(function() {
    ja(function() {
      (ib = P.logger || D.logger || D.getElementById("logger")) || alert("#logger not found!");
      for (ib ? g = function(a) {
        H(ib, "P", null, null, a);
      } : P.console && (g = console.log); jb.length;) {
        g(jb.shift());
      }
    });
  });
  g = function(a) {
    jb.push(a);
  };
  g("[g_assetUrl] " + r);
  var Kb = function(a) {
    wa.length || (ca = setInterval(va, pb));
    wa.push({f:a, g:++Jb});
    return Jb;
  };
  var wa = [], pb = 999, Jb = 0, ca;
  if (5 > q || Ka) {
    P._wdb_onlooptimer = va, va = "_wdb_onlooptimer()";
  }
  ia.push(function() {
    6.1 > fb && Lb(Vb);
    Ma(ob);
  });
  var z = function(a, b, c) {
    Q.length || (X = Oa(la, ma));
    Q.push({f:a, p:b, g:++Mb, t:new U - 0 + (ma < c ? c : ma)});
    return Mb;
  };
  var Xa = function(a) {
    for (var b = Q.length, c; c = Q[--b];) {
      if (c.g === a) {
        Q.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var Q = [], ma = 64, Mb = 0, X;
  if (5 > q || Ka) {
    P._wdb_ontimer = la, la = "_wdb_ontimer()";
  }
  ia.push(function() {
    6.1 > fb && Lb(Wb);
    Ma(qb);
  });
  var ba = P.matchMedia, na = [], rb, ea;
  xa.push(function() {
    ea = H(E, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    ja(function() {
      rb = !0;
      na.length && z(sb);
    });
  });
  var ja = function(a) {
    xa.push(a);
  };
  var Ma = function(a) {
    Nb.push(a);
  };
  var Nb = [], Qa = P.onload, Ob = P.onunload;
  onload = Pa;
  onunload = function(a) {
    var b;
    Ob && (b = Ob(a));
    Y(Nb, a);
    onunload = oa;
    return b;
  };
  var Pb = function(a) {
    ub.push(a);
  };
  var ub = [];
  ja(function() {
    tb();
    Kb(tb);
  });
  var mc = function(a) {
    ta.push(a);
  };
  var ta = [], pa, Ua, Ta;
  if (10 <= q || Gb || gb && jc) {
    ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      pa = Ua = a.matches;
      da(ta, ya());
    }), ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      pa = Ta = a.matches;
      da(ta, ya());
    }), ba("(-ms-high-contrast:active)").addListener(function(a) {
      pa = a.matches;
      da(ta, ya());
    });
  } else {
    if (10 > q || gb && (44 <= sa || La)) {
      var Na = function() {
        function a(e) {
          return "#ffffff" === e || "rgb(255,255,255)" === e;
        }
        var b = D.defaultView, c = Sa, d = b ? b.getComputedStyle(ea, null) : ea.currentStyle;
        b = (d && d.color || "").split(" ").join("");
        d = (d && d.backgroundColor || "").split(" ").join("");
        if (b) {
          return pa = "#123456" !== b && "rgb(18,52,86)" !== b, Ua = ("#000000" === b || "rgb(0,0,0)" === b) && a(d), Ta = a(b) && ("#000000" === d || "rgb(0,0,0)" === d), c !== ya() && da(ta, Sa), !0;
        }
      };
      ja(function() {
        ea.style.color = "#123456";
        ea.style.backgroundColor = "#123456";
        60 > sa || La ? Na() : Na() && Kb(Na, 1E3);
        Na = null;
      });
    }
  }
  var nc = [];
  ba && ba("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    da(nc, a.matches);
  });
  var kb = [];
  P.onbeforeprint ? (onbeforeprint = function() {
    Y(kb, !0);
  }, onafterprint = function() {
    Y(kb, !1);
  }, Ma(function() {
    onbeforeprint = onafterprint = oa;
  })) : ba && ba("print").addListener(function(a) {
    Y(kb, a.matches);
  });
  var Lb = function(a) {
    Qb.push(a);
  };
  var Qb = [], lb = P.onscroll;
  onscroll = function(a) {
    var b;
    lb && (b = lb(a));
    Pa || Y(Qb);
    return b;
  };
  Ma(function() {
    onscroll = lb = oa;
  });
  var oc = qa("html")[0];
  var Ba = qa("head")[0];
  var za, xb;
  (function(a) {
    function b(d) {
      for (var e = c, p = "", n = 0, l; l = d.length;) {
        4 > l && (n = [0, 2, 1, 0][l]), l = d.charCodeAt(0) << 16 | (1 < l ? d.charCodeAt(1) : 0) << 8 | (2 < l ? d.charCodeAt(2) : 0), p += [e[l >>> 18], e[l >>> 12 & 63], 2 <= n ? "=" : e[l >>> 6 & 63], 1 <= n ? "=" : e[l & 63]].join(""), d = d.substr(3);
      }
      return p;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    xb = b;
  })(this);
  var Wa = void 0;
  var Bb = {};
  ja(function() {
    if (Ra) {
      if (!V(L) && (L = La || 8 <= q || Gb || hc || 7.2 <= M || 522 <= Za || 3 <= fb ? 2 : 6 <= M || sa ? 1 : 0, !L)) {
        var a = H(E, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        L = 6 <= a.offsetWidth ? 2 : 0;
        Z(a);
      }
    } else {
      L = void 0;
    }
  });
  var Ca;
  9 > q && ja(function(a) {
    a = H(E, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    hb = 1 < a.offsetHeight;
    a.style.cssText = "";
    Z(a);
  });
  var ac = function(a, b) {
    function c() {
      p || (d.complete ? (g("[imageTest] timer -> img.complete. img.width=" + d.width), p = !0, z(a, !!d.width)) : --n ? e = z(c) : (g("[imageTest] timeout."), p = !0, e = z(a, !1)));
    }
    var d = new Image, e, p, n = 99;
    g("[imageTest] start.");
    d.onerror = function() {
      var l = !q || 11 === q || 11 === Hb;
      g("[imageTest] error. errorFix=" + l);
      l && d.width || p || (g("[imageTest] error!"), p = !0, e && Xa(e), e = z(a, !1));
    };
    d.onload = function() {
      p = !0;
      e && Xa(e);
      g("[imageTest] onload.");
      !M || d.complete || d.width ? (g("[imageTest] success!"), ra = !0, z(a, !0)) : (g("[imageTest] Presto not img.complete!"), e = z(a, !1));
    };
    d.src = b;
    8 > M && d.complete && d.width ? (g("[imageTest] Presto<8 success!"), ra = !0, z(a, !0)) : p || (e = z(c));
  };
  var $b = zb;
  var Yb = "bad_" + (new U - 0) + "_";
  for (11 === Hb && 5.5 > q && H(Ba, "link", {href:r + kc, rel:"stylesheet", type:"text/css"}); ia.length;) {
    ia.shift()();
  }
  ia = null;
  var I = String.fromCharCode, aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", I(960), ")", "(", I(234), I(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", I(9824), "\u2190", I(9829), I(9830), I(9827), I(956), "\u03a9", "\u2193", "\u2192", "%", I(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", I(9619)], pc = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150, -160, -170, -180, -190, -200, -210, -220, -230, -240, -250, -260, -270, -280, -290, -300, -310, -320, -330, -340, -350, -360, -370, -380, 
  -390, -400, -410, -420, -430, -440, -450, -460, -470, -480, -490, -500, -510, -520, -530, -540, -550, -570, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 0, 0, 280, 290, 300, 310, 141, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, -17, 540, -262, 560, 570, 580, 590];
  (10 > q || gb && (44 <= sa || La)) && mc(function(a) {
    Aa("jsHcm");
    Aa("jsHcmWob");
    Aa("jsHcmBow");
    if (a) {
      switch((lc || 9 === q || 5.5 <= q && 9 > q && hb) && R(E, "jsCanRotate"), a) {
        case 1:
          R(E, "jsHcm");
          break;
        case 2:
          R(E, "jsHcmWob");
          break;
        case 3:
          R(E, "jsHcmBow");
      }
    } else {
      Aa("jsCanRotate");
    }
  });
  var Da = [], $a, ab, Rb;
  Pb(function(a) {
    function b(f) {
      var k = f.getAttribute("pbtip") || "", v = k.charAt(0), C = "_" === v;
      k = C ? k.charAt(2) : v;
      v = C ? "Btm" : "";
      var h = f.getAttribute("title") || "";
      l || (f.removeAttribute("pbtip"), f.removeAttribute("title"), R(f, "pbTipPos" + k.toUpperCase()), H(f, "div", {className:"pbTip" + v}, {width:h.length + p + "em"}, h));
      H(f, "div", {className:"pbTail" + v});
      x && C && (f.focus(), f.blur());
    }
    function c(f) {
      G || n || fa(f, "pbChrCS") && Da.push(f);
    }
    function d(f) {
      var k = f.getAttribute("pbGhst") || "", v = f.className, C = v.split("pbCsr")[1] || "", h = v.split("pbAlp")[1] || "";
      if ("CS" === k) {
        var m = "_";
      } else {
        m = k, 3 === m.length && (m = m.substr(0, 2)), m = aa[parseInt(m, 16)] || "~";
      }
      f.removeAttribute("pbGhst");
      C = C.split(" ")[0];
      h = h.split(" ")[0];
      var A = 10 - ka(h);
      2 > L && h ? (v = v.split("pbChr")[1], v = v.split(" ")[0], e(f, v, h, f.innerHTML), k && e(f, k, A, m), f.style.backgroundImage = "none") : k ? (k = {className:"pbChr" + k + " pbAlp" + A + " pbCsr" + C}, za = 1, t = H(f, "b", k, 0, m), c(f), c(t)) : c(f);
    }
    function e(f, k, v, C) {
      k = parseInt(k, 16);
      var h = pc[k];
      f = H(f, "img", {title:C, src:"" + r + "pbLCD/x3_a" + v + "0.png"}, 0 === k ? {x:0, y:0} : {left:(0 > h ? 0 : -14) + "px", top:3 * -Math.abs(h) + "px"});
      "CS" === C && Da.push(f);
    }
    if (a && !Rb) {
      Rb = !0;
      var p = 6 > q ? 1 : 0;
      a = qa("SAMP");
      var n = 9 > q, l = 8 === q, B = 9 > M, x = 5 <= q && 6 > q, y, t, S, F;
      hb && R(E, "pbLCD-AX");
      if (a.length) {
        2 > L && R(E, "pbLCD-bgiFallback");
        var G = void 0 !== W.opacity || void 0 !== W["-moz-opacity"] || void 0 !== W["-khtml-opacity"], N = !G && !n;
        B = 2 > L || B || l || N;
        for (S = -1; y = a[++S];) {
          if (fa(y.parentElement || y.parentNode, "pbLCD")) {
            var J = vb(y);
            for (y = J.length; y;) {
              var K = J[--y];
              switch(K.tagName.toUpperCase()) {
                case "A":
                  if (B) {
                    (2 > L || l) && b(K);
                    var u = vb(K);
                    for (F = u.length; F;) {
                      l || d(u[--F]);
                    }
                  }
                  ic ? K.setAttribute("href", "javascript:void(0)") : K.onclick = Zb;
                  break;
                case "B":
                  B && d(K);
              }
            }
          }
        }
        Da.length ? (setInterval(Cb, 500), 2 === L ? ha([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : ha([".pbChrCS", "background-position:0 -51px"])) : Cb = null;
        N && (2 === L ? ha([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + r + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + r + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + r + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + r + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + r + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + r + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        r + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + r + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + r + "pbLCD/x3_a90.png)"]) : ha([".pbAlp1", "background-image:url(" + r + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + r + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + r + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + r + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + r + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        r + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + r + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + r + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + r + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Za && (oc.onclick = function(a) {
    if (ab) {
      return ab = !1, a.preventDefault(), !1;
    }
  });
  6 === q && (new nb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(D);
  var eb = aa[7], Fb = aa[30], cc = aa[113], Fa = I(8337) + I(8331), Ja = I(160), gc = I(8194), ec = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), fc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), dc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Fb + aa[31]).split(""), T = 
  [], Ga, Ha = r + "pbFont/" + (9 > q ? "x3mask_ie.png" : "x3mask.png"), Db = 8 > M && !1, db;
  Pb(function(a) {
    if (a && !db) {
      var b = D.all || qa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        fa(c, "pbList") ? Ia(c) : fa(c, "pbFont") && Ia(c, !0);
      }
      T.length && (g("[pbList] " + T.length / 2 + " elements found. WebFont test start."), Ea());
      db = !0;
    }
  });
  Sb.prettify = Ia;
})(PB100, ua, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

