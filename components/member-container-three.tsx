import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./member-container-three.module.css";

export type MemberContainerThreeType = {
  portraitSuccessfulBusines?: string;
  raulJerca?: string;
  multiRanDevelopmentLead?: string;
  aLuminaryInNextGeneration?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propLetterSpacing1?: CSSProperties["letterSpacing"];
};

const MemberContainerThree: NextPage<MemberContainerThreeType> = ({
  portraitSuccessfulBusines,
  raulJerca,
  multiRanDevelopmentLead,
  aLuminaryInNextGeneration,
  propWidth,
  propMinWidth,
  propFlex,
  propLetterSpacing,
  propLetterSpacing1,
}) => {
  const memberContainerThreeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const multiRanDevelopmentLeadStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  const aLuminaryInStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing1,
    };
  }, [propLetterSpacing1]);

  return (
    <div
      className={styles.memberContainerThree}
      style={memberContainerThreeStyle}
    >
      <img
        className={styles.portraitSuccessfulBusinessmaIcon}
        loading="lazy"
        alt=""
        src={portraitSuccessfulBusines}
      />
      <div className={styles.memberImageThree}>
        <div className={styles.memberInfoThree}>
          <b className={styles.raulJerca}>{raulJerca}</b>
          <div
            className={styles.multiRanDevelopmentLead}
            style={multiRanDevelopmentLeadStyle}
          >
            {multiRanDevelopmentLead}
          </div>
        </div>
        <div className={styles.aLuminaryIn} style={aLuminaryInStyle}>
          {aLuminaryInNextGeneration}
        </div>
      </div>
      <img className={styles.memberDividerThree} alt="" src="/vector.svg" />
    </div>
  );
};

export default MemberContainerThree;
