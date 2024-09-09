import React from 'react';
import TitleCard from './TitleCard';
import TitleRow from './TitleRow-Dashboard';

const titles = [

    {

        name: "Mandalorian Boba",
        value: "1.45",
        percentage: "+4.8%",
   
    },
    {

        name: "The Bus",
        value: "68.1",
        percentage: "-12.5%"

      }

];

function TitleItem(){
    return(      
    <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-8 max-md:max-w-full px-4">
    <h1 className="text-3xl text-white py-4">Communities</h1>
    {/* Column description */}
    <div className="container mx-auto px-0 py-0 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-0 lg:grid-cols-4">
        <div className="hidden md:flex p-4 rounded-lg text-white flex items-center">
        <h2 className='text-[#8D92A9]'>Community name</h2>
        </div>
        <div className="hidden md:flex p-4 rounded-lg text-[#8D92A9] flex items-center">
        <h2>Top People</h2>
        </div>
        <div className="hidden md:flex p-4 rounded-lg text-[#8D92A9] flex items-center">
        <h2>Top Brands</h2> 
        </div>
        <div className="hidden md:flex p-4 rounded-lg text-[#8D92A9] flex items-center">
        <h2>Top Titles</h2> 
        </div>
      </div>
    </div>

     <TitleRow />

    {/* 4 column */}
    {/* <div className="container mx-auto px-0 py-0 bg-[#282833] rounded-lg hover:bg-black">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-0 lg:grid-cols-4">
        <div className="p-4 rounded-lg text-white flex items-center">
        <h2 className="text-2xl text-white align-middle">All Sony Titles</h2> 
        </div>

        <div className="p-4 rounded-lg text-white flex items-center">
        <TitleCard title={titles[0]} /> 
        </div>
        <div className="p-4 rounded-lg text-white flex items-center">
        <TitleCard title={titles[1]} /> 
        </div>
        <div className="p-4 rounded-lg text-white flex items-center">
        <h2 className="text-2xl text-white align-middle">Top Titles</h2> 
        </div>
      </div>
    </div> */}


{/*     
      <div className="px-8 py-6 rounded-lg bg-[#282833] hover:bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <header className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-center align-middle max-md:max-w-full">
                <h1 className="text-2xl text-white">All Sony Titles</h1>
                <TitleCard title={titles[0]} />
              </div>
            </div>
          </header>

          {titles.slice(1).map((title, index) => (
            <TitleCard key={index} title={title} />
          ))}

        </div>
      </div> */}
    </section>


    );

}

export default TitleItem;