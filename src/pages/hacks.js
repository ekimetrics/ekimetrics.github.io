import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import LongCard from "../components/LongCard.js";


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Hackathons & challenges by Ekimetrics"
      description="Browse our hackathons & challenges to test your Data Science skills"
      keywords={["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence","Hackathon"]}
    >
         
    <div class="container margin-vert--lg">
        <div class="row">
            <div class="col col--12">
            <h1>Hackathons & Data Science Challenges</h1>
            <p>
            We have been actively creating various <span className="gold">hackathons and collaborative sessions</span> to improve our Data Science skills and better work as multi-disciplinary teams.<br/>
            Browse our exclusive challenges below, send us an <a href="mailto:inno@ekimetrics.com">email</a> to gain access (if it's not open sourced) or if you wish to request the creation of an exclusive hackathon.
            </p>
            </div>
        </div>
      <section>
          <LongCard category="Case study" date="2021-10" title="Reducing the environmental impact of road transport"  description="You advise the subsidiary of a logistics company whose purpose is to decarbonize international road transport. The subsidiary was launched 6 months ago, but beyond the promises nothing has been implemented. Your goal is to accelerate this vision and review this ambitious reduction strategy in light of the ever-increasing growth of e-commerce." href="" src="img/hacks/Truck_2.png"/>
          <LongCard category="Hackathon" date="2021-06" title="Ensuring access to affordable and clean energy in Africa"  description="Predict the next six months of payments for different customers for the PAYGo solar technology to help the technology distributors provide these important devices affordably and efficiently to the benefit of people all over Africa" href="" src="img/hacks/Solar_4.jpg"/>
          <LongCard category="Data Science Escape Game" date="2020-12" title="Crisis in Korea"  description="A bomb has been planted and risk to explode in the next 3 hours. Use your Data Science skills to track down and defuse the bomb!" href="" src="img/hacks/cekia.png"/>
          <LongCard category="Case study" date="2020-10" title="The future of French wine in the face of Climate Change"  description="French wine is endangered by the effect of climate change. Browse and cross a dozen of datasets to understand the effects of climate change and imagine actions to sustain the sector in the next 50 years" href="" src="img/hacks/photo-1560493676-04071c5f467b.jpg"/>
          <LongCard category="Hackathon" date="2019-12" title="Logistics for Christmas"  description="Help Santa Claus plan his delivery tours for Christmas by forecasting demand worlwide and optimizing routing while minimizing carbon footprint" href="" src="img/hacks/christmas.png"/>
          
      </section>
    </div>
  
  
    </Layout>
  );
}

export default Home;