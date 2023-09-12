import React from "react";
import { useStateContext } from "utils/StateContext";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "@mui/material";

export default function PortfolioItem({ title, description, image, link }) {
  const { selectProject, selectedProjectName } = useStateContext();
  const [isSelected, setIsSelected] = React.useState(false);

  if (selectedProjectName === title && !isSelected) {
    setIsSelected(true);
  } else if (selectedProjectName !== title && isSelected) {
    setIsSelected(false);
  }

  const handleClick = (event) => {
    selectProject(title);
  };

  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  const itemHeight = isMobile ? "h-32" : "h-48";
  const itemWidth = isMobile ? "w-32" : "w-48";

  return (
    <div
      className={`portfolioItem m-6 ${itemHeight} ${
        isSelected
          ? "bg-cyan-800 scale-[1.2]"
          : "hover:scale-[1.2]"
      }`}
      onClick={handleClick}
    >
      <Tooltip
        title={<div className="text-xl">{title}</div>}
        placement="bottom" // Use the provided placement prop
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "rgb(17 24 39)", // bg-gray-900
              padding: "0.5rem",
            },
          },
        }}
      >
        <img
          src={image}
          alt={title}
          className={`${itemHeight} ${itemWidth} p-2`}
        />
      </Tooltip>
    </div>
  );
}
