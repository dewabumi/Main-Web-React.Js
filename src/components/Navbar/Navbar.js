import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	Navigate
} from './NavbarStyles';
import { navbarData } from '../../data/NavbarData';
import Modal2 from '../Modal/Modal2';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [showModal2, setShowModal2]= useState(false);
	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (id) => {
		scrollTo(id);

		setShow(false);
	};

	const toggleModal2 = () => {
		if (!showModal2) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal2(!showModal2);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./images/logo.png" alt="" />
					</NavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{navbarData.map((el, index) => (
							<NavItem key={index}>
								<NavLinks to="/" onClick={() => closeMobileMenu(el.to)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						<Navigate to="/" onClick={toggleModal2} style={{ textDecoration: 'none', color:'white' }}>Produk Kami</Navigate>
					</NavMenu>
				</NavbarContainer>
				<Modal2 showModal={showModal2} toggleModal={toggleModal2} />
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
