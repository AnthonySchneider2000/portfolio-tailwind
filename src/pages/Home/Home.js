import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
// import DesktopHome from "./DesktopHome";
// import MobileHome from "./MobileHome";
import Sidebar from "components/Sidebar";
import PortfolioItemContainer from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";

// const HomeVersions = {
//   desktop: DesktopHome,
//   mobile: MobileHome,
// }

function Home() {
  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  // const CurrentHome = HomeVersions[isMobile ? "mobile" : "desktop"];
  const version = isMobile ? "mobile" : "desktop";
  const homeStyle = isMobile ? "mpageContainer" : "dpageContainer";
  const topOffset = isMobile ? 112 + 32 : 16; // 112 is the height of the mobile sidebar, 32 is a rem of padding on each side

  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const scrollPosition =
      window.scrollY + ref.current.getBoundingClientRect().top - topOffset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <div className={`${homeStyle}`}>
      <Sidebar
        sidebarVersion={version}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <div className="min-h-screen">
        <div ref={aboutRef}></div>
        <AboutMe />
      </div>
      <div className="min-h-screen">
        <div ref={portfolioRef}></div>
        <PortfolioItemContainer />
        <PortfolioDetailContainer />
      </div>
      <div className="min-h-screen">
        <div ref={contactRef}></div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
