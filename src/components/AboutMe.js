import resume from "materials/resume.pdf";
import MyPhoto from "materials/MyPhoto.png";
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
      <img src={MyPhoto} alt="Anthony Schneider"  />
    </div>
  );
};


const Bio = () => {
  return (
    <div className="text-xl flex-grow w-3/4">
      My name is Anthony Schneider. I am a software engineer with a passion for
      learning and creating. I have a B.S. in Computer Science from Southern
      Illinois University Edwardsville and am ambitious for any work
      opportunities in software development or information technology.
    </div>
  );
};

const TopSection = () => {
  // contains photo and bio, photo is in the right, bio is in the left with flex-grow
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Bio />
      <Photo />
    </div>
  );
};

const Links = () => {
  return (
    <>
      <LinkComponent href={resume}>
        <AssignmentIcon /> Resume
      </LinkComponent>
      <LinkComponent href="https://www.linkedin.com/in/anthony-schneider-854ab6249/">
        <LinkedIn /> LinkedIn
      </LinkComponent>
      <LinkComponent href="https://github.com/AnthonySchneider2000">
        <GitHub /> GitHub
      </LinkComponent>
    </>
  );
};

const Container = () => {
  return (
    <div className="w-full p-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      <TopSection />
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
