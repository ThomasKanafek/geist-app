import React from 'react';
import PropTypes from 'prop-types';

const DeepSentimentSummary = ({ data, columnNames }) => {
// Find the index of '% Positive' column
  const positiveColumnIndex = columnNames.indexOf('% Positive');

  return (
    <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-8 max-md:max-w-full px-0">
      {/* Column description */}
      <div className="container mx-auto px-0 py-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-0 lg:grid-cols-5">
          {columnNames.map((name, index) => (
            <div key={index} className="hidden md:flex p-2 rounded-lg text-[#8D92A9] flex items-center">
              <h2>{name}</h2>
            </div>
          ))}
        </div>
      </div>

       {/* Render all rows from data */}
       <div className="container mx-auto py-2">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-4 bg-[#282833] rounded-lg text-white hover:bg-black grid grid-cols-1 gap-4 md:grid-cols-0 lg:grid-cols-5">
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className={`text-2xl font-bold p-4 flex ${
                  item.includes('+') ? 'text-green-500' :
                  item.includes('-') ? 'text-red-500' :
                  'text-white'
                }`}
              >
                {item}
              </div>
              
            ))}
          </div>
        ))}
      </div>


    </section>
  );
};

DeepSentimentSummary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DeepSentimentSummary;
