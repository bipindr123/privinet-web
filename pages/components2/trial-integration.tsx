import type { NextPage } from "next";

const TrialIntegration: NextPage = () => {
  return (
    <div className="w-full !m-[0] absolute top-[11px] left-[0px] flex flex-row items-start justify-start max-w-full text-left text-53xl text-white font-nirmala-ui">
      <img
        className="h-[1013px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/backgroundvideo2ezgif-1-2@2x.png"
      />
      <div className="w-[1440px] !m-[0] absolute top-[-11px] left-[150px] flex flex-row items-end justify-start pt-[61px] px-[41px] pb-[751px] box-border gap-[160px] max-w-full mq1275:flex-wrap">
        <div className="h-full w-[1498px] absolute !m-[0] top-[1024px] bottom-[-1024px] left-[calc(50%_+_749px)] [background:linear-gradient(180deg,_rgba(0,_0,_22,_0),_#000016_81.9%)] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[2]" />
        <div className="w-[768px] flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border min-w-[768px] min-h-[212px] max-w-full mq1275:flex-1 mq1275:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-bold font-inherit z-[9] mq450:text-24xl mq450:leading-[48px] mq750:text-39xl mq750:leading-[64px]">
            Data is Power. Skyye AI Unlocks It.
          </h1>
        </div>
        <div className="w-[319px] flex flex-col items-start justify-start gap-[15px] min-w-[319px] text-25xl-5 mq1275:flex-1">
          <b className="relative leading-[50px] z-[9] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
            Smart Cities
          </b>
          <div className="self-stretch relative text-mid z-[9]">
            Real-time traffic management, optimized resource allocation,
            enhanced public safety.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialIntegration;
