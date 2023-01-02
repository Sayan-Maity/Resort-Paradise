import React from 'react'
import "./offer.css"

const Service = () => {
  return (
    <>
    <div className="offer">
        <div className="overlayBackground">
            <div className="offerMain">
                <div className="left">
                    <div className="imgFrame">
                        {/* background image is there !! */}
                    </div>
                </div>
                <div className="right">
                    <div className="heading1">
                        <div className="align">
                            <span>Hot offer</span>
                            <div className="underline"></div> 
                        </div>
                    </div>
                    <div className="heading2"><span>GET 40% </span><span>DISCOUNT </span> <span> IN SUMMER VOCATIONS</span></div>
                    <div className="btn">
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service



