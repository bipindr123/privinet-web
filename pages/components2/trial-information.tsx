import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const TrialInformation: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[164px] max-w-full text-center text-53xl text-white font-nirmala-ui mq450:gap-[41px] mq750:gap-[82px]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-2 box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[92px] max-w-full mq450:gap-[23px] mq750:gap-[46px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
            <h1 className="m-0 w-[844px] relative text-inherit tracking-[-0.04em] leading-[80px] font-bold font-inherit flex items-center shrink-0 max-w-full z-[9] mq450:text-24xl mq450:leading-[48px] mq750:text-39xl mq750:leading-[64px]">
              <span className="w-full">
                <p className="m-0">A Guided Trial for</p>
                <p className="m-0"> Seamless Integration</p>
              </span>
            </h1>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/privinet-1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-25xl-5">
        <div className="w-[844px] flex flex-col items-start justify-start gap-[55px] max-w-full mq450:gap-[27px]">
          <b className="self-stretch relative tracking-[-0.04em] leading-[50px] mq450:text-8xl mq450:leading-[30px] mq750:text-17xl mq750:leading-[40px]">
            Want to learn more? Feel free to reach out to us without hesitation.
          </b>
          <div className="self-stretch h-[52px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <Button
              className="self-stretch w-[198px] cursor-pointer"
              endIcon={<img width="5px" height="10px" src="/social-icon.svg" />}
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
              onClick={onGroupButtonClick}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
      <footer className="self-stretch [background:linear-gradient(-1deg,_#000016,_#0f3054_98.93%)] flex flex-col items-start justify-start pt-[73px] px-0 pb-10 box-border gap-[49px] max-w-full text-left text-mid text-steelblue font-nirmala-ui mq750:gap-[24px]">
        <div className="self-stretch h-[283px] relative [background:linear-gradient(-1deg,_#000016,_#0f3054_98.93%)] hidden" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[41px] pl-[39px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <img
              className="h-[43px] w-[258.6px] relative object-cover shrink-0 [debug_commit:1de1738] cursor-pointer z-[1]"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
              onClick={onLogoImageClick}
            />
            <div className="w-[211px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px] shrink-0 [debug_commit:1de1738]">
                <div className="self-stretch flex flex-row items-end justify-start gap-[25px]">
                  <div className="relative inline-block min-w-[71px] z-[1]">
                    Follow us
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.9px]">
                    <img
                      className="self-stretch h-[14.1px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-px text-white">
                  <div className="flex-1 flex flex-row items-end justify-start gap-[18px]">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px]">
                      <img
                        className="w-[18px] h-[13.5px] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className="relative whitespace-nowrap z-[1]">
                      Contact@privinet.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-white">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[41px] pl-[39px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1100:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[58px] max-w-full mq750:flex-wrap mq750:gap-[29px]">
                <div className="relative inline-block min-w-[128px] z-[1]">
                  Terms of services
                </div>
                <div className="relative inline-block min-w-[100px] z-[1]">
                  Privacy Policy
                </div>
                <div className="relative inline-block min-w-[60px] z-[1]">
                  Cookies
                </div>
                <div
                  className="relative inline-block min-w-[59px] cursor-pointer z-[1]"
                  onClick={onContactText1Click}
                >
                  Contact
                </div>
              </div>
              <div className="relative z-[1]">
                © 2024 PriviNet . All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default TrialInformation;
