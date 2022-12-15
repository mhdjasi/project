import React from 'react'
import { Link } from 'react-router-dom'
// import img_labour from "../assets/images/misc/Group 973.png"

// import img_building from "../assets/images/misc/Group 971.png"


function TwoColumOne({ page, heading01, heading02, desc, button }) {
    return (

        <div className="xsection row p-0 align-items-stretch dark topmargin-sm rev-direction"
            style={{
                height: 'auto',
                marginBottom: '5%',
            }} >
            <div className="col-lg-6"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <div style={{ width: '80%', }}>
                    {page === 'home' && <>
                        <img src={"images/misc/Group 971.png"} height="100" />
                        <div className='banner_font color-secondary'>The Best <span className='banner_font  color-primary-medium'> Moving</span> </div>
                        <div className='banner_font color-secondary'>Company in the </div>
                        <div className='banner_font color-primary-medium'>Kingdom</div>
                        <div className='color-primary-medium banner_font_medium mt-4' style={{ maxWidth: '280px', }}>Connecting international boundaries for door to door cargo services from Saudi Arabia</div>
                        <Link to="/contact-us" className='btn-contact-us  btnprimary mt-4'>
                            <span>
                                Contact Us
                            </span>
                        </Link>
                    </>}

                    {page === 'get-quote' && <>
                        <Quoteform />
                    </>}

                    {page === 'contact-us' && <>

                        <div className='banner_font  color-primary-medium'>{heading01} </div>
                        <div className='banner_font color-secondary'>{heading02}</div>
                        <div className='banner_font color-primary-medium'></div>
                        <div className='color-primary-medium banner_font_medium mt-4 '>{desc}</div>
                        {button &&
                            <button className='btn btnprimary  mt-4'>{button.text}</button>
                        }
                        <Contactform />
                    </>}

                    {page === 'country-guide' && <>

                        <div className='banner_font  color-primary-medium'>{heading01} </div>
                        <div className='banner_font color-secondary'>{heading02}</div>
                        <div className='banner_font color-primary-medium'></div>
                        <div className='color-primary-medium banner_font_medium mt-4 '>{desc}</div>
                        {button &&
                            <button className='btn btnprimary  mt-4'>{button.text}</button>
                        }
                    </>}
                    {page === 'about' && <>

                        <div className='banner_font  color-primary-medium'>{heading01} </div>
                        <div className='banner_font color-secondary'>{heading02}</div>
                        <div className='banner_font color-primary-medium'></div>
                        <div className='color-primary-medium banner_font_medium mt-4 '>{desc}</div>
                        {button &&
                            <button className='btn btnprimary  mt-4'>{button.text}</button>
                        }
                    </>}
                    {page === 'services' && <>

                        <div className='banner_font  color-primary-medium'>{heading01} </div>
                        <div className='banner_font color-secondary'>{heading02}</div>
                        <div className='banner_font color-primary-medium'></div>
                        <div className='color-primary-medium banner_font_medium mt-4 '>{desc}</div>
                        {button &&
                            <button className='btn btnprimary  mt-4'>{button.text}</button>
                        }
                    </>}

                    {page === 'single-service' && <>

                        <div className='banner_font  color-primary-medium'>{heading01} </div>
                        <div className='banner_font color-secondary'>{heading02}</div>
                        <div className='banner_font color-primary-medium'></div>
                        <div className='color-primary-medium banner_font_medium mt-4 '>{desc}</div>

                        {button &&
                            <button className='btn btnprimary  mt-4'>{button.text}</button>
                        }
                    </>}




                </div>
            </div>

            {page === 'home' ? <>
                <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                    style={{
                        // height: '70vh',
                        background: `url("images/misc/Group 973.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                    }}
                >

                    <div className="form-widget col-padding" data-loader="button">
                    </div>
                </div>

            </> : <>


                {page === 'get-quote' && <>

                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            background: `url("images/misc/GET A QOUTE.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                        }}
                    >

                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </>}

                {page === 'services' && <>

                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            backgroundColor: 'red',

                            background: `url("images/misc/SERVICES.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                        }}
                    >

                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </>}

                {page === 'single-service' && <>

                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            backgroundColor: 'green',
                            background: `url("/images/misc/COMPANY.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                        }}
                    >
                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </>}



                {page === 'about' && <>

                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            background: `url("images/misc/COMPANY.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                        }}
                    >

                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </>}

                {page === 'country-guide' && <>

                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            background: `url("images/misc/COMPANY.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                        }}
                    >

                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </>}

                {page === 'contact-us' && <>
                    <div id="xbooking-appointment-form" className="col-lg-6 p-0"
                        style={{
                            height: '70vh',
                            background: `url("images/misc/CONTACT US.png") center center no-repeat`, backgroundSize: 'contain', minHeight: 250,
                        }}
                    >
                        <div className="form-widget col-padding" data-loader="button">
                        </div>
                    </div>
                </>}
            </>}
        </div >
    )
}

export default TwoColumOne

function Quoteform() {

    return (
        <div className="content-wrap" style={{ overflow: 'visible' }}>
            <div className="container clearfix d-flex justify-content-center">
                <div className="row col-mb-50 mb-0 xbg-primary" style={{
                    // marginTop: '-364px',
                    color: 'white',
                    zIndex: '10000',
                }} >

                    <div className="heading-large ">
                        <span className='color-primary-medium'>Get a </span>
                        <span className='color-secondary'>Quote</span>

                    </div>

                    <div className='col-sm-12 col-lg-12 '
                        style={{
                            borderRadius: '20px 20px 20px 20px',
                            padding: '30px'
                        }}
                    >
                        <div class="form-heading">Personal Details</div>

                        <div className="input-group mb-2  mt-2">
                            <input type="text" className="form-control-1" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control-1" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control-1" placeholder="E-Mail" aria-label="E-Mail" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control-1" placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="basic-addon1" />
                        </div>
                        <hr />
                        <hr />
                        <hr />


                        <div class="form-heading">Moving From (Origin)</div>

                        <div className="input-group mb-2 mt-2">
                            <input type="text" className="form-control-1 " placeholder="Country/Territory" aria-label="Country/Territory" />
                            <input type="text" className="form-control-1" placeholder="City/Town/Localityy" aria-label="City/Town/Locality" />
                        </div>
                        <hr />

                        <div class="form-heading">Moving To (Destination)</div>
                        <div className="input-group mb-2 mt-2">
                            <input type="text" className="form-control-1 " placeholder="Country/Territory" aria-label="Country/Territory" />
                            <input type="text" className="form-control-1" placeholder="City/Town/Locality" aria-label="City/Town/Locality" />
                        </div>
                        <hr />

                        <div class="form-heading">Who is Moving </div>
                        <div className="input-group mb-2 mt-2">
                            <input type="text" className="form-control-1 " placeholder="No.of Adults" aria-label="No.of Adults" />
                            <input type="text" className="form-control-1" placeholder="No.of Kids" aria-label="No.of Kids" />
                        </div>
                        <hr />


                        <div class="form-heading">Why are you Moving </div>
                        <div className="input-group mb-2 mt-2">
                            <input type="text" className="form-control-1 " placeholder="eg: Family Reasons" aria-label="eg: Family Reasons" />
                        </div>
                        <hr />

                        <div class="form-heading">What are you Moving </div>
                        <div className="input-group mb-2 mt-2">
                            <input type="text" className="form-control-1" placeholder="eg: 1-2 Bedroom Home" aria-label="eg: 1-2 Bedroom Home" />
                        </div>
                        <hr />



                        <div class="form-heading">Pick up Date </div>
                        <div className="input-group mb-2  mt-2 ">
                            <input type="text" className="form-control-1" placeholder="Pick a Date" aria-label="Pick a Date" aria-describedby="basic-addon1" />
                        </div>
                        <hr />

                        <div class="form-heading">Convenient time to call back?</div>
                        <div className="input-group mb-2  mt-2">
                            <input type="text" className="form-control-1" placeholder="Select a time slot " aria-label="Select a time slot " aria-describedby="basic-addon1" />
                        </div>
                        <hr />

                        <div className="input-group mb-2">
                            <button className='btn btnprimary'

                            >Get a Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

function Contactform() {

    return (
        <div className="content-wrap" style={{ overflow: 'visible' }}>
            <div className="container clearfix">
                <div className="row col-mb-50 mb-0 xbg-primary" style={{
                    // marginTop: '-364px',
                    color: 'white',
                    zIndex: '10000',
                }} >

                    <div className='col-sm-12 col-lg-12 '
                        style={{
                            borderRadius: '20px 20px 20px 20px',
                            padding: '30px 0'
                        }}
                    >

                        {/* <div class="form-heading">Moving From (Origin)</div> */}

                        <div className="input-group mb-3 row" >
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control-1 " placeholder="First Name" aria-label="First Name" />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control-1" placeholder="Last Name" aria-label="Last Name" />
                            </div>

                        </div>
                        {/* 
                        <div class="form-heading">Moving To (Destination)</div> */}
                        <div className="input-group mb-3 row" >
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control-1 " placeholder="E-mail" aria-label="E-mail" />
                            </div>

                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control-1" placeholder="Mobile Number" aria-label="Mobile Number" />
                            </div>
                        </div>

                        <div className="input-group mb-3 row row">
                            <div className="col-12">
                                <input type="text" className="form-control-1 " placeholder="Tell us more about your" aria-label="No.of Adults" style={{ minWidth: '100%', minHeight: "100px" }} />
                            </div>

                        </div>

                        <div className="input-group mb-3">
                            <button className='btn btnprimary'
                                style={{ height: "40px", marginLeft: '5px', borderRadius: '5px' }}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*




*/

