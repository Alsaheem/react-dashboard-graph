import React from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import PieChart from "highcharts-react-official";

const options = {
    chart: {
        type: "pie",
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
      text: 'Contents of Products\'s weekly fruit delivery'
  },
  subtitle: {
      text: '3D donut in Highcharts'
  },
  plotOptions: {
    pie: {
        innerSize: 120,
        depth: 45
    }
},
    series: [{
      data: [
        ['Bananas', 8],
        ['Kiwi', 3],
        ['Mixed nuts', 1],
        ['Oranges', 6],
        ['Apples', 8],
        ['Pears', 4],
        ['Clementines', 4],
        ['Reddish (bag)', 1],
        ['Grapes (bunch)', 1]
    ]
    }]
  }

const Piechart = ({type}) => {
    return (
        <div className="">
            <div className="pie card shadow rounded">
            <PieChart highcharts={Highcharts} options={options} />
            </div>
        </div>
     );
}

export default Piechart;