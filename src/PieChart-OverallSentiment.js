import React, {useEffect} from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // Import echarts core
import geisttheme from './theme/geisttheme';


const PieChart = () => {
  echarts.registerTheme("geist", geisttheme);
  // Define the options for the line chart
  const options = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '5%',
        left: 'center'
      },
      color: [
        '#0EB26D',
        '#4A4A58',
        '#FFA8A5'
      ],
      series: [
        {
          name: 'Overall sentiment',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          // adjust the start and end angle
          startAngle: 180,
          endAngle: 360,
          data: [
            { value: 29, name: 'Positive' },
            { value: 58, name: 'Neutral' },
            { value: 12, name: 'negative' },

          ]
        }
      ],
      grid: {
        left: 60,
        top: 10,
        right: 30,
        bottom: 10
      }
    };
  return (
    <div className='mb-8'>
      <ReactECharts option={options} theme={'geist'} style={{height: '500px', width: '1200px'}} opts={{renderer: 'svg'}} notMerge={true} lazyUpdate={true} />
    </div>
  );
};

export default PieChart;