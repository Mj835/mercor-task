import React from "react";
import AppleIcon from "../assets/AppleIcon.png";
import PlaystoreIcon from "../assets/PlayStore.png";
import DownArrow from "../assets/DownArrow.png";
import SocialIcon from "../assets/Frame.png";
import TwitterIcon from "../assets/Twitter.png";
import InstagramIcon from "../assets/Instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 px-8 xl:px-14 py-5 flex lg:flex-nowrap flex-wrap justify-center lg:gap-0 gap-5 lg:justify-between items-center">
      <div className="flex-col justify-start items-center gap-14 inline-flex">
        <div className="justify-start items-center gap-5 inline-flex">
          <button className="w-[170px] h-[50px] p-[25px] bg-black rounded-[7px] border border-white justify-center gap-6 items-center flex">
            <img src={AppleIcon} alt="AppleIcon" />
            <p className="text-center text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide p-0 m-0">
              APP STORE
            </p>
          </button>
          <button className="w-[170px] h-[50px] p-3 bg-black rounded-[7px] border border-white justify-center gap-6 items-center flex">
            <img src={PlaystoreIcon} alt="PlaystoreIcon" />
            <p className="text-center text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide p-0 m-0">
              GOOGLE PLAY
            </p>
          </button>
        </div>
      </div>
      <Link className="hidden lg:block" href="/">
        <img src={DownArrow} alt="DownArrow" />
      </Link>
      <div className="flex md:flex-nowrap flex-wrap gap-[35px]">
        <div className="w-[363px] text-zinc-400 text-[10px] font-bold leading-[13px]">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
          <br />
          See our BrokerCheck. Investing involves risk; you may lose money.
          Bitcoin trading offered by Cash App. Cash App Investing does not trade
          bitcoin and Cash App is not a member of FINRA or SIPC. Cash App
          facilitates banking services through Sutton Bank and Lincoln Savings
          Bank, Members FDIC.
        </div>

        <div className="flex justify-center items-center gap-[30px] ">
          <a href="/">
            <img src={SocialIcon} alt="SocialIcon" />
          </a>
          <a href="/">
            <img src={TwitterIcon} alt="TwitterIcon" />
          </a>
          <a href="/">
            <img src={InstagramIcon} alt="InstagramIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
