+function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.image-grid"), n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.image-grid", s = new i(this, n)), "string" == typeof e && s[e].call(o)
        })
    }

    var i = function (e, o) {
        this.cleanWhitespace(e), this.row = 0, this.rownum = 1, this.elements = [], this.element = e, this.albumWidth = t(e).width(), this.images = t(e).children(), this.options = t.extend({}, i.DEFAULTS, o), t(window).on("resize", t.proxy(this.handleResize, this)), this.processImages()
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 350, i.DEFAULTS = {padding: 10, targetHeight: 300, display: "inline-block"}, i.prototype.handleResize = function () {
        this.row = 0, this.rownum = 1, this.elements = [], this.albumWidth = t(this.element).width(), this.images = t(this.element).children(), this.processImages()
    }, i.prototype.processImages = function () {
        var e = this;
        this.images.each(function (i) {
            var o = t(this), s = o.is("img") ? o : o.find("img"), n = "undefined" != typeof s.data("width") ? s.data("width") : s.width(), a = "undefined" != typeof s.data("height") ? s.data("height") : s.height();
            s.data("width", n), s.data("height", a);
            var r = Math.ceil(n / a * e.options.targetHeight), l = Math.ceil(e.options.targetHeight);
            e.elements.push([this, r, l]), e.row += r + e.options.padding, e.row > e.albumWidth && e.elements.length && (e.resizeRow(e.row - e.options.padding), e.row = 0, e.elements = [], e.rownum += 1), e.images.length - 1 == i && e.elements.length && (e.resizeRow(e.row), e.row = 0, e.elements = [], e.rownum += 1)
        })
    }, i.prototype.resizeRow = function (e) {
        for (var i = this.options.padding * (this.elements.length - 1), o = this.albumWidth - i, s = o / (e - i), n = i, a = (e < this.albumWidth, 0); a < this.elements.length; a++) {
            var r = t(this.elements[a][0]), l = Math.floor(this.elements[a][1] * s), h = Math.floor(this.elements[a][2] * s), d = a < this.elements.length - 1;
            n += l, !d && n < this.albumWidth && (l += this.albumWidth - n), l--;
            var c = r.is("img") ? r : r.find("img");
            c.width(l), c.height(h), this.applyModifications(r, d)
        }
    }, i.prototype.applyModifications = function (t, e) {
        var i = {"margin-bottom": this.options.padding + "px", "margin-right": e ? this.options.padding + "px" : 0, display: this.options.display, "vertical-align": "bottom"};
        t.css(i)
    }, i.prototype.cleanWhitespace = function (e) {
        t(e).contents().filter(function () {
            return 3 == this.nodeType && !/\S/.test(this.nodeValue)
        }).remove()
    };
    var o = t.fn.imageGrid;
    t.fn.imageGrid = e, t.fn.imageGrid.Constructor = i, t.fn.imageGrid.noConflict = function () {
        return t.fn.imageGrid = o, this
    }, t(function () {
        t('[data-grid="images"]').imageGrid()
    })
}(jQuery);