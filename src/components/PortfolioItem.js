import React from "react";
import { useStateContext } from "utils/StateContext";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";

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

  const theme = useTheme();

  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  const itemHeight = isMobile ? "h-32" : "h-48";
  const itemWidth = isMobile ? "w-32" : "w-48";

  return (
    <div
      className={`portfolioItem cursor-pointer ${itemHeight} ${
        isSelected ? "bg-cyan-800 scale-[1.2]" : "hover:scale-[1.2]"
      }`}
      onClick={handleClick}
    >
      <Tooltip
        title={<div className="text-xl">{title}</div>}
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: theme.palette.cyan.dark,
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
