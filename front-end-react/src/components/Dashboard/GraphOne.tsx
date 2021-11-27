import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../Dashboard/GraphOne.scss';
import { graphDataParser } from '../helpers/graphParser';
import { graphaDataSculptor } from '../helpers/graphDataSculptor'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraphOne(props: any) {
  const { state } = props;
  //console.log("G1 STATE", state)
  const obj = {
    canada: 1,
    changeMe: 2,
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
          title: {
            display: true,
           text: 'Garden Diversity',
          },
    },
  };

  const data = {
    labels: Object.keys(graphaDataSculptor(graphDataParser(state, "native_region"))),
    //graphDataParser(state, "native_region"),
    datasets: [
      {
        label: '# of Votes',
        data:  Object.values(graphaDataSculptor(graphDataParser(state, "native_region"))),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie id="GraphOne" data={data} options={options} />;
}
