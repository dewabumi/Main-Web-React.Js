import React from 'react';
import './Gokre.css';

const Gokre = () => {
    return (
        <div className='hero'>
            <div className='containergokre'>
                {/* Left Side */}
                <div className='left'>
                <div className='img-gokre'>
                        <img src='images/gokre.svg' alt='faq'/>
                </div>
                </div>

                {/* Right Side */}
                <div className='right'>
                    <h1>Belajar di mana saja dengan GO Kreasi!</h1>
                    <p>Download Aplikasi GO Kreasi Sekarang</p>
                    <div className='img-download'>
                    <a href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasi&hl=in&gl=US">
                        <img src='images/google play.png' alt='googleplay'/>
                    </a>
                    <a href="https://apps.apple.com/id/app/gokreasi/id1478372788">
                        <img src='images/appstore.png' alt='appstore'/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gokre