import type { NextPage } from "next";
import Background1 from "../components/background1";
import TrialIntegration from "../components/trial-integration";
import FooterLinks from "../components/footer-links";
import MainContainer1 from "../components/main-container1";
import MainContainer from "../components/main-container";
import TrialInformation from "../components/trial-information";
import FullScreenImageTextComponent from "../components/test";
import { NavBar } from "../components/navbar";

const DesktopApplication: NextPage = () => {
  return (
    <>
    <FullScreenImageTextComponent text1="HELLO" text1Position="left" text2="WORLD"/>
    </>
  );
};

export default DesktopApplication;
