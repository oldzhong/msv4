import { prefixLink } from 'gatsby-helpers'
var moment = require('moment')

export default class Utils {
    static pageUrl(page) {
        return prefixLink(page.path)        
    }
    static pageDate(page) {
        return Utils.pageDateFormat(page.data.date)
    }
    static pageDateFormat(date) {
        return moment(date).format('YYYY-MM-DD')
    }
    static pageSize(page) {
        if (page.data.raw !== undefined) {
            return page.data.raw.length
        } else {
            return 0
        }
    }
}