import type { NextPage } from "next";
import MemberCardOne from "./member-card-one";
import styles from "./member-container-one.module.css";

const MemberContainerThree: NextPage = () => {
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
        propWidth="272px"
      />
    </div>
  );
};

export default MemberContainerThree;
