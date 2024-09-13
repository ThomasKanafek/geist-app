import React, { useState } from 'react';
import Navbar from './Navbar';
import LineChart from './LineChart';
import PieChart from './PieChart-OverallSentiment';
import PieChartGlobal from './PieChart-Global';
import TopTopicsAllList from './components/TopTopicsAllList';
import TrendingYoutubeAllList from './components/TrendingYoutubeAllList';
import DeepSentimentSummary from './components/DeepSentimentSummary';
import { ReactComponent as SocialLogos } from "./assets/logos-social.svg";

const Tabs = () => {
  const lineGraphDataVenom30days = {
    title: {
      text: 'Venom 30 days',
      left: 0,
      textStyle: {
        color: '#FFFFFF',
        fontFamily: 'D-Din',
        fontSize: 18,
      }
    },
    animation: false,
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        '2024-07-24', '2024-07-24', '2024-07-28', '2024-07-28', '2024-07-28',
        '2024-08-01', '2024-08-01', '2024-08-01', '2024-08-05', '2024-08-05',
        '2024-08-05', '2024-08-05', '2024-08-09', '2024-08-09', '2024-08-09',
        '2024-08-09', '2024-08-13', '2024-08-13', '2024-08-13', '2024-08-13',
        '2024-08-17', '2024-08-17', '2024-08-17', '2024-08-17', '2024-08-21',
        '2024-08-21', '2024-08-21', '2024-08-25'
      ],
      name: 'TIME',
      nameLocation: 'middle',
      nameTextStyle: {
        padding: [15, 4, 5, 6],
        color: '#FFFFFF'
      } 
    },
    yAxis: {
      type: 'value',
      name: 'VOLUME',
      nameLocation: 'middle',
      nameTextStyle: {
        padding: [0, 0, 20, 6],
        color: '#FFFFFF'
      }, 
      splitLine: {
        lineStyle: {
          color: '#4D505F',
          type: [3, 5],
          dashOffset: 5
        }
      }
    },
    axisLine:{
      lineStyle:{
        color: '#000000'
      }
    },
    series: [
      {
        name: 'Volume',
        type: 'line',
        data: [
          29, 34, 66, 100, 71,
          57, 57, 45, 55, 68,
          57, 45, 52, 48, 40,
          72, 64, 47, 39, 50,
          47, 43, 55, 62, 45,
          39, 37, 47
        ],
      }
    ],
    grid: {
      left: 60,
      top: 50,
      right: 30,
      bottom: 50
    }
  };

  const lineGraphDataVenom90days = {
    title: {
      text: 'Venom 90 days',
      left: 0,
      textStyle: {
        color: '#FFFFFF',
        fontFamily: 'D-Din',
      }
    },
    animation: false,
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        return params.map(param => `${param.marker} ${param.seriesName}: ${param.value}`).join('<br/>');
      }
    },
    xAxis: {
      type: 'category',
      data: [
        '2024-05-24', '2024-05-24', '2024-05-24',
        '2024-05-31', '2024-05-31', '2024-05-31', '2024-05-31',
        '2024-06-07', '2024-06-07', '2024-06-07', '2024-06-07', '2024-06-07', '2024-06-07',
        '2024-06-14', '2024-06-14', '2024-06-14', '2024-06-14',
        '2024-06-21', '2024-06-21', '2024-06-21',
        '2024-06-28', '2024-06-28', '2024-06-28', '2024-06-28',
        '2024-07-05', '2024-07-05', '2024-07-05', '2024-07-05',
        '2024-07-12', '2024-07-12', '2024-07-12', '2024-07-12', '2024-07-12',
        '2024-07-19', '2024-07-19', '2024-07-19', '2024-07-19',
        '2024-07-26', '2024-07-26', '2024-07-26', '2024-07-26',
        '2024-08-02', '2024-08-02', '2024-08-02',
        '2024-08-09', '2024-08-09', '2024-08-09', '2024-08-09',
        '2024-08-16', '2024-08-16', '2024-08-16',
        '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23',
        '2024-08-25', '2024-08-25', '2024-08-25'
      ],
      name: 'TIME',
      nameLocation: 'middle',
      nameTextStyle: {
        padding: [15, 4, 5, 6],
        color: '#FFFFFF'
      }
    },
    yAxis: {
      type: 'value',
      name: 'VOLUME',
      nameLocation: 'middle',
      nameTextStyle: {
        padding: [0, 0, 20, 6],
        color: '#FFFFFF'
      },
      splitLine: {
        lineStyle: {
          color: '#4D505F',
          type: 'dashed'
        }
      }
    },
    series: [
      {
        name: 'Volume',
        type: 'line',
        data: [
          4, 7, 3,
          4, 2, 5, 6,
          100, 97, 49, 29, 28, 22,
          18, 9, 8, 7,
          10, 5, 7,
          5, 8, 4, 4,
          5, 4, 7, 5,
          5, 7, 5, 7, 4,
          6, 3, 4, 8,
          3, 4, 4, 6,
          3, 4, 8,
          14, 7, 8, 5,
          9, 6, 7,
          5, 10, 5, 8,
          6, 10, 5
        ]
      }
    ],
    grid: {
      left: 60,
      top: 50,
      right: 30,
      bottom: 50
    }
  };
  
  
    const [activeTab, setActiveTab] = useState('7days');
  
    const renderContent = () => {
      switch (activeTab) {
        case '7days':
          return <div><LineChart /></div>;
        case '30days':
          return <div><LineChart options={lineGraphDataVenom30days} /></div>;
        case '90days':
          return <div><LineChart options={lineGraphDataVenom90days} /></div>;
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
          // Pie Chart BreakdownSocial
        const dataPieChartBreakdownSocial = [
            { value: 42, name: 'Instagram · 42%' },
            { value: 38, name: 'Facebook · 38%' },
            { value: 18, name: 'Reddit · 18%' },
            { value: 1, name: 'TikTok · 1%' }
            
        ];
      
          
        const customColors = ['#00AF82', '#0075A4', '#F3BC00', '#AB91C5', '#F5675D']; // Example custom color scheme
        const customColorsGender = ['#0075A4', '#F3BC00']; // Example custom color scheme

        // Data for DeepSentiment Summary
        const rowDataSentiment = [
          ['Script', '154k', '37.5%', '59.20%', '7.30%'],
          ['Cast', '84k', '20.19%', '44.1%', '25.1%'],
          ['Music', '43k', '10.34%', '50.3%', '18%'],
          ['VFX', '21k', '5.05%', '23.8%', '58.4%'],
          ['Director', '3k', '0.72%', '12.68%', '55.69%'],
          ['Fun', '26k', '6.25%', '60.13%', '19.99%'],
          ['Funny', '6k', '1.44%', '18.92%', '34.58%'],
          ['Scary', '19k', '4.57%', '55.78%', '23.75%'],
          ['Trailer', '26k', '6.25%', '24.67%', '64.34%'],
          ['Tom Hardy', '9k', '2.16%', '66.33%', '17.53%'],
          ['Juno Temple', '2k', '0.48%', '20.84%', '55.75%'],
          ['Chiwetel Ijtofor', '1k', '0.24%', '25.75%', '57.82%'],
          ['Peggy Lu', '8k', '1.92%', '17.77%', '42.45%'],
          ['Rhys Ifans', '12k', '2.88%', '64.27%', '13.71%']
        ];
        const columns = ['Community', 'Volume', 'Volume (% of total)', '% Positive', '% Negative'];

        // Data for Communities
        const rowDataCommunities = [
          ['Marvel', '61.91%', '38.09%', '24.41%', '37.38%', '18.03%', '7.57%', '12.61%', '0.00%'],
          ['Spiderman', '66.03%', '33.97%', '22.80%', '29.45%', '19.30%', '15.45%', '13.00%', '0.00%'],
          ['Horror', '47.13%', '52.87%', '31.03%', '34.79%', '16.23%', '16.79%', '1.16%', '0.00%'],
          ['DC Comics', '69.54%', '30.46%', '5.76%', '29.22%', '39.77%', '17.58%', '7.67%', '0.00%'],
          ['Fortnite', '64.06%', '35.94%', '22.28%', '34.29%', '32.30%', '6.31%', '4.82%', '0.00%'],
          ['Alien', '59.97%', '40.03%', '6.75%', '11.21%', '38.17%', '35.38%', '8.49%', '0.00%'],
          ['The Boys', '66.35%', '33.65%', '15.02%', '29.90%', '28.51%', '19.16%', '7.41%', '0.00%'],
          ['Sonic the Hedgehog', '44.22%', '55.78%', '13.66%', '36.53%', '28.96%', '12.65%', '8.20%', '0.00%'],
          ['Game of Thrones', '51.49%', '48.51%', '18.94%', '27.24%', '29.94%', '18.07%', '5.81%', '0.00%'],
          ['Anime fans', '38.20%', '61.80%', '17.53%', '22.29%', '21.88%', '24.44%', '13.86%', '0.00%'],
          ['Fantasy Fans', '51.69%', '48.31%', '6.46%', '26.27%', '30.39%', '25.68%', '11.20%', '0.00%'],
          ['Eminem fans', '70.74%', '29.26%', '29.44%', '27.32%', '15.03%', '19.53%', '8.68%', '0.00%'],
        ];
        const columnsCommunities = ['Communities', 'Male', 'Female', '12-17', '18-24', '25-34', '35-44', '45-54', 'Over 55'];

        // Data for Communities Positive Negative Setiment
        const rowDataCommuniitesSentiment = [
          ['Marvel', '51.84%', '23.60%'],
          ['Spiderman', '26.65%', '59.33%'],
          ['Horror', '60.03%', '10.37%'],
          ['DC Comics', '71.54%', '12.56%'],
          ['Fortnite', '56.73%', '34.53%'],
          ['Alien', '62.30%', '13.03%'],
          ['The Boys', '64.84%', '10.84%'],
          ['Sonic the Hedgehog', '53.97%', '35.33%'],
          ['Game of Thrones', '58.12%', '14.15%'],
          ['Anime fans', '70.05%', '15.24%'],
          ['Fantasy Fans', '48.50%', '11.08%'],
          ['Eminem fans', '64.59%', '13.16%']
        ];
        const columnsCommuniitesSentiment = ['Community', '% Positive', '% Negative'];




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
    
        <section className="flex overflow-hidden flex-row justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4">
        <h1 className="text-4xl text-white py-4 w-full font-bold">Venom: The Last Dance</h1> <div className='flex items-center'><SocialLogos /></div>
        {/* <div className="container mx-auto px-0 py-0 "></div> */}
        </section>
        
        <section id='main' className='bg-[#282833] flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4 rounded-lg'>
        <Tabs />
        </section>
        
        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white py-4 font-bold">Top Trending Topics</h1>
        <div className="mt-4 px-0 py-4  rounded-lg">
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
        <div className="grid mt-0 px-0 py-4  rounded-lg">
            <TrendingYoutubeAllList statData={topYouTubeQueries} columns={2}/>
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
        
        <section className="flex overflow-hidden flex-row justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white w-full py-4 font-bold">Deep sentiment summary</h1><div className='flex items-center'><SocialLogos /></div>
        </section>

        <DeepSentimentSummary data={rowDataSentiment} columnNames={columns} />

        <section className="flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white py-4 font-bold">Breakdown of volume by channel</h1>
                </section>
        <section id='main' className='bg-[#282833] flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4 rounded-lg'>
        <PieChartGlobal
            pieData={dataPieChartBreakdownSocial} 
            namePie={'Social'}
            radius={['30%', '60%']}
            startAngle={0}
            endAngle={360}
            colorScheme={customColors}
            height="400px" 
            width="1200px"
            />
        </section>

        <section className="flex overflow-hidden flex-row justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white w-full py-4 font-bold">Communities</h1><div className='flex items-center'><SocialLogos /></div>
        </section>

        <DeepSentimentSummary data={rowDataCommunities} columnNames={columnsCommunities} numberOfColumns={9}/>

        <section className="flex overflow-hidden flex-row justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-0">
        <h1 className="text-3xl text-white w-full py-4 font-bold">Communities - Positive / Negative </h1><div className='flex items-center'><SocialLogos /></div>
        </section>
        <DeepSentimentSummary data={rowDataCommuniitesSentiment} columnNames={columnsCommuniitesSentiment} numberOfColumns={3}/>    
    </div>
    </>
    );
}

export default Venom;