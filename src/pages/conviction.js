import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <a href="/conviction/quality" >Our Quality Standards</a>,
    imageUrl: 'img/quality.svg',
    description: (
      <>
        Discover our articles and publications to stay informed of the latest AI trends 
      </>
    ),
  },
  
  {
    title: <a href="/conviction/methodology" >Our Methodologies</a>,
    imageUrl: 'img/methodo.svg',
    description: (
      <>
        Take the Eki hackathons to test your Datascience capacity and improve your skills
      </>
    ),
  },
  {
    title: <a href="/conviction/technology" >Our Technologies</a>,
    imageUrl: 'img/LogoHack.svg',
    description: (
      <>
        Take the Eki hackathons to test your Datascience capacity and improve your skills
      </>
    ),
  },
  
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
          <h1 className="hero__title">Ekimetrics Tech Website<span className="goldencolor">.</span></h1>
          <p className="hero__subtitle">Discover our latest insights and resources on Data Science & AI</p>
          <img src="/img/GoodAI.png"/>
          
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