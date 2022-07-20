import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaFax, FaPhone, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
	Wrapper, Row, Column, Title, Tautan,
	Subscription,AppLogo,AppIcon,SubHeading,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<SocialLogo to="/">
					<SocialIcon src="./images/logo.png" />
				</SocialLogo>
				<FooterSubHeading>Bimbel Terbaik dan Terbesar Se-Indonesia</FooterSubHeading>
			</FooterSubscription>
			<Wrapper>
			<Row>
			<Column>
			<Subscription>
				<AppLogo to="/">
					<AppIcon src="images/google play.png" />
				</AppLogo>
				<AppLogo to="/">
					<AppIcon src="images/appstore.png" />
				</AppLogo>
				<SubHeading>Download juga GO Kreasi. Kini sudah tersedia di Playstore dan App store.</SubHeading>
				<Title>Keamanan Belanja</Title>
				<SocialIcon src="./images/belanja.png" />
			</Subscription>
			</Column>
			<Column>
                <Title>Hubungi Kami</Title>
                    <Tautan href="https://ganeshaoperation.com/kontak.html"><FaPhone /> (022)4218177</Tautan>
                    <Tautan href="https://mail.google.com/mail/u/0/?fs=1&to=officialgopusat@gmail.com&su=Tanya+minGO&tf=cm"><FaMailBulk /> officialgopusat@gmail.com</Tautan>
                    <Tautan href="https://api.whatsapp.com/send?phone=628112468988&text=&source=&data="><FaWhatsapp /> +62 811-2468-988</Tautan>
                    <Tautan href="https://ganeshaoperation.com/kontak.html"><FaFax /> 4209308</Tautan>
            </Column>
			<Column>
                <Title>Info Lebih Lanjut</Title>
                    <Tautan href="https://ganeshaoperation.com/faq.html">FAQ</Tautan>
                    <Tautan href="https://ganeshaoperation.com/kontak.html">Kontak</Tautan>
                    <Tautan href="https://ganeshaoperation.com/term.html">Terms and Condition</Tautan>
                    <Tautan href="https://ganeshaoperation.com/privacy.html">Privacy and Policy</Tautan>
                    <Tautan href="https://ganeshaoperation.com/refund.html">Refund Policy</Tautan>
            </Column>
			</Row>
			</Wrapper>
			<SocialMedia>
				<SocialMediaWrap>
					<WebsiteRights>© Copyright 2022, Ganesha Operation. All Rights Reserved</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="https://id-id.facebook.com/ganesha.operation.official/" target="blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="https://www.instagram.com/officialganeshaoperation/" target="blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href="https://twitter.com/officialgopusat" target="blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="https://www.youtube.com/c/GaneshaOperationOfficial/videos" target="blank" aria-label="Youtube">
							<FaYoutube />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
