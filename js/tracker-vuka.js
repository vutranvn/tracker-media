/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function() {
    var s = new Date().getTime();
    var k = false;
    var p = 5;
    var x = true;
    var r = null;

    function j() {
        if (typeof Piwik === "object" && typeof Piwik.JSON === "object") {
            return Piwik.JSON
        } else {
            if (window.JSON && window.JSON.parse && window.JSON.stringify) {
                return window.JSON
            } else {
                if (typeof JSON2 === "object" && JSON2.parse && window.JSON2.stringify) {
                    return JSON2
                } else {
                    return {
                        parse: function() {
                            return {}
                        },
                        stringify: function() {
                            return ""
                        }
                    }
                }
            }
        }
    }

    var i = true;

    function e() {
        if (k && "undefined" !== typeof console && console && console.debug) {
            console.debug.apply(console, arguments)
        }
    }

    function o(z) {
        return typeof z === "object" && typeof z.length === "number"
    }

    function n() {
        return "function" === typeof jwplayer
    }

    var b = {
        AUDIO: "Audio",
        VIDEO: "Video"
    };
    var t = {
        getLocation: function() {
            var z = this.location || window.location;
            if (!z.origin) {
                z.origin = z.protocol + "//" + z.hostname + (z.port ? ":" + z.port : "")
            }
            return z
        },
        setLocation: function(z) {
            this.location = z
        },
        makeUrlAbsolute: function(A) {
            if ((!A || String(A) !== A) && A !== "") {
                return A
            }
            if (A.indexOf("//") === 0) {
                return this.getLocation().protocol + A
            }
            if (A.indexOf("://") !== -1) {
                return A
            }
            if (A.indexOf("/") === 0) {
                return this.getLocation().origin + A
            }
            if (A.indexOf("#") === 0 || A.indexOf("?") === 0) {
                return this.getLocation().origin + this.getLocation().pathname + A
            }
            if ("" === A) {
                return this.getLocation().href
            }
            var z = "(.*/)";
            var B = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(z))[0];
            return B + A
        }
    };
    var v = {
        getCurrentTime: function() {
            return new Date().getTime()
        },
        roundTimeToSeconds: function(z) {
            return Math.round(z / 1000)
        },
        isNumber: function(z) {
            return !isNaN(z)
        },
        getTimeScriptLoaded: function(z) {
            return s
        },
        generateUniqueId: function() {
            var C = "";
            var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var B = A.length;
            for (var z = 0; z < 16; z++) {
                C += A.charAt(Math.floor(Math.random() * B))
            }
            return C
        },
        getQueryParameter: function(z, D) {
            var C = new RegExp("[?&]" + D + "(=([^&#]*)|&|#|$)");
            var B = C.exec(z);
            if (!B) {
                return null
            }
            if (!B[2]) {
                return ""
            }
            var A = B[2].replace(/\+/g, " ");
            return decodeURIComponent(A)
        }
    };
    var c = {
        getAttribute: function(A, z) {
            if (A && A.getAttribute && z) {
                return A.getAttribute(z)
            }
            return null
        },
        setAttribute: function(B, z, A) {
            if (B && B.setAttribute) {
                B.setAttribute(z, A)
            }
        },
        isMediaIgnored: function(z) {
            var A = c.getAttribute(z, "data-piwik-ignore");
            return !!A || A === ""
        },

        //baysao
        getMediaBirate: function(z, A) {
            console.log(z);
            var B = c.getAttribute(z, "data-piwik-bitrate");
            console.log("bitrate from node:" + B);
            if (B) {
                return B
            }
            return A;
        },

        getMediaDuration: function(z, A) {
            var B = c.getAttribute(z, "data-piwik-duration");
            if (B) {
                return B
            }
            return A;
        },
        
        getMediaResource: function(z, A) {
            var B = c.getAttribute(z, "data-piwik-resource");
            if (B) {
                return B
            }
            B = c.getAttribute(z, "src");
            if (B) {
                return B
            }
            return A
        },
        getMediaTitle: function(z) {
            var A = c.getAttribute(z, "data-piwik-title");
            if (!A) {
                A = c.getAttribute(z, "title")
            }
            if (!A) {
                A = c.getAttribute(z, "alt")
            }
            if (!A) {
                A = document.title;
            }
            return A
        },
        hasCssClass: function(B, C) {
            if (B && B.className) {
                var A = ("" + B.className).split(" ");
                for (var z = 0; z < A.length; z++) {
                    if (A[z] === C) {
                        return true
                    }
                }
            }
            return false
        },
        getFirstParentWithClass: function(B, C, z) {
            if (z <= 0 || !B || !B.parentNode) {
                return null
            }
            var A = B.parentNode;
            if (this.hasCssClass(A, C)) {
                return A
            } else {
                return this.getFirstParentWithClass(A, C, --z)
            }
        },
        isFullscreen: function(z) {
            if (z && document.fullScreenElement === z || document.mozFullScreenElement === z || document.webkitFullscreenElement === z || document.msFullscreenElement === z) {
                return true
            }
            return false
        }
    };

    function h() {
        if (null === r) {
            if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
                return Piwik.getAsyncTrackers()
            }
        }
        if (o(r)) {
            return r
        }
        return []
    }

    function y(A, z, B) {
        this.playerName = A;
        this.type = z;
        this.resource = B;
        this.reset()
    }

    y.piwikTrackers = [];
    y.prototype.reset = function() {
        this.id = v.generateUniqueId();
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
        this.mediaLengthInSeconds = 0;
    };
    y.prototype.setResource = function(z) {
        this.resource = z
    };
    //baysao: add V param for value
    y.prototype.trackEvent = function(F, V) {
        var z = h();
        var A = "Media" + this.type;
        var D = this.mediaTitle || this.resource;
        var B = [A, F, D, V];
        if (z && z.length) {
            var C = 0,
                E;
            for (C; C < z.length; C++) {
                E = z[C];
                if (E && E.MediaAnalytics && E.MediaAnalytics.isTrackEventsEnabled()) {
                    E.trackEvent.apply(E, B)
                }
            }
        } else {
            if (typeof _paq === "undefined") {
                _paq = []
            }
            B.unshift("trackEvent");
            _paq.push(B);
            e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
        }
        e("trackEvent", A, D, F, V)
    };
    y.prototype.trackProgress = function(D, G, F, A, B, I, Q, J, N, K, H, z) {
        var P = {
            ma_id: D,
            ma_ti: G !== null ? G : "",
            ma_pn: F,
            ma_mt: A,
            ma_re: B,
            ma_st: parseInt(I, 10),
            ma_ps: parseInt(Q, 10),
            ma_le: J,
            ma_ttp: N !== null ? N : "",
            ma_w: K ? K : "",
            ma_h: H ? H : "",
            ma_fs: z ? "1" : "0"
        };
        var L = "";
        for (var E in P) {
            if (Object.prototype.hasOwnProperty.call(P, E)) {
                L += E + "=" + encodeURIComponent(P[E]) + "&"
            }
        }
        var O = h();
        if (O && O.length) {
            var M = 0,
                C;
            for (M; M < O.length; M++) {
                C = O[M];
                if (C && C.MediaAnalytics && C.MediaAnalytics.isTrackProgressEnabled()) {
                    C.trackRequest(L)
                }
            }
        } else {
            if (typeof _paq === "undefined") {
                _paq = []
            }
            _paq.push(["trackRequest", L]);
            e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
        }
        if (k) {
            e("trackProgress", j().stringify(P))
        }
    };
    y.prototype.setFullscreen = function(z) {
        if (!this.fullscreen) {
            this.fullscreen = !!z
        }
    };
    y.prototype.setWidth = function(z) {
        if (v.isNumber(z)) {
            this.width = parseInt(z, 10)
        }
    };
    y.prototype.setHeight = function(z) {
        if (v.isNumber(z)) {
            this.height = parseInt(z, 10)
        }
    };
    y.prototype.setMediaBitrate = function(z) {
        this.mediaBitrate = z
    };

    y.prototype.getMediaBitrate = function(z) {
        return this.mediaBitrate;
    };

    y.prototype.setMediaTitle = function(z) {
        this.mediaTitle = z
    };
    y.prototype.getMediaTitle = function() {
        return this.mediaTitle
    };
    y.prototype.setMediaProgressInSeconds = function(z) {
        this.mediaProgressInSeconds = z
    };
    y.prototype.getMediaProgressInSeconds = function() {
        return this.mediaProgressInSeconds
    };
    y.prototype.setMediaTotalLengthInSeconds = function(z) {
        this.mediaLengthInSeconds = z;
    };
    y.prototype.getMediaTotalLengthInSeconds = function() {
        return this.mediaLengthInSeconds
    };
    y.prototype.play = function() {
        console.log("play");
        this.startWatchedTime();
        if (i && this.timeToInitialPlay === null) {
            this.timeToInitialPlay = v.roundTimeToSeconds(v.getCurrentTime() - v.getTimeScriptLoaded())
        }
        i = false;
        if (this.isPaused) {
            this.isPaused = false;
            this.trackEvent("resume")
        } else {
            this.trackEvent("play")
        }
        var birate = c.getMediaBirate(1024);
        console.log("bitrate", bitrate);
        this.trackUpdate()
    };
    y.prototype.startWatchedTime = function() {
        console.log("=> startWatchedTime");
        this.isPlaying = true;
        this.lastTimeCheck = v.getCurrentTime()
        console.log("lastTimeCheck:" + this.lastTimeCheck);
    };
    y.prototype.stopWatchedTime = function() {
        console.log('=> stopWatchedTime');
        this.isPlaying = false;
        if (this.lastTimeCheck) {
            //baysao: collect buffered time
            var bufferedTime = v.getCurrentTime() - this.lastTimeCheck;
            console.log("bufferedTime:" + bufferedTime);
            this.watchedTime += bufferedTime;

            // if(this.watchedTime > 0) {
            //     var bufferedTime = v.getCurrentTime() - this.lastTimeCheck;
            //console.log("bufferedTime:" + bufferedTime);
            // console.log("watchedTime:" + this.watchedTime);
            // console.log("bufferedTimePercent:" + (bufferedTime / this.watchedTime));
            // var percentBuffered = bufferedTime * 100 / this.watchedTime;
            // console.log("percentBuffered:" + percentBuffered);
            // this.trackEvent("buffered", percentBuffered);
            //}
            this.lastTimeCheck = null
        }
    };
    y.prototype.seekStart = function() {
        console.log("seekStart");
        this.stopWatchedTime()
    };
    y.prototype.seekFinish = function() {
        console.log("seekFinish");
        this.startWatchedTime()
    };
    y.prototype.pause = function() {
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
    y.prototype.finish = function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null
        }
        this.stopWatchedTime();
        this.trackUpdate();
        this.trackEvent("finish");
        this.reset()
    };
    y.prototype.trackUpdate = function() {
        console.log("trackUpdate");
        var z = v.getCurrentTime();
        if (this.lastTimeCheck) {
            this.watchedTime += (z - this.lastTimeCheck);
            this.lastTimeCheck = z
        }
        var C = this.mediaLengthInSeconds;
        if (!C || !v.isNumber(C)) {
            C = ""
        } else {
            C = parseInt(this.mediaLengthInSeconds, 10)
        }
        var A = v.roundTimeToSeconds(this.watchedTime);
        var B = this.mediaProgressInSeconds;
        if (B > C && C) {
            B = C
        }
        this.trackProgress(this.id, this.mediaTitle, this.playerName, this.type, this.resource, A, B, C, this.timeToInitialPlay, this.width, this.height, this.fullscreen)
    };
    y.prototype.update = function() {
        if (this.timeout) {
            return
        }
        var z = this;
        this.timeout = setTimeout(function() {
            z.trackUpdate();
            z.timeout = null
        }, p * 1000)
    };
    var d = {
        players: {},
        registerPlayer: function(z, A) {
            if (!A || !A.scanForMedia || "function" !== typeof A.scanForMedia) {
                throw new Error("A registered player does not implement the scanForMedia function")
            }
            z = z.toLowerCase();
            this.players[z] = A
        },
        removePlayer: function(z) {
            z = z.toLowerCase();
            delete this.players[z]
        },
        getPlayer: function(z) {
            z = z.toLowerCase();
            if (z in this.players) {
                return this.players[z]
            }
            return null
        },
        getPlayers: function() {
            return this.players
        },
        scanForMedia: function(A) {
            if (!x) {
                return
            }
            if ("undefined" === typeof A || !A) {
                A = document
            }
            var z;
            for (z in this.players) {
                if (Object.prototype.hasOwnProperty.call(this.players, z)) {
                    this.players[z].scanForMedia(A)
                }
            }
        }
    };
    var f = function(B, G) {
        if (!B) {
            return
        }
        if (!window.addEventListener) {
            return
        }
        if (B.hasPlayerInstance) {
            return
        }
        B.hasPlayerInstance = true;
        var z = b.VIDEO === G;
        var A = t.makeUrlAbsolute(B.currentSrc);
        var C = c.getMediaResource(B, A);
        var I;
        // baysao
        if (B.className === "vjs-tech")
            I = new y("videojs", G, C);
        else
            I = new y("html5" + G.toLowerCase(), G, C);
        if (z) {
            I.setWidth(B.videoWidth);
            I.setHeight(B.videoHeight);
            I.setFullscreen(c.isFullscreen(B))
        }
        var H = c.getMediaTitle(B);
        if (H) {
            I.setMediaTitle(H)
        } else {
            D(B, I)
        }
        if (B.duration) {
            I.setMediaTotalLengthInSeconds(B.duration)
        }
        var E = false;
        var F = null;
	if (B.currentSrc) {
            F = B.currentSrc
        }

        function D(M, L) {
            if (n() && !L.getMediaTitle()) {
                var N = c.getFirstParentWithClass(M, "jwplayer", 2);
                if (N) {
                    var J = jwplayer(N);
                    if (J && J.getPlaylistItem) {
                        var K = J.getPlaylistItem();
                        if (K && K.title) {
                            L.setMediaTitle(K.title)
                        }
                    }
                }
            }
        }

        function C() {
            if (!G && B.currentSrc) {
                G = B.currentSrc
            } else {
                if (G && B.currentSrc && G != B.currentSrc) {
                    G = B.currentSrc;
                    var L = t.makeUrlAbsolute(G);
                    var K = I.getMediaTitle();
                    I.reset();
                    I.setResource(L);
                    I.setMediaTitle("");
                    var M = c.getMediaTitle(B);
                    if (M && M !== K) {
                        I.setMediaTitle(M)
                    } else {
                        D(B, I)
                    }
                }
            }
        }
        B.addEventListener("playing", function() {
            C();
            E = true;
            I.play()
        }, true);
        B.addEventListener("loadeddata", function() {
            C()
        }, true);
        
        // B.addEventListener("play", function() {
        //     if (!F && B.currentSrc) {
        //         F = B.currentSrc
        //     } else {
        //         if (F && B.currentSrc && F != B.currentSrc) {
        //             F = B.currentSrc;
        //             var J = t.makeUrlAbsolute(F);
        //             I.reset();
        //             I.setResource(J);
        //             I.setMediaTitle("");
        //             D(B, I)
        //         }
        //     }
        //     E = true;
        //     I.play()
        // }, true);
        B.addEventListener("pause", function() {
            if (B.currentTime && B.duration && B.currentTime === B.duration) {
                return
            }
            I.pause()
        }, true);
        B.addEventListener("ended", function() {
            I.finish()
        }, true);
        B.addEventListener("timeupdate", function() {
            I.setMediaProgressInSeconds(B.currentTime);
            I.setMediaTotalLengthInSeconds(B.duration);
            if (z && !I.width) {
                I.setWidth(B.videoWidth);
                I.setHeight(B.videoHeight)
            }
            if (!E) {
                E = true;
                I.play()
            } else {
                I.update()
            }
        }, true);
        B.addEventListener("seeking", function() {
            I.seekStart()
        }, true);
        B.addEventListener("seeked", function() {
            I.setMediaProgressInSeconds(B.currentTime);
            I.setMediaTotalLengthInSeconds(B.duration);
            I.seekFinish()
        }, true);
        if (z) {
            B.addEventListener("resize", function() {
                I.setWidth(B.videoWidth);
                I.setHeight(B.videoHeight);
                I.setFullscreen(c.isFullscreen(B))
            }, true);
            window.addEventListener("resize", function() {
                I.setWidth(B.clientWidth);
                I.setHeight(B.clientHeight);
                I.setFullscreen(c.isFullscreen(B))
            }, false)
        }
        I.trackUpdate()
    };
    f.scanForMedia = function(z) {
        if (!window.addEventListener) {
            return
        }
        var D = z.getElementsByTagName("video");
        for (var B = 0; B < D.length; B++) {
            if (!c.isMediaIgnored(D[B])) {
                new f(D[B], b.VIDEO)
            }
        }
        D = null;
        var A = z.getElementsByTagName("audio");
        for (var B = 0; B < A.length; B++) {
            if (!c.isMediaIgnored(A[B])) {
                new f(A[B], b.AUDIO)
            }
        }
        A = null;
        if ("undefined" !== typeof soundManager && soundManager && "undefined" !== typeof soundManager.sounds) {
            for (var B in soundManager.sounds) {
                if (Object.prototype.hasOwnProperty.call(soundManager.sounds, B)) {
                    var C = soundManager.sounds[B];
                    if (C && C.isHTML5 && C._a) {
                        if (!c.isMediaIgnored(C._a)) {
                            new f(C._a, b.AUDIO)
                        }
                    }
                }
            }
        }
    };
    var w = function(B, H) {
        if (!B || !window.addEventListener) {
            return
        }
        if (B.hasPlayerInstance || !n()) {
            return
        }
        var I = c.getFirstParentWithClass(B, "jwplayer", 2);
        if (!I) {
            return
        }
        var L = jwplayer(I);
        if (!L || !L.getItem || "undefined" === (typeof L.getItem())) {
            return
        }
        B.hasPlayerInstance = true;

        function M(N) {
            var O = N.getPlaylistItem();
            if (O && O.file) {
                return O.file
            }
            return ""
        }

        function A(N) {
            var O = N.getPlaylistItem();
            if (O && O.title) {
                return O.title
            }
            return null
        }

        function G(N, O, Q) {
            var P = M(N);
            if (Q && P && Q != P) {
                Q = P;
                O.reset();
                O.setResource(t.makeUrlAbsolute(Q));
                O.setMediaTitle(A(N));
                O.setWidth(N.getWidth());
                O.setHeight(N.getHeight());
                O.setFullscreen(N.getFullscreen());
                return true
            }
            return false
        }

        var K = M(L);
        var z = t.makeUrlAbsolute(K);
        var C = c.getMediaResource(B, z);
        var J = new y("jwplayer", H, C);
        J.setMediaTitle(A(L));
        J.setWidth(L.getWidth());
        J.setHeight(L.getHeight());
        J.setFullscreen(L.getFullscreen());
        var D = L.getDuration();
        if (D) {
            J.setMediaTotalLengthInSeconds(D)
        }
        var E = false,
            F = K;
        L.on("play", function() {
            G(L, J, F);
            E = true;
            J.play()
        }, true);
        L.on("playlistItem", function() {
            G(L, J, F);
            if (L.getState() !== "playing") {
                E = false
            }
        }, true);
        L.on("pause", function() {
            if (L.getPosition() && L.getDuration() && L.getPosition() === L.getDuration()) {
                return
            }
            J.pause()
        }, true);
        L.on("complete", function() {
            J.finish()
        }, true);
        L.on("time", function() {
//            console.log("time");
            var N = L.getPosition();
            if (N) {
                J.setMediaProgressInSeconds(N)
            }
            var O = L.getDuration();
            if (O) {
                J.setMediaTotalLengthInSeconds(O)
            }
            if (E) {
                J.update()
            } else {
                E = true;
                J.play()
            }
        }, true);
        L.on("seek", function() {
            J.seekStart()
        }, true);
        L.on("seeked", function() {
            var N = L.getPosition();
            if (N) {
                J.setMediaProgressInSeconds(N)
            }
            var O = L.getDuration();
            if (O) {
                J.setMediaTotalLengthInSeconds(O)
            }
            J.seekFinish()
        }, true);
        L.on("resize", function() {
            J.setWidth(L.getWidth());
            J.setHeight(L.getHeight());
            J.setFullscreen(L.getFullscreen())
        }, true);
        L.on("fullscreen", function() {
            J.setWidth(L.getWidth());
            J.setHeight(L.getHeight());
            J.setFullscreen(L.getFullscreen())
        }, false);
        J.trackUpdate()
    };
    w.scanForMedia = function(z) {
        if (!window.addEventListener || !n()) {
            return
        }
        // var B = z.getElementsByTagName("object");
        var B = z.getElementsByTagName("video");
        //        console.log(B);
        for (var A = 0; A < B.length; A++) {
            var k = c.hasCssClass(B[A], "jw-video");
            //            console.log(k);
            // if (!c.isMediaIgnored(B[A]) && c.hasCssClass(B[A], "jw-swf")) {
            if (!c.isMediaIgnored(B[A]) && c.hasCssClass(B[A], "jw-video")) {
                new w(B[A], b.VIDEO)
            }
        }
        B = null
    };
    var a = function(C, D) {
        if (!C) {
            return
        }
        if (!window.addEventListener) {
            return
        }
        if (C.playerInstance) {
            return
        }
        C.playerInstance = true;
        var z = c.getAttribute(C, "src");
        var B = c.getMediaResource(C, null);
        var H = new y("vimeo", D, B);
        H.setWidth(C.clientWidth);
        H.setHeight(C.clientHeight);
        H.setFullscreen(c.isFullscreen(C));
        window.addEventListener("resize", function() {
            H.setWidth(C.clientWidth);
            H.setHeight(C.clientHeight);
            H.setFullscreen(c.isFullscreen(C))
        }, false);
        var G = c.getMediaTitle(C);
        if (G) {
            H.setMediaTitle(G)
        }
        var A = function(J) {
            if (!(/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/).test(J.origin)) {
                return false
            }
            if (!J || !J.data) {
                return
            }
            if (C.contentWindow && J.source && C.contentWindow !== J.source) {
                return
            }
            var K = J.data;
            if ("string" === typeof K) {
                K = j().parse(J.data)
            }
            if (("event" in K && K.event === "ready") || ("method" in K && K.method === "ping")) {
                if (E === "*") {
                    E = J.origin
                }
                if (!C.isVimeoReady) {
                    C.isVimeoReady = true;
                    F("addEventListener", "play");
                    F("addEventListener", "pause");
                    F("addEventListener", "finish");
                    F("addEventListener", "seek");
                    F("addEventListener", "playProgress");
                    F("getVideoTitle")
                }
                return
            }
            if ("method" in K) {
                e("vimeoMethod", K.method);
                switch (K.method) {
                    case "getVideoTitle":
                        if (K.value) {
                            H.setMediaTitle(K.value)
                        }
                        H.trackUpdate();
                        break
                }
                return
            }
            if ("event" in K) {
                var I = K.event;
                e("vimeoEvent", I);
                if (K && K.data) {
                    K = K.data
                }
                if (H && K && K.seconds) {
                    if (H.getMediaProgressInSeconds() === K.seconds && (I === "playProgress" || I === "timeupdate")) {
                        return
                    }
                    H.setMediaProgressInSeconds(K.seconds)
                }
                if (H && K && K.duration) {
                    H.setMediaTotalLengthInSeconds(K.duration)
                }
                switch (I) {
                    case "play":
                        H.play();
                        break;
                    case "timeupdate":
                    case "playProgress":
                        if (H._isSeeking) {
                            H._isSeeking = false;
                            H.seekFinish()
                        }
                        H.update();
                        break;
                    case "seek":
                        H.seekStart();
                        H._isSeeking = true;
                        break;
                    case "pause":
                        if (K && K.seconds && K && K.duration && K.seconds === K.duration) {
                            e("ignoring pause event because video is finished");
                            break
                        }
                        H.pause();
                        break;
                    case "finish":
                        H.finish();
                        break
                }
            }
        };
        window.addEventListener("message", A, true);
        var E = "*";
        H._isSeeking = false;

        function F(L, J) {
            var I = {
                method: L
            };
            if (J !== undefined) {
                I.value = J
            }
            if (C && C.contentWindow) {
                if (navigator && navigator.userAgent) {
                    var K = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                    if (K >= 8 && K < 10) {
                        I = j().stringify(I)
                    }
                }
                C.contentWindow.postMessage(I, E)
            }
        }

        F("ping")
    };
    a.scanForMedia = function(z) {
        if (!window.addEventListener) {
            return
        }
        var B = z.getElementsByTagName("iframe");
        for (var A = 0; A < B.length; A++) {
            if (c.isMediaIgnored(B[A])) {
                continue
            }
            var C = c.getAttribute(B[A], "src");
            if (C && C.indexOf("player.vimeo.com") > 0) {
                new a(B[A], b.VIDEO)
            }
        }
        B = null
    };
    var q = function(D, G) {
        if (!D) {
            return
        }
        if (!window.addEventListener) {
            return
        }
        if (D.playerInstance) {
            return
        }
        var A = c.getMediaResource(D, null);
        var K = new y("youtube", G, A);
        K.setWidth(D.clientWidth);
        K.setHeight(D.clientHeight);
        K.setFullscreen(c.isFullscreen(D));
        window.addEventListener("resize", function() {
            K.setWidth(D.clientWidth);
            K.setHeight(D.clientHeight);
            K.setFullscreen(c.isFullscreen(D))
        }, false);
        var I = c.getMediaTitle(D);
        if (I) {
            K.setMediaTitle(I)
        }
        var B = false;
        var C = null;
        var J = 0;
        var F = !c.getAttribute(D, "data-piwik-title");
        var z = false;
        var E = false;
        var H = null;
        D.playerInstance = new YT.Player(D, {
            events: {
                onReady: function(L) {
                    if (!L || !L.target) {
                        return
                    }
                    if (F && L.target && L.target.getVideoData) {
                        var M = L.target.getVideoData();
                        K.setMediaTitle(M.title)
                    }
                    K.trackUpdate()
                },
                onStateChange: function(L) {
                    if (!L || !L.target) {
                        return
                    }
                    var O = L.target;
                    if (!O.getPlayerState) {
                        e("youtubeMissingPlayerState");
                        return
                    }
                    var N = O.getPlayerState();
                    e("youtubeStateChange", N);
                    switch (N) {
                        case YT.PlayerState.ENDED:
                            J = 0;
                            if (O.getCurrentTime) {
                                K.setMediaProgressInSeconds(O.getCurrentTime())
                            }
                            if (O.getDuration) {
                                K.setMediaTotalLengthInSeconds(O.getDuration())
                            }
                            K.finish();
                            if (C) {
                                clearInterval(C);
                                C = null
                            }
                            break;
                        case YT.PlayerState.PLAYING:
                            var M = null;
                            if (O.getVideoData) {
                                M = O.getVideoData()
                            }
                            if (!H && M && M.video_id) {
                                H = M.video_id
                            } else {
                                if (H && M && M.video_id && H != M.video_id) {
                                    H = M.video_id;
                                    K.reset();
                                    if (O.getVideoUrl) {
                                        K.setResource(O.getVideoUrl())
                                    }
                                    F = true;
                                    z = false;
                                    B = false;
                                    e("currentVideoId has changed to " + H)
                                }
                            }
                            if (O.getCurrentTime) {
                                J = v.getCurrentTime();
                                K.setMediaProgressInSeconds(O.getCurrentTime())
                            }
                            if (O.getDuration) {
                                K.setMediaTotalLengthInSeconds(O.getDuration())
                            }
                            if (F) {
                                if (M && M.title) {
                                    K.setMediaTitle(M.title)
                                }
                                F = false
                            }
                            if (!z || E) {
                                z = true;
                                E = false;
                                B = false;
                                K.play()
                            } else {
                                if (B) {
                                    B = false;
                                    K.seekFinish()
                                }
                            }
                            K.update();
                            if (!C) {
                                C = setInterval(function() {
                                    if (J) {
                                        var Q = K.getMediaProgressInSeconds();
                                        var P = v.getCurrentTime();
                                        if (J) {
                                            Q += v.roundTimeToSeconds(P - J);
                                            J = P
                                        }
                                        K.setMediaProgressInSeconds(Q)
                                    }
                                    K.update()
                                }, 1 * 1000)
                            }
                            break;
                        case -1:
                        case YT.PlayerState.PAUSED:
                            J = 0;
                            K.pause();
                            E = true;
                            if (C) {
                                clearInterval(C);
                                C = null
                            }
                            break;
                        case YT.PlayerState.BUFFERING:
                            J = 0;
                            K.seekStart();
                            B = true;
                            if (C) {
                                clearInterval(C);
                                C = null
                            }
                            break
                    }
                }
            }
        })
    };
    q.scanForMedia = function(A) {
        if (!window.addEventListener) {
            return
        }
        var B = [];
        var C = A.getElementsByTagName("iframe");
        for (var D = 0; D < C.length; D++) {
            if (c.isMediaIgnored(C[D])) {
                continue
            }
            var F = c.getAttribute(C[D], "src");
            if (F && F.indexOf("youtube.com") > 0) {
                c.setAttribute(C[D], "enablejsapi", "true");
                B.push(C[D])
            }
        }
        C = null;
        if (B.length && !window.onYouTubeIframeAPIReady) {
            window.onYouTubeIframeAPIReady = function() {
                var G = A.getElementsByTagName("iframe");
                for (var H = 0; H < G.length; H++) {
                    if (c.isMediaIgnored(G[H])) {
                        continue
                    }
                    var I = c.getAttribute(G[H], "src");
                    if (I && I.indexOf("youtube.com") > 0) {
                        if (G[H].setAttribute) {
                            G[H].setAttribute("enablejsapi", "1")
                        }
                        new q(G[H], b.VIDEO)
                    }
                }
            };
            var z = A.createElement("script");
            z.src = "https://www.youtube.com/iframe_api";
            var E = A.getElementsByTagName("script")[0];
            E.parentNode.insertBefore(z, E)
        } else {
            if (B.length && "undefined" !== typeof YT) {
                for (var D = 0; D < B.length; D++) {
                    new q(B[D], b.VIDEO)
                }
            }
        }
        B = null
    };

    function THEOplayer(node, player, mediaType) {
        //var node = player.element;
        if (node.hasPlayerInstance) {
            // prevent creating multiple trackers for the same media 
            // when scanning for media multiple times 
            return;
        }

        node.hasPlayerInstance = true;

        // find the actual resource / URL of the video
        //var actualResource = c.getAttribute(node, 'src');
        // a user can overwrite the actual resource by defining a "data-piwik-resource" attribute. 
        // the method `getMediaResource` will detect whether such an attribute was set 
        //var resource = c.getMediaResource(node, actualResource);
        var resource = player.src;


        // create an instance of the media tracker. 
        // Make sure to replace myPlayerName with your player name.
        var tracker = new y('theoplayer', mediaType, resource);

        // for video you should detect the width, height, and fullscreen usage, if possible
        tracker.setWidth(player.videoWidth);
        tracker.setHeight(player.videoHeight);
        tracker.setFullscreen(player.presentationMode === 'fullscreen' ? 1 : 0);

        // tracker.setWidth(node.clientWidth);
        //tracker.setHeight(node.clientHeight);
        //tracker.setFullscreen(c.isFullscreen(node));


        // the method `getMediaTitle` will try to get a media title from a
        // "data-piwik-title", "title" or "alt" HTML attribute. Sometimes it might be possible
        // to retrieve the media title directly from the video or audio player
        var title = c.getMediaTitle(node);
        //console.log("title:" + title);
        if (title)
            tracker.setMediaTitle(title);

        var bitrate = c.getMediaBirate(node);

        if(bitrate)
            tracker.setMediaBitrate(bitrate);
        
        var duration = c.getMediaDuration(node);
        
        if(duration)
            tracker.setMediaTotalLengthInSeconds(duration);
        else
            tracker.setMediaTotalLengthInSeconds(player.duration);


        console.log(bitrate);
        console.log(duration);
        var useCapture = true;

        player.addEventListener('play', function() {
            //console.log("play");
            tracker.play();

        }, useCapture);


        player.addEventListener('pause', function() {
            //console.log("pause");
            // notify the tracker the media is now paused
            tracker.pause();
        }, useCapture);


        player.addEventListener('ended', function() {
            //console.log("ended");
            // notify the tracker the media is now finished
            tracker.finish();
        }, useCapture);


        player.addEventListener('timeupdate', function() {
            //console.log("timeupdate");
            // notify the tracker the media is still playing

            // we update the current made progress (time position) and duration of 
            // the media. Not all players might give you that information
            tracker.setMediaProgressInSeconds(player.currentTime);
            tracker.setMediaTotalLengthInSeconds(player.duration);

            // it is important to call the tracker.update() method regularly while the 
            // media is playing. If this method is not called eg every X seconds no 
            // updated data will be tracked. 
            // The method itself will not actually send a tracking request whenever it 
            // is called. Instead it will make sure to respect the set ping interval and
            // eg only send a tracking request every 5 seconds.
            tracker.update();

        }, useCapture);


        player.addEventListener('seeking', function() {
            //console.log("seeking");
            // "seekStart" is needed when the player is seeking or buffering. 
            // It will stop the timer that tracks for how long the media has been played.
            tracker.seekStart();
        }, true);


        player.addEventListener('seeked', function() {
            //console.log("seeked");
            // we update the current made progress (time position) and duration of 
            // the media. Not all players might give you that information
            tracker.setMediaProgressInSeconds(player.currentTime);
            tracker.setMediaTotalLengthInSeconds(player.duration);
            //console.log("watchedTime:" + player.watchedTime);
            // "seekFinish" is needed when the player has finished seeking or buffering. 
            // It will start the timer again that tracks for how long the media has been played.
            tracker.seekFinish();
        }, useCapture);


        // // for videos it might be useful to listen to the resize event to detect a 
        // // changed video width or when the video has gone fullscreen
        window.addEventListener('resize', function() {
            //console.log("resize");
            //console.log(player.presentationMode);
            tracker.setWidth(player.videoWidth);
            tracker.setHeight(player.videoHeight);
            tracker.setFullscreen(player.presentationMode === 'fullscreen' ? 1 : 0);
            //            tracker.setFullscreen(player.presentationMode === 'fullscreen');

            // tracker.setWidth(node.clientWidth);
            // tracker.setHeight(node.clientHeight);
            // tracker.setFullscreen(c.isFullscreen(node));
        }, useCapture);


        // here we make sure to send an initial tracking request for this media. 
        // This basically tracks an impression for this media. 
        tracker.trackUpdate();

    }

    THEOplayer.scanForMedia = function(documentOrHTMLElement) {
        if ("function" !== typeof theoplayer) return;

        function isTHEOplayerLoaded() {

            var mytimeout = setTimeout(function() {
                if (!theoplayer.players) {
                    clearTimeout(mytimeout);
                    isTHEOplayerLoaded();
                    return;
                }

                for (var i = 0; i < theoplayer.players.length; i++) {
                    var element = theoplayer.players[i].element;
                    var parentNode = c.getFirstParentWithClass(element, "theoplayer");
                    console.log(element);
                    console.log(parentNode);

                    if (element && parentNode && !c.isMediaIgnored(parentNode))
                        new THEOplayer(theoplayer.players[i], parentNode, b.VIDEO);
                }

            }, 1000);
        }
        if (!theoplayer.players) {
            isTHEOplayerLoaded();
        };
    }

    d.registerPlayer("vimeo", a);
    d.registerPlayer("youtube", q);
    d.registerPlayer("jwplayer", w);
    if ("function" === typeof theoplayer) {
        d.registerPlayer("theoplayer", THEOplayer);
    } else
        d.registerPlayer("html5", f);

    function m(z) {
        if ("undefined" !== typeof z.MediaAnalytics) {
            return
        }
        z.MediaAnalytics = {
            enableEvents: true,
            enableProgress: true,
            disableTrackEvents: function() {
                this.enableEvents = false
            },
            enableTrackEvents: function() {
                this.enableEvents = true
            },
            isTrackEventsEnabled: function() {
                return x && this.enableEvents
            },
            disableTrackProgress: function() {
                this.enableProgress = false
            },
            enableTrackProgress: function() {
                this.enableProgress = true
            },
            isTrackProgressEnabled: function() {
                return x && this.enableProgress
            }
        };
        Piwik.trigger("MediaAnalytics.TrackerInitialized", [z])
    }

    function g() {
        if (typeof window === "object" && "function" === typeof window.piwikMediaAnalyticsAsyncInit) {
            window.piwikMediaAnalyticsAsyncInit()
        }
    }

    function l() {
        var z = h();
        if (!z || !o(z) || !z.length) {
            return
        }
        Piwik.DOM.onReady(function() {
            d.scanForMedia(document)
        });
        Piwik.DOM.onLoad(function() {
            d.scanForMedia(document)
        })
    }

    function u() {
        if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.MediaAnalytics) {
            return
        }
        if ("object" === typeof window && !window.Piwik) {
            return
        }
        Piwik.MediaAnalytics = {
            utils: v,
            url: t,
            element: c,
            players: d,
            MediaTracker: y,
            mediaType: b,
            scanForMedia: function(B) {
                d.scanForMedia(B || document)
            },
            setPingInterval: function(B) {
                if (1 > B) {
                    throw new Error("Ping interval needs to be at least one second")
                }
                p = parseInt(B, 10)
            },
            removePlayer: function(B) {
                d.removePlayer(B)
            },
            addPlayer: function(C, B) {
                d.registerPlayer(C, B)
            },
            disableMediaAnalytics: function() {
                x = false
            },
            enableMediaAnalytics: function() {
                x = true
            },
            setPiwikTrackers: function(B) {
                if (B === null) {
                    r = null;
                    return
                }
                if (!o(B)) {
                    B = [B]
                }
                r = B
            },
            getPiwikTrackers: function() {
                return h()
            },
            isMediaAnalyticsEnabled: function() {
                return x
            },
            enableDebugMode: function() {
                k = true
            }
        };
        if (window.Piwik.initialized) {
            var z = Piwik.getAsyncTrackers();
            var A = 0;
            for (A; A < z.length; A++) {
                m(z[A])
            }
            Piwik.on("TrackerSetup", m);
            Piwik.retryMissedPluginCalls();
            g();
            l()
        } else {
            Piwik.on("TrackerSetup", m);
            Piwik.on("PiwikInitialized", function() {
                g();
                l()
            })
        }
    }

    if ("object" === typeof window.Piwik) {
        u()
    } else {
        if ("object" !== typeof window.piwikPluginAsyncInit) {
            window.piwikPluginAsyncInit = []
        }
        window.piwikPluginAsyncInit.push(u)
    }
})();
