
import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import { config } from 'config'
import Utils from '../utils/utils'
// import ImageGrid from '../components/ImageGrid'
// import Lightbox from 'react-images'
// import Gallery from 'react-grid-gallery'

module.exports = React.createClass({
  propTypes() {
    return {
      router: React.PropTypes.object,
    }
  },
  componentDidMount() {
    //   var images = []
    //   $('#article img').each(function (i, block) {
    //       console.log(block.heigth)
    //       var image = {
    //           src: block.src,
    //           caption: block.title,
    //           thumbnail: block.src,
    //           thumbnailWidth: 540,
    //           thumbnailHeight: 360,
    //       }
    //     images.push(image);
    //   });
      
    //   ReactDOM.render(<Gallery
    //       images={images}
    //       enableImageSelection={false}
    //   />,
    //       document.getElementById('gridWrapper')
    //   )
    //   ReactDOM.render(<Lightbox images={images} />,
    //       document.getElementById('gridWrapper')
    //   )
    //   ReactDOM.render(<ImageGrid images={images} />,
    //       document.getElementById('gridWrapper')
    //   )
    //   require('../node_modules/zoom.js/dist/zoom.min.js')
    //   require('../node_modules/zoom.js/css/zoom.css')
    //   require('../components/js/imagegrid.js')
    //   $('#grid').imageGrid();
      
      const hljs = require('../utils/highlight.js')
      $('pre code').each(function (i, block) {
          hljs.highlightBlock(block);
      });

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
    //   require('../node_modules/bootstrap/dist/js/bootstrap.min.js')
    //   var headerHeight = $('#header').height();
    //   var headerTitleHeight = headerHeight + $('#title-wrapper').height();
    //   $('#articleBar').affix({
    //       offset: {
    //           top: $('#articleBar').offset().top,
    //           bottom: ($('#footer').outerHeight(true))
    //       }
    //   });
  },
  render() {
      const post = this.props.route.page.data
      return (
          <div className="org">
              <Helmet
                  title={`${config.siteTitle} | ${post.title}`}
              />

              {/* <div id="articleBar-wrapper">
                  <div id="articleBar">
                      <ul role="tablist">
                          <li role="presentation" className="active">
                              <a href="#article" role="tab" data-toggle="tab">article</a>
                          </li>
                          <li role="presentation">
                              <a href="#gallery" role="tab" data-toggle="tab">gallery</a>
                          </li>
                          <li role="presentation">
                              <a href="#map" role="tab" data-toggle="tab">map</a>
                          </li>
                      </ul>
                  </div>
              </div> */}

              <div className="row">
                  <div id="gridWrapper" className="clearfix"></div>
              </div>


              <div className="row article">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                      <h1>{post.title}</h1>
                      <div className="pageMeta">
                          <span>
                              {Utils.pageDateFormat(post.date)}
                          </span>
                      </div>

                      <div id="article" dangerouslySetInnerHTML={{ __html: post.body }} />
                  </div>
                  <div className="col-md-2"></div>
              </div>

          </div >
      )
  },
})
