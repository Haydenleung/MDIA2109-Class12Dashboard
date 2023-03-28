import { useState, useEffect } from "react"
import styles from './StackBarChart.module.css'

import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function StacckBarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["15-24", "25-54", "55+"],
            datasets: [
                {
                    label: 'Men',
                    data: [10.7, 4.3, 4.2],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 1)'
                },
                {
                    label: 'Women',
                    data: [9.1, 4.3, 4.0],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: "Unemployment Rate by Age Group and Sex (%)",
                    font: {
                        size: 24,
                    },
                    color: '#ffffff'
                },
                maintainAspectRatio: false,
                responsive: true,
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}