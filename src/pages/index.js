import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogData from '../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json';
// Rather inelegant way of loading recent posts
// See https://stackoverflow.com/questions/60289432/docusaurus-v2-recent-blogs-list-for-homepage
// import recentPosts from "../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";

export function TechRadar() {
	return (
		<div className={clsx('container', styles.card)}>
			<h1 style={{ fontSize: 24 }}>
				{' '}
				<span className='gold'>Our Tech Radar </span>
			</h1>

			<div
				style={{
					position: 'relative',
					width: '100%',
					height: '712.5px',
					overflow: 'hidden',
				}}
				className={styles.techRadarWrapper}
			>
				<iframe
					id='inlineFrameExample'
					title='Inline Frame Example'
					width='100%'
					height='950'
					src='https://ekimetrics.github.io/tech-radar/'
					scrolling='no'
					style={{
						zoom: '0.75',
						border: 'none',
					}}
				></iframe>

				<div
					className={styles.hoverOverlay}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0, 0, 0, 0.6)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						opacity: 0,
						transition: 'opacity 0.3s ease',
						pointerEvents: 'none',
						zIndex: 10,
					}}
				>
					<Link
						to={'https://ekimetrics.github.io/tech-radar/'}
						style={{
							backgroundColor: '#32475a',
							color: 'white',
							padding: '12px 24px',
							borderRadius: '8px',
							textDecoration: 'none',
							fontWeight: 'bold',
							fontSize: '16px',
							pointerEvents: 'auto',
							transition: 'background-color 0.3s ease',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
							border: '2px solid rgba(255, 255, 255, 0.2)',
						}}
						onMouseEnter={(e) => {
							e.target.style.backgroundColor = '#2a3d4a';
							e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
						}}
						onMouseLeave={(e) => {
							e.target.style.backgroundColor = '#32475a';
							e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
						}}
					>
						View in full screen
					</Link>
				</div>
			</div>
		</div>
	);
}

function LatestBlogPosts() {
	const recentPosts = blogData.blogPosts
		.filter((post) => !post.metadata.frontMatter.draft)
		.sort((a, b) => a.metadata.title - b.metadata.title)
		.slice(0, 4);

	return (
		<div className={clsx('container', styles.gridcard)}>
			<h1 style={{ fontSize: 24 }}>
				{' '}
				<span className='gold'>Our Latest blog posts</span>
			</h1>

			<div className={clsx(styles.wrapper)}>
				{recentPosts.map((item) => (
					<div className={`${styles.gridsubcard} `}>
						<div className='card__image'>
							<img
								// src={headerImageURL}
								src={item.metadata.frontMatter.header_image_url}
								alt='Image alt text'
								title={item.metadata.title}
								style={{
									borderTopLeftRadius: '10px',
									WebkitBorderTopRightRadius: '10px',
								}}
							/>
						</div>

						<div className='card__body'>
							<article>
								<h2
									style={{
										fontFamily: 'InterCustom',
										fontSize: 16,
										textAlign: 'left',
									}}
									className={clsx('margin-bottom--sm', styles.blogPostTitle)}
								>
									{
										<Link to={item.metadata.permalink}>
											{item.metadata.title}
										</Link>
									}
								</h2>
								<p
									style={{
										fontFamily: 'InterCustom',
										fontSize: 12,
										lineHeight: 1.2,
										textAlign: 'left',
									}}
								>
									{item.metadata.description}
								</p>
							</article>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--6', styles.feature)}>
			{imgUrl && (
				<div className='text--center'>
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<ul>{title}</ul>

			<p>{description}</p>
		</div>
	);
}

function HomePageBlock({ title, img, description, href }) {
	return (
		<Col className={styles.mainCardColumn}>
			<h1 style={{ fontSize: 24 }}>
				{' '}
				<Link to={href}>{title}</Link>
			</h1>
			{img && (
				<div
					style={{
						paddingLeft: 40,
						paddingRight: 40,
						paddingTop: 20,
						paddingBottom: 20,
					}}
				>
					<img src={useBaseUrl(img)} />
				</div>
			)}
			<p style={{ marginBottom: 0 }}>{description}</p>
		</Col>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`EkiLab - Ekimetrics technology & innovation website`}
			description='EkiLab - Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company'
			keywords={[
				'EkiLab',
				'Ekimetrics',
				'Eki.Lab',
				'Data Science',
				'Machine Learning',
				'Artificial Intelligence',
			]}
		>
			<header
				className={clsx('hero hero--primary', styles.heroBanner)}
				style={{
					backgroundImage: `url(${useBaseUrl('img/10-cubecube03.jpg')})`,
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
					minHeight: 'calc(100vh - 200px)',
					zIndex: -1,
				}}
			>
				<div className={clsx('container', styles.card)}>
					<h1
						className='hero__subtitle'
						style={{ color: 'white', fontSize: '40px' }}
					>
						Eki<span className='gold'>.</span>Lab
					</h1>
					{/* <h1 className='hero__subtitle' style={{ color: 'white' }}>
						Welcome to Ekimetrics' technology & innovation website!
					</h1>
					<h1 className='hero__subtitle' style={{ color: 'white' }}>
						Welcome to Ekimetrics' technology & innovation website!
					</h1> */}
					<p
						className='hero__subtitle'
						style={{ color: 'white', marginBottom: 0, fontSize: '36px' }}
					>
						Welcome to Ekimetrics' technology & innovation website!
					</p>


					<p
						className='hero__subtitle'
						style={{ color: 'white', marginBottom: 0 }}
					>
						Behind the scenes of{' '}
						<a href='https://ekimetrics.com'>the Data Science Company</a>
					</p>
				</div>
			</header>
			<main style={{ marginTop: '-40px' }}>
				<div className={clsx('container', styles.card)}>
					<Row>
						<HomePageBlock
							title='Blog'
							href='/blog'
							img='img/icons/Search engine _Monochromatic.svg'
							description='Browse our latest articles and experiments on Data Science & AI'
						/>
						<HomePageBlock
							title='About Us'
							href='/about'
							img='img/icons/Spotlight _Monochromatic.svg'
							description='Learn about our convictions and tech best practices'
						/>
						{/* <HomePageBlock title="Hackathons" href="/hacks" img="img/icons/Competition_Monochromatic.svg" description="Test your data science skills with our hackathons & challenges"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/World wide web_Monochromatic.svg" description="Discover our open source contributions to the Data Science community"/> */}
					</Row>
				</div>

				<LatestBlogPosts></LatestBlogPosts>
			</main>
		</Layout>
	);
}

export default Home;