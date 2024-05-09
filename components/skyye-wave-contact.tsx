import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./skyye-wave-contact.module.css";

const SkyyeWaveContact: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <section className={styles.skyyeWaveContact}>
      <div className={styles.contactUsPrompt}>
        <b className={styles.discoverHowSkyyewave}>
          Discover how SkyyeWave transforms connectivity challenges into
          opportunities
        </b>
        <div className={styles.contactUsButton}>
          <Button
            className={styles.contactUsButtonChild}
            endIcon={<img width="5px" height="10px" src="/vector-3.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "17",
              background: "#3b8dcb",
              borderRadius: "41px",
              "&:hover": { background: "#3b8dcb" },
              width: 198,
            }}
            onClick={onGroupButtonClick}
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkyyeWaveContact;
