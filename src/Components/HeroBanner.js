import React, { useEffect } from 'react'
import Slider from "react-slick";
import img_usa from "../assets/images/herobanner/usa.png";
import img_kochi from "../assets/images/herobanner/kochi.png";
import img_fast from "../assets/images/herobanner/fast.png";

const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
};

const banner_data = [
    {
        "h1": "We Make Moving",
        "h2": "Fast and Easy",
        "desc_1":"Personal and Commercial",
        "desc_2":"Relocation Services",
    },
    {
        "h1": "2We Make Moving",
        "h2": "Fast and Easy",
        "desc_1":"Personal and Commercial",
        "desc_2":"Relocation Services",
    },
    {
        "h1": "3We Make Moving",
        "h2": "Fast and Easy",
        "desc_1":"Personal and Commercial",
        "desc_2":"Relocation Services",
    },
]



function HeroBanner() {
    const [slider, setSlider] = React.useState(null);

    useEffect(() => {
        let banner = 0;
        setTimeout(() => {
            if(banner === 1) {
                banner = 0;
            }
            banner = banner + 1;
            setSlider(banner);
            
        }
        , 1000);


    } , []);


    return (
        // <div>
        //     <Slider {...settings}>
        //         <div>
        //             <img src={img_usa} />
        //         </div>
        //         <div>
        //             <img src={img_kochi} />
        //         </div>
        //         <div>
        //             <img src={img_fast} />
        //         </div>
        //     </Slider>
        // </div>
        <div className="hero-banner">
        <div className='hero-banner-left'>
            <h1>We Make Moving</h1>
            <h1>Fast and Easy</h1>
            <h6>Personal and Commercial</h6>
            <h6>Relocation Services</h6>
            <button >Contact Us</button>
        </div>
       

        <div className='hero-banner-right'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{
                        position:'relative'
                        }}>
                        <img src={img_usa} className="d-block xw-100 banner_image" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={img_kochi} className="d-block xw-100 banner_image" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={img_fast} className="d-block xw-100 banner_image" alt="..." />
                        
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
        </div>
    )
}

export default HeroBanner