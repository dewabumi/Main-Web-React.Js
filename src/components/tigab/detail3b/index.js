import React from 'react'

import { InfoContainer, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine, 
         Heading, 
         Subtitle, 
         ImgWrap,
         Img, 
         Fasilitas} from './InfoElements'

const Detail3b = ({lightBg,
                     id,
                     imgStart,
                     topLine,
                     lightText,
                     headLine,
                     darkText,
                     description,
                     img,
                     fasilitas,
                     alt
                    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <TopLine>{topLine}</TopLine>
                            <Fasilitas src={fasilitas} alt={alt} />
                            {/* <BtnWrap>
                                <Button to={{ pathname: "https://ganeshaoperation.com/daftarsmtganjil/" }} target="_blank"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1: 0}
                                >{buttonLabel}</Button>
                            </BtnWrap> */}
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Detail3b
