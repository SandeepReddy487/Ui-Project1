var e = document.getElementById('lock')
var p = new PatternLock(e, {
    onPattern: function() {
        this.success()
    }
});

