import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // Import echarts core
import geisttheme from './theme/geisttheme';

const PieChartGlobal = ({ pieData, namePie, radius = ['40%', '70%'], startAngle = 180, endAngle = 360, colorScheme }) => {
  // Register custom theme
  echarts.registerTheme("geist", geisttheme);

  // Define the options for the pie chart, using the passed props
  const options = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '5%',
      left: 'center',
    },
    color: colorScheme || ['#0EB26D', '#4A4A58', '#FFA8A5'], // Default color scheme if none is provided
    series: [
      {
        name: namePie || 'Overall sentiment',
        type: 'pie',
        radius: radius, // Dynamic radius
        center: ['50%', '50%'], // Position
        startAngle: startAngle, // Dynamic start angle
        endAngle: endAngle, // Dynamic end angle
        data: pieData || [
          { value: 29, name: 'Positive' },
          { value: 58, name: 'Neutral' },
          { value: 12, name: 'Negative' },
        ], // Fallback data if no data is provided
      }
    ],
    grid: {
      left: 60,
      top: 10,
      right: 30,
      bottom: 10,
    },
  };

  return (
    <div className='mb-8'>
      <ReactECharts
        option={options}
        theme={'geist'}
        style={{ height: '500px', width: '600px' }}
        opts={{ renderer: 'svg' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

export default PieChartGlobal;
