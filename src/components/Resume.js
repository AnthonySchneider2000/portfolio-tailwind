import React from "react";
import { JobExperienceArray } from "utils/constants";
import { Collapse } from "@mui/material";
import { TechnologyIcon } from "./PortfolioDetailContainer";
import { EducationArray } from "utils/constants";
import { AwardsArray } from "utils/constants";
import { Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";
import { SkillCategoriesArray } from "utils/constants";

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

const SelectedJobExperience = ({ jobExperience }) => {
  return (
    <>
      <div className="text-4xl font-bold mb-2">{jobExperience.position}</div>
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

const JobExperienceItem = ({ jobExperience, index, curJob, setCurJob }) => {
  const isSelected = index === curJob;
  const iconBackground = isSelected
    ? "bg-cyan-800 scale-110"
    : "bg-cyan-700 hover:bg-cyan-800 border-[2px]";
  return (
    <div
      className={`flex flex-col justify-center w-60 items-center gap-4 cursor-pointer hover:scale-110  border-cyan-800 transition-all
      iconTransition ${iconBackground} consistentRounding m-4 p-4 text-center
      `}
      onClick={() => setCurJob(index)}
    >
      <div className="text-xl">{jobExperience.position}</div>
    </div>
  );
};

const JobExperience = () => {
  const [curJob, setCurJob] = React.useState(0);
  const [selectedButton, setSelectedButton] = React.useState(0);
  const [animationInProgress, setAnimationInProgress] = React.useState(false);

  const handleToggleExperience = (index) => {
    if (index === selectedButton) {
      setSelectedButton(index);
      setCurJob(index);
    } else {
      // selecting another item closes the currently selected item
      // waits for the animation to finish before opening the new item
      setAnimationInProgress(true);
      setSelectedButton(index);
      setTimeout(() => {
        setCurJob(index);
        setAnimationInProgress(false);
      }, 600);
    }
  };

  return (
    <SectionContainer>
      <div className="text-3xl font-bold">Job Experience</div>
      <div className="flex flex-row flex-wrap w-full justify-evenly content-evenly">
        {JobExperienceArray.map((jobExperience, index) => {
          return (
            <JobExperienceItem
              jobExperience={jobExperience}
              index={index}
              curJob={selectedButton}
              setCurJob={handleToggleExperience}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex flex-col jstify-center items-center gap-4 p-4 bg-cyan-800 consistentRounding w-full rounded-t-none transform translate-y-4">
        <Collapse in={!animationInProgress} {...{ timeout: 600 }}>
          <div>
            <SelectedJobExperience jobExperience={JobExperienceArray[curJob]} />
          </div>
        </Collapse>
      </div>
    </SectionContainer>
  );
};

const SkillCategory = ({ category, index, selectedCategory, setSelectedCategory }) => {
  const isSelected = index === selectedCategory;
  const iconBackground = isSelected
    ? "bg-cyan-800 scale-110"
    : "bg-cyan-700 hover:bg-cyan-800";
  return (
    <div
      className={`flex flex-col justify-center w-60 items-center gap-4 cursor-pointer hover:scale-110 border-[2px] border-cyan-800 transition-all
      iconTransition ${iconBackground} consistentRounding m-4 p-4 text-center
      `}
      onClick={() => setSelectedCategory(index)}
    >
      <div className="text-xl">{category.title}</div>
    </div>
  );
};


const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const handleToggleCategory = (index) => {
    setSelectedCategory(index);
  };

  return (
    <SectionContainer>
      <div className="w-full">
        <div className="text-3xl font-bold">Skills</div>
        <div className="flex flex-row flex-wrap justify-evenly w-full">
          {SkillCategoriesArray.map((category, index) => {
            return (
              <SkillCategory
                category={category}
                index={index}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleToggleCategory}
                key={index}
              />
            );
          })}
        </div>

        <div className="flex flex-row flex-wrap justify-evenly bg-cyan-800 consistentRounding w-full rounded-t-none transform translate-y-4">
          {SkillCategoriesArray[selectedCategory].skills.map((skill, index) => {
            return (
                <TechnologyIcon technology={skill} key={index} />
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

const Education = () => {
  return (
    <SectionContainer>
      <div className="w-full">
        <div className="text-3xl font-bold">Education</div>
        <div className="flex flex-row flex-wrap justify-evenly p-4 bg-cyan-800 consistentRounding w-full rounded-t-none transform translate-y-4">
          {EducationArray.map((education, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-start items-center w-72 m-4 bg-cyan-900 consistentRounding iconTransition cursor-pointer hover:scale-110"
              >
                <div className="text-2xl w-full bg-cyan-950 p-2 consistentRounding rounded-b-none flex flex-col justify-center">
                  {education.school}
                </div>
                <div className="flex flex-col justify-end items-center gap-2 p-2">
                  <div className="text-xl h-14 flex flex-col justify-center">
                    {education.degree}
                  </div>
                  <div className="text-lg">{education.location}</div>
                  <div className="text-lg">
                    {education.startDate} - {education.endDate}
                  </div>
                  <div className="text-lg">GPA: {education.gpa}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

const Awards = () => {
  const theme = useTheme();
  return (
    <SectionContainer>
      <div className="w-full">
        <div className="text-3xl font-bold">Awards</div>
        <div className="flex flex-row flex-wrap justify-evenly bg-cyan-800 consistentRounding w-full rounded-t-none transform translate-y-4">
          {AwardsArray.map((award, index) => {
            return (
              <Tooltip
                title={<div className="text-xl">{award.description}</div>}
                key={index}
                placement="bottom"
                enterTouchDelay={0}
                leaveTouchDelay={500000}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: theme.palette.cyan.dark,
                      padding: "0.5rem",
                      textAlign: "center",
                    },
                  },
                }}
              >
                <div className="flex flex-col w-[35%] max-w-[200px] justify-center items-center m-4 p-3 rounded-lg iconTransition bg-cyan-900 cursor-pointer hover:scale-110">
                  {award.title}
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default function Resume() {
  return (
    <div className="text-white text-xl">
      <Title>Resume</Title>
      <div className="flex flex-col gap-4">
        <JobExperience />
        <Education />
        <Skills />
        <Awards />
      </div>
    </div>
  );
}
