import React from 'react'
import "./news.css"
// import { MdSecurity } from 'react-icons/md';

const News = () => {
  return (
    <>
    <div className="news">
        <div className="mainNews">
        <div className="left">
            <div className="heading">
                <span>latest</span><span> news</span>
            </div>
            <div className="divs">
                <div className="div1">
                    <div className="img">
                        <div className="overlay"></div>
                    </div>
                    <div className="content">
                        <div className="datee"><span>26 aug 2017</span></div>
                        <div className="heading"><span>A Night in Resort with Family</span></div>
                        <div className="desc"><span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ...</span></div>
                        <div className="btn">
                            <a href="/">read more</a>
                        </div>
                    </div>
                </div>
                <div className="div2">
                    <div className="img">
                        <div className="overlay"></div>
                    </div>
                    <div className="content">
                        <div className="datee"><span>26 aug 2017</span></div>
                        <div className="heading"><span>A Night in Resort with Family</span></div>
                        <div className="desc"><span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ...</span></div>
                        <div className="btn">
                            <a href="/">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="right">
            <div className="heading">
                <span>upcomming </span><span> events</span>
            </div>
            <div className="allEvents">
                <div className="event1">
                    <div className="mainDate">
                        <div className="datee"><span>17</span></div>
                        <div className="month"><span>aug</span></div>
                    </div>
                    <div className="topic"><span>ANNEVERSAY OF OUR RESORT</span></div>
                </div>
                <div className="event1">
                    <div className="mainDate">
                        <div className="datee"><span>25</span></div>
                        <div className="month"><span>dec</span></div>
                    </div>
                    <div className="topic"><span>chirstmas special party</span></div>
                </div>
                
                <div className="btn">
                    <a href="/">view all events</a>
                </div>
            </div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default News