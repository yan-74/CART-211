import './Dashboard.css'
/* CHART CODE REFERENCED FROM: https://github.com/reactchartjs/react-chartjs-2/blob/master/sandboxes/line/default/App.tsx */
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard({ stats, statsHistory }) {
    const chartData = {
        labels: statsHistory.map((point) => `Q${point.scenario}`),
        datasets: [
            {
                label: 'Revenue',
                data: statsHistory.map((point) => point.revenue),
                borderColor: '#4de3ff',
                backgroundColor: '#4de3ff',
            },
            {
                label: 'Investor Trust',
                data: statsHistory.map((point) => point.investorTrust),
                borderColor: '#ff5d8f',
                backgroundColor: '#ff5d8f',
                tension: 0.3,
            },
            {
                label: 'User Satisfaction',
                data: statsHistory.map((point) => point.userSatisfaction),
                borderColor: '#aeb2ff',
                backgroundColor: '#aeb2ff',
                tension: 0.3,
            },
            {
                label: 'User Traffic',
                data: statsHistory.map((point) => point.userTraffic),
                borderColor: '#f5c542',
                backgroundColor: '#f5c542',
                tension: 0.3,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                    boxHeight: 8,
                    color: '#e8f1ff',
                    font: {
                        family: 'VT323, monospace',
                        size: 15,
                    }
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#e8f1ff',
                    font: {
                        family: 'VT323',
                        size: 20,
                    },
                },
                grid: {
                    color: 'rgba(232, 241, 255, 0.5)',
                },
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    color: '#e8f1ff',
                    font: {
                        family: 'VT323',
                        size: 20,
                    },
                },
                grid: {
                    color: 'rgba(232, 241, 255, 0.5)',
                },
            },
        },
    }

    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <div className="bar_chart">
                    <p>COMPANY PERFORMANCE</p>
                    <div className="stat">
                        <label htmlFor="revenue">Revenue</label>
                        <progress id="revenue" value={stats.revenue} min="0" max="100" />
                        <span>{stats.revenue}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="investor-trust">Investor Trust</label>
                        <progress id="investor-trust" value={stats.investorTrust} min="0" max="100" />
                        <span>{stats.investorTrust}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="user-satisfaction">User Satisfaction</label>
                        <progress id="user-satisfaction" value={stats.userSatisfaction} min="0" max="100" />
                        <span>{stats.userSatisfaction}%</span>
                    </div>
                    <div className="stat">
                        <label htmlFor="user-traffic">User Traffic</label>
                        <progress id="user-traffic" value={stats.userTraffic} min="0" max="100" />
                        <span>{stats.userTraffic}%</span>
                    </div>
                </div>
                <hr></hr>
                <div className="line_chart">
                    <p>PERFORMANCE HISTORY</p>
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
            <div className="dashboard-right">
                <div className="company_outlook">
                    <p>COMPANY OUTLOOK</p>
                    <div className="status_card">
                        <h3 className="status_text">Current Status: Stable</h3>
                        <p>Revenue is up, but user satisfaction is down. Long-term retention is at risk.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="message_board">
                    <p>DEPARTMENT MESSAGES</p>
                    <div className="message_item">
                        <div className="message_header">
                            <h4>Finance</h4>
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                    <div className="message_item">
                        <div className="message_header">
                            <h4>Investor Relations</h4>
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                    <div className="message_item">
                        <div className="message_header">
                            <h4>Product</h4>    
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                    <div className="message_item">
                        <div className="message_header">
                            <h4>Marketing</h4>
                            <p className="message_time">9:55 am</p>
                        </div>
                        <p>We need to improve our social media presence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
