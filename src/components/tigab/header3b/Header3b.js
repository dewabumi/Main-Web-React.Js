import React from 'react';
import './Header3b.css';

const Header3b = () => {
    return (
        <div className='hero'>
            <div className='containerheader3b'>
                {/* Left Side */}
                <div className='left'>
                <div className='img-header3b'>
                        <img src='images/target.png' alt='faq'/>
                </div>
                </div>

                {/* Right Side */}
                <div className='right'>
                    <h1>Bagaimana cara Ganesha Operation membantumu untuk mencapai target?</h1>
                    <p>Kami merupakan learning center yang memiliki metode 3B yaitu belajar, berlatih dan bertanding. Ketiga metode inilah yang akan membantumu untuk berhasil mencapai targetmu.</p>
                </div>
            </div>
        </div>
    )
}

export default Header3b