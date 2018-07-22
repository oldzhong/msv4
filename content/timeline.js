import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import moment from 'moment'
import sortBy from 'lodash/sortBy'
import groupBy from 'lodash/groupBy'

// import LazyLoad from 'react-lazyload'


export default class Timeline extends React.Component {
    componentDidMount() {
        require('../node_modules/bootstrap/dist/js/bootstrap.min.js')
        $('#toc').affix({
            offset: {
                top: $('#toc').offset().top,
                bottom: ($('#footer').outerHeight(true))
            }
        });
        $('body').scrollspy({ target: '#toc' })
    }
    render() {
        var events = [];
        this.props.route.pages.map((page, index) => {
            if (access(page, 'data.cate') === 'unpublished') {
                return
            }
            events.push(page)
            if (page.data.events != undefined) {
                page.data.events.map((event, index) => {
                    events.push({
                        data: event,
                        path: page.path + '#' + event.anchor
                    })
                })
            }
        })
        console.log(events.length)
        const sortedEvents = sortBy(events, (event) =>
            access(event, 'data.date')
        ).reverse()
        const eventsGroupByYear = groupBy(sortedEvents, (event) => {
            return (new Date(access(event, 'data.date'))).getFullYear()
        })

        return (
            <div>
                <h1 className="">
                    时间线 <small>共 {sortedEvents.length} 篇</small>
                </h1>
                <div className="timeline">
                    <div className="row">
                        <div className="col-md-9 timeline-content">
                            {
                                Object.keys(eventsGroupByYear).reverse().map(year => {
                                    if (isNaN(year)) {
                                        return
                                    }
                                    const eventsOfYear = eventsGroupByYear[year]
                                    return (
                                        <EventsOfYear key={"year-" + year} year={year} eventsOfYear={eventsOfYear} />
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-3">
                            <div id="toc" className="m-t-lg">
                                <div>
                                    <ul className="nav nav-stacked fixed">
                                        {
                                            Object.keys(eventsGroupByYear).reverse().map((year, index) => {
                                                if (isNaN(year)) {
                                                    return
                                                }
                                                return (
                                                    <li key={"toc-" + year}>
                                                        <a href={"#" + year}>{year}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class EventsOfYear extends React.Component {
    render() {
        const eventsGroupByMonth = groupBy(this.props.eventsOfYear, event => {
            return (new Date(access(event, 'data.date'))).getMonth() + 1
        })
        const year = this.props.year
        return (
            <div key={year} id={year}>
                {
                    Object.keys(eventsGroupByMonth).reverse().map((month, index) => {
                        const eventsOfMonth = eventsGroupByMonth[month]
                        return (
                            <div key={year + month}>
                                <h2>{year} 年 {month} 月 <small>共 {eventsOfMonth.length} 篇</small></h2>
                                <Events events={eventsOfMonth} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
                            // <LazyLoad key={year + month} height={10} once offset={100}>
                            // </LazyLoad>

class Events extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.events.map((event, index) => {
                        var divStyle = null ;
                        if (event.data.summary === 'nil') {
                            divStyle = {
                                backgroundImage: 'url(' + event.data.cover + ')',
                                overflow: 'hidden',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }
                        } else {
                            divStyle = {}
                        };
                        return (
                            <li style={divStyle} className="text" key={event.path}>
                                <Link to={prefixLink(event.path)}>
                                    {event.data.summary === 'nil' ? (
                                        <div>
                                        </div>
                                    ) : (
                                            <div>
                                                <h3>{event.data.title}</h3>
                                                <p>{event.data.summary}</p>
                                            </div>
                                        )}
                                    <div className="info">
                                        <em>{moment(event.data.date).format('l')}</em>
                                        <small>
                                        </small>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}