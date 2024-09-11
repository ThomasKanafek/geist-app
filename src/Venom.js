import React, { useState } from 'react';
import Navbar from './Navbar';
import LineChart from './LineChart';
import PieChart from './PieChart-OverallSentiment';
import PieChartGlobal from './PieChart-Global';
import TopTopicsAllList from './components/TopTopicsAllList';
import TrendingYoutubeAllList from './components/TrendingYoutubeAllList';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('7days');
  
    const renderContent = () => {
      switch (activeTab) {
        case '7days':
          return <div><LineChart /></div>;
        case '30days':
          return <div>Content for 30 days</div>;
        case '90days':
          return <div>Content for 90 days</div>;
        default:
          return null;
      }
    };
    return (
        <div>
          {/* Tab Labels */}
          <div style={{ display: 'flex', cursor: 'pointer', marginBottom: '10px', fontFamily: 'd-dindin-bold' }} className='flex justify-end text-white mt-3 mr-3'>
            <div
              style={{
                padding: '10px',
                borderBottom: activeTab === '7days' ? '2px solid #0781FF' : '0px solid grey',
                marginRight: '10px',
              }}
              onClick={() => setActiveTab('7days')}
            >
              7 Days
            </div>
            <div
              style={{
                padding: '10px',
                borderBottom: activeTab === '30days' ? '2px solid #0781FF' : '0px solid grey',
                marginRight: '10px',
              }}
              onClick={() => setActiveTab('30days')}
            >
              30 Days
            </div>
            <div
              style={{
                padding: '10px',
                borderBottom: activeTab === '90days' ? '2px solid #0781FF' : '0px solid grey',
              }}
              onClick={() => setActiveTab('90days')}
            >
              90 Days
            </div>
          </div>
    
          {/* Tab Content */}
          <div>{renderContent()}</div>
        </div>
      );
    };


const Venom = () =>{
        const topTrendingCastData = [
            { number: 117, name: "Rhys Ifans", percentage: 2.8 },
            { number: 25, name: "Peggy Lu", percentage: 106.1 },
            { number: 2, name: "Tom Hardy", percentage: -17.5 },
            { number: 1, name: "Chiwetel Ejiofor", percentage: -6.2 }
        // Add more data here
        ];
        
        const topTrendingCastAttributes = [
            { number: 74, name: "Script", percentage: 8.6 },
            { number: 30, name: "Music", percentage: 71.7 },
            { number: 25, name: "Cast", percentage: -10.1 },
            { number: 10, name: "VFX", percentage: 2.2 }
            // Add more data here
            ];

        const topYouTubeQueries = [
            { topic: "Deadpool and Wolverine", count: "173x" },
            { topic: "Thunderbolts trailer", count: "102x" },
            { topic: "Venom 3 Villain", count: "87x" },
            { topic: "Red One Trailer", count: "59x" },
            { topic: "Venom rap", count: "52x" },
            { topic: "Avengers Doomsday trailer", count: "44x" },
            { topic: "Doomsday", count: "21x" },
            { topic: "Fantastic Four Trailer", count: "11x" },
            { topic: "Venom the last dance toxin", count: "5x" },
            { topic: "Venom 3 leaks", count: "4x" },
            { topic: "Venom marvel rivals", count: "4x" },
            { topic: "Venom 2 ending", count: "2x" },
            { topic: "Venom vs Kraven", count: "77%" }

        ];
        // Pie Chart Global data
        const dataPieChartDemo = [
            { value: 37, name: '18-24 · 37%' },
            { value: 25, name: '25-34 · 25%' },
            { value: 9, name: '35-44 · 9%' },
            { value: 9, name: '45-54 · 9%' },
            { value: 11, name: '12-17 · 11%' }
          ];
        const dataPieChartGender = [
            { value: 74, name: 'Male · 74%' },
            { value: 26, name: 'Female · 26%' },
          ];
          
        const customColors = ['#00AF82', '#0075A4', '#F3BC00', '#AB91C5', '#F5675D']; // Example custom color scheme
        const customColorsGender = ['#0075A4', '#F3BC00']; // Example custom color scheme
    return(
        <>
        <Navbar />
        <div>
            <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4">
            <div className="text-sm text-[#8D92A9]">Dashboard<img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed64c625e942ba7f766fbd6a2fce390ef3b922e970060b8bd36a6619af78444?placeholderIfAbsent=true&apiKey=c7d02f63ce044a6c84a678051a1175c7" 
                alt="" 
                className="inline-block object-contain shrink-0 my-auto aspect-[0.56] w-[5px] mx-2"
              />
             <span className="text-[#53E3C2]">Venom: The Last Dance</span></div>
            </section>
    
        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4">
        <h1 className="text-4xl text-white py-4 font-bold">Venom: The Last Dance</h1>
        <div className="container mx-auto px-0 py-0 "></div>
        </section>
        
        <section id='main' className='bg-[#282833] flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4 rounded-lg'>
        <Tabs />
        </section>
        
        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white py-4 font-bold">Top Trending Topics</h1>
        <div className="container mx-auto mt-4 px-0 py-4  rounded-lg">
            <TopTopicsAllList />
        </div>
        </section>

        {/* Top trending Cast / Attributes */}
        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
            <h1 className="text-3xl text-white py-4 font-bold">Top Trending Cast</h1>
            <TopTopicsAllList statData={topTrendingCastData} columns={1}/>
            </div>

            <div class="flex flex-col">
            <h1 className="text-3xl text-white py-4 font-bold">Top Trending Attributes</h1>
            <TopTopicsAllList statData={topTrendingCastAttributes} columns={1}/>
            </div>
        </div>
        </section>

        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white py-4 font-bold">Related YouTube Queries</h1>
        <div className="container mx-auto mt-0 px-0 py-4  rounded-lg">
            <TrendingYoutubeAllList statData={topYouTubeQueries} />
        </div>
        </section>

        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white py-4 font-bold">Overall sentiment</h1>
                </section>
        <section id='main' className='bg-[#282833] flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4 rounded-lg'>
        <PieChart />
        </section>

        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white py-4 font-bold">Demos</h1>
        
        </section>
        
        <section id='main' className='bg-[#282833] flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4 rounded-lg'>
        <div className='grid grid-cols-2 gap-3'>
            <div>
            <PieChartGlobal
            pieData={dataPieChartDemo} 
            namePie={'Age'}
            radius={['30%', '60%']}
            startAngle={0}
            endAngle={360}
            colorScheme={customColors}
        />
            </div>
            <div>
            <PieChartGlobal
            pieData={dataPieChartGender} 
            namePie={'% Gender Breakdown'}
            radius={['30%', '60%']}
            startAngle={0}
            endAngle={360}
            colorScheme={customColorsGender}
        />

            </div>

        </div>
        
        </section>
        
        
        
  
    
    </div>
    </>
    );
}

export default Venom;