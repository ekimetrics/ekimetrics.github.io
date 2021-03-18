import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <a href="/blog" >Stay informed</a>,
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
         
         <div class="container">
  <div class="row">
    <div class="col col--12">
      <h1>Articles</h1>
    </div>
     
  </div>
  </div>
       
      <div class="container">
  <div class="row">
    <div class="col"><div class="card-demo">
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
</div></div>
    <div class="col"><div class="card-demo">
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
</div></div>
    <div class="col"><div class="card-demo">
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
</div></div>
  </div>
  
  <div class="row">
    <div class="col col--12">
      <h1>News</h1>
    </div>
     
  </div>
  </div>
       
      <div class="container">
  <div class="row">
    <div class="col"><div class="card-demo">
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
</div></div>
    <div class="col"><div class="card-demo">
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
</div></div>
    <div class="col"><div class="card-demo">
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
</div></div>
  </div>
  </div>

  
    </Layout>
  );
}

export default Home;