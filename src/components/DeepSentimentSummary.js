import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // Add this for conditional class handling

const DeepSentimentSummary = ({ data, columnNames, numberOfColumns = 5 }) => {
  // Find the indices of '% Positive' and '% Negative' columns
  const positiveColumnIndex = columnNames.indexOf('% Positive');
  const negativeColumnIndex = columnNames.indexOf('% Negative');

  // Determine the appropriate grid class based on numberOfColumns
   // Determine the appropriate grid class based on numberOfColumns
   const gridColsClass = numberOfColumns === 3
   ? 'grid-cols-3'
   : numberOfColumns === 5
   ? 'grid-cols-5'
   : numberOfColumns === 9
   ? 'grid-cols-9'
   : 'grid-cols-1';


  return (
    <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-8 max-md:max-w-full px-0">
      {/* Column description */}
      <div className="container mx-auto px-0 py-0">
        <div className={clsx('grid gap-4', gridColsClass)}>
          {columnNames.map((name, index) => (
            <div key={index} className="hidden md:flex py-4 pl-4 rounded-lg text-[#8D92A9] flex items-center">
              <h2>{name}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Render all rows from data */}
      <div className="container mx-auto py-0">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className={clsx('grid gap-4 mb-1 bg-[#282833] rounded-lg text-white hover:bg-black', gridColsClass)}>
            {row.map((item, colIndex) => {
              // Apply specific class for '% Positive' and '% Negative' columns
              const itemClass =
                colIndex === positiveColumnIndex
                  ? 'text-green-500' // Green color for '% Positive'
                  : colIndex === negativeColumnIndex
                  ? 'text-red-500' // Red color for '% Negative'
                  : item.includes('+')
                  ? 'text-green-500'
                  : item.includes('-')
                  ? 'text-red-500'
                  : 'text-white';

              return (
                <div key={colIndex} className={`text-2xl py-4 pl-4 flex ${itemClass}`}>
                  {item}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

DeepSentimentSummary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfColumns: PropTypes.number, // Ensure this is a number prop
};

export default DeepSentimentSummary;
