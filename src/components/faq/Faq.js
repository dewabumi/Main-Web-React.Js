import React from 'react';
import './Faq.css';
import Accordion from './Accordion/Accordion';

const Faq = () => {
    return (
        <div className='hero' id="faq">
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                <h1 className='judul'>Tanya Jawab</h1>
                <div className='img-container'>
                        <img src='images/faq.svg' alt='faq'/>
                    </div>
                </div>

                {/* Right Side */}
                <div className='right'>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Faq