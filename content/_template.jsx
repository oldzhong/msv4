import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// import '../utils/icomoon/style.css'
// require("../css/new_scss/styles.scss");

import '../utils/bootstrap/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.css'
// import 'fancybox/dist/css/jquery.fancybox.css'

require("../css/scss/styles.scss");
// require("../css/scss/admin.scss");
require("../node_modules/highlight.js/styles/tomorrow.css");
require('../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css')


module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  componentDidMount() {

  },

  render() {
    return (
      <div>
        {/* <nav style={{display:'none'}} className="navbar" id="header"> */}
        <nav className="navbar" id="header">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to={"/"}>仲之地</Link>
            </div>
            <div className="navbar-collapse collapse bs-navbar-collapse" id="header-content">
              <ul className="nav navbar-nav">
                {/* <li> <Link className="navbar-item" to={"/blog/"}>Blog</Link> </li> */}
                <li> <Link className="navbar-item" to={"/gallery/"}>Gallery</Link> </li>
                <li> <Link className="navbar-item" to={"/notes/"}>笔记</Link> </li>
                {/* <li><a className="navbar-item" href="/photos/">摄影</a></li> */}
                <li> <Link className="navbar-item" to={"/archives/"}>归档</Link> </li>
                <li> <Link className="navbar-item" to={"/timeline/"}>时间线</Link> </li>
                <li> <Link className="navbar-item" to={"/reading/notes/"}>读书</Link> </li>
                <li> <Link className="navbar-item" to={"/about/"}>关于</Link> </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
              <div id="articleBar-wrapper" id="header-content-2">
                  <div id="articleBar">
                      <ul role="tablist">
                          {/* <li role="presentation" className="active"> */}
                          <li role="presentation">
                              {/* <a href="#article" role="tab" data-toggle="tab">article</a> */}
                              <Link className="navbar-item" to={"/gallery/"}>Gallery</Link>
                          </li>
                          <li role="presentation">
                              <Link className="navbar-item" to={"/notes/"}>笔记</Link>
                          </li>
                          <li role="presentation">
                              <Link className="navbar-item" to={"/archives/"}>归档</Link>
                          </li>
                          <li role="presentation">
                              <Link className="navbar-item" to={"/timeline/"}>时间线</Link>
                          </li>
                          <li role="presentation">
                              <Link className="navbar-item" to={"/reading/notes/"}>读书</Link>
                          </li>
                          <li role="presentation">
                              <Link className="navbar-item" to={"/about/"}>关于</Link>
                          </li>
                      </ul>
                  </div>
              </div>

        </div>

        <div className="container m-t">
          {this.props.children}
        </div>

        {/* <footer style={{display:'none'}} className="footer" id="footer" role="contentinfo"> */}
        <footer className="footer" id="footer" role="contentinfo">
          <div className="container">

            <p>
              本网站由 <a href="http://elvestar.com/about/" target="blank">仲毅</a> 创建和维护，使用 <a href="https://www.gnu.org/software/emacs/" target="blank">Emacs</a> <a href="http://orgmode.org/" target="blank">Org mode</a> 和 <a href="http://nanoc.ws/" target="blank">Nanoc</a> 编辑和构建
        </p>

            <p>Licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="blank">CC BY-NC-ND 4.0</a></p>

            <ul className="footer-links">
              <li>仲之地</li>
              <li> · </li>
              <li><a href="http://elvestar.com/blog/" target="blank">Blog</a></li>
              <li> · </li>
              <li><a href="http://elvestar.com/notes/" target="blank">知识管理</a></li>
              <li> · </li>
              <li><a href="http://elvestar.com/timeline/" target="blank">时间线</a></li>
              <li> · </li>
              <li><a href="http://elvestar.com/guestbook/" target="blank">留言本</a></li>
            </ul>

          </div>
        </footer>

        <div style={{display: 'none'}} id="react-mount-inner"></div>
        
      </div >
    )
  },
})
