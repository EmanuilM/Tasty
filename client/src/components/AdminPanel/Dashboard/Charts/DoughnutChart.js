import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {
    return (
        <Doughnut
        data={{
            labels:[
                "red",
                "blue",
                "yellow"
            ],
            datasets : [{
                label:"TEST",
                data:[300,70,100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
                  hoverOffset: 4
            }]
        }}

         />
    )
}