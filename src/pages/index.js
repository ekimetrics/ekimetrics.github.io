import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import recentPosts from "../../latest_blog.json";

// Rather inelegant way of loading recent posts
// See https://stackoverflow.com/questions/60289432/docusaurus-v2-recent-blogs-list-for-homepage
// import recentPosts from "../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";




function TechRadar () {
  return (
    <div className={clsx("container", styles.card)}>
      <h1 style={{"fontSize":24}}> <span className="gold">Our Tech Radar </span></h1> 
      <Link to={"https://ekimetrics.github.io/tech-radar/"}>{"View in fullscreen"}</Link> 

      <div id="wrap">

              
        <iframe id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="500"
            src="https://ekimetrics.github.io/tech-radar/">
        </iframe>
      </div>
    </div>
  )
}



function LatestBlogPosts(){
  return(

<div className={clsx("container", styles.gridcard)}>
  <h1 style={{"fontSize":24}}> <span className="gold">Our Latest blog posts</span></h1>

      <div className={clsx("wrapper", styles.grid)}>

        {recentPosts.items.slice(0,4).map((item) => (
          <div className= {`${styles.gridsubcard} `} >
            <div className="card__image" >
              <img
                // src={headerImageURL}
                src={item.img_path}
                alt="Image alt text"
                title={item.title}
                style= {{borderTopLeftRadius: "10px",WebkitBorderTopRightRadius: "10px"}}
              />
            </div>

          <div className="card__body">

            <article>
            <h2
                style={{"fontFamily":"InterCustom","fontSize":16}}
                className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
                {<Link to={item.permalink}>{item.title}</Link>}
              </h2>
            <p style={{"fontFamily":"InterCustom",fontSize:12,lineHeight:1.2}}>{item.description}</p>

            </article>
            </div>
          </div>

                            
        ))}

      </div>
</div>
  )}



function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <ul >{title}</ul>
      
      <p>{description}</p>
    </div>
  );
}

function HomePageBlock({title,img,description,href}){
  return (
  <Col className={styles.mainCardColumn}>
    <h1 style={{"fontSize":24}}> <Link to={href}>{title}</Link></h1>
    {img && 
      <div style={{paddingLeft:40, paddingRight:40, paddingTop:20, paddingBottom:20}}>
        <img src={useBaseUrl(img)}/>
      </div>
    }
    <p style={{ marginBottom: 0 }}>{description}</p>
  </Col>
  )
}


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout 
      title={`EkiLab - the Ekimetrics technology & innovation website`} 
      description="EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company" 
      keywords={["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence"]}
      >
       <header 
        className={clsx('hero hero--primary', styles.heroBanner)} 
        style={{backgroundImage:`url(${useBaseUrl('img/10-cubecube03.jpg')})`,backgroundSize:"cover",backgroundPosition: "bottom", minHeight:"calc(100vh - 200px)",zIndex:-1}}
      >
        <div className={clsx("container", styles.card)}>
          <h1 className="hero__subtitle" style={{color:"white",fontSize:"40px"}}>Eki<span className="gold">.</span>Lab</h1>
          <h1 className="hero__subtitle" style={{color:"white"}}>Welcome to Ekimetrics' technology & innovation website!</h1>
          <p className="hero__subtitle" style={{color:"white", marginBottom: 0}}>Behind the scenes of <a href="https://ekimetrics.com">the Data Science Company</a></p>
        </div>
      </header>
      <main style={{ marginTop:"-40px" }}>
        <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Blog" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Browse our latest articles and experiments on Data Science & AI"/>
            <HomePageBlock title="About Us" href="/docs" img="img/icons/Spotlight _Monochromatic.svg" description="Learn about our convictions and tech best practices"/>
            <HomePageBlock title="Resources" href="/resources" img="img/icons/Email campaign_Monochromatic.svg" description="Find out about our internal trainings & Hackathons "/>
            {/* <HomePageBlock title="Hackathons" href="/hacks" img="img/icons/Competition_Monochromatic.svg" description="Test your data science skills with our hackathons & challenges"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/World wide web_Monochromatic.svg" description="Discover our open source contributions to the Data Science community"/> */}
          </Row>
        </div>

        
        {/* <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Our latest blog posts" href="" description={
              <>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  {recentPosts.items.slice(0, 5).map((item, index) => (
                    <li key={index}>
                      <a href={`${item.permalink}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            }/>
          </Row>
        </div> */}
        <TechRadar></TechRadar>
        <LatestBlogPosts></LatestBlogPosts>
      </main>
      
    </Layout>
    
  );
}



export default Home;