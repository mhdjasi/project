import React, { useState } from 'react'
import Caurousel from './Caurousel'
import Footer from './Footer'
import Header from './Header'
import RibbonBanner from './RibbonBanner'
import RibbonBannerMembership from './RibbonBannerMembership'
import Services from './Services'
import Topbar from './Topbar'
import TwoColumOne from './TwoColumOne'
import whatsapp_icon from '../assets/images/icons/whatsapp.png'
import QuestionBanner from './QuestionBanner'
import FooterBanner from './FooterBanner'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Modal from './Modal'


function HomePage() {
    const formRef = useRef(null)
    const [heading01, setHeading01] = React.useState('More than just a')
    const [heading02, setHeading02] = React.useState('Moving')
    const [desc, setDesc] = React.useState('Moving company that goes beyond simple relocation by ensuring quality services and reliability of our customers.')
    const [button, setButton] = React.useState({
        text: 'Contact Us',
        link: '/country-guide'
    })
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        moving_from: '',
        moving_to: '',
        moving_date: ''
    })
    const [ModalData, setModalData] = useState({ isopen: false, title: '', content: '', buttonName: '' })
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSubmit = (e) => {




        e.preventDefault();
// alert('modal')

        // return
        emailjs.sendForm('service_bx9hiz8', 'template_2jygg49', formRef.current, '8LlEbwdzoBwdBdcbW')
            .then((result) => {
                console.log(result.text);
                // setModalData(prev => ({ ...prev, isopen: true, title: 'Thank You! We’ll be in touch soon!', content: 'We’ve received your request for a quote. You will receive a response from our executive shortly.  ', buttonName: 'OK' }))

            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            {/* begin */}
            <div>
                <Topbar />
                <Header />
                <Caurousel />
                <section id="content">
                    <div className="content-wrap" style={{ overflow: 'visible' }}>
                        <div className="container clearfix quote-box" >
                            <div className="row col-mb-50 mb-0 xbg-primary" style={{
                                marginTop: '-380px',
                                color: 'white',
                                zIndex: '10000',
                            }} >
                                <div className='col-sm-6 col-lg-8 home-contact contact-details' style={{
                                    height: 'auto',
                                    margin: '0px -14px 6px -24px;',
                                }} >
                                    <div
                                        style={{
                                            display: 'flex',
                                            backgroundColor: 'red',
                                            // margin: '-12px',
                                            height: "80px",
                                            width: '400px',
                                        }}
                                    >


                                        <div className='bgsecondary d-flex align-items-center flex-grow-1'>
                                            <div>
                                                <i className="fa fa-envelope p-2" aria-hidden="true"></i>
                                            </div>
                                            <div className='p-2'>
                                                <span>Mail us</span><br />
                                                <span>info@cargotrack.co</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center flex-grow-1'
                                            style={{
                                                backgroundColor: 'rgb(2,112,155)',
                                            }}
                                        >
                                            <div>
                                                <i className="fa fa-phone p-2" aria-hidden="true"></i>
                                            </div>
                                            <div className='p-2'>
                                                <span>Call us</span><br />
                                                <span>+966569177864</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form className='col-sm-6 col-lg-3 '
                                    ref={formRef}
                                    style={{
                                        minWidth: "350px",
                                        backgroundColor: 'rgb(48,150,190,0.8)',
                                        borderRadius: '20px 20px 20px 20px',
                                        padding: '30px'
                                    }}
                                >
                                    <div className='d-flex justify-content-center align-items-center col-12 '>Get a Free Moving Quote</div>

                                    <div className="input-group mb-2  mt-1">

                                        <input name='moving_from' onChange={handleChange} value={FormData.moving_from} type="text" className="form-control" placeholder="Moving from" aria-label="moving-from" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-2">

                                        <input name='moving_to' onChange={handleChange} value={FormData.moving_to} type="text" className="form-control" placeholder="Moving to" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>


                                    <div className="input-group mb-2">
                                        <input name='moving_date' onChange={handleChange} value={FormData.moving_date} type="date" className="form-control " style={{ marginRight: '5px', borderRadius: '5px' }} placeholder="Moving date" aria-label="Username" />

                                        <input name='name' onChange={handleChange} value={FormData.name} type="text" className="form-control" style={{ marginLeft: '5px', borderRadius: '5px' }} placeholder="Name" aria-label="Server" />
                                    </div>

                                    <div className="input-group mb-2">

                                        <input name='email' onChange={handleChange} value={FormData.email} type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className="input-group mb-2">
                                        <input name='phone' onChange={handleChange} value={FormData.phone} type="number" className="form-control" placeholder="Mobile No" aria-label="Mobile No" style={{ marginRight: '5px', borderRadius: '5px' }} />

                                        {/* <input type="text" className="form-control" placeholder="Server" aria-label="Server" /> */}
                                        <button disabled={!FormData.phone} onClick={handleSubmit} className='btn btnprimary'
                                            style={{ width: '50%', height: "40px", marginLeft: '5px', borderRadius: '5px' }}
                                        >Get a Quote</button>
                                        {/* <button className='btn btnprimary' placeholder=''
                                            style={{ width: '50%', height: "40px", marginLeft: '5px', borderRadius: '5px' }}

                                        >Get a Quote</button> */}
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <TwoColumOne page="home" />
                <QuestionBanner />
                {/* <RibbonBannerMembership /> */}
                {/* <RibbonBanner /> */}
                <Services type="" name1="Our " name2="Services" see_all_btn={true} page={"home"} />

                <RibbonBannerMembership />
                <div style={{ height: '100px' }} />
                <Services type="customer" name1="Customer " name2="Feedback"  see_all_btn={false} />
                <FooterBanner />
                <Footer />
                            </div >


            {ModalData.isopen &&
                <Modal content={ModalData.content} title={ModalData.title} buttonName={ModalData.buttonName} isOpen={ModalData.isopen} onClose={() => setModalData(prev => ({ ...prev, isopen: false }))} />
            }


            {/* end */}
        </div >
    )
}

export default HomePage