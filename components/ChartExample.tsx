import React from 'react'
import { Line, Bar, Bubble } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
)

const ChartExample = ({ type }: { type: string }) => {
    const data = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    }

    const options = {
        responsive: true,
    }

    return (
        <div>
            {type === 'line' && (<Line options={options} data={data} />)}
            {type === 'bar' && (<Bar options={options} data={data} />)}
            {type === 'bubble' && (<Bubble options={options} data={data} />)}
        </div>        
    )
}

export default ChartExample