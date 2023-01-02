import React from 'react'
import "./resort.css"
import resortDemo from "../../images/resortDemo.jpg"

const Resort = () => {
  return (
    <>
    <div className="resort">
        <div className="resortMain">
            <div className="left">
                <div className="heading1"><span>Introduction </span><span>of resort</span></div>
                <div className="divider"></div>
                <div className="desc1"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptates.</span></div>
                <div className="heading2"><span>We are Available for business</span></div>
                <div className="desc2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus quasi veritatis dolorum adipisci quae impedit, perferendis a nemo, vel inventore quibusdam. Officiis alias, officia quod accusantium ea pariatur distinctio Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                <div className="btn"><button>More about Us</button></div>
            </div>
            <div className="right">
                <img src={resortDemo} alt="" />
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Resort