import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./member-card-one.module.css";

export type MemberCardOneType = {
  portraitSuccessfulBusines?: string;
  name?: string;
  title?: string;
  description?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const MemberCardOne: NextPage<MemberCardOneType> = ({
  portraitSuccessfulBusines,
  name,
  title,
  description,
  propWidth,
  propMinWidth,
  propFlex,
  propDisplay,
  propMinWidth1,
}) => {
  const memberCardOneStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className={styles.memberCardOne} style={memberCardOneStyle}>
      <img
        className={styles.portraitSuccessfulBusinessmaIcon}
        loading="lazy"
        alt=""
        src={portraitSuccessfulBusines}
      />
      <div className={styles.memberInfoOne}>
        <div className={styles.memberNameOne}>
          <div className={styles.nameDetailsOne}>
            <b className={styles.name} style={nameStyle}>
              {name}
            </b>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.theVisionaryArchitect}>
            {description}
          </div>
        </div>
        <img
          className={styles.memberDividerOne}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

export default MemberCardOne;
