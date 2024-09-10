import React, {useEffect} from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // Import echarts core
import chalkTheme from './theme/chalk-project.json'; // Adjust path as necessary
// import darkTheme from './theme/dark';


const LineChart = () => {


  

    // echarts.registerTheme('my_theme', {
    //     backgroundColor: '#282833' 
    // });

    // Register the custom theme
    // echarts.registerTheme('dark', darkTheme);

//   useEffect(() => {
//     echarts.registerTheme('chalk', chalkTheme); // Register theme with ECharts
//   }, []);

  // Define the options for the line chart
  const options = {
    // title: {
    //   text: 'Venom 7 days',
    
    // },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
      },
    ],
  };


  return (
    <div>
      <ReactECharts option={options} theme='dark' style={{height: '600px', width: '1200px'}} opts={{renderer: 'svg'}}/>
    </div>
  );
};

export default LineChart;