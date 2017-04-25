if (!window.MecloudPlayerApi) {
    MecloudPlayerApi = {
        log: function(err) {
            if (err) {
                console.log(err);
            }
        },
        createCallback: function(callback) {
            var self = this;
            return typeof callback === 'function' ? callback : self.log;
        },
        getPlayer: function(vid, callback) {
            callback = this.createCallback(callback);
            if (!MecloudPlayer) {
                return callback(null);
            }
            var players = MecloudPlayer.getPlayers();
            if (!players) {
                return callback(null);
            }
            if (vid && typeof vid === 'string') {
                for (var id in players) {
                    if (players[id].playInfo.vid === vid) {
                        return players[id];
                    }
                }
            }
            return callback(null);
        },
        getFirstPlayer: function(callback) {
            callback = this.createCallback(callback);
            if (!MecloudPlayer) {
                return callback(null);
            }
            var players = MecloudPlayer.getPlayers();
            if (!players) {
                return callback(null);
            }
            for (var id in players) {
                if (id) {
                    return callback(players[id]);
                }
            }
            return callback(null);
        },
        eventPlay: function(player, callback) {
            player.on("play", this.createCallback(callback));
        },
        eventPause: function(player, callback) {
            player.on("pause", this.createCallback(callback));
        },
        eventEnded: function(player, callback) {
            player.on("ended", this.createCallback(callback));
        },
        getCurrentTime: function(player, callback) {
            callback = this.createCallback(callback);
            callback(player.currentTime());
        },
        setCurrentTime: function(player, time, callback) {
            callback = this.createCallback();
            player.currentTime(time);
            return callback(true);
        },
        play: function(player) {
            player.play();
        },
        initReport: function() {
            if (MecloudPlayer && MecloudPlayer.getPlayers()) {
                var urlReport = "http" + (location.protocol === 'https' ? 's' : '') + "://visitanalytics.userreport.com/hit.gif?t=" + encodeURIComponent("VAV170302Webtretho") + "&ord={{time}}";
                var players = MecloudPlayer.getPlayers();
                for (var player in players) {
                    if (player) {
                        console.log("init player : " + player);
                        var p = players[player];
                        p.callReport = function() {
                            if (!this.report) {
                                this.report = true;
                                console.log("call url" + this.currentTime());
                                var z = this.off("timeupdate", p.callReport);
                                console.log("off event " + z);
                                MecloudPlayerApi.getAsync(urlReport.replace("{{time}}", new Date().getTime()), function(rs) {
                                    console.log(rs);
                                });
                            }
                        }
                        p.on("timeupdate", p.callReport);
                    }
                }
            }
        },
        getAsync: function(theUrl, callback) {
            var image = new Image();
            image.src = theUrl;
        }
    };
}
var step = 500;
var initReport = function() {
    if (window.MecloudPlayer && window.MecloudPlayer.getPlayers() && (JSON.stringify(window.MecloudPlayer.getPlayers()) !== '{}')) {
        console.log(window.MecloudPlayer.getPlayers());
        console.log("init Report");
        MecloudPlayerApi.initReport();
    } else {
        console.log("player not found : " + (step));
        setTimeout(initReport, (step));
    }
};
setTimeout(initReport, 2000);