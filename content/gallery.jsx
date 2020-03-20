import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import Utils from '../utils/utils'

export default class Gallery extends React.Component {
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
        return (
            <div className="gallery">
                <div className="title">GALLERY</div>
                <div className="images">
                    {/* 2019 */}

                    {/* 2017 */}
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0570.jpg" title="天台实景令人惊叹" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0570.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q3/small/IMG_0570.jpg" alt="天台实景令人惊叹" title="天台实景令人惊叹" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0803.jpg" title="山顶有雾" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0803.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q3/small/IMG_0803.jpg" alt="山顶有雾" title="山顶有雾" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0877.jpg" title="太极形状的云" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0877.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q3/small/IMG_0877.jpg" alt="太极形状的云" title="太极形状的云" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0379.jpg" title="太极形状的云" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0379.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q3/small/IMG_0379.jpg" alt="洛丹伦的夏天" title="洛丹伦的夏天" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0333.jpg" title="稻香湖的荷花" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0333.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q3/small/IMG_0333.jpg" alt="稻香湖的荷花" title="稻香湖的荷花" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0568.jpg" title="火红的西山" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q3/IMG_0568.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q3/small/IMG_0568.jpg" alt="火红的西山" title="火红的西山" data-width="768" data-height="1024" /></a>
                    </div>

                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q2/IMG_9649.jpg" title="这可能是一种建筑艺术吧" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q2/IMG_9649.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q2/small/IMG_9649.jpg" alt="这可能是一种建筑艺术吧" title="这可能是一种建筑艺术吧" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q2/IMG_9716.jpg" title="栈道尽头的狗" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q2/IMG_9716.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q2/small/IMG_9716.jpg" alt="栈道尽头的狗" title="栈道尽头的狗" data-width="768" data-height="1024" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q1/DSC00257.jpg" title="百望山下等公交" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q1/DSC00257.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q1/small/DSC00257.jpg" alt="百望山下等公交" title="百望山下等公交" data-width="1024" data-height="682"/ ></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/17Q1/IMG_7846.jpg" title="午饭后" rel="https://msv4.cdn.bcebos.com/static/imgs/17Q1/IMG_7846.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/17Q1/small/IMG_7846.jpg" alt="午饭后" title="午饭后" data-width="1024" data-height="768" /></a>
                    </div>

                    {/* 2016 */}
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/16Q4/IMG_6977.jpg" title="这片黑色长云贯穿天空，遮住太阳，直抵西山" rel="https://msv4.cdn.bcebos.com/static/imgs/16Q4/IMG_6977.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/16Q4/small/IMG_6977.jpg" alt="这片黑色长云贯穿天空，遮住太阳，直抵西山" title="这片黑色长云贯穿天空，遮住太阳，直抵西山" data-width="768" data-height="1024" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/16Q3/IMG_6023.jpg" title="淡蓝+墨绿+无限远的视野" rel="https://msv4.cdn.bcebos.com/static/imgs/16Q3/IMG_6023.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/16Q3/small/IMG_6023.jpg" alt="淡蓝+墨绿+无限远的视野" title="淡蓝+墨绿+无限远的视野" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/16Q2/IMG_5288.jpg" title="绝好春光" rel="https://msv4.cdn.bcebos.com/static/imgs/16Q2/IMG_5288.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/16Q2/small/IMG_5288.jpg" alt="绝好春光" title="绝好春光" data-width="768" data-height="1024" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/16Q2/IMG_5723.jpg" title="这色彩可称奇景" rel="https://msv4.cdn.bcebos.com/static/imgs/16Q2/IMG_5723.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/16Q2/small/IMG_5723.jpg" alt="这色彩可称奇景" title="这色彩可称奇景" data-width="968" data-height="1024" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/16Q1/IMG_4543.jpg" title="科技园二期还有部分设施未完工" rel="https://msv4.cdn.bcebos.com/static/imgs/16Q1/IMG_4543.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/16Q1/small/IMG_4543.jpg" alt="科技园二期还有部分设施未完工" title="科技园二期还有部分设施未完工" data-width="1024" data-height="677" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/16Q1/IMG_4618.jpg" title="夕阳下的兰园" rel="https://msv4.cdn.bcebos.com/static/imgs/16Q1/IMG_4618.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/16Q1/small/IMG_4618.jpg" alt="夕阳下的兰园" title="夕阳下的兰园" data-width="1024" data-height="768" /></a>
                    </div>

                    {/* 2015 */}
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q4/IMG_4117.jpg" title="雾霾中的火炬灯塔" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q4/IMG_4117.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q4/small/IMG_4117.jpg" alt="雾霾中的火炬灯塔" title="雾霾中的火炬灯塔" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q3/IMG_2423.jpg" title="周庄整天下着雨" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q3/IMG_2423.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q3/small/IMG_2423.jpg" alt="周庄整天下着雨" title="周庄整天下着雨" data-width="768" data-height="1024" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q3/IMG_2652.jpg" title="上研周边景象" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q3/IMG_2652.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q3/small/IMG_2652.jpg" alt="上研周边景象" title="上研周边景象" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q3/IMG_3382.jpg" title="乌云笼罩着京都儿童医院" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q3/IMG_3382.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q3/small/IMG_3382.jpg" alt="乌云笼罩着京都儿童医院" title="乌云笼罩着京都儿童医院" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q2/IMG_1670.jpg" title="桃花一般是最先开的" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q2/IMG_1670.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q2/small/IMG_1670.jpg" alt="桃花一般是最先开的" title="桃花一般是最先开的" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q2/IMG_1771.jpg" title="这种夕阳尤其美" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q2/IMG_1771.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q2/small/IMG_1771.jpg" alt="这种夕阳尤其美" title="这种夕阳尤其美" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q1/DSC08306.jpg" title="本次年会的唯一收获" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q1/DSC08306.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q1/small/DSC08306.jpg" alt="本次年会的唯一收获" title="本次年会的唯一收获" data-width="1024" data-height="680" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/15Q1/IMG_1518.jpg" title="桃花盛开" rel="https://msv4.cdn.bcebos.com/static/imgs/15Q1/IMG_1518.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/15Q1/small/IMG_1518.jpg" alt="桃花盛开" title="桃花盛开" data-width="768" data-height="1024" /></a>
                    </div>

                    {/* 2014 */}
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/14Q4/IMG_0219.jpg" title="这个时候的秋天最美" rel="https://msv4.cdn.bcebos.com/static/imgs/14Q4/IMG_0219.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/14Q4/small/IMG_0219.jpg" alt="这个时候的秋天最美" title="这个时候的秋天最美" data-width="1024" data-height="768" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/14Q4/IMG_0277.jpg" title="午饭后的大厦南门：蓝天、白云、银杏树" rel="https://msv4.cdn.bcebos.com/static/imgs/14Q4/IMG_0277.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/14Q4/small/IMG_0277.jpg" alt="午饭后的大厦南门：蓝天、白云、银杏树" title="午饭后的大厦南门：蓝天、白云、银杏树" data-width="1024" data-height="746" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/14Q2/IMG_20140615_165641.jpg" title="继续作死钻野林爬野山" rel="https://msv4.cdn.bcebos.com/static/imgs/14Q2/IMG_20140615_165641.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/14Q2/small/IMG_20140615_165641.jpg" alt="继续作死钻野林爬野山" title="继续作死钻野林爬野山" data-width="577" data-height="1024" /></a>
                    </div>
                    <div className="image">
                        <div className="image-overlay"></div>
                        <a className="fancybox" data-fancybox="images" href="https://msv4.cdn.bcebos.com/static/imgs/14Q1/P40302-174142.jpg" title="夕阳、湖面、残雪" rel="https://msv4.cdn.bcebos.com/static/imgs/14Q1/P40302-174142.jpg"><img src="https://msv4.cdn.bcebos.com/static/imgs/14Q1/small/P40302-174142.jpg" alt="夕阳、湖面、残雪" title="夕阳、湖面、残雪" data-width="1024" data-height="732" /></a>
                    </div>

                    <div className="image">
                        <div className="image-overlay"></div>
                    </div>

                </div>
            </div>
        )
    }
}
