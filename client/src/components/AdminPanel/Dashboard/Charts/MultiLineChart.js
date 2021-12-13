import { useState } from 'react';
import { Line } from 'react-chartjs-2';


export const MultiLineChart = ({ data }) => {
    const [size , setSize] = useState(130);
    
    let ordersReceived = [];
    let ordersDelivered = [];
    let earnings = [];

    for (let index = 0; index <= data.ordersReceived; index++) {
        ordersReceived.push(index);
    }

    for (let index = 0; index <= data.ordersDelivered; index++) {
        ordersDelivered.push(index);
    }

    for (let index = 0; index <= data.earnings; index++) {
        earnings.push(index);
    }


    return (
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: "Earnings",
                            data: [data.earings],
                            fill: false,
                            borderColor: "orange",
                            tension: 0.1,

                        },
                        {
                            label: "Order delivered",
                            data: [data.ordersDelivered],
                            fill: false,
                            borderColor: "blue",
                            tension: 0.1,

                        },
                        {
                            label: "Order received",
                            data: ordersReceived,
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

