import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "components/Sidebar";
import PortfolioItemContainer from "components/PortfolioItemContainer";
import PortfolioDetailContainer from "components/PortfolioDetailContainer";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import Resume from "components/Resume";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";



let theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'salmon',
    }),
    cyan: theme.palette.augmentColor({
      color: {
        main: 'rgba(21, 94, 117, 1)',
      },
      name: 'cyan',
    }),
    white: theme.palette.augmentColor({
      color: {
        main: '#FFFFFF',
      }, 
      name: 'white',
    }),
  },
});


function Home() {
  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  // const CurrentHome = HomeVersions[isMobile ? "mobile" : "desktop"];
  const version = isMobile ? "mobile" : "desktop";
  const homeStyle = isMobile ? "mpageContainer" : "dpageContainer";
  const topOffset = isMobile ? 84 + 32 : 16; // 84 is the height of the mobile sidebar, 32 is a rem of padding on each side

  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const scrollPosition =
      window.scrollY + ref.current.getBoundingClientRect().top - topOffset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`${homeStyle}`}>
        <Sidebar
          sidebarVersion={version}
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          resumeRef={resumeRef}
          contactRef={contactRef}
        />
        <div className="">
          <div ref={aboutRef}></div>
          <AboutMe />
        </div>
        <div className="mt-[100vh]">
          <div ref={portfolioRef}></div>
          <PortfolioItemContainer />
          <PortfolioDetailContainer />
        </div>
        <div className="mt-[100vh]">
          <div ref={resumeRef}></div>
          <Resume />
        </div>
        <div className="min-h-screen mt-[100vh]">
          <div ref={contactRef}></div>
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
