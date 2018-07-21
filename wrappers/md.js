import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import Utils from '../utils/utils'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render() {
    const post = this.props.route.page.data
    return (
      <div className="org">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>{post.title}</h1>
            <div className="pageMeta">
              <span>
                <i className="fa fa-calendar"></i>
                {Utils.pageDateFormat(post.date)}
              </span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div >
    )
  },
})