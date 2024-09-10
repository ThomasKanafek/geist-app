import React from 'react';
import Navbar from './Navbar';
import LineChart from './LineChart';



const Venom = () =>{
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
        <h1 className="text-3xl text-white py-4">Venom: The Last Dance</h1>
        <div className="container mx-auto px-0 py-0 "></div>
        </section>
        
        <section id='main' className='bg-[#282833] flex overflow-hidden flex-col justify-center py-px w-full max-w-[1240px] mx-auto align-middle my-4 max-md:max-w-full px-4 rounded-lg'>
        
        <div style={{ width: '1200px', height: '700px' }}>
        <LineChart />
        </div>
        </section>
        
  
    
    </div>
    </>
    );
}

export default Venom;