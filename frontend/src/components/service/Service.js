import React from 'react'
import "./service.css"
import { MdSecurity } from 'react-icons/md';
import { HiWifi } from 'react-icons/hi';
import { MdOutlineFastfood } from 'react-icons/md';
import { BsTruck } from 'react-icons/bs';

const Service = () => {
  return (
    <>
    <div className="services">
        <div className="overlayBackground">
            <div className="resortMain">
                <div className="left">
                    <div className="heading1"><span>Our </span><span>services</span></div>
                    <div className="divider"></div>
                    <div className="desc1"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptates.</span></div>
                    <div className="desc2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus quasi veritatis dolorum adipisci quae impedit, perferendis a nemo, vel inventore quibusdam. Officiis alias, officia quod accusantium ea pariatur </div>

                    <div className="serviceItem">
                        <div className="eachServiceItem">
                            <div className="icon">
                                <span className='iconLogo'><HiWifi /></span>
                            </div>
                            <div className="heading"><span>Free wifi</span> </div>
                                <div className="desc"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</span>
                            </div>
                        </div>
                        <div className="eachServiceItem">
                            <div className="icon">
                              <span className='iconLogo'><MdSecurity /></span>
                            </div>
                            <div className="heading"><span>security service</span> </div>
                                <div className="desc"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</span>
                            </div>
                        </div>
                        <div className="eachServiceItem">
                            <div className="icon">
                            <span className='iconLogo'><MdOutlineFastfood /></span>
                            </div>
                            <div className="heading"><span>free breakfast</span> </div>
                                <div className="desc"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</span>
                            </div>
                        </div>
                        <div className="eachServiceItem">
                            <div className="icon">
                            <span className='iconLogo'><BsTruck /></span>
                            </div>
                            <div className="heading"><span>pick & drop</span> </div>
                                <div className="desc"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service



