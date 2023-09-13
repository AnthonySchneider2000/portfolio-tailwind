import React from "react";
import { JobExperienceArray } from "utils/constants";

const SectionContainer = ({ children }) => {
  return (
    <div className="w-full p-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <div className="text-4xl ml-4 font-bold">{children}</div>;
};

const JobExperienceItem = ({ jobExperience }) => {
  return (
    <div className="w-[30vw] h-[35vw] iconTransition iconBackground consistentRounding p-4
    grid grid-cols-1 gap-[1vw] hover:scale-[1.1]">
      <div className="text-[2vw] leading-[2.3vw] lineh font-bold">{jobExperience.position}</div>
      <div>
        <div className="text-[1.7vw] leading-[2.0vw]">{jobExperience.employer}</div>
        <div className="text-[1.5vw] leading-[1.8vw]">{jobExperience.location}</div>
        {/* startDate - endDate */}
        <div className="text-[1.5vw] leading-[1.8vw]">
          {jobExperience.startDate} - {jobExperience.endDate}
        </div>
        <div className="text-[1.5vw] leading-[1.8vw]">
          {jobExperience.responsibilities.map((responsibility, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-start items-center m-[1vw] gap-2"
              >
                <div className="text-[1.5vw] leading-[1.8vw]">•</div>
                <div className="text-[1.5vw] leading-[1.8vw]">{responsibility}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const JobExperience = () => {
  return (
    <>
      <div className="text-3xl font-bold">Job Experience</div>
      <div className="flex flex-row flex-wrap w-full justify-evenly content-evenly">
        {JobExperienceArray.map((jobExperience, index) => {
          return (
            <JobExperienceItem jobExperience={jobExperience} key={index} />
          );
        })}
      </div>
    </>
  );
};

export default function Resume() {
  return (
    <div className="text-white text-xl">
      <Title>Resume</Title>
      <SectionContainer>
        <JobExperience />
      </SectionContainer>
    </div>
  );
}
