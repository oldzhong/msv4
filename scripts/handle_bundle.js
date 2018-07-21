#!/usr/bin/env node
const fs = require("fs");
const _ = require("lodash")

const bundleFile = 'public/bundle.js'
const newBundleFile = bundleFile
// const newBundleFile = 'public/bundle_new.js'
var bundleContent = fs.readFileSync(bundleFile)
console.log('bundle content length: ', bundleContent.length)

// getElementById("react-mount") => getElementById("react-mount-inner")
var newBundleContent = _.replace(bundleContent, 'getElementById("react-mount")', 'getElementById("react-mount-inner")')

// e.exports={title:".+}},function( => ,function(
newBundleContent = _.replace(newBundleContent, /.\.exports={title:"[\s\S]+?}},function\(/g, '},function(')
newBundleContent = _.replace(newBundleContent, /.\.exports={date:"[\s\S]+?}},function\(/g, '},function(')

console.log('new bundle content length: ', newBundleContent.length)
fs.writeFile(newBundleFile, newBundleContent)
