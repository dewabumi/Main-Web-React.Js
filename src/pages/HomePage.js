import React from 'react';
import Content from '../components/Content/Content';
import Cars from '../components/Products/Cars';
import Hero from '../components/Hero/Hero';
import Diskon from '../components/Diskon/Diskon';
import Profile from '../components/Profile';
import Tigab from '../components/tigab';
import Faq from '../components/faq/Faq';
import Gokre from '../components/gokre/Gokre'
import Testi from '../components/Testi/banner/Card';
import Blog from '../components/Blog';
import Navbar from '../components/Navbar/Navbar';
import { heroOne } from '../data/HeroData';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Profile />
			<Cars />
			<Diskon />
			<Content {...heroOne} />
			<Tigab />
			<Testi />
			<Faq />
			<Blog />
			<Gokre />
		</>
	);
};

export default HomePage;
