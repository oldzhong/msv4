import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import access from 'safe-access'
import moment from 'moment'
import sortBy from 'lodash/sortBy'
import filter from 'lodash/filter'
import startsWith from 'lodash/startsWith'
import groupBy from 'lodash/groupBy'
import includes from 'lodash/includes'

import Utils from '../utils/utils'

export default class BlogArchives extends React.Component {
    render() {
        const sortedPages = sortBy(this.props.route.pages, (page) =>
            access(page, 'data.date')
        ).reverse()
        const blogPages = filter(sortedPages, (page) => {
            if (access(page, 'data.cate') === 'unpublished') {
                return false
            }
            if (!includes(['org', 'md'], page.file.ext)) {
                return false
            }
            if (startsWith(page.path, '/life/') && (page.path[8] === 'Q')) {
                return false
            }
            return (startsWith(page.path, '/life/') || startsWith(page.path, '/blog/'))
        })
        return (
            <div className="archives">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <ArticleSummaryList pages={blogPages} />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}

class ArticleSummaryList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.pages.map((page, index) => {
                        return (
                            <ArticleSummary page={page} />
                        )
                    })
                }
            </div>
        )
    }
}

class ArticleSummary extends React.Component {
  render() {
      const page = this.props.page;
      return (
          <div className="article-summary">
              <h2>
                  <Link to={Utils.pageUrl(page)}>{page.data.title}</Link>
              </h2>
              <div className="pageMeta">
                  <span>
                      {Utils.pageDateFormat(page.data.date)}
                  </span>
              </div>
              <p>{page.data.summary}</p>
          </div>
      )
    }
}

class GalleryPanel extends React.Component {
    render() {
        return (
            <div className="panel panel-default sm sp">
                    <div className="panel-body">
                        <h5 className="m-t-0">Gallery
                            <small>· <a href="#">more</a></small>
                        </h5>
                        <div data-grid="images" data-target-height="150">
                            {/* <div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">
                                <img data-width="640" data-height="640" data-action="zoom" src="/elvestar.jpg" style="width: 117px; height: 118px;">
                            </div>
                            <div style="margin-bottom: 10px; margin-right: 0px; display: inline-block; vertical-align: bottom;">
                                <img data-width="640" data-height="640" data-action="zoom" src="/elvestar.jpg" style="width: 117px; height: 118px;">
                            </div> */}
                        </div>
                    </div>
                </div>
        )
    }
}

class YearlyArchives extends React.Component {
    render() {
        return (
            <div className="panel panel-default panel-zy">
                <div className="panel-body">
                    <h5 className="m-t-0">Yearly Archives<small> · <a href="/archives">more</a></small></h5>
                    <ul>
                        <li>
                            <a href="2017">2017 (26)</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}