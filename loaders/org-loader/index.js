var frontMatter = require('front-matter')
var markdownIt = require('markdown-it')
var hljs = require('highlight.js')
var objectAssign = require('object-assign')
var org = require("./org/lib/org");
var extractMetaData = require('./metadata')

var highlight = function (str, lang) {
    if ((lang !== null) && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value
        } catch (_error) {
            console.error(_error)
        }
    }
    try {
        return hljs.highlightAuto(str).value
    } catch (_error) {
        console.error(_error)
    }
    return ''
}

var orgParser = new org.Parser();

module.exports = function (content) {
    this.cacheable()
    const raw = content
    var orgDocument = orgParser.parse(raw);
    var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
        headerOffset: 1,
        exportFromLineNumber: false,
        suppressSubScriptHandling: false,
        suppressAutoLink: false,
        documentOptions: {
            toc: 2,
        }
    });
    const body = orgHTMLDocument.contentHTML
    const toc = orgHTMLDocument.tocHTML
    const events = orgHTMLDocument.events
    var metaData = extractMetaData(raw)
    const result = objectAssign({}, metaData, {
        body, toc, raw, events
    })
    this.value = result
    return `module.exports = ${JSON.stringify(result)}`
}
