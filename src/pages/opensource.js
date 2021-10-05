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
      description="Discover our open source contributions to the Data Science community"
      keywords={["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence","Open Source"]}
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
          <LongCard category="Python library" date="2020-09" title="Pyepidemics" description="Democratize epidemiological modeling and forecast in Python with classical models (SIR, SEIDR, SEIHDR) or custom models (COVID19), with bayesian calibration and many visualization tools" href="https://github.com/ekimetrics/pyepidemics" src="img/opensource/photo-1584036533827-45bce166ad94.jpg"/>
          <LongCard category="Python library" date="2021-09" title="EthicalAI" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club Datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai.png"/>
      </section>
    </div>
  
    </Layout>
  );
}

export default Home;