import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LongCard from "../components/LongCard.js";


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Open-source contributions"
      description="Browse our open source contributions to the Data Science community"
    >
         
    <div class="container margin-vert--lg">
        <div class="row">
            <div class="col col--12">
            <h1>Open source contributions</h1>
            <p>
            We are a <span className="gold">technology-agnostic</span> company. We embrace the world of open-source and contributes back with the creation of Data Science tools and libraries.<br/>
            Send us an <a href="mailto:inno@ekimetrics.com">email</a> if you have any question or wishes to contribute.
            </p>
            </div>
        </div>
      <section>
          <LongCard category="Python library" date="2020-09" title="Pyepidemics" description="Democratize epidemiological modeling and forecast in Python with classical models (SIR, SEIDR, SEIHDR) or custom models (COVID19), with bayesian calibration and many visualization tools" href="https://github.com/ekimetrics/pyepidemics" src="../../static/img/opensource/photo-1584036533827-45bce166ad94.jpg"/>
      </section>
    </div>
  
    </Layout>
  );
}

export default Home;