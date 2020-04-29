// this component will work for desktop and mobile
import HomeIcon from "../svg/HomeSVG";
import TrophyIcon from "../svg/TrophySVG.js";

const Footer = () => {
  return (
    <footer className="flex justify-around items-center h-16 bg-mobileFoot w-full">
      <div className="footer-left flex flex-col items-center cursor-pointer lg:hidden">
        <HomeIcon />
        <p className="muli text-sm text-footerText font-semibold">Home</p>
      </div>
      <div className="footer-plus bg-plusPink w-12 h-12 rounded-full cursor-pointer lg:hidden">
        <div className="bg-white w-8 h-1 relative left-halfCircle-Y top-halfCircle-X rounded-md"></div>
        <div className="bg-white w-1 h-8 relative left-halfCircle|X top-halfCircle|Y rounded-md"></div>
      </div>
      <div className="footer-right flex flex-col items-center cursor-pointer invisible">
        <TrophyIcon />
        <p className="muli text-sm text-footerText font-semibold">Challenges</p>
      </div>
    </footer>
  );
};

export default Footer;
