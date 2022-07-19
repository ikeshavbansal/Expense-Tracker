import './Chart.css';
import React from 'react';
import Chartbar from './Chartbar'
const Chart=props=>
{
    const datapointArrayValue=props.datapoints.map(datapoint=> datapoint.value);
const totalMax=Math.max(...datapointArrayValue);
return <div className="chart">
    {props.datapoints.map(datapoint=> <Chartbar key={datapoint.label} value={datapoint.value} maxValue={totalMax} label={datapoint.label} />)}
</div>
}
export default Chart