import React, { Component } from 'react';
import Card from './Card';
import Piechart from './PieChart';
import Barchart from './Barchart';
import Linechart from './Linechart';

class Dashboard extends Component {
    state = {  }
    render() {
        return (
            <>
             <div className="container-fluid mt-3">
                    <div className="row mh-100 card-columns">
                        <div className="col-12">
                            <Linechart type='line'/>
                        </div>
                        <div className="col-4">
                                <Piechart type='pie' className='shadow'/>
                        </div>
                        <div className="col-8">
                            <Barchart type='bar'/>
                            {/* <Linechart type='line'/> */}
                        </div>
                    </div>
                </div>
            </>
         );
    }
}

export default Dashboard;