import resume from "materials/resume.pdf";
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

const Bio = () => {
  return (
    <div className="text-xl w-[75%]">
      My name is Anthony Schneider. I am a software engineer with a passion for
      learning and creating. I have a B.S. in Computer Science from Southern
      Illinois University Edwardsville and am ambitious for any work
      opportunities in software development or information technology.
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
