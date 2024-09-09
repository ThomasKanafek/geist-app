import React from 'react';

function TitleCard({title}){
    return(
        <>
      <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full text-teal-300 whitespace-nowrap max-md:mt-0">
        <div className="self-stretch text-sm text-white">{title.name}</div>
        {title.value && <div className="mt-1 text-2xl">{title.value}</div>}
        {title.percentage && (
          <div className="flex gap-1 text-xl tracking-wider">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64398008b4046d2602ebdea3c21f1c5f7ace89838b195cffbfb8d783b84745a1?placeholderIfAbsent=true&apiKey=c7d02f63ce044a6c84a678051a1175c7" className="object-contain shrink-0 my-auto aspect-square w-[7px]" alt="" />
            <div>{title.percentage}</div>
          </div>
        )}
      </div>
    </div>



</>
    );
}

export default TitleCard;