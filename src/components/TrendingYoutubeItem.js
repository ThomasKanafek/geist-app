import React from 'react';


function TrendingYoutubeItem({ topic, count, isFirst }) {
  return (
    <div className={`flex flex-wrap gap-10 items-center pl-8 w-full rounded-lg bg-[#282833] hover:bg-black min-h-[64px] max-md:pl-5 max-md:max-w-full ${isFirst ? '' : 'mt-0'} `} >
      <div className="grow shrink self-stretch my-auto text-white w-[221px] font-bold text-xl">
        {topic}
      </div>
      <div className="grow shrink self-stretch my-auto text-teal-300 w-[186px] font-bold text-2xl">
        {count}
      </div>
    </div>

  );

}
export default TrendingYoutubeItem;