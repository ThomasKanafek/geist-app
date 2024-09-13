import React from 'react';


function TrendingYoutubeItem({ topic, count, isFirst }) {
  const classRow = " my-auto";
  // const classRow = "grow shrink self-stretch my-auto";

  return (
    <>
    <div className={`grid grid-cols-1 gap-0 items-center pl-8 pr-8 w-full rounded-lg bg-[#282833] hover:bg-black min-h-[64px] max-md:pl-5 max-md:max-w-full grid-cols-2 ${isFirst ? '' : 'mt-0'} `} >
      <div className={`${classRow} text-white w-full font-bold text-xl `}>
        {topic}
      </div>
      <div className={`${classRow} text-teal-300 w-full font-bold text-2xl text-right sm:text-left`}>
        {count}
      </div>
    </div>
    
  </>
  );

}
export default TrendingYoutubeItem;