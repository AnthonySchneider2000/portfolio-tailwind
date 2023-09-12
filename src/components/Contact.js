import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Container = ({ children }) => {
  return (
    <div className="w-full p-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      {children}
    </div>
  );
};

export default function Contact() {
  return (
    <div className="text-white">
      <div className="text-4xl ml-4 font-bold">Contact</div>

      <Container>
        Thank you for visiting my portfolio. If you are interested in
        collaborating or have any inquiries, please feel free to get in touch
        through the following channels:
        <div>
          <PhoneIcon /> (618) 623-1542
        </div>
        <div>
          <EmailIcon /> <a href="mailto:tonyschneider3@gmail.com">tonyschneider3@gmail.com</a>
        </div>
        <div>
          <GitHubIcon /> <a href="https://github.com/AnthonySchneider2000">GitHub</a>
        </div>
        <div>
          <LinkedInIcon /> <a href="https://www.linkedin.com/in/anthony-schneider-854ab6249/">LinkedIn</a>
        </div>
      </Container>
    </div>
  );
}
