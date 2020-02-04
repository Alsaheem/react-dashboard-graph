import React from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import LineChart from "highcharts-react-official";

const options = {
    chart: {
        type: "line"
    },
    title: {
      text: ''
    },
    series: [
      {
        color: 'red',
        dashStyle:'solid',
        name : 'RCW',
        showInLegend:true,
        visible:true,
        data: [2,3,6,4,2,5,7,3,2,1,4,6]
      },
      {
        color: 'green',
        dashStyle:'solid',
        name : 'RTN',
        showInLegend:true,
        visible:true,
        data: [1,3,4,6,3,2,5,3,7,9,3,2]
      },
      {
        color: 'blue',
        dashStyle:'solid',
        name : 'RPN',
        showInLegend:true,
        visible:true,
        data: [6,8,9,3,4,6,1,3,9,5,2,1]
      },
      {
        color: 'purple',
        dashStyle:'solid',
        name : 'REAP',
        showInLegend:true,
        visible:true,
        data: [3,4,5,2,1,3,7,8,9,0,6,4]
      },
      {
        color: 'coral',
        dashStyle:'solid',
        name : 'RWIN',
        showInLegend:true,
        visible:true,
        data: [8,2,1,4,6,8,9,3,2,1,5,9]
      },
  ]
  }

const Linechart = ({type}) => {
    return ( 
        <div className="">
            <div className="line card shadow rounded">
            <LineChart highcharts={Highcharts} options={options} />
            </div>
        </div>
     );
}
 
export default Linechart;