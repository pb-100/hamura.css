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
(function(Rb, r, Q, Sb, C, hb, ca, ib, Ka, Tb, W, lc) {
  function R(a) {
    return void 0 !== a;
  }
  function ta() {
    for (var a, b = 0; b < va.length; ++b) {
      a = va[b], a.f();
    }
  }
  function La(a) {
    va.length || (da = setInterval(ta, jb));
    va.push({f:a, g:++kb});
    return kb;
  }
  function Ub() {
    da && (lb(), da = setInterval(ta, jb));
  }
  function lb() {
    da && (da = clearInterval(da));
  }
  function ia() {
    for (var a, b = 0, c = new W - 0; b < O.length;) {
      c < O[0].t ? ++b : (a = O.splice(b, 1)[0], a.f(a.p));
    }
    X = O.length ? Ka(ia, ja) : 0;
  }
  function Vb() {
    X && (mb(), X = Ka(ia, ja));
  }
  function mb() {
    X && (X = Tb(X));
  }
  function Y(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function ea(a, b) {
    nb && !ka.length && A(ob);
    ka.push(a, b);
  }
  function ob() {
    var a = ka, b;
    for (ka = []; b = a.shift();) {
      Y(b, a.shift());
    }
  }
  function Ma(a) {
    var b;
    Na && (b = Na(a));
    Y(wa, a);
    onload = fa;
    wa = Ma = Na = onload = null;
    return b;
  }
  function pb() {
    var a = 9 === ha.offsetWidth;
    Oa !== a && ea(qb, Oa = a);
  }
  function xa() {
    return Pa = la ? Qa ? 2 : Ra ? 3 : 1 : 0;
  }
  function ma(a) {
    var b = b || C;
    return Wb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Z(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function rb(a) {
    var b = a.children, c = 0, d, f;
    if (!b) {
      for (b = [], a = a.childNodes, d = a.length; c < d; ++c) {
        1 === (f = a[c]).nodeType && (b[b.length] = f);
      }
    }
    return b;
  }
  function ya(a, b) {
    var c = C.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function I(a, b, c, d, f) {
    function l() {
      if (c) {
        var v = g, y;
        for (y in c) {
          switch(y) {
            case "class":
            case "className":
              v.className = c[y];
              break;
            default:
              v.setAttribute(y, c[y]);
          }
        }
      }
      if (d) {
        v = g.style;
        for (var G in d) {
          v[G] = d[G];
        }
      }
      f && !e && g.appendChild(C.createTextNode(f));
    }
    var h = 9 > p, e = "style" === b;
    if (e) {
      if (Sa) {
        var g = ya("style");
        g.type = "text/css";
        g.appendChild(C.createTextNode(""));
        g.innerHTML = f;
      } else {
        g = ya("div", 'a<style type="text/css">' + f + "</style>").lastChild;
      }
    } else {
      g = ya(b);
    }
    h || l();
    za ? (2 === za && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(g, a) : (a.parentElement || a.parentNode).appendChild(g), za = 0) : a.appendChild(g);
    h && l();
    return g;
  }
  function sb(a, b) {
    if (9 > D) {
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
  function S(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function T(a, b) {
    var c;
    if (!S(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function Aa(a) {
    if (S(B, a)) {
      var b = B.className.split(" ");
      b.splice(b.indexOf(a), 1);
      B.className = b.join(" ");
    }
  }
  function tb(a) {
    8 <= D && 9 > D ? I(Ba, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + ub(a)}) : 7.2 > D || (a = I(Ba, "style", {type:"text/css", media:"all"}, 0, a), Ta = a.sheet || a.styleSheet);
  }
  function vb(a) {
    for (var b = Ta, c, d, f = "", l; a.length;) {
      c = a.shift(), d = a.shift(), l = c + "{" + d + "}", b ? b.addRule ? b.addRule(c, d) : b.insertRule && b.insertRule(l, b.cssRules.length) : f += l;
    }
    f && tb(f);
  }
  function wb(a) {
    function b(f) {
      d = Xb(d);
      Ua = f;
      c.onload = c.onerror = fa;
      A(a, f);
    }
    if (R(Ua)) {
      A(a, Ua);
    } else {
      if (8 > p) {
        A(a, !1);
      } else {
        var c = new Image, d = A(function() {
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
  function xb(a, b, c, d, f, l, h) {
    function e() {
      C.fonts.load('1.6em "' + b + '"').then(function() {
        G(b) ? A(a, U) : v(!0);
      }, function() {
        wb(P);
      });
    }
    function g(q) {
      return C.hidden || C.msHidden || C.mozHidden || C.webkitHidden ? (x = new W - 0, !1) : q < new W - x;
    }
    function v(q) {
      q && (x = new W - 0);
      G(b) ? a(U) : g(m) ? w ? a(0) : 9 > p ? A(a, 0) : wb(P) : A(v);
    }
    function y() {
      var q = -1, u;
      y = null;
      z = ["sans-serif", "serif"];
      k = I(B, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (L = {}; u = z[++q];) {
        k.style.fontFamily = u, L[u] = k.offsetWidth;
      }
    }
    function G(q) {
      var u = 0, H = -1, Va, yb = 0;
      y && y();
      for (B.appendChild(k); Va = z[++H];) {
        if (k.style.fontFamily = '"' + q + '",' + Va, k.offsetWidth !== L[Va]) {
          u = 1;
          break;
        }
      }
      !p && u && f && (k.innerHTML = f, q = k.offsetWidth, k.innerHTML = l, yb = q === k.offsetWidth ? 1 : 0, k.innerHTML = "mmmmmmmmmmlli");
      Z(k);
      return U = u + yb;
    }
    function P(q) {
      (w = q) ? t(!0) : a(0);
    }
    function t(q) {
      q && (x = new W - 0);
      for (u in c) {
        if (G(u)) {
          n = I(B, "div", {"aria-hidden":"true", className:d, id:d});
          q = c[u];
          var u = Ta, H = zb.all || 0;
          u ? u.addImport ? u.addImport(q, H) : u.insertRule && u.insertRule('@import "' + q + '"', H) : tb('@import "' + q + '"');
          zb.all = ++H;
          A(E, !0);
        } else {
          g(100) ? (delete c[u], A(t, !0)) : A(t);
        }
        return;
      }
      a(0);
    }
    function E(q) {
      q && (x = new W - 0);
      1 < n.offsetWidth ? (Z(n), m = 100, A(v, !0)) : g(m) ? (Z(n), a(0)) : A(E);
    }
    var m = h || 5E3, x, w, k, n, z, L, U;
    (function() {
      var q;
      if (r.MeeGo || 2.2 > r.AOSP || r.WebOS || r.UCWEB || 10 > r.TridentMobile || r.NDS || r.NDSi || r.N3DS) {
        return !1;
      }
      if (6 > p) {
        return !0;
      }
      var u = I(Ba, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), H = (H = u.sheet || u.styleSheet) ? (q = 10 <= p ? H.cssRules : H.rules || H.cssRules) && (q = q[0]) ? q.cssText : H.cssText || "" : "";
      q = 0 < H.indexOf("src") && 0 === H.indexOf("@font-face");
      Z(u);
      return q;
    })() ? !C.fonts || 603 > Sa ? v(!0) : e() : A(a, 0);
  }
  function Ab(a, b) {
    a + "" === a && ("a" === a.charAt(2) && (b = !0, a = a.substr(0, 2)), a = "CS" === a ? 9 > p || 9.5 > D || J && !Ca ? 1 : 132 : parseInt(a, 16));
    b && (50 === a && (a = 128), 102 < a && 108 > a && (a += 24));
    return -12 * (a - 1);
  }
  function Bb() {
    Wa = !Wa;
    for (var a = -1, b; b = Xa[++a];) {
      b.style.display = Wa ? "" : "none";
    }
  }
  function Yb(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Da() {
    Da = null;
    Zb(Ya, "PB-100", {"PB-100_canTTF":K + "pbFont/ttf.css", "PB-100_canWOFF":K + "pbFont/woff.css", "PB-100_canEOT":K + "pbFont/eot.css", "PB-100_canSVG":K + "pbFont/svg.css"}, "pbFont-testCssReady", Ea, "i", 5E3);
  }
  function Ya(a) {
    (Fa = a) || Cb ? Za() : na ? Db(!0) : R(na) ? Za() : $b(Db, $a);
  }
  function Db(a) {
    a && (T(B, "pbList-noWebFont"), 9.5 > D || J && !Ca || 5.5 === p || (2 === M ? vb([".pbList font:after", "content:url(" + $a + ")"]) : vb([".pbList font", "background-image:url(" + $a + ")"])));
    Za();
  }
  function Za() {
    for (Ya = xb = null; V.length;) {
      Ga(V.shift(), V.shift());
    }
  }
  function Ga(a, b) {
    function c(l) {
      l = l.childNodes;
      for (var h = -1, e; e = l[++h];) {
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
    if (Ya) {
      -1 === V.indexOf(a) && (V.push(a, b), ab && Da && Da());
    } else {
      var f = V.indexOf(a);
      0 <= f && V.splice(f, 2);
      for (c(a); a = d.shift();) {
        f = a.data, 2 !== Fa && (f = f.split(Ea).join(Eb)), b ? a.data = f : ac(f.split("\r").join("").split("&yen;").join(bc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(bb).split("&amp;").join("&"), a);
      }
    }
  }
  function ac(a, b) {
    function c(k, n) {
      for (var z = ""; n;) {
        n & 1 && (z += k), n >>= 1, k += k;
      }
      return z;
    }
    function d(k, n, z) {
      for (var L, U = -1, q, u; L = n[++U];) {
        for (; 0 <= (q = k.indexOf(L));) {
          u = L.length, k = k.substr(0, q) + c(z, u) + k.substr(q + u);
        }
      }
      return k;
    }
    function f(k) {
      var n = ca(k), z = "" + n;
      return 0 < n && n === n | 0 && (n = k.indexOf(z) + z.length, n <= k.length) ? n : 0;
    }
    var l = " area line str cmd fnc syb".split(" "), h = [], e = "", g, v = -1, y, G, P;
    if (function(k) {
      var n = k.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = ca(k.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      e = c("+", a.length);
    } else {
      for (0 <= (g = f(a)) && (e = c("|", g), v = g, --v); g = a.charAt(++v);) {
        g === bb || y ? (e += "~", g === bb && (y = !y)) : e += g;
      }
      e = d(e, cc, "^");
      e = d(e, dc, "{");
      e = d(e, ec, "}");
    }
    v = 0;
    for (y = a.length; v < y; ++v) {
      g = a.charAt(v);
      var t = g === Fb, E = " " === g;
      g = t ? " " : g;
      var m = e.charAt(v), x = (G = w) && t, w = "|" === m;
      m = l["+|~{}^".indexOf(m) + 1];
      "\n" !== g ? (Fa || !na || Cb ? (2 === Fa && a.substr(v, 2) === Ea && (g = Ea, ++v), E = E && "str" === m ? ' class="pbList-strsp"' : t ? "" : !E && m ? ' class="pbList-' + m + '"' : "") : (t = aa.indexOf(g), t = -1 === t ? "" : aa.indexOf(g).toString(16).toUpperCase(), t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "", E = E && "str" === m ? ' class="pbList-strsp"' : E || !t ? "" : m ? ' class="' + (t ? t + " " : "") + "pbList-" + m + '"' : ' class="' + t + '"'), x ? (g = 6 <= p || 
      8 > p ? " " : Fb, E = "") : w && (1.9 > J || 8 === (D | 0)) && (w && !G && (P = 4 - (ca(a.substr(v)) + "").length), E += ' style="position:absolute;top:0;left:' + 12 * P + 'px"', ++P), h.push("<font" + E + ">" + g + "</font>")) : (G = w = !1, h.push(g));
    }
    h = h.join("");
    if (1 === b.nodeType) {
      b.innerHTML = h;
    } else {
      for (l = ya("font", h); h = l.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(h, b);
      }
      Z(b);
    }
  }
  var fa = Sb, oa = [], Wb = !!C.getElementsByTagName, B = C.body, pa = B.style, p = r.Trident || r.TridentMobile, qa = r.Tasman, Gb = r.EdgeHTML || r.EdgeMobile, D = r.Presto || r.PrestoMobile, J = r.Gecko || r.Fennec, Ca = J && 0 <= r.conpare(r.ENGINE_VERSION, "1.9.1"), Ha = r.Goanna, Sa = r.WebKit, cb = r.SafariMobile || r.iOSWebView, fc = r.OperaMini && r.UCWEB, db = r.Win32 || r.Win64, gc = ca(hb.userAgent.split("Edg/")[1]), hc = ca(hb.appVersion.split("Trident/")[1]) + 4;
  p || qa || (new ib('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Hb = C.scripts || ma("script"), Ib = (qa ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 9.5 > D || J && !Ca ? "legacy" : "modern") + ".css", wa = [], Oa, Pa = 0, eb, na, M, ic = R(pa.transform) ? "transform" : R(pa["-o-transform"]) ? "-o-transform" : R(pa["-ms-transform"]) ? "-ms-transform" : R(pa["-moz-transform"]) ? "-moz-transform" : R(pa["-webkit-transform"]) ? "-webkit-transform" : "";
  var K = Hb[Hb.length - 1].src.split("/");
  --K.length;
  (K = K.join("/")) && (K += "/");
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
    var c = arguments, d = c.length - 2 - b, f = this.slice(a, a + b), l;
    if (0 < d) {
      var h = this.length - 1;
      for (l = a + b; h >= l; --h) {
        this[h + d] = this[h];
      }
    } else {
      if (0 > d) {
        h = a + b;
        for (l = this.length; h < l; ++h) {
          this[h + d] = this[h];
        }
        this.length += d;
      }
    }
    h = 2;
    for (l = c.length; h < l; ++h) {
      this[h - 2 + a] = c[h];
    }
    return f;
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
  var va = [], jb = 999, kb = 0, da;
  if (5 > p || qa) {
    Q._wdb_onlooptimer = ta, ta = "_wdb_onlooptimer()";
  }
  oa.push(function() {
    6.1 > cb && Jb(Ub);
    Ia(lb);
  });
  var A = function(a, b, c) {
    O.length || (X = Ka(ia, ja));
    O.push({f:a, p:b, g:++Kb, t:new W - 0 + (ja < c ? c : ja)});
    return Kb;
  };
  var Xb = function(a) {
    for (var b = O.length, c; c = O[--b];) {
      if (c.g === a) {
        O.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var O = [], ja = 64, Kb = 0, X;
  if (5 > p || qa) {
    Q._wdb_ontimer = ia, ia = "_wdb_ontimer()";
  }
  oa.push(function() {
    6.1 > cb && Jb(Vb);
    Ia(mb);
  });
  var ba = Q.matchMedia, ka = [], nb, ha;
  wa.push(function() {
    ha = I(B, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    ra(function() {
      nb = !0;
      ka.length && A(ob);
    });
  });
  var ra = function(a) {
    wa.push(a);
  };
  var Ia = function(a) {
    Lb.push(a);
  };
  var Lb = [], Na = Q.onload, Mb = Q.onunload;
  onload = Ma;
  onunload = function(a) {
    var b;
    Mb && (b = Mb(a));
    Y(Lb, a);
    onunload = fa;
    return b;
  };
  var Nb = function(a) {
    qb.push(a);
  };
  var qb = [];
  ra(function() {
    pb();
    La(pb);
  });
  var jc = function(a) {
    sa.push(a);
  };
  var sa = [], la, Ra, Qa;
  if (10 <= p || Gb || db && gc) {
    ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      la = Ra = a.matches;
      ea(sa, xa());
    }), ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      la = Qa = a.matches;
      ea(sa, xa());
    }), ba("(-ms-high-contrast:active)").addListener(function(a) {
      la = a.matches;
      ea(sa, xa());
    });
  } else {
    if (10 > p || db && (44 <= J || Ha)) {
      var Ja = function() {
        function a(f) {
          return "#ffffff" === f || "rgb(255,255,255)" === f;
        }
        var b = C.defaultView, c = Pa, d = b ? b.getComputedStyle(ha, null) : ha.currentStyle;
        b = (d && d.color || "").split(" ").join("");
        d = (d && d.backgroundColor || "").split(" ").join("");
        if (b) {
          return la = "#123456" !== b && "rgb(18,52,86)" !== b, Ra = ("#000000" === b || "rgb(0,0,0)" === b) && a(d), Qa = a(b) && ("#000000" === d || "rgb(0,0,0)" === d), c !== xa() && ea(sa, Pa), !0;
        }
      };
      ra(function() {
        ha.style.color = "#123456";
        ha.style.backgroundColor = "#123456";
        60 > J || Ha ? Ja() : Ja() && La(Ja, 1E3);
        Ja = null;
      });
    }
  }
  var kc = [];
  ba && ba("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    ea(kc, a.matches);
  });
  var fb = [];
  Q.onbeforeprint ? (onbeforeprint = function() {
    Y(fb, !0);
  }, onafterprint = function() {
    Y(fb, !1);
  }, Ia(function() {
    onbeforeprint = onafterprint = fa;
  })) : ba && ba("print").addListener(function(a) {
    Y(fb, a.matches);
  });
  var Jb = function(a) {
    Ob.push(a);
  };
  var Ob = [], gb = Q.onscroll, Pb = 0;
  onscroll = function(a) {
    var b;
    gb && (b = gb(a));
    Ma || Y(Ob);
    return b;
  };
  (1 > J || 1.2 <= J && 1.8 > J || 7.2 >= D) && La(function() {
    var a = Q.scrollY || B.scrollTop;
    Pb !== a && (Pb = a, onscroll());
  });
  Ia(function() {
    onscroll = gb = fa;
  });
  ma("html");
  var Ba = ma("head")[0];
  var za, ub;
  (function(a) {
    function b(d) {
      for (var f = c, l = "", h = 0, e; e = d.length;) {
        4 > e && (h = [0, 2, 1, 0][e]), e = d.charCodeAt(0) << 16 | (1 < e ? d.charCodeAt(1) : 0) << 8 | (2 < e ? d.charCodeAt(2) : 0), l += [f[e >>> 18], f[e >>> 12 & 63], 2 <= h ? "=" : f[e >>> 6 & 63], 1 <= h ? "=" : f[e & 63]].join(""), d = d.substr(3);
      }
      return l;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    ub = b;
  })(this);
  var Ta = void 0;
  var zb = {};
  ra(function() {
    if (Oa) {
      if (!R(M) && (M = Ha || 8 <= p || Gb || Ca || 7.2 <= D || 522 <= Sa || 3 <= cb ? 2 : 6 <= D || J ? 1 : 0, !M)) {
        var a = I(B, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        M = 6 <= a.offsetWidth ? 2 : 0;
        Z(a);
      }
    } else {
      M = void 0;
    }
  });
  var Ua;
  9 > p && ra(function(a) {
    a = I(B, "div");
    sb(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    eb = 1 < a.offsetHeight;
    sb(a, "");
    Z(a);
  });
  var $b = function(a, b) {
    function c() {
      if (f || !l || d.complete) {
        var h = !!d.width;
        na = na || h;
        A(a, h);
        d.onerror = d.onload = fa;
        d = a = null;
      } else {
        --l, A(c);
      }
    }
    var d = new Image, f, l = 99;
    d.onerror = function() {
      f = !0;
    };
    d.onload = function() {
      f = !0;
    };
    d.src = b;
    A(c);
  };
  var Zb = xb;
  10 > p || qa || C.write('<link href="' + K + Ib + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  for (11 === hc && 5 === p && I(Ba, "link", {href:K + Ib, rel:"stylesheet", type:"text/css"}); oa.length;) {
    oa.shift()();
  }
  oa = null;
  var F = String.fromCharCode, aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", F(960), ")", "(", F(234), F(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", F(9824), "\u2190", F(9829), F(9830), F(9827), F(956), "\u03a9", "\u2193", "\u2192", "%", F(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", F(9619)];
  (10 > p || db && (44 <= J || Ha)) && jc(function(a) {
    Aa("jsHcm");
    Aa("jsHcmWob");
    Aa("jsHcmBow");
    if (a) {
      switch((ic || 9 === p || 5.5 <= p && 9 > p && eb) && T(B, "jsCanRotate"), a) {
        case 1:
          T(B, "jsHcm");
          break;
        case 2:
          T(B, "jsHcmWob");
          break;
        case 3:
          T(B, "jsHcmBow");
      }
    } else {
      Aa("jsCanRotate");
    }
  });
  var Xa = [], Wa, Qb;
  Nb(function(a) {
    function b(m) {
      var x = m.getAttribute("pbTip") || "", w = x.charAt(0), k = "_" === w;
      x = k ? x.charAt(2) : w;
      w = k ? "Btm" : "";
      var n = m.getAttribute("title") || "";
      l || (m.removeAttribute("pbTip"), m.removeAttribute("title"), T(m, "pbTipPos" + x.toUpperCase()), I(m, "div", {className:"pbTip" + w}, {width:n.length + f + "em"}, n));
      I(m, "div", {className:"pbTail" + w});
      h && k && (m.focus(), m.blur());
    }
    function c(m) {
      if (2 > M) {
        var x = m.getAttribute("pbGhst") || "", w = m.className, k = w.split("pbCsr")[1] || "", n = w.split("pbAlp")[1] || "";
        if ("CS" === x) {
          var z = "_";
        } else {
          z = x, 3 === z.length && (z = z.substr(0, 2)), z = aa[parseInt(z, 16)] || "~";
        }
        var L;
        k = k.split(" ")[0];
        n = ca(n.split(" ")[0]);
        var U = 10 - n;
        n && 7.2 > D && (w = w.split("pbChr")[1], w = w.split(" ")[0], m.style.backgroundPosition = Ab(w, G) + "px " + -24 * (10 - n) + "px");
        x && (7.2 > D && (L = {backgroundPosition:Ab(x, G) + "px " + -24 * (10 - U) + "px"}), m.removeAttribute("pbGhst"), x = {className:"pbChr" + x + " pbAlp" + U + " pbCsr" + k}, za = 1, g = I(m, "b", x, L, z), d(g));
      }
      d(m);
    }
    function d(m) {
      7.2 > D && S(m, "pbChrCS") && Xa.push(m);
    }
    if (a && !Qb) {
      Qb = !0;
      var f = 6 > p ? 1 : 0;
      a = ma("SAMP");
      var l = 8 === p, h = 5 <= p && 6 > p, e, g, v, y;
      eb && T(B, "pbLCD-AX");
      7.2 > D && T(B, "operaLt720");
      if (a.length) {
        for (v = -1; e = a[++v];) {
          if (S(e.parentElement || e.parentNode, "pbLCD")) {
            var G = S(e, "PB-120") || S(e, "FX-795P"), P = rb(e);
            for (e = P.length; e;) {
              var t = P[--e];
              switch(t.tagName.toUpperCase()) {
                case "A":
                  (2 > M || l) && b(t);
                  if (2 > M) {
                    var E = rb(t);
                    for (y = E.length; y;) {
                      !l && c(E[--y]);
                    }
                  }
                  fc ? t.setAttribute("href", "javascript:void(0)") : t.onclick = Yb;
                  break;
                case "B":
                  2 > M && c(t);
              }
            }
          }
        }
        Xa.length ? setInterval(Bb, 500) : Bb = null;
      }
    }
  });
  6 === p && (new ib("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(C);
  var bb = aa[7], Eb = aa[30], bc = aa[113], Ea = F(8337) + F(8331), Fb = F(160);
  F(8194);
  var dc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ec = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), cc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Eb + aa[31]).split(""), V = [], Fa, $a = K + "pbFont/x3mask.png", Cb = 8 > D && !0, ab;
  Nb(function(a) {
    if (a && !ab) {
      var b = C.all || ma("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        S(c, "pbList") ? Ga(c) : S(c, "pbFont") && Ga(c, !0);
      }
      V.length && Da();
      ab = !0;
    }
  });
  Rb.prettify = Ga;
})(PB100, ua, this, new Function, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date);

