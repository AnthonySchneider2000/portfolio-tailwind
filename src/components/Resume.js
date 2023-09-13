import React from "react";
import { JobExperienceArray } from "utils/constants";

const SectionContainer = ({ children }) => {
  return (
    <div className="w-full pt-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <div className="text-4xl ml-4 font-bold">{children}</div>;
};

const JobExperienceItem = ({ jobExperience, index, setCurItem }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-110 transition-all"
      onClick={() => setCurItem(index)}
    >
      <div className="text-2xl font-bold">{jobExperience.company}</div>
      <div className="text-xl">{jobExperience.position}</div>
    </div>
  );
};

const SelectedJobExperience = ({ jobExperience }) => {
  return (
    <>
      <div className="text-4xl font-bold">{jobExperience.position}</div>
      <div className="text-3xl">{jobExperience.employer}</div>
      <div className="text-2xl">{jobExperience.location}</div>
      {/* startDate - endDate */}
      <div className="text-xl">
        {jobExperience.startDate} - {jobExperience.endDate}
      </div>
      <div className="text-xl">
        {jobExperience.responsibilities.map((responsibility, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-center items-center m-2 gap-2"
            >
              <div className="text-xl">•</div>
              <div className="text-xl">{responsibility}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const JobExperience = () => {
  const [curItem, setCurItem] = React.useState(0);

  return (
    <>
      <div className="text-3xl font-bold">Job Experience</div>
      <div className="flex flex-row flex-wrap w-full justify-evenly content-evenly">
        {JobExperienceArray.map((jobExperience, index) => {
          return (
            <JobExperienceItem
              jobExperience={jobExperience}
              index={index}
              setCurItem={setCurItem}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4 bg-cyan-800 consistentRounding w-full rounded-t-none transform translate-y-4">
        <SelectedJobExperience jobExperience={JobExperienceArray[curItem]} />
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
