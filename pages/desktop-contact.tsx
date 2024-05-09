import type { NextPage } from "next";
import NavigationContainer from "../components/navigation-container";
import GroupComponent2 from "../components/group-component2";
import styles from "./desktop-contact.module.css";

const DesktopContact: NextPage = () => {
  return (
    <div className={styles.desktopContact}>
      <div className={styles.blackTranslucid} />
      <main className={styles.navigationContainerParent}>
        <NavigationContainer />
        <section className={styles.mapContainerParent}>
          <div className={styles.mapContainer}>
            <div className={styles.mapInformation}>
              <img
                className={styles.map1Icon}
                loading="lazy"
                alt=""
                src="/map-1@2x.png"
              />
              <b className={styles.privinet}>PriviNet</b>
            </div>
          </div>
          <img
            className={styles.backvideo1Ezgif1Icon}
            loading="lazy"
            alt=""
            src="/backvideo1ezgif-1@2x.png"
          />
        </section>
      </main>
      <GroupComponent2 />
    </div>
  );
};

export default DesktopContact;
