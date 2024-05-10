// import styles from "./footer.module.css";
import { useRouter } from "next/router";
import { useCallback } from "react";
import styles from "./navigation-container.module.css";

export const NavBar = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop-about-us");
  }, [router]);

  const onApplicationTextClick = useCallback(() => {
    router.push("/desktop-application");
  }, [router]);

  const onTechnologyTextClick = useCallback(() => {
    router.push("/desktop-technology");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <header className={styles.navbar}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoImageClick}
        />
        <nav className={styles.navigationItems}>
          <nav className={styles.navigationLinks}>
            <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </div>
            <div
              className={styles.application}
              onClick={onApplicationTextClick}
            >
              Application
            </div>
            <div className={styles.technology} onClick={onTechnologyTextClick}>
              Technology
            </div>
            <div className={styles.contact} onClick={onContactTextClick}>
              Contact
            </div>
          </nav>
        </nav>
      </header>
    </>
  );
};
