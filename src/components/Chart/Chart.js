import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    console.log(props.dataPoints[6]);
    // console.log(props.dataPoints.label);
    const dataPointsArray = props.dataPoints.map(dataPoint => dataPoint.value);
    // console.log(dataPointsArray);
    const maximumValue = Math.max(...dataPointsArray);
    // console.log(maximumValue);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximumValue}
                    label={dataPoint.label} />
            })}
        </div>
    )
}

export default Chart;