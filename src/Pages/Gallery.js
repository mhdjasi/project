import React from 'react'
import Header from '../Components/Header'
import QuestionBanner from '../Components/QuestionBanner'
import RibbonBannerMembership from '../Components/RibbonBannerMembership'
import RibbonBanner from '../Components/RibbonBanner'
import Topbar from '../Components/Topbar'
import TwoColumOne from '../Components/TwoColumOne'
import goodluck_img from '../assets/images/misc/footer card.png'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import Footer from '../Components/Footer'
import FooterBanner from '../Components/FooterBanner'
import ServiceList from '../Components/Services'

import gallery1 from '../assets/images/gallery/servises page.png'
import gallery2 from '../assets/images/gallery/1 (4).jpg'
import gallery3 from '../assets/images/gallery/1 (5).jpg'
import gallery4 from '../assets/images/gallery/1 (1).jpg'
import gallery5 from '../assets/images/gallery/1 (2).jpg'
import gallery6 from '../assets/images/gallery/Rectangle 174-1.png'
import gallery7 from '../assets/images/gallery/1 (6).jpg'
import gallery8 from '../assets/images/gallery/1 (3).jpg'
import gallery9 from '../assets/images/gallery/Rectangle 174.png'


const h1 = "600px"
const w1 = "600px"

const h2 = "290px"
const w2 = "300px"

function Gallery() {
    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />

                <div style={{ height: "50px" }} />

                <GalleryWeb />

                <GalleryMobile />

                <div style={{ height: "50px" }} />

                <FooterBanner />
                <Footer />
                <div className="position-fixed  bottom-0 end-0 whatsapp-icon" >
                    <img className='rounded' src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div >
            {/* end */}
        </div >
    )
}

export default Gallery


const GalleryWeb = () => {
    return (
        <div class="container gallery-webview">
            <div class="row" style={{ height: 'auto' }}>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2 ">
                    <div style={{ height: "auto", }}>
                        {/* <img className='rounded' src="https://picsum.photos/400/600" alt="" /> */}
                        <img className='rounded' src={gallery1} alt="" style={{ height: h1, width: w1 }} />
                    </div>
                </div>
                <div class="col-sm d-flex justify-content-between align-items-center flex-column m-2">
                    <div>
                        <img className='rounded' src={gallery2} style={{ height: h2, width: w2 }} alt="" />
                        {/* <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} /> */}

                    </div>
                    <div>
                        <img className='rounded' src={gallery3} alt="" style={{ height: h2, width: w2 }} />
                    </div>
                </div>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src={gallery4} style={{ height: h1, width: w1 }} alt="" />
                    </div>
                </div>
            </div>
            <div class="row" style={{ height: 'auto' }}>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2 ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src={gallery5} alt="" style={{ height: h1, width: w1 }} />
                    </div>
                </div>
                <div class="col-sm d-flex justify-content-between align-items-center flex-column m-2">
                    <div>
                        <img className='rounded' src={gallery6} alt="" style={{ height: h2, width: w2 }} />
                    </div>
                    <div>
                        <img className='rounded' src={gallery7} alt="" style={{ height: h2, width: w2 }} />
                    </div>
                </div>
                <div class="col-sm  d-flex justify-content-center align-items-center m-2">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src={gallery8} alt="" style={{ height: h1, width: w1 }} />
                    </div>
                </div>
            </div>
        </div>
    )

}

const GalleryMobile = () => {
    return (
        <div class="container gallery-mobileview" style={{ height: 'auto' }}>
            <div class="row ">
                <div class="col-6  d-flex justify-content-center align-items-center ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/800" alt="" />
                    </div>
                </div>
                <div class="col-6 d-flex justify-content-between align-items-center flex-column">
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                </div>
            </div>
            <div style={{ height: '20px' }} />
            <div class="row ">
                <div class="col-6 d-flex justify-content-between align-items-center flex-column">
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                    <div>
                        <img className='rounded' src="https://picsum.photos/300/290" alt="" style={{}} />
                    </div>
                </div>
                <div class="col-6  d-flex justify-content-center align-items-center ">
                    <div style={{ height: "auto", }}>
                        <img className='rounded' src="https://picsum.photos/400/800" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}