import React from "react";
import TrendingYoutubeItem from "./TrendingYoutubeItem";

const TrendingYoutubeAllList = ({ statData, columns }) => {
    // Determine the grid column classes based on the `columns` prop
  const gridClasses = `grid gap-2 ${columns === 1 ? "grid-cols-1" : "grid-cols-2"}`;

    return (
        // flex flex-col max-w-[570px] 
        // topic, count, isFirst
      <section className={gridClasses}>
        {statData.map((stat, index) => (
          <TrendingYoutubeItem key={index} {...stat} />
        ))}
  
      </section>
  
    );
  
}

// Default prop value if statData is not provided
TrendingYoutubeAllList.defaultProps = {
    statData: [
      { topic: "Rhys Ifans", count: "178x" },
    
    ],
    isFirst: '',
    columns: 2 // Default to 2 columns if not provided
  };

  
  
  export default TrendingYoutubeAllList;