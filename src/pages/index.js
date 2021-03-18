import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Ekimetrics Lab<span className="goldencolor">.</span></h1>
          <p className="hero__subtitle">Discover our latest insights and resources on Data Science & AI</p>
          <img src="/img/header-min-2160x1000.jpg"/>
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
        
      </header>
      
      <main>
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
    </Layout>
  );
}

export default Home;