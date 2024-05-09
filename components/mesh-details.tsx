import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./mesh-details.module.css";

export type MeshDetailsType = {
  meshForUnmatched?: string;
  resilience?: string;
  devicesCollaborateToFormA?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const MeshDetails: NextPage<MeshDetailsType> = ({
  meshForUnmatched,
  resilience,
  devicesCollaborateToFormA,
  propWidth,
}) => {
  const meshDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.meshDetails} style={meshDetailsStyle}>
      <b className={styles.meshForUnmatchedContainer}>
        <p className={styles.meshForUnmatched}>{meshForUnmatched}</p>
        <p className={styles.resilience}>{resilience}</p>
      </b>
      <div className={styles.meshDescriptions}>
        <div className={styles.devicesCollaborateTo}>
          {devicesCollaborateToFormA}
        </div>
      </div>
    </div>
  );
};

export default MeshDetails;
