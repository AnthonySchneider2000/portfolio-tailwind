import { useMediaQuery } from "react-responsive";
// import DesktopHome from "./DesktopHome";
// import MobileHome from "./MobileHome";
import Sidebar from "components/Sidebar";
import PortfolioItemContainer from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";


// const HomeVersions = {
//   desktop: DesktopHome,
//   mobile: MobileHome,
// }

function Home() {
  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  // const CurrentHome = HomeVersions[isMobile ? "mobile" : "desktop"];
  const version = isMobile ? "mobile" : "desktop";
  const homeStyle = isMobile ? "mpageContainer" : "dpageContainer";
  console.log("homeStyle", homeStyle);
  return (
    <div className={`${homeStyle} pr-4`}>
      <Sidebar sidebarVersion={version} />
      <AboutMe />
      <div className="h-screen">
        gap
      </div>
      <PortfolioItemContainer />
      <PortfolioDetailContainer />
    </div>
  );
}

export default Home;
