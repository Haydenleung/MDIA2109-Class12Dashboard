import { useState, useEffect } from "react"
import styles from './LineChart.module.css'

import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function LineChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            datasets: [
                {
                    label: 'Employment (Number of Jobs)',
                    data: [270752, 276801, 286276, 313250, 308346, 312120, 325405, 322781, 295211, 314257],
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    backgroundColor: 'rgba(255,255,255, 0.4)',
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: "Total, All Industries, Employment, Canada",
                    font: {
                        size: 24,
                    },
                    color: '#ffffff',
                },
                line: {
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
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    )
}