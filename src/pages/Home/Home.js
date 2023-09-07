import { useMediaQuery } from "react-responsive";
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";


function Home() {
  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  if(isMobile) console.log("Mobile");
  else console.log("Desktop");
  return (
    <>
      {isMobile ? <MobileHome /> : <DesktopHome />}
    </>
  );
}

export default Home;
