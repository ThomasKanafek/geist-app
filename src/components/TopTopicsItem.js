import React from 'react';


const TopTopicsItem = ({ number, name, percentage }) => {

    // Determine color classes based on percentage value
  const bgColor = percentage > 0 ? 'bg-teal-300' : 'bg-[#FFA8A5]';
  const textColor = percentage > 0 ? 'text-teal-300' : 'text-[#FFA8A5]';

  return (
    <>
    <div className="flex">
    <div className={`w-1/4 ${bgColor} text-center p-4 rounded-l-lg flex items-center justify-center`}>
      <span className={`text-zinc-800 text-3xl `}>{number}</span>
    </div>
    <div className="w-3/4 bg-[#282833] text-white p-4 px-8 rounded-r-lg flex items-center justify-start hover:bg-black">
            <div className='flex flex-wrap'>
      <div className='font-bold text-xl w-full'>{name}</div>
      <div className={`${textColor}`}>{percentage}%</div>
      </div>
    </div>
  </div>
  </>

);

};


export default TopTopicsItem;