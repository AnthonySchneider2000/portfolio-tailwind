import resume from "assets/resume.pdf";
import MyPhoto from "assets/MyPhoto.png";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

const LinkComponent = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="text-2xl iconTextStyle iconTransition">{children}</div>
    </a>
  );
};

const Photo = () => {
  return (
    <div className="max-h-32 aspect-square rounded-full overflow-hidden bg-cyan-800">
      <img src={MyPhoto} alt="Anthony Schneider" />
    </div>
  );
};

const Bio = () => {
  return (
    <div className="text-xl flex-grow w-full">
      I am a software engineer with a passion for learning and creating. I have
      a B.S. in Computer Science from Southern Illinois University Edwardsville
      and am ambitious for any work opportunities in software development or
      information technology.
    </div>
  );
};

const TopSection = () => {
  // contains photo and bio, evenly spaced horizontally
  return (
    <div className="w-full flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-4 font-bold">
        <div className="text-3xl">Anthony Schneider</div>
        <div className="text-2xl">Software Engineer</div>
      </div>
      <Photo />
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-row flex-wrap content-center justify-center gap-4">
      <LinkComponent href={resume}>
        <AssignmentIcon /> Resume
      </LinkComponent>
      <LinkComponent href="https://www.linkedin.com/in/anthony-schneider-854ab6249/">
        <LinkedIn /> LinkedIn
      </LinkComponent>
      <LinkComponent href="https://github.com/AnthonySchneider2000">
        <GitHub /> GitHub
      </LinkComponent>
    </div>
  );
};

const Container = () => {
  return (
    <div className="w-full p-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      <TopSection />
      <Bio />
      <Links />
    </div>
  );
};

export default function AboutMe() {
  return (
    <div className="text-white">
      <div className="text-4xl ml-4 font-bold">About me</div>

      <Container />
    </div>
  );
}
