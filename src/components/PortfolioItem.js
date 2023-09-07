import React from "react";
import { styles } from "styles/styles";

export default function PortfolioItem({ title, description, image, link }) {
  return (
    <div className={styles.iconBackground + "rounded-3xl h-40 w-40" + styles.transition}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full h-full text-center rounded-3xl 
        flex flex-col content-center justify-center 
       text-3xl` + styles.transition + styles.iconTextStyle}
      >
        {title}
      </a>
    </div>
  );
}
