import React from "react";

export default function PortfolioItem({ title, description, image, link }) {
  return (
    <div className="rounded-3xl h-40 w-40 iconBackground iconTransition">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full text-center rounded-3xl 
        flex flex-col content-center justify-center 
        text-3xl iconTextStyle iconTransition"
      >
        {title}
      </a>
    </div>
  );
}
