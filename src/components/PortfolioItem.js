import React from "react";
import { useStateContext } from "utils/StateContext";
import { useMediaQuery } from "react-responsive";
import Popover from "@mui/material/Popover";

export default function PortfolioItem({ title, description, image, link }) {
  const { selectProject, selectedProjectName } = useStateContext();
  const [isSelected, setIsSelected] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [displayImage, setDisplayImage] = React.useState(false);

  if (selectedProjectName === title && !isSelected) {
    setIsSelected(true);
  } else if (selectedProjectName !== title && isSelected) {
    setIsSelected(false);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    selectProject(title);
  };

  const isMobile = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });
  const itemHeight = isMobile ? "h-32" : "h-48";
  const itemWidth = isMobile ? "w-32" : "w-48";
  const itemText = isMobile ? "text-[1.5rem]" : "text-[200%]";

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  React.useEffect(() => {
    const handleDocumentClick = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        // Click occurred outside the Popover and PortfolioItem
        handleClose();
      }
    };
    if (anchorEl) {
      // Attach the click event listener when the Popover is open
      document.addEventListener("click", handleDocumentClick);
    } else {
      // Remove the click event listener when the Popover is closed
      document.removeEventListener("click", handleDocumentClick);
    }
  
    // Clean up the effect when unmounting
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [anchorEl]);
  
  return (
    <div
      className={`portfolioItem ${itemHeight} ${
        isSelected
          ? "bg-slate-700 cursor-pointer scale-110"
          : "iconBackground hover:scale-110"
      }`}
      onClick={handleClick}
      onMouseOver={() => setDisplayImage(true)}
      onMouseLeave={() => setDisplayImage(false)}
    >
      {/* display image if displayImage is true, else display div that says hello */}
      {displayImage ? (
        <div className={`portfolioItemText ${itemText}`}>
        <div>
          {/* this div exists so the title doesnt touch the outside of the a tag, which has padding */}
          {title}
        </div>
      </div>
        ) : (
        <img src={image} alt={title} className={`${itemHeight} ${itemWidth}`} />
      )}

      
      
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <img src={image} alt={title} className={`${itemHeight} ${itemWidth}`} />
      </Popover>
      
    </div>
  );
}
