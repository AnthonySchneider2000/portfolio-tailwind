import { useMediaQuery } from "react-responsive";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";


const HomeVersions = {
  desktop: DesktopHome,
  mobile: MobileHome,
}

function Home() {
  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  const CurrentHome = HomeVersions[isMobile ? "mobile" : "desktop"];
  return (
    <>
      <CurrentHome />
    </>
  );
}

export default Home;
