function AkaHTML5MediaAnalytics(cG) {
    var b2 = "3.13.11";
    var bQ = document.currentScript;
    var m = null;
    var am = null;
    var a8 = true;
    var x = null;
    var bY = null;
    var dh = false;
    var ar = null;
    var cR = null;
    var aK = null;
    var df = false;
    var dq = "http://media-analytics.akamaized.net";
    var c1 = null;
    var c0 = new Date().getTime();
    var bH = [];
    bH.push({
        api: "originUrl",
        value: location.protocol + "//" + location.hostname
    });
    var a5 = false;
    var aB = this;
    if (cG) {
        if (cG.loaderName) {
            x = cG.loaderName
        }
        if (cG.loaderVersion) {
            bY = cG.loaderVersion
        }
    }
    if (bQ) {
        m = bQ.src
    } else {
        bR("Should be Internet Explorer")
    }

    function K() {
        return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
    }

    function dr() {
        return (K() + K() + "-" + K() + "-" + K() + "-" + K() + "-" + K() + K() + K())
    }
    var bJ = bJ || function(dz, dx) {
            var dA = {},
                dC = dA.lib = {},
                dt = dC.Base = function() {
                    function dE() {}
                    return {
                        extend: function(dF) {
                            dE.prototype = this;
                            var dG = new dE;
                            dF && dG.mixIn(dF);
                            dG.$super = this;
                            return dG
                        },
                        create: function() {
                            var dF = this.extend();
                            dF.init.apply(dF, arguments);
                            return dF
                        },
                        init: function() {},
                        mixIn: function(dF) {
                            for (var dG in dF) {
                                dF.hasOwnProperty(dG) && (this[dG] = dF[dG])
                            }
                            dF.hasOwnProperty("toString") && (this.toString = dF.toString)
                        },
                        clone: function() {
                            return this.$super.extend(this)
                        }
                    }
                }(),
                du = dC.WordArray = dt.extend({
                    init: function(dE, dF) {
                        dE = this.words = dE || [];
                        this.sigBytes = dF != dx ? dF : 4 * dE.length
                    },
                    toString: function(dE) {
                        return (dE || dB).stringify(this)
                    },
                    concat: function(dF) {
                        var dG = this.words,
                            dI = dF.words,
                            dH = this.sigBytes,
                            dF = dF.sigBytes;
                        this.clamp();
                        if (dH % 4) {
                            for (var dE = 0; dE < dF; dE++) {
                                dG[dH + dE >>> 2] |= (dI[dE >>> 2] >>> 24 - 8 * (dE % 4) & 255) << 24 - 8 * ((dH + dE) % 4)
                            }
                        } else {
                            if (65535 < dI.length) {
                                for (dE = 0; dE < dF; dE += 4) {
                                    dG[dH + dE >>> 2] = dI[dE >>> 2]
                                }
                            } else {
                                dG.push.apply(dG, dI)
                            }
                        }
                        this.sigBytes += dF;
                        return this
                    },
                    clamp: function() {
                        var dE = this.words,
                            dF = this.sigBytes;
                        dE[dF >>> 2] &= 4294967295 << 32 - 8 * (dF % 4);
                        dE.length = dz.ceil(dF / 4)
                    },
                    clone: function() {
                        var dE = dt.clone.call(this);
                        dE.words = this.words.slice(0);
                        return dE
                    },
                    random: function(dE) {
                        for (var dF = [], dG = 0; dG < dE; dG += 4) {
                            dF.push(4294967296 * dz.random() | 0)
                        }
                        return du.create(dF, dE)
                    }
                }),
                e = dA.enc = {},
                dB = e.Hex = {
                    stringify: function(dF) {
                        for (var dG = dF.words, dF = dF.sigBytes, dI = [], dE = 0; dE < dF; dE++) {
                            var dH = dG[dE >>> 2] >>> 24 - 8 * (dE % 4) & 255;
                            dI.push((dH >>> 4).toString(16));
                            dI.push((dH & 15).toString(16))
                        }
                        return dI.join("")
                    },
                    parse: function(dF) {
                        for (var dG = dF.length, dH = [], dE = 0; dE < dG; dE += 2) {
                            dH[dE >>> 3] |= parseInt(dF.substr(dE, 2), 16) << 24 - 4 * (dE % 8)
                        }
                        return du.create(dH, dG / 2)
                    }
                },
                dw = e.Latin1 = {
                    stringify: function(dF) {
                        for (var dG = dF.words, dF = dF.sigBytes, dE = [], dH = 0; dH < dF; dH++) {
                            dE.push(String.fromCharCode(dG[dH >>> 2] >>> 24 - 8 * (dH % 4) & 255))
                        }
                        return dE.join("")
                    },
                    parse: function(dF) {
                        for (var dE = dF.length, dH = [], dG = 0; dG < dE; dG++) {
                            dH[dG >>> 2] |= (dF.charCodeAt(dG) & 255) << 24 - 8 * (dG % 4)
                        }
                        return du.create(dH, dE)
                    }
                },
                dv = e.Utf8 = {
                    stringify: function(dF) {
                        try {
                            return decodeURIComponent(escape(dw.stringify(dF)))
                        } catch (dE) {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(dE) {
                        return dw.parse(unescape(encodeURIComponent(dE)))
                    }
                },
                dy = dC.BufferedBlockAlgorithm = dt.extend({
                    reset: function() {
                        this._data = du.create();
                        this._nDataBytes = 0
                    },
                    _append: function(dE) {
                        "string" == typeof dE && (dE = dv.parse(dE));
                        this._data.concat(dE);
                        this._nDataBytes += dE.sigBytes
                    },
                    _process: function(dF) {
                        var dE = this._data,
                            dK = dE.words,
                            dJ = dE.sigBytes,
                            dG = this.blockSize,
                            dH = dJ / (4 * dG),
                            dH = dF ? dz.ceil(dH) : dz.max((dH | 0) - this._minBufferSize, 0),
                            dF = dH * dG,
                            dJ = dz.min(4 * dF, dJ);
                        if (dF) {
                            for (var dI = 0; dI < dF; dI += dG) {
                                this._doProcessBlock(dK, dI)
                            }
                            dI = dK.splice(0, dF);
                            dE.sigBytes -= dJ
                        }
                        return du.create(dI, dJ)
                    },
                    clone: function() {
                        var dE = dt.clone.call(this);
                        dE._data = this._data.clone();
                        return dE
                    },
                    _minBufferSize: 0
                });
            dC.Hasher = dy.extend({
                init: function() {
                    this.reset()
                },
                reset: function() {
                    dy.reset.call(this);
                    this._doReset()
                },
                update: function(dE) {
                    this._append(dE);
                    this._process();
                    return this
                },
                finalize: function(dE) {
                    dE && this._append(dE);
                    this._doFinalize();
                    return this._hash
                },
                clone: function() {
                    var dE = dy.clone.call(this);
                    dE._hash = this._hash.clone();
                    return dE
                },
                blockSize: 16,
                _createHelper: function(dE) {
                    return function(dF, dG) {
                        return dE.create(dG).finalize(dF)
                    }
                },
                _createHmacHelper: function(dE) {
                    return function(dF, dG) {
                        return dD.HMAC.create(dE, dG).finalize(dF)
                    }
                }
            });
            var dD = dA.algo = {};
            return dA
        }(Math);
    (function() {
        var dv = bJ,
            du = dv.lib,
            dw = du.WordArray,
            du = du.Hasher,
            dt = [],
            e = dv.algo.SHA1 = du.extend({
                _doReset: function() {
                    this._hash = dw.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(dC, dx) {
                    for (var dE = this._hash.words, dz = dE[0], dy = dE[1], dA = dE[2], dB = dE[3], dG = dE[4], dD = 0; 80 > dD; dD++) {
                        if (16 > dD) {
                            dt[dD] = dC[dx + dD] | 0
                        } else {
                            var dF = dt[dD - 3] ^ dt[dD - 8] ^ dt[dD - 14] ^ dt[dD - 16];
                            dt[dD] = dF << 1 | dF >>> 31
                        }
                        dF = (dz << 5 | dz >>> 27) + dG + dt[dD];
                        dF = 20 > dD ? dF + ((dy & dA | ~dy & dB) + 1518500249) : 40 > dD ? dF + ((dy ^ dA ^ dB) + 1859775393) : 60 > dD ? dF + ((dy & dA | dy & dB | dA & dB) - 1894007588) : dF + ((dy ^ dA ^ dB) - 899497514);
                        dG = dB;
                        dB = dA;
                        dA = dy << 30 | dy >>> 2;
                        dy = dz;
                        dz = dF
                    }
                    dE[0] = dE[0] + dz | 0;
                    dE[1] = dE[1] + dy | 0;
                    dE[2] = dE[2] + dA | 0;
                    dE[3] = dE[3] + dB | 0;
                    dE[4] = dE[4] + dG | 0
                },
                _doFinalize: function() {
                    var dx = this._data,
                        dz = dx.words,
                        dA = 8 * this._nDataBytes,
                        dy = 8 * dx.sigBytes;
                    dz[dy >>> 5] |= 128 << 24 - dy % 32;
                    dz[(dy + 64 >>> 9 << 4) + 15] = dA;
                    dx.sigBytes = 4 * dz.length;
                    this._process()
                }
            });
        dv.SHA1 = du._createHelper(e);
        dv.HmacSHA1 = du._createHmacHelper(e)
    })();
    (function() {
        var dt = bJ,
            e = dt.enc.Utf8;
        dt.algo.HMAC = dt.lib.Base.extend({
            init: function(dA, dC) {
                dA = this._hasher = dA.create();
                "string" == typeof dC && (dC = e.parse(dC));
                var dz = dA.blockSize,
                    dv = 4 * dz;
                dC.sigBytes > dv && (dC = dA.finalize(dC));
                for (var du = this._oKey = dC.clone(), dB = this._iKey = dC.clone(), dx = du.words, dw = dB.words, dy = 0; dy < dz; dy++) {
                    dx[dy] ^= 1549556828, dw[dy] ^= 909522486
                }
                du.sigBytes = dB.sigBytes = dv;
                this.reset()
            },
            reset: function() {
                var du = this._hasher;
                du.reset();
                du.update(this._iKey)
            },
            update: function(du) {
                this._hasher.update(du);
                return this
            },
            finalize: function(dv) {
                var du = this._hasher,
                    dv = du.finalize(dv);
                du.reset();
                return du.finalize(this._oKey.clone().concat(dv))
            }
        })
    })();
    (function() {
        var dw = bJ,
            dv = dw.lib,
            dx = dv.Base,
            dt = dv.WordArray,
            dv = dw.algo,
            e = dv.HMAC,
            du = dv.PBKDF2 = dx.extend({
                cfg: dx.extend({
                    keySize: 4,
                    hasher: dv.SHA1,
                    iterations: 1
                }),
                init: function(dy) {
                    this.cfg = this.cfg.extend(dy)
                },
                compute: function(dG, dI) {
                    for (var dF = this.cfg, dC = e.create(dF.hasher, dG), dE = dt.create(), dD = dt.create([1]), dK = dE.words, dH = dD.words, dJ = dF.keySize, dF = dF.iterations; dK.length < dJ;) {
                        var dB = dC.update(dI).finalize(dD);
                        dC.reset();
                        for (var dz = dB.words, dM = dz.length, dy = dB, dN = 1; dN < dF; dN++) {
                            dy = dC.finalize(dy);
                            dC.reset();
                            for (var dL = dy.words, dA = 0; dA < dM; dA++) {
                                dz[dA] ^= dL[dA]
                            }
                        }
                        dE.concat(dB);
                        dH[0]++
                    }
                    dE.sigBytes = 4 * dJ;
                    return dE
                }
            });
        dw.PBKDF2 = function(dy, dA, dz) {
            return du.create(dz).compute(dy, dA)
        }
    })();

    function cj(dA, dx) {
        if (dA == null || dA == "") {
            return
        }
        var dv = /(\w+):\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
        try {
            var du = dv.exec(dA);
            dx.protocol = du[1];
            dx.hostName = du[2];
            dx.port = du[3] ? du[3] : "80";
            dx.path = du[4];
            var dz = dx.path.split("/");
            var dw = dz.length;
            dx.streamName = dz[dw - 1];
            var dt = dx.streamName.toLowerCase();
            if ((dt.indexOf(".m3u") != -1) || (dt.indexOf("manifest") != -1) || (dt.indexOf(".f4m") != -1) || (dt.indexOf(".mpd") != -1)) {
                if (dw >= 3) {
                    dx.streamName = dz[dw - 2] + "/" + dz[dw - 1]
                }
            }
            dx.hash = du[5] ? du[5] : "";
            dx.search = du[6] ? du[6] : "";
            dx.host = dx.hostName + ":" + dx.port
        } catch (dy) {
            bR("Exception,  parseStreamUrl :" + dy)
        }
    }

    function cc(e, dt) {
        var du;
        if (e != null) {
            du = e
        } else {
            du = new Date().getTime()
        }
        return du
    }

    function ah(e) {
        var dt = cc(e);
        return (dt - c0)
    }
    var aa = false;
    if (window) {
        try {
            aa = window.XDomainRequest ? true : false
        } catch (ci) {
            aa = false
        }
    }
    var bk = {};
    var Z = {};
    var bz = null;
    var ct = {
        eventCode: "",
        beaconId: "",
        sequenceId: "",
        logType: "",
        endOfStream: "",
        logVersion: "",
        formatVersion: "",
        visitId: "",
        errorCode: "",
        partNumber: "",
        totalParts: "",
        hostName: "",
        streamName: "",
        port: "",
        protocol: "",
        userAgent: "",
        playerType: "",
        os: "",
        format: "",
        connectTime: "",
        bufferingTime: "",
        startupTime: "",
        streamLength: "",
        bytesTotal: "",
        browser: "",
        browserSize: "",
        videoSize: "",
        streamUrl: "",
        deliveryType: "",
        pluginVersion: "",
        beaconVersion: "",
        serverIp: "",
        playerFormat: "",
        outlierStartupTime: "",
        isFirstTitle: "",
        rebufferSessionH: "",
        sequenceIdH: "",
        isSessionWithRebufferH: "",
        playerState: "",
        currentStreamTime: "",
        currentClockTime: "",
        playClockTime: "",
        playStreamTime: "",
        rebufferCount: "",
        rebufferTime: "",
        pauseCount: "",
        pauseDuration: "",
        pauseIntervalsAsString: "",
        seekCount: "",
        seekTime: "",
        seekIntervalsAsString: "",
        pauseSeekSession: "",
        resumeBufferCount: "",
        resumeBufferTime: "",
        isView: "",
        isSessionWithRebuffer: "",
        logInterval: "",
        rebufferSession: "",
        socialSharing: "",
        endReasonCode: "",
        totalPlayClockTime: "",
        totalPlayStreamTime: "",
        totalRebufferCount: "",
        totalRebufferTime: "",
        totalAdPlayClockTime: "",
        totalAdStartCount: "",
        totalAdAbandonCount: "",
        lastHTime: "",
        isVisitStart: "",
        isVisitEnd: "",
        visitAttempts: "",
        visitPlays: "",
        visitViews: "",
        visitErrors: "",
        visitInterval: "",
        visitPlayClockTime: "",
        visitPlayStreamTime: "",
        visitRebufferCount: "",
        visitRebufferTime: "",
        visitStartupErrors: "",
        visitAdPlayClockTime: "",
        visitAdStartCount: "",
        visitAdAbandonCount: "",
        visitUniqueTitles: "",
        adAbandonCount: "",
        adPauseTime: "",
        adStartupTime: "",
        adPlayClockTime: "",
        adCount: "",
        adSession: "",
        sessionId: "",
        attemptId: "",
        playerReferrer: "",
        ais_idpId: "",
        ais_idpName: "",
        ais_idpDisplayName: "",
        ais_idpUrl: "",
        ais_queryToken: "",
        ais_aisuid: "",
        qualityOfExperience: "",
        transitionStreamTimeSession: "",
        transitionUpSwitchCount: "",
        transitionDownSwitchCount: "",
        averagedBitRate: "",
        fullOs: "",
        longitude: "",
        latitude: "",
        connectivity: ""
    };
    var cC = {
        title: false,
        category: false,
        subCategory: false,
        show: false,
        contentLength: false,
        contentType: false,
        device: false,
        deliveryType: false,
        playerId: false,
        eventName: false
    };
    var aJ = {};
    var cs = {};
    aJ.isBrightcoveVideo = false;
    aJ.objectBased = false;
    aJ.videoPassed = false;
    var ap = false;
    var R = false;
    var aX = false;
    var aG = {};
    var bX = {};
    var cK = false;
    var c4 = [];
    var bp = {
        timer: null,
        queue: [],
        browserClose: false,
        enabled: true,
        time: 250
    };
    var bK = {};
    var bD = [];
    var a0 = {};
    var bW = {};
    var p = {};
    p.seekThreshold = 2000;
    p.visitTimeout = 60 * 60 * 1000;
    var aR = {};
    var cB = {};
    var an = {};
    var ca = {};
    var M = 100;
    var cH = {};
    var af = false;
    var bV = false;
    var c = {
        fastTCPFailed: false,
        fastTCPEnabled: false
    };
    var cF = [];
    var bA = {};
    bA.dataSent = {};
    var ch = 1;
    var aP = -1;
    var s = null;
    var cr = {};
    var A = [];
    var O = {
        pageURLCsmaDebug: 0,
        configURLCsmaDebug: 0,
        configDebug: 0,
        windowOpened: false,
        logStoredMsg: true,
        printException: false
    };

    function at() {
        this.aisRetries = 0;
        this.aisRequestLimit = 3;
        this.aisRequestInterval = 30000;
        this.requestFailed = false
    }
    var cg = new at();
    var E = {
        setDataArr: ["adId", "adDuration", "adTitle", "adCategory", "adPartnerId", "adServer", "adDaypart", "adIndustryCategory", "adEvent"],
        clearAdAnalytics: function() {
            this.isAdLoaded = false;
            this.isAdStarted = false;
            this.id = "";
            this.type = "0";
            this.startPos = "0";
            this.playBucket = "-1";
            this.endStatus = "2";
            this.adLoadTime = null;
            this.adStartTime = null;
            this.adStartupTime = "0";
            for (var e = 0; e < this.setDataArr.length; e++) {
                this[this.setDataArr[e]] = ""
            }
        }
    };
    var co = {
        bitRateArr: [],
        currentBitRate: "-",
        currentStartPos: 0,
        bitRateCount: {},
        bitRatePlayTime: {},
        bitRateBucketMap: {},
        clearBitRate: function() {
            this.bitRateArr = [];
            this.currentBitRate = "-";
            this.bitRateCount = {};
            this.bitRatePlayTime = {}
        },
        updateBitRateArr: function(du) {
            if (this.bitRateArr.length > 0) {
                var e = this.bitRateArr.length;
                var dt = co.bitRateArr[e - 1];
                if ((this.currentBitRate == dt.bitRate)) {
                    dt.playTime += du
                } else {
                    this.pushInBitRateArr(du, this.currentBitRate, this.currentStartPos)
                }
            } else {
                this.pushInBitRateArr(du, this.currentBitRate, this.currentStartPos)
            }
        },
        pushInBitRateArr: function(du, e, dt) {
            this.bitRateArr.push({
                bitRate: e,
                playTime: du,
                startPos: dt
            })
        },
        populateBitRateBucketMap: function(e, dx) {
            var du, dv = false;
            var dt = ca.bitRateBucketTimes;
            if (e != "-" && e !== "") {
                e = parseInt(e / 1000)
            }
            for (var dw in dt) {
                dv = false;
                du = dt[dw];
                if (e == "-" || e === "" || e < 0) {
                    if (!du.max && !du.min) {
                        dv = true;
                        break
                    }
                } else {
                    if (du.max && du.min) {
                        if (e >= du.min && e < du.max) {
                            dv = true;
                            break
                        }
                    } else {
                        if (du.max) {
                            if (e < du.max) {
                                dv = true;
                                break
                            }
                        } else {
                            if (du.min) {
                                if (e >= du.min) {
                                    dv = true;
                                    break
                                }
                            }
                        }
                    }
                }
            }
            if (dv) {
                this.bitRateBucketMap[dw] += dx
            }
        },
        findMaxPersistentBitRate: function() {
            try {
                if (this.bitRatePlayTime) {
                    var dt = 0,
                        du = -1;
                    for (var dv in this.bitRatePlayTime) {
                        if (this.bitRatePlayTime[dv] > du) {
                            du = this.bitRatePlayTime[dv];
                            dt = dv
                        }
                    }
                    if (dt !== 0) {
                        return dt
                    }
                }
            } catch (dw) {
                bR("Exception, find max persistent bit rate")
            }
        },
        getTransitionSession: function(dz) {
            try {
                var dv = null;
                var du, dD, dw = "";
                var dx = 0,
                    dA, dC = 0,
                    dt = 0;
                var dy = true;
                if (this.bitRateArr.length > 0) {
                    du = this.bitRateArr[0];
                    if (du.bitRate == "-") {
                        dy = false;
                        if (this.bitRateArr[1] && this.bitRateArr[1].bitRate != "-") {
                            dy = true;
                            this.bitRateArr[1].startPos = this.bitRateArr[0].startPos;
                            this.bitRateArr[1].playTime += this.bitRateArr[0].playTime;
                            this.bitRateArr.shift()
                        }
                    }
                }
                for (dD in this.bitRateBucketMap) {
                    this.bitRateBucketMap[dD] = 0
                }
                for (dx = 0; dx < this.bitRateArr.length; dx++) {
                    du = this.bitRateArr[dx];
                    if (du.bitRate in this.bitRateCount) {
                        if (dx != 0) {
                            this.bitRateCount[du.bitRate]++
                        }
                    } else {
                        this.bitRateCount[du.bitRate] = 1
                    }
                    if (du.bitRate != "" && du.bitRate != "-") {
                        if (du.bitRate in this.bitRatePlayTime) {
                            this.bitRatePlayTime[du.bitRate] += du.playTime
                        } else {
                            this.bitRatePlayTime[du.bitRate] = du.playTime
                        }
                    }
                    dA = this.bitRateCount[du.bitRate];
                    if (dv) {
                        dv += "," + du.bitRate + ":" + du.startPos + ":" + du.playTime + "::" + dA
                    } else {
                        dv = du.bitRate + ":" + du.startPos + ":" + du.playTime + "::" + dA
                    }
                    this.populateBitRateBucketMap(du.bitRate, du.playTime);
                    try {
                        if (dy) {
                            dC += du.bitRate * du.playTime;
                            dt += du.playTime
                        }
                    } catch (dB) {}
                }
                dz.maxPersistentBitRate = this.findMaxPersistentBitRate();
                dz.transitionStreamTimeSession = dv;
                for (dD in this.bitRateBucketMap) {
                    if (dw) {
                        dw += "," + dD + ":" + this.bitRateBucketMap[dD]
                    } else {
                        dw = dD + ":" + this.bitRateBucketMap[dD]
                    }
                }
                dz.bitRateBucketTimes = dw;
                try {
                    if (dy && dt && dt != 0) {
                        dz.averagedBitRate = dC + ":" + dt
                    } else {
                        dz.averagedBitRate = null
                    }
                } catch (dB) {}
            } catch (dB) {
                bR("Exception, get transition Session :" + dB)
            }
        }
    };
    amaURLUtility = function() {};
    amaURLUtility.isURL = function(e) {
        var dt = new RegExp("((http|https)(://))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(/{1}[a-zA-Z0-9]+)*/?", "i");
        if (!dt.test(e)) {
            return false
        }
        return true
    };
    amaURLUtility.parseURLComponents = function(dw) {
        var du = {};
        var dx = /(\w+):\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
        try {
            var dv = dx.exec(dw);
            du.protocol = dv[1];
            du.hostName = dv[2];
            du.port = dv[3] ? dv[3] : "80";
            du.path = dv[4];
            var dA = this.path.split("/");
            var dy = dA.length;
            du.name = dA[dy - 1];
            var dt = du.name.toLowerCase();
            if ((dt.indexOf(".m3u") != -1) || (dt.indexOf("manifest") != -1) || (dt.indexOf(".f4m") != -1) || (dt.indexOf(".mpd") != -1)) {
                if (dy >= 3) {
                    du.name = dA[dy - 2] + "/" + dA[dy - 1]
                }
            }
            du.hash = dv[5] ? dv[5] : "";
            du.search = dv[6] ? dv[6] : "";
            du.host = du.hostName + ":" + du.port
        } catch (dz) {
            bR("Exception,  parseStreamUrl :" + dz)
        }
        return du
    };
    streamError = {
        InvalidURL: "URL is not valid",
        ParsingFailed: "Failed to parse stream URL",
        Invalid_Manifest: "Invalid manifest received",
        Invalid_Stream: "Stream is not valid",
        NoError: "success"
    };
    streamInfoBase = function(e, dt) {
        this.url = e;
        this.name = null;
        this.length = 0;
        this.format = null;
        this.deliveryType = "O";
        this.isValid = false;
        this.streamType = null;
        this.callback = dt
    };
    streamInfoBase.prototype.getStreamURL = function() {
        return this.url
    };
    streamInfoBase.prototype.getStreamName = function() {
        return this.name
    };
    streamInfoBase.prototype.getStreamLength = function() {
        return this.length
    };
    streamInfoBase.prototype.getStreamFormat = function() {
        return this.format
    };
    streamInfoBase.prototype.getDeliveryType = function() {
        return this.deliveryType
    };
    streamInfoBase.prototype.getStreamType = function() {
        return this.streamType
    };
    streamInfoBase.prototype.getCallback = function() {
        return this.callback
    };
    streamInfoBase.prototype.parseURL = function() {
        var dv = /(\w+):\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
        try {
            var du = dv.exec(this.url);
            this.protocol = du[1];
            this.hostName = du[2];
            this.port = du[3] ? du[3] : "80";
            this.path = du[4];
            var dy = this.path.split("/");
            var dw = dy.length;
            this.name = dy[dw - 1];
            var dt = this.name.toLowerCase();
            if ((dt.indexOf(".m3u") != -1) || (dt.indexOf("manifest") != -1) || (dt.indexOf(".f4m") != -1) || (dt.indexOf(".mpd") != -1)) {
                if (dw >= 3) {
                    this.name = dy[dw - 2] + "/" + dy[dw - 1]
                }
            }
            this.hash = du[5] ? du[5] : "";
            this.search = du[6] ? du[6] : "";
            this.host = this.hostName + ":" + this.port
        } catch (dx) {
            bR("Exception,  parseStreamUrl :" + dx)
        }
    };
    var f = function(dv, dw, du, dt) {
        try {
            dv.prototype = Object.create(dw.prototype, {
                url: {
                    value: du,
                    enumerable: false
                },
                callback: {
                    value: dt,
                    enumerable: false
                }
            })
        } catch (dx) {
            bR("Exception thrown from InheritObject" + dx)
        }
    };
    hlsStreamInfo = function(dt, du) {
        this.recursiveDownload = false;
        this.isParsed = false;
        this.parse = function(dG) {
            try {
                if (!dG) {
                    return streamError.InvalidURL
                }
                if (dG.search("#EXTM3U") === -1) {
                    return streamError.ParsingFailed
                }
                this.streamType = "hls";
                this.format = "L";
                this.parseURL();
                var dI = dG.split("\n");
                var dx = "";
                var dK = /PROGRAM-ID=(\d+)/;
                var dE, dD;
                if (dI) {
                    for (dD = 0; dD < dI.length; dD++) {
                        if ((dE = dK.exec(dI[dD]))) {
                            if (dE[1] == dx) {
                                break
                            } else {
                                dx = dE[1]
                            }
                        }
                    }
                    if (dD != dI.length) {
                        this.format = "L"
                    }
                }
                var dw = this.getStreamURL();
                var dJ, dv, dA, dL;
                if (dw) {
                    var dy = /(\w+):\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
                    var dz = dy.exec(dw);
                    dJ = dz[1];
                    dv = dz[2];
                    dA = dz[3] ? dz[3] : "80";
                    dL = dz[4]
                }
                dK = /^#EXT((INF)|(-X-STREAM-INF))[^\n]*\n([^\n]*)\n/m;
                bR("Checking");
                if ((dE = dK.exec(dG))) {
                    bR("Checking done " + dE[4]);
                    var dH = new RegExp(".m3u8");
                    if (dH.exec(dE[4]) && dJ && dv) {
                        try {
                            this.recursiveDownload = true;
                            var dB = new XMLHttpRequest();
                            var dC;
                            if (!amaURLUtility.isURL(dE[4])) {
                                dC = dJ + "://" + dv + dE[4]
                            } else {
                                dC = dE[4]
                            }
                            bR("Requesting URL = " + dC);
                            dB.open("GET", dC, true);
                            dB.onreadystatechange = function(dM) {
                                return function() {
                                    bR("current content type from stream url is = " + this.getResponseHeader("content-type"));
                                    if (this.readyState === 4) {
                                        if (this.status === 200 && this.responseText) {
                                            if (/^#EXT-X-ENDLIST/m.exec(this.responseText)) {
                                                dM.deliveryType = "O"
                                            } else {
                                                dM.deliveryType = "L";
                                                dM.length = "-1"
                                            }
                                        }
                                        if (dM.getCallback()) {
                                            dM.getCallback()(dM)
                                        }
                                    }
                                }
                            }(this);
                            if (dB.overrideMimeType) {
                                dB.overrideMimeType("text/plain")
                            }
                        } catch (dF) {
                            bR("parsePlaylist, Exception,  parsing play list, " + dF)
                        }
                    } else {
                        if (/^#EXT-X-ENDLIST/m.exec(dG)) {
                            this.deliveryType = "O"
                        }
                    }
                }
            } catch (dF) {
                bR("Exception,  parsePlaylist : " + dF)
            }
            this.isParsed = true;
            return streamError.NoError
        };
        var e = this.parse(dt);
        if (e === streamError.NoError) {
            if (this.recursiveDownload === false) {
                this.getCallback()(this)
            }
            this.streamType = "hls";
            this.deliveryType = "O";
            return this
        } else {
            if (du) {
                this.streamType = "hls";
                this.format = "L";
                this.deliveryType = "O";
                this.length = 0;
                this.parseURL();
                this.getCallback()(this);
                return this
            } else {}
        }
    };
    dashStreamInfo = function(du, dw) {
        this.isParsed = false;
        try {
            this.parse = function(dB) {
                if (!dB) {
                    return streamError.InvalidURL
                }
                this.parseURL();
                this.format = "Dash";
                this.streamType = "dash";
                var dy = new DOMParser();
                var dI = dy.parseFromString(dB, "text/xml");
                if (!dI) {
                    return streamError.ParsingFailed
                }
                var dF = dI.getElementsByTagName("MPD");
                if (!dF || !dF[0]) {
                    return streamError.ParsingFailed
                }
                var dE = dF[0].getAttribute("type");
                if (dE === "dynamic") {
                    this.deliveryType = "L";
                    this.length = 0
                } else {
                    this.deliveryType = "O";
                    var e = dF[0].getAttribute("mediaPresentationDuration").replace("PT", "");
                    var dC = e.search("H");
                    var dG = 0;
                    this.length = 0;
                    if (dC !== -1) {
                        var dA = Number(e.substring(0, dC));
                        if (!isNaN(dA)) {
                            this.length += dA * 60 * 60 * 1000;
                            dG = dC + 1
                        }
                    }
                    var dz = e.search("M");
                    if (dz !== -1) {
                        var dx = Number(e.substring(dG, dz));
                        if (!isNaN(dx)) {
                            this.length += dx * 60 * 1000;
                            dG = dz + 1
                        }
                    }
                    var dD = e.search("S");
                    if (dD !== -1) {
                        var dH = Number(e.substring(dG, dD));
                        if (!isNaN(dH)) {
                            this.length += dH * 1000
                        }
                    }
                    bR("Current stream length = " + this.length)
                }
                this.getCallback()(this);
                this.isParsed = true;
                return streamError.NoError
            }
        } catch (dv) {
            bR("Exception thrown from dashStreamInfo " + dv)
        }
        var dt = this.parse(du);
        if (dt === streamError.NoError) {
            return this
        } else {
            if (dw) {
                this.format = "Dash";
                this.streamType = "dash";
                this.deliveryType = "O";
                this.length = 0;
                this.parseURL();
                this.getCallback()(this);
                return this
            } else {}
        }
    };
    nonAdaptiveStream = function(dt, dv) {
        try {
            this.format = "P";
            this.deliveryType = "O";
            this.streamType = "nonAdaptiveStream";
            this.length = 0;
            this.parseURL();
            this.getCallback()(this);
            return this
        } catch (du) {
            bR("Exception thrown from nonAdaptiveStream" + du)
        }
    };
    var cZ = {};
    cZ.FactoryWithURL = function(dv, dt, du) {
        var dw;
        try {
            var dy = new XMLHttpRequest();
            dy.open("GET", dt, true);
            dy.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200 && this.responseText) {
                    dw = cZ.FactoryWithContent(dv, dt, this.responseText, du, false)
                } else {}
            };
            dy.send(null)
        } catch (dx) {
            bR("Exception thrown from streamFactory.FactoryWithURL" + dx)
        }
    };
    cZ.FactoryWithContent = function(dx, dt, dw, dC, dB) {
        function dz() {
            f(hlsStreamInfo, streamInfoBase, dt, dC);
            return new hlsStreamInfo(dw, dB)
        }

        function dA() {
            f(dashStreamInfo, streamInfoBase, dt, dC);
            return new dashStreamInfo(dw, dB)
        }

        function dy() {
            f(nonAdaptiveStream, streamInfoBase, dt, dC);
            return new nonAdaptiveStream(dw, dB)
        }
        var du;
        try {
            if ("hls" === dx) {
                du = dz()
            } else {
                if ("dash" === dx) {
                    du = dA()
                } else {
                    du = dy()
                }
            }
        } catch (dv) {
            bR("Exception thrown from streamFactory.FactoryWithContent " + dv)
        }
        return du
    };
    StreamTypeDetector = function(dv, du, dx, dB) {
        function dt(e, dD, dC) {
            bR(("Mime type method didn't work. Lets apply parsers one after another - Brute force"));
            var dE = cZ.FactoryWithContent("hls", e, dD, dC, false);
            if (!dE.isParsed) {
                bR("not a HLS stream");
                dE = cZ.FactoryWithContent("dash", e, dD, dC, false);
                if (!dE.isParsed) {
                    bR("not Dash either... Assuming Progressive download");
                    dE = cZ.FactoryWithContent("nonAdaptive", e, dD, dC, false)
                }
            }
        }
        try {
            if (!dv || dv === "") {
                return streamError.Invalid_Stream
            }
            var dz = RegExp(".m3u8");
            var dA = RegExp(".mpd");
            if (dx) {
                if (dz.exec(dv)) {
                    bR("Found m3u8 as an extension");
                    cZ.FactoryWithURL("hls", dv, dB);
                    return
                } else {
                    if (dA.exec(dv)) {
                        bR("Found mpd as an extension");
                        cZ.FactoryWithURL("dash", dv, dB);
                        return
                    } else {
                        bR("Couldn't find either m3u8 or Dash will try mime type");
                        var dw = new XMLHttpRequest();
                        bR("To get mime type trying HEAD request");
                        dw.open("HEAD", dw, true);
                        if (dw.overrideMimeType) {
                            dw.overrideMimeType("text/xml")
                        }
                        dw.onreadystatechange = function() {
                            if (this.readyState === this.DONE) {
                                var dC = this.getResponseHeader("content-type");
                                var e = null;
                                if ("application/x-mpegURL" === dC || "vnd.apple.mpegURL" === dC) {
                                    bR("Rceived mime type is m3u8");
                                    e = cZ.FactoryWithContent("hls", dv, this.responseText, dB)
                                } else {
                                    if ("application/dash+xml" === dC) {
                                        bR("Rceived mime type is dash");
                                        e = cZ.FactoryWithContent("dash", dv, this.responseText, dB)
                                    } else {
                                        dt(dv, this.responseText, dB)
                                    }
                                }
                            }
                        };
                        dw.send(null)
                    }
                }
            } else {
                if (dz.exec(dv)) {
                    bR("Found m3u8 as an extension");
                    streamObj = cZ.FactoryWithContent("hls", dv, du, dB, true)
                } else {
                    if (dA.exec(dv)) {
                        bR("Found mpd as an extension");
                        streamObj = cZ.FactoryWithContent("dash", dv, du, dB, true)
                    } else {
                        dt(dv, du, dB)
                    }
                }
            }
            return streamError.NoError
        } catch (dy) {
            bR("Exception thrown from StreamTypeDetector " + dy)
        }
    };
    fragmentState = {
        Invalid: "Invalid",
        InPorgress: "InProgress",
        Completed: "Completed",
    };
    fragment = function(dt, e) {
        this.id = dt;
        this.bitrate = e;
        this.timeStamp = new Date().getTime();
        this.state = fragmentState.InPorgress;
        this.downloadTime = 0;
        this.bytesDownloaded = 0
    };
    streamFragments = function() {
        this.fragments = {};
        this.fragmentId = 0;
        this.downloadStarted = function(dt) {
            var e = new fragment(this.fragmentId, dt);
            this.fragments[this.fragmentId.toString()] = e
        };
        this.cleanup = function() {
            for (var e in this.fragments) {
                delete this.fragments[e]
            }
        };
        this.downloadCompleted = function(dv, e) {
            if (this.fragments[this.fragmentId.toString()] && this.fragments[this.fragmentId.toString()].state !== fragmentState.Completed) {
                var du = this.fragments[this.fragmentId.toString()];
                var dt = new Date().getTime();
                du.downloadTime = dt - du.timeStamp;
                du.state = fragmentState.Completed;
                if (e) {
                    du.bytesDownloaded = e;
                    bR("bytesDownloaded reported = " + e)
                } else {
                    du.bytesDownloaded = dv * du.downloadTime;
                    bR("bytesDownloaded not reported and calculated one is = " + du.bytesDownloaded)
                }
                this.fragmentId++
            }
        }
    };
    hlsStream = function() {
        var dt = 0;
        var e = new streamFragments();
        this.streamFragmentDownloadStarted = function(du) {
            e.downloadStarted(du);
            if (dt !== du) {
                b4(du)
            }
        };
        this.streamFragmentDownloadCompleted = function(du) {
            e.downloadCompleted(du, 0)
        };
        this.cleanupFragments = function() {
            e.cleanup()
        };
        this.getBandwidthFromFragments = function() {
            var dw = 0;
            var du = 0;
            for (index in e.fragments) {
                var dv = e.fragments[index];
                if (dv.state === fragmentState.Completed && dv.bytesDownloaded) {
                    dw += dv.bytesDownloaded;
                    du += dv.downloadTime
                }
            }
            if (du === 0) {
                return 0
            }
            return (dw / du)
        }
    };
    var bN = "";
    var dn = function() {
        if (typeof(akamaiBCVideoObject) != "undefined") {
            try {
                var du = document.getElementsByTagName("script");
                var dx = 0;
                var dt = "";
                if (du.length) {
                    for (dx = 0; dx < du.length; dx++) {
                        if ((du[dx].src != null) && ((du[dx].src.indexOf("79423.analytics.edgesuite.net") != -1) || (du[dx].src.indexOf("79423.analytics.edgekey.net") != -1))) {
                            bN = du[dx].src;
                            dt = L("configPath", du[dx].src);
                            if (dt != "") {
                                aG.url = dt
                            }
                        }
                    }
                }
            } catch (dz) {}
        } else {
            if (cG && cG.configPath) {
                aG.url = cG.configPath;
                aJ.objectBased = true
            } else {
                aG.url = AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH
            }
        }
        try {
            if (window) {
                var dB = null;
                if (bO()) {
                    dB = L("AkamaiAnalytics_configPath", window.parent.location);
                    if (dB) {
                        aG.url = dB
                    }
                } else {
                    dB = L("AkamaiAnalytics_configPath", window.location);
                    if (dB) {
                        aG.url = dB
                    }
                }
            }
        } catch (dz) {}
        if (aG.url) {
            var dA = parseInt(L("enableGenericAPI", aG.url));
            if (dA == 1) {
                aJ.objectBased = true
            }
            aG.beaconSent = parseInt(L("beaconSentNotify", aG.url));
            var dw = parseInt(L("setVideoObject", aG.url));
            if (dw == 1) {
                aJ.videoPassed = true
            }
            var dy = parseInt(L("subscribeVideo", aG.url));
            if (dy == 1) {
                aJ.videoPassed = true
            }
            var dv = parseInt(L("exception", aG.url));
            if (dv == 1) {
                O.printException = true
            }
            O.configURLCsmaDebug = parseInt(L("debug", aG.url))
        }
    }();

    function bO() {
        var dy = false;
        try {
            if (window !== window.parent) {
                var du = {};
                var dv = {};
                var dt = document.URL;
                var dx = null;
                if (document && document.referrer) {
                    dx = document.referrer
                }
                if (dt != null) {
                    cj(dt, du)
                }
                if (dx != null) {
                    cj(dx, dv)
                }
                if (du.port === dv.port && du.protocol === dv.protocol && du.hostName === dv.hostName) {
                    dy = true
                }
            } else {
                dy = true
            }
        } catch (dw) {}
        return dy
    }
    try {
        if (window) {
            if (bO()) {
                O.pageURLCsmaDebug = parseInt(L("AkamaiAnalytics_debug", window.parent.location))
            } else {
                O.pageURLCsmaDebug = parseInt(L("AkamaiAnalytics_debug", window.location))
            }
        }
    } catch (ci) {}
    try {
        if (typeof(akamaiBCVideoObject) != "undefined" && typeof(brightcovePerforceVersion) != "undefined") {
            bm("std:pluginVersion", "Brightcove-" + brightcovePerforceVersion)
        }
    } catch (ci) {
        bR("Exception,  pluginVersion: " + ci)
    }

    function c3() {
        var dy = false;
        try {
            var du = document.URL;
            var dv = /(\w+):\/\/([^\/:]+):?([^\/]+)?(\/[^#?]*)#?([^?]+)?\??(.+)?/;
            var dt = dv.exec(du);
            var dx = dt[1];
            if (dx == "https") {
                dy = true
            }
        } catch (dw) {}
        return dy
    }

    function aZ() {
        if (O.windowOpened) {
            return
        }
        if (O.pageURLCsmaDebug == 1 || O.configURLCsmaDebug == 1 || O.configDebug == 1) {
            df = true;
            c1 = window.open("http://media-analytics.akamaized.net/library/debug/index.html", "", "status=0,toolbar=0,location=0,menubar=0,directories=0,height=680,width=1200");
            bF()
        }
    }

    function bF() {
        if (!m) {
            var dt = document.getElementsByTagName("script");
            if (dt.length) {
                for (i = 0; i < dt.length; i++) {
                    if ((dt[i].src != null)) {
                        var e = dt[i].src;
                        if (e.indexOf("akamaihtml5-min.js") != -1 || e.indexOf("csma.js") != -1) {
                            m = e;
                            break
                        }
                    }
                }
            }
        }
    }
    this.initialize = function() {
        this.processLogs({
            api: "setConfigXML",
            value: AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH
        });
        var e = "";
        e += aJ.objectBased === true ? "JS-" : "HTML5-";
        e += b2;
        if (x.length != 0 && bY.length != 0) {
            e += ":";
            e += x;
            e += "-";
            e += bY
        }
        this.processLogs({
            api: "setCurrentVersion",
            value: e
        });
        this.processLogs({
            api: "setCustomDimension",
            value: Z
        });
        this.processLogs({
            api: "reportSetupParams",
            value: AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH
        });
        this.processLogs({
            api: "reportSetupParams",
            value: p.beaconUrl.toLowerCase()
        });
        this.processLogs({
            api: "reportSetupParams",
            value: m
        })
    };
    aZ();

    function ad() {
        try {
            var dt = aG.url.toLowerCase();
            var dv = "";
            if (dt.indexOf(".edgesuite.net/") == -1 && dt.indexOf(".edgekey.net/") == -1) {
                dv = "Incorrect Beacon XML Path";
                dv += "<ul style='list-style-type:circle;margin:0'>";
                dv += "<li>We have identified that the Beacon XML in not loaded from an Akamai Domain.</li>";
                dv += "<li>Kindly use the same Beacon XML path that is provided in SOLA Anlaytics UI while provisioning.</li></ul>";
                bR(dv, "ERROR")
            }
        } catch (du) {}
    }

    function bZ() {
        try {
            var du = p.beaconUrl.toLowerCase();
            var dv = "";
            if (du.indexOf(".edgesuite.net/") == -1 && du.indexOf(".edgekey.net/") == -1) {
                dv = "Beacons sent to incorrect domain : " + du;
                dv += "<ul style='list-style-type:circle;margin:0'>";
                dv += "<li>We have identified that the beacons are not sent to an Akamai Domain.</li>";
                dv += "<li>Kindly use the proper Beacon XML path that is provided in SOLA Anlaytics UI while provisioning.</li></ul>";
                bR(dv, "ERROR")
            }
        } catch (dt) {}
    }

    function a4() {
        try {
            var dt = "";
            for (var dv in cC) {
                if (cC[dv]) {
                    if (!(dv in bk)) {
                        if (dt) {
                            dt += ", " + dv
                        } else {
                            dt = dv
                        }
                    }
                }
            }
            if (dt) {
                dt = "Following dimensons have not being set : " + dt;
                dt += "<ul style='list-style-type:circle;margin:0'>";
                dt += "<li>Please refer 'Set Custom Data' section in Integration guide for more details.</li></ul>";
                bR(dt, "INTEGRATION")
            }
        } catch (du) {}
    }

    function n(dI) {
        try {
            var dv = dI.readyState;
            var dM = dI.status;
            if (dv == 4 && dM == 200) {
                var du = dI.responseXML;
                if (du) {
                    var dD;
                    if (du.documentElement) {
                        dD = du.documentElement
                    } else {
                        dD = du
                    }
                    if (dD) {
                        var dE = document.getElementsByTagName("script");
                        var dO = 0;
                        var dH = false;
                        var dz = "";
                        var dK = "";
                        if (typeof(akamaiBCVideoObject) != "undefined") {
                            if (bN) {
                                dH = true;
                                dK = bN
                            }
                        } else {
                            if (m) {
                                dH = V(m);
                                dK = m
                            } else {
                                if (dE.length) {
                                    for (dO = 0; dO < dE.length; dO++) {
                                        if ((dE[dO].src != null)) {
                                            var dN = dE[dO].src;
                                            dH = V(dN);
                                            if (dH) {
                                                dK = dN;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var dx = "";
                        var dF = null;
                        if (typeof(akamaiBCVideoObject) != "undefined") {
                            dx = dD.getElementsByTagName("brightcove")[0]
                        } else {
                            dx = dD.getElementsByTagName("plugin")[0];
                            if (x != null) {
                                dF = dD.getElementsByTagName(x)[0]
                            }
                        }
                        if (dx) {
                            var dT = dx.getAttribute("name");
                            var dy = dx.getAttribute("version");
                            var dB = dx.getAttribute("link");
                            var dJ = dx.getAttribute("size");
                            var dA = dx.getAttribute("date");
                            var dL = "";
                            var dP = "";
                            var dw = "";
                            var dt = "";
                            var dG = "";
                            if (dF) {
                                dw = dF.getAttribute("name");
                                dP = dF.getAttribute("version");
                                dt = dF.getAttribute("date");
                                dG = dF.getAttribute("link")
                            }
                            var dS = aJ.objectBased == true ? "JavaScript" : dT;
                            bR("Integration Type : " + dS, "INTEGRATION");
                            if (dH) {
                                bR("Plugin path is correct [" + dK + "]", "INTEGRATION")
                            } else {
                                dL = "Incorrect Plugin Path";
                                dL += "<ul style='list-style-type:circle;margin:0'>";
                                dL += "<li>Kindly refer the Integration Guide and use the correct plugin path for integration</li>";
                                dL += "<li>The plugin path should be one of the below :</li>";
                                if (typeof(akamaiBCVideoObject) != "undefined") {
                                    dL += "<ul><li>http://79423.analytics.edgesuite.net/html5/brightcoveAkamaihtml5-min.js</li>";
                                    dL += "<li>https://79423.analytics.edgekey.net/html5/brightcoveAkamaihtml5-min.js</li></ul>"
                                } else {
                                    dL += "<ul><li>http://79423.analytics.edgekey.net/html5/akamaihtml5-min.js</li>";
                                    dL += "<li>http://79423.analytics.edgekey.net/js/csma.js</li></ul>"
                                }
                                dL += "</ul>";
                                bR(dL, "ERROR")
                            }
                            var dR = cn(b2, dy);
                            if (dR >= 0) {
                                bR("Plugin is Latest (Version = " + b2 + " )", "INTEGRATION")
                            } else {
                                dL = "Old Plugin Version";
                                dL += "<ul style='list-style-type:circle;margin:0'>";
                                dL += "<li>Current Plugin Version is " + b2 + "</li>";
                                dL += "<li>The latest plugin version in " + dy + " which was released on date " + dA + "</li>";
                                dL += "<li>Kindly check if proper path mentioned in integration guide is used for integration</li>";
                                dL += "<li>If proper path is used, try by clearing browser cache.</li>";
                                bR(dL, "ERROR")
                            }
                            if (dP === bY) {
                                bR(dw + " is Latest (Version = " + x + "-" + bY + " )", "INTEGRATION")
                            } else {
                                if (x != null) {
                                    var dC = "Old " + dw + " (Version = " + bY + ") is used. ";
                                    dC += "<p>The latest " + dw + " version is " + dP + " which was released on " + dt + ". </p>";
                                    dC += "<p>Kindly download the latest " + dw + " JS from the below location and use it instead. </p>";
                                    dC += "<p>" + dG + "</p>";
                                    bR(dC, "ERROR")
                                }
                            }
                        }
                    }
                }
            }
        } catch (dQ) {}
    }

    function V(e) {
        if ((e.indexOf("79423.analytics.edgesuite.net") != -1) || (e.indexOf("79423.analytics.edgekey.net") != -1)) {
            if (e.indexOf("/html5/akamaihtml5-min.js") != -1 || e.indexOf("/js/csma.js") != -1 || e.indexOf("/js/brightcove-csma.js") != -1) {
                return true
            }
        }
        return false
    }

    function cn(dt, dz) {
        try {
            var dw = 0;
            if (dt != null && dz != null) {
                var dx = dt.split(".");
                var du = dz.split(".");
                while (dx.length > du.length) {
                    du.push(0)
                }
                while (du.length > dx.length) {
                    dx.push(0)
                }
                for (var dv = 0; dv < dx.length; dv++) {
                    if (parseInt(dx[dv]) > parseInt(du[dv])) {
                        dw = 1;
                        break
                    }
                    if (parseInt(dx[dv]) < parseInt(du[dv])) {
                        dw = -1;
                        break
                    }
                }
            }
        } catch (dy) {}
        return dw
    }

    function cE(dv, dt, e) {
        var du;
        if (aa) {
            du = new XDomainRequest();
            du.onload = function() {
                bR("XML Request : xmlClient.onload");
                dv("4", "200", du.responseText)
            };
            du.onerror = function(dw) {
                bR("Error, ais request")
            };
            du.open("GET", dt, e);
            du.send(null)
        } else {
            du = new XMLHttpRequest();
            du.responseType = "json";
            du.open("GET", dt, e);
            if (du.overrideMimeType) {
                du.overrideMimeType("application/json")
            }
            du.onreadystatechange = function() {
                dv(du.readyState, du.status, du.responseText)
            };
            du.send(null)
        }
    }

    function c8(dv, e, du, dt) {
        if (aX) {} else {
            aY(dv, e, du, dt)
        }
    }

    function aY(dy, dt, dx, dv) {
        if (dy) {
            bR("XML Request: isXDomainRequest = " + aa + ":::funcCallback =  :url: " + dt)
        }
        var dw;
        if (dt == null || dt == "undefined" || dt == "") {
            return
        }
        try {
            if (aa) {
                dw = new XDomainRequest();
                if (dy) {
                    dw.onprogress = function() {};
                    dw.ontimeout = function() {};
                    dw.onload = function() {
                        bR("XML Request : xmlClient.onload");
                        if (window.DOMParser) {
                            var dB = new DOMParser();
                            var dA = dB.parseFromString(dw.responseText, "text/xml");
                            var e = {};
                            e.status = "200";
                            e.readyState = "4";
                            e.responseXML = dA;
                            e.responseText = dw.responseText;
                            dy(e)
                        } else {
                            var dA = new ActiveXObject("Microsoft.XMLDOM");
                            dA.async = false;
                            dA.loadXML(dw.responseText);
                            var e = {};
                            e.status = "200";
                            e.readyState = "4";
                            e.responseXML = dA;
                            dy(e)
                        }
                    };
                    dw.onerror = function(dA) {
                        bR("XML Request : Error, loading xml. url = :" + dt);
                        if (dt.indexOf("serverIp") != -1) {
                            af = true
                        }
                        if (dt.indexOf("protocol-info") != -1) {
                            c.fastTCPFailed = true
                        }
                    }
                }
                dw.open("GET", dt, !dx);
                try {
                    if (dv) {
                        setTimeout(function() {
                            dw.send()
                        }, 100)
                    } else {
                        dw.send(null)
                    }
                } catch (dz) {
                    try {
                        dw.send(null)
                    } catch (du) {}
                }
            } else {
                dw = new XMLHttpRequest();
                dw.open("GET", dt, !dx);
                if (dy) {
                    if (dw.overrideMimeType) {
                        dw.overrideMimeType("text/xml")
                    }
                    dw.onreadystatechange = function() {
                        bR("XML Request : xmlClient.onreadystatechange");
                        dy(dw)
                    }
                }
                dw.send(null)
            }
        } catch (dz) {
            bR("Exception,  XML Request for url :" + dt + ",Exception:" + dz)
        }
    }

    function ax(dG) {
        var dO = dG.readyState;
        var dL = dG.status;
        bR("readConfig: readyState = " + dO + ":::status = " + dL);
        try {
            if (dO == 4 && dL == 200) {
                bh();
                var dJ = dG.responseXML;
                if (dJ) {
                    var dF;
                    if (dJ.documentElement) {
                        dF = dJ.documentElement
                    } else {
                        dF = dJ
                    }
                    var du = dF.getElementsByTagName("dataMetrics");
                    for (var dS = 0; dS < du.length; ++dS) {
                        var dW = du[dS];
                        var dC = dW.parentNode;
                        var dt = dC.nodeName;
                        bD[dS] = dt;
                        var dP = bK[dt] = [];
                        var dK = dC.getAttribute("eventCode");
                        if (dK) {
                            an[dt] = dK
                        }
                        var dY = dW.getElementsByTagName("data");
                        for (var dV = 0; dV < dY.length; ++dV) {
                            var dQ = dY[dV];
                            dt = dQ.getAttribute("name");
                            var dN = dQ.getAttribute("key");
                            dK = dQ.getAttribute("value");
                            var d0 = dQ.getAttribute("sendOnce");
                            var dZ = dQ.getAttribute("fallback");
                            var dA = dQ.getAttribute("size");
                            var dR = dQ.getAttribute("regExpJS");
                            var dB = dQ.getAttribute("expiry");
                            var dy = {};
                            dy.name = dt;
                            dy.key = dN;
                            if (dt in cC) {
                                cC[dt] = true
                            } else {
                                if (dN.indexOf("_cd_") != -1) {
                                    cC[dt] = true
                                }
                            }
                            if (dK) {
                                dy.value = dK
                            }
                            if (d0) {
                                dy.isSent = false;
                                dy.sendOnce = d0
                            }
                            if (dZ) {
                                dy.fallback = dZ
                            }
                            if (dA) {
                                dy.size = dA
                            }
                            if (dR) {
                                dy.regExpJS = dR
                            }
                            if (dB) {
                                dy.expiryDuration = parseInt(parseInt(dB) / 1440)
                            }
                            dP.push(dy)
                        }
                    }
                    O.configDebug = parseInt(dF.getAttribute("debug"));
                    if (O.configDebug != 1) {
                        O.configDebug = 0
                    }
                    if (O.configDebug == 1) {
                        aZ()
                    }
                    if (dF.getElementsByTagName("isActive")[0] && dF.getElementsByTagName("isActive")[0].childNodes[0]) {
                        ch = dF.getElementsByTagName("isActive")[0].childNodes[0].nodeValue
                    }
                    a0.beaconId = dF.getElementsByTagName("beaconId")[0].childNodes[0].nodeValue;
                    a0.beaconVersion = dF.getElementsByTagName("beaconVersion")[0].childNodes[0].nodeValue;
                    var dH = dF.getElementsByTagName("logTo")[0];
                    p.logType = dH.getAttribute("logType");
                    if (!p.logType) {
                        p.logType = "relative"
                    }
                    p.logInterval = dH.getAttribute("logInterval") * 1000;
                    if (!p.logInterval) {
                        p.loginterval = 300 * 1000
                    }
                    p.heartBeatInterval = dH.getAttribute("heartBeatInterval") * 1000;
                    if (!p.heartBeatInterval) {
                        p.heartBeatInterval = 60 * 1000
                    }
                    p.secondaryLogTime = dH.getAttribute("secondaryLogTime") * 1000;
                    if (!p.secondaryLogTime) {
                        p.secondaryLogTime = 15 * 1000
                    }
                    p.rebufferDurationOutlier = dH.getAttribute("rebufferDurationOutlier") * 1000;
                    if (!p.rebufferDurationOutlier) {
                        p.rebufferDurationOutlier = 600 * 1000
                    }
                    p.isSessionWithRebufferLimit = dH.getAttribute("isSessionWithRebufferLimit");
                    if (!p.isSessionWithRebufferLimit) {
                        p.isSessionWithRebufferLimit = 500
                    }
                    p.fastTCPEnabled = dH.getAttribute("fastTCPEnabled");
                    if (!p.fastTCPEnabled) {
                        p.fastTCPEnabled = 0
                    }
                    if (p.fastTCPEnabled == 1) {
                        c.fastTCPEnabled = true
                    }
                    p.aisRequestLimit = dH.getAttribute("aisRequestLimit");
                    if (!p.aisRequestLimit) {
                        p.aisRequestLimit = 3
                    }
                    if (cg) {
                        cg.aisRequestLimit = p.aisRequestLimit
                    }
                    p.aisRequestInterval = dH.getAttribute("aisRequestInterval") * 1000;
                    if (!p.aisRequestInterval) {
                        p.aisRequestInterval = 30 * 1000
                    }
                    if (cg) {
                        cg.aisRequestInterval = p.aisRequestInterval
                    }
                    p.startupTimeOutlierLimit = dH.getAttribute("startupTimeOutlierLimit") * 1000;
                    if (!p.startupTimeOutlierLimit) {
                        p.startupTimeOutlierLimit = 600 * 1000
                    }
                    p.visitTimeout = dH.getAttribute("visitTimeout") * 60 * 1000;
                    if (!p.visitTimeout) {
                        p.visitTimeout = 60 * 60 * 1000
                    }
                    p.urlParamSeparator = dH.getAttribute("urlParamSeparator");
                    if (!p.urlParamSeparator) {
                        p.urlParamSeparator = "~"
                    }
                    p.encodedParamSeparator = dH.getAttribute("encodedParamSeparator");
                    if (!p.encodedParamSeparator) {
                        p.encodedParamSeparator = "*@*"
                    }
                    p.initBrowserCloseTime = dH.getAttribute("initBrowserCloseTime");
                    if (!p.initBrowserCloseTime) {
                        p.initBrowserCloseTime = 15 * 60 * 1000
                    }
                    p.seekThreshold = dH.getAttribute("seekThreshold") * 1000;
                    if (!p.seekThreshold) {
                        p.seekThreshold = 2000
                    }
                    var dv = dH.getAttribute("delayTimer");
                    if (dv) {
                        bp.time = dv
                    }
                    var dM = dH.getAttribute("disableDelay");
                    if (dM == 1) {
                        bp.enabled = false
                    }
                    var dx = dH.getElementsByTagName("host")[0].childNodes;
                    if (dx.length > 1) {
                        p.beaconUrl = "";
                        for (var dV = 0; dV < dx.length; dV++) {
                            p.beaconUrl += dx[dV].nodeValue
                        }
                    } else {
                        p.beaconUrl = dH.getElementsByTagName("host")[0].childNodes[0].nodeValue
                    }
                    if ((p.beaconUrl.indexOf("http://") == -1) && (p.beaconUrl.indexOf("https://") == -1)) {
                        p.beaconUrl = "http://" + p.beaconUrl
                    }
                    p.beaconUrl += dH.getElementsByTagName("path")[0].childNodes[0].nodeValue;
                    p.maxLogLineLength = dH.getAttribute("maxLogLineLength");
                    if (!p.maxLogLineLength) {
                        p.maxLogLineLength = 2048
                    }
                    p.maxLogLineLength -= p.beaconUrl.length;
                    p.logVersion = "2.0";
                    p.formatVersion = "1.1";
                    if (dH.getElementsByTagName("formatVersion") && dH.getElementsByTagName("formatVersion")[0] && dH.getElementsByTagName("formatVersion")[0].childNodes[0]) {
                        p.formatVersion = dH.getElementsByTagName("formatVersion")[0].childNodes[0].nodeValue
                    }
                    p.useKey = parseInt(dF.getElementsByTagName("statistics")[0].getAttribute("useKey"));
                    var d1 = dF.getElementsByTagName("feedback")[0];
                    if (d1 != null && d1 !== "") {
                        bA.shouldSendFLine = true;
                        bA.limit = d1.getAttribute("limit");
                        if (!bA.limit) {
                            bA.limit = 3
                        }
                        bA.socialShareLimit = d1.getAttribute("socialShareLimit");
                        if (!bA.socialShareLimit) {
                            bA.socialShareLimit = 1
                        }
                    }
                    var d2 = dF.getElementsByTagName("security")[0];
                    if (d2 != null && d2 !== "") {
                        var dT = d2.getElementsByTagName("ViewerDiagnostics")[0];
                        if (dT != null && dT !== "") {
                            aR.viewerDiagnostics = {};
                            var dw = dT.getElementsByTagName("salt")[0];
                            if (dw != null && dw !== "") {
                                aR.viewerDiagnostics.salt = {};
                                var dD = dw.getAttribute("value");
                                var dE = dw.getAttribute("version");
                                if (dD != null && dD !== "") {
                                    aR.viewerDiagnostics.salt.value = dD;
                                    aR.viewerDiagnosticsEnabled = true;
                                    if (dE != null && dE !== "") {
                                        aR.viewerDiagnostics.salt.version = dE
                                    }
                                    aR.viewerDiagnostics.salt.bytes = dw.getAttribute("bytes") * 2;
                                    if (!aR.viewerDiagnostics.salt.bytes) {
                                        aR.viewerDiagnostics.salt.bytes = 16 * 2
                                    }
                                    aR.viewerDiagnostics.salt.iterations = dw.getAttribute("iterations");
                                    if (!aR.viewerDiagnostics.salt.iterations) {
                                        aR.viewerDiagnostics.salt.iterations = 50
                                    }
                                } else {
                                    aR.viewerDiagnosticsEnabled = false
                                }
                            }
                        }
                    }
                    var dz = dF.getElementsByTagName("bucketInfo")[0];
                    cB.bucketLength = dz.getElementsByTagName("bucketLength")[0].childNodes[0].nodeValue;
                    cB.bucketCount = dz.getElementsByTagName("bucketCount")[0].childNodes[0].nodeValue;
                    cK = true;
                    for (var dU in bk) {
                        try {
                            if (dU.substring(0, 4) == "_cd_") {
                                db(dU)
                            }
                        } catch (dX) {}
                    }
                    q();
                    by();
                    bZ();
                    var dI = dF.getElementsByTagName("match");
                    for (var dV = 0; dV < dI.length; dV++) {
                        match = dI[dV];
                        try {
                            parentKey = match.parentNode.parentNode.getAttribute("name");
                            if (!ca[parentKey]) {
                                ca[parentKey] = {}
                            }
                            ca[parentKey][match.getAttribute("key")] = {
                                type: match.getAttribute("type"),
                                name: match.getAttribute("name"),
                                value: match.getAttribute("value")
                            }
                        } catch (dX) {
                            bR(dX)
                        }
                    }
                    be();
                    P();
                    aW()
                }
            }
        } catch (dX) {
            bR("Exception,  readConfig :" + dX)
        }
    }

    function db(e) {
        var du = bK.common;
        if (du != null) {
            var dt = {};
            dt.name = e;
            dt.key = e;
            du.push(dt)
        }
    }

    function q() {
        try {
            var dt = bK.split;
            for (var du = 0; du < dt.length; du++) {
                bW[dt[du].name] = dt[du].key
            }
        } catch (dv) {}
    }

    function be() {
        var dw = {};
        try {
            if (!ca.bitRateBucketTimes) {
                ca.bitRateBucketTimes = {};
                dw = ca.bitRateBucketTimes;
                dw.U = {
                    key: "U",
                    type: "range"
                };
                dw.S = {
                    key: "S",
                    max: 1500,
                    value: "max:1500",
                    type: "range"
                };
                dw.Q = {
                    key: "Q",
                    min: 1500,
                    max: 2500,
                    value: "min:1500;max:2500",
                    type: "range"
                };
                dw.D = {
                    key: "D",
                    min: 2500,
                    value: "min:2500",
                    type: "range"
                }
            } else {
                var dy, dv, du;
                for (du in ca.bitRateBucketTimes) {
                    dw = ca.bitRateBucketTimes[du];
                    if (dw) {
                        dw.key = du;
                        if (!dw.value) {
                            dw.category = "first"
                        } else {
                            dy = dw.value;
                            dv = dy.split(";");
                            for (var dt = 0; dt < dv.length; dt++) {
                                if (dv[dt].indexOf("min:") != -1) {
                                    dw.min = parseInt(dv[dt].split(":")[1])
                                } else {
                                    if (dv[dt].indexOf("max:") != -1) {
                                        dw.max = parseInt(dv[dt].split(":")[1])
                                    }
                                }
                            }
                        }
                    }
                }
            }
            co.bitRateBucketMap = {};
            for (var dx in ca.bitRateBucketTimes) {
                co.bitRateBucketMap[dx] = 0
            }
        } catch (dz) {
            bR("Exception, find bit rate match rules :" + dz)
        }
    }

    function P() {
        bR("fillVideoWithConfig function");
        if (aJ && aJ.akamai) {
            var e = aJ.akamai;
            e.populateMetricsFromConfiguration();
            if (e.isSLineSent) {
                z(aJ)
            }
            if (aR.viewerDiagnosticsEnabled) {
                cb(e)
            }
            e.cdn = aQ(e)
        }
    }

    function aW() {
        bR("sendStoredBeacons: number of beacons to be sent = " + c4.length);
        try {
            var du = aJ.akamai;
            while (c4.length > 0) {
                var dt = c4.shift();
                bR("readConfig: sending beacon event code = " + dt.code);
                dt.element.populateMetricsFromConfiguration();
                dt.element.xViewerId = cr.xViewerId;
                dt.element.xViewerIdVersion = cr.xViewerIdVersion;
                dt.element.cdn = aQ(dt.element);
                b8(dt.element, dt.code, dt.synch)
            }
        } catch (dv) {
            bR("Exception,  sendStoredBeacons" + dv)
        }
    }
    c8(ax, aG.url, false, true);

    function aQ(dv) {
        if (bk.cdn) {
            return bk.cdn
        } else {
            try {
                for (key in ca.cdn) {
                    var dy = ca.cdn[key];
                    if (dy && dy.name && dy.value) {
                        var dx = dv[dy.name];
                        var dt = dy.value.split(",");
                        for (var du = 0; du < dt.length; du++) {
                            if (dx && (dx.indexOf(dt[du].trim()) != -1)) {
                                return key;
                                break
                            }
                        }
                    }
                }
            } catch (dw) {
                bR("Exception Get CDN" + dw.message)
            }
        }
    }

    function aD(du) {
        var dt = "";
        var e;
        if (du.indexOf("://") != -1) {
            e = du.indexOf("://");
            du = du.substring(e + 3)
        }
        if (du.indexOf("/") != -1) {
            e = du.indexOf("/");
            if (du.indexOf("?") != -1) {
                var dv = du.indexOf("?");
                e = (e < dv) ? e : dv
            }
            dt = du.substring(0, e)
        } else {
            if (du.indexOf("?") != -1) {
                var e = du.indexOf("?");
                dt = du.substring(0, e)
            } else {
                dt = du
            }
        }
        return dt
    }

    function aA(dx, dw, e, dv) {
        var du = dx.currentState;
        var dt = dx.seekObject;
        if (dv == "S" && dt.seekStartStreamTime == -1) {
            dt.seekStartEpochTime = du.timeUpdateClockTime;
            dt.seekEndEpochTime = dw;
            dt.seekStartStreamTime = du.timeUpdateStreamTime;
            dt.seekEndStreamTime = e
        } else {
            if (dv == "S" && dt.seekEndStreamTime == du.timeUpdateStreamTime) {
                dt.seekEndEpochTime = dw;
                dt.seekEndStreamTime = e
            } else {
                if (dt.seekStartStreamTime != -1) {
                    dx.seekTime += dt.seekEndEpochTime - dt.seekStartEpochTime;
                    if (dx.seekIntervalsAsString != "-") {
                        dx.seekIntervalsAsString += "," + dt.seekStartStreamTime + ":" + dt.seekEndStreamTime
                    } else {
                        dx.seekIntervalsAsString = dt.seekStartStreamTime + ":" + dt.seekEndStreamTime
                    }
                    if (dx.pauseSeekSession != "-") {
                        dx.pauseSeekSession += ",S(" + dt.seekStartStreamTime + ":" + (dt.seekStartEpochTime - dx.startTimer) + "-" + dt.seekEndStreamTime + ":" + (dt.seekEndEpochTime - dx.startTimer) + ")"
                    } else {
                        dx.pauseSeekSession = "S(" + dt.seekStartStreamTime + ":" + (dt.seekStartEpochTime - dx.startTimer) + "-" + dt.seekEndStreamTime + ":" + (dt.seekEndEpochTime - dx.startTimer) + ")"
                    }++dx.seekCount;
                    dx.seekObject = {
                        seekStartEpochTime: -1,
                        seekEndEpochTime: -1,
                        seekStartStreamTime: -1,
                        seekEndStreamTime: -1
                    }
                }
            }
        }
    }

    function W(du, dt) {
        bR("set RebufferSession : curTime = " + dt);
        try {
            var dw = Math.round(dt - du.lastLogTime - du.curRebufferTime);
            var dx = Math.round(du.curRebufferTime);
            du.currRebufferEndEpoch = Math.round(dt);
            du.currRebufferStartEpoch = Math.round(dt - dx);
            if (dx > p.isSessionWithRebufferLimit) {
                du.isSessionWithRebuffer = 1
            }
            if (du.rebufferSession) {
                du.rebufferSession = du.rebufferSession + ";" + dw + ":" + dx
            } else {
                du.rebufferSession = dw + ":" + dx
            }
        } catch (dv) {
            bR("Error, set RebufferSession" + dv.message)
        }
    }

    function cL(dz, dt) {
        var dw;
        var dy;
        if (dt == "B") {
            var du = "";
            if (dz.rebufferSession) {
                var e = dz.rebufferSession.split(";");
                for (var dv = 0; dv < e.length; dv++) {
                    var dx = e[dv].split(":");
                    if (dv == 0) {
                        du += "0:" + dx[1]
                    } else {
                        du += e[dv]
                    }
                    if (dv != e.length - 1) {
                        du += ";"
                    }
                }
                bR("newRebufferSession = " + du);
                dz.rebufferSession = du
            }
            dy = 1;
            dw = 0
        } else {
            dy = 0;
            if (dz.lastRebufferEndEpoch > 0) {
                dw = dz.firstRebufferStartEpoch - dz.lastRebufferEndEpoch
            } else {
                dw = -1
            }
        }
        dz.rebufferSession = dy + ":" + dw + ";" + dz.rebufferSession;
        dz.lastRebufferEndEpoch = dz.currRebufferEndEpoch
    }

    function cy(dw, dv) {
        var dt = 1;
        dw.rebufferSessionH = null;
        if (!dw.rebufferSessionArrayHLine || ((dw.rebufferSessionArrayHLine) && (dw.rebufferSessionArrayHLine.length === 0))) {
            return
        }
        while (dw.rebufferSessionArrayHLine[dt] && ((dv - dw.rebufferSessionArrayHLine[dt]) > (2 * p.heartBeatInterval))) {
            dw.rebufferSessionArrayHLine.shift();
            dw.rebufferSessionArrayHLine.shift();
            if (dw.isSessionWithRebufferH == 1) {
                dw.sendIsSessionWithRebufferH = 0;
                dw.isSessionWithRebufferH = null
            }
        }
        while (dw.rebufferSessionArrayHLine[dt]) {
            var e = dv - dw.rebufferSessionArrayHLine[dt - 1];
            var du = dw.rebufferSessionArrayHLine[dt] - dw.rebufferSessionArrayHLine[dt - 1];
            if (dw.sendIsSessionWithRebufferH == 1) {
                if (du > p.isSessionWithRebufferLimit) {
                    dw.isSessionWithRebufferH = 1
                }
            }
            if (dw.rebufferSessionH) {
                dw.rebufferSessionH = dw.rebufferSessionH + ";" + e + ":" + du
            } else {
                dw.rebufferSessionH = e + ":" + du
            }
            dt = dt + 2
        }
        dt = dt - 1;
        if (dw.rebufferSessionArrayHLine[dt]) {
            var e = dv - dw.rebufferSessionArrayHLine[dt];
            if (dw.sendIsSessionWithRebufferH == 1) {
                if (e > p.isSessionWithRebufferLimit) {
                    dw.isSessionWithRebufferH = 1
                }
            }
            if (dw.rebufferSessionH) {
                dw.rebufferSessionH = dw.rebufferSessionH + ";" + e + ":" + e
            } else {
                dw.rebufferSessionH = e + ":" + e
            }
        }
    }

    function cJ(e) {
        if (bk.deliveryType) {
            return bk.deliveryType
        } else {
            return e.deliveryType
        }
    }

    function cl(du) {
        var e = du.readyState;
        var dt = du.status;
        if (parseInt(dt / 100) === 4 || dt === 0) {
            bR("readServerIp: serverIpFailed request falied as status is ,in 400 series");
            af = true
        }
        if (e == 4 && dt == 200) {
            var dw = du.responseXML;
            if (dw) {
                var dv;
                if (dw.documentElement) {
                    dv = dw.documentElement
                } else {
                    dv = dw
                }
                if (bV) {
                    cH.serverip = dv.getElementsByTagName("ip")[0].childNodes[0].nodeValue
                } else {
                    cH.serverip = dv.getElementsByTagName("serverip")[0].childNodes[0].nodeValue
                }
                bR("readServerIp : diagnostics.serverip =  " + cH.serverip)
            }
        }
    }

    function al(e) {
        var dv = e.akamai;
        if (af) {
            bR("getting ServerIp : serverIp request failed");
            return
        }
        if (dv.hostName) {
            try {
                var du = null;
                if (dv.protocol) {
                    if (dv.protocol.indexOf("rtmp") != -1) {
                        du = "http://" + dv.hostName + "/fcs/ident";
                        bV = true
                    } else {
                        //du = dv.protocol + "://" + dv.hostName + "/serverip"
                        du = "./analytics/serverip"
                    }
                    bR("getting ServerIp : serverIpPath = " + du);
                    c8(cl, du, false, true)
                }
            } catch (dt) {
                af = true;
                bR("getting ServerIp: error, xmphttprequest")
            }
        }
    }

    function ak(du) {
        var dt = "";
        var dw = du.readyState;
        var dv = du.status;
        if (parseInt(dv / 100) === 4 || dv === 0) {
            bR("read fast tcp: fast tcp Failed request falied as status is 400 series");
            c.fastTCPFailed = true
        }
        try {
            if (dw == 4 && dv == 200) {
                var dA = du.responseXML;
                if (dA) {
                    bR("populating fast tcp");
                    var dB;
                    if (dA.documentElement) {
                        dB = dA.documentElement
                    } else {
                        dB = dA
                    }
                    if (dB && dB.firstElementChild) {
                        var e = dB.firstElementChild;
                        var dx = "";
                        var dz = "";
                        if (e) {
                            if (e.hasAttribute("key")) {
                                dz = e.getAttribute("key");
                                dx = e.childNodes[0].nodeValue;
                                dt = dz + ":" + dx
                            }
                            while (e.nextElementSibling) {
                                e = e.nextElementSibling;
                                if (e.hasAttribute("key")) {
                                    dz = e.getAttribute("key");
                                    dx = e.childNodes[0].nodeValue;
                                    if (dt) {
                                        dt += "," + dz + ":" + dx
                                    } else {
                                        dt = dz + ":" + dx
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (dt) {
                c.ftcp = dt
            }
        } catch (dy) {
            bR("Exception,  read fast tcp" + dy)
        }
    }

    function cA(e) {
        var dv = e.akamai;
        if (c.fastTCPFailed) {
            bR("getting fast tcp: request failed");
            return
        }
        if (dv.hostName) {
            try {
                var du = dv.protocol + "://" + dv.hostName + "/protocol-info";
                bR("getting fast tcp : fastTCPPath = " + du);
                c8(ak, du, false, true)
            } catch (dt) {
                c.fastTCPFailed = true;
                bR("getting ServerIp: error, xmphttprequest")
            }
        }
    }

    function aV(dt, dw) {
        try {
            var du = dt.akamai;
            if (p && p.logInterval && !dw) {
                du.fastTCPServerIpTimer = b3(aV, p.logInterval, [dt])
            }
            if (!af) {
                al(dt)
            }
            if (!c.fastTCPFailed && c.fastTCPEnabled) {
                cA(dt)
            }
            if (af && c.fastTCPFailed) {
                b6(du.fastTCPServerIpTimer)
            }
        } catch (dv) {
            bR("Exception get fast tcp server ip")
        }
    }

    function bn(e) {
        var dt = null;
        if (e.objectBased) {
            if (e.errorReason) {
                dt = e.errorReason
            } else {
                dt = cq[0]
            }
        } else {
            if (e.externalError) {
                dt = e.externalError
            } else {
                if (e.error && e.error.code) {
                    dt = cq[e.error.code]
                } else {
                    dt = cq[0]
                }
            }
        }
        return dt
    }

    function aj(dt) {
        var e = "Play.End.Detected";
        if (dt.objectBased) {
            if (dt.endReason) {
                e = dt.endReason
            }
        }
        return e
    }

    function C() {
        cr.viewerId = bk.viewerId ? bk.viewerId : null;
        cr.viewerDiagnosticsId = bk.viewerDiagnosticsId ? bk.viewerDiagnosticsId : (bk.viewerId ? bk.viewerId : null)
    }

    function d(dt) {
        var e = dr();
        return e
    }

    function aN(du) {
        var dw = cr.viewerId;
        if (dw == "-") {
            return
        }
        if (!dw) {
            try {
                if (window && window.localStorage && window.localStorage.getItem("akamai_clientId")) {
                    dw = window.localStorage.getItem("akamai_clientId")
                } else {
                    try {
                        dw = dr();
                        if (window && window.localStorage) {
                            window.localStorage.setItem("akamai_clientId", dw)
                        }
                    } catch (dt) {
                        bR("window.localStorage Exception :" + dt)
                    }
                }
            } catch (dv) {
                bR("Exception,  getting viewerId" + dv);
                dw = dr()
            }
        }
        return dw
    }

    function cb(dy, dv) {
        var dx = null;
        if (cr && cr.viewerDiagnosticsId) {
            dx = cr.viewerDiagnosticsId
        }
        var dt = "";
        var dw = 50;
        var e = 16 * 2;
        if (!dx || dx == "-") {
            return
        }
        if (dv && dy.xViewerId) {
            return
        }
        a6(dy);
        bR("get Viewer DiagnosticsID");
        dx = encodeURIComponent(dx);
        if (aR && aR.viewerDiagnostics && aR.viewerDiagnostics.salt && aR.viewerDiagnostics.salt.value) {
            dt = aR.viewerDiagnostics.salt.value
        }
        if (aR && aR.viewerDiagnostics && aR.viewerDiagnostics.salt && aR.viewerDiagnostics.salt.iterations) {
            dw = aR.viewerDiagnostics.salt.iterations
        }
        if (aR && aR.viewerDiagnostics && aR.viewerDiagnostics.salt && aR.viewerDiagnostics.salt.bytes) {
            e = aR.viewerDiagnostics.salt.bytes
        }
        var du = bJ.PBKDF2(dx, dt, {
            keySize: e / 8,
            iterations: dw
        });
        dy.xViewerId = du;
        cr.xViewerId = du
    }

    function a6(dt) {
        var e = null;
        if (aR && aR.viewerDiagnostics && aR.viewerDiagnostics.salt && aR.viewerDiagnostics.salt.version) {
            e = aR.viewerDiagnostics.salt.version
        }
        dt.xViewerIdVersion = e;
        cr.xViewerIdVersion = e
    }

    function c6(du, dv, dt) {
        var e;
        if (dv == "viewerId" || dv == "clientId" || dv == "viewerDiagnosticsId") {
            return
        }
        if (dt) {
            if (bk[dt]) {
                e = bk[dt]
            } else {
                if (du[dt]) {
                    e = du[dt]
                }
            }
        }
        du[dv] = e
    }
    this.getValueFromQueryString = function() {
        return L(key, searchURL)
    };

    function L(du, dy, dw) {
        if (dw == null) {
            dw = ""
        }
        try {
            if (dy == "" || dy == null) {
                return
            }
            du = du.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var dv = new RegExp("[\\?&]" + du + "=([^&#]*)");
            var dt = dv.exec(dy);
            if (dt == null) {
                return dw
            } else {
                return dt[1]
            }
        } catch (dx) {
            bR("Exception,  getValueFromQueryString :" + dx);
            return dw
        }
    }

    function b0(e) {
        var dt = e.akamai;
        b6(dt.fastTCPServerIpTimer);
        if (a8) {
            aV(e)
        }
    }

    function b3(dv, dx, du) {
        try {
            var dt = null;
            dt = setTimeout(function() {
                dv.apply(undefined, du)
            }, dx);
            return dt
        } catch (dw) {
            bR("Exception, set window timeout:" + dw);
            try {
                dt = window.setTimeout(function() {
                    dv.apply(undefined, du)
                }, dx)
            } catch (dw) {
                return null
            }
            return dt
        }
    }

    function b6(dt) {
        try {
            clearTimeout(dt)
        } catch (du) {
            bR("Exception clear window timeout:" + du);
            try {
                window.clearTimeout(dt)
            } catch (du) {}
        }
    }

    function z(e) {
        bR("startBeaconTImer");
        var dt = e.akamai;
        if (dt.areTimerStarted) {
            return
        }
        bR("startBeaconTimer: starting beacon timer");
        dt.firstPLineTimer = b3(dk, p.secondaryLogTime, [e]);
        dt.hLineTimer = b3(dc, p.heartBeatInterval, [e]);
        dt.fastTCPServerIpTimer = b3(b0, (p.logInterval - 5000), [e]);
        if (e.objectBased) {
            M = 500
        }
        dt.pollingTimer = b3(cT, M, [e]);
        dt.areTimerStarted = true
    }

    function bL(e) {
        var dt = e.akamai;
        if (dt) {
            if (dt.hLineTimer) {
                b6(dt.hLineTimer)
            }
            if (dt.pollingTimer) {
                b6(dt.pollingTimer)
            }
            if (dt.fastTCPServerIpTimer) {
                b6(dt.fastTCPServerIpTimer)
            }
            if (dt.firstPLineTimer) {
                b6(dt.firstPLineTimer)
            }
            if (cg && cg.retryTimer) {
                b6(cg.retryTimer)
            }
        }
    }

    function dg(dt) {
        var dw = dt.akamai;
        bA.akamai = {};
        bA.dataSent = {};
        dw.areTimerStarted = false;
        dw.isCLineSent = false;
        dw.isELineSent = false;
        dw.lastRebufferEndEpoch = 0;
        dw.connectTime = 0;
        bp.browserClose = false;
        dw.totalPlayClockTime = dw.totalStreamTime = dw.totalRebufferCount = dw.totalRebufferTime = 0;
        dw.isVisitEnd = 0;
        dw.sequenceId = "0";
        dw.wasPutToSleep = false;
        dw.chasingSleep = null;
        dw.continuousRebufferDuration = 0;
        aL(dt);
        dw.attemptId = dw.sessionId = d(dw);
        C();
        dw.clientId = dw.viewerId = aN(dw);
        if (aR.viewerDiagnosticsEnabled) {
            cb(dw)
        }
        dw.lastPLineSentTime = dw.hLineSentCount = dw.lastSLineSentTime = dw.lastHLineSentTime = 0;
        dw.lastHTime = 0;
        Y("HTML_LastCLineTime");
        bS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var dx = parseInt(F("HTML_VisitCountCookie"));
        if (!dx || dx == "") {
            dw.isVisitStart = 1;
            dx = 0;
            bs("HTML_VisitCountCookie", dx)
        }
        var dy = parseInt(F("HTML_isPlayingCount"));
        if (!dy || dy == "") {
            dy = 0;
            bs("HTML_isPlayingCount", dy)
        }
        var e = F("HTML_VisitValueCookie");
        if (!e || e == "") {
            bs("HTML_VisitValueCookie", "0|0|0|0|0|0|0|0|0|0|0|0|0")
        }
        var dv = F("HTML_BitRateBucketCsv");
        if (!dv || dv == "") {
            bs("HTML_BitRateBucketCsv", "0,0,0,0,0,0,0,0")
        }
        var du = F(cu);
        if (!du || du == "") {
            dw.browserSessionId = dw.visitId = dr();
            bs(cu, dw.visitId)
        } else {
            dw.browserSessionId = dw.visitId = F(cu)
        }
    }

    function H(e, dv) {
        var du = e.akamai;
        du.isILineSent = true;
        ++du.iLineCount;
        du.lastSLineSentTime = dv;
        if (du.iLineCount == 1) {
            var dw = parseInt(F("HTML_VisitCountCookie"));
            ++dw;
            bs("HTML_VisitCountCookie", dw);
            g = dv
        }
        var dt = parseInt(F("HTML_VisitIntervalStartTime"));
        if (!dt || dt == " ") {
            dt = dv;
            bs("HTML_VisitIntervalStartTime", dt)
        }
        bS[0] = 1;
        du.sendVLine = true
    }

    function av(dx, dw) {
        try {
            var dv = aJ.akamai;
            if (dv.clearVisitTimeoutId) {
                b6(dv.clearVisitTimeoutId)
            }
            dg(aJ);
            dv.logInterval = "0";
            if (!cK) {
                var du = cY(dv);
                var dt = {
                    element: du,
                    code: "init",
                    synch: dx
                };
                c4.push(dt)
            } else {
                b8(dv, "init", dx)
            }
            dv.lastLogTime = dw;
            ++dv.sequenceId;
            H(aJ, dw);
            dv.currentState.state = cI.init;
            bR(": sendBeaconILineAd : Setting state to init");
            dv.currentState.timeUpdateClockTime = dw;
            dv.startTimer = dw
        } catch (dy) {
            bR("Exception, send I line AD:" + dy)
        }
    }

    function dk(e) {
        var du = cc();
        var dt = e.akamai;
        dt.lastPLineSentTime = du;
        v(e, "playing", false, du)
    }

    function w(dA, dC, dw, dv) {
        try {
            bR("start of the session function");
            var dy = dA.akamai;
            if (!dy || !dy.firstTimePlay) {
                return
            }
            if (dy.adLoadTime && dy.adLoadTime > dy.iLineSentTime) {
                dy.startupTime = dy.adLoadTime - dy.iLineSentTime;
                if (dy.adEndTime) {
                    dy.startupTime += dw - dy.adEndTime
                }
            } else {
                dy.startupTime = dw - dy.iLineSentTime
            }
            if (dy.startupTime > p.startupTimeOutlierLimit) {
                dy.outlierStartupTime = dy.startupTime;
                dy.startupTime = 0
            }
            dy.bufferingTime = dy.startupTime;
            var dB = {
                type: "startup",
                startTime: 0,
                endTime: dy.startupTime
            };
            aL(dA);
            var du = D(dA);
            cj(du, dy);
            dy.streamUrl = du;
            if (du != null && du.indexOf("?") != -1) {
                du = du.substring(0, du.indexOf("?"))
            }
            if (du != null && du != "") {
                if (/.m3u8$/.exec(du)) {
                    dy.format = "L";
                    dy.playerFormat = dy.playerType + ":" + dy.format
                } else {
                    dy.format = "P";
                    dy.playerFormat = dy.playerType + ":" + dy.format;
                    dy.deliveryType = "O"
                }
                bR("Creating hls stream");
                dy.stream = new hlsStream()
            }
            var dx = StreamTypeDetector(du, ar, dh, function(e) {
                if (e) {
                    bR("detected stream type = " + e.getStreamType());
                    bR("Received steam type = " + e.getStreamType() + "\n Stream URL = " + e.getStreamURL() + "\n Stream Name = " + e.getStreamName() + "\n Stream Length = " + e.getStreamLength() + "\n Stream Format = " + e.getStreamFormat() + "\n Stream Delivery Type = " + e.getDeliveryType());
                    dy.streamUrl = e.getStreamURL();
                    dy.format = e.getStreamFormat();
                    dy.deliveryType = e.getDeliveryType();
                    if (e.getStreamLength()) {
                        dy.streamLength = e.getStreamLength()
                    }
                    dy.streamName = e.getStreamName()
                }
            });
            if (dx !== streamError.NoError) {
                bR("failed to detect stream. May be we do not have sufficient information")
            }
            dy.streamLength = parseInt(I(dA));
            dy.played = [];
            var dt = parseInt(F("HTML_isPlayingCount"));
            dt = dt + 1;
            bs("HTML_isPlayingCount", dt);
            C();
            if (aR.viewerDiagnosticsEnabled) {
                cb(dy, true)
            }
            dy.lastSLineSentTime = dw;
            v(dA, "playStart", false, dw);
            dy.rebufferSessionArrayHLine = [];
            dy.isSLineSent = true;
            if (cK) {
                z(dA)
            }
            bS[1] = 1;
            dy.isFirstTitle = null;
            dy.isVisitStart = null;
            dy.firstTimePlay = false;
            dy.initPlayed(dv)
        } catch (dz) {
            bR("Exception, send S line:" + dz)
        }
    }

    function da(dt, dw, dv) {
        try {
            bR("send beacon I line");
            var du = dt.akamai;
            du.cdn = aQ(du);
            if (a8) {
                aV(dt, true)
            }
            if (!du.iLineSentTime) {
                du.iLineSentTime = dv
            }
            if (dt.videoWidth && dt.videoHeight) {
                du.videoSize = dt.videoWidth + "x" + dt.videoHeight
            }
            if (!du.isILineSent) {
                dg(dt);
                v(dt, "init", dw, dv);
                H(dt, dv);
                if (du.clearVisitTimeoutId) {
                    b6(du.clearVisitTimeoutId)
                }
            }
        } catch (dx) {
            bR("Exception send I line:" + dx)
        }
    }

    function dc(e) {
        var du = e.akamai;
        du.hLineTimer = b3(dc, p.heartBeatInterval, [e]);
        var dt = cc();
        v(e, "heartBeat", false, dt);
        du.lastHLineSentTime = dt;
        du.hLineSentCount++;
        if ((du.hLineSentCount % (p.logInterval / p.heartBeatInterval)) == 0) {
            v(e, "playing", false, dt);
            du.lastPLineSentTime = dt;
            if (du.continuousRebufferDuration >= p.rebufferDurationOutlier) {
                if (aJ.objectBased) {
                    aJ.errorReason = "Error.Continous.Rebuffer";
                    U(aJ)
                } else {
                    akamaiHandleError("Error.Continous.Rebuffer")
                }
            }
        }
    }

    function bP(dt, dx, dw, dv) {
        try {
            bR("sendBeaconCLine : endReasonCode = " + dx);
            var du = dt.akamai;
            du.endReasonCode = dx;
            v(dt, "complete", dw, dv);
            var dA = parseInt(F("HTML_isPlayingCount"));
            dA = dA - 1;
            bs("HTML_isPlayingCount", dA);
            du.isVisitStart = null;
            du.isCLineSent = true;
            du.firstTimePlay = true;
            bL(dt);
            var dz = dv;
            bs("HTML_LastCLineTime", dz)
        } catch (dy) {
            bR("Exception, send beacon C Line:" + dy)
        }
    }

    function h(dt, dz, dw, dv) {
        try {
            var du = dt.akamai;
            if (dz) {
                du.errorCode = dz
            } else {
                du.errorCode = "UNKNOWN"
            }
            bR("sendBeaconELine : errorCode = " + du.errorCode);
            bS[3] = 1;
            if (du.sequenceId == 1) {
                bS[11] = 1;
                C();
                if (aR.viewerDiagnosticsEnabled) {
                    cb(du, true)
                }
            }
            du.playerState = "E";
            v(dt, "error", dw, dv);
            if (du.isSLineSent) {
                var dA = parseInt(F("HTML_isPlayingCount"));
                dA = dA - 1;
                bs("HTML_isPlayingCount", dA)
            }
            du.isELineSent = true;
            du.isVisitStart = null;
            du.firstTimePlay = true;
            bL(dt);
            var dy = dv;
            cw(du);
            bs("HTML_LastCLineTime", dy)
        } catch (dx) {
            bR("Exception, send beacon E line:" + dx)
        }
    }

    function aq(dt, dx) {
        try {
            bR("sendBeaconVLine");
            var dw = dt.akamai;
            dw.isVisitEnd = 1;
            r(dw);
            var du = parseInt(F("HTML_VisitIntervalStartTime"));
            dw.visitMaxPersistentBitRateBucket = cp();
            dw.visitInterval = dx - du;
            if (du == "" || du == null || isNaN(du)) {
                dw.visitInterval = dx - g
            }
            dw.sessionId = null;
            dw.attemptId = null;
            dw.sequenceId = null;
            Y("HTML_BitRateBucketCsv");
            Y("HTML_VisitValueCookie");
            Y("HTML_VisitIntervalStartTime");
            Y("HTML_LastCLineTime");
            Y("HTML_VisitCountCookie");
            Y("HTML_isPlayingCount");
            Y(cu);
            v(dt, "visit", true, dx);
            bA.akamai = {};
            bA.dataSent = {};
            bR("sendBeaconVLine: beacon sent");
            dw.sendVLine = false;
            dw.iLineCount = 0;
            b6(dt.akamai.clearVisitTimeoutId);
            var dv = dw.isPlaylist;
            dt.akamai = new bb(aJ);
            if (typeof(akamaiBCVideoObject) != "undefined") {
                dt.akamai.isPlaylist = dv
            }
        } catch (dy) {
            bR("Exception, send beacon V line:" + dy)
        }
    }

    function ae() {
        var e = F("HTML_VisitValueCookie");
        var dw = e.split("|");
        var dx;
        for (var du = 0; du < bS.length; du++) {
            G[du] += bS[du]
        }
        bR("setVisitValueCookie :: visit values saved" + G);
        for (var dv = 0; dv < dw.length; dv++) {
            dw[dv] = parseInt(dw[dv]) + bS[dv]
        }
        var dt = dw.join("|");
        bs("HTML_VisitValueCookie", dt)
    }

    function bj() {
        try {
            var dw = F("HTML_BitRateBucketCsv");
            var dx = aE.split(",");
            var dt = dw.split(",");
            var du = 0;
            for (var dv in co.bitRatePlayTime) {
                dv = parseInt(dv);
                du = parseInt((dv - 1) / 500000);
                if (du > 7) {
                    du = 7
                }
                dt[du] = parseInt(dt[du]) + co.bitRatePlayTime[dv];
                dx[du] = parseInt(dx[du]) + co.bitRatePlayTime[dv]
            }
            dw = dt.join(",");
            bs("HTML_BitRateBucketCsv", dw);
            aE = dx.join(",")
        } catch (dy) {
            bR("Exception set bit rate bucketcsv" + dy)
        }
    }

    function cv(e) {
        bR("entered setVisitValueParameters");
        bS[4] = e.totalPlayClockTime;
        bS[5] = e.totalPlayStreamTime;
        bS[6] = e.totalRebufferCount;
        bS[7] = e.totalRebufferTime;
        bS[8] = e.totalAdPlayClockTime;
        bS[9] = e.totalAdStartCount;
        bS[10] = e.totalAdAbandonCount;
        if (e.totalPlayClockTime > 5000) {
            bS[2] = 1
        }
        bj();
        ae()
    }

    function r(dv) {
        try {
            var dA = F("HTML_VisitValueCookie");
            var dt = dA.split("|");
            var dx = true;
            if (dt == "" || dt == null) {
                dx = false
            }
            var dB;
            var dz = [];
            if (dx) {
                dz = dt
            } else {
                dz = G
            }
            var dy = ["visitAttempts", "visitPlays", "visitViews", "visitErrors", "visitPlayClockTime", "visitPlayStreamTime", "visitRebufferCount", "visitRebufferTime", "visitAdPlayClockTime", "visitAdStartCount", "visitAdAbandonCount", "visitStartupErrors"];
            for (var du = 0; du < dy.length; du++) {
                dv[dy[du]] = dz[du]
            }
        } catch (dw) {
            bR("Exception get visit value  cookie : " + dw)
        }
    }

    function cp() {
        try {
            var dx = F("HTML_BitRateBucketCsv");
            var du = dx.split(",");
            var dt = false;
            if (du == null || du == "") {
                du = aE.split(",")
            }
            du[0] = parseInt(du[0]);
            var dz = "00",
                dv = du[0];
            for (var dw = 0; dw < du.length; dw++) {
                du[dw] = parseInt(du[dw]);
                if (du[dw] > 0) {
                    dt = true
                }
                if (dv < du[dw]) {
                    dv = du[dw];
                    dz = "0" + dw
                }
            }
            if (dt) {
                return dz
            }
        } catch (dy) {
            bR("Exception, get visit max bit rate bucket" + dy)
        }
    }

    function bt(dv) {
        try {
            var dt = encodeURI(dv);
            dt = dt.replace(/#/g, "%23");
            return dt
        } catch (du) {
            bR("Exception,  encoding beacon");
            return dv
        }
    }

    function bl() {
        try {
            bR("send delayed beacon");
            if (bp.queue && bp.queue.length > 0) {
                var dt = bp.queue.shift();
                bp.timer = b3(bl, bp.time, []);
                bR("Beacon ::" + dt.url, "Beacon");
                c8(null, dt.url, dt.isSync);
                if (df) {
                    aB.processLogs({
                        api: "reportBeaconData",
                        value: dt.url
                    })
                }
            } else {
                bR("send delayed beacon : clear the timer");
                b6(bp.timer);
                bp.timer = null
            }
        } catch (du) {
            bR(du)
        }
    }

    function aF(dx, dw, dv) {
        if (ch == 0) {
            bR("put beacon On Wire, dont send beacon isACtive is zero");
            return
        }
        var e = p.beaconUrl + "?" + dx;
        try {
            if (bp.enabled) {
                var du = {};
                if (bp.browserClose) {
                    if (bp.timer) {
                        b6(bp.timer)
                    }
                    if (bp.queue && bp.queue.length > 0) {
                        while (bp.queue.length > 0) {
                            du = bp.queue.shift();
                            bR("put beacon on wire, send beacon from queue::" + du.url, "BEACON");
                            bR("Beacon ::" + du.url, "Beacon");
                            if (!dv.wasPutToSleep) {
                                if (df) {
                                    aB.processLogs({
                                        api: "reportBeaconData",
                                        value: du.url
                                    })
                                }
                                c8(null, du.url, du.isSync)
                            }
                        }
                    }
                    bR("put beacon on wire browser close::" + e, "BEACON");
                    bR("Beacon ::" + e, "Beacon");
                    if (!dv.wasPutToSleep) {
                        if (df) {
                            aB.processLogs({
                                api: "reportBeaconData",
                                value: e
                            })
                        }
                        c8(null, e, dw)
                    }
                } else {
                    bR("put beacon on wire pushing beacon in queue::" + e);
                    du.url = e;
                    du.isSync = dw;
                    bp.queue.push(du);
                    if (bp.timer) {
                        bR("put beacon on wire: timer is running")
                    } else {
                        bR("put beacon on wire: call send delayed beacon");
                        if (!dv.wasPutToSleep) {
                            bl()
                        }
                    }
                }
            } else {
                bR("put beacon on wire" + e, "BEACON");
                if (!dv.wasPutToSleep) {
                    c8(null, e, dw)
                }
            }
        } catch (dt) {
            bR("failed to send beacon");
            bR(dt)
        }
    }

    function cX(dt, du) {
        try {
            dt = dt.substring(0, du);
            return dt
        } catch (dv) {
            bR("Exception,  getTruncatedMetric" + dv);
            return dt
        }
    }

    function dl(dz, dx, dt, dy) {
        try {
            var dv;
            for (var dw = 0; dw < dx.length; dw++) {
                if (dx[dw].expiryDuration) {
                    di(dz, dx[dw])
                }
                dv = dx[dw].name;
                var du = null;
                if (dv in dz) {
                    du = dz[dv]
                }
                if (dx[dw].value) {
                    du = dx[dw].value
                }
                if (du || du == 0) {
                    if (dx[dw].sendOnce) {
                        if (dx[dw].isSent === false) {
                            if (du != 0) {
                                dx[dw].isSent = true
                            }
                            k(du, dx, dv, dw, dy, dt)
                        }
                    } else {
                        k(du, dx, dv, dw, dy, dt)
                    }
                }
            }
        } catch (dA) {
            bR("Exception, assemble logs:" + dA)
        }
    }

    function k(dz, dA, du, dw, dt, dx) {
        try {
            if (dA[dw].regExpJS) {
                var dB = new RegExp(dA[dw].regExpJS);
                var dv = dB.exec(dz);
                if (dv) {
                    dz = dv[dv.length - 1]
                }
            }
        } catch (dy) {
            bR("Exception,  evaluating regExpJS attribute for metric : " + du)
        }
        dz = String(dz).replace(/~/g, p.encodedParamSeparator);
        if (dA[dw].size) {
            dz = cX(dz, dA[dw].size)
        }
        if (dA[dw].key in dt) {} else {
            dt[dA[dw].key] = dA[dw].key;
            dx.push((p.useKey ? dA[dw].key : du) + "=" + dz)
        }
    }

    function b8(dD, dz, dy) {
        try {
            bR("getBeaconStrings : eventCode =  " + dz);
            var dw = bK.common;
            var dO = [];
            var dC = bK[dz];
            if (dC == null || dC == "undefined") {
                bR("getbeaconstrings, return as eventmetrics undefined");
                return
            }
            var dH = [];
            var dN = {};
            if (!dD.eventCode) {
                dD.eventCode = an[dz]
            }
            dl(dD, dw, dO, dN);
            if (dz == "error") {
                dD.updateTerminateMetrics();
                cv(dD, bS)
            }
            if (dz == "complete") {
                dD.updateTerminateMetrics();
                var dt = bK.playing;
                cv(dD, bS);
                dl(dD, dt, dH, dN)
            }
            dl(dD, dC, dH, dN);
            var dG = dO.join(p.urlParamSeparator);
            dG = bt(dG);
            var dL = 0;
            try {
                for (var dJ in bW) {
                    if (p.useKey) {
                        dL += bW[dJ].length + 3 + p.urlParamSeparator.length
                    } else {
                        dL += dJ.length + 3 + p.urlParamSeparator.length
                    }
                }
            } catch (dM) {
                dL = 12
            }
            dL--;
            var dB = p.maxLogLineLength - dL - dG.length - 3 - p.beaconUrl.length;
            if (dB <= 0) {
                dB = 4780 - dL - dG.length - 3 - p.beaconUrl.length
            }
            var dI = [];
            var dF = "";
            if (dB > 0) {
                if (dH.length > 0) {
                    var dK;
                    var du = "";
                    var dx = "";
                    for (dK = 0; dK < dH.length; dK++) {
                        dx = bt(dH[dK]);
                        if (dx.length >= dB) {
                            dI.push(dx)
                        } else {
                            if (du.length + dx.length <= dB) {
                                if (du) {
                                    du += p.urlParamSeparator + dx
                                } else {
                                    du = dx
                                }
                            } else {
                                dI.push(du);
                                du = ""
                            }
                        }
                    }
                    if (du != "") {
                        dI.push(du)
                    }
                }
                var dv = dI.length;
                if (dv > 1) {
                    for (var dE = 1; dE <= dv; ++dE) {
                        dF = dG + p.urlParamSeparator;
                        dF += ((p.useKey ? bW.partNumber : "partNumber") + "=" + dE) + p.urlParamSeparator;
                        dF += ((p.useKey ? bW.totalParts : "totalParts") + "=" + dv) + p.urlParamSeparator;
                        dF += dI[dE - 1];
                        dF += p.urlParamSeparator;
                        if (bK[dz]) {
                            aF(dF, dy, dD)
                        }
                    }
                } else {
                    dF = dG + p.urlParamSeparator + dI[0] + p.urlParamSeparator;
                    aF(dF, dy, dD)
                }
            } else {
                var dA = dH.join(p.urlParamSeparator);
                dA = bt(dA);
                dF = dG + p.urlParamSeparator + dA + p.urlParamSeparator;
                if (bK[dz]) {
                    aF(dF, dy, dD)
                }
            }
        } catch (dM) {
            bR("Exception, get beacon Strings:" + dM)
        }
    }

    function cw(e) {
        bA.fLineCount = 0;
        var dt = cY(e);
        bA.akamai = dt;
        bA.akamai.customDataPopulated = false
    }

    function y() {
        try {
            var dx = "socialShare:";
            var dt = dx.length;
            var du = bA.socialSharingObj;
            for (var dv in bk) {
                if (dv.indexOf(dx) != -1) {
                    if (dv in bA.dataSent) {
                        if (bA.dataSent[dv].count < bA.socialShareLimit) {
                            ++bA.dataSent[dv].count;
                            if (du == null) {
                                du[dv.substring(dt)] = bk[dv]
                            } else {
                                if (dv.substring(dt) in du) {
                                    du[dv.substring(dt)] = parseInt(du[dv.substring(dt)]) + parseInt(bk[dv])
                                } else {
                                    du[dv.substring(dt)] = bk[dv]
                                }
                            }
                        }
                    } else {
                        bA.dataSent[dv] = {};
                        bA.dataSent[dv].value = bk[dv];
                        bA.dataSent[dv].count = 1;
                        du[dv.substring(dt)] = bk[dv]
                    }
                    delete bk[dv]
                }
            }
            bA.socialSharingObj = du
        } catch (dw) {
            bR("Exception,  getFeedbackObj" + dw);
            bA.socialSharing = null
        }
    }

    function dm(du) {
        try {
            var dw = null;
            if (bA.socialSharingObj != null) {
                for (var dt in bA.socialSharingObj) {
                    if (dw == null) {
                        dw = dt + ":" + bA.socialSharingObj[dt] + ","
                    } else {
                        dw += dt + ":" + bA.socialSharingObj[dt] + ","
                    }
                }
            }
            if (dw != null) {
                du.socialSharing = dw.substring(0, dw.length - 1)
            }
        } catch (dv) {
            bR("Exception,  getFeedbackData" + dv);
            du.socialSharing = null
        }
        bA.socialSharingObj = {}
    }

    function bU(dv) {
        try {
            for (var du in bK) {
                if (bK[du]) {
                    for (var dt = 0; dt < bK[du].length; dt++) {
                        if (bK[du][dt].fallback && !bk[bK[du][dt].name]) {
                            c6(dv, bK[du][dt].name, bK[du][dt].fallback)
                        }
                    }
                }
            }
        } catch (dw) {}
    }

    function ba(du) {
        try {
            var dt = Z.streamName ? Z.streamName : du.streamName
        } catch (dv) {}
        try {
            if (bk.title) {
                du.title = bk.title
            } else {
                du.title = bk.eventName ? bk.eventName : dt
            }
            if (bk.eventName) {
                du.eventName = bk.eventName
            } else {
                du.eventName = bk.title ? bk.title : dt
            }
        } catch (dv) {
            bR("Exception,  getting title and eventName, " + dv)
        }
    }

    function bf(dy, dB, dv, dt) {
        bR("updating metrics for playing and end events");
        var dx = dy.akamai;
        var dz = 0;
        var dA = dx.playerState;
        var du = true;
        dx.currentStreamTime = parseInt(aH(dy));
        switch (dx.currentState.state) {
            case cI.playing:
                dx.playerState = "PL";
                if (dB - dx.seekTime > 0) {
                    dx.updatePlayClockTime(dB - dx.seekTime, dx.currentState.lastEventClockTime, dv)
                }
                if (dx.playClockTime < 0) {
                    dx.playClockTime = 0
                }
                dx.updatePlayed(dx.currentStreamTime);
                break;
            case cI.pause:
                dx.pauseDuration += dB;
                dx.playerState = "PS";
                break;
            case cI.rebuffering:
                if (!dx.wasPutToSleep) {
                    dx.rebufferTime += dB;
                    dx.curRebufferTime += dB;
                    W(dx, dv);
                    dx.playerState = "B";
                    dz = dv - dx.curRebufferTime;
                    break
                }
            case cI.resumeBuffering:
                dx.playerState = "RB";
                dx.resumeBufferTime += dB;
                break;
            case cI.ended:
                dx.updatePlayed(dx.currentStreamTime);
                break;
            case cI.seek:
                if ((dv - dx.currentState.timeUpdateClockTime) > 0) {
                    aA(dx, dv, dx.currentStreamTime, "S")
                }
                dx.currentState.timeUpdateClockTime = dv;
                dx.playerState = "SK";
                break;
            default:
                du = false;
                break
        }
        if (dx.playerState === "B") {
            dx.continuousRebufferDuration += dx.curRebufferTime
        } else {
            dx.continuousRebufferDuration = 0
        }
        co.getTransitionSession(dx);
        aA(dx);
        if (dx.rebufferSession) {
            cL(dx, dA);
            dx.firstRebufferStartEpoch = dz
        }
        if (dx.playClockTime > 5000) {
            dx.isView = 1
        }
        if (du) {
            dx.currentState.lastEventClockTime = dv
        }
        dx.bytesLoaded = cm(dy);
        if (dx.played) {
            var e = dx.played;
            dx.playStreamTime = 0;
            for (var dw = 0; dw < e.length; dw++) {
                dx.playStreamTime += parseInt(e[dw][1] - e[dw][0])
            }
            if (dx.logType == "R") {
                dx.playStreamTime -= dx.lastPlayStreamTime;
                dx.lastPlayStreamTime += dx.playStreamTime
            }
        }
        if (dt && dx.endReasonCode != "Browser.Close" && !dx.streamTitleSwitchReason) {
            dx.playerState = "E"
        }
    }

    function de(dv) {
        try {
            var dt = "-";
            if (document && document.referrer) {
                var du = document.referrer;
                du = du.split("/", 3);
                if (du && du[2]) {
                    dt = du[2]
                }
            }
            if (window == window.top) {
                dv.pageUrl = bk.pageUrl ? bk.pageUrl : document.URL;
                dv.pageHost = (bk.pageUrl && aD(bk.pageUrl)) ? aD(bk.pageUrl) : document.location.hostname;
                dv.pageReferrer = bk.pageReferrer ? bk.pageReferrer : (document.referrer ? document.referrer : "-");
                dv.pageReferrerHost = (bk.pageReferrer && aD(bk.pageReferrer)) ? aD(bk.pageReferrer) : (document.referrer ? dt : "-")
            } else {
                dv.pageUrl = bk.pageUrl ? bk.pageUrl : (document.referrer ? document.referrer : "-");
                dv.pageHost = (bk.pageUrl && aD(bk.pageUrl)) ? aD(bk.pageUrl) : (document.referrer ? dt : "-");
                dv.pageReferrer = bk.pageReferrer ? bk.pageReferrer : "NA";
                dv.pageReferrerHost = (bk.pageReferrer && aD(bk.pageReferrer)) ? aD(bk.pageReferrer) : "NA"
            }
        } catch (dw) {}
    }

    function a9(du) {
        try {
            var dt;
            for (dt in Z) {
                if ((dt != "viewerId") && (dt != "clientId") && (dt != "viewerDiagnosticsId") && (dt != "pluginVersion")) {
                    du[dt] = Z[dt]
                }
            }
            if ("pluginVersion" in Z) {
                du.pluginVersion = b2 + ":" + Z.pluginVersion
            }
        } catch (dv) {}
    }

    function cN(dw, dv) {
        bR("populate custom data, eventCode = " + dv);
        try {
            de(dw);
            dw.deliveryType = cJ(dw);
            dw.device = bk.device ? bk.device : a2;
            if (dv == "playing" || dv == "complete" || dv == "feedback" || dv == "error") {
                dm(dw);
                if ((dw.socialSharing == null || dw.socialSharing == "") && dv == "feedback" && (!dw.customDataChanged)) {
                    --bA.fLineCount;
                    return
                }
            }
            var du;
            for (du in bk) {
                if ((du != "viewerId") && (du != "clientId") && (du != "viewerDiagnosticsId")) {
                    if (!(du in ct)) {
                        dw[du] = bk[du]
                    }
                }
            }
            if (cg && cg.akamai) {
                for (var dt in cg.akamai) {
                    dw[dt] = cg.akamai[dt]
                }
            }
            ba(dw);
            dw.cdn = aQ(dw)
        } catch (dx) {
            bR("Exception,  populate Custom Data , " + dx)
        }
    }

    function v(dB, dy, dA, dw) {
        try {
            bR("sendBeacon: eventCode = " + dy + ", clocktime = " + dw);
            var dx = dB.akamai;
            var dE = dw - dx.currentState.lastEventClockTime;
            if (dy != "init") {
                dx.logInterval = (dx.lastLogTime <= 0) ? "0" : (dw - dx.lastLogTime) / 1000
            } else {
                dx.logInterval = "0"
            }
            if (!dx.customDataPopulated) {
                cN(dx, dy)
            }
            dx.serverIp = (cH.serverip) ? cH.serverip : "-";
            dx.fastTCP = (c.ftcp) ? c.ftcp : "-";
            dx.eventCode = an[dy];
            if (dx.hLineSentCount > 0) {
                dx.lastHTime = (dw - dx.lastHLineSentTime) / 1000
            } else {
                dx.lastHTime = (dw - dx.lastSLineSentTime) / 1000
            }
            if (dy == "heartBeat") {
                var dD = dx.logInterval;
                dx.logInterval = (dw - dx.lastPLineSentTime) / 1000;
                cy(dx, dw)
            }
            if (dx.logInterval < 0) {
                dx.logInterval = "0"
            }
            var dv = false;
            if (dy == "complete") {
                dy = "playing";
                dv = true
            }
            dx.endOfStream = dv ? "1" : "0";
            dx.currentClockTime = dw - dx.startTimer;
            dx.currentStreamTime = parseInt(aH(dB));
            if (dy == "playing" && !dx.playEndMetricsUpdated) {
                if (dv) {
                    cy(dx, dw)
                }
                bR("send Beacon, updating play and end metrics");
                bf(dB, dE, dw, dv);
                aL(dB)
            }
            if (!dx.customDataPopulated) {
                bU(dx)
            }
            a9(dx);
            if (!cK) {
                var dC = cY(dx);
                var dt = {
                    element: dC,
                    code: (dv) ? "complete" : dy,
                    synch: dA
                };
                c4.push(dt);
                if (dy == "playing" || dy == "playStart") {
                    dx.clearRelativeMetrics()
                }
                if (dy != "heartBeat") {
                    bR("send beacon :configurationPopulated false sequenceId = " + dx.sequenceId);
                    ++dx.sequenceId;
                    dx.lastLogTime = dw
                } else {
                    dx.logInterval = dD
                }
                return
            }
            if (dy == "playStart") {
                a4()
            }
            dx.populateMetricsFromConfiguration();
            dx.xViewerId = cr.xViewerId;
            dx.xViewerIdVersion = cr.xViewerIdVersion;
            if (typeof akaMediaAnalytics != "undefined" && akaMediaAnalytics != null) {
                var du = akaMediaAnalytics.getStream();
                if (du) {
                    dx.bandwidth = du.getBandwidthFromFragments();
                    bR("reporting bandwidth = " + dx.bandwidth);
                    du.cleanupFragments()
                }
            }
            if (dv) {
                b8(dx, "complete", dA)
            } else {
                b8(dx, dy, dA)
            }
            dx.qualityOfExperience = null;
            dv = false;
            if (dy == "playing" || dy == "playStart") {
                dx.clearRelativeMetrics()
            }
            if (dy != "heartBeat") {
                ++dx.sequenceId;
                dx.lastLogTime = dw
            } else {
                dx.logInterval = dD
            }
        } catch (dz) {
            bR("Exception, send beacon:" + dz)
        }
    }

    function cY(du, dw) {
        var dw = dw || {};
        try {
            for (var dt in du) {
                if ((typeof du[dt] === "object") && (du[dt])) {
                    dw[dt] = (du[dt].constructor === Array) ? [] : {};
                    cY(du[dt], dw[dt])
                } else {
                    dw[dt] = du[dt]
                }
            }
            return dw
        } catch (dv) {}
    }
    this.logMessage = function(dt, e) {
        bR(dt, e)
    };

    function bR(dz, dv) {
        try {
            if (O.configURLCsmaDebug == 1 || O.pageURLCsmaDebug == 1 || O.configDebug == 1) {
                try {
                    if (O.printException) {
                        if (dz.indexOf("Exception") != -1) {
                            dv = "ERROR"
                        }
                    }
                } catch (dy) {}
                var dw = [];
                dw[0] = {
                    message: dz,
                    type: dv,
                    time: ah()
                };
                var dt = {
                    logMessage: dw,
                    type: "log"
                };
                try {
                    if (typeof aB != "undefined") {
                        aB.processLogs({
                            api: "reportLogs",
                            value: dt
                        })
                    } else {
                        bH.push({
                            api: "reportLogs",
                            value: dt
                        })
                    }
                } catch (du) {
                    bH.push({
                        api: "reportLogs",
                        value: dt
                    })
                }
                try {
                    console.log(dz)
                } catch (du) {}
            } else {
                if (!cK) {
                    var dx = {
                        message: dz,
                        msgType: dv
                    };
                    A.push(dx)
                }
            }
        } catch (du) {}
    }

    function X(du, e) {
        if (e == null || e == "") {
            e = "TRACE"
        }
        if (du == null || du == "") {
            return
        }
        if (typeof AkamaiAnalytics_debugWindow_available == "function" && AkamaiAnalytics_debugWindow_available() == "1") {
            AkamaiAnalytics_debugWindow_appendLog(du, e)
        } else {
            var dt = {
                message: du,
                msgType: e
            };
            A.push(dt)
        }
    }

    function by() {
        try {
            if (O.configURLCsmaDebug == 1 || O.pageURLCsmaDebug == 1 || O.configDebug == 1) {
                if (O.logStoredMsg) {
                    if (typeof AkamaiAnalytics_debugWindow_available == "function" && AkamaiAnalytics_debugWindow_available() == "1") {
                        if (O.logTimer) {
                            b6(O.logTimer)
                        }
                        O.logStoredMsg = false;
                        if (A.length) {
                            for (var dt = 0; dt < A.length; dt++) {
                                bR(A[dt].message, A[dt].msgType)
                            }
                            A = []
                        }
                    } else {
                        O.logTimer = b3(by, 1000, [])
                    }
                }
            }
        } catch (du) {}
    }
    var bo, a, ag;
    var cu = "AkamaiAnalytics_BrowserSessionId";
    var bM = null;
    var aM = null;
    var b7 = null;
    var cQ = null;
    var c2 = null;
    var a2 = null;
    var br = null;
    if (navigator && navigator.userAgent) {
        br = navigator.userAgent
    }

    function cD() {
        if (navigator && navigator.userAgent) {
            try {
                var e = navigator.userAgent;
                var dw = /\((\w+)/;
                var du = dw.exec(e);
                aM = du[1].toLowerCase();
                if (e.indexOf("Xbox") != -1) {
                    aM = "Xbox"
                } else {
                    if (aM.indexOf("compatible") != -1 || aM.indexOf("windows") != -1 || aM.indexOf("mobile") != -1) {
                        aM = "Windows"
                    } else {
                        if (aM.indexOf("x11") != -1) {
                            aM = "Linux"
                        } else {
                            if (aM.indexOf("macintosh") != -1 || aM.indexOf("mac os") != -1 || aM.indexOf("macos") != -1) {
                                aM = "Mac OS"
                            } else {
                                if (aM.indexOf("ipad") != -1) {
                                    aM = "iPad"
                                } else {
                                    if (aM.indexOf("iphone") != -1) {
                                        aM = "iPhone"
                                    } else {
                                        if (aM.indexOf("ipod") != -1) {
                                            aM = "iOS"
                                        } else {
                                            if (e.indexOf("Android") != -1) {
                                                aM = "Android"
                                            } else {
                                                if (e.indexOf("PlayStation 4") != -1) {
                                                    aM = "PlayStation 4"
                                                } else {
                                                    if (e.indexOf("PLAYSTATION 3") != -1) {
                                                        aM = "PlayStation 3"
                                                    } else {
                                                        aM = "Others"
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
            } catch (dv) {
                bR("Exception,  finding Osname");
                aM = "Others"
            }
            b7 = aM;
            try {
                dw = /(NT|Phone|OS X|Linux|CPU.*?OS) ([0-9\._]+)/;
                du = dw.exec(e);
                if (du && du.length > 2) {
                    c2 = du[2] ? du[2] : "";
                    if (c2) {
                        b7 += " " + c2
                    }
                    var dt = null;
                    if (aM == "Windows") {
                        dt = bc(c2);
                        aM = aM + " " + dt
                    }
                }
            } catch (dv) {
                bR("Exception,  OSVersion" + dv)
            }
        }
    }

    function bc(dt) {
        var du = null;
        if (dt) {
            if (dt == "6.3" || dt == "6.2") {
                du = "8"
            } else {
                if (dt == "6.1") {
                    du = "7"
                } else {
                    if (dt == "6.0") {
                        du = "Vista"
                    } else {
                        if (dt == "5.2" || dt == "5.1") {
                            du = "XP"
                        } else {
                            var e = dt.split(".");
                            if (parseInt(e[0]) >= 8) {
                                du = e[0]
                            } else {
                                du = "Other"
                            }
                        }
                    }
                }
            }
        }
        return du
    }

    function Q() {
        if (navigator && navigator.userAgent) {
            var e = navigator.userAgent;
            var dx = /(MSIE|Chrome|Version|Firefox)[ \/]([0-9]+)/;
            try {
                var du = dx.exec(e);
                bM = du[1];
                if (du[1] == "Version") {
                    dx = /(Opera|Safari)/;
                    var dz = dx.exec(e);
                    bM = dz[1]
                }
            } catch (dw) {
                bR("Exception,  browserName" + dw)
            }
            try {
                bR("browser version = " + du[2]);
                var dt = e.indexOf("Edge");
                if (dt != -1) {
                    uagentLength = e.length;
                    var dy = e.substr(dt, uagentLength - dt);
                    var dv = dy.split("/");
                    bM = dv[0];
                    cQ = dv[1]
                } else {
                    cQ = du[2]
                }
                if (bM && cQ) {
                    bM = bM + " " + cQ
                }
            } catch (dw) {
                bR("Exception,  browserVersion" + dw)
            }
        }
    }

    function bT() {
        if (navigator && navigator.userAgent) {
            try {
                var dt = navigator.userAgent;
                dt = dt.toLowerCase();
                if (dt.indexOf("ipad") != -1) {
                    a2 = "iPad"
                } else {
                    if (dt.indexOf("ipod") != -1) {
                        a2 = "iPod"
                    } else {
                        if (dt.indexOf("iphone") != -1) {
                            a2 = "iPhone"
                        } else {
                            if (dt.indexOf("android") != -1) {
                                a2 = "Android Device"
                            } else {
                                if (dt.indexOf("xbox") != -1) {
                                    a2 = "Xbox"
                                } else {
                                    if (dt.indexOf("macintosh") != -1 || dt.indexOf("windows") != -1 || dt.indexOf("compatible") != -1) {
                                        a2 = "Desktop"
                                    } else {
                                        if (dt.indexOf("playstation 4") != -1) {
                                            a2 = "PlayStation 4"
                                        } else {
                                            if (dt.indexOf("playstation 3") != -1) {
                                                a2 = "PlayStation 3"
                                            } else {
                                                a2 = "Others"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (du) {
                bR("Exception,  getitng device name : " + du);
                a2 = "Others"
            }
        }
    }
    cD();
    Q();
    bT();
    var cI = {
        ended: 0,
        init: 1,
        playing: 2,
        pause: 3,
        seek: 4,
        rebuffering: 5,
        resumeBuffering: 6
    };

    function cU(dt) {
        try {
            switch (dt) {
                case cI.ended:
                    return "ended";
                    break;
                case cI.init:
                    return "init";
                    break;
                case cI.playing:
                    return "playing";
                    break;
                case cI.pause:
                    return "pause";
                    break;
                case cI.seek:
                    return "seek";
                    break;
                case cI.rebuffering:
                    return "rebuffering";
                    break;
                case cI.resumeBuffering:
                    return "resumeBuffering";
                    break;
                default:
                    return "undefined";
                    break
            }
        } catch (du) {}
    }
    var bS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var G = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var g;
    var aE = "0,0,0,0,0,0,0,0";

    function bb(e) {
        if (e && e.customMetrics) {
            for (var dt in e.customMetrics) {
                if (!(dt in ct)) {
                    this[dt] = e.customMetrics[dt]
                }
            }
        }
        this.userAgent = br;
        this.playerType = "HTML5";
        if (x != null && bY != null) {
            this.pluginVersion = "JS-" + b2 + ":" + x + "-" + bY
        } else {
            if (aJ.objectBased) {
                this.pluginVersion = "JS-" + b2
            } else {
                this.pluginVersion = "HTML5-" + b2
            }
        }
        this.os = aM;
        this.fullOs = b7;
        this.osVersion = c2;
        this.browser = bM;
        this.browserVersion = cQ;
        this.browserSize = window.innerWidth + "x" + window.innerHeight;
        this.rebufferCount = 0;
        this.bytesLoadedCallback = 0;
        this.lastBytesLoaded = 0;
        this.currRebufferEndEpoch = 0;
        this.totalPlayClockTime = 0;
        this.totalPlayStreamTime = 0;
        this.totalRebufferCount = 0;
        this.totalRebufferTime = 0;
        this.totalPauseCount = 0;
        this.totalPauseDuration = 0;
        this.totalSeekCount = 0;
        this.totalSeekTime = 0;
        this.totalResumeBufferCount = 0;
        this.totalResumeBufferTime = 0;
        this.totalAdPlayClockTime = 0;
        this.totalAdStartCount = 0;
        this.totalAdAbandonCount = 0;
        this.updateTerminateMetrics = function() {
            try {
                if (this.playClockTime) {
                    this.totalPlayClockTime += parseInt(this.playClockTime)
                }
                if (this.playStreamTime) {
                    this.totalPlayStreamTime += parseInt(this.playStreamTime)
                }
                if (this.rebufferCount) {
                    this.totalRebufferCount += parseInt(this.rebufferCount)
                }
                if (this.rebufferTime) {
                    this.totalRebufferTime += parseInt(this.rebufferTime)
                }
                if (this.pauseCount) {
                    this.totalPauseCount += parseInt(this.pauseCount)
                }
                if (this.pauseDuration) {
                    this.totalPauseDuration += parseInt(this.pauseDuration)
                }
                if (this.seekCount) {
                    this.totalSeekCount += parseInt(this.seekCount)
                }
                if (this.seekTime) {
                    this.totalSeekTime += parseInt(this.seekTime)
                }
                if (this.resumeBufferCount) {
                    this.totalResumeBufferCount += parseInt(this.resumeBufferCount)
                }
                if (this.resumeBufferTime) {
                    this.totalResumeBufferTime += parseInt(this.resumeBufferTime)
                }
                if (this.adPlayClockTime) {
                    this.totalAdPlayClockTime += parseInt(this.adPlayClockTime)
                }
                if (this.adCount) {
                    this.totalAdStartCount += parseInt(this.adCount)
                }
                if (this.adAbandonCount) {
                    this.totalAdAbandonCount += parseInt(this.adAbandonCount)
                }
                var du = cc();
                this.startupAbondonWaitTime = du;
                this.playInterval = du
            } catch (dv) {
                bR("Unable to update cumulative metrics")
            }
        };
        this.clearRelativeMetrics = function() {
            var du = ["rebufferCount", "rebufferTime", "playClockTime", "playStreamTime", "seekCount", "seekTime", "pauseCount", "pauseDuration", "resumeBufferCount", "resumeBufferTime", "averagedBitRate", "transitionUpSwitchCount", "transitionDownSwitchCount", "rebufferSession", "curRebufferTime", "adCount", "adPlayClockTime", "adStartupTime", "adAbandonCount", "adPauseTime"];
            this.updateTerminateMetrics();
            for (var dv = 0; dv < du.length; ++dv) {
                this[du[dv]] = 0
            }
            this.pauseIntervalsAsString = "-";
            this.seekIntervalsAsString = "-";
            this.pauseSeekSession = "-";
            this.transitionStreamTimeSession = "-";
            this.socialSharing = null;
            this.adSession = null;
            bA.socialSharing = null;
            bA.socialSharingObj = {};
            co.bitRateArr = [];
            delete this.rebufferSession
        };
        this.populateMetricsFromConfiguration = function() {
            this.beaconId = a0.beaconId;
            this.beaconVersion = a0.beaconVersion;
            this.logType = (p.logType == "relative") ? "R" : "C";
            this.logVersion = p.logVersion;
            this.startupTimeOutlierLimit = p.startupTimeOutlierLimit;
            this.formatVersion = p.formatVersion;
            this.bucketCount = cB.bucketCount;
            this.bucketLength = cB.bucketLength;
            for (var dv in bK) {
                if (bK[dv]) {
                    for (var du = 0; du < bK[dv].length; du++) {
                        if (bK[dv][du].value) {
                            this[bK[dv][du].name] = bK[dv][du].value
                        }
                    }
                }
            }
        };
        this.initPlayed = function(du) {
            this.played.push([du, du]);
            this.playingIndex = 0
        };
        this.updatePlayClockTime = function(dv, du, dw) {
            this.playClockTime += dv;
            co.updateBitRateArr(dv)
        };
        this.updatePlayed = function(du, dx) {
            var dw = this.played;
            if (!dw) {
                return
            }
            for (var dv = 0; dv < dw.length; dv++) {}
            for (var dv = this.playingIndex; dv < dw.length && du > dw[dv][0]; dv++) {}
            if (dv != this.playingIndex) {
                dw[this.playingIndex][1] = Math.max(du, dw[dv - 1][1]);
                dw.splice(this.playingIndex + 1, dv - this.playingIndex - 1)
            } else {
                dw[this.playingIndex][1] = Math.max(du, dw[this.playingIndex][1])
            }
            if (dx == null) {
                return
            }
            for (dv = 0; dv < dw.length; dv++) {
                if (dw[dv][0] <= dx && dw[dv][1] >= dx) {
                    this.playingIndex = dv;
                    return
                } else {
                    if ((dv + 1) < dw.length && dw[dv][1] < dx && dw[dv + 1][0] > dx) {
                        dv++;
                        this.playingIndex = dv;
                        dw.splice(dv, 0, [dx, dx]);
                        return
                    }
                }
            }
            if (dv == dw.length) {
                dw.push([dx, dx]);
                this.playingIndex = dv
            }
        };
        this.isVisitEnd = 0;
        this.sequenceId = "0";
        this.isSLineSent = false;
        this.sendVLine = false;
        this.played = [];
        this.iLineCount = 0;
        this.isPlaylist = false;
        this.isFirstTitle = 1;
        this.currentState = {
            state: cI.ended,
            lastEventClockTime: 0,
            pauseStartStreamTime: 0,
            pauseStartClockTime: 0,
            timeUpdateStreamTime: 0,
            timeUpdateClockTime: 0,
            pollingTimerStreamTime: 0,
            seekStartStreamPos: 0
        };
        this.seekObject = {
            seekStartEpochTime: -1,
            seekEndEpochTime: -1,
            seekStartStreamTime: -1,
            seekEndStreamTime: -1
        };
        this.clearRelativeMetrics();
        bR("value of configurationPopulated" + cK);
        if (cK) {
            this.populateMetricsFromConfiguration()
        }
        this.loadStartILine = false;
        this.canPlayUpdated = false;
        this.canPlayEventAutoPlay = true;
        this.format = "P";
        this.playerFormat = this.playerType + ":" + this.format;
        this.deliveryType = "O";
        this.firstTimeProgress = true;
        this.firstTimePlay = true;
        this.isILineSent = false;
        this.seekFrom = 0;
        this.lastPlayStreamTime = 0;
        this.lastPlayLogTime = 0;
        this.lastLogTime = 0;
        this.curRebufferTime = 0;
        this.sendIsSessionWithRebufferH = 1
    }
    aJ.akamai = new bb(aJ);

    function cP() {
        try {
            var du, dt;
            for (du in bK) {
                if (bK[du]) {
                    for (dt = 0; dt < bK[du].length; dt++) {
                        if (bK[du][dt].isSent && bK[du][dt].isSent === true) {
                            bK[du][dt].isSent = false
                        }
                    }
                }
            }
        } catch (dv) {}
    }

    function bg(dx) {
        bR("endOfTheSession");
        var dw = dx.akamai;
        var dy = dw.isPlaylist;
        var du = dw.visitId;
        var e = dw.viewerId;
        var dv = dw.streamName;
        var dA = dw.cdn;
        var dz = dw.sendVLine;
        var dt = dw.iLineCount;
        dx.akamai = null;
        cP();
        dw = dx.akamai = new bb(dx);
        dw.visitId = dw.browserSessionId = du;
        dw.viewerId = dw.clientId = e;
        dw.cdn = dA;
        aP = -1;
        dw.streamName = dv;
        dw.iLineCount = dt;
        dx.akamai.clearVisitTimeoutId = b3(c5, p.visitTimeout, [dx, 1]);
        dw.sendVLine = dz;
        dw.isPlaylist = dy;
        if (dx.played) {
            dx.played.length = 0
        }
        co.clearBitRate()
    }

    function bG() {
        try {
            if (this.readyState == 4 && this.status == 200 && this.responseText) {
                var dx = this.akamai;
                var dA = this.responseText.split("\n");
                var dt = "";
                var dB = /PROGRAM-ID=(\d+)/;
                var dw, dv;
                if (dA) {
                    for (dv = 0; dv < dA.length; dv++) {
                        if ((dw = dB.exec(dA[dv]))) {
                            if (dw[1] == dt) {
                                break
                            } else {
                                dt = dw[1]
                            }
                        }
                    }
                    if (dv != dA.length) {
                        dx.format = "L";
                        dx.playerFormat = dx.playerType + ":" + dx.format
                    }
                }
                dB = /^#EXT((INF)|(-X-STREAM-INF))[^\n]*\n([^\n]*)\n/m;
                bR("Checking");
                if ((dw = dB.exec(this.responseText))) {
                    bR("Checking done " + dw[4]);
                    var dz = new RegExp(".m3u8");
                    if (dz.exec(dw[4])) {
                        try {
                            var du = new XMLHttpRequest();
                            du.open("GET", dw[4], true);
                            du.onreadystatechange = function() {
                                bR("current content type from stream url is = " + this.getResponseHeader("content-type"));
                                if (this.readyState == 4 && this.status == 200) {
                                    if (this.responseText) {
                                        if (/^#EXT-X-ENDLIST/m.exec(this.responseText)) {
                                            dx.deliveryType = "O"
                                        }
                                    }
                                }
                            };
                            if (du.overrideMimeType) {
                                du.overrideMimeType("text/plain")
                            }
                        } catch (dy) {
                            bR("parsePlaylist, Exception,  parsing play list, " + dy)
                        }
                    } else {
                        if (/^#EXT-X-ENDLIST/m.exec(this.responseText)) {
                            dx.deliveryType = "O"
                        }
                    }
                }
            }
        } catch (dy) {
            bR("Exception,  parsePlaylist : " + dy)
        }
    }
    var cq = ["UNKNOWN", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"];

    function b5(e) {
        if (cs && cs.dataset && cs.dataset.isad && cs.dataset.isad == "true") {
            return true
        } else {
            return false
        }
    }

    function ce(du, dt, dx, dw) {
        if (dt == "playing") {
            cF = []
        }
        var dv = {};
        dv.eventType = dt;
        dv.eventTime = dw;
        if (dx) {
            dv.streamUrl = dx
        }
        if (dt == "error") {
            dv.errorCode = bn(du)
        }
        if (cF && cF.length > 0) {
            var e = cF[cF.length - 1];
            if (e.eventType == dv.eventType && e.streamUrl == dv.streamUrl) {
                if (dt == "error") {
                    e.errorCode = dv.errorCode
                }
                e.eventTime = dv.eventTime
            } else {
                cF.push(dv)
            }
        } else {
            cF.push(dv)
        }
    }

    function S(dt, dA, dz, dv) {
        try {
            var dy = false;
            if (cF.length > 0) {
                var du = cF[cF.length - 1];
                bR("check error events array, previous event is : " + du.eventType);
                if (du.eventType == "error" && dz == du.streamUrl) {
                    if (dA == "error") {
                        var dx = bn(dt);
                        if (du.errorCode == dx) {
                            dy = true
                        } else {
                            dy = false
                        }
                        du.eventTime = dv;
                        du.errorCode = dx
                    } else {
                        if (dA == "play" && du.eventTime && (dv - du.eventTime <= 2000)) {
                            dy = true
                        }
                    }
                }
            }
        } catch (dw) {
            bR("Exception,  checkErrorEventsArray" + dw);
            dy = false
        }
        return dy
    }

    function bI(du) {
        if (b5(du)) {
            bR("handle Seeking Event : video tag is of type AD, return");
            return
        }
        try {
            var dw = cc();
            var dt = parseInt(aH(du));
            var dy = du.akamai;
            var dv = dy.currentState;
            var dB = dw - dv.lastEventClockTime;
            var dx = dw - dy.startTimer;
            var dz = dv.state;
            if (dv.state == cI.playing) {
                dy.updatePlayClockTime(dB, dv.lastEventClockTime, dw)
            }
            if (dy.isPlaylist && (dv.state == cI.ended) && (dy.browser == "Safari")) {}
            dv.lastEventClockTime = dw
        } catch (dA) {
            bR("Exception,  handle Seeking Event : " + dA)
        }
    }

    function ac(du, dw, dt) {
        if (b5(du)) {
            bR("handle Seeked Event : video tag is of type AD, return");
            return
        }
        try {
            if (!dw) {
                dw = cc()
            }
            if (!dt) {
                dt = parseInt(aH(du))
            }
            var dy = du.akamai;
            var dv = dy.currentState;
            var dB = dw - dv.lastEventClockTime;
            var dx = dw - dy.startTimer;
            var dz = dv.state;
            bR("entered function handle Seeked Event, currentstate = " + cU(dv.state));
            if (dz == cI.pause || dz == cI.playing || dz == cI.rebuffering || dv.state == cI.seek) {
                if ((dw - dv.timeUpdateClockTime) > 0) {
                    aA(dy, dw, dt, "S")
                }
                switch (dz) {
                    case cI.playing:
                        dy.updatePlayed(dv.timeUpdateStreamTime, dt);
                        dv.lastEventClockTime = dw;
                        dy.updatePlayClockTime(dB, dv.lastEventClockTime, dw);
                        dv.state = cI.seek;
                        dv.seekStartStreamPos = dt;
                        break;
                    case cI.rebuffering:
                        if (!dy.wasPutToSleep) {
                            bR("handle seeked event, previous state is rebuffering");
                            dy.rebufferTime += dB;
                            dy.curRebufferTime += dB;
                            if (dy.rebufferSessionArrayHLine) {
                                dy.rebufferSessionArrayHLine.push(dw)
                            }
                            try {
                                W(dy, dw);
                                dy.curRebufferTime = 0
                            } catch (dA) {
                                bR("Error...Play" + dA.message)
                            }
                            dv.lastEventClockTime = dw;
                            dv.state = cI.seek
                        } else {
                            bR("Rejecting this event, because rebuffer was caused by system sleep")
                        }
                        break
                }
            }
        } catch (dA) {
            bR("Exception,  handle Seeked Event :" + dA)
        }
    }

    function ai(du, dC) {
        if (b5(du)) {
            bR("handlePauseEvent : video tag is of type AD, return");
            return
        }
        try {
            bR("entered function handle Pause Event");
            var dw = cc(dC);
            var dt = parseInt(aH(du));
            var dA = du.akamai;
            var dv = dA.currentState;
            var dx = I(du);
            if (dA.firstTimePlay || dv.state == cI.pause) {
                return
            }
            if (dx && dx != 0 && dt && dt != 0) {
                if (Math.abs(dx - dt) < 1000) {
                    return
                }
            }
            var dD = dw - dv.lastEventClockTime;
            var dy = dw - dA.startTimer;
            var dz = dv.state;
            switch (dz) {
                case cI.playing:
                    dA.updatePlayClockTime(dD, dv.lastEventClockTime, dw);
                    ++dA.pauseCount;
                    aA(dA, dw, dt, "P");
                    if (dA.pauseSeekSession != "-") {
                        dA.pauseSeekSession += ",P(" + dt + ":" + dy + ")"
                    } else {
                        dA.pauseSeekSession = "P(" + dt + ":" + dy + ")"
                    }
                    dA.updatePlayed(dt);
                    break;
                case cI.rebuffering:
                    if (!dA.chasingSleep) {
                        ++dA.pauseCount;
                        aA(dA, dw, dt, "P");
                        if (dA.pauseSeekSession != "-") {
                            dA.pauseSeekSession += ",P(" + dt + ":" + dy + ")"
                        } else {
                            dA.pauseSeekSession = "P(" + dt + ":" + dy + ")"
                        }
                        dA.rebufferTime += dD;
                        dA.curRebufferTime += dD;
                        if (dA.rebufferSessionArrayHLine) {
                            bR("handlePauseEvent : pushing, rebufferSessionArrayHLine");
                            dA.rebufferSessionArrayHLine.push(dw)
                        }
                        try {
                            W(dA, dw);
                            dA.curRebufferTime = 0
                        } catch (dB) {
                            bR("Error...Pause" + dB.message)
                        }
                    }
                    break
            }
            dv.state = cI.pause;
            dv.pauseStartStreamTime = dt;
            dv.pauseStartClockTime = dw;
            dv.lastEventClockTime = dw
        } catch (dB) {
            bR("Exception,  handlePauseEvent : " + dB)
        }
    }

    function b4(dv, du) {
        try {
            if (aJ && aJ.akamai) {
                bR("handle bit rate switch");
                try {
                    dv = parseInt(dv)
                } catch (dy) {
                    bR("Exception,bit rate to int :" + dy);
                    return
                }
                if (isNaN(dv)) {
                    bR("handle bitrate swtich, bite rate isNaN")
                }
                var dx = aJ.akamai;
                var dw = dx.currentState;
                var dt = aH(aJ);
                if (co.currentBitRate != "-") {
                    if (dv > co.currentBitRate) {
                        dx.transitionUpSwitchCount++
                    } else {
                        if (dv < co.currentBitRate) {
                            dx.transitionDownSwitchCount++
                        }
                    }
                }
                if (dw && dw.state == cI.playing) {
                    l(aJ, du)
                }
                co.currentBitRate = dv;
                co.currentStartPos = dt
            }
        } catch (dy) {
            bR("Exception, handle bit rate switch:" + dy)
        }
    }

    function ay(dv, dB) {
        if (b5(dv)) {
            bR("handle Play Event : video tag is of type AD, return");
            return
        }
        try {
            var dy = cc(dB);
            var dF = D(dv);
            if (dv.akamai && dv.akamai.postRollTimer) {
                bR("handle play event: send the C line without changing set data");
                b6(dv.akamai.postRollTimer);
                delete dv.akamai.postRollTimer;
                au(dv, dy)
            }
            if (S(dv, "play", dF, dy)) {
                bR("handle play Event: play is thrown after error, return, curTime = " + dy);
                return
            }
            ce(dv, "play", dF, dy);
            var dD = dv.akamai;
            var du = parseInt(aH(dv));
            var dw = dD.currentState;
            var dG = dy - dw.lastEventClockTime;
            var dA = dy - dD.startTimer;
            var dC = dw.state;
            bR("entered function handle Play Event, current state = " + cU(dw.state));
            switch (dC) {
                case cI.ended:
                    cj(dF, dD);
                    dD.streamUrl = dF;
                    dD.startTimer = dy;
                    dD.streamLength = parseInt(I(dv));
                    if (dF != null && dF.indexOf("?") != -1) {
                        dF = dF.substring(0, dF.indexOf("?"))
                    }
                    if (dF != null && dF != "" && (/.m3u8$/.exec(dF))) {
                        dD.format = "L";
                        dD.playerFormat = dD.playerType + ":" + dD.format;
                        dD.deliveryType = "L";
                        try {
                            var dx = new XMLHttpRequest();
                            dx.akamai = dD;
                            dx.open("GET", dF, true);
                            dx.onreadystatechange = bG;
                            if (dx.overrideMimeType) {
                                dx.overrideMimeType("text/plain")
                            }
                            dx.send(null)
                        } catch (dE) {
                            bR("handleplayEvent, Exception,  parsing play list, " + dE)
                        }
                    }
                    aP = -1;
                    da(dv, false, dy);
                    dD.currentState.state = cI.init;
                    bR(dy + ": handlePlayBackEvent : Setting state to init");
                    dD.currentState.timeUpdateClockTime = dy;
                    dD.currentState.timeUpdateStreamTime = 0;
                    dD.currentState.lastEventClockTime = dy;
                    dD.isPlaylist = true;
                    var dt = D(dv);
                    var dz = StreamTypeDetector(dt, ar, dh, function(e) {
                        if (e) {
                            bR("detected stream type = " + e.getStreamType());
                            bR("Received steam type = " + e.getStreamType() + "\n Stream URL = " + e.getStreamURL() + "\n Stream Name = " + e.getStreamName() + "\n Stream Length = " + e.getStreamLength() + "\n Stream Format = " + e.getStreamFormat() + "\n Stream Delivery Type = " + e.getDeliveryType());
                            dD.streamUrl = e.getStreamURL();
                            dD.format = e.getStreamFormat();
                            dD.deliveryType = e.getDeliveryType();
                            if (e.getStreamLength()) {
                                dD.streamLength = e.getStreamLength()
                            }
                            dD.streamName = e.getStreamName()
                        }
                    });
                    if (dz !== streamError.NoError) {
                        bR("failed to detect stream. May be we do not have sufficient information")
                    }
                    break;
                case cI.pause:
                    dD.pauseDuration += dG;
                    if (dD.pauseIntervalsAsString != "-") {
                        dD.pauseIntervalsAsString += "," + dw.pauseStartStreamTime + ":" + (dy - dw.pauseStartClockTime)
                    } else {
                        dD.pauseIntervalsAsString = dw.pauseStartStreamTime + ":" + (dy - dw.pauseStartClockTime)
                    }
                    if (dD.pauseSeekSession != "-") {
                        dD.pauseSeekSession += ",R(" + dw.pauseStartStreamTime + ":" + dA + ")"
                    } else {
                        dD.pauseSeekSession = "R(" + dw.pauseStartStreamTime + ":" + dA + ")"
                    }
                    dD.updatePlayed(dw.pauseStartStreamTime, du);
                    dD.currentState.lastEventClockTime = dy;
                    ++dD.resumeBufferCount;
                    dw.state = cI.resumeBuffering;
                    break;
                case cI.init:
                    if (!dD.iLineSentTime) {
                        dD.iLineSentTime = dy
                    }
                    if (dD.loadStartILine && !dD.canPlayEventAutoPlay && !dD.canPlayUpdated) {
                        dD.iLineSentTime = dy;
                        dD.canPlayUpdated = true
                    }
                    break
            }
        } catch (dE) {
            bR("Exception,  handle Play Event:" + dE)
        }
    }

    function l(dv, dt) {
        if (b5(dv)) {
            bR("handle Playing Event : video tag is of type AD, return");
            return
        }
        try {
            var dx = cc(dt);
            var dC = D(aJ);
            ce(dv, "playing", dC, dx);
            var du = parseInt(aH(dv));
            var dA = dv.akamai;
            var dw = dA.currentState;
            var dD = dx - dw.lastEventClockTime;
            var dy = dx - dA.startTimer;
            var dz = dw.state;
            bR("entered function handle Playing Event, current State = " + cU(dw.state));
            switch (dz) {
                case cI.rebuffering:
                    if (!dA.wasPutToSleep) {
                        dA.rebufferTime += dD;
                        dA.curRebufferTime += dD;
                        dA.continuousRebufferDuration = 0;
                        if (dA.rebufferSessionArrayHLine) {
                            dA.rebufferSessionArrayHLine.push(dx)
                        }
                        try {
                            W(dA, dx);
                            dA.curRebufferTime = 0
                        } catch (dB) {
                            bR("Error...Play" + dB.message)
                        }
                    }
                    break;
                case cI.pause:
                case cI.resumeBuffering:
                    dA.resumeBufferTime += dD;
                    if (dD == 0 && dA.resumeBufferCount > 0) {
                        --dA.resumeBufferCount
                    }
                    break;
                case cI.init:
                    w(dv, dD, dx, du);
                    co.currentStartPos = du;
                    break;
                case cI.ended:
                    bR("handle Playing Event : dispatch play and playing event");
                    ay(dv, dx);
                    l(dv, dx);
                    break;
                case cI.playing:
                    dA.updatePlayClockTime(dD, dw.lastEventClockTime, dx);
                    break;
                case cI.seek:
                    if ((dx - dw.timeUpdateClockTime) > 0) {
                        aA(dA, dx, du, "S");
                        dA.updatePlayed(dw.seekStartStreamPos, du)
                    }
                    break
            }
            dw.state = cI.playing;
            dw.lastEventClockTime = dx
        } catch (dB) {
            bR("Exception,  handle Playing Event:" + dB)
        }
    }

    function J(dv, du) {
        if (b5(dv)) {
            bR("handleWaitingEvent : video tag is of type AD, return");
            return
        }
        try {
            var dA = dv.akamai;
            if (dA.currentState.state == cI.rebuffering) {
                bR("already inside handleWaiting Event");
                return
            }
            var dx = cc(du);
            var dt = parseInt(aH(dv));
            var dw = dA.currentState;
            var dC = dx - dw.lastEventClockTime;
            var dy = dx - dA.startTimer;
            var dz = dw.state;
            bR("entered function handle Waiting Event, current state = " + cU(dw.state));
            switch (dz) {
                case cI.playing:
                    dA.updatePlayClockTime(dC, dw.lastEventClockTime, dx);
                    ++dA.rebufferCount;
                    if (dA.rebufferCount == 1 && dA.playerState != "B") {
                        dA.firstRebufferStartEpoch = Math.round(dx)
                    }
                    if (dA.rebufferSessionArrayHLine) {
                        bR("handleWaitingEvent : pushing, rebufferSessionArrayHLine" + dx);
                        dA.rebufferSessionArrayHLine.push(dx)
                    }
                    dA.updatePlayed(dt);
                    dw.state = cI.rebuffering;
                    break;
                case cI.pause:
                    ++dA.resumeBufferCount;
                    dw.state = cI.resumeBuffering;
                    break;
                case cI.init:
                    break
            }
            dw.lastEventClockTime = dx;
            bR("handle waiting event, if seek starts, stream pos = " + dt);
            dw.seekStartStreamPos = dt
        } catch (dB) {
            bR("Exception,  handleWaitingEvent:" + dB)
        }
    }

    function u(e) {
        if (b5(e)) {
            bR("handleAbortEvent : video tag is of type AD, return");
            return
        }
        U(e)
    }

    function U(du) {
        if (b5(du)) {
            bR("handle Error Event : video tag is of type AD, return");
            return
        }
        try {
            var dw = cc();
            var dD = D(du);
            var dC = bn(du);
            if (S(du, "error", dD, dw)) {
                bR("handle Error Event: consecutive error events thrown, return, curTime = " + dw);
                return
            }
            if (du && du.akamai && !du.akamai.isILineSent) {
                bR("handle Error Event: calling handle Play Event");
                ay(du, dw)
            }
            ce(du, "error", dD, dw);
            var dt = parseInt(aH(du));
            var dz = du.akamai;
            var dv = dz.currentState;
            var dE = dw - dv.lastEventClockTime;
            var dx = dw - dz.startTimer;
            var dy = dv.state;
            bR("entered function handle Error Event, current state = " + cU(dv.state));
            if (dv.state == cI.playing) {
                dz.updatePlayClockTime(dE, dv.lastEventClockTime, dw)
            }
            if (dz.isELineSent || dz.isCLineSent) {
                return
            }
            h(du, dC, dw);
            dv.state = cI.ended;
            var dB = parseInt(F("HTML_LastCLineTime"));
            bg(du);
            dv.lastEventClockTime = dw
        } catch (dA) {
            bR("Exception,  handleErrorEvent:" + dA)
        }
    }

    function b1(dw, du) {
        if (b5(dw)) {
            bR("handle Ended Event WithDelay : video tag is of type AD, return");
            return
        }
        try {
            var dz = dw.akamai;
            var dv = dz.currentState;
            bR("entered function handle Ended Event WithDelay, current state" + cU(dv.state));
            var dy = cc(du);
            var dx = aj(dw);
            var dt = dy - dv.lastEventClockTime;
            if (dz.pollingTimer) {
                b6(dz.pollingTimer)
            }
            if (cg && cg.retryTimer) {
                b6(cg.retryTimer)
            }
            if (dz.hLineTimer) {
                b6(dz.hLineTimer)
            }
            if (dz.fastTCPServerIpTimer) {
                b6(dz.fastTCPServerIpTimer)
            }
            if (dz.firstPLineTimer) {
                b6(dz.firstPLineTimer)
            }
            if (cg && cg.retryTimer) {
                b6(cg.retryTimer)
            }
            if (dz.postRollTimer) {
                bR("handle Ended Event WithDelay: postRollTimer already started return");
                return
            }
            cN(dz, "complete");
            a9(dz);
            bU(dz);
            dz.postRollTimer = b3(au, 1000, [dw]);
            cw(dz);
            dz.customDataPopulated = true;
            cy(dz, dy);
            bf(dw, dt, dy, true);
            dz.playEndMetricsUpdated = true
        } catch (dA) {
            bR("Exception,  handle Ended Event WithDelay" + dA);
            au(dw, dy)
        }
    }

    function au(du, dz) {
        try {
            var dB = du.akamai;
            if (dB.postRollTimer) {
                b6(dB.postRollTimer);
                delete dB.postRollTimer
            }
            if (dB.isELineSent || dB.isCLineSent) {
                bR("handle Ended Event : already sent C line, return");
                return
            }
            var dx = cc(dz);
            var dt = parseInt(aH(du));
            var dv = dB.currentState;
            var dE = dx - dv.lastEventClockTime;
            var dy = dx - dB.startTimer;
            var dA = dv.state;
            bR("entered function handle Ended Event, current state" + cU(dv.state));
            if (!dB.playEndMetricsUpdated) {
                bf(du, dE, dx, true);
                dB.playEndMetricsUpdated = true
            }
            dv.state = cI.ended;
            var dw = aj(du);
            if (dB.streamTitleSwitchReason != null && dB.streamTitleSwitchReason != "") {
                dw = dB.streamTitleSwitchReason
            }
            bP(du, dw, false, dx);
            var dD = parseInt(F("HTML_LastCLineTime"));
            bg(du);
            dv.lastEventClockTime = dx
        } catch (dC) {
            bR("Exception,  handle Ended Event :" + dC)
        }
    }
    this.getViewerId = function() {
        try {
            var dt = aJ.akamai;
            if (dt && dt.viewerId) {
                return dt.viewerId
            } else {
                return null
            }
        } catch (du) {
            return null
        }
    };
    this.setData = function(dt, du) {
        bm(dt, du);
        if (df && aJ.objectBased) {
            var e = {
                methodName: "setData"
            };
            e[dt] = du;
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleStreamSwitch = function() {
        cM();
        if (df && aJ.objectBased) {
            bR("handleStreamSwitch()", "API");
            var e = {
                methodName: "handleStreamSwitch"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleTitleSwitch = function(dt) {
        cV(dt);
        if (df && aJ.objectBased) {
            bR("handleTitleSwitch()", "API");
            var e = {
                methodName: "handleTitleSwitch",
                customData: dt
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleFeedbackEvent = function() {
        aI()
    };
    this.handleApplicationExit = function() {
        a3();
        if (df && aJ.objectBased) {
            bR("handleApplicationExit()", "API");
            var e = {
                methodName: "handleApplicationExit"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.enableServerIpLookUp = function() {
        a8 = true;
        if (df && aJ.objectBased) {
            bR("enableServerIpLookUp()", "API");
            var e = {
                methodName: "enableServerIpLookUp"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.disableServerIpLookUp = function() {
        a8 = false;
        if (df && aJ.objectBased) {
            bR("disableServerIpLookUp()", "API");
            var e = {
                methodName: "disableServerIpLookUp"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.enableLocation = function(dt) {
        bx(dt);
        if (df && aJ.objectBased) {
            bR("enableLocation(" + dt + ")", "API");
            var e = {
                methodName: "enableLocation",
                enable: dt
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.enableManifestRequest = function(e) {
        dh = e
    };
    this.setURLManifest = function(e) {
        ar = e
    };

    function bi() {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (e && e.type) {
            aJ.akamai.connectivity = e.type
        }
    }

    function bx(dt) {
        if (dt) {
            if (navigator.geolocation && am == null) {
                am = navigator.geolocation.watchPosition(bw, b9);
                var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (e && e.type) {
                    aJ.akamai.connectivity = e.type;
                    e.addEventListener("typechange", bi)
                }
            }
        } else {
            if (navigator.geolocation && am != null) {
                navigator.geolocation.clearWatch(am);
                am = null;
                e.removeEventListener("typechange", bi)
            }
        }
    }

    function bw(e) {
        if (e && e.coords) {
            aJ.akamai.latitude = e.coords.latitude;
            aJ.akamai.longitude = e.coords.longitude
        }
    }

    function b9(dt) {
        var e = "";
        switch (dt.code) {
            case dt.PERMISSION_DENIED:
                e = "User denied the request for Geolocation.";
                break;
            case dt.POSITION_UNAVAILABLE:
                e = "Location information is unavailable.";
                break;
            case dt.TIMEOUT:
                e = "The request to get user location timed out.";
                break;
            case dt.UNKNOWN_ERROR:
                e = "An unknown error occurred.";
                break
        }
        bR("Location Error : ", e)
    }

    function bm(dt, du) {
        try {
            if (aJ && aJ.akamai && aJ.akamai.isSLineSent) {
                bR("setData() API called after 'Start Of Play' for dimension -> " + dt + "|All custom dimensions should be set before the play is initiated.", "WARN")
            } else {
                bR("setData(" + dt + ":" + du + ")", "API")
            }
            if (dt == "customDataObject") {
                cf(du)
            } else {
                if (dt == "customDataFunction") {
                    bz = du
                } else {
                    try {
                        if (du != null) {
                            du = du.trim()
                        }
                    } catch (dv) {}
                    if (dt == "viewerId" || dt == "viewerDiagnosticsId") {
                        if (du == null || du == "") {
                            du = "-"
                        }
                    }
                    try {
                        if (cK) {
                            if (dt.substring(0, 4) == "_cd_") {
                                db(dt)
                            }
                        }
                    } catch (dv) {}
                    try {
                        if (dt.indexOf("std:") != -1) {
                            Z[dt.substring(4)] = du
                        } else {
                            bk[dt] = du
                        }
                    } catch (dv) {
                        bk[dt] = du
                    }
                    if ((dt.indexOf("socialShare:") != -1) || (dt.indexOf("feedback:") != -1)) {
                        aI()
                    }
                }
            }
        } catch (dv) {
            bR("Exception, Set Data :" + dv)
        }
    }

    function cf(dt) {
        try {
            if (typeof(dt) == "object") {
                for (var du in dt) {
                    bm(du, dt[du])
                }
            }
        } catch (dv) {
            bR("Exception set custom data object" + dv)
        }
    }

    function cM(e) {
        var dt = aJ.akamai;
        dt.streamTitleSwitchReason = "Stream.Switched";
        au(aJ, e)
    }

    function cV(dv, dw) {
        aJ.akamai.streamTitleSwitchReason = "Title.Switched";
        var du = aJ.akamai.isFirstTitle;
        au(aJ, dw);
        try {
            if (dv != null && dv != "") {
                for (var dt in dv) {
                    bm(dt, dv[dt])
                }
            }
        } catch (dx) {
            bR("Exception, handle title switch:" + dx)
        }
        aJ.akamai.isFirstTitle = du;
        ay(aJ, dw);
        l(aJ, dw);
        try {
            aJ.akamai.currentState.timeUpdateStreamTime = parseInt(aH(aJ))
        } catch (dx) {
            bR("Exception,  handleTitleSwitch" + dx)
        }
    }

    function aI() {
        try {
            var dz = "feedback:";
            var dt = dz.length;
            var dy = false;
            var dw = cc();
            for (var dv in bk) {
                if (dv.indexOf(dz) != -1) {
                    var du = dv.substring(dt);
                    bk[du] = bk[dv];
                    delete bk[dv];
                    dy = true
                }
            }
            y();
            bR("handleFeedbackEvent");
            if (bA && bA.shouldSendFLine && bA.akamai && (bA.akamai.isCLineSent || bA.akamai.postRollTimer)) {
                if (dy) {
                    bA.akamai.customDataChanged = true
                }
                if (bA.fLineCount < bA.limit) {
                    v(bA, "feedback", false, dw)
                }++bA.fLineCount;
                bA.akamai.customDataChanged = false;
                bA.akamai.socialSharing = null
            }
        } catch (dx) {
            bR("Exception, handle feed back event :" + dx)
        }
    }

    function a3() {
        try {
            if (!aJ.objectBased) {
                bR("application exit, unsubscribe video events");
                cS(aJ)
            }
        } catch (dt) {}
        bd()
    }

    function ao(du) {
        if (b5(du)) {
            return
        }
        try {
            if (ap) {
                bR("handle time update event, return as inside background state for idevice");
                return
            }
            var dw = cc(null, true);
            var dt = parseInt(aH(du));
            var dz = du.akamai;
            if (!dz) {
                return
            }
            if (dz.postRollTimer) {
                return
            }
            var dv = dz.currentState;
            var dC = dw - dv.lastEventClockTime;
            var dy = dw - dz.startTimer;
            var dA = dv.state;
            var dx = dt - dv.timeUpdateStreamTime;
            if (dv.timeUpdateStreamTime != 0) {
                if (Math.abs(dx) >= p.seekThreshold && dz.isSLineSent) {
                    bR("stream diff in time update is " + dx);
                    ac(du, dw, dt)
                } else {
                    if ((dx > 0) && (dx <= 750)) {
                        if (du.objectBased) {
                            if (dv.state == cI.seek) {
                                l(du)
                            }
                        } else {
                            if (!dz.isSLineSent || dv.state == cI.seek || dv.state == cI.rebuffering) {
                                bR("handle time update event,  dispatching playing event,  current Video state is : " + cU(dv.state));
                                l(du)
                            }
                        }
                    }
                }
            }
            dv.timeUpdateClockTime = dw;
            dv.timeUpdateStreamTime = dt
        } catch (dB) {
            bR("Exception,  handleTimeupddate :" + dB)
        }
    }
    this.handleSessionInit = function(du, dv) {
        try {
            if (du) {
                if (typeof cG != "object") {
                    cG = {}
                }
                if (du.streamHeadPosition) {
                    cG.streamHeadPosition = du.streamHeadPosition
                }
                if (du.streamLength) {
                    cG.streamLength = du.streamLength
                }
                if (du.streamURL) {
                    cG.streamURL = du.streamURL
                }
                if (du.bytesLoaded) {
                    cG.bytesLoaded = du.bytesLoaded
                }
                if (du.customDataFunction) {
                    cG.customDataFunction = du.customDataFunction
                }
                if (cG.customDataFunction) {
                    bz = cG.customDataFunction
                }
                if (du.firstBitRate) {
                    cG.firstBitRate = du.firstBitRate
                }
                if (cG.firstBitRate) {
                    b4(cG.firstBitRate, dv)
                }
            }
            if (df && aJ.objectBased) {
                this.setDiagnoserWindowLoaded(true);
                this.initialize();
                bR("handleSessionInit()", "API");
                var dt = {
                    methodName: "handleSessionInit",
                    callback: du
                };
                if (typeof dv != "undefined") {
                    dt.epochTime = dv
                }
                this.processLogs({
                    api: "reportAPI",
                    value: dt
                }, dq)
            }
            ay(aJ, dv)
        } catch (dw) {}
    };
    this.handleBitRateSwitch = function(du, dt) {
        b4(du, dt);
        if (df && aJ.objectBased) {
            bR("handleBitRateSwitch(" + du + ")", "API");
            var e = {
                methodName: "handleBitRateSwitch",
                bitRate: du
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handlePlaying = function(dt) {
        ay(aJ, dt);
        l(aJ, dt);
        if (df && aJ.objectBased) {
            bR("handlePlaying()", "API");
            var e = {
                methodName: "handlePlaying"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handlePlayEnd = function(du, dt) {
        if (aJ.objectBased) {
            aJ.endReason = du
        }
        b1(aJ, dt);
        if (df && aJ.objectBased) {
            bR("handlePlayEnd(" + du + ")", "API");
            var e = {
                methodName: "handlePlayEnd",
                endReasonCode: du
            };
            if (typeof bitRateSwitchEpochTime != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleMediaChangedEvent = function() {
        au(aJ)
    };
    this.handlePause = function(dt) {
        ai(aJ, dt);
        if (df && aJ.objectBased) {
            bR("handlePause()", "API");
            var e = {
                methodName: "handlePause"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleResume = function(dt) {
        ay(aJ, dt);
        l(aJ, dt);
        if (df && aJ.objectBased) {
            bR("handleResume()", "API");
            var e = {
                methodName: "handleResume"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleBufferStart = function(dt) {
        J(aJ, dt);
        if (df && aJ.objectBased) {
            bR("handleBufferStart()", "API");
            var e = {
                methodName: "handleBufferStart"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleBufferEnd = function(dt) {
        ay(aJ, dt);
        l(aJ, dt);
        if (df && aJ.objectBased) {
            bR("handleBufferEnd()", "API");
            var e = {
                methodName: "handleBufferEnd"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleError = function(du) {
        try {
            if (aJ.objectBased) {
                aJ.errorReason = du
            } else {
                aJ.externalError = du
            }
            U(aJ);
            if (df && aJ.objectBased) {
                bR("handleError(" + du + ")", "API");
                var dt = {
                    methodName: "handleError",
                    errorReason: du
                };
                this.processLogs({
                    api: "reportAPI",
                    value: dt
                }, dq)
            }
        } catch (dv) {}
    };
    this.handleTimeupdateEvent = function() {
        ao(aJ)
    };
    this.updateAdObject = function(e) {
        bC(e)
    };
    this.handleAdLoaded = function(dv, du) {
        try {
            bB(dv, du);
            if (df && aJ.objectBased) {
                bR("handleAdLoaded()", "API");
                var dt = {
                    methodName: "handleAdLoaded",
                    adSetDataObj: dv
                };
                if (typeof du != "undefined") {
                    dt.epochTime = du
                }
                this.processLogs({
                    api: "reportAPI",
                    value: dt
                })
            }
        } catch (dw) {}
    };
    this.handleAdStarted = function(du, dt) {
        a1(du, dt);
        if (df && aJ.objectBased) {
            bR("handleAdStarted()", "API");
            var e = {
                methodName: "handleAdStarted",
                adSetDataObj: du
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleAdCompleted = function(dt) {
        N(dt);
        if (df && aJ.objectBased) {
            bR("handleAdCompleted()", "API");
            var e = {
                methodName: "handleAdCompleted"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleAdFirstQuartile = function() {
        dd();
        if (df && aJ.objectBased) {
            bR("handleAdFirstQuartile()", "API");
            var e = {
                methodName: "handleAdFirstQuartile"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleAdMidPoint = function() {
        b();
        if (df && aJ.objectBased) {
            bR("handleAdMidPoint()", "API");
            var e = {
                methodName: "handleAdMidPoint"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleAdThirdQuartile = function() {
        cx();
        if (df && aJ.objectBased) {
            bR("handleAdThirdQuartile()", "API");
            var e = {
                methodName: "handleAdThirdQuartile"
            };
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleAdStopped = function(dt) {
        o(dt);
        if (df && aJ.objectBased) {
            bR("handleAdStopped()", "API");
            var e = {
                methodName: "handleAdStopped"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            })
        }
    };
    this.handleAdError = function(dt) {
        aT(dt);
        if (df && aJ.objectBased) {
            bR("handleAdError()", "API");
            var e = {
                methodName: "handleAdError"
            };
            if (typeof dt != "undefined") {
                e.epochTime = dt
            }
            this.processLogs({
                api: "reportAPI",
                value: e
            }, dq)
        }
    };
    this.handleSetupAISEvent = function(e, dt, du) {
        bu(e, dt, du)
    };
    this.getStream = function() {
        var e = aJ.akamai;
        return e.stream
    };
    this.getChildWindow = function() {
        return c1
    };
    this.setDiagnoserWindowLoaded = function(e) {
        a5 = e
    };
    this.isDiagnoserWindowLoaded = function() {
        return a5
    };
    this.getHostedUrl = function() {
        return dq
    };
    this.pushToMessageStore = function(e) {
        bH.push(e)
    };
    this.getMessageStoreLength = function() {
        return bH.length
    };
    this.flushMessageStore = function() {
        bH = []
    };
    this.getStoredMessageAt = function(e) {
        return bH[e]
    };
    this.getShouldAnalyze = function() {
        return df
    };
    this.processLogs = function(dt) {
        if (this.isDiagnoserWindowLoaded()) {
            var e = this.getMessageStoreLength();
            if (e > 0) {
                for (i = 0; i < e; i++) {
                    this.getChildWindow().postMessage(this.getStoredMessageAt(i), this.getHostedUrl())
                }
                this.flushMessageStore()
            }
            this.getChildWindow().postMessage(dt, this.getHostedUrl())
        } else {
            this.pushToMessageStore(dt)
        }
    };

    function bu(dt, dv, dx) {
        try {
            var du = cg.aisRequestLimit;
            var dw = cg.aisRequestInterval;
            cg = new at();
            cg.aisRequestInterval = dw;
            cg.aisRequestLimit = du;
            if (!dt) {
                bR("return from ais, platform is null");
                return
            }
            cg.platform = dt;
            cg.version = dv ? dv : "1.0";
            if (dx) {
                cg.aisCustomDataObj = dx
            }
            cg.requestUrl = "http://idp.securetve.com/rest/";
            cg.initUrl = cg.requestUrl + cg.version + "/" + cg.platform + "/init/?format=jsonp&responsefield=akaMediaAnalytics.receiveAISInitRequest";
            cg.identityUrl = cg.requestUrl + cg.version + "/" + cg.platform + "/identity/?format=jsonp&responsefield=akaMediaAnalytics.receiveAISIdentityRequest";
            cg.initUrlId = "AkamaiAISInitUrl";
            cg.identityUrlId = "AkamaiAISIdentityUrl";
            t(cg.initUrl, cg.initUrlId)
        } catch (dy) {
            cg.requestFailed = true
        }
    }
    this.receiveAISInitRequest = function(dv) {
        try {
            cg.initObj = dv;
            az(cg.initUrlId);
            if (cg.initObj == "" || cg.initObj == null) {
                cg.requestFailed = true;
                return
            }
            if (cg.requestFailed) {
                return
            }
            if (cg.initObj.authenticated) {
                cg.akamai = {};
                cg.akamai.ais_queryToken = cg.initObj.querytoken;
                if (cg.initObj.idps) {
                    var dw = cg.initObj.idps;
                    for (var dt in dw) {
                        cg.akamai.ais_idpId = dt;
                        cg.akamai.ais_idpName = dw[dt].name;
                        cg.akamai.ais_idpDisplayName = dw[dt].display_name;
                        cg.akamai.ais_idpUrl = dw[dt].url
                    }
                }
                t(cg.identityUrl, cg.identityUrlId)
            } else {
                if (!cg.requestFailed) {
                    bR("receiveAISInitRequest, retrying the request");
                    ++cg.aisRetries;
                    if (cg.aisRetries < cg.aisRequestLimit) {
                        cg.retryTimer = b3(t, cg.aisRequestInterval, [cg.initUrl, cg.initUrlId])
                    }
                }
            }
        } catch (du) {
            cg.requestFailed = true
        }
    };
    this.receiveAISIdentityRequest = function(du) {
        try {
            cg.identityObj = du;
            az(cg.identityUrlId);
            if (du == null || du == "") {
                return
            }
            if (!cg.akamai) {
                cg.akamai = {}
            }
            if (du.indentity && du.identity.aisuid) {
                cg.akamai.ais_aisuid = du.identity.aisuid
            }
            cW()
        } catch (dt) {
            cg.requestFailed = true
        }
    };

    function cW() {
        var du = {};
        var dw;
        var dv;
        try {
            if (cg && cg.aisCustomDataObj) {
                if (!cg.akamai) {
                    cg.akamai = {}
                }
                for (var dt in cg.aisCustomDataObj) {
                    dw = cg.aisCustomDataObj[dt].split("/");
                    if (dw[0] == "INIT" && cg.initObj) {
                        du = cg.initObj
                    } else {
                        if (dw[0] == "IDENTITY" && cg.identityObj) {
                            du = cg.identityObj
                        }
                    }
                    if (du) {
                        for (dv = 1; dv < dw.length; dv++) {
                            if (dw[dv] && du[dw[dv]]) {
                                du = du[dw[dv]]
                            }
                        }
                        if (typeof(du) != "object") {
                            cg.akamai[dt] = du
                        }
                    }
                }
            }
        } catch (dx) {
            bR("Exception,  populateAISCustomData" + dx)
        }
    }

    function t(du, dw) {
        try {
            var dt = document.createElement("script");
            dt.setAttribute("src", du);
            dt.id = dw;
            document.getElementsByTagName("head")[0].appendChild(dt)
        } catch (dv) {
            bR("Exception,  loading JavaScript File " + du)
        }
    }

    function az(dv) {
        try {
            var dt = document.getElementById(dv);
            dt.parentNode.removeChild(dt)
        } catch (du) {
            bR("Exception,  removing script with id " + dv)
        }
    }

    function cT(du) {
        var dv, e;
        dv = du.akamai;
        dv.pollingTimer = b3(cT, M, [du]);
        var dt = Date.now();
        if (dv.chasingSleep > 0 && dt > (dv.chasingSleep + 5000)) {
            aU(du);
            dv.wasPutToSleep = true
        }
        dv.chasingSleep = dt;
        if (du) {
            if (du.isBrightcoveVideo) {
                akamaiBCVideoModule.getVideoPosition(false, aw)
            } else {
                aw(0, du)
            }
        }
    }

    function aU(e) {
        cP();
        co.clearBitRate();
        akamai = e.akamai;
        if (!e.objectBased && akamai.pollingTimer) {
            b6(akamai.pollingTimer)
        }
        if (cg && cg.retryTimer) {
            b6(cg.retryTimer)
        }
        if (akamai.hLineTimer) {
            b6(akamai.hLineTimer)
        }
        if (akamai.fastTCPServerIpTimer) {
            b6(akamai.fastTCPServerIpTimer)
        }
        if (akamai.firstPLineTimer) {
            b6(akamai.firstPLineTimer)
        }
        if (cg && cg.retryTimer) {
            b6(cg.retryTimer)
        }
        if (akamai.postRollTimer) {
            b6(akamai.postRollTimer);
            delete akamai.postRollTimer
        }
        akamai.currentState.state = cI.ended;
        akamai.isILineSent = false;
        akamai.isSLineSent = false;
        akamai.firstTimePlay = true;
        akamai.iLineSentTime = 0;
        akamai.lastPlayStreamTime = 0
    }

    function aw(e, dv) {
        var dx, dt;
        var dw = cc(null, true);
        if (aJ != null && aJ.isBrightcoveVideo) {
            aJ.currentTime = parseInt(e);
            dt = parseInt(e * 1000);
            dv = aJ
        } else {
            dt = parseInt(aH(dv))
        }
        if (dt == "undefined" || isNaN(dt) || dt == "") {
            return
        }
        dx = dv.akamai;
        var du = dx.currentState;
        if (du.state == cI.ended) {
            return
        }
        if (dv.objectBased && dx.wasPutToSleep === true && dt === du.pollingTimerStreamTime) {
            if (dx.pollingTimer) {
                b6(dx.pollingTimer)
            }
            ay(aJ);
            l(aJ)
        } else {
            if (dv.objectBased) {
                ao(dv)
            } else {
                if (du.state == cI.pause || du.state == cI.seek) {
                    return
                }
                if ((dt != 0) && (dt === du.pollingTimerStreamTime) && (du.state != cI.rebuffering)) {
                    bR("check stream head position, call handle waiting event");
                    J(dv)
                } else {
                    du.pollingTimerStreamTime = dt
                }
            }
        }
    }

    function aH(du) {
        var dt = 0;
        try {
            if (du.objectBased) {
                if (cG && cG.streamHeadPosition) {
                    dt = cG.streamHeadPosition();
                    du.currentTime = dt
                }
            } else {
                if (cs.currentTime) {
                    dt = cs.currentTime;
                    du.currentTime = dt
                }
            }
        } catch (dv) {}
        if (dt == 0 && aP != -1) {
            dt = aP
        }
        if (dt != 0) {
            aP = dt
        }
        return (dt * 1000)
    }

    function I(dt) {
        var dv = 0;
        try {
            if (dt) {
                if (dt.objectBased) {
                    if (cG && cG.streamLength) {
                        dv = cG.streamLength();
                        dt.duration = dv
                    }
                } else {
                    dv = cs.duration;
                    dt.duration = dv
                }
            }
        } catch (du) {}
        return (dv * 1000)
    }

    function D(du) {
        var dt = "";
        try {
            if (du) {
                if (du.objectBased) {
                    if (cG && cG.streamURL) {
                        dt = cG.streamURL();
                        du.currentSrc = dt
                    }
                } else {
                    if (bk.streamURL) {
                        dt = bk.streamURL
                    } else {
                        dt = cs.currentSrc;
                        if (dt.indexOf("blob:") === -1) {
                            du.currentSrc = dt
                        } else {
                            dt = "";
                            bR("Call akamaiSetStreamURL() to set streamUrl", "Error")
                        }
                    }
                }
            }
        } catch (dv) {}
        return dt
    }

    function cO() {
        return aH(aJ) / 1000
    }

    function dp() {
        return I(aJ) / 1000
    }

    function bq() {
        return D(aJ)
    }

    function cm(dv) {
        var dt = 0,
            du = 0;
        try {
            if (dv) {
                if (dv.objectBased) {
                    if (cG && cG.bytesLoaded) {
                        dt = parseInt(cG.bytesLoaded());
                        du = dt - dv.akamai.lastBytesLoaded
                    }
                }
            }
        } catch (dw) {}
        dv.akamai.lastBytesLoaded = dt;
        if (du > 0) {
            return du
        }
    }

    function aL(du) {
        try {
            var dt = {};
            if (bz != null) {
                dt = bz();
                cf(dt)
            }
        } catch (dv) {}
    }

    function bB(du, dt) {
        try {
            bR("handle Ad loaded");
            if (E.isAdLoaded) {
                bR("handleAdLoaded API is called multiple times.|We have identified that 2 successive handleAdLoaded APIs are called.|Kindly ensure that sequence of Ad calls -- handleAdLoaded->handleAdStarted->handleAdComplete is maintained.", "WARN")
            }
            var dx = aJ.akamai;
            if (!dx.isILineSent) {
                var dv = new Date().getTime();
                if (dt != null && dv - dt > 0) {}
            }
            var dw = cc(dt);
            E.clearAdAnalytics();
            E.isAdLoaded = true;
            E.adLoadTime = dw;
            E.adCount = 1;
            E.adAbandoned = true;
            if (dx.postRollTimer) {
                bL(aJ);
                b6(dx.postRollTimer);
                dx.postRollAd = true;
                dx.customDataPopulated = false;
                E.type = 2
            } else {
                if (dx.isILineSent) {
                    if (dx.isSLineSent) {
                        ai(aJ, dw);
                        E.type = 1
                    } else {
                        if (!dx.isSLineSent) {
                            if (!dx.adLoadTime) {
                                dx.adLoadTime = dw
                            }
                        }
                    }
                }
            }
            bC(du);
            if (!dx.isILineSent) {
                av(false, dw)
            }
        } catch (dy) {
            bR("Exception,handle ad loaded:" + dy)
        }
    }

    function a1(du, dt) {
        try {
            bR("handle Ad Started");
            var dv = cc(dt);
            E.isAdStarted = true;
            if (!E.isAdLoaded) {
                bR("handleAdLoaded API is missing.|We have identified that handleAdStarted API is called without handleAdLoaded.|Kindly ensure that handleAdLoaded API is called for every Ad and relevant adObject is passed as an argument.", "WARN");
                bB(du, dv)
            }
            E.playBucket = "0";
            E.adStartTime = dv;
            E.adStartupTime = dv - E.adLoadTime;
            E.startPos = aH(aJ);
            bC(du)
        } catch (dw) {
            bR("Exception,handle ad started:" + dw)
        }
    }

    function N(dt) {
        try {
            bR("handleAdEnded");
            if (E.playBucket == "0") {
                bR("Ad Progress related APIs not called.|We have identified that handleAdFirstQuartile,handleAdMidPoint & handleAdThirdQuartile APIs have not been called.|It will be good if these APIs are called in order to capture more accurate Ad information", "WARN")
            }
            E.playBucket = "4";
            cd("0", dt)
        } catch (du) {
            bR("Exception,handle ad completed:" + du)
        }
    }

    function dd() {
        if (!E.isAdStarted) {
            bR("handleAdStarted API is missing.|We have identified that handleAdFirstQuartile API is called without handleAdStarted.|Kindly ensure that handleAdStarted API is called for every Ad that starts successfully.", "ERROR")
        }
        E.playBucket = "1"
    }

    function b() {
        E.playBucket = "2"
    }

    function cx() {
        E.playBucket = "3"
    }

    function o(e) {
        cd("1", e)
    }

    function aT(e) {
        cd("3", e)
    }

    function bC(du) {
        try {
            var dv = E.setDataArr;
            bR("populate ad metric");
            for (var dt = 0; dt < dv.length; dt++) {
                if (dv[dt] in du) {
                    E[dv[dt]] = du[dv[dt]]
                }
            }
        } catch (dw) {}
    }

    function cd(dw, dt) {
        try {
            var dy = cc(dt);
            var dx = aJ.akamai;
            E.endStatus = dw;
            if (dw != "0") {
                E.adAbandonCount = 1
            }
            if (E.isAdLoaded && E.isAdStarted) {
                E.adPlayClockTime = dy - E.adStartTime
            }
            E.adSession = aC();
            var du = ["adStartupTime", "adCount", "adPlayClockTime", "adAbandonCount"];
            for (var dv = 0; dv < du.length; dv++) {
                dx[du[dv]] += E[du[dv]]
            }
            if (dx.adSession) {
                dx.adSession += "," + E.adSession
            } else {
                dx.adSession = E.adSession
            }
            E.isAdStarted = false;
            E.isAdLoaded = false;
            if (dw != "2") {
                E.adAbandoned = false;
                if (dx) {
                    if (dx.postRollAd) {
                        dx.postRollAd = null;
                        au(aJ, dy)
                    } else {
                        if (dx.isSLineSent) {
                            ay(aJ, dy);
                            l(aJ, dy)
                        } else {
                            if (!dx.isSLineSent) {
                                dx.adEndTime = dy
                            }
                        }
                    }
                }
            }
        } catch (dz) {
            bR("Exception,populate ad end:" + dz)
        }
    }

    function aC() {
        var dt = "";
        var du = ["adId", "type", "startPos", "adStartupTime", "adPlayClockTime", "playBucket", "endStatus", "adDuration", "adTitle", "adCategory", "adPartnerId", "adServer", "adDaypart", "adIndustryCategory", "adEvent"];
        try {
            for (var dv = 0; dv < du.length; dv++) {
                if ((E[du[dv]] == 0) || (E[du[dv]] != null && E[du[dv]] != "")) {
                    dt += E[du[dv]] + ":"
                } else {
                    dt += ":"
                }
            }
            dt = dt.substring(0, dt.length - 1)
        } catch (dw) {}
        return dt
    }

    function a7(dt) {
        try {
            if (b5(dt)) {
                return
            }
            var du = dt.akamai;
            if (du.firstTimeProgress) {}
        } catch (dv) {}
    }

    function aS(dt) {
        try {
            if (b5(dt)) {
                return
            }
            var du = dt.akamai;
            if (cs.autoplay) {
                ay(dt);
                du.loadStartILine = true
            }
        } catch (dv) {}
    }

    function cz(dt) {
        try {
            if (b5(dt)) {
                return
            }
            var du = dt.akamai;
            if (cs.autoplay) {
                du.canPlayEventAutoPlay = true
            } else {
                du.canPlayEventAutoPlay = false
            }
        } catch (dv) {}
    }

    function ck(dt) {
        try {
            if (b5(dt)) {
                return
            }
            var du = dt.akamai;
            if (du.firstTimeProgress) {
                du.firstTimeProgress = false;
                akaMediaAnalytics.setDiagnoserWindowLoaded(true);
                akaMediaAnalytics.initialize()
            }
            if (du.logType == "R") {}
        } catch (dv) {}
    }

    function ds(dt) {
        try {
            if (b5(dt)) {
                return
            }
            var du = dt.akamai;
            du.streamLength = parseInt(I(dt))
        } catch (dv) {}
    }
    this.subscribeVideoObject = function(dt) {
        try {
            if (dt) {
                ab(dt)
            }
        } catch (du) {}
    };

    function ab(du) {
        bR("subscribeToEvents : video = " + du);
        var dt = ["abort", "error", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "timeupdate"];
        var dw = ["progress", "load", "durationchange"];
        cs = du;
        try {
            du.addEventListener("play", bX.play = function() {
                ay(aJ)
            }, false);
            du.addEventListener("pause", bX.pause = function() {
                ai(aJ)
            }, false);
            du.addEventListener("error", bX.error = function() {
                U(aJ)
            }, false);
            du.addEventListener("ended", bX.ended = function() {
                b1(aJ)
            }, false);
            du.addEventListener("playing", bX.playing = function() {
                l(aJ)
            }, false);
            du.addEventListener("waiting", bX.waiting = function() {
                J(aJ)
            }, false);
            du.addEventListener("timeupdate", bX.timeupdate = function() {
                ao(aJ)
            }, false);
            du.addEventListener("load", bX.load = function() {
                a7(aJ)
            }, false);
            du.addEventListener("progress", bX.progress = function() {
                ck(aJ)
            }, false);
            du.addEventListener("durationchange", bX.durationchange = function() {
                ds(aJ)
            }, false);
            du.addEventListener("canplay", bX.canplay = function() {
                cz(aJ)
            }, false);
            du.addEventListener("loadstart", bX.loadstart = function() {
                aS(aJ)
            }, false);
            bR("subscribed to events completed")
        } catch (dv) {
            bR("Exception,  subscribeToEvents,unable to add listeners to video tag :" + dv)
        }
    }

    function cS(dt) {
        try {
            dt.removeEventListener("play", bX.play, false);
            dt.removeEventListener("pause", bX.pause, false);
            dt.removeEventListener("error", bX.error, false);
            dt.removeEventListener("ended", bX.ended, false);
            dt.removeEventListener("playing", bX.playing, false);
            dt.removeEventListener("waiting", bX.waiting, false);
            dt.removeEventListener("timeupdate", bX.timeupdate, false);
            dt.removeEventListener("load", bX.load, false);
            dt.removeEventListener("progress", bX.progress, false);
            dt.removeEventListener("durationchange", bX.durationchange, false);
            dt.removeEventListener("canplay", bX.canplay, false);
            dt.removeEventListener("loadstart", bX.loadstart, false)
        } catch (du) {
            bR("Exception, unSubscribeFrom Events:" + du)
        }
    }

    function bE(dv) {
        try {
            if (typeof(akamaiBCVideoObject) != "undefined") {
                cs = akamaiBCVideoObject;
                aJ.isBrightcoveVideo = true;
                initBrightcove()
            } else {
                if (aJ.objectBased || aJ.videoPassed) {} else {
                    if (document) {
                        var du = document.getElementsByTagName("video");
                        bR("add MediaEvent Listeners : videos.length " + du.length);
                        if (du && du.length == 0) {
                            du = document.getElementsByTagName("audio")
                        }
                        for (var dt = 0; dt < du.length; ++dt) {
                            ab(du[dt])
                        }
                        document.addEventListener("DOMNodeInserted", aO, false);
                        document.addEventListener("DOMNodeRemoved", aO, false);
                        document.addEventListener("DOMAttrModified", aO, false)
                    }
                }
            }
            if (dv) {
                if (dv.type == "DOMContentLoaded") {
                    document.removeEventListener("load", bE, true)
                } else {
                    if (dv.type == "load" && du && du.length > 0) {
                        document.removeEventListener("load", bE, true)
                    }
                }
            }
        } catch (dw) {
            bR("Exception,  add MediaEvent Listeners :" + dw)
        }
    }

    function aO(e) {
        var dt = e.target;
        if (dt.nodeType == dt.COMMENT_NODE || dt.tagName == null || (dt.tagName.toLowerCase() != "video" && dt.tagName.toLowerCase() != "audio")) {
            return
        }
        switch (e.type) {
            case "DOMNodeRemoved":
                if (dt.dataset && dt.dataset.isad && dt.dataset.isad == "true") {} else {
                    c5(aJ, 0)
                }
                break;
            case "DOMNodeInserted":
                ab(dt);
                break
        }
    }

    function c5(du, dD) {
        bR("handle Video Unload");
        var dx = cc();
        var dy = du.akamai;
        var dw = parseInt(F("HTML_VisitCountCookie"));
        bp.browserClose = true;
        try {
            if (dy && dy.currentState.state >= cI.init && dD == 0) {
                if (dy.isELineSent || dy.isCLineSent) {
                    return
                }
                if (E && E.adAbandoned) {
                    var dv = "Ad.Abandon";
                    if (dy.postRollTimer) {
                        b6(dy.postRollTimer);
                        delete dy.postRollTimer
                    }
                    bP(du, dv, true, dx)
                } else {
                    if (!dy.firstTimePlay) {
                        var dv = "Browser.Close";
                        if (dy.postRollTimer) {
                            b6(dy.postRollTimer);
                            delete dy.postRollTimer
                        }
                        bP(du, dv, true, dx)
                    } else {
                        var dC = "Browser.Refresh.NoStart";
                        if ((dx - dy.startTimer) > p.initBrowserCloseTime) {
                            dC = "Browser.Refresh.NoStart.Late"
                        }
                        h(du, dC, true, dx)
                    }
                }
            }
        } catch (dz) {}
        try {
            var dB = parseInt(F("HTML_LastCLineTime"));
            var dA = (dB + p.visitTimeout) - dx;
            var dt = parseInt(F("HTML_isPlayingCount"));
            bR("handle Video Unload: playing cookie =  " + dt + ", visit cookie :" + dw);
            if (dw >= 1 && dD == 1) {
                if (dA > 0) {
                    b6(dy.clearVisitTimeoutId);
                    du.akamai.clearVisitTimeoutId = b3(c5, dA, [du, 1]);
                    return
                } else {
                    if (dA <= 0 && dw > 1 && dt > 0) {
                        b6(dy.clearVisitTimeoutId);
                        du.akamai.clearVisitTimeoutId = b3(c5, p.visitTimeout, [du, 1]);
                        return
                    }
                }
            }
            bR("handle Video Unload: decrementing HTML_VisitCountCookie");
            dw = dw - 1;
            bs("HTML_VisitCountCookie", dw);
            var dw = parseInt(F("HTML_VisitCountCookie"));
            if (dw === 0 || isNaN(dw)) {
                if (dy.sendVLine) {
                    aq(du, dx)
                }
            }
        } catch (dz) {}
    }

    function bd() {
        try {
            if (E.isAdLoaded) {
                cd("2")
            }
        } catch (dt) {}
        c5(aJ, 0)
    }

    function dj(dt) {
        bR("handlePagehide");
        ap = true;
        bd()
    }

    function c9(dt) {
        bR("handlePageshow:");
        try {
            if (aJ && aJ.tagName) {
                bR("handlePageShow: media tag is :" + aJ.tagName);
                if (aJ.akamai && ap) {
                    bR("handlePageshow: send play and playing on timeupdate");
                    R = true
                }
            }
        } catch (dt) {
            bR("Exception,  handlePagehsow : " + dt)
        }
        ap = false
    }

    function F(du) {
        var dt = du + "=";
        var dw = "";
        try {
            if (document.cookie.length > 0) {
                offset = document.cookie.indexOf(dt);
                if (offset != -1) {
                    offset += dt.length;
                    end = document.cookie.indexOf(";", offset);
                    if (end == -1) {
                        end = document.cookie.length
                    }
                    dw = document.cookie.substring(offset, end)
                }
            }
        } catch (dv) {}
        return dw
    }

    function Y(dt) {
        try {
            var dx = location.pathname.split("/");
            var dw = " path=";
            document.cookie = dt + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
            for (var du = 0; du < dx.length; du++) {
                dw += ((dw.substr(-1) != "/") ? "/" : "") + dx[du];
                document.cookie = dt + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;" + dw + ";"
            }
        } catch (dv) {}
    }

    function bs(du, dv, dy) {
        try {
            var dt = du + "=" + dv + ";Path=/;";
            if (dy) {
                if (parseInt(dy) > 0) {
                    var dx = new Date();
                    dx.setDate(dx.getDate() + parseInt(dy));
                    if (dx != null) {
                        dt += "expires=" + dx.toUTCString() + ";"
                    }
                }
            }
            if (document) {
                document.cookie = dt
            }
        } catch (dw) {}
    }

    function di(dz, dw) {
        try {
            if (typeof dz !== "undefined" && dz !== null && typeof dw !== "undefined" && dw !== null) {
                var dt = dz[j(dw.name)];
                var dv = bJ.SHA1(dt).toString();
                var dy = B(dv);
                var du = 0;
                var dx = cc();
                if (dy) {
                    du = dx - parseFloat(dy);
                    du = (du / 1000) / 60;
                    du = (du > 0) ? du.toFixed(2) : 0
                }
                bv(dv, dx, dw.expiryDuration);
                dz[dw.name] = du.toString()
            }
        } catch (dA) {
            bR("Exception,  calculateUniqueDimension :" + dA)
        }
    }

    function j(e) {
        dimension = "";
        if (e === "viewerInterval") {
            dimension = "viewerId"
        } else {
            if (e === "viewerTitleInterval") {
                dimension = "title"
            }
        }
        return dimension
    }

    function B(du) {
        try {
            var dv = window.localStorage.getItem(du);
            if (typeof dv !== "undefined" && dv !== null) {
                var dt = JSON.parse(dv);
                var dw = dt.value;
                return dw
            }
        } catch (dx) {}
    }

    function bh() {
        try {
            bR("deleteExpiredDataFromLocalStorage");
            var du = cc();
            var dx = null;
            var dt = window.localStorage.length;
            for (var dw = dt - 1; dw >= 0; dw--) {
                var dv = window.localStorage.getItem(window.localStorage.key(dw));
                if (typeof dv !== "undefined" && dv !== null && dv.indexOf("expiryDate") !== -1) {
                    var dy = JSON.parse(dv);
                    if (typeof dy !== "undefined" && dy !== null && typeof dy.expiryDate !== "undefined" && dy.expiryDate !== null) {
                        dx = Date.parse(dy.expiryDate);
                        if (dx <= du) {
                            window.localStorage.removeItem(window.localStorage.key(dw))
                        }
                    }
                }
            }
        } catch (dz) {}
    }

    function bv(dv, dw, dy) {
        try {
            var du = {
                value: dw
            };
            if (typeof dy !== "undefined" && dy !== null) {
                var dt = new Date();
                if (parseInt(dy) > 0) {
                    dt.setDate(dt.getDate() + parseInt(dy))
                } else {
                    dt.setDate(dt.getDate() + parseInt(90))
                }
                du.expiryDate = dt.toDateString()
            }
            window.localStorage.setItem(dv, JSON.stringify(du))
        } catch (dx) {}
    }

    function c7() {
        try {
            if (aM == "iPad" || aM == "iPhone") {
                return true
            }
        } catch (dt) {
            return false
        }
    }

    function T() {
        try {
            if (aJ.objectBased || aJ.videoPassed) {
                bE()
            } else {
                bR("adding MediaEventListeners: DOMContentLoaded");
                document.addEventListener("DOMContentLoaded", bE, false);
                bR("adding MediaEventListeners: Load");
                document.addEventListener("load", bE, true)
            }
        } catch (dt) {
            bR("Exception,  Addding DOMContentLoaded and Load event listeners :" + dt)
        }
        if (window) {
            if (c7()) {
                window.addEventListener("pagehide", dj, false);
                window.addEventListener("pageshow", c9, false)
            } else {
                if (typeof(akamaiBCVideoObject) != "undefined" && window.addEventListener) {
                    window.addEventListener("beforeunload", bd, false)
                } else {
                    if (window.addEventListener) {
                        try {
                            if (bO()) {
                                window.parent.addEventListener("beforeunload", bd, false)
                            } else {
                                window.addEventListener("beforeunload", bd, false)
                            }
                        } catch (dt) {
                            bR("Exception, add window document listeners : " + dt);
                            window.addEventListener("beforeunload", bd, false)
                        }
                    } else {
                        if (window.attachEvent) {
                            try {
                                if (bO()) {
                                    window.parent.attachEvent("onbeforeunload", bd)
                                } else {
                                    window.attachEvent("onbeforeunload", bd)
                                }
                            } catch (dt) {
                                window.attachEvent("onbeforeunload", bd)
                            }
                        }
                    }
                }
            }
        }
    }
    T()
}
if (typeof(akamaiBCVideoObject) != "undefined") {
    akaMediaAnalytics = new AkaHTML5MediaAnalytics(null)
} else {
    if (typeof(AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH) != "undefined") {
        if ((AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH.indexOf("enableGenericAPI=1") == -1 && AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH.indexOf("subscribeVideo") == -1)) {
            akaMediaAnalytics = new AkaHTML5MediaAnalytics(null)
        }
    }
}

function setAkamaiMediaAnalyticsData(c, d, b) {
    try {
        if (akaMediaAnalytics) {
            akaMediaAnalytics.setData(c, d);
            if (akaMediaAnalytics.getShouldAnalyze()) {
                consoleLog("setAkamaiMediaAnalyticsData(" + c + "," + d + "," + b + ")", "API");
                var a = {
                    methodName: "setAkamaiMediaAnalyticsData"
                };
                a[c] = d;
                akaMediaAnalytics.processLogs({
                    api: "reportAPI",
                    value: a
                })
            }
        }
    } catch (f) {}
}

function akamaiPlaybackCompleted() {
    try {
        if (akaMediaAnalytics) {
            akaMediaAnalytics.handlePlayEnd();
            if (akaMediaAnalytics.getShouldAnalyze()) {
                consoleLog("akamaiPlaybackCompleted()", "API");
                var a = {
                    methodName: "akamaiPlaybackCompleted",
                    endReasonCode: endReason
                };
                akaMediaAnalytics.processLogs({
                    api: "reportAPI",
                    value: a
                })
            }
        }
    } catch (b) {
        consoleLog(b)
    }
}

function akamaiGetViewerId() {
    try {
        var b = null;
        if (akaMediaAnalytics) {
            b = akaMediaAnalytics.getViewerId()
        }
    } catch (a) {}
    return b
}

function akamaiSetStreamURL(a, c) {
    try {
        if (a != null && a != "") {
            setAkamaiMediaAnalyticsData("streamURL", a)
        }
        if (akaMediaAnalytics) {
            if (typeof c !== "undefined") {
                akaMediaAnalytics.enableManifestRequest(c)
            } else {
                consoleLog("shouldSDKFetchManifest is not set by the player")
            }
        } else {
            consoleLog("akaMediaAnalytics is null akamaiSetStreamURL api call will fail")
        }
    } catch (b) {
        consoleLog("Exception thrown from akamaiSetStreamURL. Exception = " + b)
    }
}

function akamaiSetURLManifest(a) {
    try {
        if (akaMediaAnalytics) {
            akaMediaAnalytics.setURLManifest(a)
        } else {
            consoleLog("akaMediaAnalytics is null akamaiSetURLManifest api call will fail")
        }
    } catch (b) {
        consoleLog("Exception thrown from akamaiSetURLManifest. Exception = " + b)
    }
}

function akamaiSetViewerId(b) {
    if (b == null || b == "") {
        b = "-"
    }
    if (akaMediaAnalytics) {
        akaMediaAnalytics.setData("viewerId", b);
        akaMediaAnalytics.setData("clientId", b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiSetViewerId(" + b + ")", "API");
            var a = {
                methodName: "akamaiSetViewerId"
            };
            a.viewerId = b;
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiSetViewerDiagnosticsId(b) {
    if (b == null || b == "") {
        b = "-"
    }
    if (akaMediaAnalytics) {
        akaMediaAnalytics.setData("viewerDiagnosticsId", b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiSetViewerDiagnosticsId(" + b + ")", "API");
            var a = {
                methodName: "akamaiSetViewerDiagnosticsId"
            };
            a.viewerDiagnosticsId = b;
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiUpdateAdObject(a) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.updateAdObject(a)
    }
}

function akamaiHandleAdStarted(b) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdStarted(b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdStarted()", "API");
            var a = {
                methodName: "akamaiHandleAdStarted",
                adSetDataObj: b
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdCompleted() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdCompleted();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdCompleted()", "API");
            var a = {
                methodName: "akamaiHandleAdCompleted"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdLoaded(b) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdLoaded(b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdLoaded()", "API");
            var a = {
                methodName: "akamaiHandleAdLoaded",
                adSetDataObj: b
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdFirstQuartile() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdFirstQuartile();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdFirstQuartile()", "API");
            var a = {
                methodName: "akamaiHandleAdFirstQuartile"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdMidPoint() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdMidPoint();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdMidPoint()", "API");
            var a = {
                methodName: "akamaiHandleAdMidPoint"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdThirdQuartile() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdThirdQuartile();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdThirdQuartile()", "API");
            var a = {
                methodName: "akamaiHandleAdThirdQuartile"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdError() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdError();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdError()", "API");
            var a = {
                methodName: "akamaiHandleAdError"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleAdStopped() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleAdStopped();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleAdStopped()", "API");
            var a = {
                methodName: "akamaiHandleAdStopped"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleStreamSwitch() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleStreamSwitch();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleStreamSwitch()", "API");
            var a = {
                methodName: "akamaiHandleStreamSwitch"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleTitleSwitch(b) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleTitleSwitch(b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleTitleSwitch()", "API");
            var a = {
                methodName: "akamaiHandleTitleSwitch",
                customData: b
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiSetupAIS(a, b, c) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleSetupAISEvent(a, b, c)
    }
}

function akamaiHandleBitRateSwitch(b) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleBitRateSwitch(b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleBitRateSwitch(" + b + ")", "API");
            var a = {
                methodName: "akamaiHandleBitRateSwitch",
                bitRate: b
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiHandleApplicationExit() {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.handleApplicationExit();
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiHandleApplicationExit()", "API");
            var a = {
                methodName: "akamaiHandleApplicationExit"
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiSetVideoObject(a) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.subscribeVideoObject(a)
    }
}

function akamaiSubscribeVideoObject(a) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.subscribeVideoObject(a)
    }
}

function akamaiEnableLocation(b) {
    if (akaMediaAnalytics) {
        akaMediaAnalytics.enableLocation(b);
        if (akaMediaAnalytics.getShouldAnalyze()) {
            consoleLog("akamaiEnableLocation(" + b + ")", "API");
            var a = {
                methodName: "akamaiEnableLocation",
                enable: enable
            };
            akaMediaAnalytics.processLogs({
                api: "reportAPI",
                value: a
            })
        }
    }
}

function akamaiDisableServerIpLookup() {
    try {
        if (akaMediaAnalytics) {
            akaMediaAnalytics.disableServerIpLookUp();
            if (akaMediaAnalytics.getShouldAnalyze()) {
                consoleLog("akamaiDisableServerIpLookup()", "API");
                var a = {
                    methodName: "akamaiDisableServerIpLookup"
                };
                akaMediaAnalytics.processLogs({
                    api: "reportAPI",
                    value: a
                })
            }
        }
    } catch (b) {}
}

function akamaiEnableServerIpLookup() {
    try {
        if (akaMediaAnalytics) {
            akaMediaAnalytics.enableServerIpLookUp();
            if (akaMediaAnalytics.getShouldAnalyze()) {
                consoleLog("akamaiEnableServerIpLookup()", "API");
                var a = {
                    methodName: "akamaiEnableServerIpLookup"
                };
                akaMediaAnalytics.processLogs({
                    api: "reportAPI",
                    value: a
                })
            }
        }
    } catch (b) {}
}

function akamaiHandleError(a) {
    try {
        if (akaMediaAnalytics) {
            akaMediaAnalytics.handleError(a)
        }
    } catch (b) {}
}

function fragmentDownloadStarted(a) {
    akamaiFragmentDownloadStarted(a)
}

function fragmentDownloadCompleted(a) {
    akamaiFragmentDownloadCompleted(a)
}

function akamaiFragmentDownloadStarted(b) {
    var c = akaMediaAnalytics.getStream();
    if (!c || !b) {
        return
    }
    c.streamFragmentDownloadStarted(b);
    if (akaMediaAnalytics.getShouldAnalyze()) {
        consoleLog("akamaiFragmentDownloadStarted(" + b + ")", "API");
        var a = {
            methodName: "akamaiFragmentDownloadStarted",
            bitRate: bitRate
        };
        akaMediaAnalytics.processLogs({
            api: "reportAPI",
            value: a
        })
    }
}

function akamaiFragmentDownloadCompleted(b) {
    var c = akaMediaAnalytics.getStream();
    if (!c || !b) {
        return
    }
    c.streamFragmentDownloadCompleted(b);
    if (akaMediaAnalytics.getShouldAnalyze()) {
        consoleLog("akamaiFragmentDownloadCompleted(" + b + ")", "API");
        var a = {
            methodName: "akamaiFragmentDownloadCompleted",
            bitRate: bitRate
        };
        akaMediaAnalytics.processLogs({
            api: "reportAPI",
            value: a
        })
    }
};