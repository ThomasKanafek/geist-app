import React from 'react';


const TopTopicsItem = ({ number, name, percentage }) => {

    // Determine color classes based on percentage value
  const bgColor = percentage > 0 ? 'bg-teal-300' : 'bg-[#FFA8A5]';
  const textColor = percentage > 0 ? 'text-teal-300' : 'text-[#FFA8A5]';

  return (

  <div className={`flex overflow-hidden relative items-start w-full bg-[#282833] hover:bg-black rounded-lg max-md:max-w-full`}>
      <div className={`flex z-0 flex-col self-stretch my-auto w-[110px] ${bgColor}`}>
        <div className={`flex shrink-0 rounded-l-lg ${bgColor} h-[110px] max-md:max-w-full`} />
      </div>
    
      <div className={`absolute left-0 top-2/4 z-0 text-3xl ${bgColor} text-center -translate-y-2/4 h-[35px] right-[460px] text-zinc-800 translate-x-[0%] w-[110px]`}>
        {number}
      </div>
      
      <div className={`flex flex-col px-8 items-center justify-center h-[110px] ${textColor}`}>
        <div className={`text-xl text-white w-[328px] font-bold`} >{name}</div>
        <div className={`flex justify-start w-full text-xl tracking-wider ${textColor} whitespace-nowrap`}>
          {/* <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64398008b4046d2602ebdea3c21f1c5f7ace89838b195cffbfb8d783b84745a1?placeholderIfAbsent=true&apiKey=c7d02f63ce044a6c84a678051a1175c7" 
            className="object-contain shrink-0 my-auto aspect-square w-[7px]" 
            alt="" 
          /> */}
          <div>{percentage}%</div>
        </div>
      </div>
    </div>

);

};


export default TopTopicsItem;