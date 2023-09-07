import React from "react";

export default function PortfolioItem({ title, description, image, link }) {
  return (
    <div className="portfolioItem">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolioItemText"
      >
        {title}
      </a>
    </div>
  );
}
