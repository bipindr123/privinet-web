import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  /** Style props */
  followUsDisplay?: CSSProperties["display"];
  followUsMinWidth?: CSSProperties["minWidth"];
  followUsHeight?: CSSProperties["height"];

  /** Action props */
  onLogoImage1Click?: () => void;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  followUsDisplay,
  followUsMinWidth,
  followUsHeight,
  onLogoImage1Click,
}) => {
  const followUsStyle: CSSProperties = useMemo(() => {
    return {
      display: followUsDisplay,
      minWidth: followUsMinWidth,
      height: followUsHeight,
    };
  }, [followUsDisplay, followUsMinWidth, followUsHeight]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.logoParent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoImage1Click}
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.followUsParent}>
              <div className={styles.followUs} style={followUsStyle}>
                Follow us
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameGroup}>
                <div className={styles.emailImageWrapper}>
                  <img
                    className={styles.emailImageIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className={styles.contactprivinetcom}>
                  brad@privinet.net
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
