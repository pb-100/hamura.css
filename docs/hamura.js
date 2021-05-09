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
(function(Rb, t, R, Sb, C, gb, ca, hb, Ja, Tb, W, lc) {
  function S(a) {
    return void 0 !== a;
  }
  function ta() {
    for (var a, b = 0; b < va.length; ++b) {
      a = va[b], a.f();
    }
  }
  function Ka(a) {
    va.length || (da = setInterval(ta, ib));
    va.push({f:a, g:++jb});
    return jb;
  }
  function Ub() {
    da && (kb(), da = setInterval(ta, ib));
  }
  function kb() {
    da && (da = clearInterval(da));
  }
  function ia() {
    for (var a, b = 0, c = new W - 0; b < O.length;) {
      c < O[0].t ? ++b : (a = O.splice(b, 1)[0], a.f(a.p));
    }
    X = O.length ? Ja(ia, ja) : 0;
  }
  function Vb() {
    X && (lb(), X = Ja(ia, ja));
  }
  function lb() {
    X && (X = Tb(X));
  }
  function Y(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function ea(a, b) {
    mb && !ka.length && A(nb);
    ka.push(a, b);
  }
  function nb() {
    var a = ka, b;
    for (ka = []; b = a.shift();) {
      Y(b, a.shift());
    }
  }
  function La(a) {
    var b;
    Ma && (b = Ma(a));
    Y(wa, a);
    onload = fa;
    wa = La = Ma = onload = null;
    return b;
  }
  function ob() {
    var a = 9 === ha.offsetWidth;
    Na !== a && ea(pb, Na = a);
  }
  function xa() {
    return Oa = la ? Pa ? 2 : Qa ? 3 : 1 : 0;
  }
  function ma(a) {
    var b = b || C;
    return Wb ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Z(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function qb(a) {
    var b = a.children, c = 0, d, f;
    if (!b) {
      for (b = [], a = a.childNodes, d = a.length; c < d; ++c) {
        1 === (f = a[c]).nodeType && (b[b.length] = f);
      }
    }
    return b;
  }
  function Ra(a, b) {
    var c = C.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function I(a, b, c, d, f) {
    function l() {
      if (c) {
        var v = k, y;
        for (y in c) {
          switch(y) {
            case "class":
            case "className":
              P(v, c[y]);
              break;
            default:
              v.setAttribute(y, c[y]);
          }
        }
      }
      if (d) {
        v = k.style;
        for (var G in d) {
          v[G] = d[G];
        }
      }
      f && !e && k.appendChild(C.createTextNode(f));
    }
    var g = 9 > p;
    if ("style" === b) {
      var e = !0, k = Ra("div", 'a<style type="text/css">' + f + "</style>").lastChild;
    } else {
      k = Ra(b);
    }
    g || l();
    ya ? (2 === ya && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(k, a) : (a.parentElement || a.parentNode).appendChild(k), ya = 0) : a.appendChild(k);
    g && l();
    return k;
  }
  function rb(a, b) {
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
  function T(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function P(a, b) {
    var c;
    if (!T(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function za(a) {
    if (T(B, a)) {
      var b = B.className.split(" ");
      b.splice(b.indexOf(a), 1);
      B.className = b.join(" ");
    }
  }
  function sb(a) {
    8 <= D && 9 > D ? I(Aa, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + tb(a)}) : (a = I(Aa, "style", {type:"text/css", media:"all"}, 0, a), Sa = a.sheet || a.styleSheet);
  }
  function ub(a) {
    for (var b = Sa, c, d, f = "", l; a.length;) {
      c = a.shift(), d = a.shift(), l = c + "{" + d + "}", b ? b.addRule ? b.addRule(c, d) : b.insertRule && b.insertRule(l, b.cssRules.length) : f += l;
    }
    f && sb(f);
  }
  function vb(a) {
    function b(f) {
      d = Xb(d);
      Ta = f;
      c.onload = c.onerror = fa;
      A(a, f);
    }
    if (S(Ta)) {
      A(a, Ta);
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
  function wb(a, b, c, d, f, l, g) {
    function e() {
      C.fonts.load('1.6em "' + b + '"').then(function() {
        G(b) ? A(a, U) : v(!0);
      }, function() {
        vb(Q);
      });
    }
    function k(q) {
      return C.hidden || C.msHidden || C.mozHidden || C.webkitHidden ? (x = new W - 0, !1) : q < new W - x;
    }
    function v(q) {
      q && (x = new W - 0);
      G(b) ? a(U) : k(m) ? w ? a(0) : 9 > p ? A(a, 0) : vb(Q) : A(v);
    }
    function y() {
      var q = -1, u;
      y = null;
      z = ["sans-serif", "serif"];
      h = I(B, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (L = {}; u = z[++q];) {
        h.style.fontFamily = u, L[u] = h.offsetWidth;
      }
    }
    function G(q) {
      var u = 0, H = -1, Ua, xb = 0;
      y && y();
      for (B.appendChild(h); Ua = z[++H];) {
        if (h.style.fontFamily = '"' + q + '",' + Ua, h.offsetWidth !== L[Ua]) {
          u = 1;
          break;
        }
      }
      !p && u && f && (h.innerHTML = f, q = h.offsetWidth, h.innerHTML = l, xb = q === h.offsetWidth ? 1 : 0, h.innerHTML = "mmmmmmmmmmlli");
      Z(h);
      return U = u + xb;
    }
    function Q(q) {
      (w = q) ? r(!0) : a(0);
    }
    function r(q) {
      q && (x = new W - 0);
      for (u in c) {
        if (G(u)) {
          n = I(B, "div", {"aria-hidden":"true", className:d, id:d});
          q = c[u];
          var u = Sa, H = yb.all || 0;
          u ? u.addImport ? u.addImport(q, H) : u.insertRule && u.insertRule('@import "' + q + '"', H) : sb('@import "' + q + '"');
          yb.all = ++H;
          A(E, !0);
        } else {
          k(100) ? (delete c[u], A(r, !0)) : A(r);
        }
        return;
      }
      a(0);
    }
    function E(q) {
      q && (x = new W - 0);
      1 < n.offsetWidth ? (Z(n), m = 100, A(v, !0)) : k(m) ? (Z(n), a(0)) : A(E);
    }
    var m = g || 5E3, x, w, h, n, z, L, U;
    (function() {
      var q;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > p) {
        return !0;
      }
      var u = I(Aa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), H = (H = u.sheet || u.styleSheet) ? (q = 10 <= p ? H.cssRules : H.rules || H.cssRules) && (q = q[0]) ? q.cssText : H.cssText || "" : "";
      q = 0 < H.indexOf("src") && 0 === H.indexOf("@font-face");
      Z(u);
      return q;
    })() ? !C.fonts || 603 > zb ? v(!0) : e() : A(a, 0);
  }
  function Ab(a, b) {
    a + "" === a && ("a" === a.charAt(2) && (b = !0, a = a.substr(0, 2)), a = "CS" === a ? 9 > p || 9.5 > D || J && !Ba ? 1 : 132 : parseInt(a, 16));
    b && (50 === a && (a = 128), 102 < a && 108 > a && (a += 24));
    return -12 * (a - 1);
  }
  function Bb() {
    Va = !Va;
    for (var a = -1, b; b = Wa[++a];) {
      b.style.display = Va ? "" : "none";
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
  function Ca() {
    Ca = null;
    Zb(Xa, "PB-100", {"PB-100_canTTF":K + "pbFont/ttf.css", "PB-100_canWOFF":K + "pbFont/woff.css", "PB-100_canEOT":K + "pbFont/eot.css", "PB-100_canSVG":K + "pbFont/svg.css"}, "pbFont-testCssReady", Da, "i", 5E3);
  }
  function Xa(a) {
    (Ea = a) || Cb ? Ya() : na ? Db(!0) : S(na) ? Ya() : $b(Db, Za);
  }
  function Db(a) {
    a && (P(B, "pbList-noWebFont"), 9.5 > D || J && !Ba || 5.5 === p || (2 === M ? ub([".pbList font:after", "content:url(" + Za + ")"]) : ub([".pbList font", "background-image:url(" + Za + ")"])));
    Ya();
  }
  function Ya() {
    for (Xa = wb = null; V.length;) {
      Fa(V.shift(), V.shift());
    }
  }
  function Fa(a, b) {
    function c(l) {
      l = l.childNodes;
      for (var g = -1, e; e = l[++g];) {
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
    if (Xa) {
      -1 === V.indexOf(a) && (V.push(a, b), $a && Ca && Ca());
    } else {
      var f = V.indexOf(a);
      0 <= f && V.splice(f, 2);
      for (c(a); a = d.shift();) {
        f = a.data, 2 !== Ea && (f = f.split(Da).join(Eb)), b ? a.data = f : ac(f.split("\r").join("").split("&yen;").join(bc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(ab).split("&amp;").join("&"), a);
      }
    }
  }
  function ac(a, b) {
    function c(h, n) {
      for (var z = ""; n;) {
        n & 1 && (z += h), n >>= 1, h += h;
      }
      return z;
    }
    function d(h, n, z) {
      for (var L, U = -1, q, u; L = n[++U];) {
        for (; 0 <= (q = h.indexOf(L));) {
          u = L.length, h = h.substr(0, q) + c(z, u) + h.substr(q + u);
        }
      }
      return h;
    }
    function f(h) {
      var n = ca(h), z = "" + n;
      return 0 < n && n === n | 0 && (n = h.indexOf(z) + z.length, n <= h.length) ? n : 0;
    }
    var l = " area line str cmd fnc syb".split(" "), g = [], e = "", k, v = -1, y, G, Q;
    if (function(h) {
      var n = h.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = ca(h.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      e = c("+", a.length);
    } else {
      for (0 <= (k = f(a)) && (e = c("|", k), v = k, --v); k = a.charAt(++v);) {
        k === ab || y ? (e += "~", k === ab && (y = !y)) : e += k;
      }
      e = d(e, cc, "^");
      e = d(e, dc, "{");
      e = d(e, ec, "}");
    }
    v = 0;
    for (y = a.length; v < y; ++v) {
      k = a.charAt(v);
      var r = k === Fb, E = " " === k;
      k = r ? " " : k;
      var m = e.charAt(v), x = (G = w) && r, w = "|" === m;
      m = l["+|~{}^".indexOf(m) + 1];
      "\n" !== k ? (Ea || !na || Cb ? (2 === Ea && a.substr(v, 2) === Da && (k = Da, ++v), E = E && "str" === m ? ' class="pbList-strsp"' : r ? "" : !E && m ? ' class="pbList-' + m + '"' : "") : (r = aa.indexOf(k), r = -1 === r ? "" : aa.indexOf(k).toString(16).toUpperCase(), r = (r = 1 === r.length ? "0" + r : r) ? "pbChr" + r : "", E = E && "str" === m ? ' class="pbList-strsp"' : E || !r ? "" : m ? ' class="' + (r ? r + " " : "") + "pbList-" + m + '"' : ' class="' + r + '"'), x ? (k = 6 <= p || 
      8 > p ? " " : Fb, E = "") : w && (1.9 > J || 8 === (D | 0)) && (w && !G && (Q = 4 - (ca(a.substr(v)) + "").length), E += ' style="position:absolute;top:0;left:' + 12 * Q + 'px"', ++Q), g.push("<font" + E + ">" + k + "</font>")) : (G = w = !1, g.push(k));
    }
    g = g.join("");
    if (1 === b.nodeType) {
      b.innerHTML = g;
    } else {
      for (l = Ra("font", g); g = l.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(g, b);
      }
      Z(b);
    }
  }
  var fa = Sb, oa = [], Wb = !!C.getElementsByTagName, B = C.body, pa = B.style, p = t.Trident || t.TridentMobile, qa = t.Tasman, Gb = t.EdgeHTML || t.EdgeMobile, D = t.Presto || t.PrestoMobile, J = t.Gecko, Ba = J && 0 <= t.conpare(t.ENGINE_VERSION, "1.9.1"), Ga = t.Goanna, zb = t.WebKit, bb = t.SafariMobile || t.iOSWebView, fc = t.OperaMini && t.UCWEB, cb = t.Win32 || t.Win64, gc = ca(gb.userAgent.split("Edg/")[1]), hc = ca(gb.appVersion.split("Trident/")[1]) + 4;
  p || qa || (new hb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Hb = C.scripts || ma("script"), Ib = (qa ? "ie5mac" : 5.5 > p ? "ie5win" : 6 > p ? "ie55" : 10 > p ? "ie" + (p | 0) : 9.5 > D || J && !Ba ? "legacy" : "modern") + ".css", wa = [], Na, Oa = 0, db, na, M, ic = S(pa.transform) ? "transform" : S(pa["-o-transform"]) ? "-o-transform" : S(pa["-ms-transform"]) ? "-ms-transform" : S(pa["-moz-transform"]) ? "-moz-transform" : S(pa["-webkit-transform"]) ? "-webkit-transform" : "";
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
      var g = this.length - 1;
      for (l = a + b; g >= l; --g) {
        this[g + d] = this[g];
      }
    } else {
      if (0 > d) {
        g = a + b;
        for (l = this.length; g < l; ++g) {
          this[g + d] = this[g];
        }
        this.length += d;
      }
    }
    g = 2;
    for (l = c.length; g < l; ++g) {
      this[g - 2 + a] = c[g];
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
  var va = [], ib = 999, jb = 0, da;
  if (5 > p || qa) {
    R._wdb_onlooptimer = ta, ta = "_wdb_onlooptimer()";
  }
  oa.push(function() {
    6.1 > bb && Jb(Ub);
    Ha(kb);
  });
  var A = function(a, b, c) {
    O.length || (X = Ja(ia, ja));
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
    R._wdb_ontimer = ia, ia = "_wdb_ontimer()";
  }
  oa.push(function() {
    6.1 > bb && Jb(Vb);
    Ha(lb);
  });
  var ba = R.matchMedia, ka = [], mb, ha;
  wa.push(function() {
    ha = I(B, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    ra(function() {
      mb = !0;
      ka.length && A(nb);
    });
  });
  var ra = function(a) {
    wa.push(a);
  };
  var Ha = function(a) {
    Lb.push(a);
  };
  var Lb = [], Ma = R.onload, Mb = R.onunload;
  onload = La;
  onunload = function(a) {
    var b;
    Mb && (b = Mb(a));
    Y(Lb, a);
    onunload = fa;
    return b;
  };
  var Nb = function(a) {
    pb.push(a);
  };
  var pb = [];
  ra(function() {
    ob();
    Ka(ob);
  });
  var jc = function(a) {
    sa.push(a);
  };
  var sa = [], la, Qa, Pa;
  if (10 <= p || Gb || cb && gc) {
    ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      la = Qa = a.matches;
      ea(sa, xa());
    }), ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      la = Pa = a.matches;
      ea(sa, xa());
    }), ba("(-ms-high-contrast:active)").addListener(function(a) {
      la = a.matches;
      ea(sa, xa());
    });
  } else {
    if (10 > p || cb && (44 <= J || Ga)) {
      var Ia = function() {
        function a(f) {
          return "#ffffff" === f || "rgb(255,255,255)" === f;
        }
        var b = C.defaultView, c = Oa, d = b ? b.getComputedStyle(ha, null) : ha.currentStyle;
        b = (d && d.color || "").split(" ").join("");
        d = (d && d.backgroundColor || "").split(" ").join("");
        if (b) {
          return la = "#123456" !== b && "rgb(18,52,86)" !== b, Qa = ("#000000" === b || "rgb(0,0,0)" === b) && a(d), Pa = a(b) && ("#000000" === d || "rgb(0,0,0)" === d), c !== xa() && ea(sa, Oa), !0;
        }
      };
      ra(function() {
        ha.style.color = "#123456";
        ha.style.backgroundColor = "#123456";
        60 > J || Ga ? Ia() : Ia() && Ka(Ia, 1E3);
        Ia = null;
      });
    }
  }
  var kc = [];
  ba && ba("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    ea(kc, a.matches);
  });
  var eb = [];
  R.onbeforeprint ? (onbeforeprint = function() {
    Y(eb, !0);
  }, onafterprint = function() {
    Y(eb, !1);
  }, Ha(function() {
    onbeforeprint = onafterprint = fa;
  })) : ba && ba("print").addListener(function(a) {
    Y(eb, a.matches);
  });
  var Jb = function(a) {
    Ob.push(a);
  };
  var Ob = [], fb = R.onscroll, Pb = 0;
  onscroll = function(a) {
    var b;
    fb && (b = fb(a));
    La || Y(Ob);
    return b;
  };
  (1 > J || 1.2 <= J && 1.8 > J || 7.2 >= D) && Ka(function() {
    var a = R.scrollY || B.scrollTop;
    Pb !== a && (Pb = a, onscroll());
  });
  Ha(function() {
    onscroll = fb = fa;
  });
  ma("html");
  var Aa = ma("head")[0];
  var ya, tb;
  (function(a) {
    function b(d) {
      for (var f = c, l = "", g = 0, e; e = d.length;) {
        4 > e && (g = [0, 2, 1, 0][e]), e = d.charCodeAt(0) << 16 | (1 < e ? d.charCodeAt(1) : 0) << 8 | (2 < e ? d.charCodeAt(2) : 0), l += [f[e >>> 18], f[e >>> 12 & 63], 2 <= g ? "=" : f[e >>> 6 & 63], 1 <= g ? "=" : f[e & 63]].join(""), d = d.substr(3);
      }
      return l;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    tb = b;
  })(this);
  var Sa = void 0;
  var yb = {};
  ra(function() {
    if (Na) {
      if (!S(M) && (M = Ga || 8 <= p || Gb || Ba || 7.2 <= D || 522 <= zb || 3 <= bb ? 2 : 6 <= D || J ? 1 : 0, !M)) {
        var a = I(B, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        M = 6 <= a.offsetWidth ? 2 : 0;
        Z(a);
      }
    } else {
      M = void 0;
    }
  });
  var Ta;
  9 > p && ra(function(a) {
    a = I(B, "div");
    rb(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    db = 1 < a.offsetHeight;
    rb(a, "");
    Z(a);
  });
  var $b = function(a, b) {
    function c() {
      if (f || !l || d.complete) {
        var g = !!d.width;
        na = na || g;
        A(a, g);
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
  var Zb = wb;
  10 > p || qa || C.write('<link href="' + K + Ib + '" rel="stylesheet" type="text/css" media="screen,handheld,projection,tv,print">');
  for (11 === hc && 5 === p && I(Aa, "link", {href:K + Ib, rel:"stylesheet", type:"text/css"}); oa.length;) {
    oa.shift()();
  }
  oa = null;
  var F = String.fromCharCode, aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", F(960), ")", "(", F(234), F(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", F(9824), "\u2190", F(9829), F(9830), F(9827), F(956), "\u03a9", "\u2193", "\u2192", "%", F(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", F(9619)];
  (10 > p || cb && (44 <= J || Ga)) && jc(function(a) {
    za("jsHcm");
    za("jsHcmWob");
    za("jsHcmBow");
    if (a) {
      switch((ic || 9 === p || 5.5 <= p && 9 > p && db) && P(B, "jsCanRotate"), a) {
        case 1:
          P(B, "jsHcm");
          break;
        case 2:
          P(B, "jsHcmWob");
          break;
        case 3:
          P(B, "jsHcmBow");
      }
    } else {
      za("jsCanRotate");
    }
  });
  var Wa = [], Va, Qb;
  Nb(function(a) {
    function b(m) {
      var x = m.getAttribute("pbTip") || "", w = x.charAt(0), h = "_" === w;
      x = h ? x.charAt(2) : w;
      w = h ? "Btm" : "";
      var n = m.getAttribute("title") || "";
      l || (m.removeAttribute("pbTip"), m.removeAttribute("title"), P(m, "pbTipPos" + x.toUpperCase()), I(m, "div", {className:"pbTip" + w}, {width:n.length + f + "em"}, n));
      I(m, "div", {className:"pbTail" + w});
      g && h && (m.focus(), m.blur());
    }
    function c(m) {
      if (2 > M) {
        var x = m.getAttribute("pbGhst") || "", w = m.className, h = w.split("pbCsr")[1] || "", n = w.split("pbAlp")[1] || "";
        if ("CS" === x) {
          var z = "_";
        } else {
          z = x, 3 === z.length && (z = z.substr(0, 2)), z = aa[parseInt(z, 16)] || "~";
        }
        var L;
        h = h.split(" ")[0];
        n = ca(n.split(" ")[0]);
        var U = 10 - n;
        n && 7.2 > D && (w = w.split("pbChr")[1], w = w.split(" ")[0], m.style.backgroundPosition = Ab(w, G) + "px " + -24 * (10 - n) + "px");
        x && (7.2 > D && (L = {backgroundPosition:Ab(x, G) + "px " + -24 * (10 - U) + "px"}), m.removeAttribute("pbGhst"), x = {className:"pbChr" + x + " pbAlp" + U + " pbCsr" + h}, ya = 1, k = I(m, "b", x, L, z), d(k));
      }
      d(m);
    }
    function d(m) {
      7.2 > D && T(m, "pbChrCS") && Wa.push(m);
    }
    if (a && !Qb) {
      Qb = !0;
      var f = 6 > p ? 1 : 0;
      a = ma("SAMP");
      var l = 8 === p, g = 5 <= p && 6 > p, e, k, v, y;
      db && P(B, "pbLCD-AX");
      7.2 > D && P(B, "operaLt720");
      if (a.length) {
        for (v = -1; e = a[++v];) {
          if (T(e.parentElement || e.parentNode, "pbLCD")) {
            var G = T(e, "PB-120") || T(e, "FX-795P"), Q = qb(e);
            for (e = Q.length; e;) {
              var r = Q[--e];
              switch(r.tagName.toUpperCase()) {
                case "A":
                  (2 > M || l) && b(r);
                  if (2 > M) {
                    var E = qb(r);
                    for (y = E.length; y;) {
                      !l && c(E[--y]);
                    }
                  }
                  fc ? r.setAttribute("href", "javascript:void(0)") : r.onclick = Yb;
                  break;
                case "B":
                  2 > M && c(r);
              }
            }
          }
        }
        Wa.length ? setInterval(Bb, 500) : Bb = null;
      }
    }
  });
  6 === p && (new hb("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(C);
  var ab = aa[7], Eb = aa[30], bc = aa[113], Da = F(8337) + F(8331), Fb = F(160);
  F(8194);
  var dc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ec = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), cc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Eb + aa[31]).split(""), V = [], Ea, Za = K + "pbFont/x3mask.png", Cb = 8 > D && !0, $a;
  Nb(function(a) {
    if (a && !$a) {
      var b = C.all || ma("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        T(c, "pbList") ? Fa(c) : T(c, "pbFont") && Fa(c, !0);
      }
      V.length && Ca();
      $a = !0;
    }
  });
  Rb.prettify = Fa;
})(PB100, ua, this, new Function, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date);

