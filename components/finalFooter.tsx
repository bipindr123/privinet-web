import { NextPage } from "next";
import React, { useCallback } from "react";

import styles from "./finalFooter.module.css";
import { useRouter } from "next/router";

const FinalFooter: NextPage = () => {

  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  
    return(
        <footer className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.footerContent}>
            <div className={styles.footerLogoAndSocialMedia}>
              <img
                className={styles.logoIcon}
                alt=""
                src="/logo@2x.png"
                onClick={onLogoImageClick}
              />
              <div className={styles.footerSocialMediaContainer}>
                <div className={styles.followUs}>
                  <div className={styles.followUsParent}>
                    <div className={styles.followUs1}>Follow us</div>
                    <div className={styles.socialMediaIcons}>
                      <img
                        className={styles.socialMediaIconsChild}
                        loading="lazy"
                        alt=""
                        src="/group-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.footerContact}>
                    <div className={styles.contactDetails}>
                      <div className={styles.contactIconWrapper}>
                        <img
                          className={styles.contactIcon}
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
          <div className={styles.copyright}>
            <img
              className={styles.designElementIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <div className={styles.legalAndCopyright}>
              <div className={styles.legalLinksParent}>
                <div className={styles.legalLinks}>
                  <div className={styles.termsOfServices}>
                    Terms of services
                  </div>
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
    );
};

export default FinalFooter;