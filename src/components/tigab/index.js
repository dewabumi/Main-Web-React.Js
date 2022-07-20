import React from 'react'
import icon1 from '../../icons/belajar.svg'
import icon2 from '../../icons/berlatih.svg'
import icon3 from '../../icons/bertanding.svg'
import Featured from './featured/Featured';
import { Link } from 'react-router-dom';
import { ServicesContainer,
         ServicesH1,
         ServicesWrapper,
         ServicesCard,
         ServicesH2,
         ServicesIcons,
         TigaButton,
         ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <Featured />
            <ServicesH1>Bagaimana Kami Membantumu untuk Mencapai Target?</ServicesH1>
                <ServicesWrapper>
                <Link to="/belajar" style={{textDecoration: 'none', color: 'black'}}>
                    <ServicesCard>
                        <ServicesIcons src={icon1} />
                        <ServicesH2>Belajar</ServicesH2>
                        <ServicesP>Pahami teori dan konsepnya setiap belajar di kelas. Kalau masih bingung, Ada Tutorial Service Time (TST) untuk belajar tambahan diluar KBM.</ServicesP>
                    </ServicesCard>
                </Link>
                <Link to="/berlatih" style={{textDecoration: 'none', color: 'black'}}>
                    <ServicesCard>
                        <ServicesIcons src={icon2} />
                        <ServicesH2>Berlatih</ServicesH2>
                        <ServicesP>Sel-sel otakmu perlu dilatih untuk mengerjakan soal-soal yang memiliki tingkat kesulitan setara dengan ujianmu. Untuk itu, ada Buku Sakti dan Empati yang siap membantu.</ServicesP>
                    </ServicesCard>
                </Link>
                <Link to="/bertanding" style={{textDecoration: 'none', color: 'black'}}>
                    <ServicesCard>
                        <ServicesIcons src={icon3} />
                        <ServicesH2>Bertanding</ServicesH2>
                        <ServicesP>Setelah berlatih, saatnya menguji sudah seberapa jauh progress belajarmu dengan TOBK (Try Out Berbasis Komputer) dan juga EPB (Evaluasi Prestasi Belajar).</ServicesP>
                    </ServicesCard>
                </Link>
                </ServicesWrapper>
            <Link  to="/penjelasan" style={{textDecoration: 'none', color: 'black'}}>
            <TigaButton>
				Lihat Detail
			</TigaButton>
            </Link>
        </ServicesContainer>
        </>
    )
}

export default Services
