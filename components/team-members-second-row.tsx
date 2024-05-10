import type { NextPage } from "next";
import MemberCardOne from "./member-card-one";
import MemberContainerThree from "./member-container-three";
import styles from "./member-container-one.module.css";

const MemberContainerTwo: NextPage = () => {
  return (
    <div className={styles.memberContainerOne}>


        <MemberCardOne
        portraitSuccessfulBusines="/weifu.png"
        name="Dr. Harrison Wang"
        title="Director of AI"
        description="Dr. Harrison Wang, PhD, is the esteemed Director of AI at PriviNet, where he spearheads groundbreaking initiatives in network intelligence and AI-driven automation. With an illustrious background in robotics, AI, and software engineering, Dr. Wang brings extensive experience from his time from autonomous vehicles, aerospace, and internet-services industry. He holds a PhD from Dartmouth College, with specialized expertise in deep learning and robotics. At PriviNet, Dr. Wang is set to drive transformative advancements, leveraging AI to revolutionize connectivity solutions across various industries."
        propMinWidth="272px"
        propFlex="1"
        propDisplay="inline-block"
        propMinWidth1="114px"
      />
      
      <MemberCardOne
        portraitSuccessfulBusines="/bipin.png"
        name="Bipin Dhoddamane Ravi"
        title="Full Stack Software Engineer"
        description="A versatile Software Engineer, excels in full-stack development, distributed systems, and cloud computing. He holds a Master's in Computer Science from UC Riverside."
        propMinWidth="272px"
        propFlex="1"
        propDisplay="inline-block"
        propMinWidth1="114px"
      />
      <MemberCardOne
        portraitSuccessfulBusines="/portraitsuccessfulbusinessmanstandingcorneroffice-3@2x.png"
        name="Raul Jerca"
        title="Multi-Ran Development Lead"
        description="A luminary in next-generation LoRaWAN technologies, Raul's insights under Tal's mentorship are key to advancing long-range communication technology at PriviNet."
        propMinWidth="272px"
        propFlex="1"
        propDisplay="inline-block"
        propMinWidth1="114px"
      />
    </div>
  );
};

export default MemberContainerTwo;
