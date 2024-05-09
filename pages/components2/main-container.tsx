import type { NextPage } from "next";

const MainContainer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[224px] max-w-full text-left text-25xl-5 text-white font-nirmala-ui mq450:gap-[56px] mq750:gap-[112px]">
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[61px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative leading-[80px] z-[7] mq450:text-8xl mq450:leading-[48px] mq750:text-17xl mq750:leading-[64px]">
          Skyye AI
        </div>
      </div>
      <div className="self-stretch [background:linear-gradient(180deg,_rgba(0,_0,_22,_0),_#000016_85.56%)] flex flex-col items-end justify-start pt-3 pb-[287px] pr-[61px] pl-14 box-border gap-[97px] max-w-full z-[7] text-right text-8xl-5 mq450:gap-[24px] mq750:gap-[48px] mq750:pt-5 mq750:pb-[187px] mq750:pr-[30px] mq750:pl-7 mq750:box-border">
        <div className="w-[1440px] h-[732px] relative [background:linear-gradient(180deg,_rgba(0,_0,_22,_0),_#000016_85.56%)] hidden max-w-full" />
        <div className="w-[709px] relative flex items-center max-w-full z-[8] mq450:text-3xl">
          <span className="w-full">
            <span>{`Intelligent Connectivity, Limitless Potential. With `}</span>
            <b>Skyye Ai</b>
            <span>{`, we're unlocking the power of intelligent connectivity, paving the way for boundless opportunities. `}</span>
          </span>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-25xl-5 mq1275:flex-wrap">
          <div className="w-[329px] flex flex-col items-start justify-end pt-0 pb-[17px] pr-2.5 pl-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="relative leading-[50px] z-[8] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
                <p className="m-0">{`Dynamic `}</p>
                <p className="m-0">Optimization</p>
              </b>
              <div className="self-stretch relative text-mid z-[8]">
                Skyye AI continuously analyzes network data, tailoring
                performance to the unique demands of your devices, applications,
                and environment.
              </div>
            </div>
          </div>
          <div className="h-[218px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border">
            <img
              className="w-0 flex-1 relative max-h-full object-contain z-[8]"
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className="w-[329px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border min-h-[218px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
              <b className="relative leading-[50px] z-[8] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
                <p className="m-0">{`Proactive `}</p>
                <p className="m-0">Intelligence</p>
              </b>
              <div className="self-stretch relative text-mid z-[8]">
                Predictive algorithms anticipate disruptions, pinpoint potential
                optimizations, and safeguard your network.
              </div>
            </div>
          </div>
          <div className="h-[218px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border">
            <img
              className="w-0 flex-1 relative max-h-full object-contain z-[8]"
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className="h-[218px] w-[319px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
              <b className="relative leading-[50px] z-[8] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
                <p className="m-0">{`Limitless `}</p>
                <p className="m-0">Adaptability</p>
              </b>
              <div className="self-stretch relative text-mid z-[8]">
                Skyye AI's self-learning capabilities ensure your connectivity
                solution evolves alongside your ever-changing needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
