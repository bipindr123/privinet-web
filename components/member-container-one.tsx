import type { NextPage } from "next";
import MemberCardOne from "./member-card-one";
import MemberContainerThree from "./member-container-three";
import styles from "./member-container-one.module.css";

const MemberContainerOne: NextPage = () => {
  return (
    <div className={styles.memberContainerOne}>


<MemberCardOne
        portraitSuccessfulBusines="/portraitsuccessfulbusinessmanstandingcorneroffice-1@2x.png"
        name="Brad Listermann"
        title="Founder and CEO"
        description="The visionary architect behind PriviNet, Brad combines entrepreneurial vigor with technological foresight to drive the company's strategic direction and innovation."
        propMinWidth="272px"
        propFlex="1"
        propDisplay="inline-block"
        propMinWidth1="114px"
      />
      <MemberCardOne
        portraitSuccessfulBusines="/portraitsuccessfulbusinessmanstandingcorneroffice-2@2x.png"
        name="Tal Segal"
        title="CTO and Co-Founder"
        description="With over fifteen years in tech, Tal's expertise in secure, scalable network solutions is foundational to PriviNet's robust infrastructure."
        propMinWidth="272px"
        propFlex="1"
        propDisplay="inline-block"
        propMinWidth1="114px"
      />
      <MemberCardOne
        portraitSuccessfulBusines="/leah.png"
        name="Leah Berend"
        title="CFO"
        description="Leah, a seasoned finance professional, has served as CFO of a private equity firm and held key roles in the alternative investment sector. She is a CPA with an M.S. in Accountancy and an M.A. in Organizational Leadership. Recognized as a Top Women in Finance Honoree in 2022, Leah actively participates in professional organizations including the AICPA, Team Women, and FEI. She hosts a podcast and frequently speaks on investment & business and serves on the boards of the Association for Corporate Growth MN Chapter and three private organizations."
        propMinWidth="272px"
        propFlex="1"
        propDisplay="inline-block"
        propMinWidth1="114px"
      />
    </div>
  );
};

export default MemberContainerOne;
