import React from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import BarChart from "highcharts-react-official";

const options = {
    chart: {
        type: "bar"
    },
    title: {
      text: ''
    },
    series: [{
      data: [2,3,6,4,2,5,7,3,2,1,4,6]
    }]
  }

const Barchart = ({type}) => {
    return ( 
        <div className="mt-2">
            <div className="line card shadow rounded">
            <BarChart highcharts={Highcharts} options={options} />
            </div>
        </div>
     );
}
 
export default Barchart;