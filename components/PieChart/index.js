import { useState, useEffect } from "react"
import styles from './PieChart.module.css'

import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


export default function PieChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'New Brunswick', 'Saskatchewan', 'Newfoundland and Labrador', 'Nove Scotia', 'Prince Edward Island', 'Yukon', 'Northwest Territories', 'Nunavut'],
            datasets: [
                {
                    data: [40.4, 26.0, 12.8, 8.1, 4.2, 2.2, 2.2, 1.8, 1.8, 0.3, 0.1, 0.1, 0.0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(57, 186, 103, 0.2)',
                        'rgba(246, 41, 12, 0.2)',
                        'rgba(81, 37, 174, 0.2)',
                        'rgba(236, 97, 179, 0.2)',
                        'rgba(255, 162, 0, 0.2)',
                        'rgba(24, 184, 148, 0.2)',
                        'rgba(46, 134, 222, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(57, 186, 103, 1)',
                        'rgba(246, 41, 12, 1)',
                        'rgba(81, 37, 174, 1)',
                        'rgba(236, 97, 179, 1)',
                        'rgba(255, 162, 0, 1)',
                        'rgba(24, 184, 148, 1)',
                        'rgba(46, 134, 222, 1)',
                    ],
                    borderWidth: 1
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
                    text: "Total, All Industries, Share of Employment, Canada (%)",
                    font: {
                        size: 24,
                    },
                    color: '#ffffff'
                },
                maintainAspectRatio: false,
                responsive: true,
            }
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Pie data={chartData} options={chartOptions} />
            </div>
        </>
    )
}