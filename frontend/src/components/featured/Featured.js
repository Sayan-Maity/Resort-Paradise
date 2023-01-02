import useFetch from "../../hooks/useFetch";
import "./featured.css";
import {motion} from 'framer-motion';
import { useRef, useState, useEffect } from "react";
import featuredOne from "../../images/featuredOne.jpg"
import featuredTwo from "../../images/featuredTwo.jpg"
import featuredThree from "../../images/featuredThree.jpg"
import featuredFour from "../../images/featuredFour.jpg"
import featuredFive from "../../images/featuredFive.jpg"
import featuredSix from "../../images/featuredSix.jpg"
import featuredSeven from "../../images/featuredSeven.jpg"
import featuredEight from "../../images/featuredEight.jpg"
import featuredNine from "../../images/featuredNine.jpg"
import featuredTen from "../../images/featuredTen.jpg"
import featuredEleven from "../../images/featuredEleven.jpg"
import featuredTwelve from "../../images/featuredTwelve.jpg"
import featuredThirteen from "../../images/featuredThirteen.jpg"
import featuredFourteen from "../../images/featuredFourteen.jpg"
import featuredFifteen from "../../images/featuredFifteen.jpg"

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=kolkata,mumbai,delhi,chennai,bangalore,hyderabad,ahmedabad,pune,surat,jaipur,kanpur,lucknow,nagpur,indore,patna"
  );

  const [width, setWidth] = useState(0);
  const carousal = useRef()
  useEffect(() => {
    setWidth(carousal.current.scrollWidth - carousal.current.offsetWidth);
  }, [])
  return (
    <div className="featuredBackgroundColor">
      <div className="left">
          <div className="heading1"><span>Places </span><span>We are Available in</span></div>
          <div className="divider"> </div> 
      </div> 
        
      <div className="featured">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <motion.div ref={carousal} className="carousel" whileTap={{cursor: "grabbing"}} >
              <motion.div drag="x" className="inner-carousal" dragConstraints={{right: 0, left: -(width+4350)}}>
                <div  className="featuredItem">
                  <img
                    src={featuredOne}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                    <div className="placeTitle">
                      <span>Kolkata</span>
                    </div>
                    <div className="properties">
                      <span>{data[0]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredTwo}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>mumbai</span>
                    </div>
                    <div className="properties">
                      <span>{data[1]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredThree}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>delhi</span>
                    </div>
                    <div className="properties">
                      <span>{data[2]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredFive}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>chennai</span>
                    </div>
                    <div className="properties">
                      <span>{data[3]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredFour}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>bangalore</span>
                    </div>
                    <div className="properties">
                      <span>{data[4]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredSix}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>hyderabad</span>
                    </div>
                    <div className="properties">
                      <span>{data[5]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredSeven}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>ahmedabad</span>
                    </div>
                    <div className="properties">
                      <span>{data[6]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredEight}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>pune</span>
                    </div>
                    <div className="properties">
                      <span>{data[7]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredNine}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>surat</span>
                    </div>
                    <div className="properties">
                      <span>{data[8]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredTen}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>jaipur</span>
                    </div>
                    <div className="properties">
                      <span>{data[9]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredEleven}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>kanpur</span>
                    </div>
                    <div className="properties">
                      <span>{data[10]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredTwelve}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>lucknow</span>
                    </div>
                    <div className="properties">
                      <span>{data[11]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredThirteen}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>nagpur</span>
                    </div>
                    <div className="properties">
                      <span>{data[12]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredFourteen}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>indore</span>
                    </div>
                    <div className="properties">
                      <span>{data[13]} properties</span>
                    </div>
                  </div>
                </div>
                <div className="featuredItem">
                  <img
                    src={featuredFifteen}
                    alt=""
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                  <div className="placeTitle">
                      <span>patna</span>
                    </div>
                    <div className="properties">
                      <span>{data[14]} properties</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>



            
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
