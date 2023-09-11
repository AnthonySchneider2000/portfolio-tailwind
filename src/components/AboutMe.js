import resume from "materials/resume.pdf";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

const Links = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pb-4">
      <a href={resume} target="_blank" rel="noreferrer">
        <div className="text-2xl font-bold">
          <AssignmentIcon fontSize="large" /> Resume
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/anthony-schneider-854ab6249/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-2xl font-bold">
          <LinkedIn fontSize="large" /> LinkedIn
        </div>
      </a>
      <a
        href="https://github.com/AnthonySchneider2000"
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-2xl font-bold">
          <GitHub fontSize="large" /> GitHub
        </div>
      </a>
    </div>
  );
};

export default function AboutMe() {
  return (
    <div className="text-white">
      <div className="text-4xl ml-4 font-bold">About me</div>
      <div className="w-full bg-cyan-700 consistentRounding text-center">
        <div className="text-xl p-4">
          My name is Anthony Schneider. I am a software engineer with a passion
          for learning and creating. <br />
          I have a B.S. in Computer Science from Southern Illinois University
          Edwardsville. <br />
        </div>
        <Links />
      </div>
    </div>
  );
}
