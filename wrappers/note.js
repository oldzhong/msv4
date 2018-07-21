
import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import { config } from 'config'
import Utils from '../utils/utils'

module.exports = React.createClass({
    propTypes() {
        return {
            router: React.PropTypes.object,
        }
    },
    componentDidUpdate() {
    },
    componentDidMount() {
        require('../utils/bootstrap/js/bootstrap.min.js')
        $('#toc').affix({
            offset: {
                top: $('#toc').offset().top,
                bottom: ($('#footer').outerHeight(true))
            }
        });
        $('body').scrollspy({ target: '#toc' })
        
        const hljs = require('../utils/highlight.js')
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });

        require('../node_modules/@fancyapps/fancybox')
        $().fancybox({
            selector: '[data-fancybox="images"]',
            loop: true
        });
    },
    render() {
        const post = this.props.route.page.data
        return (
            <div className="note">
                <Helmet
                    title={`${config.siteTitle} | ${post.title}`}
                />
                <h1>{post.title}</h1>
                <div className="pageMeta">
                    <span>
                        {/* <i className="fa fa-calendar"></i> */}
                        {Utils.pageDateFormat(post.date)}
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    </div>
                    <div className="col-md-3">
                        <div id="toc" dangerouslySetInnerHTML={{ __html: post.toc }} />
                    </div>
                </div>
            </div>
        )
    },
})
