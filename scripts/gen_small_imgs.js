#!/usr/bin/env node
const fs = require("fs");
const glob = require("glob")
const sharp = require("sharp")

console.log('hehe')
// const dir = '~/github/elvestar/msv4/public/static'
const dir = '/Users/elvestar/github/elvestar/msv4/content/static'
const fileType = ['jpg']
const fileGlobQuery = fileType.map(type => `*.${type}`).join('|')
const globQuery = `${dir}/imgs/*/${fileGlobQuery}`
// const globQuery = `${dir}/imgs/14Q4/${fileGlobQuery}`
// const globQuery = `${dir}/imgs/1708-ff10/${fileGlobQuery}`
console.log(`Glob query: ${globQuery}`)

const minDimension = 320;
glob(globQuery, {follow: true}, (err, files) => {
    files.forEach((file) => {
        const image = sharp(file)
        image.metadata().then(metadata => {
            
            // var smallFile = file.replace('static/imgs', 'static/smallimgs')
            var fields = file.split('/')
            fields.splice(fields.length - 1, 0, 'small')
            var smallFile = fields.join('/')
            if (fs.existsSync(smallFile)) {
                return true
            }

            var smallDir = fields.slice(0, fields.length - 1).join('/')
            var smallWidth = metadata.width
            var smallHeigth = metadata.height
            if (metadata.width < minDimension || metadata.height < minDimension) {
            } else {
                smallWidth = parseInt(metadata.width / 2)
                smallHeigth = parseInt(metadata.height / 2)
            }
            console.log(metadata.width, metadata.height)
            console.log(smallDir)
            if (!fs.existsSync(smallDir)) {
                fs.mkdirSync(smallDir)
            }

            console.log(file)
            console.log(smallFile)
            console.log(metadata)
            image.resize(smallWidth, smallHeigth)
            .toFile(smallFile)
        })
    })
})