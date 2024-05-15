import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./trial-information.module.css";

const TrialInformation: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <section className={styles.trialInformation}>
      <div className={styles.contactInformation}>
        <div className={styles.contactUsPrompt}>
          <div className={styles.companyInfo}>
            <h1 className={styles.aGuidedTrialContainer}>
              <span className={styles.aGuidedTrialContainer1}>
                <p className={styles.aGuidedTrial}>A Guided Trial for</p>
                <p className={styles.seamlessIntegration}>
                  {" "}
                  Seamless Integration
                </p>
              </span>
            </h1>
          </div>
          <img
            className={styles.privinet1Icon}
            loading="lazy"
            alt=""
            src="/privinet-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.copyrightNotice}>
        <div className={styles.socialIcons}>
          <b className={styles.wantToLearn}>
            Want to learn more? Feel free to reach out to us without hesitation.
          </b>
          <div className={styles.socialIconsInner}>
            <Button
              className={styles.frameChild}
              endIcon={<img width="5px" height="10px" src="/social-icon.svg" />}
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
      </div>
      <footer className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo@2x.png"
              onClick={onLogoImageClick}
            />
            <div className={styles.footerNav}>
              <div className={styles.socialAndContact}>
                <div className={styles.socialLinks}>
                  <div className={styles.followUs}>Follow us</div>
                  <div className={styles.socialIcons1}>
                    <img
                      className={styles.socialIconsChild}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactDetails}>
                    <div className={styles.emailIcon}>
                      <img
                        className={styles.emailIconImage}
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
        <div className={styles.legal}>
          <img
            className={styles.copyrightIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.copyright}>
            <div className={styles.legalLinks}>
              <div className={styles.legalNav}>
                <div className={styles.termsOfServices}>Terms of services</div>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div className={styles.cookies}>Cookies</div>
                <div className={styles.contact} onClick={onContactText1Click}>
                  Contact
                </div>
              </div>
              <div className={styles.privinetAll}>
                © 2024 PriviNet . All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default TrialInformation;
