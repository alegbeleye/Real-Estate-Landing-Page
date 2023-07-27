import React, { useEffect, useState } from "react"
import Style from "./Landing.module.css"
import background from "../Assets/landingPageImg.jpg"
import background2 from "../Assets/landingPageImg3.jpg"
import background3 from "../Assets/landingPageImg4.jpg"
import background4 from "../Assets/landingPageImg5.jpg"

const LandingPage: React.FC = () => {
    const [display, setDisplay] = useState<number>(0)
    const [images, setImages] = useState<string[]>([background, background2, background3, background4])

    useEffect(()=>{
        setTimeout(():void=>{
            display+1 > images.length-1?setDisplay(0):setDisplay(display+1);
        }, 10000)
    })

    return (
        <div className={Style.background}>
            <div className={Style.back}></div>
            {images.map((val:string, idx:number)=>{
                return(
                    <img key={idx} style={{ display: display === idx?"":"none"}} src={val} className={Style.backgroundImage}/>
                )
            })}
            <div className={Style.pageContainer}>
                <nav className={Style.navBar}>
                    <div className={Style.navBarSection}>
                        <p className={Style.logo}>HOUSE.</p>
                    </div>
                    <div className={Style.navBarSection}>
                        <li className={Style.navComponent}><div className={Style.comp}>Home<div className={Style.navLoader}></div></div></li>
                        <li className={Style.navComponent}><div className={Style.comp}>Arks<div className={Style.navLoader}></div></div></li>
                        <li className={Style.navComponent}><div className={Style.comp}>About<div className={Style.navLoader}></div></div></li>
                        <li className={Style.navComponent}><div className={Style.comp}>Cases<div className={Style.navLoader}></div></div></li>
                        <li className={Style.navComponent}><div className={Style.comp}>Contact<div className={Style.navLoader}></div></div></li>
                    </div>
                    <div className={Style.navBarSection}>
                        <p className={Style.searchIcon}>⌕</p>
                    </div>
                </nav>
                <div className={Style.middleSection}>
                    <div className={Style.slideRef}>
                        <p className={Style.slideCount}>01</p>
                        <p className={Style.slideTotal}>/05</p>
                    </div>
                    <h1 className={Style.title}>Come to Winter.</h1>
                </div>
                <div className={Style.footerSection}>
                    <div className={Style.footer1}>
                        <p className={Style.footer1Head}>Award nomination for real estate.</p>
                        <p className={Style.footer1Body}>We got nominated Real-estate of the year 2019 trophy.</p>
                    </div>
                    <div className={Style.footer2}>
                        <div className={Style.footer2SubSec}>
                            <p className={Style.footer2Header}>01</p>
                            <p className={Style.footer2SubHead}>Our House</p>
                            <p className={Style.footer2Body}>Check our products</p>
                        </div>
                        <div className={Style.divider} />
                        <div className={Style.footer2SubSec}>
                            <p className={Style.footer2Header}>02</p>
                            <p className={Style.footer2SubHead}>Cases</p>
                            <p className={Style.footer2Body}>Real life examples</p>
                        </div>
                        <div className={Style.divider} />
                        <div className={Style.footer2SubSec}>
                            <p className={Style.footer2Header}>03</p>
                            <p className={Style.footer2SubHead}>Reviews</p>
                            <p className={Style.footer2Body}>Read all reveiews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage