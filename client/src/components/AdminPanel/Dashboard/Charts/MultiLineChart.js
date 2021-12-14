import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { loader } from '../../../../store/loader';
import * as dashboardService from '../../../../services/dashboardService'; 


export const MultiLineChart = () => {
    const [size , setSize] = useState(130);

    const disaptch = useDispatch();

    const [data , setData] = useState({});
    const [ordersDelivered , setOrdersDelivered] = useState([]);
    const [ordersReceived , setOrdersReceived] = useState([]);
    const [earnings , setEarnings] = useState([]);

    useEffect(() => { 
        disaptch(loader());
        dashboardService.getAllDiscounts()
        .then(res => {
            disaptch(loader());
            setData(res);
            setOrdersDelivered(Array.from({length: res.ordersDelivered}, (x, index) => index + 1));
            setOrdersReceived(Array.from({length: res.ordersReceived}, (x, index) => index + 1));
            setEarnings(Array.from({length: res.earnings}, (x, index) => index + 1));

        })
        .catch(error => { 
            disaptch(loader());
            console.log(error);
        })
    },[])





    return (
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: "Earnings",
                            data: earnings,
                            fill: false,
                            borderColor: "orange",
                            tension: 0.1,

                        },
                        {
                            label: "Order delivered",
                            data: ordersDelivered,
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

