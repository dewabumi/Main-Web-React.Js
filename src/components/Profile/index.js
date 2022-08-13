import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import {
  ProfileContainer,
  ProfileWrap,
  SocialIcons,
  SocialLogo,
  ProfileDetails,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  Subtitle,
} from './ProfileElements';
import Typical from 'react-typical';

const Profile = () => {
  return (
    <>
      <ProfileContainer id="about">
        <ProfileWrap>
          <SocialLogo to="/">About Us</SocialLogo>
          <ProfileDetails>
            <h1>
              {' '}
              <Typical
                loop={Infinity}
                steps={[
                  'Bimbingan Belajar Terbaik dan Terbesar Se-Indonesia',
                  4000,
                  'Telah Meluluskan 45.000 Lebih Siswa ke PTN & Kedinasan Impian di Tahun 2022',
                  4000,
                  'Menerapkan Konsep 3B, Yaitu : Belajar, Berlatih, Bertanding',
                  4000,
                  'Memiliki Konsep The King, Membantu Menyelesaikan Soal Lebih Tepat dan Cepat',
                  4000,
                  'Fasilitas Tutorial Service Time (TST) Untuk Belajar Tambahan di Luar KBM',
                  4000,
                  'Pengajar Ramah dan Akrab',
                  4000,
                ]}
              />
            </h1>
          </ProfileDetails>
          <Subtitle>
            Bimbel Ganesha Operation merupakan lembaga bimbingan
            belajar terbaik dan terbesar di Indonesia. Berdiri sejak 2
            Mei 1984 di Kota Bandung, saat ini Ganesha Operation telah
            tersebar di 245 kota di Indonesia, mulai dari Aceh hingga
            Ambon.
          </Subtitle>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink
                  href="https://id-id.facebook.com/ganesha.operation.official/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/officialganeshaoperation/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://twitter.com/officialgopusat"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="https://api.whatsapp.com/send?phone=628112468988&text=&source=&data="
                  target="_blank"
                  aria-label="Whatsapp"
                >
                  <FaWhatsapp />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.youtube.com/c/GaneshaOperationOfficial/videos"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </ProfileWrap>
      </ProfileContainer>
    </>
  );
};

export default Profile;
