import React from 'react'
// import iam from '../assets/images/ribbon-banners/IAM_wTag-W_blue_logo.png'
import iam from '../assets/images/ribbon-banners/membership.png'
import others from '../assets/images/ribbon-banners/membership2.png'

function RibbonBanner() {
    return (
        <div className="xsection mt-0 xbg-primary-color-light"
            style={{ backgroundColor: "#b8dde9" }}
        >
            <div className="container clearfix">
                <div className="row" style={{}}>
                    <div className="col-lg-6 col-md-6" style={{ height: '200px', flex: 1 }}>
                        <div className="d-flex justify-content-start align-items-center"
                            style={{
                                height: '100%',
                            }} >
                            <div className="counter_font "
                                // d-flex justify d-flex justify-content-start align-items-center
                                style={{
                                    fontSize: '39px',
                                }} >
                                <span className='color-secondary banner_font'>Our Memberships &</span>
                                <br />
                                <span className='color-primary banner_font'>Affliations</span>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" style={{
                        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        backgroundImage: "url("
                            + iam +
                            // +"https://s3.amazonaws.com/rdcms-iam/files/production/public/images/IAM_wTag-W_blue_logo.png"+
                            ")"
                    }}>
                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                            <div className="fbox-content">
                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6" style={{
                        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        backgroundImage: "url("
                            + others +
                            // +"https://s3.amazonaws.com/rdcms-iam/files/production/public/images/IAM_wTag-W_blue_logo.png"+
                            ")"
                    }}>
                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                            <div className="fbox-content">
                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-6" style={{ backgroundColor: "yellow" }}>
                        <div className="feature-box fbox-outline fbox-dark fbox-effect clearfix">
                            <div className="fbox-content">
                                <div className="d-block d-md-block d-lg-none bottommargin" />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default RibbonBanner