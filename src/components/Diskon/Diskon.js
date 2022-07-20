import React from 'react';
import './Diskon.css';
import Diskonitem from './Diskonitem';
/* import CountdownTimer from '../CountdownTimer/CountdownTimer'; */
import { CgArrowLongRight } from "react-icons/cg";

const style = { color: "#F5BB34", fontSize: "1.5em", position: 'relative', top: "6px"}

function Diskon() {
  return (
    <div className='cards' id="diskon">
      <h1>Cek diskon terbaru kami!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
       {/*  <CountdownTimer
        countdownTimestampMs={1656608399000} />
          <ul className='cards__items'>
            <Diskonitem
              src='images/Diskon/menu.png'
              text='Daftar sekarang juga karena kuota terbatas!'
              label='Super Sale'
              path='/diskonlengkap'
            />
          </ul> */}
          <ul className='cards__items'>
            <Diskonitem
              src='images/Diskon/diskon3.png'
              text='Diskon ini berlaku sepanjang Tahun Pelajaran.'
              label='Diskon'
              path='/diskonlengkap'
            />
            <Diskonitem
              src='images/Diskon/diskon5.png'
              text='Diskon ini berlaku hanya di bulan Juni 2022.'
              label='Diskon'
              path='/diskonlengkap'
            />
            <Diskonitem
              src='images/Diskon/diskon4.png'
              text='Diskon ini berlaku hanya di bulan Juni 2022.'
              label='Diskon'
              path='/diskonlengkap'
            />
          </ul>
          <div className='Tautan'>
            <a href="https://ganeshaoperation.com/diskon.html">Lihat Semua Diskon <CgArrowLongRight style={style} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diskon;