import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const MainContainer1: NextPage = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop-about-us");
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
    <section className="self-stretch flex flex-col items-end justify-start pt-[34px] pb-[372px] pr-[167px] pl-[41px] box-border relative gap-[220px] max-w-full text-left text-mid text-steelblue font-nirmala-ui mq450:gap-[55px] mq450:pr-5 mq450:box-border mq750:gap-[110px] mq750:pt-5 mq750:pr-[83px] mq750:pb-[157px] mq750:box-border mq1100:pt-[22px] mq1100:pb-[242px] mq1100:box-border">
      <div className="w-full h-[calc(100%_-_12px)] absolute !m-[0] top-[0px] right-[0px] bottom-[12px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_22,_0),_#000016_85.56%)] z-[6]" />
      <div className="w-[745px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:w-[305px]">
        <nav className="m-0 flex flex-row items-start justify-start gap-[47px] max-w-full text-left text-mid text-white font-nirmala-ui mq450:gap-[23px] mq750:hidden">
          <div
            className="relative inline-block min-w-[68px] whitespace-nowrap cursor-pointer z-[7]"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
          <div className="relative text-steelblue inline-block min-w-[86px] z-[7]">
            Application
          </div>
          <div
            className="relative inline-block min-w-[86px] cursor-pointer z-[7]"
            onClick={onTechnologyTextClick}
          >
            Technology
          </div>
          <div
            className="relative inline-block min-w-[59px] cursor-pointer z-[7]"
            onClick={onContactTextClick}
          >
            Contact
          </div>
        </nav>
        <div className="relative inline-block min-w-[71px] whitespace-nowrap z-[7]">
          Follow us
        </div>
      </div>
      <div className="w-[1817.8px] h-[calc(100%_-_12px)] absolute !m-[0] top-[0px] bottom-[12px] left-[-188.9px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[4]"
          alt=""
          src="/backvideo1ezgif-14@2x.png"
        />
        <img
          className="absolute top-[40px] left-[1472.9px] w-[115px] h-[14.1px] z-[7]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
        <img
          className="absolute top-[26px] left-[227.9px] w-[258.6px] h-[43px] object-cover cursor-pointer z-[7]"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoImageClick}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-53xl text-white">
        <div className="w-[768px] flex flex-col items-start justify-start gap-[61px] max-w-full mq450:gap-[15px] mq750:gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-bold font-inherit z-[7] mq450:text-24xl mq450:leading-[48px] mq750:text-39xl mq750:leading-[64px]">{`Connectivity for Remote & Challenging Environments`}</h1>
          <div className="w-[757px] relative text-8xl-5 flex items-center max-w-full z-[7] mq450:text-3xl">
            <span className="w-full">
              <span>{`PriviNet's proprietary LPWAN technology, `}</span>
              <b>SkyyeWave</b>
              <span>{`, shatters the limits of traditional networks. `}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer1;
