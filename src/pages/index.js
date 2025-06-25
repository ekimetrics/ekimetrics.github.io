import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogData from '../../.docusaurus/docusaurus-plugin-content-blog/default/p/blog-archive-f05.json';
// Rather inelegant way of loading recent posts
// See https://stackoverflow.com/questions/60289432/docusaurus-v2-recent-blogs-list-for-homepage
// import recentPosts from "../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";

function TechRadar() {
	return (
		<div className={clsx('container', styles.card)}>
			<h1 style={{ fontSize: 24 }}>
				{' '}
				<span className='gold'>Our Tech Radar </span>
			</h1>

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
				style={{
					display: 'flex',
					alignItems: 'right',
					justifyContent: 'right',
				}}
			>
				<Link to={'https://ekimetrics.github.io/tech-radar/'}>
					{'View in fullscreen'}{' '}
				</Link>
			</div>
		</div>
	);
}

function LatestBlogPosts() {
	const recentPosts = blogData.archive.blogPosts
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
			title={`EkiLab - the Ekimetrics technology & innovation website`}
			description='EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company'
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
					<h1 className='hero__subtitle' style={{ color: 'white' }}>
						Welcome to Ekimetrics' technology & innovation website!
					</h1>
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
						<HomePageBlock
							title='Resources'
							href='/resources'
							img='img/icons/Email campaign_Monochromatic.svg'
							description='Find out about our internal trainings & Hackathons '
						/>
						{/* <HomePageBlock title="Hackathons" href="/hacks" img="img/icons/Competition_Monochromatic.svg" description="Test your data science skills with our hackathons & challenges"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/World wide web_Monochromatic.svg" description="Discover our open source contributions to the Data Science community"/> */}
					</Row>
				</div>

				<TechRadar></TechRadar>
				<LatestBlogPosts></LatestBlogPosts>
			</main>
		</Layout>
	);
}

export default Home;

//   const TRAININGS = [
//     {
//     "date":"2022-11","category":"Reading Group Session","title":"FLAVA","tags":["Deep Learning","Multimodal Learning", "Fusion Encoders"],
//     "description":"Discover FLAVA : a foundational vision and language alignment model that achieves impressive performance on all three target modalities : vision, language, and vision & language."
//   },
//   {
//     "date":"2022-11","category":"Presentation","title":"Question Answering","tags":["Deep Learning","AI", "Question Answering"],
//     "description":"In this session, we go through state-of-the-art question answering algorithms and present a use case on how it was applied in AI for sustainability."
//   },
//   {
//     "date":"2022-09","category":"Presentation","title":"introduction to MLOps","tags":["Deep Learning","AI", "Question Answering"],
//     "description":"In this session, we go through state-of-the-art question answering algorithms and present a use case on how it was applied in AI for sustainability."
//   },
//   {
//     "date":"2022-06","category":"Coding Session","title":"Principal components Analysis in MMM","tags":["PCA", "MMM"],
//     "description":"In this session, we remind of the principal components analysis, its methodology and its advantages. We then share a use case where it was applied.",
//   },
// ]

// const ShortCard = ({title,description,href,category,date,tags}) => {
//   return (
//       <div class="col col-md-12 col--3 shortcard-container">
//           <div class="col col--12 shortcard">
//               <div className={clsx("longcard-body", styles.subgridcard)}>
//                   <p class="longcard-description" style={{fontSize:14}}><span className="gold">{category}</span>{date && ` - ${date}` }</p>
//                   <p class="shortcard-title"><Link to={href}>{title}</Link></p>
//                   <p class="longcard-description">{description}</p>
//                   <p class="longcard-description" style={{fontSize:16, textAlign:"left"}}>{tags && tags.map(el => <span className="badge badge--primary" style={{fontFamily:"InterCustom"}}>{el} </span>)}</p>

//               </div>
//           </div>
//       </div>
//   )
// }

// const ShortCard = ({title,permalink,img_path,description}) => {
//   return (
//       <div class="col col-md-12 col--3 shortcard-container">
//           <div class="col col--12 shortcard">
//           {recentPosts.items.slice(0,4).map((item) => (
//           <div className= {`${styles.gridsubcard} `} >
//             <div className="card__image" >
//               <img
//                 // src={headerImageURL}
//                 src={item.img_path}
//                 alt="Image alt text"
//                 title={item.title}
//                 style= {{borderTopLeftRadius: "10px",WebkitBorderTopRightRadius: "10px"}}
//               />
//             </div>

//           <div className="card__body">

//             <article>
//             <h2
//                 style={{"fontFamily":"InterCustom","fontSize":16,"textAlign":"left"}}
//                 className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
//                 {<Link to={item.permalink}>{item.title}</Link>}
//               </h2>
//             <p style={{"fontFamily":"InterCustom",fontSize:12,lineHeight:1.2,"textAlign": "left"}}>{item.description}</p>

//             </article>
//             </div>
//           </div>

//         ))}
//           </div>
//       </div>
//   )
// }

// const ShortCard = ({title,permalink,img_path,description}) => {
//   return (
//       <div class="col col-md-12 col--3 shortcard-container">
//           <div class="col col--12 shortcard">
//           {/* <div className= {`${styles.gridsubcard} `} > */}
//             <div className="card__image" >
//               <img
//                 // src={headerImageURL}
//                 src={img_path}
//                 alt="Image alt text"
//                 title={title}
//                 style= {{borderTopLeftRadius: "10px",WebkitBorderTopRightRadius: "10px"}}
//               />
//             </div>

//           <div className="card__body">

//             <article>
//             <h2
//                 style={{"fontFamily":"InterCustom","fontSize":16,"textAlign":"left"}}
//                 className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
//                 {<Link to={permalink}>{title}</Link>}
//               </h2>
//             <p style={{"fontFamily":"InterCustom",fontSize:12,lineHeight:1.2,"textAlign": "left"}}>{description}</p>

//             </article>
//             </div>
//           {/* </div> */}

//           </div>
//       </div>
//   )
// }

//   function Test(){
//     return(
//       <div className={clsx("container", styles.gridcard)}>
//         <h1 style={{"fontSize":24}}> <span className="gold">Our Latest blog posts</span></h1>

//         <section>
//           <div class="row">
//               <ShortCard title="Exploring the links between creative execution and marketing effectiveness - Part I: Detectron2 Pre-Trained Object Detection Models" permalink="blog/2022/11/10/creative_execution_and_marketing_effectiveness_part_I" img_path= "./img/blog/Eki_meta_part_I.png" description="In this Part I we explore the methodology for using pre-trained Detectron2 models to detect brand-specific object in creative images."/>
//               <ShortCard title="Exploring the links between creative execution and marketing effectiveness - Part I: Detectron2 Pre-Trained Object Detection Models" permalink="blog/2022/11/10/creative_execution_and_marketing_effectiveness_part_I" img_path= "./img/blog/Eki_meta_part_I.png" description="In this Part I we explore the methodology for using pre-trained Detectron2"/>

//               {/* <ShortCard img_path={el["img_path"]} title={el["title"]} tags={el["tags"]} description={el["description"]} href={el["href"]}/>
//               <ShortCard img_path={el["img_path"]} title={el["title"]} tags={el["tags"]} description={el["description"]} href={el["href"]}/>
//               <ShortCard img_path={el["img_path"]} title={el["title"]} tags={el["tags"]} description={el["description"]} href={el["href"]}/>
//  */}
//           </div>
//         </section>
//       </div>
//       )}
