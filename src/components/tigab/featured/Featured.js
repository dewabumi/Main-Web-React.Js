import React from 'react'

import './Featured.css';

import Satu from '../../../icons/satu.png';
import Dua from '../../../icons/dua.png';
import Tiga from '../../../icons/tiga.png';
import Empat from '../../../icons/empat.png';
import Lima from '../../../icons/lima.png';
import Enam from '../../../icons/enam.png';
import Tujuh from '../../../icons/tujuh.png';


const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Dapat apa aja di Ganesha Operation ?</h1>
            <p className='featured-text'>Fasilitas terbaik yang membantu kamu mencapai target</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Satu} alt='' />
                <img src={Lima} alt='' />
                <img src={Dua} alt='' />
                <img src={Tiga} alt='' />
                <img src={Empat} alt='' />
                <img src={Enam} alt='' />
                <img src={Tujuh} alt='' />
            </div>
            <div className='featuredbutton' onClick={()=> window.open("https://ganeshaoperation.com/whyus.html", "_blank")}> Lihat Fasilitas Lengkap </div>
        </div>
    )
}

export default Featured
