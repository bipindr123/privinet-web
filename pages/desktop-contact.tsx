import type { NextPage } from "next";
import NavigationContainer from "../components/navigation-container";
import GroupComponent2 from "../components/group-component2";
import styles from "./desktop-contact.module.css";

const DesktopContact: NextPage = () => {
  return (
    <div className={styles.desktopContact}>
      <div className={styles.blackTranslucid} />
      <img
          className={styles.backvideo1Ezgif1Icon}
          loading="lazy"
          alt=""
          src="/contact1.gif"
        />
      <main className={styles.navigationContainerParent}>
        <NavigationContainer />
      </main>
      <GroupComponent2 />
    </div>
  );
};

export default DesktopContact;
