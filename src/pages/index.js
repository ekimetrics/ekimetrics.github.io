import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const features = [
  {
    title: <a href="/blog" >Have a look at our Blog</a>,
    imageUrl: 'img/news.svg',
    description: (
      <>
        Discover our articles and publications to stay informed of the latest AI trends 
      </>
    ),
  },
  
  {
    title: <a href="/homehack" >Try our online datascience challenges</a>,
    imageUrl: 'img/LogoHack.svg',
    description: (
      <>
        Take the Eki hackathons to test your Datascience capacity and improve your skills
      </>
    ),
  },
  {
    title: <a href="/opensource" >Join our open source community</a>,
    imageUrl: 'img/LogoOpenSource.svg',
    description: (
      <>
        Discover our open source libraries and contribute to their development.
      </>
    ),
  },
  {
    title: <a href="/conviction" >Discover our Tech Conviction</a>,
    imageUrl: 'img/techconviction.svg',
    description: (
      <>
        Discover our open source libraries and contribute to their development.
      </>
    ),
  },
];

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
  <Col>
    <h1 style={{"fontSize":24}}> <Link to={href}>{title}</Link></h1>
    <div style={{"padding":40}}>
    <img src={useBaseUrl(img)}/>
    </div>
    <p>{description}</p>
  </Col>
  )
}


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={`Eki.Lab website`} description="Behind the scenes of the Data Science Company">
      {/* <header className={clsx(styles.heroBanner)}>
        <div className="container" >
          <h1  className="hero__title">Hi there, you're on the <span className="goldencolor">tech blog of eki.</span></h1>
          <h1 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI,</h1>
          <h1 className="hero__title">have fun with our<span className="goldencolor"> AI challenges</span></h1>
          <h1 className="hero__title"><span className="goldencolor">join our community</span> or check if we have</h1>
          <h1 className="hero__title">the same<span className="goldencolor"> tech conviction</span></h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              Get Started
            </Link>
          </div>
        </div>
  
      </header> */}
      <header 
        className={clsx('hero hero--primary', styles.heroBanner)} 
        style={{backgroundImage:`url(${useBaseUrl('img/10-cubecube03.jpg')})`,backgroundSize:"cover",backgroundPosition: "bottom",height:"calc(100vh - 200px)",zIndex:-1}}
      >
        <div className="container" style={{"backgroundColor":"rgba(22, 41, 60, .6)",padding:50}}>
          <h1 className="hero__subtitle" style={{color:"white",fontSize:"40px"}}>Eki<span class="gold">.</span>Lab</h1>
          <h1 className="hero__subtitle" style={{color:"white"}}>Welcome to Ekimetrics technology website!</h1>
          <p className="hero__subtitle" style={{color:"white"}}>Behind the scenes of <span class="gold">the Data Science Company</span></p>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              style={{color:"black",borderColor:"black"}}
              to={useBaseUrl('blog/')}>
              See articles
            </Link>
          </div> */}
        </div>
      </header>
      <div className="container" style={{zIndex:10,marginBottom:50}}>
        <div style={{backgroundColor:"#32475a",padding:20,marginTop:"-40px",textAlign:"center"}}>
          <Row>
            <HomePageBlock title="Blog" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Read about our latest insights on Data Science & AI"/>
            <HomePageBlock title="Best practices" href="/docs" img="img/icons/Spotlight _Monochromatic.svg" description="Learn about our convictions and tech best practices"/>
            <HomePageBlock title="Hackathons" href="/hacks" img="img/icons/Competition_Monochromatic.svg" description="Test your data science skills with our hackathons & challenges"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/World wide web_Monochromatic.svg" description="Browse our open source contributions to the Data Science community"/>
          </Row>
        </div>
      </div>
      <main>
      </main>

      {/* <div class="container">
        
        
      
        <h2 className = {clsx(styles.heroBanner)}>Read our latest articles about AI</h2>
      
          <div class="row">
            <div class="col col--3 col--offset-3">
            <div class="card-demo">
  <div class="card">
    <div class="card__image">
      <img
        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Image alt text"
        title="Logo Title Text 1"
      />
    </div>
    <div class="card__body">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
    <div class="card__footer">
      <button class="button button--primary button--block">Visit</button>
    </div>
  </div>
</div>
            </div>
            <div class="col col--3 col--offset-1">
            <div class="card-demo">
  <div class="card">
    <div class="card__image">
      <img
        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Image alt text"
        title="Logo Title Text 1"
      />
    </div>
    <div class="card__body">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
    <div class="card__footer">
      <button class="button button--primary button--block">Visit</button>
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

      <div class="hero shadow--lw">
        <div class="container">
        <h2 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI <a class="button button--link" href="#url">
          Link
        </a></h2>
        <div class="card">
          <h1>coucou</h1>
        </div>
        </div>
      </div>

      <div class="hero hero--blue">
        <div class="container">
        <h2 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI <a class="button button--link" href="#url">
          Link
        </a></h2>
        <div class="card">
          <h1>coucou</h1>
        </div>
        </div>
      </div>

      <div class="hero shadow--lw">
        <div class="container">
        <h2 className="hero__title">Read <span className="goldencolor">our latest article</span>  about AI <a class="button button--link" href="#url">
          Link
        </a></h2>
        <div class="card">
          <h1>coucou</h1>
        </div>
        </div>
      </div> */}

    </Layout>
    
  );
}



export default Home;