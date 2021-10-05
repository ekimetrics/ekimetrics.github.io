import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LongCard from "../components/LongCard.js";
import ShortCard from "../components/ShortCard.js";

          {/* <ShortCard category="Presentation" date="2021-09" title="Foundation models & Prompt Engineering" description="Democratize epidemiological modeling and forecast in Python with classical models (SIR, SEIDR, SEIHDR) or custom models (COVID19), with bayesian calibration and many visualization tools" href="https://github.com/ekimetrics/pyepidemics" tags={["AI Research","NLP"]} />
          <ShortCard category="Coding session" date="2021-09" title="Practical introduction to mathematical optimization" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club Datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai.png"/>
          <ShortCard category="Presentation" date="2021-09" title="MLOps: Machine Learning in production" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club Datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai.png"/>
          <ShortCard category="Presentation" date="2021-06" title="UX design guidelines for AI products" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club Datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai.png"/>
          <ShortCard category="Presentation" date="2021-05" title="How to create a chess AI" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club Datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai.png"/>
          <ShortCard category="Presentation" date="2021-01" title="Cellular Automata & Artificial Life" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club Datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai.png"/> */}

let TRAININGS = [
  {
    "date":"2021-09","category":"Presentation","title":"Foundation models & Prompt Engineering","tags":["AI Research","NLP"],
    "description":"GPT-3, CLIP, Codex, BERT - Foundation models are becoming the norm in many applications, from NLP to Computer Vision. What are the risks and opportunities of those models? Is it really the future of AI. Discover it yourself with your own Turing Test.",
  },
  {
    "date":"2021-09","category":"Coding session","title":"Practical introduction to mathematical optimization ","tags":["Operational Research","Optimization"],
    "description":"Turn business problems into conceptual mathematical models, find out optimal decisions using state-of-the-art solvers and apply these skills on real-world optimization problems.",
  },
  {
    "date":"2021-09","category":"Presentation","title":"MLOps: Machine Learning in production","tags":["Industrialization","MLOps"],
    "description":"Machine Learning in production is a really complex discipline. Learn about the best practices and technology requirements to avoid failing in prod (input data drift, model registry, gouvernance, DevOps for ML, etc...)",
  },
  {
    "date":"2021-06","category":"Presentation","title":"UX design guidelines for AI products","tags":["UX Design"],
    "description":"When developing products with predictive AI features, there are specific UX/UI guidelines to ensure user trust, robustness and a valuable feedback loop.",
  },
  {
    "date":"2021-04","category":"Presentation","title":"How to create a chess AI","tags":["Game AI","Reinforcement Learning"],
    "description":"Chess has historically been one of the most important games in the development of Artificial Intelligence. Learn how to create your own chess AI using tree search algorithms, heuristics and Machine Learning.",
  },
  {
    "date":"2021-01","category":"Presentation","title":"Cellular Automata & Artificial Life","tags":["AI Research"],
    "description":"Cellular Automata are a programming discrete model popularized by Conway and Wolfram. Discover how it can be used to model the development of Life and what concrete applications we could expect from such technology.",
  },
  {
    "date":"2020-08","category":"Coding session","title":"Object Oriented Programming for Data Scientists","tags":["Python"],
    "description":"Learn how Oriented Object Programming (classes) can be used in Python to accelerate your development process when you are a Data Scientist.",
  },
  {
    "date":"2019-05","category":"Presentation","title":"Machine Learning at Netflix","tags":["AI Research"],
    "description":"Decrypt and demystify how Netflix is using Machine Learning to power every bit of the platform, improving user experience and building a competitive advantage in the market.",
  },
]




function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Trainings"
      description="Find out about our trainings in open-access on various issues"
      keywords={["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence","Open Source","Trainings","Tutorials"]}
    >
         
    <div class="container margin-vert--lg">
        <div class="row">
            <div class="col col--12">
            <h1>Trainings</h1>
            <p>
            We offer trainings for Eki.DataPeople on various issues. Find out in this page about the <span className="gold">trainings and tutorials we can provide in open-access</span>.<br/>
            Our trainings can be <span className="gold">presentations</span> or <span className="gold">interactive coding sessions</span><br/>
            📢 If there is no direct link yet, please send us an <a href="mailto:inno@ekimetrics.com">email</a> to get access 
            </p>
            </div>
        </div>
      <section>
        <div class="row">
          {TRAININGS.map(el=> (
            <ShortCard category={el["category"]} date={el["date"]} title={el["title"]} tags={el["tags"]} description={el["description"]} href={el["href"]}/>
          ))}

        </div>
      </section>
    </div>
  
    </Layout>
  );
}

export default Home;