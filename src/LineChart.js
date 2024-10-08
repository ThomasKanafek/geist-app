import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // Import echarts core
import geisttheme from './theme/geisttheme';

const LineChart = ({ options }) => {
  echarts.registerTheme("geist", geisttheme);

  // Default options in case none are provided
  const defaultOptions = {
    title: {
      text: 'Venom 7 days',
      left: 0,
      textStyle: {
        color: '#FFFFFF',
        fontFamily: 'D-Din',
      }
    },
    animation: false,
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        '2024-08-17', '2024-08-17', '2024-08-17', '2024-08-17', '2024-08-17', '2024-08-17',
        '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', 
        '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18', '2024-08-18',
        '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19',
        '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19', '2024-08-19',
        '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20',
        '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20', '2024-08-20',
        '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21',
        '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', '2024-08-21', 
        '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22',
        '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', '2024-08-22', 
        '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', 
        '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', '2024-08-23', 
        '2024-08-24', '2024-08-24', '2024-08-24', '2024-08-24', '2024-08-24', '2024-08-24', '2024-08-24', '2024-08-24', 
        '2024-08-24', '2024-08-24'
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
          67, 59, 79, 55, 77, 51, 
          0, 66, 43, 52, 100, 69, 84, 72, 81, 66, 56, 78, 78, 60, 69, 58, 0, 0, 
          71, 34, 67, 42, 61, 59, 82, 53, 62, 55, 69, 54, 65, 56, 70, 
          38, 43, 35, 52, 48, 81, 46, 66, 46, 55, 76, 54, 68, 43, 0,
          0, 42, 31, 42, 49, 40, 55, 44, 63, 51, 60, 58, 47, 49, 41, 71, 0,
          50, 32, 34, 29, 51, 43, 47, 68, 55, 57, 51, 54, 38, 56, 44, 0, 51, 
          64, 35, 35, 29, 36, 38, 58, 41, 67, 44, 70, 62, 85, 47, 46, 41, 52, 
          54, 59, 48, 52, 42, 60, 46, 56, 57, 68
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

  return (
    <div className='mb-8'>
      <ReactECharts 
        option={options || defaultOptions} 
        theme={'geist'} 
        style={{height: '600px', width: '1200px'}} 
        opts={{renderer: 'svg'}} 
        notMerge={true} 
        lazyUpdate={true} 
      />
    </div>
  );
};

export default LineChart;
