import type { NextPage } from "next";

const FooterLinks: NextPage = () => {
  return (
    <div className="w-[1440px] flex flex-row items-start justify-start pt-[52px] px-[41px] pb-[264px] box-border relative gap-[145px] max-w-full text-left text-8xl-5 text-white font-nirmala-ui mq1275:flex-wrap">
      <div className="h-full w-[1538px] absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_769px)] [background:linear-gradient(180deg,_rgba(0,_0,_22,_0),_#000016_85.56%)] z-[3]" />
      <div className="w-[783px] flex flex-col items-start justify-start gap-[182px] min-w-[783px] max-w-full mq1275:flex-1 mq1275:min-w-full">
        <div className="w-[696px] relative flex items-center max-w-full z-[9] mq450:text-3xl">
          Imagine a Google for the physical world, revealing patterns and trends
          invisible to the naked eye. That's the potential of Skyye AI.
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-25xl-5 mq1100:flex-wrap">
          <div className="w-[319px] flex flex-col items-start justify-start gap-[37px]">
            <b className="relative leading-[50px] inline-block min-w-[119px] z-[9] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
              Retail
            </b>
            <div className="self-stretch relative text-mid z-[9]">
              Real-time inventory management, personalized customer experiences,
              data-driven store layouts.
            </div>
          </div>
          <div className="w-[319px] flex flex-col items-start justify-start gap-[37px]">
            <b className="relative leading-[50px] z-[9] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
              Airports
            </b>
            <div className="self-stretch relative text-mid z-[9]">
              Optimize passenger flow, enhance baggage tracking, improve
              operational efficiency.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[319px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[319px] text-25xl-5 mq1275:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[86px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <b className="relative leading-[50px] z-[9] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
              <p className="m-0">{`Precision `}</p>
              <p className="m-0">Agriculture</p>
            </b>
            <div className="self-stretch relative text-mid z-[9]">
              Data-driven irrigation, crop health insights, and maximized
              yields.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <b className="relative leading-[50px] z-[9] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
              <p className="m-0">{`Industrial `}</p>
              <p className="m-0">Automation</p>
            </b>
            <div className="self-stretch relative text-mid z-[9]">
              Predictive maintenance, reduced downtime, streamlined operations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
