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
      <div className="text-4xl ml-4 font-bold">About me</div>

      <Container>
        <div>
          <PhoneIcon /> (618) 623-1542
        </div>
        <div>
          <EmailIcon /> tonyschneider3@gmail.com
        </div>
        <div>
          <GitHubIcon /> AnthonySchneider2000
        </div>
        <div>
          <LinkedInIcon /> Anthony Schneider
        </div>

      </Container>
    </div>
  );
}
