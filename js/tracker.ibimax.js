/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function() {
    var q = new Date().getTime();
    var j = false;
    var n = 5;
    var u = true;
    var p = null;
    var i = true;

    function e() {
        if (j && "undefined" !== typeof console && console && console.debug) {
            console.debug.apply(console, arguments)
        }
    }

    function m(w) {
        return typeof w === "object" && typeof w.length === "number"
    }
    var b = {
        AUDIO: "Audio",
        VIDEO: "Video"
    };
    var r = {
        getLocation: function() {
            var w = this.location || window.location;
            if (!w.origin) {
                w.origin = w.protocol + "//" + w.hostname + (w.port ? ":" + w.port : "")
            }
            return w
        },
        setLocation: function(w) {
            this.location = w
        },
        makeUrlAbsolute: function(x) {
            if ((!x || String(x) !== x) && x !== "") {
                return x
            }
            if (x.indexOf("//") === 0) {
                return this.getLocation().protocol + x
            }
            if (x.indexOf("://") !== -1) {
                return x
            }
            if (x.indexOf("/") === 0) {
                return this.getLocation().origin + x
            }
            if (x.indexOf("#") === 0 || x.indexOf("?") === 0) {
                return this.getLocation().origin + this.getLocation().pathname + x
            }
            if ("" === x) {
                return this.getLocation().href
            }
            var w = "(.*/)";
            var y = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(w))[0];
            return y + x
        }
    };
    var t = {
        getCurrentTime: function() {
            return new Date().getTime()
        },
        roundTimeToSeconds: function(w) {
            return Math.round(w / 1000)
        },
        isNumber: function(w) {
            return !isNaN(w)
        },
        getTimeScriptLoaded: function(w) {
            return q
        },
        generateUniqueId: function() {
            var z = "";
            var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var y = x.length;
            for (var w = 0; w < 16; w++) {
                z += x.charAt(Math.floor(Math.random() * y))
            }
            return z
        },
        getQueryParameter: function(w, A) {
            var z = new RegExp("[?&]" + A + "(=([^&#]*)|&|#|$)");
            var y = z.exec(w);
            if (!y) {
                return null
            }
            if (!y[2]) {
                return ""
            }
            var x = y[2].replace(/\+/g, " ");
            return decodeURIComponent(x)
        }
    };
    var c = {
        getAttribute: function(x, w) {
            if (x && x.getAttribute && w) {
                return x.getAttribute(w)
            }
            return null
        },
        setAttribute: function(y, w, x) {
            if (y && y.setAttribute) {
                y.setAttribute(w, x)
            }
        },
        isMediaIgnored: function(w) {
            var x = c.getAttribute(w, "data-piwik-ignore");
            return !!x || x === ""
        },
        getMediaResource: function(w, x) {
            var y = c.getAttribute(w, "data-piwik-resource");
            if (y) {
                return y
            }
            y = c.getAttribute(w, "src");
            if (y) {
                return y
            }
            return x
        },
        getMediaTitle: function(w) {
            var x = c.getAttribute(w, "data-piwik-title");
            if (!x) {
                x = c.getAttribute(w, "title")
            }
            if (!x) {
                x = c.getAttribute(w, "alt")
            }
            return x
        },
        isFullscreen: function(w) {
            if (w && document.fullScreenElement === w || document.mozFullScreenElement === w || document.webkitFullscreenElement === w || document.msFullscreenElement === w) {
                return true
            }
            return false
        }
    };

    function h() {
        if (null === p) {
            if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
                return Piwik.getAsyncTrackers()
            }
        }
        if (m(p)) {
            return p
        }
        return []
    }

    function v(x, w, y) {
        this.playerName = x;
        this.type = w;
        this.resource = y;
        this.reset()
    }
    v.piwikTrackers = [];
    v.prototype.reset = function() {
        this.id = t.generateUniqueId();
        this.mediaTitle = null;
        this.timeToInitialPlay = null;
        this.width = null;
        this.height = null;
        this.fullscreen = false;
        this.timeout = null;
        this.watchedTime = 0;
        this.lastTimeCheck = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.mediaProgressInSeconds = 0;
        this.mediaLengthInSeconds = 0
    };
    v.prototype.setResource = function(w) {
        this.resource = w
    };
    v.prototype.trackEvent = function(C) {
        var w = h();
        var x = "Media" + this.type;
        var A = this.mediaTitle || this.resource;
        var y = [x, C, A];
        if (w && w.length) {
            var z = 0,
                B;
            for (z; z < w.length; z++) {
                B = w[z];
                if (B && B.MediaAnalytics && B.MediaAnalytics.isTrackEventsEnabled()) {
                    B.trackEvent.apply(B, y)
                }
            }
        } else {
            if (typeof _paq === "undefined") {
                _paq = []
            }
            y.unshift("trackEvent");
            _paq.push(y);
            e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
        }
        e("trackEvent", x, A, C)
    };
    v.prototype.trackProgress = function(A, D, C, x, y, F, N, G, K, H, E, w) {
        var M = {
            ma_id: A,
            ma_ti: D !== null ? D : "",
            ma_pn: C,
            ma_mt: x,
            ma_re: y,
            ma_st: parseInt(F, 10),
            ma_ps: parseInt(N, 10),
            ma_le: G,
            ma_ttp: K !== null ? K : "",
            ma_w: H ? H : "",
            ma_h: E ? E : "",
            ma_fs: w ? "1" : "0"
        };
        var I = "";
        for (var B in M) {
            if (Object.prototype.hasOwnProperty.call(M, B)) {
                I += B + "=" + encodeURIComponent(M[B]) + "&"
            }
        }
        var L = h();
        if (L && L.length) {
            var J = 0,
                z;
            for (J; J < L.length; J++) {
                z = L[J];
                if (z && z.MediaAnalytics && z.MediaAnalytics.isTrackProgressEnabled()) {
                    z.trackRequest(I)
                }
            }
        } else {
            if (typeof _paq === "undefined") {
                _paq = []
            }
            _paq.push(["trackRequest", I]);
            e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
        }
        if (j) {
            e("trackProgress", JSON2.stringify(M))
        }
    };
    v.prototype.setFullscreen = function(w) {
        if (!this.fullscreen) {
            this.fullscreen = !!w
        }
    };
    v.prototype.setWidth = function(w) {
        if (t.isNumber(w)) {
            this.width = parseInt(w, 10)
        }
    };
    v.prototype.setHeight = function(w) {
        if (t.isNumber(w)) {
            this.height = parseInt(w, 10)
        }
    };
    v.prototype.setMediaTitle = function(w) {
        this.mediaTitle = w
    };
    v.prototype.setMediaProgressInSeconds = function(w) {
        this.mediaProgressInSeconds = w
    };
    v.prototype.getMediaProgressInSeconds = function() {
        return this.mediaProgressInSeconds
    };
    v.prototype.setMediaTotalLengthInSeconds = function(w) {
        this.mediaLengthInSeconds = w
    };
    v.prototype.getMediaTotalLengthInSeconds = function() {
        return this.mediaLengthInSeconds
    };
    v.prototype.play = function() {
        this.startWatchedTime();
        if (i && this.timeToInitialPlay === null) {
            this.timeToInitialPlay = t.roundTimeToSeconds(t.getCurrentTime() - t.getTimeScriptLoaded())
        }
        i = false;
        if (this.isPaused) {
            this.isPaused = false;
            this.trackEvent("resume")
        } else {
            this.trackEvent("play")
        }
        this.trackUpdate()
    };
    v.prototype.startWatchedTime = function() {
        this.isPlaying = true;
        this.lastTimeCheck = t.getCurrentTime()
    };
    v.prototype.stopWatchedTime = function() {
        this.isPlaying = false;
        if (this.lastTimeCheck) {
            this.watchedTime += t.getCurrentTime() - this.lastTimeCheck;
            this.lastTimeCheck = null
        }
    };
    v.prototype.seekStart = function() {
        this.stopWatchedTime()
    };
    v.prototype.seekFinish = function() {
        this.startWatchedTime()
    };
    v.prototype.pause = function() {
        if (this.isPlaying) {
            this.isPaused = true;
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null
            }
            this.stopWatchedTime();
            this.trackUpdate();
            this.trackEvent("pause")
        }
    };
    v.prototype.finish = function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null
        }
        this.stopWatchedTime();
        this.trackUpdate();
        this.trackEvent("finish");
        this.reset()
    };
    v.prototype.trackUpdate = function() {
        var w = t.getCurrentTime();
        if (this.lastTimeCheck) {
            this.watchedTime += (w - this.lastTimeCheck);
            this.lastTimeCheck = w
        }
        var z = this.mediaLengthInSeconds;
        if (!z || !t.isNumber(z)) {
            z = ""
        } else {
            z = parseInt(this.mediaLengthInSeconds, 10)
        }
        var x = t.roundTimeToSeconds(this.watchedTime);
        var y = this.mediaProgressInSeconds;
        if (y > z && z) {
            y = z
        }
        this.trackProgress(this.id, this.mediaTitle, this.playerName, this.type, this.resource, x, y, z, this.timeToInitialPlay, this.width, this.height, this.fullscreen)
    };
    v.prototype.update = function() {
        if (this.timeout) {
            return
        }
        var w = this;
        this.timeout = setTimeout(function() {
            w.trackUpdate();
            w.timeout = null
        }, n * 1000)
    };
    var d = {
        players: {},
        registerPlayer: function(w, x) {
            if (!x || !x.scanForMedia || "function" !== typeof x.scanForMedia) {
                throw new Error("A registered player does not implement the scanForMedia function")
            }
            w = w.toLowerCase();
            this.players[w] = x
        },
        removePlayer: function(w) {
            w = w.toLowerCase();
            delete this.players[w]
        },
        getPlayer: function(w) {
            w = w.toLowerCase();
            if (w in this.players) {
                return this.players[w]
            }
            return null
        },
        getPlayers: function() {
            return this.players
        },
        scanForMedia: function(x) {
            if (!u) {
                return
            }
            if ("undefined" === typeof x || !x) {
                x = document
            }
            var w;
            for (w in this.players) {
                if (Object.prototype.hasOwnProperty.call(this.players, w)) {
                    this.players[w].scanForMedia(x)
                }
            }
        }
    };
    var f = function(y, C) {
        if (!y) {
            return
        }
        if (!window.addEventListener) {
            return
        }
        if (y.hasPlayerInstance) {
            return
        }
        y.hasPlayerInstance = true;
        var w = b.VIDEO === C;
        var x = r.makeUrlAbsolute(y.currentSrc);
        var z = c.getMediaResource(y, x);
        var E = new v("html5" + C.toLowerCase(), C, z);
        if (w) {
            E.setWidth(y.videoWidth);
            E.setHeight(y.videoHeight);
            E.setFullscreen(c.isFullscreen(y))
        }
        var D = c.getMediaTitle(y);
        if (D) {
            E.setMediaTitle(D)
        }
        if (y.duration) {
            E.setMediaTotalLengthInSeconds(y.duration)
        }
        var A = false;
        var B = null;
        y.addEventListener("play", function() {
            if (!B && y.currentSrc) {
                B = y.currentSrc
            } else {
                if (B && y.currentSrc && B != y.currentSrc) {
                    B = y.currentSrc;
                    var F = r.makeUrlAbsolute(B);
                    E.reset();
                    E.setResource(F);
                    E.setMediaTitle("")
                }
            }
            A = true;
            E.play()
        }, true);
        y.addEventListener("pause", function() {
            if (y.currentTime && y.duration && y.currentTime === y.duration) {
                return
            }
            E.pause()
        }, true);
        y.addEventListener("ended", function() {
            E.finish()
        }, true);
        y.addEventListener("timeupdate", function() {
            E.setMediaProgressInSeconds(y.currentTime);
            E.setMediaTotalLengthInSeconds(y.duration);
            if (w && !E.width) {
                E.setWidth(y.videoWidth);
                E.setHeight(y.videoHeight)
            }
            if (!A) {
                A = true;
                E.play()
            } else {
                E.update()
            }
        }, true);
        y.addEventListener("seeking", function() {
            E.seekStart()
        }, true);
        y.addEventListener("seeked", function() {
            E.setMediaProgressInSeconds(y.currentTime);
            E.setMediaTotalLengthInSeconds(y.duration);
            E.seekFinish()
        }, true);
        if (w) {
            y.addEventListener("resize", function() {
                E.setWidth(y.videoWidth);
                E.setHeight(y.videoHeight);
                E.setFullscreen(c.isFullscreen(y))
            }, true);
            window.addEventListener("resize", function() {
                E.setWidth(y.clientWidth);
                E.setHeight(y.clientHeight);
                E.setFullscreen(c.isFullscreen(y))
            }, false)
        }
        E.trackUpdate()
    };
    f.scanForMedia = function(w) {
        if (!window.addEventListener) {
            return
        }
        var z = w.getElementsByTagName("video");
        for (var y = 0; y < z.length; y++) {
            if (!c.isMediaIgnored(z[y])) {
                new f(z[y], b.VIDEO)
            }
        }
        z = null;
        var x = w.getElementsByTagName("audio");
        for (var y = 0; y < x.length; y++) {
            if (!c.isMediaIgnored(x[y])) {
                new f(x[y], b.AUDIO)
            }
        }
        x = null
    };
    var a = function(z, A) {
        if (!z) {
            return
        }
        if (!window.addEventListener) {
            return
        }
        if (z.playerInstance) {
            return
        }
        z.playerInstance = true;
        var w = c.getAttribute(z, "src");
        var y = c.getMediaResource(z, null);
        var E = new v("vimeo", A, y);
        E.setWidth(z.clientWidth);
        E.setHeight(z.clientHeight);
        E.setFullscreen(c.isFullscreen(z));
        window.addEventListener("resize", function() {
            E.setWidth(z.clientWidth);
            E.setHeight(z.clientHeight);
            E.setFullscreen(c.isFullscreen(z))
        }, false);
        var D = c.getMediaTitle(z);
        if (D) {
            E.setMediaTitle(D)
        }
        var x = function(G) {
            if (!(/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/).test(G.origin)) {
                return false
            }
            if (!G || !G.data) {
                return
            }
            if (z.contentWindow && G.source && z.contentWindow !== G.source) {
                return
            }
            var H = G.data;
            if ("string" === typeof H) {
                H = JSON2.parse(G.data)
            }
            if (("event" in H && H.event === "ready") || ("method" in H && H.method === "ping")) {
                if (B === "*") {
                    B = G.origin
                }
                if (!z.isVimeoReady) {
                    z.isVimeoReady = true;
                    C("addEventListener", "play");
                    C("addEventListener", "pause");
                    C("addEventListener", "finish");
                    C("addEventListener", "seek");
                    C("addEventListener", "playProgress");
                    C("getVideoTitle")
                }
                return
            }
            if ("method" in H) {
                e("vimeoMethod", H.method);
                switch (H.method) {
                    case "getVideoTitle":
                        if (H.value) {
                            E.setMediaTitle(H.value)
                        }
                        E.trackUpdate();
                        break
                }
                return
            }
            if ("event" in H) {
                var F = H.event;
                e("vimeoEvent", F);
                if (H && H.data) {
                    H = H.data
                }
                if (E && H && H.seconds) {
                    if (E.getMediaProgressInSeconds() === H.seconds && (F === "playProgress" || F === "timeupdate")) {
                        return
                    }
                    E.setMediaProgressInSeconds(H.seconds)
                }
                if (E && H && H.duration) {
                    E.setMediaTotalLengthInSeconds(H.duration)
                }
                switch (F) {
                    case "play":
                        E.play();
                        break;
                    case "timeupdate":
                    case "playProgress":
                        if (E._isSeeking) {
                            E._isSeeking = false;
                            E.seekFinish()
                        }
                        E.update();
                        break;
                    case "seek":
                        E.seekStart();
                        E._isSeeking = true;
                        break;
                    case "pause":
                        if (H && H.seconds && H && H.duration && H.seconds === H.duration) {
                            e("ignoring pause event because video is finished");
                            break
                        }
                        E.pause();
                        break;
                    case "finish":
                        E.finish();
                        break
                }
            }
        };
        window.addEventListener("message", x, true);
        var B = "*";
        E._isSeeking = false;

        function C(I, G) {
            var F = {
                method: I
            };
            if (G !== undefined) {
                F.value = G
            }
            if (z && z.contentWindow) {
                if (navigator && navigator.userAgent) {
                    var H = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                    if (H >= 8 && H < 10) {
                        F = JSON2.stringify(F)
                    }
                }
                z.contentWindow.postMessage(F, B)
            }
        }
        C("ping")
    };
    a.scanForMedia = function(w) {
        if (!window.addEventListener) {
            return
        }
        var y = w.getElementsByTagName("iframe");
        for (var x = 0; x < y.length; x++) {
            if (c.isMediaIgnored(y[x])) {
                continue
            }
            var z = c.getAttribute(y[x], "src");
            if (z && z.indexOf("player.vimeo.com") > 0) {
                new a(y[x], b.VIDEO)
            }
        }
        y = null
    };
    var o = function(A, D) {
        if (!A) {
            return
        }
        if (!window.addEventListener) {
            return
        }
        if (A.playerInstance) {
            return
        }
        var x = c.getMediaResource(A, null);
        var H = new v("youtube", D, x);
        H.setWidth(A.clientWidth);
        H.setHeight(A.clientHeight);
        H.setFullscreen(c.isFullscreen(A));
        window.addEventListener("resize", function() {
            H.setWidth(A.clientWidth);
            H.setHeight(A.clientHeight);
            H.setFullscreen(c.isFullscreen(A))
        }, false);
        var F = c.getMediaTitle(A);
        if (F) {
            H.setMediaTitle(F)
        }
        var y = false;
        var z = null;
        var G = 0;
        var C = !c.getAttribute(A, "data-media-title");
        var w = false;
        var B = false;
        var E = null;
        A.playerInstance = new YT.Player(A, {
            events: {
                onReady: function(I) {
                    if (!I || !I.target) {
                        return
                    }
                    if (C && I.target && I.target.getVideoData) {
                        var J = I.target.getVideoData();
                        H.setMediaTitle(J.title)
                    }
                    H.trackUpdate()
                },
                onStateChange: function(I) {
                    if (!I || !I.target) {
                        return
                    }
                    var L = I.target;
                    if (!L.getPlayerState) {
                        e("youtubeMissingPlayerState");
                        return
                    }
                    var K = L.getPlayerState();
                    e("youtubeStateChange", K);
                    switch (K) {
                        case YT.PlayerState.ENDED:
                            G = 0;
                            if (L.getCurrentTime) {
                                H.setMediaProgressInSeconds(L.getCurrentTime())
                            }
                            if (L.getDuration) {
                                H.setMediaTotalLengthInSeconds(L.getDuration())
                            }
                            H.finish();
                            if (z) {
                                clearInterval(z);
                                z = null
                            }
                            break;
                        case YT.PlayerState.PLAYING:
                            var J = null;
                            if (L.getVideoData) {
                                J = L.getVideoData()
                            }
                            if (!E && J && J.video_id) {
                                E = J.video_id
                            } else {
                                if (E && J && J.video_id && E != J.video_id) {
                                    E = J.video_id;
                                    H.reset();
                                    if (L.getVideoUrl) {
                                        H.setResource(L.getVideoUrl())
                                    }
                                    C = true;
                                    w = false;
                                    y = false;
                                    e("currentVideoId has changed to " + E)
                                }
                            }
                            if (L.getCurrentTime) {
                                G = t.getCurrentTime();
                                H.setMediaProgressInSeconds(L.getCurrentTime())
                            }
                            if (L.getDuration) {
                                H.setMediaTotalLengthInSeconds(L.getDuration())
                            }
                            if (C) {
                                if (J && J.title) {
                                    H.setMediaTitle(J.title)
                                }
                                C = false
                            }
                            if (!w || B) {
                                w = true;
                                B = false;
                                y = false;
                                H.play()
                            } else {
                                if (y) {
                                    y = false;
                                    H.seekFinish()
                                }
                            }
                            H.update();
                            if (!z) {
                                z = setInterval(function() {
                                    if (G) {
                                        var N = H.getMediaProgressInSeconds();
                                        var M = t.getCurrentTime();
                                        if (G) {
                                            N += t.roundTimeToSeconds(M - G);
                                            G = M
                                        }
                                        H.setMediaProgressInSeconds(N)
                                    }
                                    H.update()
                                }, 1 * 1000)
                            }
                            break;
                        case -1:
                        case YT.PlayerState.PAUSED:
                            G = 0;
                            H.pause();
                            B = true;
                            if (z) {
                                clearInterval(z);
                                z = null
                            }
                            break;
                        case YT.PlayerState.BUFFERING:
                            G = 0;
                            H.seekStart();
                            y = true;
                            if (z) {
                                clearInterval(z);
                                z = null
                            }
                            break
                    }
                }
            }
        })
    };
    o.scanForMedia = function(x) {
        if (!window.addEventListener) {
            return
        }
        var y = [];
        var z = x.getElementsByTagName("iframe");
        for (var A = 0; A < z.length; A++) {
            if (c.isMediaIgnored(z[A])) {
                continue
            }
            var C = c.getAttribute(z[A], "src");
            if (C && C.indexOf("youtube.com") > 0) {
                c.setAttribute(z[A], "enablejsapi", "true");
                y.push(z[A])
            }
        }
        z = null;
        if (y.length && !window.onYouTubeIframeAPIReady) {
            window.onYouTubeIframeAPIReady = function() {
                var D = x.getElementsByTagName("iframe");
                for (var E = 0; E < D.length; E++) {
                    if (c.isMediaIgnored(D[E])) {
                        continue
                    }
                    var F = c.getAttribute(D[E], "src");
                    if (F && F.indexOf("youtube.com") > 0) {
                        if (D[E].setAttribute) {
                            D[E].setAttribute("enablejsapi", "1")
                        }
                        new o(D[E], b.VIDEO)
                    }
                }
            };
            var w = x.createElement("script");
            w.src = "https://www.youtube.com/iframe_api";
            var B = x.getElementsByTagName("script")[0];
            B.parentNode.insertBefore(w, B)
        } else {
            if (y.length && "undefined" !== typeof YT) {
                for (var A = 0; A < y.length; A++) {
                    new o(y[A], b.VIDEO)
                }
            }
        }
        y = null
    };
    d.registerPlayer("html5", f);
    d.registerPlayer("vimeo", a);
    d.registerPlayer("youtube", o);

    function l(w) {
        if ("undefined" !== typeof w.MediaAnalytics) {
            return
        }
        w.MediaAnalytics = {
            enableEvents: true,
            enableProgress: true,
            disableTrackEvents: function() {
                this.enableEvents = false
            },
            enableTrackEvents: function() {
                this.enableEvents = true
            },
            isTrackEventsEnabled: function() {
                return u && this.enableEvents
            },
            disableTrackProgress: function() {
                this.enableProgress = false
            },
            enableTrackProgress: function() {
                this.enableProgress = true
            },
            isTrackProgressEnabled: function() {
                return u && this.enableProgress
            }
        };
        Piwik.trigger("MediaAnalytics.TrackerInitialized", [w])
    }

    function g() {
        if (typeof window === "object" && "function" === typeof window.piwikMediaAnalyticsAsyncInit) {
            window.piwikMediaAnalyticsAsyncInit()
        }
    }

    function k() {
        var w = h();
        if (!w || !m(w) || !w.length) {
            return
        }
        Piwik.DOM.onReady(function() {
            d.scanForMedia(document)
        });
        Piwik.DOM.onLoad(function() {
            d.scanForMedia(document)
        })
    }

    function s() {
        if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.MediaAnalytics) {
            return
        }
        if ("object" === typeof window && !window.Piwik) {
            return
        }
        Piwik.MediaAnalytics = {
            utils: t,
            url: r,
            element: c,
            players: d,
            MediaTracker: v,
            mediaType: b,
            scanForMedia: function(y) {
                d.scanForMedia(y || document)
            },
            setPingInterval: function(y) {
                if (1 > y) {
                    throw new Error("Ping interval needs to be at least one second")
                }
                n = parseInt(y, 10)
            },
            removePlayer: function(y) {
                d.removePlayer(y)
            },
            addPlayer: function(z, y) {
                d.registerPlayer(z, y)
            },
            disableMediaAnalytics: function() {
                u = false
            },
            enableMediaAnalytics: function() {
                u = true
            },
            setPiwikTrackers: function(y) {
                if (y === null) {
                    p = null;
                    return
                }
                if (!m(y)) {
                    y = [y]
                }
                p = y
            },
            getPiwikTrackers: function() {
                return h()
            },
            isMediaAnalyticsEnabled: function() {
                return u
            },
            enableDebugMode: function() {
                j = true
            }
        };
        if (window.Piwik.initialized) {
            var w = Piwik.getAsyncTrackers();
            var x = 0;
            for (x; x < w.length; x++) {
                l(w[x])
            }
            Piwik.on("TrackerSetup", l);
            Piwik.retryMissedPluginCalls();
            g();
            k()
        } else {
            Piwik.on("TrackerSetup", l);
            Piwik.on("PiwikInitialized", function() {
                g();
                k()
            })
        }
    }
    if ("object" === typeof window.Piwik) {
        s()
    } else {
        if ("object" !== typeof window.piwikPluginAsyncInit) {
            window.piwikPluginAsyncInit = []
        }
        window.piwikPluginAsyncInit.push(s)
    }
})();