import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./navigation-container.module.css";
import { NavBar } from "./navbar";
import ContactForm from "./ContactForm";

const NavigationContainer: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop-about-us");
  }, [router]);

  const onApplicationTextClick = useCallback(() => {
    router.push("/desktop-application");
  }, [router]);

  const onTechnologyTextClick = useCallback(() => {
    router.push("/desktop-technology");
  }, [router]);

  return (
    <section className={styles.navigationContainer}>
      <div className={styles.gradient} />
      <NavBar />
      <Box sx={{ flexGrow: 1 }} className={styles.box}>
        <Grid container spacing={1}>
          <Grid xs={6} md={5}>
            <h3 className={styles.heading}>Get in touch</h3>
            <p className={styles.subheading}>
              Please fill out the next form, and one of our experts will get
              back to you as soon as possible.
            </p>
          </Grid>
          <Grid xs={6} md={7} className={styles.form}>
            <ContactForm></ContactForm>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default NavigationContainer;
