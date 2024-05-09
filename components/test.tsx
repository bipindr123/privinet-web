import React from "react";
import styles from "./test.module.css";
import { NavBar } from "./navbar";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/system/Box";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Button } from "@mui/material";
// import styles2 from "./desktop-about-us.module.css";

interface Props {
  text1: string;
  text1Position: "left" | "center";
  text2: string;
}

const FullScreenImageTextComponent: React.FC<Props> = ({
  text1,
  text1Position,
  text2,
}) => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <>
      <div className={styles.fullpage}>
        <div className={styles.navbar}>
          <NavBar />
        </div>

        <div
          className={styles.fullscreenContainer1}
          style={{ backgroundImage: `url(app.gif)` }}
        >
          <div className={styles.gradient} />
          <div className={styles.p1head}>
            Connectivity for Remote & Challenging Environments
            <div className={styles.p1subhead}>
              PriviNet's proprietary LPWAN technology, SkyyeWave, shatters the
              limits of traditional networks.
            </div>
          </div>
        </div>

        <div
          className={styles.fullscreenContainer}
          style={{ backgroundImage: `url(app2.gif)` }}
        >
          <div className={styles.gradienttop} />
          <div className={styles.gradient} />
          <div className={styles.p2sidehead}>SkyyeWave</div>
          <div className={styles.p2head}>
            Extending Connectivity Beyond Limits
            <div className={styles.p2subhead}>
              Imagine a world where distance doesn't matter. SkyyeWave connects
              seamlessly, from cities to remote areas. We've engineered a
              breakthrough solution that combines:
            </div>
          </div>

          <div className={styles.grid1}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid xs={12} sm={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>Extended Range</div>
                    <div className={styles.cardDescription}>
                      Advanced designs and optimized protocols maximize signal
                      reach, unlocking connectivity in remote and harsh
                      environments.
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Enhanced Data Capacity
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Mesh Network Integration
                    </div>
                    <div className={styles.cardDescription}>
                      Innovative techniques boost data throughput within LoRaWAN
                      limitations, enabling richer IoT data collection without
                      requiring additional licensing.
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div
          className={styles.fullscreenContainer}
          style={{ backgroundImage: `url(app3.gif)` }}
        >
          <div className={styles.gradienttop} />
          <div className={styles.gradient} />
          <div className={styles.p3head}>
            The Intelligence Powering Your Network
            <div className={styles.p3subhead}>
              Intelligent Connectivity, Limitless Potential. With Skyye Ai,
              we're unlocking the power of intelligent connectivity, paving the
              way for boundless opportunities.
            </div>
          </div>

          <div className={styles.grid2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Dynamic Optimization
                    </div>
                    <div className={styles.cardDescription}>
                      Skyye AI continuously analyzes network data, tailoring
                      performance to the unique demands of your devices,
                      applications, and environment.
                    </div>
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Proactive Intelligence
                    </div>
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Limitless Adaptability
                    </div>
                    <div className={styles.cardDescription}>
                      Skyye AI's self-learning capabilities ensure your
                      connectivity solution evolves alongside your ever-changing
                      needs.
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div
          className={styles.fullscreenContainer}
          style={{ backgroundImage: `url(app4.gif)` }}
        >
          <div className={styles.gradienttop} />
          <div className={styles.gradient} />
          <div className={styles.p4head}>
            Data is Power. Skyye AI Unlocks It.
            <div className={styles.p4subhead}>
              Imagine a Google for the physical world, revealing patterns and
              trends invisible to the naked eye. That's the potential of Skyye
              AI.
            </div>
          </div>

          <div className={styles.grid4}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid xs={12}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>Smart Cities</div>
                    <div className={styles.cardDescription}></div>
                  </div>
                </Grid>
                <Grid xs={12}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Precision Agriculture
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className={styles.grid2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>Retail</div>
                    <div className={styles.cardDescription}>
                      Real-time inventory management, personalized customer
                      experiences, data-driven store layouts.
                    </div>
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>Airports</div>
                  </div>
                </Grid>
                <Grid xs={4}>
                  <div className={styles.customCard}>
                    <div className={styles.cardHeading}>
                      Industrial Automation
                    </div>
                    <div className={styles.cardDescription}>
                      Predictive maintenance, reduced downtime, streamlined
                      operations.
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div className={styles.fullscreenContainer5}>
          <div className={styles.p5head}>
            A Guided Trial for Seamless Integration
          </div>
          <div className={styles.videoframe}>
            <video
              width="80%"
              controls
              className={styles.video}
              src="teaser.mp4"
            ></video>
          </div>
          <div className={styles.p5learnmore}>
            Want to learn more? Feel free to reach out to us without hesitation.
          </div>
          <Button
            className={styles.learnmorebutton}
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
            onClick={onContactText1Click}
          >
            Contact us
          </Button>
        </div>

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
                        Contact@privinet.com
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
      </div>
    </>
  );
};

export default FullScreenImageTextComponent;
