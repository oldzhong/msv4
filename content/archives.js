import React from 'react'
import { Link } from 'react-router'

import sortBy from 'lodash/sortBy'
import filter from 'lodash/filter'
import groupBy from 'lodash/groupBy'
import access from 'safe-access'

import Utils from '../utils/utils'


export default class Archives extends React.Component {
    render() {
        const sortedPages = sortBy(this.props.route.pages, (page) =>
            access(page, 'data.date')
        ).reverse()
        const filteredPages = filter(sortedPages, (page) => {
            if (access(page, 'data.cate') === 'unpublished') {
                return false
            } else {
                return true
            }
        })
        return (
            <div className="archives">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="page-header">
                            <h1>
                    <small> 共 {filteredPages.length} 篇</small>
                            </h1>
                        </div>
                        <ArchivesList pages={filteredPages} />

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}

class ArchivesList extends React.Component {
    render() {
        const pagesGroupByYear = groupBy(this.props.pages, (page) => {
            return (new Date(access(page, 'data.date'))).getFullYear()
        })
        return (
            <div>
                {
                    Object.keys(pagesGroupByYear).reverse().map(year => {
                        if (isNaN(year)) {
                            return
                        }
                        const pagesOfYear = pagesGroupByYear[year]
                        return (
                            <div key={year}>
                                <h3>{year}</h3>
                                <ul className="archives-item-list">
                                    {
                                        pagesOfYear.map((page, index) => {

                                            return (
                                                <li key={page.path}>
                                                    <span className="archives-date">{Utils.pageDate(page)}</span>
                                                    <span className="archives-divider"> » </span>
                                                    <Link className="archives-title" to={Utils.pageUrl(page)}>{page.data.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

class ArchivesTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>标题</th>
                        <th>标签</th>
                        <th>标识符</th>
                        <th>字节数</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.pages.map((page, index) => {
                            return (
                                <tr key={page.path}>
                                    <td>{Utils.pageDate(page)}</td>
                                    <td>
                                        <Link to={Utils.pageUrl(page)}>{page.data.title}</Link>
                                    </td>
                                    <td>{page.data.tags}</td>
                                    <td>{page.path}</td>
                                    <td>{Utils.pageSize(page)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}