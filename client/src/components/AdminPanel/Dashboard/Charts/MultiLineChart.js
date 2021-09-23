import { useState } from 'react';
import { Line } from 'react-chartjs-2';


export const MultiLineChart = () => {
    const [size , setSize] = useState(130);
 

    return (
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: "earnings",
                            data: [70, 75, 90, 30, 100, 103, 130, 170],
                            fill: false,
                            borderColor: "orange",
                            tension: 0.1,

                        },
                        {
                            label: "order delivered",
                            data: [30, 40, 70],
                            fill: false,
                            borderColor: "blue",
                            tension: 0.1,

                        },
                        {
                            label: "order received",
                            data: [10, 20, 30],
                            fill: false,
                            borderColor: "red",
                            tension: 0.1,

                        }
                    ],

                }}

                options={{
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}

            />

        )

    }

