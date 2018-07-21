import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'

import startsWith from 'lodash/startsWith'

module.exports = React.createClass({
  propTypes() {
    return {
      route: React.PropTypes.object,
    }
  },
  render() {
    const data = this.props.route.page.data
    const path = this.props.route.page.path
    if (path === '/reading/notes/') {
      if (data === undefined || data.books === undefined) {
        return (
          <div>
            木有读书笔记列表
         </div> 
        )
      } else {
        return (
          <div>
            <Helmet
              title={`${config.siteTitle} | ${data.title}`}
            />
            <h1>
              {data.title}
              <small> 共 {data.books.length} 本书</small>
            </h1>
            <table>
              <tbody>
                <tr>
                  <th>标识符</th>
                  <th>书名</th>
                  <th>多看ID</th>
                </tr>
              </tbody>
              {
                data.books.map((book, index) => {
                  return (
                    <tr>
                      <td>
                        <Link to={"/reading/notes/" + book.uri + "/"}>{book.uri}</Link>
                      </td>
                      <td>{book.title}</td>
                      <td>{book.duokanbookid}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        )
      }
    } else if (startsWith(path, '/reading/notes/')) {
      return (
        <div>
          <Helmet
            title={`${config.siteTitle} | ${data.title}`}
          />
          <ReadingNote readingNote={data} />
        </div>
      )
    } else {
      return (
        <div>
          <Helmet
            title={`${config.siteTitle} | ${data.title}`}
          />
          <h1>{data.title}</h1>
          <p>Raw view of json file</p>
          <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
        </div>
      )
    }
  },
})

class ReadingNote extends React.Component {
  componentDidMount() {
    require('../node_modules/@fancyapps/fancybox')
    $().fancybox({
      selector: '[data-fancybox="images"]',
      loop: true,
      helpers: {
        overlay: {
          locked: true
        }
      }
    });
  }
  render() {
    const readingNote = this.props.readingNote
    if (readingNote === undefined || readingNote.notes === undefined) {
      return (
        <div>
          木有读书笔记
        </div>
      ) 
    } else {
    return (
      <div className="readingNote">
            <h1>{readingNote.title}</h1>
            <div className="row">
              <div className="col-md-12">
                <p>共 {readingNote.notes.length} 篇读书笔记，阅读开始日期：{readingNote.date}，来源：{readingNote.source}</p>
                {
                  readingNote.notes.map((note, index) => {
                    return (
                      <div className="note">
                        <blockquote>
                          {'time' in note &&
                            <p>{note.time} » {note.comment}</p>
                          }
                          {'chapter' in note &&
                            <p>章节：{note.chapter}</p>
                          }
                        </blockquote>
                        {'content' in note &&
                          <pre>
                            {note.content}
                          </pre>
                        }
                        {'img_path' in note &&
                          <div className="imageWrapper">
                            <a href={note.img_path} className="fancybox" data-fancybox="images">
                              <img src={note.img_path} alt="" />
                            </a>
                          </div>
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          )
    }
  }
}