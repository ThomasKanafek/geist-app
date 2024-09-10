import React from 'react';
// import { Link, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Venom from './Venom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const titles = [
  {
    groupName: "All Sony Movies",
    items: [
      {
        name: "Mandalorian Boba",
        value: "1.45",
        percentage: "+4.8%"
      },
      {
        name: "The Bus",
        value: "68.1",
        percentage: "-12.5%"
      }
    ],
    link: "#"
  },
  {
    groupName: "Venom",
    items: [
      {
        name: "Spider-Man",
        value: "99.9",
        percentage: "+2.3%"
      },
      {
        name: "Iron Man",
        value: "55.7",
        percentage: "-1.2%"
      }
    ],
    link: "/venom"
  }
];

function TitleRow(){
     
      return (
        <div className="container mx-auto py-2 ">
          {titles.map((group, groupIndex) => (
            
             <a href={group.link}>
            <div key={groupIndex} className="mb-4 bg-[#282833] rounded-lg hover:bg-black grid grid-cols-1 gap-4 md:grid-cols-0 lg:grid-cols-4">
              
              {/* Group Name */}
              <div className="text-2xl font-bold text-white p-4 flex items-center">{group.groupName}</div>
              {/* Responsive Grid for Titles */}
         
                {group.items.map((title, index) => (
                 
                  <div key={index} className="p-4 rounded-lg text-white flex flex-col">
                    <h3 className="self-stretch text-sm text-white">{title.name}</h3>
                    <p className="mt-1 text-2xl text-teal-300">{title.value}</p>
                    <p className={`text-lg ${title.percentage.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {title.percentage}
                    </p>
                  </div>
                ))}
          
            </div>
            </a>
      
          ))}
        </div>
      );


}

export default TitleRow;