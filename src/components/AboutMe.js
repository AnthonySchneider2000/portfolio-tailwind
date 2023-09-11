import resume from "materials/resume.pdf";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
        <a href={resume} target="_blank" rel="noreferrer">
          <div className="text-2xl font-bold">
            <AssignmentIcon fontSize="large" /> Resume
          </div>
        </a>
      </div>
    </div>
  );
}
