import React from 'react'
import icon1 from '../../icons/blog1.png'
import icon2 from '../../icons/blog2.png'
import icon3 from '../../icons/blog3.png'
import { CgArrowLongRight } from "react-icons/cg"
import { ServicesContainer,
         ServicesH1,
         ServicesWrapper,
         ServicesCard,
         ServicesH2,
         ServicesIcons,
         ServicesP, TautanBlog, style} from './ServicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id="Blog">
            <ServicesH1>Artikel Kami</ServicesH1>
                <TautanBlog>
                    <a href="https://blog.ganeshaoperation.com/">Lihat Artikel Lainnya <CgArrowLongRight style={style} /></a>
                </TautanBlog>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcons src={icon1} />
                        <ServicesH2>UDAH SIAP ANBK 2021? INI DIA JENIS SOAL DAN PENJELASANNYA!!!</ServicesH2>
                        <ServicesP>Jadi, dari hasil asesmen nantinya bisa sebagai bahan informasi untuk guru dalam menyiapkan metode dan perangkat pembelajaran sesuai kebutuhan ...</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcons src={icon2} />
                        <ServicesH2>REVIEW LES DI GO – PRA TRY OUT DAN TRY OUT</ServicesH2>
                        <ServicesP>Di GO kamu bakal dapetin suasana try out seperti ujian yang sesungguhnya dengan tipe dan tingkat kesulitan soal yang relevan dengan ujian kamu.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcons src={icon3} />
                        <ServicesH2>REVIEW LES DI GO – LATIHAN MANDIRI</ServicesH2>
                        <ServicesP>Belajar sama pengajar gak cukup. Yes. Latihan sampai kamu terbiasa juga penting. Ini juga difasilitasin sama GO, tinggal inisiatif kamunya aja.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
