import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Tilt from 'react-tilt';

const Content = ({
	topLine,
	headline,
	description,
	img,
	img2,
	alt,
	backgroundColor,
	backgroundColor2,
	inverse,
	reverse,
}) => {
	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.1, duration: 0.3 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<ContentSec ref={ref}>
						<TextWrapper>
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								{topLine.text}
							</TopLine>
							<Heading
								initial={initial}
								transition={transition}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{description}
							</Subtitle>
						</TextWrapper>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn
						initial={initial}
						transition={transition}
						animate={animation}
					>	
						<Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
							<ImgWrapper backgroundColor={backgroundColor2}>
								<Img
									src={img2}
									alt={alt}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</Tilt>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={transition}
						animate={animation}
					>
						<Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
							<ImgWrapper backgroundColor={backgroundColor}>
								<Img
									src={img}
									alt={alt}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</Tilt>
					</ContentColumn>
				</ContentRow>
			</Container>
		</ContentSec>
	);
};

export default Content;
