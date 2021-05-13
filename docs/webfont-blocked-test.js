ua={};ua.conpare = function(u, g) {
  var A = 0, q, H;
  u = (u + "").split(".");
  g = (g + "").split(".");
  var w = u.length;
  for (q = g.length; "0" === u[w - 1];) {
    --w;
  }
  for (; "0" === g[q - 1];) {
    --q;
  }
  for (H = w < q ? w : q; A < H; ++A) {
    var R = u[A] - 0;
    var M = g[A] - 0;
    if (R !== M) {
      return R > M ? 1 : -1;
    }
  }
  return w > q ? 1 : w === q ? 0 : -1;
};
(function(u, g, A, q, H, w, R) {
  function M(f, r, n) {
    n = w(f.split(r)[1]);
    return 0 <= n ? n : 0;
  }
  function b(f, r) {
    return 0 <= f.indexOf(r);
  }
  function ma(f) {
    return b(f, "Linux armv") || b(f, "Linux aarch") || b(f, "Linux i686") || b(f, "Linux x86_64");
  }
  function V(f, r) {
    for (var n in r) {
      if (n === f) {
        return !0;
      }
    }
  }
  function c(f, r) {
    var n = "", I = -1, W;
    if (f = f.split(r)[1]) {
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
    for (var f = arguments, r = 1, n = f[0], I; r < f.length; ++r) {
      0 > oa(n, I = f[r]) && (n = I);
    }
    return n;
  }
  function pa(f) {
    return f === f + "" ? f : f === f - 0 ? "" + f : f.min && f.max ? f.min + "~" + f.max : f.min ? f.min + "~" : "~" + f.max;
  }
  function qa(f) {
    return f === f + "" ? w(f) : f;
  }
  var oa = u.conpare, a = q.userAgent, x = q.appVersion, ca = w(x) || 0, l = q.platform, N = A.documentElement, ra = N && N.style, y = A.documentMode, da = H.width;
  H = H.height;
  var sa = g.HTMLAudioElement, ta = g.performance, va = g.Int8Array, ea = void 0 !== g.ontouchstart, O = c(x, "Version/") || c(a, "Version/"), wa = g.operamini, P = !wa && g.opera, Fa = P && (P.version && "function" === typeof P.version ? P.version() : na(c(a, "Opera "), O, ca)), xa = g.opr, S = !P && (A.all || y);
  y = S && (y ? y : g.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : g.attachEvent ? 5 : 4);
  N = !S && N.msContentZoomFactor;
  var X = !N && g.chrome, Q = !S && function(f) {
    for (f in ra) {
      if (0 === f.indexOf("Moz")) {
        return !0;
      }
    }
  }(), fa = b(a, "UCWEB"), Ga = fa && c(a, " U2/"), Ha = fa && c(a, "; wds "), ha = c(a.split("_").join("."), "; iPh OS "), p = c(a, "; Adr "), Y = b(x, "YJApp-ANDROID"), D = b(l, "Android") || Q && b(x, "Android") || Y;
  p = c(l, "Android ") || c(x, "Android ") || c(a, "Android ") || p;
  var ia = b(l, "Linux"), ya = "MacIntel" === l && void 0 !== q.standalone, ja = Q && c(a, "Goanna/"), F = !ja && Q && (c(a, "rv:") || c(a.substr(a.indexOf(") Gecko/") - 11), "; ")), Ia = c(a, "Firefox/"), k = c(a, "Opera/"), Ja = g.FNRBrowser, J = M(a, "AppleWebKit/"), T = c(a, "Chrome/"), za = c(a, "OPR/"), Ka = c(x, "KHTML/"), La = c(a.toLowerCase(), "iris");
  c(a, "FxiOS/");
  c(a, "CriOS/");
  c(a, "EdgiOS/");
  var Ma = c(a, "Silk/"), U = M(a, "SamsungBrowser/"), Aa = !U && function() {
    for (var f = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    r, n = f.length; r = f[--n];) {
      if (b(a, r)) {
        return 2 > w(O) ? O : 0.9;
      }
    }
    f = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (n = f.length; r = f[--n];) {
      if (b(a, r)) {
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
  var ka = !y && A.registerElement, Na = !y && A.execCommand, Oa = ia && ka && "11.0.696.34" === T, Pa = g._firefoxTV_playbackStateObserverJava, Qa = M(a, "diordnA ");
  if ("Nitro" === l) {
    var d = "NDS";
  } else {
    if ("Nintendo DSi" === l) {
      d = "NDSi";
      var e = k;
    } else {
      if ("New Nintendo 3DS" === l || b(a, "iPhone OS 6_0") && 320 === da && 240 === H) {
        d = "New3DS", e = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === l) {
          d = "N3DS", e = c(a, "Version/"), J = 535;
        } else {
          if ("Nintendo Swicth" === l) {
            d = "Swicth", e = c(x, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === l) {
              d = "WiiU", e = c(x, "NintendoBrowser/"), J = c(x, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === l) {
                d = "Wii";
                e = c(a, "Wii; U; ; ");
                var t = d;
              } else {
                if (k = c(a, "PlayStation Vita ")) {
                  d = "PSVita", e = k, t = d;
                } else {
                  if (k = c(a, "(PlayStation Portable); ")) {
                    d = "PSP";
                    e = k;
                    var Ca = 3.3;
                    t = d;
                  } else {
                    if (k = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      if (d = "PS3", e = k, t = d, 0 > oa("4.10", k)) {
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
                            t = d;
                            var aa = !0;
                          } else {
                            if (0 === l.indexOf("iP") || ha || L || ya) {
                              if (L) {
                                switch(e = L, K.substr(0, 4)) {
                                  case "iPho":
                                    var E = "iPhone";
                                    c(K, E);
                                    var B = !0;
                                    break;
                                  case "iPad":
                                    E = "iPad";
                                    c(K, E);
                                    var z = !0;
                                    break;
                                  case "iPod":
                                    E = "iPod";
                                    c(K, E);
                                    var Da = !0;
                                }
                              } else {
                                ha ? e = ha : (e = c(x.split("_").join("."), "OS "), V("isSecureContext", g), V("enableWebGL", g), V("sameOrigin", g));
                                if (!e || Ja) {
                                  e = g.PointerEvent ? 13 : g.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : q.sendBeacon ? 11.3 : g.WebAssembly ? 11.2 : g.HTMLMeterElement ? 10.3 : g.Proxy ? 10.2 : g.HTMLPictureElement ? 9.3 : R.isNaN ? 9.2 : g.SharedWorker ? ta && ta.now ? 8.0 : 8.4 : Na ? 7.1 : g.webkitURL ? 6.1 : g.Worker ? 5.1 : va ? 4.3 : sa ? 4.1 : 3.2;
                                }
                                var C = da === 1.5 * H || 1.5 * da === H;
                                0 === l.indexOf("iPhone") ? (E = "iPhone", B = !0) : 0 === l.indexOf("iPad") || ya ? (E = "iPad", z = !0) : 0 === l.indexOf("iPod") && (E = "iPod", Da = !0);
                              }
                              !L && (q.standalone || (z || 12 > e) && V("webkitFullscreenEnabled", A) || 11 <= e && 13 > e && q.mediaDevices) ? (h = "SafariMobile", t = "Safari") : h = "iOSWebView";
                              d = "iOS";
                              m = e;
                            } else {
                              if (b(a, "Kobo")) {
                                d = "Kobo", h = "AOSP", m = 2.2, t = h, D = !0;
                              } else {
                                if (b(a, "EBRD")) {
                                  d = "SonyReader", h = "AOSP", m = 2.2, t = h;
                                } else {
                                  if (k = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    d = "ChromeOS", e = k;
                                  } else {
                                    if (void 0 !== g.onmoztimechange) {
                                      d = "FirefoxOS", e = 18.1 > F ? "1.0.1" : 19 > F ? 1.1 : 27 > F ? 1.2 : 29 > F ? 1.3 : 31 > F ? 1.4 : 33 > F ? 2.0 : 35 > F ? 2.1 : 38 > F ? 2.2 : 45 > F ? 2.5 : 2.6, b(a, "Mobile") ? B = !0 : b(a, "Tablet") ? z = !0 : b(a, "TV");
                                    } else {
                                      if (g.palmGetResource) {
                                        d = "webOS", e = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), t = d, b(a, "webOS.TV") || b(a, "/SmartTV") || (B = !0);
                                      } else {
                                        if (k = c(a, "Tizen ")) {
                                          d = "Tizen", e = k, h = t = "Samsung", m = U, B = !0;
                                        } else {
                                          if (k = c(a, "Windows Phone ") || c(x, "Windows Phone OS ") || Ha) {
                                            var ba = !0;
                                            e = k;
                                            B = !0;
                                          } else {
                                            if (N && "ARM" === l) {
                                              ba = !0, e = 10, B = !0;
                                            } else {
                                              if (S && b(x, "ZuneWP")) {
                                                ba = !0, e = 11 === y ? 8.1 : 10 === y ? 8 : 9 === y ? 7.5 : 7 === y ? 7 : "?", B = !0;
                                              } else {
                                                if (b(a, "FOMA;")) {
                                                  d = "FeaturePhone", B = !0;
                                                } else {
                                                  if (b(a, "SoftBank;")) {
                                                    d = "FeaturePhone", B = !0;
                                                  } else {
                                                    if (b(a, "KFMUWI")) {
                                                      var G = !0;
                                                      e = 6.3;
                                                      var v = z = !0;
                                                    } else {
                                                      if (b(a, "KFKAWI")) {
                                                        G = !0, e = 6, v = z = !0;
                                                      } else {
                                                        if (b(a, "KFSUWI") || b(a, "KFAUWI") || b(a, "KFDOWI")) {
                                                          G = !0, e = 5, v = z = !0;
                                                        } else {
                                                          if (b(a, "KFGIWI")) {
                                                            G = !0, e = 5, v = z = !0;
                                                          } else {
                                                            if (b(a, "KFARWI") || b(a, "KFSAWA") || b(a, "KFSAWI")) {
                                                              G = !0, e = 5 <= w(p) ? 5 : 4, v = z = !0;
                                                            } else {
                                                              if (b(a, "KFSOWI") || b(a, "KFTHWA") || b(a, "KFTHWI") || b(a, "KFAPWA") || b(a, "KFAPWI")) {
                                                                G = !0, e = 3, v = z = !0;
                                                              } else {
                                                                if (b(a, "KFOT") || b(a, "KFTT") || b(a, "KFJWA") || b(a, "KFJWI")) {
                                                                  G = !0, e = 2, v = z = !0;
                                                                } else {
                                                                  if (b(a, "Kindle Fire")) {
                                                                    G = !0, e = 1, v = z = !0;
                                                                  } else {
                                                                    if (k = c(a, "Kindle/")) {
                                                                      d = "Kindle", e = k, h = "AOSP", m = 2.2, t = h;
                                                                    } else {
                                                                      if (Pa) {
                                                                        G = !0, e = p || Qa, v = !0;
                                                                      } else {
                                                                        if (b(a, "AmazonWebAppPlatform") || b(a, "; AFT")) {
                                                                          G = !0, e = p, v = !0;
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
                                                                                        d = "BlackBerry", e = O, B = !0;
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
                                                                                                if (D && Q) {
                                                                                                  b(a, "Android 4.4;") ? C = {min:2.3} : 4 <= w(p) ? C = p : C = {min:2.2}, e = C;
                                                                                                } else {
                                                                                                  if (D && P) {
                                                                                                    p ? C = p : C = {min:1.6}, e = C, b(a, "Tablet") ? z = !0 : B = !0;
                                                                                                  } else {
                                                                                                    if (p) {
                                                                                                      e = p, D = !0;
                                                                                                    } else {
                                                                                                      if (ia && ea || Y || Z) {
                                                                                                        var la = !0;
                                                                                                        U ? C = {min:4.4} : X && !Ba || xa || za ? C = {min:4} : (C = p = void 0 !== ra.touchAction ? {min:5} : ka ? 4.4 : va ? q.connection ? g.searchBoxJavaBridge_ || X ? R.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= J ? 3 : 533 <= J ? sa ? 2.3 : 2.2 : 530 <= J ? 2.0 : 1.5, Aa && (h = "Samsung", m = Aa));
                                                                                                        e = C;
                                                                                                        D = !0;
                                                                                                      } else {
                                                                                                        Oa ? (e = {min:5}, la = D = !0) : ia && (b(a, "Ubuntu") ? d = "Ubuntu" : (k = c(a, "Mint/")) ? (d = "Mint", e = k) : (k = c(a, "Fedora/")) ? (d = "Fedora", e = k) : d = b(a, "Gentoo") ? "Gentoo" : "Linux");
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
  G || D && la && Ma ? d = "FireOS" : D && (d = d || "Android");
  ba && (d = "WindowsPhone");
  h || (v = v || D, P ? (h = v || aa || B || z ? "PrestoMobile" : "Presto", m = Fa) : S ? ((C = M(x, "Trident/") + 4) && C !== y && (t = "IEHost"), 10 <= y && 6.2 <= e && 7 > e && 0 === screenY && innerHeight + 1 !== outerHeight && (t = "ModernIE"), aa || B || z || Da ? h = "TridentMobile" : Ea && 5 <= y ? (h = "Tasman", t = "MacIE") : (h = "Trident", Ea && (t = "MacIE")), m = y) : N ? (h = ba ? "EdgeMobile" : "EdgeHTML", m = c(x, "Edge/")) : ja ? (h = "Goanna", m = ja) : Q ? (h = v ? "Fennec" : 
  "Gecko", m = F || Ia) : U ? (h = "Samsung", m = U) : (k = Ca || c(a, "NetFront/")) ? (h = "NetFront", m = k) : (k = c(a, "iCab")) ? (h = "iCab", m = k) : (k = na(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || wa && O) ? (h = "OperaMini", m = k, d || (b(a, "iPhone") ? E = "iPhone" : b(a, "iPad") ? E = "iPad" : b(a, "iPod") && (E = "iPod"), E && (d = "iOS"))) : fa ? (h = "UCWEB", m = Ga) : Ka ? (h = "KHTML", m = ca) : D && Ba ? (h = "AOSP", m = p) : X || xa || za ? (h = v ? "ChromiumMobile" : "Chromium", 
  m = T) : D && ka ? (h = "ChromeWebView", m = 5 > w(p) ? p : T) : D && (O || la) ? (h = "AOSP", m = p) : T ? (h = v ? "ChromiumMobile" : "Chromium", m = T) : J && (h = "WebKit", m = J));
  d && (u.PLATFORM = d, e ? (u.PLATFORM_VERSION = pa(e), u[d] = qa(e)) : u[d] = !0);
  h && (u.ENGINE = h, m ? (u.ENGINE_VERSION = pa(m), u[h] = qa(m)) : u[h] = !0, t || (t = h));
})(ua, window, document, navigator, screen, parseFloat, Number);


PB100 = {};
(function(Vb, u, M, Wb, y, lb, da, mb, Na, Xb, U, pc) {
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
  function Oa(a) {
    wa.length || (ea = setInterval(va, nb));
    wa.push({f:a, g:++ob});
    return ob;
  }
  function Yb() {
    ea && (pb(), ea = setInterval(va, nb));
  }
  function pb() {
    ea && (ea = clearInterval(ea));
  }
  function la() {
    for (var a, b = 0, c = new U - 0; b < Q.length;) {
      c < Q[0].t ? ++b : (a = Q.splice(b, 1)[0], a.f(a.p));
    }
    Y = Q.length ? Na(la, ma) : 0;
  }
  function Zb() {
    Y && (qb(), Y = Na(la, ma));
  }
  function qb() {
    Y && (Y = Xb(Y));
  }
  function Z(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function fa(a, b) {
    rb && !na.length && C(sb);
    na.push(a, b);
  }
  function sb() {
    var a = na, b;
    for (na = []; b = a.shift();) {
      Z(b, a.shift());
    }
  }
  function Pa(a) {
    var b;
    Qa && (b = Qa(a));
    Z(xa, a);
    onload = ha;
    xa = Pa = Qa = onload = null;
    return b;
  }
  function tb() {
    var a = 9 === ia.offsetWidth;
    Ra !== a && fa(ub, Ra = a);
  }
  function ya() {
    return Sa = oa ? Ta ? 2 : Ua ? 3 : 1 : 0;
  }
  function pa(a) {
    var b = b || y;
    return $b ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function aa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function vb(a) {
    var b = a.children, c = 0, d, f;
    if (!b) {
      for (b = [], a = a.childNodes, d = a.length; c < d; ++c) {
        1 === (f = a[c]).nodeType && (b[b.length] = f);
      }
    }
    return b;
  }
  function za(a, b) {
    var c = y.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function H(a, b, c, d, f) {
    function n() {
      if (c) {
        var w = h, A;
        for (A in c) {
          switch(A) {
            case "class":
            case "className":
              w.className = c[A];
              break;
            default:
              w.setAttribute(A, c[A]);
          }
        }
      }
      if (d) {
        w = h.style;
        for (var I in d) {
          w[I] = d[I];
        }
      }
      f && !e && h.appendChild(y.createTextNode(f));
    }
    var k = 9 > r, e = "style" === b;
    if (e) {
      if (Va) {
        var h = za("style");
        h.type = "text/css";
        h.appendChild(y.createTextNode(""));
        h.innerHTML = f;
      } else {
        h = za("div", 'a<style type="text/css">' + f + "</style>").lastChild;
      }
    } else {
      h = za(b);
    }
    k || n();
    Aa ? (2 === Aa && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(h, a) : (a.parentElement || a.parentNode).appendChild(h), Aa = 0) : a.appendChild(h);
    k && n();
    return h;
  }
  function wb(a, b) {
    if (9 > E) {
      if (b) {
        for (var c = b.split(";"), d; d = c.shift();) {
          d = d.split(":"), a.style[d[0]] = d[1];
        }
      } else {
        a.removeAttribute("style");
      }
    } else {
      a.style.cssText = b;
    }
  }
  function W(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function X(a, b) {
    var c;
    if (!W(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function Ba(a) {
    if (W(D, a)) {
      var b = D.className.split(" ");
      b.splice(b.indexOf(a), 1);
      D.className = b.join(" ");
    }
  }
  function xb(a) {
    8 <= E && 9 > E ? H(Ca, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + Wa(a)}) : 7.2 > E || (a = H(Ca, "style", {type:"text/css", media:"all"}, 0, a), Xa = a.sheet || a.styleSheet);
  }
  function yb(a) {
    for (var b = Xa, c, d, f = "", n; a.length;) {
      c = a.shift(), d = a.shift(), n = c + "{" + d + "}", b ? b.addRule ? b.addRule(c, d) : b.insertRule && b.insertRule(n, b.cssRules.length) : f += n;
    }
    f && xb(f);
  }
  function zb(a) {
    function b(f) {
      d = ac(d);
      Da = f;
      c.onload = c.onerror = ha;
      C(a, f);
    }
    if (V(Da)) {
      g("[dataUriTest] already done : " + Da), C(a, Da);
    } else {
      if (8 > r) {
        g("[dataUriTest] trident < 8 : false"), C(a, !1);
      } else {
        g("[dataUriTest] start!");
        var c = new Image, d = C(function() {
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
  function Ab(a, b, c, d, f, n, k) {
    function e() {
      var m = '1.6em "' + b + '"';
      g("[webFontTest] testByNativeFontLoaderAPI start.");
      y.fonts.load(m).then(function(t) {
        g("[webFontTest] fonts.check() : " + y.fonts.check(m, "i") + ", fonts.length : " + t.length);
        I(b) ? C(a, R) : (g("[webFontTest] mesureWebFont() : false"), w(!0));
      }, function(t) {
        g("[webFontTest] fonts.load() rejected! " + t);
        zb(S);
      });
    }
    function h(m) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (z = new U - 0, !1) : m < new U - z;
    }
    function w(m) {
      m && (g("[webFontTest] testWebFont start."), z = new U - 0);
      I(b) ? (g("[webFontTest] testWebFont mesurement success : " + R), a(R)) : h(p) ? (g("[webFontTest] testWebFont timeout!"), x ? a(0) : 9 > r ? C(a, 0) : zb(S)) : C(w);
    }
    function A() {
      var m = -1, t;
      A = null;
      B = ["sans-serif", "serif"];
      l = H(D, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (N = {}; t = B[++m];) {
        l.style.fontFamily = t, N[t] = l.offsetWidth;
      }
    }
    function I(m) {
      var t = 0, J = -1, Ya, Bb = 0;
      A && A();
      for (D.appendChild(l); Ya = B[++J];) {
        if (l.style.fontFamily = '"' + m + '",' + Ya, l.offsetWidth !== N[Ya]) {
          t = 1;
          break;
        }
      }
      !r && t && f && (l.innerHTML = f, m = l.offsetWidth, l.innerHTML = n, Bb = m === l.offsetWidth ? 1 : 0, l.innerHTML = "mmmmmmmmmmlli");
      aa(l);
      return R = t + Bb;
    }
    function S(m) {
      g("[webFontTest] testDataUriComplete : " + m);
      (x = m) ? v(!0) : a(0);
    }
    function v(m) {
      m && (z = new U - 0);
      for (t in c) {
        if (I(t)) {
          g("[webFontTest] success! " + t);
          q = H(D, "div", {"aria-hidden":"true", className:d, id:d});
          m = c[t];
          var t = Xa, J = Cb.all || 0;
          t ? t.addImport ? t.addImport(m, J) : t.insertRule && t.insertRule('@import "' + m + '"', J) : xb('@import "' + m + '"');
          Cb.all = ++J;
          C(F, !0);
        } else {
          h(100) ? (g("[webFontTest] timeout! " + t), delete c[t], C(v, !0)) : C(v);
        }
        return;
      }
      a(0);
    }
    function F(m) {
      m && (g("[webFontTest] testImportedCssReady start!"), b = b.replace(Db, ""), g("[webFontTest] targetWebFontName : " + b), z = new U - 0);
      1 < q.offsetWidth ? (g("[webFontTest] testImportedCssReady ended."), aa(q), p = 100, C(w, !0)) : h(p) ? (g("[webFontTest] testImportedCssReady timeout!"), aa(q), a(0)) : C(F);
    }
    var p = k || 5E3, z, x, l, q, B, N, R;
    b = Db + b;
    g("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var m;
      if (u.MeeGo || 2.2 > u.AOSP || u.WebOS || u.UCWEB || 10 > u.TridentMobile || u.NDS || u.NDSi || u.N3DS) {
        return !1;
      }
      if (6 > r) {
        return !0;
      }
      var t = H(Ca, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), J = (J = t.sheet || t.styleSheet) ? (m = 10 <= r ? J.cssRules : J.rules || J.cssRules) && (m = m[0]) ? m.cssText : J.cssText || "" : "";
      m = 0 < J.indexOf("src") && 0 === J.indexOf("@font-face");
      aa(t);
      return m;
    })() ? (g("[webFontTest] maybeCanWebFont() : true"), !y.fonts || 603 > Va ? (g("[webFontTest] No native font loader."), w(!0)) : (g("[webFontTest] Use Native font loader."), e())) : (g("[webFontTest] maybeCanWebFont() : false"), C(a, 0));
  }
  function Eb(a, b) {
    a + "" === a && ("a" === a.charAt(2) && (b = !0, a = a.substr(0, 2)), a = "CS" === a ? 9 > r || 9.5 > E || K && !Ea ? 1 : 132 : parseInt(a, 16));
    b && (50 === a && (a = 128), 102 < a && 108 > a && (a += 24));
    return -12 * (a - 1);
  }
  function Fb() {
    Za = !Za;
    for (var a = -1, b; b = $a[++a];) {
      b.style.display = Za ? "" : "none";
    }
  }
  function bc(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Fa() {
    Fa = null;
    cc(ab, "PB-100", {"PB-100_canTTF":L + "pbFont/ttf.css", "PB-100_canWOFF":L + "pbFont/woff.css", "PB-100_canEOT":L + "pbFont/eot.css", "PB-100_canSVG":L + "pbFont/svg.css"}, "pbFont-testCssReady", Ga, "i", 5E3);
  }
  function ab(a) {
    Ha = a;
    g("[pbList] WebFont test result : " + !!a);
    a || Gb ? bb() : qa ? Hb(!0) : V(qa) ? bb() : (g("[pbList] Need imageTest " + Ia), dc(Hb, Ia));
  }
  function Hb(a) {
    a ? (g("[pbList] Fallback start!"), X(D, "pbList-noWebFont"), 9.5 > E || K && !Ea || 5.5 === r || (2 === O ? yb([".pbList font:after", "content:url(" + Ia + ")"]) : yb([".pbList font", "background-image:url(" + Ia + ")"]))) : g("[pbList] image disabled!");
    bb();
  }
  function bb() {
    for (ab = Ab = null; T.length;) {
      Ja(T.shift(), T.shift());
    }
    g("[pbList] complete.");
  }
  function Ja(a, b) {
    function c(n) {
      n = n.childNodes;
      for (var k = -1, e; e = n[++k];) {
        switch(e.nodeType) {
          case 1:
            c(e);
            break;
          case 3:
            e.data && e.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && d.push(e);
        }
      }
    }
    var d = [];
    if (ab) {
      -1 === T.indexOf(a) && (T.push(a, b), cb && Fa && Fa());
    } else {
      var f = T.indexOf(a);
      0 <= f && T.splice(f, 2);
      for (c(a); a = d.shift();) {
        f = a.data, 2 !== Ha && (f = f.split(Ga).join(Ib)), b ? a.data = f : ec(f.split("\r").join("").split("&yen;").join(fc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(db).split("&amp;").join("&"), a);
      }
    }
  }
  function ec(a, b) {
    function c(l, q) {
      for (var B = ""; q;) {
        q & 1 && (B += l), q >>= 1, l += l;
      }
      return B;
    }
    function d(l, q, B) {
      for (var N, R = -1, m, t; N = q[++R];) {
        for (; 0 <= (m = l.indexOf(N));) {
          t = N.length, l = l.substr(0, m) + c(B, t) + l.substr(m + t);
        }
      }
      return l;
    }
    function f(l) {
      var q = da(l), B = "" + q;
      return 0 < q && q === q | 0 && (q = l.indexOf(B) + B.length, q <= l.length) ? q : 0;
    }
    var n = " area line str cmd fnc syb".split(" "), k = [], e = "", h, w = -1, A, I, S;
    if (function(l) {
      var q = l.indexOf("P");
      if (-1 === q) {
        return !1;
      }
      q = da(l.charAt(q + 1));
      return 0 <= q && 9 >= q;
    }(a)) {
      e = c("+", a.length);
    } else {
      for (0 <= (h = f(a)) && (e = c("|", h), w = h, --w); h = a.charAt(++w);) {
        h === db || A ? (e += "~", h === db && (A = !A)) : e += h;
      }
      e = d(e, gc, "^");
      e = d(e, hc, "{");
      e = d(e, ic, "}");
    }
    w = 0;
    for (A = a.length; w < A; ++w) {
      h = a.charAt(w);
      var v = h === Jb, F = " " === h;
      h = v ? " " : h;
      var p = e.charAt(w), z = (I = x) && v, x = "|" === p;
      p = n["+|~{}^".indexOf(p) + 1];
      "\n" !== h ? (Ha || !qa || Gb ? (2 === Ha && a.substr(w, 2) === Ga && (h = Ga, ++w), F = F && "str" === p ? ' class="pbList-strsp"' : v ? "" : !F && p ? ' class="pbList-' + p + '"' : "") : (v = ba.indexOf(h), v = -1 === v ? "" : ba.indexOf(h).toString(16).toUpperCase(), v = (v = 1 === v.length ? "0" + v : v) ? "pbChr" + v : "", F = F && "str" === p ? ' class="pbList-strsp"' : F || !v ? "" : p ? ' class="' + (v ? v + " " : "") + "pbList-" + p + '"' : ' class="' + v + '"'), z ? (h = 6 <= r || 
      8 > r ? " " : Jb, F = "") : x && (1.9 > K || 8 === (E | 0)) && (x && !I && (S = 4 - (da(a.substr(w)) + "").length), F += ' style="position:absolute;top:0;left:' + 12 * S + 'px"', ++S), k.push("<font" + F + ">" + h + "</font>")) : (I = x = !1, k.push(h));
    }
    k = k.join("");
    if (1 === b.nodeType) {
      b.innerHTML = k;
    } else {
      for (n = za("font", k); k = n.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(k, b);
      }
      aa(b);
    }
  }
  var ha = Wb, ja = [], $b = !!y.getElementsByTagName, D = y.body, ra = D.style, r = u.Trident || u.TridentMobile, sa = u.Tasman, Kb = u.EdgeHTML || u.EdgeMobile, E = u.Presto || u.PrestoMobile, K = u.Gecko || u.Fennec, Ea = K && 0 <= u.conpare(u.ENGINE_VERSION, "1.9.1"), Ka = u.Goanna, Va = u.WebKit, eb = u.SafariMobile || u.iOSWebView, jc = u.OperaMini && u.UCWEB, fb = u.Win32 || u.Win64, kc = da(lb.userAgent.split("Edg/")[1]), lc = da(lb.appVersion.split("Trident/")[1]) + 4;
  r || sa || (new mb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Lb = y.scripts || pa("script"), Mb = (sa ? "ie5mac" : 5.5 > r ? "ie5win" : 6 > r ? "ie55" : 10 > r ? "ie" + (r | 0) : 9.5 > E || K && !Ea ? "legacy" : "modern") + ".css", xa = [], Ra, Sa = 0, gb, qa, O, mc = V(ra.transform) ? "transform" : V(ra["-o-transform"]) ? "-o-transform" : V(ra["-ms-transform"]) ? "-ms-transform" : V(ra["-moz-transform"]) ? "-moz-transform" : V(ra["-webkit-transform"]) ? "-webkit-transform" : "";
  var L = Lb[Lb.length - 1].src.split("/");
  --L.length;
  (L = L.join("/")) && (L += "/");
  var P = Array.prototype;
  P.pop || (P.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  P.push || (P.push = function() {
    for (var a = arguments, b = 0, c = a.length, d = this.length; b < c; ++b) {
      this[d + b] = a[b];
    }
    return this.length;
  });
  P.shift || (P.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  P.splice || (P.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, f = this.slice(a, a + b), n;
    if (0 < d) {
      var k = this.length - 1;
      for (n = a + b; k >= n; --k) {
        this[k + d] = this[k];
      }
    } else {
      if (0 > d) {
        k = a + b;
        for (n = this.length; k < n; ++k) {
          this[k + d] = this[k];
        }
        this.length += d;
      }
    }
    k = 2;
    for (n = c.length; k < n; ++k) {
      this[k - 2 + a] = c[k];
    }
    return f;
  });
  P.indexOf || (P.indexOf = function(a, b) {
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
  var hb, ib = [];
  ja.push(function() {
    ka(function() {
      (hb = M.logger || y.logger || y.getElementById("logger")) || alert("#logger not found!");
      for (hb ? g = function(a) {
        H(hb, "P", null, null, a);
      } : M.console && (g = console.log); ib.length;) {
        g(ib.shift());
      }
    });
  });
  g = function(a) {
    ib.push(a);
  };
  g("[g_assetUrl] " + L);
  var wa = [], nb = 999, ob = 0, ea;
  if (5 > r || sa) {
    M._wdb_onlooptimer = va, va = "_wdb_onlooptimer()";
  }
  ja.push(function() {
    6.1 > eb && Nb(Yb);
    La(pb);
  });
  var C = function(a, b, c) {
    Q.length || (Y = Na(la, ma));
    Q.push({f:a, p:b, g:++Ob, t:new U - 0 + (ma < c ? c : ma)});
    return Ob;
  };
  var ac = function(a) {
    for (var b = Q.length, c; c = Q[--b];) {
      if (c.g === a) {
        Q.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var Q = [], ma = 64, Ob = 0, Y;
  if (5 > r || sa) {
    M._wdb_ontimer = la, la = "_wdb_ontimer()";
  }
  ja.push(function() {
    6.1 > eb && Nb(Zb);
    La(qb);
  });
  var ca = M.matchMedia, na = [], rb, ia;
  xa.push(function() {
    ia = H(D, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    ka(function() {
      rb = !0;
      na.length && C(sb);
    });
  });
  var ka = function(a) {
    xa.push(a);
  };
  var La = function(a) {
    Pb.push(a);
  };
  var Pb = [], Qa = M.onload, Qb = M.onunload;
  onload = Pa;
  onunload = function(a) {
    var b;
    Qb && (b = Qb(a));
    Z(Pb, a);
    onunload = ha;
    return b;
  };
  var Rb = function(a) {
    ub.push(a);
  };
  var ub = [];
  ka(function() {
    tb();
    Oa(tb);
  });
  var nc = function(a) {
    ta.push(a);
  };
  var ta = [], oa, Ua, Ta;
  if (10 <= r || Kb || fb && kc) {
    ca("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      oa = Ua = a.matches;
      fa(ta, ya());
    }), ca("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      oa = Ta = a.matches;
      fa(ta, ya());
    }), ca("(-ms-high-contrast:active)").addListener(function(a) {
      oa = a.matches;
      fa(ta, ya());
    });
  } else {
    if (10 > r || fb && (44 <= K || Ka)) {
      var Ma = function() {
        function a(f) {
          return "#ffffff" === f || "rgb(255,255,255)" === f;
        }
        var b = y.defaultView, c = Sa, d = b ? b.getComputedStyle(ia, null) : ia.currentStyle;
        b = (d && d.color || "").split(" ").join("");
        d = (d && d.backgroundColor || "").split(" ").join("");
        if (b) {
          return oa = "#123456" !== b && "rgb(18,52,86)" !== b, Ua = ("#000000" === b || "rgb(0,0,0)" === b) && a(d), Ta = a(b) && ("#000000" === d || "rgb(0,0,0)" === d), c !== ya() && fa(ta, Sa), !0;
        }
      };
      ka(function() {
        ia.style.color = "#123456";
        ia.style.backgroundColor = "#123456";
        60 > K || Ka ? Ma() : Ma() && Oa(Ma, 1E3);
        Ma = null;
      });
    }
  }
  var oc = [];
  ca && ca("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    fa(oc, a.matches);
  });
  var jb = [];
  M.onbeforeprint ? (onbeforeprint = function() {
    Z(jb, !0);
  }, onafterprint = function() {
    Z(jb, !1);
  }, La(function() {
    onbeforeprint = onafterprint = ha;
  })) : ca && ca("print").addListener(function(a) {
    Z(jb, a.matches);
  });
  var Nb = function(a) {
    Sb.push(a);
  };
  var Sb = [], kb = M.onscroll, Tb = 0;
  onscroll = function(a) {
    var b;
    kb && (b = kb(a));
    Pa || Z(Sb);
    return b;
  };
  (1 > K || 1.2 <= K && 1.8 > K || 7.2 >= E) && Oa(function() {
    var a = M.scrollY || D.scrollTop;
    Tb !== a && (Tb = a, onscroll());
  });
  La(function() {
    onscroll = kb = ha;
  });
  pa("html");
  var Ca = pa("head")[0];
  var Aa, Wa;
  (function(a) {
    function b(d) {
      for (var f = c, n = "", k = 0, e; e = d.length;) {
        4 > e && (k = [0, 2, 1, 0][e]), e = d.charCodeAt(0) << 16 | (1 < e ? d.charCodeAt(1) : 0) << 8 | (2 < e ? d.charCodeAt(2) : 0), n += [f[e >>> 18], f[e >>> 12 & 63], 2 <= k ? "" : f[e >>> 6 & 63], 1 <= k ? "" : f[e & 63]].join(""), d = d.substr(3);
      }
      return n;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
    a.btoa && (b = a.btoa);
    a.btoa ? Wa = function(d) {
      return b(d).split("+").join("-").split("/").join("_").split("=").join("");
    } : Wa = b;
  })(this);
  var Xa = void 0;
  var Cb = {};
  ka(function() {
    if (Ra) {
      if (!V(O) && (O = Ka || 8 <= r || Kb || Ea || 7.2 <= E || 522 <= Va || 3 <= eb ? 2 : 6 <= E || K ? 1 : 0, !O)) {
        var a = H(D, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        O = 6 <= a.offsetWidth ? 2 : 0;
        aa(a);
      }
    } else {
      O = void 0;
    }
  });
  var Da;
  9 > r && ka(function(a) {
    a = H(D, "div");
    wb(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    gb = 1 < a.offsetHeight;
    wb(a, "");
    aa(a);
  });
  var dc = function(a, b) {
    function c() {
      if (f || !n || d.complete) {
        g("[imageTest] timer -> img.complete. img.width=" + d.width);
        var k = !!d.width;
        qa = qa || k;
        C(a, k);
        d.onerror = d.onload = ha;
        d = a = null;
      } else {
        --n, C(c);
      }
    }
    var d = new Image, f, n = 99;
    g("[imageTest] start.");
    d.onerror = function() {
      g("[imageTest] error!");
      f = !0;
    };
    d.onload = function() {
      g("[imageTest] onload.");
      f = !0;
    };
    d.src = b;
    C(c);
  };
  var cc = Ab;
  var Db = "bad_" + (new U - 0) + "_";
  10 > r || sa || y.write('<link href="' + L + Mb + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  for (11 === lc && 5 === r && H(Ca, "link", {href:L + Mb, rel:"stylesheet", type:"text/css"}); ja.length;) {
    ja.shift()();
  }
  ja = null;
  var G = String.fromCharCode, ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", G(960), ")", "(", G(234), G(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", G(9824), "\u2190", G(9829), G(9830), G(9827), G(956), "\u03a9", "\u2193", "\u2192", "%", G(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", G(9619)];
  (10 > r || fb && (44 <= K || Ka)) && nc(function(a) {
    Ba("jsHcm");
    Ba("jsHcmWob");
    Ba("jsHcmBow");
    if (a) {
      switch((mc || 9 === r || 5.5 <= r && 9 > r && gb) && X(D, "jsCanRotate"), a) {
        case 1:
          X(D, "jsHcm");
          break;
        case 2:
          X(D, "jsHcmWob");
          break;
        case 3:
          X(D, "jsHcmBow");
      }
    } else {
      Ba("jsCanRotate");
    }
  });
  var $a = [], Za, Ub;
  Rb(function(a) {
    function b(p) {
      var z = p.getAttribute("pbTip") || "", x = z.charAt(0), l = "_" === x;
      z = l ? z.charAt(2) : x;
      x = l ? "Btm" : "";
      var q = p.getAttribute("title") || "";
      n || (p.removeAttribute("pbTip"), p.removeAttribute("title"), X(p, "pbTipPos" + z.toUpperCase()), H(p, "div", {className:"pbTip" + x}, {width:q.length + f + "em"}, q));
      H(p, "div", {className:"pbTail" + x});
      k && l && (p.focus(), p.blur());
    }
    function c(p) {
      if (2 > O) {
        var z = p.getAttribute("pbGhst") || "", x = p.className, l = x.split("pbCsr")[1] || "", q = x.split("pbAlp")[1] || "";
        if ("CS" === z) {
          var B = "_";
        } else {
          B = z, 3 === B.length && (B = B.substr(0, 2)), B = ba[parseInt(B, 16)] || "~";
        }
        var N;
        l = l.split(" ")[0];
        q = da(q.split(" ")[0]);
        var R = 10 - q;
        q && 7.2 > E && (x = x.split("pbChr")[1], x = x.split(" ")[0], p.style.backgroundPosition = Eb(x, I) + "px " + -24 * (10 - q) + "px");
        z && (7.2 > E && (N = {backgroundPosition:Eb(z, I) + "px " + -24 * (10 - R) + "px"}), p.removeAttribute("pbGhst"), z = {className:"pbChr" + z + " pbAlp" + R + " pbCsr" + l}, Aa = 1, h = H(p, "b", z, N, B), d(h));
      }
      d(p);
    }
    function d(p) {
      7.2 > E && W(p, "pbChrCS") && $a.push(p);
    }
    if (a && !Ub) {
      Ub = !0;
      var f = 6 > r ? 1 : 0;
      a = pa("SAMP");
      var n = 8 === r, k = 5 <= r && 6 > r, e, h, w, A;
      gb && X(D, "pbLCD-AX");
      7.2 > E && X(D, "operaLt720");
      if (a.length) {
        for (w = -1; e = a[++w];) {
          if (W(e.parentElement || e.parentNode, "pbLCD")) {
            var I = W(e, "PB-120") || W(e, "FX-795P"), S = vb(e);
            for (e = S.length; e;) {
              var v = S[--e];
              switch(v.tagName.toUpperCase()) {
                case "A":
                  (2 > O || n) && b(v);
                  if (2 > O) {
                    var F = vb(v);
                    for (A = F.length; A;) {
                      !n && c(F[--A]);
                    }
                  }
                  jc ? v.setAttribute("href", "javascript:void(0)") : v.onclick = bc;
                  break;
                case "B":
                  2 > O && c(v);
              }
            }
          }
        }
        $a.length ? setInterval(Fb, 500) : Fb = null;
      }
    }
  });
  6 === r && (new mb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
  var db = ba[7], Ib = ba[30], fc = ba[113], Ga = G(8337) + G(8331), Jb = G(160);
  G(8194);
  var hc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ic = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), gc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ib + ba[31]).split(""), T = [], Ha, Ia = L + "pbFont/x3mask.png", Gb = 8 > E && !1, cb;
  Rb(function(a) {
    if (a && !cb) {
      var b = y.all || pa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        W(c, "pbList") ? Ja(c) : W(c, "pbFont") && Ja(c, !0);
      }
      T.length && (g("[pbList] " + T.length / 2 + " elements found. WebFont test start."), Fa());
      cb = !0;
    }
  });
  Vb.prettify = Ja;
})(PB100, ua, this, new Function, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date);

