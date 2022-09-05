import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const amountValues = props.data.map(data => data.value);
    const maxAmount = Math.max(...amountValues);

    return (
        <div className="chart">
            {props.data.map(month => (
                <ChartBar 
                    key={month.label}  
                    value={month.value} 
                    maxValue={maxAmount} 
                    label={month.label}
                />
            ))}
        </div>
    );
};

export default Chart;