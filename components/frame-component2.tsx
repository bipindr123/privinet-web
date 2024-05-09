import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <section className={styles.desktopAboutUsInner}>
      <div className={styles.frameParent}>
        <div className={styles.fAQHeaderWrapper}>
          <div className={styles.fAQHeader}>
            <div className={styles.fAQSubheader}>
              <h1 className={styles.faq}>FAQ</h1>
            </div>
            <div className={styles.someAnswersTo}>
              Some answers to common questions
            </div>
          </div>
        </div>
        <div className={styles.questionDetailsParent}>
          <div className={styles.questionDetails}>
            <b className={styles.whatIsA}>
              What is a Unified Communication Network (UCN)?
            </b>
            <div className={styles.aUcnIs}>
              A UCN is a comprehensive network infrastructure that integrates
              various communication channels, such as voice, video, messaging,
              and data, into a single platform. It aims to streamline
              communication processes across an organization, improving
              efficiency and collaboration.
            </div>
            <div className={styles.questionDetailsChild} />
          </div>
          <div className={styles.questions}>
            <b className={styles.isSecurityA}>
              Is security a concern with AI-Powered Multi-RAN UCN?
            </b>
            <div className={styles.questionsChild} />
          </div>
          <div className={styles.questions1}>
            <b className={styles.whatIsAiPowered}>
              What is AI-Powered Multi-RAN UCN?
            </b>
            <div className={styles.questionsItem} />
          </div>
          <div className={styles.questions2}>
            <b className={styles.howDoesAi}>
              How does AI enhance a Multi-RAN UCN?
            </b>
            <div className={styles.questionsInner} />
          </div>
          <div className={styles.questions3}>
            <b className={styles.howScalableIs}>
              How scalable is a Multi-RAN UCN?
            </b>
            <div className={styles.rectangleDiv} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
