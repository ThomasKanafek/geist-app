import React from "react";
import TopTopicsItem from "./TopTopicsItem";

const TopTopicsAllList = ({ statData, columns }) => {
    // Determine the grid column classes based on the `columns` prop
  const gridClasses = `grid gap-2 ${columns === 1 ? "grid-cols-1" : "grid-cols-2"}`;

    // // Venom data
    // const statData = [
    //     { number: 117, name: "Rhys Ifans", percentage: 2.8 },
    //     { number: 101, name: "Joker Folie A Deux", percentage: 6.5 },
    //     { number: 96, name: "Scream Symbiote", percentage: 71.5 },
    //     { number: 95, name: "Blade", percentage: 139.5 },
    //     { number: 88, name: "Xenophage", percentage: -3.3 },
    //     { number: 80, name: "Doctor Strange", percentage: 61.4 },
    //     { number: 76, name: "Marvel Toxin", percentage: 26.1 },
    //     { number: 52, name: "Baron Mordo", percentage: 1.9 },
    //     { number: 44, name: "A Quiet Place Day One", percentage: 11.8 },
    //     { number: 39, name: "The Wild Robot", percentage: -6.3 },
    //     { number: 25, name: "Peggy Lu", percentage: 106.1 },
    //     { number: 21, name: "Smile 2", percentage: 7.8 },
    //     { number: 17, name: "IMAX", percentage: -17.3 },
    //     { number: 11, name: "Trap", percentage: -9.9 },
    //     { number: 8, name: "Gladiator", percentage: 11.7 },
    //     { number: 8, name: "Knull", percentage: 245.9 },
    //     { number: 6, name: "Dr Doom", percentage: 371.1 },
    //     { number: 5, name: "Alien Romulus", percentage: 508.4 },
    //     { number: 3, name: "The Watchers", percentage: 106.2 },
    //     { number: 2, name: "Patrick Mulligan", percentage: -8.8 }
    // ];
    return (
        // flex flex-col max-w-[570px] 
      <section className={gridClasses}>
        {statData.map((stat, index) => (
          <TopTopicsItem key={index} {...stat} />
        ))}
  
      </section>
  
    );
  
}

// Default prop value if statData is not provided
TopTopicsAllList.defaultProps = {
    statData: [
      { number: 117, name: "Rhys Ifans", percentage: 2.8 },
      { number: 101, name: "Joker Folie A Deux", percentage: 6.5 },
      { number: 96, name: "Scream Symbiote", percentage: 71.5 },
      { number: 95, name: "Blade", percentage: 139.5 },
      { number: 88, name: "Xenophage", percentage: -3.3 },
      { number: 80, name: "Doctor Strange", percentage: 61.4 },
      { number: 76, name: "Marvel Toxin", percentage: 26.1 },
      { number: 52, name: "Baron Mordo", percentage: 1.9 },
      { number: 44, name: "A Quiet Place Day One", percentage: 11.8 },
      { number: 39, name: "The Wild Robot", percentage: -6.3 },
      { number: 25, name: "Peggy Lu", percentage: 106.1 },
      { number: 21, name: "Smile 2", percentage: 7.8 },
      { number: 17, name: "IMAX", percentage: -17.3 },
      { number: 11, name: "Trap", percentage: -9.9 },
      { number: 8, name: "Gladiator", percentage: 11.7 },
      { number: 8, name: "Knull", percentage: 245.9 },
      { number: 6, name: "Dr Doom", percentage: 371.1 },
      { number: 5, name: "Alien Romulus", percentage: 508.4 },
      { number: 3, name: "The Watchers", percentage: 106.2 },
      { number: 2, name: "Patrick Mulligan", percentage: -8.8 }
    ],
    columns: 2 // Default to 2 columns if not provided
  };

  
  
  export default TopTopicsAllList;