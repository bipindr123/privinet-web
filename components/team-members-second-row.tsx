import type { NextPage } from "next";
import MemberCardOne from "./member-card-one";
import MemberContainerThree from "./member-container-three";
import styles from "./member-container-one.module.css";

const MemberContainerTwo: NextPage = () => {
  return (
    <div className={styles.memberContainerOne}>


        <MemberCardOne
        portraitSuccessfulBusines="/danny.png"
        name="Daniel Nkansah"
        title="Cloud Security Engineer"
        description="With a vast experience in IT, Daniel's role is crucial in fortifying PriviNet's security posture, ensuring the integrity and resilience of its advanced connectivity solutions."
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
