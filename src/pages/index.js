import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Rather inelegant way of loading recent posts
// See https://stackoverflow.com/questions/60289432/docusaurus-v2-recent-blogs-list-for-homepage
import recentPosts from "../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";


// const features = [
//   {
//     title: <a href="/blog" >Have a look at our Blog</a>,
//     imageUrl: 'img/news.svg',
//     description: (
//       <>
//         Discover our articles and publications to stay informed of the latest AI trends 
//       </>
//     ),
//   },
  
//   {
//     title: <a href="/homehack" >Try our online datascience challenges</a>,
//     imageUrl: 'img/LogoHack.svg',
//     description: (
//       <>
//         Take the Eki hackathons to test your Datascience capacity and improve your skills
//       </>
//     ),
//   },
//   {
//     title: <a href="/opensource" >Join our open source community</a>,
//     imageUrl: 'img/LogoOpenSource.svg',
//     description: (
//       <>
//         Discover our open source libraries and contribute to their development.
//       </>
//     ),
//   },
//   {
//     title: <a href="/conviction" >Discover our Tech Conviction</a>,
//     imageUrl: 'img/techconviction.svg',
//     description: (
//       <>
//         Discover our open source libraries and contribute to their development.
//       </>
//     ),
//   },
// ];

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
            <HomePageBlock title="Trainings" href="/trainings" img="img/icons/Email campaign_Monochromatic.svg" description="Find out about our trainings in open-access on various issues"/>
            <HomePageBlock title="Best practices" href="/docs" img="img/icons/Spotlight _Monochromatic.svg" description="Learn about our convictions and tech best practices"/>
            <HomePageBlock title="Hackathons" href="/hacks" img="img/icons/Competition_Monochromatic.svg" description="Test your data science skills with our hackathons & challenges"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/World wide web_Monochromatic.svg" description="Discover our open source contributions to the Data Science community"/>
          </Row>
        </div>
        <div className={clsx("container", styles.card)}>
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
        </div>
      </main>
      

      {/* <div className="container">
        
        
      
        <h2 className = {clsx(styles.heroBanner)}>Read our latest articles about AI</h2>
      
          <div className="row">
            <div className="col col--3 col--offset-3">
            <div className="card-demo">
  <div className="card">
    <div className="card__image">
      <img
        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Image alt text"
        title="Logo Title Text 1"
      />
    </div>
    <div className="card__body">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
    <div className="card__footer">
      <button className="button button--primary button--block">Visit</button>
    </div>
  </div>
</div>
            </div>
            <div className="col col--3 col--offset-1">
            <div className="card-demo">
  <div className="card">
    <div className="card__image">
      <img
        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Image alt text"
        title="Logo Title Text 1"
      />
    </div>
    <div className="card__body">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
    <div className="card__footer">
      <button className="button button--primary button--block">Visit</button>
    </div>
  </div>
</div>
            </div>
          </div>
          
        </div>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        

        
      </main>

      <div className="hero shadow--lw">
        <div className="container">
        <h2 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI <a className="button button--link" href="#url">
          Link
        </a></h2>
        <div className="card">
          <h1>coucou</h1>
        </div>
        </div>
      </div>

      <div className="hero hero--blue">
        <div className="container">
        <h2 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI <a className="button button--link" href="#url">
          Link
        </a></h2>
        <div className="card">
          <h1>coucou</h1>
        </div>
        </div>
      </div>

      <div className="hero shadow--lw">
        <div className="container">
        <h2 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI <a className="button button--link" href="#url">
          Link
        </a></h2>
        <div className="card">
          <h1>coucou</h1>
        </div>
        </div>
      </div> */}

    </Layout>
    
  );
}



export default Home;